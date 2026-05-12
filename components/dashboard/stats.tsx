import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Eye, MessageSquare, MousePointer2, TrendingUp, TrendingDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StatCardProps {
  label: string;
  value: string;
  change: string;
  trend: 'up' | 'down';
  icon: React.ReactNode;
}

const StatCard: React.FC<StatCardProps> = ({ label, value, change, trend, icon }) => (
  <Card className="border-slate-200 shadow-sm">
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
      <CardTitle className="text-sm font-medium text-slate-500 uppercase tracking-wider">{label}</CardTitle>
      <div className="rounded-md bg-slate-50 p-2 text-slate-600">
        {icon}
      </div>
    </CardHeader>
    <CardContent>
      <div className="text-3xl font-bold text-slate-900">{value}</div>
      <div className={cn(
        "flex items-center text-xs mt-1 font-semibold",
        trend === 'up' ? "text-emerald-600" : "text-red-600"
      )}>
        {trend === 'up' ? <TrendingUp className="mr-1 h-3 w-3" /> : <TrendingDown className="mr-1 h-3 w-3" />}
        {change}
        <span className="text-slate-400 font-normal ml-1">since last month</span>
      </div>
    </CardContent>
  </Card>
);

export const DashboardStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <StatCard
        label="Total Views"
        value="12,482"
        change="+14.2%"
        trend="up"
        icon={<Eye className="h-5 w-5" />}
      />
      <StatCard
        label="Enquiries"
        value="48"
        change="+5.1%"
        trend="up"
        icon={<MessageSquare className="h-5 w-5" />}
      />
      <StatCard
        label="Click-thru Rate"
        value="3.2%"
        change="-1.2%"
        trend="down"
        icon={<MousePointer2 className="h-5 w-5" />}
      />
    </div>
  );
};
