import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/SEOHead";
import { Link } from "react-router-dom";
import { ArrowRight, ScrollText, Baby, Calendar, Sparkles } from "lucide-react";
import { pricing, formatINR } from "@/config/pricing";

const services = [
  { icon: ScrollText, title: "Name Check", text: "A quick yes/no check on whether your current name suits your birth date.", price: pricing.nameCorrection.nameCheck, original: pricing.nameCorrection.nameCheckOriginal, to: "/services/name-correction" },
  { icon: ScrollText, title: "Name Correction", text: "Personalised analysis with corrected spelling options and call consultation.", price: pricing.nameCorrection.standard, original: pricing.nameCorrection.standardOriginal, to: "/services/name-correction" },
  { icon: Baby, title: "Perfect Baby Name", text: "Numerology-matched baby name options with a detailed PDF report.", price: pricing.baby.perfectName, original: pricing.baby.perfectNameOriginal, to: "/services/baby-name" },
  { icon: Sparkles, title: "Complete Baby Blueprint", text: "Baby name plus career, lucky colour, number and direction guidance.", price: pricing.baby.blueprint, original: pricing.baby.blueprintOriginal, to: "/services/baby-name#plans" },
  { icon: Calendar, title: "C-Section Dates", text: "Auspicious C-section date and time guidance for your baby.", price: pricing.baby.cSectionEssential, original: undefined, to: "/services/csection-dates" },
];

const Services = () => (
  <Layout>
    <SEOHead title="Services" description="Name Check, Name Correction, Perfect Baby Name, Complete Baby Blueprint and C-Section Dates." canonical="/services" />
    <section className="py-14 md:py-20">
      <div className="section-container">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground">Our Services</h1>
          <p className="mt-3 text-muted-foreground">Choose the report that fits your need. Everything is delivered by email.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, text, price, original, to }) => (
            <Link key={title} to={to} className="group flex flex-col rounded-3xl border border-border bg-card p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-4"><Icon className="w-6 h-6 text-primary" /></div>
              <h2 className="font-display text-xl font-semibold text-foreground">{title}</h2>
              <p className="mt-2 text-sm text-muted-foreground flex-1">{text}</p>
              <div className="mt-5 flex items-center justify-between">
                <div className="flex items-baseline gap-2">
                  <span className="font-display text-2xl font-bold text-foreground">{formatINR(price)}</span>
                  {original && <span className="text-sm line-through text-muted-foreground">{formatINR(original)}</span>}
                </div>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary">View <ArrowRight className="w-4 h-4" /></span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Services;
