
import { useState } from "react";
import { Link } from "react-router-dom";
interface IDeliverCard {
  img: string;
  text: string;
  subText: string;
  className?: string;
}
const DeliverCard = ({ img, text, subText, className }: IDeliverCard) => {
  const [hover, setHover] = useState(false);
  const handleMouseEnter = () => {
    setHover(true);
  };
  const handleMouseLeave = () => {
    setHover(false);
  };
  return (
    <Link to={"/gallery"} className={`relative `}>
      <div className={`bg-gray-600  ${className}`}>
        <img
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={` lg:w-[420px] w-full h-[300px] mx-auto opacity-60  ${
            hover ? "opacity-30 duration-500" : ""
          }  ${className} `}
          src={img}
          alt=""
        />
      </div>
      <div
        className={`text-4xl text-white font-extrabold relative  text-center  ${
          hover ? "bottom-40" : "bottom-0"
        } duration-500`}
      >
        {text}
        <p className="text-[13px] text-orange-500">{subText}</p>
      </div>
    </Link>
  );
};

export default DeliverCard;
