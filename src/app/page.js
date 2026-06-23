"use client";

import { useEffect, useState } from 'react';
import CookieBar from '../components/CookieBar';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import TrustBar from '../components/TrustBar';
import TierStructure from '../components/TierStructure';
import FounderPlatformProof from '../components/FounderPlatformProof';
import Evaluator from '../components/Evaluator';
import B1CTA from '../components/B1CTA';
import VisaTypes from '../components/VisaTypes';
import BlogSection from '../components/BlogSection';
import AttorneyNetwork from '../components/AttorneyNetwork';
import Footer from '../components/Footer';

export default function Home() {
  const [isSchedulerOpen, setIsSchedulerOpen] = useState(false);

  // Global scroll animations trigger (Fade-In Reveal Observer)
  useEffect(() => {
    const fadeUpElements = document.querySelectorAll('.fade-up');
    const fadeObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.08,
      rootMargin: '0px 0px -20px 0px'
    });

    fadeUpElements.forEach(el => fadeObserver.observe(el));
    
    return () => {
      fadeObserver.disconnect();
    };
  }, []);

  const handleOpenScheduler = () => {
    setIsSchedulerOpen(true);
    // Smooth scroll to scheduler section
    const element = document.getElementById('b1-consult');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Navbar />
      <main id="content">
        <Hero />
        <TrustBar />
        <TierStructure />
        <FounderPlatformProof />
        <Evaluator onOpenScheduler={handleOpenScheduler} />
        <B1CTA
          isOpen={isSchedulerOpen}
          onOpen={() => setIsSchedulerOpen(true)}
          onClose={() => setIsSchedulerOpen(false)}
        />
        <VisaTypes />
        <BlogSection />
        <AttorneyNetwork />
      </main>
      <Footer />
      <CookieBar />
    </>
  );
}
