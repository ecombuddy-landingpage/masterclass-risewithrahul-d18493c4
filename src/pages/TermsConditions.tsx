import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Footer from "@/components/Footer";
import StickyCtaBar from "@/components/StickyCtaBar";
import ThemeToggle from "@/components/ThemeToggle";
import { useThemeInitialization } from "@/hooks/useThemeInitialization";

const TermsConditions = () => {
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
          Terms & Conditions
        </h1>

        <div className="prose prose-sm md:prose-base dark:prose-invert max-w-none space-y-6">
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">1. Confidentiality</h2>
            <p className="text-muted-foreground">
              Rise With Rahul Private Limited promises to keep customer information confidential.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">2. Scope of Project</h2>
            <p className="text-muted-foreground">
              Project scope is limited to the Requirement Analysis Document. Only requirements that are specifically written will be considered as requirements. Some minor features/points will be considered as scope of project.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">3. Delay in data submission & Payment</h2>
            <p className="text-muted-foreground">
              Customer agrees to submit all data required for the project in a timely manner as per project schedule. Delay in data submission may cause project delays. Delay more than 10 days beyond the due date of payment will lead to suspension of the project. In case of suspension of project, work will be stopped until payment is done to resume the project. Remaining project shall be carried with revised pricing prevailing at the time of resumption.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">4. Project Duration and Project Plan</h2>
            <p className="text-muted-foreground">
              Project plan and schedule is prepared based upon requirements, at the time of requirement analysis. Schedule is subject to change due to changes in project requirements, additional revision request, delay in data submission etc.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">5. Admin Access, Text, Pictures & Images</h2>
            <p className="text-muted-foreground">
              Customers agree to provide all required access, entire text, all pictures/images to be displays during advertisement of the website if required. Creatives for social media will be finalized after 2 approval maximum.
            </p>
          </section>
        </div>
      </div>

      <Footer />
      <StickyCtaBar />
    </main>
  );
};

export default TermsConditions;
