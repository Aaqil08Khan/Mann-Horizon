import { useState, FormEvent } from "react";
import { Phone, Mail, CheckCircle, X } from "lucide-react";
import emailjs from "@emailjs/browser";
import SectionHeader from "./SectionHeader";
import WaveDivider from "./WaveDivider";
import { PHONE_NUMBER, EMAIL, WHATSAPP_NUMBER } from "@/constants/data";

const EnquiryForm = () => {
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_id",
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_id",
        form,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "public_key"
      );
      setSubmitted(true);
    } catch {
      alert("Something went wrong. Please try again or contact us directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="enquiry" className="bg-cream">

      {/* Top center heading */}
      <div className="text-center pt-16 pb-10 px-6">
        <div className="w-10 h-[3px] bg-gold mx-auto mb-3 rounded-full" />
        <span className="font-label italic text-gold text-sm uppercase tracking-widest">
          Reserve Your Stay
        </span>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-forest mt-2 mb-3">
          Plan Your Visit
        </h2>
        <p className="font-body text-text-soft max-w-xl mx-auto text-base leading-relaxed">
          Fill in your details below and we'll get back to you on WhatsApp to confirm your booking.
        </p>
      </div>

      <div className="grid md:grid-cols-2 min-h-[600px]">

        {/* Left: Green panel */}
        <div className="bg-forest botanical-bg p-10 md:p-16 flex flex-col justify-center relative overflow-hidden">
          <svg className="absolute top-10 right-10 w-32 h-32 text-gold/10" viewBox="0 0 100 100" fill="currentColor">
            <path d="M50 0 C40 20, 20 30, 0 50 C20 45, 40 48, 50 60 C60 48, 80 45, 100 50 C80 30, 60 20, 50 0Z" />
            <circle cx="50" cy="70" r="5" />
            <circle cx="35" cy="85" r="3" />
            <circle cx="65" cy="85" r="3" />
          </svg>
          <blockquote className="font-display italic text-white text-3xl md:text-4xl leading-snug mb-10 relative z-10">
            &ldquo;Come, unwind, and let Mann be your retreat&rdquo;
          </blockquote>
          <div className="space-y-4 relative z-10">
            <a href={`tel:${PHONE_NUMBER.replace(/\s/g, "")}`} className="flex items-center gap-3 text-white/80 hover:text-gold transition-colors font-body">
              <Phone className="w-5 h-5 text-gold" />
              {PHONE_NUMBER}
            </a>
            <a href={`mailto:${EMAIL}`} className="flex items-center gap-3 text-white/80 hover:text-gold transition-colors font-body">
              <Mail className="w-5 h-5 text-gold" />
              {EMAIL}
            </a>
          </div>
        </div>

        {/* Right: Form */}
        <div className="bg-cream p-10 md:p-16 flex flex-col justify-center">
          <SectionHeader label="Get in Touch" heading="Make an Enquiry" />
          {submitted ? (
            <div className="flex flex-col items-center text-center py-10">
              <CheckCircle className="w-16 h-16 text-forest mb-4" />
              <h3 className="font-display text-2xl font-bold text-forest mb-2">Thank You!</h3>
              <p className="font-body text-text-soft">We'll be in touch soon!</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="floating-field">
                <input type="text" name="name" placeholder=" " required />
                <label>Full Name</label>
              </div>
              <div className="floating-field">
                <input type="tel" name="phone" placeholder=" " required />
                <label>Phone Number</label>
              </div>
              <div className="floating-field">
                <input type="email" name="email" placeholder=" " required />
                <label>Email Address</label>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="floating-field">
                  <input type="date" name="date" placeholder=" " required />
                  <label>Date of Visit</label>
                </div>
                <div className="floating-field">
                  <input type="number" name="guests" placeholder=" " min="1" required />
                  <label>Guests</label>
                </div>
              </div>
              <div className="floating-field">
                <select name="occasion" required defaultValue="">
                  <option value="" disabled></option>
                  <option>Birthday</option>
                  <option>Anniversary</option>
                  <option>Corporate Event</option>
                  <option>Family Reunion</option>
                  <option>Wedding</option>
                  <option>Other</option>
                </select>
                <label>Occasion</label>
              </div>
              <div className="floating-field">
                <textarea name="message" placeholder=" " rows={3} />
                <label>Message (Optional)</label>
              </div>

              {/* TWO BUTTONS ONLY */}
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  type="button"
                  onClick={() => setShowPaymentModal(true)}
                  className="w-full border-2 border-forest text-forest font-body font-bold uppercase tracking-wider text-sm h-12 rounded-full hover:bg-forest hover:text-white transition-colors"
                >
                  Make Payment
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gold text-forest font-body font-bold uppercase tracking-wider text-sm h-12 rounded-full hover:bg-gold-light transition-colors disabled:opacity-50"
                >
                  {loading ? "Sending..." : "Submit Enquiry →"}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>

      {/* Payment Modal — outside the form */}
      {showPaymentModal && (
        <div className="fixed inset-0 z-[100] bg-black/60 flex items-center justify-center px-4">
          <div className="bg-white rounded-3xl p-8 max-w-md w-full relative shadow-2xl">
            <button
              onClick={() => setShowPaymentModal(false)}
              className="absolute top-4 right-4 text-text-soft hover:text-forest"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="w-10 h-[3px] bg-gold mb-4 rounded-full" />
            <h3 className="font-display text-2xl font-bold text-forest mb-2">
              Payment Options
            </h3>
            <p className="font-body text-sm text-text-soft mb-6">
              We currently accept advance payment via UPI transfer. Please
              screenshot your payment and share on WhatsApp for instant
              confirmation.
            </p>
            <div className="bg-cream rounded-2xl p-4 mb-6 text-center">
              <p className="font-body text-xs uppercase tracking-widest text-gold mb-1">UPI ID</p>
              <p className="font-display text-xl font-bold text-forest">mannhorizon@upi</p>
            </div>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi! I'm sharing my payment screenshot for Mann Horizon booking.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#25D366] text-white font-body font-bold h-12 rounded-full flex items-center justify-center gap-2 hover:opacity-90 transition-opacity mb-4"
            >
              <img src="/assets/icons/whatsapp.svg" className="w-5 h-5" alt="WhatsApp" />
              Share Payment Screenshot
            </a>
            <p className="text-center font-body text-xs text-text-soft">
              Online payment gateway coming soon 🚀
            </p>
          </div>
        </div>
      )}

      <WaveDivider from="#FFF8EE" to="#1B4332" />
    </section>
  );
};

export default EnquiryForm;