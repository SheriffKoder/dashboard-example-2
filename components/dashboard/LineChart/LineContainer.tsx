"use client";
import React, { useEffect, useState } from 'react'
import { LineChart } from './LineChart';

function generateRandomData(count, min, max) {
  const middleRange = (max - min) / 2 + min;
  const variance = (max - min) / 4;
  
  return Array.from({ length: count }, (_, index) => {
    // Calculate position factor (0 to 1) based on index
    const position = index / (count - 1);
    
    // Start lower, end higher, middle stays in the middle range
    let baseLine;
    if (position < 0.3) {
      // First 30% - gradually increase from min+variance to middleRange
      baseLine = min + variance + (middleRange - min - variance) * (position / 0.3);
    } else if (position > 0.7) {
      // Last 30% - gradually increase from middleRange to max-variance
      baseLine = middleRange + (max - variance - middleRange) * ((position - 0.7) / 0.3);
    } else {
      // Middle 40% - stay around the middle range
      baseLine = middleRange;
    }
    
    // Add some randomness around the baseline
    const randomFactor = (Math.random() * 2 - 1) * variance;
    
    // Ensure the value stays within min-max range
    return Math.max(min, Math.min(max, Math.round(baseLine + randomFactor)));
  });
}

function generateDateLabels(count, startDate = new Date()) {
  const labels = [];
  const date = new Date(startDate);
  
  for (let i = 0; i < count; i++) {
    // Format date as 'DD MMM'
    const day = date.getDate();
    const month = date.toLocaleString('en-US', { month: 'short' });
    labels.push(`${day} ${month}`);
    
    // Move to next day
    date.setDate(date.getDate() + 1);
  }
  
  return labels;
}


const testData = generateRandomData(100, 10, 20);
const testLabels = generateDateLabels(50);

const data: any[] = [
    {
      company: "Company 3",
      location: {
        name: "Berlin",
        left: 50.11,
        top: 42.88
      },
      revenue: 15000,
      increase: 15,
      totalProfit: 5000,
      datasets: {
        labels: testLabels,
        datasets: [
          {
            label: 'Revenue',
            data: testData,
            profit: 2000,
          },
          {
            label: 'Profit',
            data: testData.slice(0, 30),
            profit: 3000,
          },
        ]
      }
    },
  ];

