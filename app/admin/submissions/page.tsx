import { db } from "@/db";
import { contactSubmissions } from "@/db/schema";
import { desc } from "drizzle-orm";
import SubmissionsClient from "./SubmissionsClient";

// Server Component - fetches data directly
export default async function AdminSubmissionsPage() {
  // Fetch submissions directly in Server Component
  const submissions = await db
    .select()
    .from(contactSubmissions)
    .orderBy(desc(contactSubmissions.createdAt));

  // Pass data to Client Component for interactivity (auth check, UI)
  return <SubmissionsClient submissions={submissions} />;
}
