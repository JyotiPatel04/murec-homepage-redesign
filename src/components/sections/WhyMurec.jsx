import { whyMurec } from '../../data/siteContent';
import SectionHeading from '../ui/SectionHeading';
import ScrollReveal from '../ui/ScrollReveal';
import ValueCard from '../ui/ValueCard';

const WhyMurec = () => (
  <section id="why-murec" className="section" aria-labelledby="why-murec-heading">
    <div className="container">
      <ScrollReveal className="why-header">
        <SectionHeading eyebrow={whyMurec.eyebrow} title={whyMurec.title} id="why-murec-heading" />
        <p>{whyMurec.body}</p>
      </ScrollReveal>

      <div className="why-grid">
        {whyMurec.items.map((item, index) => (
          <ScrollReveal key={item.title} delay={index * 0.1}>
            <ValueCard icon={item.icon} title={item.title} desc={item.desc} />
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default WhyMurec;
