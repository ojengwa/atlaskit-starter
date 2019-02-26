import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { Modal } from '@atlaskit/onboarding';

import welcomeImage from '../assets/images/welcome-modal.png';

function WelcomeModal() {
  const [modalState, setModalState] = useState({
    isActive: false,
    hasLoadedOnce: false
  });
  const [redirect, setRedirect] = useState(false);

  function accept() {
    setModalState({ isActive: false, hasLoadedOnce: true });
    setRedirect(true);
  }
  function decline() {
    setModalState({ isActive: false, hasLoadedOnce: true });
  }

  useEffect(() => {
    setModalState({ isActive: true });
  }, []);

  const { isActive, hasLoadedOnce } = modalState;

  if (redirect) {
    return <Redirect to="/projects/atlascat" />;
  }

  return (
    isActive &&
    !hasLoadedOnce && (
      <Modal
        actions={[
          { onClick: accept, text: 'Check out the demo project' },
          { onClick: decline, text: 'Not right now' }
        ]}
        heading="Get familiar with Atlaskit"
        image={welcomeImage}
        key="welcome"
      >
        <p>
          Switch context, jump between project, and get back to work quickly
          with our new look and feel.
        </p>
        <p>Take it for a spin and let us know what you think.</p>
      </Modal>
    )
  );
}

export default WelcomeModal;
