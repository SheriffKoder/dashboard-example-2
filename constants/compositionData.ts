// Composition Dashboard Data
import { DashboardData, generateLineChartData } from './types';

export const compositionData: DashboardData = {
  scores: {
    totalBalance: {
      value: 15230.60,
      change: 890.25,
      changePercent: 6.21,
    },
    price: {
      value: 3890.15,
      change: 156.30,
      changePercent: 4.18,
    },
  },
  lineChart: {
    totalBalance: generateLineChartData('totalBalance', 12000, 3500),
    price: generateLineChartData('price', 12000, 3500),
  },
  barCharts: {
    salesStatistics: {
      title: 'Portfolio Mix',
      value: '1024.50',
      subTitle: 'Today',
      subTitleExt: '28.7',
      componentColor: '#64afe0',
      initialSplitIndex: 22,
      data: {
        labels: Array.from({ length: 30 }, (_, i) => {
          const date = new Date();
          date.setDate(date.getDate() - (30 - i));
          const day = date.getDate();
          const month = date.toLocaleString('en-US', { month: 'short' });
          return `${day} ${month}`;
        }),
        datasets: [
          {
            label: 'Portfolio Mix',
            data: [
              65, 90, 55, 70, 95, 80, 60, 75, 85, 100,
              110, 95, 130, 145, 160, 125, 115, 140, 170, 185,
              120, 85, 70, 55, 45, 60, 50, 70, 85, 80
            ],
          },
        ],
      },
    },
    exchangeOffer: {
      title: 'Asset Allocation',
      value: '342.80',
      subTitle: 'Today',
      subTitleExt: '18.3',
      componentColor: '#2eb5b9',
      initialSplitIndex: 14,
      data: {
        labels: Array.from({ length: 30 }, (_, i) => {
          const date = new Date();
          date.setDate(date.getDate() - (30 - i));
          const day = date.getDate();
          const month = date.toLocaleString('en-US', { month: 'short' });
          return `${day} ${month}`;
        }),
        datasets: [
          {
            label: 'Asset Allocation',
            data: [
              50, 60, 45, 65, 55, 60, 50, 65, 70, 60,
              80, 75, 85, 82, 90, 88, 85, 92, 95, 90,
              70, 60, 55, 50, 45, 52, 48, 60, 65, 62
            ],
          },
        ],
      },
    },
  },
  gauge: {
    value: 68,
    changePercent: 15.8,
    titles: ['Conservative', 'Balanced', 'Aggressive', 'Maximum'],
    percentages: [30, 60, 85, 100],
    colors: ['#8771f4', '#64afe0', '#2eb5b9', 'rgba(255, 255, 255, 0.05)'],
    activeColors: ['#8771f4', '#64afe0', '#2eb5b9', 'rgba(255, 255, 255, 0.05)'],
  },
  table: [
    {
      icon: 'TrendingUp',
      company: 'Stocks',
      price: 4250.75,
      balance: 3.58,
      currency: 'STK',
      cap: 152345678901,
      volume: 4567890123,
      supply: 35850000,
      expectedSupply: 50000000,
      color: '#8771f4',
    },
    {
      icon: 'FileText',
      company: 'Bonds',
      price: 1025.50,
      balance: 8.25,
      currency: 'BND',
      cap: 84567890123,
      volume: 2345678901,
      supply: 82500000,
      expectedSupply: 100000000,
      color: '#64afe0',
    },
    {
      icon: 'BarChart',
      company: 'Commodities',
      price: 1850.25,
      balance: 5.50,
      currency: 'CMD',
      cap: 101567890123,
      volume: 3456789012,
      supply: 55000000,
      expectedSupply: 75000000,
      color: '#2eb5b9',
    },
  ],
  swap: [
    {
      icon: 'TrendingUp',
      leftSide: {
        firstRow: 'STK',
        secondRow: 'Stocks',
        thirdRow: 'Balance 3.58',
      },
      rightSide: {
        firstRow: 'Pay',
        secondRow: '1.25',
        thirdRow: '$5313.44',
        thirdRow_ext: null,
      },
    },
    {
      icon: 'FileText',
      leftSide: {
        firstRow: 'BND',
        secondRow: 'Bonds',
        thirdRow: 'Balance 0',
      },
      rightSide: {
        firstRow: 'Receive',
        secondRow: '5.18',
        thirdRow: '$5312.09',
        thirdRow_ext: '-0.03%',
      },
    },
  ],
};

