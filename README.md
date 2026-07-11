# Interstellar Agency — Design & Architecture

A premium space-travel website for **Orion Apex / Interstellar Agency**: a fictional
agency that sells guided journeys to 90 destinations, 15 curated packages and a
fleet of 15 spaceships. This document explains the **design decisions, the
architecture, and the UI/UX and search strategy** behind the site.

> **Run it:** open `index.html` in any modern browser — no server or internet required.

---

## 1. Design philosophy — why monochrome?

The interface is deliberately **pure black and white**. Every piece of text and UI
is `#000` or `#fff`; emphasis comes from **weight and scale**, never colour. The
only colour on the site comes from the **content itself** — the destination photos,
the ships, and the hero video.

Why this works so well here:

- **The subject is already colourful.** Space imagery is vivid and saturated. A
  neutral black-and-white shell makes those images *pop* instead of competing with
  them. The chrome gets out of the way and the cosmos becomes the palette.
- **Premium, timeless, editorial.** Monochrome reads as confident and high-end
  (think aerospace, luxury, high-fashion editorial). It doesn't date, and it
  signals focus and precision — the right tone for a company that flies people to
  black holes.
- **Maximum legibility and accessibility.** Pure black/white gives the highest
  possible text contrast (far beyond WCAG AA), so the site is readable for
  everyone and in any lighting — important for a content-dense catalogue.
- **A real dark/light choice.** Because the system is built on two tokens
  (`--bg`, `--text`), a single class flips the entire site between a dramatic dark
  mode and a clean light mode, and the choice is remembered between visits.

---

## 2. UI/UX rationale

**Colour palette.** Two ink values (`#000` / `#fff`) plus hairline borders at low
opacity for structure. Full-colour photography is the "third colour." This keeps
the visual language calm and consistent while letting each page feel distinct
through its imagery.

**Typography.** Headings use **Archivo** (a confident geometric grotesque) for a
modern, engineered, aerospace feel; body copy uses **Inter** for excellent screen
legibility at small sizes. Both fonts are **self-hosted** so they render instantly
and work offline. Type is set large with generous spacing to give the content room
to breathe.

**Interaction & feedback.** Clear, single-style outline buttons (fill-on-hover);
a persistent dark/light **theme toggle**; **category filters + live search** on the
destinations catalogue; **user star ratings** on every destination, package and
ship to aid decisions; native **accordion FAQs**; and a lightweight **assistant
widget** for quick questions. Motion is subtle and respects `prefers-reduced-motion`.

**Responsive & mobile-first.** Fluid type (`clamp()`), CSS grids that collapse from
three columns to one, and a slide-in mobile menu. The layout is tested from wide
desktop down to small phones.

**Target audience.** Affluent early adopters and experience-seekers, science-fiction
and space enthusiasts, and "bucket-list" luxury travellers. The tone is aspirational
but trustworthy: bold hero imagery to inspire, then hard specifications
(distance, required ship, capacity, range, price, ratings) to reassure and convert.

---

## 3. Architecture — component-based & data-driven

The site is built with **vanilla HTML, CSS and JavaScript** but follows a
**component-based, data-driven architecture**:

- **Shared components, built once.** The header (with theme toggle), the footer
  (with social links), and the chat widget are defined a single time in `app.js`
  and injected into every page. Change them once, they update everywhere — no
  duplicated markup across nine HTML files.
- **Reusable "card" components.** `createDestinationCard`, `createPackageCard` and
  `createSpaceshipCard` are functions that turn a data object into markup, exactly
  like components in a modern framework — just without the framework.
- **Single source of truth for data.** All content (90 destinations, 15 packages,
  15 spaceships, plus ratings and prices) lives in **one XML file**,
  `data/destinations.xml`, and is parsed with the browser's `DOMParser`.
- **Templated detail pages.** Instead of 30 hand-written pages, `package.html` and
  `spaceship.html` are single templates that read an `?id=` from the URL and render
  the matching record. Add a new package to the XML and its detail page exists
  automatically.

**Why this architecture?** It is DRY, easy to maintain, and scales with the data,
not with hand-written files — while keeping a clear **separation of concerns**
(HTML = structure, CSS = presentation, JS = behaviour, XML = data).

**Why the data is also embedded in `destinations.js`.** Browsers block `fetch()`
of local files when a page is opened directly (the `file://` protocol). To let the
site run with a simple double-click — no web server — the same XML is embedded as a
string and parsed with `DOMParser`. It is still genuine XML parsing; it just needs
no server.

---

## 4. SEO & AEO (getting found by search engines *and* AI)

**SEO (Search Engine Optimisation)** — being found by traditional search:

- Unique, descriptive `<title>` and `<meta name="description">` on every page.
- Semantic HTML landmarks (`<header> <nav> <main> <section> <article> <footer>`)
  and a single, logical heading hierarchy per page.
- Descriptive `alt` text on imagery, meaningful link text, and a keyword meta set.
- **Open Graph** and **Twitter Card** tags so shared links show a rich preview.
- Fast, self-hosted fonts and lightweight, framework-free pages.

**AEO (Answer Engine Optimisation)** — being cited by AI answer engines (the
generative assistants people now ask instead of searching):

- **Structured data (JSON-LD, schema.org).** The home page declares a
  `TravelAgency` entity; the About page declares a `FAQPage`. This machine-readable
  markup lets answer engines understand *what* the site is and *what questions it
  answers*, making it far more likely to be summarised or cited.
- **A genuine FAQ**, on the About page and on every package, written as direct
  question-and-answer pairs — the exact format answer engines extract.
- Clear, self-contained, factual copy (prices, distances, specs) that an AI can lift
  and attribute without ambiguity.

---

## 5. Project map

```
index.html          Home (hero video, stats, "Frequently Visited" mix) + TravelAgency JSON-LD
destinations.html   90 destinations — filter + search + ratings
packages.html       15 packages;  package.html?id=…   → package detail (itinerary + FAQ)
spaceships.html     15 ships;      spaceship.html?id=… → ship detail (specs incl. speed)
booking.html        Booking form (6 input types, custom JS validation)
about.html          Mission, catalogue, fleet, safety + FAQ (FAQPage JSON-LD)
terms.html          Terms & conditions
css/global.css      One stylesheet: theme tokens, components, responsive rules
js/app.js           Components, XML parsing, ratings, prices, filters, chatbot, page rendering
js/validation.js    Booking-form validation (no HTML5 validation used)
data/destinations.xml / .js   The data (XML) + its embedded copy for file:// use
assets/             Self-hosted fonts, logo, and generated images (ships, categories, journeys)
```

Prices are shown in **US dollars**. Photos and the hero video are shown in full
colour; everything else is monochrome by design.
