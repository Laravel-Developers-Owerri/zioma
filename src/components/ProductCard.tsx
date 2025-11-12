import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface ProductCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
}

const ProductCard = ({ id, title, description, image, category }: ProductCardProps) => {
  return (
    <Link
      to={`/products/${id}`}
      className="group block rounded-xl overflow-hidden bg-card border border-border hover-lift hover:border-primary/50 transition-all duration-300"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4">
          <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary text-primary-foreground">
            {category}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        <div className="flex items-center text-primary font-medium group-hover:gap-2 transition-all">
          View Case Study <ArrowRight size={18} className="ml-1" />
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
