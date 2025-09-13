import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CreditCard, Smartphone, Copy, CheckCircle, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function SupportUsSection() {
  const [amount, setAmount] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const { toast } = useToast();

  const paybillDetails = {
    paybillNumber: "4109183",
    accountNumber: "COMPASSION",
    businessName: "UON MEDICAL SCHOOL CHRISTIAN UNION"
  };

  const copyToClipboard = async (text: string, field: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(field);
      toast({
        title: "Copied!",
        description: `${field} copied to clipboard`,
      });
      setTimeout(() => setCopiedField(null), 2000);
    } catch (err) {
      toast({
        title: "Error",
        description: "Failed to copy to clipboard",
        variant: "destructive",
      });
    }
  };

  const handleMpesaPayment = () => {
    if (!amount || !phoneNumber) {
      toast({
        title: "Missing Information",
        description: "Please enter both amount and phone number",
        variant: "destructive",
      });
      return;
    }

    if (!/^254\d{9}$/.test(phoneNumber)) {
      toast({
        title: "Invalid Phone Number",
        description: "Please enter a valid Kenyan phone number (254XXXXXXXXX)",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Coming Soon!",
      description: "M-Pesa push payments will be available shortly. Please use manual Paybill for now.",
    });

    setAmount("");
    setPhoneNumber("");
  };

  return (
    <section id="support" className="py-16 bg-muted/30">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 bg-chart-2/20 text-chart-2 px-4 py-2 rounded-full text-sm font-medium border border-chart-2/30">
            <CreditCard className="w-4 h-4" />
            Make a Difference
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Support Our Mission
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Your generous contribution helps us continue spreading compassion and providing assistance to those in need
          </p>
        </div>

        <Card className="bg-card shadow-lg card-hover">
          <CardHeader>
            <CardTitle className="text-2xl text-center text-foreground">
              Choose Your Payment Method
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="paybill" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="paybill" data-testid="tab-paybill">
                  Paybill Details
                </TabsTrigger>
                <TabsTrigger value="mpesa" data-testid="tab-mpesa">
                  M-Pesa Push
                </TabsTrigger>
              </TabsList>

              {/* --- MANUAL PAYMENT SECTION (UNCHANGED) --- */}
              <TabsContent value="paybill" className="space-y-6 mt-6">
                <div className="text-center mb-6">
                  <CreditCard className="w-12 h-12 text-chart-2 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Manual M-Pesa Payment
                  </h3>
                  <p className="text-muted-foreground">
                    Use these details to send money via M-Pesa
                  </p>
                </div>

                <div className="bg-blue-50 dark:bg-blue-950/20 rounded-lg p-4 mb-6">
                  <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    Physical Contributions
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    <strong>Location:</strong><br/> At Chiromo drop off is at the Anatomy Laboratory<br />
                    At KNH the drop off is at Bancy's<br />
                    <em>Please contact us for specific drop-off details and times</em>
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="bg-muted/50 rounded-lg p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <Label className="text-sm font-medium text-muted-foreground">
                          Paybill Number
                        </Label>
                        <p className="text-2xl font-bold text-foreground" data-testid="text-paybill-number">
                          {paybillDetails.paybillNumber}
                        </p>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => copyToClipboard(paybillDetails.paybillNumber, "Paybill Number")}
                        data-testid="button-copy-paybill"
                      >
                        {copiedField === "Paybill Number" ? (
                          <CheckCircle className="w-4 h-4" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </Button>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <Label className="text-sm font-medium text-muted-foreground">
                          Account Number
                        </Label>
                        <p className="text-xl font-semibold text-foreground" data-testid="text-account-number">
                          {paybillDetails.accountNumber}
                        </p>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => copyToClipboard(paybillDetails.accountNumber, "Account Number")}
                        data-testid="button-copy-account"
                      >
                        {copiedField === "Account Number" ? (
                          <CheckCircle className="w-4 h-4" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </Button>
                    </div>

                    <div>
                      <Label className="text-sm font-medium text-muted-foreground">
                        Business Name
                      </Label>
                      <p className="text-lg font-medium text-foreground" data-testid="text-business-name">
                        {paybillDetails.businessName}
                      </p>
                    </div>
                  </div>

                  <div className="bg-chart-2/10 rounded-lg p-4 border border-chart-2/20">
                    <h4 className="font-semibold text-foreground mb-2">How to pay:</h4>
                    <ol className="list-decimal list-inside space-y-1 text-muted-foreground text-sm">
                      <li>Go to M-Pesa on your phone</li>
                      <li>Select "Lipa na M-Pesa" then "Pay Bill"</li>
                      <li>Enter Business Number: {paybillDetails.paybillNumber}</li>
                      <li>Enter Account Number: {paybillDetails.accountNumber}</li>
                      <li>Enter the amount you wish to contribute</li>
                      <li>Enter your M-Pesa PIN to complete</li>
                    </ol>
                  </div>
                </div>
              </TabsContent>

              {/* --- MPESA PUSH SECTION WITH "COMING SOON" POPUP --- */}
              <TabsContent value="mpesa" className="space-y-6 mt-6">
                <div className="text-center mb-6">
                  <Smartphone className="w-12 h-12 text-chart-2 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Quick M-Pesa Payment
                  </h3>
                  <p className="text-muted-foreground">
                    Enter your details to receive an instant M-Pesa STK push
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <Label htmlFor="amount" className="text-base font-medium">
                      Amount (KES)
                    </Label>
                    <Input
                      id="amount"
                      type="number"
                      placeholder="Enter amount (e.g., 100)"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      className="text-lg py-3"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-base font-medium">
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="254712345678"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      className="text-lg py-3"
                    />
                    <p className="text-sm text-muted-foreground mt-1">
                      Enter your phone number starting with 254
                    </p>
                  </div>

                  <Button
                    onClick={handleMpesaPayment}
                    className="w-full bg-primary hover:bg-chart-2 text-white text-lg py-6 border border-primary hover:border-chart-2"
                  >
                    <Smartphone className="w-5 h-5 mr-2" />
                    Send Payment Request
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
