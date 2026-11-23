# Namank — changes from the Ankshaastra copy

## Done
- Rebrand: Namank name, logo (full/icon/white), indigo + gold theme (`src/index.css`), Playfair Display / DM Sans fonts.
- Brand details in ONE file: `src/config/brand.ts` (phone, email, address, socials — still old values, replace them).
- New Header, Footer, mobile bottom nav, Home page, Services page.
- Kept: Name Check / Name Correction, Perfect Baby Name, Complete Baby Blueprint, C-Section Dates, Blog, About, Contact, policies, login, dashboard, full admin.
- Removed: Shop, Courses, Podcast, Calculator, Consultation, Kundali, Varshphal, Pyaar Shaastra, Office Vastu, Business Numerology and the Shop tabs in admin Invoices/GST.
- Baby Name now lives at `/services/baby-name` with the 2 Empower packages (Rs 3,437 and Rs 5,957) and a new "baby-name" booking form inside the existing Payment flow (`src/lib/payment-form-ext.ts`, `ExtendedPaymentFields.tsx`).
- C-Section page now opens in-site (it was redirecting to miraclebaby). It is still the WhatsApp enquiry form.
- Old Meta Pixel / GTM IDs removed from `index.html` — add Namank's own.

## To do / check
- Set `VITE_SITE_URL` to the final domain.
- Replace contact details in `src/config/brand.ts`.
- Name Check price is still Rs 373 (Empower had Rs 473). Original price Rs 1,100.
- Orders still store `source_website = "ankshaastra.com"` (internal key, DB enum) — not visible to customers.
- Backend (`api/`, `server/`) is unchanged, so it still contains old multi-site code that is not used.
- 4 unit tests fail; they also fail in the original zip.
