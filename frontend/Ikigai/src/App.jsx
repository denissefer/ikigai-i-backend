import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FirstScreen from "./components/FirstScreen/FirstScreen.jsx";
import Welcome from "./components/Welcome/Welcome";
import IkigaiDescription from "./components/IkigaiDescription/IkigaiDescription";
import Login from "./components/Login/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FirstScreen />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/ikigaiDescription" element={<IkigaiDescription />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
