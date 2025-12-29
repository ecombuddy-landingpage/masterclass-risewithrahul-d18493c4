import { Layers, ShoppingCart, TrendingUp } from "lucide-react";
const PhaseSection = () => {
  const phases = [{
    number: "01",
    title: "BUILD",
    icon: Layers,
    description: "Set up your brand name, logo, and website (Shopify/WordPress)"
  }, {
    number: "02",
    title: "SELL",
    icon: ShoppingCart,
    description: "Learn how to sell on Instagram, WhatsApp & your website"
  }, {
    number: "03",
    title: "SCALE",
    icon: TrendingUp,
    description: "Run ads, retarget customers, grow traffic & automate"
  }];
  return <section className="pt-12 pb-20 bg-card relative">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            What You'll <span className="text-primary">Learn</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            The complete 90-day roadmap to building your clothing brand
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {phases.map((phase, index) => <div key={index} className="relative group">
              <div className="relative bg-background border border-border rounded-2xl p-8 h-full hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 shadow-card">
                {/* Phase number */}
                <div className="text-6xl font-display font-bold mb-4 text-slate-400">
                  {phase.number}
                </div>
                
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center mb-4">
                  <phase.icon className="w-7 h-7 text-primary-foreground" />
                </div>

                {/* Content */}
                <h3 className="font-display text-2xl font-bold mb-3 text-foreground">
                  {phase.title}
                </h3>
                <p className="text-muted-foreground">
                  {phase.description}
                </p>
              </div>
            </div>)}
        </div>

        {/* Outcome */}
        <div className="mt-16 bg-secondary border border-primary/20 rounded-2xl p-8 max-w-4xl mx-auto shadow-soft">
          <h3 className="font-display text-2xl font-bold text-center mb-8 text-primary">
            Your 90-Day Outcome
          </h3>
          <div className="grid sm:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-foreground mb-2">🌐</div>
              <p className="text-foreground font-medium">Your own live website & brand identity</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-foreground mb-2">📦</div>
              <p className="text-foreground font-medium">First 50–100 website orders</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-foreground mb-2">📈</div>
              <p className="text-foreground font-medium">Sales & profit growth with control</p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default PhaseSection;