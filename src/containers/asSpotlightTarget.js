import React from 'react';
import { SpotlightTarget } from '@atlaskit/onboarding';

function asSpotlightTarget(Component, name, props) {
  return (
    <SpotlightTarget name={name}>
      <Component {...props} />
    </SpotlightTarget>
  );
}

export default asSpotlightTarget;
