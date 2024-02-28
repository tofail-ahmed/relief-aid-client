import React from 'react'
import { useGoodsQuery } from '../redux/auth/goods/goodsApi'
import Container from '../components/ui/Containert'
import GoodCard from '../components/GoodCard';

const AllReliefGoods = () => {
  const {data,isLoading}=useGoodsQuery("");
  if(isLoading){
    return <div>Loading...</div>
  }
  // console.log(data)
  return (
    <Container className="grid lg:grid-cols-3 grid-cols-2">
    {
      data?.data.map((good)=>
      (<GoodCard good={good}></GoodCard>)
      )
    }
    </Container>
  )
}

export default AllReliefGoods