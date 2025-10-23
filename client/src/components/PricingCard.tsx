import { Card, CardContent, CardHeader } from "@/components/ui/card";
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
    <Card 
      className="max-w-md mx-auto border-2 border-primary/30 backdrop-blur-xl bg-gradient-to-br from-card via-background to-muted/30 shadow-2xl shadow-primary/20 rounded-3xl overflow-hidden" 
      data-testid="card-pricing"
    >
      <CardHeader className="text-center space-y-6 pb-6">
        {badge && (
          <div className="bg-gradient-to-r from-primary via-chart-4 to-accent text-primary-foreground py-3 px-6 rounded-2xl font-bold text-sm -mx-6 -mt-6 mb-4 shadow-lg">
            {badge}
          </div>
        )}
        <div className="space-y-3">
          <p className="text-lg text-muted-foreground">
            De <span className="line-through opacity-60">{originalPrice}</span> por
          </p>
          <div className="relative inline-block">
            <p className="font-heading font-extrabold text-6xl bg-gradient-to-r from-primary via-chart-4 to-accent bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(124,58,237,0.5)]">
              {currentPrice}
            </p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-8 pt-4">
        <div className="bg-muted/30 backdrop-blur-sm rounded-2xl p-6">
          <FeatureList items={features} iconColor="text-accent" />
        </div>
        <CTAButton className="w-full" />
        <p className="text-xs text-center text-muted-foreground leading-relaxed">
          Compra segura - por apenas de 30 dias<br />
          Suporte aos alunos exclusivo para dúvidas, perguntas e experiências
        </p>
      </CardContent>
    </Card>
  );
}
