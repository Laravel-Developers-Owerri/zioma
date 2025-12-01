import { useState } from "react";
import BlogCard from "@/components/BlogCard";
import SEO from "@/components/SEO";
import { useBlog } from "@/data/blog";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const Blog = () => {
  const { posts: blogPosts } = useBlog();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Get unique categories
  const categories = [...new Set(blogPosts.map(post => post.category))];

  // Filter posts
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = !selectedCategory || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <SEO
        title="Blog & Insights - Tech Articles"
        description="Read our latest articles on software development, cloud solutions, AI automation, and digital transformation. Expert insights from the Ziomasoft team."
        keywords="tech blog, software development, cloud computing, AI, digital transformation, technology trends"
      />

      <div className="min-h-screen pt-16">
        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-muted/30" />
          <div className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center animate-fade-in">
              <span className="text-secondary font-medium mb-4 block">Our Blog</span>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Insights & <span className="text-secondary">Innovations</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Expert perspectives on technology, innovation, and digital transformation
              </p>
              
              {/* Search Bar */}
              <div className="max-w-md mx-auto relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
                <Input
                  type="search"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 py-6 text-lg"
                  aria-label="Search blog posts"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-3 justify-center">
              <button
                onClick={() => setSelectedCategory(null)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  !selectedCategory 
                    ? "bg-secondary text-secondary-foreground" 
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                All Posts
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === category 
                      ? "bg-secondary text-secondary-foreground" 
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            {filteredPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post, index) => (
                  <article 
                    key={post.id} 
                    className="animate-slide-up" 
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <BlogCard 
                      id={post.slug}
                      title={post.title}
                      excerpt={post.excerpt}
                      date={post.date}
                      readTime={post.readTime}
                      category={post.category}
                      image={post.image}
                    />
                  </article>
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-xl text-muted-foreground mb-4">No posts found</p>
                <p className="text-muted-foreground">
                  Try adjusting your search or filter criteria
                </p>
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  );
};

export default Blog;
