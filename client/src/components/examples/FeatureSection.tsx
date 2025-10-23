import FeatureSection from '../FeatureSection';

export default function FeatureSectionExample() {
  const features = [
    "Antigo e Novo Testamento",
    "Seções E Livros",
    "Gêneros Literários",
    "Tabela Periódica Da Bíblia"
  ];

  return (
    <FeatureSection 
      title="Panorama da Bíblia"
      description="Entenda como a Bíblia está organizada: suas divisões, seções e categorias literárias. Este guia visual transforma os livros e a mensagem central das Escrituras."
      features={features}
      image="https://placehold.co/600x400/e3e3e3/666666?text=Panorama"
      imagePosition="left"
    />
  );
}
