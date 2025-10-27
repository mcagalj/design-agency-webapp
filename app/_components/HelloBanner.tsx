"use client";
import { useAuth } from "../_context/AuthContext";

export default function HelloBanner() {
  const { user } = useAuth();
  if (!user) return null;
  return (
    <p className="mt-6 text-2xl font-semibold">
      Hello, <span className="text-brand">{user.username}</span>! Welcome back.
    </p>
  );
}
