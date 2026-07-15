import { stats } from '../../data/siteContent';
import ScrollReveal from '../ui/ScrollReveal';
import StatCard from '../ui/StatCard';

const Stats = () => (
  <section className="section stats-section" aria-label="MUREC by the numbers">
    <div className="container">
      <ScrollReveal className="stats-grid" y={16}>
        {stats.map((stat) => (
          <StatCard key={stat.label} value={stat.value} label={stat.label} />
        ))}
      </ScrollReveal>
    </div>
  </section>
);

export default Stats;
