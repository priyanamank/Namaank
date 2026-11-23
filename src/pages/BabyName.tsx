import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/SEOHead";
import { Baby, Check, Clock, FileText, ShieldCheck, Sparkles, Star, ArrowRight } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { pricing, formatINR, payLink } from "@/config/pricing";

const plans = [
  {
    id: "perfect-baby-name",
    badge: "Most Popular",
    name: "Perfect Baby Name Report",
    price: pricing.baby.perfectName,
    original: pricing.baby.perfectNameOriginal,
    delivery: "24–48 hours",
    features: [
      "2 baby name options matched to birth details",
      "Mulank & Bhagyank analysis",
      "Name alphabet analysis (Vedic)",
      "Personalised Loshu Grid analysis",
      "Detailed PDF report on email",
    ],
  },
  {
    id: "complete-baby-name-blueprint",
    badge: "Full Blueprint",
    name: "Complete Baby Name Blueprint",
    price: pricing.baby.blueprint,
    original: pricing.baby.blueprintOriginal,
    delivery: "24–48 hours",
    features: [
      "Everything in Perfect Baby Name Report",
      "Ideal career guidance",
      "Lucky colour and lucky number",
      "Lucky direction",
      "Deeper numerology guidance for your child",
    ],
  },
];

const faqs = [
  { q: "What details do you need?", a: "Your baby's date, time and place of birth, gender, and the parents' names. If your baby is not born yet, share the expected date and update us once the baby arrives." },
  { q: "How will I receive the report?", a: "Your personalised PDF report is delivered to your email within 24–48 hours of payment." },
  { q: "Can I suggest names I already like?", a: "Yes. Mention preferred starting letters or family traditions in the form and we will keep them in mind." },
  { q: "Is the payment secure?", a: "Yes. Payments are processed by Razorpay using UPI, cards and net banking." },
];

const BabyName = () => {
  const { hash } = useLocation();
  useEffect(() => {
    if (hash) document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: "smooth" });
  }, [hash]);

  return (
    <Layout>
      <SEOHead
        title="Perfect Baby Name Report & Complete Baby Name Blueprint"
        description="Numerology-based baby name options matched to your child's birth details, delivered as a detailed PDF report."
        canonical="/services/baby-name"
      />

      <section className="bg-gradient-to-b from-muted via-background to-background py-14 md:py-20">
        <div className="section-container max-w-4xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-5">
            <Baby className="w-4 h-4" /> For new and expecting parents
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground">Choose a name that grows with your baby</h1>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Get baby name options that match your child&rsquo;s birth numbers, explained clearly so you can choose with confidence.
          </p>
          <a href="#plans" className="mt-7 inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors">
            See packages <ArrowRight className="w-4 h-4" />
          </a>
          <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1.5"><Star className="w-4 h-4 text-accent fill-accent" /> 4.9 rated</span>
            <span className="inline-flex items-center gap-1.5"><FileText className="w-4 h-4 text-primary" /> PDF report</span>
            <span className="inline-flex items-center gap-1.5"><Clock className="w-4 h-4 text-primary" /> 24–48 hours</span>
            <span className="inline-flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-primary" /> Secure payment</span>
          </div>
        </div>
      </section>

      <section id="plans" className="py-14 md:py-20 scroll-mt-24">
        <div className="section-container">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center text-foreground mb-10">Choose your package</h2>
          <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
            {plans.map((plan) => {
              const saving = plan.original - plan.price;
              return (
                <div key={plan.id} className="relative flex flex-col rounded-3xl border border-border bg-card p-7 shadow-sm hover:shadow-xl transition-shadow">
                  <span className="absolute -top-3 left-6 px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-bold">{plan.badge}</span>
                  <h3 className="font-display text-2xl font-semibold text-foreground mt-2">{plan.name}</h3>
                  <div className="mt-3 flex items-baseline gap-3 flex-wrap">
                    <span className="font-display text-4xl font-bold text-foreground">{formatINR(plan.price)}</span>
                    <span className="text-sm line-through text-muted-foreground">{formatINR(plan.original)}</span>
                    {saving > 0 && <span className="text-xs font-semibold text-report-saving">Save {formatINR(saving)}</span>}
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground">Delivery in {plan.delivery}</p>
                  <ul className="mt-5 space-y-2.5 flex-1">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-foreground">
                        <Check className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" /> {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={payLink(plan.name, plan.price, "baby-name")}
                    className="mt-6 inline-flex items-center justify-center gap-2 w-full h-12 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
                  >
                    Get Report <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-14 bg-muted/60">
        <div className="section-container max-w-3xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-center text-foreground mb-8 flex items-center justify-center gap-2">
            <Sparkles className="w-6 h-6 text-accent" /> Frequently asked questions
          </h2>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem key={f.q} value={`faq-${i}`} className="rounded-2xl border border-border bg-card px-5">
                <AccordionTrigger className="text-left font-semibold">{f.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </Layout>
  );
};

export default BabyName;
