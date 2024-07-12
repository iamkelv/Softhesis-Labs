import DashPage from '@/components/templates/Dashboard/Dashboard';
import DashboardWrapper from '@/components/templates/dashboardWapper';
import isAuth from '@/utils/isAuth';
import React from 'react';

function index() {
  return (
    <div>
      <DashboardWrapper>
        
        <DashPage />
      </DashboardWrapper>
    </div>
  );
}

export default isAuth(index) ;
