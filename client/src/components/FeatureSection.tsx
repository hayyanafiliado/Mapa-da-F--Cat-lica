import FeatureList from "./FeatureList";

interface FeatureSectionProps {
  title: string;
  description: string;
  features: string[];
  image: string;
  imagePosition?: "left" | "right";
}

export default function FeatureSection({ 
  title, 
  description, 
  features, 
  image, 
  imagePosition = "left" 
}: FeatureSectionProps) {
  return (
    <div className={`grid md:grid-cols-2 gap-8 items-center ${imagePosition === "right" ? "md:grid-flow-dense" : ""}`}>
      <div className={imagePosition === "right" ? "md:col-start-2" : ""}>
        <div className="bg-muted rounded-lg p-4">
          <img src={image} alt={title} className="w-full h-auto rounded" />
        </div>
      </div>
      
      <div className="space-y-6">
        <h3 className="font-heading font-bold text-2xl md:text-3xl text-primary">
          {title}
        </h3>
        <p className="text-foreground leading-relaxed">
          {description}
        </p>
        {features.length > 0 && <FeatureList items={features} />}
      </div>
    </div>
  );
}
