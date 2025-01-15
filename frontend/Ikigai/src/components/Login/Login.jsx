import React, { useState } from "react"; // Importing React and useState hook
import { useNavigate } from "react-router-dom"; // Importing useNavigate hook for navigation
import styles from "./Login.module.css"; // Importing CSS module

function Login() {
  const navigate = useNavigate();

  // State variables to store form input values
  const [email, setEmail] = useState(""); // State for email input
  const [password, setPassword] = useState(""); // State for password input

  const handleLogin = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    try {
      // Send POST request to the backend
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" }, // Setting content type to JSON
        body: JSON.stringify({ email, password }), // Sending email and password as JSON
      });

      const data = await response.json();
      if (response.ok) {
        alert("Login successful!"); // Alert user on successful login
        navigate("/explore"); // Navigate to the explore page after successful login
      } else {
        alert(data.error || "Login failed"); // Alert user if login fails
      }
    } catch (error) {
      console.error("Error during login:", error); // Log error in case of failure
      alert("An error occurred. Please try again."); // Alert user about the error
    }
  };

  return (
    <div>
      <div className="login">
        <h4>Ikiga-i</h4>
        <h1>Log in</h1>
        <br />
        <form onSubmit={handleLogin}>
          {/* Input for email */}
          <label htmlFor="email">Email</label> <br />
          <input
            id="email"
            className={styles.email}
            type="text"
            placeholder="Enter your email"
            value={email} // Binds email state to input value
            onChange={(e) => setEmail(e.target.value)} // Updates email state on input change
          />{" "}
          <br />
          <br />

          {/* Input for password */}
          <label htmlFor="password">Password</label> <br />
          <input
            id="password"
            className={styles.password}
            type="password"
            placeholder="Enter your password"
            value={password} // Binds password state to input value
            onChange={(e) => setPassword(e.target.value)} // Updates password state on input change
          />{" "}
          <br />
          <br />

          {/* Submit button for login */}
          <button type="submit">Log In</button> <br />
        </form>
      </div>

      {/* Alternative section with 'or' */}
      <div className={styles.alternative}>
        <img src="" alt={styles.leftLine} />
        <p>or</p>
        <img src="" alt={styles.rightLine} />
      </div>

      {/* Sign up button for users who don't have an account */}
      <div className={styles.signUp}>
        <button className={styles.signUp} onClick={() => navigate("/signup")}>
          Sign Up
        </button>{" "}
        <br />
        <p className={styles.createAccount}>to create an account</p>
      </div>
    </div>
  );
}

export default Login;

