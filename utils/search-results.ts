import { DashboardData } from '@/constants/types';
import { TabType } from '@/components/dashboard/Tabs';

export interface SearchResult {
  tab: TabType;
  tabLabel: string;
  items: Array<{
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
}

export interface AllDataTabs {
  overview: DashboardData;
  tokens: DashboardData;
  pods: DashboardData;
  composition: DashboardData;
}

/**
 * Search through all data tabs for matching table items
 * @param query - Search query string
 * @param allData - Object containing all tab data
 * @returns Array of search results grouped by tab
 */
export function searchData(query: string, allData: AllDataTabs): SearchResult[] {
  if (!query || query.trim().length === 0) {
    return [];
  }

  const searchTerm = query.toLowerCase().trim();
  const results: SearchResult[] = [];

  // Define tab labels
  const tabLabels: Record<TabType, string> = {
    overview: 'Overview',
    tokens: 'Tokens',
    pods: 'Pods',
    composition: 'Composition',
    settings: 'Settings',
  };

  // Search through each tab (exclude settings as it doesn't have table data)
  const tabs: Array<'overview' | 'tokens' | 'pods' | 'composition'> = ['overview', 'tokens', 'pods', 'composition'];
  
  tabs.forEach((tab) => {
    const data = allData[tab];
    if (!data || !data.table) return;

    // Filter table items that match the search query
    const matchingItems = data.table.filter((item: {
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
    }) => {
      const companyMatch = item.company.toLowerCase().includes(searchTerm);
      const currencyMatch = item.currency.toLowerCase().includes(searchTerm);
      return companyMatch || currencyMatch;
    });

    // Only add to results if there are matching items
    if (matchingItems.length > 0) {
      results.push({
        tab,
        tabLabel: tabLabels[tab],
        items: matchingItems,
      });
    }
  });

  return results;
}

/**
 * Get a random company name from all data tabs
 * @param allData - Object containing all tab data
 * @returns A random company name or empty string if no data
 */
export function getRandomItemName(allData: AllDataTabs): string {
  const allItems: Array<{ company: string }> = [];
  
  // Collect all items from all tabs
  const tabs: Array<'overview' | 'tokens' | 'pods' | 'composition'> = ['overview', 'tokens', 'pods', 'composition'];
  
  tabs.forEach((tab) => {
    const data = allData[tab];
    if (data && data.table) {
      allItems.push(...data.table.map(item => ({ company: item.company })));
    }
  });

  // Return a random item's company name
  if (allItems.length === 0) {
    return '';
  }

  const randomIndex = Math.floor(Math.random() * allItems.length);
  return allItems[randomIndex].company;
}

