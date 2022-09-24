import React from "react";
import tick from "../assets/tick.svg";
import wrong from "../assets/wrong.svg";
import greenTick from "../assets/greenTick.svg";

const PricingPlan = () => {
    return (
        <div className="flex flex-col mx-auto justify-around items-center p-5 rounded-xl mb-20 relative">
            <div className=" absolute bg-black t-[50%] bottom-0 right-0 left-0 "></div>
            <h4 className="font-semibold mb-2">Pricing</h4>
            <h2 className="text-3xl font-bold mb-20 ">Choose the right plan</h2>
            <div className="flex justify-start items-center  ">
                {/* Free Plan */}
                <div className=" border-[#F2F2F2] rounded-2xl w-80 p-10 flex flex-col justify-start items-center mb-3 shadow-2xl  ">
                    <h4 className="text-xl mb-4 ">Free Plan</h4>
                    <h1 className=" text-[#3B43F2] mb-6  font-semibold text-5xl ">
                        $ 0
                    </h1>
                    <ul className="self-start mb-4 ">
                        <li className="flex gap-5 mb-5  items-center">
                            <img src={greenTick} alt="" />
                            <p>Limited Themes</p>
                        </li>
                        <li className="flex gap-5 mb-5 items-center">
                            <img src={greenTick} alt="" />
                            <p>Reorder Section</p>
                        </li>
                        <li className="flex gap-5 mb-5 items-center">
                            <img src={wrong} alt="" />
                            <p className="text-[#AEB7C1] text-semibold ">
                                Add your Video
                            </p>
                        </li>
                        <li className="flex gap-5 mb-5 items-center">
                            <img src={wrong} alt="" />
                            <p className="text-[#AEB7C1]">
                                Create Sharable Link
                            </p>
                        </li>
                        <li className="flex gap-5 mb-5 items-center">
                            <img src={wrong} alt="" />
                            <p className="text-[#AEB7C1]">Resize Fonts</p>
                        </li>
                    </ul>
                    <button
                        type="button"
                        className="p-3 px-5 text-white rounded-full bg-gradient-to-r from-cyan-500 to-[#459EFF] "
                    >
                        Make Resume
                    </button>
                </div>
                {/* Paid Plan */}
                <div className="relative bg-gradient-to-tr from-bgPurple to-bgPink rounded-lg -ml-5  w-96 p-10 flex flex-col justify-start items-center mb-3 overflow-x-hidden overflow-y-hidden shadow-2xl ">
                    <div className="absolute  h-[400px] w-[400px] rounded-full bg-gradient-to-tr from-bgBlue to-bgPurple top-10 -right-40 z-0  "></div>
                    <h4 className="text-lg mb-4 text-white z-10 ">
                        Premium Plan
                    </h4>
                    <h1 className=" text-white mb-6  font-semibold text-5xl z-10">
                        $ 9 /yr
                    </h1>
                    <ul className="self-start mb-4 z-10">
                        <li className="flex gap-5 mb-8 items-center">
                            <img src={tick} alt="" />
                            <p className="text-white">Endless Themes</p>
                        </li>
                        <li className="flex gap-5 mb-8 items-center">
                            <img src={tick} alt="" />
                            <p className="text-white">Reorder Section</p>
                        </li>
                        <li className="flex gap-5 mb-8 items-center">
                            <img src={tick} alt="" />
                            <p className="text-white">Add your Video</p>
                        </li>
                        <li className="flex gap-5 mb-8 items-center">
                            <img src={tick} alt="" />
                            <p className="text-white">Create Sharable Link</p>
                        </li>
                        <li className="flex gap-5 mb-8 items-center">
                            <img src={tick} alt="" />
                            <p className="text-white">
                                Resize Fonts {"&"} change color
                            </p>
                        </li>
                    </ul>
                    <button
                        type="button"
                        className="p-3 px-5 text-[#459EFF] rounded-full bg-white"
                    >
                        Make Resume
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PricingPlan;
