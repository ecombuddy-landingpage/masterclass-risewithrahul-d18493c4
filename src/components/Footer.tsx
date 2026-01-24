import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-6 border-t border-border bg-card pb-24">
      <div className="container">
        {/* Row 1: Links */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-4">
          <Link
            to="/refund-policy"
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            Refund & Return Policy
          </Link>
          <Link
            to="/terms"
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            Terms & Conditions
          </Link>
          <Link
            to="/privacy"
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            Privacy Policy
          </Link>
          <Link
            to="/about"
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            About Us
          </Link>
          <Link
            to="/contact"
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            Contact Us
          </Link>
        </div>

        {/* Row 2: Company & Contact Information */}
        <div className="border-t border-border pt-4 text-center">
          <p className="text-xs text-muted-foreground">
            <span className="text-primary font-medium">Rise With Rahul Pvt. Ltd</span> | Phone Number –{" "}
            <a
              href="tel:+917428638805"
              className="text-primary hover:underline"
            >
              +91 74286 38805
            </a>{" "}
            | Email –{" "}
            <a
              href="mailto:contact@risewithrahul.com"
              className="text-primary hover:underline"
            >
              contact@risewithrahul.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
