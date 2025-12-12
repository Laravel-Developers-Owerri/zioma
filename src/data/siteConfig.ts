/**
 * Site Configuration Data
 * This file contains all site-wide configuration that can be managed from the backend
 * 
 * NOTE: In production, this data will come from the API
 * See: src/api/content.ts for API integration
 */

import logo from "@/assets/logo.png";
import logoDark from "@/assets/logo-dark.png";
import techCollaboration from "@/assets/tech-collaboration.jpg";
import techUsers from "@/assets/tech-users.jpg";
import techInfrastructure from "@/assets/tech-infrastructure.jpg";

// ==================== TYPE DEFINITIONS ====================

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
  id: string;
  platform: string;
  url: string;
  icon: string; // Icon name from lucide-react
  isActive: boolean;
  order: number;
}

export interface ContactInfo {
  email: string;
  phone: string;
  address: string;
  city: string;
  country: string;
  mapUrl?: string;
}

export interface FooterColumn {
  id: string;
  title: string;
  order: number;
  links: { id: string; label: string; href: string; order: number }[];
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
  logoDark: string;
  favicon?: string;
}

export interface ThemeConfig {
  primaryColor: string;
  secondaryColor: string;
  fontFamily: string;
  fontFamilyHeading?: string;
  borderRadius: string;
}

export interface SEOConfig {
  defaultTitle: string;
  titleTemplate: string;
  defaultDescription: string;
  defaultKeywords: string;
  siteUrl: string;
  ogImage: string;
  twitterHandle: string;
}

export interface CookieOption {
  id: string;
  name: string;
  description: string;
  required: boolean;
  defaultEnabled: boolean;
}

export interface CookieConfig {
  enabled: boolean;
  title: string;
  description: string;
  acceptAllText: string;
  acceptNecessaryText: string;
  customizeText: string;
  savePreferencesText: string;
  privacyPolicyUrl: string;
  options: CookieOption[];
}

export interface NewsletterConfig {
  enabled: boolean;
  title: string;
  subtitle: string;
  description: string;
  placeholder: string;
  buttonText: string;
  successMessage: string;
  delayMs: number; // Delay before showing modal (after cookie consent)
  showOnPages: string[]; // Pages where section should appear
}

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  role: string;
  content: string;
  rating: number;
  avatar?: string;
  isActive: boolean;
  order: number;
}

export interface StatItem {
  id: string;
  value: string;
  label: string;
  icon: string;
  order: number;
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  order: number;
}

export interface HeroConfig {
  badge: string;
  title: string;
  titleHighlight: string;
  subtitle: string;
  ctaPrimary: { text: string; href: string };
  ctaSecondary: { text: string; href: string };
  techIcons: string[];
}

export interface AboutPageConfig {
  hero: {
    title: string;
    titleHighlight: string;
    tagline: string;
  };
  stats: StatItem[];
  mission: {
    badge: string;
    title: string;
    paragraphs: string[];
  };
  vision: {
    badge: string;
    title: string;
    paragraphs: string[];
  };
  story: {
    badge: string;
    title: string;
    sections: { title: string; content: string }[];
  };
  values: {
    badge: string;
    title: string;
    subtitle: string;
    items: FeatureItem[];
  };
  differentiators: {
    badge: string;
    title: string;
    subtitle: string;
    items: FeatureItem[];
  };
  culture: {
    badge: string;
    title: string;
    description: string;
    traits: { title: string; description: string }[];
  };
}

export interface HomePageConfig {
  hero: HeroConfig;
  stats: StatItem[];
  services: {
    badge: string;
    title: string;
    subtitle: string;
  };
  features: {
    section1: {
      badge: string;
      title: string;
      description: string;
      bullets: string[];
      image: string;
      imageAlt: string;
    };
    section2: {
      badge: string;
      title: string;
      description: string;
      image: string;
      imageAlt: string;
    };
  };
  testimonials: {
    badge: string;
    title: string;
    subtitle: string;
  };
  blog: {
    badge: string;
    title: string;
    subtitle: string;
  };
  cta: {
    title: string;
    description: string;
    primaryButton: { text: string; href: string };
    secondaryButton: { text: string; href: string };
  };
}

