import { Quote } from 'lucide-react';
import { partners } from '../../data/siteContent';
import { associationLogos, partnerPhotos } from '../../data/images';
import SectionHeading from '../ui/SectionHeading';
import ScrollReveal from '../ui/ScrollReveal';
import PartnerLogo from '../ui/PartnerLogo';

const Partners = () => (
  <section id="partners" className="section section-alt" aria-labelledby="partners-heading">
    <div className="container">
      <ScrollReveal className="partners-header">
        <SectionHeading eyebrow={partners.eyebrow} title={partners.title} id="partners-heading" />
      </ScrollReveal>

      <ScrollReveal className="partner-logo-grid" delay={0.1}>
        {associationLogos.map((logo) => (
          <PartnerLogo key={logo.src} src={logo.src} alt={logo.alt} invert={logo.invert} />
        ))}
      </ScrollReveal>

      <h3 className="testimonials-title">{partners.testimonialsTitle}</h3>
      <div className="testimonials-grid">
        {partners.testimonials.map((testimonial, index) => (
          <ScrollReveal key={testimonial.name} delay={index * 0.08}>
            <article className="testimonial-card">
              <div className="testimonial-header">
                <div className="testimonial-photo">
                  <img
                    src={partnerPhotos[testimonial.photoKey]}
                    alt=""
                    loading="lazy"
                    decoding="async"
                    onError={(event) => {
                      event.currentTarget.parentElement.style.display = 'none';
                    }}
                  />
                </div>
                <div>
                  <p className="testimonial-name">{testimonial.name}</p>
                  <p className="testimonial-role">{testimonial.role}</p>
                </div>
              </div>
              <Quote className="testimonial-quote-icon" aria-hidden="true" />
              <p className="testimonial-quote">{testimonial.quote}</p>
            </article>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default Partners;
