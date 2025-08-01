'use client';
import { useRouter } from 'next/navigation';
import { ChevronDown } from 'lucide-react';

const EnrollButton = () => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push('/enroll')}
      className="flex items-center gap-2 bg-white text-[#DF4F3A] font-semibold  mr-4 p-2  hover:bg-gray-100 transition"
    >
      Enroll Now
      <ChevronDown size={18} className="text-[#DF4F3A]" />
    </button>
  );
};

export default EnrollButton;
