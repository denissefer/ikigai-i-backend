import React from "react";
import {useNavigate} from "react-router-dom";
import styles from "./Welcome.module.css";


function Welcome (){
    const navigate = useNavigate();

    return(
        <div className={styles.container}>
            <h4 className={styles.title}>Ikiga-i</h4>
            <div className={styles.frame}>
                {/* <div className={styles.top-branch}><img src="" alt="top-branch" /></div> */}
                <h1 className={styles.subtitle}>Welcome to your ikigai journey</h1>
                <button className={styles.startButton} onClick={()=> navigate('/ikigaiDescription')}>start</button>
                {/* <div className={styles.lower-branch}><img src="" alt="lower-branch" /></div> */}
            </div>
            <div className={styles.team}>DEVELOPED BY TEAM ZEN</div>
        </div>
    )
}

export default Welcome