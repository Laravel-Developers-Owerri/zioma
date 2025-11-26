import productAi from "@/assets/product-ai-assistant.jpg";
import productCrm from "@/assets/product-crm.jpg";
import productEscrow from "@/assets/product-escrow.jpg";
import productPm from "@/assets/product-project-manager.jpg";
import productEcom from "@/assets/product-ecommerce.jpg";
import productHr from "@/assets/product-hr-system.jpg";

export interface Product {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  category: string;
  features: string[];
  technologies: string[];
}

// This data can be replaced with API calls in the future
export const productsData: Product[] = [
  {
    id: "ai-assistant",
    title: "AI Chat Assistant",
    description: "Intelligent conversational AI that understands context and provides personalized responses to customer queries 24/7.",
    fullDescription: "An intelligent conversational AI platform that understands context, learns from interactions, and provides personalized responses to customer queries 24/7. Built with cutting-edge natural language processing technology.",
    image: productAi,
    category: "AI",
    features: [
      "Natural Language Understanding",
      "Multi-language Support",
      "Custom Training Data",
      "Analytics Dashboard",
      "Easy Integration"
    ],
    technologies: ["Python", "TensorFlow", "React", "Node.js"]
  },
  {
    id: "crm-platform",
    title: "SmartCRM Pro",
    description: "Complete customer relationship management solution with advanced analytics, automation, and seamless integrations.",
    fullDescription: "A comprehensive customer relationship management solution designed for modern businesses. Features advanced analytics, automation workflows, and seamless integrations with popular tools.",
    image: productCrm,
    category: "SaaS",
    features: [
      "Contact Management",
      "Sales Pipeline Tracking",
      "Email Automation",
      "Advanced Analytics",
      "Third-party Integrations"
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "Redis"]
  },
  {
    id: "escrow-system",
    title: "SecureEscrow",
    description: "Blockchain-powered escrow platform ensuring safe and transparent transactions for buyers and sellers.",
    fullDescription: "A blockchain-powered escrow platform that ensures safe, transparent, and secure transactions between buyers and sellers. Smart contracts automate the entire process while maintaining trust.",
    image: productEscrow,
    category: "FinTech",
    features: [
      "Smart Contract Automation",
      "Multi-currency Support",
      "Dispute Resolution",
      "Transaction History",
      "KYC Integration"
    ],
    technologies: ["Solidity", "Ethereum", "Web3.js", "React"]
  },
  {
    id: "project-manager",
    title: "TeamFlow",
    description: "Collaborative project management tool with real-time updates, task tracking, and team communication features.",
    fullDescription: "A collaborative project management tool built for modern teams. Features real-time updates, intuitive task tracking, and integrated team communication to keep everyone aligned.",
    image: productPm,
    category: "Productivity",
    features: [
      "Task Management",
      "Real-time Collaboration",
      "Gantt Charts",
      "Time Tracking",
      "Resource Allocation"
    ],
    technologies: ["React", "WebSocket", "MongoDB", "Express"]
  },
  {
    id: "ecommerce-platform",
    title: "ShopHub",
    description: "Full-featured e-commerce platform with inventory management, payment processing, and marketing tools.",
    fullDescription: "A full-featured e-commerce platform designed to help businesses sell online. Includes inventory management, payment processing, marketing tools, and detailed analytics.",
    image: productEcom,
    category: "E-Commerce",
    features: [
      "Inventory Management",
      "Payment Gateway Integration",
      "Order Tracking",
      "Marketing Tools",
      "Analytics Dashboard"
    ],
    technologies: ["Next.js", "Stripe", "PostgreSQL", "Tailwind"]
  },
  {
    id: "hr-system",
    title: "HRConnect",
    description: "Comprehensive HR management system covering recruitment, onboarding, payroll, and employee performance tracking.",
    fullDescription: "A comprehensive HR management system that streamlines all HR processes. From recruitment and onboarding to payroll and performance tracking, everything in one place.",
    image: productHr,
    category: "Enterprise",
    features: [
      "Recruitment Management",
      "Employee Onboarding",
      "Payroll Processing",
      "Performance Reviews",
      "Leave Management"
    ],
    technologies: ["React", "Node.js", "MySQL", "Docker"]
  }
];

// Hook for future API integration
export const useProducts = () => {
  // TODO: Replace with actual API call
  // const { data, isLoading, error } = useQuery(['products'], fetchProducts);
  
  return {
    products: productsData,
    isLoading: false,
    error: null
  };
};
