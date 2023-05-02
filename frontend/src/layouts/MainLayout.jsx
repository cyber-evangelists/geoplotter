import React from 'react';

import Sidebar from 'components/Sidebar';
import MainPanel from 'components/Layout/MainPanel';
import PanelContainer from 'components/Layout/PanelContainer';
import PanelContent from 'components/Layout/PanelContent';

export default function MainLayout({ dashboardRoutes, children, activeRoute }) {
  return (
    <>
      <Sidebar
        routes={dashboardRoutes}
        logoText="INFRAPI"
        display="none"
        activeRoute={activeRoute}
      />
      <MainPanel
        w={{
          base: '100%',
          xl: 'calc(100% - 275px)',
        }}
      >
        <PanelContent>
          <PanelContainer>
            {children}
          </PanelContainer>
        </PanelContent>
      </MainPanel>
    </>
  );
}
