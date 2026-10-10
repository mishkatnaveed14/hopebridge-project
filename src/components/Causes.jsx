import { causes } from "../data/siteData.js";

function ProgressBar({ raised, goal }) {
  const pct = Math.min(100, Math.round((raised / goal) * 100));
  return (
    <div className="cause-progress" role="progressbar" aria-valuenow={pct} aria-valuemin="0" aria-valuemax="100">
      <div className="cause-progress-bar" style={{ width: `${pct}%` }} />
    </div>
  );
}

export default function Causes() {
  return (
    <section className="section causes" id="causes">
      <div className="container">
        <div className="section-head center">
          <p className="kicker">{causes.kicker}</p>
          <h2>{causes.title}</h2>
        </div>
        <div className="card-grid stagger-grid">
          {causes.items.map((cause) => (
            <article className="cause-card" key={cause.title}>
              <div className="cause-image">
                <img src={cause.image} alt={cause.alt} width="1024" height="768" loading="lazy" />
                <span className="cause-tag">- {cause.category} -</span>
              </div>
              <div className="cause-body">
                <h3>{cause.title}</h3>
                <div className="cause-amounts">
                  <span>
                    Raised: <strong>${cause.raised.toLocaleString()}</strong>
                  </span>
                  <span>
                    Goal: <strong>${cause.goal.toLocaleString()}</strong>
                  </span>
                </div>
                <ProgressBar raised={cause.raised} goal={cause.goal} />
                <p>{cause.text}</p>
                <a className="btn btn-primary btn-sm" href="#donate">
                  {causes.buttonLabel}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
