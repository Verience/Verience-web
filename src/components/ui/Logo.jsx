import { Link } from 'react-router-dom';
import clsx from 'clsx';
import logoIcon from '../../assets/fav.png';

export default function Logo({ className, showWordmark = true, size = 32, wordmarkClassName, iconClassName }) {
  return (
    <Link to="/" className={clsx('inline-flex items-center gap-2.5 z-50', className)}>
      <span className={clsx('inline-flex items-center justify-center shrink-0', iconClassName)}>
        <img
          src={logoIcon}
          alt="Verience"
          width={size}
          height={size}
          className="object-contain"
        />
      </span>
      {showWordmark && (
        <span className={clsx('text-lg font-medium tracking-tight', wordmarkClassName)}>
          Verience
        </span>
      )}
    </Link>
  );
}
