import { useState } from 'react';

function useSpotligthState() {
  const [spotlightState, setSpotlightState] = useState(null);

  function start() {
    setSpotlightState(0);
  }
  function next() {
    setSpotlightState(spotlightState + 1);
  }
  function prev() {
    setSpotlightState((spotlightState || 0) - 1);
  }
  function finish() {
    setSpotlightState(null);
  }

  return {
    start,
    next,
    prev,
    finish,
    spotlightState
  };
}

export default useSpotligthState;
