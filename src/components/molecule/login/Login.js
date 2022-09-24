import React from "react";
import LoginComponent from "../../atoms/loginComponent/LoginComponent";
import Header from "../../atoms/header/Header";
import Footer from "../../atoms/footer/Footer";
import Blur from "../../atoms/background/Blur";
import Background from "../../atoms/background/Background";

const Login = () => {
  return (
    <>
      <Background isCircle isgradient />
      <Header />
      <div className="container">
        <LoginComponent />
      </div>
      <Footer />
    </>
  );
};

export default Login;
