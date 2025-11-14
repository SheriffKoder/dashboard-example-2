"use client"
import React from 'react'
import { TrendingUp, TrendingDown } from 'lucide-react';
import { ScoreType } from '@/constants/types';

interface ScoresProps {
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
  selectedDataset: ScoreType;
  onDatasetSelect: (dataset: ScoreType) => void;
}

const Scores = ({ scoresData, selectedDataset, onDatasetSelect }: ScoresProps) => {
  // Convert scores data to array for mapping
  const scoresArray = [
    { key: 'totalBalance' as ScoreType, label: 'Total Balance', data: scoresData.totalBalance },
    { key: 'price' as ScoreType, label: 'Price', data: scoresData.price },
  ];

  return (
    <div className="flex flex-row gap-6 text-foreground">
      {scoresArray.map((score) => (
        <div 
          key={score.key}
          className={`border-b pb-4 cursor-pointer transition-all duration-300 ${
            selectedDataset === score.key 
              ? 'border-b-foreground opacity-100' 
              : 'border-b-transparent opacity-40 hover:opacity-70'
          }`}
          onClick={() => onDatasetSelect(score.key)}
        >
          <h3 className="text-xs font-light mb-2">{score.label}</h3>
          <div className='flex flex-row gap-2 items-center'>
            <p className="text-sm 2xl:text-3xl">${score.data.value.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p> 
            <div className={`flex flex-row gap-1 items-center ${score.data.changePercent >= 0 ? 'text-tertiary' : 'text-red-500'}`}>
              {score.data.changePercent >= 0 ? (
                <TrendingUp className='w-4 h-4'/>
              ) : (
                <TrendingDown className='w-4 h-4'/>
              )}
              <p className="text-sm font-light">{score.data.changePercent >= 0 ? '+' : ''}{score.data.changePercent.toFixed(2)}%</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Scores
