import React from 'react'
import { Link } from "react-router-dom";
export interface IGood{
  image:string;
  title:string;
  category:string;
  amount:number;
  _id:string
}
export interface IGoodCardProps{
  good:IGood;
  className?:string
}
const GoodCard = ({ good,className }:IGoodCardProps) => {
  return (
    <div className={`flex flex-col gap-2 justify-center  border-2 border-zinc-300 bg-slate-500/50 ${className}`}>
      <div className="mx-auto">
        <img
          className="lg:w-[300px] lg:h-[400px] w-[200px] h-[250px]"
          src={good.image}
          alt=""
        />
        <div>
          <h1>{good.title}</h1>
          <p>Category:{good.category}</p>
          <p>Donated Amount: ${good.amount}</p>
        </div>
        <Link
          className="bg-orange-500 hover:bg-slate-500 text-base px-2 py-1 rounded-md hover:text-white"
          to={`/relief-details/${good._id}`}
        >
          Details
        </Link>
      </div>
    </div>
  );
};

export default GoodCard