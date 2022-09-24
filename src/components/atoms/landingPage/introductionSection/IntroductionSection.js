import React from "react";

import Introduction from "../introduction/Introduction";

function IntroductionSection() {
  return (
    <div className="w-screen h-[900px] bg-gradient-to-r z-0 relative from-bgPurple to-bgPink rounded-b-[10rem] overflow-x-hidden box-border pb-20 ">
      {/* <div className="absolute h-[630px] w-[640px] rotate-45 bg-gradient-to-r from-bgBlue to-bgPurple rounded-full -right-40 top-60 -z-10 "></div> */}

      <Introduction />
    </div>
  );
}

export default IntroductionSection;
