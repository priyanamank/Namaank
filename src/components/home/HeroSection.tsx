import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, Lock, Mail, Star } from "lucide-react";
import icon from "@/assets/namank-icon.png";

const NUMBERS: Array<{ n: string; x: string; y: string; s: string; r: number }> = [
  { n: "2", x: "24%", y: "10%", s: "3rem", r: -8 },
  { n: "4", x: "74%", y: "3%", s: "3.2rem", r: 6 },
  { n: "8", x: "86%", y: "16%", s: "3rem", r: 4 },
  { n: "3", x: "6%", y: "24%", s: "3rem", r: -10 },
  { n: "9", x: "88%", y: "33%", s: "3.4rem", r: 8 },
  { n: "7", x: "9%", y: "42%", s: "3rem", r: -6 },
  { n: "4", x: "80%", y: "58%", s: "2.6rem", r: 10 },
  { n: "3", x: "18%", y: "62%", s: "2.4rem", r: -4 },
];

const trust = [
  { icon: ShieldCheck, a: "Personalised", b: "Analysis" },
  { icon: Lock, a: "Secure Online", b: "Payment" },
  { icon: Mail, a: "PDF Report", b: "via Email" },
];

/** Lotus drawn with SVG so it stays sharp and needs no image file. */
const Lotus = () => (
  <svg viewBox="0 0 320 170" className="w-full h-auto" aria-hidden="true">
    <defs>
      <linearGradient id="petalBack" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#FBD9B8" />
        <stop offset="1" stopColor="#E99BB1" />
      </linearGradient>
      <linearGradient id="petalFront" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#FFF1DC" />
        <stop offset="1" stopColor="#F4B3A8" />
      </linearGradient>
      <radialGradient id="lotusGlow" cx="50%" cy="60%" r="50%">
        <stop offset="0" stopColor="#FFF6D6" stopOpacity="0.95" />
        <stop offset="1" stopColor="#FFF6D6" stopOpacity="0" />
      </radialGradient>
    </defs>
    <ellipse cx="160" cy="110" rx="150" ry="70" fill="url(#lotusGlow)" />
    {[-72, -50, 50, 72].map((a) => (
      <ellipse key={a} cx="160" cy="88" rx="22" ry="66" transform={`rotate(${a} 160 150)`} fill="url(#petalBack)" stroke="#E6B25C" strokeWidth="1" opacity="0.95" />
    ))}
    {[-30, 30].map((a) => (
      <ellipse key={a} cx="160" cy="86" rx="24" ry="68" transform={`rotate(${a} 160 150)`} fill="url(#petalFront)" stroke="#E6B25C" strokeWidth="1" />
    ))}
    <ellipse cx="160" cy="82" rx="24" ry="72" fill="url(#petalFront)" stroke="#E6B25C" strokeWidth="1" />
    <path d="M30 150 Q160 168 290 150 Q160 160 30 150Z" fill="#E6B25C" opacity="0.5" />
  </svg>
);

const HeroSection = () => (
  <section className="relative overflow-hidden bg-gradient-to-br from-[#FBF8F3] via-[#F6F1FC] to-[#E9DFF8]">
    <div className="section-container relative grid lg:grid-cols-2 gap-8 items-center pt-10 pb-24 md:pt-14 md:pb-28">
      {/* Left: copy */}
      <div className="relative z-10 text-center lg:text-left">
        <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-accent/60 bg-card/70 text-xs font-medium text-foreground">
          <Star className="w-3.5 h-3.5 fill-accent text-accent" /> Trusted by 5,000+ Families
        </span>
        <h1 className="mt-5 font-display text-4xl sm:text-5xl lg:text-[3.4rem] font-bold leading-tight text-primary">
          Sahi naam, sahi kismat.
        </h1>
        <p className="mt-4 text-base md:text-lg text-foreground/80 max-w-xl mx-auto lg:mx-0">
          Your name carries a number. Discover what your name reveals and find the right name for your child with personalised numerology guidance.
        </p>
        <div className="mt-7 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
          <Link to="/services/name-correction" className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-3 rounded-full bg-primary text-primary-foreground font-semibold shadow-lg hover:bg-primary/90 transition-colors">
            Check Your Name <ArrowRight className="w-4 h-4" />
          </Link>
          <Link to="/services/baby-name" className="inline-flex items-center justify-center w-full sm:w-auto px-7 py-3 rounded-full border border-accent text-primary font-semibold hover:bg-accent/10 transition-colors">
            Find a Baby Name
          </Link>
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-x-0 gap-y-4">
          {trust.map(({ icon: Icon, a, b }, i) => (
            <div key={a} className={`flex items-center gap-2.5 px-4 ${i > 0 ? "sm:border-l border-border" : "pl-0"}`}>
              <Icon className="w-6 h-6 text-primary flex-shrink-0" />
              <span className="text-xs leading-tight text-foreground/80 text-left">{a}<br />{b}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Right: artwork */}
      <div className="relative mx-auto w-full max-w-[520px] aspect-square">
        <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_50%_45%,rgba(190,165,240,0.55),rgba(233,223,248,0.35)_55%,transparent_72%)]" />
        <div className="absolute inset-[6%] rounded-full border border-accent/30" />
        <div className="absolute inset-[16%] rounded-full border border-accent/20" />
        {NUMBERS.map((d, i) => (
          <span key={i} className="absolute font-display text-accent/60 select-none" style={{ left: d.x, top: d.y, fontSize: d.s, transform: `rotate(${d.r}deg)` }}>{d.n}</span>
        ))}
        <img src={icon} alt="" className="absolute left-1/2 top-[16%] w-[48%] -translate-x-1/2 drop-shadow-[0_12px_24px_rgba(53,42,148,0.25)]" />
        <div className="absolute left-1/2 bottom-[2%] w-[78%] -translate-x-1/2"><Lotus /></div>
      </div>
    </div>

    {/* curved bottom edge */}
    <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="absolute bottom-0 left-0 w-full h-12 md:h-16 text-background" aria-hidden="true">
      <path d="M0 80 L0 40 Q360 0 720 30 T1440 20 L1440 80Z" fill="currentColor" />
    </svg>
  </section>
);

export default HeroSection;
