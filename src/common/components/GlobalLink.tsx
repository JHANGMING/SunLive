import Link from 'next/link';
import { ReactNode } from 'react';
type GlobalLinkProps = {
  href: string;
  children: ReactNode;
  openInNewTab?: boolean;
  className?: string;
};
const GlobalLink = ({
  href,
  className,
  openInNewTab,
  children,
}: GlobalLinkProps) => {
  const handerAddtoCart = () => {
    console.log('嫁入購物車');
  };
  if (openInNewTab) {
    return (
      <a
        className={className}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handerAddtoCart}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href}>
      <a className={className}>{children}</a>
    </Link>
  );
};

export default GlobalLink;
