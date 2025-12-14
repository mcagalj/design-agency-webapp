"use client";

import { authClient } from "@/lib/auth/auth-client";
import Button from "@/app/_components/ui/Button";
import Link from "next/link";

type Submission = {
  id: number;
  name: string;
  email: string;
  message: string;
  createdAt: Date;
};

type SubmissionsClientProps = {
  submissions: Submission[];
};

export default function SubmissionsClient({
  submissions,
}: SubmissionsClientProps) {
  const { data: session } = authClient.useSession();

  // Show login prompt if not authenticated
  if (!session) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center p-10">
        <div className="w-full max-w-md text-center">
          <h1 className="text-4xl font-extrabold tracking-tight mb-4">
            Admin Access Required
          </h1>
          <p className="text-gray-600 mb-8">
            Please log in to view contact submissions.
          </p>
          <Link href="/login">
            <Button className="mx-auto">Go to Login</Button>
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="flex min-h-screen flex-col p-10">
      <div className="w-full max-w-6xl mx-auto">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight mb-2">
              Contact Submissions
            </h1>
            <p className="text-gray-600">
              Viewing as: <strong>{session.user.email}</strong>
            </p>
          </div>
          <div className="bg-green-50 border-l-4 border-green-500 p-4">
            <p className="text-sm font-semibold text-green-700">
              Server Component Data Fetching
            </p>
            <p className="text-sm text-green-600 mt-1">
              Data fetched directly in Server Component with Drizzle ORM
            </p>
          </div>
        </div>

        {submissions.length === 0 && (
          <div className="text-center py-12 bg-gray-50 rounded-lg">
            <p className="text-gray-600 text-lg mb-2">No submissions yet</p>
            <p className="text-gray-500 text-sm">
              Contact form submissions will appear here.
            </p>
          </div>
        )}

        {submissions.length > 0 && (
          <>
            <div className="mb-4 text-sm text-gray-600">
              Total submissions: <strong>{submissions.length}</strong>
            </div>

            <div className="space-y-4">
              {submissions.map((submission) => (
                <div
                  key={submission.id}
                  className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">
                        {submission.name}
                      </h3>
                      <a
                        href={`mailto:${submission.email}`}
                        className="text-blue-600 hover:underline text-sm"
                      >
                        {submission.email}
                      </a>
                    </div>
                    <div className="text-right">
                      <span className="text-xs text-gray-500">
                        ID: {submission.id}
                      </span>
                      <p className="text-sm text-gray-600 mt-1">
                        {new Date(submission.createdAt).toLocaleString()}
                      </p>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-4 rounded border-l-4 border-blue-500">
                    <p className="text-sm font-semibold text-gray-700 mb-2">
                      Message:
                    </p>
                    <p className="text-gray-700 whitespace-pre-wrap">
                      {submission.message}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {/* Technical Info */}
        <div className="mt-12 p-6 bg-gray-50 rounded-lg">
          <h2 className="text-xl font-bold mb-4">
            How This Works (Server Component Approach)
          </h2>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex items-start">
              <span className="mr-2 font-bold text-green-600">1.</span>
              <span>
                <strong>Server Component:</strong> Parent page is a Server
                Component that fetches data directly with Drizzle ORM
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 font-bold text-green-600">2.</span>
              <span>
                <strong>Direct DB Access:</strong> No API route or Server Action
                needed for reading data
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 font-bold text-green-600">3.</span>
              <span>
                <strong>Props to Client:</strong> Data passed as props to this
                Client Component for interactivity
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 font-bold text-green-600">4.</span>
              <span>
                <strong>Client Component:</strong> Handles authentication UI and
                displays data
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 font-bold text-green-600">5.</span>
              <span>
                <strong>Automatic Refresh:</strong> Data automatically fresh on
                each page load
              </span>
            </li>
          </ul>

          <div className="mt-6 p-4 bg-green-100 rounded border-l-4 border-green-600">
            <p className="text-sm font-semibold text-green-900 mb-2">
              ✅ Why Server Components for Data Fetching?
            </p>
            <ul className="text-sm text-green-800 space-y-1">
              <li>
                • <strong>Performance:</strong> Data fetched on server, no
                client-side loading states
              </li>
              <li>
                • <strong>Security:</strong> Database credentials never exposed
                to client
              </li>
              <li>
                • <strong>SEO:</strong> Data available for initial HTML render
              </li>
              <li>
                • <strong>Simpler:</strong> No need for useEffect, useState for
                loading
              </li>
              <li>
                • <strong>Best Practice:</strong> Server Actions are for
                mutations, not queries
              </li>
            </ul>
          </div>

          <div className="mt-4 p-4 bg-blue-50 rounded border-l-4 border-blue-500">
            <p className="text-sm font-semibold text-blue-900 mb-2">
              Production Considerations:
            </p>
            <ul className="text-sm text-blue-800 space-y-1">
              <li>
                • Replace mock auth with real authentication (NextAuth.js,
                Auth0, etc.)
              </li>
              <li>• Add server-side authentication checks before DB query</li>
              <li>• Implement pagination for large datasets</li>
              <li>• Add search and filter capabilities</li>
              <li>• Consider caching strategies (revalidate)</li>
              <li>• Use Suspense boundaries for better loading UX</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
