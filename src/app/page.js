"use client";
import Image from "next/image";
import { useState } from "react";

import React from "react";

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
    <div class="w-full h-screen bg-[rgb(7,12,28)] ">
      <div class="flex justify-between items-start p-4 text-white  items-start p-4">
        <div class="w-1/2">
          <img
            src="https://raw.githubusercontent.com/EngrIbrahimAdnan/destroyPlanet/refs/heads/main/src/app/assets/deathStar.png"
            className="w-60  "
          ></img>
        </div>
        <div className=" flex flex-col items-end">
          <img
            src="https://raw.githubusercontent.com/EngrIbrahimAdnan/destroyPlanet/refs/heads/main/src/app/assets/Money.PNG"
            className="w-20 "
          ></img>
          <h1 class="text-2xl font-bold">X {score}</h1>
        </div>
      </div>

      <div className=" flex justify-center items-center">
        <div className="text-center">
          <h1 className="text-9xl font-bold text-white mb-4">{buttonClicks}</h1>
          <h3 className="text-2xl text-white mb-4">Planets Destroyed</h3>
          <button
            onClick={incrementButtonClicks}
            className="px-6 py-2 bg-blue-500 text-white rounded mb-4 hover:bg-blue-700"
          >
            Destroy Planet
          </button>
          <p className="text-white">{increment} Planet per click </p>
        </div>
      </div>
    </div>
  );
}
