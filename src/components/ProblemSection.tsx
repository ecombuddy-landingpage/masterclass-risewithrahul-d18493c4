import { XCircle, CheckCircle } from "lucide-react";

const ProblemSection = () => {
  const problems = [
    "Low profit margins eating into your earnings",
    "Zero customer retention or repeat buyers",
    "No brand value — just another seller",
    "Constant price competition driving you crazy",
  ];

  return (
    <section className="py-10 bg-card relative">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Why You Should{" "}
            <span className="text-destructive">Stop</span>{" "}
            Relying on Marketplaces
          </h2>
          <p className="text-muted-foreground text-lg">
            Selling on Meesho, Amazon, Flipkart, or Instagram? Here's what's really happening to your business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Problems */}
          <div className="bg-destructive/5 border border-destructive/20 rounded-2xl p-8 space-y-6">
            <h3 className="font-display text-xl font-semibold text-destructive">
              The Marketplace Trap
            </h3>
            <ul className="space-y-4">
              {problems.map((problem, index) => (
                <li key={index} className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{problem}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Solution */}
          <div className="bg-secondary border border-primary/20 rounded-2xl p-8 space-y-6 shadow-soft">
            <h3 className="font-display text-xl font-semibold text-primary">
              The Website Solution
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-foreground">Full ownership of your customer base</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-foreground">Build real brand value & recognition</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-foreground">Higher margins, more profit</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-foreground">Repeat customers who love YOUR brand</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
