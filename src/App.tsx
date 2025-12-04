import { useState, useEffect, useCallback } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CookieConsent, { getCookieConsent } from "./components/CookieConsent";
import NewsletterModal from "./components/NewsletterModal";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";
import Career from "./pages/Career";
import CareerDetail from "./pages/CareerDetail";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import { useNewsletterConfig } from "./data/siteConfig";

const queryClient = new QueryClient();

const AppContent = () => {
  const { config: newsletterConfig } = useNewsletterConfig();
  const [cookieConsentGiven, setCookieConsentGiven] = useState(() => {
    return getCookieConsent() !== null;
  });
  const [showNewsletterModal, setShowNewsletterModal] = useState(false);

  const handleCookieConsent = useCallback(() => {
    setCookieConsentGiven(true);
  }, []);

  useEffect(() => {
    // Show newsletter modal after cookie consent with delay
    if (cookieConsentGiven && newsletterConfig.enabled) {
      const dismissed = localStorage.getItem("ziomasoft_newsletter_dismissed");
      const subscribed = localStorage.getItem("ziomasoft_newsletter_subscribed");
      
      if (!dismissed && !subscribed) {
        const timer = setTimeout(() => {
          setShowNewsletterModal(true);
        }, newsletterConfig.delayMs);
        
        return () => clearTimeout(timer);
      }
    }
  }, [cookieConsentGiven, newsletterConfig.enabled, newsletterConfig.delayMs]);

  return (
    <BrowserRouter>
      <ScrollToTop />
      
      {/* Cookie Consent - blocks interaction until consent is given */}
      {!cookieConsentGiven && (
        <CookieConsent onConsentGiven={handleCookieConsent} />
      )}

      {/* Newsletter Modal - shows after cookie consent */}
      <NewsletterModal
        show={showNewsletterModal}
        onClose={() => setShowNewsletterModal(false)}
      />

      <div className={`flex flex-col min-h-screen ${!cookieConsentGiven ? 'pointer-events-none' : ''}`}>
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:id" element={<ServiceDetail />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogDetail />} />
            <Route path="/career" element={<Career />} />
            <Route path="/career/:id" element={<CareerDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <AppContent />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
