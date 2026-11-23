import { Flower2 } from "lucide-react";

/** Section title with gold rules either side, as in the Namaank design. */
const SectionHeading = ({ title, subtitle, icon = false }: { title: string; subtitle?: string; icon?: boolean }) => (
  <div className="text-center mb-8">
    {icon && <Flower2 className="w-5 h-5 text-accent mx-auto mb-1" />}
    <div className="flex items-center justify-center gap-4">
      <span className="hidden sm:block h-px w-20 bg-gradient-to-r from-transparent to-accent" />
      <h2 className="font-display text-3xl md:text-4xl font-bold text-primary">{title}</h2>
      <span className="hidden sm:block h-px w-20 bg-gradient-to-l from-transparent to-accent" />
    </div>
    {subtitle && <p className="mt-2 text-sm md:text-base text-foreground/75">{subtitle}</p>}
  </div>
);

export default SectionHeading;
