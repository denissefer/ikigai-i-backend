import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./FirstScreen.module.css";

function FirstScreen() {
  const navigate = useNavigate();

  const array = ["i", "k", "i", "g", "a", "i"];
  //{ char: "i", style: { top: "10%", left: "50%" } },


  //   useEffect(() => {
  //    const timer = setTimeout(()=>{
  //     navigate("/welcome")
  //    }, array.length * 500 + 1000)

  //    return () => clearTimeout(timer)
  //   }, [array.length, navigate]);

  return (
    <div>
      {array.map((element, index) => (
        <span className={styles.letter}
          key={index}
          style={{
            position: "absolute",
            ...element.style,
            animationDelay: `${index * 500}ms`
          }}
        >
          {element}
        </span>
      ))}
    </div>
  );
}

export default FirstScreen;
