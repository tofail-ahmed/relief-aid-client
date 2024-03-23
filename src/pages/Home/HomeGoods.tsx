
import Container from '../../components/ui/Containert'
import { useGoodsQuery } from '../../redux/auth/goods/goodsApi'
import GoodCard, { IGood } from "../../components/GoodCard"
import { NavLink } from "react-router-dom";
import { scrollToTop } from '../../utils/utils';

const HomeGoods = () => {
  
  
      const {data,isLoading}=useGoodsQuery('');
      if(isLoading){
            return <div>Loading...</div>
      }
  return (
    <div className=" text-black ">
      <Container className=" goodsBg py-10  ">
        <div className="grid lg:grid-cols-3 grid-cols-2 gap-8">
          {data?.data.slice(0, 6).map((good: IGood) => (
            <GoodCard good={good}></GoodCard>
          ))}
        </div>
        <div className="flex justify-center">
          <NavLink
            onClick={scrollToTop}
            className="bg-orange-500 hover:bg-slate-500 text-lg  hover:text-white rounded-md px-2 py-1 my-4 duration-500"
            to={"/relief-goods"}
          >
            See All
          </NavLink>
        </div>
      </Container>
    </div>
  );
}

export default HomeGoods