import { Link } from "react-router-dom";
import { MapPin, Briefcase, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CareerCardProps {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
}

const CareerCard = ({ id, title, department, location, type }: CareerCardProps) => {
  return (
    <div className="p-6 rounded-xl bg-card border border-border hover-lift hover:border-primary/50 transition-all duration-300">
      <div className="mb-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-primary font-medium">{department}</p>
      </div>
      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-6">
        <span className="flex items-center gap-1">
          <MapPin size={16} />
          {location}
        </span>
        <span className="flex items-center gap-1">
          <Briefcase size={16} />
          {type}
        </span>
        <span className="flex items-center gap-1">
          <Clock size={16} />
          Full-time
        </span>
      </div>
      <Button asChild variant="outline" className="w-full group">
        <Link to={`/career/${id}`}>
          View Details
        </Link>
      </Button>
    </div>
  );
};

export default CareerCard;
