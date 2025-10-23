import TestimonialCarousel from '../TestimonialCarousel';

export default function TestimonialCarouselExample() {
  const testimonials = [
    { id: 1, image: "https://placehold.co/400x600/e3e3e3/666666?text=Depoimento+1" },
    { id: 2, image: "https://placehold.co/400x600/e3e3e3/666666?text=Depoimento+2" },
    { id: 3, image: "https://placehold.co/400x600/e3e3e3/666666?text=Depoimento+3" },
  ];

  return <TestimonialCarousel testimonials={testimonials} />;
}
