import React, { useEffect } from 'react';
import {
  LayoutManagerWithViewController,
  NavigationProvider,
  withNavigationViewController
} from '@atlaskit/navigation-next';
import { productHomeView, productProjectsView } from '../config/viewConfigs';
import StarterGlobalNav from '../components/StarterGlobalNav';
import { css, Global } from '@emotion/core';

/* eslint-disable-next-line */
import cssReset from '@atlaskit/css-reset';

const globalStyles = css`
  @font-face {
    font-family: 'Charlie_Display_Regular';
    src: url('../font/Charlie_Display-Regular.woff') format('font-woff'),
      url('../font/Charlie_Display-Regular.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Charlie_Display_Semibold';
    src: url('../font/Charlie_Display-Semibold.woff') format('font-woff'),
      url('../font/Charlie_Display-Semibold.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }
`;

function App(props) {
  useEffect(() => {
    const { navigationViewController } = props;
    navigationViewController.addView(productHomeView);
    navigationViewController.addView(productProjectsView);
    navigationViewController.setView(productHomeView.id);
  }, []);

  return (
    <LayoutManagerWithViewController
      globalNavigation={StarterGlobalNav}
      // productNavigation={() => null}
      // containerNavigation={() => null}
    >
      <div css={{ padding: '32px 40px' }}>Page content goes here.</div>
    </LayoutManagerWithViewController>
  );
}

const AppWithNavigationViewController = withNavigationViewController(App);

export default function() {
  return (
    <NavigationProvider>
      <Global styles={globalStyles} />
      <AppWithNavigationViewController />
    </NavigationProvider>
  );
}
