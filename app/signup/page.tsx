"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth/auth-client";
import Button from "@/app/_components/ui/Button";
import Link from "next/link";

export default function SignupPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const { data, error: signUpError } = await authClient.signUp.email({
        email,
        password,
        name,
      });

      if (signUpError) {
        setError(signUpError.message || "Failed to create account");
        setIsLoading(false);
        return;
      }

      if (data) {
        // Redirect to dashboard or home page after successful signup
        router.push("/");
      }
    } catch (err) {
      setError("An unexpected error occurred");
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-brand-fill-bg px-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-heading font-bold text-brand-black mb-2">
            Create Account
          </h1>
          <p className="text-brand-text-weak mb-6">Sign up to get started</p>

          {error && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-sm text-red-600 text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-brand-black mb-1"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-4 py-2 border border-brand-stroke-strong rounded-sm focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent"
                placeholder="John Doe"
                disabled={isLoading}
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-brand-black mb-1"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-2 border border-brand-stroke-strong rounded-sm focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent"
                placeholder="you@example.com"
                disabled={isLoading}
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-brand-black mb-1"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={8}
                className="w-full px-4 py-2 border border-brand-stroke-strong rounded-sm focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent"
                placeholder="••••••••"
                disabled={isLoading}
              />
              <p className="mt-1 text-xs text-brand-text-weak">
                Must be at least 8 characters
              </p>
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              secondary
              className="w-full justify-center"
            >
              {isLoading ? "Creating account..." : "Sign up"}
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-brand-text-weak">
              Already have an account?{" "}
              <Link
                href="/login"
                className="text-brand font-medium hover:underline"
              >
                Log in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
