/**
 * API Client Configuration
 * Base configuration for all API calls to the Ziomasoft backend
 */

export const API_BASE_URL = "https://www.ziomasoft.com/backend/api/v1";

export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

/**
 * Generic fetch wrapper with error handling
 * @param endpoint - API endpoint (e.g., '/products')
 * @param options - Fetch options
 */
export async function apiClient<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<ApiResponse<T>> {
  const url = `${API_BASE_URL}${endpoint}`;
  
  const defaultHeaders = {
    "Content-Type": "application/json",
  };

  const config: RequestInit = {
    ...options,
    headers: {
      ...defaultHeaders,
      ...options.headers,
    },
  };

  try {
    const response = await fetch(url, config);
    
    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`API Request failed for ${endpoint}:`, error);
    throw error;
  }
}

// HTTP method helpers
export const api = {
  get: <T>(endpoint: string) => apiClient<T>(endpoint, { method: "GET" }),
  
  post: <T>(endpoint: string, body: unknown) =>
    apiClient<T>(endpoint, {
      method: "POST",
      body: JSON.stringify(body),
    }),
    
  put: <T>(endpoint: string, body: unknown) =>
    apiClient<T>(endpoint, {
      method: "PUT",
      body: JSON.stringify(body),
    }),
    
  delete: <T>(endpoint: string) =>
    apiClient<T>(endpoint, { method: "DELETE" }),
};
