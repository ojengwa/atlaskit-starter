import React from 'react';
import { useEffect } from 'react';
import { withNavigationViewController } from '@atlaskit/navigation-next';
import { Link } from 'react-router-dom';
import atlascatHomeView from './viewConfigs';

function AtlascatBacklogRouteBase(props) {
  useEffect(() => {
    const { navigationViewController } = props;
    navigationViewController.addView(atlascatHomeView);
    navigationViewController.setView(atlascatHomeView.id);
  }, []);
  return (
    <>
      <h2>Atlascat Backlog</h2>

      <p>
        <Link to="/projects">Back to Projects</Link>
      </p>
    </>
  );
}

export default withNavigationViewController(AtlascatBacklogRouteBase);
