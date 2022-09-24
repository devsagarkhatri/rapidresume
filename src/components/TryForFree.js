import React from "react";
import resumes from "../assets/resumes.png";
function TryForFree() {
    return (
        <div className="flex w-screen h-[600px] justify-between px-20 items-center my-0 py-0 mb-20 relative mx-20 ">
            <div className="absolute top-16 right-56 h-[490px] w-[490px] bg-gradient-to-r from-bgPurple to-bgPink  rounded-full overflow-hidden  -z-10  ">
                <div className=" bg-gradient-to-r from-bgBlue to-bgPurple rounded-full min-h-[50%] ml-[50%] min-w-[50%]  top-20 -right-10"></div>
            </div>
            <div className="w-[400px] ml-32 ">
                <h4 className="mb-5 text-lg font-semibold ">
                    What are you waiting for ?
                </h4>
                <h1 className="mb-10 text-5xl font-bold mt-5 ">Try for free</h1>
                <p className="text-[#6D7783] text-left text-lg mb-10 ">
                    Ignite your dream career opportunities with our elegant and
                    elegant resume now !
                </p>
                <div className="flex justify-center items-baseline gap-10">
                    <button className="bg-gradient-to-r rounded-full font-semibold from-bgPink to-bgBlue p-3 text-white px-8">
                        Login
                    </button>
                    <button className="bg-gradient-to-r rounded-full font-semibold from-bgPurple to-bgPink p-3 text-white px-8">
                        Sign Up
                    </button>
                </div>
            </div>
            <img
                src={resumes}
                className="w-[35%] h-auto p-5 mr-40 mt-20 "
                alt=""
            />
        </div>
    );
}

export default TryForFree;
