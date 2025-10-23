import { ChevronDown } from "lucide-react";
import CTAButton from "@/components/CTAButton";
import SectionHeader from "@/components/SectionHeader";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import FeatureList from "@/components/FeatureList";
import FeatureSection from "@/components/FeatureSection";
import TestimonialCard from "@/components/TestimonialCard";
import BonusCard from "@/components/BonusCard";
import PricingCard from "@/components/PricingCard";
import GuaranteeSection from "@/components/GuaranteeSection";
import FAQSection from "@/components/FAQSection";
import WhatsAppButton from "@/components/WhatsAppButton";
import bibleMapImage from "@assets/generated_images/Bible_map_product_mockup_c6ac437a.png";
import panoramaImage from "@assets/generated_images/Bible_panorama_infographic_6ef3ad7b.png";
import timelineImage from "@assets/generated_images/Biblical_timeline_infographic_923ea519.png";

export default function Home() {
  //todo: remove mock functionality - Testimonial carousel data
  const carouselTestimonials = [
    { id: 1, image: "https://placehold.co/400x600/f0f0f0/0066FF?text=Depoimento+1" },
    { id: 2, image: "https://placehold.co/400x600/f0f0f0/0066FF?text=Depoimento+2" },
    { id: 3, image: "https://placehold.co/400x600/f0f0f0/0066FF?text=Depoimento+3" },
    { id: 4, image: "https://placehold.co/400x600/f0f0f0/0066FF?text=Depoimento+4" },
  ];

  //todo: remove mock functionality - FAQ data
  const faqItems = [
    {
      question: "O material cobre todos os livros da Bíblia?",
      answer: "Sim, o Mapa da Bíblia é um guia completo que abrange todos os 73 livros da Bíblia, incluindo tanto o Antigo quanto o Novo Testamento."
    },
    {
      question: "O material é digital?",
      answer: "Sim, você receberá acesso digital em formato PDF para estudar no celular, tablet ou computador e estudar em qualquer lugar."
    },
    {
      question: "Como vou receber o acesso?",
      answer: "Após a confirmação do pagamento, você receberá imediatamente um e-mail com o link de acesso à área exclusiva de membros."
    },
    {
      question: "Substitui a necessidade de usar a Bíblia durante o estudo?",
      answer: "Não, o Mapa da Bíblia é um material complementar que facilita o entendimento e organização dos estudos, mas não substitui a leitura da Sagrada Escritura."
    },
    {
      question: "É para católicos?",
      answer: "Sim! O material foi desenvolvido conforme a tradição católica e inclui todos os 73 livros da Bíblia Católica."
    }
  ];

  //todo: remove mock functionality - Pricing features
  const pricingFeatures = [
    "Mapa da Bíblia Completo",
    "3 Bônus Exclusivos",
    "Acesso Vitalício",
    "30 Dias de Garantia"
  ];

  const handleCTAClick = () => {
    console.log('CTA clicked - redirecting to checkout');
    //todo: remove mock functionality - Replace with actual checkout logic
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-muted to-background py-12 md:py-20">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center space-y-8">
            <div className="inline-block">
              <img 
                src="https://placehold.co/200x60/0066FF/FFFFFF?text=MAPA+DO+CATOLICO" 
                alt="Mapa do Católico" 
                className="h-12 mx-auto"
              />
            </div>
            
            <h1 className="font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl text-primary leading-tight max-w-4xl mx-auto">
              Entenda os 73 livros da Bíblia de forma simples e viva a transformação da Palavra em sua vida.
            </h1>
            
            <p className="text-lg md:text-xl text-foreground max-w-3xl mx-auto leading-relaxed">
              Um jeito <span className="font-semibold">fácil e eficiente</span>, aprovado por{" "}
              <span className="font-semibold">milhares de católicos</span>, para{" "}
              <span className="font-semibold">aprender a Palavra de Deus</span> de forma simples, sem complicação, e que não consegue emendar a Bíblia.
            </p>

            <div className="py-8">
              <TestimonialCarousel testimonials={carouselTestimonials} />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center flex-wrap">
              <CTAButton onClick={handleCTAClick} />
              <CTAButton variant="outline" onClick={() => console.log('Conheça clicked')}>
                CONHEÇA
              </CTAButton>
            </div>

            <div className="pt-8 flex justify-center">
              <ChevronDown className="w-8 h-8 text-primary animate-bounce" />
            </div>
          </div>
        </div>
      </section>

      {/* Video Testimonials Section */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container max-w-6xl mx-auto px-4">
          <SectionHeader 
            title="O que estão dizendo sobre o Mapa da Bíblia."
            subtitle="O Mapa da Bíblia é incrível e milhares de católicos concordam com isso."
          />
          
          <div className="mt-12">
            <div className="max-w-sm mx-auto bg-muted rounded-lg p-4">
              <img 
                src="https://placehold.co/400x600/f0f0f0/0066FF?text=Video+Depoimento" 
                alt="Vídeo depoimento" 
                className="w-full rounded"
              />
            </div>
          </div>
        </div>
      </section>

      {/* De Gênesis a Apocalipse */}
      <section className="py-16 md:py-20 bg-muted">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center space-y-6 mb-12">
            <ChevronDown className="w-8 h-8 text-primary mx-auto" />
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary">
              De Gênesis a Apocalipse: <span className="text-foreground">conheça</span>{" "}
              <span className="text-foreground">toda a Bíblia</span> através de{" "}
              <span className="text-foreground">mapas didáticos</span> de todos os livros,{" "}
              <span className="text-foreground">na visão católica.</span>
            </h2>
          </div>

          <div className="max-w-sm mx-auto">
            <div className="bg-background rounded-lg p-4 shadow-md">
              <img src={bibleMapImage} alt="Mapa da Bíblia" className="w-full rounded" />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-20 bg-primary text-primary-foreground">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="space-y-6 text-center md:text-left">
            <p className="text-lg leading-relaxed">
              O Mapa da Bíblia são resumos visuais da Bíblia, conforme a{" "}
              <span className="font-semibold">tradição católica e a Bíblia Ave Maria</span>, 
              recursos visuais elaborados para{" "}
              <span className="font-semibold">simplificar e aprofundar a Palavra de Deus em sua totalidade</span>, 
              apresentando os seus principais ensinamentos de cada livro e contextos.
            </p>
            
            <p className="text-lg leading-relaxed">
              Com o Mapa da Bíblia, você poderá se dedicar ao estudo diário da Bíblia com mais facilidade,{" "}
              <span className="font-semibold">equipado com um guia eficaz</span> para navegar pelas páginas bíblicas e suas múltiplas dimensões.
            </p>
            
            <p className="text-lg leading-relaxed">
              Essa é a melhor forma de <span className="font-semibold">aprimorar seu conhecimento</span> bíblico, 
              obtendo uma compreensão mais profunda da Palavra e{" "}
              <span className="font-semibold">uma transformação espiritual profunda</span> ao mergulhar 
              nos ensinamentos ricos da Sagrada Escritura.
            </p>

            <div className="pt-6 flex justify-center md:justify-start">
              <WhatsAppButton />
            </div>
          </div>
        </div>
      </section>

      {/* José Marcos Testimonial */}
      <section className="py-16 md:py-20 bg-muted">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="bg-background rounded-lg p-6 md:p-8 shadow-sm">
            <p className="text-lg md:text-xl text-foreground italic leading-relaxed mb-6">
              "Me surpreendi com a clareza e profundidade que o material traz para o estudo da Bíblia Sagrada."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                JM
              </div>
              <div>
                <p className="font-semibold text-foreground">José Marcos</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mapa dos 73 Livros */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-6">
              Simplificando sua jornada espiritual e fortalecendo sua conexão com Deus.
            </h2>
            <div className="max-w-3xl mx-auto">
              <img src={bibleMapImage} alt="Mapa dos 73 Livros" className="w-full rounded-lg shadow-md" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-16">
            <div>
              <h3 className="font-heading font-bold text-2xl text-primary mb-6">
                Mapa dos 73 Livros
              </h3>
              <p className="text-foreground leading-relaxed mb-6">
                Explore cada um dos <span className="font-semibold">73 livros da Bíblia</span> através de mapas didáticos que apresentam{" "}
                <span className="font-semibold">resumos e elementos essenciais</span> que{" "}
                <span className="font-semibold">facilitam o entendimento da Palavra de Deus.</span>
              </p>
              <div className="space-y-3">
                <p className="font-semibold text-foreground">Em cada livro, você terá:</p>
                <FeatureList 
                  items={[
                    "Resumo Do Livro",
                    "Simbologias E Temas Centrais",
                    "Principais Nomes",
                    "Linha Do Tempo E Eventos",
                    "Versículos-Chave"
                  ]}
                />
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-muted rounded-lg p-4">
                <img 
                  src="https://placehold.co/500x300/f0f0f0/0066FF?text=Mapa+Tematico" 
                  alt="Mapa temático"
                  className="w-full rounded"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Panorama da Bíblia */}
      <section className="py-16 md:py-20 bg-muted">
        <div className="container max-w-6xl mx-auto px-4">
          <FeatureSection 
            title="Panorama da Bíblia"
            description="Entenda como a Bíblia está organizada: suas divisões, seções e categorias literárias. Este guia visual transforma entre os livros e a mensagem central das Escrituras."
            features={[
              "Antigo e Novo Testamento",
              "Seções E Livros",
              "Gêneros Literários",
              "Tabela Periódica Da Bíblia"
            ]}
            image={panoramaImage}
            imagePosition="right"
          />
        </div>
      </section>

      {/* Eventos Cronológicos */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container max-w-6xl mx-auto px-4">
          <FeatureSection 
            title="Eventos Cronológicos"
            description="Compreenda a sequência dos principais acontecimentos bíblicos em ordem cronológica, facilitando a memorização da narrativa da salvação e sua conexão ao longo dos tempos."
            features={[
              "Linha Do Tempo Bíblica",
              "Conexões Entre Eventos",
              "Contexto Histórico"
            ]}
            image={timelineImage}
            imagePosition="left"
          />
        </div>
      </section>

      {/* Registros da Fé */}
      <section className="py-16 md:py-20 bg-muted">
        <div className="container max-w-6xl mx-auto px-4">
          <FeatureSection 
            title="Registros da Fé"
            description="Um espaço dedicado para registrar insights, reflexões e aprendizados, ajudando a aplicar os ensinamentos bíblicos no seu dia a dia."
            features={[
              "Espaço Para Anotações",
              "Versículos E Reflexões",
              "Aplicação Prática"
            ]}
            image="https://placehold.co/600x400/f0f0f0/0066FF?text=Registros"
            imagePosition="right"
          />

          <div className="text-center mt-12">
            <CTAButton onClick={handleCTAClick} />
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container max-w-6xl mx-auto px-4">
          <SectionHeader 
            title="Aprovado por +1.000 fiéis católicos."
            subtitle="Nossos mapas são incríveis e quem tem acesso concorda com isso."
          />
          
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <TestimonialCard 
              name="Eduardo Mendes"
              text="Sempre achava difícil de entender a Bíblia, mas o Mapa da Bíblia me ajudou a enxergar tudo de forma clara e organizada. Agora, minha leitura tem muito mais sentido!"
            />
            <TestimonialCard 
              name="Ricardo Silva"
              text="Com o Mapa da Bíblia, finalmente consegui conectar os ensinamentos e histórias da Bíblia de forma lógica. Meu estudo nunca foi tão proveitoso!"
            />
            <TestimonialCard 
              name="Fábio Nunes"
              text="Eu estudava a Bíblia de forma fragmentada, mas com o Mapa da Bíblia passei a aplicar os ensinamentos da Bíblia na minha vida. Sou muito grato por esse material!"
            />
          </div>
        </div>
      </section>

      {/* What You'll Receive */}
      <section className="py-16 md:py-20 bg-muted">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <img 
                src="https://placehold.co/150x50/0066FF/FFFFFF?text=MAPA+DO+CATOLICO" 
                alt="Logo" 
                className="h-10"
              />
            </div>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary">
              O que você receberá no Mapa da Bíblia?
            </h2>
            <p className="text-lg text-muted-foreground mt-4">
              São mais de 250 páginas <span className="font-semibold">exclusivas!</span>
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="space-y-6">
              <div className="bg-background rounded-lg p-4">
                <img 
                  src={bibleMapImage} 
                  alt="Arquivos Digitais"
                  className="w-full rounded"
                />
              </div>
              <div>
                <h3 className="font-heading font-bold text-2xl text-primary mb-4">
                  Arquivos Digitais
                </h3>
                <p className="text-foreground leading-relaxed">
                  Material em PDF para acessar no celular, tablet ou computador e estudar em qualquer lugar. 
                  Incluindo: Mapa dos 73 Livros, Eventos Cronológicos, Panorama Bíblico, Registros da Fé e 
                  muito mais! São mais de 250 páginas.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-background rounded-lg p-4">
                <img 
                  src="https://placehold.co/500x300/f0f0f0/0066FF?text=Area+de+Membros" 
                  alt="Área de Membros"
                  className="w-full rounded"
                />
              </div>
              <div>
                <h3 className="font-heading font-bold text-2xl text-primary mb-4">
                  Área de Membros
                </h3>
                <p className="text-foreground leading-relaxed">
                  Material exclusivo em nossa área de membros a qualquer momento e acesso vitalício, 
                  baixe quantas vezes você quiser.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bonuses */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container max-w-6xl mx-auto px-4">
          <SectionHeader 
            title="Além Disso, Receba Esses Presentes Para Potencializar Seus Estudos De Fé."
          />
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <BonusCard 
              title="Plano de Leitura"
              description="Plano de Leitura Bíblico de 1 ano, metas capítulo a capítulo para te incentivar a aprofundar seu estudo Bíblico e fortalecer sua intimidade com Deus, mesmo que você tenha pouco tempo na vida corrida."
              image="https://placehold.co/250x250/f0f0f0/0066FF?text=Plano"
            />
            <BonusCard 
              title="Diário da Oração"
              description="Este planner é dedicado a aprofundar sua experiência com a Palavra de Deus através da Lectio Divina, aprofundando a leitura, meditação, oração e contemplação das Escrituras."
              image="https://placehold.co/250x250/f0f0f0/0066FF?text=Diario"
            />
            <BonusCard 
              title="Versão Imprimível"
              description="Ao adquirir você recebe os arquivos em alta qualidade e as instruções para imprimir e encadernar seus mapas. Aproveite a praticidade do digital e a versatilidade da impressão, conforme sua preferência."
              image="https://placehold.co/250x250/f0f0f0/0066FF?text=Imprimivel"
            />
          </div>
        </div>
      </section>

      {/* Final CTA with Product */}
      <section className="py-16 md:py-20 bg-muted">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center space-y-6 mb-12">
            <ChevronDown className="w-8 h-8 text-primary mx-auto" />
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary">
              Garanta agora o seu Mapa da Bíblia!
            </h2>
            <p className="text-lg text-muted-foreground">
              São mais de 250 páginas <span className="font-semibold">exclusivas</span> - de Gênesis a Apocalipse, 
              conforme a tradição católica!
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="bg-background rounded-lg p-6 border-2 border-primary">
              <img src={bibleMapImage} alt="Mapa da Bíblia" className="w-full rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container max-w-6xl mx-auto px-4">
          <PricingCard 
            originalPrice="R$ 97,00"
            currentPrice="R$ 37"
            features={pricingFeatures}
            badge="Desconto Especial Hoje: Quinta-Feira, Outubro 23, 2025"
          />
        </div>
      </section>

      {/* Guarantee */}
      <section className="py-16 md:py-20 bg-muted">
        <div className="container max-w-6xl mx-auto px-4">
          <GuaranteeSection />
        </div>
      </section>

      {/* More Testimonials */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container max-w-6xl mx-auto px-4">
          <SectionHeader 
            title="O que estão dizendo sobre o Mapa da Bíblia."
            subtitle="Cada pessoa que acessa, descobre uma nova profundidade na sua jornada espiritual. Você também pode experimentar essa mudança!"
          />
          
          <div className="grid md:grid-cols-2 gap-6 mt-12 max-w-4xl mx-auto">
            <TestimonialCard 
              name="Priscila Rocha"
              text="Sempre achava difícil de entender a Bíblia, mas o Mapa da Bíblia me ajudou a enxergar tudo de forma clara e organizada. Agora, minha leitura tem muito mais sentido!"
            />
            <TestimonialCard 
              name="Ricardo Silva"
              text="Com o Mapa da Bíblia, finalmente consegui conectar os ensinamentos e histórias da Bíblia de forma lógica. Meu estudo nunca foi tão proveitoso!"
            />
            <TestimonialCard 
              name="Camila Santos"
              text="Eu lia a Bíblia, mas não conseguia ver a relação entre os livros. O Mapa da Bíblia abriu meus olhos para um estudo mais profundo e esclarecedor."
            />
            <TestimonialCard 
              name="Felipe Costa"
              text="O material é completo e bem organizado. Transformou completamente minha forma de estudar as Escrituras!"
            />
          </div>

          <div className="text-center mt-12">
            <CTAButton onClick={handleCTAClick} />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20 bg-muted">
        <div className="container max-w-6xl mx-auto px-4">
          <FAQSection items={faqItems} />
          <div className="text-center mt-12">
            <CTAButton onClick={handleCTAClick} />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center space-y-4">
            <div className="inline-block">
              <img 
                src="https://placehold.co/200x60/FFFFFF/0066FF?text=MAPA+DO+CATOLICO" 
                alt="Mapa do Católico" 
                className="h-10 mx-auto"
              />
            </div>
            <p className="text-sm">
              Este produto é desenvolvido por você e protegido por direitos autorais do Mapa do Católico.
            </p>
            <p className="text-sm">
              POLÍTICA DE PRIVACIDADE • TERMOS DE USO
            </p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <WhatsAppButton />
    </div>
  );
}
