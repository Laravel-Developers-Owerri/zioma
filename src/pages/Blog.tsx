import BlogCard from "@/components/BlogCard";
import blogTech from "@/assets/blog-tech.jpg";
import blogAi from "@/assets/blog-ai.jpg";
import blogCloud from "@/assets/blog-cloud.jpg";

const Blog = () => {
  const blogPosts = [
    {
      id: "future-of-web-development",
      title: "The Future of Web Development in 2025",
      excerpt: "Exploring emerging trends and technologies shaping the next generation of web applications. From serverless architecture to edge computing.",
      date: "Jan 15, 2025",
      readTime: "5 min read",
      category: "Development",
      image: blogTech
    },
    {
      id: "ai-business-transformation",
      title: "How AI is Transforming Business Operations",
      excerpt: "Discover how artificial intelligence is revolutionizing the way businesses operate and compete in today's digital landscape.",
      date: "Jan 10, 2025",
      readTime: "7 min read",
      category: "AI",
      image: blogAi
    },
    {
      id: "cloud-migration-guide",
      title: "Complete Guide to Cloud Migration",
      excerpt: "A comprehensive guide to successfully migrating your infrastructure to the cloud, covering strategy, execution, and best practices.",
      date: "Jan 5, 2025",
      readTime: "8 min read",
      category: "Cloud",
      image: blogCloud
    },
    {
      id: "saas-scaling-strategies",
      title: "Scaling Your SaaS Platform: Lessons Learned",
      excerpt: "Key insights and strategies for scaling SaaS applications from startup to enterprise, based on real-world experience.",
      date: "Dec 28, 2024",
      readTime: "6 min read",
      category: "SaaS",
      image: blogTech
    },
    {
      id: "api-design-best-practices",
      title: "API Design Best Practices for Modern Applications",
      excerpt: "Learn how to design robust, scalable, and developer-friendly APIs that stand the test of time.",
      date: "Dec 20, 2024",
      readTime: "9 min read",
      category: "Development",
      image: blogCloud
    },
    {
      id: "automation-productivity",
      title: "Boosting Productivity with Intelligent Automation",
      excerpt: "Practical examples of how automation can streamline workflows and increase team productivity across various business functions.",
      date: "Dec 15, 2024",
      readTime: "5 min read",
      category: "Automation",
      image: blogAi
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-gradient">Blog</span> & Insights
            </h1>
            <p className="text-xl text-muted-foreground">
              Expert perspectives on technology, innovation, and digital transformation
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <div key={post.id} className="animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                <BlogCard {...post} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