export interface SiteConfig {
  brand: BrandConfig;
  theme: ThemeConfig;
  seo: SEOConfig;
  contact: ContactInfo;
  navigation: NavItem[];
  footer: FooterConfig;
  cookies: CookieConfig;
  newsletter: NewsletterConfig;
}

export interface PageContent {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  content: string;
  isPublished: boolean;
}

// ==================== DEFAULT DATA ====================

export const siteConfig: SiteConfig = {
  brand: {
    name: "Ziomasoft",
    tagline: "Building intelligent digital solutions for the future",
    logo: logo,
    logoDark: logoDark,
  },
  theme: {
    primaryColor: "207 64% 21%",
    secondaryColor: "197 99% 47%",
    fontFamily: "'Playfair Display', serif",
    fontFamilyHeading: "'Playfair Display', serif",
    borderRadius: "0.75rem",
  },
  seo: {
    defaultTitle: "Ziomasoft Technologies Limited",
    titleTemplate: "%s | Ziomasoft",
    defaultDescription: "Ziomasoft builds intelligent, scalable, and user-centric digital products. Custom software development, SaaS platforms, cloud solutions, and AI-driven tools.",
    defaultKeywords: "software development, SaaS, cloud solutions, AI automation, custom software, web development, mobile apps, digital transformation",
    siteUrl: "https://www.ziomasoft.com",
    ogImage: "https://www.ziomasoft.com/og-image.jpg",
    twitterHandle: "@Ziomasoft",
  },
  contact: {
    email: "hello@ziomasoft.com",
    phone: "+234 911 317 2893",
    address: "Mechanic Bus Stop, Ogbogoro, Port Harcourt, Rivers State, Nigeria",
    city: "Port Harcourt",
    country: "Nigeria",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1124.1734425777865!2d6.927955916892274!3d4.8411378297428085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1069cff2312cd2ef%3A0x1cfa7cc978c31018!2sBus%20Stop!5e0!3m2!1sen!2sng!4v1764158431988!5m2!1sen!2sng",
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
      children: []
    },
    {
      id: "products",
      label: "Products",
      href: "/products",
      type: "dropdown",
      order: 4,
      children: []
    },
    { id: "blog", label: "Blog", href: "/blog", type: "link", order: 5 },
    { id: "career", label: "Career", href: "/career", type: "link", order: 6 },
    { id: "contact", label: "Contact", href: "/contact", type: "link", order: 7 },
  ],
  footer: {
    columns: [
      {
        id: "quick-links",
        title: "Quick Links",
        order: 1,
        links: [
          { id: "about", label: "About Us", href: "/about", order: 1 },
          { id: "services", label: "Services", href: "/services", order: 2 },
          { id: "products", label: "Products", href: "/products", order: 3 },
          { id: "blog", label: "Blog", href: "/blog", order: 4 },
          { id: "career", label: "Career", href: "/career", order: 5 },
        ],
      },
      {
        id: "services",
        title: "Services",
        order: 2,
        links: [
          { id: "software", label: "Software Development", href: "/services/custom-software", order: 1 },
          { id: "cloud", label: "Cloud Solutions", href: "/services/cloud-solutions", order: 2 },
          { id: "saas", label: "SaaS Products", href: "/services/saas-development", order: 3 },
          { id: "ai", label: "AI Automation", href: "/services/ai-automation", order: 4 },
        ],
      },
    ],
    socialLinks: [
      { id: "linkedin", platform: "LinkedIn", url: "https://linkedin.com/company/ziomasoft", icon: "Linkedin", isActive: true, order: 1 },
      { id: "twitter", platform: "Twitter", url: "https://twitter.com/ziomasoft", icon: "Twitter", isActive: true, order: 2 },
      { id: "github", platform: "GitHub", url: "https://github.com/ziomasoft", icon: "Github", isActive: true, order: 3 },
      { id: "instagram", platform: "Instagram", url: "https://instagram.com/ziomasoft", icon: "Instagram", isActive: true, order: 4 },
      { id: "facebook", platform: "Facebook", url: "https://facebook.com/ziomasoft", icon: "Facebook", isActive: true, order: 5 },
      { id: "youtube", platform: "YouTube", url: "https://youtube.com/ziomasoft", icon: "Youtube", isActive: true, order: 6 },
    ],
    copyright: "© {year} Ziomasoft Technologies Limited. All rights reserved.",
    tagline: "Building intelligent digital solutions for the future.",
  },
  cookies: {
    enabled: true,
    title: "Cookie Preferences",
    description: "We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. Please select your cookie preferences below.",
    acceptAllText: "Accept All",
    acceptNecessaryText: "Necessary Only",
    customizeText: "Customize",
    savePreferencesText: "Save Preferences",
    privacyPolicyUrl: "/privacy-policy",
    options: [
      {
        id: "necessary",
        name: "Necessary Cookies",
        description: "Essential for the website to function properly. Cannot be disabled.",
        required: true,
        defaultEnabled: true,
      },
      {
        id: "analytics",
        name: "Analytics Cookies",
        description: "Help us understand how visitors interact with our website.",
        required: false,
        defaultEnabled: false,
      },
      {
        id: "marketing",
        name: "Marketing Cookies",
        description: "Used to deliver personalized advertisements and track campaign performance.",
        required: false,
        defaultEnabled: false,
      },
      {
        id: "functional",
        name: "Functional Cookies",
        description: "Enable enhanced functionality and personalization.",
        required: false,
        defaultEnabled: false,
      },
    ],
  },
  newsletter: {
    enabled: true,
    title: "Stay Updated",
    subtitle: "Join Our Newsletter",
    description: "Get the latest news, updates, and insights delivered directly to your inbox. Be the first to know about new products and features.",
    placeholder: "Enter your email address",
    buttonText: "Subscribe",
    successMessage: "Thank you for subscribing! Check your email for confirmation.",
    delayMs: 3000,
    showOnPages: ["/about", "/contact"],
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
    isActive: true,
    order: 1,
  },
  {
    id: "2",
    name: "Michael Chen",
    company: "StartupHub",
    role: "Founder",
    content: "The AI automation tools they built saved us countless hours. Best investment we've made for our business.",
    rating: 5,
    isActive: true,
    order: 2,
  },
  {
    id: "3",
    name: "Emily Rodriguez",
    company: "Enterprise Solutions",
    role: "Product Manager",
    content: "Professional, reliable, and innovative. Ziomasoft delivered beyond our expectations on every front.",
    rating: 5,
    isActive: true,
    order: 3,
  },
  {
    id: "4",
    name: "David Okonkwo",
    company: "FinanceFlow",
    role: "CEO",
    content: "Their cloud solutions have revolutionized how we handle data. Security and performance exceeded our requirements.",
    rating: 5,
    isActive: true,
    order: 4,
  },
];

