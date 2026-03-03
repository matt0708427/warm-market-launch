/**
 * ============================================================
 *  10-Day Warm Market Launch — Site Configuration
 * ============================================================
 *  CUSTOMIZE THIS FILE when personalizing for a new distributor.
 *  All placeholder values are marked with [PLACEHOLDER].
 *
 *  In a future session, this file will be updated with:
 *  - Real team/company names
 *  - Real GHL webhook URL
 *  - Real Facebook group links
 *  - Real Zoom link
 *  - Real training resource links
 * ============================================================
 */

export const siteConfig = {
  // ── Brand Identity ──────────────────────────────────────────
  teamName:    "[Your Team Name]",          // PLACEHOLDER
  teamBrand:   "[Your Team Brand]",         // PLACEHOLDER
  companyName: "[Your Company Name]",       // PLACEHOLDER
  leaderName:  "[Your Name]",               // PLACEHOLDER

  // ── GHL Webhook ─────────────────────────────────────────────
  // Paste the Go High Level Workflow Webhook URL here.
  // Found in GHL → Automation → Workflows → Trigger (Webhook)
  ghlWebhookUrl: "YOUR_GHL_WEBHOOK_URL_HERE",  // PLACEHOLDER

  // ── Facebook Groups ─────────────────────────────────────────
  fbGroupBizName:     "[Business Prospects Group Name]",   // PLACEHOLDER
  fbGroupBizUrl:      "https://facebook.com/groups/YOUR_BIZ_GROUP",
  fbGroupProductName: "[Product Prospects Group Name]",    // PLACEHOLDER
  fbGroupProductUrl:  "https://facebook.com/groups/YOUR_PRODUCT_GROUP",
  fbGroupTeamName:    "[Team Training Group Name]",        // PLACEHOLDER
  fbGroupTeamUrl:     "https://facebook.com/groups/YOUR_TEAM_GROUP",

  // ── Training Resources ───────────────────────────────────────
  warmMarketTrainingUrl:      "#warm-market-training",       // PLACEHOLDER
  enrollmentConvoTrainingUrl: "#enrollment-convo-training",  // PLACEHOLDER
  fbLiveWorksheetUrl:         "#fb-live-planning-worksheet", // PLACEHOLDER
  productPresentationUrl:     "#product-presentation",       // PLACEHOLDER
  bizPresentationUrl:         "#biz-presentation",           // PLACEHOLDER

  // ── Team Training Schedule ───────────────────────────────────
  trainingSchedule: "[Day of Week] at [Time]",  // PLACEHOLDER
  zoomUrl:          "#zoom-link",               // PLACEHOLDER
  welcomePostUrl:   "#welcome-post",            // PLACEHOLDER

  // ── Legal ────────────────────────────────────────────────────
  year: new Date().getFullYear(),
};
