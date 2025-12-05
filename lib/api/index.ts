import { db } from "@/db";
import { pages } from "@/db/schema";
import { eq, asc } from "drizzle-orm";
import cms from "@/cms";
import { TypeNavigationSkeleton } from "@/cms/content-types";


// ===============================
// Fetching data from a database
// using Drizzle ORM.
// (https://drizzle-orm.github.io/drizzle-orm/)
// -------------------------------
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

// =====================================================================================
// Fetching data from Contentful (a headless CMS) using the 'contentful.js' library.
// This library is a wrapper around Contentful Delivery REST API.
// (https://github.com/contentful/contentful.js)
// -------------------------------------------------------------------------------------
export async function getNavigation() {
  // Check https://github.com/contentful/contentful.js/blob/master/ADVANCED.md#link-resolution
  // for more information on "withoutUnresolvableLinks"
  const data = await cms.withoutUnresolvableLinks.getEntries<TypeNavigationSkeleton>({
    content_type: 'navigation',
    query: 'Main navigation',
    select: ["fields"],
  });

  const navItems = data.items[0]?.fields?.navItems
    ?.map(item => item?.fields)
    .filter(fields => fields != null) || [];
  return navItems;
}
