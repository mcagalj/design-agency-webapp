import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { BASE_API_URL } from "../page";
import type { BlogPostProps as Post } from "../page";
import { Suspense } from "react";

interface BlogPostProps {
  params: { id: string };
}

async function fetchPost(id: string): Promise<Post> {
  const response = await fetch(`${BASE_API_URL}/posts/${id}`);
  if (!response.ok) {
    throw new Error("Failed to fetch post");
  }
  return response.json();
}

function PostSkeleton() {
  return (
    <article className="w-3xl bg-white shadow-lg rounded-lg overflow-hidden p-6 animate-pulse">
      {/* Back link skeleton */}
      <Link
        href="/blog"
        className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-200 mb-6"
      >
        <ArrowLeft className="mr-2 h-4 w-4" /> Back to all posts
      </Link>
      {/* Title skeleton */}
      <div className="h-10 w-2/3 bg-gray-200 rounded mb-4" />
      {/* Body skeleton */}
      <div className="space-y-2">
        <div className="h-4 w-full bg-gray-100 rounded" />
        <div className="h-4 w-5/6 bg-gray-100 rounded" />
      </div>
    </article>
  );
}

async function PostContent({ id }: { id: string }) {
  const post = await fetchPost(id);
  const { title, body } = post;
  return (
    <article className="max-w-3xl bg-white shadow-lg rounded-lg overflow-hidden p-6">
      <Link
        href="/blog"
        className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-200 mb-6"
      >
        <ArrowLeft className="mr-2 h-4 w-4" /> Back to all posts
      </Link>
      <h1 className="text-3xl md:text-4xl capitalize font-extrabold tracking-tight text-gray-900 mb-4">
        {title}
      </h1>
      <p>{body}</p>
    </article>
  );
}

export default async function BlogPost({ params }: BlogPostProps) {
  const { id } = await params;
  return (
    <main className="flex flex-col items-center p-10">
      <Suspense fallback={<PostSkeleton />}>
        <PostContent id={id} />
      </Suspense>
    </main>
  );
}
