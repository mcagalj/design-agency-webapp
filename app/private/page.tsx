import { redirect } from "next/navigation";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";

export default async function PrivatePage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/login?callbackUrl=/private");
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-10">
      <div className="w-full max-w-4xl">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-heading font-bold text-brand-black mb-4">
            Private Page
          </h1>
          <p className="text-brand-text-weak mb-6">
            This page is only accessible to authenticated users.
          </p>

          <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-6">
            <p className="text-sm font-semibold text-green-700 mb-2">
              Server Component Authentication
            </p>
            <p className="text-sm text-green-600">
              Authentication is verified server-side using Better Auth's{" "}
              <code className="bg-green-100 px-1 rounded">
                auth.api.getSession()
              </code>
            </p>
          </div>

          <div className="bg-brand-fill-bg rounded-sm p-6">
            <h2 className="text-xl font-heading font-bold mb-4">
              Session Information
            </h2>
            <div className="space-y-2 text-sm">
              <div className="flex gap-2">
                <span className="font-semibold text-brand">Email:</span>
                <span>{session?.user.email}</span>
              </div>
              <div className="flex gap-2">
                <span className="font-semibold text-brand">Name:</span>
                <span>{session?.user.name || "Not provided"}</span>
              </div>
              <div className="flex gap-2">
                <span className="font-semibold text-brand">User ID:</span>
                <span className="font-mono text-xs">{session?.user.id}</span>
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-blue-50 border-l-4 border-blue-500">
            <p className="text-sm text-blue-700">
              <strong>Note:</strong> If you're seeing this page, you are
              successfully authenticated. Try logging out and accessing this
              page again - you'll be redirected to the login page.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
