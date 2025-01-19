import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Explore.module.css"


export default function Explore() {

  return (
    <div className={styles.main_container}>
      <div className={styles.title}></div>
      <div className={styles.japanese_concepts}>
        <div className={styles.card_container}>
          <div className={styles.section_name}></div>
          <div className={styles.image}></div>
          <div className={styles.concept_name}></div>
        </div>
        <span>flip</span>
        <span>swipe</span>
      </div>
    </div>
  )
}