const ChartContainer = () => {

    const [selectedCompany, setSelectedCompany] = useState(data[0]);
    const [primaryColor, setPrimaryColor] = useState<string>("#000000");
    const [secondaryColor, setSecondaryColor] = useState<string>("#000000");
    const [tertiaryColor, setTertiaryColor] = useState<string>("#000000");
    const [boxesPerLine, setBoxesPerLine] = useState(70);
  
    // Function to update colors from CSS variables
    const updateColors = () => {
    //   const colorPrimary = getComputedStyle(document.documentElement)
    //     .getPropertyValue('--color-primary').trim();
    //   const colorSecondary = getComputedStyle(document.documentElement)
    //     .getPropertyValue('--color-secondary').trim();
    //   const colorTertiary = getComputedStyle(document.documentElement)
    //     .getPropertyValue('--color-tertiary').trim();
      const colorPrimary = "#ffffff36";
      const colorSecondary = "#ffffff";
      const colorTertiary = "#8b5cf6";
      if (colorPrimary) setPrimaryColor(colorPrimary);
      if (colorSecondary) setSecondaryColor(colorSecondary);
      if (colorTertiary) setTertiaryColor(colorTertiary);
    };
  
    // Initial color setup
    useEffect(() => {
      updateColors();
    }, []);
  
    // Listen for theme changes
    useEffect(() => {
      // Create a MutationObserver to watch for changes to the document's class or style
      const observer = new MutationObserver(updateColors);
      
      // Start observing the document with the configured parameters
      observer.observe(document.documentElement, { 
        attributes: true, 
        attributeFilter: ['class', 'style'] 
      });
      
      // Clean up the observer on component unmount
      return () => observer.disconnect();
    }, []);
  return (
        <div className='relative h-[250px] w-full px-[2rem] py-[2rem] overflow-hidden'>

          {/* Grid and gradient mask overlay */}
          <div className='absolute top-0 left-0 w-full h-full z-[-1]'>
            <div className='w-full h-full grid' 
                 style={{ 
                   gridTemplateColumns: `repeat(${boxesPerLine}, 1fr)`,
                   gridTemplateRows: `repeat(${boxesPerLine}, 1fr)`,
                   gap: '0px',
                 }}>
              {Array.from({ length: boxesPerLine * boxesPerLine }, (_, i) => (
                <div key={i} className='border-r border-b aspect-square border-[rgba(255,255,255,0.015)]'></div>
              ))}
            </div>
            
            {/* Gradient mask overlay */}
            <div className='absolute inset-0 pointer-events-none'>
            <div className='absolute inset-0 pointer-events-none'
            style={{
              background: 'linear-gradient(200deg, #1a162f, rgba(26, 22, 47, 0) 40%)',
            }}
            ></div>
            <div className='absolute inset-0 pointer-events-none'
            style={{
              background: 'linear-gradient(120deg, #1c1638 0%, rgba(26, 22, 47, 0) 20%)',
            }}
            ></div>
            <div className='absolute inset-0 pointer-events-none'
            style={{
              background: 'linear-gradient(0deg, #2b1f69 0%, rgba(26, 22, 47, 0) 20%)',
            }}
            ></div>
            <div className='absolute inset-0 pointer-events-none'
            style={{
              background: 'linear-gradient(300deg, #1c273b 0%, rgba(26, 22, 47, 0) 10%)',
            }}
            ></div>
            </div>
          </div>
              
          {/* Chart, x-axis and y-axis */}
          <div className='flex flex-row h-full w-full gap-[1rem]'>

              {/* prices */}
              <div className='flex flex-col h-[80%] justify-between'>
                {["$60", "$70", "$80", "$90", "$100"].map((price, index)=>(
                  <div key={index} className=''>
                    <p className='text-[10px] text-white/20'>{price}</p>
                  </div>
                ))

                }
              </div>

              {/* chart and labels*/}
              <div className='flex flex-col gap-[1rem] w-full'>
                {/* Chart */}
                <div className='h-[140px] relative'>
                <LineChart
                        height={"100%"}
                        showNeonShadow={false}
                        shadowOpacity={0.7}
                        showGrid={false}
                        showXAxisLine={false}
                        showYAxisLine={false}
                        showLabel={false}
                        lineColor="#ff0000"
                        shadowColor="#ff0000"
                        labelColor="#ffffff"
                        tickColor="rgba(255, 255, 255, 0.2)"
                        chartTitle="Sales"
                        chartSubtitle="4 months"
                        showTooltip={true}
                        lineTension={0.2}
                        lineWidth={1.5}
                        showTicks={false}
                        showPoints={false}
                        pointRadius={2}
                        pointColor="#ff0000"
                        pointBorderColor="#ffffff"
                        pointBorderWidth={1}
                        showTitle={false}
                        showSubtitle={false}
                        titleColor="#ffffff"
                        subtitleColor="#ffffff"
                        fill={false}
                        fillColor="#ff0000"
                        fillOpacity={0.5}
                        gradientToTransparent={true}
                        gradientStopPercentage={1}
                        showXGrid={false}
                        showYGrid={false}
                        gridColor="rgba(255, 255, 255, 0.05)"
                        tickFontSize={10}
                        titleFontSize={16}
                        subtitleFontSize={14}
                        tooltipBackgroundColor="rgba(255, 255, 255,0.1)"
                        tooltipPadding={10}
                        tooltipTitleColor="#ffffff"
                        tooltipBodyFont={9}
                        tooltipTitleFont={12}
                        tooltipUseLineColors={true}
                        datasets={
                          selectedCompany?.datasets?.datasets.map((dataset: any, index: any) => {
                            const colors = [primaryColor, secondaryColor, tertiaryColor];
                            const color = colors[index % colors.length];
                            
                            return {
                              data: dataset.data,
                              label: dataset.label,
                              lineColor: color,
                              fillColor: color,
                              // fill: index === 0, // Only fill the first dataset
                              shadowColor: color,
                              pointColor: color,
                              pointBorderColor: color,
                              pointRadius: 2,
                            };
                          }) || []
                        }
                        labels={selectedCompany?.datasets?.labels || ['Jan', 'Feb', 'Mar', 'Apr', 'May']}
                        key={`chart-${primaryColor}-${secondaryColor}-${tertiaryColor}-${selectedCompany?.company}`}
                        />
                  <div 
                    className="border-l-[2px] border-white/10 border-dashed h-[100%] absolute top-0 w-1"
                    style={{ 
                      left: `${(data[0].datasets.datasets[1].data.length / data[0].datasets.datasets[0].data.length) * 100 +data[0].datasets.datasets[1].data.length - 0.5}%` 
                    }}
                  ></div>
                </div>
                <div className='flex flex-row gap-[1rem] justify-between h-[30px]'>
                  {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"].map((label, index)=>(
                    <div key={index} className=''>
                      <p className='text-[10px] text-white/20'>{label}</p>
                    </div>
                  ))}
                </div>
              </div>


          </div>



        </div>
  )
}

export default ChartContainer
