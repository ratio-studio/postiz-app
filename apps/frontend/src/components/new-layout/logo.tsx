'use client';

import Image from 'next/image';

export const Logo = () => {
  return (
    <Image
      src="/ratio-square.svg"
      alt="Ratio"
      width={60}
      height={60}
      priority
      className="mt-[8px] min-w-[60px] min-h-[60px] rounded-[10px] object-cover"
    />
  );
};
