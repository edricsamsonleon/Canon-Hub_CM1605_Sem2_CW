/* =========================================
   app.js — XML Parsing, DOM Injection, Filtering
   Interstellar Agency
========================================= */

/* -----------------------------------------
   GLOBAL COMPONENTS: Navigation
----------------------------------------- */
function buildNavigation() {
    const header = document.createElement('header');
    header.className = 'site-header';

    header.innerHTML = `
        <div class="nav-container">
            <a href="index.html" class="nav-logo">
                <img src="assets/logo.png" alt="Interstellar Agency Logo" class="nav-logo-img">
                <span class="nav-logo-text">INTERSTELLAR</span>
            </a>

            <button class="nav-toggle" aria-label="Toggle navigation menu" aria-expanded="false">
                <span class="hamburger-line"></span>
                <span class="hamburger-line"></span>
                <span class="hamburger-line"></span>
            </button>

            <nav class="nav-menu" role="navigation">
                <ul class="nav-links">
                    <li><a href="destinations.html">Destinations</a></li>
                    <li><a href="index.html#packages">Packages</a></li>
                    <li><a href="booking.html">Book Journey</a></li>
                    <li><a href="about.html">About</a></li>
                    <li><a href="terms.html">Terms</a></li>
                </ul>
            </nav>
        </div>
    `;

    // Hamburger toggle logic
    const toggleBtn = header.querySelector('.nav-toggle');
    const navMenu = header.querySelector('.nav-menu');

    toggleBtn.addEventListener('click', () => {
        const expanded = toggleBtn.getAttribute('aria-expanded') === 'true';
        toggleBtn.setAttribute('aria-expanded', !expanded);
        navMenu.classList.toggle('nav-menu--open');
        document.body.classList.toggle('nav-open');
    });

    // Close menu on link click (mobile)
    navMenu.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('nav-menu--open');
            toggleBtn.setAttribute('aria-expanded', 'false');
            document.body.classList.remove('nav-open');
        });
    });

    // Highlight active page
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    navMenu.querySelectorAll('.nav-links a').forEach(link => {
        const href = link.getAttribute('href').split('#')[0];
        if (href === currentPage) {
            link.classList.add('active');
        }
    });

    return header;
}


/* -----------------------------------------
   GLOBAL COMPONENTS: Footer
----------------------------------------- */
function buildFooter() {
    const footer = document.createElement('footer');
    footer.className = 'site-footer';

    footer.innerHTML = `
        <div class="footer-container">
            <div class="footer-grid">
                <div class="footer-col">
                    <h3 class="footer-heading">Agency</h3>
                    <p class="footer-text">
                        Interstellar Agency — pioneering humanity's greatest adventure beyond the stars.
                        Founded 2145.
                    </p>
                </div>
                <div class="footer-col">
                    <h3 class="footer-heading">Resources</h3>
                    <ul class="footer-links">
                        <li><a href="destinations.html">Explore Destinations</a></li>
                        <li><a href="index.html#packages">Travel Packages</a></li>
                        <li><a href="booking.html">Book a Journey</a></li>
                        <li><a href="about.html">About Us</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h3 class="footer-heading">Legal</h3>
                    <ul class="footer-links">
                        <li><a href="terms.html">Terms of Service</a></li>
                        <li><a href="terms.html">Privacy Policy</a></li>
                        <li><a href="terms.html">Transit Conditions</a></li>
                    </ul>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2145 Interstellar Agency. All rights reserved.</p>
            </div>
        </div>
    `;

    return footer;
}


/* -----------------------------------------
   XML DATA: Fetch & Parse
----------------------------------------- */

const XML_PATH = 'data/destinations.xml';
let cachedData = null;

/**
 * Fetch and parse destinations.xml.
 * Returns { destinations: [...], packages: [...] } matching the XML structure.
 */
