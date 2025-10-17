import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { Pagination } from "../_components/Pagination";
import { notFound } from "next/navigation";

export interface BlogPostProps {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export const metadata: Metadata = {
  title: "Blog",
};

const PAGE_SIZE = 6;
export const BASE_API_URL = "https://jsonplaceholder.typicode.com";

// Get the total number of posts; please note this feature is JSONPlaceholder API specific.
async function getPostsCount(): Promise<number> {
  // https://jsonplaceholder.typicode.com/posts/?_start=5&_limit=8
  const data = await fetch(`${BASE_API_URL}/posts/?_limit=1`, {
    method: "HEAD",
  });
  const count = data.headers.get("x-total-count") || "1";
  return parseInt(count, 10);
}

// Fetch paginated posts
async function fetchPosts(
  page: number,
  pageSize: number
): Promise<BlogPostProps[]> {
  const start = (page - 1) * pageSize;
  const response = await fetch(
    `${BASE_API_URL}/posts?_start=${start}&_limit=${pageSize}`
  );
  return response.json();
}

function processPost(post: BlogPostProps) {
  return (
    <li key={post.id} className="list-none">
      <Link
        href={`/blog/${post.id}`}
        className="group block bg-white hover:shadow-lg border-1 border-gray-300 hover:border-gray-400 rounded-lg p-5 transition-all duration-200"
      >
        <div className="flex items-center gap-4">
          {/* Icon placeholder */}
          <div className="flex-shrink-0 w-10 h-10 rounded bg-gray-200 border border-gray-300"></div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold capitalize text-lg text-gray-900 mb-0.5">
              {post.title}
            </h3>
            <p className="text-sm text-gray-500">Post #{post.id}</p>
          </div>

          {/* Arrow */}
          <ArrowRight className="mr-2 h-4 w-4 text-gray-600 group-hover:text-gray-900 transition-colors duration-200" />
        </div>
      </Link>
    </li>
  );
}

interface BlogPageSearchParams {
  searchParams?: {
    page?: string;
  };
}

export default async function Page({ searchParams }: BlogPageSearchParams) {
  const params = await searchParams;
  console.log("searchParams:", params);

  const pageStr = params?.page ?? "1";
  const page = Math.max(1, parseInt(pageStr, 10));
  const totalPosts = await getPostsCount();
  const totalPages = Math.max(1, Math.ceil(totalPosts / PAGE_SIZE));
  if (page > totalPages) notFound();
  const posts = await fetchPosts(page, PAGE_SIZE);

  return (
    <main>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-6xl font-extrabold tracking-tight mb-4">
              Blog
            </h1>
            <p className="text-gray-600 text-lg">Explore posts below</p>
          </div>
          {/* Blog Posts Grid */}
          <div className="space-y-4">
            <ul className="space-y-3">{posts.map(processPost)}</ul>
          </div>
          {/* Pagination */}
          <div className="flex justify-center mt-8">
            <Pagination
              currentPage={page}
              totalPages={totalPages}
              generatePageHref={(p) => `/blog?page=${p}`}
            />
          </div>{" "}
        </div>
      </div>
    </main>
  );
}
