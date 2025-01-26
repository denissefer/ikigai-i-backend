import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './SignUp.module.css';

export default function SignUp() {
  const navigate = useNavigate();

  const handleSignUp = (event) => {
    event.preventDefault(); // Prevents page reload
    // Handle sign-up logic here, such as form validation or API calls
    navigate("/congratulations"); // Navigate to the congratulations page
  };

  return (
    <div className={styles.container}>
      <div><span className={styles.title}>Ikiga-i</span></div>
      <div className={styles.subtitle}><span className={styles.sign_up}>Sign Up</span></div>
      
      <form onSubmit={handleSignUp}>
        <div className={styles.name}>
            <label htmlFor="name">Name</label> <br />
            <input id="name" className={styles.name} type="text" placeholder="Enter your name"/>
        </div>
        <div className={styles.email}>
            <label htmlFor="email">Email</label> <br />
            <input id="email" className={styles.email} type="email" placeholder="Enter your email"/>
        </div>
        <div className={styles.password_container}>
            <label htmlFor="password">Password</label> <br />
            <input id="password" className={styles.password} type="password" placeholder="Enter your password"/> 
          </div>
        <div className={styles.signup_container}>
            <button  className={styles.signup_button} onClick={() => navigate("/signup")}>Sign Up</button>{" "}
        </div>
      </form>
    </div>
  );
}


