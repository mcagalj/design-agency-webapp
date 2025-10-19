import { parseAsInteger, createLoader } from "nuqs/server"

export const blogSearchParams = {
  page: parseAsInteger.withDefault(1),
  userId: parseAsInteger.withDefault(0), // 0 means show all users
}

export const loadBlogSearchParams = createLoader(blogSearchParams)
