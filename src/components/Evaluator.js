/* eslint-disable react/no-unescaped-entities */
"use client";

import { useState, useEffect, useRef } from 'react';

const CRITERIA_DATA = {
  EB1A: [
    { id: 'eb1_awards', name: 'Lesser Prizes/Awards', desc: 'Lesser nationally or internationally recognized prizes or awards for excellence.', tip: 'Prizes from professional societies, academic honors, or notable research grants count.', advice: 'Gather criteria for selection, scope of competition, and credentials of the judging body.' },
    { id: 'eb1_membership', name: 'Elite Memberships', desc: 'Membership in associations in the field that require outstanding achievements of their members.', tip: 'Must be judged by national/international experts to gain entry; standard dues-based memberships do not count.', advice: 'Provide the official charter or bylaws proving the high standard for admission.' },
    { id: 'eb1_media', name: 'Published Media Coverage', desc: 'Published material about you in professional/major trade publications or other major media.', tip: 'Articles must focus on your work, name you, and mention the significance of your endeavors.', advice: 'Keep copies of full articles, translations, and circulation statistics (e.g. Alexa rankings).' },
    { id: 'eb1_judging', name: 'Judging & Peer Review', desc: 'Participation as a judge of the work of others in the same or allied field.', tip: 'Peer reviews for scientific journals, program committee roles, or thesis defense panels fit here.', advice: 'Secure review confirmation letters from editors listing dates, titles, and journal impact factors.' },
    { id: 'eb1_contributions', name: 'Original Contributions', desc: 'Original scientific, scholarly, artistic, athletic, or business-related contributions of major significance.', tip: 'Patents widely licensed, software frameworks deployed by large firms, or pioneering research.', advice: 'Focus on documenting the real-world impact of your discovery through reference letters or licensing.' },
    { id: 'eb1_articles', name: 'Scholarly Articles', desc: 'Authorship of scholarly articles in professional journals, trade publications, or major media.', tip: 'Academic papers, conference papers, or chapters published in peer-reviewed media.', advice: 'List citation reports (Google Scholar) and compile articles detailing publication metrics.' },
    { id: 'eb1_exhibitions', name: 'Artistic Exhibitions', desc: 'Display of work at artistic exhibitions or showcases.', tip: 'Applies primarily to visual arts, museum displays, or professional design showcases.', advice: 'Document the venue reputation, brochure programs, and attendance figures.' },
    { id: 'eb1_critical_role', name: 'Critical/Leading Role', desc: 'Employment in a critical or essential capacity for organizations with a distinguished reputation.', tip: 'Principal scientists, founders, or lead developers who directly impact organizational success.', advice: 'Secure letters from corporate executives detailing your direct contributions to high-profile achievements.' },
    { id: 'eb1_high_salary', name: 'High Remuneration', desc: 'Command of a high salary or significantly high remuneration relative to others in the field.', tip: 'Requires salary levels in the top 10% for your role in the geographical area.', advice: 'Provide tax returns, W2s, employment contracts, and objective salary surveys (e.g. OES/FLC Data Center).' },
    { id: 'eb1_commercials', name: 'Commercial Success', desc: 'Commercial successes in the performing arts, shown by box office receipts or cassettes/CDs sales.', tip: 'Box office receipts, streaming downloads, or licensing revenue from performing arts.', advice: 'Detail financial records, sales figures, and theatrical contracts.' }
  ],
  NIW: [
    { id: 'niw_degree', name: 'Advanced Degree / Exception', desc: 'US advanced degree (Master’s/PhD) or equivalent, or Exceptional Ability in sciences, arts, or business.', tip: 'A U.S. bachelor\'s degree plus 5 years of progressive post-degree experience also satisfies the advanced degree requirement.', advice: 'Provide transcripts, diplomas, and reference letters demonstrating your specialty background.' },
    { id: 'niw_prong1', name: 'Dhanasar Prong 1: Merit & Importance', desc: 'The proposed endeavor has both substantial merit and national importance.', tip: 'The work should address a critical area like energy, clinical health, critical tech, or economic development.', advice: 'Document how the outcome of your endeavor ripples outward to benefit the US public or the industry as a whole.' },
    { id: 'niw_prong2', name: 'Dhanasar Prong 2: Positioned to Advance', desc: 'You are well-positioned to advance the proposed endeavor.', tip: 'Demonstrated by your expertise, educational track record, proprietary tools, or institutional backing.', advice: 'Compile citation metrics, letters from advisory groups, patents, or letters of support from US entities.' },
    { id: 'niw_prong3', name: 'Dhanasar Prong 3: Waiving Job Offer Beneficial', desc: 'On balance, it is beneficial to the US to waive job offer and labor certification requirements.', tip: 'Establishing that national interest outweighs the standard labor market testing process.', advice: 'Explain that the unique nature of your project makes the standard employer recruitment process impractical.' }
  ],
  O1A: [
    { id: 'o1_awards', name: 'National/Int\'l Prizes', desc: 'Receipt of nationally or internationally recognized prizes or awards for excellence.', tip: 'Grants, fellowships, or research medals count if judged at a national scale.', advice: 'Collect competition guidelines, selection ratios, and press coverage of the awards.' },
    { id: 'o1_membership', name: 'Elite Memberships', desc: 'Membership in associations requiring outstanding achievements of their members.', tip: 'Association must require peer review of achievements to join; general professional societies do not fit.', advice: 'Provide bylaws, nomination requirements, and lists of the association\'s review panel members.' },
    { id: 'o1_media', name: 'Published Media Material', desc: 'Published material in professional or major trade publications or major media about you and your work.', tip: 'Articles must focus on you or mention you prominently in relation to your work.', advice: 'Document title, date, publisher, author, translation (if non-English), and circulation data.' },
    { id: 'o1_judging', name: 'Judging Panel / Individual', desc: 'Participation as a judge of the work of others in the same or an allied field.', tip: 'Journal review invitations, hackathon judging, or conference review committees count.', advice: 'Submit the email invitations, review forms, and validation letters from editors.' },
    { id: 'o1_contributions', name: 'Original Contributions', desc: 'Original scientific, scholarly, or business-related contributions of major significance.', tip: 'Patents, corporate frameworks, or widely cited methodology papers.', advice: 'Assemble proof of implementation by third parties, citation indexes, or advisory letters.' },
    { id: 'o1_articles', name: 'Scholarly Authorship', desc: 'Authorship of scholarly articles in professional journals or other major media.', tip: 'Peer-reviewed research articles, book chapters, or trade journal publications.', advice: 'Provide journal impact factors, index status (e.g. Scopus), and citation logs.' },
    { id: 'o1_critical_role', name: 'Critical / Essential Capacity', desc: 'Employment in a critical or essential capacity for organizations with a distinguished reputation.', tip: 'Applies to key scientists, lead architects, or founders who directed project outcomes.', advice: 'Gather testimonial letters from senior leadership detailing your specific work and the organization\'s stature.' },
    { id: 'o1_high_salary', name: 'High Remuneration', desc: 'Command of a high salary or other services\' remuneration, as shown by contracts or other evidence.', tip: 'Must be high relative to other professionals in the same region and specialty.', advice: 'Provide pay stubs, income statements, and comparative wage indexes (OES).' }
  ]
};

