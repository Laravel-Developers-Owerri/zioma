/**
 * Content/CMS API
 * Handles site configuration, dynamic pages, and other CMS content
 * 
 * USAGE: Uncomment the API calls when backend is ready
 * Currently using local data from src/data/siteConfig.ts
 */

import { api } from "./client";
import { SiteConfig, NavItem, FooterConfig, PageContent } from "@/data/siteConfig";

// API Endpoints
const ENDPOINTS = {
  SITE_CONFIG: "/content/config",
  NAVIGATION: "/content/navigation",
  FOOTER: "/content/footer",
  PAGE: (slug: string) => `/content/pages/${slug}`,
  TESTIMONIALS: "/content/testimonials",
  ABOUT: "/content/about",
};

/**
 * Fetch site configuration (branding, colors, logo, etc.)
 */
export async function fetchSiteConfig(): Promise<SiteConfig> {
  // TODO: Uncomment when backend is ready
  // const response = await api.get<SiteConfig>(ENDPOINTS.SITE_CONFIG);
  // return response.data;
  
  throw new Error("API not implemented - use local data");
}

/**
 * Fetch navigation items (header menu)
 */
export async function fetchNavigation(): Promise<NavItem[]> {
  // TODO: Uncomment when backend is ready
  // const response = await api.get<NavItem[]>(ENDPOINTS.NAVIGATION);
  // return response.data;
  
  throw new Error("API not implemented - use local data");
}

/**
 * Fetch footer configuration
 */
export async function fetchFooterConfig(): Promise<FooterConfig> {
  // TODO: Uncomment when backend is ready
  // const response = await api.get<FooterConfig>(ENDPOINTS.FOOTER);
  // return response.data;
  
  throw new Error("API not implemented - use local data");
}

/**
 * Fetch dynamic page content by slug
 */
export async function fetchPageContent(slug: string): Promise<PageContent> {
  // TODO: Uncomment when backend is ready
  // const response = await api.get<PageContent>(ENDPOINTS.PAGE(slug));
  // return response.data;
  
  throw new Error("API not implemented - use local data");
}

/**
 * Fetch testimonials
 */
export async function fetchTestimonials() {
  // TODO: Uncomment when backend is ready
  // const response = await api.get<Testimonial[]>(ENDPOINTS.TESTIMONIALS);
  // return response.data;
  
  throw new Error("API not implemented - use local data");
}

/**
 * Fetch about page content
 */
export async function fetchAboutContent() {
  // TODO: Uncomment when backend is ready
  // const response = await api.get<AboutContent>(ENDPOINTS.ABOUT);
  // return response.data;
  
  throw new Error("API not implemented - use local data");
}
