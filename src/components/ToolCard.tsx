import React from 'react';
import { ExternalLink, Star, Tag } from 'lucide-react';
import { AITool } from '../types';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

interface ToolCardProps {
  tool: AITool;
}

export const ToolCard: React.FC<ToolCardProps> = ({ tool }) => {
  const getUsageTypeColor = (type: string) => {
    switch (type) {
      case 'Free': return 'secondary';
      case 'Freemium': return 'outline';
      case 'Paid': return 'orange';
      default: return 'outline';
    }
  };

  return (
    <Card className={`h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${tool.featured ? 'ring-2 ring-orange-200' : ''}`}>
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <CardTitle className="text-lg font-semibold text-black line-clamp-1 font-display">
            {tool.name}
          </CardTitle>
          {tool.rating && (
            <div className="flex items-center bg-orange-50 rounded-lg px-2 py-1 ml-2">
              <Star className="w-4 h-4 text-orange-500 fill-current mr-1" />
              <span className="text-gray-900 font-medium text-sm">{tool.rating}</span>
            </div>
          )}
        </div>
        <div className="flex items-center gap-2 mt-2">
          <Badge variant="outline" className="text-xs">
            {tool.category}
          </Badge>
          <Badge variant={getUsageTypeColor(tool.usageType)} className="text-xs">
            {tool.usageType}
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="pb-3">
        <CardDescription className="text-gray-600 leading-relaxed">
          {tool.description}
        </CardDescription>
        
        {tool.tags && tool.tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-3">
            {tool.tags.slice(0, 3).map((tag, index) => (
              <span key={index} className="text-xs text-gray-500 bg-gray-100 rounded px-2 py-1">
                {tag}
              </span>
            ))}
          </div>
        )}
      </CardContent>
      
      <CardFooter>
        <Button asChild className="w-full">
          <a href={tool.officialSite} target="_blank" rel="noopener noreferrer">
            <span className="mr-2">Visit Tool</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};