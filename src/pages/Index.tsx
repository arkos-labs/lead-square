import { Suspense, lazy } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ClientLogos from "@/components/ClientLogos";
import KeyBenefits from "@/components/KeyBenefits";
import Seo from "@/components/Seo";

const BeforeAfter = lazy(() => import("@/components/BeforeAfter"));
const Benefits = lazy(() => import("@/components/Benefits"));
const Testimonials = lazy(() => import("@/components/Testimonials"));
const Process = lazy(() => import("@/components/Process"));
const FAQ = lazy(() => import("@/components/FAQ"));
const MultiStepForm = lazy(() => import("@/components/MultiStepForm"));
const SavingsSimulator = lazy(() => import("@/components/SavingsSimulator"));
const Footer = lazy(() => import("@/components/Footer"));

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Seo
        title="Relamping LED industriel | Square Lighting Solutions"
        description="Expert relamping LED industriel : audit précis, étude photométrique, aides CEE et ROI rapide. Réduisez durablement vos consommations."
      />
      <Header />
      <main id="main-content">
        <Hero />
        <ClientLogos />

        <KeyBenefits />



        <Suspense fallback={null}>
          <BeforeAfter />
          <SavingsSimulator />
          <Benefits />
          <Process />
          <Testimonials />
          <FAQ />
          <div id="audit-form" className="scroll-mt-24">
            <MultiStepForm />
          </div>
        </Suspense>
      </main >
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div >
  );
};

export default Index;
