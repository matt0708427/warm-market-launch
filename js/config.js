/**
 * ============================================================
 *  10-Day Warm Market Launch — Configuration
 * ============================================================
 *  CUSTOMIZE THIS FILE before deploying for a new distributor.
 *  Replace all placeholder values below with real ones.
 * ============================================================
 */

const LAUNCH_CONFIG = {

  // ----- BRAND -----
  teamName:    "[Your Team Name]",
  teamBrand:   "[Your Team Brand]",
  companyName: "[Your Company Name]",

  // ----- GHL WEBHOOK -----
  // Paste the Go High Level webhook URL for this sub-account here.
  // Found in GHL > Automation > Webhooks (or the workflow trigger URL).
  ghlWebhookUrl: "YOUR_GHL_WEBHOOK_URL_HERE",

  // ----- LINKS (used across day pages) -----
  warmMarketTrainingUrl:    "#warm-market-training",
  enrollmentConvoTrainingUrl: "#enrollment-convo-training",
  fbLivePlanningWorksheetUrl: "#fb-live-planning-worksheet",
  productPresentationUrl:   "#product-presentation",
  bizPresentationUrl:       "#biz-presentation",
  fbGroupBizUrl:            "https://facebook.com/groups/YOUR_BIZ_GROUP",
  fbGroupProductUrl:        "https://facebook.com/groups/YOUR_PRODUCT_GROUP",
  fbGroupTeamUrl:           "https://facebook.com/groups/YOUR_TEAM_GROUP",
  teamTrainingZoomUrl:      "#zoom-link",
  welcomePostUrl:           "#welcome-post",

  // ----- LEGAL PAGES -----
  termsUrl:   "terms.html",
  privacyUrl: "privacy.html",

  // ----- YEAR (auto-set) -----
  year: new Date().getFullYear()
};
