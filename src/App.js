import logo from "./logo.svg";
import "./App.css";
import Background from "./components/atoms/background/Background";
import Header from "./components/atoms/header/Header";
import Sidebar from "./components/atoms/sidebar/Sidebar";
import Login from "./components/atoms/login/Login";
import Signup from "./components/atoms/signup/Signup";

function App() {
  return (
    <>
      {/* <Background isgradient isCircle /> */}
      <Header />
      <div className="container">
        <div className="col">
          <Login />
        </div>
      </div>
    </>
  );
}

export default App;
