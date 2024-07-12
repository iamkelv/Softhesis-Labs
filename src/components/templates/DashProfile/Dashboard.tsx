import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styles from './dashBoard.module.scss';
import { User } from '@/utils/types';
import useWindowDimensions from '@/utils/windowDimensions';
import { InputField } from '@/components/atoms/input-field/input';
import Header from '@/components/organisms/Header/Header';
import UserCard from '@/components/molecules/user/User';
import RevenueChart from '@/components/organisms/Charts/RevenueChart';
import ViewsChart from '@/components/organisms/Charts/ViewsChart';
import Dropdown from '@/components/atoms/dropDown/dropDown';
import ProjectsTable from '@/components/organisms/ProjectsTable/ProjectsTable';
import Text from '@/components/atoms/text/text';
import ProfileCard from '@/components/organisms/ProfileCard/ProfileCard';
import { useAppSelector } from '@/store/reduxHooks';
import { toCapitalized } from '@/utils/format';

const user: User = {
  title: 'Profile Settings',
  name: 'Amy',
  avatar:
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  placeholder: 'Search ',
};

const DashProfileTemplate: React.FC = () => {
  const [searchKey, setSearchKey] = useState('');
  const userProfile = useAppSelector(state => state.auth.userProfile)
  const { width } = useWindowDimensions();

  const search = (width: string) => {
    return (
      <InputField
        isSearch
        placeholder={user.placeholder}
        shadow={true}
        value={searchKey}
        borderRadius="10px"
        border={true}
        size="md"
        width={width}
        onChange={(e) => setSearchKey(e.target.value)}
      />
    );
  };

  return (
    <div>
      <Header {...{ user, search }} />
      <div className={styles.wrapper}>
        {width < 768 ? (
          <div style={{ padding: '1rem 1rem 0 1rem' }}>{search?.('100%')}</div>
        ) : null}
        <div className="flex mt-3 md:flex-row flex-col gap-8 ">
          <div className={' flex md:w-[70%] w-[90%] md:mx-0 mx-auto  flex-col flex-4'}>
            <div className="w-full ">
              <div className="flex items-center justify-center flex-col">
                <div className="max-w-5xl w-full px-4">
                  <h1 className="text-3xl font-bold mb-2">Profile </h1>
                  <p className="text-gray-500 mb-8">{toCapitalized(userProfile?.firstName)} {toCapitalized( userProfile?.lastName)}</p>
                  <ProfileCard />
                </div>
              </div>
            </div>
          </div>

          <div className={' flex flex-col md:w-[30%] w-[90%] '}>Side</div>
        </div>
      </div>
    </div>
  );
};

export default DashProfileTemplate;
