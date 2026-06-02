import Header from "@/components/dental/Header";
import HeroSection from "@/components/dental/HeroSection";
import ProblemSection from "@/components/dental/ProblemSection";
import SolutionSection from "@/components/dental/SolutionSection";
import AdvantagesSection from "@/components/dental/AdvantagesSection";
import StepsSection from "@/components/dental/StepsSection";
import BeforeAfterSection from "@/components/dental/BeforeAfterSection";
import PricingSection from "@/components/dental/PricingSection";
import TrustSection from "@/components/dental/TrustSection";
import FormSection from "@/components/dental/FormSection";
import FaqSection from "@/components/dental/FaqSection";
import ContactsSection from "@/components/dental/ContactsSection";
import Footer from "@/components/dental/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <AdvantagesSection />
        <StepsSection />
        <BeforeAfterSection />
        <PricingSection />
        <TrustSection />
        <FormSection />
        <FaqSection />
        <ContactsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
