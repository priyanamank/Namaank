import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import WhyNamankSection from "@/components/home/WhyNamankSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import BlogSection from "@/components/home/BlogSection";
import FAQSection from "@/components/home/FAQSection";
import CTASection from "@/components/home/CTASection";
import SEOHead from "@/components/SEOHead";
import { brand } from "@/config/brand";

const Index = () => {
  const { hash } = useLocation();
  // Header links like /#how-it-works scroll to that section.
  useEffect(() => {
    if (!hash) return;
    const t = setTimeout(() => document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: "smooth" }), 80);
    return () => clearTimeout(t);
  }, [hash]);

  return (
    <Layout>
      <SEOHead
        title="Name Check, Name Correction & Baby Name Numerology"
        description={`${brand.name} — ${brand.description}`}
        canonical="/"
        jsonLd={{ "@context": "https://schema.org", "@type": "WebSite", name: brand.name, description: brand.description }}
      />
      <HeroSection />
      <ServicesSection />
      <WhyNamankSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <BlogSection />
      <FAQSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
