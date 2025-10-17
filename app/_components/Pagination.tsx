import React from "react";
import Link from "next/link";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  generatePageHref: (page: number) => string;
  className?: string;
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  generatePageHref,
  className = "",
}) => {
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  return (
    <div className={`w-full max-w-2xl mb-6 ${className}`}>
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-4 flex justify-between items-center">
        <Link
          href={generatePageHref(currentPage - 1)}
          className={`px-4 py-2 rounded-md transition-colors duration-200 ${
            isFirstPage
              ? "bg-gray-100 text-gray-400 cursor-not-allowed"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
          aria-disabled={isFirstPage}
          tabIndex={isFirstPage ? -1 : 0}
        >
          Prev
        </Link>

        <p className="text-gray-700">
          Page{" "}
          <span className="font-semibold text-gray-900">{currentPage}</span> of{" "}
          <span className="font-semibold text-gray-900">{totalPages}</span>
        </p>

        <Link
          href={generatePageHref(currentPage + 1)}
          className={`px-4 py-2 rounded-md transition-colors duration-200 ${
            isLastPage
              ? "bg-gray-100 text-gray-400 cursor-not-allowed"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
          aria-disabled={isLastPage}
          tabIndex={isLastPage ? -1 : 0}
        >
          Next
        </Link>
      </div>
    </div>
  );
};
