import React, { useState } from "react";
import { GiSelfLove } from "react-icons/gi";
import "./Donation.css"; // Import the CSS file where you define the styles


const Donation = () => {
  const [hover, setHover] = useState(false);
  const handleHover = () => {
    setHover(!hover);
  };
  return (
    <div className=" py-5">
      <button
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
        className=" z-50 duration-500 bg-green-400 text-xl text-white font-semibold px-4 py-2 flex items-center justify-center gap-2"
      >
        Donation
        <GiSelfLove />
      </button>
      <button
        className={` ${
          hover ? "bottom-0.5 right-1.5 " : "top-2 left-1"
        } -z-10 relative -mt-[48px] duration-1000 transform  bg-transparent border-[1px] border-green-400 text-xl text-transparent font-semibold px-4 py-2 flex items-center justify-center gap-2`}
      >
        Donation
        <GiSelfLove />
      </button>
    </div>
  );
};

export default Donation;
