"use client";

import { useQueryState, parseAsString } from "nuqs";
import { Search, X } from "lucide-react";
import { useState, useEffect } from "react";

export function ProductSearch() {
  const [searchQuery, setSearchQuery] = useQueryState(
    "search",
    parseAsString.withOptions({ shallow: false })
  );
  const [, setPage] = useQueryState("page");
  const [inputValue, setInputValue] = useState(searchQuery || "");

  useEffect(() => {
    setInputValue(searchQuery || "");
  }, [searchQuery]);

  const handleSearch = (value: string) => {
    setSearchQuery(value || null);
    setPage("1"); // Reset to first page when searching
  };

  const handleClear = () => {
    setInputValue("");
    setSearchQuery(null);
    setPage("1");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSearch(inputValue);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto mb-6">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Search products by name or description..."
          className="w-full pl-12 pr-12 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
        />
        {inputValue && (
          <button
            type="button"
            onClick={handleClear}
            className="absolute inset-y-0 right-0 flex items-center pr-4 text-gray-400 hover:text-gray-600"
          >
            <X className="h-5 w-5" />
          </button>
        )}
      </div>
      {searchQuery && (
        <div className="mt-2 text-sm text-gray-600">
          Searching for: <span className="font-semibold">"{searchQuery}"</span>
          <button
            type="button"
            onClick={handleClear}
            className="ml-2 text-blue-600 hover:text-blue-800 underline"
          >
            Clear search
          </button>
        </div>
      )}
    </form>
  );
}
