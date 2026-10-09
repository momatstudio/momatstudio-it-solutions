import type { Metadata } from "next";

export const metadata: Metadata = { title: "Privacy Policy", description: "How MOMATSTUDIO IT SOLUTIONS handles website enquiry information.", alternates: { canonical: "/privacy-policy" } };

export default function PrivacyPage() {
  return (
    <main className="subpage section-shell">
      <div className="subpage-hero"><span className="eyebrow">Legal</span><h1>Privacy policy</h1><p>Last updated: 9 October 2026</p></div>
      <article className="content-card">
        <h2>Information we collect</h2><p>When you submit an enquiry, we collect the information you choose to provide, such as your name, email address, phone number, selected service and project message.</p>
        <h2>How we use it</h2><p>We use enquiry information to respond to you, understand your requirements, prepare proposals and provide requested services. We do not sell your personal information.</p>
        <h2>Form processing</h2><p>Our contact form is processed by FormSubmit. Submitting the form sends the information to our designated business inbox and may involve FormSubmit’s infrastructure. Please do not include passwords, identity documents, payment details or other unnecessary sensitive information.</p>
        <h2>Retention and security</h2><p>We retain correspondence only as long as reasonably needed for enquiries, services, legal obligations and business records. We use reasonable safeguards, but no internet transmission or storage system is completely secure.</p>
        <h2>Your choices</h2><p>You may ask us to correct or delete personal information we hold about your enquiry, subject to applicable legal and record-keeping requirements.</p>
        <h2>Contact</h2><p>For privacy questions, email <a className="text-link" href="mailto:info@momatstudio.co.za">info@momatstudio.co.za</a>.</p>
      </article>
    </main>
  );
}
