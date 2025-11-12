import { Link } from "react-router-dom";
import { ArrowRight, Code, Cloud, Brain, Zap, Users, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/ServiceCard";
import BlogCard from "@/components/BlogCard";
import heroImage from "@/assets/hero-image.jpg";
import blogTech from "@/assets/blog-tech.jpg";
import blogAi from "@/assets/blog-ai.jpg";
import blogCloud from "@/assets/blog-cloud.jpg";

const Home = () => {
  const services = [
    {
      icon: Code,
      title: "Custom Software Development",
      description: "Tailored solutions built to solve your unique business challenges with cutting-edge technology."
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and platforms that grow with your business needs."
    },
    {
      icon: Brain,
      title: "AI & Automation",
      description: "Intelligent automation tools that streamline operations and enhance productivity."
    }
  ];

  const recentBlogs = [
    {
      id: "future-of-web-development",
      title: "The Future of Web Development in 2025",
      excerpt: "Exploring emerging trends and technologies shaping the next generation of web applications.",
      date: "Jan 15, 2025",
      readTime: "5 min read",
      category: "Development",
      image: blogTech
    },
    {
      id: "ai-business-transformation",
      title: "How AI is Transforming Business Operations",
      excerpt: "Discover how artificial intelligence is revolutionizing the way businesses operate and compete.",
      date: "Jan 10, 2025",
      readTime: "7 min read",
      category: "AI",
      image: blogAi
    },
    {
      id: "cloud-migration-guide",
      title: "Complete Guide to Cloud Migration",
      excerpt: "A comprehensive guide to successfully migrating your infrastructure to the cloud.",
      date: "Jan 5, 2025",
      readTime: "8 min read",
      category: "Cloud",
      image: blogCloud
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechCorp Inc.",
      content: "Ziomasoft transformed our outdated systems into a modern, efficient platform. Their expertise and dedication are unmatched.",
      rating: 5
    },
    {
      name: "Michael Chen",
      company: "StartupHub",
      content: "The AI automation tools they built saved us countless hours. Best investment we've made for our business.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      company: "Enterprise Solutions",
      content: "Professional, reliable, and innovative. Ziomasoft delivered beyond our expectations on every front.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Digital Innovation" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
        </div>
        
        <div className="container mx-auto px-4 py-32 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Building The <span className="text-gradient">Digital Future</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Intelligent, scalable, and user-centric digital products that empower businesses and individuals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-primary hover:shadow-glow transition-all duration-300 text-lg">
                <Link to="/contact">
                  Let's Build Together <ArrowRight className="ml-2" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg">
                <Link to="/products">Explore Products</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Highlight */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">What We Do Best</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From concept to deployment, we deliver excellence at every stage
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => (
              <div key={index} className="animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
          <div className="text-center">
            <Button asChild variant="outline" size="lg">
              <Link to="/services">
                View All Services <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-xl text-muted-foreground">
              Trusted by businesses worldwide
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="p-6 rounded-xl bg-card border border-border hover-lift">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={20} className="text-primary fill-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Blog Posts */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Latest Insights</h2>
            <p className="text-xl text-muted-foreground">
              Stay updated with the latest in technology and innovation
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {recentBlogs.map((blog) => (
              <BlogCard key={blog.id} {...blog} />
            ))}
          </div>
          <div className="text-center">
            <Button asChild variant="outline" size="lg">
              <Link to="/blog">
                View All Posts <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-primary opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's discuss how we can help you achieve your digital goals
            </p>
            <Button asChild size="lg" className="bg-gradient-primary hover:shadow-glow transition-all duration-300 text-lg">
              <Link to="/contact">
                Get Started Today <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
