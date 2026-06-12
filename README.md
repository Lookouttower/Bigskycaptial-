# Big Sky Capital Website Package

This is a static front-end website built from the Big Sky Capital developer brief.

## Included pages

- `index.html` — Home / platform overview
- `fund.html` — The Fund / master PPM concept
- `offerings.html` — Filterable offerings / deal library
- `how-to-invest.html` — Accreditation verification flow
- `about.html` — GP / principals / advisors placeholder
- `disclosures.html` — Legal disclosures placeholder
- `contact.html` — Contact / book-a-call intake page

## Important compliance notes

This package contains only a front-end placeholder for gated documents. A real production build must integrate the selected third-party accreditation-verification provider before allowing access to the master PPM, deal disclosures, or data room.

Do not place real PPMs or deal-disclosure PDFs in a public static folder unless the deployment environment protects them behind authentication and accreditation verification.

## Hero video

Place the final hero video here:

`assets/videos/hero-video.mp4`

The site already references that path.

## Fonts

The brief requested a premium institutional style using Cormorant Garamond for display and a clean sans for body/data. This version uses Google Fonts:

- Cormorant Garamond
- Inter

## What still needs final input from the Big Sky team

- Final master PPM
- Each deal-disclosure document
- Accreditation-verification provider
- Booking / intake URL
- CFO-approved figures
- Final disclosure/legal language from securities counsel

## Revision notes
- Removed visible step numbers from the homepage site-map cards and the How to Invest flow.
- Added image areas to the homepage feature cards, How to Invest process cards, and every offering/deal card.
- Image URLs are location/asset-specific remote stock image queries so the site can be uploaded immediately. For final production, replace those CSS `source.unsplash.com` URLs with licensed Envato/Freepik/owned images inside `assets/images/`.


Revision note: Local corporate/location-style JPG assets have been added in assets/images/photos/ and applied to the home, deal library, how-to-invest, and team sections. Visible step numbers were removed from image-led cards.
