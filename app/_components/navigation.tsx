"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import Hamburger from "./Hamburger";
import { useState } from "react";
import { cn } from "@/lib/cn";
import { authClient } from "@/lib/auth/auth-client";
// import { pages as pagesSchema } from "@/db/schema";
import { TypeNavItem } from "@/cms/content-types";

// type Page = Omit<
//   typeof pagesSchema.$inferSelect,
//   "includeInProd" | "displayOrder"
// >;

// This is essentially the same as if we had written:
//
// type Page = {
//   title: string;
//   path: string;
//   includeInProd?: boolean;
// };
//
// The difference is that the type is generated from the Contentful schema.
type Page = TypeNavItem<"WITHOUT_UNRESOLVABLE_LINKS">["fields"];

/**
 * Render a page list item.
 * @param page - { title, path } for the page
 * @param index - array index used for key
 * @param currentPath - current pathname to determine active state
 * @param onClickHandler - optional click handler for closing menu
 * @returns JSX element for a list item
 */
function processPage(
  page: Page,
  index: number,
  currentPath?: string,
  onClickHandler?: () => void
) {
  // Check if the current path matches the page path
  // For home page ("/"), use exact match to avoid matching all routes
  // For other pages, check if current path starts with the page path to support nested routes
  const isActive =
    page.path === "/"
      ? currentPath === page.path
      : currentPath?.startsWith(page.path);

  return (
    <li key={index}>
      <Link href={page.path} onClick={onClickHandler}>
        <span
          className={cn(
            "border rounded-sm border-transparent px-4 py-3 whitespace-nowrap hover:text-white hover:bg-brand",
            {
              "text-brand border-brand": isActive,
            }
          )}
        >
          {page.title}
        </span>
      </Link>
    </li>
  );
}

export function Navigation({ pages }: { pages: Page[] }) {
  const currentPath = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen((prev) => !prev);
  const { data: session } = authClient.useSession();

  const handleLogout = async () => {
    await authClient.signOut();
  };

  return (
    <nav className="flex flex-1 justify-between items-center p-8 border-b border-brand-stroke-weak">
      <Link href="/">
        <Logo />
      </Link>
      {/* Hidden on mobile */}
      <ul className="hidden md:flex justify-between space-x-4 text-sm uppercase text-brand-text-strong">
        {pages.map((page, index) => processPage(page, index, currentPath))}
      </ul>
      <div className="flex items-center space-x-4">
        {session ? (
          <>
            <span className="text-normal text-brand">
              {session.user.name || session.user.email}
            </span>
            <button
              className="px-2 py-2 uppercase text-normal rounded bg-brand text-white hover:bg-brand-stroke-strong"
              onClick={handleLogout}
            >
              Logout
            </button>
          </>
        ) : (
          <Link
            href="/login"
            className="px-2 py-2 uppercase text-normal rounded bg-brand text-white hover:bg-brand-stroke-strong"
          >
            Login
          </Link>
        )}
        {/* Visible on mobile */}
        <Hamburger isOpen={isOpen} onClick={toggleMenu} />
        <ul
          className={cn(
            "flex md:hidden flex-col absolute top-full left-0 items-center w-full bg-brand-fill-bg p-8 space-y-8 text-sm uppercase text-brand-text-strong border-b border-brand-stroke-weak",
            { hidden: !isOpen }
          )}
        >
          {pages.map((page, index) =>
            processPage(page, index, currentPath, toggleMenu)
          )}
        </ul>
      </div>
    </nav>
  );
}
