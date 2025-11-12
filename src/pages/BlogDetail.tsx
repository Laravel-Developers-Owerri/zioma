import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import blogTech from "@/assets/blog-tech.jpg";
import blogAi from "@/assets/blog-ai.jpg";
import blogCloud from "@/assets/blog-cloud.jpg";

const BlogDetail = () => {
  const { id } = useParams();

  const blogPosts = {
    "future-of-web-development": {
      title: "The Future of Web Development in 2025",
      date: "Jan 15, 2025",
      readTime: "5 min read",
      author: "Sarah Johnson",
      category: "Development",
      image: blogTech,
      content: `
        The landscape of web development is evolving at an unprecedented pace. As we move through 2025, several emerging trends and technologies are reshaping how we build and interact with web applications.

        ## The Rise of Edge Computing

        Edge computing is becoming the new standard for web applications. By processing data closer to users, applications can deliver lightning-fast response times and reduced latency. This shift is particularly important for real-time applications and AI-powered features.

        ## AI-First Development

        Artificial intelligence is no longer a nice-to-have feature—it's becoming a fundamental part of modern web applications. From intelligent search to personalized user experiences, AI is transforming how users interact with web platforms.

        ## WebAssembly Goes Mainstream

        WebAssembly (Wasm) is finally reaching mainstream adoption. This allows developers to run high-performance code in the browser, opening up new possibilities for web applications that were previously only possible with native apps.

        ## Serverless Architecture Maturity

        Serverless computing has matured significantly, with better tooling, improved debugging capabilities, and more sophisticated deployment strategies. This makes it easier than ever to build scalable applications without managing infrastructure.

        ## The Component-First Era

        Modern web development is increasingly centered around reusable components. Frameworks like React, Vue, and Svelte have popularized this approach, leading to more maintainable and scalable codebases.

        ## Conclusion

        The future of web development is exciting and full of possibilities. By staying current with these trends and continuously learning, developers can build better, faster, and more engaging web experiences.
      `
    },
    "ai-business-transformation": {
      title: "How AI is Transforming Business Operations",
      date: "Jan 10, 2025",
      readTime: "7 min read",
      author: "Michael Chen",
      category: "AI",
      image: blogAi,
      content: `
        Artificial Intelligence is no longer a futuristic concept—it's actively reshaping how businesses operate today. Companies across industries are leveraging AI to automate processes, gain insights, and create competitive advantages.

        ## Intelligent Automation

        AI-powered automation goes beyond simple rule-based systems. Modern AI can understand context, learn from patterns, and make intelligent decisions, automating complex workflows that previously required human judgment.

        ## Predictive Analytics

        Businesses are using AI to analyze vast amounts of data and predict future trends. From forecasting sales to predicting equipment failures, AI-driven insights help companies make proactive decisions.

        ## Enhanced Customer Experience

        AI chatbots and virtual assistants provide 24/7 customer support, while recommendation engines deliver personalized experiences. This leads to higher customer satisfaction and increased engagement.

        ## Operational Efficiency

        AI optimizes supply chains, manages inventory, and streamlines operations. Machine learning algorithms identify inefficiencies and suggest improvements, leading to significant cost savings.

        ## Data-Driven Decision Making

        AI processes and analyzes data at scale, providing executives with actionable insights. This enables faster, more informed decision-making based on comprehensive data analysis.

        ## The Human Element

        While AI transforms operations, the human element remains crucial. The most successful implementations combine AI's analytical power with human creativity, empathy, and strategic thinking.

        ## Looking Ahead

        As AI technology continues to advance, its impact on business operations will only grow. Companies that embrace AI while maintaining focus on their core values and human workforce will be best positioned for success.
      `
    },
    "cloud-migration-guide": {
      title: "Complete Guide to Cloud Migration",
      date: "Jan 5, 2025",
      readTime: "8 min read",
      author: "Emily Rodriguez",
      category: "Cloud",
      image: blogCloud,
      content: `
        Moving to the cloud is a significant undertaking that can transform your business operations. This comprehensive guide will help you navigate the cloud migration journey successfully.

        ## Why Migrate to the Cloud?

        Cloud migration offers numerous benefits: reduced infrastructure costs, improved scalability, enhanced disaster recovery, and access to cutting-edge technologies. However, successful migration requires careful planning and execution.

        ## Assessing Your Current Infrastructure

        Begin by thoroughly evaluating your existing infrastructure. Identify which applications and data should be migrated, determine dependencies, and assess potential challenges.

        ## Choosing the Right Cloud Strategy

        There are several approaches to cloud migration: lift-and-shift, re-platforming, or complete re-architecture. The right choice depends on your specific needs, budget, and timeline.

        ## Planning Your Migration

        Develop a detailed migration plan that includes timelines, resource allocation, and risk mitigation strategies. Start with non-critical applications to gain experience before migrating mission-critical systems.

        ## Security and Compliance

        Ensure your cloud migration strategy addresses security requirements and regulatory compliance. Implement proper access controls, encryption, and monitoring from the start.

        ## Testing and Validation

        Thoroughly test applications after migration to ensure they perform as expected. Validate data integrity and conduct user acceptance testing before fully transitioning.

        ## Post-Migration Optimization

        Cloud migration isn't a one-time event. Continuously monitor performance, optimize costs, and take advantage of cloud-native features to maximize your investment.

        ## Common Pitfalls to Avoid

        Watch out for inadequate planning, underestimating costs, neglecting security, and insufficient training. Learning from others' mistakes can save time and money.

        ## Conclusion

        Cloud migration is a journey that requires careful planning and execution. With the right approach, it can transform your business operations and provide a solid foundation for future growth.
      `
    }
  };

  const post = blogPosts[id as keyof typeof blogPosts];

  if (!post) {
    return (
      <div className="min-h-screen pt-16 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <Button asChild>
            <Link to="/blog">Back to Blog</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-16">
      {/* Back Button */}
      <div className="container mx-auto px-4 py-6">
        <Button asChild variant="ghost">
          <Link to="/blog">
            <ArrowLeft className="mr-2" size={18} />
            Back to Blog
          </Link>
        </Button>
      </div>

      {/* Article Header */}
      <article className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-primary text-primary-foreground mb-4">
              {post.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{post.title}</h1>
            
            <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-8">
              <span className="flex items-center gap-2">
                <User size={18} />
                {post.author}
              </span>
              <span className="flex items-center gap-2">
                <Calendar size={18} />
                {post.date}
              </span>
              <span className="flex items-center gap-2">
                <Clock size={18} />
                {post.readTime}
              </span>
            </div>

            <img 
              src={post.image} 
              alt={post.title}
              className="w-full rounded-xl shadow-lg mb-12"
            />

            <div className="prose prose-lg max-w-none">
              {post.content.split('\n\n').map((paragraph, index) => {
                if (paragraph.startsWith('## ')) {
                  return (
                    <h2 key={index} className="text-3xl font-bold mt-12 mb-6">
                      {paragraph.replace('## ', '')}
                    </h2>
                  );
                }
                return (
                  <p key={index} className="text-muted-foreground leading-relaxed mb-6">
                    {paragraph}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </article>

      {/* CTA */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Interested in our insights?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Subscribe to our newsletter for more technology insights and updates
            </p>
            <Button asChild size="lg" className="bg-gradient-primary hover:shadow-glow transition-all duration-300">
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogDetail;
