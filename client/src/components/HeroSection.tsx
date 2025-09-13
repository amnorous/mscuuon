import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Heart, Users } from "lucide-react";

interface HeroSectionProps {
  onSupportClick: () => void;
  onAssistanceClick: () => void;
}

export default function HeroSection({ onSupportClick, onAssistanceClick }: HeroSectionProps) {
  const [videoEnded, setVideoEnded] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  const handleVideoEnd = () => {
    setFadeOut(true);
    setTimeout(() => setVideoEnded(true), 1000); // Wait for fade-out to finish
  };

  return (
    <section className="relative h-screen w-full flex items-center justify-center text-center text-white overflow-hidden">
      {/* Video OR Fallback Background */}
      {!videoEnded ? (
        <video
          autoPlay
          muted
          playsInline
          onEnded={handleVideoEnd}
          className={`absolute inset-0 w-full h-full object-cover z-0 transition-opacity duration-1000 ${
            fadeOut ? "opacity-0" : "opacity-100"
          }`}
        >
          <source src="/media/CompassionVIDEO.mp4" type="video/mp4" />
        </video>
      ) : (
        <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-primary/80 to-chart-1/80 z-0 animate-fade-in" />
      )}

      {/* Dark Overlay (always covers top!) */}
      <div className="absolute inset-0 bg-black/50 z-10 pointer-events-none" />

      {/* Hero Content */}
      <div className="relative z-20 max-w-4xl mx-auto px-6 space-y-8">
        {/* Logo/Badge */}
        <div className="inline-flex items-center gap-3 bg-chart-2/20 backdrop-blur-sm border border-chart-2/40 rounded-full px-6 py-3">
          <div className="w-12 h-12 bg-chart-2 rounded-full flex items-center justify-center">
            <img
            src="/media/mscu.jpeg" 
            alt="Logo"
            className="w-8 h-8 object-contain"
            />
          </div>
          <span className="text-sm font-medium tracking-wide">
            MEDICAL STUDENTS CHRISTIAN UNION
          </span>
        </div>

        {/* Main Heading */}
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight animate-fade-in">
            <span className="animate-pulse">COMPASSION</span>
            <span className="block text-chart-2 animate-bounce delay-500">
              MINISTRY
            </span>
          </h1>
          <div className="bg-white rounded-full px-8 py-4 inline-block">
            <p className="text-chart-1 text-xl md:text-2xl font-semibold">
              ACTS OF KINDNESS, HEARTS OF LOVE
            </p>
          </div>
        </div>

        {/* Date Range */}
        <div className="bg-chart-2/90 backdrop-blur-sm rounded-2xl px-8 py-4 inline-block border border-white/20">
          <p className="text-lg md:text-xl font-semibold">
            Reconciled to God, Ambassadors for Christ
          </p>
        </div>

        {/* Tagline */}
        <div className="space-y-2">
          <p className="text-lg md:text-xl font-light italic">
            "Kindness is contagious"
          </p>
          <p className="text-base md:text-lg opacity-90">
            
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
          <Button
            size="lg"
            className="bg-primary hover:bg-chart-2 text-white px-8 py-4 text-lg font-semibold border-2 border-primary hover:border-chart-2 transform transition-all duration-300 hover:scale-105 animate-slide-up"
            onClick={onSupportClick}
            data-testid="button-support"
          >
            <Heart className="w-5 h-5 mr-2" />
            Support Us
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="bg-white/10 hover:bg-white/20 text-white border-2 border-white backdrop-blur-sm px-8 py-4 text-lg font-semibold transform transition-all duration-300 hover:scale-105 animate-slide-up delay-200"
            onClick={onAssistanceClick}
            data-testid="button-assistance"
          >
            <Users className="w-5 h-5 mr-2" />
            Seek Assistance
          </Button>
        </div>
      </div>
    </section>
  );
}
