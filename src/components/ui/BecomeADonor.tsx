import React, { useState } from "react";
import img from "../../assets/donorImg.jpg";
import SectionHeader from "../../utils/SectionHeader";
import Donation from "../../utils/Donation";

const BecomeADonor = () => {
  const [amount, setAmount] = useState(""); // State to hold the amount value

  // Function to handle button click and set the amount value
  const handleButtonClick = (e) => {
    setAmount(e.target.id); // Set the amount value to the button's id
  };
const handleDonation=()=>{
 if(amount){
  alert("Donation sucessful")
 }else{
  alert("Please select an amount")
 }
}
  return (
    <div className="bg-black/20 -z-20 my-10">
      <div className="flex lg:flex-row flex-col-reverse justify-around items-center py-10">
        <div className="lg:w-[500px] w-[300px] space-y-2">
          <SectionHeader text="Become a Donar" />
          <div>
            <p className="text-black font-bold text-xl">Email Adress:</p>
            <input
              className="p-2 rounded-md text-black"
              type="text"
              placeholder="Email"
            />
          </div>
          <div>
            <p className="text-black font-bold text-xl">Amount:{amount}</p>
            
          </div>
          <div className="flex justify-start items-center gap-2">
            <button
              id="$1000"
              onClick={handleButtonClick} // Attach onClick event handler
              className="p-2 text-white font-bold text-xl duration-500 border-2 border-white hover:border-orange-500 hover:text-orange-500"
            >
              $1000
            </button>
            <button
              id="$500"
              onClick={handleButtonClick}
              className="p-2 text-white font-bold text-xl duration-500 border-2 border-white hover:border-orange-500 hover:text-orange-500"
            >
              $500
            </button>
            <button
              id="$100"
              onClick={handleButtonClick}
              className="p-2 text-white font-bold text-xl duration-500 border-2 border-white hover:border-orange-500 hover:text-orange-500"
            >
              $100
            </button>
            <button
              id="$50"
              onClick={handleButtonClick}
              className="p-2 text-white font-bold text-xl duration-500 border-2 border-white hover:border-orange-500 hover:text-orange-500"
            >
              $50
            </button>
          </div>
          <Donation onClick={handleDonation} />
        </div>
        <div className="lg:w-[500px] w-[300px]">
          <img src={img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default BecomeADonor;
