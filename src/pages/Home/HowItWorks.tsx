import React from "react";
import { FaDonate, FaStethoscope } from "react-icons/fa";
import { SiTinyletter } from "react-icons/si";


const HowItWorks = () => {
  return (
    <div className="flex lg:flex-row flex-col justify-around">
      <div className="flex flex-col items-center justify-center">
      <div className="text-6xl text-orange-500">
        <FaDonate />
      </div>
      <div className="text-2xl text-orange-500 font-semibold">Fund a Campaign</div>
      <div className="text-slate-500 max-w-[300px] text-center">Meet individuals seeking healthcare and classroom supplies and donate as low as $5 to make it possible for them.</div>
      </div>
      <div className="flex flex-col items-center justify-center">
      <div className="text-6xl text-orange-500">
        <FaStethoscope />
      </div>
      <div className="text-2xl text-orange-500 font-semibold">We Do Our Part</div>
      <div className="text-slate-500 max-w-[300px] text-center">Meet individuals seeking healthcare and classroom supplies and donate as low as $5 to make it possible for them.</div>
      </div>
      <div className="flex flex-col items-center justify-center">
      <div className="text-6xl text-orange-500">
        <SiTinyletter />
      </div>
      <div className="text-2xl text-orange-500 font-semibold">Get Solid Updates</div>
      <div className="text-slate-500 max-w-[300px] text-center">Meet individuals seeking healthcare and classroom supplies and donate as low as $5 to make it possible for them.</div>
      </div>
    </div>
  );
};

export default HowItWorks;
