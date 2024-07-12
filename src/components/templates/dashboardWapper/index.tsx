import React, { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/router';
import { AiOutlineMenu } from 'react-icons/ai';
import SideBar from '@/components/organisms/sideBar/SideBar';
import styles from './dashboardWrapper.module.scss';

interface DashboardWrapperProps {
  children: React.ReactElement;
}

const DashboardWrapper: React.FC<DashboardWrapperProps> = ({ children }) => {
  const [openDash, setOpenDash] = useState(false);
  const [width, setWidth] = useState<number | undefined>(undefined);
  const router = useRouter();
  const divRef = useRef<HTMLDivElement | null>(null);

  const pathArray = ['add-profile'];
  const currentPath = router.pathname.split('/').pop() || '';
  const showNav = !pathArray.includes(currentPath);

  useEffect(() => {
    // Update the width state only after the component has mounted
    const handleResize = () => setWidth(window.innerWidth);
    handleResize(); // Call it initially to set the width

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (width && width <= 768) {
      setOpenDash(false);
    }
  }, [width]);

  if (width === undefined) {
    // Render nothing on the server, and while the client side dimensions are not yet determined
    return null;
  }

  return (
    <>
      {showNav ? (
        <div className={`${styles.wrapper}`}>
          {!openDash && width <= 768 && (
            <AiOutlineMenu
              onClick={() => setOpenDash(!openDash)}
              className={styles.hamburger}
            />
          )}
          {openDash && width <= 768 && (
            <div
              className={styles.overlay}
              onClick={() => setOpenDash(false)}
            ></div>
          )}
          <div
            className={styles.side_bar}
            id="side_bar_wrapper"
            style={{ left: openDash || width > 768 ? '0' : '-12.5rem' }}
          >
            <SideBar setOpenDash={setOpenDash} />
          </div>
          <div className={styles.dash} id="dash_wrapper">
            <div className={styles.outlet} ref={divRef}></div>
            {children}
          </div>
        </div>
      ) : (
        <div>{children}</div>
      )}
    </>
  );
};

export default DashboardWrapper;
