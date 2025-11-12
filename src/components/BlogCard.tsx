import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight } from "lucide-react";

interface BlogCardProps {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
}

const BlogCard = ({ id, title, excerpt, date, readTime, category, image }: BlogCardProps) => {
  return (
    <Link
      to={`/blog/${id}`}
      className="group block rounded-xl overflow-hidden bg-card border border-border hover-lift hover:border-primary/50 transition-all duration-300"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary text-primary-foreground">
            {category}
          </span>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
          <span className="flex items-center gap-1">
            <Calendar size={14} />
            {date}
          </span>
          <span className="flex items-center gap-1">
            <Clock size={14} />
            {readTime}
          </span>
        </div>
        <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
          {title}
        </h3>
        <p className="text-muted-foreground mb-4 line-clamp-2">{excerpt}</p>
        <div className="flex items-center text-primary font-medium group-hover:gap-2 transition-all">
          Read More <ArrowRight size={18} className="ml-1" />
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
