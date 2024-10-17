

"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [buttonClicks, setButtonClicks] = useState(0);
  const [score, setScore] = useState(0);
  const [increment, setIncrement] = useState(1);

  let current = 0;

  const incrementButtonClicks = () => {
    // increments the number of clicks on the site
    // let double = 10;
    // let triple = 20;
    // let quad = 30;
    if (score === 10) {
      // check if the user passed 10 score to give upgrade
      const confirmed = confirm("double your clicking power??");
      if (confirmed) {
        setIncrement(increment + 1); //doubles the clicking points and rests score
        setScore(score - 10);
      }
    } else {
      //if user doesnt want the upgrade continue as normal
      current = buttonClicks + increment;
      setScore(score + increment);

      return setButtonClicks(current);
    }
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <button onClick={incrementButtonClicks}>button</button>
      <p>{buttonClicks} clicks </p>
      <h1>Score = {score}</h1>
      <div></div>
    </div>
  );
}
