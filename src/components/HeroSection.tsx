import { Calendar, Clock, Video, Globe } from "lucide-react";
import { useState, useEffect } from "react";
import rahulAward from "@/assets/rahul-award.webp";

const HeroSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Target date: 8th January 2026, 12:00 PM IST
    const targetDate = new Date("2026-01-08T12:00:00+05:30");

    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const infoCards = [{
    icon: Calendar,
    label: "Date",
    value: "8th January",
    subtext: "(Wednesday)"
  }, {
    icon: Clock,
    label: "Time",
    value: "12 PM",
    subtext: ""
  }, {
    icon: Video,
    label: "Platform",
    value: "Zoom",
    subtext: ""
  }, {
    icon: Globe,
    label: "Language",
    value: "English & Hindi",
    subtext: ""
  }];

  return <section className="min-h-screen bg-gradient-hero pt-6 pb-12">
      <div className="container">
        {/* Top Badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center bg-primary text-primary-foreground rounded-full px-8 py-4 text-base sm:text-lg font-bold shadow-soft">
            For Aspiring Brand Owners
          </div>
        </div>

        {/* Main Headline */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-2">Join 2-Hours Live Masterclass</h1>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            <span className="text-primary underline-hand">Build your own brand in 90 days. Stop Renting, Start Owning.</span>
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start max-w-6xl mx-auto">
          {/* Left - Image with Info */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-glow bg-black/5 dark:bg-black/20">
              <img alt="Rahul Sharma receiving International Business Award" className="w-full h-auto object-contain" src={rahulAward} fetchPriority="high" width={750} height={500} />
              
              {/* Overlay Info - Hidden on mobile, visible on sm and above */}
              <div className="hidden sm:block absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-4 sm:p-5">
                <h3 className="font-display text-lg lg:text-xl text-white drop-shadow-[0_2px_8px_rgba(0,0,0,1)] mb-1 font-extrabold">Rahul Sharma – Founder & CEO of Qurbat</h3>
                <p className="text-yellow-300 drop-shadow-[0_2px_6px_rgba(0,0,0,1)] text-sm font-semibold">
                  (Multi-City Fashion Brand)
                </p>
                <p className="text-white drop-shadow-[0_2px_6px_rgba(0,0,0,1)] text-xs mt-2">
                  IIM Ahmedabad Alumnus, 15L+ Community Mentor, TEDx Speaker & Retail Excellence Awardee
                </p>
              </div>
            </div>
            
            {/* Mobile Text Card - Visible only on mobile, hidden on sm and above */}
            <div className="sm:hidden mt-4 bg-card rounded-xl p-4 shadow-card border border-border">
              <h3 className="font-display text-lg text-foreground mb-1 font-extrabold">
                Rahul Sharma – Founder & CEO of Qurbat
              </h3>
              <p className="text-primary text-sm font-semibold">
                (Multi-City Fashion Brand)
              </p>
              <p className="text-muted-foreground text-xs mt-2">
                IIM Ahmedabad Alumnus, 15L+ Community Mentor, TEDx Speaker & Retail Excellence Awardee
              </p>
            </div>
          </div>

          {/* Right - Info Cards */}
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {infoCards.map((card, index) => <div key={index} className="bg-card rounded-xl p-3 sm:p-5 shadow-card hover:shadow-glow-sm transition-shadow duration-300 border border-border flex flex-col sm:flex-row items-center sm:items-start gap-2 sm:gap-4 text-center sm:text-left">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-secondary flex items-center justify-center shrink-0">
                    <card.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-muted-foreground text-xs sm:text-sm">{card.label}</p>
                    <p className="font-bold text-foreground text-sm sm:text-lg">{card.value}</p>
                    {card.subtext && <p className="text-muted-foreground text-xs sm:text-sm">{card.subtext}</p>}
                  </div>
                </div>)}
            </div>

            {/* CTA Button */}
            <a href="https://risewithrahul.creatorlabs.in/add-to-cart" target="_blank" rel="noopener noreferrer" className="block w-full cta-gradient hover:opacity-90 text-primary-foreground text-center py-5 sm:py-6 rounded-xl font-bold text-lg sm:text-xl transition-all duration-300 shadow-glow-lg hover:shadow-glow hover:scale-[1.02] active:scale-[0.98] ring-4 ring-primary/30 animate-cta-shake">
              🚀 Register Now At <span className="text-yellow-300 font-extrabold">Rs. 99/-</span>
            </a>

            {/* Guarantee */}
            <p className="text-center text-primary font-bold italic text-lg">
              100% SATISFACTION GUARANTEED!!
            </p>

            {/* Countdown Timer */}
            <div className="bg-card rounded-xl p-4 sm:p-5 shadow-card border border-border">
              <p className="text-center text-muted-foreground text-sm mb-3">⏰ Masterclass starts in:</p>
              <div className="grid grid-cols-4 gap-2 sm:gap-3">
                <div className="bg-secondary rounded-lg p-2 sm:p-3 text-center">
                  <p className="font-display text-2xl sm:text-3xl font-bold text-primary">{timeLeft.days}</p>
                  <p className="text-muted-foreground text-xs sm:text-sm">Days</p>
                </div>
                <div className="bg-secondary rounded-lg p-2 sm:p-3 text-center">
                  <p className="font-display text-2xl sm:text-3xl font-bold text-primary">{timeLeft.hours}</p>
                  <p className="text-muted-foreground text-xs sm:text-sm">Hours</p>
                </div>
                <div className="bg-secondary rounded-lg p-2 sm:p-3 text-center">
                  <p className="font-display text-2xl sm:text-3xl font-bold text-primary">{timeLeft.minutes}</p>
                  <p className="text-muted-foreground text-xs sm:text-sm">Minutes</p>
                </div>
                <div className="bg-secondary rounded-lg p-2 sm:p-3 text-center">
                  <p className="font-display text-2xl sm:text-3xl font-bold text-primary">{timeLeft.seconds}</p>
                  <p className="text-muted-foreground text-xs sm:text-sm">Seconds</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;