"use client";

import { useActionState } from "react";
import { submitContact } from "@/app/_actions/contact";
import Button from "@/app/_components/ui/Button";
import Link from "next/link";

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

export default function ServerActionsContactPage() {
  const [state, formAction, isPending] = useActionState<ActionState, FormData>(
    submitContact,
    {}
  );

  return (
    <main className="flex min-h-screen flex-col items-center p-10">
      <div className="w-full max-w-2xl">
        <div className="mb-8">
          <Link
            href="/contact"
            className="text-green-600 hover:underline text-sm mb-4 inline-block"
          >
            ← Back to Contact Options
          </Link>
          <h1 className="text-6xl font-extrabold tracking-tight mb-4">
            Contact Us
          </h1>
          <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-4">
            <p className="text-sm font-semibold text-green-700">
              Server Actions Approach
            </p>
            <p className="text-sm text-green-600 mt-1">
              This form uses Next.js Server Actions for direct server-side
              processing.
            </p>
          </div>
        </div>

        <form action={formAction} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              disabled={isPending}
              className={`w-full px-4 py-2 border rounded-md focus:ring-2 disabled:bg-gray-100 disabled:cursor-not-allowed ${
                state.fieldErrors?.name
                  ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                  : "border-gray-300 focus:ring-green-500 focus:border-transparent"
              }`}
              placeholder="John Doe"
              aria-invalid={state.fieldErrors?.name ? "true" : "false"}
              aria-describedby={
                state.fieldErrors?.name ? "name-error" : undefined
              }
            />
            {state.fieldErrors?.name && (
              <p id="name-error" className="mt-1 text-sm text-red-600">
                {state.fieldErrors.name}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              disabled={isPending}
              className={`w-full px-4 py-2 border rounded-md focus:ring-2 disabled:bg-gray-100 disabled:cursor-not-allowed ${
                state.fieldErrors?.email
                  ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                  : "border-gray-300 focus:ring-green-500 focus:border-transparent"
              }`}
              placeholder="john@example.com"
              aria-invalid={state.fieldErrors?.email ? "true" : "false"}
              aria-describedby={
                state.fieldErrors?.email ? "email-error" : undefined
              }
            />
            {state.fieldErrors?.email && (
              <p id="email-error" className="mt-1 text-sm text-red-600">
                {state.fieldErrors.email}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              required
              disabled={isPending}
              rows={6}
              className={`w-full px-4 py-2 border rounded-md focus:ring-2 disabled:bg-gray-100 disabled:cursor-not-allowed resize-none ${
                state.fieldErrors?.message
                  ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                  : "border-gray-300 focus:ring-green-500 focus:border-transparent"
              }`}
              placeholder="Your message here..."
              aria-invalid={state.fieldErrors?.message ? "true" : "false"}
              aria-describedby={
                state.fieldErrors?.message ? "message-error" : undefined
              }
            />
            {state.fieldErrors?.message && (
              <p id="message-error" className="mt-1 text-sm text-red-600">
                {state.fieldErrors.message}
              </p>
            )}
          </div>

          <Button type="submit" disabled={isPending} className="w-full">
            {isPending ? "Sending..." : "Send Message"}
          </Button>
        </form>

        {/* Status Messages */}
        {state.success && (
          <div className="mt-6 p-4 bg-green-50 border-l-4 border-green-500 rounded">
            <p className="text-green-700 font-medium">✓ Success!</p>
            <p className="text-green-600 text-sm mt-1">{state.message}</p>
          </div>
        )}

        {state.error && !state.fieldErrors && (
          <div className="mt-6 p-4 bg-red-50 border-l-4 border-red-500 rounded">
            <p className="text-red-700 font-medium">✗ Error</p>
            <p className="text-red-600 text-sm mt-1">{state.error}</p>
          </div>
        )}

        {state.error && state.fieldErrors && (
          <div className="mt-6 p-4 bg-red-50 border-l-4 border-red-500 rounded">
            <p className="text-red-700 font-medium">✗ {state.error}</p>
            <p className="text-red-600 text-sm mt-1">
              Please check the highlighted fields above.
            </p>
          </div>
        )}

        {/* Technical Details */}
        <div className="mt-12 p-6 bg-gray-50 rounded-lg">
          <h2 className="text-xl font-bold mb-4">
            How This Works (Server Actions)
          </h2>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex items-start">
              <span className="mr-2">1.</span>
              <span>
                Form uses{" "}
                <code className="bg-gray-200 px-1 rounded">action</code> prop
                with server action
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">2.</span>
              <span>
                <code className="bg-gray-200 px-1 rounded">useActionState</code>{" "}
                hook manages form state and pending status
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">3.</span>
              <span>
                Server action validates data and inserts directly into database
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">4.</span>
              <span>
                No API route needed - direct server-to-database communication
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">5.</span>
              <span>Works without JavaScript (progressive enhancement)</span>
            </li>
          </ul>

          <div className="mt-6 p-4 bg-green-100 rounded">
            <p className="text-sm font-semibold text-green-900 mb-2">
              Key Characteristics:
            </p>
            <ul className="text-sm text-green-800 space-y-1">
              <li>
                • <strong>Server Action</strong> - Function marked with 'use
                server'
              </li>
              <li>
                • <strong>No API Layer</strong> - Direct function call, no REST
                endpoint
              </li>
              <li>
                • <strong>FormData API</strong> - Native browser FormData object
              </li>
              <li>
                • <strong>Built-in State</strong> - useActionState handles
                loading/error states
              </li>
              <li>
                • <strong>Progressive Enhancement</strong> - Works even without
                JS enabled
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
