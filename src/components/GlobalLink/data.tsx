import { ReactNode } from 'react';

export type GlobalLinkProps = {
  href: string;
  liveId?: number;
  category?: string;
  className?: string;
  productId?: number;
  children: ReactNode;
  isDisabled?: boolean;
  openInNewTab?: boolean;
  productSpecId?: number;
};
