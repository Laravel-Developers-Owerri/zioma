import { Target, Eye, Heart, Users, Award, TrendingUp, Zap, Globe, Circle, Briefcase, Calendar, UserPlus } from "lucide-react";
import { useAboutPageConfig, useSiteConfig } from "@/data/siteConfig";
import NewsletterSection from "@/components/NewsletterSection";
import SEO from "@/components/SEO";
import type { LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Target, Eye, Heart, Users, Award, TrendingUp, Zap, Globe, Circle, Briefcase, Calendar, UserPlus
};

const About = () => {
  const { config } = useAboutPageConfig();
  const { config: siteConfig } = useSiteConfig();

  // Dynamically get icon component by name
  const getIconComponent = (iconName: string): LucideIcon => {
    return iconMap[iconName] || Circle;
  };

  return (
    <>
      <SEO
        title={`${config.hero.title} ${config.hero.titleHighlight}`}
        description={siteConfig.seo.defaultDescription}
        keywords="about ziomasoft, software company, technology company, digital solutions"
      />
      
      <div className="min-h-screen pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                {config.hero.title} <span className="text-secondary">{config.hero.titleHighlight}</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                {config.hero.tagline}
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-card border-y border-border">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[...config.stats]
                .sort((a, b) => a.order - b.order)
                .map((stat) => (
                  <div key={stat.id} className="text-center">
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
                    {config.mission.badge}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold">
                    {config.mission.title}
                  </h2>
                  {config.mission.paragraphs.map((paragraph, index) => (
                    <p key={index} className="text-lg text-muted-foreground leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>

                <div className="space-y-6">
                  <div className="inline-block px-4 py-2 bg-secondary/10 rounded-full text-secondary text-sm font-semibold mb-4">
                    {config.vision.badge}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold">
                    {config.vision.title}
                  </h2>
                  {config.vision.paragraphs.map((paragraph, index) => (
                    <p key={index} className="text-lg text-muted-foreground leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
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
                  {config.story.badge}
                </div>
                <h2 className="text-3xl md:text-4xl font-bold">{config.story.title}</h2>
              </div>
              
              <div className="space-y-8">
                {config.story.sections.map((section, index) => (
                  <div key={index} className="p-6 md:p-8 rounded-2xl bg-card border border-border hover-lift">
                    <h3 className="text-xl font-semibold mb-4 text-primary">{section.title}</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {section.content}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-2 bg-gradient-primary/10 rounded-full text-primary text-sm font-semibold mb-4">
                {config.values.badge}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{config.values.title}</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                {config.values.subtitle}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {[...config.values.items]
                .sort((a, b) => a.order - b.order)
                .map((value) => {
                  const IconComponent = getIconComponent(value.icon);
                  return (
                    <div 
                      key={value.id} 
                      className="p-6 rounded-xl bg-card border border-border hover-lift text-center group"
                    >
                      <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mx-auto mb-4 transition-all duration-300">
                        <IconComponent className="text-secondary-foreground" size={32} />
                      </div>
                      <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                      <p className="text-muted-foreground">{value.description}</p>
                    </div>
                  );
                })}
            </div>
          </div>
        </section>

        {/* What Makes Us Different */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <div className="inline-block px-4 py-2 bg-gradient-primary/10 rounded-full text-primary text-sm font-semibold mb-4">
                  {config.differentiators.badge}
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">{config.differentiators.title}</h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  {config.differentiators.subtitle}
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[...config.differentiators.items]
                  .sort((a, b) => a.order - b.order)
                  .map((item) => {
                    const IconComponent = getIconComponent(item.icon);
                    return (
                      <div 
                        key={item.id}
                        className="p-8 rounded-xl bg-card border border-border hover-lift hover:border-primary/50 transition-all group"
                      >
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center flex-shrink-0 transition-all">
                            <IconComponent className="text-primary-foreground" size={24} />
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
                    );
                  })}
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
                  {config.culture.badge}
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  {config.culture.title}
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {config.culture.description}
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {config.culture.traits.map((trait, index) => (
                  <div key={index} className="p-6 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-border text-center">
                    <div className="text-2xl font-bold mb-2">{trait.title}</div>
                    <p className="text-sm text-muted-foreground">
                      {trait.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <NewsletterSection />
      </div>
    </>
  );
};

export default About;
