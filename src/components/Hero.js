export default function Hero() {
  return (
    <section className="hero" aria-label="Hero section">
      <div className="glow glow-a" aria-hidden="true"></div>
      <div className="glow glow-b" aria-hidden="true"></div>
      <div className="container hero-in">
        <div className="hero-grid">
          <div>
            <span className="eyebrow eyebrow-lt">AI-Powered Immigration Evaluation</span>
            <h1 className="hero-disp">Your petition,<br /><em>precisely argued.</em></h1>
            <p className="hero-body">
              PetitionIQ maps immigration credentials against USCIS adjudication standards before your firm files a single page. Evaluate free. Engage an attorney when ready.
            </p>
            <div className="hero-tags" role="list" aria-label="Visa coverage">
              <span className="tag" role="listitem">EB-1A</span>
              <span className="tag" role="listitem">EB-2 NIW</span>
              <span className="tag" role="listitem">O-1A</span>
              <span className="tag" role="listitem">Proprietary AI</span>
              <span className="tag" role="listitem">Attorney-Supervised</span>
            </div>
            <div className="hero-btns">
              <a href="#evaluator" className="btn btn-gold">
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
                  <path d="M2 6.5L5.5 10L11 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Free AI Evaluation — Stage A
              </a>
              <a href="#how-it-works" className="btn btn-ghost">See All Stages</a>
            </div>
          </div>
          <div className="sp fade-up d2" aria-hidden="true">
            <div className="sp-bar">
              <div className="sp-dots">
                <div className="sp-dot" style={{ background: '#FF5F57' }}></div>
                <div className="sp-dot" style={{ background: '#FFBD2E' }}></div>
                <div className="sp-dot" style={{ background: '#28C840' }}></div>
              </div>
              <span className="sp-caption">PetitionIQ — Client Journey</span>
            </div>
            <div className="sp-body">
              <div className="sp-row">
                <div className="sp-badge ba">A</div>
                <div>
                  <div className="sp-name">Free AI Evaluation</div>
                  <div className="sp-desc">AI-only · No attorney · No fee</div>
                </div>
                <div className="sp-price">Free</div>
              </div>
              <div className="sp-row">
                <div className="sp-badge bb1">B1</div>
                <div>
                  <div className="sp-name">Strategic Consultation</div>
                  <div className="sp-desc">Paid · Participating Attorney · No obligation</div>
                </div>
                <div className="sp-price">Flat fee</div>
              </div>
              <div className="sp-row">
                <div className="sp-badge bb2">B2</div>
                <div>
                  <div className="sp-name">Full Case Preparation</div>
                  <div className="sp-desc">Attorney-Client Agreement required</div>
                </div>
                <div className="sp-price">Per case</div>
              </div>
              <div className="sp-row">
                <div className="sp-badge bb3">B3</div>
                <div>
                  <div className="sp-name">Non-Legal Services</div>
                  <div className="sp-desc">Platform tools billed directly</div>
                </div>
                <div className="sp-price">Schedule E</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