async function fetchDestinations() {
    if (cachedData) return cachedData;

    try {
        const response = await fetch(XML_PATH);
        if (!response.ok) throw new Error(`HTTP ${response.status}`);

        const xmlText = await response.text();
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlText, 'text/xml');

        const parseError = xmlDoc.querySelector('parsererror');
        if (parseError) throw new Error('XML parse error: ' + parseError.textContent);

        // Parse all 90 destinations (flat list, inline <category> text)
        const destNodes = xmlDoc.querySelectorAll('destinations > destination');
        const destinations = [];
        destNodes.forEach(node => {
            destinations.push({
                id:              node.getAttribute('id') || '',
                name:            getXmlText(node, 'name'),
                category:        getXmlText(node, 'category'),
                description:     getXmlText(node, 'description'),
                lightYears:      getXmlText(node, 'lightYearsFromEarth'),
                requiredShip:    getXmlText(node, 'requiredShip'),
                cost:            getXmlText(node, 'cost'),
                imagePath:       getXmlText(node, 'imagePath'),
            });
        });

        // Parse all 15 packages
        const pkgNodes = xmlDoc.querySelectorAll('packages > package');
        const packages = [];
        pkgNodes.forEach(node => {
            const stops = [];
            node.querySelectorAll('destinationRef').forEach(ref => {
                stops.push({
                    category: ref.getAttribute('category') || '',
                    id:       ref.getAttribute('id') || '',
                });
            });
            packages.push({
                id:             node.getAttribute('id') || '',
                name:           getXmlText(node, 'packageName'),
                description:    getXmlText(node, 'description'),
                totalDuration:  getXmlText(node, 'totalDuration'),
                price:          getXmlText(node, 'price'),
                stops:          stops,
                imagePath:      getXmlText(node, 'imagePath'),
            });
        });

        cachedData = { destinations, packages };
        return cachedData;
    } catch (error) {
        console.error('Failed to load destinations.xml:', error);
        return { destinations: [], packages: [] };
    }
}

/**
 * Safely get text content of an XML element by tag name.
 */
function getXmlText(parent, tagName) {
    const el = parent.querySelector(tagName);
    return el ? el.textContent.trim() : '';
}

/**
 * Format a cost string with commas (e.g. "1000000" → "1,000,000").
 */
function formatCost(costStr) {
    const num = parseInt(costStr, 10);
    return isNaN(num) ? costStr : num.toLocaleString();
}

/**
 * Get all unique category names from the destination list.
 */
function getCategories(destinations) {
    const cats = [...new Set(destinations.map(d => d.category))];
    // Maintain a consistent order
    const order = [
        'Nebulas', 'Stars', 'Natural Satellites',
        'Non-Habitable Planets', 'Habitable Planets', 'Black Holes'
    ];
    return order.filter(c => cats.includes(c));
}


/* -----------------------------------------
   DESTINATIONS PAGE: Render & Filter
----------------------------------------- */

/**
 * Category-specific CSS gradient placeholders (used until real images arrive).
 */
function categoryGradient(category) {
    const map = {
        'Nebulas':              'linear-gradient(135deg, #1a0a2e, #16213e)',
        'Stars':                'linear-gradient(135deg, #1a1a0a, #3e2e16)',
        'Natural Satellites':   'linear-gradient(135deg, #0a1a1a, #162e2e)',
        'Non-Habitable Planets':'linear-gradient(135deg, #1a0a0a, #3e1616)',
        'Habitable Planets':    'linear-gradient(135deg, #0a1a0a, #162e16)',
        'Black Holes':          'linear-gradient(135deg, #0a0a1a, #16163e)',
    };
    return map[category] || 'var(--bg-surface)';
}

/**
 * Create a single destination card element from real XML data.
 */
