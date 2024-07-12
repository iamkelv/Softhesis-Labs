import ProfileInfo from '@/components/molecules/ProfileInfo/ProfileInfo';
import ProfilePhoto from '@/components/molecules/ProfilePhoto/ProfilePhoto';
import React from 'react';


const ProfileCard: React.FC = () => {
  return (
    <div className="bg-white  p-8 rounded-md shadow-md flex flex-col  space-y-8 lg:space-y-0 lg:space-x-8">
      <div className="flex-1">
        <ProfilePhoto />
      </div>
      <div className="flex-1">
        <ProfileInfo />
      </div>
    </div>
  );
};

export default ProfileCard;
