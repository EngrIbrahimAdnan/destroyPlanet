"use client";
import Image from "next/image";
import { useState } from "react";

import React from "react";

export default function Home() {
  const [buttonClicks, setButtonClicks] = useState(0);
  const [score, setScore] = useState(0);
  const [increment, setIncrement] = useState(1);
  const [double, setDouble] = useState(10);
  const [triple, setTriple] = useState(20);
  const [quad, setQuad] = useState(30);

  const [WelcomeWindowStatus, setWelcomeWindowStatus] = useState(false);

  let current = 0;

  // Function to toggle modal. This is a generic function to be used to set models ON and OFF
  function toggleModal(setState, state) {
    return setState(!state);
  }

  const incrementButtonClicks = () => {
    current = buttonClicks + increment;
    setScore(score + increment);

    setButtonClicks(current);
    if (score === double) {
      // check if the user passed 10 score to give upgrade
      const confirmed = confirm("double your clicking power??");
      if (confirmed) {
        setIncrement(increment * 2); //doubles the clicking points and rests score
        setScore(score - 10);
        setDouble(double - 12);
      }
    } else {
    }
    if (score === triple) {
      const confirmed = confirm("TTTTTRRRRRRIIIIIPPPPPPPLLLEEE??");
      if (confirmed) {
        setIncrement(increment * 3);
        setScore(score - 20);
        setTriple(triple - 22);
      } else {
      }
    }
    if (score === quad) {
      const confirmed = confirm(
        "Quadrople your destruction pppppoooooooooweeerrr??"
      );
      if (confirmed) {
        setIncrement(increment * 4);
        setScore(score - 30);
        setQuad(quad - 33);
      }
    }

    current = buttonClicks + increment;
    setScore(score + increment);

    setButtonClicks(current);
    if (current === 1) {
      return toggleModal(setWelcomeWindowStatus, WelcomeWindowStatus);
    } else if (current >= 15) {
      return toggleModal(setWelcomeWindowStatus, WelcomeWindowStatus);
    }

    return;
  };

  return (
    <div className="w-full h-screen bg-[rgb(7,12,28)]">
      <div className="flex justify-between items-start p-4 text-white  items-start p-4">
        <div className="w-1/2">
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
          <h1 className="text-2xl font-bold">X {score}</h1>
        </div>
      </div>

      <div className=" flex justify-center items-center">
        <div className="text-center">
          <h1 className="text-9xl font-bold text-white mb-4">{buttonClicks}</h1>
          <h3 className="text-2xl text-white mb-4">Planets Destroyed</h3>
          <button
            onClick={incrementButtonClicks}
            className="px-4 py-2 mb-4 rounded text-white transition-all duration-300 bg-red-500 hover:bg-red-800 hover:opacity-100"
          >
            Destroy Planet
          </button>
          <p className="text-white">{increment} Planet per click </p>
        </div>
      </div>

      {/* Welcome model */}
      {WelcomeWindowStatus && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
          onClick={() =>
            toggleModal(setWelcomeWindowStatus, WelcomeWindowStatus)
          }
        >
          <div
            className="bg-white p-8 rounded-lg text-center "
            onClick={(e) => e.stopPropagation()} // Prevent modal close when clicking inside
          >
            <h2 className="text-2xl font-bold mb-4">
              Welcome to The Dark Side
            </h2>
            <p className="mb-4">
              You just destroyed your first planet. Congratulations on getting
              the Acolyte achievement.
            </p>

            <img
              src="https://the-death-star.netlify.app/static/media/this-is-where-the-fun-begins.59146952.gif"
              className="max-w-full pb-6 w-auto h-auto object-contain mx-auto"
            ></img>

            <button
              className="px-4 py-2 rounded transition-all duration-300 bg-gray-200 hover:bg-gray-500 hover:opacity-75"
              onClick={() =>
                toggleModal(setWelcomeWindowStatus, WelcomeWindowStatus)
              }
            >
              Let the Fun Begin
            </button>
          </div>
        </div>
      )}

      {/* use this as template for a different model */}
      {WelcomeWindowStatus && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
          onClick={() =>
            toggleModal(setWelcomeWindowStatus, WelcomeWindowStatus)
          }
        >
          <div
            className="bg-white p-8 rounded-lg text-center "
            onClick={(e) => e.stopPropagation()} // Prevent modal close when clicking inside
          >
            <h2 className="text-2xl font-bold mb-4">
              Welcome to The Dark Side
            </h2>
            <p className="mb-4">
              You just destroyed your first planet. Congratulations on getting
              the Acolyte achievement.
            </p>

            <img
              src="https://the-death-star.netlify.app/static/media/this-is-where-the-fun-begins.59146952.gif"
              className="max-w-full pb-6 w-auto h-auto object-contain mx-auto"
            ></img>

            <button
              className="px-4 py-2 rounded transition-all duration-300 bg-gray-200 hover:bg-gray-500 hover:opacity-75"
              onClick={() =>
                toggleModal(setWelcomeWindowStatus, WelcomeWindowStatus)
              }
            >
              Let the Fun Begin
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
