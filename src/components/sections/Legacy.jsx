import { legacy } from '../../data/siteContent';
import { propertyImages } from '../../data/images';
import SectionHeading from '../ui/SectionHeading';
import ScrollReveal from '../ui/ScrollReveal';
import ImageReveal from '../ui/ImageReveal';
import Button from '../ui/Button';

const Legacy = () => (
  <section id="legacy" className="section section-alt" aria-labelledby="legacy-heading">
    <div className="container legacy-grid">
      <ScrollReveal className="legacy-image-col">
        <div className="legacy-image-frame">
          <ImageReveal
            src={propertyImages.legacyForest}
            alt="A forested green corridor within the Forest Walk masterplan, reflecting MUREC's design approach"
          />
        </div>
        <div className="legacy-stat-badge">
          <div className="stat-value">{legacy.statValue}</div>
          <p className="stat-label">{legacy.statLabel}</p>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.15}>
        <SectionHeading eyebrow={legacy.eyebrow} title={legacy.title} id="legacy-heading" />
        <p className="legacy-body">{legacy.body}</p>
        <div className="legacy-cta">
          <Button href={legacy.cta.href} variant="secondary" showIcon={false}>
            {legacy.cta.label}
          </Button>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default Legacy;
