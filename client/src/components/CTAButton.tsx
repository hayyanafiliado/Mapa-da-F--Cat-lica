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
      className={`font-heading font-bold text-lg px-12 py-6 ${className}`}
      onClick={onClick}
      data-testid="button-cta"
    >
      {variant === "default" && <ShoppingCart className="w-5 h-5 mr-2" />}
      {children}
    </Button>
  );
}
