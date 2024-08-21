import prisma from '@/prisma';
import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcrypt';

export async function POST(req: NextRequest) {
    console.log("Received POST request to /api/signin");
    try {
        // Parse the request body as JSON
        const { email, password } = await req.json();

        // Find the user by email
        const user = await prisma.user.findUnique({
            where: { email },
        });

        if (!user) {
            // If the user does not exist, return a 404 error
            return NextResponse.json({ error: "User not found" }, { status: 404 });
        }

        // Compare the provided password with the stored hashed password
        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            // If the password is incorrect, return a 401 error
            return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
        }

        // Return a success response with the user data
        return NextResponse.json({ message: "Sign in successful", user }, { status: 200 });
    } catch (error) {
        console.error("Error signing in user:", error);
        // Return an error response with status code 500 (Internal Server Error)
        return NextResponse.json({ error: "An unexpected error occurred" }, { status: 500 });
    }
}
