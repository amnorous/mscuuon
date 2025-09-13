import { useRef } from "react";
import HeroSection from "@/components/HeroSection";
import BibleVerseSection from "@/components/BibleVerseSection";
import SupportUsSection from "@/components/SupportUsSection";
import SeekAssistanceSection from "@/components/SeekAssistanceSection";
import ContactSection from "@/components/ContactSection";
import ThemeToggle from "@/components/ThemeToggle";

export default function CompassionPage() {
  const supportRef = useRef<HTMLDivElement>(null);
  const assistanceRef = useRef<HTMLDivElement>(null);

  const scrollToSupport = () => {
    supportRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToAssistance = () => {
    assistanceRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <ThemeToggle />
      <HeroSection 
        onSupportClick={scrollToSupport}
        onAssistanceClick={scrollToAssistance}
      />
      
      <BibleVerseSection />
      
      <div ref={supportRef}>
        <SupportUsSection />
      </div>
      
      <div ref={assistanceRef}>
        <SeekAssistanceSection />
      </div>
      
      <ContactSection />
    </div>
  );
}