"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto text-center">
          <Link
            href="/products"
            className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-200 mb-8"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to products
          </Link>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Oops! Something went wrong
            </h1>
            <p className="text-gray-600 mb-6">
              We couldn't load this product. Please try again.
            </p>
            <div className="flex gap-4 justify-center">
              <button
                onClick={reset}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                Try again
              </button>
              <Link
                href="/products"
                className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors duration-200"
              >
                Back to products
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
