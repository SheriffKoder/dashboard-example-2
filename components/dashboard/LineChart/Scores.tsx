import React from 'react'
import { TrendingUp } from 'lucide-react';
const Scores = () => {
  return (
    <div className="flex flex-row gap-6 text-foreground">

    <div className="border-b border-b-foreground pb-4">
        <h3 className="text-xs font-light mb-2">Total Balance</h3>
        <div className='flex flex-row gap-2 items-center'>
            <p className="text-3xl">$9,257.00</p> 
            <div className='flex flex-row gap-1 items-center text-tertiary'>
                <TrendingUp className='w-4 h-4 '/>
                <p className="text-sm font-light">1.23%</p>
            </div>
        </div>
    </div>

    <div className="opacity-40">
        <h3 className="text-xs font-light mb-2">Price</h3>
        <div className='flex flex-row gap-2 items-center'>
            <p className="text-3xl">$2,846.00</p> 
            <div className='flex flex-row gap-1 items-center'>
                <TrendingUp className='w-4 h-4'/>
                <p className="text-sm font-light">1.23%</p>
            </div>
        </div>
    </div>
</div>
  )
}

export default Scores
