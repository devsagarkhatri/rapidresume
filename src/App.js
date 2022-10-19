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
import { useEffect, useState } from "react";
import { getAllUsers } from "./firebaseStorage/userData";
import { firestore } from "./firebase.config";
import SharedResume from "./components/molecule/Dashboard/SharedResume";
import EditableDashboard from "./components/molecule/Dashboard/EditableDashboard";

function App() {
    const uploadImage = async (event) => {};
    const [userId, setUserId] = useState({ login: false, id: "" });

    const [allUsers, setAllUsers] = useState({});
    const fetchUserData = async () => {
        await getAllUsers()
            .then((data) => {
                setAllUsers(data);
            })
            .catch((err) => console.log(err));
    };
    fetch("/getData")
        .then((response) => response.json())
        .then((data) => console.log("JSON", data));

    useEffect(() => {
        fetchUserData();
        let status = JSON.parse(localStorage.getItem("userLoginStatus"));
        if (!status) {
            localStorage.setItem(
                "userLoginStatus",
                JSON.stringify(userId.login)
            );
        } else {
            setUserId((prev) => ({ ...prev, login: status }));
        }
    }, []);
    useEffect(() => {
        console.log("user logged in");
        localStorage.setItem("userLoginStatus", JSON.stringify(userId.login));
    }, [userId]);
    console.log(userId.login);
    return (
        <>
            <Background />
            <Routes>
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
                {userId.login ? (
                    <>
                        <Route
                            path="/login"
                            element={<EditableDashboard users={allUsers} />}
                        />
                        <Route
                            path="/signup"
                            element={<EditableDashboard users={allUsers} />}
                        />
                    </>
                ) : (
                    <>
                        <Route
                            path="/login"
                            element={<Login setUserIdFunction={setUserId} />}
                        />
                        <Route
                            path="/signup"
                            element={<Signup setUserIdFunction={setUserId} />}
                        />
                    </>
                )}
                {/* <Route path="/pricing" element={<Pricing />} /> */}
                {userId.login ? (
                    <>
                        <Route
                            path={"dashboard/user/:id"}
                            element={<EditableDashboard users={allUsers} />}
                        />
                        <Route
                            path="/dashboard/share/:id"
                            element={<SharedResume users={allUsers} />}
                        />
                    </>
                ) : (
                    <Route
                        path="/dashboard/*"
                        element={
                            <h1>
                                <a href="/login">Login to Continue</a>
                            </h1>
                        }
                    />
                )}
                <Route
                    path="/*"
                    element={
                        <>
                            {/* <Header />  Resolve this*/}
                            <LandingPage />
                            <Footer />
                        </>
                    }
                />
            </Routes>
        </>
    );
}

export default App;
