export default function AttorneyNetwork() {
  return (
    <section className="section" id="attorneys" aria-labelledby="attorneys-h">
      <div className="container">
        <div className="sec-hdr fade-up">
          <span className="eyebrow">Attorney Network</span>
          <div className="gold-rule"></div>
          <h2 className="h2" id="attorneys-h">Participating Attorneys. Your choice.</h2>
          <p className="lead">PetitionIQ can refer you to a Participating Attorney in our independent network. You are never required to use a network attorney. If you have existing counsel, PetitionIQ&apos;s tools and services remain available to support them directly.</p>
        </div>

        <div className="net-grid fade-up">
          <div className="net-cards">
            <div className="net-card">
              <div className="net-icon" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <rect x="3" y="3.5" width="12" height="11" rx="1.8" stroke="#C59C38" strokeWidth="1.3" />
                  <path d="M6 7h6M6 10h4" stroke="#C59C38" strokeWidth="1.3" strokeLinecap="round" />
                </svg>
              </div>
              <div>
                <div className="net-title">Independent &amp; Licensed</div>
                <div className="net-desc">Every Participating Attorney is independently licensed. They are not employees or agents of PetitionIQ and exercise independent professional judgment on all legal matters.</div>
              </div>
            </div>
            <div className="net-card">
              <div className="net-icon" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M9 3.2l1.6 3.3 3.6.5-2.6 2.6.6 3.6L9 11.6 5.8 13.2l.6-3.6L3.8 7l3.6-.5L9 3.2z" stroke="#C59C38" strokeWidth="1.2" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <div className="net-title">Familiar with PetitionIQ&apos;s Framework</div>
                <div className="net-desc">Participating Attorneys have agreed to operate within PetitionIQ&apos;s structured client journey — meaning B1 and B2 engagements follow a defined, transparent process.</div>
              </div>
            </div>
            <div className="net-card">
              <div className="net-icon" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <circle cx="9" cy="9" r="6.6" stroke="#C59C38" strokeWidth="1.3" />
                  <path d="M6.5 9.1l1.8 1.8 3.7-4" stroke="#C59C38" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <div className="net-title">Bring Your Own Attorney</div>
                <div className="net-desc">You are not required to use a Participating Attorney at any stage. PetitionIQ&apos;s evaluation tools and Employment-Based Immigration Specialist services are available to support your existing legal counsel directly.</div>
              </div>
            </div>
          </div>

          <div className="disc">
            <h3 className="disc-title serif">Referral &amp; Fee Disclosure</h3>
            <p className="disc-sub">PetitionIQ refers users to Participating Attorneys as an administrative service. The following applies to all referrals and fee arrangements.</p>

            <div className="disc-item">
              <span className="disc-arr">&rarr;</span>
              <span>Participating Attorneys are independent practitioners. They are not employees, partners, or agents of PetitionIQ.</span>
            </div>
            <div className="disc-item">
              <span className="disc-arr">&rarr;</span>
              <span>PetitionIQ does not receive referral fees or client referral compensation of any kind. PetitionIQ invoices Participating Attorneys directly for case preparation, Employment-Based Immigration Specialist services, and platform access rendered in connection with each engagement.</span>
            </div>
            <div className="disc-item">
              <span className="disc-arr">&rarr;</span>
              <span>Stage B1 consultation fees are paid by the client directly to the Law Firm. PetitionIQ invoices the Law Firm separately for preparation and platform services — not for the referral itself.</span>
            </div>
            <div className="disc-item">
              <span className="disc-arr">&rarr;</span>
              <span>Stage B2 legal fees are paid by the client directly to the Law Firm. PetitionIQ&apos;s Employment-Based Immigration Specialist service fee is invoiced to the Law Firm — these are professional service charges, not referral fees, and do not constitute fee-sharing under TDRPC Rule 5.04 or ABA Model Rule 5.4.</span>
            </div>
            <div className="disc-item">
              <span className="disc-arr">&rarr;</span>
              <span>PetitionIQ does not guarantee the outcome of any matter. Selection of legal counsel is solely the client&apos;s decision.</span>
            </div>

            <div className="fee-box">
              <div className="fee-lbl">Fee Structure Clarification</div>
              <p className="fee-txt">PetitionIQ is compensated exclusively for professional services — case preparation, Employment-Based Immigration Specialist work, and platform access — rendered directly to Participating Attorneys. PetitionIQ receives no compensation tied to whether a client engages or retains legal counsel.</p>
            </div>

            <p className="disc-legal">PetitionIQ is not a law firm and does not practice law. Nothing in this disclosure constitutes legal advice. Use of the referral service does not create an attorney-client relationship with PetitionIQ. Terms of PetitionIQ&apos;s agreements with Participating Attorneys are available upon request.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
