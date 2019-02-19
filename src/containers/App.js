import React from 'react';
import { LayoutManager, NavigationProvider } from '@atlaskit/navigation-next';
import StarterNavigation from '../components/StarterNavigation';

/* eslint-disable-next-line */
import cssReset from '@atlaskit/css-reset';

export default function App() {
  return (
    <NavigationProvider>
      <LayoutManager
        globalNavigation={StarterNavigation}
        productNavigation={() => null}
        containerNavigation={() => null}
      >
        <div css={{ padding: '32px 40px' }}>Page content goes here.</div>
      </LayoutManager>
    </NavigationProvider>
  );
}
