'use server';

import { db } from '@/db';
import { contactSubmissions } from '@/db/schema';
import { z } from 'zod';

// Zod schema for contact form validation
const contactSchema = z.object({
  name: z
    .string()
    .min(1, 'Name is required')
    .min(2, 'Name must be at least 2 characters long')
    .max(100, 'Name must be less than 100 characters')
    .trim()
    .refine((val) => val.length > 0, 'Name cannot be only whitespace'),
  email: z
    .string()
    .min(1, 'Email is required')
    .email('Invalid email format')
    .max(255, 'Email must be less than 255 characters')
    .toLowerCase()
    .trim(),
  message: z
    .string()
    .min(1, 'Message is required')
    .min(10, 'Message must be at least 10 characters long')
    .max(1000, 'Message must be less than 1000 characters')
    .trim()
    .refine((val) => val.length >= 10, 'Message must be at least 10 characters long'),
});

export type ActionState = {
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
    const rawData = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      message: formData.get('message') as string,
    };

    // Validate with Zod
    const result = contactSchema.safeParse(rawData);

    if (!result.success) {
      // Convert Zod errors to field errors
      const fieldErrors: ActionState['fieldErrors'] = {};
      
      result.error.issues.forEach((issue) => {
        const field = issue.path[0] as keyof typeof fieldErrors;
        if (field && !fieldErrors[field]) {
          fieldErrors[field] = issue.message;
        }
      });

      return {
        success: false,
        error: 'Please fix the errors below',
        fieldErrors,
      };
    }

    // Get validated and sanitized data (already trimmed and formatted by Zod)
    const { name, email, message } = result.data;

    // Insert into database
    const [submission] = await db
      .insert(contactSubmissions)
      .values({
        name,
        email,
        message,
      })
      .returning();

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
