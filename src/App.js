import logo from "./logo.svg";
import "./App.css";
import Background from "./components/atoms/background/Background";
import Header from "./components/atoms/header/Header";
import Sidebar from "./components/atoms/sidebar/Sidebar";
import Login from "./components/molecule/login/Login";
import Signup from "./components/molecule/signup/Signup";
import Footer from "./components/atoms/footer/Footer";

function App() {
  return (
    <>
      <Background isgradient isCircle />
      {/* <Header />
      <div className="container">
        <div className="col">
          <Login />
          <Footer />
        </div>
      </div> */}
      <Sidebar />
    </>
  );
}

export default App;
