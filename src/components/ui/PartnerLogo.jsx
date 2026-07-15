import { useState } from 'react';

const PartnerLogo = ({ src, alt, invert = false }) => {
  const [failed, setFailed] = useState(false);

  if (failed) return null;

  return (
    <div className="partner-logo-item">
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        className={invert ? 'partner-logo-item-img--invert' : ''}
        onError={() => setFailed(true)}
      />
    </div>
  );
};

export default PartnerLogo;
