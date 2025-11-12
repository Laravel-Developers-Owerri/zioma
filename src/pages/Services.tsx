import { Code, Cloud, Brain, Headphones, Sparkles } from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Custom Software Development",
      description: "We build tailored software solutions that perfectly align with your business needs. From web applications to mobile apps, our expert developers create scalable, maintainable code that drives results."
    },
    {
      icon: Cloud,
      title: "Cloud-Based Platform Solutions",
      description: "Leverage the power of cloud computing with our comprehensive cloud solutions. We design, build, and manage cloud infrastructure that scales with your business, ensuring reliability and performance."
    },
    {
      icon: Sparkles,
      title: "SaaS Product Development",
      description: "Transform your idea into a successful SaaS product. We handle everything from initial concept and architecture to development, deployment, and ongoing maintenance of your software-as-a-service platform."
    },
    {
      icon: Brain,
      title: "AI-Powered Tools and Automation",
      description: "Harness the potential of artificial intelligence to automate processes, gain insights, and enhance decision-making. Our AI solutions include chatbots, predictive analytics, and intelligent automation systems."
    },
    {
      icon: Headphones,
      title: "Technical Consulting and Support",
      description: "Get expert guidance on your technology strategy and ongoing support for your systems. Our consultants provide strategic insights, architecture reviews, and hands-on technical assistance."
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our <span className="text-gradient">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Comprehensive technology solutions designed to transform your business
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <div key={index} className="animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Our Process</h2>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold">
                    1
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Discovery & Planning</h3>
                  <p className="text-muted-foreground">
                    We start by understanding your business, goals, and challenges. Through detailed discussions 
                    and analysis, we create a comprehensive project plan and roadmap.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold">
                    2
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Design & Architecture</h3>
                  <p className="text-muted-foreground">
                    Our team designs intuitive user experiences and robust technical architectures that ensure 
                    your solution is both beautiful and scalable.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold">
                    3
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Development & Testing</h3>
                  <p className="text-muted-foreground">
                    We build your solution using agile methodologies, with regular check-ins and iterations. 
                    Rigorous testing ensures quality and reliability.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold">
                    4
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Deployment & Support</h3>
                  <p className="text-muted-foreground">
                    We handle the deployment process and provide ongoing support to ensure your solution continues 
                    to perform optimally as your business grows.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's discuss how our services can help transform your business
            </p>
            <Button asChild size="lg" className="bg-gradient-primary hover:shadow-glow transition-all duration-300">
              <Link to="/contact">Contact Us Today</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