// Home Page Configuration
export const homePageConfig: HomePageConfig = {
  hero: {
    badge: "Innovative Tech Solutions",
    title: "Building The",
    titleHighlight: "Digital Future",
    subtitle: "Intelligent, scalable, and user-centric digital products that empower businesses and transform industries.",
    ctaPrimary: { text: "Start Your Project", href: "/contact" },
    ctaSecondary: { text: "Explore Products", href: "/products" },
    techIcons: ["Code", "Cloud", "Brain", "Globe"],
  },
  stats: [
    { id: "1", value: "150+", label: "Projects Delivered", icon: "Rocket", order: 1 },
    { id: "2", value: "50+", label: "Happy Clients", icon: "Users", order: 2 },
    { id: "3", value: "99%", label: "Client Satisfaction", icon: "Star", order: 3 },
    { id: "4", value: "24/7", label: "Support Available", icon: "Shield", order: 4 },
  ],
  services: {
    badge: "Our Expertise",
    title: "What We Do Best",
    subtitle: "From concept to deployment, we deliver excellence at every stage of your digital journey.",
  },
  features: {
    section1: {
      badge: "Why Choose Us",
      title: "Technology That Drives Results",
      description: "We combine cutting-edge technology with deep industry expertise to deliver solutions that make a real difference.",
      bullets: [
        "Expert team with 10+ years of experience",
        "Agile development methodology",
        "24/7 support and maintenance",
        "Transparent communication",
      ],
      image: techCollaboration,
      imageAlt: "Team collaboration on tech projects",
    },
    section2: {
      badge: "User-Centric Design",
      title: "Built for Your Users",
      description: "Every solution we create starts with understanding your users. We design experiences that delight and drive engagement.",
      image: techUsers,
      imageAlt: "Users interacting with technology",
    },
  },
  testimonials: {
    badge: "Testimonials",
    title: "What Our Clients Say",
    subtitle: "Trusted by businesses worldwide",
  },
  blog: {
    badge: "Our Blog",
    title: "Latest Insights",
    subtitle: "Stay updated with the latest in technology and innovation",
  },
  cta: {
    title: "Ready to Transform Your Business?",
    description: "Let's discuss how we can help you achieve your digital goals and build something amazing together.",
    primaryButton: { text: "Get Started Today", href: "/contact" },
    secondaryButton: { text: "View Our Services", href: "/services" },
  },
};

