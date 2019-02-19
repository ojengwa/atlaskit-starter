/** @jsx jsx */
import { jsx } from '@emotion/core';
import GlobalNavigation from '@atlaskit/global-navigation';
import AppSwitcherIcon from '@atlaskit/icon/glyph/app-switcher';
import ataskitIcon from '../images/atlaskit-logo-inverted.png';
import { GlobalItem } from '@atlaskit/navigation-next';

const logoStyles = {
  img: {
    width: 24,
    height: 24
  }
};

function AtlaskitLogo() {
  return (
    <div css={[logoStyles]}>
      <img src={ataskitIcon} alt="" />
    </div>
  );
}

function AppSwitcherComponent(props) {
  return (
    <GlobalItem
      {...props}
      icon={AppSwitcherIcon}
      id="test"
      onClick={() => console.log('AppSwitcher clicked')}
    />
  );
}

export default function GlobalNav() {
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
