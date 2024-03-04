import React from 'react'
import { useParams } from "react-router-dom";

import { useSingleSupplyQuery } from "../../redux/supply/supplyApi";

const SupplyDetails = () => {
  const { id } = useParams();
  const { data, isLoading } = useSingleSupplyQuery(id);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  console.log(data);
  const supplyPost = data?.data;
  return (
    <div className="p-8 rounded-md bg-gray-400">
      <div className="flex lg:flex-row flex-col gap-4">
        <img
          className="lg:size-[400px] size-[300px] rounded-md"
          src={supplyPost.image}
          alt=""
        />
        <div className="space-y-8 my-auto">
          <h1 className="text-xl font-bold text-orange-500 ">
            {supplyPost.title}
          </h1>
          <h1 className="text-md text-black font-semibold">
            Category: {supplyPost.category}
          </h1>
          <h1 className="text-md text-black">Amount: ${supplyPost.amount}</h1>
          <p className="text-sm text-slate-700">{supplyPost.description}</p>
        </div>
      </div>
    </div>
  );
};

export default SupplyDetails