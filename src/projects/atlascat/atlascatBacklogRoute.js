import React from 'react';
import { useEffect } from 'react';
import { withNavigationViewController } from '@atlaskit/navigation-next';
import Page from '@atlaskit/page';
import { Link } from 'react-router-dom';
import atlascatHomeView from './viewConfigs';

function AtlascatBacklogRouteBase(props) {
  useEffect(() => {
    const { navigationViewController } = props;
    navigationViewController.addView(atlascatHomeView);
    navigationViewController.setView(atlascatHomeView.id);
  }, []);
  return (
    <Page>
      <div styles={{ padding: 30 }}>
        <h2>Atlascat Backlog</h2>

        <p>
          <Link to="/projects">Back to Projects</Link>
        </p>
      </div>
    </Page>
  );
}

export default withNavigationViewController(AtlascatBacklogRouteBase);
