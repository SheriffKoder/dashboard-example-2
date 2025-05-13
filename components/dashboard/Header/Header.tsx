import { Layers, Search, WandSparkles, Gift, Bell, CircleDot } from 'lucide-react'
import React from 'react'

const Header = () => {
  return (
    <header className="px-6 py-4 bg-white/10 backdrop-blur-lg flex items-center justify-between w-full h-18">
    {/* logo */}
    <div className="flex flex-row items-center justify-center gap-2 text-foreground cursor-pointer">
      <Layers className="w-6 h-6 stroke-2" />
      <h1 className="text-xl font-light">Extrados</h1>
    </div>

    {/* Search bar at center of header */}
    <div className="absolute left-1/2 -translate-x-1/2 py-4 h-full flex items-center justify-center">
      <div className="flex items-center justify-center bg-[rgba(255,255,255,0.05)] rounded-sm
      w-[500px] px-3 h-full focus-within:ring-1 ring-white/15 transition-all duration-300">

        <Search className="w-4 h-4 stroke-2 text-foreground/50" />

        <div className=" w-full h-full">
          <input type="text" placeholder="Search" 
          className="w-full h-full outline-none bg-transparent text-foreground focus:outline-none
          px-4 py-2" />

            <button className="absolute right-[5px] top-1/2 -translate-y-1/2 bg-white/10 
            text-white px-2 py-2 rounded-sm cursor-pointer hover:bg-white/20 transition-all duration-300">
              <WandSparkles className="w-3 h-3 stroke-2 text-foreground/50" />
            </button>
        </div>


      </div>
    </div>

    {/* User buttons?? */}
    <div className="flex flex-row items-center justify-center gap-2 h-full">

      <button 
      className="bg-white/0 h-full px-3 rounded-sm cursor-pointer
      hover:bg-white/10 transition-all duration-300 text-md text-foreground/30 hover:text-foreground/50">
        <Gift className="w-5 h-5 stroke-2 " />
      </button>

      <button 
      className="bg-white/0 h-full px-3 rounded-sm cursor-pointer
      hover:bg-white/10 transition-all duration-300 text-md text-foreground/40 hover:text-foreground/60">
        <Bell className="w-5 h-5 stroke-2" />
      </button>

      <button 
      className="bg-white/0 h-full px-3 rounded-sm cursor-pointer
      hover:bg-white/10 transition-all duration-300 text-md text-foreground/40 hover:text-foreground/60">
        <CircleDot className="w-5 h-5 stroke-2" />
      </button>


      <button 
      className="bg-white/10 text-white px-4 py-2 rounded-sm cursor-pointer 
      hover:bg-white/20 transition-all duration-300 text-md ml-8">
        Connect Wallet
      </button>

    </div>

  </header>
  )
}

export default Header
