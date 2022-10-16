import React from "react";
import Resumes from "./../../../../assets/resumes.png";
import { Link } from "react-router-dom";

const Introduction = () => {
    return (
        <div className="flex pt-[130px] box-border relative px-[10rem] justify-around z-0 ">
            <div className="w-[600px] h-[600px] bg-gradient-to-r from-bgBlue to-bgPurple absolute top-52 z-10 -right-24 rounded-full"></div>
            <div className="w-[35rem] h-[35rem] pt-20 z-10 flex flex-col items-start text-white">
                <h2 className="text-6xl leading-[4.25rem] pb-8 ">
                    Create your resume for free in minutes.
                </h2>
                <p className="text-1xl text-white">
                    Showcase yourself and your achievements with and impressive
                    resume made with the free online resume maker RapidResume
                </p>
                <div className="ml-0 mt-10 self-end mr-5 ">
                    <Link to="/login">
                        <button className="bg-gradient-to-t from-bgBlue to-sky-700 px-8 py-2 hover:text-white  rounded-2xl mr-5 ">
                            Login
                        </button>
                    </Link>
                    <Link to="signup">
                        <button className="bg-gradient-to-t from-bgBlue to-sky-700 hover:text-white px-8 py-2 rounded-2xl ml-5 ">
                            Sign Up
                        </button>
                    </Link>
                </div>
            </div>
            <img
                src={Resumes}
                alt="resume banner"
                className="z-10 w-5/12 h-auto "
            />
        </div>
    );
};

export default Introduction;
