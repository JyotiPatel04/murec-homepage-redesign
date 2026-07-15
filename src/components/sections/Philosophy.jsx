import { philosophy } from '../../data/siteContent';
import SectionHeading from '../ui/SectionHeading';
import ScrollReveal from '../ui/ScrollReveal';
import ValueCard from '../ui/ValueCard';

const Philosophy = () => (
  <section id="philosophy" className="section" aria-labelledby="philosophy-heading">
    <div className="container">
      <ScrollReveal className="philosophy-header">
        <SectionHeading
          eyebrow={philosophy.eyebrow}
          title={philosophy.title}
          id="philosophy-heading"
        />
        <p>{philosophy.body}</p>
      </ScrollReveal>

      <div className="philosophy-grid">
        {philosophy.values.map((value, index) => (
          <ScrollReveal key={value.title} delay={index * 0.1}>
            <ValueCard icon={value.icon} title={value.title} desc={value.desc} />
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default Philosophy;
