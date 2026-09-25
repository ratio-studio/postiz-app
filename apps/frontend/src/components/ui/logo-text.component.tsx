import Image from 'next/image';

export const LogoTextComponent = () => {
  return (
    <Image
      src="/ratio-icon-white-gold.svg"
      alt="Ratio"
      width={60}
      height={60}
      priority
      className="h-[60px] w-[60px] rounded-[10px] bg-black object-contain"
    />
  );
};
