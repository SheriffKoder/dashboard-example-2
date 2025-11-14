"use client"
import React from 'react'
import { SearchResult } from '@/utils/search-results'
import { TabType } from '@/components/dashboard/Tabs'
import { Bitcoin, Grid2X2, Pyramid, Coins, Zap, Hexagon, Box, Package, Boxes, TrendingUp, FileText, BarChart } from 'lucide-react'

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

interface SearchResultsProps {
  results: SearchResult[];
  onTabClick: (tab: TabType, itemName?: string) => void;
}

const SearchResults = ({ results, onTabClick }: SearchResultsProps) => {
  // This component is only rendered when there are results, so we don't need the empty state here
  // The empty state is handled in the Header component

  return (
    <div className="absolute top-full left-0 right-0 mt-2 bg-[#2d293f] backdrop-blur-xl rounded-lg border border-white/20 shadow-lg z-50 max-h-[500px] overflow-y-auto">
      <div className="p-4">
        {/* Master Column Header */}
        <div className="w-full border-b border-white/10 grid grid-cols-4 text-xs px-4 py-3 text-white/70 font-medium mb-4">
          <h4 className="uppercase">name</h4>
          <h4 className="uppercase">price</h4>
          <h4 className="uppercase">balance</h4>
          <h4 className="uppercase">supply</h4>
        </div>

        {results.map((result) => (
          <div key={result.tab} className="mb-6 last:mb-0">
            {/* Tab Header - Clickable */}
            <button
              onClick={() => onTabClick(result.tab)}
              className="w-full text-left mb-3 hover:opacity-80 transition-opacity"
            >
              <h3 className="text-sm font-semibold text-foreground underline">
                {result.tabLabel}
              </h3>
            </button>

            {/* Table Rows */}
            <div className="space-y-2">
              {result.items.map((item, index) => (
                <button
                  key={index}
                  onClick={() => onTabClick(result.tab, item.company)}
                  className="w-full grid grid-cols-4 text-xs px-4 py-3 text-white font-medium hover:bg-white/5 transition-all duration-300 rounded-sm border border-white/5 cursor-pointer text-left"
                >
                  {/* Name */}
                  <div className="flex flex-row items-center gap-2">
                    <div className='opacity-50 w-[30px] h-[30px] bg-foreground/10 rounded-full flex items-center justify-center border border-white/5'>
                      {getIconComponent(item.icon, "w-4 h-4")}
                    </div>
                    <span className="text-sm">{item.company}</span>
                  </div>

                  {/* Price */}
                  <div className="flex items-center">
                    <span>${item.price.toString().split(".")[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
                  </div>

                  {/* Balance */}
                  <div className="flex items-center">
                    <span>${item.balance} {item.currency}</span>
                  </div>

                  {/* Supply */}
                  <div className="flex items-center">
                    <span>{((item.supply / item.expectedSupply) * 100).toFixed(1)}%</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;

