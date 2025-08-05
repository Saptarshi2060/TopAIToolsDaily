import { AITool, FilterState } from '../types';

export const filterTools = (tools: AITool[], filters: FilterState): AITool[] => {
  return tools.filter(tool => {
    // Search query filter
    const searchMatch = !filters.searchQuery || 
      tool.name.toLowerCase().includes(filters.searchQuery.toLowerCase()) ||
      tool.description.toLowerCase().includes(filters.searchQuery.toLowerCase()) ||
      tool.tags?.some(tag => tag.toLowerCase().includes(filters.searchQuery.toLowerCase()));

    // Category filter
    const categoryMatch = filters.selectedCategory === 'All' || 
      tool.category === filters.selectedCategory;

    // Usage type filter
    const usageMatch = filters.selectedUsageType === 'All' || 
      tool.usageType === filters.selectedUsageType;

    return searchMatch && categoryMatch && usageMatch;
  });
};

export const getToolStats = (tools: AITool[]) => {
  const totalTools = tools.length;
  const freeTools = tools.filter(tool => tool.usageType === 'Free').length;
  const freemiumTools = tools.filter(tool => tool.usageType === 'Freemium').length;
  const paidTools = tools.filter(tool => tool.usageType === 'Paid').length;

  return { totalTools, freeTools, freemiumTools, paidTools };
};