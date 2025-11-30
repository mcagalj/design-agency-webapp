import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-10">
      <div className="w-full max-w-4xl">
        <h1 className="text-6xl font-extrabold tracking-tight mb-8">
          Contact Us
        </h1>

        <p className="text-xl text-gray-600 mb-12">
          Choose a form implementation to see the difference between REST API
          and Server Actions approaches.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <Link
            href="/contact/rest-api"
            className="block p-8 border-2 border-gray-300 rounded-lg hover:border-blue-500 hover:shadow-lg transition-all"
          >
            <div className="mb-4">
              <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-sm font-semibold rounded">
                Traditional Approach
              </span>
            </div>
            <h2 className="text-3xl font-bold mb-4">REST API</h2>
            <p className="text-gray-600 mb-4">
              Uses Route Handlers with fetch() calls from the client.
            </p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>✓ Client Component</li>
              <li>✓ API Route Handler</li>
              <li>✓ fetch() HTTP calls</li>
              <li>✓ useState for state</li>
              <li>✗ Requires JavaScript</li>
            </ul>
          </Link>

          <Link
            href="/contact/server-actions"
            className="block p-8 border-2 border-gray-300 rounded-lg hover:border-green-500 hover:shadow-lg transition-all"
          >
            <div className="mb-4">
              <span className="inline-block px-3 py-1 bg-green-100 text-green-700 text-sm font-semibold rounded">
                Modern Approach
              </span>
            </div>
            <h2 className="text-3xl font-bold mb-4">Server Actions</h2>
            <p className="text-gray-600 mb-4">
              Uses Next.js Server Actions with direct database access.
            </p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>✓ Server Functions</li>
              <li>✓ Direct DB access</li>
              <li>✓ Progressive enhancement</li>
              <li>✓ Less boilerplate</li>
              <li>✓ Works without JS</li>
            </ul>
          </Link>
        </div>

        <div className="mt-16 p-8 bg-gray-50 rounded-lg">
          <h2 className="text-2xl font-bold mb-6">Key Differences</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-3 text-blue-700">
                REST API Approach
              </h3>
              <div className="space-y-2 text-sm">
                <p>
                  <strong>Pros:</strong>
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Familiar pattern</li>
                  <li>Can be called externally</li>
                  <li>Clear API contract</li>
                </ul>
                <p className="mt-3">
                  <strong>Cons:</strong>
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>More boilerplate</li>
                  <li>Extra network layer</li>
                  <li>Requires JavaScript</li>
                </ul>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-3 text-green-700">
                Server Actions Approach
              </h3>
              <div className="space-y-2 text-sm">
                <p>
                  <strong>Pros:</strong>
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Less code to write</li>
                  <li>Direct DB access</li>
                  <li>Progressive enhancement</li>
                  <li>Better security</li>
                </ul>
                <p className="mt-3">
                  <strong>Cons:</strong>
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Only for same app</li>
                  <li>Newer pattern</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
