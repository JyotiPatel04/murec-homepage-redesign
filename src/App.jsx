import { MotionConfig } from 'framer-motion';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Introduction from './components/sections/Introduction';
import Legacy from './components/sections/Legacy';
import WhyMurec from './components/sections/WhyMurec';
import FeaturedCollection from './components/sections/FeaturedCollection';
import Philosophy from './components/sections/Philosophy';
import Stats from './components/sections/Stats';
import Partners from './components/sections/Partners';
import ContactCTA from './components/sections/ContactCTA';

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <div className="app-shell">
        <Navbar />
        <main id="main-content">
          <Hero />
          <Introduction />
          <Legacy />
          <WhyMurec />
          <FeaturedCollection />
          <Philosophy />
          <Stats />
          <Partners />
          <ContactCTA />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  );
}

export default App;
