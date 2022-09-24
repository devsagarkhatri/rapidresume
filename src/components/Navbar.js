import React from "react";
import Logo from "../assets/logo.svg";

const Navbar = () => {
    return (
        <div className="text-black  mx-20 absolute top-5 right-20 left-0 z-10 ">
            <div className="flex justify-between items-center px-3 py-2  ">
                <a className="hover:cursor-pointer" href="">
                    <img src={Logo} alt="logo" className="w-9 h-9" />
                </a>
                <div className="flex items-center justify-between  w-[35%] ">
                    <ul className="list-none flex flex-row gap-20 text-white ">
                        <li>
                            <a href="">Features</a>
                        </li>
                        <li>
                            <a href="">Pricing</a>
                        </li>
                        <li>
                            <a href="">FAQ</a>
                        </li>
                    </ul>
                    <button
                        type="button"
                        className="bg-white rounded-xl hover:underline-offset-4 p-2 px-8 "
                    >
                        Login
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
