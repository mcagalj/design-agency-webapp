import { BlogPostItem } from "./BlogPostItem";
import type { BlogPostProps } from "../page";

const PAGE_SIZE = parseInt(process.env.PAGE_SIZE || "5", 10);
const BASE_API_URL = process.env.BASE_API_URL;

async function fetchPosts(
  page: number,
  pageSize: number,
  userId?: number
): Promise<BlogPostProps[]> {
  const start = (page - 1) * pageSize;
  const userQuery = userId ? `&userId=${userId}` : "";
  const response = await fetch(
    `${BASE_API_URL}/posts?_start=${start}&_limit=${pageSize}${userQuery}`,
    { next: { revalidate: 60 } }
  );
  return response.json();
}

type PostsListProps = {
  page: number;
  userId?: number;
  userMap: Map<number, string>;
};

export async function PostsList({ page, userId, userMap }: PostsListProps) {
  const posts = await fetchPosts(page, PAGE_SIZE, userId);
  return (
    <>
      <ul className="space-y-3">
        {posts.map((post) => (
          <BlogPostItem
            key={post.id}
            post={post}
            userName={userMap.get(post.userId)}
          />
        ))}
      </ul>
    </>
  );
}
