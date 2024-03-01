import React from "react";
import { Link } from "react-router-dom";
interface IDeliverCard {
  img: string;
  text: string;
}
const DeliverCard = ({ img, text }: IDeliverCard) => {
  return (
    <Link to={"/gallery"} className="relative">
      <div className="bg-gray-900">
      <img
        className=" lg:w-[420px] w-[420px] h-[300px] mx-auto opacity-60"
        src={img}
        alt=""
      />
      </div>
      <h1 className="text-4xl text-white font-extrabold relative bottom-20 text-center ">
        {text}
      </h1>
    </Link>
  );
};

export default DeliverCard;
