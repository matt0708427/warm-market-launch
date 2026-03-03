/**
 * Shared HTML partials — header and footer
 * Called by each page to render consistent header/footer
 */

function renderHeader() {
  return `
  <header class="site-header">
    <div class="logo-wrap">
      <!-- PLACEHOLDER: Replace src with actual logo image path -->
      <div class="logo-placeholder" id="site-logo">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
        </svg>
        LOGO HERE
      </div>
    </div>
  </header>`;
}

function renderFooter() {
  return `
  <footer class="site-footer">
    <div>
      <a href="#" data-link="terms">Terms and Conditions</a> |
      <a href="#" data-link="privacy">Privacy Policy</a>
    </div>
    <div class="footer-brand">
      &copy; <span class="copyright-year"></span> <span class="team-brand"></span> &mdash; All Rights Reserved
    </div>
  </footer>`;
}

// Auto-inject header and footer into placeholder elements
document.addEventListener('DOMContentLoaded', function () {
  const headerEl = document.getElementById('site-header-placeholder');
  if (headerEl) headerEl.innerHTML = renderHeader();

  const footerEl = document.getElementById('site-footer-placeholder');
  if (footerEl) footerEl.innerHTML = renderFooter();
});
