"use client";

import { useState, useEffect } from 'react';

export default function CookieBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('petitioniq-cookie-consent');
    if (consent === null) {
      requestAnimationFrame(() => {
        setVisible(true);
      });
    } else if (consent === 'declined') {
      requestAnimationFrame(() => {
        setVisible(true);
      });
    
    }
  }, []);

  const handleConsent = (accepted) => {
    localStorage.setItem('petitioniq-cookie-consent', accepted ? 'accepted' : 'declined');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div id="cookie-bar" role="alert" aria-live="polite">
      <p>
        We use essential cookies to operate this platform. No advertising or tracking cookies are used. See our{' '}
        <a href="#">Privacy Policy</a>. California residents may exercise CCPA rights per our Privacy Policy.
      </p>
      <div className="cookie-btns">
        <button className="c-btn c-accept" onClick={() => handleConsent(true)}>
          Accept
        </button>
        <button className="c-btn c-decline" onClick={() => handleConsent(false)}>
          Decline
        </button>
      </div>
    </div>
  );
};
