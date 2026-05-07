interface WordmarkProps {
  size?: number;
}

export function Wordmark({ size = 22 }: WordmarkProps) {
  return (
    <img
      src="/assets/heliox-logo.png"
      alt="Heliox"
      style={{ height: `${size}px`, width: "auto", display: "block" }}
    />
  );
}
