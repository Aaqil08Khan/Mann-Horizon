import { useState } from "react";
import { WHATSAPP_NUMBER } from "@/constants/data";

const WhatsAppButton = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      {/* Tooltip */}
      {hovered && (
        <div className="bg-forest text-white font-body text-sm px-4 py-2 rounded-full shadow-lg whitespace-nowrap">
          Chat with us
        </div>
      )}
      {/* Button */}
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi! I'm interested in booking Mann Farmhouse.`}
        target="_blank"
        rel="noopener noreferrer"
        className="relative w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-pulse_ring" />
        <img
          src="/assets/icons/whatsapp.svg"
          alt="WhatsApp"
          className="w-7 h-7 relative z-10"
          width={28}
          height={28}
        />
      </a>
    </div>
  );
};

export default WhatsAppButton;
