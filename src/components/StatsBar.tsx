import React from 'react';
import { TrendingUp, Zap, Gift, DollarSign } from 'lucide-react';
import { Card, CardContent } from './ui/card';

interface StatsBarProps {
  totalTools: number;
  freeTools: number;
  freemiumTools: number;
  paidTools: number;
}

export const StatsBar: React.FC<StatsBarProps> = ({ totalTools, freeTools, freemiumTools, paidTools }) => {
  const stats = [
    { label: 'Total Tools', value: totalTools, icon: TrendingUp, color: 'text-orange-500' },
    { label: 'Free', value: freeTools, icon: Gift, color: 'text-green-500' },
    { label: 'Freemium', value: freemiumTools, icon: Zap, color: 'text-blue-500' },
    { label: 'Paid', value: paidTools, icon: DollarSign, color: 'text-gray-500' }
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {stats.map((stat, index) => (
        <Card key={index} className="hover:shadow-md transition-shadow duration-300">
          <CardContent className="p-4">
            <div className="flex items-center">
              <div className="p-2 rounded-lg bg-gray-100 mr-3">
                <stat.icon className={`w-5 h-5 ${stat.color}`} />
              </div>
              <div>
                <p className="text-2xl font-bold text-black font-display">{stat.value}</p>
                <p className="text-gray-600 text-sm font-medium">{stat.label}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};