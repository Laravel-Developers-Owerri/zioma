import { useState, useEffect } from "react";
import { X, Mail, Sparkles, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNewsletterConfig } from "@/data/siteConfig";
import { z } from "zod";
// import { subscribeToNewsletter } from "@/api/content";

const NEWSLETTER_DISMISSED_KEY = "ziomasoft_newsletter_dismissed";
const NEWSLETTER_SUBSCRIBED_KEY = "ziomasoft_newsletter_subscribed";

const emailSchema = z.string().email("Please enter a valid email address");

interface NewsletterModalProps {
  show: boolean;
  onClose: () => void;
}

const NewsletterModal = ({ show, onClose }: NewsletterModalProps) => {
  const { config } = useNewsletterConfig();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    // Check if already dismissed or subscribed
    const dismissed = localStorage.getItem(NEWSLETTER_DISMISSED_KEY);
    const subscribed = localStorage.getItem(NEWSLETTER_SUBSCRIBED_KEY);
    if (dismissed || subscribed) {
      onClose();
    }
  }, [onClose]);

  const handleClose = () => {
    localStorage.setItem(NEWSLETTER_DISMISSED_KEY, "true");
    onClose();
  };

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
      
      localStorage.setItem(NEWSLETTER_SUBSCRIBED_KEY, "true");
      setIsSuccess(true);
      
      // Auto close after success
      setTimeout(() => {
        onClose();
      }, 3000);
    } catch (err) {
      setError("Failed to subscribe. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!show || !config.enabled) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background/80 backdrop-blur-sm animate-fade-in">
      <div className="w-full max-w-xl mx-4 bg-card border border-border rounded-2xl shadow-2xl overflow-hidden relative">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-colors z-10"
          aria-label="Close newsletter popup"
        >
          <X size={18} />
        </button>

        {/* Background Decoration */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-br from-primary/10 via-secondary/10 to-transparent" />
        <div className="absolute top-10 right-10 w-20 h-20 bg-secondary/20 rounded-full blur-2xl" />
        <div className="absolute top-20 left-10 w-16 h-16 bg-primary/20 rounded-full blur-2xl" />

        {/* Content */}
        <div className="relative p-8 pt-16 text-center">
          {isSuccess ? (
            // Success State
            <div className="py-8 animate-fade-in">
              <div className="w-20 h-20 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="text-green-600 dark:text-green-400" size={40} />
              </div>
              <h2 className="text-2xl font-bold mb-3">Thank You!</h2>
              <p className="text-muted-foreground">
                {config.successMessage}
              </p>
            </div>
          ) : (
            // Form State
            <>
              {/* Icon */}
              <div className="w-20 h-20 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-6">
                <Mail className="text-secondary" size={36} />
              </div>

              {/* Title & Subtitle */}
              <div className="flex items-center justify-center gap-2 mb-2">
                <Sparkles size={18} className="text-secondary" />
                <span className="text-secondary font-medium text-sm">{config.subtitle}</span>
              </div>
              <h2 className="text-3xl font-bold mb-4">{config.title}</h2>
              <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                {config.description}
              </p>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4 max-w-sm mx-auto">
                <div>
                  <Input
                    type="email"
                    placeholder={config.placeholder}
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setError("");
                    }}
                    className={`h-12 text-center ${error ? "border-destructive" : ""}`}
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
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Subscribing..." : config.buttonText}
                </Button>
              </form>

              {/* Skip */}
              <button
                onClick={handleClose}
                className="mt-6 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                No thanks, maybe later
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewsletterModal;
