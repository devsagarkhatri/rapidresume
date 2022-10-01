import logo from "./logo.svg";
import "./App.css";
<<<<<<< HEAD
import Signup from "./components/Signup";

function App() {
    return (
        <>
            <Signup />
        </>
    );
=======
import Background from "./components/atoms/background/Background";
import Header from "./components/atoms/header/Header";
import Sidebar from "./components/atoms/sidebar/Sidebar";

function App() {
  return (
    <>
      <Background isgradient isCircle />
      <Header />
      <div className="row">
        <div className="col-lg-1 col-md-1 col-sm-1">
          <Sidebar />
        </div>
        <div className="col"></div>
      </div>
    </>
  );
>>>>>>> 34502e796ca3b62da8f4d9bd20d4de6fa3e268b5
}

export default App;
