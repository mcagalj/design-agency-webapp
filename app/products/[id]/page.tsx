import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { getProductById } from "@/lib/api";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";

interface ProductDetailProps {
  params: Promise<{ id: string }>;
}

function ProductSkeleton() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <Link
            href="/products"
            className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-200 mb-8"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to products
          </Link>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden animate-pulse">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
              {/* Image skeleton */}
              <div className="relative h-96 bg-gray-200 rounded-lg" />

              {/* Content skeleton */}
              <div className="space-y-4">
                <div className="h-8 bg-gray-200 rounded w-3/4" />
                <div className="h-6 bg-gray-200 rounded w-1/4" />
                <div className="space-y-2">
                  <div className="h-4 bg-gray-100 rounded w-full" />
                  <div className="h-4 bg-gray-100 rounded w-5/6" />
                  <div className="h-4 bg-gray-100 rounded w-4/6" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

async function ProductContent({ id }: { id: string }) {
  try {
    const product = await getProductById(id);

    if (!product || !product.fields) {
      notFound();
    }

    const richTextOptions = {
      renderNode: {
        [BLOCKS.PARAGRAPH]: (node: any, children: any) => (
          <p className="mb-4 text-gray-700 leading-relaxed">{children}</p>
        ),
        [BLOCKS.HEADING_1]: (node: any, children: any) => (
          <h1 className="text-3xl font-bold mb-4 text-gray-900">{children}</h1>
        ),
        [BLOCKS.HEADING_2]: (node: any, children: any) => (
          <h2 className="text-2xl font-bold mb-3 text-gray-900">{children}</h2>
        ),
        [BLOCKS.UL_LIST]: (node: any, children: any) => (
          <ul className="list-disc ml-6 mb-4 space-y-2">{children}</ul>
        ),
        [BLOCKS.OL_LIST]: (node: any, children: any) => (
          <ol className="list-decimal ml-6 mb-4 space-y-2">{children}</ol>
        ),
      },
    };

    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 py-8 md:py-12">
          <div className="max-w-7xl mx-auto">
            <Link
              href="/products"
              className="inline-flex items-center text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors duration-200 mb-6"
            >
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to products
            </Link>

            <article className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 md:gap-12 p-6 md:p-10">
                {/* Main Image - Takes more space */}
                <div className="lg:col-span-3">
                  <div className="relative h-[400px] md:h-[600px] bg-gray-100 rounded-xl overflow-hidden shadow-lg">
                    <Image
                      fill
                      src={`https:${product.fields.heroImage?.fields.file?.url}`}
                      alt={
                        product.fields.heroImage?.fields.title ||
                        product.fields.name
                      }
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 60vw"
                      priority
                    />
                    {product.fields.categories &&
                      product.fields.categories.length > 0 && (
                        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                          {product.fields.categories
                            .filter((category) => category?.fields?.label)
                            .map((category) => (
                              <span
                                key={category!.sys.id}
                                className="px-4 py-1.5 bg-blue-600 text-white text-sm font-semibold rounded-full shadow-lg backdrop-blur-sm"
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
                </div>

                {/* Product Info - Sidebar */}
                <div className="lg:col-span-2 flex flex-col">
                  <div className="mb-6">
                    <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
                      {product.fields.name}
                    </h1>
                    <div className="inline-block px-4 py-2 bg-blue-50 rounded-lg border-2 border-blue-200">
                      <span className="text-4xl font-bold text-blue-600">
                        {product.fields.price}
                      </span>
                      <span className="text-xl font-semibold text-blue-500 ml-2">
                        {product.fields.currencyCode}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-8">
                    <div>
                      <h2 className="text-xs uppercase tracking-wider font-bold text-gray-500 mb-3">
                        Overview
                      </h2>
                      <p className="text-base text-gray-700 leading-relaxed">
                        {product.fields.description}
                      </p>
                    </div>

                    {product.fields.richTextDescription && (
                      <div className="border-t border-gray-200 pt-8">
                        <h2 className="text-xs uppercase tracking-wider font-bold text-gray-500 mb-4">
                          Product Details
                        </h2>
                        <div className="prose prose-sm max-w-none text-gray-700">
                          {documentToReactComponents(
                            product.fields.richTextDescription,
                            richTextOptions
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Additional Images Gallery */}
              {product.fields.images && product.fields.images.length > 0 && (
                <div className="border-t border-gray-200 bg-gray-50 p-6 md:p-10">
                  <h2 className="text-xs uppercase tracking-wider font-bold text-gray-500 mb-6">
                    Image Gallery
                  </h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {product.fields.images
                      .filter((image) => image?.fields?.file?.url)
                      .map((image, index) => (
                        <div
                          key={image!.sys.id}
                          className="relative h-48 md:h-64 bg-gray-200 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group"
                        >
                          <Image
                            fill
                            src={`https:${image!.fields!.file!.url}`}
                            alt={
                              image!.fields!.title ||
                              `Product image ${index + 1}`
                            }
                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                            sizes="(max-width: 768px) 50vw, 25vw"
                          />
                        </div>
                      ))}
                  </div>
                </div>
              )}
            </article>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error fetching product:", error);
    notFound();
  }
}

export default async function ProductDetailPage({
  params,
}: ProductDetailProps) {
  const { id } = await params;

  return (
    <Suspense fallback={<ProductSkeleton />}>
      <ProductContent id={id} />
    </Suspense>
  );
}
