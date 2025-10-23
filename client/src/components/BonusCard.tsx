interface BonusCardProps {
  title: string;
  description: string;
  image: string;
}

export default function BonusCard({ title, description, image }: BonusCardProps) {
  return (
    <div 
      className="space-y-6 group" 
      data-testid={`bonus-card-${title.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <div className="bg-gradient-to-br from-muted via-muted/50 to-background rounded-3xl p-8 flex items-center justify-center h-56 relative overflow-hidden border border-primary/10 group-hover:border-primary/30 transition-all duration-300">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <img src={image} alt={title} className="max-h-full max-w-full object-contain relative z-10 transition-transform duration-300 group-hover:scale-110" />
      </div>
      <div className="space-y-3">
        <h3 className="font-heading font-bold text-2xl text-primary">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
