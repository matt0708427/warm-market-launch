/**
 * Opt-In Form Handler
 * Submits contact data to the GHL webhook URL defined in config.js
 */

document.addEventListener('DOMContentLoaded', function () {

  // Inject team name into page headings
  document.querySelectorAll('.team-name').forEach(el => {
    el.textContent = LAUNCH_CONFIG.teamName;
  });

  const form = document.getElementById('optin-form');
  const btnText = document.getElementById('btn-text');
  const btnSpinner = document.getElementById('btn-spinner');
  const formError = document.getElementById('form-error');

  if (!form) return;

  form.addEventListener('submit', async function (e) {
    e.preventDefault();

    const firstName = form.first_name.value.trim();
    const lastName  = form.last_name.value.trim();
    const email     = form.email.value.trim();
    const phone     = form.phone.value.trim();
    const consent   = form.sms_consent.checked;

    // Basic validation
    if (!firstName || !email) {
      showError('Please enter your first name and email address.');
      return;
    }

    if (!consent) {
      showError('Please check the consent box to continue.');
      return;
    }

    // Show loading state
    btnText.style.display = 'none';
    btnSpinner.style.display = 'inline';
    formError.style.display = 'none';

    const payload = {
      first_name:  firstName,
      last_name:   lastName,
      email:       email,
      phone:       phone,
      sms_consent: consent,
      source:      "10-Day Launch Plan Opt-In",
      tags:        ["10-day-launch", "warm-market"]
    };

    try {
      const webhookUrl = LAUNCH_CONFIG.ghlWebhookUrl;

      if (!webhookUrl || webhookUrl === 'YOUR_GHL_WEBHOOK_URL_HERE') {
        // Dev mode: log payload and redirect anyway
        console.log('[DEV MODE] Webhook not configured. Payload:', payload);
        window.location.href = 'launch-plan-invite-confirmation.html';
        return;
      }

      await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
        mode: 'no-cors' // GHL webhooks don't return CORS headers
      });

      // Redirect to confirmation page regardless of no-cors response
      window.location.href = 'launch-plan-invite-confirmation.html';

    } catch (err) {
      console.error('Webhook error:', err);
      // Still redirect — GHL webhook may succeed even if fetch throws in no-cors
      window.location.href = 'launch-plan-invite-confirmation.html';
    }
  });

  function showError(msg) {
    formError.textContent = msg;
    formError.style.display = 'block';
    btnText.style.display = 'inline';
    btnSpinner.style.display = 'none';
  }
});
