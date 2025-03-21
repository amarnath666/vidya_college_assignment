import prisma from '@/prisma';
import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcrypt';

const saltRounds = 10; // Number of rounds for bcrypt to use

export async function POST(req: NextRequest) {
    console.log("Received POST request to /api/userForm");
    try {
        // Parse the request body as JSON
        const body = await req.json();

        const { fullName, gender, email, password, dob, state, city, specialization, cvSubsidy, courseDetails } = body;

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        const newUser = await prisma.user.create({
            data: {
                fullName,
                gender,
                email,
                password: hashedPassword, // Save the hashed password
                dob,
                state,
                city,
                specialization,
                cvSubsidy,
                courseDetails: {
                    create: courseDetails,
                },
            },
        });

        console.log("User created successfully:", newUser);

        // Return the created user as the response
        return NextResponse.json(newUser, { status: 201 });
    } catch (error) {
        console.error("Error creating user:", error);
        // Return an error response with status code 500 (Internal Server Error)
        return NextResponse.json({ error: "An unexpected error occurred" }, { status: 500 });
    }
}

export async function GET(req: NextRequest) {
    try {
        // Fetch users from the database excluding the password field
        const users = await prisma.user.findMany({
            select: {
                id: true,
                fullName: true,
                gender: true,
                email: true,
                dob: true,
                state: true,
                city: true,
                specialization: true,
                cvSubsidy: true,
                courseDetails: true, 
            },
        });

        // Return the user data as JSON
        return NextResponse.json(users, { status: 200 });
    } catch (error) {
        console.error("Error fetching users:", error);
        return NextResponse.json({ error: "An unexpected error occurred" }, { status: 500 });
    }
}
