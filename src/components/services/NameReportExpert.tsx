import teamIcon from "@/assets/namank-icon.png";
import { brand } from "@/config/brand";

const highlights = [
  { value: "Personalised", label: "Based on your name & DOB" },
  { value: "Clear & Simple", label: "Easy-to-read language" },
  { value: "PDF on Email", label: "Delivered after payment" },
];

export default function NameReportExpert() {
  return (
    <section aria-labelledby="name-expert-heading" className="border-y border-report-gold/30 bg-background py-12 lg:py-16 font-body">
      <div className="mx-auto grid max-w-[1120px] gap-8 px-5 md:grid-cols-2 md:items-center lg:gap-12">
        <div className="relative flex aspect-[4/5] w-full items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-[#EDE6FA] via-[#F6F1FC] to-[#DCD0F5] md:aspect-square">
          <div className="absolute inset-[10%] rounded-full border border-accent/40" />
          <div className="absolute inset-[22%] rounded-full border border-accent/30" />
          <img src={teamIcon} alt={`${brand.name} logo`} loading="lazy" className="relative w-[46%] drop-shadow-[0_12px_24px_rgba(53,42,148,0.25)]" />
        </div>
        <div>
          <p className="text-xs font-semibold uppercase text-report-gold">Meet the Team</p>
          <h2 id="name-expert-heading" className="mt-3 font-display text-3xl font-bold text-report-ink md:text-4xl">The {brand.name} Team</h2>
          <div className="mt-4 space-y-4 text-base leading-relaxed name-package-muted">
            <p>{brand.name} brings numerology guidance and a simple, easy-to-follow report together. We study your <strong className="text-report-gold">name and date of birth</strong>, and explain what the numbers mean in clear, everyday language.</p>
            <p>Our team of numerology experts is behind every service &mdash; from Name Check and Name Correction to Baby Name reports &mdash; so you get <strong className="text-report-gold">practical, personalised guidance</strong> you can understand and act on.</p>
          </div>
          <div className="mt-6 grid grid-cols-3 border-y border-report-gold/30 text-center">
            {highlights.map((h) => (
              <div key={h.value} className="border-r border-report-gold/30 px-2 py-5 last:border-r-0">
                <p className="font-display text-base font-bold text-report-ink md:text-lg">{h.value}</p>
                <p className="mt-1 text-[11px] uppercase leading-tight text-report-ink/70">{h.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
