
import Container from "../../components/ui/Containert";
import { FaHandHoldingHeart, FaHandsHoldingChild } from "react-icons/fa6";
import NumberCounter from "../../components/ui/NumberCounter";
import { AiOutlineGlobal } from "react-icons/ai";
import { FaDonate } from "react-icons/fa";

const Counter = () => {
  return (
    <div className="">
      <Container className="bg-orange-700/50 flex lg:flex-row flex-col justify-around py-10 font-bold gap-8">
        <div className=" text-white flex flex-col justify-center items-center space-y-2">
          <span className="text-6xl">
            {" "}
            <FaHandsHoldingChild />
          </span>
          <span className="text-6xl">
            <NumberCounter endValue={5230} />+
          </span>
          <h1 className="text-3xl">Project Done</h1>
        </div>
        <div className=" text-white flex flex-col justify-center items-center space-y-2">
          <span className="text-6xl">
            {" "}
            <FaHandHoldingHeart />
          </span>
          <span className="text-6xl">
            <NumberCounter endValue={1230} />+
          </span>
          <h1 className="text-3xl">Expert Volunteer</h1>
        </div>
        <div className=" text-white flex flex-col justify-center items-center space-y-2">
          <span className="text-6xl">
            {" "}
            <AiOutlineGlobal />
          </span>
          <span className="text-6xl">
            <NumberCounter endValue={125} />+
          </span>
          <h1 className="text-3xl">Global Partners</h1>
        </div>
        <div className=" text-white flex flex-col justify-center items-center space-y-2">
          <span className="text-6xl">
            {" "}
            <FaDonate />
          </span>
          <span className="text-6xl">
            <NumberCounter endValue={99800} />+
          </span>
          <h1 className="text-3xl">Raised Now</h1>
        </div>
      </Container>
    </div>
  );
};

export default Counter;
