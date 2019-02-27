import React, { useEffect, useState, createContext } from 'react';
import {
  LayoutManagerWithViewController,
  NavigationProvider,
  withNavigationViewController
} from '@atlaskit/navigation-next';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import { css, Global } from '@emotion/core';
import { ThemeProvider } from 'styled-components';

import { productHomeView } from '../config/viewConfigs';
import { LinkItem } from '../components';
import { StarterGlobalNav } from '../components/GlobalNavigation';

/* eslint-disable-next-line */
import cssReset from '@atlaskit/css-reset';
import {
  WelcomeRoute,
  ProjectRoute,
  ProjectsRoute,
  PortfolioRoute
} from '../routes';

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
  }, []);

  return (
    <LayoutManagerWithViewController
      customComponents={{ RoutedLinkItem: LinkItem }}
      globalNavigation={StarterGlobalNav}
      // productNavigation={() => null}
      // containerNavigation={() => null}
    >
      <Switch>
        <Route exact path="/projects" component={ProjectsRoute} />
        <Route exact path="/projects/:projectID" component={ProjectRoute} />
        <Route path="/portfolio" component={PortfolioRoute} />

        <Route path="/" component={WelcomeRoute} />
      </Switch>
    </LayoutManagerWithViewController>
  );
}

const AppWithNavigationViewController = withNavigationViewController(App);

export const ModalLoadCtx = createContext([0, () => {}]);

export default function() {
  const [count, setCount] = useState(0);
  return (
    <BrowserRouter>
      {/* @HACK: without ThemeProvider the build will break since some components still use the theme consumer  */}
      <ThemeProvider theme={{}}>
        <NavigationProvider>
          <Global styles={globalStyles} />
          <ModalLoadCtx.Provider value={[count, setCount]}>
            <AppWithNavigationViewController />
          </ModalLoadCtx.Provider>
        </NavigationProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}
