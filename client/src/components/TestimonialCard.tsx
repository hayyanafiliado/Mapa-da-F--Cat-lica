import { Card, CardContent } from "@/components/ui/card";
import StarRating from "./StarRating";

interface TestimonialCardProps {
  name: string;
  text: string;
  rating?: number;
}

export default function TestimonialCard({ name, text, rating = 5 }: TestimonialCardProps) {
  return (
    <Card 
      className="h-full backdrop-blur-sm bg-gradient-to-br from-card via-card to-muted/50 border-l-4 border-l-primary/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] rounded-2xl" 
      data-testid={`card-testimonial-${name.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <CardContent className="p-8 space-y-4">
        <StarRating rating={rating} />
        <p className="text-primary font-bold text-lg">{name}</p>
        <p className="text-foreground/90 leading-relaxed">{text}</p>
      </CardContent>
    </Card>
  );
}
