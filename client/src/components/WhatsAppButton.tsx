import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface WhatsAppButtonProps {
  phoneNumber?: string;
  message?: string;
}

export default function WhatsAppButton({ 
  phoneNumber = "5511999999999", 
  message = "Olá! Gostaria de saber mais sobre o Mapa da Bíblia." 
}: WhatsAppButtonProps) {
  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <Button
      size="icon"
      onClick={handleClick}
      className="fixed bottom-6 right-6 w-14 h-14 rounded-full shadow-lg z-50 bg-[#25D366] hover:bg-[#20BA5A] text-white"
      data-testid="button-whatsapp"
    >
      <MessageCircle className="w-7 h-7" />
    </Button>
  );
}
