"use client";
import { authClient } from "@/lib/auth/auth-client";

export default function HelloBanner() {
  const { data: session } = authClient.useSession();
  if (!session) return null;
  return (
    <p className="mt-6 text-2xl font-semibold">
      Hello,{" "}
      <span className="text-brand">
        {session.user.name || session.user.email}
      </span>
      ! Welcome back.
    </p>
  );
}
