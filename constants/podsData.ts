// Pods Dashboard Data
import { DashboardData, generateLineChartData } from './types';

export const podsData: DashboardData = {
  scores: {
    totalBalance: {
      value: 9850.40,
      change: -125.80,
      changePercent: -1.26,
    },
    price: {
      value: 2156.22,
      change: -89.45,
      changePercent: -3.98,
    },
  },
  lineChart: {
    totalBalance: generateLineChartData('totalBalance', 8000, 2000),
    price: generateLineChartData('price', 8000, 2000),
  },
  barCharts: {
    salesStatistics: {
      title: 'Pod Performance',
      value: '542.30',
      subTitle: 'Today',
      subTitleExt: '-12.3',
      componentColor: '#2eb5b9',
      initialSplitIndex: 15,
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
            label: 'Pod Performance',
            data: [
              120, 135, 110, 125, 140, 130, 115, 120, 135, 145,
              150, 140, 160, 170, 165, 155, 145, 160, 175, 180,
              130, 115, 105, 95, 85, 100, 90, 110, 125, 120
            ],
          },
        ],
      },
    },
    exchangeOffer: {
      title: 'Pod Activity',
      value: '198.45',
      subTitle: 'Today',
      subTitleExt: '-5.8',
      componentColor: '#8771f4',
      initialSplitIndex: 8,
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
            label: 'Pod Activity',
            data: [
              45, 55, 40, 60, 50, 55, 45, 58, 65, 55,
              70, 65, 75, 72, 80, 78, 75, 82, 85, 80,
              60, 50, 45, 40, 35, 42, 38, 50, 55, 52
            ],
          },
        ],
      },
    },
  },
  gauge: {
    value: 42,
    changePercent: -5.2,
    titles: ['Stable', 'Growing', 'Active', 'Peak'],
    percentages: [20, 45, 70, 100],
    colors: ['#8771f4', '#64afe0', '#2eb5b9', 'rgba(255, 255, 255, 0.05)'],
    activeColors: ['#8771f4', '#64afe0', '#2eb5b9', 'rgba(255, 255, 255, 0.05)'],
  },
  table: [
    {
      icon: 'Box',
      company: 'Pod Alpha',
      price: 125.50,
      balance: 78.50,
      currency: 'POD',
      cap: 9876543210,
      volume: 123456789,
      supply: 78750000,
      expectedSupply: 100000000,
      color: '#8771f4',
    },
    {
      icon: 'Package',
      company: 'Pod Beta',
      price: 89.25,
      balance: 110.75,
      currency: 'POD',
      cap: 8765432109,
      volume: 98765432,
      supply: 98250000,
      expectedSupply: 100000000,
      color: '#64afe0',
    },
    {
      icon: 'Boxes',
      company: 'Pod Gamma',
      price: 156.80,
      balance: 63.20,
      currency: 'POD',
      cap: 7654321098,
      volume: 87654321,
      supply: 48800000,
      expectedSupply: 50000000,
      color: '#2eb5b9',
    },
  ],
  swap: [
    {
      icon: 'Box',
      leftSide: {
        firstRow: 'POD-A',
        secondRow: 'Pod Alpha',
        thirdRow: 'Balance 78.5',
      },
      rightSide: {
        firstRow: 'Pay',
        secondRow: '25.00',
        thirdRow: '$3137.50',
        thirdRow_ext: null,
      },
    },
    {
      icon: 'Package',
      leftSide: {
        firstRow: 'POD-B',
        secondRow: 'Pod Beta',
        thirdRow: 'Balance 0',
      },
      rightSide: {
        firstRow: 'Receive',
        secondRow: '35.15',
        thirdRow: '$3137.14',
        thirdRow_ext: '-0.01%',
      },
    },
  ],
};

