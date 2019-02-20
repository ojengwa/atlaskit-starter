import React from 'react';
import styled from '@emotion/styled';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Grid, GridColumn } from '@atlaskit/page';
import { withNavigationViewController } from '@atlaskit/navigation-next';
import { productHomeView } from '../config/viewConfigs';

const Wrapper = styled.div`
  color: red;
`;

export default withNavigationViewController(function ProjectsRouteBase(props) {
  useEffect(() => {
    const { navigationViewController } = props;
    navigationViewController.setView(productHomeView.id);
  }, []);

  return (
    <Wrapper>
      <Grid>
        <GridColumn>
          <Link to="/">Back to about</Link>
          <h1>Projects</h1>
          <ul>
            <li>
              <Link to="/projects/atlascat">atlascat</Link>
            </li>
            <li>
              <Link to="/projects/broken-link-example">broken link</Link>
            </li>
          </ul>
        </GridColumn>
      </Grid>
    </Wrapper>
  );
});
