import DashboardWrapper from '@/components/templates/dashboardWapper';
import DashProfileTemplate from '@/components/templates/DashProfile/Dashboard';
import isAuth from '@/utils/isAuth';
import React from 'react';

function DashProfile() {
  return (
    <DashboardWrapper>
      <DashProfileTemplate />
    </DashboardWrapper>
  );
}

export default isAuth(DashProfile);
