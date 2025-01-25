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
    <div className="sign-up-container">
      <h4>Ikiga-i</h4>
      <h1>Sign Up</h1>
      <form onSubmit={handleSignUp}>
        <label htmlFor="name">Name</label> <br />
        <input id="name" className={styles.name} type="text" /> <br /> <br />
        
        <label htmlFor="email">Email</label> <br />
        <input
          id="email"
          className={styles.email}
          type="email"
          placeholder="Enter your email"
        /> <br /> <br />
        
        <label htmlFor="password">Password</label> <br />
        <input
          id="password"
          className={styles.password}
          type="password"
          placeholder="Enter your password"
        /> <br /> <br />
        
        <button type="submit">Sign Up</button> <br />
      </form>
    </div>
  );
}
<<<<<<< HEAD
=======


>>>>>>> main
