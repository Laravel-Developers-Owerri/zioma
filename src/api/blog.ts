/**
 * Blog API
 * Handles all blog-related API calls
 * 
 * USAGE: Uncomment the API calls when backend is ready
 * Currently using local data from src/data/blog.ts
 */

import { api, PaginatedResponse } from "./client";
import { BlogPost } from "@/data/blog";

// API Endpoints
const ENDPOINTS = {
  LIST: "/blog",
  DETAIL: (slug: string) => `/blog/${slug}`,
  BY_CATEGORY: (category: string) => `/blog?category=${category}`,
  RECENT: "/blog?limit=3&sort=date:desc",
};

/**
 * Fetch all blog posts
 */
export async function fetchBlogPosts(): Promise<BlogPost[]> {
  // TODO: Uncomment when backend is ready
  // const response = await api.get<BlogPost[]>(ENDPOINTS.LIST);
  // return response.data;
  
  throw new Error("API not implemented - use local data");
}

/**
 * Fetch paginated blog posts
 */
export async function fetchBlogPostsPaginated(
  page: number = 1,
  limit: number = 10
): Promise<PaginatedResponse<BlogPost>> {
  // TODO: Uncomment when backend is ready
  // const response = await api.get<PaginatedResponse<BlogPost>>(
  //   `${ENDPOINTS.LIST}?page=${page}&limit=${limit}`
  // );
  // return response;
  
  throw new Error("API not implemented - use local data");
}

/**
 * Fetch single blog post by slug
 */
export async function fetchBlogPostBySlug(slug: string): Promise<BlogPost> {
  // TODO: Uncomment when backend is ready
  // const response = await api.get<BlogPost>(ENDPOINTS.DETAIL(slug));
  // return response.data;
  
  throw new Error("API not implemented - use local data");
}

/**
 * Fetch recent blog posts (for homepage)
 */
export async function fetchRecentBlogPosts(): Promise<BlogPost[]> {
  // TODO: Uncomment when backend is ready
  // const response = await api.get<BlogPost[]>(ENDPOINTS.RECENT);
  // return response.data;
  
  throw new Error("API not implemented - use local data");
}

/**
 * Fetch blog posts by category
 */
export async function fetchBlogPostsByCategory(category: string): Promise<BlogPost[]> {
  // TODO: Uncomment when backend is ready
  // const response = await api.get<BlogPost[]>(ENDPOINTS.BY_CATEGORY(category));
  // return response.data;
  
  throw new Error("API not implemented - use local data");
}
