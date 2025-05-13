'use client'

import { ArrowUpDown, Grid2X2, Pyramid } from 'lucide-react'
import React, { useState } from 'react'

const SwapContainer = () => {

    const swapItems = [
        {
            icon: <Grid2X2 className='w-4 h-4 stroke-2 rotate-45 opacity-50'/>,
            leftSide: {
                firstRow: 'BMEI',
                secondRow: 'Binance',
                thirdRow: 'Balance 0.004',
            },
            rightSide: {
                firstRow: 'Pay',
                secondRow: '0.00256',
                thirdRow: '$480.44',
                thirdRow_ext: null,
            }
        },
        {
            icon: <Pyramid className='w-4 h-4 stroke-2 opacity-50'/>,
            leftSide: {
                firstRow: 'ETH',
                secondRow: 'Ethereum',
                thirdRow: 'Balance 0',
            },
            rightSide: {
                firstRow: 'Receive',
                secondRow: '32.45679',
                thirdRow: '$800.25',
                thirdRow_ext: "+40%"
            }
        }
    ]

    const [swapItemsOrder, setSwapItemsOrder] = useState([0, 1]);

    const handleSwap = () => {
        setSwapItemsOrder([swapItemsOrder[1], swapItemsOrder[0]]);
    }

    return (
        <div className="rounded-xl h-full flex flex-col gap-[2px] text-foreground relative ">

            {/* Card1 */}
            <div className='h-1/2 w-full bg-white/5 rounded-t-xl px-[1.5rem] py-[1.5rem]
            flex flex-col gap-[1rem] justify-center relative overflow-hidden border border-white/4'>
                {/* Inner shadow at bottom */}
                <div className='absolute bottom-0 left-0 right-0 h-[5px] bg-gradient-to-t from-white/2 to-transparent'></div>
                
                <h3 className='text-sm'>Swap</h3>

                {/* Information row */}
                <div className='h-full
                flex flex-row items-center justify-between'>

                    <div className='flex flex-row flex-1 gap-[0.5rem]'>
                        {/* icon */}
                        <div className='w-[35px] h-[35px] bg-foreground/10 hover:bg-foreground/20 transition-all duration-300
                        rounded-full flex items-center justify-center border border-white/5 cursor-pointer hover:border-white/0'>
                            {swapItems[swapItemsOrder[0]].icon}                        
                        </div>
                        {/* Information */}
                        <div className='flex flex-col flex-1 gap-[2px] items-start'>
                            <span className='text-sm text-foreground/30'>{swapItems[swapItemsOrder[0]].leftSide.firstRow}</span>
                            <span className='text-lg font-medium'>{swapItems[swapItemsOrder[0]].leftSide.secondRow}</span>
                            <span className='text-sm text-foreground/30'>{swapItems[swapItemsOrder[0]].leftSide.thirdRow}</span>
                        </div>
                    </div>

                    <div className='flex flex-col flex-1 gap-[2px] items-end'>
                        <span className='text-sm text-foreground/30'>{swapItems[swapItemsOrder[0]].rightSide.firstRow}</span>
                        <span className='text-lg font-medium'>{swapItems[swapItemsOrder[0]].rightSide.secondRow}</span>
                        <div className='flex flex-row items-center gap-1'>
                            <span className='text-sm text-foreground/30'>{swapItems[swapItemsOrder[0]].rightSide.thirdRow}</span>
                            {swapItems[swapItemsOrder[0]].rightSide.thirdRow_ext && (
                                <span className='text-sm text-tertiary'>{swapItems[swapItemsOrder[0]].rightSide.thirdRow_ext}</span>
                            )}
                        </div>                    </div>

                </div> 
            </div>

            {/* Swap Button */}
            <div 
                onClick={handleSwap}
                className='z-10 w-[40px] h-[40px] bg-background rounded-full top-1/2 -translate-y-1/2 absolute left-1/2 -translate-x-1/2
                flex items-center justify-center hover:bg-background/70 transition-all duration-300 cursor-pointer'>
                <ArrowUpDown className='w-4 h-4 stroke-2'/>
            </div>

            {/* Card2 */}
            <div className='h-1/2 w-full bg-white/5 rounded-b-xl px-[1.5rem] py-[1.5rem]
            flex flex-col relative overflow-hidden border border-white/4'>
                {/* Inner shadow at top */}
                <div className='absolute top-0 left-0 right-0 h-[5px] bg-gradient-to-b from-white/2 to-transparent'></div>
                
                {/* Information row */}
                <div className='flex-1
                    flex flex-row items-start justify-between'>

                        <div className='flex flex-row flex-1 gap-[0.5rem]'>
                            {/* icon */}
                            <div className='w-[35px] h-[35px] bg-foreground/10 hover:bg-foreground/20 transition-all duration-300
                            rounded-full flex items-center justify-center border border-white/5 cursor-pointer hover:border-white/0'>
                                {swapItems[swapItemsOrder[1]].icon}                        
                            </div>
                            {/* Information */}
                            <div className='flex flex-col flex-1 gap-[2px] items-start'>
                                <span className='text-sm text-foreground/30'>{swapItems[swapItemsOrder[1]].leftSide.firstRow}</span>
                                <span className='text-lg font-medium'>{swapItems[swapItemsOrder[1]].leftSide.secondRow}</span>
                                <span className='text-sm text-foreground/30'>{swapItems[swapItemsOrder[1]].leftSide.thirdRow}</span>
                            </div>
                        </div>

                        <div className='flex flex-col flex-1 gap-[2px] items-end'>
                            <span className='text-sm text-foreground/30'>{swapItems[swapItemsOrder[1]].rightSide.firstRow}</span>
                            <span className='text-lg font-medium'>{swapItems[swapItemsOrder[1]].rightSide.secondRow}</span>
                            <div className='flex flex-row items-center gap-1'>
                                <span className='text-sm text-foreground/30'>{swapItems[swapItemsOrder[1]].rightSide.thirdRow}</span>
                                {swapItems[swapItemsOrder[1]].rightSide.thirdRow_ext && (
                                    <span className='text-sm text-tertiary'>{swapItems[swapItemsOrder[1]].rightSide.thirdRow_ext}</span>
                                )}
                            </div>
                        </div>

                </div> 

                <button className='w-full bg-foreground/10 rounded-md py-2 mt-auto
                hover:bg-foreground/15 transition-all duration-300 cursor-pointer'
                onClick={handleSwap}
                >Swap</button>
            </div>

        </div> 
    )
}

export default SwapContainer
