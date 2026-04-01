interface WaveDividerProps {
  from: string;
  to: string;
  flip?: boolean;
}

const WaveDivider = ({ from, to, flip }: WaveDividerProps) => (
  <div className={`relative w-full overflow-hidden leading-none ${flip ? "rotate-180" : ""}`} style={{ marginTop: "-1px" }}>
    <svg
      viewBox="0 0 1440 120"
      preserveAspectRatio="none"
      className="w-full h-[60px] md:h-[80px]"
      style={{ display: "block" }}
    >
      <path
        d="M0,60 C360,120 720,0 1080,60 C1260,90 1380,80 1440,60 L1440,120 L0,120 Z"
        fill={to}
      />
    </svg>
  </div>
);

export default WaveDivider;
