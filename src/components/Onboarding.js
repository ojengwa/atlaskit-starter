import React from 'react';
import {
  Spotlight,
  SpotlightTarget,
  SpotlightTransition
} from '@atlaskit/onboarding';

import useSpotlightState from '../hooks/useSpotlightState';

function Onboarding() {
  const { spotlightState, start, next, prev, finish } = useSpotlightState();

  function renderActiveSpotlight() {
    const variants = [
      <Spotlight
        actions={[
          {
            onClick: next,
            text: 'Tell me more'
          }
        ]}
        dialogPlacement="right middle"
        heading="Global Navigation"
        target="global-navigation"
        key="global-navigation"
      >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates
        modi nesciunt nam molestiae blanditiis accusamus labore obcaecati vel ex
        ab alias, officiis autem quaerat repellat commodi eaque? Unde, facilis
        eligendi!
      </Spotlight>,
      <Spotlight
        actions={[
          { onClick: next, text: 'Next' },
          { onClick: prev, text: 'Prev' }
        ]}
        dialogPlacement="bottom center"
        heading="Product Navigation"
        target="container"
        key="container"
      >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates
        modi nesciunt nam molestiae blanditiis accusamus labore obcaecati vel ex
        ab alias, officiis autem quaerat repellat commodi eaque? Unde, facilis
        eligendi!
      </Spotlight>,
      <Spotlight
        actions={[{ onClick: finish, text: 'Got it' }]}
        dialogPlacement="bottom right"
        heading="Product Container"
        target="container"
        key="container"
      >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates
        modi nesciunt nam molestiae blanditiis accusamus labore obcaecati vel ex
        ab alias, officiis autem quaerat repellat commodi eaque? Unde, facilis
        eligendi!
      </Spotlight>
    ];

    if (spotlightState == null) return null;

    return variants[spotlightState];
  }

  return (
    <>
      <SpotlightTarget name="yellow">
        <div>Second Element</div>
      </SpotlightTarget>
      <SpotlightTarget name="red">
        <div>Third Element</div>
      </SpotlightTarget>

      <p style={{ marginBottom: '1em' }}>
        Use spotlight to highlight elements in your app to users.
      </p>
      <button onClick={start}>Start</button>
      <SpotlightTransition>{renderActiveSpotlight()}</SpotlightTransition>
    </>
  );
}

export default Onboarding;
