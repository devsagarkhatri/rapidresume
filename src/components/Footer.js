import React from "react";
import twitter from "../assets/twitter.svg";
import facebook from "../assets/facebook.svg";
import insta from "../assets/insta.svg";

const Footer = () => {
    return (
        <div className="flex justify-between items-start bg-[rgba(232,232,232,0.73)] mt-40 mb-0 pt-20 px-40 pr-52 ">
            <div className=" max-w-[40%]">
                <h3 className="text-2xl mb-5 font-semibold">Rapid Resume</h3>
                <p className="text-[#6D7783] mb-5 ">
                    RapidResume is a web appliction that accelarates the process
                    of creating, designing and sharing resumes. This website is
                    suitable for candidates and students who want to create an
                    impact in their professional careers.
                </p>
                <div className="flex text-[#6D7783] justify-start mb-5 items-center gap-5">
                    Follow us
                    <button>
                        <img src={facebook} alt="" />
                    </button>
                    <button>
                        <img src={twitter} alt="" />
                    </button>
                    <button>
                        <img src={insta} alt="" />
                    </button>
                </div>
            </div>
            <div className="flex flex-col justify-start items-start h-[100%] ">
                <h3 className="text-xl mb-5 font-semibold">Features</h3>
                <ul>
                    <li className="mb-1 text-[#6D7783] ">Limitless Themes</li>
                    <li className="mb-1 text-[#6D7783] ">Add Your Video</li>
                    <li className="mb-1 text-[#6D7783] ">Resizable Fonts</li>
                    <li className="mb-1 text-[#6D7783] ">Re-order Sections</li>
                    <li className="mb-1 text-[#6D7783] ">
                        Generate Sharable Links
                    </li>
                </ul>
            </div>
            <div className="flex flex-col justify-start items-start">
                <h3 className="text-xl mb-5 font-semibold">Company</h3>
                <ul className="flex flex-col justify-start items-start ">
                    <button>
                        <li className="mb-1 text-[#6D7783] ">About</li>
                    </button>
                    <button>
                        <li className="mb-1 text-[#6D7783] ">FAQ</li>
                    </button>
                </ul>
            </div>
        </div>
    );
};

export default Footer;
