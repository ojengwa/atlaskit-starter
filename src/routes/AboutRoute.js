import React from 'react';
import { useEffect } from 'react';
import { withNavigationViewController } from '@atlaskit/navigation-next';

import { productHomeView } from '../config/viewConfigs';

export default withNavigationViewController(function AboutRouteBase(props) {
  useEffect(() => {
    const { navigationViewController } = props;
    navigationViewController.setView(productHomeView.id);
  }, []);
  return (
    <div styles={{ padding: 30 }}>
      <h1>About</h1>
    </div>
  );
});
