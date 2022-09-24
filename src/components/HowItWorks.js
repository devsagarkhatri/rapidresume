import React from "react";
import create from "../assets/create.svg";
import template from "../assets/template.svg";
import share from "../assets/share.svg";

const HowItWorks = () => {
    return (
        <div className="flex shadow-xl bg-white rounded-3xl w-[980px] h-[520px] z-0 flex-col relative justify-start gap-20 py-10  px-28 items-center -mt-40 mx-auto ">
            <div className="flex flex-col justify-center items-center">
                <h2 className="text-3xl font-extrabold"> How it Works ?</h2>
                <p className="text-sm font-medium ">Simple and Fast</p>
            </div>
            <div className="flex justify-center items-center  gap-32 ">
                <div className="flex justify-start flex-col items-center">
                    <img
                        src={create}
                        className="w-[70px] h-[70px] mb-2 "
                        alt="create icon"
                    />
                    <h3 className="text-xl font-semibold mb-5 ">Create</h3>
                    <p className="text-sm text-center   ">
                        Fill out resume sections like a document with our
                        click-to-edit function or upload your own json.
                    </p>
                </div>
                <div className="flex justify-start flex-col items-center">
                    <img
                        src={template}
                        className="w-[70px] h-[70px] mb-2 "
                        alt="template icon"
                    />
                    <h3 className="text-xl font-semibold mb-5 ">
                        Choose Template
                    </h3>
                    <p className="text-sm text-center ">
                        Choose what matches your needs from plathora of
                        templates, various fonts and colors schemes.
                    </p>
                </div>
                <div className="flex justify-start flex-col items-center">
                    <img
                        src={share}
                        className="w-[70px] h-[70px] mb-2 "
                        alt="share icon"
                    />
                    <h3 className="text-xl font-semibold mb-5 ">Share</h3>
                    <p className="text-sm text-center   ">
                        Once ready, you can download your resume as PDF or
                        generate a link for recruiters to view.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default HowItWorks;
