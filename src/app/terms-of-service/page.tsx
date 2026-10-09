import type { Metadata } from "next";

export const metadata: Metadata = { title: "Terms of Service", description: "Website terms for MOMATSTUDIO IT SOLUTIONS.", alternates: { canonical: "/terms-of-service" } };

export default function TermsPage() {
  return (
    <main className="subpage section-shell">
      <div className="subpage-hero"><span className="eyebrow">Legal</span><h1>Terms of service</h1><p>Last updated: 9 October 2026</p></div>
      <article className="content-card">
        <h2>About these terms</h2><p>These terms apply to your use of the MOMATSTUDIO IT SOLUTIONS website. Project work is governed by the separate proposal, statement of work or agreement accepted by the client.</p>
        <h2>Website information</h2><p>We aim to keep website information accurate and useful, but it is general information and is not a binding quote, guarantee or professional advice. Service availability and project requirements are confirmed directly with each client.</p>
        <h2>Acceptable use</h2><p>You may not misuse this website, interfere with its operation, attempt unauthorised access, submit unlawful content or use the contact form for spam, fraud or abuse.</p>
        <h2>Intellectual property</h2><p>The website’s original branding, copy, layout and visual material belong to MOMATSTUDIO IT SOLUTIONS or are used with permission. You may not reproduce them commercially without written permission.</p>
        <h2>Third-party services</h2><p>The website may link to or rely on third-party services such as WhatsApp, LinkedIn and FormSubmit. Their own terms and privacy practices apply when you use them.</p>
        <h2>Liability</h2><p>To the extent permitted by law, MOMATSTUDIO IT SOLUTIONS is not responsible for indirect loss arising solely from use of, or inability to use, this informational website.</p>
        <h2>Contact</h2><p>Questions about these terms can be sent to <a className="text-link" href="mailto:info@momatstudio.co.za">info@momatstudio.co.za</a>.</p>
      </article>
    </main>
  );
}
