import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import ThemeAwareLogo from "@/components/ThemeAwareLogo";
import LinkedinIcon from "@/components/LinkedinIcon";
import TwitterIcon from "@/components/TwitterIcon";
import InstagramIcon from "@/components/InstagramIcon";
import YoutubeIcon from "@/components/YoutubeIcon";
import FacebookIcon from "@/components/FacebookIcon";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { brand, contact, footer } = siteConfig;

  const iconMap = {
    linkedin: LinkedinIcon,
    twitter: TwitterIcon,
    instagram: InstagramIcon,
    facebook: FacebookIcon,
    youtube: YoutubeIcon,
  } as const;

  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-3">
              <ThemeAwareLogo className="h-10 w-10" alt={`${brand.name} Logo`} />
              <span className="text-3xl font-bold dark:text-[#ffffff] text-primary font-Caesar">{brand.name.toLowerCase()}</span>
            </Link>
            <p className="text-muted-foreground text-sm">
              {footer.tagline}
            </p>
            <div className="flex space-x-4">
              {footer.socialLinks.map((social) => {
                if (!social.isActive) return null;
                const Icon = iconMap[social.id as keyof typeof iconMap];
                return Icon ? (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label={`Follow us on ${social.platform}`}
                  >
                    <Icon size={20} />
                  </a>
                ) : null;
              })}
            </div>
          </div>

          {/* Dynamic Footer Columns */}
          {footer.columns.map((column, index) => (
            <div key={index}>
              <h3 className="font-semibold mb-4">{column.title}</h3>
              <ul className="space-y-2">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      to={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-muted-foreground text-sm">
                <Mail size={16} className="text-primary flex-shrink-0" />
                <a href={`mailto:${contact.email}`} className="hover:text-primary transition-colors">
                  {contact.email}
                </a>
              </li>
              <li className="flex items-center space-x-2 text-muted-foreground text-sm">
                <Phone size={16} className="text-primary flex-shrink-0" />
                <a href={`tel:${contact.phone.replace(/\s/g, "")}`} className="hover:text-primary transition-colors">
                  {contact.phone}
                </a>
              </li>
              <li className="flex items-center space-x-2 text-muted-foreground text-sm">
                <MapPin size={16} className="text-primary flex-shrink-0" />
                <span>{contact.city}, {contact.country}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            {footer.copyright.replace("{year}", currentYear.toString())}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
