'use client';

export const Logo = () => {
  return (
    <div className="mt-[8px] min-w-[60px] min-h-[60px] flex items-center justify-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        aria-label="Ratio"
      >
        <path
          d="M8 12h32M12 12v24M24 12v24M36 12v24"
          stroke="#F4B942"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M8 36h32"
          stroke="#F4B942"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};
