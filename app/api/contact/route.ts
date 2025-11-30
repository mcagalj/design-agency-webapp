import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/db';
import { contactSubmissions } from '@/db/schema';

// POST /api/contact - Create a new contact submission
export async function POST(request: NextRequest) {
  try {
    // Parse the request body
    const body = await request.json();
    const { name, email, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields', fields: { name, email, message } },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Validate field lengths
    if (name.trim().length < 2) {
      return NextResponse.json(
        { error: 'Name must be at least 2 characters long' },
        { status: 400 }
      );
    }

    if (message.trim().length < 10) {
      return NextResponse.json(
        { error: 'Message must be at least 10 characters long' },
        { status: 400 }
      );
    }

    // Insert into database
    const [submission] = await db.insert(contactSubmissions).values({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      message: message.trim(),
    }).returning();

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: 'Contact submission received successfully',
        data: {
          id: submission.id,
          name: submission.name,
          email: submission.email,
          createdAt: submission.createdAt,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error creating contact submission:', error);
    return NextResponse.json(
      { error: 'Internal server error', message: 'Failed to process submission' },
      { status: 500 }
    );
  }
}
