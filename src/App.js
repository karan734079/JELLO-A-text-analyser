import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import About from "./components/About";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode('dark')
      document.body.style.backgroundColor='#042743';
    } else {
      setMode('light')
      document.body.style.backgroundColor='white';
    }
  };
  return (
    <div className="hello">
      <Navbar
        title="JELLO"
        about="About Us"
        mode={mode}
        toggleMode={toggleMode}
      />
      <div className="container ">
        <TextForm heading="Enter the Text to Analyse" mode={mode} />
      </div>
      {/* <About title="About Us" /> */}
    </div>
  );
}

export default App;
