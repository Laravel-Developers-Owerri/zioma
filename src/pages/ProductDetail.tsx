import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import productAi from "@/assets/product-ai-assistant.jpg";
import productCrm from "@/assets/product-crm.jpg";
import productEscrow from "@/assets/product-escrow.jpg";
import productPm from "@/assets/product-project-manager.jpg";
import productEcom from "@/assets/product-ecommerce.jpg";
import productHr from "@/assets/product-hr-system.jpg";

const ProductDetail = () => {
  const { id } = useParams();

  const products = {
    "ai-assistant": {
      title: "AI Chat Assistant",
      category: "AI",
      image: productAi,
      description: "An intelligent conversational AI platform that revolutionizes customer support and engagement.",
      challenge: "Our client needed a scalable solution to handle thousands of customer inquiries daily while maintaining personalized, context-aware responses.",
      solution: "We developed a sophisticated AI-powered chatbot using advanced natural language processing and machine learning algorithms. The system integrates seamlessly with existing CRM systems and learns from each interaction to improve response quality.",
      features: [
        "Natural language understanding with 95% accuracy",
        "Multi-language support for global reach",
        "Seamless CRM and ticketing system integration",
        "Real-time analytics and performance monitoring",
        "Custom training on company-specific data",
        "24/7 autonomous operation with human fallback"
      ],
      results: [
        "70% reduction in customer support costs",
        "Response time decreased from 4 hours to instant",
        "Customer satisfaction score increased by 40%",
        "Handled 10,000+ inquiries per day with ease"
      ]
    },
    "crm-platform": {
      title: "SmartCRM Pro",
      category: "SaaS",
      image: productCrm,
      description: "A comprehensive customer relationship management platform built for modern businesses.",
      challenge: "Small to medium businesses needed an affordable, powerful CRM that didn't require extensive training or IT resources.",
      solution: "We created an intuitive, feature-rich CRM platform with advanced automation capabilities, beautiful analytics dashboards, and seamless third-party integrations. The platform scales from solo entrepreneurs to enterprise teams.",
      features: [
        "Contact and lead management",
        "Sales pipeline visualization",
        "Automated workflow triggers",
        "Email and communication tracking",
        "Advanced reporting and analytics",
        "Mobile apps for iOS and Android"
      ],
      results: [
        "5,000+ active businesses using the platform",
        "Average sales cycle reduced by 30%",
        "User adoption rate of 92%",
        "4.8/5 star rating from customers"
      ]
    },
    "escrow-system": {
      title: "SecureEscrow",
      category: "FinTech",
      image: productEscrow,
      description: "A blockchain-powered escrow platform ensuring safe transactions between buyers and sellers.",
      challenge: "Online marketplaces needed a trustworthy system to protect both buyers and sellers in high-value transactions.",
      solution: "We built a secure escrow platform leveraging blockchain technology for transparency and immutability. Smart contracts automate the release of funds based on predefined conditions, eliminating the need for intermediaries.",
      features: [
        "Blockchain-based transaction security",
        "Smart contract automation",
        "Multi-currency support",
        "Dispute resolution system",
        "Real-time transaction tracking",
        "Compliance with financial regulations"
      ],
      results: [
        "$50M+ in transactions processed safely",
        "99.9% fraud prevention rate",
        "Zero security breaches since launch",
        "Trusted by 2,000+ businesses"
      ]
    },
    "project-manager": {
      title: "TeamFlow",
      category: "Productivity",
      image: productPm,
      description: "A collaborative project management tool designed for distributed teams.",
      challenge: "Remote teams struggled with fragmented communication and lack of visibility into project progress.",
      solution: "We developed TeamFlow, an all-in-one project management platform that combines task tracking, real-time collaboration, and team communication. The intuitive interface makes it easy for teams to stay aligned and productive.",
      features: [
        "Kanban and Gantt chart views",
        "Real-time collaboration and updates",
        "Time tracking and resource allocation",
        "File sharing and version control",
        "Integrations with popular dev tools",
        "Custom workflows and automation"
      ],
      results: [
        "Team productivity increased by 45%",
        "Project delivery time reduced by 25%",
        "Adopted by 1,500+ remote teams",
        "98% user retention rate"
      ]
    },
    "ecommerce-platform": {
      title: "ShopHub",
      category: "E-Commerce",
      image: productEcom,
      description: "A full-featured e-commerce platform empowering businesses to sell online with ease.",
      challenge: "Businesses needed an affordable way to launch and manage online stores without technical expertise.",
      solution: "We created ShopHub, a comprehensive e-commerce platform with everything needed to run a successful online store. From inventory management to payment processing and marketing tools, we made selling online simple.",
      features: [
        "Beautiful, customizable storefronts",
        "Inventory and order management",
        "Multiple payment gateway integrations",
        "SEO optimization tools",
        "Marketing and email automation",
        "Analytics and sales reporting"
      ],
      results: [
        "3,000+ active online stores",
        "$100M+ in GMV processed",
        "Average store conversion rate of 3.2%",
        "95% merchant satisfaction rate"
      ]
    },
    "hr-system": {
      title: "HRConnect",
      category: "Enterprise",
      image: productHr,
      description: "A comprehensive HR management system streamlining workforce operations.",
      challenge: "Growing companies needed an integrated HR solution to manage recruitment, onboarding, and employee lifecycle.",
      solution: "We built HRConnect, an end-to-end HR management platform that automates administrative tasks and provides insights into workforce analytics. The system adapts to companies of all sizes and industries.",
      features: [
        "Applicant tracking system (ATS)",
        "Employee onboarding workflows",
        "Payroll and benefits management",
        "Performance review system",
        "Leave and attendance tracking",
        "Employee self-service portal"
      ],
      results: [
        "HR admin time reduced by 60%",
        "Employee onboarding time cut in half",
        "Used by 500+ companies",
        "Manages 50,000+ employee records"
      ]
    }
  };

  const product = products[id as keyof typeof products];

  if (!product) {
    return (
      <div className="min-h-screen pt-16 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
          <Button asChild>
            <Link to="/products">Back to Products</Link>
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
          <Link to="/products">
            <ArrowLeft className="mr-2" size={18} />
            Back to Products
          </Link>
        </Button>
      </div>

      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-primary text-primary-foreground mb-4">
              {product.category}
            </span>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">{product.title}</h1>
            <p className="text-xl text-muted-foreground mb-8">{product.description}</p>
            <img 
              src={product.image} 
              alt={product.title}
              className="w-full rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Case Study Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-16">
            {/* Challenge */}
            <div>
              <h2 className="text-3xl font-bold mb-6">The Challenge</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {product.challenge}
              </p>
            </div>

            {/* Solution */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Solution</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {product.solution}
              </p>
            </div>

            {/* Features */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Key Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {product.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-muted/30">
                    <Check className="text-primary flex-shrink-0 mt-1" size={20} />
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Results */}
            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-8">
              <h2 className="text-3xl font-bold mb-6">Results & Impact</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {product.results.map((result, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-2" />
                    <p className="text-lg font-medium">{result}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Want to build something similar?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's discuss how we can create a custom solution for your business
            </p>
            <Button asChild size="lg" className="bg-gradient-primary hover:shadow-glow transition-all duration-300">
              <Link to="/contact">Start Your Project</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
