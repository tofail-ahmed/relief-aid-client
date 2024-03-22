import {  useState } from "react";

import {
  useDeleteSupplyMutation,
  useSupplyQuery,
} from "../../redux/supply/supplyApi";
import { FcViewDetails } from "react-icons/fc";
import { FaEdit } from "react-icons/fa";
import { MdAutoDelete } from "react-icons/md";

import { Link } from "react-router-dom";
import Modal from "../../components/Modal";
import SupplyForm from "../../components/SupplyForm";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
interface ISupply {
  _id: string;
  title: string;
  category: string;
  amount: number;
  image: string;
  description: string;
}
const Supplies = () => {
  const [modal, setModal] = useState(false);
  const [supplyId, setSupplyId] = useState("");
  const { data, isLoading } = useSupplyQuery("");
  const [deleteSupply, { data: deleteData }] = useDeleteSupplyMutation();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const totalAmount = data.data.reduce(
    (accumulator: number, currentValue: { amount?: number }) => {
      // Ensure `amount` exists and is a number
      const amount =
        typeof currentValue.amount === "number" ? currentValue.amount : 0;

      // Add the amount to the accumulator
      return accumulator + amount;
    },
    0
  );
  // const handleDelete = (id:string) => {
  //   const confirmDelete = toast.warn(
  //     "Are you sure you want to delete this supply?"
  //   );
  //   console.log(confirmDelete)
  //   if (confirmDelete) {
  //     deleteSupply(id);
  //     alert("Data deleted successfully");
  //   }

  // };

  const deleteItem = (id) => {
    // Your delete logic here
    deleteSupply(id);
    // Show a success message
    toast.success("Item deleted successfully!", {
      position: "top-right",
    });
  };
  const confirmDelete = (id) => {
    toast.warn(
      <div>
        <p>Are you sure you want to delete this item?</p>
        <div className="flex gap-4">
          <button
            className="bg-red-300 px-2 rounded-md"
            onClick={() => deleteItem(id)}
          >
            Yes
          </button>
          <button
            className="bg-green-300 px-2 rounded-md"
            onClick={() => toast.dismiss}
          >
            No
          </button>
        </div>
      </div>,
      {
        position: "top-right",
        autoClose: false,
        closeOnClick: true,
        closeButton: true,
        draggable: false,
        progress: undefined,
      }
    );
  };

  // console.log(deleteData);
  return (
    <div>
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
                {data?.data.map((supply: ISupply) => (
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
                        <button
                          // onClick={() => handleDelete(supply._id)}
                          onClick={() => confirmDelete(supply._id)}
                          className=" btn  flex items-center gap-2 text-[15px] text-red-500 font-semibold border-[1px] bg-slate-400 hover:bg-slate-500 hover:text-red-700 duration-500 rounded-md p-1"
                        >
                          Delete
                          <MdAutoDelete />
                        </button>
                        <button
                          onClick={() => {
                            setModal((prev) => !prev);
                            setSupplyId(supply._id);
                          }}
                          className={` btn  flex items-center gap-2 text-[15px] text-green-700 font-semibold border-[1px] bg-slate-400 hover:bg-slate-500 hover:text-green-900 duration-500 rounded-md p-1`}
                        >
                          Update
                          <FaEdit />
                        </button>

                        <Link
                          to={`/dashboard/supply-details/${supply._id}`}
                          className=" btn  flex items-center gap-2 text-[15px] text-blue-500 font-semibold border-[1px] bg-slate-400 hover:bg-slate-500 hover:text-blue-700 duration-500 rounded-md p-1"
                        >
                          Details
                          <FcViewDetails />
                        </Link>
                        {/* <Link
                        to="/dashboard/create-supply"
                        className=" btn  flex items-center gap-2 text-[15px] text-purple-500 font-semibold border-[1px] bg-slate-400 hover:bg-slate-500 hover:text-purple-700 duration-500 rounded-md p-1"
                      >
                        Add Supply
                        <MdAddCircle />
                      </Link> */}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <th className=" text-xl font-bold text-orange-500">
                    Total Supply:${totalAmount}+
                  </th>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
      {modal && (
        <Modal modal={modal} setModal={setModal}>
          <SupplyForm id={supplyId}></SupplyForm>
        </Modal>
      )}
      <ToastContainer />
    </div>
  );
};

export default Supplies;
