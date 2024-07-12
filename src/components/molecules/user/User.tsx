import AnalyticCard from '@/components/organisms/AnalyticCard/AnalyticCard';
import Image from 'next/image';
import {
  FaMoneyBills,
  FaMoneyBillTrendUp,
  FaRegSquareCheck,
} from 'react-icons/fa6';
import React, { useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import { useAppSelector } from '@/store/reduxHooks';
import { toCapitalized } from '@/utils/format';

function UserCard() {
    const userProfile = useAppSelector(state=>state.auth.userProfile)
  const data = [
    {
      title: 'Total Income',
      amount: 200,
      percentage: 39,
      icon: <FaMoneyBills />,
    },
    {
      title: 'Withdrawal',
      amount: 10,
      percentage: 40,
      icon: <FaMoneyBillTrendUp />,
    },
    {
      title: 'Total Projects',
      amount: 20,
      percentage: 80,
      icon: <FaRegSquareCheck />,
    },
    { title: 'Ongoing', amount: 4, percentage: 39, icon: <FaEdit /> },
  ];
  return (
    <div className="">
      <div className="flex  gap-2 items-center">
        <div>
          <Image
            className="rounded-full w-14 h-14"
            alt=""
            width={200}
            height={200}
            src={
              'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            }
          />
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-[#EE786C] text-lg font-bold flex items-center gap-1">
                      <span className="font-semibold">Hello,</span> { toCapitalized(userProfile.firstName)} {toCapitalized(userProfile.lastName)}
          </span>
          <span className="text-sm text-gray-400 font-normal">
            Check your activities in this dashboard
          </span>
        </div>
      </div>
      <div className="mt-6">
        <div className="flex gap-3 md:flex-nowrap flex-wrap  justify-between ">
          {data.map((card) => (
            <AnalyticCard
              icon={card.icon}
              amount={card.amount}
              percentage="20"
              title={card.title}
              key={card.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default UserCard;
