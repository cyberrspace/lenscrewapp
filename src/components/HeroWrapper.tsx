'use client';

import { usePathname } from 'next/navigation';
import Hero from './Hero';

const HeroWrapper = () => {
  const pathname = usePathname();

  const heroContent: Record<
    string,
    { title: string; subtitle: string; description: string; showButton: boolean }
  > = {
    '/': {
      title: 'LensCrew Academy',
      subtitle: 'Unlock your creative potential at',
      description:
        'Master the art of filmmaking, acting, and media production with industry-leading professionals. Launch your career in the entertainment industry today.',
      showButton: true,
    },
    '/courses': {
      title: 'Courses',
      subtitle: '',
      description: '',
      showButton: false,
    },
    '/instructors': {
      title: 'Instructors',
      subtitle: '',
      description: '',
      showButton: false,
    },
    '/about': {
      title: 'About Us',
      subtitle: '',
      description: '',
      showButton: false,
    },
    '/contact': {
      title: 'Contact',
      subtitle: '',
      description: '',
      showButton: false,
    },
  };

  const heroProps = heroContent[pathname] || heroContent['/'];

  return <Hero {...heroProps} />;
};

export default HeroWrapper;
