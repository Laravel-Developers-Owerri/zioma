import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Shield, ChevronDown, ChevronUp } from "lucide-react";
import { useCookieConfig } from "@/data/siteConfig";
import { Link } from "react-router-dom";

const COOKIE_CONSENT_KEY = "ziomasoft_cookie_consent";

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  functional: boolean;
  [key: string]: boolean;
}

export const getCookieConsent = (): CookiePreferences | null => {
  const stored = localStorage.getItem(COOKIE_CONSENT_KEY);
  if (stored) {
    try {
      return JSON.parse(stored);
    } catch {
      return null;
    }
  }
  return null;
};

export const setCookieConsent = (preferences: CookiePreferences) => {
  localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(preferences));
};

interface CookieConsentProps {
  onConsentGiven: () => void;
}

const CookieConsent = ({ onConsentGiven }: CookieConsentProps) => {
  const { config } = useCookieConfig();
  const [showCustomize, setShowCustomize] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>(() => {
    const initial: CookiePreferences = { necessary: true, analytics: false, marketing: false, functional: false };
    config.options.forEach(opt => {
      initial[opt.id] = opt.defaultEnabled;
    });
    return initial;
  });

  useEffect(() => {
    // Check if consent already given
    const existingConsent = getCookieConsent();
    if (existingConsent) {
      onConsentGiven();
    }
  }, [onConsentGiven]);

  const handleAcceptAll = () => {
    const allAccepted: CookiePreferences = { necessary: true, analytics: true, marketing: true, functional: true };
    config.options.forEach(opt => {
      allAccepted[opt.id] = true;
    });
    setCookieConsent(allAccepted);
    onConsentGiven();
  };

  const handleAcceptNecessary = () => {
    const necessaryOnly: CookiePreferences = { necessary: true, analytics: false, marketing: false, functional: false };
    config.options.forEach(opt => {
      necessaryOnly[opt.id] = opt.required;
    });
    setCookieConsent(necessaryOnly);
    onConsentGiven();
  };

  const handleSavePreferences = () => {
    setCookieConsent(preferences);
    onConsentGiven();
  };

  const togglePreference = (id: string, required: boolean) => {
    if (required) return; // Can't toggle required cookies
    setPreferences(prev => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  if (!config.enabled) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background/80 backdrop-blur-sm">
      <div className="w-full max-w-lg mx-4 bg-card border border-border rounded-2xl shadow-2xl overflow-hidden animate-fade-in">
        {/* Header */}
        <div className="p-6 bg-primary/5 border-b border-border">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Shield className="text-primary" size={20} />
            </div>
            <h2 className="text-xl font-bold">{config.title}</h2>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {config.description}
          </p>
        </div>

        {/* Cookie Options (Customizable) */}
        {showCustomize && (
          <div className="p-6 space-y-4 max-h-64 overflow-y-auto border-b border-border">
            {config.options.map((option) => (
              <div
                key={option.id}
                className="flex items-start justify-between gap-4 p-3 rounded-lg bg-muted/30"
              >
                <div className="flex-1">
                  <Label htmlFor={option.id} className="font-medium cursor-pointer">
                    {option.name}
                    {option.required && (
                      <span className="ml-2 text-xs text-muted-foreground">(Required)</span>
                    )}
                  </Label>
                  <p className="text-xs text-muted-foreground mt-1">
                    {option.description}
                  </p>
                </div>
                <Switch
                  id={option.id}
                  checked={preferences[option.id] ?? option.defaultEnabled}
                  onCheckedChange={() => togglePreference(option.id, option.required)}
                  disabled={option.required}
                />
              </div>
            ))}
          </div>
        )}

        {/* Actions */}
        <div className="p-6 space-y-4">
          {/* Toggle Customize */}
          <button
            onClick={() => setShowCustomize(!showCustomize)}
            className="flex items-center gap-2 text-sm text-primary hover:underline w-full justify-center"
          >
            {showCustomize ? (
              <>
                <ChevronUp size={16} />
                Hide Options
              </>
            ) : (
              <>
                <ChevronDown size={16} />
                {config.customizeText}
              </>
            )}
          </button>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            {showCustomize ? (
              <Button onClick={handleSavePreferences} className="flex-1">
                {config.savePreferencesText}
              </Button>
            ) : (
              <>
                <Button onClick={handleAcceptAll} className="flex-1" variant="secondary">
                  {config.acceptAllText}
                </Button>
                <Button onClick={handleAcceptNecessary} variant="outline" className="flex-1">
                  {config.acceptNecessaryText}
                </Button>
              </>
            )}
          </div>

          {/* Privacy Policy Link */}
          <p className="text-xs text-center text-muted-foreground">
            By using our website, you agree to our{" "}
            <Link to={config.privacyPolicyUrl} className="text-primary hover:underline">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
