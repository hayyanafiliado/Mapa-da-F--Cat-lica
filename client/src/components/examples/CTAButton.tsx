import CTAButton from '../CTAButton';

export default function CTAButtonExample() {
  return (
    <div className="flex flex-col gap-4 items-center">
      <CTAButton />
      <CTAButton variant="outline">CONHEÇA</CTAButton>
    </div>
  );
}
