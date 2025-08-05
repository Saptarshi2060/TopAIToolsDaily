import React, { useState, useMemo } from 'react';
import { aiTools } from './data/aiTools';
import { filterTools, getToolStats } from './utils/search';
import { Hero } from './components/Hero';
import { SearchBar } from './components/SearchBar';
import { CategoryFilter } from './components/CategoryFilter';
import { StatsBar } from './components/StatsBar';
import { ToolCard } from './components/ToolCard';
import { FilterState } from './types';

const initialFilters: FilterState = {
  searchQuery: '',
  selectedCategory: 'All',
  selectedUsageType: 'All',
};

const PAGE_SIZE = 9;

const App: React.FC = () => {
  React.useEffect(() => {
    document.title = 'TopAIToolsDaily';
  }, []);
  const [filters, setFilters] = useState<FilterState>(initialFilters);
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const filteredTools = useMemo(() => filterTools(aiTools, filters), [filters]);
  const stats = useMemo(() => getToolStats(filteredTools), [filteredTools]);

  // Reset visibleCount when filters change
  React.useEffect(() => {
    setVisibleCount(PAGE_SIZE);
  }, [filters]);

  const isAllFilters = filters.selectedCategory === 'All' && filters.selectedUsageType === 'All' && !filters.searchQuery;
  const toolsToShow = isAllFilters ? filteredTools.slice(0, visibleCount) : filteredTools;
  const canLoadMore = isAllFilters && visibleCount < filteredTools.length;

  return (
    <div className="min-h-screen bg-gray-50">
      <Hero />
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8 mb-12">
          <div className="md:w-1/4">
            <CategoryFilter
              selectedCategory={filters.selectedCategory}
              selectedUsageType={filters.selectedUsageType}
              onCategoryChange={(category) => setFilters(f => ({ ...f, selectedCategory: category }))}
              onUsageTypeChange={(usageType) => setFilters(f => ({ ...f, selectedUsageType: usageType }))}
            />
          </div>
          <div className="md:w-3/4 flex flex-col gap-6">
            <SearchBar
              searchQuery={filters.searchQuery}
              onSearchChange={query => setFilters(f => ({ ...f, searchQuery: query }))}
            />
            <StatsBar
              totalTools={stats.totalTools}
              freeTools={stats.freeTools}
              freemiumTools={stats.freemiumTools}
              paidTools={stats.paidTools}
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {toolsToShow.length === 0 ? (
                <div className="col-span-full text-center text-gray-500 py-12">
                  No tools found matching your criteria.
                </div>
              ) : (
                toolsToShow.map(tool => (
                  <ToolCard key={tool.id} tool={tool} />
                ))
              )}
            </div>
            {canLoadMore && (
              <div className="flex justify-center mt-6">
                <button
                  className="px-6 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition-colors font-semibold shadow"
                  onClick={() => setVisibleCount(c => c + PAGE_SIZE)}
                >
                  Load More
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;