import React from 'react';
import { Search } from 'lucide-react';
import { Input } from './ui/input';

interface SearchBarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ searchQuery, onSearchChange }) => {
  return (
    <div className="relative">
      <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
        <Search className="w-5 h-5 text-gray-400" />
      </div>
      <Input
        placeholder="Search AI tools by name, description, or tags..."
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
        className="pl-10 h-12 text-base border-gray-200 focus:border-orange-500 focus:ring-orange-500"
      />
    </div>
  );
};