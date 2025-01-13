import React from "react";
import {useNavigate} from "react-router-dom";


function Welcome (){
    const navigate = useNavigate();

    return(
        <div className="container">
            <div className="frame">
                <div className="top-branch"><img src="" alt="top-branch" /></div>
                <h4>Ikiga-i</h4>
                <h1>Welcome to your ikigai journey</h1>
                <button onClick={()=> navigate('/ikigaiDescription')}>start</button>
                <div className="lower-branch"><img src="" alt="lower-branch" /></div>
            </div>
            <div className="team">DEVELOPED BY TEAM ZEN</div>
        </div>
    )
}

export default Welcome