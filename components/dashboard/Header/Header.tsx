"use client"
import { Layers, Search, WandSparkles, Gift, Bell, CircleDot, X, Wallet } from 'lucide-react'
import React, { useState, useMemo, useRef, useEffect } from 'react'
import DropdownToggle from '@/components/ui/DropdownToggle'
import SearchResults from '@/components/dashboard/Search/SearchResults'
import { searchData, AllDataTabs, getRandomItemName } from '@/utils/search-results'
import { TabType } from '@/components/dashboard/Tabs'

interface HeaderProps {
  onConnectWalletClick?: () => void;
  allData?: AllDataTabs;
  onTabClick?: (tab: TabType) => void;
}

const Header = ({ onConnectWalletClick, allData, onTabClick }: HeaderProps) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchDropdownOpen, setIsSearchDropdownOpen] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const searchResultsRef = useRef<HTMLDivElement>(null);

  // Search results
  const searchResults = useMemo(() => {
    if (!searchQuery.trim() || !allData) return [];
    return searchData(searchQuery, allData);
  }, [searchQuery, allData]);

  // Show dropdown when there are results or when query is not empty
  useEffect(() => {
    setIsSearchDropdownOpen(searchQuery.trim().length > 0);
  }, [searchQuery]);

  // Close search results when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchResultsRef.current &&
        !searchResultsRef.current.contains(event.target as Node) &&
        searchInputRef.current &&
        !searchInputRef.current.contains(event.target as Node)
      ) {
        setIsSearchDropdownOpen(false);
      }
    };

    if (isSearchDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isSearchDropdownOpen]);

  const handleTabClick = (tab: TabType, itemName?: string) => {
    if (itemName) {
      setSearchQuery(itemName);
    }
    setIsSearchDropdownOpen(false);
    if (onTabClick) {
      onTabClick(tab);
    }
  };

  const handleWandClick = () => {
    if (!allData) return;
    const randomName = getRandomItemName(allData);
    if (randomName) {
      setSearchQuery(randomName);
      // The dropdown will automatically open due to the useEffect that watches searchQuery
    }
  };
  // Offers data for Gift icon
  const offers = [
    {
      id: '1',
      title: 'Premium Plan Discount',
      description: 'Get 30% off on premium features for the next 30 days',
      badge: 'New',
      onClick: () => console.log('Premium Plan clicked'),
    },
    {
      id: '2',
      title: 'Referral Bonus',
      description: 'Invite friends and earn $50 in credits for each referral',
      badge: 'Hot',
      onClick: () => console.log('Referral clicked'),
    },
    {
      id: '3',
      title: 'Trading Fee Waiver',
      description: 'Zero trading fees on all transactions this week',
      onClick: () => console.log('Trading Fee clicked'),
    },
    {
      id: '4',
      title: 'Early Access Program',
      description: 'Join our beta program and get exclusive features first',
      onClick: () => console.log('Early Access clicked'),
    },
  ];

  // Notifications data for Bell icon
  const notifications = [
    {
      id: '1',
      title: 'Price Alert Triggered',
      description: 'Bitcoin reached your target price of $32,000',
      badge: 'Alert',
      onClick: () => console.log('Price Alert clicked'),
    },
    {
      id: '2',
      title: 'Portfolio Update',
      description: 'Your portfolio value increased by 5.2% today',
      onClick: () => console.log('Portfolio Update clicked'),
    },
    {
      id: '3',
      title: 'Transaction Completed',
      description: 'Your swap transaction has been successfully processed',
      onClick: () => console.log('Transaction clicked'),
    },
    {
      id: '4',
      title: 'Market Movement',
      description: 'Ethereum is trending up with 8% increase in 24h',
      badge: 'Trending',
      onClick: () => console.log('Market Movement clicked'),
    },
  ];

  // Dashboard updates for CircleDot icon
  const updates = [
    {
      id: '1',
      title: 'New Chart Features',
      description: 'Enhanced line charts with advanced analytics now available',
      badge: 'Update',
      onClick: () => console.log('Chart Features clicked'),
    },
    {
      id: '2',
      title: 'Performance Improvements',
      description: 'Dashboard loading time reduced by 40%',
      onClick: () => console.log('Performance clicked'),
    },
    {
      id: '3',
      title: 'Mobile App Released',
      description: 'Download our new mobile app for iOS and Android',
      badge: 'New',
      onClick: () => console.log('Mobile App clicked'),
    },
    {
      id: '4',
      title: 'Security Enhancement',
      description: 'Two-factor authentication now available for all accounts',
      onClick: () => console.log('Security clicked'),
    },
  ];

  return (
    <header className="px-6 py-4 bg-white/10 backdrop-blur-lg flex items-center justify-between w-full h-18">
    {/* logo */}
    <div className="flex flex-row items-center justify-center gap-2 text-foreground cursor-pointer">
      <Layers className="w-6 h-6 stroke-2" />
      <h1 className="text-xl font-light hidden lg:block">Extrados</h1>
    </div>

    {/* Search bar at center of header - Desktop */}
    <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 py-4 h-full items-center justify-center">
      <div className="relative w-[300px] xl:w-[500px]">
        <div className="flex items-center justify-center bg-[rgba(255,255,255,0.05)] rounded-sm
        px-3 h-full focus-within:ring-1 ring-white/15 transition-all duration-300">

          <Search className="w-4 h-4 stroke-2 text-foreground/50" />

          <div className=" w-full h-full">
            <input 
              ref={searchInputRef}
              type="text" 
              placeholder="Search" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-full outline-none bg-transparent text-foreground focus:outline-none
              px-4 py-2" />

              <button 
                onClick={handleWandClick}
                className="absolute right-[5px] top-1/2 -translate-y-1/2 bg-white/10 
                text-white px-2 py-2 rounded-sm cursor-pointer hover:bg-white/20 transition-all duration-300">
                <WandSparkles className="w-3 h-3 stroke-2 text-foreground/50" />
              </button>
          </div>
        </div>

        {/* Search Results */}
        {isSearchDropdownOpen && (
          <div ref={searchResultsRef}>
            {searchResults.length > 0 ? (
              <SearchResults results={searchResults} onTabClick={handleTabClick} />
            ) : (
              <div className="absolute top-full left-0 right-0 mt-2 bg-[#2d293f] backdrop-blur-xl rounded-lg border border-white/20 shadow-lg z-50">
                <div className="px-4 py-6 text-center">
                  <p className="text-sm text-foreground/60">No results found</p>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>



    {/* Mobile Search Bar - Below Header */}
    {isSearchOpen && (
    <div className="lg:hidden absolute top-full left-0 right-0 w-full bg-[#2d293f]/80 lg:bg-white/10 backdrop-blur-lg lg:border-b border-white/10 px-6 py-4 z-50 animate-[slideDownFade_0.3s_ease-out]">
      <div className="relative">
        <div className="flex items-center justify-center bg-[rgba(255,255,255,0.05)] rounded-sm
        w-full px-3 h-12 focus-within:ring-1 ring-white/15 transition-all duration-300">
          <Search className="w-4 h-4 stroke-2 text-foreground/50" />

          <div className="w-full h-full">
            <input 
              ref={searchInputRef}
              type="text" 
              placeholder="Search" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-full outline-none bg-transparent text-foreground focus:outline-none
              px-4 py-2"
              autoFocus
            />

            <button 
              onClick={handleWandClick}
              className="absolute right-[5px] top-1/2 -translate-y-1/2 bg-white/10 
              text-white px-2 py-2 rounded-sm cursor-pointer hover:bg-white/20 transition-all duration-300"
            >
              <WandSparkles className="w-3 h-3 stroke-2 text-foreground/50" />
            </button>
          </div>
        </div>

        {/* Search Results - Mobile */}
        {isSearchDropdownOpen && (
          <div ref={searchResultsRef} className="mt-2">
            {searchResults.length > 0 ? (
              <SearchResults results={searchResults} onTabClick={handleTabClick} />
            ) : (
              <div className="bg-[#2d293f] backdrop-blur-xl rounded-lg border border-white/20 shadow-lg z-50">
                <div className="px-4 py-6 text-center">
                  <p className="text-sm text-foreground/60">No results found</p>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
    )}

    {/* User buttons with dropdowns */}
    <div className="flex flex-row items-center justify-center gap-2 h-full">

    {/* Search icon - Mobile/Tablet */}
    <div className="lg:hidden flex items-center justify-center">
      <button
        onClick={() => setIsSearchOpen(!isSearchOpen)}
        className="bg-white/0 h-full px-3 rounded-sm cursor-pointer
        hover:bg-white/10 transition-all duration-300 text-md text-foreground/40 hover:text-foreground/60"
      >
        <Search className="w-5 h-5 stroke-2" />
      </button>
    </div>

      <DropdownToggle 
        icon={Gift} 
        items={offers}
        badgeCount={2}
        className="text-foreground/30 hover:text-foreground/50"
        headerTitle="Special Offers"
        tooltip="Special Offers"
      />

      <DropdownToggle 
        icon={Bell} 
        items={notifications}
        badgeCount={4}
        className="text-foreground/40 hover:text-foreground/60"
        headerTitle="Notifications"
        tooltip="Notifications"
      />

      <DropdownToggle 
        icon={CircleDot} 
        items={updates}
        badgeCount={1}
        className="text-foreground/40 hover:text-foreground/60"
        headerTitle="Dashboard Updates"
        tooltip="Dashboard Updates"
      />

      <button 
      onClick={onConnectWalletClick}
      className="bg-white/10 text-white px-3 md:px-4 py-2 rounded-sm cursor-pointer 
      hover:bg-white/20 transition-all duration-300 text-md ml-2 md:ml-8 flex items-center justify-center">
        <Wallet className="w-5 h-5 md:hidden" />
        <span className="hidden md:inline">Connect Wallet</span>
      </button>

    </div>



  </header>
  )
}

export default Header
