import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Footer from "@/components/Footer";
import StickyCtaBar from "@/components/StickyCtaBar";
import ThemeToggle from "@/components/ThemeToggle";
import { useThemeInitialization } from "@/hooks/useThemeInitialization";

const RefundPolicy = () => {
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
          Refund & Return Policy
        </h1>

        <div className="prose prose-sm md:prose-base dark:prose-invert max-w-none space-y-6">
          <p className="text-muted-foreground">
            Thanks for buying services at masterclass.risewithrahul.com. To provide our customers with the best experience and quality services, we have made cancellation and refund policy.
          </p>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">Returns</h2>
            <p className="text-muted-foreground mb-3">
              Before starting any work on your project, we divide the work into multiple milestones and our packages are customized accordingly after a deep analysis of scope of work. It is done to make sure that both parties are agreeing to work on the drafted quote or proposal which includes scope of services and cost.
            </p>
            <p className="text-muted-foreground mb-3">
              You have 24 hours to cancel any project from the date you make payment for it.
            </p>
            <p className="text-muted-foreground mb-3">
              To be eligible for a refund, you must be ready to pay 25% of total project cost to company as compensation to give you time to analyze your project and make a proposal etc.
            </p>
            <p className="text-muted-foreground">
              You must have the proof of payment done to Blue Dash Media.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">Refunds</h2>
            <p className="text-muted-foreground mb-3">
              Once we receive your refund request, we will deduct 25% amount that we have drafted for your project. We will immediately notify you on the status of your refund after inspecting the details.
            </p>
            <p className="text-muted-foreground">
              If your refund is approved, we will initiate a refund to your account (or original method of payment). You will receive the credit within a certain amount of days, depending on your card issuer's policies.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">Contact Us</h2>
            <p className="text-muted-foreground">
              If you have any questions on how to cancel or get refund, contact us on{" "}
              <a href="mailto:contact@risewithrahul.com" className="text-primary hover:underline">
                contact@risewithrahul.com
              </a>{" "}
              or reach us at{" "}
              <a href="tel:+917428638805" className="text-primary hover:underline">
                +91 74286 38805
              </a>
            </p>
          </section>
        </div>
      </div>

      <Footer />
      <StickyCtaBar />
    </main>
  );
};

export default RefundPolicy;
