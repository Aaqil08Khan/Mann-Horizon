

# Mann Farmhouse — Complete Redesign

## Brand Identity
- **Feeling**: Joyful, lush, celebratory escape into nature
- **Colors**: Cream (#FFF8EE), Forest Green (#1B4332/#2D6A4F), Gold (#F4A623/#FFD166), no greys anywhere
- **Fonts**: Cormorant Garamond (headings), Plus Jakarta Sans (body), DM Serif Display italic (labels)

## Data Layer
- Create `src/constants/data.ts` with WhatsApp number, phone, email, address, maps URLs
- All components import from this single source

## Global Design System
- Wave SVG dividers between every section (alternating green↔cream)
- Consistent section headers: gold line + gold label + large Cormorant heading
- Intersection Observer scroll animations (fade-up, 0.6s, staggered)
- Pill buttons: gold primary + green outline secondary
- Botanical leaf SVG texture on dark green sections (opacity 0.04)

## Sections (single-page layout)

1. **Navbar** — Transparent → blur+cream on scroll, gold leaf logo + "MANN", nav links, gold "Book Now" pill, mobile fullscreen overlay menu

2. **Hero** — 100vh, background image with green/gold gradient overlays, "Escape to Mann" 110px heading, gold divider line, subtitle, two CTAs, bouncing scroll indicator, bottom wave

3. **About** — Two-column (image + text), rotated image with gold frame offset, stats row (5 Acres, 12+ Rooms, 500+ Guests), decorative gold quote mark, gold left border

4. **Amenities** — Forest green bg, 4-col grid of cards with Lucide icons, hover: card turns gold with inverted colors

5. **Packages** — 3 pricing cards, middle card scaled up with "MOST POPULAR" ribbon, gold checkmark lists, full-width CTA buttons

6. **Gallery** — Masonry grid on forest green bg, hover gold border + zoom overlay, lightbox via yet-another-react-lightbox

7. **Enquiry Form** — Split layout: left green with quote + contact info, right cream with floating-label form, EmailJS integration

8. **Location** — Two-column: Google Maps iframe (gold border) + address/contact cards with hover gold border, "Get Directions" button

9. **Footer** — Forest green, 3 columns (links/contact/social), gold divider, copyright with "Built by MavenAITech"

10. **WhatsApp FAB** — Fixed bottom-right green circle with pulse animation, custom WhatsApp SVG icon, hover tooltip

## Technical
- Add Google Fonts to index.html (Cormorant Garamond, Plus Jakarta Sans, DM Serif Display)
- Extend tailwind.config with custom brand colors
- Create WhatsApp SVG at `/public/assets/icons/whatsapp.svg`
- Reusable components: WaveDivider, SectionHeader, useScrollAnimation hook
- All images lazy-loaded, CSS/Framer Motion animations ≤0.6s
- Install yet-another-react-lightbox for gallery

