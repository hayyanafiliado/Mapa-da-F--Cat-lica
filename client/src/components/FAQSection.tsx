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
      <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary text-center mb-8">
        Dúvidas Frequentes
      </h2>
      
      <Accordion type="single" collapsible className="space-y-3">
        {items.map((item, index) => (
          <AccordionItem 
            key={index} 
            value={`item-${index}`}
            className="border rounded-lg px-6 bg-background"
            data-testid={`faq-item-${index}`}
          >
            <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
