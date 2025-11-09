import { db } from "@/db";
import { pages } from "@/db/schema";
import { eq, asc } from "drizzle-orm";

export async function getPages() {
  const data = await db
    .select({
      id: pages.id,
      title: pages.title,
      path: pages.path,
    })
    .from(pages)
    .where(eq(pages.includeInProd, true))
    .orderBy(asc(pages.displayOrder), asc(pages.id));
  return data;
}
