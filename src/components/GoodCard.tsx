import React from 'react'
import { Link } from "react-router-dom";

const GoodCard = ({ good }) => {
  return (
    <div className="flex flex-col gap-2 justify-center  border-2 border-zinc-500">
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