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
let cachedData = null; // Cache parsed XML data

/**
 * Fetch and parse destinations.xml.
 * Returns an object with { categories: [...], packages: [...] }.
 */
async function fetchDestinations() {
    if (cachedData) return cachedData;

    try {
        const response = await fetch(XML_PATH);
        if (!response.ok) throw new Error(`HTTP ${response.status}`);

        const xmlText = await response.text();
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlText, 'text/xml');

        // Check for parser errors
        const parseError = xmlDoc.querySelector('parsererror');
        if (parseError) throw new Error('XML parse error: ' + parseError.textContent);

        // Extract categories
        const categoryNodes = xmlDoc.querySelectorAll('category');
        const categories = [];
        categoryNodes.forEach(catNode => {
            const categoryId = catNode.getAttribute('id') || '';
            const destinations = [];
            catNode.querySelectorAll('destination').forEach(destNode => {
                destinations.push({
                    id: destNode.getAttribute('id') || '',
                    name: getXmlText(destNode, 'name'),
                    description: getXmlText(destNode, 'description'),
                    distance: getXmlText(destNode, 'distance'),
                    type: getXmlText(destNode, 'type'),
                    image: getXmlText(destNode, 'image'),
                });
            });
            categories.push({ id: categoryId, destinations });
        });

        // Extract packages
        const packagesNode = xmlDoc.querySelector('packages');
        const packages = [];
        if (packagesNode) {
            packagesNode.querySelectorAll('package').forEach(pkgNode => {
                const destRef = pkgNode.querySelector('destinationRef');
                packages.push({
                    id: pkgNode.getAttribute('id') || '',
                    name: getXmlText(pkgNode, 'name'),
                    description: getXmlText(pkgNode, 'description'),
                    price: getXmlText(pkgNode, 'price'),
                    duration: getXmlText(pkgNode, 'duration'),
                    destinationRef: destRef ? destRef.getAttribute('id') : '',
                    highlights: getXmlText(pkgNode, 'highlights'),
                });
            });
        }

        cachedData = { categories, packages };
        return cachedData;
    } catch (error) {
        console.error('Failed to load destinations.xml:', error);
        return { categories: [], packages: [] };
    }
}

/**
 * Safely get text content of an XML element by tag name.
 */
function getXmlText(parent, tagName) {
    const el = parent.querySelector(tagName);
    return el ? el.textContent.trim() : '';
}


/* -----------------------------------------
   DESTINATIONS PAGE: Render & Filter
----------------------------------------- */

/**
 * Get the display-friendly category label.
 */
function getCategoryLabel(categoryId) {
    const labels = {
        'nebulas': 'Nebula',
        'stars': 'Star',
        'natural-satellites': 'Natural Satellite',
        'non-habitable-planets': 'Non-Habitable Planet',
        'habitable-planets': 'Habitable Planet',
        'black-holes': 'Black Hole',
    };
    return labels[categoryId] || categoryId;
}

/**
 * Create a single destination card element.
 */
