import  { useState } from "react";
import Container from "../../components/ui/Containert";
import NumberCounter from "../../components/ui/NumberCounter";
import Donation from "../../utils/Donation";
import { FaArrowRight, FaDonate, FaFacebook, FaInstagramSquare, FaTwitter, FaYoutube } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { CiMail, CiPhone } from "react-icons/ci";
import footer1 from "../../assets/footer-1.jpg";
import footer2 from "../../assets/footer-2.jpg";
import { CgCalendarDates } from "react-icons/cg";

const Footer = () => {
  const [amount, setAmount] = useState(0); // State to hold the amount value

  // Function to handle button click and set the amount value
  const handleButtonClick =  (e: React.MouseEvent<HTMLButtonElement>) => {
    const value=e.currentTarget.id
    setAmount(parseFloat(value.replace(/\$|,/g, '')));
    // console.log(parseFloat(value.replace(/\$|,/g, '')))

     
  };
  const handleDonation = () => {
    if (amount) {
      alert("Donation sucessful");
    } else {
      alert("Please select an amount");
    }
  };
  return (
    <div className="bg-black/70 py-10">
      <Container>
        <div className="flex gap-4 items-center justify-around lg:flex-row flex-col my-4">
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
        <hr />
        <div className="lg:px-0 px-4 flex lg:flex-row flex-col justify-around">
          <div className="px-4">
            <h1 className="text-white text-3xl font-bold py-4 underline">
              About Us
            </h1>
            <span className="flex items-center gap-2  font-bold">
              <span className="text-orange-500 text-3xl">
                <FaLocationDot />
              </span>
              <p className="text-white text-lg">
                4486 Richards Avenue, Modesto CA - 95354
              </p>
            </span>
            <span className="flex items-center gap-2  font-bold">
              <span className="text-orange-500 text-3xl">
                <CiMail />
              </span>
              <p className="text-white text-lg">hotline@gmail.com</p>
            </span>
            <span className="flex items-center gap-2  font-bold">
              <span className="text-orange-500 text-3xl">
                <CiPhone />
              </span>
              <p className="text-white text-lg">+012 (345) 6789</p>
            </span>
          </div>
          <div className="text-white px-4">
            <h1 className="text-white text-3xl font-bold py-4 underline">
              Causes
            </h1>
            <h1 className="flex items-center gap-2">
              <span className="text-xl ">
                <FaArrowRight />
              </span>
              <span className="text-lg">Education</span>
            </h1>
            <h1 className="flex items-center gap-2">
              <span className="text-xl ">
                <FaArrowRight />
              </span>
              <span className="text-lg">Ecosystem</span>
            </h1>
            <h1 className="flex items-center gap-2">
              <span className="text-xl ">
                <FaArrowRight />
              </span>
              <span className="text-lg">Medical</span>
            </h1>
            <h1 className="flex items-center gap-2">
              <span className="text-xl ">
                <FaArrowRight />
              </span>
              <span className="text-lg">Food</span>
            </h1>
            <h1 className="flex items-center gap-2">
              <span className="text-xl ">
                <FaArrowRight />
              </span>
              <span className="text-lg">Shelter</span>
            </h1>
            <h1 className="flex items-center gap-2">
              <span className="text-xl ">
                <FaArrowRight />
              </span>
              <span className="text-lg">Water</span>
            </h1>
            <h1 className="flex items-center gap-2">
              <span className="text-xl ">
                <FaArrowRight />
              </span>
              <span className="text-lg">Donation</span>
            </h1>
          </div>
          <div className=" flex flex-col gap-4 px-4">
            <h1 className="text-white text-3xl font-bold py-4 underline">
              Recent News
            </h1>
            <div className="flex items-center gap-4">
              <span>
                <img src={footer1} alt="" />
              </span>
              <div className="text-white space-y-4">
                <span className=" py-2 flex text-lg items-center gap-2 text-orange-500 font-semibold">
                  <span>
                    <CgCalendarDates />
                  </span>
                  <span>24th January 2022</span>
                </span>
                <span className=" py-2 text-xl text-slate-300">
                  We can build anything ni hill ground or building.
                </span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span>
                <img src={footer2} alt="" />
              </span>
              <div className="text-white space-y-4">
                <span className=" py-2 flex text-lg items-center gap-2 text-orange-500 font-semibold">
                  <span>
                    <CgCalendarDates />
                  </span>
                  <span>24th January 2022</span>
                </span>
                <span className=" py-2 text-xl text-slate-300">
                  We can build anything ni hill ground or building.
                </span>
              </div>
            </div>
          </div>
          <div className="px-4">
            <h1 className="text-white text-3xl font-bold py-4 underline">
              Newsletter
            </h1>
            <p className=" py-2 text-xl text-slate-300">Subscribe our newsletter to get our latest updates & news.</p>
            <span className="flex items-center">
              {" "}
              <span>
                <input  className="p-2 rounded-md text-black" type="email" placeholder="Email" />
              </span>
              <button className="text-xl text-orange-500 -ms-8">
                <FaArrowRight />
              </button>
            </span>
            <div className="flex flex-row items-center gap-2 my-4">
                  <button className="text-3xl p-2 border-[2px] border-slate-900 text-slate-900 rounded-md"><FaFacebook /></button>
                  <button className="text-3xl p-2 border-[2px] border-slate-900 text-slate-900 rounded-md"><FaTwitter  /></button>
                  <button className="text-3xl p-2 border-[2px] border-slate-900 text-slate-900 rounded-md"><FaYoutube   /></button>
                  <button className="text-3xl p-2 border-[2px] border-slate-900 text-slate-900 rounded-md"><FaInstagramSquare    /></button>
            </div>
          </div>
        </div>

        <div className="flex lg:flex-row flex-col justify-between items-center mx-8 bg-black/90 text-slate-500 px-2 py-4 my-4 text-lg font-smibold">
            <div className="flex gap-4">
                  <button>Terms of use</button> 
                  <button>Privacy and Policy</button> 
            </div>
            <div className="text-center">
            Copyright © 2022 Masden. All Rights Reserved.
            </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
