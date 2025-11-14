"use client"
import { useState } from "react";
import BarChartContainer from "@/components/dashboard/BarCharts/BarChartContainer";
import GaugeContainer from "@/components/dashboard/Gauge/GaugeContainer";
import Header from "@/components/dashboard/Header/Header";
import LineChartWrapper from "@/components/dashboard/LineChart/LineChartWrapper";
import SwapContainer from "@/components/dashboard/Swap/SwapContainer";
import MainTable from "@/components/dashboard/Table/MainTable";
import SettingsPanel from "@/components/dashboard/Settings/SettingsPanel";
import Tabs, { TabType } from "@/components/dashboard/Tabs";
import WalletConnectModal from "@/components/ui/WalletConnectModal";
import { ThemeButtons } from "@/components/ui/ThemeToggler_Button";
import { overviewData } from "@/constants/overviewData";
import { tokensData } from "@/constants/tokensData";
import { podsData } from "@/constants/podsData";
import { compositionData } from "@/constants/compositionData";
import { settingsData } from "@/constants/settingsData";
import { DashboardData } from "@/constants/types";

export default function Home() {
  const [activeTab, setActiveTab] = useState<TabType>("overview");
  const [isWalletModalOpen, setIsWalletModalOpen] = useState(false);

  // Get the appropriate dataset based on active tab
  const getActiveData = (): DashboardData => {
    switch (activeTab) {
      case "tokens":
        return tokensData;
      case "pods":
        return podsData;
      case "composition":
        return compositionData;
      case "overview":
      default:
        return overviewData;
    }
  };

  const activeData = getActiveData();

  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-background relative">
      
      <div className="absolute inset-0 top-[-200vh] z-0"
      style={{
        background: `radial-gradient(circle, #130e33, var(--color-background))`,
      }}></div>

      <div className="w-full h-full z-1">
        {/* Header - logo, search, buttons */}
        <div className="sticky top-0 left-0 w-full h-full z-100">
          <Header 
            onConnectWalletClick={() => setIsWalletModalOpen(true)}
            allData={{
              overview: overviewData,
              tokens: tokensData,
              pods: podsData,
              composition: compositionData,
            }}
            onTabClick={(tab) => {
              setActiveTab(tab);
            }}
          />
        </div>

        <div className="mx-auto border-white px-4 lg:px-[100px] py-[50px] flex flex-col gap-[25px] max-w-[1500px]">

          {/* Tabs - buttons for Overview, tokens, pods etc.*/}
          <Tabs activeTab={activeTab} onTabChange={setActiveTab} />

          {activeTab === 'settings' ? (
            <SettingsPanel 
              settings={settingsData}
            />
          ) : (
            <div className="flex flex-col gap-[25px]" id="charts-wrapper">
              {/* Row 1 : Line chart wrapper - Swap */}
              <div className="grid grid-cols-6 gap-4 w-full lg:h-[350px]">
                <div className="col-span-6 lg:col-span-4 bg-white/5 rounded-xl w-full h-full overflow-hidden relative backdrop-blur-xl border border-white/4">
                  {/* Line chart wrapper */}
                  <LineChartWrapper 
                    scoresData={activeData.scores}
                    lineChartData={activeData.lineChart}
                  />
                </div>
                <div className="h-full col-span-6 md:col-span-3 lg:col-span-2">
                  {/* Swap */}
                  <SwapContainer swapData={activeData.swap} />
                </div>

                <div className="col-span-6 md:col-span-3 lg:hidden bg-white/5 rounded-xl w-full h-full overflow-hidden relative backdrop-blur-xl border border-white/4">
                  <GaugeContainer gaugeData={activeData.gauge as any} />
                </div>

              </div>
              

              {/* Row 2 : Bar charts */}
              <div className="grid grid-cols-6 gap-4 w-full lg:h-[350px]">
                <div className="col-span-6 md:col-span-3 lg:col-span-2 bg-white/5 rounded-xl w-full h-full overflow-hidden relative backdrop-blur-xl border border-white/4">
                  <BarChartContainer 
                    title={activeData.barCharts.salesStatistics.title}
                    value={activeData.barCharts.salesStatistics.value}
                    subTitle={activeData.barCharts.salesStatistics.subTitle}
                    subTitleExt={activeData.barCharts.salesStatistics.subTitleExt}
                    componentColor={activeData.barCharts.salesStatistics.componentColor}
                    initialSplitIndex={activeData.barCharts.salesStatistics.initialSplitIndex}
                    chartData={activeData.barCharts.salesStatistics.data}
                  />
                </div>
                <div className="col-span-6 md:col-span-3 lg:col-span-2 bg-white/5 rounded-xl w-full h-full overflow-hidden relative backdrop-blur-xl border border-white/4">
                  <BarChartContainer 
                    title={activeData.barCharts.exchangeOffer.title}
                    value={activeData.barCharts.exchangeOffer.value}
                    subTitle={activeData.barCharts.exchangeOffer.subTitle}
                    subTitleExt={activeData.barCharts.exchangeOffer.subTitleExt}
                    componentColor={activeData.barCharts.exchangeOffer.componentColor}
                    initialSplitIndex={activeData.barCharts.exchangeOffer.initialSplitIndex}
                    chartData={activeData.barCharts.exchangeOffer.data}
                  />
                </div>
                <div className="hidden lg:block lg:col-span-2 bg-white/5 rounded-xl w-full h-full overflow-hidden relative backdrop-blur-xl border border-white/4">
                  <GaugeContainer gaugeData={activeData.gauge as any} />
                </div>
              </div>

              {/* Table */}
              <MainTable 
                tableData={activeData.table} 
                tableTitle={activeTab === 'pods' ? 'Pods' : activeTab === 'composition' ? 'Composition' : 'Tokens'} 
              />
            </div>
          )}

        </div>

        {/* Wallet Connect Modal */}
        <WalletConnectModal 
          isOpen={isWalletModalOpen}
          onClose={() => setIsWalletModalOpen(false)}
        />

      </div>


    </div>
  );
}
