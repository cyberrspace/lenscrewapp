'use client';

import Navbar from '@/components/Navbar';
import HeroWrapper from '@/components/HeroWrapper';
import Footer from '@/components/Footer';

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div >
      <div style={{ backgroundImage: "url('/Frame-bg.png')" }} >
        <Navbar />
        <HeroWrapper />
       </div>
      
      {children}
      <Footer />
    </div>
      
      
  
  );
}
