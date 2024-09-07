'use client';
import { Typography } from '@mui/material';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import DashboardCard from '@/app/(DashboardLayout)/components/shared/DashboardCard';


const UserManagement = () => {
  return (
    <PageContainer title="User Management" description="data users">
      <DashboardCard title="User Management">
        <Typography>Data Users</Typography>
      </DashboardCard>
    </PageContainer>
  );
};

export default UserManagement;

