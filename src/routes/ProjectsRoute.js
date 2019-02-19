/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useEffect } from 'react';
import { withNavigationViewController } from '@atlaskit/navigation-next';
import projectsConfig from './projectsConfig';
import Page from '@atlaskit/page';
import { Link } from 'react-router-dom';

export default withNavigationViewController(function ProjectsRouteBase(props) {
  useEffect(() => {
    const { navigationViewController } = props;
    navigationViewController.setView(projectsConfig[projectID].id);
  }, []);
  const { projectID } = props.match.params;

  return (
    <Page>
      <div css={{ padding: 30 }}>
        <h2>{projectID}</h2>
        {projectsConfig[projectID].component}
        <p>
          <Link to="/">Back to About</Link>
        </p>
      </div>
    </Page>
  );
});
