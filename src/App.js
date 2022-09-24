import logo from "./logo.svg";
import "./App.css";
import Background from "./components/atoms/background/Background";
import Header from "./components/atoms/header/Header";
import Sidebar from "./components/atoms/sidebar/Sidebar";
import Login from "./components/molecule/login/Login";
import Signup from "./components/molecule/signup/Signup";
import Footer from "./components/atoms/footer/Footer";
import LandingPage from "./components/atoms/landingPage/LandingPage";

function App() {
  return (
    <>
      <LandingPage />
    </>
  );
}

export default App;
