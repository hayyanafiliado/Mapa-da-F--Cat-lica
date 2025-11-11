import PricingCard from '../PricingCard';

export default function PricingCardExample() {
  const features = [
    "Mapa da Bíblia Completo",
    "3 Bônus Exclusivos",
    "Acesso Vitalício",
    "7 Dias de Garantia"
  ];

  return (
    <PricingCard 
      originalPrice="R$ 97,00"
      currentPrice="R$ 37"
      features={features}
      badge="Desconto Especial Hoje: Quinta-Feira, Outubro 23, 2025"
    />
  );
}
