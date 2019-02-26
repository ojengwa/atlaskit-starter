import React from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { withNavigationViewController } from '@atlaskit/navigation-next';
import EmptyState from '@atlaskit/empty-state';
import Button from '@atlaskit/button';

import { BreadCrumbsWithRouter, ContentWrapper } from '../components';

import { productHomeView } from '../config/viewConfigs';
import emptyStateImage from '../assets/images/empty-state.png';
import projects from '../projects';

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
      header: 'Empty state',
      description: `A React component used for presenting various empty states
       (no items, empty search, broken link, welcome screen etc.)`,
      imageUrl: emptyStateImage,
      primaryAction: (
        <Link to="/projects">
          <Button
            appearance="link"
            onClick={() => console.log('primary action clicked')}
          >
            Back to Projects
          </Button>
        </Link>
      ),
      secondaryAction: '',
      tertiaryAction: ''
    };
    return <EmptyState {...props} />;
  }

  function renderProjectPage() {
    return (
      <>
        <BreadCrumbsWithRouter
          paths={[
            { href: '', text: 'Home' },
            { href: '/projects', text: 'Projects' },
            {
              href: `/${projectID}`,
              text: projectID,
              disabled: true
            }
          ]}
        />

        <h1>{projectID}</h1>
        {/* TODO: render specific project routes here */}
        {/* <Route exact path="/:projectID" component={ProjectRoute} /> */}
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
  return <ContentWrapper>{render()}</ContentWrapper>;
}

export default withNavigationViewController(ProjectRoute);
