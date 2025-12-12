import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, User, Share2, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import LinkedinIcon from "@/components/LinkedinIcon";
import TwitterIcon from "@/components/TwitterIcon";
import { useBlogPost, blogPostsData } from "@/data/blog";
import SEO, { blogPostSchema } from "@/components/SEO";
import BlogCard from "@/components/BlogCard";
import { useToast } from "@/hooks/use-toast";

const BlogDetail = () => {
  const { id } = useParams();
  const { post, error } = useBlogPost(id || "");
  const { toast } = useToast();

  // Get related posts (same category, excluding current)
  const relatedPosts = blogPostsData
    .filter(p => p.category === post?.category && p.slug !== post?.slug)
    .slice(0, 3);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    toast({
      title: "Link copied!",
      description: "The article link has been copied to your clipboard.",
    });
  };

  if (error || !post) {
    return (
      <div className="min-h-screen pt-16 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <p className="text-muted-foreground mb-8">
            The blog post you're looking for doesn't exist.
          </p>
          <Button asChild>
            <Link to="/blog">
              <ArrowLeft className="mr-2" size={16} />
              Back to Blog
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEO
        title={post.metaTitle || post.title}
        description={post.metaDescription || post.excerpt}
        keywords={post.tags.join(", ")}
        structuredData={blogPostSchema({
          title: post.title,
          excerpt: post.excerpt,
          date: post.date,
          author: post.author,
          image: post.image,
        })}
      />

      <div className="min-h-screen pt-16">
        {/* Hero Section */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Link 
                to="/blog" 
                className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-8"
              >
                <ArrowLeft size={16} className="mr-2" />
                Back to Blog
              </Link>
              
              <div className="animate-fade-in">
                {/* Category Badge */}
                <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-secondary text-secondary-foreground mb-4">
                  {post.category}
                </span>
                
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  {post.title}
                </h1>
                
                {/* Meta Info */}
                <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-8">
                  <div className="flex items-center gap-2">
                    <User size={18} />
                    <span>{post.author.name}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={18} />
                    <time dateTime={post.date}>{post.date}</time>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={18} />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Image */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-auto rounded-2xl shadow-lg"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid lg:grid-cols-[1fr_200px] gap-12">
                {/* Main Content */}
                <article className="prose prose-lg dark:prose-invert max-w-none">
                  <div 
                    className="blog-content"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                  />
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-12 pt-8 border-t border-border not-prose">
                    {post.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="px-3 py-1 rounded-full text-sm bg-muted text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>

                {/* Sidebar */}
                <aside className="hidden lg:block">
                  <div className="sticky top-24 space-y-6">
                    {/* Share */}
                    <div className="p-4 rounded-xl bg-card border border-border">
                      <h3 className="font-semibold mb-4 flex items-center gap-2">
                        <Share2 size={18} />
                        Share
                      </h3>
                      <div className="flex flex-col gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          className="justify-start"
                          onClick={() => window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(post.title)}`, '_blank')}
                        >
                          <TwitterIcon size={16} className="mr-2" />
                          Twitter
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="justify-start"
                          onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`, '_blank')}
                        >
                          <LinkedinIcon size={16} className="mr-2" />
                          LinkedIn
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="justify-start"
                          onClick={handleCopyLink}
                        >
                          <Copy size={16} className="mr-2" />
                          Copy Link
                        </Button>
                      </div>
                    </div>

                    {/* Author */}
                    <div className="p-4 rounded-xl bg-card border border-border">
                      <h3 className="font-semibold mb-4">About the Author</h3>
                      <p className="font-medium">{post.author.name}</p>
                      <p className="text-sm text-muted-foreground">{post.author.role}</p>
                    </div>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </section>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-12 text-center">Related Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {relatedPosts.map((relatedPost) => (
                  <BlogCard
                    key={relatedPost.id}
                    id={relatedPost.slug}
                    title={relatedPost.title}
                    excerpt={relatedPost.excerpt}
                    date={relatedPost.date}
                    readTime={relatedPost.readTime}
                    category={relatedPost.category}
                    image={relatedPost.image}
                  />
                ))}
              </div>
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default BlogDetail;
