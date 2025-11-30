'use server';

import { db } from '@/db';
import { contactSubmissions } from '@/db/schema';

type ActionState = {
  success?: boolean;
  error?: string;
  message?: string;
  fieldErrors?: {
    name?: string;
    email?: string;
    message?: string;
  };
  data?: {
    id: number;
    name: string;
  };
};

export async function submitContact(
  prevState: ActionState,
  formData: FormData
): Promise<ActionState> {
  try {
    // Extract form data
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;

    // Field-specific validation
    const fieldErrors: ActionState['fieldErrors'] = {};

    if (!name || name.trim().length === 0) {
      fieldErrors.name = 'Name is required';
    } else if (name.trim().length < 2) {
      fieldErrors.name = 'Name must be at least 2 characters long';
    }

    if (!email || email.trim().length === 0) {
      fieldErrors.email = 'Email is required';
    } else {
      // Basic email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        fieldErrors.email = 'Invalid email format';
      }
    }

    if (!message || message.trim().length === 0) {
      fieldErrors.message = 'Message is required';
    } else if (message.trim().length < 10) {
      fieldErrors.message = 'Message must be at least 10 characters long';
    }

    // If there are any field errors, return them
    if (Object.keys(fieldErrors).length > 0) {
      return {
        success: false,
        error: 'Please fix the errors below',
        fieldErrors,
      };
    }

    // Insert into database
    const [submission] = await db.insert(contactSubmissions).values({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      message: message.trim(),
    }).returning();

    return {
      success: true,
      message: 'Thank you for your message! We will get back to you soon.',
      data: {
        id: submission.id,
        name: submission.name,
      },
    };
  } catch (error) {
    console.error('Error submitting contact form:', error);
    return {
      success: false,
      error: 'Failed to submit form. Please try again.',
    };
  }
}
