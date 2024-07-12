import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { FaMoneyBill, FaRegUser } from 'react-icons/fa';

import styles from './sidebar.module.scss';

import { FiInfo } from 'react-icons/fi';
import { CiSettings } from 'react-icons/ci';
import { MdAnalytics, MdOutlineMessage } from 'react-icons/md';
import { LuWallet } from 'react-icons/lu';
import { RiLogoutCircleRLine, RiSpeedUpFill } from 'react-icons/ri';
import { useAppDispatch } from '@/store/reduxHooks';
import { setLogout } from '@/store/slices/authSlice';

interface MenuItems {
  path: string;
  name: string;
  icon: JSX.Element;
  dynamicPath?: boolean;
}

const SideBar = ({
  setOpenDash,
}: {
  setOpenDash: (state: boolean) => void;
}) => {
  const router = useRouter();
  const [selectedLink, setSelectedLink] = useState<string>('');
  const dispatch = useAppDispatch();

  const menuItems: MenuItems[] = [
    {
      path: '/dashboard',
      name: 'Dashboard',
      icon: <RiSpeedUpFill size={20} />,
    },

    {
      path: '/dashboard/dash-profile',
      name: 'Profile',
      icon: <FaRegUser size={20} />,
    },
    {
      path: '/dashboard/dash-analysis',
      name: 'Analysis',
      icon: <MdAnalytics size={20} />,
    },
    {
      path: '/dashboard/dash-accounting',
      name: 'Accounting',
      icon: <LuWallet size={20} />,
    },

    {
      path: '/dashboard/dash-messages',
      name: 'Messages',
      icon: <MdOutlineMessage size={20} />,
    },
    {
      path: '/dashboard/dash-project',
      name: 'Projects',
      icon: <FaMoneyBill size={20} />,
    },
  ];

  const general: MenuItems[] = [
    {
      path: '/settings',
      name: 'Settings',
      icon: <CiSettings size={20} />,
    },
    {
      path: '/info',
      name: 'Info',
      icon: <FiInfo size={20} />,
    },
    {
      path: '/',
      name: 'Log out',
      icon: <RiLogoutCircleRLine size={20} />,
    },
  ];

  useEffect(() => {
    const currentPath = router.pathname.split('/dashboard')[1];
    const link = currentPath?.split('/')[1] || '';
    setSelectedLink(link);
  }, [router.pathname]);
  console.log(selectedLink === 'dash-profile');
  return (
    <div className={styles.sidebar}>
      <div
        className={styles.sidebar_top_section}
        onClick={() => router.push('/dashboard')}
      >
        <span className="font-bold">Logo</span>
      </div>
      <div className=" h-[82vh] flex flex-col justify-between">
        <div className={styles.link_container}>
          {menuItems.map((item, index) => {
            const currentPath = item.path.split('/dashboard')[1];
            const link = currentPath?.split('/')[1] || '';
            return (
              <Link
                key={index}
                href={item.dynamicPath ? '/dashboard/dash-settings' : item.path}
                className={`${styles.sidebar_link} ${
                  link === selectedLink && styles.selected
                }`}
                onClick={() => setOpenDash(false)}
              >
                <div className={styles.sidebar_icon}>{item.icon}</div>
                <p className={styles.sidebar_link_text}>{item.name}</p>
              </Link>
            );
          })}
        </div>

        <div className={styles.link_container} style={{ marginTop: '2rem' }}>
          {general.map((item, index) => (
            <Link
              key={index}
              href={item.path}
              className={`${styles.sidebar_link} ${
                item.path === selectedLink && styles.selected
              }`}
              onClick={() => {
                if (item.name === 'Log out') {
                  dispatch(setLogout());
                }
              }}
            >
              <div className={styles.sidebar_icon}>{item.icon}</div>
              <p className={styles.sidebar_link_text}>{item.name}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
