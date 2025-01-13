import React from "react";
import Startbutton from '../components/startButton';
import { useNavigate } from "react-router-dom";

function Welcomepage() {
    const navigate = useNavigate();
    return (
        <div className="Welcome">
            <h3>Welcome to your Ikigai journey</h3>
            <h2>Ikigai</h2>
            <Startbutton> onClick={() => navigate("./Conceptpage.jsx")} </Startbutton> 
            <h3>Developed by Team Zen</h3>
        </div>
    );
}

export default Welcomepage;
