"use client"

import { ToggleLeft } from 'lucide-react';
import React, { useState } from 'react'
import { TimePeriod } from '@/constants/types';

interface ChartTabsProps {
  activeTab: TimePeriod;
  onTabChange: (tab: TimePeriod) => void;
  onToggleChange?: (isSelected: boolean) => void;
}

const ChartTabs = ({ activeTab, onTabChange, onToggleChange }: ChartTabsProps) => {
    const [isToggleSelected, setIsToggleSelected] = useState(false);
    const tabNames: TimePeriod[] = ["IW", "IM", "YV", "ALL"];
    
    const handleToggleClick = () => {
      const newState = !isToggleSelected;
      setIsToggleSelected(newState);
      onToggleChange?.(newState);
    };

  return (
    <div className='flex flex-row items-center gap-2 h-fit'>

          <div 
            className={`text-xs capitalize font-medium text-center ${activeTab === "ALL" ? "opacity-100" : "opacity-0 pointer-events-none"}
            transition-all duration-300 cursor-pointer border border-transparent
            px-2 py-2 rounded-sm ${isToggleSelected ? 'text-white' : 'text-white/30 hover:text-white/90'}`}
            onClick={handleToggleClick}
          >
            <ToggleLeft/>
          </div>

        {tabNames.map((tabName) => (
        <div key={tabName} className={`text-xs capitalize font-medium text-center
        text-white/40 hover:text-white/90 transition-all duration-300 cursor-pointer border border-transparent
        px-4 py-[7px] rounded-sm hover:bg-white/5 ${activeTab === tabName ? "bg-white/5 text-white/90 border-white/2 hover:bg-white/10" : ""}`}
        onClick={() => onTabChange(tabName)}
        >
            {tabName}
        </div>
        ))}
  </div>
  )
}

export default ChartTabs
