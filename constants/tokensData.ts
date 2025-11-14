// Tokens Dashboard Data
import { DashboardData, generateLineChartData } from './types';

export const tokensData: DashboardData = {
  scores: {
    totalBalance: {
      value: 18750.25,
      change: 1250.50,
      changePercent: 7.15,
    },
    price: {
      value: 4521.33,
      change: 234.67,
      changePercent: 5.47,
    },
  },
  lineChart: {
    totalBalance: generateLineChartData('totalBalance', 15000, 4000),
    price: generateLineChartData('price', 15000, 4000),
  },
  barCharts: {
    salesStatistics: {
      title: 'Token Volume',
      value: '1245.80',
      subTitle: 'Today',
      subTitleExt: '62.5',
      componentColor: '#8771f4',
      initialSplitIndex: 18,
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
            label: 'Token Volume',
            data: [
              85, 120, 95, 110, 140, 125, 100, 115, 130, 145,
              160, 150, 180, 195, 210, 175, 165, 190, 220, 235,
              155, 110, 95, 80, 70, 85, 75, 90, 105, 100
            ],
          },
        ],
      },
    },
    exchangeOffer: {
      title: 'Token Transactions',
      value: '456.75',
      subTitle: 'Today',
      subTitleExt: '15.2',
      componentColor: '#64afe0',
      initialSplitIndex: 12,
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
            label: 'Token Transactions',
            data: [
              55, 65, 48, 72, 58, 62, 50, 68, 75, 60,
              85, 78, 92, 88, 100, 95, 90, 105, 110, 102,
              80, 65, 58, 52, 48, 55, 50, 62, 68, 60
            ],
          },
        ],
      },
    },
  },
  gauge: {
    value: 55,
    changePercent: 12.5,
    titles: ['Low', 'Medium', 'High', 'Very High'],
    percentages: [25, 50, 75, 100],
    colors: ['#8771f4', '#64afe0', '#2eb5b9', 'rgba(255, 255, 255, 0.05)'],
    activeColors: ['#8771f4', '#64afe0', '#2eb5b9', 'rgba(255, 255, 255, 0.05)'],
  },
  table: [
    {
      icon: 'Coins',
      company: 'Cardano',
      price: 0.52,
      balance: 12500.00,
      currency: 'ADA',
      cap: 18456789012,
      volume: 456789012,
      supply: 35500000000,
      expectedSupply: 45000000000,
      color: '#8771f4',
    },
    {
      icon: 'Zap',
      company: 'Solana',
      price: 98.45,
      balance: 250.50,
      currency: 'SOL',
      cap: 42567890123,
      volume: 1234567890,
      supply: 432000000,
      expectedSupply: 500000000,
      color: '#64afe0',
    },
    {
      icon: 'Hexagon',
      company: 'Polygon',
      price: 0.89,
      balance: 8500.00,
      currency: 'MATIC',
      cap: 8765432109,
      volume: 234567890,
      supply: 9850000000,
      expectedSupply: 10000000000,
      color: '#2eb5b9',
    },
  ],
  swap: [
    {
      icon: 'Coins',
      leftSide: {
        firstRow: 'ADA',
        secondRow: 'Cardano',
        thirdRow: 'Balance 12500',
      },
      rightSide: {
        firstRow: 'Pay',
        secondRow: '5000.00',
        thirdRow: '$2600.00',
        thirdRow_ext: null,
      },
    },
    {
      icon: 'Zap',
      leftSide: {
        firstRow: 'SOL',
        secondRow: 'Solana',
        thirdRow: 'Balance 0',
      },
      rightSide: {
        firstRow: 'Receive',
        secondRow: '26.45',
        thirdRow: '$2604.25',
        thirdRow_ext: '+2.5%',
      },
    },
  ],
};

