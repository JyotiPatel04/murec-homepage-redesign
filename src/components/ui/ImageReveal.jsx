import { useState } from 'react';

const ImageReveal = ({
  src,
  alt = '',
  className = '',
  imgClassName = '',
  loading = 'lazy',
  fetchPriority = 'auto',
}) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`image-reveal ${loaded ? 'is-loaded' : ''} ${className}`.trim()}>
      <img
        src={src}
        alt={alt}
        loading={loading}
        fetchPriority={fetchPriority}
        decoding="async"
        className={`${loaded ? 'is-loaded' : ''} ${imgClassName}`.trim()}
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
};

export default ImageReveal;
