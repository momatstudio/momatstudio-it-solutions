import type { Metadata } from "next";

export const metadata: Metadata = { title: "Careers", description: "Career opportunities at MOMATSTUDIO IT SOLUTIONS.", alternates: { canonical: "/careers" } };

export default function CareersPage() {
  return (
    <main className="subpage section-shell">
      <div className="subpage-hero"><span className="eyebrow">Careers</span><h1>Build useful technology with us.</h1><p>MOMATSTUDIO works with thoughtful specialists who care about quality, clarity and the people who use what we build.</p></div>
      <section className="empty-state"><h2>There are no open roles right now.</h2><p>Future project-based opportunities may include design, software development, quality assurance and content. You are welcome to introduce yourself for future consideration.</p><a className="button button-primary" href="mailto:info@momatstudio.co.za?subject=Career%20interest">Introduce yourself</a><p style={{ marginTop: 18, fontSize: ".85rem" }}>Please do not send sensitive personal documents until we request them.</p></section>
    </main>
  );
}
