import { Link } from "react-router-dom";
import { Leaf } from "lucide-react";

const BookCTA = () => (
  <section className="bg-cream py-12 md:py-16">
    <div className="max-w-3xl mx-auto px-6 text-center">

      <Leaf className="w-10 h-10 text-gold mx-auto mb-4" />
      <div className="w-10 h-[3px] bg-gold mx-auto mb-3 rounded-full" />
      <span className="font-label italic text-gold text-sm uppercase tracking-widest">
        Plan Your Visit
      </span>
      <h2 className="font-display text-4xl md:text-6xl font-bold text-forest mt-3 mb-4">
        Ready to Escape?
      </h2>
      <p className="font-body text-text-soft text-lg leading-relaxed mb-8 max-w-xl mx-auto">
        Whether it's a quiet getaway or a grand celebration — Mann Horizon is ready
        to host you. Book your spot in just a few clicks.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          to="/booking"
          className="bg-gold text-forest font-body font-bold uppercase tracking-wider px-10 h-14 rounded-full flex items-center justify-center hover:bg-gold-light transition-colors text-sm"
        >
          Book Now
        </Link>
        <a
          href="tel:+919966639631"
          className="border-2 border-forest text-forest font-body font-bold uppercase tracking-wider px-10 h-14 rounded-full flex items-center justify-center hover:bg-forest hover:text-white transition-colors text-sm"
        >
          Call Us
        </a>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6 font-body text-text-soft text-sm">
        <div className="flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-gold shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
          <span>12 Hour & 24 Hour packages available</span>
        </div>
        <span className="hidden sm:block text-gold">·</span>
        <div className="flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-gold shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.62 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6 6l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z" />
          </svg>
          <span>Instant confirmation on WhatsApp</span>
        </div>
        <span className="hidden sm:block text-gold">·</span>
        <div className="flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-gold shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
          <span>Upto 500 guests welcome</span>
        </div>
      </div>

    </div>
  </section>
);

export default BookCTA;