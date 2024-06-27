// HomeAnimation.jsx
// HomeAnimation.jsx
import { useState, useEffect } from "react";
import "./HomeAnimation.css";
const HomeAnimation = () => {
  const [animatedText1, setAnimatedText1] = useState("Portfolio");
  const [animatedText2, setAnimatedText2] = useState("Khalil");
  const [animatedText3, setAnimatedText3] = useState("Aliiev");

  // const [animatedText4, setAnimatedText4] = useState(
  //   "Hi! Welcome to my portfolio. I'm a Frontend Developer, and I create beautiful, user-friendly websites."
  // );

  useEffect(() => {
    const timeout1 = setTimeout(() => {
      setAnimatedText1("Portfolio");
    }, 1000);

    const timeout2 = setTimeout(() => {
      setAnimatedText2("Khalil");
    }, 3000);

    const timeout3 = setTimeout(() => {
      setAnimatedText3("Aliiev");
    }, 4000);
    // const timeout4 = setTimeout(() => {
    //   setAnimatedText4(
    //     "Hi! Welcome to my portfolio. I'm a Frontend Developer, and I create beautiful, user-friendly websites."
    //   );
    // }, 4000);

    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
      clearTimeout(timeout3);
      // clearTimeout(timeout4);
    };
  }, []);

  return (
    <div className="title container">
      <h1 className=" uppercase">
        {animatedText1.split("").map((char, index) => (
          <span
            key={index}
            className="fade-in-char text-1 font-light mb-8"
            style={{ animationDelay: `${index * 0.25}s` }}
          >
            {char}
          </span>
        ))}
        <br />
        {animatedText2.split("").map((char, index) => (
          <span
            key={index}
            className="fade-in-char text-2 font-light"
            style={{
              animationDelay: `${(animatedText1.length + index) * 0.2}s`,
            }}
          >
            {char}
          </span>
        ))}
        <br />
        {animatedText3.split("").map((char, index) => (
          <span
            key={index}
            className="fade-in-char font-light text-3"
            style={{
              animationDelay: `${
                (animatedText1.length + animatedText2.length + index) * 0.2
              }s`,
            }}
          >
            {char}
          </span>
        ))}
      </h1>
    </div>
  );
};

export default HomeAnimation;
