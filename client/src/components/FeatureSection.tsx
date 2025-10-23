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
    <div className={`grid md:grid-cols-2 gap-12 items-center ${imagePosition === "right" ? "md:grid-flow-dense" : ""}`}>
      <div className={imagePosition === "right" ? "md:col-start-2" : ""}>
        <div className="backdrop-blur-xl bg-gradient-to-br from-muted/50 to-background/30 rounded-3xl p-6 border border-primary/10 shadow-xl hover:shadow-2xl transition-all duration-500 group">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-auto rounded-2xl transition-transform duration-500 group-hover:scale-105" 
          />
        </div>
      </div>
      
      <div className="space-y-8">
        <h3 className="font-heading font-bold text-3xl md:text-4xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          {title}
        </h3>
        <p className="text-foreground/90 leading-relaxed text-lg">
          {description}
        </p>
        {features.length > 0 && (
          <div className="backdrop-blur-sm bg-muted/30 rounded-2xl p-6 border border-primary/10">
            <FeatureList items={features} />
          </div>
        )}
      </div>
    </div>
  );
}
