import "./App.css";
import { Navbar } from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { Servicios } from "./components/Servicios";
import { Asesoramientos } from "./components/Asesoramientos";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/servicios" element={<Servicios />}></Route>
        <Route path="/asesoramientos" element={<Asesoramientos />}></Route>
      </Routes>

      {/* <div id="cabecera-div">
        <div className="imagen-cabecera-div"></div>
      </div> */}
    </>
  );
}

export default App;
