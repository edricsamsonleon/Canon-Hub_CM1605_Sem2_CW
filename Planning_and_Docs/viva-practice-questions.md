# CM1605 Viva Practice — 50 Questions

**Split**
- **Q1–Q20** — Your coursework (Orion Apex / Interstellar Agency): logic, connections, data flow  
- **Q21–Q50** — HTML, CSS, JavaScript, XML fundamentals → coursework level  

Answer in your own words. Aim for 30–60 seconds unless they ask you to go deeper.

---

## Part A — Your coursework (20 questions)

1. What is this website about, and what can a visitor do on it?
2. How many destinations, packages, and spaceships are in the catalogue, and where does that data live?
3. List the main pages of the site and what each page is for.
4. Why is the project built with vanilla HTML, CSS, and JavaScript only (no React/Bootstrap/etc.)?
5. How do you open and run this project on a computer (local / desktop)?
6. Explain the full data path: from `destinations.xml` to a card on the Destinations page.
7. Why does the project also have `data/destinations.js` with `DESTINATIONS_XML`? What problem does that solve?
8. Which script files load on a typical page, and in what order? Why that order?
9. Where is the header and footer created, and how do they appear on every page if they are not written in each HTML file?
10. How does the Destinations page filter by category and search by text? What updates on screen?
11. How does `package.html?id=PKG-01` know which package to show? Same idea for spaceships?
12. How does a travel package link to its destination stops in the XML/data model?
13. Which fields does the booking form validate, what rules apply, and which file contains that logic?
14. Why does the booking form use `novalidate`, and what happens after a successful submit?
15. How does the dark/light theme work end-to-end (HTML/CSS/JS + remembering the choice)?
16. What is the “Ask Orion” chatbot connected to? Is it using a real AI API?
17. Why did the site flicker/crack on reload before, and what was the fix strategy (`app-ready`, images, video)?
18. How do missing destination images still show a picture (fallback chain)?
19. What is the design idea of the UI (monochrome), and how does SEO/structured data appear on Home/About?
20. If a lecturer asks “show me where X is connected,” pick one feature (e.g. Book button, filter, or package detail) and explain the HTML → CSS → JS → XML links.

---

## Part B — HTML, CSS, JavaScript, XML (30 questions)

### HTML (Q21–Q28)

21. What is the difference between `<head>` and `<body>`?
22. What does `<!DOCTYPE html>` tell the browser?
23. What is semantic HTML? Give examples of semantic vs non-semantic tags.
24. What is the difference between `id` and `class`? When do you use each?
25. What is the difference between `<div>` and `<section>`?
26. Name common form controls and input types. Which ones appear on a booking-style form?
27. What is a `label`, and why should it be linked with `for` / `id`?
28. What do `meta` viewport and `meta` description do?

### CSS (Q29–Q36)

29. How do you link an external stylesheet to an HTML page?
30. What is a CSS rule? Explain selector, property, and value.
31. What are element, class, and ID selectors? Give one example of each.
32. What is the CSS box model (content, padding, border, margin)?
33. What does `box-sizing: border-box` change?
34. What are CSS variables (`--bg`, `var(--bg)`), and why are they useful for themes?
35. What is specificity / the cascade? Which beats which: element, class, or ID?
36. What are Flexbox and Grid used for at a basic level? Give a typical use for each.

### JavaScript (Q37–Q45)

37. What is the DOM, and why does JavaScript need it for web pages?
38. What does `DOMContentLoaded` mean, and why wait for it before changing the page?
39. How do `getElementById`, `querySelector`, and `querySelectorAll` differ?
40. What is `addEventListener`? Why prefer it over inline `onclick` in HTML?
41. What is the difference between a string, a number, and an object/array in JS (simple)?
42. What does `preventDefault()` do on a form submit event?
43. How can JavaScript create new HTML elements and put them into the page?
44. What is `localStorage` used for in a front-end site?
45. In simple terms: what is parsing, and what does `DOMParser` do with an XML string?

### XML (Q46–Q50)

46. What is XML, and how is it different from HTML?
47. What is a root element? What are child elements and nesting?
48. What is the difference between an XML element and an attribute? Give an example.
49. Why is XML useful for storing structured data for a website/coursework?
50. After XML is parsed in the browser, how do you usually read values (e.g. tag text vs attribute) with JavaScript?

---

## How to practise

1. Cover Part A first (your project story).  
2. Then Part B (fundamentals they can ask even without opening your files).  
3. For each answer, try to point to a real file when you can (`booking.html`, `js/app.js`, `data/destinations.xml`, `css/global.css`).
