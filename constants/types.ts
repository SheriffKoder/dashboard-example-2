// Shared types and helper functions for dashboard data

export type ScoreType = 'totalBalance' | 'price';
export type TimePeriod = 'IW' | 'IM' | 'YV' | 'ALL';

// Generate date labels for different time periods
export function generateDateLabels(count: number, startDate = new Date()): string[] {
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
export function generateBalanceData(count: number, baseValue: number): number[] {
  return Array.from({ length: count }, (_, index) => {
    const trend = index * (baseValue * 0.01); // Gradual upward trend
    const volatility = (Math.random() - 0.5) * (baseValue * 0.05); // ±5% volatility
    return Math.round(baseValue + trend + volatility);
  });
}

// Generate realistic price data (more volatile, smaller values)
export function generatePriceData(count: number, baseValue: number): number[] {
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
export function getStartDate(period: TimePeriod): Date {
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
    changePercent: number;
    titles: string[];
    percentages: number[];
    colors: string[];
    activeColors: string[];
  };
  table: Array<{
    icon: string | null;
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
    icon: string | null;
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
export function generateLineChartData(scoreType: ScoreType, baseBalance: number, basePrice: number): Record<TimePeriod, {
  labels: string[];
  datasets: Array<{ label: string; data: number[] }>;
}> {
  const timePeriods: Record<TimePeriod, { days: number; label: string }> = {
    IW: { days: 7, label: 'This Week' },
    IM: { days: 30, label: 'This Month' },
    YV: { days: 365, label: 'This Year' },
    ALL: { days: 730, label: 'All Time' },
  };

  const result: Record<TimePeriod, {
    labels: string[];
    datasets: Array<{ label: string; data: number[] }>;
  }> = {} as any;

  (['IW', 'IM', 'YV', 'ALL'] as TimePeriod[]).forEach((period) => {
    const days = timePeriods[period].days;
    const startDate = getStartDate(period);
    const labels = generateDateLabels(days, startDate);
    
    if (scoreType === 'totalBalance') {
      const balanceData = generateBalanceData(days, baseBalance);
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
      const priceData = generatePriceData(days, basePrice);
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

