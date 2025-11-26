import { Code, Cloud, Brain, Headphones, Sparkles } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Service {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  fullDescription: string;
  features: string[];
  image?: string;
}

// This data can be replaced with API calls in the future
export const servicesData: Service[] = [
  {
    id: "custom-software",
    icon: Code,
    title: "Custom Software Development",
    description: "We build tailored software solutions that perfectly align with your business needs.",
    fullDescription: "We build tailored software solutions that perfectly align with your business needs. From web applications to mobile apps, our expert developers create scalable, maintainable code that drives results.",
    features: [
      "Web Application Development",
      "Mobile App Development",
      "API Development & Integration",
      "Legacy System Modernization",
      "Code Review & Optimization"
    ]
  },
  {
    id: "cloud-solutions",
    icon: Cloud,
    title: "Cloud-Based Platform Solutions",
    description: "Leverage the power of cloud computing with our comprehensive cloud solutions.",
    fullDescription: "Leverage the power of cloud computing with our comprehensive cloud solutions. We design, build, and manage cloud infrastructure that scales with your business, ensuring reliability and performance.",
    features: [
      "Cloud Architecture Design",
      "AWS/Azure/GCP Migration",
      "DevOps & CI/CD",
      "Cloud Security & Compliance",
      "Performance Monitoring"
    ]
  },
  {
    id: "saas-development",
    icon: Sparkles,
    title: "SaaS Product Development",
    description: "Transform your idea into a successful SaaS product.",
    fullDescription: "Transform your idea into a successful SaaS product. We handle everything from initial concept and architecture to development, deployment, and ongoing maintenance of your software-as-a-service platform.",
    features: [
      "Product Strategy & Planning",
      "Multi-tenant Architecture",
      "Subscription Management",
      "Analytics & Reporting",
      "Continuous Updates"
    ]
  },
  {
    id: "ai-automation",
    icon: Brain,
    title: "AI-Powered Tools and Automation",
    description: "Harness the potential of artificial intelligence to automate processes.",
    fullDescription: "Harness the potential of artificial intelligence to automate processes, gain insights, and enhance decision-making. Our AI solutions include chatbots, predictive analytics, and intelligent automation systems.",
    features: [
      "AI Chatbots & Virtual Assistants",
      "Machine Learning Models",
      "Natural Language Processing",
      "Computer Vision Solutions",
      "Predictive Analytics"
    ]
  },
  {
    id: "consulting",
    icon: Headphones,
    title: "Technical Consulting and Support",
    description: "Get expert guidance on your technology strategy and ongoing support.",
    fullDescription: "Get expert guidance on your technology strategy and ongoing support for your systems. Our consultants provide strategic insights, architecture reviews, and hands-on technical assistance.",
    features: [
      "Technology Strategy",
      "Architecture Review",
      "Code Audits",
      "Performance Optimization",
      "24/7 Technical Support"
    ]
  }
];

// Hook for future API integration
export const useServices = () => {
  // TODO: Replace with actual API call
  // const { data, isLoading, error } = useQuery(['services'], fetchServices);
  
  return {
    services: servicesData,
    isLoading: false,
    error: null
  };
};
