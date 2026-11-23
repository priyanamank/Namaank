import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "How does Name Check work?", a: "We compare the numbers of your name with your date of birth using numerology and tell you whether your current name supports you." },
  { q: "What details are required?", a: "Your full name, date of birth and contact details. For baby name reports we also need the baby's birth time, place and parents' names." },
  { q: "Can I request a name correction?", a: "Yes. The Name Correction report suggests suitable spelling options aligned with your birth numbers." },
  { q: "Will I receive the report on email?", a: "Yes. Your personalised PDF report is sent to the email address you provide after payment." },
  { q: "How long does it take to receive my report?", a: "Most reports are delivered within 12 to 48 hours of payment." },
  { q: "Is my payment and personal data safe?", a: "Payments are processed securely by Razorpay, and your details are used only to prepare your report." },
];

const FAQSection = () => {
  const [all, setAll] = useState(false);
  const shown = all ? faqs : faqs.slice(0, 4);
  return (
    <section id="faq" className="pb-12 scroll-mt-24">
      <div className="section-container">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#FBF1E4] via-[#F8EEE6] to-[#F6E6D0] border border-border px-6 py-8 md:px-10 grid gap-6 lg:grid-cols-[1fr_1.2fr_1fr] items-center">
          <div className="text-center lg:text-left">
            <h2 className="font-display text-3xl font-bold text-primary">Frequently Asked Questions</h2>
            <p className="mt-1 text-sm text-foreground/75">Find quick answers to common queries.</p>
            <button onClick={() => setAll((v) => !v)} className="mt-4 inline-flex items-center gap-2 px-5 py-2 rounded-full border border-accent text-primary text-sm font-semibold hover:bg-accent/10 transition-colors">
              {all ? "Show Fewer" : "View All FAQs"} <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          <Accordion type="single" collapsible className="rounded-2xl bg-card/90 px-5 py-1 shadow-sm">
            {shown.map((f, i) => (
              <AccordionItem key={f.q} value={`f${i}`} className="border-border">
                <AccordionTrigger className="text-left text-sm font-medium py-3">{f.q}</AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <div className="hidden lg:flex flex-col items-center justify-center text-center">
            <p className="font-display italic text-2xl text-primary/80 leading-snug">A better name&hellip;<br />A brighter future&hellip;</p>
            <span className="mt-3 text-accent text-3xl">&#10022;</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
