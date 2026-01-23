import { Link } from "react-router-dom";
import { useThemeInitialization } from "@/hooks/useThemeInitialization";
import Footer from "@/components/Footer";
import StickyCtaBar from "@/components/StickyCtaBar";
import ThemeToggle from "@/components/ThemeToggle";
import { ArrowLeft, Phone, Mail, MapPin } from "lucide-react";

const ContactUs = () => {
  useThemeInitialization();

  return (
    <main className="min-h-screen bg-background">
      <ThemeToggle />
      
      <section className="py-16 md:py-24">
        <div className="container max-w-4xl">
          {/* Back Link */}
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-primary hover:underline mb-8 text-sm font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          {/* Header */}
          <div className="mb-12">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl text-primary font-semibold">
              Rise With Rahul Private Limited
            </p>
          </div>

          {/* About Content */}
          <div className="space-y-6 text-muted-foreground leading-relaxed mb-12">
            <p>
              At Rise With Rahul Private Limited, we are on a mission to empower aspiring entrepreneurs to build and scale their own clothing brands with the right guidance, systems, and practical knowledge.
            </p>
            
            <p>
              The company was founded by <span className="text-foreground font-medium">Rahul Sharma</span>, an IIM Ahmedabad alumnus and the Founder & CEO of Qurbat, a fast-growing ethnic wear brand with retail stores across India.
            </p>
            
            <p>
              Rahul began his entrepreneurial journey a few years ago by building Qurbat from the ground up. Today, it stands among one of the fastest-growing ethnic wear brands in the country. Alongside this, he started creating content to inspire and educate young minds about entrepreneurship and business-building from real-world experience.
            </p>
            
            <p>
              Through multiple webinars and training programs, Rahul and his team taught thousands of aspiring founders how to start their own clothing brand with an investment of under ₹3 lakh. This growing demand and impact led to the formation of Rise With Rahul Private Limited, a platform dedicated to helping people launch and grow their own apparel brands step by step.
            </p>
          </div>

          {/* Get in Touch Section */}
          <div className="bg-card border border-border rounded-2xl p-8 md:p-10">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-8">
              Get in Touch
            </h2>
            
            <div className="space-y-6">
              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Phone</p>
                  <a 
                    href="tel:+917428638805" 
                    className="text-foreground font-medium hover:text-primary transition-colors"
                  >
                    +91 74286 38805
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Email</p>
                  <a 
                    href="mailto:contact@risewithrahul.com" 
                    className="text-foreground font-medium hover:text-primary transition-colors"
                  >
                    contact@risewithrahul.com
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Address</p>
                  <address className="text-foreground font-medium not-italic leading-relaxed">
                    Basement, 10A, Plot No. IDC,<br />
                    Opposite Bird BMW Car Showroom,<br />
                    Industrial Development Area, Sector 16,<br />
                    Gurugram, Haryana – 122007
                  </address>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <StickyCtaBar />
    </main>
  );
};

export default ContactUs;
