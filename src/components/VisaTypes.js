export default function VisaTypes() {
  return (
    <section className="section" id="visa-categories" aria-labelledby="visa-categories-h">
      <div className="container">
        <div className="sec-hdr center fade-up">
          <span className="eyebrow">Coverage</span>
          <div className="gold-rule"></div>
          <h2 className="h2" id="visa-categories-h">Three of the most complex employment-based categories</h2>
          <p className="lead">Purpose-built for extraordinary ability and national interest cases — where precision matters most and the cost of an RFE is highest.</p>
        </div>

        <div className="visa-grid fade-up">
          <div className="visa-card">
            <div className="v-top">
              <div className="v-code">EB-1A</div>
              <div className="v-name">Alien of Extraordinary Ability</div>
            </div>
            <div className="v-body">
              <p className="v-desc">The highest standard in employment-based immigration. Requires sustained national or international acclaim across a demanding 10-criteria framework under 8 CFR &sect; 204.5(h)(3). No job offer or labor certification required.</p>
              <div className="v-items">
                <div className="v-item"><span className="v-dot"></span> Kazarian two-step analysis</div>
                <div className="v-item"><span className="v-dot"></span> 10-criteria evidence mapping</div>
                <div className="v-item"><span className="v-dot"></span> Final Merits Determination support</div>
              </div>
            </div>
          </div>

          <div className="visa-card">
            <div className="v-top">
              <div className="v-code">EB-2 NIW</div>
              <div className="v-name">National Interest Waiver</div>
            </div>
            <div className="v-body">
              <p className="v-desc">Waives job offer and PERM labor certification requirements for individuals whose work is in the national interest of the United States, evaluated under the Matter of Dhanasar (2016) three-prong framework.</p>
              <div className="v-items">
                <div className="v-item"><span className="v-dot"></span> 3-prong Dhanasar analysis</div>
                <div className="v-item"><span className="v-dot"></span> Proposed endeavor statement support</div>
                <div className="v-item"><span className="v-dot"></span> National importance narrative</div>
              </div>
            </div>
          </div>

          <div className="visa-card">
            <div className="v-top">
              <div className="v-code">O-1A</div>
              <div className="v-name">Extraordinary Ability in Business</div>
            </div>
            <div className="v-body">
              <p className="v-desc">Non-immigrant visa for individuals with extraordinary ability in sciences, education, business, or athletics. Evaluated across 8 criteria under 8 CFR &sect; 214.2(o) using a dual-lens adjudicator framework.</p>
              <div className="v-items">
                <div className="v-item"><span className="v-dot"></span> 8-criteria evaluation framework</div>
                <div className="v-item"><span className="v-dot"></span> Dual-lens adjudicator analysis</div>
                <div className="v-item"><span className="v-dot"></span> Intake questionnaire included</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
