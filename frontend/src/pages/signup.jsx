import React from 'react';
import MainLayout from 'layouts/MainLayout';
import {
  StatsIcon,
  CreditIcon,
} from 'components/Icons/Icons';
import SignupPanel from 'components/panels/SignupPanel';


export default function LoginPage() {
  return (
    <MainLayout
      dashboardRoutes={[
        {
          path: "/login",
          name: "Login",
          rtlName: "لوحة القيادة",
          icon: <StatsIcon color="inherit" />,
          component: null,
          layout: "/",
        },
        {
          path: "/signup",
          name: "Sign Up",
          rtlName: "لوحة القيادة",
          icon: <CreditIcon color="inherit" />,
          component: null,
          layout: "/",
        },
      ]}
      activeRoute="/signup"
    >
      <SignupPanel />
    </MainLayout>
  );
}
