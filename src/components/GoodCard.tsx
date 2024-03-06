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
    <div
      className={`flex flex-col gap-2 justify-center rounded-md bg-slate-500/50 ${className}`}
    >
      <div className="mx-auto">
        <img
          className="lg:w-[400px] lg:h-[300px] w-[220px] h-[250px] rounded-md"
          src={good.image}
          alt=""
        />
        <div className="flex justify-around items-start py-4">
          <div>
            <h1 className="text-lg font-bold">{good.title}</h1>
            <p >Category: <span  className="text-md font-bold">{good.category}</span></p>
            <p>Donated Amount: <span className='text-orange-700 font-bold'>${good.amount}</span></p>
          </div>
          <Link
            className="bg-orange-500 hover:bg-slate-500 text-base px-2 py-1 rounded-md hover:text-white"
            to={`/relief-details/${good._id}`}
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GoodCard