import prisma from '@/prisma';
import bcrypt from 'bcrypt';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();

    // Check if the admin user exists
    const adminUser = await prisma.admin.findUnique({
      where: { email },
    });

    if (!adminUser) {
      return NextResponse.json({ error: "Invalid email or password" }, { status: 401 });
    }

    // Check if the password matches
    const passwordMatch = await bcrypt.compare(password, adminUser.password);
    if (!passwordMatch) {
      return NextResponse.json({ error: "Invalid email or password" }, { status: 401 });
    }

    // If authentication is successful
    return NextResponse.json({ message: "Sign-in successful" }, { status: 200 });
  } catch (error) {
    console.error('Error during admin sign-in:', error);
    return NextResponse.json({ error: "An unexpected error occurred" }, { status: 500 });
  }
}
