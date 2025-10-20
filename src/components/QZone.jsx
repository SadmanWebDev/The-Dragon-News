import React from "react";
import swimming from "../assets/swimming.png";
import classImg from "../assets/class.png";
import playGround from "../assets/playground.png";

const QZone = () => {
  return (
    <div className="bg-base-200 p-3">
      <h2 className="text-xl font-semibold mb-8">Q-Zone</h2>
      <div className="flex flex-col items-center">
        <img className="mb-13" src={swimming} alt="" />
        <img className="mb-13" src={classImg} alt="" />
        <img className="mb-13" src={playGround} alt="" />
      </div>
    </div>
  );
};

export default QZone;
