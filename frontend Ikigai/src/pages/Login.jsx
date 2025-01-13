import React from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();
    return (
        <div className="loginMenu">
            <h3>Ikiga-i</h3>
            <h1>Log in</h1>
            <h2>Email</h2>
            <h2>Password</h2>
            <button onClick={() => navigate("./Circlepage.jsx")}> Log in</button>
            <h3>or</h3>
            <button onClick={() => navigate("./Signup.jsx")}>Sign up</button>
            <h3>to create an account</h3>
        </div>
    )
}

export default Login;
