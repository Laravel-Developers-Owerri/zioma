import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const ServiceCard = ({ icon: Icon, title, description }: ServiceCardProps) => {
  return (
    <div className="group p-6 rounded-xl bg-card border border-border hover-lift hover:border-primary/50 transition-all duration-300">
      <div className="w-14 h-14 rounded-lg bg-secondary flex items-center justify-center mb-4 transition-all duration-300">
        <Icon className="text-secondary-foreground" size={28} />
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

export default ServiceCard;
