import { ChevronRight, User, CreditCard, LineChart, Mail } from "lucide-react";
import SectionHeading from "./SectionHeading";

const steps = [
  { icon: User, title: "01. Tell us about yourself", text: "Share your name, DOB and details." },
  { icon: CreditCard, title: "02. Complete your payment", text: "Pay securely through Razorpay." },
  { icon: LineChart, title: "03. Our numerology analysis", text: "We analyse your details." },
  { icon: Mail, title: "04. Receive your report", text: "Get your PDF report on email." },
];

const HowItWorksSection = () => (
  <section id="how-it-works" className="pb-12 scroll-mt-24">
    <div className="section-container">
      <SectionHeading title="How It Works" subtitle="Get your personalised report in just 4 simple steps." />
      <div className="grid gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-4 pt-6">
        {steps.map(({ icon: Icon, title, text }, i) => (
          <div key={title} className="relative rounded-2xl border border-border bg-card px-4 pt-9 pb-5 text-center shadow-sm">
            <span className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-br from-[#E3D9F8] to-[#C9B8F0] border-2 border-card flex items-center justify-center">
              <Icon className="w-5 h-5 text-primary" />
            </span>
            <h3 className="text-sm font-semibold text-foreground">{title}</h3>
            <p className="mt-1 text-xs text-muted-foreground">{text}</p>
            {i < steps.length - 1 && (
              <ChevronRight className="hidden lg:block absolute -right-5 top-1/2 -translate-y-1/2 w-4 h-4 text-primary/60" />
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
