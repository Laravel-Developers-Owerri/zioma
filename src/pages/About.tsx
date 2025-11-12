import { Target, Eye, Heart, Users } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Innovation",
      description: "We constantly push boundaries to deliver cutting-edge solutions that shape the future."
    },
    {
      icon: Eye,
      title: "Simplicity",
      description: "Complex problems deserve elegant solutions. We make technology accessible and intuitive."
    },
    {
      icon: Heart,
      title: "Integrity",
      description: "Trust and transparency are at the core of everything we do for our clients."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Success is a team effort. We work closely with clients to achieve shared goals."
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About <span className="text-gradient">Ziomasoft</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Building intelligent digital solutions for the future
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-16">
              <h2 className="text-4xl font-bold mb-6 text-center">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At Ziomasoft Technologies Limited, we are driven by a singular vision: to empower the digital future 
                by building tools that combine smart functionality with beautiful design. We believe that technology 
                should not only solve problems but should do so in a way that delights users and drives real business value.
              </p>
            </div>

            <div className="mb-16">
              <h2 className="text-4xl font-bold mb-6 text-center">Our Vision</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We envision a world where businesses of all sizes have access to intelligent, scalable technology 
                solutions that enable them to compete and thrive in the digital age. Through innovation, dedication, 
                and a commitment to excellence, we're building that future one project at a time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center">Our Story</h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Ziomasoft Technologies Limited was founded by a passionate team of innovators who saw an opportunity 
                to bridge the gap between complex technology and practical business solutions. What started as a 
                vision to create better software has evolved into a multi-product technology company serving 
                businesses and individuals worldwide.
              </p>
              <p>
                Today, we operate as a comprehensive digital solutions provider, offering everything from custom 
                software development to SaaS platforms, cloud integrations, and AI-driven tools. Our diverse 
                portfolio reflects our commitment to staying at the forefront of technological innovation while 
                maintaining our focus on user experience and business value.
              </p>
              <p>
                Whether working with startups looking to scale, enterprises streamlining operations, or individuals 
                launching new products, our team brings the same level of dedication and expertise to every project. 
                We're not just building software—we're building lasting partnerships and helping shape the digital 
                landscape of tomorrow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="p-6 rounded-xl bg-card border border-border hover-lift text-center"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center mx-auto mb-4">
                  <value.icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center">What Makes Us Different</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 rounded-xl bg-card border border-border">
                <h3 className="text-xl font-semibold mb-3 text-primary">User-Centric Approach</h3>
                <p className="text-muted-foreground">
                  Every solution we build starts with the end user in mind. We create experiences that are 
                  intuitive, efficient, and delightful to use.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-card border border-border">
                <h3 className="text-xl font-semibold mb-3 text-primary">Cutting-Edge Technology</h3>
                <p className="text-muted-foreground">
                  We stay ahead of the curve, leveraging the latest technologies and best practices to deliver 
                  modern, future-proof solutions.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-card border border-border">
                <h3 className="text-xl font-semibold mb-3 text-primary">Agile & Adaptive</h3>
                <p className="text-muted-foreground">
                  Our flexible approach means we can quickly adapt to changing requirements and deliver value 
                  iteratively throughout the project.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-card border border-border">
                <h3 className="text-xl font-semibold mb-3 text-primary">Long-Term Partnership</h3>
                <p className="text-muted-foreground">
                  We're not just vendors—we're partners invested in your success. We provide ongoing support 
                  and consultation to ensure continued growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
