import Header from "../../atoms/header/Header";
import Background from "../../atoms/background/Background";
import PricingPlan from "../../atoms/pricingPlan/PricingPlan";
const Pricing = ({ loginDetails, setLoginDetails }) => {
  return (
    <>
      <Background isgradient />
      <Header loginDetails={loginDetails} setLoginDetails={setLoginDetails} />
      <PricingPlan id={loginDetails.id} />
    </>
  );
};

export default Pricing;
