import { db } from "@/db";
import { pages } from "@/db/schema";
import { eq, asc } from "drizzle-orm";
import cms from "@/cms";
import { TypeNavigationSkeleton, TypeProductSkeleton, TypeCategorySkeleton } from "@/cms/content-types";


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

export async function getCategories() {
  const data = await cms.withoutUnresolvableLinks.getEntries<TypeCategorySkeleton>({
    content_type: 'category',
    select: ["fields.label", "sys.id"],
  });

  return data.items.map(item => ({
    id: item.sys.id,
    label: item.fields.label,
  }));
}

export async function getProducts(
  page: number = 1,
  pageSize: number = 6,
  sortBy: string = 'name',
  categoryId?: string
) {
  const skip = (page - 1) * pageSize;

  // Map sortBy to Contentful field format
  // Contentful uses 'fields.fieldName' for ordering
  // Prefix with '-' for descending order
  const orderField = sortBy.startsWith('-')
    ? `-fields.${sortBy.substring(1)}`
    : `fields.${sortBy}`;

  const query: any = {
    content_type: 'product',
    skip,
    limit: pageSize,
    order: [orderField] as any,
  };

  // Add category filter if provided
  if (categoryId) {
    query['fields.categories.sys.id'] = categoryId;
  }

  const data = await cms.withoutUnresolvableLinks.getEntries<TypeProductSkeleton>(query);

  return data;
}

export async function getProductsCount(categoryId?: string) {
  const query: any = {
    content_type: 'product',
    limit: 1,
  };

  // Add category filter if provided
  if (categoryId) {
    query['fields.categories.sys.id'] = categoryId;
  }

  const data = await cms.withoutUnresolvableLinks.getEntries<TypeProductSkeleton>(query);

  return data.total;
}

export async function getProductById(id: string) {
  const data = await cms.withoutUnresolvableLinks.getEntry<TypeProductSkeleton>(id);
  return data;
}

