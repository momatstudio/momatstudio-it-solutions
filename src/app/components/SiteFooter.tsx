import Image from "next/image";
import Link from "next/link";
import { FiLinkedin } from "react-icons/fi";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="section-shell footer-main">
        <div className="footer-brand">
          <Link href="/" aria-label="MOMATSTUDIO IT SOLUTIONS home"><Image src="/logo-light.svg" alt="MOMATSTUDIO IT SOLUTIONS" width={190} height={54} /></Link>
          <p>Websites, applications and systems built to make organisations work better.</p>
        </div>
        <div className="footer-links">
          <div><strong>Navigate</strong><Link href="/#services">Services</Link><Link href="/#about">About</Link><Link href="/#testimonials">Testimonials</Link><Link href="/#contact">Contact</Link></div>
          <div><strong>Company</strong><Link href="/blog">Blog</Link><Link href="/careers">Careers</Link><Link href="/terms-of-service">Terms</Link><Link href="/privacy-policy">Privacy</Link></div>
          <div><strong>Connect</strong><a href="mailto:info@momatstudio.co.za">Email</a><a href="https://wa.me/27726607141" target="_blank" rel="noreferrer">WhatsApp</a><a className="social-link" href="https://www.linkedin.com/in/mohau-maphalle-58236722a/" target="_blank" rel="noreferrer"><FiLinkedin /> LinkedIn</a></div>
        </div>
      </div>
      <div className="section-shell footer-bottom">
        <span>© {new Date().getFullYear()} MOMATSTUDIO IT SOLUTIONS. All rights reserved.</span>
        <span>Ga-Maphalle Village, Molototsi, South Africa</span>
      </div>
    </footer>
  );
}
