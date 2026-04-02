import { useState, FormEvent } from "react";
import { Phone, Mail, CheckCircle } from "lucide-react";
import emailjs from "@emailjs/browser";
import SectionHeader from "./SectionHeader";
import WaveDivider from "./WaveDivider";
import { PHONE_NUMBER, EMAIL, WHATSAPP_NUMBER } from "@/constants/data";

const EnquiryForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showPayment, setShowPayment] = useState(false);

const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setLoading(true);
  const form = e.currentTarget;

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  // This will show in browser console if env vars are missing on Vercel
  if (!serviceId || !templateId || !publicKey) {
    console.error("EmailJS env vars missing:", { serviceId, templateId, publicKey });
    alert("Configuration error. Please contact us directly.");
    setLoading(false);
    return;
  }

  try {
    await emailjs.sendForm(serviceId, templateId, form, publicKey);
    setSubmitted(true);
    setShowPayment(true);
  } catch (err) {
    console.error("EmailJS error:", err);
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
            <a
              href={`tel:${PHONE_NUMBER.replace(/\s/g, "")}`}
              className="flex items-center gap-3 text-white/80 hover:text-gold transition-colors font-body"
            >
              <Phone className="w-5 h-5 text-gold" />
              {PHONE_NUMBER}
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="flex items-center gap-3 text-white/80 hover:text-gold transition-colors font-body"
            >
              <Mail className="w-5 h-5 text-gold" />
              {EMAIL}
            </a>
          </div>
        </div>

        {/* Right: Form or Success + Payment */}
        <div className="bg-cream p-10 md:p-16 flex flex-col justify-center">
          <SectionHeader label="Get in Touch" heading="Make an Enquiry" />

          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">

              <div className="floating-field">
                <input type="text" name="name" placeholder=" " required />
                <label>Full Name *</label>
              </div>

              <div className="floating-field">
                <input type="tel" name="phone" placeholder=" " required />
                <label>Phone Number *</label>
              </div>

              {/* Email NOT required */}
              <div className="floating-field">
                <input type="email" name="email" placeholder=" " />
                <label>Email Address (optional)</label>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="floating-field">
                  <input type="date" name="date" placeholder=" " required />
                  <label>Date of Visit *</label>
                </div>
                <div className="floating-field">
                  <input type="number" name="guests" placeholder=" " min="1" required />
                  <label>Guests *</label>
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
                <label>Occasion *</label>
              </div>

              <div className="floating-field">
                <textarea name="message" placeholder=" " rows={3} />
                <label>Message (Optional)</label>
              </div>

              {/* SINGLE SUBMIT BUTTON */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gold text-forest font-body font-bold uppercase tracking-wider text-sm h-12 rounded-full hover:bg-gold-light transition-colors disabled:opacity-50"
              >
                {loading ? "Sending..." : "Submit Enquiry →"}
              </button>

            </form>

          ) : (

            /* Success + Payment section */
            <div className="space-y-8">

              {/* Success message */}
              <div className="flex flex-col items-center text-center py-6">
                <CheckCircle className="w-14 h-14 text-forest mb-3" />
                <h3 className="font-display text-2xl font-bold text-forest mb-1">
                  Enquiry Submitted!
                </h3>
                <p className="font-body text-text-soft text-sm">
                  We've received your enquiry. Please complete the advance payment below to confirm your booking.
                </p>
              </div>

              {/* Payment section */}
              {showPayment && (
                <div className="border-2 border-gold/40 rounded-3xl p-8 bg-white space-y-6">

                  {/* Heading */}
                  <div className="text-center">
                    <div className="w-10 h-[3px] bg-gold mx-auto mb-3 rounded-full" />
                    <span className="font-label italic text-gold text-xs uppercase tracking-widest">
                      Advance Payment
                    </span>
                    <h4 className="font-display text-2xl font-bold text-forest mt-1">
                      Complete Your Booking
                    </h4>
                    <p className="font-body text-text-soft text-sm mt-2">
                      Scan the QR code or use the UPI ID below to make your advance payment.
                    </p>
                  </div>

                  {/* QR Code */}
                  <div className="flex justify-center">
                    <div className="bg-cream rounded-2xl p-4 border border-gold/20">
                      {/* QR code placeholder — replace src with actual QR image */}
                      <div className="w-40 h-40 bg-white border-2 border-dashed border-gold/40 rounded-xl flex flex-col items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-gold/40 mb-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <rect x="3" y="3" width="7" height="7" rx="1"/>
                          <rect x="14" y="3" width="7" height="7" rx="1"/>
                          <rect x="3" y="14" width="7" height="7" rx="1"/>
                          <path d="M14 14h2v2h-2zM18 14h3M14 18h2M18 18h3v3M20 14v2"/>
                        </svg>
                        <p className="font-body text-xs text-gold/60 text-center px-2">
                          QR Code coming soon
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* UPI ID */}
                  <div className="bg-cream rounded-2xl p-4 text-center">
                    <p className="font-body text-xs uppercase tracking-widest text-gold mb-1">
                      UPI ID
                    </p>
                    <p className="font-display text-xl font-bold text-forest">
                      mannhorizon@upi
                    </p>
                    <p className="font-body text-xs text-text-soft mt-1">
                      Tap to copy and pay via any UPI app
                    </p>
                  </div>

                  {/* Divider */}
                  <div className="flex items-center gap-3">
                    <div className="flex-1 h-px bg-gold/20" />
                    <span className="font-body text-xs text-text-soft">After payment</span>
                    <div className="flex-1 h-px bg-gold/20" />
                  </div>

                  {/* WhatsApp button */}
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi! I've completed my advance payment for Mann Horizon booking. Please find the screenshot attached.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-[#25D366] text-white font-body font-bold h-12 rounded-full flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
                  >
                    <img
                      src="/assets/icons/whatsapp.svg"
                      className="w-5 h-5"
                      alt="WhatsApp"
                    />
                    Share Payment Screenshot on WhatsApp
                  </a>

                  <p className="text-center font-body text-xs text-text-soft">
                    Online payment gateway coming soon 🚀
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      <WaveDivider from="#FFF8EE" to="#1B4332" />
    </section>
  );
};

export default EnquiryForm;