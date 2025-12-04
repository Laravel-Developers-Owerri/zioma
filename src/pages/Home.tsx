import { Link } from "react-router-dom";
import { ArrowRight, Code, Cloud, Brain, Globe, Sparkles, Zap, Rocket, Users, Star, Shield, Circle } from "lucide-react";
import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/ServiceCard";
import BlogCard from "@/components/BlogCard";
import SEO, { organizationSchema } from "@/components/SEO";
import TestimonialsSlider from "@/components/TestimonialsSlider";
import { useRecentPosts } from "@/data/blog";
import { useTestimonials, useHomePageConfig, useSiteConfig } from "@/data/siteConfig";
import { useServices } from "@/data/services";
import type { LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Code, Cloud, Brain, Globe, Sparkles, Zap, Rocket, Users, Star, Shield, Circle
};

const Home = () => {
  const { posts: recentBlogs } = useRecentPosts(3);
  const { testimonials } = useTestimonials();
  const { config } = useHomePageConfig();
  const { config: siteConfig } = useSiteConfig();
  const { services: servicesData } = useServices();

  // Dynamically get icon component by name
  const getIconComponent = (iconName: string): LucideIcon => {
    return iconMap[iconName] || Circle;
  };

  // Get first 3 services for homepage
  const homeServices = servicesData.slice(0, 3);

  return (
    <>
      <SEO
        title={`${siteConfig.brand.name} - ${config.hero.title} ${config.hero.titleHighlight}`}
        description={siteConfig.seo.defaultDescription}
        keywords={siteConfig.seo.defaultKeywords}
        structuredData={organizationSchema}
      />
      
      <div className="min-h-screen">
        {/* Hero Section - Modern Futuristic */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
          {/* Animated Background */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-background" />
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
              <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
            </div>
            {/* Grid Pattern */}
            <div 
              className="absolute inset-0 opacity-[0.02]"
              style={{
                backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
                backgroundSize: "50px 50px",
              }}
            />
          </div>
          
          <div className="container mx-auto px-4 py-20 relative z-10">
            <div className="max-w-5xl mx-auto text-center animate-fade-in">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-sm font-medium mb-8">
                <Sparkles size={16} />
                <span>{config.hero.badge}</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight tracking-tight">
                {config.hero.title}
                <span className="block text-secondary mt-2">{config.hero.titleHighlight}</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
                {config.hero.subtitle}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-6 group">
                  <Link to={config.hero.ctaPrimary.href}>
                    {config.hero.ctaPrimary.text}
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6">
                  <Link to={config.hero.ctaSecondary.href}>{config.hero.ctaSecondary.text}</Link>
                </Button>
              </div>

              {/* Floating Tech Icons */}
              <div className="flex justify-center gap-8 flex-wrap">
                {config.hero.techIcons.map((iconName, i) => {
                  const IconComponent = getIconComponent(iconName);
                  return (
                    <div
                      key={i}
                      className="w-16 h-16 rounded-2xl bg-card border border-border flex items-center justify-center hover:border-primary/50 transition-all hover:-translate-y-1"
                      style={{ animationDelay: `${i * 0.1}s` }}
                    >
                      <IconComponent size={28} className="text-primary" />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
              <div className="w-1 h-2 bg-muted-foreground/50 rounded-full animate-pulse" />
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 border-y border-border bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[...config.stats]
                .sort((a, b) => a.order - b.order)
                .map((stat, index) => {
                  const IconComponent = getIconComponent(stat.icon);
                  return (
                    <div 
                      key={stat.id} 
                      className="text-center animate-fade-in"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-4">
                        <IconComponent size={24} />
                      </div>
                      <div className="text-4xl md:text-5xl font-bold text-foreground mb-2">{stat.value}</div>
                      <div className="text-muted-foreground">{stat.label}</div>
                    </div>
                  );
                })}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-slide-up">
              <span className="text-secondary font-medium mb-4 block">{config.services.badge}</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">{config.services.title}</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                {config.services.subtitle}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {homeServices.map((service, index) => (
                <div 
                  key={service.id} 
                  className="animate-slide-up" 
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <ServiceCard 
                    icon={service.icon}
                    title={service.title}
                    description={service.description}
                  />
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

        {/* Features Section with Images */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
              <div className="animate-slide-up">
                <span className="text-secondary font-medium mb-4 block">{config.features.section1.badge}</span>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  {config.features.section1.title}
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  {config.features.section1.description}
                </p>
                <ul className="space-y-4">
                  {config.features.section1.bullets.map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                        <Zap size={14} className="text-secondary" />
                      </div>
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative animate-fade-in">
                <img 
                  src={config.features.section1.image} 
                  alt={config.features.section1.imageAlt} 
                  className="rounded-2xl shadow-2xl w-full"
                  loading="lazy"
                />
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-secondary/20 rounded-2xl -z-10" />
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative animate-fade-in order-2 lg:order-1">
                <img 
                  src={config.features.section2.image} 
                  alt={config.features.section2.imageAlt} 
                  className="rounded-2xl shadow-2xl w-full"
                  loading="lazy"
                />
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/20 rounded-2xl -z-10" />
              </div>
              <div className="animate-slide-up order-1 lg:order-2">
                <span className="text-secondary font-medium mb-4 block">{config.features.section2.badge}</span>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  {config.features.section2.title}
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  {config.features.section2.description}
                </p>
                <Button asChild variant="secondary">
                  <Link to="/about">
                    Learn More About Us <ArrowRight className="ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Slider */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <span className="text-secondary font-medium mb-4 block">{config.testimonials.badge}</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">{config.testimonials.title}</h2>
              <p className="text-xl text-muted-foreground">
                {config.testimonials.subtitle}
              </p>
            </div>
            
            <TestimonialsSlider testimonials={testimonials} />
          </div>
        </section>

        {/* Blog Section */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <span className="text-secondary font-medium mb-4 block">{config.blog.badge}</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">{config.blog.title}</h2>
              <p className="text-xl text-muted-foreground">
                {config.blog.subtitle}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {recentBlogs.map((blog) => (
                <BlogCard 
                  key={blog.id} 
                  id={blog.slug}
                  title={blog.title}
                  excerpt={blog.excerpt}
                  date={blog.date}
                  readTime={blog.readTime}
                  category={blog.category}
                  image={blog.image}
                />
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
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-secondary/5" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                {config.cta.title}
              </h2>
              <p className="text-xl text-muted-foreground mb-10">
                {config.cta.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-6 group">
                  <Link to={config.cta.primaryButton.href}>
                    {config.cta.primaryButton.text}
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6">
                  <Link to={config.cta.secondaryButton.href}>{config.cta.secondaryButton.text}</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
