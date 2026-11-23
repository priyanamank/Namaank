import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/SEOHead";

// TODO: have this text reviewed by your legal advisor before going live.
const Disclaimer = () => (
  <Layout>
    <SEOHead title="Disclaimer" description="Important information about Namaank's numerology reports." canonical="/disclaimer" />
    <section className="py-14 md:py-20">
      <div className="section-container max-w-3xl mx-auto">
        <h1 className="font-display text-4xl font-bold text-primary mb-6">Disclaimer</h1>
        <div className="space-y-4 text-foreground/85 leading-relaxed">
          <p>Namaank provides name analysis, baby name suggestions and date guidance based on numerology. These reports are meant for general guidance and personal interest.</p>
          <p>Numerology is a belief-based system. Our reports are not a substitute for medical, legal, financial or other professional advice, and we do not guarantee any specific result or outcome from following them.</p>
          <p>Please use your own judgement and consult a qualified professional for decisions about health, pregnancy, delivery or finances. Decisions about a C-Section date must always be made with your doctor.</p>
          <p>Reports are prepared using the details you share. Please make sure the information you provide is accurate.</p>
        </div>
      </div>
    </section>
  </Layout>
);

export default Disclaimer;
