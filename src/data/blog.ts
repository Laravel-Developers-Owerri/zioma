/**
 * Blog Data
 * This file contains all blog post data that can be managed from the backend
 * 
 * NOTE: In production, this data will come from the API
 * See: src/api/blog.ts for API integration
 */

import blogTech from "@/assets/blog-tech.jpg";
import blogAi from "@/assets/blog-ai.jpg";
import blogCloud from "@/assets/blog-cloud.jpg";

// Type Definitions
export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  author: {
    name: string;
    avatar?: string;
    role: string;
  };
  tags: string[];
  metaTitle?: string;
  metaDescription?: string;
  isPublished: boolean;
}

// Blog Posts Data
export const blogPostsData: BlogPost[] = [
  {
    id: "1",
    slug: "future-of-web-development",
    title: "The Future of Web Development in 2025",
    excerpt: "Exploring emerging trends and technologies shaping the next generation of web applications. From serverless architecture to edge computing.",
    content: `
      <h2>Introduction</h2>
      <p>The web development landscape continues to evolve at a rapid pace. As we move through 2025, several key trends are reshaping how we build and deploy web applications.</p>
      
      <h2>Serverless Architecture</h2>
      <p>Serverless computing has become the default choice for modern applications. With platforms like AWS Lambda, Azure Functions, and Cloudflare Workers, developers can focus on writing code without managing infrastructure.</p>
      
      <h2>Edge Computing</h2>
      <p>Edge computing brings computation closer to users, reducing latency and improving performance. This is particularly important for global applications serving users across different regions.</p>
      
      <h2>AI-Powered Development</h2>
      <p>AI assistants are now integral to the development workflow, helping with code generation, debugging, and optimization.</p>
      
      <h2>Conclusion</h2>
      <p>The future of web development is exciting, with new tools and approaches making it easier than ever to build performant, scalable applications.</p>
    `,
    date: "Jan 15, 2025",
    readTime: "5 min read",
    category: "Development",
    image: blogTech,
    author: {
      name: "Alex Thompson",
      role: "Senior Developer",
    },
    tags: ["Web Development", "Technology", "Trends"],
    metaTitle: "The Future of Web Development in 2025 | Ziomasoft Blog",
    metaDescription: "Discover the latest trends in web development including serverless architecture, edge computing, and AI-powered tools.",
    isPublished: true,
  },
  {
    id: "2",
    slug: "ai-business-transformation",
    title: "How AI is Transforming Business Operations",
    excerpt: "Discover how artificial intelligence is revolutionizing the way businesses operate and compete in today's digital landscape.",
    content: `
      <h2>The AI Revolution</h2>
      <p>Artificial intelligence is no longer a futuristic concept—it's here, and it's transforming businesses across every industry.</p>
      
      <h2>Automation at Scale</h2>
      <p>AI-powered automation is handling tasks that once required significant human effort, from customer service to data analysis.</p>
      
      <h2>Predictive Analytics</h2>
      <p>Machine learning models are helping businesses predict trends, customer behavior, and market changes with unprecedented accuracy.</p>
      
      <h2>Personalization</h2>
      <p>AI enables hyper-personalized experiences for customers, improving engagement and satisfaction.</p>
    `,
    date: "Jan 10, 2025",
    readTime: "7 min read",
    category: "AI",
    image: blogAi,
    author: {
      name: "Dr. Sarah Chen",
      role: "AI Researcher",
    },
    tags: ["AI", "Business", "Automation"],
    metaTitle: "How AI is Transforming Business Operations | Ziomasoft Blog",
    metaDescription: "Learn how artificial intelligence is revolutionizing business operations through automation, analytics, and personalization.",
    isPublished: true,
  },
  {
    id: "3",
    slug: "cloud-migration-guide",
    title: "Complete Guide to Cloud Migration",
    excerpt: "A comprehensive guide to successfully migrating your infrastructure to the cloud, covering strategy, execution, and best practices.",
    content: `
      <h2>Why Migrate to the Cloud?</h2>
      <p>Cloud migration offers numerous benefits including scalability, cost optimization, and improved reliability.</p>
      
      <h2>Planning Your Migration</h2>
      <p>A successful migration starts with a comprehensive assessment of your current infrastructure and clear objectives.</p>
      
      <h2>Choosing the Right Approach</h2>
      <p>Whether it's lift-and-shift, re-platforming, or re-architecting, choose the approach that best fits your needs.</p>
      
      <h2>Best Practices</h2>
      <p>Follow these best practices to ensure a smooth migration with minimal disruption to your operations.</p>
    `,
    date: "Jan 5, 2025",
    readTime: "8 min read",
    category: "Cloud",
    image: blogCloud,
    author: {
      name: "Michael Obi",
      role: "Cloud Architect",
    },
    tags: ["Cloud", "Migration", "Infrastructure"],
    metaTitle: "Complete Guide to Cloud Migration | Ziomasoft Blog",
    metaDescription: "Learn how to successfully migrate your infrastructure to the cloud with our comprehensive guide.",
    isPublished: true,
  },
  {
    id: "4",
    slug: "saas-scaling-strategies",
    title: "Scaling Your SaaS Platform: Lessons Learned",
    excerpt: "Key insights and strategies for scaling SaaS applications from startup to enterprise, based on real-world experience.",
    content: `
      <h2>The Scaling Challenge</h2>
      <p>Growing a SaaS platform presents unique challenges in terms of architecture, performance, and cost management.</p>
      
      <h2>Horizontal vs Vertical Scaling</h2>
      <p>Understanding when to scale out versus scale up is crucial for cost-effective growth.</p>
      
      <h2>Database Optimization</h2>
      <p>Your database is often the bottleneck. Learn strategies for optimizing database performance at scale.</p>
    `,
    date: "Dec 28, 2024",
    readTime: "6 min read",
    category: "SaaS",
    image: blogTech,
    author: {
      name: "James Wilson",
      role: "Engineering Lead",
    },
    tags: ["SaaS", "Scaling", "Architecture"],
    isPublished: true,
  },
  {
    id: "5",
    slug: "api-design-best-practices",
    title: "API Design Best Practices for Modern Applications",
    excerpt: "Learn how to design robust, scalable, and developer-friendly APIs that stand the test of time.",
    content: `
      <h2>API-First Design</h2>
      <p>Starting with your API design ensures a consistent and well-thought-out interface.</p>
      
      <h2>RESTful Principles</h2>
      <p>Following REST principles creates predictable and intuitive APIs.</p>
      
      <h2>Versioning Strategies</h2>
      <p>Plan for change by implementing a solid versioning strategy from the start.</p>
    `,
    date: "Dec 20, 2024",
    readTime: "9 min read",
    category: "Development",
    image: blogCloud,
    author: {
      name: "Emily Zhang",
      role: "API Engineer",
    },
    tags: ["API", "Development", "Best Practices"],
    isPublished: true,
  },
  {
    id: "6",
    slug: "automation-productivity",
    title: "Boosting Productivity with Intelligent Automation",
    excerpt: "Practical examples of how automation can streamline workflows and increase team productivity across various business functions.",
    content: `
      <h2>The Automation Advantage</h2>
      <p>Automation isn't about replacing humans—it's about empowering them to focus on high-value work.</p>
      
      <h2>Identifying Automation Opportunities</h2>
      <p>Learn to spot repetitive tasks that are prime candidates for automation.</p>
      
      <h2>Tools and Technologies</h2>
      <p>An overview of modern automation tools and how to choose the right ones for your needs.</p>
    `,
    date: "Dec 15, 2024",
    readTime: "5 min read",
    category: "Automation",
    image: blogAi,
    author: {
      name: "David Park",
      role: "Automation Specialist",
    },
    tags: ["Automation", "Productivity", "Tools"],
    isPublished: true,
  },
];

// Hook for blog data access (will use API when ready)
export const useBlog = () => {
  // TODO: Replace with API call
  // const { data, isLoading, error } = useQuery(['blog'], fetchBlogPosts);
  
  return {
    posts: blogPostsData,
    isLoading: false,
    error: null,
  };
};

export const useBlogPost = (slug: string) => {
  // TODO: Replace with API call
  // const { data, isLoading, error } = useQuery(['blog', slug], () => fetchBlogPostBySlug(slug));
  
  const post = blogPostsData.find(p => p.slug === slug);
  
  return {
    post,
    isLoading: false,
    error: post ? null : "Post not found",
  };
};

export const useRecentPosts = (limit: number = 3) => {
  // TODO: Replace with API call
  // const { data, isLoading, error } = useQuery(['blog', 'recent'], fetchRecentBlogPosts);
  
  return {
    posts: blogPostsData.slice(0, limit),
    isLoading: false,
    error: null,
  };
};
