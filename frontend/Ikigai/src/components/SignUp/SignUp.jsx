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
        <div className={styles.previous} onClick={() => navigate("/login")}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none"  width="25" height="27"  >
              <path stroke="#D9D9D9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"  d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
            </svg>
          </div>
      </form>
    </div>
  );
}


