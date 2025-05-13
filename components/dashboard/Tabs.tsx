"use client"

import React, { useState } from 'react'

const Tabs = () => {

    const tabNames = ["overview", "tokens", "pods", "composition", "settings"];

    const [activeTab, setActiveTab] = useState("overview");
    

  return (
    <div className="grid grid-cols-5 gap-2 w-fit">
    {tabNames.map((tabName) => (
      <div key={tabName} className={`text-sm capitalize font-medium text-center
      text-white/40 hover:text-white/90 transition-all duration-300 cursor-pointer border border-transparent
      px-2 py-2 rounded-sm hover:bg-white/5 ${activeTab === tabName ? "bg-white/10 text-white/90 border-white/5 hover:bg-white/10" : ""}`}
      onClick={() => setActiveTab(tabName)}
      >
        {tabName}
      </div>
    ))}
  </div>
  )
}

export default Tabs
