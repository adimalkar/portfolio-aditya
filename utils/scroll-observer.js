'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * A custom hook to implement Intersection Observer for scroll animations.
 * Extremely useful for triggering framer-motion or CSS fade-ins when elements enter the viewport.
 * 
 * @param {Object} options - Intersection Observer options (threshold, rootMargin, etc.)
 * @param {boolean} triggerOnce - If true, the observer disconnects after the element appears once
 * @returns {Array} [ref, isVisible] - Attach ref to the DOM node, use isVisible for conditional classes
 */
export function useScrollObserver(options = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }, triggerOnce = true) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const targetElement = elementRef.current;
    
    if (!targetElement) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        // Unobserve immediately if we only want the animation to happen once
        if (triggerOnce) {
          observer.unobserve(targetElement);
        }
      } else if (!triggerOnce) {
        setIsVisible(false);
      }
    }, options);

    observer.observe(targetElement);

    return () => {
      if (targetElement) {
        observer.unobserve(targetElement);
      }
    };
  }, [options, triggerOnce]);

  return [elementRef, isVisible];
}
