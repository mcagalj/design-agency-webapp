// app/blog/_components/BlogPostItem.tsx
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BlogPostProps } from "../page";

interface BlogPostItemProps {
  post: BlogPostProps;
  userName?: string;
}

export function BlogPostItem({ post, userName }: BlogPostItemProps) {
  return (
    <li className="list-none">
      <Link
        href={`/blog/${post.id}`}
        className="group block bg-white hover:shadow-lg border border-gray-300 hover:border-gray-400 rounded-lg p-5 transition-all duration-200"
      >
        <div className="flex items-center gap-4">
          <div className="flex-shrink-0 w-10 h-10 rounded bg-gray-200 border border-gray-300"></div>
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold capitalize text-lg text-gray-900 mb-0.5">
              {post.title}
            </h3>
            <p className="text-sm text-gray-500">
              Post #{post.id} by {userName || `User ${post.userId}`}
            </p>
          </div>
          <ArrowRight className="mr-2 h-4 w-4 text-gray-600 group-hover:text-gray-900 transition-colors duration-200" />
        </div>
      </Link>
    </li>
  );
}
