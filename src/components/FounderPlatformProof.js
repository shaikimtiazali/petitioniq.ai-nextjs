/* eslint-disable react/no-unescaped-entities */
export default function FounderPlatformProof() {
  return (
    <section className="section sec-gray" aria-labelledby="proof-h">
      <div className="container">
        <div className="sec-hdr center fade-up" style={{ marginBottom: '48px' }}>
          <span className="eyebrow">Why PetitionIQ</span>
          <div className="gold-rule"></div>
          <h2 className="h2" id="proof-h">Practitioner expertise meets intelligent technology.</h2>
          <p className="lead">Built by someone who has prepared these cases. Powered by AI that understands what USCIS actually looks for.</p>
        </div>
        <div className="proof-split">
          <div>
            <div className="founder-card fade-up d1">
              <div className="fc-top">
                <div className="fc-tag">Founder &amp; Employment-Based Immigration Specialist</div>
                <div className="fc-name">Khushboo Jain</div>
                <div className="fc-title">PetitionIQ.ai</div>
              </div>
              <div className="fc-body">
                <p className="fc-bio">
                  With over a decade of hands-on experience preparing EB-1A, EB-2 NIW, and O-1A petitions, Khushboo built PetitionIQ to solve a problem she witnessed every day — the absence of a systematic, criteria-driven pre-filing evaluation that attorneys could trust and their teams could scale. Every checklist, every AI prompt, and every criteria framework in PetitionIQ is grounded in real adjudication logic, not academic theory.
                </p>
                <div className="fc-stats">
                  <div className="fc-stat">
                    <div className="fc-stat-num">10<sup>+</sup></div>
                    <div className="fc-stat-lbl">Years employment-based immigration experience</div>
                  </div>
                  <div className="fc-stat">
                    <div className="fc-stat-num">3</div>
                    <div className="fc-stat-lbl">Visa categories at launch — the most complex</div>
                  </div>
                  <div className="fc-stat">
                    <div className="fc-stat-num">0</div>
                    <div className="fc-stat-lbl">Cases where pre-filing evidence audit is optional</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="platform-hdr fade-up d2">
              <span className="eyebrow">The Platform</span>
              <div className="gold-rule"></div>
              <h3 style={{ fontFamily: 'var(--font-playfair), serif', fontSize: '22px', fontWeight: 600, color: 'var(--navy)', marginBottom: '8px' }}>
                Intelligent by design. Legally grounded by experience.
              </h3>
              <p style={{ fontSize: '13px', color: 'var(--gray-dark)', lineHeight: 1.7 }}>
                PetitionIQ's proprietary AI is built on enterprise-grade large language model infrastructure, trained with immigration-specific legal logic and calibrated against real USCIS adjudication standards — not generic document summarisation.
              </p>
            </div>
            <div className="platform-items">
              <div className="pi fade-up d2">
                <div className="pi-icon">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <rect x="3" y="3" width="14" height="14" rx="2.5" stroke="#C59C38" strokeWidth="1.3" />
                    <path d="M6 10h8M6 13h5" stroke="#C59C38" strokeWidth="1.3" strokeLinecap="round" />
                  </svg>
                </div>
                <div>
                  <div className="pi-title">Smart Checklists — Already Built</div>
                  <div className="pi-desc">EB-1A 10-criteria, NIW 3-prong Dhanasar, and O-1A 8-criteria checklists built from 8 CFR and AAO precedent — not generic templates.</div>
                </div>
              </div>
              <div className="pi fade-up d3">
                <div className="pi-icon">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <circle cx="10" cy="10" r="7" stroke="#C59C38" strokeWidth="1.3" />
                    <path d="M7 10l2 2 4-4" stroke="#C59C38" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <div className="pi-title">Criteria Mapping Engine</div>
                  <div className="pi-desc">Credentials mapped to USCIS adjudication standards with evidence strength scoring — before the attorney sees the file.</div>
                </div>
              </div>
              <div className="pi fade-up d4">
                <div className="pi-icon">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path d="M10 3L12 7.5H17L13 10.5L14.5 15L10 12.5L5.5 15L7 10.5L3 7.5H8L10 3Z" stroke="#C59C38" strokeWidth="1.3" fill="none" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <div className="pi-title">RFE-Resistant Preliminary Analysis</div>
                  <div className="pi-desc">Flags evidential gaps and weak criteria before filing — turning avoidable RFEs into a preventable outcome rather than a surprise cost.</div>
                </div>
              </div>
              <div className="pi fade-up d4">
                <div className="pi-icon">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <rect x="2" y="4" width="16" height="12" rx="2" stroke="#C59C38" strokeWidth="1.3" />
                    <path d="M6 9h8M6 12h5" stroke="#C59C38" strokeWidth="1.3" strokeLinecap="round" />
                  </svg>
                </div>
                <div>
                  <div className="pi-title">Attorney-Supervised Output</div>
                  <div className="pi-desc">Every evaluation runs under the oversight of a supervising, licensed immigration attorney. AI provides the analysis — the attorney provides the legal judgment.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
