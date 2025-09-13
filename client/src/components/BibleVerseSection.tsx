import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RefreshCw, BookOpen, Info } from "lucide-react";
import { getRandomVerse, type BibleVerse } from "@/data/bibleVerses";

export default function BibleVerseSection() {
  const [currentVerse, setCurrentVerse] = useState<BibleVerse | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const loadNewVerse = () => {
    setIsLoading(true);
    // Simulate loading for better UX
    setTimeout(() => {
      setCurrentVerse(getRandomVerse());
      setIsLoading(false);
    }, 500);
  };

  useEffect(() => {
    // Load initial verse
    setCurrentVerse(getRandomVerse());
  }, []);

  return (
    <section id="bible-verses" className="py-16 bg-gradient-to-br from-background to-muted/30">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 bg-chart-2/20 text-chart-2 px-4 py-2 rounded-full text-sm font-medium border border-chart-2/30">
            <BookOpen className="w-4 h-4" />
            Daily Inspiration
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Verses on Compassion
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Let God's Word inspire acts of kindness and compassion in your daily life
          </p>
        </div>

        {currentVerse && (
          <Card className="bg-card border-2 border-chart-2/30 shadow-lg card-hover animate-floating">
            <CardContent className="p-8 md:p-12 text-center space-y-6">
              <div className={`transition-all duration-500 ${isLoading ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
                <blockquote className="text-xl md:text-2xl font-serif text-foreground leading-relaxed mb-6 italic">
                  "{currentVerse.verse}"
                </blockquote>
                
                <cite className="text-lg font-semibold text-chart-2 not-italic">
                  — {currentVerse.reference}
                </cite>
                
                <div className="bg-muted/50 rounded-lg p-6 mt-8">
                  <div className="flex items-start gap-3">
                    <Info className="w-5 h-5 text-chart-2 mt-0.5 flex-shrink-0" />
                    <div className="text-left">
                      <h4 className="font-semibold text-foreground mb-2">Did you know?</h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {currentVerse.fact}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <Button 
                onClick={loadNewVerse}
                disabled={isLoading}
                className="mt-8 bg-primary hover:bg-chart-2 text-white border border-primary hover:border-chart-2"
                data-testid="button-new-verse"
              >
                <RefreshCw className={`w-4 h-4 mr-2 ${isLoading ? 'animate-spin' : ''}`} />
                {isLoading ? 'Loading...' : 'New Verse'}
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </section>
  );
}