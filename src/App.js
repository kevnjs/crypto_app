import './App.css';
import Categories from './components/Categories';
import Coin from './components/Coin';
import CoinOverview from './components/CoinOverview';
import Navbar from './components/Navbar';
import { axiosAuth } from './utils/axiosAuth';
import { useState, useEffect } from 'react';


const App = () => {
  const [coins, setCoins] = useState([])

  useEffect(() => {
      axiosAuth().get('https://coinranking1.p.rapidapi.com/coins')
      .then(res => setCoins(res.data.data.coins))
      .catch(err => console.log("An error occurred when fetching data"))
  }, [])

  return (
  <div >
    <div className="bg-zinc-800 w-7xl">
        <Navbar/> 
    </div>
    <div className='max-w-7xl mx-auto'>
      <CoinOverview/>
      <div className='py-10 text-3xl font-extrabold'>
        Cryptocurrency Prices by Market Cap
      </div>
      <div className='flex-col border-b justify-between items-center'>
        <Categories/>
        {
          coins.map((coin) => {
            return <Coin key={coin.uuid} coin={coin}/>
          })
        }
        
      </div>
      
    </div>
  </div>
    
  );
}

export default App;
