import { useParams } from "react-router-dom";
import { useSingleGoodQuery } from "../redux/auth/goods/goodsApi";
import Container from "./ui/Containert";
import {Link} from 'react-router-dom';
import { BiDonateHeart } from "react-icons/bi";

const GoodDetails = () => {
  const { id } = useParams();
  const { data, isLoading } = useSingleGoodQuery(id);
  // console.log(data)
  if (isLoading) {
    return <div>Loading...</div>;
  }
  const DonationSuccess=()=>{
    alert("Donation Successful")
  }
  return (
    <Container>
      GoodDetails:
      <div className="flex lg:flex-row flex-col justify-around items-center gap-8">
       <div>
          {" "}
          <img
            className="lg:size-[400px] size-[300px] rounded-md mx-auto"
            src={data.data.image}
            alt=""
          />
        </div>
        <div className="lg:text-start text-center space-y-4">
          <h1 className="text-black text-3xl font-bold">{data.data.title}</h1>
          <h1 className="text-black text-2xl font-semibold ">
            Category: {data.data.category}
          </h1>
          <h1 className="text-black text-xl font-md">
            Donated Amount: ${data.data.amount}
          </h1>
          <h1 className="text-slate-500 text-md ">Description: {data.data.description}</h1>
          <h1 className="text-slate-900 text-md ">Impact: {data.data.impact}</h1>
          <h1 className="text-slate-900 text-md ">Organization: {data.data.organization}</h1>
          <h1 className="text-slate-900 text-md ">Success Story: {data.data.success_story}</h1>
          <h1 className="text-slate-900 text-md ">Duratiion: {data.data.duration}</h1>
          <h1 className="text-slate-900 text-md ">Website: {data.data.website}</h1>
          <h1 className="text-slate-900 text-md ">Location: {data.data.location}</h1>
       </div>
      </div>
       <div className="flex justify-center my-4"><Link onClick={DonationSuccess} className="text-black font-bold text-2xl bg-green-500 p-2 rounded-md flex items-center gap-2 hover:text-slate-500 duration-500" to={'/dashboard'}>
        {/* <Donation/> */}
        Donate Now<BiDonateHeart />
        </Link></div>
    </Container>
  );
};

export default GoodDetails;
