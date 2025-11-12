import ProductCard from "@/components/ProductCard";
import productAi from "@/assets/product-ai-assistant.jpg";
import productCrm from "@/assets/product-crm.jpg";
import productEscrow from "@/assets/product-escrow.jpg";
import productPm from "@/assets/product-project-manager.jpg";
import productEcom from "@/assets/product-ecommerce.jpg";
import productHr from "@/assets/product-hr-system.jpg";

const Products = () => {
  const products = [
    {
      id: "ai-assistant",
      title: "AI Chat Assistant",
      description: "Intelligent conversational AI that understands context and provides personalized responses to customer queries 24/7.",
      image: productAi,
      category: "AI"
    },
    {
      id: "crm-platform",
      title: "SmartCRM Pro",
      description: "Complete customer relationship management solution with advanced analytics, automation, and seamless integrations.",
      image: productCrm,
      category: "SaaS"
    },
    {
      id: "escrow-system",
      title: "SecureEscrow",
      description: "Blockchain-powered escrow platform ensuring safe and transparent transactions for buyers and sellers.",
      image: productEscrow,
      category: "FinTech"
    },
    {
      id: "project-manager",
      title: "TeamFlow",
      description: "Collaborative project management tool with real-time updates, task tracking, and team communication features.",
      image: productPm,
      category: "Productivity"
    },
    {
      id: "ecommerce-platform",
      title: "ShopHub",
      description: "Full-featured e-commerce platform with inventory management, payment processing, and marketing tools.",
      image: productEcom,
      category: "E-Commerce"
    },
    {
      id: "hr-system",
      title: "HRConnect",
      description: "Comprehensive HR management system covering recruitment, onboarding, payroll, and employee performance tracking.",
      image: productHr,
      category: "Enterprise"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our <span className="text-gradient">Products</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Innovative software solutions built to solve real-world problems
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div key={product.id} className="animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                <ProductCard {...product} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
