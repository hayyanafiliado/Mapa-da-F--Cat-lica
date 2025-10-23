interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  gradient?: boolean;
}

export default function SectionHeader({ title, subtitle, centered = true, gradient = true }: SectionHeaderProps) {
  return (
    <div className={`space-y-6 ${centered ? 'text-center' : ''}`}>
      <h2 
        className={`font-heading font-bold text-4xl md:text-5xl leading-tight ${
          gradient 
            ? "bg-gradient-to-r from-primary via-chart-4 to-accent bg-clip-text text-transparent" 
            : "text-foreground"
        }`}
        data-testid="section-title"
      >
        {title}
      </h2>
      {subtitle && (
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed" data-testid="section-subtitle">
          {subtitle}
        </p>
      )}
    </div>
  );
}
