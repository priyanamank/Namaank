import { Link } from "react-router-dom";
import { ArrowRight, Search, PencilLine, Baby, Gem, CalendarDays } from "lucide-react";
import { pricing, formatINR } from "@/config/pricing";
import SectionHeading from "./SectionHeading";

const services = [
  { icon: Search, title: "Name Check", text: "Know if your current name aligns with numerology.", price: pricing.nameCorrection.nameCheck, to: "/services/name-correction" },
  { icon: PencilLine, title: "Name Correction", text: "Get suitable spelling suggestions.", price: pricing.nameCorrection.standard, to: "/services/name-correction" },
  { icon: Baby, title: "Perfect Baby Name", text: "Find meaningful names for your child.", price: pricing.baby.perfectName, to: "/services/baby-name" },
  { icon: Gem, title: "Complete Baby Blueprint", text: "Get a detailed report with multiple options.", price: pricing.baby.blueprint, to: "/services/baby-name#plans" },
  { icon: CalendarDays, title: "C-Section Date Guidance", text: "Explore numerology-based date and time options.", price: pricing.baby.cSectionComplete, to: "/services/csection-dates" },
];

const ServicesSection = () => (
  <section id="services" className="pt-4 pb-12 scroll-mt-24">
    <div className="section-container">
      <SectionHeading title="Our Services" subtitle="Simple, expert-led reports to guide you in choosing the perfect name." icon />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {services.map(({ icon: Icon, title, text, price, to }) => (
          <Link key={title} to={to} className="group flex flex-col items-center text-center rounded-2xl border border-border bg-card px-4 py-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all">
            <Icon className="w-8 h-8 text-primary mb-3" strokeWidth={1.6} />
            <h3 className="font-display text-base font-semibold text-foreground">{title}</h3>
            <p className="mt-2 text-xs text-muted-foreground flex-1">{text}</p>
            <span className="my-3 h-px w-8 bg-accent" />
            <span className="text-[11px] text-muted-foreground">Starting at</span>
            <span className="font-display text-xl font-bold text-primary">{formatINR(price)}</span>
            <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-primary group-hover:gap-2 transition-all">
              View Details <ArrowRight className="w-3 h-3" />
            </span>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
