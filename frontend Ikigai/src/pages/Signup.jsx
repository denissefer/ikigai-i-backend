import React from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
    const navigate = useNavigate();
    return (
        <div className="signupMenu">
            <h3>Ikiga-i</h3>
            <h1>Sign up</h1>
            <h2>Name</h2>
            <h2>Email</h2>
            <h2>Password</h2>
            <button onClick={() => navigate("./Congratulations.jsx")}>Sign up</button>
            <h3>Thank you for signing up with us!</h3>
        </div>
    )
}

export default Signup;
