import TableTabs from "@/components/dashboard/Table/TableTabs";
import { Bitcoin, Grid2X2, Pyramid } from "lucide-react";
import React from 'react'

const MainTable = () => {

    const data = [
        {
        icon: <Bitcoin className="w-5 h-5"/>,
          company: "Bitcoin",
          price: 3107331,
          balance: 5.31,
          currency: "BTC",
          cap: 587831951441,
          volume: 19216200+19216200*0.3,
          supply: 19216200,
          expectedSupply: 21000000,
          color: "#8771f4",
        },
        {
        icon: <Pyramid className="w-5 h-5"/>,
            company: "Ethereum",
            price: 3107331,
            balance: 5.31,
            currency: "BTC",
            cap: 587831951441,
            volume: 19216200+19216200*0.1,
            supply: 19216200,
            expectedSupply: 21000000,
            color: "#64afe0",
        },
        {
        icon: <Grid2X2 className='w-4 h-4 stroke-2 rotate-45'/>,
        company: "Binance",
        price: 3107331,
        balance: 5.31,
        currency: "BTC",
        cap: 587831951441,
        volume: 19216200+19216200*0.7,
        supply: 19216200,
        expectedSupply: 21000000,
        color: "#2eb5b9",
        }
      ]

  return (
    <div className="bg-white/5  text-white rounded-xl w-full overflow-hidden relative backdrop-blur-xl border border-white/4">
    {/* header */}
    <div className="px-6 w-full h-[75px] flex flex-row justify-between items-center">
      <h3 className="text-sm">Tokens</h3>

      <TableTabs />

    </div>

    {/* Table header */}
    <div className="w-full border-t border-white/5 border-b 
    grid grid-cols-6 text-xs px-6 py-4 text-white/70 font-medium">
      {/*name, price, balance, market cap, volume (24h), supply */}
      <h4 className="uppercase">name</h4>
      <h4 className="uppercase">price</h4>
      <h4 className="uppercase">balance</h4>
      <h4 className="uppercase">market cap</h4>
      <h4 className="uppercase">volume (24h)</h4>
      <h4 className="uppercase">supply</h4>
    
    </div>

    {/* Table body */}

      {/*name, price, balance, market cap, volume (24h), supply */}
      {data.map((item, index) => (
      <div key={index} className={`border-white/5 ${index !== data.length - 1 ? 'border-b' : ''}  
      grid grid-cols-6 text-xs px-6 py-4 text-white font-medium hover:bg-white/5 items-center transition-all duration-300 cursor-pointer`}>
          <h4 className="flex flex-row items-center gap-2">
            <div className='opacity-50 w-[35px] h-[35px] bg-foreground/10 hover:bg-foreground/20 transition-all duration-300
                rounded-full flex items-center justify-center border border-white/5 cursor-pointer hover:border-white/0'>
                {item.icon}                        
            </div>
            {item.company}
        </h4>
          <h4>${item.price.toString().split(".")[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h4>
          <h4>${item.balance} {item.currency}</h4>
          <h4>${item.cap.toString().split(".")[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h4>
          <h4>${item.volume.toString().split(".")[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h4>
          <div className="flex flex-col gap-1 items-start">
            <div className="flex items-center gap-2">
              <div className="flex-1 flex gap-[3px]">
                {Array.from({ length: 20 }).map((_, i) => {
                  // Calculate if this bar should be filled based on supply percentage
                  const supplyPercentage = (item.supply / item.volume) * 100;
                  const barPercentage = (i + 1) * 5; // Each bar represents 5% (100% / 20 bars)
                  const isFilled = barPercentage <= supplyPercentage;
                    
                  return (
                    <div 
                      key={i} 
                      className={`h-[15px] w-[2px] opacity-90`}
                      style={{
                        background: isFilled ? item.color : "rgba(255,255,255,0.15)",
                      }}
                    />
                  );
                })}
              </div>
              
              {/* Percentage difference between supply and expectedSupply */}
              {(() => {
                const supplyNum = item.supply;
                const expectedSupplyNum = item.expectedSupply;
                const percentDiff = ((supplyNum / expectedSupplyNum) * 100).toFixed(1);
                const remaining = (100 - parseFloat(percentDiff)).toFixed(1);
                return (
                  <span className={`text-xs ${parseFloat(percentDiff) >= 90 ? 'text-white' : 'text-white'}`}>
                    +{remaining}%
                  </span>
                );
              })()}
            </div>
          </div>
        </div>
      ))}
    

</div>
  )
}

export default MainTable
