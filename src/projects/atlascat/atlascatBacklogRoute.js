import React from 'react';
import { useEffect } from 'react';
import { withNavigationViewController } from '@atlaskit/navigation-next';
import atlascatHomeView from './atlascatHomeView';
import Page from '@atlaskit/page';
import { Link } from 'react-router-dom';

export default withNavigationViewController(function AtlascatBacklogRouteBase(
  props
) {
  useEffect(() => {
    const { navigationViewController } = props;
    navigationViewController.setView(atlascatHomeView.id);
  }, []);
  return (
    <Page>
      <div styles={{ padding: 30 }}>
        <h2>Atlascat Backlog</h2>

        <p>
          <Link to="/">Back to About</Link>
        </p>
      </div>
    </Page>
  );
});
