import React from "react";
import fast from "../assets/fast.svg";
import addVideo from "../assets/addVideo.svg";
import efficient from "../assets/efficient.svg";
import targeted from "../assets/targeted.svg";

const Features = () => {
    return (
        <div className="flex justify-around items-center w-[1200px] h-[800px] mb-20 gap-5 mt-32 ml-20 mr-40 pl-40 ">
            <div className=" relative  h-[100%] w-[130%]">
                <div className="flex justify-start items-center gap-12 ">
                    <div className="flex flex-col justify-start items-center gap-5 mt-0 ">
                        <div className="flex border-2 justify-start flex-col items-center h-72 rounded-lg  w-40 p-5 bg-white ">
                            <img
                                src={fast}
                                className="w-[70px] h-[70px] mb-2 "
                                alt="fast icon"
                            />
                            <h3 className="text-xl font-semibold mb-5 ">
                                Fast
                            </h3>
                            <p className="text-sm text-center text-[#6D7783]">
                                Create your industry fit resume ready to be
                                shared with a sharable link within minutes
                            </p>
                        </div>
                        <div className="flex border-2 justify-start flex-col items-center h-80 rounded-lg  w-40 p-5 bg-white ">
                            <img
                                src={addVideo}
                                className="w-[70px] h-[70px] mb-2 "
                                alt="addVideo icon"
                            />
                            <h3 className="text-xl font-semibold mb-5 ">
                                Add Video
                            </h3>
                            <p className="text-sm text-center text-[#6D7783]">
                                Standout amongst others by including your
                                introductory video visible with the sharable
                                link you create !
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col justify-start items-center gap-5 mt-40 ">
                        <div className="flex justify-start flex-col border-2 items-center h-72 rounded-lg  w-40 p-5 bg-white ">
                            <img
                                src={targeted}
                                className="w-[70px] h-[70px] mb-2 "
                                alt="targeted icon"
                            />
                            <h3 className="text-xl font-semibold mb-5 ">
                                Targeted
                            </h3>
                            <p className="text-sm text-center text-[#6D7783]">
                                With plathora of designs and templates, create
                                resumes that target your industry
                            </p>
                        </div>
                        <div className="flex justify-start border-2 flex-col items-center h-72 rounded-lg  w-40 p-5 bg-white mt-5 ">
                            <img
                                src={efficient}
                                className="w-[70px] h-[70px] mb-2 "
                                alt="efficient icon"
                            />
                            <h3 className="text-xl font-semibold mb-5 ">
                                Efficient
                            </h3>
                            <p className="text-sm mt-6 text-center text-[#6D7783]">
                                Basic RapidResume functionality is free forever
                            </p>
                        </div>
                    </div>
                </div>

                <div className="absolute top-28 right-0 -left-24 h-[630px] w-[630px] bg-gradient-to-r from-bgPurple to-bgPink  rounded-full overflow-hidden  -z-10  ">
                    <div className=" bg-gradient-to-r from-bgBlue to-bgPurple rounded-full min-h-[50%] ml-[50%] min-w-[50%]  top-20 -right-10"></div>
                </div>
            </div>
            <div>
                <h5 className="text-lg font-semiold">Features</h5>
                <h2 className="text-5xl font-bold leading-[3.5rem]">
                    Expect great features
                </h2>
                <p className="mt-10 text-[#6D7783]">
                    RapidResume caters to your needs by providing you the best
                    in class resume editer with eleagnt fonts, exquisite designs
                    and comforting color schemes
                </p>
            </div>
        </div>
    );
};

export default Features;
