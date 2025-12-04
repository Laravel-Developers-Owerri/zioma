import { useState } from "react";
import { Mail, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNewsletterConfig } from "@/data/siteConfig";
import { z } from "zod";
// import { subscribeToNewsletter } from "@/api/content";

const emailSchema = z.string().email("Please enter a valid email address");

const NewsletterSection = () => {
  const { config } = useNewsletterConfig();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Validate email
    const result = emailSchema.safeParse(email);
    if (!result.success) {
      setError(result.error.errors[0].message);
      return;
    }

    setIsSubmitting(true);

    try {
      // TODO: Uncomment when backend is ready
      // await subscribeToNewsletter(email);
      
      // For now, just show success (simulated)
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setIsSuccess(true);
      setEmail("");
    } catch (err) {
      setError("Failed to subscribe. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!config.enabled) {
    return null;
  }

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="bg-card border border-border rounded-2xl p-8 md:p-12 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-secondary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              {isSuccess ? (
                // Success State
                <div className="text-center py-8 animate-fade-in">
                  <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="text-green-600 dark:text-green-400" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">You're Subscribed!</h3>
                  <p className="text-muted-foreground">
                    {config.successMessage}
                  </p>
                </div>
              ) : (
                // Form State
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  {/* Left - Content */}
                  <div>
                    <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-6">
                      <Mail className="text-secondary" size={28} />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-3">{config.title}</h3>
                    <p className="text-muted-foreground">
                      {config.description}
                    </p>
                  </div>

                  {/* Right - Form */}
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Input
                        type="email"
                        placeholder={config.placeholder}
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          setError("");
                        }}
                        className={`h-12 ${error ? "border-destructive" : ""}`}
                        disabled={isSubmitting}
                      />
                      {error && (
                        <p className="text-sm text-destructive mt-2">{error}</p>
                      )}
                    </div>
                    <Button
                      type="submit"
                      size="lg"
                      variant="secondary"
                      className="w-full group"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Subscribing..." : config.buttonText}
                      <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                    </Button>
                    <p className="text-xs text-muted-foreground text-center">
                      We respect your privacy. Unsubscribe at any time.
                    </p>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
