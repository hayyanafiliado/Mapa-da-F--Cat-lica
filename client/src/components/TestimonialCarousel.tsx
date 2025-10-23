import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Testimonial {
  id: number;
  image: string;
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}

export default function TestimonialCarousel({ testimonials }: TestimonialCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="relative max-w-sm mx-auto" data-testid="testimonial-carousel">
      <Card className="backdrop-blur-xl bg-card/30 border-primary/20 shadow-xl rounded-3xl overflow-hidden">
        <CardContent className="p-0">
          <img 
            src={testimonials[currentIndex].image} 
            alt="Depoimento" 
            className="w-full h-auto rounded-3xl"
          />
        </CardContent>
      </Card>

      <div className="flex items-center justify-center gap-6 mt-6">
        <Button 
          size="icon" 
          variant="ghost" 
          onClick={prev}
          className="rounded-full hover:bg-primary/10 transition-all"
          data-testid="button-carousel-prev"
        >
          <ChevronLeft className="w-6 h-6" />
        </Button>
        
        <div className="flex gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-gradient-to-r from-primary to-accent w-8 shadow-lg shadow-primary/50' 
                  : 'bg-muted-foreground/30 w-2 hover:bg-muted-foreground/50'
              }`}
              data-testid={`carousel-dot-${index}`}
            />
          ))}
        </div>

        <Button 
          size="icon" 
          variant="ghost" 
          onClick={next}
          className="rounded-full hover:bg-primary/10 transition-all"
          data-testid="button-carousel-next"
        >
          <ChevronRight className="w-6 h-6" />
        </Button>
      </div>
    </div>
  );
}
