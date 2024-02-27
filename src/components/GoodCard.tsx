import React from 'react'

const GoodCard = ({good}) => {
  return (
    <div className='flex flex-col gap-2 justify-center  border-2 border-zinc-500'>
      <div className='mx-auto'>
      <img className='lg:w-[300px] lg:h-[400px] w-[200px] h-[250px]' src={good.image} alt="" />
   <div>
      <h1>{good.title}</h1>
      <p>Category:{good.category}</p>
      <p>Donated Amount: ${good.amount}</p>
   </div>
      </div>
    </div>
  )
}

export default GoodCard