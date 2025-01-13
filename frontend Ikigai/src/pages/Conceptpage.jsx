import React from "react";
import { useNavigate } from "react-router-dom";


function Conceptpage() {
    const navigate = useNavigate();
    return (
        <div className="Concept">
            <h2>Ikiga-i</h2>
            <br />
            <h2>Ikigai is a Japanese concept that translates to "Reason for being".</h2>
            <br />
            <h2>It represents the intersection of four elements:</h2>
            <h2>What you love, what you are good at, what the world needs,</h2>
            <h2>and what you can be paid for.</h2>
            <br />
            <h2>Finding your ikigai brings purpose, fulfillment and balance to life, blending passion, mission, vocation and profession into a harmonious existence</h2>
            <button onClick={() => navigate("/login.jsx")} >Continue </button>
        </div>
    );
}

export default Conceptpage;