// About Page Configuration
export const aboutPageConfig: AboutPageConfig = {
  hero: {
    title: "About",
    titleHighlight: "Ziomasoft",
    tagline: "Building intelligent digital solutions for the future",
  },
  stats: [
    { id: "1", value: "50+", label: "Projects Completed", icon: "Briefcase", order: 1 },
    { id: "2", value: "30+", label: "Happy Clients", icon: "Users", order: 2 },
    { id: "3", value: "5+", label: "Years Experience", icon: "Calendar", order: 3 },
    { id: "4", value: "15+", label: "Team Members", icon: "UserPlus", order: 4 },
  ],
  mission: {
    badge: "Our Mission",
    title: "Empowering the Digital Future",
    paragraphs: [
      "At Ziomasoft Technologies Limited, we are driven by a singular vision: to empower the digital future by building tools that combine smart functionality with beautiful design. We believe that technology should not only solve problems but should do so in a way that delights users and drives real business value.",
      "Our mission is to make advanced technology accessible to businesses of all sizes, helping them compete and thrive in an increasingly digital world. We achieve this through innovative software solutions, expert consulting, and unwavering commitment to our clients' success.",
    ],
  },
  vision: {
    badge: "Our Vision",
    title: "Shaping Tomorrow's Technology",
    paragraphs: [
      "We envision a world where businesses of all sizes have access to intelligent, scalable technology solutions that enable them to compete and thrive in the digital age. Through innovation, dedication, and a commitment to excellence, we're building that future one project at a time.",
      "Our vision extends beyond just creating software—we aim to be the trusted technology partner that helps organizations navigate digital transformation, leverage emerging technologies, and achieve sustainable growth in an ever-evolving landscape.",
    ],
  },
  story: {
    badge: "Our Story",
    title: "The Journey So Far",
    sections: [
      {
        title: "The Beginning",
        content: "Ziomasoft Technologies Limited was founded by a passionate team of innovators who saw an opportunity to bridge the gap between complex technology and practical business solutions. What started as a vision to create better software has evolved into a multi-product technology company serving businesses and individuals worldwide.",
      },
      {
        title: "Today",
        content: "Today, we operate as a comprehensive digital solutions provider, offering everything from custom software development to SaaS platforms, cloud integrations, and AI-driven tools. Our diverse portfolio reflects our commitment to staying at the forefront of technological innovation while maintaining our focus on user experience and business value.",
      },
      {
        title: "Our Approach",
        content: "Whether working with startups looking to scale, enterprises streamlining operations, or individuals launching new products, our team brings the same level of dedication and expertise to every project. We're not just building software—we're building lasting partnerships and helping shape the digital landscape of tomorrow.",
      },
    ],
  },
  values: {
    badge: "Core Values",
    title: "The Principles That Guide Us",
    subtitle: "Our values aren't just words on a wall—they're the foundation of every decision we make",
    items: [
      { id: "1", title: "Innovation", description: "We constantly push boundaries to deliver cutting-edge solutions that shape the future.", icon: "Target", order: 1 },
      { id: "2", title: "Simplicity", description: "Complex problems deserve elegant solutions. We make technology accessible and intuitive.", icon: "Eye", order: 2 },
      { id: "3", title: "Integrity", description: "Trust and transparency are at the core of everything we do for our clients.", icon: "Heart", order: 3 },
      { id: "4", title: "Collaboration", description: "Success is a team effort. We work closely with clients to achieve shared goals.", icon: "Users", order: 4 },
    ],
  },
  differentiators: {
    badge: "Why Choose Us",
    title: "What Makes Us Different",
    subtitle: "We don't just deliver projects—we deliver results that matter",
    items: [
      { id: "1", title: "User-Centric Approach", description: "Every solution we build starts with the end user in mind. We create experiences that are intuitive, efficient, and delightful to use.", icon: "Award", order: 1 },
      { id: "2", title: "Cutting-Edge Technology", description: "We stay ahead of the curve, leveraging the latest technologies and best practices to deliver modern, future-proof solutions.", icon: "TrendingUp", order: 2 },
      { id: "3", title: "Agile & Adaptive", description: "Our flexible approach means we can quickly adapt to changing requirements and deliver value iteratively throughout the project.", icon: "Zap", order: 3 },
      { id: "4", title: "Long-Term Partnership", description: "We're not just vendors—we're partners invested in your success. We provide ongoing support and consultation to ensure continued growth.", icon: "Globe", order: 4 },
    ],
  },
  culture: {
    badge: "Our Culture",
    title: "Building a Team of Innovators",
    description: "At Ziomasoft, we've cultivated a culture that celebrates creativity, encourages continuous learning, and rewards innovation. Our team consists of passionate individuals who are not just experts in their fields but are also committed to pushing the boundaries of what's possible.",
    traits: [
      { title: "Collaborative", description: "We believe the best solutions come from diverse perspectives working together" },
      { title: "Growth-Focused", description: "Continuous learning and professional development are part of our DNA" },
      { title: "Impact-Driven", description: "Every project is an opportunity to make a meaningful difference" },
    ],
  },
};

