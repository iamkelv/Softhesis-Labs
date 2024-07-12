import styles from './header.module.scss';
import { BsBell } from 'react-icons/bs';
import { User } from '@/utils/types';
import useWindowDimensions from '@/utils/windowDimensions';
import Card from '@/components/molecules/Card/Card';
import Image from 'next/image';
import Text from '@/components/atoms/text/text';
import { useAppSelector } from '@/store/reduxHooks';
import { toCapitalized } from '@/utils/format';

interface IHeader {
  user: User;
  search?: (width: string) => React.ReactNode;
}

const Header: React.FC<IHeader> = ({ search, user }) => {
  const { width } = useWindowDimensions();
  const userProfile = useAppSelector((state) => state.auth.userProfile);

  return (
    <div>
      <div
        className={`${styles.header_user}  bg-[#F4F6F9] py-2  flex gap-3 pt-6`}
        id="header_user"
      >
        <div className="items-center flex md:w-[70%] justify-between">
          <h4 className={styles.header_user_title}>{user.title}</h4>
          <div className={styles.header_search}>
            {width > 768 && search
              ? search(width < 1080 ? '12rem' : '25rem')
              : null}
          </div>
        </div>
        <div className={`${styles.header_user_info}  flex md:w-[28%] w-fit  `}>
          <Card className="flex items-center md:p-2 p-1 md:px-2  px-2 gap-2  bg-white  w-[100%]  md:justify-between justify-end ">
            <div className="flex items-center gap-2">
              <Image
                className="rounded-full  md:w-11 w-6 md:h-11 h-6"
                width={50}
                height={50}
                src={`https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
                alt=""
              />
              <span className="flex flex-col gap-1">
                <Text className="font-bold text-lg">
                  {toCapitalized(userProfile.firstName)}{' '}
                  {toCapitalized(userProfile.lastName)}
                </Text>
                <Text className="text-[#BABEC6]">Frontend Dev</Text>
              </span>
            </div>
            <div className="relative z-[50]  p-2">
              <BsBell className={styles.header_bell} onClick={() => {}} />

              <span className="bg-[#E20C0C] top-[-.4rem] font-semibold  text-sm right-[-.11rem] text-white absolute w-[20px] h-[20px] flex items-center justify-center rounded-full ">
                2
              </span>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Header;
