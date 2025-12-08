"use client";

import { useQueryState, parseAsString } from "nuqs";

interface Category {
  id: string;
  label: string;
}

interface ProductFiltersProps {
  categories: Category[];
}

export function ProductFilters({ categories }: ProductFiltersProps) {
  const [categoryId, setCategoryId] = useQueryState(
    "category",
    parseAsString.withOptions({ shallow: false })
  );
  const [, setPage] = useQueryState("page");

  const handleCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const newCategoryId = event.target.value;
    setCategoryId(newCategoryId === "all" ? null : newCategoryId);
    setPage("1"); // Reset to first page when filter changes
  };

  const clearFilter = () => {
    setCategoryId(null);
    setPage("1");
  };

  return (
    <div className="flex items-center gap-3">
      <label
        htmlFor="category-filter"
        className="text-sm font-medium text-gray-700 w-32 text-right"
      >
        Filter by category:
      </label>
      <select
        id="category-filter"
        value={categoryId || "all"}
        onChange={handleCategoryChange}
        className="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm min-w-[200px]"
      >
        <option value="all">All Categories</option>
        {categories.map((category) => (
          <option key={category.id} value={category.id}>
            {category.label.charAt(0).toUpperCase() + category.label.slice(1)}
          </option>
        ))}
      </select>
      {categoryId && (
        <button
          onClick={clearFilter}
          className="text-sm text-blue-600 hover:text-blue-800 underline"
        >
          Clear filter
        </button>
      )}
    </div>
  );
}
