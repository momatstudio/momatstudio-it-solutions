import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Thank You", description: "Your MOMATSTUDIO enquiry has been received.", robots: { index: false, follow: false } };

export default function ThankYouPage() {
  return (
    <main className="subpage section-shell"><section className="empty-state"><span className="eyebrow">Enquiry received</span><h1>Thank you for reaching out.</h1><p style={{ marginTop: 20 }}>Your message has been sent to MOMATSTUDIO IT SOLUTIONS. We will review it and respond using the contact details you provided.</p><div className="button-row"><Link className="button button-primary" href="/">Return home</Link><a className="button button-secondary" href="https://wa.me/27726607141" target="_blank" rel="noreferrer">Chat on WhatsApp</a></div></section></main>
  );
}
