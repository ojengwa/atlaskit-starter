import React from 'react';
import styled from '@emotion/styled';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Grid, GridColumn } from '@atlaskit/page';
import { withNavigationViewController } from '@atlaskit/navigation-next';
import EmptyState from '@atlaskit/empty-state';
import Button from '@atlaskit/button';

import { productHomeView } from '../config/viewConfigs';
import emptyStateImage from '../assets/images/empty-state.png';

import projects from '../projects';

const Wrapper = styled.div``;

function ProjectRoute(props) {
  const { match } = props;
  const projectID = match.params.projectID;
  const projectExists = projects[projectID];

  useEffect(() => {
    const { navigationViewController } = props;

    if (projectExists) {
      navigationViewController.addView(projects[projectID].viewConfig);
      navigationViewController.setView(projects[projectID].viewConfig.id);
    } else {
      navigationViewController.setView(productHomeView.id);
    }
  }, []);

  function renderEmptyState() {
    const props = {
      header: 'I am the header',
      description: `Lorem ipsum is a pseudo-Latin text used in web design,
            typography, layout, and printing in place of English to emphasise
            design elements over content. It's also called placeholder (or filler)
            text. It's a convenient tool for mock-ups.`,
      imageUrl: emptyStateImage,
      primaryAction: (
        <Button
          appearance="link"
          onClick={() => console.log('primary action clicked')}
        >
          Back to Projects
        </Button>
      ),
      secondaryAction: '',
      tertiaryAction: ''
    };
    return <EmptyState {...props} />;
  }

  function renderProjectPage() {
    return (
      <>
        <h1>{projectID}</h1>
      </>
    );
  }

  function render() {
    if (projectExists) {
      return renderProjectPage();
    } else {
      return renderEmptyState();
    }
  }

  return (
    <Wrapper>
      <Grid>
        <GridColumn>
          <Link to="/">Back to about</Link>
          {render()}
          <Link to="/projects">Back to Projects</Link>
        </GridColumn>
      </Grid>
    </Wrapper>
  );
}

export default withNavigationViewController(ProjectRoute);
