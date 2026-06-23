export default function TrustBar() {
  return (
    <div className="trust-bar" role="complementary" aria-label="Trust signals">
      <div className="container trust-in">
        <div className="t-item">
          <div className="t-icon" aria-hidden="true">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M7 1L8.8 5.2L13 5.9L10 8.8L10.6 13L7 11L3.4 13L4 8.8L1 5.9L5.2 5.2L7 1Z" stroke="#C59C38" strokeWidth="1.2" fill="none" strokeLinejoin="round" />
            </svg>
          </div>
          <span className="t-text">10+ Years Immigration Experience</span>
        </div>
        <div className="t-sep" aria-hidden="true"></div>
        <div className="t-item">
          <div className="t-icon" aria-hidden="true">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <rect x="2" y="3" width="10" height="8" rx="1.5" stroke="#C59C38" strokeWidth="1.2" />
              <path d="M5 6h4M5 8.5h2.5" stroke="#C59C38" strokeWidth="1.2" strokeLinecap="round" />
            </svg>
          </div>
          <span className="t-text">Attorney-Supervised Platform</span>
        </div>
        <div className="t-sep" aria-hidden="true"></div>
        <div className="t-item">
          <div className="t-icon" aria-hidden="true">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <circle cx="7" cy="7" r="5" stroke="#C59C38" strokeWidth="1.2" />
              <path d="M5 7l1.5 1.5L9.5 5" stroke="#C59C38" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <span className="t-text">Proprietary AI Technology</span>
        </div>
        <div className="t-sep" aria-hidden="true"></div>
        <div className="t-item">
          <div className="t-icon" aria-hidden="true">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M4 7h6M7 4v6" stroke="#C59C38" strokeWidth="1.2" strokeLinecap="round" />
              <circle cx="7" cy="7" r="5" stroke="#C59C38" strokeWidth="1.2" />
            </svg>
          </div>
          <span className="t-text">Not a Law Firm · No Legal Advice</span>
        </div>
      </div>
    </div>
  );
}
