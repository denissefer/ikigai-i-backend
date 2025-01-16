import React from "react";
import { useNavigate } from "react-router-dom";
import "./IkigaiDescription.module.css";

function IkigaiDescription() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex flex-col justify-center px-4">
            <section className="firstScreen flex flex-col items-center space-y-8 pb-96 text-center text-black">
                {/* Title */}
                <h4 className="font-tsukimi text-2xl pb-20">Ikiga-i</h4>

                {/* Description */}
                <div className="font-gotu text-lg space-y-4 pb-10">
                    <p>
                        Ikigai is a Japanese concept that translates to "reason for being."
                    </p>
                    <p>
                        It represents the intersection of four elements:
                    </p>
                    <p>
                        what you love, <br></br>what you are good at,<br></br> what the world needs, and what you can be paid for.
                    </p>
                    <p>
                        Finding your ikigai brings purpose,<br></br> fulfillment, and balance to life,<br></br> blending passion, mission, vocation,<br></br> and profession into a harmonious existence.
                    </p>
                </div>

                {/* Button */}
                <button
                    className="font-gotu px-8 py-2 bg-gray-200 text-gray-800 rounded-2xl hover:bg-gray-500 hover:text-white transition duration-300"
                    onClick={() => navigate("/login")}
                >
                    Continue
                </button>
            </section>
        </div>
    );
}

export default IkigaiDescription;
