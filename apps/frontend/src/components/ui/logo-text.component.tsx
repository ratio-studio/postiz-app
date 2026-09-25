import React from 'react';

export const LogoTextComponent = () => {
  return (
    <div
      className="flex h-[52px] w-[240px] items-center overflow-hidden"
      role="img"
      aria-label="Ratio"
    >
      <img
        src="/ratio-email-header.png"
        alt="Ratio"
        className="h-[52px] w-auto max-w-none"
      />
    </div>
  );
};
