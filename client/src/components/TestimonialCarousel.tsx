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
      <Card>
        <CardContent className="p-0">
          <img 
            src={testimonials[currentIndex].image} 
            alt="Depoimento" 
            className="w-full h-auto rounded-lg"
          />
        </CardContent>
      </Card>

      <div className="flex items-center justify-center gap-4 mt-4">
        <Button 
          size="icon" 
          variant="ghost" 
          onClick={prev}
          data-testid="button-carousel-prev"
        >
          <ChevronLeft className="w-5 h-5" />
        </Button>
        
        <div className="flex gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex ? 'bg-primary w-6' : 'bg-gray-300'
              }`}
              data-testid={`carousel-dot-${index}`}
            />
          ))}
        </div>

        <Button 
          size="icon" 
          variant="ghost" 
          onClick={next}
          data-testid="button-carousel-next"
        >
          <ChevronRight className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
}
