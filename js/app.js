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
   INITIALIZATION
----------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
    // Inject navigation at the top of the body
    const header = buildNavigation();
    document.body.insertBefore(header, document.body.firstChild);

    // Inject footer at the end of the body
    const footer = buildFooter();
    document.body.appendChild(footer);
});