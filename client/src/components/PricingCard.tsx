import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import FeatureList from "./FeatureList";
import CTAButton from "./CTAButton";

interface PricingCardProps {
  originalPrice: string;
  currentPrice: string;
  features: string[];
  badge?: string;
}

export default function PricingCard({ 
  originalPrice, 
  currentPrice, 
  features,
  badge 
}: PricingCardProps) {
  return (
    <Card className="max-w-md mx-auto border-2 border-primary" data-testid="card-pricing">
      <CardHeader className="text-center space-y-4 pb-6">
        {badge && (
          <div className="bg-primary text-primary-foreground py-2 px-4 rounded-md font-bold -mx-6 -mt-6 mb-4">
            {badge}
          </div>
        )}
        <div className="space-y-2">
          <p className="text-lg text-muted-foreground">
            De <span className="line-through">{originalPrice}</span> por
          </p>
          <p className="font-heading font-extrabold text-5xl text-primary">
            {currentPrice}
          </p>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <FeatureList items={features} iconColor="text-chart-2" />
        <CTAButton className="w-full" />
        <p className="text-xs text-center text-muted-foreground">
          Compra segura - por apenas de 30 dias<br />
          Suporte aos alunos exclusivo para dúvidas, perguntas e experiências
        </p>
      </CardContent>
    </Card>
  );
}
