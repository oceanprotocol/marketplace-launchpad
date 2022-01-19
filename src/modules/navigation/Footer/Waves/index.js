import React, {useEffect, useState, useRef, useCallback} from 'react';
import {useInView} from 'react-intersection-observer';
import {createD3Waves, destroy, renderStatic} from './oceanWaves';
import * as styles from './index.module.css';
import usePrefersReducedMotion from '../../../../hooks/usePrefersReducedMotion';
import {Timer} from 'd3';

// TODO: create and add static fallback for SSR & no-js
// TODO: figure out how to code-split and lazy load D3

export function isDocumentVisible() {
  if (
    typeof document !== 'undefined' &&
    typeof document.visibilityState !== 'undefined'
  ) {
    return document.visibilityState !== 'hidden';
  }
  // always assume it's visible
  return true;
}

export default function Waves({className}) {
  const [inViewRef, inView] = useInView();
  const prefersReducedMotion = usePrefersReducedMotion();

  const ref = useRef();
  const [animation, setAnimation] = useState(null);

  const setRefs = useCallback(
    (node) => {
      ref.current = node;
      inViewRef(node);
    },
    [inViewRef]
  );

  function startAnimation(ref) {
    // always destroy and recreate since there's no real start/stop with a d3 timer
    destroy(animation, ref);
    const timer = createD3Waves(ref.current);
    setAnimation(timer);
  }

  function stopAnimation() {
    destroy(animation, ref);
    setAnimation(null);
  }

  // handle viewport change & prefers-reduced-motion
  useEffect(() => {
    if (prefersReducedMotion || process.env.GATSBY_WAVE_ANIMATION === 'false') {
      destroy(animation, ref);
      setAnimation(null);

      renderStatic(ref);
      return;
    }

    if (inView) {
      startAnimation(ref);
    } else {
      stopAnimation();
    }

    return () => {
      stopAnimation();
    };
  }, [inView, prefersReducedMotion]);

  // handle window/tab visibility
  useEffect(() => {
    document &&
      document.addEventListener('visibilitychange', () => {
        if (isDocumentVisible()) {
          startAnimation(ref);
        } else {
          stopAnimation();
        }
      });
  }, []);

  return (
    <div className={`${styles.waves} ${className && className}`}>
      <svg width="4000" height="500" ref={setRefs} />
    </div>
  );
}
