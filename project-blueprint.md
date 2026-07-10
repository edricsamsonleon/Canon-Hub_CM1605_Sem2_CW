# Interstellar Agency - Project Blueprint & Developer Instructions

## 1. Project Overview & Constraints
This is a Vanilla Web Technology project (HTML5, CSS3, JavaScript ES6, XML) for a university assessment. 
**CRITICAL AI DEVELOPER INSTRUCTIONS (CLAUDE CODE):** - DO NOT use any frontend frameworks (No React, Vue, Node.js, etc.).
- DO NOT use any external CSS libraries (No Tailwind, Bootstrap).
- DO NOT use HTML5 form validation (e.g., `required`, `pattern`). All validation MUST be handled by custom JavaScript.
- ALL data must be fetched and parsed from a SINGLE local `.xml` file (`destinations.xml`) using JavaScript to satisfy the rubric requirement.

## 2. Component-Based Architecture
The project follows a static, component-based architecture. Global components (Navigation, Footer) must be built once and mirrored across all HTML files.

### File Structure
/Interstellar-Agency
  ├── /css
  │    └── global.css          (Single source of truth for all styles)
  ├── /js
  │    ├── app.js              (Handles XML parsing, DOM injection, and filtering)
  │    └── validation.js       (Handles the strict booking form logic)
  ├── /data
  │    └── destinations.xml    (Master database containing all categories and packages)
  ├── /assets
  │    ├── logo.png            (Use in Header)
  │    └── favicon.ico         (Use in `<head>`)
  ├── /Planning_and_Docs       (Contains visual wireframes for reference)
  ├── index.html               (Homepage & Hero Section)
  ├── destinations.html        (Dynamic Grid & JavaScript Filtering)
  ├── booking.html             (Complex Inquiry Form)
  ├── about.html               (Agency Info - Placeholder text for now)
  ├── terms.html               (Legal & Transit terms - Placeholder text for now)
  └── project-blueprint.md     (This file)

## 3. UI/UX Design System (Global Variables)
The aesthetic is a premium, dark-themed interstellar travel agency. 

**CSS :root Tokens to implement in global.css:**
- `--bg-deep-space`: #0b0c10 (Main background)
- `--bg-surface`: #1f2833 (Card/Form backgrounds/Navigation bar)
- `--text-primary`: #ffffff (Headings)
- `--text-secondary`: #c5c6c7 (Body text)
- `--accent-cyan`: #66fcf1 (Primary buttons/Highlights/Active states)
- `--accent-teal`: #45a29e (Hover states/Borders)
- `--error-red`: #ff4c4c (Validation error messages)
- Typography: 'Space Grotesk' for Headings, 'Inter' for Body text.

## 4. Page Requirements & Wireframe Specs
*(Refer to PNGs in Planning_and_Docs for exact layouts)*

### A. Global Components (All Pages)
- **Header:** Sticky top bar (`--bg-surface`), `logo.png` left, links right (Destinations, Packages, Book Journey, About, Terms). Responsive hamburger menu on mobile.
- **Footer:** 3-column grid (Agency Info, Resources, Legal) with copyright 2145.

### B. index.html (Homepage)
- **Hero:** Full-width CSS gradient placeholder for space background, large "EXPLORE THE UNKNOWN" heading, CTA button.

### C. destinations.html (Dynamic Explorer)
- **Filter Bar:** Horizontal pill buttons for categories.
- **Dynamic Action:** `app.js` fetches `destinations.xml`. Renders a 3-column responsive grid. Clicking a filter pill dynamically updates the DOM to show only matching XML nodes.

### D. booking.html (Inquiry Form)
- **Form UI:** Clean, elevated card layout.
- **Input Requirements (MUST HAVE 6 TYPES):** Text (Name), Email (Contact), Select (Spacecraft), Radio (Class), Checkbox (Add-ons), Text Area (Medical).
- **Validation Action:** `validation.js` intercepts submit, validates 3 fields using pure JS, and replaces form with a success message UI upon passing.