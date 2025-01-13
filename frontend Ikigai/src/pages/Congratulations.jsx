import React from "react";
import { useNavigate } from "react-router-dom";



function Congratulations () {
    const navigate = useNavigate();
    return (
        <div className="Congratulationsmenu">
            <h3>Ikiga-i</h3>
            <h1>Congratulations</h1>
           

           

            <h3>You have succesfully created a new account</h3>


        </div>
    )
}
export default Congratulations;