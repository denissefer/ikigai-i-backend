import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function FirstScreen() {
  const navigate = useNavigate();

  const array = [
    { char: "i", style: { top: "10%", left: "40%" } },
    { char: "k", style: { top: "20%", left: "60%" } },
    { char: "i", style: { top: "30%", left: "40%" } },
    { char: "g", style: { top: "40%", left: "60%" } },
    { char: "a", style: { top: "50%", left: "40%" } },
    { char: "i", style: { top: "60%", left: "60%" } },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/Welcome");
    }, array.length * 500 + 1000);

    return () => clearTimeout(timer);
  }, [array.length, navigate]);

  return (
    <div className="relative w-full h-screen bg-white overflow-hidden">
      {array.map((element, index) => (
        <span
          key={index}
          style={{
            position: "absolute",
            ...element.style,
            animationDelay: `${index * 500}ms`,
            '--tw-translate-x': element.style.left === "60%" ? "-100px" : "100px", 
          }}
          className="font-gotu text-8xl text-black opacity-0 animate-slide-fade-in"
        >
          {element.char}
        </span>
      ))}
    </div>
  );
}

export default FirstScreen;
