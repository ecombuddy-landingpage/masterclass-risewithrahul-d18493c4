import { CheckCircle2 } from "lucide-react";

const WhoIsThisFor = () => {
  const criteria = [
    "You're selling on Meesho, Amazon, Flipkart, or Instagram",
    "You're tired of low margins, high competition, and zero brand identity",
    "You dream of building a recognized brand and owning your customer base",
    "You don't know how to build a website — but you're ready to learn",
  ];

  return (
    <section className="py-10 bg-background relative overflow-hidden">
      <div className="container relative">
        <div className="text-center mb-6">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Who Is This <span className="text-primary">For?</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            This webinar is perfect for you if...
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="grid gap-4">
            {criteria.map((item, index) => (
              <div
                key={index}
                className="card-hover flex items-start gap-4 bg-card border border-border rounded-xl p-6 shadow-card hover:border-primary/50 group"
              >
                <div className="icon-animate w-10 h-10 rounded-full bg-secondary flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                </div>
                <p className="text-foreground text-lg pt-1.5">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoIsThisFor;
