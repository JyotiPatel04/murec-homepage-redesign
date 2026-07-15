import { Mail, MapPin, Phone } from 'lucide-react';
import { nav, contact, footer } from '../../data/siteContent';
import { brandImages } from '../../data/images';

const Footer = () => (
  <footer className="site-footer">
    <div className="container">
      <div className="footer-top">
        <div className="footer-brand-col">
          <div className="footer-brand">
            <img src={brandImages.logoLight} alt={`${nav.brandName} logo`} />
          </div>
          <p className="footer-tagline">
            Madhusudan Urban Real Estate Collection — quality before profit, trust before
            everything.
          </p>
        </div>

        <div>
          <h3 className="footer-heading">Explore</h3>
          <ul className="footer-nav-list">
            {nav.links.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="footer-heading">Contact</h3>
          <ul className="footer-contact-list">
            <li>
              <MapPin aria-hidden="true" />
              <span>{contact.address}</span>
            </li>
            <li>
              <Mail aria-hidden="true" />
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </li>
            <li>
              <Phone aria-hidden="true" />
              <a href={contact.phoneHref}>{contact.phone}</a>
            </li>
          </ul>
        </div>
      </div>

      <p className="footer-disclaimer">{footer.disclaimer}</p>

      <div className="footer-bottom">
        <p>{footer.copyright}</p>
      </div>
    </div>
  </footer>
);

export default Footer;
