"use client"

import { ChevronDown, Table2, Triangle } from 'lucide-react';
import React, { useState, useRef, useEffect } from 'react'

export type PriceSortOption = 'none' | 'low' | 'high';
export type SupplySortOption = 'none' | 'asc' | 'desc';

interface TableTabsProps {
  priceSort: PriceSortOption;
  onPriceSortChange: (sort: PriceSortOption) => void;
  supplySort: SupplySortOption;
  onSupplySortChange: (sort: SupplySortOption) => void;
  highlightHighestPrice: boolean;
  onHighlightChange: (highlight: boolean) => void;
}

const TableTabs = ({
  priceSort,
  onPriceSortChange,
  supplySort,
  onSupplySortChange,
  highlightHighestPrice,
  onHighlightChange
}: TableTabsProps) => {
  const [isPriceDropdownOpen, setIsPriceDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsPriceDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handlePriceSort = (option: PriceSortOption) => {
    onPriceSortChange(option);
    setIsPriceDropdownOpen(false);
  };

  const handleSupplySort = () => {
    // Cycle through: none -> asc -> desc -> none
    if (supplySort === 'none') {
      onSupplySortChange('asc');
    } else if (supplySort === 'asc') {
      onSupplySortChange('desc');
    } else {
      onSupplySortChange('none');
    }
  };

  return (
    <div className="flex flex-row gap-2 relative">
      
      {/* Price Sort Dropdown */}
      <div className="relative" ref={dropdownRef}>
        <div 
          className={`text-sm capitalize font-medium text-center
           hover:text-white/90 transition-all duration-300 cursor-pointer border
          px-4 py-2 rounded-sm bg-white/7 text-white/70 border-white/5 hover:bg-white/15
          flex flex-row gap-2 items-center ${priceSort !== 'none' ? 'bg-white/15' : ''}`}
          onClick={() => setIsPriceDropdownOpen(!isPriceDropdownOpen)}
        >
          <Triangle className='w-3 h-3 fill-white/50 stroke-0 rotate-180'/>  
          Price
          <ChevronDown className={`w-3 h-3 transition-transform ${isPriceDropdownOpen ? 'rotate-180' : ''}`}/>
        </div>

        {isPriceDropdownOpen && (
          <div className="absolute top-full right-0 mt-1 bg-white/10 backdrop-blur-xl border border-white/5 rounded-sm overflow-hidden z-10 min-w-[120px]">
            <div 
              className={`px-4 py-2 text-sm cursor-pointer hover:bg-white/10 transition-colors ${priceSort === 'low' ? 'bg-white/15' : ''}`}
              onClick={() => handlePriceSort('low')}
            >
              Low to High
            </div>
            <div 
              className={`px-4 py-2 text-sm cursor-pointer hover:bg-white/10 transition-colors ${priceSort === 'high' ? 'bg-white/15' : ''}`}
              onClick={() => handlePriceSort('high')}
            >
              High to Low
            </div>
            <div 
              className={`px-4 py-2 text-sm cursor-pointer hover:bg-white/10 transition-colors ${priceSort === 'none' ? 'bg-white/15' : ''}`}
              onClick={() => handlePriceSort('none')}
            >
              None
            </div>
          </div>
        )}
      </div>

      {/* Supply Sort Button */}
      <div 
        className={`text-sm capitalize font-medium text-center
         hover:text-white/90 transition-all duration-300 cursor-pointer border
        px-4 py-2 rounded-sm bg-white/7 text-white/70 border-white/5 hover:bg-white/15
        flex flex-row gap-2 items-center ${supplySort !== 'none' ? 'bg-white/15' : ''}`}
        onClick={handleSupplySort}
      >
        <Table2 className='w-4 h-4 text-white stroke-1'/>  
        Supply
        {supplySort === 'asc' && <span className='text-xs'>↑</span>}
        {supplySort === 'desc' && <span className='text-xs'>↓</span>}
      </div>

      {/* Highlight Buttons */}
      <div className='flex flex-row gap-0'>
        <div 
          className={`
          hover:text-white/90 transition-all duration-300 cursor-pointer border p-2
          rounded-sm rounded-r-none bg-white/7 text-white/70 border-white/5 hover:bg-white/10
          flex flex-row gap-2 items-center
          ${highlightHighestPrice ? "bg-white/15" : "bg-white/7" }`}
          onClick={() => onHighlightChange(true)}
        >
          <span className='text-xs'>H</span>
        </div>

        <div 
          className={`
          hover:text-white/90 transition-all duration-300 cursor-pointer border p-2
          rounded-sm rounded-l-none border-l-0 bg-white/7 text-white/70 border-white/5 hover:bg-white/10
          flex flex-row gap-2 items-center
          ${!highlightHighestPrice ? "bg-white/15" : "bg-white/7" }`}
          onClick={() => onHighlightChange(false)}
        >
          <span className='text-xs'>N</span>
        </div>
      </div>

    </div>
  )
}

export default TableTabs
