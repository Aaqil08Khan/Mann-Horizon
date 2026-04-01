interface SectionHeaderProps {
  label: string;
  heading: string;
  light?: boolean;
}

const SectionHeader = ({ label, heading, light }: SectionHeaderProps) => (
  <div className="flex flex-col items-center text-center mb-12 md:mb-16">
    <div className="w-10 h-[3px] bg-gold mb-4" />
    <span className="font-label italic text-gold uppercase text-sm tracking-widest mb-3">
      {label}
    </span>
    <h2 className={`font-display font-bold text-4xl md:text-[56px] leading-tight ${light ? "text-white" : "text-forest"}`}>
      {heading}
    </h2>
  </div>
);

export default SectionHeader;
