import React from 'react'
import ChartTabs from './ChartTabs'
import Scores from './Scores'
import ChartContainer from './LineContainer'

const LineChartWrapper = () => {
  return (
    <div className="w-full h-full"
    >

    {/* Background gradient */}
    <div className="w-full h-full absolute z-[-10] opacity-70"
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
    <div className="w-full flex flex-row justify-between py-6 px-6">

        {/* Scores */}
        <Scores/>

        <ChartTabs/>

    </div>

    {/* Line chart */}
    <div className="w-full h-full">
        <ChartContainer/>
    </div>


    </div>
  )
}

export default LineChartWrapper


