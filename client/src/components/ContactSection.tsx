import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Globe, MessageCircle, Heart, ExternalLink } from "lucide-react";

export default function ContactSection() {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "mscuexec2022@gmail.com",
      action: () => window.open("mailto:mscuexec2022@gmail.com", '_self')
    },
    {
      icon: MapPin,
      label: "Location",
      value: "UON MEDICAL SCHOOL CHRISTIAN UNION",
      action: () => window.open("https://maps.google.com/?q=-1.2978120,36.8046173", '_blank')
    },
    {
      icon: ExternalLink,
      label: "Linktree",
      value: "linktr.ee/mscuon",
      action: () => window.open("https://linktr.ee/mscuon", '_blank')
    }
  ];

  return (
    <section id="contact" className="py-16 bg-gradient-to-br from-primary/5 to-chart-1/5">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 bg-chart-2/20 text-chart-2 px-4 py-2 rounded-full text-sm font-medium border border-chart-2/30">
            <MessageCircle className="w-4 h-4" />
            Get in Touch
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Contact Us
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions about our compassion initiatives? Need support or want to get involved? 
            We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {contactInfo.map((info, index) => (
            <Card key={index} className="bg-card card-hover cursor-pointer" onClick={info.action}>
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-12 h-12 bg-chart-2/10 rounded-full flex items-center justify-center mx-auto">
                  <info.icon className="w-6 h-6 text-chart-2" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1" data-testid={`text-contact-label-${index}`}>
                    {info.label}
                  </h3>
                  <p className="text-muted-foreground text-sm" data-testid={`text-contact-value-${index}`}>
                    {info.value}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main WhatsApp CTA */}
        <Card className="bg-gradient-to-r from-chart-2/5 to-primary/5 border-2 border-chart-2/30">
          <CardContent className="p-8 text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-chart-2/10 rounded-full flex items-center justify-center">
                <ExternalLink className="w-8 h-8 text-chart-2" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Explore Our Links
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Discover all our resources, social media, and community links in one convenient place. 
              Stay connected with the Medical Students Christian Union community.
            </p>
            <Button
              onClick={() => {
                window.open('https://linktr.ee/mscuon', '_blank');
                console.log('Opening MSCU Linktree');
              }}
              size="lg"
              className="bg-primary hover:bg-chart-2 text-white px-8 py-4 text-lg border border-primary hover:border-chart-2"
              data-testid="button-linktree"
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              Visit Our Linktree
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              All our community resources in one place
            </p>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center mt-12 pt-8 border-t border-border">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Heart className="w-0 h-0 text-chart-2" />
            <span className="text-lg font-semibold text-foreground">Medical Students Christian Union (MSCU)</span>
          </div>
          <p className="text-muted-foreground">
            We Are Family
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            © ICT Team, Norys Ndachule 2025 —  
            <a 
              href="mailto:noryswanjala@gmail.com" 
              className="text-primary hover:underline"
            >
               Norys Ndachule
            </a>
          </p>

        </div>
      </div>
    </section>
  );
}