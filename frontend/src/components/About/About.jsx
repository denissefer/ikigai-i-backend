import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import styles from "./About.module.css"

export function About () {
    const navigate = useNavigate();

return (
    <div className={styles.container}>
        <h3 className={styles.ikigai}>Ikiga-i</h3>
        <h1 className={styles.page_title}>About</h1>
        <p className={styles.p_one}>This project was realised by <br /> Hasmik Hakobyan <br /> Denis Sefer <br /> Indy Erens</p>
        <p className={styles.p_two}>As a part of our junior web  <br />development  course</p>
        <div className={styles.logo}>
                <svg  width="66" height="65" viewBox="0 0 66 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M51.2925 19.1089C51.2925 29.3813 42.8727 37.7179 32.4748 37.7179C22.0768 37.7179 13.657 29.3813 13.657 19.1089C13.657 8.83662 22.0768 0.5 32.4748 0.5C42.8727 0.5 51.2925 8.83662 51.2925 19.1089Z" fill="#D9D9D9" fillOpacity="0.45" stroke="white"/>
                    <ellipse cx="32.4748" cy="45.0052" rx="19.3178" ry="19.1089" fill="#D9D9D9" fillOpacity="0.45"/>
                    <ellipse cx="46.4671" cy="32.8924" rx="19.3178" ry="19.1089" fill="#D9D9D9" fillOpacity="0.45"/>
                    <ellipse cx="19.3178" cy="32.8924" rx="19.3178" ry="19.1089" fill="#D9D9D9" fillOpacity="0.5"/>
                </svg>
        </div>
        <div>
            <button onClick={() => navigate("/explore")} className="px-6 py-2 bg-gray-200 text-black text-lg font-gotu  hover:bg-gray-400 transition-colors rounded-2xl">Return to Explore</button>
        </div>
    </div>




) 

}

export default About; 
