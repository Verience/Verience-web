import { Link } from 'react-router-dom';
import clsx from 'clsx';

const variants = {
  primary: 'btn-pill btn-primary',
  accent: 'btn-pill btn-accent',
  outlineDark: 'btn-pill btn-outline-dark',
  outlineLight: 'btn-pill btn-outline-light',
};

export default function Button({ variant = 'primary', to, href, className, children, ...props }) {
  const classes = clsx(variants[variant], className);

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button type={props.type || 'button'} className={classes} {...props}>
      {children}
    </button>
  );
}
