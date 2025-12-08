import Image from "next/image";
import Link from "next/link";
import { getProducts, getProductsCount, getCategories } from "@/lib/api";
import { Pagination } from "../_components/Pagination";
import { ProductSort } from "./_components/ProductSort";
import { ProductFilters } from "./_components/ProductFilters";
import { ProductSearch } from "./_components/ProductSearch";
import { notFound } from "next/navigation";
import { SearchParams } from "nuqs";

const PAGE_SIZE = parseInt(process.env.PAGE_SIZE || "6", 10);

interface ProductsPageProps {
  searchParams: Promise<SearchParams>;
}

export default async function ProductsPage({
  searchParams,
}: ProductsPageProps) {
  const params = await searchParams;
  const page = typeof params.page === "string" ? parseInt(params.page, 10) : 1;
  const sortBy = typeof params.sortBy === "string" ? params.sortBy : "name";
  const categoryId =
    typeof params.category === "string" ? params.category : undefined;
  const searchQuery =
    typeof params.search === "string" ? params.search : undefined;

  const [data, productsCount, categories] = await Promise.all([
    getProducts(page, PAGE_SIZE, sortBy, categoryId, searchQuery),
    getProductsCount(categoryId, searchQuery),
    getCategories(),
  ]);

  console.log("Total number of products:", productsCount);

  const totalPages = Math.max(1, Math.ceil(productsCount / PAGE_SIZE));
  if (page > totalPages) notFound();

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-7xl mx-auto">
          <header className="text-center mb-12">
            <h1 className="text-6xl font-extrabold tracking-tight mb-4">
              Products
            </h1>
            <p className="text-gray-600 text-lg">
              Discover our amazing collection
            </p>
          </header>

          <ProductSearch />
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12">
            <ProductFilters categories={categories} />
            <ProductSort />
          </div>

          {data.items.length === 0 ? (
            <div className="text-center py-16">
              <div className="bg-white rounded-xl shadow-lg p-12 max-w-md mx-auto">
                <div className="text-6xl mb-4">🔍</div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  No products found
                </h2>
                <p className="text-gray-600 mb-6">
                  {searchQuery
                    ? `No results for "${searchQuery}". Try adjusting your search or filters.`
                    : "No products match your current filters."}
                </p>
                <Link
                  href="/products"
                  className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Clear all filters
                </Link>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {data.items.map((product) => (
                <Link
                  key={product.sys.id}
                  href={`/products/${product.sys.id}`}
                  className="block"
                >
                  <article className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
                    <div className="relative w-full h-64 bg-gray-100">
                      <Image
                        fill
                        src={`https:${product.fields.heroImage?.fields.file?.url}`}
                        alt={
                          product.fields.heroImage?.fields.title ||
                          product.fields.name
                        }
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      {product.fields.categories &&
                        product.fields.categories.length > 0 && (
                          <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                            {product.fields.categories
                              .filter((category) => category?.fields?.label)
                              .map((category) => (
                                <span
                                  key={category!.sys.id}
                                  className="px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full shadow-md"
                                >
                                  {category!
                                    .fields!.label.charAt(0)
                                    .toUpperCase() +
                                    category!.fields!.label.slice(1)}
                                </span>
                              ))}
                          </div>
                        )}
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex justify-between items-start mb-3">
                        <h2 className="text-2xl font-bold text-gray-900">
                          {product.fields.name}
                        </h2>
                        <p className="text-xl font-semibold text-blue-600 ml-2 whitespace-nowrap">
                          {product.fields.price} {product.fields.currencyCode}
                        </p>
                      </div>
                      <p className="text-gray-600 leading-relaxed flex-grow">
                        {product.fields.description}
                      </p>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          )}

          <div className="flex justify-center">
            <Pagination currentPage={page} totalPages={totalPages} />
          </div>
        </div>
      </div>
    </main>
  );
}
