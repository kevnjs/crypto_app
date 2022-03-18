import React, {useEffect, useState} from 'react'
import { axiosAuth } from '../utils/axiosAuth'

const Coin = ({coin}) => {
 

  return (
    <div className='flex justify-between py-3 items-center border-b-2'>
        <p className="w-5 ml-1">{coin.rank}</p>
        <div className=' flex w-24 mr-5 items-center'>
            <img className='w-8 h-8 mr-5' src={coin.iconUrl} />
            <p>{coin.name}</p>
        </div>
        <p className="w-[15%]">{coin.symbol}</p> 
        <p className='w-[15%]'>
          $ {
            Number(coin.price) < 0.001 ? Number(coin.price).toFixed(8) : Number(coin.price).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            }
        </p>
        <p className='w-[15%]'>
            {
            Number(coin.change) < 0 ? <span className="text-red-500">{Number(coin.change)}%</span> : <span className="text-green-400">+{Number(coin.change)}%</span>
            }
        </p>
        <p className='w-[25%]'>$ {Number(coin.marketCap).toLocaleString()}</p>
    </div>
  )
}

export default Coin