interface BonusCardProps {
  title: string;
  description: string;
  image: string;
}

export default function BonusCard({ title, description, image }: BonusCardProps) {
  return (
    <div className="space-y-4" data-testid={`bonus-card-${title.toLowerCase().replace(/\s+/g, '-')}`}>
      <div className="bg-muted rounded-lg p-6 flex items-center justify-center h-48">
        <img src={image} alt={title} className="max-h-full max-w-full object-contain" />
      </div>
      <div className="space-y-2">
        <h3 className="font-heading font-bold text-xl text-primary">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
