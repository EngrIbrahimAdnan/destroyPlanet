import Image from "next/image";

import React from "react";

export default function Home() {
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
          <h1 class="text-2xl font-bold">X 15</h1>
        </div>
      </div>

      <div className=" flex justify-center items-center">
        <div className="text-center">
          <h1 className="text-9xl font-bold text-white mb-4">0</h1>
          <h3 className="text-2xl text-white mb-4">Planets Destroyed</h3>
          <button className="px-6 py-2 bg-blue-500 text-white rounded mb-4 hover:bg-blue-700">
            Destroy Planet
          </button>
          <p className="text-white">1 Planet per click</p>
        </div>
      </div>
    </div>
  );
}
