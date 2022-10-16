import React from "react";
import IntroductionSection from "./introductionSection/IntroductionSection";
import HowItWorks from "./howItWorks/HowItWorks";
import Features from "./features/Features";
import Testimonials from "./testimonials/Testimonials";
import Pricing from "./pricing/Pricing";

const LandingPage = () => {
    return (
        <div className="overflow-hidden">
            <IntroductionSection />
            <HowItWorks />
            <Features />
            <Pricing />
            <Testimonials />
        </div>
    );
};

export default LandingPage;
