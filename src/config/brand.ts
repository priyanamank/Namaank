/**
 * Namaank — the ONE place for brand and contact details.
 * Change a value here and it updates everywhere on the website
 * (header, footer, Contact page, policies, WhatsApp buttons, SEO).
 */

// ---- Edit only these lines ----
const PHONE = "7909652568";            // 10-digit mobile number, no spaces
const COUNTRY_CODE = "91";
const EMAIL = "service@namank.in";
const ADDRESS = "Unit No. O-622, Block E, Eye of Noida, Sector-140A, Noida-201305, India";
const HOURS = "Mon–Sun · 8:30 AM – 8:30 PM";
// -------------------------------

export const brand = {
  name: "Namaank",
  tagline: "Name. Number. Destiny.",
  description:
    "Numerology-based Name Check, Name Correction, Baby Name reports and C-Section date guidance.",
  phoneDigits: PHONE,
  phoneIntl: `${COUNTRY_CODE}${PHONE}`,                                  // 917909652568
  phone: `+${COUNTRY_CODE} ${PHONE.slice(0, 5)} ${PHONE.slice(5)}`,       // +91 79096 52568
  phoneSchema: `+${COUNTRY_CODE}-${PHONE.slice(0, 5)}-${PHONE.slice(5)}`, // +91-79096-52568
  phoneHref: `tel:+${COUNTRY_CODE}${PHONE}`,
  whatsappNumber: `${COUNTRY_CODE}${PHONE}`,
  whatsappHref: `https://wa.me/${COUNTRY_CODE}${PHONE}`,
  email: EMAIL,
  address: ADDRESS,
  hours: HOURS,
  socials: {
    instagram: "https://instagram.com",
    youtube: "https://youtube.com",
    facebook: "https://facebook.com",
    linkedin: "https://linkedin.com",
  },
} as const;
