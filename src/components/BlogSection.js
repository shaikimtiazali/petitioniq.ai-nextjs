export default function BlogSection() {
  return (
    <section className="section sec-gray" id="blog" aria-labelledby="blog-h">
      <div className="container">
        <div className="sec-hdr center fade-up">
          <span className="eyebrow">Insights</span>
          <div className="gold-rule"></div>
          <h2 className="h2" id="blog-h">Immigration intelligence from the field</h2>
          <p className="lead">Written by Khushboo Jain — not summaries of USCIS press releases, but practitioner perspective on what actually moves petitions forward.</p>
        </div>

        <div className="blog-grid fade-up">
          <article className="blog-card">
            <div className="blog-img">
              <div className="blog-img-bg"></div>
              <span className="blog-cat">EB-1A</span>
              <div className="blog-icon">
                <svg width="40" height="40" viewBox="0 0 20 20" fill="none">
                  <rect x="4" y="3.5" width="12" height="13" rx="2" stroke="#C59C38" strokeWidth="1.2" />
                  <path d="M7 7h6M7 10h6M7 13h4" stroke="#C59C38" strokeWidth="1.2" strokeLinecap="round" />
                </svg>
              </div>
            </div>
            <div className="blog-body">
              <time className="blog-date" dateTime="2026-05-01">May 2026</time>
              <h3 className="blog-title serif">EB-1A Extraordinary Ability: The 10 Criteria USCIS Actually Looks For</h3>
              <p className="blog-excerpt">Most EB-1A petitions that attract RFEs share a common failure - criteria are checked off without evidence that does the actual work. Here is what adjudicators look for beyond the checklist, and why it matters more than the number of criteria you claim.</p>
              <a href="#" className="blog-read">Read Article</a>
            </div>
          </article>

          <article className="blog-card">
            <div className="blog-img">
              <div className="blog-img-bg"></div>
              <span className="blog-cat">EB-1A VS NIW</span>
              <div className="blog-icon">
                <svg width="40" height="40" viewBox="0 0 20 20" fill="none">
                  <circle cx="8.6" cy="10" r="3.7" stroke="#C59C38" strokeWidth="1.2" />
                  <circle cx="11.6" cy="10" r="3.7" stroke="#C59C38" strokeWidth="1.2" />
                </svg>
              </div>
            </div>
            <div className="blog-body">
              <time className="blog-date" dateTime="2026-05-01">May 2026</time>
              <h3 className="blog-title serif">EB-1A vs EB-2 NIW: Which Employment-Based Path Is Right for Your Profile?</h3>
              <p className="blog-excerpt">Both pathways offer a route to permanent residence without a job offer. But the evidence standards, processing timelines, and risk profiles are fundamentally different. Choosing the wrong one costs time and money - here is how to think through it before filing.</p>
              <a href="#" className="blog-read">Read Article</a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
