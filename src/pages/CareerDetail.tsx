import { useParams, Link } from "react-router-dom";
import { ArrowLeft, MapPin, Briefcase, Clock, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";

const CareerDetail = () => {
  const { id } = useParams();

  const positions = {
    "senior-fullstack-developer": {
      title: "Senior Full-Stack Developer",
      department: "Engineering",
      location: "Remote / Lagos",
      type: "Full-time",
      salary: "$80,000 - $120,000",
      description: "We're looking for an experienced full-stack developer to join our engineering team and help build cutting-edge web applications.",
      responsibilities: [
        "Design and develop scalable web applications using modern frameworks",
        "Write clean, maintainable, and well-documented code",
        "Collaborate with product managers and designers to deliver features",
        "Mentor junior developers and contribute to team knowledge sharing",
        "Participate in code reviews and maintain high code quality standards",
        "Optimize application performance and ensure security best practices"
      ],
      requirements: [
        "5+ years of experience in full-stack development",
        "Strong proficiency in React, Node.js, and TypeScript",
        "Experience with cloud platforms (AWS, GCP, or Azure)",
        "Solid understanding of database design and optimization",
        "Excellent problem-solving and communication skills",
        "Bachelor's degree in Computer Science or equivalent experience"
      ],
      niceToHave: [
        "Experience with microservices architecture",
        "Knowledge of CI/CD pipelines and DevOps practices",
        "Contributions to open-source projects",
        "Experience leading technical projects"
      ]
    },
    "product-designer": {
      title: "Product Designer",
      department: "Design",
      location: "Remote",
      type: "Full-time",
      salary: "$70,000 - $100,000",
      description: "Join our design team to create beautiful, intuitive user experiences for our growing suite of products.",
      responsibilities: [
        "Design end-to-end user experiences for web and mobile applications",
        "Create wireframes, prototypes, and high-fidelity mockups",
        "Conduct user research and usability testing",
        "Collaborate with engineering and product teams",
        "Maintain and evolve our design system",
        "Present design concepts and rationale to stakeholders"
      ],
      requirements: [
        "3+ years of product design experience",
        "Strong portfolio demonstrating UX/UI expertise",
        "Proficiency in Figma and other design tools",
        "Understanding of responsive design principles",
        "Excellent communication and presentation skills",
        "User-centered design mindset"
      ],
      niceToHave: [
        "Experience with design systems",
        "Motion design skills",
        "Front-end development knowledge",
        "Experience in B2B SaaS products"
      ]
    },
    "devops-engineer": {
      title: "DevOps Engineer",
      department: "Engineering",
      location: "Remote / Lagos",
      type: "Full-time",
      salary: "$75,000 - $110,000",
      description: "Help us build and maintain robust infrastructure that powers our applications and serves thousands of users.",
      responsibilities: [
        "Design and implement CI/CD pipelines",
        "Manage cloud infrastructure and ensure high availability",
        "Monitor system performance and troubleshoot issues",
        "Implement security best practices and compliance requirements",
        "Automate deployment processes and infrastructure management",
        "Collaborate with development teams on infrastructure needs"
      ],
      requirements: [
        "4+ years of DevOps or infrastructure engineering experience",
        "Strong knowledge of AWS, Docker, and Kubernetes",
        "Experience with infrastructure as code (Terraform, CloudFormation)",
        "Proficiency in scripting languages (Python, Bash)",
        "Understanding of networking and security principles",
        "Experience with monitoring and logging tools"
      ],
      niceToHave: [
        "Certifications in cloud platforms",
        "Experience with serverless architectures",
        "Knowledge of database administration",
        "Experience in high-traffic environments"
      ]
    },
    "ai-ml-engineer": {
      title: "AI/ML Engineer",
      department: "Research & Development",
      location: "Remote",
      type: "Full-time",
      salary: "$90,000 - $130,000",
      description: "Join our R&D team to develop innovative AI solutions that power our next-generation products.",
      responsibilities: [
        "Design and implement machine learning models",
        "Process and analyze large datasets",
        "Optimize ML pipelines for production environments",
        "Research and evaluate new AI technologies",
        "Collaborate with product teams to integrate AI features",
        "Document technical approaches and findings"
      ],
      requirements: [
        "3+ years of experience in machine learning or AI",
        "Strong programming skills in Python and ML frameworks",
        "Experience with deep learning and neural networks",
        "Understanding of ML ops and model deployment",
        "Master's degree in Computer Science, AI, or related field",
        "Strong mathematical and statistical background"
      ],
      niceToHave: [
        "Published research papers or patents",
        "Experience with NLP or computer vision",
        "PhD in relevant field",
        "Experience with large-scale ML systems"
      ]
    },
    "technical-writer": {
      title: "Technical Writer",
      department: "Documentation",
      location: "Remote",
      type: "Contract",
      salary: "$50,000 - $70,000",
      description: "Help us create comprehensive, user-friendly documentation for our products and APIs.",
      responsibilities: [
        "Write clear, concise technical documentation",
        "Create tutorials, guides, and API documentation",
        "Collaborate with engineers to understand technical concepts",
        "Maintain and update existing documentation",
        "Develop documentation standards and style guides",
        "Gather feedback and improve documentation based on user needs"
      ],
      requirements: [
        "2+ years of technical writing experience",
        "Strong writing and editing skills",
        "Ability to understand and explain complex technical concepts",
        "Experience with documentation tools and platforms",
        "Basic understanding of software development",
        "Excellent attention to detail"
      ],
      niceToHave: [
        "Experience with API documentation",
        "Knowledge of Markdown and Git",
        "Background in software development",
        "Experience with documentation platforms like GitBook"
      ]
    },
    "customer-success-manager": {
      title: "Customer Success Manager",
      department: "Customer Experience",
      location: "Lagos",
      type: "Full-time",
      salary: "$60,000 - $85,000",
      description: "Be the voice of our customers and help them achieve success with our products.",
      responsibilities: [
        "Build and maintain strong customer relationships",
        "Guide customers through onboarding and adoption",
        "Identify opportunities for product expansion",
        "Gather and communicate customer feedback",
        "Resolve customer issues and escalations",
        "Develop success metrics and track customer health"
      ],
      requirements: [
        "3+ years in customer success or account management",
        "Excellent communication and interpersonal skills",
        "Experience with SaaS products",
        "Strong problem-solving abilities",
        "Data-driven mindset",
        "Proven track record of customer retention"
      ],
      niceToHave: [
        "Technical background or understanding",
        "Experience with CRM platforms",
        "Previous startup experience",
        "Multiple language proficiency"
      ]
    }
  };

  const position = positions[id as keyof typeof positions];

  if (!position) {
    return (
      <div className="min-h-screen pt-16 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Position Not Found</h1>
          <Button asChild>
            <Link to="/career">Back to Careers</Link>
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
          <Link to="/career">
            <ArrowLeft className="mr-2" size={18} />
            Back to Careers
          </Link>
        </Button>
      </div>

      {/* Job Header */}
      <section className="py-12 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-primary text-primary-foreground mb-4">
              {position.department}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{position.title}</h1>
            <p className="text-xl text-muted-foreground mb-8">{position.description}</p>
            
            <div className="flex flex-wrap gap-6 text-muted-foreground mb-8">
              <span className="flex items-center gap-2">
                <MapPin size={18} />
                {position.location}
              </span>
              <span className="flex items-center gap-2">
                <Briefcase size={18} />
                {position.type}
              </span>
              <span className="flex items-center gap-2">
                <Clock size={18} />
                Full-time
              </span>
              <span className="flex items-center gap-2">
                <DollarSign size={18} />
                {position.salary}
              </span>
            </div>

            <Button size="lg" className="bg-gradient-primary hover:shadow-glow transition-all duration-300">
              Apply for this position
            </Button>
          </div>
        </div>
      </section>

      {/* Job Details */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Responsibilities */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Responsibilities</h2>
              <ul className="space-y-3">
                {position.responsibilities.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-2" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Requirements */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Requirements</h2>
              <ul className="space-y-3">
                {position.requirements.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-2" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Nice to Have */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Nice to Have</h2>
              <ul className="space-y-3">
                {position.niceToHave.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-secondary flex-shrink-0 mt-2" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Apply CTA */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to join our team?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              We'd love to hear from you. Apply now and let's build something amazing together.
            </p>
            <Button size="lg" className="bg-gradient-primary hover:shadow-glow transition-all duration-300">
              Submit Your Application
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareerDetail;
