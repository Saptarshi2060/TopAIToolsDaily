export interface AITool {
  id: string;
  name: string;
  description: string;
  category: Category;
  officialSite: string;
  usageType: 'Free' | 'Freemium' | 'Paid';
  rating?: number;
  tags?: string[];
  featured?: boolean;
}

export type Category = 
  | 'Text Generation'
  | 'Image Generation'
  | 'Audio & Voice'
  | 'Productivity'
  | 'Code & Development'
  | 'Video & Animation'
  | 'Chatbots'
  | 'Research & Data'
  | 'Marketing & SEO'
  | 'Others';

export interface FilterState {
  searchQuery: string;
  selectedCategory: Category | 'All';
  selectedUsageType: 'All' | 'Free' | 'Freemium' | 'Paid';
}