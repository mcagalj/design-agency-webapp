"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Optionally log error
    // console.error(error);
  }, [error]);
  return (
    <main className="flex flex-col items-center p-10">
      <article className="max-w-3xl bg-white shadow-lg rounded-lg overflow-hidden p-6 ">
        <h2 className="text-2xl font-bold text-red-900 mb-4">Post Not Found</h2>
        <p className="text-gray-700 mb-6">
          Sorry, the post you are looking for does not exist or could not be
          loaded.
        </p>
        <button
          onClick={reset}
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 text-gray-800 font-semibold transition-colors"
        >
          Try Again
        </button>
        <div className="mt-6">
          <Link
            href="/blog"
            className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-200 mb-6"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to all posts
          </Link>
        </div>
      </article>
    </main>
  );
}
