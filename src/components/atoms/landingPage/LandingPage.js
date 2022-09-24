import React from "react";
import IntroductionSection from "./introductionSection/IntroductionSection";
import HowItWorks from "./howItWorks/HowItWorks";
import Features from "./features/Features";

const LandingPage = () => {
  return (
    <>
      <IntroductionSection />
      <HowItWorks />
      <Features />
    </>
  );
};

export default LandingPage;
