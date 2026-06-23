/* eslint-disable react/no-unescaped-entities */
export default function TierStructure() {
  return (
    <section className="section" id="how-it-works" aria-labelledby="tiers-h">
      <div className="container">
        <div className="sec-hdr center fade-up">
          <span className="eyebrow">Client Journey</span>
          <div className="gold-rule"></div>
          <h2 className="h2" id="tiers-h">Four stages. Your choice at every step.</h2>
          <p className="lead">
            No stage obligates you to proceed to the next. Legal representation commences only upon a signed Attorney-Client Engagement Agreement.
          </p>
        </div>
        <div className="tiers fade-up" role="list" aria-label="Service stages">
          <div className="tier-conn" aria-hidden="true"></div>
          
          <div className="tier feat" role="listitem">
            <div className="t-num tn-a" aria-hidden="true">A</div>
            <div className="t-lbl">Stage A</div>
            <div className="t-name">Free AI Evaluation &amp; Platform Orientation</div>
            <span className="t-price tp-free">No Fee</span>
            <div className="t-desc">
              Preliminary AI-powered assessment of immigration credentials against USCIS criteria. No attorney involvement. No legal advice. Governed by PetitionIQ's UPL Acknowledgment.
            </div>
            <div className="t-note">Does not create an attorney-client relationship. Output is for informational purposes only.</div>
          </div>

          <div className="tier" role="listitem">
            <div className="t-num tn-b1" aria-hidden="true">B1</div>
            <div className="t-lbl">Stage B1</div>
            <div className="t-name">Paid Strategic Onboarding Consultation</div>
            <span className="t-price tp-paid">Flat Consultation Fee</span>
            <div className="t-desc">
              Paid, limited-scope consultation with a Participating Attorney. Consultation fee paid directly to the Law Firm. PetitionIQ invoices the Law Firm separately for case preparation services — not for the referral. B1 does not obligate the attorney to accept your matter.
            </div>
            <div className="t-note">Governed by the Limited-Scope Consultation Agreement. Fee credit toward B2 at attorney's sole discretion.</div>
          </div>

          <div className="tier" role="listitem">
            <div className="t-num tn-b2" aria-hidden="true">B2</div>
            <div className="t-lbl">Stage B2</div>
            <div className="t-name">Full Case Commencement &amp; Preparation</div>
            <span className="t-price tp-full">Per-Case / Retainer</span>
            <div className="t-desc">
              Full case preparation begins only upon execution of an Attorney-Client Engagement Agreement. Legal fees paid directly to the Law Firm. PetitionIQ invoices the Law Firm for Employment-Based Immigration Specialist services — not fee-sharing under TDRPC Rule 5.04 or ABA Model Rule 5.4.
            </div>
            <div className="t-note">Per-case flat fee, monthly retainer, or hybrid model per Schedule A.</div>
          </div>

          <div className="tier" role="listitem">
            <div className="t-num tn-b3" aria-hidden="true">B3</div>
            <div className="t-lbl">Stage B3</div>
            <div className="t-name">PetitionIQ Non-Legal Platform Services</div>
            <span className="t-price tp-dir">Direct Client Billing</span>
            <div className="t-desc">
              PetitionIQ may invoice the client directly for non-legal administrative services, platform access, and third-party costs outside the scope of the Law Firm's legal representation per Schedule E.
            </div>
            <div className="t-note">Entirely separate from the Law Firm's legal fees. Does not constitute fee-sharing under applicable professional conduct rules.</div>
          </div>

        </div>
      </div>
    </section>
  );
}
