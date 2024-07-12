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

const user: User = {
  title: 'Dashboard',
  name: 'Amy',
  avatar:
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  placeholder: 'Search ',
};

const DashPage: React.FC = () => {
  const [searchKey, setSearchKey] = useState('');

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
        <div className='flex mt-3 md:flex-row flex-col   '>
          <div className={' flex flex-col  flex-4'}>
            <UserCard />
            <div>
              <div className='mt-[2rem] bg-white  rounded-xl'>
                <div className='pb-8 pt-4 px-6 flex w-full justify-between'>
                  <span className='flex items-start flex-col'>
                    <span className='font-bold text-xl text-[#0F123F]'>Accounting </span>
                    <span className='text-[#BABEC6] text-sm'>Overall Earning</span>
                  </span>
                  <span className='flex  items-center text-[#BABEC6] text-lg gap-2'>
                    Sort by: <span className='w-[150px]' ><Dropdown width='100%' options={['Monthly','Weekly']} selected={0} setValue={()=>{}} /></span>
                  </span>
                </div>
                <div className="md:w-full w-full md:h-[400px] h-[300px]  ">
                
                <ViewsChart />
              </div> 
              </div>
              
            
            </div>
            <div className="bg-white rounded-xl  p-4 mt-8  overflow-x-scroll" >
            
              
              <span className='flex flex-col'>
                  <span className='font-bold text-xl text-[#0F123F]'>Projects</span>
                <span className='text-[#BABEC6] text-lg'>Overal Projects</span>
              
              </span>
              <ProjectsTable/>
            </div>
          </div>
          
          <div>
            Side
        </div>
        </div>
        
      </div>
    </div>
  );
};

export default DashPage;
