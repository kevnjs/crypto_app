import React from 'react'

const Categories = () => {
  return (
    <div className='flex justify-between border-b py-2 font-semibold'>
        <p className="w-5 ml-1">#</p>
        <div className='w-24 mr-5'>
        <p>Coin</p>
        </div>
        <p className="invisible w-[15%]">Symbol</p> 
        <p className='w-[15%]'>Price</p>
        <p className='w-[15%]'>24h</p>
        <p className='w-[25%]'>Mkt Cap</p>
    </div>
  )
}

export default Categories