// ==================== HOOKS FOR DATA ACCESS ====================

export const useSiteConfig = () => {
  // TODO: Replace with API call when backend is ready
  // const { data, isLoading, error } = useQuery(['siteConfig'], fetchSiteConfig);

  return {
    config: siteConfig,
    isLoading: false,
    error: null,
  };
};

export const useTestimonials = () => {
  // TODO: Replace with API call when backend is ready
  // const { data, isLoading, error } = useQuery(['testimonials'], fetchTestimonials);

  const activeTestimonials = testimonialsData
    .filter(t => t.isActive)
    .sort((a, b) => a.order - b.order);

  return {
    testimonials: activeTestimonials,
    isLoading: false,
    error: null,
  };
};

export const useHomePageConfig = () => {
  // TODO: Replace with API call when backend is ready
  // const { data, isLoading, error } = useQuery(['homePageConfig'], fetchHomePageConfig);

  return {
    config: homePageConfig,
    isLoading: false,
    error: null,
  };
};

export const useAboutPageConfig = () => {
  // TODO: Replace with API call when backend is ready
  // const { data, isLoading, error } = useQuery(['aboutPageConfig'], fetchAboutPageConfig);

  return {
    config: aboutPageConfig,
    isLoading: false,
    error: null,
  };
};

export const useCookieConfig = () => {
  // TODO: Replace with API call when backend is ready
  // const { data, isLoading, error } = useQuery(['cookieConfig'], fetchCookieConfig);

  return {
    config: siteConfig.cookies,
    isLoading: false,
    error: null,
  };
};

export const useNewsletterConfig = () => {
  // TODO: Replace with API call when backend is ready
  // const { data, isLoading, error } = useQuery(['newsletterConfig'], fetchNewsletterConfig);

  return {
    config: siteConfig.newsletter,
    isLoading: false,
    error: null,
  };
};
