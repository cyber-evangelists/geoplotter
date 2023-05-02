import React from 'react';
import MainLayout from 'layouts/MainLayout';
import {
  StatsIcon,
  CreditIcon,
} from 'components/Icons/Icons';
import BoxmodelPanel from 'components/panels/BoxmodelPanel';

export default function BoxmodelPage() {
  return (
    <MainLayout
      dashboardRoutes={[
        {
          path: "/map",
          name: "Map",
          rtlName: "لوحة القيادة",
          icon: <CreditIcon color="inherit" />,
          component: null,
          layout: "/",
        },
        {
          path: "/boxmodel",
          name: "Box Model",
          rtlName: "لوحة القيادة",
          icon: <StatsIcon color="inherit" />,
          component: null,
          layout: "/",
        },
      ]}
      activeRoute="/boxmodel"
    >
      <BoxmodelPanel />
    </MainLayout>
  );
}
