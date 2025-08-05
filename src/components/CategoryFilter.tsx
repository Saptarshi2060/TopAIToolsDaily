import React from 'react';
import { Filter, Tag } from 'lucide-react';
import { Category } from '../types';
import { categories } from '../data/aiTools';
import { Badge } from './ui/badge';

interface CategoryFilterProps {
  selectedCategory: Category | 'All';
  selectedUsageType: 'All' | 'Free' | 'Freemium' | 'Paid';
  onCategoryChange: (category: Category | 'All') => void;
  onUsageTypeChange: (usageType: 'All' | 'Free' | 'Freemium' | 'Paid') => void;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  selectedCategory,
  selectedUsageType,
  onCategoryChange,
  onUsageTypeChange
}) => {
  const usageTypes = ['All', 'Free', 'Freemium', 'Paid'] as const;

  return (
    <div className="space-y-6">
      {/* Category Filters */}
      <div>
        <div className="flex items-center mb-4">
          <Filter className="w-4 h-4 text-gray-600 mr-2" />
          <h3 className="font-medium text-gray-900">Categories</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {categories.map(category => (
            <Badge
              key={category}
              variant={selectedCategory === category ? "orange" : "outline"}
              className="cursor-pointer hover:bg-orange-50 transition-colors"
              onClick={() => onCategoryChange(category)}
            >
              {category}
            </Badge>
          ))}
        </div>
      </div>

      {/* Usage Type Filters */}
      <div>
        <div className="flex items-center mb-4">
          <Tag className="w-4 h-4 text-gray-600 mr-2" />
          <h3 className="font-medium text-gray-900">Pricing</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {usageTypes.map(type => (
            <Badge
              key={type}
              variant={selectedUsageType === type ? "default" : "outline"}
              className="cursor-pointer hover:bg-gray-50 transition-colors"
              onClick={() => onUsageTypeChange(type)}
            >
              {type}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
};