import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog",
};

// This is typically fetched from an API
const posts = [
  {
    id: 12,
    title: "Getting Started with Next.js",
  },
  {
    id: 3,
    title: "Understanding Dynamic Routes",
  },
  {
    id: 56,
    title: "Building Modern Web Apps",
  },
  {
    id: 7,
    title: "TypeScript Best Practices",
  },
  {
    id: 89,
    title: "Performance Optimization Tips",
  },
];

function processPost(post: (typeof posts)[0]) {
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
            <h3 className="font-semibold text-lg text-gray-900 mb-0.5">
              {post.title}
            </h3>
            <p className="text-sm text-gray-500">Post #{post.id}</p>
          </div>

          {/* Arrow */}
          <div className="flex-shrink-0 text-gray-400 group-hover:text-gray-700 transition-colors">
            <span className="text-xl">→</span>
          </div>
        </div>
      </Link>
    </li>
  );
}

export default function Page() {
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
        </div>
      </div>
    </main>
  );
}
