"use client"

import { Grid2X2, Table2, Triangle } from 'lucide-react';
import React, { useState } from 'react'

const TableTabs = () => {

    const tabNames = ["overview", "tokens", "pods", "composition", "settings"];

    const [activeTab, setActiveTab] = useState("overview");
    const [layoutChoice, setLayoutChoice] = useState("layout1");

  return (
    <div className="flex flex-row gap-2">
      
      <div className={`text-sm capitalize font-medium text-center
       hover:text-white/90 transition-all duration-300 cursor-pointer border
      px-4 py-2 rounded-sm bg-white/7 text-white/70 border-white/5 hover:bg-white/15
      flex flex-row gap-2 items-center`}>
        <Triangle className='w-3 h-3 fill-white/50 stroke-0 rotate-180'/>  Filter
      </div>

      <div className={`text-sm capitalize font-medium text-center
       hover:text-white/90 transition-all duration-300 cursor-pointer border
      px-4 py-2 rounded-sm bg-white/7 text-white/70 border-white/5 hover:bg-white/15
      flex flex-row gap-2 items-center`}>
        <Table2 className='w-4 h-4 text-white stroke-1'/>  Filter
      </div>

    <div className='flex flex-row gap-0'>
        <div className={`
        hover:text-white/90 transition-all duration-300 cursor-pointer border p-2
        rounded-sm rounded-r-none bg-white/7 text-white/70 border-white/5 hover:bg-white/10
        flex flex-row gap-2 items-center
        ${layoutChoice === "layout1" ? "bg-white/15" : "bg-white/7" }`}
        onClick={() => setLayoutChoice("layout1")}
        >
            <Grid2X2 className='w-4 h-4 text-white stroke-1'/> 
        </div>

        <div className={`
        hover:text-white/90 transition-all duration-300 cursor-pointer border p-2
        rounded-sm rounded-l-none border-l-0 bg-white/7 text-white/70 border-white/5 hover:bg-white/10
        flex flex-row gap-2 items-center
        ${layoutChoice === "layout2" ? "bg-white/15" : "bg-white/7" }`}
        onClick={() => setLayoutChoice("layout2")}
        >
            <Grid2X2 className='w-4 h-4 text-white stroke-1'/> 
        </div>
    </div>


    </div>
  )
}

export default TableTabs
