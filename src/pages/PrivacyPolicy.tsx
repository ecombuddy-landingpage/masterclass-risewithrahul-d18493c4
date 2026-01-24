import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Footer from "@/components/Footer";
import StickyCtaBar from "@/components/StickyCtaBar";
import ThemeToggle from "@/components/ThemeToggle";
import { useThemeInitialization } from "@/hooks/useThemeInitialization";

const PrivacyPolicy = () => {
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
          Privacy Policy
        </h1>

        <div className="prose prose-sm md:prose-base dark:prose-invert max-w-none space-y-6">
          <p className="text-muted-foreground">
            We are committed to safeguarding and preserving the privacy of our visitors. This Privacy Policy explains what happens to any personal data that you provide to us, or that we collect from you whilst you visit our site. We do update this Policy from time to time so please do review this Policy regularly.
          </p>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">Information We Collect</h2>
            <p className="text-muted-foreground mb-3">
              In running and maintaining our website we may collect and process the following data about you:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>
                Information about your use of our site including details of your visits such as pages viewed and the resources that you access. Such information includes traffic data, location data and other communication data.
              </li>
              <li>
                Information provided voluntarily by you. For example, when you register for information or purchase a service.
              </li>
              <li>
                Information that you provide when you communicate with us by any means.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">Use of Your Information</h2>
            <p className="text-muted-foreground mb-3">
              We use the information that we collect from you to provide our services to you. In addition to this we may use the information for one or more of the following purposes:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>
                To provide information to you that you request from us relating to our services.
              </li>
              <li>
                To provide information to you relating to other services that may be of interest to you. Such additional information will only be provided where you have consented to receive such information.
              </li>
              <li>
                To inform you of any changes to our website and services.
              </li>
            </ul>
          </section>
        </div>
      </div>

      <Footer />
      <StickyCtaBar />
    </main>
  );
};

export default PrivacyPolicy;
