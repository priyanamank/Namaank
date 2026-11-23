import { ArrowRight, Hash, BadgeCheck, PencilLine, Grid3x3, UserRound, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";

const items = [
  { icon: Hash, title: "Mulank & Bhagyank", text: "Your core birth numbers, explained in simple language.", tag: "All packages" },
  { icon: BadgeCheck, title: "Name Compatibility Check", text: "A clear yes/no on whether your name aligns with your birth date.", tag: "All packages" },
  { icon: PencilLine, title: "2 Corrected Spellings", text: "Suitable spelling options for your name, if a change is needed.", tag: "Name Correction & above" },
  { icon: Grid3x3, title: "Rajyog & Loshu Grid", text: "Your strong and missing numbers, and what they mean for you.", tag: "Name Correction & above" },
  { icon: UserRound, title: "First & Full Name Analysis", text: "Including compound number analysis of your complete name.", tag: "Name Correction & above" },
  { icon: PhoneCall, title: "Call Consultation", text: "Talk through your report and ask your questions.", tag: "Name Correction & above" },
];

export default function NameReportInside({ onGetReport }: { onGetReport: () => void }) {
  return (
    <section aria-labelledby="name-inside-heading" className="bg-background py-12 lg:py-16 font-body">
      <div className="mx-auto max-w-[1200px] px-5">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase text-report-gold">Your Report</span>
          <h2 id="name-inside-heading" className="mt-3 font-display text-3xl font-bold text-report-ink md:text-4xl">
            What&rsquo;s Inside <span className="text-report-gold">Your Report</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-report-ink/80 md:text-lg">
            Clear, personalised numerology guidance, delivered as a PDF on your email.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:mt-10">
          {items.map(({ icon: Icon, title, text, tag }) => (
            <article key={title} className="rounded-lg border border-report-gold/30 bg-card p-5 shadow-sm">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-report-gold/10">
                <Icon className="h-5 w-5 text-report-gold" strokeWidth={1.7} />
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold text-report-ink">{title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-report-ink/75">{text}</p>
              <span className="mt-3 inline-block rounded-full bg-report-gold/10 px-2.5 py-0.5 text-[11px] font-medium text-report-gold">{tag}</span>
            </article>
          ))}
        </div>

        <p className="mx-auto mt-6 max-w-2xl text-center text-sm text-report-ink/75">
          The <strong>Complete Blueprint</strong> also adds ideal career advice, lucky colour, lucky number and lucky direction.
          Delivery in 12&ndash;48 hours, depending on the package.
        </p>

        <div className="mt-6 text-center">
          <Button onClick={onGetReport} className="h-12 px-7 bg-report-gold text-report-gold-foreground hover:bg-report-gold/90">
            Get Your Report <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
