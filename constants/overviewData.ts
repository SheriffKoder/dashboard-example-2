// Overview Dashboard Data
import { DashboardData, generateLineChartData } from './types';

export const overviewData: DashboardData = {
  scores: {
    totalBalance: {
      value: 12450.75,
      change: 245.30,
      changePercent: 2.01,
    },
    price: {
      value: 3247.89,
      change: -52.15,
      changePercent: -1.58,
    },
  },
  lineChart: {
    totalBalance: generateLineChartData('totalBalance', 9257, 2846),
    price: generateLineChartData('price', 9257, 2846),
  },
  barCharts: {
    salesStatistics: {
      title: 'Trading Volume',
      value: '862.56',
      subTitle: 'Today',
      subTitleExt: '40.0',
      componentColor: '#8676da',
      initialSplitIndex: 20,
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
            label: 'Trading Volume',
            data: [
              42, 78, 35, 40, 65, 55, 25, 30, 45, 52,
              60, 48, 80, 95, 110, 75, 65, 90, 120, 135,
              85, 30, 25, 20, 15, 22, 18, 25, 30, 28
            ],
          },
        ],
      },
    },
    exchangeOffer: {
      title: 'Exchange Activity',
      value: '291.20',
      subTitle: 'Today',
      subTitleExt: '8.5',
      componentColor: '#41979d',
      initialSplitIndex: 10,
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
            label: 'Exchange Activity',
            data: [
              35, 45, 28, 52, 38, 42, 30, 48, 55, 40,
              65, 58, 72, 68, 80, 75, 70, 85, 90, 82,
              60, 45, 38, 32, 28, 35, 30, 42, 48, 40
            ],
          },
        ],
      },
    },
  },
  gauge: {
    value: 30,
    changePercent: 8.3,
    titles: ['Level 1', 'Level 2', 'Level 3', 'Level 4'],
    percentages: [15, 40, 70, 100],
    colors: ['#8771f4', '#64afe0', '#2eb5b9', 'rgba(255, 255, 255, 0.05)'],
    activeColors: ['#8771f4', '#64afe0', '#2eb5b9', 'rgba(255, 255, 255, 0.05)'],
  },
  table: [
    {
      icon: 'Bitcoin',
      company: 'Bitcoin',
      price: 31073.31,
      balance: 5.31,
      currency: 'BTC',
      cap: 587831951441,
      volume: 24981060,
      supply: 19216200,
      expectedSupply: 21000000,
      color: '#8771f4',
    },
    {
      icon: 'Pyramid',
      company: 'Ethereum',
      price: 2846.00,
      balance: 3.25,
      currency: 'ETH',
      cap: 342156789123,
      volume: 21137820,
      supply: 120000000,
      expectedSupply: 120000000,
      color: '#64afe0',
    },
    {
      icon: 'Grid2X2',
      company: 'Binance Coin',
      price: 312.50,
      balance: 12.45,
      currency: 'BNB',
      cap: 46875000000,
      volume: 32670000,
      supply: 150000000,
      expectedSupply: 200000000,
      color: '#2eb5b9',
    },
  ],
  swap: [
    {
      icon: 'Grid2X2',
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
      },
    },
    {
      icon: 'Pyramid',
      leftSide: {
        firstRow: 'ETH',
        secondRow: 'Ethereum',
        thirdRow: 'Balance 0',
      },
      rightSide: {
        firstRow: 'Receive',
        secondRow: '32.45679',
        thirdRow: '$800.25',
        thirdRow_ext: '+40%',
      },
    },
  ],
};

