import React, { useState } from "react";
import Container from "../../components/ui/Containert";
import NumberCounter from "../../components/ui/NumberCounter";
import Donation from "../../utils/Donation";
import { FaDonate } from "react-icons/fa";

const Footer = () => {
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
    <div className="bg-slate-700/70 py-10">
      <Container>
        <div className="flex gap-4 items-center justify-around lg:flex-row flex-col">
          <div className="  flex  flex-col gap-2 justify-center items-center space-y-2 text-white">
            <span className="text-6xl">
              {" "}
              <FaDonate />
            </span>
            <span className="text-6xl">
              <NumberCounter endValue={99800} />+
            </span>
            <h1 className="text-3xl"> Raised For Donation</h1>
          </div>
          <div>
            <div className="lg:w-[500px] w-[300px] space-y-2 flex flex-col justify-center items-center">
              
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

              <div className="flex gap-4 items-center justify-between">
                <Donation onClick={handleDonation} />
                
              </div>
            </div>
           
          </div>{" "}
        </div>
      </Container>
    </div>
  );
};

export default Footer;
