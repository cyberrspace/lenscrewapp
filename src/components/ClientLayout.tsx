'use client';

import { usePathname } from 'next/navigation';
import LayoutWrapper from '@/app/layoutWrapper';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // Hide layout on these routes
  const hideLayout = pathname === '/payment' || pathname === '/enroll';

  if (hideLayout) {
    return <>{children}</>;
  }

  return <LayoutWrapper>{children}</LayoutWrapper>;
}
