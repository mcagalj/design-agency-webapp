import { Suspense } from "react";
import { notFound } from "next/navigation";
import { loadBlogSearchParams } from "@/lib/blog-search-params";
import { BlogFilters } from "./_components/BlogFilters";
import { PostsList } from "./_components/PostsList";
import { PostSkeletonList } from "./_components/PostSkeletonList";
import { Metadata } from "next";
import { SearchParams } from "nuqs";
import { Pagination } from "../_components/Pagination";

export interface BlogPostProps {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface BlogPageSearchParams {
  searchParams: Promise<SearchParams>;
}

const PAGE_SIZE = parseInt(process.env.PAGE_SIZE || "5", 10);
const BASE_API_URL = process.env.BASE_API_URL;

export const metadata: Metadata = { title: "Blog" };

async function fetchUsers(): Promise<{ id: number; name: string }[]> {
  const response = await fetch(`${BASE_API_URL}/users`, {
    next: { revalidate: 60 },
  });
  return response.json();
}

async function getPostsCount(userId?: number) {
  const url =
    userId && userId > 0
      ? `${BASE_API_URL}/posts/?userId=${userId}&_limit=1`
      : `${BASE_API_URL}/posts/?_limit=1`;
  const data = await fetch(url, { method: "HEAD", next: { revalidate: 60 } });
  const count = data.headers.get("x-total-count") || "1";
  return parseInt(count, 10);
}

export default async function Page({ searchParams }: BlogPageSearchParams) {
  const { page, userId } = await loadBlogSearchParams(searchParams);

  const [users, totalPosts] = await Promise.all([
    fetchUsers(),
    getPostsCount(userId > 0 ? userId : undefined),
  ]);

  const totalPages = Math.max(1, Math.ceil(totalPosts / PAGE_SIZE));
  if (page > totalPages) notFound();

  const userMap = new Map(users.map((u) => [u.id, u.name]));

  return (
    <main>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <header className="text-center mb-12">
            <h1 className="text-6xl font-extrabold tracking-tight mb-4">
              Blog
            </h1>
            <p className="text-gray-600 text-lg">Explore posts below</p>
          </header>

          <BlogFilters users={users} />

          <Suspense key={`${userId}-${page}`} fallback={<PostSkeletonList />}>
            <PostsList
              page={page}
              userId={userId > 0 ? userId : undefined}
              userMap={userMap}
            />
          </Suspense>

          <div className="flex justify-center mt-8">
            <Pagination currentPage={page} totalPages={totalPages} />
          </div>
        </div>
      </div>
    </main>
  );
}
