import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { BASE_API_URL } from "../page";
import type { BlogPostProps as Post } from "../page";

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

export default async function BlogPost({ params }: BlogPostProps) {
  const { id } = await params;
  const post = await fetchPost(id);
  const { title, body } = post;

  return (
    <main className="flex flex-col items-center p-10">
      <article className="max-w-3xl bg-white shadow-lg rounded-lg overflow-hidden p-6">
        <Link
          href="/blog"
          className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-200 mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to all posts
        </Link>

        <h1 className="text-3xl md:text-4xl capitalize font-extrabold tracking-tight text-gray-900 mb-4">
          Post {id}: {title}
        </h1>

        <p>{body}</p>
      </article>
    </main>
  );
}
