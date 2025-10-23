import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

interface CTAButtonProps {
  children?: string;
  variant?: "default" | "outline";
  className?: string;
  onClick?: () => void;
}

export default function CTAButton({ 
  children = "QUERO O MEU!", 
  variant = "default",
  className = "",
  onClick
}: CTAButtonProps) {
  return (
    <Button 
      size="lg"
      variant={variant === "default" ? "default" : "outline"}
      className={`font-heading font-bold text-lg px-12 py-7 rounded-2xl transition-all duration-300 ${
        variant === "default" 
          ? "bg-gradient-to-r from-primary via-chart-4 to-accent shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover:scale-105" 
          : "border-2 border-primary/30 backdrop-blur-sm hover:border-primary/60 hover:bg-primary/5"
      } ${className}`}
      onClick={onClick}
      data-testid="button-cta"
    >
      {variant === "default" && <ShoppingCart className="w-5 h-5 mr-2" />}
      {children}
    </Button>
  );
}
