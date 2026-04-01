import SectionHeader from "./SectionHeader";
import WaveDivider from "./WaveDivider";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const stats = [
  { number: "5", label: "Acres" },
  { number: "12+", label: "Rooms" },
  { number: "500+", label: "Happy Guests" },
];

const About = () => {
  const ref = useScrollAnimation();

  return (
    <section id="about" className="bg-cream py-20 md:py-28">
      <div ref={ref} className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">

          {/* Image */}
          <div className="scroll-fade relative">
            <div className="absolute -top-4 -left-4 w-full h-full rounded-3xl border-2 border-gold" />
            <img
              src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=85"
              alt="Mann Horizon grounds"
              className="relative rounded-3xl shadow-2xl w-full aspect-[3/4] object-cover -rotate-2"
              width={800}
              height={1067}
              loading="lazy"
            />
          </div>

          {/* Text */}
          <div className="scroll-fade border-l-4 border-gold pl-8 relative">
            <span className="absolute -top-8 -left-4 font-display text-[200px] text-gold/[0.08] leading-none select-none pointer-events-none">
              &ldquo;
            </span>

            <SectionHeader label="Our Story" heading="Where Every Moment Becomes a Memory" />

            <p className="font-body text-text-soft leading-relaxed mb-10">
              Nestled across five lush acres in Telangana, Mann Horizon is your escape 
              from the everyday — a place to breathe, celebrate, and reconnect with 
              nature and the people who matter most.
            </p>

            {/* Stats */}
            <div className="flex gap-8 md:gap-12">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-display text-5xl md:text-7xl font-bold text-gold">
                    {stat.number}
                  </div>
                  <div className="font-body text-xs md:text-sm uppercase tracking-wider text-forest mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <WaveDivider from="#FFF8EE" to="#1B4332" />
    </section>
  );
};

export default About;