import { useState, useEffect, useCallback } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Testimonial } from "@/data/siteConfig";

interface TestimonialsSliderProps {
  testimonials: Testimonial[];
}

const TestimonialsSlider = ({ testimonials }: TestimonialsSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, [testimonials.length]);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  return (
    <div 
      className="relative max-w-4xl mx-auto"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Slides Container */}
      <div className="overflow-hidden rounded-2xl">
        <div 
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial) => (
            <article 
              key={testimonial.id} 
              className="w-full flex-shrink-0 p-8 md:p-12 bg-card border border-border rounded-2xl"
            >
              <div className="flex flex-col items-center text-center">
                {/* Avatar */}
                <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mb-6">
                  <span className="text-2xl font-bold text-primary">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={24} className="text-primary fill-primary" />
                  ))}
                </div>
                
                {/* Quote */}
                <blockquote className="text-xl md:text-2xl text-foreground mb-8 leading-relaxed max-w-2xl">
                  "{testimonial.content}"
                </blockquote>
                
                {/* Author */}
                <footer>
                  <cite className="not-italic">
                    <p className="font-bold text-lg text-foreground">{testimonial.name}</p>
                    <p className="text-muted-foreground">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </cite>
                </footer>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <Button
        variant="outline"
        size="icon"
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 rounded-full shadow-lg"
        aria-label="Previous testimonial"
      >
        <ChevronLeft size={20} />
      </Button>
      <Button
        variant="outline"
        size="icon"
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 rounded-full shadow-lg"
        aria-label="Next testimonial"
      >
        <ChevronRight size={20} />
      </Button>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 mt-8">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentIndex 
                ? "bg-primary w-8" 
                : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialsSlider;
