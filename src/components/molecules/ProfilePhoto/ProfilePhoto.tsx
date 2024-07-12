import CustomButton from '@/components/atoms/CustomButton/CustomButton';
import { useAppSelector } from '@/store/reduxHooks';
import Image from 'next/image';
import React from 'react';


const ProfilePhoto: React.FC = () => {    
    const image = useAppSelector((state) => state.auth.userProfile.avatar);    
  return (
    <div className="flex flex-col items-center">
          <Image width={500} height={500} src={ image} alt="Profile" className="rounded-full w-64 h-64" />
      <div className="mt-4 flex space-x-4">
        <CustomButton  classNames="bg-purple-600 text-white" label='Change Profile'/>
        
      </div>
      <p className="mt-2 text-gray-500">Recommendable Image Ratio: 256×256px</p>
    </div>
  );
};

export default ProfilePhoto;
