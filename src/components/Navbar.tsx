import { useState, useEffect } from "react";
import { Leaf, Menu, X } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { WHATSAPP_NUMBER } from "@/constants/data";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Location", href: "/#location" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isBookingPage = location.pathname === "/booking";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // On booking page navbar is always solid — never transparent
  const alwaysSolid = isBookingPage;

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    if (href.startsWith("/#")) {
      const sectionId = href.replace("/#", "");
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => {
          document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
        }, 300);
      } else {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const textClass = alwaysSolid || scrolled
    ? "text-forest hover:text-gold"
    : "text-white/90 hover:text-gold";

  const navBg = alwaysSolid || scrolled
    ? "bg-cream/95 backdrop-blur-md border-b border-gold/30 shadow-sm"
    : "bg-transparent";

  const logoTextClass = alwaysSolid || scrolled ? "text-forest" : "text-white";

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">

          {/* Logo → always goes home */}
          <Link to="/" className="flex items-center gap-2">
            <Leaf className="w-7 h-7 text-gold" />
            <span className={`font-display font-bold text-[28px] tracking-widest ${logoTextClass}`}>
              MANN HORIZON
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              link.href.startsWith("/#") ? (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`font-body text-sm font-medium tracking-wide transition-colors relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-gold after:transition-all hover:after:w-full ${textClass}`}
                >
                  {link.label}
                </button>
              ) : (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`font-body text-sm font-medium tracking-wide transition-colors relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-gold after:transition-all hover:after:w-full ${textClass}`}
                >
                  {link.label}
                </Link>
              )
            ))}

            {/* WhatsApp */}
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi! I'm interested in booking Mann Horizon.`}
              target="_blank"
              rel="noopener noreferrer"
              className={`font-body text-sm font-medium tracking-wide transition-colors ${textClass}`}
            >
              WhatsApp
            </a>

            {/* Book Now */}
            <Link
              to="/booking"
              className="bg-gold text-forest font-body font-bold text-sm uppercase tracking-wider px-6 h-12 rounded-full flex items-center hover:bg-gold-light transition-colors"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button onClick={() => setMobileOpen(true)} className="md:hidden">
            <Menu className={`w-7 h-7 ${alwaysSolid || scrolled ? "text-forest" : "text-white"}`} />
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[60] bg-forest flex flex-col items-center justify-center">
          <button onClick={() => setMobileOpen(false)} className="absolute top-6 right-6">
            <X className="w-8 h-8 text-gold" />
          </button>
          <div className="flex flex-col items-center gap-8">
            {navLinks.map((link) => (
              link.href.startsWith("/#") ? (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="font-display text-3xl font-bold text-gold hover:text-gold-light transition-colors"
                >
                  {link.label}
                </button>
              ) : (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="font-display text-3xl font-bold text-gold hover:text-gold-light transition-colors"
                >
                  {link.label}
                </Link>
              )
            ))}

            {/* WhatsApp mobile */}
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi! I'm interested in booking Mann Horizon.`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="font-display text-3xl font-bold text-gold hover:text-gold-light transition-colors"
            >
              WhatsApp
            </a>

            {/* Book Now mobile */}
            <Link
              to="/booking"
              onClick={() => setMobileOpen(false)}
              className="mt-4 bg-gold text-forest font-body font-bold uppercase tracking-wider px-8 h-14 rounded-full flex items-center hover:bg-gold-light transition-colors"
            >
              Book Now
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;