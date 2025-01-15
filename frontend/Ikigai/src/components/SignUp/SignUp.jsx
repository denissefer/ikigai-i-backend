import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './SignUp.module.css';

export default function SignUp() {
  const navigate = useNavigate();

  // State variables to store form input values
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async (event) => {
    event.preventDefault(); // Prevents page reload

    try {
      // Send POST request to the backend
      const response = await fetch('http://localhost:3000/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: name, email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        alert('Registration successful!');
        navigate("/congratulations"); // Navigate to the congratulations page
      } else {
        alert(data.error || 'Registration failed');
      }
    } catch (error) {
      console.error('Error during registration:', error);
      alert(`An error occurred: ${error.message}`);
    }
  };

  return (
    <div className="sign-up-container">
      <h4>Ikiga-i</h4>
      <h1>Sign Up</h1>
      <form onSubmit={handleSignUp}>
        <label htmlFor="name">Name</label> <br />
        <input
          id="name"
          className={styles.name}
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        /> <br /> <br />
        
        <label htmlFor="email">Email</label> <br />
        <input
          id="email"
          className={styles.email}
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        /> <br /> <br />
        
        <label htmlFor="password">Password</label> <br />
        <input
          id="password"
          className={styles.password}
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        /> <br /> <br />
        
        <button type="submit">Sign Up</button> <br />
      </form>
    </div>
  );
}
