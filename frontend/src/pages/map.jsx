import React from 'react';
import dynamic from 'next/dynamic';

import MainLayout from 'layouts/MainLayout';
import {
  StatsIcon,
  CreditIcon,
} from 'components/Icons/Icons';
import Head from 'next/head';

const MapPanel = dynamic(() => import('components/panels/MapPanel'), { ssr: false });

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
      activeRoute="/map"
    >
      <MapPanel />
    </MainLayout>
  );
}
