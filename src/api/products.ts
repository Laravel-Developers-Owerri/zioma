/**
 * Products API
 * Handles all product-related API calls
 * 
 * USAGE: Uncomment the API calls when backend is ready
 * Currently using local data from src/data/products.ts
 */

import { api, ApiResponse, PaginatedResponse } from "./client";
import { Product } from "@/data/products";

// API Endpoints
const ENDPOINTS = {
  LIST: "/products",
  DETAIL: (id: string) => `/products/${id}`,
  BY_CATEGORY: (category: string) => `/products?category=${category}`,
};

/**
 * Fetch all products
 * @returns Promise<Product[]>
 */
export async function fetchProducts(): Promise<Product[]> {
  // TODO: Uncomment when backend is ready
  // const response = await api.get<Product[]>(ENDPOINTS.LIST);
  // return response.data;
  
  // For now, return empty array - data comes from local file
  throw new Error("API not implemented - use local data");
}

/**
 * Fetch paginated products
 * @param page - Page number
 * @param limit - Items per page
 */
export async function fetchProductsPaginated(
  page: number = 1,
  limit: number = 10
): Promise<PaginatedResponse<Product>> {
  // TODO: Uncomment when backend is ready
  // const response = await api.get<PaginatedResponse<Product>>(
  //   `${ENDPOINTS.LIST}?page=${page}&limit=${limit}`
  // );
  // return response;
  
  throw new Error("API not implemented - use local data");
}

/**
 * Fetch single product by ID
 * @param id - Product ID
 */
export async function fetchProductById(id: string): Promise<Product> {
  // TODO: Uncomment when backend is ready
  // const response = await api.get<Product>(ENDPOINTS.DETAIL(id));
  // return response.data;
  
  throw new Error("API not implemented - use local data");
}

/**
 * Fetch products by category
 * @param category - Category name
 */
export async function fetchProductsByCategory(category: string): Promise<Product[]> {
  // TODO: Uncomment when backend is ready
  // const response = await api.get<Product[]>(ENDPOINTS.BY_CATEGORY(category));
  // return response.data;
  
  throw new Error("API not implemented - use local data");
}
