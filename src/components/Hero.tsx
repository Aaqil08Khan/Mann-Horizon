import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { WHATSAPP_NUMBER } from "@/constants/data";

const Hero = () => (
  <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
    {/* Background image */}
    <img
      src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=90"
      alt="Mann Horizon aerial view"
      className="absolute inset-0 w-full h-full object-cover"
      width={1920}
      height={1080}
    />

    {/* Green gradient overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-forest/90 via-forest/50 to-transparent" />

    {/* Gold glow top-right */}
    <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-gold/15 to-transparent" />

    {/* Content */}
    <div className="relative z-10 text-center px-6 flex flex-col items-center">
      <span className="font-label italic text-gold text-lg mb-4">
        Welcome to Mann Horizon
      </span>

      <h1 className="font-display font-bold text-white text-[56px] md:text-[110px] leading-none mb-6">
        Escape to Mann
      </h1>

      <div className="w-[120px] h-1 bg-gold mb-6" />

      <p className="font-body text-white/80 text-lg md:text-xl max-w-[500px] mb-10 leading-relaxed">
        A farmhouse retreat crafted for stillness, celebration &amp; connection.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          to="/booking"
          className="bg-gold text-forest font-body font-bold uppercase tracking-wider px-8 h-12 rounded-full flex items-center justify-center hover:bg-gold-light transition-colors text-sm"
        >
          Book Now
        </Link>

        {/* ✅ Fixed WhatsApp button */}
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi! I'm interested in booking Mann Horizon.`}
          target="_blank"
          rel="noopener noreferrer"
          className="border-2 border-white text-white font-body font-bold uppercase tracking-wider px-8 h-12 rounded-full flex items-center justify-center hover:bg-white hover:text-forest transition-colors text-sm"
        >
          WhatsApp Us
        </a>
      </div>
    </div>

    {/* Bouncing scroll indicator */}
    <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-10 animate-bounce">
      <ChevronDown className="w-8 h-8 text-gold" />
    </div>

    {/* Bottom wave */}
    <div className="absolute bottom-0 left-0 right-0 leading-none">
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="w-full h-[60px] md:h-[80px] block"
      >
        <path
          d="M0,60 C360,120 720,0 1080,60 C1260,90 1380,80 1440,60 L1440,120 L0,120 Z"
          fill="#FFF8EE"
        />
      </svg>
    </div>
  </section>
);

export default Hero;