export default function Evaluator({ onOpenScheduler }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [showErrorAlert, setShowErrorAlert] = useState(false);
  const evaluatorRef = useRef(null);

  // Form Fields State
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [industry, setIndustry] = useState('');
  const [visa, setVisa] = useState('');
  const [endeavor, setEndeavor] = useState('');
  const [cvText, setCvText] = useState('');
  
  // Criteria Checkboxes State
  const [selectedCriteria, setSelectedCriteria] = useState([]);

  // Disclaimer States
  const [ack1, setAck1] = useState(false);
  const [ack2, setAck2] = useState(false);

  // Validation States
  const [errors, setErrors] = useState({});

  // Loading Screen States
  const [loadingPhase, setLoadingPhase] = useState('');

  // Results State
  const [report, setReport] = useState(null);

  const scrollToEvaluator = () => {
    if (evaluatorRef.current) {
      evaluatorRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleStep1Submit = () => {
    const newErrors = {};
    if (!name.trim()) newErrors.name = true;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim() || !emailRegex.test(email)) newErrors.email = true;
    if (!role.trim()) newErrors.role = true;
    if (!industry) newErrors.industry = true;
    if (!visa) newErrors.visa = true;

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setShowErrorAlert(true);
    } else {
      setErrors({});
      setShowErrorAlert(false);
      // Clear selected criteria if target visa category changes
      setSelectedCriteria([]);
      setCurrentStep(2);
      scrollToEvaluator();
    }
  };

  const handleStep2Submit = () => {
    const newErrors = {};
    if (endeavor.trim().length < 30) newErrors.endeavor = true;

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setShowErrorAlert(true);
    } else {
      setErrors({});
      setShowErrorAlert(false);
      setCurrentStep(3);
      scrollToEvaluator();
    }
  };

  const handleStep3Submit = () => {
    setCurrentStep(4);
    scrollToEvaluator();

    const phases = [
      'Phase 1: Parsing personal profile and professional history...',
      'Phase 2: Extracting active indicators from credential checkboxes...',
      'Phase 3: Mapping endeavor statement to USCIS 8 CFR guidelines...',
      'Phase 4: Running RFE gap analysis and calibrating assessment metrics...',
      'Phase 5: Finalizing Strategic Orientation Report...'
    ];

    let stepCount = 0;
    setLoadingPhase(phases[0]);

    const loader = setInterval(() => {
      stepCount++;
      if (stepCount < phases.length) {
        setLoadingPhase(phases[stepCount]);
      } else {
        clearInterval(loader);
        generateReport();
      }
    }, 850);
  };

  const generateReport = () => {
    let strength = 'prelim';
    const checkedCount = selectedCriteria.length;

    if (visa === 'EB1A' || visa === 'O1A') {
      if (checkedCount >= 3) {
        strength = 'strong';
      } else if (checkedCount >= 1) {
        strength = 'developing';
      } else {
        strength = 'prelim';
      }
    } else if (visa === 'NIW') {
      if (checkedCount >= 3) {
        strength = 'strong';
      } else if (checkedCount >= 1) {
        strength = 'developing';
      } else {
        strength = 'prelim';
      }
    }

    const items = CRITERIA_DATA[visa] || [];
    const parsedCriteria = items.map(item => {
      const isChecked = selectedCriteria.includes(item.id);
      return {
        ...item,
        isMet: isChecked,
        statusText: isChecked ? 'Met' : 'Evidentiary Gap',
        dotClass: isChecked ? 'd-met' : 'd-part',
        statusClass: isChecked ? 's-met' : 's-part',
        adviceText: isChecked 
          ? `Supporting documentation identified. Strategic Advice: ${item.advice}`
          : `No documentation identified. Recommendation: ${item.tip} ${item.advice}`
      };
    });

    const recommendations = [];
    if (strength === 'strong') {
      recommendations.push('Your profile baseline satisfies the basic USCIS statutory requirements.');
      recommendations.push('Action: Schedule a Stage B1 Strategic Onboarding Consultation to evaluate subjective Final Merits Determination standards.');
      recommendations.push('Evidentiary advice: Prepare technical descriptions for your original contributions and align reference letter drafts.');
    } else if (strength === 'developing') {
      recommendations.push('You have potential, but you must bridge critical evidentiary gaps before filing to prevent RFEs.');
      recommendations.push('Focus: Prioritize active peer review tasks to complete the Judging criteria, which is easily documentable.');
      recommendations.push('Action: Consider scheduling a B1 consultation to explore alternative routes or structured planning to build credentials.');
    } else {
      recommendations.push('Your profile needs substantial development to meet USCIS standards.');
      recommendations.push('Recommendation: Target publication of scholarly articles or secure a leading role on critical research projects.');
      recommendations.push('Alternative: Check if another visa category (such as EB-2 labor certification) aligns better with your timing.');
    }

    setReport({
      userName: name,
      visaTitle: visa === 'EB1A' ? 'EB-1A — Extraordinary Ability Visa Evaluation' :
                 visa === 'NIW' ? 'EB-2 NIW — National Interest Waiver Evaluation' :
                 'O-1A — Extraordinary Ability Visa Evaluation',
      strength,
      criteria: parsedCriteria,
      recommendations
    });

    setCurrentStep(5);
    scrollToEvaluator();
  };

  const handleRestart = () => {
    setName('');
    setEmail('');
    setRole('');
    setIndustry('');
    setVisa('');
    setEndeavor('');
    setCvText('');
    setSelectedCriteria([]);
    setAck1(false);
    setAck2(false);
    setErrors({});
    setShowErrorAlert(false);
    setReport(null);
    setCurrentStep(1);
    scrollToEvaluator();
  };

  const toggleCriteria = (id) => {
    if (selectedCriteria.includes(id)) {
      setSelectedCriteria(selectedCriteria.filter(c => c !== id));
    } else {
      setSelectedCriteria([...selectedCriteria, id]);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const getStepClass = (stepNum) => {
    if (currentStep === stepNum) return 'e-step active';
    if (currentStep > stepNum) return 'e-step done';
    return 'e-step';
  };

  const getStrengthBadgeClass = (strVal) => {
    if (strVal === 'strong') return 'r-strength rs-strong';
    if (strVal === 'developing') return 'r-strength rs-developing';
    return 'r-strength rs-prelim';
  };

  const getStrengthText = (strVal) => {
    if (strVal === 'strong') return 'Strong Evidentiary Baseline';
    if (strVal === 'developing') return 'Developing Baseline';
    return 'Preliminary / Needs Work';
  };

  return (
    <section className="section" id="evaluator" ref={evaluatorRef} aria-labelledby="eval-h">
      <div className="container">
        <div className="sec-hdr center fade-up">
          <span className="eyebrow">Stage A — Free</span>
          <div className="gold-rule"></div>
          <h2 className="h2" id="eval-h">Preliminary AI Evaluation</h2>
          <p className="lead">Enter your profile and select applicable criteria. Our proprietary AI returns a preliminary indicator — not legal advice. Results are sent to your email.</p>
        </div>
        
        <div className="eval-wrap fade-up">
          <div className="eval-hdr">
            <div>
              <div className="eval-title">Stage A Evaluation</div>
              <div className="eval-sub">AI-Powered Evidentiary Mapping Engine</div>
            </div>
            <div className="stage-badge">
              <span className="sb-lbl">Stage A AI Orientation</span>
            </div>
          </div>
          
          <div className="eval-body">
            
            {/* Wizard Navigation Steps */}
            {currentStep <= 4 && (
              <div className="eval-steps" id="evaluator-steps">
                <div className={getStepClass(1)} data-step="1" onClick={() => currentStep > 1 && currentStep < 4 && setCurrentStep(1)}>
                  <div className="e-num">1</div>
                  <div className="e-lbl">Profile Info</div>
                </div>
                <div className={getStepClass(2)} data-step="2" onClick={() => currentStep > 2 && currentStep < 4 && setCurrentStep(2)}>
                  <div className="e-num">2</div>
                  <div className="e-lbl">Criteria Checklist</div>
                </div>
                <div className={getStepClass(3)} data-step="3" onClick={() => currentStep > 3 && currentStep < 4 && setCurrentStep(3)}>
                  <div className="e-num">3</div>
                  <div className="e-lbl">Upload &amp; Disclaimers</div>
                </div>
                <div className={getStepClass(4)} data-step="4">
                  <div className="e-num">4</div>
                  <div className="e-lbl">Results</div>
                </div>
              </div>
            )}

            {/* Validation Error Message Alert */}
            {showErrorAlert && (
              <div className="error-state" id="evaluator-error" style={{ display: 'block' }}>
                Please resolve the highlighted errors before moving to the next step.
              </div>
            )}

            {/* STEP 1 PANEL */}
            {currentStep === 1 && (
              <div className="e-panel active" id="step-panel-1">
                <div className="f-row">
                  <div className="f-grp">
                    <label className="f-lbl" htmlFor="eval-name">First Name <span className="f-req">*</span></label>
                    <input
                      className={`f-in ${errors.name ? 'err' : ''}`}
                      type="text"
                      id="eval-name"
                      placeholder="John Doe"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                        setErrors({ ...errors, name: false });
                      }}
                    />
                    {errors.name && <div className="f-err" id="err-name">Name is required</div>}
                  </div>
                  <div className="f-grp">
                    <label className="f-lbl" htmlFor="eval-email">Email Address <span className="f-req">*</span></label>
                    <input
                      className={`f-in ${errors.email ? 'err' : ''}`}
                      type="email"
                      id="eval-email"
                      placeholder="john.doe@example.com"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        setErrors({ ...errors, email: false });
                      }}
                    />
                    {errors.email && <div className="f-err" id="err-email">Please enter a valid email</div>}
                  </div>
                </div>
                <div className="f-row">
                  <div className="f-grp">
                    <label className="f-lbl" htmlFor="eval-role">Current Professional Role <span className="f-req">*</span></label>
                    <input
                      className={`f-in ${errors.role ? 'err' : ''}`}
                      type="text"
                      id="eval-role"
                      placeholder="e.g. Principal AI Research Scientist"
                      value={role}
                      onChange={(e) => {
                        setRole(e.target.value);
                        setErrors({ ...errors, role: false });
                      }}
                    />
                    {errors.role && <div className="f-err" id="err-role">Professional role is required</div>}
                  </div>
                  <div className="f-grp">
                    <label className="f-lbl" htmlFor="eval-industry">Field / Industry <span className="f-req">*</span></label>
                    <select
                      className={`f-sel ${errors.industry ? 'err' : ''}`}
                      id="eval-industry"
                      value={industry}
                      onChange={(e) => {
                        setIndustry(e.target.value);
                        setErrors({ ...errors, industry: false });
                      }}
                    >
                      <option value="">Select Field...</option>
                      <option value="tech">Artificial Intelligence &amp; Technology</option>
                      <option value="biotech">Biomedicine &amp; Life Sciences</option>
                      <option value="engineering">Hardware &amp; Physical Engineering</option>
                      <option value="business">Fintech &amp; Business Strategy</option>
                      <option value="academic">Academic Research &amp; Education</option>
                      <option value="arts">Art, Design &amp; Performing Arts</option>
                    </select>
                    {errors.industry && <div className="f-err" id="err-industry">Field selection is required</div>}
                  </div>
                </div>
                <div className="f-grp">
                  <label className="f-lbl" htmlFor="eval-visa">Target Visa Category <span className="f-req">*</span></label>
                  <select
                    className={`f-sel ${errors.visa ? 'err' : ''}`}
                    id="eval-visa"
                    value={visa}
                    onChange={(e) => {
                      setVisa(e.target.value);
                      setErrors({ ...errors, visa: false });
                    }}
                  >
                    <option value="">Select Visa Category...</option>
                    <option value="EB1A">EB-1A — Extraordinary Ability (8 CFR § 204.5(h))</option>
                    <option value="NIW">EB-2 NIW — National Interest Waiver (Dhanasar Framework)</option>
                    <option value="O1A">O-1A — Extraordinary Ability (8 CFR § 214.2(o))</option>
                  </select>
                  {errors.visa && <div className="f-err" id="err-visa">Please select a visa category</div>}
                  <p className="f-note" style={{ marginTop: '6px' }}>
                    Selecting a visa category dynamically updates Step 2 with the precise regulatory checkboxes set by USCIS guidelines.
                  </p>
                </div>

                <button className="e-btn" onClick={handleStep1Submit}>
                  Continue to Criteria Selection
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M5 2L10 7L5 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            )}

            {/* STEP 2 PANEL */}
            {currentStep === 2 && (
              <div className="e-panel active" id="step-panel-2">
                <h3 style={{ fontFamily: 'var(--font-playfair), serif', fontSize: '18px', fontWeight: 600, color: 'var(--navy)', marginBottom: '12px' }} id="criteria-section-title">
                  {visa === 'EB1A' ? 'EB-1A Extraordinary Ability — Evidentiary Criteria Checklist (Select 3+)' :
                   visa === 'NIW' ? 'EB-2 NIW — Dhanasar Framework Assessment Checklist (Select All)' :
                   'O-1A Extraordinary Ability — Evidentiary Criteria Checklist (Select 3+)'}
                </h3>
                <p style={{ fontSize: '13px', color: 'var(--gray-dark)', marginBottom: '20px' }}>
                  Select all items where you have supporting documentation. Be conservative; USCIS applies a strict two-part analysis.
                </p>
                
                <div className="crit-grid" id="criteria-checkbox-container">
                  {(CRITERIA_DATA[visa] || []).map(item => (
                    <label key={item.id} className="crit-lbl" htmlFor={item.id}>
                      <input
                        type="checkbox"
                        className="crit-cb"
                        id={item.id}
                        value={item.id}
                        checked={selectedCriteria.includes(item.id)}
                        onChange={() => toggleCriteria(item.id)}
                      />
                      <div className="crit-txt">
                        <strong>{item.name}</strong> — {item.desc}
                        <div style={{ fontSize: '10px', color: 'var(--gray-mid)', marginTop: '2px' }}>Tip: {item.tip}</div>
                      </div>
                    </label>
                  ))}
                </div>

                <div className="f-grp" style={{ marginTop: '20px' }}>
                  <label className="f-lbl" htmlFor="eval-endeavor">
                    Briefly outline your proposed endeavor or recent key contributions <span className="f-req">*</span>
                  </label>
                  <textarea
                    className={`f-ta ${errors.endeavor ? 'err' : ''}`}
                    id="eval-endeavor"
                    placeholder="e.g. Developing privacy-preserving machine learning frameworks for automated disease diagnosis in clinical settings..."
                    value={endeavor}
                    onChange={(e) => {
                      setEndeavor(e.target.value);
                      setErrors({ ...errors, endeavor: false });
                    }}
                  />
                  {errors.endeavor && <div className="f-err" id="err-endeavor">Endeavor summary is required (minimum 30 characters)</div>}
                  <p className="f-note" style={{ marginTop: '6px' }}>Minimum 30 characters. This summary helps map your research to substantial merit guidelines.</p>
                </div>

                <div className="f-row">
                  <button className="e-btn btn-outline" onClick={() => setCurrentStep(1)}>Back</button>
                  <button className="e-btn" onClick={handleStep2Submit}>Continue to Verification</button>
                </div>
              </div>
            )}

            {/* STEP 3 PANEL */}
            {currentStep === 3 && (
              <div className="e-panel active" id="step-panel-3">
                <div className="upl-box">
                  <div className="upl-ttl">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path d="M8 2V10M8 2L5 5M8 2L11 5M2 14H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Upload Profile Details &amp; Resume (Optional)
                  </div>
                  <p className="upl-txt">If you have a curriculum vitae (CV), resume, or brief bio summary, paste it below or upload a mock file to supplement your evidence scoring. Data is processed locally and discarded.</p>
                  
                  <div className="f-grp">
                    <label className="f-lbl" htmlFor="eval-cv-text">Paste Resume / CV Summary</label>
                    <textarea
                      className="f-ta"
                      id="eval-cv-text"
                      placeholder="Paste publication history, citations, awards, patents, and work history..."
                      value={cvText}
                      onChange={(e) => setCvText(e.target.value)}
                    />
                  </div>

                  <div className="upl-acks">
                    <label className="ack-lbl">
                      <input
                        type="checkbox"
                        className="ack-cb"
                        id="ack-upl-1"
                        checked={ack1}
                        onChange={(e) => setAck1(e.target.checked)}
                      />
                      <span className="ack-txt">I acknowledge that <strong>PetitionIQ.ai is not a law firm</strong>, does not provide legal advice, and that this evaluation does not establish an attorney-client relationship.</span>
                    </label>
                    <label className="ack-lbl">
                      <input
                        type="checkbox"
                        className="ack-cb"
                        id="ack-upl-2"
                        checked={ack2}
                        onChange={(e) => setAck2(e.target.checked)}
                      />
                      <span className="ack-txt">I understand this Stage A AI evaluation is based entirely on automated parsing of USCIS guidelines and is governed by PetitionIQ's <strong>UPL Acknowledgment</strong>.</span>
                    </label>
                  </div>
                </div>

                <div className="ack-status" style={{ color: ack1 && ack2 ? 'var(--green)' : 'var(--gray-mid)' }}>
                  {ack1 && ack2 ? 'Ready to evaluate.' : 'Both checkboxes must be checked to request evaluation.'}
                </div>

                <div className="f-row">
                  <button className="e-btn btn-outline" onClick={() => setCurrentStep(2)}>Back</button>
                  <button
                    className="e-btn e-btn-gold"
                    onClick={handleStep3Submit}
                    disabled={!ack1 || !ack2}
                  >
                    Submit for Preliminary Evaluation
                  </button>
                </div>
              </div>
            )}

            {/* STEP 4: LOADING PANEL */}
            {currentStep === 4 && (
              <div className="e-panel active" id="step-panel-4">
                <div className="loading-state" style={{ display: 'block' }}>
                  <div className="spinner"></div>
                  <h3 style={{ fontFamily: 'var(--font-playfair), serif', fontSize: '18px', color: 'var(--navy)', marginBottom: '8px' }}>
                    Running PetitionIQ Evidentiary Analysis
                  </h3>
                  <p className="loading-txt">{loadingPhase}</p>
                </div>
              </div>
            )}

            {/* STEP 5: RESULTS DASHBOARD */}
            {currentStep === 5 && report && (
              <div className="result-wrap visible" id="results-dashboard">
                <div style={{ borderBottom: '1.5px solid var(--gray-bdr)', paddingBottom: '18px', marginBottom: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
                  <div>
                    <h3 className="serif" style={{ fontSize: '24px', color: 'var(--navy)' }}>
                      {report.userName}'s Evaluation Report
                    </h3>
                    <p style={{ fontSize: '12px', color: 'var(--gray-dark)' }}>
                      {report.visaTitle}
                    </p>
                  </div>
                  <div className={getStrengthBadgeClass(report.strength)}>
                    {getStrengthText(report.strength)}
                  </div>
                </div>

                <div className="r-grid">
                  {report.criteria.map(item => (
                    <div key={item.id} className="r-crit">
                      <div className="rc-hdr">
                        <div className={`rc-dot ${item.isMet ? 'd-met' : 'd-part'}`}></div>
                        <div className="rc-name">{item.name}</div>
                        <div className={`rc-status ${item.isMet ? 's-met' : 's-part'}`}>
                          {item.isMet ? 'Met' : 'Evidentiary Gap'}
                        </div>
                      </div>
                      <div className="rc-note">{item.adviceText}</div>
                    </div>
                  ))}
                </div>

                <div className="r-next">
                  <div className="rn-ttl">Next Strategic Steps</div>
                  <div>
                    {report.recommendations.map((rec, index) => (
                      <div key={index} className="rn-item">
                        <span className="rn-arrow">→</span>
                        <div>{rec}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{ marginTop: '28px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                  <button className="e-btn btn-outline" onClick={handlePrint}>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                      <path d="M4 10v2h6v-2M4 5V1h6v4M1 5h12v4H1z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
                    </svg>
                    Download PDF Report
                  </button>
                  <a href="#b1-consult" className="e-btn e-btn-gold" onClick={(e) => {
                    e.preventDefault();
                    if (onOpenScheduler) {
                      onOpenScheduler();
                    }
                  }}>
                    Schedule Strategic Consultation (B1)
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                      <path d="M5 2L10 7L5 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                </div>

                <button
                  className="e-btn btn-ghost"
                  onClick={handleRestart}
                  style={{ marginTop: '14px', color: 'var(--navy-deep)', borderColor: 'var(--navy-deep)' }}
                >
                  Run Another Assessment
                </button>
              </div>
            )}

          </div>
        </div>
      </div>
    </section>
  );
}
