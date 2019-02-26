import React, { createContext, useState } from 'react';
import GlobalNavigation from '@atlaskit/global-navigation';
import AppSwitcherIcon from '@atlaskit/icon/glyph/app-switcher';
import { GlobalItem } from '@atlaskit/navigation-next';

import { CreateDrawer } from './';

import ataskitIcon from '../../assets/images/atlaskit-logo-inverted.png';

function AtlaskitLogo() {
  return <img width="24" src={ataskitIcon} alt="" />;
}

function AppSwitcherComponent(props) {
  return (
    <GlobalItem
      {...props}
      icon={AppSwitcherIcon}
      id="app-switcher"
      onClick={() => console.log('AppSwitcher clicked')}
    />
  );
}

export const DrawerCtx = createContext([false, () => {}]);

function StarterGlobalNav() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <DrawerCtx.Provider value={[isDrawerOpen, setIsDrawerOpen]}>
      <>
        <GlobalNavigation
          productIcon={AtlaskitLogo}
          productHref="/"
          onProductClick={() => console.log('product clicked')}
          onCreateClick={() => setIsDrawerOpen(isDrawerOpen => !isDrawerOpen)}
          onSearchClick={() => console.log('search clicked')}
          onStarredClick={() => console.log('starred clicked')}
          onNotificationClick={() => console.log('notification clicked')}
          appSwitcherComponent={AppSwitcherComponent}
          appSwitcherTooltip="Switch to ..."
          helpItems={() => <div>test</div>}
          onSettingsClick={() => console.log('settings clicked')}
          loginHref="#login"
        />
        }
        <CreateDrawer />
      </>
    </DrawerCtx.Provider>
  );
}

export default StarterGlobalNav;
