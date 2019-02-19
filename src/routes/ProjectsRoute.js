import React from 'react';
import styled from '@emotion/styled';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Grid, GridColumn } from '@atlaskit/page';
import { withNavigationViewController } from '@atlaskit/navigation-next';
import projectsConfig from './projectsConfig';

const Wrapper = styled.div`
  color: red;
`;

export default withNavigationViewController(function ProjectsRouteBase(props) {
  const { projectID } = props.match.params;

  useEffect(() => {
    const { navigationViewController } = props;
    navigationViewController.setView(projectsConfig[projectID].id);
  }, []);

  return (
    <Wrapper>
      <Grid>
        <GridColumn>
          <Link to="/">Home</Link>
          {projectsConfig[projectID].component}
        </GridColumn>
      </Grid>
    </Wrapper>
  );
});
