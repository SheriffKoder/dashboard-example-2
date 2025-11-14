"use client"

import React, { useState } from 'react'

export type TabType = "overview" | "tokens" | "pods" | "composition" | "settings";

interface TabsProps {
  activeTab?: TabType;
  onTabChange?: (tab: TabType) => void;
}

const Tabs = ({ activeTab: externalActiveTab, onTabChange }: TabsProps) => {
    const tabNames: TabType[] = ["overview", "tokens", "pods", "composition", "settings"];

    const [internalActiveTab, setInternalActiveTab] = useState<TabType>("overview");
    
    // Use external activeTab if provided, otherwise use internal state
    const activeTab = externalActiveTab !== undefined ? externalActiveTab : internalActiveTab;

    const handleTabClick = (tabName: TabType) => {
      if (onTabChange) {
        onTabChange(tabName);
      } else {
        setInternalActiveTab(tabName);
      }
    };

  return (
    <div className="grid grid-cols-5 gap-2 w-fit">
    {tabNames.map((tabName) => (
      <div key={tabName} className={`text-[10px] md:text-xs lg:text-sm capitalize font-medium text-center
      text-white/40 hover:text-white/90 transition-all duration-300 cursor-pointer border border-transparent
      px-2 py-2 rounded-sm hover:bg-white/5 ${activeTab === tabName ? "bg-white/10 text-white/90 border-white/5 hover:bg-white/10" : ""}`}
      onClick={() => handleTabClick(tabName)}
      >
        {tabName}
      </div>
    ))}
  </div>
  )
}

export default Tabs
