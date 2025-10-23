import StarRating from "./StarRating";

export default function GuaranteeSection() {
  return (
    <div className="text-center space-y-6 py-12" data-testid="section-guarantee">
      <div className="inline-block">
        <div className="border-4 border-primary rounded-lg p-6 space-y-3">
          <div className="text-6xl font-heading font-extrabold text-foreground">30DIAS</div>
          <div className="bg-primary text-primary-foreground py-2 px-6 font-bold text-lg">
            DE GARANTIA
          </div>
          <StarRating rating={5} size="lg" />
        </div>
      </div>
      
      <h3 className="font-heading font-bold text-2xl md:text-3xl text-primary">
        30 Dias de Garantia
      </h3>
      
      <p className="text-lg text-foreground max-w-2xl mx-auto leading-relaxed">
        Confiamos tanto na <span className="font-semibold">qualidade do nosso material</span>, que oferecemos{" "}
        <span className="font-semibold">garantia de 30 dias!</span>
      </p>
      
      <p className="text-foreground max-w-2xl mx-auto leading-relaxed">
        Caso não fique totalmente satisfeito, devolvemos 100% do seu dinheiro, dentro deste prazo.
      </p>
    </div>
  );
}
