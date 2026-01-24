import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Footer from "@/components/Footer";
import StickyCtaBar from "@/components/StickyCtaBar";
import ThemeToggle from "@/components/ThemeToggle";
import { useThemeInitialization } from "@/hooks/useThemeInitialization";

const AboutUs = () => {
  useThemeInitialization();

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      <div className="container max-w-3xl py-12 px-4">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-primary hover:underline mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>

        <h1 className="font-display text-3xl md:text-4xl font-bold text-primary mb-6">
          About Us
        </h1>

        <div className="prose prose-sm md:prose-base dark:prose-invert max-w-none space-y-6">
          <p className="text-muted-foreground text-lg font-medium">
            Rise With Rahul Private Limited is on a mission to empower aspiring entrepreneurs to build and scale their own clothing brands with the right guidance, proven systems, and practical, real-world knowledge.
          </p>

          <p className="text-muted-foreground">
            The company was founded by Rahul Sharma, an IIM Ahmedabad alumnus and the Founder & CEO of Qurbat, a fast-growing ethnic wear brand with retail stores across India.
          </p>

          <p className="text-muted-foreground">
            Rahul began his entrepreneurial journey a few years ago by building Qurbat from the ground up. Today, the brand stands among one of the fastest-growing ethnic wear labels in the country. Alongside scaling his own business, Rahul started sharing his real-world experiences through content creation to inspire and educate young entrepreneurs on how to build sustainable businesses.
          </p>

          <p className="text-muted-foreground">
            Through multiple webinars and structured training programs, Rahul and his team have guided thousands of aspiring founders on how to start their own clothing brands with an investment of under ₹3 lakh. The overwhelming demand, success stories, and impact of these programs led to the formation of Rise With Rahul Private Limited.
          </p>

          <p className="text-muted-foreground">
            Today, Rise With Rahul is a dedicated platform designed to help individuals launch, grow, and scale their apparel brands step by step, with clarity, confidence, and practical execution.
          </p>
        </div>
      </div>

      <Footer />
      <StickyCtaBar />
    </main>
  );
};

export default AboutUs;
