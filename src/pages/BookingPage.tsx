import { useState } from "react";
import { Link } from "react-router-dom";
import { Leaf, MapPin, Phone, Mail, CheckCircle, X } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PHONE_NUMBER, EMAIL, ADDRESS, WHATSAPP_NUMBER } from "@/constants/data";
import emailjs from '@emailjs/browser';

const BookingPage = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    guests: "",
    package: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  const today = new Date().toISOString().split("T")[0];

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!form.name || form.name.trim().length < 3)
      newErrors.name = "Name must be at least 3 characters.";
    if (!form.phone || !/^\d{10}$/.test(form.phone))
      newErrors.phone = "Enter a valid 10-digit phone number.";
    if (!form.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = "Enter a valid email address.";
    if (!form.date)
      newErrors.date = "Please select a date of visit.";
    if (!form.guests || Number(form.guests) < 1 || Number(form.guests) > 500)
      newErrors.guests = "Guests must be between 1 and 500.";
    if (!form.package)
      newErrors.package = "Please select a package.";
    return newErrors;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setLoading(true);
    setError(false);
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          phone: form.phone,
          from_email: form.email,
          visit_date: form.date,
          guests: form.guests,
          package_name: form.package,
          message: form.message || "No special requirements.",
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setSuccess(true);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-cream pt-20">
        <div className="max-w-6xl mx-auto px-6 py-16">

          {/* Page Heading */}
          <div className="text-center mb-12">
            <div className="w-10 h-[3px] bg-gold mx-auto mb-3 rounded-full" />
            <span className="font-label italic text-gold text-sm uppercase tracking-widest">
              Reserve Your Stay
            </span>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-forest mt-2">
              Book Your Experience
            </h1>
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-start">

            {/* LEFT — Info Panel */}
            <div className="bg-forest rounded-3xl p-10 text-white sticky top-28">
              <div className="flex items-center gap-2 mb-6">
                <Leaf className="w-6 h-6 text-gold" />
                <span className="font-display text-2xl font-bold tracking-widest">
                  MANN HORIZON
                </span>
              </div>
              <p className="font-label italic text-gold text-sm mb-8">
                Where nature meets luxury
              </p>

              <img
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=85"
                alt="Mann Horizon"
                className="w-full rounded-2xl object-cover aspect-video mb-8"
                loading="lazy"
              />

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                  <p className="font-body text-sm text-white/80">{ADDRESS}</p>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-gold shrink-0" />
                  <p className="font-body text-sm text-white/80">{PHONE_NUMBER}</p>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-gold shrink-0" />
                  <p className="font-body text-sm text-white/80">{EMAIL}</p>
                </div>
              </div>

              {/* Packages summary */}
              <div className="mt-8 pt-8 border-t border-white/10 space-y-3">
                <p className="font-body text-xs uppercase tracking-widest text-gold mb-4">
                  Our Packages
                </p>
                <div className="bg-white/10 rounded-xl p-4">
                  <p className="font-display text-lg font-bold">12 Hour Package</p>
                  <p className="font-body text-sm text-white/70">9:00 AM – 9:00 PM</p>
                  <p className="font-display text-gold text-xl font-bold mt-1">₹1,999 <span className="text-sm font-body text-white/60">/ person</span></p>
                </div>
                <div className="bg-white/10 rounded-xl p-4 border border-gold/40">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-display text-lg font-bold">24 Hour Package</p>
                      <p className="font-body text-sm text-white/70">Check-in 12PM – Check-out 12PM</p>
                      <p className="font-display text-gold text-xl font-bold mt-1">₹3,999 <span className="text-sm font-body text-white/60">/ person</span></p>
                    </div>
                    <span className="bg-gold text-forest text-xs font-bold px-2 py-1 rounded-full">
                      Popular
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT — Form or Success */}
            <div className="bg-white rounded-3xl p-10 shadow-sm border border-[#e8e0d0]">
              {!success ? (
                <>
                  <h2 className="font-display text-3xl font-bold text-forest mb-2">
                    Fill in Your Details
                  </h2>
                  <p className="font-body text-sm text-text-soft mb-8">
                    We'll confirm your booking on WhatsApp shortly after submission.
                  </p>

                  {/* Error banner */}
                  {error && (
                    <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl text-red-600 font-body text-sm">
                      Something went wrong. Please try WhatsApp instead.
                      <a
                        href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi! I'd like to book Mann Horizon.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block mt-2 font-bold underline"
                      >
                        Chat on WhatsApp →
                      </a>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">

                    {/* Full Name */}
                    <div>
                      <label className="font-body text-sm font-medium text-forest block mb-1">
                        Full Name *
                      </label>
                      <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className="w-full border-b-2 border-[#e8e0d0] focus:border-gold bg-transparent py-2 font-body text-sm outline-none transition-colors"
                      />
                      {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="font-body text-sm font-medium text-forest block mb-1">
                        Phone Number *
                      </label>
                      <input
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="10-digit mobile number"
                        maxLength={10}
                        className="w-full border-b-2 border-[#e8e0d0] focus:border-gold bg-transparent py-2 font-body text-sm outline-none transition-colors"
                      />
                      {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="font-body text-sm font-medium text-forest block mb-1">
                        Email Address *
                      </label>
                      <input
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        className="w-full border-b-2 border-[#e8e0d0] focus:border-gold bg-transparent py-2 font-body text-sm outline-none transition-colors"
                      />
                      {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                    </div>

                    {/* Date + Guests row */}
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <label className="font-body text-sm font-medium text-forest block mb-1">
                          Date of Visit *
                        </label>
                        <input
                          name="date"
                          type="date"
                          min={today}
                          value={form.date}
                          onChange={handleChange}
                          className="w-full border-b-2 border-[#e8e0d0] focus:border-gold bg-transparent py-2 font-body text-sm outline-none transition-colors"
                        />
                        {errors.date && <p className="text-red-500 text-xs mt-1">{errors.date}</p>}
                      </div>
                      <div>
                        <label className="font-body text-sm font-medium text-forest block mb-1">
                          No. of Guests *
                        </label>
                        <input
                          name="guests"
                          type="number"
                          min={1}
                          max={500}
                          value={form.guests}
                          onChange={handleChange}
                          placeholder="e.g. 20"
                          className="w-full border-b-2 border-[#e8e0d0] focus:border-gold bg-transparent py-2 font-body text-sm outline-none transition-colors"
                        />
                        {errors.guests && <p className="text-red-500 text-xs mt-1">{errors.guests}</p>}
                      </div>
                    </div>

                    {/* Package */}
                    <div>
                      <label className="font-body text-sm font-medium text-forest block mb-1">
                        Select Package *
                      </label>
                      <select
                        name="package"
                        value={form.package}
                        onChange={handleChange}
                        className="w-full border-b-2 border-[#e8e0d0] focus:border-gold bg-transparent py-2 font-body text-sm outline-none transition-colors"
                      >
                        <option value="">-- Choose a package --</option>
                        <option value="12 Hour Package - ₹1,999/person (9AM to 9PM)">
                          12 Hour Package — ₹1,999/person (9AM to 9PM)
                        </option>
                        <option value="24 Hour Package - ₹3,999/person (Check-in 12PM, Check-out 12PM)">
                          24 Hour Package — ₹3,999/person (Check-in 12PM, Check-out 12PM)
                        </option>
                      </select>
                      {errors.package && <p className="text-red-500 text-xs mt-1">{errors.package}</p>}
                    </div>

                    {/* Message */}
                    <div>
                      <label className="font-body text-sm font-medium text-forest block mb-1">
                        Special Requirements <span className="text-text-soft">(optional)</span>
                      </label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Any special requests or questions..."
                        rows={3}
                        className="w-full border-b-2 border-[#e8e0d0] focus:border-gold bg-transparent py-2 font-body text-sm outline-none transition-colors resize-none"
                      />
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-gold text-forest font-body font-bold uppercase tracking-wider h-14 rounded-full flex items-center justify-center hover:bg-gold-light transition-colors disabled:opacity-70 disabled:cursor-not-allowed text-sm"
                    >
                      {loading ? (
                        <span className="flex items-center gap-2">
                          <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24" fill="none">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        "Send Booking Request →"
                      )}
                    </button>
                  </form>
                </>
              ) : (

                /* Success State */
                <div className="text-center py-10">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h2 className="font-display text-3xl font-bold text-forest mb-2">
                    Booking Request Sent!
                  </h2>
                  <p className="font-body text-text-soft mb-8">
                    Thank you, {form.name}! We'll confirm your booking on WhatsApp shortly.
                  </p>

                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi! I just submitted a booking request for Mann Horizon.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#25D366] text-white font-body font-bold px-8 h-12 rounded-full hover:opacity-90 transition-opacity mb-10"
                  >
                    <img src="/assets/icons/whatsapp.svg" className="w-5 h-5" alt="WhatsApp" />
                    Chat on WhatsApp
                  </a>

                  {/* Payment Placeholder */}
                  <div className="mt-8 pt-8 border-t border-[#e8e0d0]">
                    <p className="font-body text-xs uppercase tracking-widest text-gold mb-2">
                      Next Step
                    </p>
                    <h3 className="font-display text-2xl font-bold text-forest mb-2">
                      Complete Your Booking
                    </h3>
                    <p className="font-body text-sm text-text-soft mb-6">
                      Secure your dates with an advance payment.
                    </p>
                    <button
                      onClick={() => setShowPaymentModal(true)}
                      className="w-full border-2 border-gold text-forest font-body font-bold uppercase tracking-wider h-12 rounded-full hover:bg-gold hover:text-forest transition-colors text-sm"
                    >
                      Proceed to Payment →
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />

      {/* Payment Modal */}
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
              <p className="font-body text-xs uppercase tracking-widest text-gold mb-1">
                UPI ID
              </p>
              <p className="font-display text-xl font-bold text-forest">
                mannhorizon@upi
              </p>
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
    </>
  );
};

export default BookingPage;