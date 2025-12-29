import { ArrowRight } from "lucide-react";
const StickyCtaBar = () => {
  return <div className="fixed bottom-0 left-0 right-0 z-50 bg-primary shadow-glow border-t border-primary/20">
      <div className="container py-3 sm:py-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-primary-foreground">
          <div className="text-primary-foreground text-center sm:text-left">
            <p className="sm:text-base text-base font-extrabold text-primary-foreground">
              🚨 Hurry! Only a few seats left
            </p>
            <p className="text-primary-foreground/80 text-xs sm:text-sm hidden sm:block">
              Join the 2-Hour Live Masterclass and transform your business
            </p>
          </div>
          
          <a href="https://risewithrahul.creatorlabs.in/add-to-cart" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-card text-primary font-bold px-6 py-3 rounded-lg hover:bg-card/90 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-glow-sm ring-2 ring-card/50 whitespace-nowrap">
            🚀 Register Now @ ₹99
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>;
};
export default StickyCtaBar;