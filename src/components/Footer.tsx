import { Leaf, Instagram, Facebook, Youtube, MapPin, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { ADDRESS, PHONE_NUMBER, EMAIL } from "@/constants/data";

const quickLinks = [
  { label: "Home", href: "#top" },
  { label: "Book Now", href: "/booking", isRoute: true },
  { label: "Location", href: "#location" },
];

const Footer = () => (
  <footer className="bg-forest botanical-bg pt-16 pb-8">
    <div className="max-w-7xl mx-auto px-6">

      {/* Logo + tagline */}
      <div className="flex flex-col items-center mb-12">
        <div className="flex items-center gap-2 mb-3">
          <Leaf className="w-7 h-7 text-gold" />
          <span className="font-display font-bold text-3xl tracking-widest text-white">
            MANN HORIZON
          </span>
        </div>
        <span className="font-label italic text-gold text-sm">
          Your Celebratory Escape Into Nature
        </span>
      </div>

      {/* 3 columns */}
      <div className="grid md:grid-cols-3 gap-10 mb-12">

        {/* Quick Links */}
        <div>
          <h4 className="font-display text-lg font-bold text-white mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {quickLinks.map((link) => (
              <li key={link.href}>
                {link.isRoute ? (
                  <Link
                    to={link.href}
                    className="font-body text-white/70 hover:text-gold transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                ) : (
                 <a 
                    href={link.href}
                    className="font-body text-white/70 hover:text-gold transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h4 className="font-display text-lg font-bold text-white mb-4">Contact Us</h4>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-gold shrink-0 mt-1" />
              <p className="font-body text-white/70 text-sm">{ADDRESS}</p>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-gold shrink-0" />
              <p className="font-body text-white/70 text-sm">{PHONE_NUMBER}</p>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-gold shrink-0" />
              <p className="font-body text-white/70 text-sm">{EMAIL}</p>
            </div>
          </div>
        </div>

        {/* Follow Us */}
        <div>
          <h4 className="font-display text-lg font-bold text-white mb-4">Follow Us</h4>
          <div className="flex gap-4">
            <a href="#" className="text-white/70 hover:text-gold transition-colors">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="#" className="text-white/70 hover:text-gold transition-colors">
              <Facebook className="w-6 h-6" />
            </a>
            <a href="#" className="text-white/70 hover:text-gold transition-colors">
              <Youtube className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-gold/30 mb-6" />

      {/* Bottom */}
      <p className="text-center font-body text-white/40 text-sm">
        © {new Date().getFullYear()} Mann Horizon. Built by MavenAITech.
      </p>
    </div>
  </footer>
);

export default Footer;