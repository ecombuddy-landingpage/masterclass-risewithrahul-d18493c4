import { FileCheck, Instagram, MessageSquare, Gift } from "lucide-react";
const BonusSection = () => {
  const bonuses = [{
    icon: FileCheck,
    title: "Website Setup Checklist PDF"
  }, {
    icon: Instagram,
    title: "Instagram Bio & Highlight Templates"
  }, {
    icon: MessageSquare,
    title: "Winning WhatsApp Message Scripts"
  }];
  return <section className="py-10 bg-card relative">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-secondary border border-primary/30 rounded-3xl p-8 md:p-12 overflow-hidden shadow-soft">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
            
            <div className="relative">
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
                  <Gift className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <span className="bg-primary text-primary-foreground font-bold px-3 py-1.5 sm:px-4 rounded-xl text-lg sm:text-xl md:text-2xl inline-block max-w-[280px] sm:max-w-none leading-tight">Get bonuses worth ₹8,999 FREE 🎁</span>
                  <h2 className="font-display text-2xl font-bold text-foreground sm:text-2xl mx-0 px-0 my-[6px]">
                    For All Registrants
                  </h2>
                </div>
              </div>

              <div className="grid sm:grid-cols-3 gap-4">
                {bonuses.map((bonus, index) => <div key={index} className="bg-card border border-border rounded-xl p-5 text-center hover:border-primary/50 transition-all duration-300 shadow-card">
                    <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mx-auto mb-3">
                      <bonus.icon className="w-6 h-6 text-primary" />
                    </div>
                    <p className="text-foreground font-medium text-sm">{bonus.title}</p>
                  </div>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default BonusSection;