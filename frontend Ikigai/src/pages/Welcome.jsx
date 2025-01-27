import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Welcome.module.css";
import LogoImage from "../images/logo.svg";

function Welcome() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex flex-col justify-center items-center px-4 m-20 ">
           
            <div className="text-center space-y-12">
                <h4 className="font-tsukimi text-4xl text-gray-800 animate-fade-in delay-500">
                    Ikiga-i
                </h4>

                <p className="font-gotu text-2xl text-gray-500 pt-2 pb-2 animate-fade-in delay-500">
                    old values - new lifestyle
                </p>

                <div className="flex justify-center animate-fade-in delay-1000">
                    <img
                        src={LogoImage}
                        alt="logo-image"
                        className="w-24 h-24 object-contain animate-spin-loop"
                    />
                </div>

                <h1 className="font-gotu text-4xl text-gray-800 p-5 pb-10 animate-fade-in delay-2000">
                    Welcome to your ikigai journey
                </h1>

                <button
                    className="font-gotu px-8 py-2 bg-gray-200 rounded-2xl hover:bg-gray-500 hover:text-white transition duration-300 animate-fade-in delay-3000"
                    onClick={() => navigate("/ikigaiDescription")}
                >
                    Get Started
                </button>
            </div>

            {/* Footer */}
            <div className="text-center text-gray-600 font-gotu mt-96 animate-fade-in delay-3000">
                DEVELOPED BY TEAM ZEN
            </div>
        </div>
    );
}

export default Welcome;
