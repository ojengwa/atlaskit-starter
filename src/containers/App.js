import React, { useEffect } from 'react';
import {
  LayoutManagerWithViewController,
  NavigationProvider,
  withNavigationViewController
} from '@atlaskit/navigation-next';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import { css, Global } from '@emotion/core';

import { productHomeView, productProjectsView } from '../config/viewConfigs';
import { atlascatHomeView, atlascatBacklogRoute } from '../projects/atlascat';
import StarterGlobalNav from '../components/StarterGlobalNav';
import LinkItem from '../components/LinkItem';

/* eslint-disable-next-line */
import cssReset from '@atlaskit/css-reset';
import { AboutRoute, ProjectsRoute } from '../routes';

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
    navigationViewController.addView(atlascatHomeView);
    navigationViewController.addView(productProjectsView);
  }, []);

  return (
    <LayoutManagerWithViewController
      customComponents={{ RoutedLinkItem: LinkItem }}
      globalNavigation={StarterGlobalNav}
      // productNavigation={() => null}
      // containerNavigation={() => null}
    >
      <Switch>
        <Route exact path="/" component={AboutRoute} />
        {/* <Route path="/projects/atlascat" component={atlascatBacklogRoute} /> */}
        <Route path="/projects/:projectID" component={ProjectsRoute} />
        <Route path="/projects" component={ProjectsRoute} />
        <Route path="/portfolio" component={() => <div>Portfolio</div>} />
      </Switch>
    </LayoutManagerWithViewController>
  );
}

const AppWithNavigationViewController = withNavigationViewController(App);

export default function() {
  return (
    <BrowserRouter>
      <NavigationProvider>
        <Global styles={globalStyles} />
        <AppWithNavigationViewController />
      </NavigationProvider>
    </BrowserRouter>
  );
}
