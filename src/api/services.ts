/**
 * Services API
 * Handles all service-related API calls
 * 
 * USAGE: Uncomment the API calls when backend is ready
 * Currently using local data from src/data/services.ts
 */

import { api, ApiResponse } from "./client";
import { Service } from "@/data/services";

// API Endpoints
const ENDPOINTS = {
  LIST: "/services",
  DETAIL: (id: string) => `/services/${id}`,
};

/**
 * Fetch all services
 * @returns Promise<Service[]>
 */
export async function fetchServices(): Promise<Service[]> {
  // TODO: Uncomment when backend is ready
  // const response = await api.get<Service[]>(ENDPOINTS.LIST);
  // return response.data;
  
  throw new Error("API not implemented - use local data");
}

/**
 * Fetch single service by ID
 * @param id - Service ID
 */
export async function fetchServiceById(id: string): Promise<Service> {
  // TODO: Uncomment when backend is ready
  // const response = await api.get<Service>(ENDPOINTS.DETAIL(id));
  // return response.data;
  
  throw new Error("API not implemented - use local data");
}
