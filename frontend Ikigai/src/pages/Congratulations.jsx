import React from "react";
import { useNavigate } from "react-router-dom";
import LogoImage from "../images/logo.svg";

function Congratulations() {
    const navigate = useNavigate();
    return (
        <div className="grid place-items-center min-h-screen text-center bg-gray-100">
            <div className="space-y-8">
              
                <div className="mb-4">
                    <h3 className="font-tsukimi text-3xl mb-20">Ikiga-i</h3>
                </div>

               
                <img
                    src={LogoImage}
                    alt="logo-image"
                    className="w-36 h-36 object-contain animate-spin-loop mx-auto"
                />

    
                <div className="space-y-2 ">
                    <h1 className="font-gotu text-6xl mb-20 mt-20">Congratulations</h1>
                    <h3 className="font-gotu text-lg">
                        You have successfully created a new account
                    </h3>
                </div>
            </div>
        </div>
    );
}

export default Congratulations;
