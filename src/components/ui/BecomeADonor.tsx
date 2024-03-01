import React from "react";
import img from "../../assets/donorImg.jpg";
import SectionHeader from "../../utils/SectionHeader";
import Donation from "../../utils/Donation";
const BecomeADonor = () => {
  return (
    <div className="bg-black/20 -z-20 my-10">
      <div className="flex lg:flex-row flex-col-reverse justify-around items-center py-10">
      <div className="lg:w-[500px] w-[300px] space-y-2">
        <SectionHeader text="Become a Donar" />
        <div>
            <p className="text-black font-bold text-xl">Email Adress:</p>
          <input className="p-2 rounded-md text-black" type="text" placeholder="Email" />
        </div>
        <div className="flex justify-start items-center gap-2">
            <p className="p-2 text-white border-2 border-white ">$1000</p>
            <p className="p-2 text-white border-2 border-white ">$500</p>
            <p className="p-2 text-white border-2 border-white ">$100</p>
            <p className="p-2 text-white border-2 border-white ">$50</p>
        </div>
        <Donation />
      </div>
      <div className="lg:w-[500px] w-[300px]">
        <img src={img} alt="" />
      </div>
    </div>
    </div>
  );
};

export default BecomeADonor;
