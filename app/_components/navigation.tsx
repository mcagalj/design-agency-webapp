"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import Hamburger from "./Hamburger";
import { useState } from "react";
import { cn } from "@/lib/cn";

type Page = {
  title: string;
  path: `/${string}`;
};

/**
 * pages is an array of objects representing the pages in the web app.
 * Each object contains a title and a path. This array is used to generate the navigation menu.
 *
 * We hardcode pages here, but in real app you want to store and read this information from some external source (e.g. CMS, DB, config file, etc).
 */
const pages: Page[] = [
  { title: "Home", path: "/" },
  {
    title: "Showcase",
    path: "/showcase",
  },
  {
    title: "Blog",
    path: "/blog",
  },
  {
    title: "About us",
    path: "/about",
  },
  {
    title: "Contact us",
    path: "/contact",
  },
];

/**
 * Render a page list item.
 * @param page - { title, path } for the page
 * @param index - array index used for key
 * @returns JSX element for a list item
 */
function processPage(page: Page, index: number, currentPath?: string) {
  // Check if the current path matches the page path
  // For home page ("/"), use exact match to avoid matching all routes
  // For other pages, check if current path starts with the page path to support nested routes
  const isActive =
    page.path === "/"
      ? currentPath === page.path
      : currentPath?.startsWith(page.path);

  return (
    <li key={index}>
      <Link href={page.path}>
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

export function Navigation() {
  const currentPath = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen((prev) => !prev);
  console.log("Navigation render: isOpen =", isOpen);
  return (
    <nav className="flex flex-1 justify-between items-center p-8">
      <Link href="/">
        <Logo />
      </Link>
      <ul className="hidden md:flex justify-between space-x-4 text-sm uppercase text-brand-text-strong">
        {pages.map((page, index) => processPage(page, index, currentPath))}
      </ul>
      <Hamburger isOpen={isOpen} onClick={toggleMenu} />
    </nav>
  );
}
