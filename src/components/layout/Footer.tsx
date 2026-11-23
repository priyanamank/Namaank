import { Link } from "react-router-dom";
import { Instagram, Youtube, Facebook, Linkedin, Phone, Mail, Clock, MapPin, MessageCircle } from "lucide-react";
import logo from "@/assets/namank-logo-white.png";
import { brand } from "@/config/brand";

const columns = [
  {
    title: "Services",
    links: [
      { name: "Name Check", to: "/services/name-correction" },
      { name: "Name Correction", to: "/services/name-correction" },
      { name: "Perfect Baby Name", to: "/services/baby-name" },
      { name: "Complete Baby Blueprint", to: "/services/baby-name#plans" },
      { name: "C-Section Date Guidance", to: "/services/csection-dates" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About Namaank", to: "/about" },
      { name: "How It Works", to: "/#how-it-works" },
      { name: "Reviews", to: "/#reviews" },
      { name: "Blog", to: "/blog" },
      { name: "Contact", to: "/contact" },
    ],
  },
  {
    title: "Policies",
    links: [
      { name: "Privacy Policy", to: "/privacy" },
      { name: "Terms of Service", to: "/terms" },
      { name: "Refund Policy", to: "/refund" },
      { name: "Disclaimer", to: "/disclaimer" },
    ],
  },
];

const socials = [
  { icon: Instagram, href: brand.socials.instagram, label: "Instagram" },
  { icon: Youtube, href: brand.socials.youtube, label: "YouTube" },
  { icon: Facebook, href: brand.socials.facebook, label: "Facebook" },
  { icon: Linkedin, href: brand.socials.linkedin, label: "LinkedIn" },
];

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-gradient-to-br from-[#241B6B] via-[#2D2380] to-[#3A2A8F] text-white/85">
      <div className="section-container pt-12 pb-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1.3fr]">
          <div>
            <img src={logo} alt="Namaank" className="h-14 w-auto object-contain object-left" />
            <p className="mt-4 text-sm leading-relaxed text-white/75 max-w-xs">
              Personalised numerology guidance for your name, your baby and your important life decisions.
            </p>
            <div className="mt-5 flex gap-2.5">
              {socials.map(({ icon: Icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="w-9 h-9 rounded-full border border-white/40 flex items-center justify-center hover:bg-accent hover:text-secondary hover:border-accent transition-colors">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="font-display text-base font-semibold text-accent mb-4">{col.title}</h4>
              <ul className="space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.name}><Link to={l.to} className="text-sm text-white/80 hover:text-accent transition-colors">{l.name}</Link></li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="font-display text-base font-semibold text-accent mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li><a href={brand.phoneHref} className="flex items-center gap-2.5 hover:text-accent transition-colors"><Phone className="w-4 h-4 text-accent" />{brand.phone}</a></li>
              <li><a href={`mailto:${brand.email}`} className="flex items-center gap-2.5 hover:text-accent transition-colors"><Mail className="w-4 h-4 text-accent" />{brand.email}</a></li>
              <li>
                <a href={brand.whatsappHref} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent bg-accent/15 text-accent font-medium hover:bg-accent hover:text-secondary transition-colors">
                  <MessageCircle className="w-4 h-4" /> Chat on WhatsApp
                </a>
              </li>
              <li className="flex items-center gap-2.5"><Clock className="w-4 h-4 text-accent" />{brand.hours}</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/15">
        <div className="section-container py-4 flex flex-col lg:flex-row items-center justify-between gap-2 text-xs text-white/70 text-center">
          <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-accent flex-shrink-0" />{brand.address}</span>
          <span>&copy; {year} Namaank. All rights reserved.</span>
          <span className="flex items-center gap-2">
            <Link to="/privacy" className="hover:text-accent">Privacy</Link>|<Link to="/terms" className="hover:text-accent">Terms</Link>|<Link to="/refund" className="hover:text-accent">Refund</Link>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
