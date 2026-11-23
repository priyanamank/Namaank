import type { LucideIcon } from "lucide-react";
import { ScrollText, Baby, Calendar, Sparkles } from "lucide-react";

export type NavItem = {
  name: string;
  path: string;
  description?: string;
  icon?: LucideIcon;
  external?: boolean;
};

/** Namaank services shown in the header "Services" dropdown. */
export const servicesNavItems: NavItem[] = [
  { name: "Name Check & Correction", path: "/services/name-correction", icon: ScrollText, description: "Check your name or get corrected spellings" },
  { name: "Perfect Baby Name", path: "/services/baby-name", icon: Baby, description: "Numerology-based baby name report" },
  { name: "Complete Baby Blueprint", path: "/services/baby-name#plans", icon: Sparkles, description: "Name plus career, colour & direction guidance" },
  { name: "C-Section Dates", path: "/services/csection-dates", icon: Calendar, description: "Auspicious birth date guidance" },
];
