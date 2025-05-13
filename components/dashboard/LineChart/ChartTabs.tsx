"use client"

import { ToggleLeft } from 'lucide-react';
import React, { useState } from 'react'

const Tabs = () => {

    const tabNames = ["IW", "IM", "YV", "ALL"];

    const [activeTab, setActiveTab] = useState("IW");
    

  return (
    <div className='flex flex-row items-center gap-2 h-fit'>

        <div className={`text-xs capitalize font-medium text-center
            text-white/30 hover:text-white/90 transition-all duration-300 cursor-pointer border border-transparent
            px-2 py-2 rounded-sm`}>
            <ToggleLeft/>
        </div>

        {tabNames.map((tabName) => (
        <div key={tabName} className={`text-xs capitalize font-medium text-center
        text-white/40 hover:text-white/90 transition-all duration-300 cursor-pointer border border-transparent
        px-4 py-[7px] rounded-sm hover:bg-white/5 ${activeTab === tabName ? "bg-white/5 text-white/90 border-white/2 hover:bg-white/10" : ""}`}
        onClick={() => setActiveTab(tabName)}
        >
            {tabName}
        </div>
        ))}
  </div>
  )
}

export default Tabs
