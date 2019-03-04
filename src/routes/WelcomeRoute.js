import React, { useEffect, useState } from 'react';
import Button from '@atlaskit/button';
import { withNavigationViewController } from '@atlaskit/navigation-next';

import { ContentWrapper, WelcomeModal } from '../components';
import { productHomeView } from '../config/viewConfigs';

function WelcomeRouteBase(props) {
  const [isShown, setIsShown] = useState(false);

  const handleShowModal = () => setIsShown(true);
  const handleHideModal = () => setIsShown(false);

  useEffect(() => {
    const { navigationViewController } = props;
    navigationViewController.setView(productHomeView.id);
  }, []);

  return (
    <ContentWrapper>
      <h1>Welcome</h1>
      <section style={{ marginBottom: '1rem', marginTop: '1rem' }}>
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
      <Button onClick={() => setIsShown(true)}>Trigger welcome modal</Button>
      {isShown && (
        <WelcomeModal
          isShown={isShown}
          show={handleShowModal}
          hide={handleHideModal}
        />
      )}
    </ContentWrapper>
  );
}

export default withNavigationViewController(WelcomeRouteBase);
