"use client"
import React, { useState } from 'react'
import ChartTabs from './ChartTabs'
import Scores from './Scores'
import ChartContainer from './LineContainer'
import { ScoreType, TimePeriod } from '@/constants/types'

interface LineChartWrapperProps {
  scoresData: {
    totalBalance: {
      value: number;
      change: number;
      changePercent: number;
    };
    price: {
      value: number;
      change: number;
      changePercent: number;
    };
  };
  lineChartData: {
    totalBalance: Record<TimePeriod, {
      labels: string[];
      datasets: Array<{
        label: string;
        data: number[];
      }>;
    }>;
    price: Record<TimePeriod, {
      labels: string[];
      datasets: Array<{
        label: string;
        data: number[];
      }>;
    }>;
  };
}

const LineChartWrapper = ({ scoresData, lineChartData }: LineChartWrapperProps) => {
  const [selectedDataset, setSelectedDataset] = useState<ScoreType>('totalBalance');
  const [selectedTimePeriod, setSelectedTimePeriod] = useState<TimePeriod>('ALL');
  const [isToggleSelected, setIsToggleSelected] = useState(false);
  return (
    <div className="w-full h-full"
    >

    {/* Background gradient */}
    <div className="hidden md:block w-full h-full absolute z-[-10] opacity-70"
        style={{
            // x-axis, y-axis, intensity, spread from 100%
            background: `
            radial-gradient(at 4% 100%, var(--color-primary) 100px, transparent 60%), 
            radial-gradient(at 50% 200%, var(--color-secondary) 200px, transparent 60%), 
            radial-gradient(at 80% 200%, var(--color-tertiary) 0px, transparent 50%), 
            #0000;`,
            // backgroundBlendMode: 'overlay',
        
    }}
    />

    {/* Header */}
    <div className="w-full flex flex-col gap-4 md:gap-0 md:flex-row justify-between py-3 px-3 md:py-6 md:px-6">

        {/* Scores */}
        <Scores 
          scoresData={scoresData}
          selectedDataset={selectedDataset}
          onDatasetSelect={setSelectedDataset}
        />

        <ChartTabs 
          activeTab={selectedTimePeriod}
          onTabChange={setSelectedTimePeriod}
          onToggleChange={setIsToggleSelected}
        />

    </div>

    {/* Line chart */}
    <div className="w-full h-full">
        <ChartContainer 
          selectedDataset={selectedDataset}
          selectedTimePeriod={selectedTimePeriod}
          isToggleSelected={isToggleSelected}
          lineChartData={lineChartData}
        />
    </div>


    </div>
  )
}

export default LineChartWrapper


