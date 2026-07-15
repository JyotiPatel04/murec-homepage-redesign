import { Mail, MapPin, Phone } from 'lucide-react';
import { contact } from '../../data/siteContent';
import SectionHeading from '../ui/SectionHeading';
import ScrollReveal from '../ui/ScrollReveal';
import Button from '../ui/Button';

const ContactCTA = () => (
  <section id="contact" className="section contact-cta" aria-labelledby="contact-heading">
    <div className="container">
      <ScrollReveal>
        <SectionHeading
          eyebrow={contact.eyebrow}
          title={contact.title}
          id="contact-heading"
          titleClassName="contact-cta-title"
        />
        <p className="contact-cta-body">{contact.body}</p>

        <div className="contact-cta-actions">
          <Button href={contact.cta.href} variant="primary">
            {contact.cta.label}
          </Button>
        </div>

        <div className="contact-details">
          <a className="contact-detail-item" href={`mailto:${contact.email}`}>
            <Mail aria-hidden="true" />
            {contact.email}
          </a>
          <a className="contact-detail-item" href={contact.phoneHref}>
            <Phone aria-hidden="true" />
            {contact.phone}
          </a>
          <span className="contact-detail-item">
            <MapPin aria-hidden="true" />
            {contact.address}
          </span>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default ContactCTA;
