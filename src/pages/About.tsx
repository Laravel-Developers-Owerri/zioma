import { Target, Eye, Heart, Users, Award, TrendingUp, Globe, Zap } from "lucide-react";

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

  const stats = [
    { value: "50+", label: "Projects Completed" },
    { value: "30+", label: "Happy Clients" },
    { value: "5+", label: "Years Experience" },
    { value: "15+", label: "Team Members" }
  ];

  const differentiators = [
    {
      icon: Award,
      title: "User-Centric Approach",
      description: "Every solution we build starts with the end user in mind. We create experiences that are intuitive, efficient, and delightful to use."
    },
    {
      icon: TrendingUp,
      title: "Cutting-Edge Technology",
      description: "We stay ahead of the curve, leveraging the latest technologies and best practices to deliver modern, future-proof solutions."
    },
    {
      icon: Zap,
      title: "Agile & Adaptive",
      description: "Our flexible approach means we can quickly adapt to changing requirements and deliver value iteratively throughout the project."
    },
    {
      icon: Globe,
      title: "Long-Term Partnership",
      description: "We're not just vendors—we're partners invested in your success. We provide ongoing support and consultation to ensure continued growth."
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About <span className="text-secondary">Ziomasoft</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Building intelligent digital solutions for the future
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-semibold mb-4">
                  Our Mission
                </div>
                <h2 className="text-3xl md:text-4xl font-bold">
                  Empowering the Digital Future
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  At Ziomasoft Technologies Limited, we are driven by a singular vision: to empower the digital future 
                  by building tools that combine smart functionality with beautiful design. We believe that technology 
                  should not only solve problems but should do so in a way that delights users and drives real business value.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our mission is to make advanced technology accessible to businesses of all sizes, helping them compete 
                  and thrive in an increasingly digital world. We achieve this through innovative software solutions, 
                  expert consulting, and unwavering commitment to our clients' success.
                </p>
              </div>

              <div className="space-y-6">
                <div className="inline-block px-4 py-2 bg-secondary/10 rounded-full text-secondary text-sm font-semibold mb-4">
                  Our Vision
                </div>
                <h2 className="text-3xl md:text-4xl font-bold">
                  Shaping Tomorrow's Technology
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We envision a world where businesses of all sizes have access to intelligent, scalable technology 
                  solutions that enable them to compete and thrive in the digital age. Through innovation, dedication, 
                  and a commitment to excellence, we're building that future one project at a time.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our vision extends beyond just creating software—we aim to be the trusted technology partner that 
                  helps organizations navigate digital transformation, leverage emerging technologies, and achieve 
                  sustainable growth in an ever-evolving landscape.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block px-4 py-2 bg-gradient-primary/10 rounded-full text-primary text-sm font-semibold mb-4">
                Our Story
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">The Journey So Far</h2>
            </div>
            
            <div className="space-y-8">
              <div className="p-6 md:p-8 rounded-2xl bg-card border border-border hover-lift">
                <h3 className="text-xl font-semibold mb-4 text-primary">The Beginning</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Ziomasoft Technologies Limited was founded by a passionate team of innovators who saw an opportunity 
                  to bridge the gap between complex technology and practical business solutions. What started as a 
                  vision to create better software has evolved into a multi-product technology company serving 
                  businesses and individuals worldwide.
                </p>
              </div>

              <div className="p-6 md:p-8 rounded-2xl bg-card border border-border hover-lift">
                <h3 className="text-xl font-semibold mb-4 text-primary">Today</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Today, we operate as a comprehensive digital solutions provider, offering everything from custom 
                  software development to SaaS platforms, cloud integrations, and AI-driven tools. Our diverse 
                  portfolio reflects our commitment to staying at the forefront of technological innovation while 
                  maintaining our focus on user experience and business value.
                </p>
              </div>

              <div className="p-6 md:p-8 rounded-2xl bg-card border border-border hover-lift">
                <h3 className="text-xl font-semibold mb-4 text-primary">Our Approach</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Whether working with startups looking to scale, enterprises streamlining operations, or individuals 
                  launching new products, our team brings the same level of dedication and expertise to every project. 
                  We're not just building software—we're building lasting partnerships and helping shape the digital 
                  landscape of tomorrow.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-gradient-primary/10 rounded-full text-primary text-sm font-semibold mb-4">
              Core Values
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">The Principles That Guide Us</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our values aren't just words on a wall—they're the foundation of every decision we make
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="p-6 rounded-xl bg-card border border-border hover-lift text-center group"
              >
                <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mx-auto mb-4 transition-all duration-300">
                  <value.icon className="text-secondary-foreground" size={32} />
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
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-2 bg-gradient-primary/10 rounded-full text-primary text-sm font-semibold mb-4">
                Why Choose Us
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What Makes Us Different</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                We don't just deliver projects—we deliver results that matter
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {differentiators.map((item, index) => (
                <div 
                  key={index}
                  className="p-8 rounded-xl bg-card border border-border hover-lift hover:border-primary/50 transition-all group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center flex-shrink-0 transition-all">
                      <item.icon className="text-primary-foreground" size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Culture */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block px-4 py-2 bg-gradient-primary/10 rounded-full text-primary text-sm font-semibold mb-4">
                Our Culture
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Building a Team of Innovators
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At Ziomasoft, we've cultivated a culture that celebrates creativity, encourages continuous learning, 
                and rewards innovation. Our team consists of passionate individuals who are not just experts in their 
                fields but are also committed to pushing the boundaries of what's possible.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-border text-center">
                <div className="text-2xl font-bold mb-2">Collaborative</div>
                <p className="text-sm text-muted-foreground">
                  We believe the best solutions come from diverse perspectives working together
                </p>
              </div>
              <div className="p-6 rounded-xl bg-gradient-to-br from-secondary/10 to-primary/10 border border-border text-center">
                <div className="text-2xl font-bold mb-2">Growth-Focused</div>
                <p className="text-sm text-muted-foreground">
                  Continuous learning and professional development are part of our DNA
                </p>
              </div>
              <div className="p-6 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-border text-center">
                <div className="text-2xl font-bold mb-2">Impact-Driven</div>
                <p className="text-sm text-muted-foreground">
                  Every project is an opportunity to make a meaningful difference
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
