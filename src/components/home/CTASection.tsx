import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const CTASection = () => (
  <section className="pb-10">
    <div className="section-container">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-secondary via-primary to-secondary px-6 py-7 md:px-12 flex flex-col md:flex-row items-center justify-between gap-5 text-center md:text-left">
        <span className="hidden md:block absolute left-5 top-1/2 -translate-y-1/2 text-accent text-3xl">&#10022;</span>
        <span className="hidden md:block absolute right-[38%] top-1/2 -translate-y-1/2 text-accent text-2xl">&#10022;</span>
        <div className="md:pl-10">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground">Ready to find the right name?</h2>
          <p className="mt-1 text-sm text-primary-foreground/80">Start your personalised numerology journey today.</p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link to="/services/name-correction" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent text-accent-foreground text-sm font-semibold hover:bg-accent/90 transition-colors">
            Check Your Name <ArrowRight className="w-4 h-4" />
          </Link>
          <Link to="/services/baby-name" className="inline-flex items-center px-5 py-2.5 rounded-full border border-accent text-primary-foreground text-sm font-semibold hover:bg-accent/15 transition-colors">
            Find a Baby Name
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default CTASection;
