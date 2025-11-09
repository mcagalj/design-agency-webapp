import { db } from "@/db";
import { pages } from "@/db/schema";

export async function getPages() {
  const data = await db.select().from(pages);
  return data;
}
