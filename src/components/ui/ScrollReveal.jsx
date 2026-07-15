import { motion } from 'framer-motion';
import useScrollReveal from '../../hooks/useScrollReveal';

const ScrollReveal = ({ children, delay = 0, y = 28, className = '', as = 'div' }) => {
  const reveal = useScrollReveal({ delay, y });
  const MotionTag = motion[as] ?? motion.div;

  return (
    <MotionTag className={className} {...reveal}>
      {children}
    </MotionTag>
  );
};

export default ScrollReveal;
