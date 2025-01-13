import React from "react";
import {useNavigate} from 'react-router-dom';

function Login (){
    const navigate = useNavigate();
    return(
        <div>
            <div className="login">
                <h4>Ikiga-i</h4>
                <h1>Log in</h1>
                <span>email</span> <br />
                <input className="email" type="text" /> <br />
                <span>password</span> <br />
                <input className="password" type="text" /> <br />
                <button onClick={()=>navigate("/congratulations")}>log in</button>
            </div>
            <div className="alternative">
                <img src="" alt="left-line" />
                <p>or</p>
                <img src="" alt="right-line" />
            </div>
            <div className="sign-up">
                <button className="sign-up" id="sign-up" onClick={() => navigate("/sign-up")}>sign up</button>
            </div>

            
        </div>
    )
}

export default Login