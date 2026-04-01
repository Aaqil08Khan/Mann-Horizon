import { MapPin, Phone, Mail } from "lucide-react";
import SectionHeader from "./SectionHeader";
import WaveDivider from "./WaveDivider";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ADDRESS, PHONE_NUMBER, EMAIL, MAPS_EMBED_URL, MAPS_DIRECTIONS_URL } from "@/constants/data";

const contactDetails = [
  { icon: MapPin, value: ADDRESS },
  { icon: Phone, value: PHONE_NUMBER },
  { icon: Mail, value: EMAIL },
];

const Location = () => {
  const ref = useScrollAnimation();

  return (
    <section id="location" className="bg-cream pt-8 pb-20 md:pb-28">
      <div ref={ref} className="max-w-7xl mx-auto px-6">
        <SectionHeader label="Location" heading="Find Us Here" />
        <div className="grid md:grid-cols-2 gap-10 items-start">

          {/* Map */}
          <div className="scroll-fade rounded-3xl overflow-hidden border-2 border-gold shadow-xl">
            <iframe
              src={MAPS_EMBED_URL}
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mann Horizon Location"
            />
          </div>

          {/* Details */}
          <div className="scroll-fade space-y-4">
            {contactDetails.map(({ icon: Icon, value }) => (
              <div
                key={value}
                className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-[#e8e0d0] hover:border-l-4 hover:border-l-gold transition-all"
              >
                <Icon className="w-6 h-6 text-gold flex-shrink-0 mt-0.5" />
                <span className="font-body text-text-dark">{value}</span>
              </div>
            ))}
            <a
              href={MAPS_DIRECTIONS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex mt-4 border-2 border-forest text-forest font-body font-bold uppercase tracking-wider text-sm px-8 h-12 rounded-full items-center hover:bg-forest hover:text-white transition-colors"
            >
              Get Directions
            </a>
          </div>
        </div>
      </div>
      <WaveDivider from="#FFF8EE" to="#1B4332" />
    </section>
  );
};

export default Location;