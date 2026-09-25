import React from 'react';

export const LogoTextComponent = () => {
  return (
    <div
      className="flex h-[52px] w-[240px] items-center gap-3"
      role="img"
      aria-label="Ratio"
    >
      <img
        src="/ratio-squared.jpg"
        alt=""
        className="h-10 w-10 shrink-0 object-contain"
      />
      <span
        className="text-[30px] font-bold tracking-[0.28em] text-current"
        aria-hidden="true"
      >
        RATIO
      </span>
    </div>
  );
};
