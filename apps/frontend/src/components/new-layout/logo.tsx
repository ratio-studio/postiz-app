'use client';

import Image from 'next/image';

export const Logo = () => {
  return (
    <Image
      src="/ratio-logo-mark.svg"
      alt="Ratio"
      width={60}
      height={42}
      priority
      className="mt-[8px] min-w-[60px] min-h-[60px] rounded-[10px] bg-[#131019] p-[9px] object-contain"
    />
  );
};
