import React from "react";
import {useNavigate} from "react-router-dom";
import styles from "./Welcome.module.css";


function Welcome (){
    const navigate = useNavigate();

    return(
        <div className={styles.container}>
            <div className={styles.frame}>
                <h4 className={styles.title}>Ikiga-i</h4>
                <p className={styles.p}>old values - new lifestyle</p>
                {/* <div className={styles.logo}><img src="" alt="logo" /></div> */}
                <h1 className={styles.subtitle}>Welcome to your ikigai journey</h1>
                <button className={styles.startButton} onClick={()=> navigate('/ikigaiDescription')}>get started</button>
            </div>
            <div className={styles.team}>DEVELOPED BY TEAM ZEN</div>
        </div>
    )
}

export default Welcome