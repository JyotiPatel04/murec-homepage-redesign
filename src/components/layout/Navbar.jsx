import { Fragment, useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { nav as navContent } from '../../data/siteContent';
import { brandImages } from '../../data/images';
import Button from '../ui/Button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return undefined;
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isOpen]);

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 861px)');
    const handler = (event) => {
      if (event.matches) setIsOpen(false);
    };
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <Fragment>
      <header className={`navbar ${isScrolled || isOpen ? 'is-scrolled' : ''}`.trim()}>
        <div className="container navbar-inner">
          <a href="#home" className="navbar-logo" aria-label={`${navContent.brandName} — home`}>
            <span className="navbar-logo-mark">
              <img
                src={brandImages.logoLight}
                alt={`${navContent.brandName} logo`}
                className="navbar-logo-img navbar-logo-img--light"
              />
              <img
                src={brandImages.logoDark}
                alt=""
                aria-hidden="true"
                className="navbar-logo-img navbar-logo-img--dark"
              />
            </span>
          </a>

          <nav className="navbar-links" aria-label="Primary">
            {navContent.links.map((link) => (
              <a key={link.href} href={link.href} className="navbar-link">
                {link.label}
              </a>
            ))}
            <Button
              href={navContent.cta.href}
              variant="primary"
              showIcon={false}
              className="navbar-cta"
            >
              {navContent.cta.label}
            </Button>
          </nav>

          <button
            type="button"
            className="navbar-toggle"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
            onClick={() => setIsOpen((value) => !value)}
          >
            {isOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </header>

      
      {isOpen && (
        <nav id="mobile-nav" className="navbar-drawer" aria-label="Mobile">
          {navContent.links.map((link) => (
            <a key={link.href} href={link.href} className="navbar-link" onClick={closeMenu}>
              {link.label}
            </a>
          ))}
          <Button href={navContent.cta.href} variant="primary" onClick={closeMenu}>
            {navContent.cta.label}
          </Button>
        </nav>
      )}
    </Fragment>
  );
};

export default Navbar;