function createDestinationCard(destination, categoryId) {
    const card = document.createElement('div');
    card.className = 'destination-card';
    card.setAttribute('data-category', categoryId);

    const placeholderGradients = {
        'nebulas': 'linear-gradient(135deg, #1a0a2e, #16213e)',
        'stars': 'linear-gradient(135deg, #1a1a0a, #3e2e16)',
        'natural-satellites': 'linear-gradient(135deg, #0a1a1a, #162e2e)',
        'non-habitable-planets': 'linear-gradient(135deg, #1a0a0a, #3e1616)',
        'habitable-planets': 'linear-gradient(135deg, #0a1a0a, #162e16)',
        'black-holes': 'linear-gradient(135deg, #0a0a1a, #16163e)',
    };

    const gradient = placeholderGradients[categoryId] || 'var(--bg-surface)';

    card.innerHTML = `
        <div style="height: 120px; border-radius: 4px; margin-bottom: 12px; background: ${gradient}; display: flex; align-items: center; justify-content: center;">
            <span style="font-size: 2rem; opacity: 0.3;">&#9733;</span>
        </div>
        <div class="card-category">${getCategoryLabel(categoryId)}</div>
        <h3>${destination.name}</h3>
        <p>${destination.description}</p>
        <div class="card-meta">
            ${destination.distance ? `<span>&#9881; ${destination.distance}</span>` : ''}
            ${destination.type ? `<span>&#9679; ${destination.type}</span>` : ''}
        </div>
    `;

    return card;
}

/**
 * Render destination cards into the grid, filtered by category.
 */
function renderDestinations(categories, filterCategory) {
    const grid = document.getElementById('destinations-grid');
    if (!grid) return;

    grid.innerHTML = '';

    let hasResults = false;

    categories.forEach(category => {
        if (filterCategory !== 'all' && category.id !== filterCategory) return;

        category.destinations.forEach(dest => {
            const card = createDestinationCard(dest, category.id);
            grid.appendChild(card);
            hasResults = true;
        });
    });

    if (!hasResults) {
        grid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: var(--spacing-xl);">
                <p style="color: var(--text-secondary); font-size: 1.1rem;">
                    No destinations found for this category.
                </p>
            </div>
        `;
    }
}

/**
 * Set up the filter bar click handlers and load data.
 */
async function initDestinationsPage() {
    const filterBar = document.getElementById('filter-bar');
    const grid = document.getElementById('destinations-grid');
    if (!filterBar || !grid) return; // Not on destinations page

    const data = await fetchDestinations();
    if (!data.categories.length) {
        grid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: var(--spacing-xl);">
                <p style="color: var(--text-secondary);">Destination data is being uploaded. Check back soon.</p>
            </div>
        `;
        return;
    }

    // Initial render — show all
    renderDestinations(data.categories, 'all');

    // Filter button click handlers
    filterBar.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active state
            filterBar.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const category = btn.getAttribute('data-category');
            renderDestinations(data.categories, category);
        });
    });
}


/* -----------------------------------------
   HOMEPAGE: Featured Packages
----------------------------------------- */
async function initFeaturedPackages() {
    const grid = document.getElementById('featured-grid');
    if (!grid) return; // Not on homepage

    const data = await fetchDestinations();
    if (!data.packages.length) {
        grid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: var(--spacing-xl);">
                <p style="color: var(--text-secondary);">Featured packages are being prepared. Explore our destinations to learn more.</p>
            </div>
        `;
        return;
    }

    // Show up to 3 featured packages
    const featured = data.packages.slice(0, 3);
    featured.forEach(pkg => {
        const card = document.createElement('div');
        card.className = 'destination-card';

        // Try to find the referenced destination name
        let destName = '';
        if (pkg.destinationRef) {
            data.categories.forEach(cat => {
                cat.destinations.forEach(d => {
                    if (d.id === pkg.destinationRef) destName = d.name;
                });
            });
        }

        card.innerHTML = `
            <div class="card-category">Featured Package</div>
            <h3>${pkg.name}</h3>
            ${destName ? `<p style="font-size: 0.8rem; color: var(--accent-teal); margin-bottom: var(--spacing-sm);">Destination: ${destName}</p>` : ''}
            <p>${pkg.description || 'Explore this incredible journey.'}</p>
            <div class="card-meta">
                ${pkg.duration ? `<span>&#9201; ${pkg.duration}</span>` : ''}
                ${pkg.price ? `<span>&#9733; ${pkg.price}</span>` : ''}
            </div>
        `;

        grid.appendChild(card);
    });
}


/* -----------------------------------------
   INITIALIZATION
----------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
    // 1. Inject navigation at the top of the body
    const header = buildNavigation();
    document.body.insertBefore(header, document.body.firstChild);

    // 2. Inject footer at the end of the body
    const footer = buildFooter();
    document.body.appendChild(footer);

    // 3. Initialize page-specific features
    initDestinationsPage();
    initFeaturedPackages();
});