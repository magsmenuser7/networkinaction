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
  const baseClasses = 'nia-btn';

  const variantClasses = {
    filled: '',
    gold: '',
    ghost: '!bg-transparent border border-nia-black/20 !text-nia-black hover:border-nia-orange hover:!text-nia-orange',
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
