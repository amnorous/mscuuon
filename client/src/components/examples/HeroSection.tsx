import HeroSection from '../HeroSection';

export default function HeroSectionExample() {
  return (
    <HeroSection 
      onSupportClick={() => console.log('Support clicked')}
      onAssistanceClick={() => console.log('Assistance clicked')}
    />
  );
}