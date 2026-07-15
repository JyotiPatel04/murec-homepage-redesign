import { introduction } from '../../data/siteContent';
import SectionHeading from '../ui/SectionHeading';
import ScrollReveal from '../ui/ScrollReveal';

const Introduction = () => (
  <section className="section intro-section" aria-labelledby="intro-heading">
    <div className="container">
      <ScrollReveal className="intro-content">
        <SectionHeading eyebrow={introduction.eyebrow} title={introduction.title} id="intro-heading" />
        <p className="intro-body">{introduction.body}</p>
      </ScrollReveal>
    </div>
  </section>
);

export default Introduction;
