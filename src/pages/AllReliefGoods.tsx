import React from 'react'
import { useGoodsQuery } from '../redux/auth/goods/goodsApi'
import Container from '../components/ui/Containert'
import GoodCard from '../components/GoodCard';
import './Home/Home.css'
const AllReliefGoods = () => {
  const {data,isLoading}=useGoodsQuery("");
  if(isLoading){
    return <div>Loading...</div>
  }
  // console.log(data)
  return (
    <div className='goodsBg'>
      <h1 className="text-center font-bold my-4 ">
        Click <span className="text-orange-500">Details</span> to make a
        Donation
      </h1>
      <Container className="grid lg:grid-cols-3 grid-cols-2 gap-4 ">
        {data?.data.map((good) => (
          <GoodCard good={good}></GoodCard>
        ))}
      </Container>
    </div>
  );
}

export default AllReliefGoods