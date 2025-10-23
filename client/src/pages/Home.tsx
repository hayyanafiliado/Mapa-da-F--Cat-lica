import { ChevronDown, Sparkles } from "lucide-react";
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
    { id: 1, image: "https://placehold.co/400x600/1a1a2e/7c3aed?text=Depoimento+1" },
    { id: 2, image: "https://placehold.co/400x600/1a1a2e/7c3aed?text=Depoimento+2" },
    { id: 3, image: "https://placehold.co/400x600/1a1a2e/7c3aed?text=Depoimento+3" },
    { id: 4, image: "https://placehold.co/400x600/1a1a2e/7c3aed?text=Depoimento+4" },
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
      {/* Hero Section - Futuristic Gradient */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-accent/10 py-20 md:py-32">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-[100px] animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="container max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center space-y-12">
            <div className="inline-block backdrop-blur-sm bg-card/30 rounded-2xl px-6 py-3 border border-primary/20">
              <p className="font-heading font-bold text-sm tracking-wider bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                MAPA DO CATÓLICO
              </p>
            </div>
            
            <h1 className="font-heading font-extrabold text-5xl md:text-6xl lg:text-7xl leading-tight max-w-5xl mx-auto">
              <span className="bg-gradient-to-r from-primary via-chart-4 to-accent bg-clip-text text-transparent drop-shadow-[0_0_60px_rgba(124,58,237,0.3)]">
                Entenda os 73 livros da Bíblia de forma simples
              </span>{" "}
              <span className="text-foreground">
                e viva a transformação da Palavra em sua vida.
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-foreground/80 max-w-4xl mx-auto leading-relaxed">
              Um jeito <span className="font-semibold text-primary">fácil e eficiente</span>, aprovado por{" "}
              <span className="font-semibold text-primary">milhares de católicos</span>, para{" "}
              <span className="font-semibold text-primary">aprender a Palavra de Deus</span> de forma simples, sem complicação, e que não consegue emendar a Bíblia.
            </p>

            <div className="py-8">
              <TestimonialCarousel testimonials={carouselTestimonials} />
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center flex-wrap">
              <CTAButton onClick={handleCTAClick} />
              <CTAButton variant="outline" onClick={() => console.log('Conheça clicked')}>
                CONHEÇA
              </CTAButton>
            </div>

            <div className="pt-8 flex justify-center">
              <ChevronDown className="w-10 h-10 text-primary animate-bounce drop-shadow-[0_0_10px_rgba(124,58,237,0.5)]" />
            </div>
          </div>
        </div>
      </section>

      {/* Video Testimonials Section */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-background via-muted/30 to-background">
        <div className="container max-w-6xl mx-auto px-6">
          <SectionHeader 
            title="O que estão dizendo sobre o Mapa da Bíblia."
            subtitle="O Mapa da Bíblia é incrível e milhares de católicos concordam com isso."
          />
          
          <div className="mt-16">
            <div className="max-w-sm mx-auto backdrop-blur-xl bg-gradient-to-br from-card/50 to-muted/30 rounded-3xl p-6 border border-primary/20 shadow-2xl">
              <img 
                src="https://placehold.co/400x600/1a1a2e/7c3aed?text=Video+Depoimento" 
                alt="Vídeo depoimento" 
                className="w-full rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* De Gênesis a Apocalipse */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-muted/50 via-background to-muted/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(124,58,237,0.1),transparent_50%)]"></div>
        
        <div className="container max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center space-y-8 mb-16">
            <div className="flex justify-center">
              <Sparkles className="w-10 h-10 text-accent animate-pulse" />
            </div>
            <h2 className="font-heading font-bold text-4xl md:text-5xl max-w-4xl mx-auto leading-tight">
              <span className="bg-gradient-to-r from-primary via-chart-4 to-accent bg-clip-text text-transparent">
                De Gênesis a Apocalipse:
              </span>{" "}
              <span className="text-foreground">
                conheça toda a Bíblia através de mapas didáticos de todos os livros, na visão católica.
              </span>
            </h2>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="backdrop-blur-xl bg-gradient-to-br from-card/60 to-background/40 rounded-3xl p-6 border-2 border-primary/20 shadow-2xl hover:shadow-primary/20 transition-all duration-500 hover:scale-[1.02]">
              <img src={bibleMapImage} alt="Mapa da Bíblia" className="w-full rounded-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section - Dark Futuristic */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-primary/95 via-primary to-chart-4/90 text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>
        
        <div className="container max-w-5xl mx-auto px-6 relative z-10">
          <div className="backdrop-blur-sm bg-white/5 rounded-3xl p-10 md:p-16 border border-white/10 shadow-2xl">
            <div className="space-y-8 text-center md:text-left">
              <p className="text-xl leading-relaxed">
                O Mapa da Bíblia são resumos visuais da Bíblia, conforme a{" "}
                <span className="font-semibold text-accent">tradição católica e a Bíblia Ave Maria</span>, 
                recursos visuais elaborados para{" "}
                <span className="font-semibold text-accent">simplificar e aprofundar a Palavra de Deus em sua totalidade</span>, 
                apresentando os seus principais ensinamentos de cada livro e contextos.
              </p>
              
              <p className="text-xl leading-relaxed">
                Com o Mapa da Bíblia, você poderá se dedicar ao estudo diário da Bíblia com mais facilidade,{" "}
                <span className="font-semibold text-accent">equipado com um guia eficaz</span> para navegar pelas páginas bíblicas e suas múltiplas dimensões.
              </p>
              
              <p className="text-xl leading-relaxed">
                Essa é a melhor forma de <span className="font-semibold text-accent">aprimorar seu conhecimento</span> bíblico, 
                obtendo uma compreensão mais profunda da Palavra e{" "}
                <span className="font-semibold text-accent">uma transformação espiritual profunda</span> ao mergulhar 
                nos ensinamentos ricos da Sagrada Escritura.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* José Marcos Testimonial */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-muted/30 to-background">
        <div className="container max-w-4xl mx-auto px-6">
          <div className="backdrop-blur-xl bg-gradient-to-br from-card via-background to-muted/30 rounded-3xl p-10 md:p-12 border border-primary/20 shadow-2xl">
            <p className="text-2xl md:text-3xl text-foreground italic leading-relaxed mb-8">
              "Me surpreendi com a clareza e profundidade que o material traz para o estudo da Bíblia Sagrada."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-bold text-xl shadow-lg">
                JM
              </div>
              <div>
                <p className="font-semibold text-lg text-foreground">José Marcos</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mapa dos 73 Livros */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl md:text-5xl mb-8">
              <span className="bg-gradient-to-r from-primary via-chart-4 to-accent bg-clip-text text-transparent">
                Simplificando sua jornada espiritual
              </span>{" "}
              <span className="text-foreground">
                e fortalecendo sua conexão com Deus.
              </span>
            </h2>
            <div className="max-w-3xl mx-auto">
              <div className="backdrop-blur-xl bg-gradient-to-br from-card/60 to-muted/30 rounded-3xl p-6 border border-primary/20 shadow-2xl">
                <img src={bibleMapImage} alt="Mapa dos 73 Livros" className="w-full rounded-2xl" />
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto mt-20">
            <div className="space-y-6">
              <h3 className="font-heading font-bold text-3xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Mapa dos 73 Livros
              </h3>
              <p className="text-foreground/90 leading-relaxed text-lg">
                Explore cada um dos <span className="font-semibold text-primary">73 livros da Bíblia</span> através de mapas didáticos que apresentam{" "}
                <span className="font-semibold text-primary">resumos e elementos essenciais</span> que{" "}
                <span className="font-semibold text-primary">facilitam o entendimento da Palavra de Deus.</span>
              </p>
              <div className="space-y-4 pt-4">
                <p className="font-semibold text-foreground text-lg">Em cada livro, você terá:</p>
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
              <div className="backdrop-blur-sm bg-gradient-to-br from-muted/50 to-background/50 rounded-3xl p-6 border border-primary/10">
                <img 
                  src="https://placehold.co/500x300/1a1a2e/7c3aed?text=Mapa+Tematico" 
                  alt="Mapa temático"
                  className="w-full rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Panorama da Bíblia */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-muted/30 via-background to-muted/50">
        <div className="container max-w-6xl mx-auto px-6">
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
      <section className="py-24 md:py-32 bg-background">
        <div className="container max-w-6xl mx-auto px-6">
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
      <section className="py-24 md:py-32 bg-gradient-to-b from-muted/30 to-background">
        <div className="container max-w-6xl mx-auto px-6">
          <FeatureSection 
            title="Registros da Fé"
            description="Um espaço dedicado para registrar insights, reflexões e aprendizados, ajudando a aplicar os ensinamentos bíblicos no seu dia a dia."
            features={[
              "Espaço Para Anotações",
              "Versículos E Reflexões",
              "Aplicação Prática"
            ]}
            image="https://placehold.co/600x400/1a1a2e/7c3aed?text=Registros"
            imagePosition="right"
          />

          <div className="text-center mt-16">
            <CTAButton onClick={handleCTAClick} />
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container max-w-6xl mx-auto px-6">
          <SectionHeader 
            title="Aprovado por +1.000 fiéis católicos."
            subtitle="Nossos mapas são incríveis e quem tem acesso concorda com isso."
          />
          
          <div className="grid md:grid-cols-3 gap-8 mt-16">
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
      <section className="py-24 md:py-32 bg-gradient-to-br from-muted/50 via-background to-muted/30">
        <div className="container max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block mb-6 backdrop-blur-sm bg-card/30 rounded-2xl px-6 py-3 border border-primary/20">
              <p className="font-heading font-bold tracking-wider bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                MAPA DO CATÓLICO
              </p>
            </div>
            <h2 className="font-heading font-bold text-4xl md:text-5xl mb-6">
              <span className="bg-gradient-to-r from-primary via-chart-4 to-accent bg-clip-text text-transparent">
                O que você receberá
              </span>{" "}
              <span className="text-foreground">
                no Mapa da Bíblia?
              </span>
            </h2>
            <p className="text-xl text-muted-foreground mt-4">
              São mais de 250 páginas <span className="font-semibold text-primary">exclusivas!</span>
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto">
            <div className="space-y-8">
              <div className="backdrop-blur-xl bg-gradient-to-br from-card/60 to-background/40 rounded-3xl p-6 border border-primary/20 shadow-xl">
                <img 
                  src={bibleMapImage} 
                  alt="Arquivos Digitais"
                  className="w-full rounded-2xl"
                />
              </div>
              <div>
                <h3 className="font-heading font-bold text-3xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
                  Arquivos Digitais
                </h3>
                <p className="text-foreground/90 leading-relaxed text-lg">
                  Material em PDF para acessar no celular, tablet ou computador e estudar em qualquer lugar. 
                  Incluindo: Mapa dos 73 Livros, Eventos Cronológicos, Panorama Bíblico, Registros da Fé e 
                  muito mais! São mais de 250 páginas.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="backdrop-blur-xl bg-gradient-to-br from-card/60 to-background/40 rounded-3xl p-6 border border-primary/20 shadow-xl">
                <img 
                  src="https://placehold.co/500x300/1a1a2e/7c3aed?text=Area+de+Membros" 
                  alt="Área de Membros"
                  className="w-full rounded-2xl"
                />
              </div>
              <div>
                <h3 className="font-heading font-bold text-3xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
                  Área de Membros
                </h3>
                <p className="text-foreground/90 leading-relaxed text-lg">
                  Material exclusivo em nossa área de membros a qualquer momento e acesso vitalício, 
                  baixe quantas vezes você quiser.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bonuses */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container max-w-6xl mx-auto px-6">
          <SectionHeader 
            title="Além Disso, Receba Esses Presentes Para Potencializar Seus Estudos De Fé."
          />
          
          <div className="grid md:grid-cols-3 gap-10 mt-16">
            <BonusCard 
              title="Plano de Leitura"
              description="Plano de Leitura Bíblico de 1 ano, metas capítulo a capítulo para te incentivar a aprofundar seu estudo Bíblico e fortalecer sua intimidade com Deus, mesmo que você tenha pouco tempo na vida corrida."
              image="https://placehold.co/250x250/1a1a2e/7c3aed?text=Plano"
            />
            <BonusCard 
              title="Diário da Oração"
              description="Este planner é dedicado a aprofundar sua experiência com a Palavra de Deus através da Lectio Divina, aprofundando a leitura, meditação, oração e contemplação das Escrituras."
              image="https://placehold.co/250x250/1a1a2e/7c3aed?text=Diario"
            />
            <BonusCard 
              title="Versão Imprimível"
              description="Ao adquirir você recebe os arquivos em alta qualidade e as instruções para imprimir e encadernar seus mapas. Aproveite a praticidade do digital e a versatilidade da impressão, conforme sua preferência."
              image="https://placehold.co/250x250/1a1a2e/7c3aed?text=Imprimivel"
            />
          </div>
        </div>
      </section>

      {/* Final CTA with Product */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-muted/30 via-background to-primary/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(124,58,237,0.1),transparent_70%)]"></div>
        
        <div className="container max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center space-y-8 mb-16">
            <Sparkles className="w-12 h-12 text-accent mx-auto animate-pulse" />
            <h2 className="font-heading font-bold text-4xl md:text-5xl">
              <span className="bg-gradient-to-r from-primary via-chart-4 to-accent bg-clip-text text-transparent">
                Garanta agora o seu Mapa da Bíblia!
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">
              São mais de 250 páginas <span className="font-semibold text-primary">exclusivas</span> - de Gênesis a Apocalipse, 
              conforme a tradição católica!
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="backdrop-blur-xl bg-gradient-to-br from-card/60 to-background/40 rounded-3xl p-8 border-4 border-primary/30 shadow-2xl shadow-primary/20">
              <img src={bibleMapImage} alt="Mapa da Bíblia" className="w-full rounded-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container max-w-6xl mx-auto px-6">
          <PricingCard 
            originalPrice="R$ 97,00"
            currentPrice="R$ 37"
            features={pricingFeatures}
            badge="Desconto Especial Hoje: Quinta-Feira, Outubro 23, 2025"
          />
        </div>
      </section>

      {/* Guarantee */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-muted/30 to-background">
        <div className="container max-w-6xl mx-auto px-6">
          <GuaranteeSection />
        </div>
      </section>

      {/* More Testimonials */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container max-w-6xl mx-auto px-6">
          <SectionHeader 
            title="O que estão dizendo sobre o Mapa da Bíblia."
            subtitle="Cada pessoa que acessa, descobre uma nova profundidade na sua jornada espiritual. Você também pode experimentar essa mudança!"
          />
          
          <div className="grid md:grid-cols-2 gap-8 mt-16 max-w-4xl mx-auto">
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

          <div className="text-center mt-16">
            <CTAButton onClick={handleCTAClick} />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-muted/30 via-background to-muted/50">
        <div className="container max-w-6xl mx-auto px-6">
          <FAQSection items={faqItems} />
          <div className="text-center mt-16">
            <CTAButton onClick={handleCTAClick} />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-primary via-primary/95 to-chart-4 text-primary-foreground py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20"></div>
        
        <div className="container max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center space-y-6">
            <div className="inline-block backdrop-blur-sm bg-white/10 rounded-2xl px-8 py-4 border border-white/20">
              <p className="font-heading font-bold text-xl tracking-wider">
                MAPA DO CATÓLICO
              </p>
            </div>
            <p className="text-sm opacity-90">
              Este produto é desenvolvido por você e protegido por direitos autorais do Mapa do Católico.
            </p>
            <p className="text-sm font-semibold">
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
