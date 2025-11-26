import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { servicesData } from "@/data/services";

const ServiceDetail = () => {
  const { id } = useParams();
  
  // In the future, this will be replaced with an API call
  const service = servicesData.find(s => s.id === id);

  if (!service) {
    return (
      <div className="min-h-screen pt-16 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
          <Link to="/services">
            <Button>Back to Services</Button>
          </Link>
        </div>
      </div>
    );
  }

  const IconComponent = service.icon;

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-4">
          <Link 
            to="/services" 
            className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-8 transition-colors"
          >
            <ArrowLeft size={16} className="mr-2" />
            Back to Services
          </Link>
          
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow">
                <IconComponent className="text-white" size={32} />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold">
                {service.title}
              </h1>
            </div>
            <p className="text-xl text-muted-foreground">
              {service.fullDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-bold mb-8">What We Offer</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {service.features.map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-lg bg-card border border-border hover-lift"
                >
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check size={14} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{feature}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Process</h2>
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
              Let's discuss how {service.title.toLowerCase()} can help transform your business
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

export default ServiceDetail;
