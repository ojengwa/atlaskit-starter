import React from 'react';
import GlobalNavigation from '@atlaskit/global-navigation';
import AppSwitcherIcon from '@atlaskit/icon/glyph/app-switcher';
import ataskitIcon from '../assets/images/atlaskit-logo-inverted.png';
import { GlobalItem } from '@atlaskit/navigation-next';

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

export default function StarterGlobalNav() {
  return (
    <GlobalNavigation
      productIcon={AtlaskitLogo}
      productHref="#"
      onProductClick={() => console.log('product clicked')}
      onCreateClick={() => console.log('create clicked')}
      onSearchClick={() => console.log('search clicked')}
      onStarredClick={() => console.log('starred clicked')}
      onNotificationClick={() => console.log('notification clicked')}
      appSwitcherComponent={AppSwitcherComponent}
      appSwitcherTooltip="Switch to ..."
      helpItems={() => <div>test</div>}
      onSettingsClick={() => console.log('settings clicked')}
      loginHref="#login"
    />
  );
}
