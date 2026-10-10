import { stats } from "../data/siteData.js";

export default function Stats() {
  return (
    <section className="stats" aria-label="Impact statistics">
      <div className="container stats-grid">
        {stats.map((stat) => (
          <div className="stat" key={stat.label}>
            <h3
              className="stat-number"
              data-value={stat.value}
              data-prefix={stat.prefix}
              data-suffix={stat.suffix}
            >
              {stat.prefix}0{stat.suffix}
            </h3>
            <p>- {stat.label} -</p>
          </div>
        ))}
      </div>
    </section>
  );
}
