
import { useGoodsQuery } from '../redux/auth/goods/goodsApi'
import Container from '../components/ui/Containert'
import GoodCard, { IGood } from '../components/GoodCard';
import './Home/Home.css'
import SectionHeader from '../utils/SectionHeader';
const AllReliefGoods = () => {
  const {data,isLoading}=useGoodsQuery("");
  if(isLoading){
    return <div>Loading...</div>
  }
  // console.log(data)
  return (
    <div className='goodsBg text-black'>
      <SectionHeader className='text-center py-8' text='RECENT CAMPAIGNS'></SectionHeader>
      <h1 className="text-center font-bold py-4 underline"> N.B: 
        Click <span className="text-orange-500">Details</span> to make a
        Donation
      </h1>
      <Container className="grid lg:grid-cols-3 grid-cols-2 gap-4 ">
        {data?.data.map((good:IGood) => (
          <GoodCard good={good}></GoodCard>
        ))}
      </Container>
    </div>
  );
}

export default AllReliefGoods