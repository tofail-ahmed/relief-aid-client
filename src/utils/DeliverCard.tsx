import React from "react";
import { Link } from "react-router-dom";
interface IDeliverCard {
  img: string;
  text: string;
}
const DeliverCard = ({ img, text }: IDeliverCard) => {
  return (
    <Link to={"/gallery"} className="relative">
      <img
        className=" lg:w-[400px] w-[400px] h-[300px] mx-auto"
        src={img}
        alt=""
      />
      <h1 className="text-4xl text-white font-extrabold relative bottom-20 text-center ">
        {text}
      </h1>
    </Link>
  );
};

export default DeliverCard;
