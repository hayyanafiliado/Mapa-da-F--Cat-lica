import { Card, CardContent } from "@/components/ui/card";
import StarRating from "./StarRating";

interface TestimonialCardProps {
  name: string;
  text: string;
  rating?: number;
}

export default function TestimonialCard({ name, text, rating = 5 }: TestimonialCardProps) {
  return (
    <Card className="h-full" data-testid={`card-testimonial-${name.toLowerCase().replace(/\s+/g, '-')}`}>
      <CardContent className="p-6 space-y-4">
        <StarRating rating={rating} />
        <p className="text-muted-foreground font-semibold text-primary">{name}</p>
        <p className="text-foreground leading-relaxed">{text}</p>
      </CardContent>
    </Card>
  );
}
