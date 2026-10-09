import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog",
  description: "Practical notes about websites, business systems, learning platforms and digital products.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <main className="subpage section-shell">
      <div className="subpage-hero"><span className="eyebrow">MOMATSTUDIO insights</span><h1>Practical technology, explained clearly.</h1><p>We are preparing useful articles about planning, building and improving digital systems.</p></div>
      <section className="empty-state"><h2>Articles are coming soon.</h2><p>Until then, tell us about the challenge you are working through and we will help you identify a practical next step.</p><Link className="button button-primary" href="/#contact">Start a conversation</Link></section>
    </main>
  );
}
