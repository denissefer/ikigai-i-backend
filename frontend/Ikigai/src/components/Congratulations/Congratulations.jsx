import React, { useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import styles from './Congratulations.module.css'

export default function Congratulations() {
   const navigate = useNavigate();

   useEffect(() => {
        const timer = setTimeout(()=>{
         navigate("/ikigaimap")
        }, 2000)
   
        return () => clearTimeout(timer)
       }, [navigate]);

  return (
    <div className={styles.container}>
      <h4 className={styles.title}>Ikiga-i</h4>
      <h1 className={styles.subtitle}>Congratulations</h1>
      <p className={styles.sentence}>You have successfully created a new account</p>
    </div>
  )
}
