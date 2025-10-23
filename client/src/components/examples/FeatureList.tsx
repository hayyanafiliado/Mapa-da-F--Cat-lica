import FeatureList from '../FeatureList';

export default function FeatureListExample() {
  const features = [
    "Resumo Do Livro",
    "Simbologias E Temas Centrais",
    "Principais Nomes",
    "Linha Do Tempo E Eventos",
    "Versículos-Chave"
  ];

  return <FeatureList items={features} />;
}
