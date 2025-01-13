import React from "react";
import Signupbutton from '../components/signupButton';
import Loginbutton from '../components/loginButton';
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();
    return (
        <div className="loginMenu">
            <h3>Ikiga-i</h3>
            <h1>Log in</h1>
            <h2>Email</h2>
            <h2>Password</h2>
            <Loginbutton> onClick={() => navigate("./Circlepage.jsx")}</Loginbutton>
            <h3>or</h3>
            <Signupbutton> onClick={() => navigate("./Signup.jsx")}</Signupbutton>
            <h3>to create an account</h3>
        </div>
    )
}

export default Login;
