import { Check } from "lucide-react";

interface FeatureListProps {
  items: string[];
  iconColor?: string;
}

export default function FeatureList({ items, iconColor = "text-primary" }: FeatureListProps) {
  return (
    <div className="space-y-3">
      {items.map((item, index) => (
        <div key={index} className="flex items-start gap-3" data-testid={`feature-item-${index}`}>
          <div className="mt-0.5">
            <Check className={`w-5 h-5 ${iconColor}`} strokeWidth={3} />
          </div>
          <p className="text-foreground leading-relaxed">{item}</p>
        </div>
      ))}
    </div>
  );
}
