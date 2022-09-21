import logo from "./logo.svg";
import "./App.css";
import Background from "./components/atoms/background/Background";
import Header from "./components/atoms/header/Header";

function App() {
  return (
    <>
      <Background isgradient isCircle />
      <Header />
    </>
  );
}

export default App;
