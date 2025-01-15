import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css"; // Importing CSS module

function Login() {
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    // Handle login logic here (e.g., form validation, API calls)
    navigate("/explore"); // Navigate to the explore page after successful login
  };

  return (
    <div>
      <div className="login">
        <h4>Ikiga-i</h4>
        <h1>Log in</h1>
        <br />
        <form onSubmit={handleLogin}>
          <label htmlFor="email">Email</label> <br />
          <input
            id="email"
            className={styles.email}
            type="text"
            placeholder="Enter your email"
          />{" "}
          <br />
          <br />
          <label htmlFor="password">Password</label> <br />
          <input
            id="password"
            className={styles.password}
            type="password"
            placeholder="Enter your password"
          />{" "}
          <br />
          <br />
          <button type="submit">Log In</button> <br />
        </form>
      </div>
      <div className={styles.alternative}>
        <img src="" alt={styles.leftLine} />
        <p>or</p>
        <img src="" alt={styles.rightLine} />
      </div>
      <div className={styles.signUp}>
        <button className={styles.signUp} onClick={() => navigate("/signup")}>Sign Up</button>{" "}<br />
        <p className={styles.createAccount}>to create an account</p>
      </div>
    </div>
  );
}

export default Login;
