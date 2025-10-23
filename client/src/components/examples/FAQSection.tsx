import FAQSection from '../FAQSection';

export default function FAQSectionExample() {
  const faqs = [
    {
      question: "O material cobre todos os livros da Bíblia?",
      answer: "Sim, o Mapa da Bíblia é um guia completo que abrange todos os 73 livros da Bíblia, incluindo tanto o Antigo quanto o Novo Testamento."
    },
    {
      question: "O material é digital?",
      answer: "Sim, você receberá acesso imediato aos arquivos digitais em PDF para estudar em qualquer dispositivo."
    },
    {
      question: "Como vou receber o acesso?",
      answer: "Após a confirmação do pagamento, você receberá um e-mail com as instruções de acesso à área de membros."
    }
  ];

  return <FAQSection items={faqs} />;
}
