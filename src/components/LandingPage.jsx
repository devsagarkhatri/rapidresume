import React from "react";
import IntroductionSection from "./IntroductionSection";
import HowItWorks from "./HowItWorks";
import Features from "./Features";
import PricingPlan from "./PricingPlan";
import Testimonials from "./Testimonials";
import TryForFree from "./TryForFree";
import Footer from "./Footer";

const LandingPage = () => {
    return (
        <>
            <IntroductionSection />
            <HowItWorks />
            <Features />
            <PricingPlan />
            <Testimonials />
            <TryForFree />
            <Footer />
        </>
    );
};

export default LandingPage;
