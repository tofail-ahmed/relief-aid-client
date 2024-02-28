import React from 'react'
import { useParams } from 'react-router-dom'
import { useSingleGoodQuery } from '../redux/auth/goods/goodsApi';
import Container from './ui/Containert';

const GoodDetails = () => {
  const {id}=useParams();
  const {data,isLoading}=useSingleGoodQuery(id);
  // console.log(data)
  if(isLoading){
    return <div>Loading...</div>
  }
  return (
    <Container>GoodDetails:
      <h1>{data?.data.title}</h1>
    </Container>
  )
}

export default GoodDetails