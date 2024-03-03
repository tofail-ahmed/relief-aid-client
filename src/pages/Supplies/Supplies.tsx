import React from 'react'
import { useSupplyQuery } from "../../redux/supply/supplyApi";
import { FcViewDetails } from "react-icons/fc";
import { FaEdit } from "react-icons/fa";
import { MdAutoDelete } from "react-icons/md";

const Supplies = () => {
  const { data, isLoading } = useSupplyQuery("");
  if (isLoading) {
    return <div>Loading...</div>;
  }
  console.log(data.data);
  return (
    <div className="text-black">
      <h1 className="text-black text-4xl text-center">
        This is supplies component
      </h1>
      <div>
        <div className="overflow-x-auto">
          <table className="table bg-slate-300">
            {/* head */}
            <thead>
              <tr>
                <th className="text-center">Title</th>
                <th className="text-center">Category</th>
                <th className="text-center">Donation</th>
                <th className="text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="p-2">
              {data?.data.map((supply) => (
                <tr>
                  <td className="border-2 border-orange-500">
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={supply.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{supply.title}</div>
                      </div>
                    </div>
                  </td>
                  <td className="border-2 border-orange-500">
                    {supply.category}
                  </td>
                  <td className="border-2 border-orange-500">
                    ${supply.amount}
                  </td>
                  <td className="border-2 border-orange-500">
                    <div className="flex flex-col justify-end">
                      <button className="flex items-center gap-2 text-[15px] font-semibold border-[1px] bg-slate-400 hover:bg-slate-500 duration-500 rounded-md p-1">
                        Delete
                        <MdAutoDelete />
                      </button>
                      <button>
                        Update
                        <FaEdit />
                      </button>
                      <button>
                        Details
                        <FcViewDetails />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Supplies