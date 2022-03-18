import React, { useEffect, useState } from 'react'
import { axiosAuth } from '../utils/axiosAuth'

const CoinOverview = () => {
    const [data, setData] = useState()

    useEffect(() => {
        axiosAuth().get('https://coinranking1.p.rapidapi.com/coins')
        .then(res =>  setData(res.data.data.stats))
        .catch(err => console.log("error fetching data"))
    }, [])



    return (
        <div className='flex gap-5 py-2 border-y'>
            <p>Coins: <span></span>
                <span className="text-blue-500">{data?.total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span>
            </p>

            <p>|</p>

            <p>Exchanges: <span></span>
                <span className="text-blue-500">{data?.totalExchanges.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span>
             </p>

            <p>|</p> 

            <p>Global Market Cap: <span></span>
                <span className="text-blue-500">{data?.totalMarketCap.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span>
            </p>

            <p>|</p> 

            <p>24H Volume: <span></span>
                <span className="text-blue-500">{data?.total24hVolume.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span>
            </p>
        </div>
    )
}

export default CoinOverview