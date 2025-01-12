import React from "react";
import {useNavigate} from 'react-router-dom';

function Login (){
    const navigate = usenavigate();
    return(
        <div>
            <div className="login">
                <h4>Ikiga-i</h4>
                <h1>Log in</h1>
                <input className="email" type="text" />
                <input className="password" type="text" />
                <button onClick={()=>navigate("/congratulations")}>log in</button>
            </div>
            <div className="alternative">
                <img src="" alt="line" />
                <p>or</p>
                <img src="" alt="line" />
            </div>
            <div className="sign-up">
                <button className="sign-up" id="sign-up" onClick={() => navigate("/sign-up")}>sign up</button>
            </div>

            
        </div>
    )
}

export default Login