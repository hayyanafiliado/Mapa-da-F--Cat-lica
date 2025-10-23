interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionHeader({ title, subtitle, centered = true }: SectionHeaderProps) {
  return (
    <div className={`space-y-4 ${centered ? 'text-center' : ''}`}>
      <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary" data-testid="section-title">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto" data-testid="section-subtitle">
          {subtitle}
        </p>
      )}
    </div>
  );
}
