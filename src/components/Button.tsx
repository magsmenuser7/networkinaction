import { Link } from 'react-router-dom';

interface ButtonProps {
  to?: string;
  href?: string;
  variant?: 'filled' | 'ghost' | 'gold';
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit';
  className?: string;
  disabled?: boolean;
}

export default function Button({
  to,
  href,
  variant = 'filled',
  children,
  onClick,
  type = 'button',
  className = '',
  disabled = false,
}: ButtonProps) {
  const baseClasses =
    'h-[52px] px-8 font-semibold text-sm tracking-widest uppercase rounded-xl transition-all duration-300 inline-flex items-center justify-center disabled:opacity-40 disabled:cursor-not-allowed';

  const variantClasses = {
    filled:
      'bg-nia-orange text-nia-white hover:bg-nia-orange/90 hover:shadow-[0_0_24px_rgba(232,119,34,0.3)] border border-nia-orange',
    ghost:
      'bg-transparent text-nia-black/70 border border-nia-black/20 hover:border-nia-gold hover:text-nia-gold',
    gold:
      'bg-nia-gold text-nia-black hover:bg-nia-gold/90 hover:shadow-[0_0_24px_rgba(198,169,105,0.3)] border border-nia-gold',
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} disabled={disabled}>
      {children}
    </button>
  );
}
