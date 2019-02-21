import React from 'react';
import { useEffect } from 'react';
import { withNavigationViewController } from '@atlaskit/navigation-next';
import { ContentWrapper } from '../components';
import { productHomeView } from '../config/viewConfigs';

function PortfolioRouteBase(props) {
  useEffect(() => {
    const { navigationViewController } = props;
    navigationViewController.setView(productHomeView.id);
  }, []);
  return (
    <ContentWrapper>
      <h1>Portfolio</h1>
    </ContentWrapper>
  );
}

export default withNavigationViewController(PortfolioRouteBase);
