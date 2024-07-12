import { formatMoney } from '@/utils/format';
import React from 'react';

interface CardProps {
  icon: React.ReactNode;
  title: string;
  amount: number;
  percentage: string;
}

const AnalyticCard: React.FC<CardProps> = ({ icon, title, amount, percentage }) => {
  return (
    <div className="bg-white flex-wrap p-4 rounded-lg shadow-md flex items-center space-x-4 md:w-[200px] w-full  mx-4 my-2">
      <div className="bg-indigo-900 text-white p-2 rounded-full">
        {icon}
      </div>
      <div className='flex flex-col gap-1'>
        <div className="text-[#BABEC6] text-sm">{title}</div>
        <div className="text-xl font-bold text-[#0F123F] ">{formatMoney(amount)}K</div>
        <div className="text-[#BABEC6] text-sm">{percentage}%</div>
      </div>
    </div>
  );
};

export default AnalyticCard;
