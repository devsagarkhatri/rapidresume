import React from "react";
import { useState } from "react";
import Navbar from "./Navbar";
// import { auth, provider } from "../firebase.config";
// import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const Login = () => {
    let [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    function handleChange(event) {
        let { name, value } = event.target;
        console.log(name, value);
        setUser((prevUser) => ({
            ...prevUser,
            [name]: [value],
        }));
    }
    function submitUser(event) {
        event.preventDefault();
    }
    // function signInPopUp() {
    //     console.log("clicked !!!");
    //     signInWithPopup(auth, provider)
    //         .then((result) => {
    //             const credential =
    //                 GoogleAuthProvider.credentialFromResult(result);
    //             console.log(credential);
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         });
    // }

    return (
        <div className=" bg-gradient-to-tr from-bgPurple to-bgPink -z-20 w-screen h-screen relative overflow-hidden ">
            <div className="bg-gradient-to-tr from-bgBlue to-bgPurple w-[40rem] h-[40rem] rounded-full absolute -z-10  -bottom-52 -left-32 "></div>
            <Navbar />
            <div className="flex items-center justify-center w-full h-4/6 mt-36 ">
                <section className=" z-10 flex  flex-col justify-center items-center p-5 bg-white rounded-3xl gap-8 w-[330px] h-[440px] ">
                    <h2 className="text-[#0029FF] text-5xl text-center leading-relaxed font-medium hover:text-red-500 ">
                        Returning User ?
                    </h2>
                    <button className="p-3 px-12 z-50 text-[16px] rounded-3xl bg-gradient-to-tr text-white to-cyan-400 from-bgBlue hover:cursor-pointer hover:bg-red-500 ">
                        Google Sign In
                    </button>
                    <p className="font-semibold">or</p>
                    <button className="p-3 px-10 text-[16px]  rounded-3xl bg-gradient-to-tr text-white from-bgPurple to-bgBlue ">
                        Sign In
                    </button>
                </section>
                <section className="h-[510px] relative z-20 rounded-3xl -ml-5 w-[370px] bg-gradient-to-r from-[#FE71719C] to-[#CC67FF] backdrop-blur-[5px] overflow-hidden flex flex-col items-center justify-center py-2 ">
                    <div className="bg-gradient-to-tr from-[#6861D87D] to-[#7D75FF8F] w-[21rem] h-[21rem] rounded-full absolute -z-10  -top-8 -right-12 "></div>
                    <h2 className="text-white text-4xl my-5 font-semibold ">
                        Sign Up
                    </h2>
                    <section className="mx-4 flex flex-col justify-start  z-50 items-center ">
                        <input
                            onChange={handleChange}
                            type="text"
                            required
                            name="name"
                            value={user.name}
                            placeholder="Enter your Name "
                            className="text-lg bg-[#FFFEFE82] px-5 py-3 rounded-2xl my-2 hover:cursor-pointer text-black placeholder:text-white   "
                        />

                        <input
                            type="email"
                            name="email"
                            value={user.email}
                            onChange={handleChange}
                            placeholder="Enter your Email "
                            className="text-lg bg-[#FFFEFE82] px-5 py-3 rounded-2xl my-2 z-50 hover:cursor-pointer text-black placeholder:text-white    "
                        />
                        <input
                            type="password"
                            name="password"
                            value={user.password}
                            onChange={handleChange}
                            placeholder="Enter your Password"
                            className="text-lg bg-[#FFFEFE82] px-5 py-3 rounded-2xl my-2 z-50 hover:cursor-pointer text-black placeholder:text-white    "
                        />
                        <input
                            type="password"
                            name="confirmPassword"
                            onChange={handleChange}
                            value={user.confirmPassword}
                            placeholder="Confirm your Password"
                            className="text-lg bg-[#FFFEFE82] px-5 py-3 rounded-2xl my-2 z-50 hover:cursor-pointer text-black placeholder:text-white    "
                        />
                        <button
                            type="submit"
                            onClick={submitUser}
                            className="bg-white mt-4 text-[#2400FF] text-lg px-7 py-3 rounded-3xl  "
                        >
                            Submit
                        </button>
                    </section>
                </section>
            </div>
        </div>
    );
};

export default Login;
