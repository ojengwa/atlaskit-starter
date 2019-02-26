import React from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { withNavigationViewController } from '@atlaskit/navigation-next';
import { ContentWrapper } from '../components';
import { productHomeView } from '../config/viewConfigs';

export default withNavigationViewController(function ProjectsRouteBase(props) {
  useEffect(() => {
    const { navigationViewController } = props;
    navigationViewController.setView(productHomeView.id);
  }, []);

  return (
    <ContentWrapper>
      <h1>Projects</h1>
      <ul style={{ listStyleType: 'none' }}>
        <li>
          <h2>
            <Link to="/projects/atlascat">atlascat</Link>
          </h2>
        </li>
        <li>
          <h2>
            <Link to="/projects/broken-link-example">broken link</Link>
          </h2>
        </li>
      </ul>
    </ContentWrapper>
  );
});
