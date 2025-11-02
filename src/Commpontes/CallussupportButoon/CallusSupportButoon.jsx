import React from "react";
import { ChevronDown, PhoneCall } from "lucide-react"; 
/**
 * Utility to detect mobile devices
 */
const isMobile = () => /Mobi|Android|iPhone|iPad|Opera Mini|IEMobile/i.test(navigator.userAgent);

/**
 * Normalize phone number for tel: link (keep + and digits)
 */
const normalizePhoneForTel = (phone) => phone.replace(/[^\d+]/g, "");

/**
 * Normalize phone number for WhatsApp link (digits only, no +)
 */
const normalizePhoneForWhatsApp = (phone) => phone.replace(/[^\d]/g, "");

/**
 * Single ContactButton Component
 * Props:
 *  - phone: string (e.g. "+91 98765 43210")
 *  - label: optional text to show on button
 */
export default function CallusSupportButoon({ phone, label }) {
  const tel = normalizePhoneForTel(phone);
  const wa = normalizePhoneForWhatsApp(phone);

  const handleClick = () => {
    if (isMobile()) {
      // Open mobile dialer
      window.location.href = `tel:${tel}`;
    } else {
      // Open WhatsApp Web in new tab
      window.open(`https://wa.me/${wa}`, "_blank");
    }
  };

  return (
    <button className="mt-6 inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold px-6 py-1 rounded-full shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
            <PhoneCall className="h-5 w-5" />
    <div
      onClick={handleClick}
      aria-label={`Contact ${phone}`}
      className="flex items-center justify-center gap-2 px-5 py-3  text-white font-semibold rounded-lg transition-colors "
    >
     
      <span>{label || phone}</span>
    </div>
    </button>
  );
}
