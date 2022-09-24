import React, { useRef } from "react";
import review from "../assets/review.svg";
import left from "../assets/left.svg";
import user from "../assets/Picture.png";

import "./scroll.css";
const Testimonials = () => {
    let ref = useRef(null);
    const slide = (shift) => {
        ref.current.scrollLeft += shift;
    };
    function scrollLeft() {
        slide(-50);
    }
    function scrollRight() {
        slide(+50);
    }
    return (
        <div className="flex flex-col justify-start items-start w-auto h-auto py-24 pl-60 pr-0 bg-gradient-to-r from-bgPurple text-white to-bgPink  ">
            <h3 className="mb-5 text-lg">Testimonials</h3>
            <h2 className="text-3xl font-bold mb-16 ">
                Words from satisfied users
            </h2>
            <section
                ref={ref}
                className="flex justify-start items-center scrollBarRemover flex-nowrap gap-10 overflow-x-scroll max-w-[80vw]"
            >
                <div className="bg-white rounded-2xl shadow-2xl h-[270px] min-w-[290px] max-w-[300px] p-5 flex flex-col justify-start items-center ">
                    <img src={review} alt="" className="h-14 w-14 mb-5 " />
                    <p className="text-[#6D7783] text-center text-[14px] ">
                        Graphical user interface strategy lean startup ecosystem
                        disruptive launch party interaction design infographic
                        series A financing release innovator.
                    </p>
                    <div className="flex mt-6 self-start ml-3 text-black items-center">
                        <img
                            src={user}
                            className=" w-16 drop-shadow-lg"
                            alt=""
                        />
                        <div>
                            <h3 className="text-[12px]">Sora Norah</h3>
                            <p className="text-[13px]">CEO, Founder</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-2xl shadow-2xl h-[270px] min-w-[290px] max-w-[300px] p-5 flex flex-col justify-start items-center ">
                    <img src={review} alt="" className="h-14 w-14 mb-5 " />
                    <p className="text-[#6D7783] text-center text-[14px] ">
                        Graphical user interface strategy lean startup ecosystem
                        disruptive launch party interaction design infographic
                        series A financing release innovator.
                    </p>
                    <div className="flex mt-6 self-start ml-3 text-black items-center">
                        <img
                            src={user}
                            className=" w-16 drop-shadow-lg"
                            alt=""
                        />
                        <div>
                            <h3 className="text-[12px]">Sora Norah</h3>
                            <p className="text-[13px]">CEO, Founder</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-2xl shadow-2xl h-[270px] min-w-[290px] max-w-[300px] p-5 flex flex-col justify-start items-center ">
                    <img src={review} alt="" className="h-14 w-14 mb-5 " />
                    <p className="text-[#6D7783] text-center text-[14px] ">
                        Graphical user interface strategy lean startup ecosystem
                        disruptive launch party interaction design infographic
                        series A financing release innovator.
                    </p>
                    <div className="flex mt-6 self-start ml-3 text-black items-center">
                        <img
                            src={user}
                            className=" w-16 drop-shadow-lg"
                            alt=""
                        />
                        <div>
                            <h3 className="text-[12px]">Sora Norah</h3>
                            <p className="text-[13px]">CEO, Founder</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-2xl shadow-2xl h-[270px] min-w-[290px] max-w-[300px] p-5 flex flex-col justify-start items-center ">
                    <img src={review} alt="" className="h-14 w-14 mb-5 " />
                    <p className="text-[#6D7783] text-center text-[14px] ">
                        Graphical user interface strategy lean startup ecosystem
                        disruptive launch party interaction design infographic
                        series A financing release innovator.
                    </p>
                    <div className="flex mt-6 self-start ml-3 text-black items-center">
                        <img
                            src={user}
                            className=" w-16 drop-shadow-lg"
                            alt=""
                        />
                        <div>
                            <h3 className="text-[12px]">Sora Norah</h3>
                            <p className="text-[13px]">CEO, Founder</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-2xl shadow-2xl h-[270px] min-w-[290px] max-w-[300px] p-5 flex flex-col justify-start items-center ">
                    <img src={review} alt="" className="h-14 w-14 mb-5 " />
                    <p className="text-[#6D7783] text-center text-[14px] ">
                        Graphical user interface strategy lean startup ecosystem
                        disruptive launch party interaction design infographic
                        series A financing release innovator.
                    </p>
                    <div className="flex mt-6 self-start ml-3 text-black items-center">
                        <img
                            src={user}
                            className=" w-16 drop-shadow-lg"
                            alt=""
                        />
                        <div>
                            <h3 className="text-[12px]">Sora Norah</h3>
                            <p className="text-[13px]">CEO, Founder</p>
                        </div>
                    </div>
                </div>
            </section>
            <div className="mt-10 ml-[70vw] ">
                <button onClick={scrollLeft}>
                    <img className="h-5 w-5" src={left} alt="" />
                </button>
                <button onClick={scrollRight}>
                    <img
                        src={left}
                        className="h-5 ml-7 w-5 rotate-180 "
                        alt=""
                    />
                </button>
            </div>
        </div>
    );
};

export default Testimonials;
