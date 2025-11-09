"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import Hamburger from "./Hamburger";
import { useState } from "react";
import { cn } from "@/lib/cn";
import { useAuth } from "../_context/AuthContext";
import { pages as pagesSchema } from "@/db/schema";

type Page = typeof pagesSchema.$inferSelect;

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
  const { user, login, logout } = useAuth();

  // Filter pages to include only those marked for production
  const productionPages = pages.filter((page) => page.includeInProd);

  // Demo login handler
  const handleLogin = () => {
    login({ username: "jdoe", email: "jdoe@example.com" });
  };

  return (
    <nav className="flex flex-1 justify-between items-center p-8 border-b border-brand-stroke-weak">
      <Link href="/">
        <Logo />
      </Link>
      {/* Hidden on mobile */}
      <ul className="hidden md:flex justify-between space-x-4 text-sm uppercase text-brand-text-strong">
        {productionPages.map((page, index) =>
          processPage(page, index, currentPath)
        )}
      </ul>
      <div className="flex items-center space-x-4">
        {user ? (
          <>
            <span className="text-normal text-brand">{user.username}</span>
            <button
              className="px-2 py-2 uppercase text-normal rounded bg-brand text-white hover:bg-brand-stroke-strong"
              onClick={logout}
            >
              Logout
            </button>
          </>
        ) : (
          <button
            className="px-2 py-2 uppercase text-normal rounded bg-brand text-white hover:bg-brand-stroke-strong"
            onClick={handleLogin}
          >
            Login
          </button>
        )}
        {/* Visible on mobile */}
        <Hamburger isOpen={isOpen} onClick={toggleMenu} />
        <ul
          className={cn(
            "flex md:hidden flex-col absolute top-full left-0 items-center w-full bg-brand-fill-bg p-8 space-y-8 text-sm uppercase text-brand-text-strong border-b border-brand-stroke-weak",
            { hidden: !isOpen }
          )}
        >
          {productionPages.map((page, index) =>
            processPage(page, index, currentPath, toggleMenu)
          )}
        </ul>
      </div>
    </nav>
  );
}
