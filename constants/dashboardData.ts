// Cryptocurrency Portfolio Dashboard Data
// Master data source for all dashboard components

export type ScoreType = 'totalBalance' | 'price';
export type TimePeriod = 'IW' | 'IM' | 'YV' | 'ALL';

// Generate date labels for different time periods
function generateDateLabels(count: number, startDate = new Date()): string[] {
  const labels: string[] = [];
  const date = new Date(startDate);
  
  for (let i = 0; i < count; i++) {
    const day = date.getDate();
    const month = date.toLocaleString('en-US', { month: 'short' });
    labels.push(`${day} ${month}`);
    date.setDate(date.getDate() + 1);
  }
  
  return labels;
}

// Generate realistic portfolio balance data (increasing trend with volatility)
function generateBalanceData(count: number, baseValue: number): number[] {
  return Array.from({ length: count }, (_, index) => {
    const trend = index * (baseValue * 0.01); // Gradual upward trend
    const volatility = (Math.random() - 0.5) * (baseValue * 0.05); // ±5% volatility
    return Math.round(baseValue + trend + volatility);
  });
}

// Generate realistic price data (more volatile, smaller values)
function generatePriceData(count: number, baseValue: number): number[] {
  return Array.from({ length: count }, (_, index) => {
    const trend = index * (baseValue * 0.002); // Smaller trend
    const volatility = (Math.random() - 0.5) * (baseValue * 0.08); // ±8% volatility
    return Math.round(baseValue + trend + volatility);
  });
}

// Time period configurations
const timePeriods: Record<TimePeriod, { days: number; label: string }> = {
  IW: { days: 7, label: 'This Week' },
  IM: { days: 30, label: 'This Month' },
  YV: { days: 365, label: 'This Year' },
  ALL: { days: 730, label: 'All Time' },
};

// Calculate start date based on time period
function getStartDate(period: TimePeriod): Date {
  const days = timePeriods[period].days;
  const date = new Date();
  date.setDate(date.getDate() - days);
  return date;
}

// Master data structure
export interface DashboardData {
  scores: {
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
  lineChart: {
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
  barCharts: {
    salesStatistics: {
      title: string;
      value: string;
      subTitle: string;
      subTitleExt: string;
      componentColor: string;
      initialSplitIndex: number;
      data: {
        labels: string[];
        datasets: Array<{
          label: string;
          data: number[];
        }>;
      };
    };
    exchangeOffer: {
      title: string;
      value: string;
      subTitle: string;
      subTitleExt: string;
      componentColor: string;
      initialSplitIndex: number;
      data: {
        labels: string[];
        datasets: Array<{
          label: string;
          data: number[];
        }>;
      };
    };
  };
  gauge: {
    value: number;
    titles: string[];
    percentages: number[];
    colors: string[];
    activeColors: string[];
  };
  table: Array<{
    icon: any; // Will be set in component
    company: string;
    price: number;
    balance: number;
    currency: string;
    cap: number;
    volume: number;
    supply: number;
    expectedSupply: number;
    color: string;
  }>;
  swap: Array<{
    icon: any; // Will be set in component
    leftSide: {
      firstRow: string;
      secondRow: string;
      thirdRow: string;
    };
    rightSide: {
      firstRow: string;
      secondRow: string;
      thirdRow: string;
      thirdRow_ext: string | null;
    };
  }>;
}

// Generate data for all time periods
function generateLineChartData(scoreType: ScoreType): Record<TimePeriod, {
  labels: string[];
  datasets: Array<{ label: string; data: number[] }>;
}> {
  const result: Record<TimePeriod, {
    labels: string[];
    datasets: Array<{ label: string; data: number[] }>;
  }> = {} as any;

  (['IW', 'IM', 'YV', 'ALL'] as TimePeriod[]).forEach((period) => {
    const days = timePeriods[period].days;
    const startDate = getStartDate(period);
    const labels = generateDateLabels(days, startDate);
    
    if (scoreType === 'totalBalance') {
      const balanceData = generateBalanceData(days, 9257);
      result[period] = {
        labels,
        datasets: [
          {
            label: 'Total Balance',
            data: balanceData,
          },
        ],
      };
    } else {
      const priceData = generatePriceData(days, 2846);
      result[period] = {
        labels,
        datasets: [
          {
            label: 'Price',
            data: priceData,
          },
        ],
      };
    }
  });

  return result;
}

// Export master data
export const dashboardData: DashboardData = {
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
    totalBalance: generateLineChartData('totalBalance'),
    price: generateLineChartData('price'),
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
    titles: ['Level 1', 'Level 2', 'Level 3', 'Level 4'],
    percentages: [15, 40, 70, 100],
    colors: ['#8771f4', '#64afe0', '#2eb5b9', 'rgba(255, 255, 255, 0.05)'],
    activeColors: ['#8771f4', '#64afe0', '#2eb5b9', 'rgba(255, 255, 255, 0.05)'],
  },
  table: [
    {
      icon: null, // Will be set in component
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
      icon: null,
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
      icon: null,
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
      icon: null, // Will be set in component
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
      icon: null,
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

// Helper function to get filtered line chart data
export function getLineChartData(
  scoreType: ScoreType,
  timePeriod: TimePeriod
): {
  labels: string[];
  datasets: Array<{ label: string; data: number[] }>;
} {
  return dashboardData.lineChart[scoreType][timePeriod];
}

// Helper function to get score data
export function getScoreData(scoreType: ScoreType) {
  return dashboardData.scores[scoreType];
}

