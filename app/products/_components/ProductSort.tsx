"use client";

import { useQueryState, parseAsString } from "nuqs";

export function ProductSort() {
  const [sortBy, setSortBy] = useQueryState(
    "sortBy",
    parseAsString.withDefault("name").withOptions({ shallow: false })
  );
  const [, setPage] = useQueryState("page");

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newSortBy = event.target.value;
    setSortBy(newSortBy);
    setPage("1"); // Reset to first page when sorting changes
  };

  return (
    <div className="flex items-center justify-center gap-3 mb-8">
      <label
        htmlFor="sort-select"
        className="text-sm font-medium text-gray-700"
      >
        Sort by:
      </label>
      <select
        id="sort-select"
        value={sortBy}
        onChange={handleSortChange}
        className="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
      >
        <option value="name">Name (A-Z)</option>
        <option value="-name">Name (Z-A)</option>
        <option value="price">Price (Low to High)</option>
        <option value="-price">Price (High to Low)</option>
      </select>
    </div>
  );
}
