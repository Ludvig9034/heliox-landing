interface LogoProps {
  className?: string;
  size?: number;
}

// Variant 1: Two paths merging into one flow
export function LogoFlow({ className, size = 28 }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      className={className}
    >
      <path
        d="M6 8C6 8 10 8 14 12C18 16 18 20 18 24"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M26 8C26 8 22 8 18 12C14 16 14 20 14 24"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

// Variant 2: Two circles overlapping/connecting
export function LogoConnect({ className, size = 28 }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      className={className}
    >
      <circle cx="12" cy="16" r="8" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="20" cy="16" r="8" stroke="currentColor" strokeWidth="2.5" fill="currentColor" fillOpacity="0.08" />
    </svg>
  );
}

// Variant 3: Two streams converging into one
export function LogoConverge({ className, size = 28 }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      className={className}
    >
      <path
        d="M4 6C12 6 16 14 16 16C16 18 12 26 4 26"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M28 6C20 6 16 14 16 16C16 18 20 26 28 26"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

// Variant 4: Abstract infinity/flow loop
export function LogoLoop({ className, size = 28 }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 36 24"
      fill="none"
      className={className}
    >
      <path
        d="M8 12C8 7.58 11.58 4 16 4C20 4 22 7 24 9C26 11 28 14 32 14"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M28 12C28 16.42 24.42 20 20 20C16 20 14 17 12 15C10 13 8 10 4 10"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
