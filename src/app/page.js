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
  const [showAvailable] = useState(true);
  const [achievementOne, setAchievementOne] = useState(100);
  const [achievementTwo, setAchievementTwo] = useState(300);
  const [WelcomeWindowStatus, setWelcomeWindowStatus] = useState(false);
  const [AchievmentWindowStatus, setAchievmentWindowStatus] = useState(false);
  const [SecondAchievmentWindowStatus, setSecondAchievmentWindowStatus] =
    useState(false);
  let current = 0;

  const [windows, setWindows] = useState([]);

  // Handle click to open a new window
  const handleClick = () => {
    setWindows((prevWindows) => [
      ...prevWindows,
      { id: prevWindows.length + 1 },
    ]);
  };
  // Function to toggle modal. This is a generic function to be used to set models ON and OFF
  function toggleModal(setState, state) {
    return setState(!state);
  }

  const incrementButtonClicks = () => {
    current = buttonClicks + increment;
    setScore(score + increment);

    setButtonClicks(current);
    if (score >= double) {
      // check if the user passed 10 score to give upgrade
      const confirmed = confirm("double your clicking power??");
      if (confirmed) {
        setIncrement(increment * 2); //doubles the clicking points and rests score
        setScore(score - double);
        setDouble(double ** 9999);
      }
    } else {
    }
    if (score >= triple) {
      const confirmed = confirm("TTTTTRRRRRRIIIIIPPPPPPPLLLEEE??");
      if (confirmed) {
        setIncrement(increment * 3);
        setScore(score - triple);
        setTriple(triple ** 9999);
      } else {
      }
    }
    if (score === quad) {
      const confirmed = confirm(
        "Quadrople your destruction pppppoooooooooweeerrr??"
      );
      if (score >= triple) {
        const confirmed = confirm("TTTTTRRRRRRIIIIIPPPPPPPLLLEEE??");
        if (confirmed) {
          setIncrement(increment * 3);
          setScore(score - triple);
          setTriple(triple ** 9999);
        }
      }
    }

    if (buttonClicks === 0) {
      return toggleModal(setWelcomeWindowStatus, WelcomeWindowStatus);
    } else if (score >= achievementOne) {
      toggleModal(setAchievmentWindowStatus, AchievmentWindowStatus);
      setAchievementOne(achievementOne ** 999);
      return handleClick();
    } else if (current === 15) {
      return handleClick();
    }

    return;
  };

  const handleDelete = (id) => {
    setWindows((prevWindows) => prevWindows.filter((win) => win.id !== id));
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
      {AchievmentWindowStatus && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
          onClick={() =>
            toggleModal(setAchievmentWindowStatus, AchievmentWindowStatus)
          }
        >
          <div
            className="bg-white p-8 rounded-lg text-center "
            onClick={(e) => e.stopPropagation()} // Prevent modal close when clicking inside
          >
            <h2 className="text-2xl font-bold mb-4 text-black-950">
              BRUTALLLLLLLL!!!
            </h2>
            <p className="mb-4 text-black-950">
              youre really loving all that destruction huh?
            </p>

            <img
              src="https://www.icegif.com/wp-content/uploads/2021/10/icegif-998.gif"
              className="max-w-full pb-6 w-auto h-auto object-contain mx-auto"
            ></img>

            <button
              className="px-4 py-2 rounded transition-all duration-300 bg-gray-200 hover:bg-gray-500 hover:opacity-75 text-black-950"
              onClick={() =>
                toggleModal(setAchievmentWindowStatus, AchievmentWindowStatus)
              }
            >
              proceed with your destruction
            </button>
          </div>
        </div>
      )}
      {/* use this as template for a different model */}
      {SecondAchievmentWindowStatus && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
          onClick={() =>
            toggleModal(
              setSecondAchievmentWindowStatus,
              SecondAchievmentWindowStatus
            )
          }
        >
          <div
            className="bg-white p-8 rounded-lg text-center "
            onClick={(e) => e.stopPropagation()} // Prevent modal close when clicking inside
          >
            <h2 className="text-2xl font-bold mb-4 text-black-950">
              GRUESOME!!!
            </h2>
            <p className="mb-4 text-black-950 ">why stop now?</p>

            <img
              src="https://preview.redd.it/7o8lcml8tiu31.gif?width=500&auto=webp&s=604d6b1d687a48e7ed06544be0df9ef834b396a1"
              className="max-w-full pb-6 w-auto h-auto object-contain mx-auto"
            ></img>

            <button
              className="px-4 py-2 rounded transition-all duration-300 bg-gray-200 hover:bg-gray-500 hover:opacity-75 text-black-950"
              onClick={() =>
                toggleModal(
                  setSecondAchievmentWindowStatus,
                  SecondAchievmentWindowStatus
                )
              }
            >
              BURN IT TO HELLLLLLLL!!!
            </button>
          </div>
        </div>
      )}

      {showAvailable && (
        <div
          className="absolute left-10   text-white  "
          style={{ bottom: "220px" }}
        >
          <h1 className="text-xl font-bold">Upgrades</h1>
        </div>
      )}

      {windows.map((win, index) => (
        <div
          key={win.id}
          className="absolute bottom-20 left-10 w-48 h-32  text-white pr-1 m- rounded-lg shadow-lg"
          style={{
            transform: `translate(${index * 220}px, 0)`, // Adjust the gap between windows (side-by-side stacking)
          }}
        >
          <button
            className="mt-2 bg-blue-500 text-xl text-white px-auto py-1 rounded hover:bg-blue-700 transition-all"
            onClick={() => handleDelete(win.id)}
          >
            Drink Dark-side Blend Coffee
          </button>
          <p className="text-gray-400 text-sm">
            Doubles planets destroyed per click for 10 Galactic Credits
          </p>
        </div>
      ))}
    </div>
  );
}
