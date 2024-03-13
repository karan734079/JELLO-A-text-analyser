import "./App.css";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import About from "./components/About";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },2000);
  }

  const toggleMode = () => {
    if (mode === "light") {
      setMode('dark')
      document.body.style.backgroundColor='#042743';
      showAlert(" Dark Mode has been Enabled","success");
    } else {
      setMode('light')
      document.body.style.backgroundColor='white';
      showAlert(" Light Mode has been Enabled","success");
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
      <Alert alert={alert}/>
      <div className="container ">
        <TextForm showAlert={showAlert} heading="Enter the Text to Analyse" mode={mode} />
      </div>
      {/* <About title="About Us" /> */}
    </div>
  );
}

export default App;
