import React from 'react';
import { useEffect } from 'react';
import { withNavigationViewController } from '@atlaskit/navigation-next';
import { ContentWrapper } from '../components';

import { productHomeView } from '../config/viewConfigs';

function WelcomeRouteBase(props) {
  useEffect(() => {
    const { navigationViewController } = props;
    navigationViewController.setView(productHomeView.id);
  }, []);
  return (
    <ContentWrapper>
      <h1>Welcome</h1>
      <section style={{ marginBottom: '10px' }}>
        <p>
          This application is bootstrapped using{' '}
          <a href="https://github.com/facebook/create-react-app">
            create-react-app
          </a>{' '}
          and <a href="https://atlaskit.atlassian.com/">Atlaskit</a>.
        </p>
        <p>
          This gives a working navigation component you can start hacking on,
          see <code>/src/components/StarterNavigation.js</code>.
        </p>
      </section>
    </ContentWrapper>
  );
}

export default withNavigationViewController(WelcomeRouteBase);
