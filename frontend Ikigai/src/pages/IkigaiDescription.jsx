import React from "react";
import { useNavigate } from "react-router-dom";
import "./IkigaiDescription.module.css";

function IkigaiDescription() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex flex-col justify-center px-4n animate-fade-in delay-500">
            <section className="firstScreen flex flex-col items-center space-y-8 pb-96 text-center text-black">
            
                <h4 className="font-tsukimi text-2xl pb-24">Ikiga-i</h4>

           
                <div className="font-gotu text-lg space-y-4 pb-24 p-6 animate-fade-in">
                    <p className="animate-fade-in delay-2000">
                        Ikigai is a Japanese concept that translates to "reason for being."
                    </p>
                    <p className="animate-fade-in delay-6000">
                        It represents the intersection of four elements:
                    </p>
                    <p className="animate-fade-in delay-8000">
                        what you love, <br></br>what you are good at,<br></br> what the world needs, and what you can be paid for.
                    </p>
                    <p className="animate-fade-in delay-10000">
                        Finding your ikigai brings purpose,<br></br> fulfillment, and balance to life,<br></br> blending passion, mission, vocation,<br></br> and profession into a harmonious existence.
                    </p>
                </div>

             
                <button
                    className="font-gotu px-10 py-2 bg-white text-gray-800 rounded-2xl hover:bg-gray-500 hover:text-white transition duration-300"
                    onClick={() => navigate("/login")}
                >
                    Continue
                </button>
            </section>
        </div>
    );
}

export default IkigaiDescription;
