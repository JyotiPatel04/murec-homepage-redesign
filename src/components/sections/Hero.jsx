import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { hero } from '../../data/siteContent';
import { propertyImages } from '../../data/images';
import Button from '../ui/Button';
import ImageReveal from '../ui/ImageReveal';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const Hero = () => (
  <section id="home" className="hero" aria-label="Introduction">
    <div className="hero-bg">
      <ImageReveal
        src={propertyImages.heroBanner}
        alt="Forest Walk by MUREC — a villa community set within a landscaped, forested masterplan"
        loading="eager"
        fetchPriority="high"
      />
    </div>
    <div className="hero-scrim" aria-hidden="true" />

    <motion.div
      className="container hero-content"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <motion.span className="eyebrow hero-eyebrow" variants={item}>
        {hero.eyebrow}
      </motion.span>

      <motion.h1 className="hero-title" variants={item}>
        {hero.headlineLines.map((line, index) => (
          <span key={line}>
            {line}
            {index < hero.headlineLines.length - 1 && <br />}
          </span>
        ))}
      </motion.h1>

      <motion.p className="hero-subheadline" variants={item}>
        {hero.subheadline}
      </motion.p>

      <motion.p className="hero-description" variants={item}>
        {hero.description}
      </motion.p>

      <motion.div className="hero-actions" variants={item}>
        <Button href={hero.primaryCta.href} variant="primary">
          {hero.primaryCta.label}
        </Button>
        <Button href={hero.secondaryCta.href} variant="inverse" showIcon={false}>
          {hero.secondaryCta.label}
        </Button>
      </motion.div>
    </motion.div>

    <div className="hero-scroll-indicator" aria-hidden="true">
      <motion.div
        className="scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span className="scroll-indicator-label">Scroll</span>
        <span className="scroll-indicator-line" />
        <ChevronDown size={18} />
      </motion.div>
    </div>
  </section>
);

export default Hero;
