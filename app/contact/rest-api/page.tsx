"use client";

import { useState, FormEvent } from "react";
import Button from "@/app/_components/ui/Button";
import Link from "next/link";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface ApiResponse {
  success?: boolean;
  message?: string;
  error?: string;
  data?: {
    id: number;
    name: string;
    email: string;
    createdAt: Date;
  };
}

export default function RestApiContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [responseMessage, setResponseMessage] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setResponseMessage("");

    try {
      // Call the REST API endpoint
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data: ApiResponse = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit form");
      }

      setStatus("success");
      setResponseMessage(data.message || "Thank you for your message!");

      // Reset form
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus("error");
      setResponseMessage(
        error instanceof Error
          ? error.message
          : "An error occurred. Please try again."
      );
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-10">
      <div className="w-full max-w-2xl">
        <div className="mb-8">
          <Link
            href="/contact"
            className="text-blue-600 hover:underline text-sm mb-4 inline-block"
          >
            ← Back to Contact Options
          </Link>
          <h1 className="text-6xl font-extrabold tracking-tight mb-4">
            Contact Us
          </h1>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4">
            <p className="text-sm font-semibold text-blue-700">
              REST API Approach
            </p>
            <p className="text-sm text-blue-600 mt-1">
              This form uses a traditional REST API endpoint (POST /api/contact)
              to submit data.
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              disabled={status === "loading"}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              disabled={status === "loading"}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
              placeholder="john@example.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              disabled={status === "loading"}
              rows={6}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed resize-none"
              placeholder="Your message here..."
            />
          </div>

          <Button
            type="submit"
            disabled={status === "loading"}
            className="w-full"
          >
            {status === "loading" ? "Sending..." : "Send Message"}
          </Button>
        </form>

        {/* Status Messages */}
        {status === "success" && (
          <div className="mt-6 p-4 bg-green-50 border-l-4 border-green-500 rounded">
            <p className="text-green-700 font-medium">✓ Success!</p>
            <p className="text-green-600 text-sm mt-1">{responseMessage}</p>
          </div>
        )}

        {status === "error" && (
          <div className="mt-6 p-4 bg-red-50 border-l-4 border-red-500 rounded">
            <p className="text-red-700 font-medium">✗ Error</p>
            <p className="text-red-600 text-sm mt-1">{responseMessage}</p>
          </div>
        )}

        {/* Technical Details */}
        <div className="mt-12 p-6 bg-gray-50 rounded-lg">
          <h2 className="text-xl font-bold mb-4">How This Works (REST API)</h2>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex items-start">
              <span className="mr-2">1.</span>
              <span>
                Form uses{" "}
                <code className="bg-gray-200 px-1 rounded">fetch()</code> to
                make HTTP POST request to{" "}
                <code className="bg-gray-200 px-1 rounded">/api/contact</code>
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">2.</span>
              <span>
                API Route Handler validates data and inserts into database
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">3.</span>
              <span>Returns JSON response with success/error status</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">4.</span>
              <span>
                Client-side state management with{" "}
                <code className="bg-gray-200 px-1 rounded">useState</code>
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">5.</span>
              <span>Requires JavaScript - won't work without it</span>
            </li>
          </ul>

          <div className="mt-6 p-4 bg-blue-100 rounded">
            <p className="text-sm font-semibold text-blue-900 mb-2">
              Key Characteristics:
            </p>
            <ul className="text-sm text-blue-800 space-y-1">
              <li>
                • <strong>Client Component</strong> - Uses 'use client'
                directive
              </li>
              <li>
                • <strong>API Layer</strong> - Separate endpoint at /api/contact
              </li>
              <li>
                • <strong>HTTP Communication</strong> - Standard REST API
                pattern
              </li>
              <li>
                • <strong>Manual State</strong> - Loading, error, success states
                managed manually
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
