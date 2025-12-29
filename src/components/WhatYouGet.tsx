import { BookOpen, CreditCard, Megaphone, FileText, Users } from "lucide-react";

const WhatYouGet = () => {
  const benefits = [
    { icon: BookOpen, text: "Step-by-step system to launch your brand" },
    { icon: CreditCard, text: "Website & payment gateway setup support" },
    { icon: Megaphone, text: "Marketing, sales & traffic training" },
    { icon: FileText, text: "Templates, tools, and a brand manager" },
    { icon: Users, text: "90-Day Accountability & Support" },
  ];

  return (
    <section className="py-10 bg-card relative">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-6">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            What You <span className="text-primary">Get</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Everything you need to build and grow your brand
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="card-hover card-hover-scale flex items-center gap-4 bg-background border border-border rounded-xl p-5 hover:border-primary/50 shadow-card"
              >
                <div className="icon-animate w-12 h-12 rounded-xl bg-secondary flex items-center justify-center shrink-0">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <span className="text-foreground font-medium">{benefit.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatYouGet;
