import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Explore.module.css"


export default function Explore() {
    const navigate = useNavigate();
  return (
    <div className={styles.main_container}>
      <div className={styles.title}>
        <div className={styles.japanese_concepts}>
          <div className={styles.card_container}>
            <div className={styles.section_name}></div>
            <div className={styles.image}></div>
            <div className={styles.concept_name}></div>
          </div>
          <span>flip</span> <br />
          <span>swipe</span>
        </div>
        <div className={styles.inspirations} onClick={()=>navigate("/inspirations")}>Inspirations
         
        </div>
        <div className={styles.inspirations}>My Bucket List</div>
        <div className={styles.inspirations}>3-Months-Planner</div>
      </div>
      <div>
        <ul className={styles.navigation}>
    
          <li onClick={()=>navigate("/inspirations")}>Inspirations</li>
          <li onClick={()=>navigate("/ikigaimap")}>Ikigai Map</li>
          <li onClick={()=>navigate("/about")}>About</li>
          <li onClick={()=>navigate("/me")}>Me</li>
        </ul>
      </div>
    </div>
  )
}
