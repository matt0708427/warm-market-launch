import { useState } from "react";
import { useLocation } from "wouter";
import PageLayout from "@/components/PageLayout";
import { siteConfig } from "@/lib/siteConfig";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Launch() {
  const [, navigate] = useLocation();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    smsConsent: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate() {
    const errs: Record<string, string> = {};
    if (!form.firstName.trim()) errs.firstName = "First name is required.";
    if (!form.email.trim()) errs.email = "Email address is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      errs.email = "Please enter a valid email.";
    if (!form.smsConsent)
      errs.smsConsent = "Please check the consent box to continue.";
    return errs;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setLoading(true);

    const payload = {
      first_name: form.firstName,
      last_name: form.lastName,
      email: form.email,
      phone: form.phone,
      sms_consent: form.smsConsent,
      source: "10-Day Launch Plan Opt-In",
      tags: ["10-day-launch", "warm-market"],
    };

    try {
      const webhookUrl = siteConfig.ghlWebhookUrl;
      if (webhookUrl && webhookUrl !== "YOUR_GHL_WEBHOOK_URL_HERE") {
        await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
          mode: "no-cors",
        });
      } else {
        console.log("[DEV] GHL webhook not configured. Payload:", payload);
      }
    } catch (err) {
      console.error("Webhook error:", err);
    } finally {
      navigate("/launch-plan-invite-confirmation");
    }
  }

  return (
    <PageLayout>
      {/* Page heading */}
      <div className="text-center mb-8">
        <p className="text-sm text-gray-500 mb-2">
          Opt-In to the <strong>{siteConfig.teamName}</strong> Launch Plan Now!
        </p>
        <h1 className="text-3xl font-black text-gray-900 font-['Montserrat'] leading-tight mb-3">
          Everything You Need to Launch Your Business &amp; Immediately Start
          Attracting Prospects to What You Have!
        </h1>
        <p className="text-gray-500 text-base">
          Opt-in to Receive a 10-Day Launch Plan and Other Team Training Updates
          via SMS &amp; Email
        </p>
      </div>

      {/* Form card */}
      <form
        onSubmit={handleSubmit}
        className="bg-white border border-gray-200 rounded-xl shadow-sm p-7 max-w-lg mx-auto space-y-4"
      >
        {/* Name row */}
        <div className="grid grid-cols-2 gap-3">
          <div>
            <Input
              placeholder="First Name"
              value={form.firstName}
              onChange={(e) => setForm({ ...form, firstName: e.target.value })}
              className={errors.firstName ? "border-red-400" : ""}
            />
            {errors.firstName && (
              <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>
            )}
          </div>
          <div>
            <Input
              placeholder="Last Name"
              value={form.lastName}
              onChange={(e) => setForm({ ...form, lastName: e.target.value })}
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <Input
            type="email"
            placeholder="Best Email *"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className={errors.email ? "border-red-400" : ""}
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <Input
            type="tel"
            placeholder="Personal Cell"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
          />
        </div>

        {/* SMS Consent — clean bordered block */}
        <div
          className={`rounded-lg border p-4 ${
            errors.smsConsent ? "border-red-300 bg-red-50" : "border-gray-200 bg-gray-50"
          }`}
        >
          <label className="flex gap-3 cursor-pointer" htmlFor="sms-consent">
            {/* Custom checkbox */}
            <div className="relative mt-0.5 shrink-0">
              <input
                id="sms-consent"
                type="checkbox"
                checked={form.smsConsent}
                onChange={(e) =>
                  setForm({ ...form, smsConsent: e.target.checked })
                }
                className="sr-only"
              />
              <div
                onClick={() =>
                  setForm({ ...form, smsConsent: !form.smsConsent })
                }
                className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
                  form.smsConsent
                    ? "border-teal-500 bg-teal-500"
                    : "border-gray-400 bg-white"
                }`}
              >
                {form.smsConsent && (
                  <svg
                    className="w-3 h-3 text-white"
                    viewBox="0 0 12 12"
                    fill="none"
                  >
                    <path
                      d="M2 6l3 3 5-5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </div>
            </div>

            {/* Consent text */}
            <span className="text-xs text-gray-600 leading-relaxed">
              I Consent to Receive SMS Notifications, Alerts &amp; Occasional
              Marketing Communication from{" "}
              <strong className="text-gray-800">{siteConfig.teamName}</strong>.
              Message frequency varies. Message &amp; data rates may apply. You
              can reply <strong>STOP</strong> to unsubscribe at any time.
            </span>
          </label>
        </div>
        {errors.smsConsent && (
          <p className="text-red-500 text-xs -mt-2">{errors.smsConsent}</p>
        )}

        {/* Submit */}
        <Button
          type="submit"
          disabled={loading}
          className="w-full text-base font-bold py-6 font-['Montserrat'] hover:opacity-90 transition-opacity"
          style={{ backgroundColor: "var(--brand-green)", color: "white" }}
        >
          {loading ? "Submitting…" : "Let's Get Started"}
        </Button>
      </form>
    </PageLayout>
  );
}
