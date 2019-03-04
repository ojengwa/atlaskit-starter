import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { Modal } from '@atlaskit/onboarding';
import welcomeImage from '../assets/images/welcome-modal.png';

function WelcomeModal(props) {
  const [redirect, setRedirect] = useState(false);

  function accept() {
    props.show();
    setRedirect(true);
  }
  function decline() {
    props.hide();
  }

  if (redirect) {
    return <Redirect to="/projects/atlascat" />;
  }

  return (
    <Modal
      actions={[
        { onClick: accept, text: 'Check out the demo project' },
        { onClick: decline, text: 'Not right now' }
      ]}
      heading="Get familiar with Atlaskit"
      image={welcomeImage}
      key="welcome"
    >
      <p>Get a feel for some of the key components that make up Atlaskit!</p>
      <p>Take it for a spin and let us know what you think.</p>
    </Modal>
  );
}

export default WelcomeModal;
