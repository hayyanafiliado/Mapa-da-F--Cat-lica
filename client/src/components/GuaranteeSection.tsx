import StarRating from "./StarRating";

export default function GuaranteeSection() {
  return (
    <div className="text-center space-y-8 py-16" data-testid="section-guarantee">
      <div className="inline-block relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-chart-4 to-accent rounded-3xl blur-2xl opacity-30 animate-pulse"></div>
        <div className="relative border-4 border-primary/40 rounded-3xl p-10 space-y-4 bg-gradient-to-br from-background via-muted/50 to-background backdrop-blur-xl shadow-2xl">
          <div className="text-7xl font-heading font-extrabold bg-gradient-to-r from-primary via-chart-4 to-accent bg-clip-text text-transparent">
            7DIAS
          </div>
          <div className="bg-gradient-to-r from-primary via-chart-4 to-accent text-primary-foreground py-3 px-8 font-bold text-xl rounded-xl shadow-lg">
            DE GARANTIA
          </div>
          <StarRating rating={5} size="lg" />
        </div>
      </div>
      
      <h3 className="font-heading font-bold text-3xl md:text-4xl bg-gradient-to-r from-primary via-chart-4 to-accent bg-clip-text text-transparent">
        7 Dias de Garantia
      </h3>
      
      <p className="text-xl text-foreground max-w-2xl mx-auto leading-relaxed">
        Confiamos tanto na <span className="font-semibold text-primary">qualidade do nosso material</span>, que oferecemos{" "}
        <span className="font-semibold text-primary">garantia de 7 dias!</span>
      </p>
      
      <p className="text-lg text-foreground/80 max-w-2xl mx-auto leading-relaxed">
        Caso não fique totalmente satisfeito, devolvemos 100% do seu dinheiro, dentro deste prazo.
      </p>
    </div>
  );
}
