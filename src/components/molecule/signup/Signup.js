import React from "react";
import SignupComponent from "../../atoms/signupComponent/SignupComponent";
import Header from "../../atoms/header/Header";
import Footer from "../../atoms/footer/Footer";
import Blur from "../../atoms/background/Blur";

const Signup = (props) => {
    return (
        <>
            <Blur
                position={"absolute"}
                top={-10}
                left={-10}
                style={{ filter: "blur(70px)" }}
            />
            <Header />
            <div className="container">
                <SignupComponent setUserIdFunction={props.setUserIdFunction} />
            </div>
            <Footer />
        </>
    );
};

export default Signup;
