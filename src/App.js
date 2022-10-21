import "./App.css";
import Background from "./components/atoms/background/Background";
import Header from "./components/atoms/header/Header";
import Login from "./components/molecule/login/Login";
import Signup from "./components/molecule/signup/Signup";
import PaymentsPage from "./components/molecule/paymentsPage/PaymentsPage";
import Footer from "./components/atoms/footer/Footer";
import LandingPage from "./components/atoms/landingPage/LandingPage";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAllUsers } from "./firebaseStorage/userData";
import SharedResume from "./components/molecule/Dashboard/SharedResume";
import EditableDashboard from "./components/molecule/Dashboard/EditableDashboard";

function App() {
    // const uploadImage = async (event) => {};
    const [userId, setUserId] = useState({ login: false, id: "" });
    const [tempData, setTempData] = useState([]);
    let data = async () => {
        let rawData = await fetch("/login");
        let str = await rawData.json();
        console.log("backend ->", str);
        setTempData(str);
    };
    const [allUsers, setAllUsers] = useState({});
    const fetchUserData = async () => {
        await getAllUsers()
            .then((data) => {
                setAllUsers(data);
            })
            .catch((err) => console.log(err));
    };

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
        data();
    }, []);
    useEffect(() => {
        localStorage.setItem("userLoginStatus", JSON.stringify(userId.login));
    }, [userId]);

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
