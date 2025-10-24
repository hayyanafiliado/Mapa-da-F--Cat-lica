import { Book, Check, X, Shield, Mail, BookOpen, Clock, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import logoImage from "@assets/Mapa da Fé Catolica_1761328374413.png";
import joaoImage from "@assets/Mapa da Fé Catolica (1)_1761328388197.png";
import matheusImage from "@assets/Mapa da Fé Catolica (2)_1761328396544.png";
import genesisImage from "@assets/Mapa da Fé Catolica (3)_1761328401328.png";
import timelineAtImage from "@assets/Mapa da Fé Catolica (4)_1761328404507.png";
import cronologiaImage from "@assets/Mapa da Fé Catolica (5)_1761328407487.png";
import panoramaImage from "@assets/Mapa da Fé Catolica (6)_1761328410475.png";
import brandLogo from "@assets/LOGO - Mapa da Fé Catolica_1761328539259.png";
import fiveStars from "@assets/5 estrelas usuario_1761328558561.png";

export default function Home() {
  const handleCTAClick = () => {
    console.log('CTA clicked - redirecting to checkout');
  };

  const carouselImages = [
    { src: logoImage, alt: "Mapa da Fé Católica - Logo" },
    { src: joaoImage, alt: "Mapa do Livro de João" },
    { src: matheusImage, alt: "Registros da Fé - São Matheus" },
    { src: genesisImage, alt: "Mapa do Livro de Gênesis" },
    { src: timelineAtImage, alt: "Linha do Tempo do Antigo Testamento" },
    { src: cronologiaImage, alt: "Cronologia de Jesus Cristo" },
    { src: panoramaImage, alt: "Panorama Bíblico" },
  ];

  const basicFeatures = [
    { name: "Mapa dos 73 Livros", included: true },
    { name: "Panorama Bíblico", included: true },
    { name: "Linha do Tempo Cronológica", included: true },
    { name: "Registros da Fé", included: true },
    { name: "Bônus Plano de Leitura", included: false },
    { name: "Acesso vitalício à área de membros", included: false, note: "(30 dias de acesso)" },
    { name: "Versão imprimível em alta qualidade", included: false },
    { name: "Garantia 30 dias", included: true },
  ];

  const premiumFeatures = [
    { name: "Mapa dos 73 Livros", included: true },
    { name: "Panorama Bíblico", included: true },
    { name: "Linha do Tempo Cronológica", included: true },
    { name: "Registros da Fé", included: true },
    { name: "Bônus Plano de Leitura Sagrada", included: true },
    { name: "Diário da Oração (Lectio Divina)", included: true },
    { name: "Versão imprimível em alta qualidade", included: true },
    { name: "Acesso vitalício à área de membros", included: true },
    { name: "Garantia 30 dias", included: true },
  ];

  const faqItems = [
    {
      question: "📖 Cobre todos os livros da Bíblia?",
      answer: "Sim, os 73 livros completos da Bíblia Católica."
    },
    {
      question: "📱 O material é digital?",
      answer: "Sim. Acesso imediato na área de membros."
    },
    {
      question: "🕊️ É voltado para católicos?",
      answer: "Sim, baseado na Bíblia Ave Maria e na tradição da Igreja Católica."
    },
    {
      question: "📤 Como recebo o acesso?",
      answer: "Após o pagamento, o acesso é enviado automaticamente para seu e-mail."
    }
  ];

  const testimonials = [
    {
      name: "Fernanda S.",
      text: "O Mapa da Bíblia me ajudou a entender cada livro e sentir que Deus fala comigo em cada página."
    },
    {
      name: "Ricardo S.",
      text: "Antes eu lia por obrigação, agora estudo com prazer e fé."
    },
    {
      name: "Eduardo M.",
      text: "É impressionante como tudo faz sentido quando vemos a Bíblia organizada."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* 1. Headline */}
      <section className="py-12 px-4 md:py-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="container max-w-4xl mx-auto text-center space-y-6">
          <div className="flex flex-col items-center justify-center gap-4">
            <img 
              src={fiveStars} 
              alt="5 estrelas - 4.96/5 de 2.464 usuários" 
              className="h-12 md:h-14 w-auto"
              data-testid="img-five-stars"
            />
            <img 
              src={brandLogo} 
              alt="Mapa da Fé Católica" 
              className="h-16 md:h-20 w-auto"
              data-testid="img-brand-logo"
            />
          </div>
          <h1 className="font-heading font-bold text-3xl md:text-5xl lg:text-6xl leading-tight text-foreground">
            Descubra o poder escondido nos 73 livros da Bíblia — e permita que a Palavra de Deus{" "}
            <span className="text-primary">transforme sua vida por completo.</span>
          </h1>
        </div>
      </section>

      {/* 2. Sub-Headline */}
      <section className="py-8 px-4 md:py-12">
        <div className="container max-w-3xl mx-auto text-center space-y-4">
          <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
            Deus fala conosco todos os dias, mas muitos não conseguem entender Sua mensagem.
          </p>
          <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
            <span className="font-semibold text-primary">O Mapa da Bíblia</span> foi criado para ajudar você a ouvir, compreender e viver a Palavra — de forma clara, organizada e inspiradora.
          </p>
        </div>
      </section>

      {/* 3. Carrossel de Imagens */}
      <section className="py-8 px-4 md:py-12">
        <div className="container max-w-3xl mx-auto">
          <Carousel 
            opts={{ align: "start", loop: true }}
            className="w-full"
            data-testid="carousel-product"
          >
            <CarouselContent>
              {carouselImages.map((image, index) => (
                <CarouselItem key={index}>
                  <Card className="overflow-hidden">
                    <CardContent className="p-0">
                      <img 
                        src={image.src} 
                        alt={image.alt}
                        className="w-full h-auto object-contain"
                        data-testid={`carousel-image-${index}`}
                      />
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2 md:-left-12" data-testid="button-carousel-prev" />
            <CarouselNext className="right-2 md:-right-12" data-testid="button-carousel-next" />
          </Carousel>
        </div>
      </section>

      {/* 4. Botão CTA */}
      <section className="py-8 px-4">
        <div className="container max-w-md mx-auto">
          <Button 
            onClick={handleCTAClick} 
            size="lg" 
            className="w-full text-lg h-14"
            data-testid="button-cta-main"
          >
            📥 QUERO MEU MAPA DA BÍBLIA AGORA
          </Button>
        </div>
      </section>

      {/* 5. Dores do cliente */}
      <section className="py-12 px-4 md:py-20 bg-muted/30">
        <div className="container max-w-3xl mx-auto space-y-8">
          <h2 className="font-heading font-bold text-2xl md:text-4xl text-center text-foreground">
            Você se identifica com alguma dessas situações?
          </h2>
          
          <div className="space-y-4">
            {[
              "Você tenta ler a Bíblia, mas se perde entre nomes e histórias?",
              "Sente que a leitura não te aproxima realmente de Deus?",
              "Já começou vários planos de leitura, mas nunca conseguiu ir até o fim?",
              "Deseja ensinar seus filhos ou grupo de oração, mas sente falta de clareza?"
            ].map((pain, index) => (
              <Card key={index} className="hover-elevate" data-testid={`card-pain-${index}`}>
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <Heart className="w-4 h-4 text-destructive" />
                  </div>
                  <p className="text-foreground leading-relaxed">{pain}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <p className="text-center text-lg md:text-xl text-foreground font-semibold pt-4">
            Não é falta de fé. É falta de estrutura e compreensão — e é exatamente isso que o{" "}
            <span className="text-primary">Mapa da Bíblia</span> entrega.
          </p>
        </div>
      </section>

      {/* 6. Como o produto resolve */}
      <section className="py-12 px-4 md:py-20">
        <div className="container max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h2 className="font-heading font-bold text-2xl md:text-4xl text-foreground">
              Como o <span className="text-primary">Mapa da Bíblia</span> transforma seu estudo
            </h2>
            <p className="text-lg text-foreground/80">
              O Mapa da Bíblia transforma o estudo das Escrituras em um caminho de entendimento e espiritualidade.
            </p>
            <p className="text-base text-muted-foreground">
              Cada mapa, resumo e linha do tempo foi criado com base na Bíblia Ave Maria e na tradição católica.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              { icon: BookOpen, text: "Entenda o contexto de cada livro e sua mensagem central." },
              { icon: Book, text: "Conecte Antigo e Novo Testamento com clareza." },
              { icon: Heart, text: "Aplique os ensinamentos bíblicos na vida prática." },
              { icon: Clock, text: "Estude diariamente com motivação e propósito." }
            ].map((item, index) => (
              <Card key={index} className="hover-elevate" data-testid={`card-solution-${index}`}>
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-foreground leading-relaxed pt-1">{item.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <p className="text-center text-lg text-foreground/90 pt-4">
            A Palavra de Deus deixará de ser algo distante — e passará a ser{" "}
            <span className="font-semibold text-primary">luz e direção no seu dia a dia.</span>
          </p>
        </div>
      </section>

      {/* 7. O que você vai receber */}
      <section className="py-12 px-4 md:py-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="container max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h2 className="font-heading font-bold text-2xl md:text-4xl text-foreground">
              O que você vai receber
            </h2>
            <p className="text-lg text-primary font-semibold">
              Um guia completo com mais de 250 páginas para estudar, compreender e viver a Bíblia:
            </p>
          </div>

          <div className="space-y-4">
            {[
              { icon: "📖", title: "Mapa dos 73 Livros", desc: "resumos, temas centrais, versículos-chave e símbolos." },
              { icon: "🕊️", title: "Panorama Bíblico", desc: "entenda como todos os livros se conectam na história da salvação." },
              { icon: "⏳", title: "Linha do Tempo Cronológica", desc: "veja os acontecimentos na ordem real." },
              { icon: "✍️", title: "Registros da Fé", desc: "espaço para anotações, orações e reflexões pessoais." }
            ].map((item, index) => (
              <Card key={index} className="hover-elevate" data-testid={`card-receive-${index}`}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <span className="text-2xl">{item.icon}</span>
                    {item.title}
                  </CardTitle>
                  <CardDescription className="text-base">{item.desc}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          <Card className="bg-accent/10 border-accent/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-xl text-accent">
                <span className="text-2xl">🎁</span>
                Bônus Exclusivo
              </CardTitle>
              <CardDescription className="text-base text-foreground/80">
                <span className="font-semibold">Plano de Leitura Sagrada</span> — um guia diário para percorrer toda a Bíblia em 12 meses, fortalecendo sua rotina espiritual.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* 8. Oferta - Planos */}
      <section className="py-12 px-4 md:py-20 bg-background">
        <div className="container max-w-6xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h2 className="font-heading font-bold text-2xl md:text-4xl text-foreground">
              Escolha seu plano
            </h2>
            <Badge variant="destructive" className="text-sm px-4 py-2">
              🕒 Oferta especial de lançamento válida somente hoje
            </Badge>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {/* Plano Básico */}
            <Card data-testid="card-pricing-basic">
              <CardHeader className="text-center space-y-4 pb-6">
                <div className="space-y-2">
                  <CardTitle className="text-2xl">🔹 Plano Básico</CardTitle>
                  <CardDescription>
                    Para quem quer começar o estudo da Palavra com simplicidade.
                  </CardDescription>
                </div>
                <div className="space-y-2">
                  <div className="text-5xl font-bold text-primary">R$ 27</div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  {basicFeatures.map((feature, index) => (
                    <div 
                      key={index} 
                      className="flex items-start gap-3"
                      data-testid={`feature-basic-${index}`}
                    >
                      <div className="flex-shrink-0 mt-1">
                        {feature.included ? (
                          <Check className="w-5 h-5 text-primary" />
                        ) : (
                          <X className="w-5 h-5 text-muted-foreground" />
                        )}
                      </div>
                      <div className="flex-1">
                        <p className={feature.included ? "text-foreground" : "text-muted-foreground"}>
                          {feature.name}
                          {feature.note && (
                            <span className="text-xs ml-2">{feature.note}</span>
                          )}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <Button 
                  onClick={handleCTAClick}
                  className="w-full"
                  size="lg"
                  data-testid="button-buy-basic"
                >
                  📘 QUERO O PLANO BÁSICO — R$ 27
                </Button>
              </CardContent>
            </Card>

            {/* Plano Premium */}
            <Card className="border-2 border-primary shadow-lg shadow-primary/20" data-testid="card-pricing-premium">
              <CardHeader className="text-center space-y-4 pb-6">
                <Badge className="mx-auto">✨ RECOMENDADO</Badge>
                <div className="space-y-2">
                  <CardTitle className="text-2xl">🔸 Plano Premium</CardTitle>
                  <CardDescription>
                    Para quem quer mergulhar profundamente na Palavra e receber todos os recursos.
                  </CardDescription>
                </div>
                <div className="space-y-2">
                  <div className="text-5xl font-bold text-primary">R$ 37</div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  {premiumFeatures.map((feature, index) => (
                    <div 
                      key={index} 
                      className="flex items-start gap-3"
                      data-testid={`feature-premium-${index}`}
                    >
                      <div className="flex-shrink-0 mt-1">
                        <Check className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <p className="text-foreground">{feature.name}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <Button 
                  onClick={handleCTAClick}
                  className="w-full"
                  size="lg"
                  data-testid="button-buy-premium"
                >
                  ✨ QUERO O PLANO PREMIUM — R$ 37
                </Button>
              </CardContent>
            </Card>
          </div>

          <p className="text-center text-sm text-muted-foreground">
            💳 Pagamento seguro e acesso imediato por e-mail.
          </p>
        </div>
      </section>

      {/* 9. Depoimentos */}
      <section className="py-12 px-4 md:py-20 bg-muted/30">
        <div className="container max-w-4xl mx-auto space-y-8">
          <h2 className="font-heading font-bold text-2xl md:text-4xl text-center text-foreground">
            O que nossos alunos dizem
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover-elevate" data-testid={`card-testimonial-${index}`}>
                <CardContent className="p-6 space-y-4">
                  <p className="text-foreground/90 leading-relaxed italic">
                    "{testimonial.text}"
                  </p>
                  <p className="font-semibold text-primary">— {testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Garantia */}
      <section className="py-12 px-4 md:py-20 bg-gradient-to-b from-background to-primary/5">
        <div className="container max-w-3xl mx-auto">
          <Card className="border-2 border-primary/30 hover-elevate">
            <CardContent className="p-8 md:p-12 text-center space-y-6">
              <div className="flex justify-center">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                  <Shield className="w-10 h-10 text-primary" />
                </div>
              </div>
              <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground">
                🛡️ Garantia de 30 Dias
              </h2>
              <div className="space-y-4 text-foreground/90">
                <p className="text-lg">
                  Você tem <span className="font-semibold text-primary">30 dias de garantia total.</span>
                </p>
                <p className="text-lg">
                  Se não sentir que sua compreensão da Palavra foi transformada, devolvemos{" "}
                  <span className="font-semibold text-primary">100% do valor.</span>
                </p>
                <p className="text-base text-muted-foreground pt-2">
                  Sua fé está protegida — e seu investimento também.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 11. FAQ */}
      <section className="py-12 px-4 md:py-20 bg-background">
        <div className="container max-w-3xl mx-auto space-y-8">
          <h2 className="font-heading font-bold text-2xl md:text-4xl text-center text-foreground">
            ❓ Perguntas Frequentes
          </h2>

          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border rounded-lg px-4 bg-card"
                data-testid={`accordion-faq-${index}`}
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-foreground/80">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* 12. Botão Final */}
      <section className="py-12 px-4 md:py-16 bg-gradient-to-b from-primary/10 to-background">
        <div className="container max-w-2xl mx-auto text-center space-y-6">
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground">
            Pronto para transformar seu estudo da Bíblia?
          </h2>
          <Button 
            onClick={handleCTAClick} 
            size="lg" 
            className="w-full max-w-md mx-auto text-lg h-14"
            data-testid="button-cta-final"
          >
            📖 QUERO GARANTIR MEU MAPA DA BÍBLIA AGORA
          </Button>
        </div>
      </section>

      {/* 13. Rodapé */}
      <footer className="py-12 px-4 bg-muted/50 border-t">
        <div className="container max-w-4xl mx-auto">
          <div className="text-center space-y-6">
            <div className="flex items-center justify-center gap-2 text-foreground">
              <Book className="w-6 h-6" />
              <span className="font-heading font-bold text-xl">Mapa do Católico</span>
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors" data-testid="link-privacy">
                Política de Privacidade
              </a>
              <span className="text-muted-foreground/50">•</span>
              <a href="#" className="hover:text-foreground transition-colors" data-testid="link-terms">
                Termos de Uso
              </a>
              <span className="text-muted-foreground/50">•</span>
              <a href="#" className="hover:text-foreground transition-colors" data-testid="link-support">
                <Mail className="w-4 h-4 inline mr-1" />
                Suporte
              </a>
            </div>

            <p className="text-sm text-muted-foreground">
              © 2025 Mapa do Católico — Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
