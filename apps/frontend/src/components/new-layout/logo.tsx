'use client';

export const Logo = () => {
  return (
    <div
      className="mt-[8px] min-w-[60px] min-h-[60px] flex items-center justify-center"
      aria-label="Ratio"
    >
      <div
        className="relative h-12 w-[72px] overflow-hidden"
        aria-hidden="true"
      >
        <img
          src="/ratio-email-header.png"
          alt=""
          className="absolute left-0 top-0 h-12 w-auto max-w-none"
        />
      </div>
    </div>
  );
};
