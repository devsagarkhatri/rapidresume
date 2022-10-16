import "./App.css";
import Background from "./components/atoms/background/Background";
import Header from "./components/atoms/header/Header";
import { Sidebar } from "./components/atoms/sidebar/Sidebar";
import Login from "./components/molecule/login/Login";
import Signup from "./components/molecule/signup/Signup";
import PaymentsPage from "./components/molecule/paymentsPage/PaymentsPage";
import Footer from "./components/atoms/footer/Footer";
import LandingPage from "./components/atoms/landingPage/LandingPage";
import { Routes, Route } from "react-router-dom";
import Page from "./components/atoms/page/Page";

function App() {
    const uploadImage = async (event) => {};
    return (
        <>
            <Background />
            <Routes>
                <Route
                    path="/*"
                    element={
                        <>
                            <LandingPage />
                            <Footer />
                        </>
                    }
                />
                <Route
                    path="/payments"
                    element={
                        <>
                            <Background
                                isCircle={true}
                                circleAlign={"left"}
                                isgradient={true}
                            />
                            <Header />
                            <PaymentsPage />
                        </>
                    }
                />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                {/* <Route path="/pricing" element={<Pricing />} /> */}
                <Route
                    path="/dashboard"
                    element={
                        <>
                            <Background isCircle={false} isgradient={true} />
                            <Header />
                            <Sidebar />
                            <Page />
                        </>
                    }
                />
            </Routes>
        </>
    );
}

export default App;
