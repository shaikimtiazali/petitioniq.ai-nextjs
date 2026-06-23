"use client";

import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav role="navigation" aria-label="Main navigation">
      <div className="container nav-in">
        <a href="#" className="logo" aria-label="PetitionIQ home">
          <span className="logo-word">PetitionIQ</span>
          <span className="logo-tld">.ai</span>
        </a>
        <ul className="nav-links" id="nav-links">
          <li><a href="#how-it-works">How It Works</a></li>
          <li><a href="#evaluator">Free Evaluation</a></li>
          <li><a href="#b1-consult">Consultations</a></li>
          <li><a href="#blog">Insights</a></li>
          <li><a href="#attorneys">Attorney Network</a></li>
        </ul>
        <a href="#evaluator" className="btn btn-gold">Start Free Evaluation</a>
        <button
          className="nav-ham"
          aria-label="Toggle menu"
          onClick={toggleMenu}
          aria-expanded={isOpen}
          id="hamburger"
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
            <line x1="2" y1="6" x2="20" y2="6" stroke="white" strokeWidth="2" strokeLinecap="round" />
            <line x1="2" y1="11" x2="20" y2="11" stroke="white" strokeWidth="2" strokeLinecap="round" />
            <line x1="2" y1="16" x2="20" y2="16" stroke="white" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </div>
      {/* Mobile Links Overlay */}
      <ul className={`nav-links-mobile ${isOpen ? 'visible' : ''}`} id="nav-links-mobile">
        <li><a href="#how-it-works" onClick={closeMenu}>How It Works</a></li>
        <li><a href="#evaluator" onClick={closeMenu}>Free Evaluation</a></li>
        <li><a href="#b1-consult" onClick={closeMenu}>Consultations</a></li>
        <li><a href="#blog" onClick={closeMenu}>Insights</a></li>
        <li><a href="#attorneys" onClick={closeMenu}>Attorney Network</a></li>
      </ul>
    </nav>
  );
}
