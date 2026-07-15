import { ArrowRight } from 'lucide-react';

const Button = ({
  children,
  href,
  onClick,
  variant = 'primary',
  showIcon = true,
  type = 'button',
  className = '',
  ariaLabel,
}) => {
  const classes = `btn btn-${variant} ${className}`.trim();
  const icon = showIcon && <ArrowRight aria-hidden="true" />;

  if (href) {
    const isExternal = /^https?:\/\//.test(href);
    return (
      <a
        href={href}
        className={classes}
        aria-label={ariaLabel}
        {...(isExternal ? { target: '_blank', rel: 'noreferrer' } : {})}
      >
        {children}
        {icon}
      </a>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick} aria-label={ariaLabel}>
      {children}
      {icon}
    </button>
  );
};

export default Button;
