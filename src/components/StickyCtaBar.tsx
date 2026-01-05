import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";

const StickyCtaBar = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date("2026-01-08T19:00:00+05:30");
    
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };
    
    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  return <div className="fixed bottom-0 left-0 right-0 z-50 bg-primary shadow-glow border-t border-primary/20">
      <div className="container py-3 sm:py-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-primary-foreground">
          <div className="text-primary-foreground text-center sm:text-left">
            <p className="text-xs sm:text-sm text-primary-foreground/80 mb-1">
              The live masterclass starts in{" "}
              <span className="font-bold text-yellow-300">
                {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
              </span>
            </p>
            <p className="sm:text-base text-base font-extrabold text-primary-foreground">
              🚨 Hurry! Only a few seats left
            </p>
            <p className="text-primary-foreground/80 text-xs sm:text-sm hidden sm:block">
              Join the 2-Hour Live Masterclass and transform your business
            </p>
          </div>
          
          <div className="flex flex-col items-center gap-1">
            <div className="flex items-center gap-2 text-sm sm:text-base">
              <span className="text-primary-foreground font-semibold">Offer ends soon:</span>
              <span className="line-through text-primary-foreground/60 text-base sm:text-lg font-medium">₹1299</span>
              <span className="text-yellow-300 font-extrabold text-lg sm:text-xl">₹99</span>
            </div>
            <a href="https://risewithrahul.creatorlabs.in/add-to-cart" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-card text-primary font-bold px-6 py-3 rounded-lg hover:bg-card/90 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-glow-sm ring-2 ring-card/50 whitespace-nowrap animate-cta-shake">
              🚀 Register Now @ ₹99
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>;
};
export default StickyCtaBar;