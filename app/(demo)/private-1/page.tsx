import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export default async function Page() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!session) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-600">Not authenticated</h1>
          <p className="text-gray-600 mt-2">
            Please log in to access this page.
          </p>
        </div>
      </div>
    );
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-10 bg-brand-fill-bg">
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-lg p-8">
        <div className="mb-6">
          <h1 className="text-4xl font-heading font-bold text-brand-black mb-2">
            Private Area 1
          </h1>
          <div className="h-1 w-20 bg-brand rounded"></div>
        </div>

        <div className="bg-brand-fill-bg rounded-sm p-6 mb-6">
          <p className="text-lg text-brand-text-weak">
            Welcome,{" "}
            <span className="text-brand font-semibold">
              {session.user.name || session.user.email}
            </span>
            !
          </p>
        </div>

        <div className="space-y-4 text-brand-text-weak">
          <p>You have successfully accessed this protected route.</p>
          <div className="bg-green-50 border-l-4 border-green-500 p-4">
            <p className="text-sm font-semibold text-green-700">
              Protected Route
            </p>
            <p className="text-sm text-green-600 mt-1">
              This page is protected by the (demo) route group layout.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
