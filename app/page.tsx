import BarChartContainer from "@/components/dashboard/BarCharts/BarChartContainer";
import GaugeContainer from "@/components/dashboard/Gauge/GaugeContainer";
import Header from "@/components/dashboard/Header/Header";
import LineChartWrapper from "@/components/dashboard/LineChart/LineChartWrapper";
import SwapContainer from "@/components/dashboard/Swap/SwapContainer";
import MainTable from "@/components/dashboard/Table/MainTable";
import Tabs from "@/components/dashboard/Tabs";
import { ThemeButtons } from "@/components/ui/ThemeToggler_Button";

export default function Home() {



  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-background relative">
      
      <div className="absolute inset-0 top-[-200vh] z-0"
      style={{
        background: `radial-gradient(circle, #130e33, var(--color-background))`,
      }}></div>

      <div className="w-full h-full z-1">
        {/* Header - logo, search, buttons */}
        <Header />

        <div className="mx-auto border-white px-[100px] py-[50px] flex flex-col gap-[25px] w-[1500px]">

          {/* Tabs - buttons for Overview, tokens, pods etc.*/}
          <Tabs />

          {/* Row 1 : Line chart wrapper - Swap */}
          <div className="grid grid-cols-3 gap-4 w-full h-[350px]">
            <div className="col-span-2 bg-white/5 rounded-xl w-full h-full overflow-hidden relative backdrop-blur-xl border border-white/4">
              {/* Line chart wrapper */}
              <LineChartWrapper />
            </div>
            <div className="h-full ">
              {/* Swap */}
              <SwapContainer />
            </div>
          </div>
          

          {/* Row 2 : Bar charts */}
          <div className="grid grid-cols-3 gap-4 w-full h-[350px]">
            <div className="bg-white/5 rounded-xl w-full h-full overflow-hidden relative backdrop-blur-xl border border-white/4">
              <BarChartContainer title="Sales Statistics" value="862.56" subTitle="Today" subTitleExt="40.0" componentColor="#8676da" initialSplitIndex={20} />
            </div>
            <div className="bg-white/5 rounded-xl w-full h-full overflow-hidden relative backdrop-blur-xl border border-white/4">
              <BarChartContainer title="Exchange Offer" value="291.20" subTitle="Today" subTitleExt="8.5" componentColor="#41979d" initialSplitIndex={10} />
            </div>
            <div className="bg-white/5 rounded-xl w-full h-full overflow-hidden relative backdrop-blur-xl border border-white/4">
              <GaugeContainer value={30} />
            </div>
          </div>

          {/* Table */}
          <MainTable />
        

        </div>



      </div>


    </div>
  );
}
