import React from "react";
import {useNavigate} from "react-router-dom";

function IkigaiDescription (){
    const navigate = useNavigate();

    return (
        <div>
            <h4>Ikiga-i</h4>
            <p>Ikigai is a Japanese concept that translates to "reason for being."
                It represents the intersection of four elements: 
                what you love, 
                what you are good at, what the world needs, 
                and what you can be paid for.
                Finding your ikigai brings purpose, fulfillment, and balance to life, 
                blending passion, mission, vocation, and profession into a harmonious existence.
            </p>
            <button onClick={()=>navigate("/login")}>continue</button>
        </div>

    )
}

export default IkigaiDescription;