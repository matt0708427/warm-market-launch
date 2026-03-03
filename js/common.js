/**
 * Common page scripts — runs on all pages
 * Injects brand name, year, and config-driven links
 */

document.addEventListener('DOMContentLoaded', function () {

  // Inject team/brand/company names
  document.querySelectorAll('.team-name').forEach(el => {
    el.textContent = LAUNCH_CONFIG.teamName;
  });
  document.querySelectorAll('.team-brand').forEach(el => {
    el.textContent = LAUNCH_CONFIG.teamBrand;
  });
  document.querySelectorAll('.company-name').forEach(el => {
    el.textContent = LAUNCH_CONFIG.companyName;
  });

  // Inject copyright year
  document.querySelectorAll('.copyright-year').forEach(el => {
    el.textContent = LAUNCH_CONFIG.year;
  });

  // Inject footer links
  document.querySelectorAll('a[data-link="terms"]').forEach(el => {
    el.href = LAUNCH_CONFIG.termsUrl;
  });
  document.querySelectorAll('a[data-link="privacy"]').forEach(el => {
    el.href = LAUNCH_CONFIG.privacyUrl;
  });

  // Inject training links
  document.querySelectorAll('a[data-link="warm-market-training"]').forEach(el => {
    el.href = LAUNCH_CONFIG.warmMarketTrainingUrl;
  });
  document.querySelectorAll('a[data-link="enrollment-convo-training"]').forEach(el => {
    el.href = LAUNCH_CONFIG.enrollmentConvoTrainingUrl;
  });
  document.querySelectorAll('a[data-link="fb-live-worksheet"]').forEach(el => {
    el.href = LAUNCH_CONFIG.fbLivePlanningWorksheetUrl;
  });
  document.querySelectorAll('a[data-link="product-presentation"]').forEach(el => {
    el.href = LAUNCH_CONFIG.productPresentationUrl;
  });
  document.querySelectorAll('a[data-link="biz-presentation"]').forEach(el => {
    el.href = LAUNCH_CONFIG.bizPresentationUrl;
  });
  document.querySelectorAll('a[data-link="fb-group-biz"]').forEach(el => {
    el.href = LAUNCH_CONFIG.fbGroupBizUrl;
  });
  document.querySelectorAll('a[data-link="fb-group-product"]').forEach(el => {
    el.href = LAUNCH_CONFIG.fbGroupProductUrl;
  });
  document.querySelectorAll('a[data-link="fb-group-team"]').forEach(el => {
    el.href = LAUNCH_CONFIG.fbGroupTeamUrl;
  });
  document.querySelectorAll('a[data-link="zoom"]').forEach(el => {
    el.href = LAUNCH_CONFIG.teamTrainingZoomUrl;
  });
  document.querySelectorAll('a[data-link="welcome-post"]').forEach(el => {
    el.href = LAUNCH_CONFIG.welcomePostUrl;
  });
});
