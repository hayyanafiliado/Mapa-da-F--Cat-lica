import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  items: FAQItem[];
}

export default function FAQSection({ items }: FAQSectionProps) {
  return (
    <div className="max-w-3xl mx-auto" data-testid="section-faq">
      <h2 className="font-heading font-bold text-4xl md:text-5xl bg-gradient-to-r from-primary via-chart-4 to-accent bg-clip-text text-transparent text-center mb-12">
        Dúvidas Frequentes
      </h2>
      
      <Accordion type="single" collapsible className="space-y-4">
        {items.map((item, index) => (
          <AccordionItem 
            key={index} 
            value={`item-${index}`}
            className="border border-primary/20 rounded-2xl px-8 backdrop-blur-sm bg-gradient-to-br from-card/50 to-background/50 hover:border-primary/40 transition-all duration-300"
            data-testid={`faq-item-${index}`}
          >
            <AccordionTrigger className="text-left font-semibold text-lg text-foreground hover:no-underline py-6">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed text-base pb-6">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
