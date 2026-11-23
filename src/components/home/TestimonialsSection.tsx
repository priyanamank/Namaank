import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import SectionHeading from "./SectionHeading";

// TODO: these are sample reviews from the design. Replace them with real customer reviews.
const testimonials = [
  { name: "Priya S.", text: "The name correction report was so accurate and easy to understand!" },
  { name: "Ankit & Neha", text: "We found the perfect name for our baby. Thank you Namaank!" },
  { name: "Riya Sharma", text: "Very helpful and professional service. Highly recommended!" },
];

const initials = (n: string) => n.replace(/[^A-Za-z ]/g, "").split(" ").filter(Boolean).slice(0, 2).map((p) => p[0]).join("").toUpperCase();

const TestimonialsSection = () => {
  const [start, setStart] = useState(0);
  const count = testimonials.length;
  const go = (d: number) => setStart((s) => (s + d + count) % count);
  const visible = [0, 1, 2].map((i) => testimonials[(start + i) % count]);

  return (
    <section id="reviews" className="pb-12 scroll-mt-24">
      <div className="section-container">
        <SectionHeading title="What Our Clients Say" subtitle="Real stories from thousands who trust Namaank." />
        <div className="flex items-center gap-3">
          <button onClick={() => go(-1)} aria-label="Previous review" className="hidden sm:flex w-9 h-9 flex-shrink-0 items-center justify-center rounded-full border border-primary/40 bg-card text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
            <ChevronLeft className="w-4 h-4" />
          </button>
          <div className="grid flex-1 gap-4 md:grid-cols-3">
            {visible.map((t, i) => (
              <div key={t.name} className={`rounded-2xl border border-border bg-card p-5 shadow-sm flex gap-4 ${i > 0 ? "hidden md:flex" : ""}`}>
                <div className="w-14 h-14 flex-shrink-0 rounded-full bg-gradient-to-br from-[#E3D9F8] to-[#C9B8F0] flex items-center justify-center font-display font-bold text-primary">{initials(t.name)}</div>
                <div>
                  <div className="flex gap-0.5 mb-1.5">{[...Array(5)].map((_, k) => <Star key={k} className="w-3.5 h-3.5 fill-accent text-accent" />)}</div>
                  <p className="text-sm text-foreground/85 leading-snug">&ldquo;{t.text}&rdquo;</p>
                  <p className="mt-2 text-xs font-semibold text-foreground">{t.name}</p>
                </div>
              </div>
            ))}
          </div>
          <button onClick={() => go(1)} aria-label="Next review" className="hidden sm:flex w-9 h-9 flex-shrink-0 items-center justify-center rounded-full border border-primary/40 bg-card text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
        <div className="mt-5 flex items-center justify-center gap-2">
          {testimonials.map((t, i) => (
            <button key={t.name} onClick={() => setStart(i)} aria-label={`Show review ${i + 1}`} className={`h-2 rounded-full transition-all ${i === start ? "w-5 bg-primary" : "w-2 bg-primary/25"}`} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