function createDestinationCard(dest) {
    const card = document.createElement('div');
    card.className = 'destination-card';
    card.setAttribute('data-category', dest.category);

    const gradient = categoryGradient(dest.category);
    const formattedCost = dest.cost ? formatCost(dest.cost) : '';
    const hasImage = dest.imagePath && dest.imagePath.length > 0;

    card.innerHTML = `
        <div class="card-img" style="background: ${gradient};">
            ${hasImage
                ? `<img src="${dest.imagePath}" alt="${dest.name}" loading="lazy" onerror="this.parentElement.innerHTML='<span class=\\'card-img-fallback\\'>&#9733;</span>'">`
                : `<span class="card-img-fallback">&#9733;</span>`
            }
        </div>
        <div class="card-category">${dest.category}</div>
        <h3>${dest.name}</h3>
        <p>${dest.description}</p>
        <div class="card-meta">
            <span title="Distance">✦ ${dest.lightYears} ly</span>
            <span title="Required vessel">⌂ ${dest.requiredShip}</span>
            ${formattedCost ? `<span title="Cost in credits">★ CR ${formattedCost}</span>` : ''}
        </div>
    `;

    return card;
}

/**
 * Render destination cards into the grid filtered by category name.
 */
function renderDestinations(destinations, filterCategory) {
    const grid = document.getElementById('destinations-grid');
    if (!grid) return;

    grid.innerHTML = '';

    const filtered = filterCategory === 'all'
        ? destinations
        : destinations.filter(d => d.category === filterCategory);

    if (filtered.length === 0) {
        grid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: var(--spacing-xl);">
                <p style="color: var(--text-secondary); font-size: 1.1rem;">
                    No destinations found for this category.
                </p>
            </div>
        `;
        return;
    }

    filtered.forEach(dest => {
        grid.appendChild(createDestinationCard(dest));
    });
}

/**
 * Set up the filter bar and load destinations data.
 */
async function initDestinationsPage() {
    const filterBar = document.getElementById('filter-bar');
    const grid = document.getElementById('destinations-grid');
    if (!filterBar || !grid) return;

    const data = await fetchDestinations();

    if (!data.destinations.length) {
        grid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: var(--spacing-xl);">
                <p style="color: var(--text-secondary);">Destination data is being uploaded. Check back soon.</p>
            </div>
        `;
        return;
    }

    // Initial render — show all 90 destinations
    renderDestinations(data.destinations, 'all');

    // Filter button click handlers
    filterBar.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            filterBar.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const category = btn.getAttribute('data-category');
            renderDestinations(data.destinations, category);
        });
    });
}


/* -----------------------------------------
   HOMEPAGE: Featured Packages
----------------------------------------- */
async function initFeaturedPackages() {
    const grid = document.getElementById('featured-grid');
    if (!grid) return;

    const data = await fetchDestinations();
    if (!data.packages.length) {
        grid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: var(--spacing-xl);">
                <p style="color: var(--text-secondary);">Featured packages are being prepared. Explore our destinations to learn more.</p>
            </div>
        `;
        return;
    }

    // Show first 3 packages as featured
    const featured = data.packages.slice(0, 3);
    featured.forEach(pkg => {
        const card = document.createElement('div');
        card.className = 'destination-card';

        // Build a list of stop names for display
        const stopNames = pkg.stops.map(stop => {
            const match = data.destinations.find(d => d.id === stop.id);
            return match ? match.name : stop.id;
        });

        const formattedCost = pkg.price ? formatCost(pkg.price) : '';

        card.innerHTML = `
            <div class="card-img" style="background: linear-gradient(135deg, #0f0f1e, #1f2833);">
                <span class="card-img-fallback" style="font-size: 1.6rem;">&#9733;</span>
            </div>
            <div class="card-category">Curated Package</div>
            <h3>${pkg.name}</h3>
            <p>${pkg.description}</p>
            <p style="font-size: 0.8rem; color: var(--accent-teal); margin: 8px 0;">
                Stops: ${stopNames.join(', ')}
            </p>
            <div class="card-meta">
                <span title="Duration">⏱ ${pkg.totalDuration}</span>
                ${formattedCost ? `<span title="Package price">★ CR ${formattedCost}</span>` : ''}
            </div>
            <a href="booking.html" class="card-cta">Book This Journey</a>
        `;

        grid.appendChild(card);
    });
}


/* -----------------------------------------
   INITIALIZATION
----------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
    // 1. Inject navigation
    const header = buildNavigation();
    document.body.insertBefore(header, document.body.firstChild);

    // 2. Inject footer
    const footer = buildFooter();
    document.body.appendChild(footer);

    // 3. Page-specific features
    initDestinationsPage();
    initFeaturedPackages();
});