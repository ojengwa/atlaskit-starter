import React, { useState, useEffect, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { Modal } from '@atlaskit/onboarding';
import { ModalLoadCtx } from '../containers/App';
import welcomeImage from '../assets/images/welcome-modal.png';

function WelcomeModal() {
  const [redirect, setRedirect] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [count, setCounter] = useContext(ModalLoadCtx);

  function accept() {
    setIsActive(false);
    setRedirect(true);
  }
  function decline() {
    setIsActive(false);
  }

  useEffect(() => {
    setIsActive(true);
    setCounter(count + 1);
  }, []);

  if (redirect) {
    return <Redirect to="/projects/atlascat" />;
  }

  const modalShouldRender = isActive && count <= 1;

  if (!modalShouldRender) return null;

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
      <p>
        Switch context, jump between project, and get back to work quickly with
        our new look and feel.
      </p>
      <p>Take it for a spin and let us know what you think.</p>
    </Modal>
  );
}

export default WelcomeModal;
