import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Phone, MessageCircle, Heart } from "lucide-react";

interface Official {
  id: number;
  name: string;
  title: string;
  phone: string;
  whatsapp: string;
  initials: string;
  description: string;
  image?: string; // optional
}

const officials: Official[] = [
  {
    id: 1,
    name: "Brenda Wanyama",
    title: "Chairperson",
    phone: "+254745730449",
    whatsapp: "254745730449",
    initials: "BW",
    description: "-",
    image: "/images/Brenda.jpg",
  },
  {
    id: 2,
    name: "Naom Omare",
    title: "Secretary",
    phone: "+254751161828",
    whatsapp: "254751161828",
    initials: "NO",
    description: "As a member of the compassion subcommittee, I'm passionate about proactively reaching out to those in need and providing timely support to make a meaningful difference in their lives.",
    image: "/images/Naom.jpg",
  },
  {
    id: 3,
    name: "Bancy Nasiro",
    title: "Member",
    phone: "+254768202589",
    whatsapp: "254768202589",
    initials: "BN",
    description: "-",
    image: "/images/Bancy.jpg",
  },
  {
    id: 4,
    name: "Brian Chege",
    title: "Member",
    phone: "+254796693660",
    whatsapp: "254796693660",
    initials: "BC",
    description: "-",
    image: "/images/Chege.png",
  },
  {
    id: 5,
    name: "Katrina Nelima",
    title: "Member",
    phone: "+254794936760",
    whatsapp: "254794936760",
    initials: "KN",
    description: "-",
    image: "/images/Katrina.png",
  },
];

export default function SeekAssistanceSection() {
  const handleCall = (phone: string) => {
    window.open(`tel:${phone}`, "_self");
  };

  const handleWhatsApp = (whatsapp: string, name: string) => {
    const message = encodeURIComponent(
      `Hello ${name}, I am reaching out for assistance through the Compassion Week initiative. Could you please help me?`
    );
    window.open(`https://wa.me/${whatsapp}?text=${message}`, "_blank");
  };

  return (
    <section id="assistance" className="py-16 bg-background">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 bg-chart-2/20 text-chart-2 px-4 py-2 rounded-full text-sm font-medium border border-chart-2/30">
            <Heart className="w-4 h-4" />
            We're Here to Help
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Seek Assistance
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't face your challenges alone. Our dedicated Medical Students Christian Union team is here to provide support, guidance, and assistance when you need it most.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-12">
          {officials.map((official) => (
            <Card key={official.id} className="bg-card border-2 border-border card-hover">
              <CardHeader className="text-center">
                <Avatar className="w-20 h-20 mx-auto mb-4">
                  {/* Always include fallback for initials */}
                  {official.image && <AvatarImage src={official.image} alt={official.name} />}
                  <AvatarFallback className="bg-chart-2 text-white text-lg font-semibold">
                    {official.initials}
                  </AvatarFallback>
                </Avatar>
                <CardTitle className="text-xl text-foreground">{official.name}</CardTitle>
                <p className="text-chart-2 font-medium">{official.title}</p>
                <p className="text-muted-foreground text-sm">{official.description}</p>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button
                  onClick={() => handleCall(official.phone)}
                  className="w-full bg-primary hover:bg-chart-2 text-white border border-primary hover:border-chart-2"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call {official.name.split(" ")[0]}
                </Button>
                <Button
                  onClick={() => handleWhatsApp(official.whatsapp, official.name)}
                  variant="outline"
                  className="w-full border-2 border-green-500 text-green-600 hover:bg-green-50 dark:hover:bg-green-950"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp {official.name.split(" ")[0]}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
