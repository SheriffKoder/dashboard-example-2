"use client"
import TableTabs, { PriceSortOption, SupplySortOption } from "@/components/dashboard/Table/TableTabs";
import { Bitcoin, Grid2X2, Pyramid, Coins, Zap, Hexagon, Box, Package, Boxes, TrendingUp, FileText, BarChart } from "lucide-react";
import React, { useState, useMemo } from 'react'

// Helper function to get icon component from icon name
const getIconComponent = (iconName: string | null, className: string = "w-5 h-5") => {
  const iconMap: Record<string, React.ReactNode> = {
    'Bitcoin': <Bitcoin className={className} key="bitcoin" />,
    'Pyramid': <Pyramid className={className} key="ethereum" />,
    'Grid2X2': <Grid2X2 className={`${className} stroke-2 rotate-45`} key="binance" />,
    'Coins': <Coins className={className} key="coins" />,
    'Zap': <Zap className={className} key="zap" />,
    'Hexagon': <Hexagon className={className} key="hexagon" />,
    'Box': <Box className={className} key="box" />,
    'Package': <Package className={className} key="package" />,
    'Boxes': <Boxes className={className} key="boxes" />,
    'TrendingUp': <TrendingUp className={className} key="trending" />,
    'FileText': <FileText className={className} key="file" />,
    'BarChart': <BarChart className={className} key="chart" />,
  };
  
  if (!iconName) return null;
  return iconMap[iconName] || null;
};

interface MainTableProps {
  tableData: Array<{
    icon: string | null;
    company: string;
    price: number;
    balance: number;
    currency: string;
    cap: number;
    volume: number;
    supply: number;
    expectedSupply: number;
    color: string;
  }>;
  tableTitle?: string;
}

const MainTable = ({ tableData, tableTitle = 'Tokens' }: MainTableProps) => {
  const [priceSort, setPriceSort] = useState<PriceSortOption>('none');
  const [supplySort, setSupplySort] = useState<SupplySortOption>('none');
  const [highlightHighestPrice, setHighlightHighestPrice] = useState(false);

  // Process and sort data
  const data = useMemo(() => {
    let processed = tableData.map((item) => ({
      ...item,
      icon: getIconComponent(item.icon)
    }));

    // Sort by price
    if (priceSort === 'low') {
      processed = [...processed].sort((a, b) => a.price - b.price);
    } else if (priceSort === 'high') {
      processed = [...processed].sort((a, b) => b.price - a.price);
    }

    // Sort by supply
    if (supplySort === 'asc') {
      processed = [...processed].sort((a, b) => a.supply - b.supply);
    } else if (supplySort === 'desc') {
      processed = [...processed].sort((a, b) => b.supply - a.supply);
    }

    return processed;
  }, [tableData, priceSort, supplySort]);

  // Find highest price for highlighting
  const highestPrice = useMemo(() => {
    return Math.max(...data.map(item => item.price));
  }, [data]);

  return (
    <div className="bg-white/5  text-white rounded-xl w-full overflow-hidden relative backdrop-blur-xl border border-white/4">
    {/* header */}
    <div className="px-3 md:px-6 w-full md:h-[75px] flex flex-col md:flex-row justify-between items-start md:items-center py-3 md:pt-0 gap-2">
      <h3 className="text-sm capitalize">{tableTitle}</h3>

      <TableTabs 
        priceSort={priceSort}
        onPriceSortChange={setPriceSort}
        supplySort={supplySort}
        onSupplySortChange={setSupplySort}
        highlightHighestPrice={highlightHighestPrice}
        onHighlightChange={setHighlightHighestPrice}
      />

    </div>

    {/* Scrollable table wrapper */}
    <div className="overflow-x-auto">
      <div className="min-w-[900px]">
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
          {data.map((item, index) => {
        const isHighestPrice = highlightHighestPrice && item.price === highestPrice;
        return (
      <div 
        key={index} 
        className={`border-white/5 ${index !== data.length - 1 ? 'border-b' : ''}  
        grid grid-cols-6 text-xs px-6 py-4 text-white font-medium hover:bg-white/5 items-center transition-all duration-300 cursor-pointer
        ${isHighestPrice ? 'bg-white/10 border-l-2 border-l-tertiary' : ''}`}
      >
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
      );
      })}
      </div>
    </div>

</div>
  )
}

export default MainTable
