
import { Link } from "react-router-dom";
interface IDeliverCard {
  img: string;
  text: string;
  subText: string;
  className?:string;
}
const DeliverCard = ({ img, text, subText,className }: IDeliverCard) => {
  return (
    <Link to={"/gallery"} className={`relative `}>
      <div className={`bg-gray-600  ${className}`}>
        <img
          className={` lg:w-[420px] w-[420px] h-[300px] mx-auto opacity-60  ${className} `}
          src={img}
          alt=""
        />
      </div>
      <div className="text-4xl text-white font-extrabold relative bottom-24 text-center ">
        {text}
        <p className="text-[13px] text-orange-500">{subText}</p>
      </div>
    </Link>
  );
};

export default DeliverCard;
