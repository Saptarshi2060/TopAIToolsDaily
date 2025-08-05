import React from 'react';
import { Bot, Sparkles, TrendingUp } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="text-center mb-20 relative">
      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="flex items-center justify-center mb-8">
          <div className="flex items-center bg-orange-50 border border-orange-200 rounded-full px-6 py-3 shadow-sm">
            <Bot className="w-5 h-5 text-orange-500 mr-2" />
            <span className="text-gray-900 font-medium">TopAIToolsDaily</span>
          </div>
        </div>

        <h1 className="text-6xl md:text-8xl font-display font-bold text-black mb-6 leading-tight">
          <span className="italic">Discover</span> the Best
          <span className="text-orange-500 block">AI Tools</span>
        </h1>

        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed font-light">
          Explore our curated collection of <span className="font-medium italic">cutting-edge</span> AI tools and platforms. 
          From text generation to image creation, find the perfect solution for your needs.
        </p>

        <div className="flex items-center justify-center gap-8 text-gray-500">
          <div className="flex items-center">
            <TrendingUp className="w-5 h-5 mr-2 text-orange-500" />
            <span className="font-medium">200+ AI Tools</span>
          </div>
          <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
          <div className="flex items-center">
            <Sparkles className="w-5 h-5 mr-2 text-orange-500" />
            <span className="font-medium">Curated Selection</span>
          </div>
          <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
          <div className="flex items-center">
            <Bot className="w-5 h-5 mr-2 text-orange-500" />
            <span className="font-medium">All Categories</span>
          </div>
        </div>
      </div>
    </div>
  );
};