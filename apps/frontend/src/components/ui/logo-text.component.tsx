import Image from 'next/image';

export const LogoTextComponent = () => {
  return (
    <Image
      src="/ratio-email-header.png"
      alt="Ratio"
      width={1200}
      height={144}
      priority
      className="h-auto w-[220px] object-contain object-left"
    />
  );
};
