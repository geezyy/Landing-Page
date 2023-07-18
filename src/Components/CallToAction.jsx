import React from "react";
// import Photo from "../Assets/Group 186.png";
import thinkingMan from "../Assets/Group 186.png"
import image from "../Assets/Group 1.png"

const CallToAction = () => {
  return (
    <div className="w-[100%] h-[100%] bg-transparent flex flex-row mt-56 gap-[20rem]">
      <div>
        <img className=" w-[100%] ml-44" src={thinkingMan} alt="img" />
      </div>

      <div>
        <p className="  text-orange-500 font-extrabold text-xl mt-4 ">LOREM IPSUM DOLOR SIT AMET.</p> <br />
        <h2 className=" font-extrabold text-6xl">
          Simple Solution for <br /> Complex Connections.
        </h2>
        <br />
        <p className="text-2xl">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br /> Impedit
          nulla illum nisi, expedita <br /> assumenda doloribus commodi esse voluptas
          illo dignissimos.
        </p>
        <br />
        <div className=" flex flex-row items-center gap-2 font-bold">
          <img src={image} alt="" />
          <span>
            <h1>High Intensity</h1>
          </span> <br />
          <img src={image} alt="" />{" "}
          <span>
            <h1>Certified Institute</h1>
          </span>
        </div> <br />
        <button className=" w-40 h-12 bg-orange-600 rounded text-white">Learn More</button>
      </div>
    </div>
  );
};

export default CallToAction;
