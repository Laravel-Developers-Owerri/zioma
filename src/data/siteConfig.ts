/**
 * Site Configuration Data
 * This file contains all site-wide configuration that can be managed from the backend
 * 
 * NOTE: In production, this data will come from the API
 * See: src/api/content.ts for API integration
 */

import logo from "@/assets/logo.png";

// Type Definitions
export interface NavItem {
  id: string;
  label: string;
  href: string;
  type: "link" | "dropdown";
  order: number;
  children?: NavItem[];
  isExternal?: boolean;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  address: string;
  city: string;
  country: string;
}

export interface FooterColumn {
  title: string;
  links: { label: string; href: string }[];
}

export interface FooterConfig {
  columns: FooterColumn[];
  socialLinks: SocialLink[];
  copyright: string;
  tagline: string;
}

export interface BrandConfig {
  name: string;
  tagline: string;
  logo: string;
  favicon?: string;
}

export interface SiteConfig {
  brand: BrandConfig;
  contact: ContactInfo;
  navigation: NavItem[];
  footer: FooterConfig;
}

export interface PageContent {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  content: string;
  isPublished: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  role: string;
  content: string;
  rating: number;
  avatar?: string;
}

// Site Configuration Data
export const siteConfig: SiteConfig = {
  brand: {
    name: "Ziomasoft",
    tagline: "Building intelligent digital solutions for the future",
    logo: logo,
  },
  contact: {
    email: "info@ziomasoft.com",
    phone: "+234 800 123 4567",
    address: "123 Tech Hub Plaza",
    city: "Lagos",
    country: "Nigeria",
  },
  navigation: [
    { id: "home", label: "Home", href: "/", type: "link", order: 1 },
    { id: "about", label: "About", href: "/about", type: "link", order: 2 },
    { 
      id: "services", 
      label: "Services", 
      href: "/services", 
      type: "dropdown", 
      order: 3,
      children: [] // Populated from services data
    },
    { 
      id: "products", 
      label: "Products", 
      href: "/products", 
      type: "dropdown", 
      order: 4,
      children: [] // Populated from products data
    },
    { id: "blog", label: "Blog", href: "/blog", type: "link", order: 5 },
    { id: "career", label: "Career", href: "/career", type: "link", order: 6 },
    { id: "contact", label: "Contact", href: "/contact", type: "link", order: 7 },
  ],
  footer: {
    columns: [
      {
        title: "Quick Links",
        links: [
          { label: "About Us", href: "/about" },
          { label: "Services", href: "/services" },
          { label: "Products", href: "/products" },
          { label: "Blog", href: "/blog" },
          { label: "Career", href: "/career" },
        ],
      },
      {
        title: "Services",
        links: [
          { label: "Software Development", href: "/services/custom-software" },
          { label: "Cloud Solutions", href: "/services/cloud-solutions" },
          { label: "SaaS Products", href: "/services/saas-development" },
          { label: "AI Automation", href: "/services/ai-automation" },
        ],
      },
    ],
    socialLinks: [
      { platform: "LinkedIn", url: "https://linkedin.com/company/ziomasoft", icon: "linkedin" },
      { platform: "Twitter", url: "https://twitter.com/ziomasoft", icon: "twitter" },
      { platform: "GitHub", url: "https://github.com/ziomasoft", icon: "github" },
    ],
    copyright: "© {year} Ziomasoft Technologies Limited. All rights reserved.",
    tagline: "Building intelligent digital solutions for the future.",
  },
};

// Testimonials Data
export const testimonialsData: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    company: "TechCorp Inc.",
    role: "CTO",
    content: "Ziomasoft transformed our outdated systems into a modern, efficient platform. Their expertise and dedication are unmatched.",
    rating: 5,
  },
  {
    id: "2",
    name: "Michael Chen",
    company: "StartupHub",
    role: "Founder",
    content: "The AI automation tools they built saved us countless hours. Best investment we've made for our business.",
    rating: 5,
  },
  {
    id: "3",
    name: "Emily Rodriguez",
    company: "Enterprise Solutions",
    role: "Product Manager",
    content: "Professional, reliable, and innovative. Ziomasoft delivered beyond our expectations on every front.",
    rating: 5,
  },
  {
    id: "4",
    name: "David Okonkwo",
    company: "FinanceFlow",
    role: "CEO",
    content: "Their cloud solutions have revolutionized how we handle data. Security and performance exceeded our requirements.",
    rating: 5,
  },
];

// Hooks for data access (will use API when ready)
export const useSiteConfig = () => {
  // TODO: Replace with API call
  // const { data, isLoading, error } = useQuery(['siteConfig'], fetchSiteConfig);
  
  return {
    config: siteConfig,
    isLoading: false,
    error: null,
  };
};

export const useTestimonials = () => {
  // TODO: Replace with API call
  // const { data, isLoading, error } = useQuery(['testimonials'], fetchTestimonials);
  
  return {
    testimonials: testimonialsData,
    isLoading: false,
    error: null,
  };
};
