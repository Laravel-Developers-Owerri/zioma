import CareerCard from "@/components/CareerCard";
import { Users, Heart, Zap, Award } from "lucide-react";

const Career = () => {
  const positions = [
    {
      id: "senior-fullstack-developer",
      title: "Senior Full-Stack Developer",
      department: "Engineering",
      location: "Remote / Lagos",
      type: "Full-time"
    },
    {
      id: "product-designer",
      title: "Product Designer",
      department: "Design",
      location: "Remote",
      type: "Full-time"
    },
    {
      id: "devops-engineer",
      title: "DevOps Engineer",
      department: "Engineering",
      location: "Remote / Lagos",
      type: "Full-time"
    },
    {
      id: "ai-ml-engineer",
      title: "AI/ML Engineer",
      department: "Research & Development",
      location: "Remote",
      type: "Full-time"
    },
    {
      id: "technical-writer",
      title: "Technical Writer",
      department: "Documentation",
      location: "Remote",
      type: "Contract"
    },
    {
      id: "customer-success-manager",
      title: "Customer Success Manager",
      department: "Customer Experience",
      location: "Lagos",
      type: "Full-time"
    }
  ];

  const perks = [
    {
      icon: Users,
      title: "Great Team",
      description: "Work with talented, passionate people who love what they do"
    },
    {
      icon: Heart,
      title: "Work-Life Balance",
      description: "Flexible hours and remote-first culture that respects your time"
    },
    {
      icon: Zap,
      title: "Growth Opportunities",
      description: "Continuous learning and career development opportunities"
    },
    {
      icon: Award,
      title: "Competitive Package",
      description: "Attractive salary and benefits that reflect your value"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Join Our <span className="text-gradient">Team</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Build the future of technology with passionate innovators
            </p>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Why Ziomasoft?</h2>
            <p className="text-lg text-muted-foreground">
              At Ziomasoft, we're not just building software—we're shaping the future of technology. 
              Join a team that values innovation, creativity, and personal growth.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {perks.map((perk, index) => (
              <div key={index} className="p-6 rounded-xl bg-card border border-border text-center hover-lift">
                <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center mx-auto mb-4">
                  <perk.icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{perk.title}</h3>
                <p className="text-muted-foreground text-sm">{perk.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Open Positions</h2>
            <p className="text-xl text-muted-foreground">
              Find your next career opportunity
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {positions.map((position, index) => (
              <div key={position.id} className="animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                <CareerCard {...position} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center">Our Culture</h2>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                At Ziomasoft, we believe that great technology comes from great teams. We've built a culture 
                that encourages creativity, collaboration, and continuous learning. Every team member's voice 
                matters, and we celebrate both individual achievements and collective success.
              </p>
              <p>
                We're committed to diversity and inclusion, understanding that different perspectives make us 
                stronger. Whether you're working remotely or from our office, you'll find a supportive environment 
                that helps you do your best work while maintaining a healthy work-life balance.
              </p>
              <p>
                Innovation is at our core, and we encourage everyone to experiment, learn from failures, and 
                push boundaries. If you're passionate about technology and want to make a real impact, Ziomasoft 
                might be the perfect place for you.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Career;
