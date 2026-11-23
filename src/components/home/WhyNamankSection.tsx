import { Link } from "react-router-dom";
import { ArrowRight, Gem, ShieldCheck, Flower2, Lock } from "lucide-react";

const points = [
  { icon: Gem, title: "Personalised Analysis", text: "Tailored to you" },
  { icon: ShieldCheck, title: "Clear & Easy Reports", text: "In simple language" },
  { icon: Flower2, title: "Expert Guidance", text: "Clear, personalised recommendations" },
  { icon: Lock, title: "Private & Secure", text: "Your data is safe with us" },
];

const WhyNamankSection = () => (
  <section className="pb-12">
    <div className="section-container">
      <div className="rounded-3xl bg-gradient-to-r from-[#EDE6FA] via-[#F3EEFC] to-[#EDE6FA] border border-border px-6 py-8 md:px-10 grid gap-6 lg:grid-cols-[1.1fr_3fr] items-center">
        <div className="text-center lg:text-left">
          <h2 className="font-display text-3xl font-bold text-primary">Why Namaank?</h2>
          <p className="mt-1 text-sm text-foreground/75">Because every name matters&hellip;</p>
          <Link to="/about" className="mt-4 inline-flex items-center gap-2 px-5 py-2 rounded-full border border-accent text-primary text-sm font-semibold hover:bg-accent/10 transition-colors">
            Why Choose Namaank <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-6">
          {points.map(({ icon: Icon, title, text }, i) => (
            <div key={title} className={`flex flex-col items-center text-center px-4 ${i > 0 ? "md:border-l border-border" : "lg:border-l border-border"}`}>
              <Icon className="w-7 h-7 text-primary mb-2" strokeWidth={1.6} />
              <p className="text-sm font-semibold text-foreground">{title}</p>
              <p className="text-xs text-muted-foreground mt-0.5">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default WhyNamankSection;
