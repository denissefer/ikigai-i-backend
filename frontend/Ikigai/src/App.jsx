import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FirstScreen from "./components/FirstScreen/FirstScreen.jsx";
import Welcome from "./components/Welcome/Welcome";
import IkigaiDescription from "./components/IkigaiDescription/IkigaiDescription";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp.jsx";
import Explore from "./components/Explore/Explore.jsx";
import Congratulations from './components/Congratulations/Congratulations.jsx';
import IkigaiMap from './components/IkigaiMap/IkigaiMap.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FirstScreen />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/ikigaiDescription" element={<IkigaiDescription />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/explore" element ={<Explore/>}/>
        <Route path="/congratulations" element={<Congratulations/>}/>
        <Route path="/ikigaimap" element={<IkigaiMap/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
