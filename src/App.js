import logo from "./logo.svg";
import "./App.css";
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
}

export default App;
