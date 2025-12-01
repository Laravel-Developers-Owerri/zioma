/**
 * SEO Component
 * Handles meta tags, structured data, and SEO optimization
 */

import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  canonical?: string;
  noIndex?: boolean;
  structuredData?: object;
}

const SEO = ({
  title,
  description,
  keywords,
  ogImage = "/og-image.jpg",
  ogType = "website",
  canonical,
  noIndex = false,
  structuredData,
}: SEOProps) => {
  const siteName = "Ziomasoft";
  const fullTitle = title.includes(siteName) ? title : `${title} | ${siteName}`;

  useEffect(() => {
    // Update document title
    document.title = fullTitle;

    // Helper function to update meta tags
    const updateMetaTag = (name: string, content: string, property?: boolean) => {
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let meta = document.querySelector(selector) as HTMLMetaElement;
      
      if (!meta) {
        meta = document.createElement("meta");
        if (property) {
          meta.setAttribute("property", name);
        } else {
          meta.setAttribute("name", name);
        }
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", content);
    };

    // Standard meta tags
    updateMetaTag("description", description);
    if (keywords) {
      updateMetaTag("keywords", keywords);
    }

    // Open Graph tags
    updateMetaTag("og:title", fullTitle, true);
    updateMetaTag("og:description", description, true);
    updateMetaTag("og:type", ogType, true);
    updateMetaTag("og:site_name", siteName, true);
    if (ogImage) {
      updateMetaTag("og:image", ogImage, true);
    }

    // Twitter Card tags
    updateMetaTag("twitter:card", "summary_large_image");
    updateMetaTag("twitter:title", fullTitle);
    updateMetaTag("twitter:description", description);
    if (ogImage) {
      updateMetaTag("twitter:image", ogImage);
    }

    // Robots meta tag
    if (noIndex) {
      updateMetaTag("robots", "noindex, nofollow");
    } else {
      updateMetaTag("robots", "index, follow");
    }

    // Canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (canonical) {
      if (!canonicalLink) {
        canonicalLink = document.createElement("link");
        canonicalLink.setAttribute("rel", "canonical");
        document.head.appendChild(canonicalLink);
      }
      canonicalLink.setAttribute("href", canonical);
    }

    // Structured Data (JSON-LD)
    if (structuredData) {
      let script = document.querySelector('script[type="application/ld+json"]') as HTMLScriptElement;
      if (!script) {
        script = document.createElement("script");
        script.type = "application/ld+json";
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(structuredData);
    }

    // Cleanup function
    return () => {
      // Reset to default title on unmount if needed
    };
  }, [fullTitle, description, keywords, ogImage, ogType, canonical, noIndex, structuredData]);

  return null;
};

export default SEO;

// Common structured data schemas
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Ziomasoft Technologies Limited",
  url: "https://www.ziomasoft.com",
  logo: "https://www.ziomasoft.com/logo.png",
  description: "Building intelligent digital solutions for the future",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lagos",
    addressCountry: "Nigeria",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+234-800-123-4567",
    contactType: "customer service",
    email: "info@ziomasoft.com",
  },
  sameAs: [
    "https://linkedin.com/company/ziomasoft",
    "https://twitter.com/ziomasoft",
    "https://github.com/ziomasoft",
  ],
};

export const serviceSchema = (service: { title: string; description: string }) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: service.title,
  description: service.description,
  provider: {
    "@type": "Organization",
    name: "Ziomasoft Technologies Limited",
  },
});

export const blogPostSchema = (post: {
  title: string;
  excerpt: string;
  date: string;
  author: { name: string };
  image: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: post.title,
  description: post.excerpt,
  datePublished: post.date,
  author: {
    "@type": "Person",
    name: post.author.name,
  },
  image: post.image,
  publisher: {
    "@type": "Organization",
    name: "Ziomasoft Technologies Limited",
  },
});
