import { Star } from "lucide-react";

interface StarRatingProps {
  rating?: number;
  maxStars?: number;
  size?: "sm" | "md" | "lg";
}

export default function StarRating({ rating = 5, maxStars = 5, size = "md" }: StarRatingProps) {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6"
  };

  return (
    <div className="flex gap-1" data-testid="star-rating">
      {Array.from({ length: maxStars }).map((_, index) => (
        <Star
          key={index}
          className={`${sizeClasses[size]} ${
            index < rating ? "fill-yellow-400 text-yellow-400" : "fill-gray-300 text-gray-300"
          }`}
        />
      ))}
    </div>
  );
}
