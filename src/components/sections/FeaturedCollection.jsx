import { featuredCollection } from '../../data/siteContent';
import { propertyImages } from '../../data/images';
import SectionHeading from '../ui/SectionHeading';
import ScrollReveal from '../ui/ScrollReveal';
import ImageReveal from '../ui/ImageReveal';
import Button from '../ui/Button';

const FeaturedCollection = () => (
  <section id="collection" className="section section-alt" aria-labelledby="collection-heading">
    <div className="container">
      <ScrollReveal className="collection-header">
        <SectionHeading
          eyebrow={featuredCollection.eyebrow}
          title={featuredCollection.title}
          id="collection-heading"
        />
        <p className="collection-subtitle">{featuredCollection.subtitle}</p>
        <p className="collection-intro">{featuredCollection.intro}</p>
      </ScrollReveal>

      <div className="collection-rows">
        {featuredCollection.rows.map((row, index) => (
          <div
            key={row.title}
            className={`collection-row ${index % 2 === 1 ? 'is-reversed' : ''}`.trim()}
          >
            <ScrollReveal className="collection-row-media">
              <ImageReveal src={propertyImages[row.imageKey]} alt={row.title} />
            </ScrollReveal>
            <ScrollReveal className="collection-row-content" delay={0.1}>
              <span className="tag-chip">{row.tag}</span>
              <h3>{row.title}</h3>
              <p>{row.body}</p>
            </ScrollReveal>
          </div>
        ))}
      </div>

      <ScrollReveal className="connectivity-panel">
        <h3 className="connectivity-title">{featuredCollection.connectivity.title}</h3>
        <div className="connectivity-list">
          {featuredCollection.connectivity.items.map((text, index) => (
            <div className="connectivity-item" key={text}>
              <span className="connectivity-number" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
              <p className="connectivity-text">{text}</p>
            </div>
          ))}
        </div>
      </ScrollReveal>

      <div className="collection-cta-wrap">
        <Button href={featuredCollection.cta.href} variant="primary">
          {featuredCollection.cta.label}
        </Button>
      </div>
    </div>
  </section>
);

export default FeaturedCollection;
