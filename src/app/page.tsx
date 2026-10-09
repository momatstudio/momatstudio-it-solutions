import Image from "next/image";
import Link from "next/link";
import {
  FiArrowUpRight,
  FiBookOpen,
  FiCheck,
  FiCode,
  FiLayers,
  FiLifeBuoy,
  FiMail,
  FiMapPin,
  FiPhone,
  FiSmartphone,
} from "react-icons/fi";

const services = [
  {
    icon: FiCode,
    title: "Websites & web applications",
    description:
      "Fast, responsive websites and web applications built around your brand, customers and business goals.",
    image: "/service-web-apps.webp",
    imageAlt: "Responsive website displayed across desktop, tablet and mobile devices",
  },
  {
    icon: FiLayers,
    title: "Business management systems",
    description:
      "Purpose-built portals for operations, customers, inventory, orders, bookings and everyday workflows.",
    image: "/service-business-systems.webp",
    imageAlt: "Connected business management dashboard and workflow modules",
  },
  {
    icon: FiBookOpen,
    title: "LMS & e-learning platforms",
    description:
      "Accessible learning platforms that organise courses, students, assessments, progress and reporting.",
    image: "/service-lms.webp",
    imageAlt: "Learning management platform with courses, students and progress tracking",
  },
  {
    icon: FiSmartphone,
    title: "Mobile apps & dashboards",
    description:
      "Practical mobile experiences and clear dashboards that put the right information in the right hands.",
    image: "/service-mobile-dashboards.webp",
    imageAlt: "Mobile application alongside a modern analytics dashboard",
  },
  {
    icon: FiArrowUpRight,
    title: "Integrations & reporting",
    description:
      "Connect tools, remove repetitive work and turn operational data into useful, decision-ready reports.",
    image: "/service-integrations.webp",
    imageAlt: "Connected software integrations flowing through a central data hub",
  },
  {
    icon: FiLifeBuoy,
    title: "Support & improvement",
    description:
      "Reliable maintenance, enhancements and technical guidance that keep your digital systems working well.",
    image: "/service-support.webp",
    imageAlt: "Secure cloud platform with monitoring and maintenance tools",
  },
];

const process = [
  ["01", "Discover", "We unpack your goals, users and current way of working."],
  ["02", "Design", "We map a focused solution and make the experience easy to use."],
  ["03", "Build", "We develop, test and refine the product with clear communication."],
  ["04", "Support", "We launch carefully and stay available as your needs evolve."],
];

const testimonials = [
  {
    company: "KINGUNK LTD PTY",
    quote:
      "Working with Mohau was an absolute game-changer for our business. He delivered a smart, functional solution that helped streamline our internal processes and enhance client engagement.",
    name: "Emmanuel Senyolo",
    role: "Founder",
  },
  {
    company: "J.P FURNITURE LTD PTY",
    quote:
      "Mohau built a custom mobile application that transformed how we manage orders, payments and client communication. It is user-friendly and tailored exactly to our needs.",
    name: "Phillimon Mokoena",
    role: "CEO",
  },
  {
    company: "ITUWELLNESS SOLUTIONS LTD PTY",
    quote:
      "Mohau turned our vision into an intuitive dashboard that organises funding applications and tracks our impact. It now serves as the backbone of our operations.",
    name: "Thabang Leshabang",
    role: "Director",
  },
];

export default function Home() {
  return (
    <main>
      <section className="hero section-shell" aria-labelledby="hero-title">
        <div className="hero-copy">
          <span className="eyebrow">Founder-led digital product studio</span>
          <h1 id="hero-title">Systems that make your organisation work better.</h1>
          <p>
            MOMATSTUDIO IT SOLUTIONS designs websites, applications and custom
            platforms that simplify operations, learning and customer experiences.
          </p>
          <div className="button-row">
            <Link className="button button-primary" href="/#contact">
              Request a quote <FiArrowUpRight aria-hidden="true" />
            </Link>
            <Link className="button button-secondary" href="/#services">
              Explore services
            </Link>
          </div>
          <div className="hero-trust" aria-label="Service strengths">
            <span><FiCheck aria-hidden="true" /> Tailored to your workflow</span>
            <span><FiCheck aria-hidden="true" /> Built for long-term use</span>
          </div>
        </div>
        <div className="hero-visual">
          <Image
            src="/hero-technology.webp"
            alt="Connected business software, learning, dashboard and mobile application illustration"
            width={1920}
            height={864}
            priority
            sizes="(max-width: 900px) 100vw, 52vw"
          />
        </div>
      </section>

      <section id="services" className="section section-shell anchor-section">
        <div className="section-heading">
          <span className="eyebrow">What we build</span>
          <h2>Digital services shaped around real work</h2>
          <p>
            From a strong public presence to a system that runs daily operations,
            every solution is designed to be useful, maintainable and easy to adopt.
          </p>
        </div>
        <div className="service-grid">
          {services.map(({ icon: Icon, title, description, image, imageAlt }) => (
            <article
              className="service-card"
              key={title}
              tabIndex={0}
              aria-label={`${title}. Hover, focus or tap to view the service illustration.`}
            >
              <div className="service-card-inner">
                <div className="service-card-face service-card-front">
                  <div className="icon-box"><Icon aria-hidden="true" /></div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <span className="flip-cue">View picture <FiArrowUpRight aria-hidden="true" /></span>
                </div>
                <div className="service-card-face service-card-back">
                  <Image src={image} alt={imageAlt} fill sizes="(max-width: 650px) calc(100vw - 28px), (max-width: 980px) 50vw, 33vw" />
                  <div className="service-card-overlay"><h3>{title}</h3><span>Tap or move away to return</span></div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section process-section">
        <div className="section-shell process-layout">
          <div className="section-heading left-heading">
            <span className="eyebrow eyebrow-light">How we work</span>
            <h2>Clear process. Thoughtful technology.</h2>
            <p>
              You stay informed from the first conversation through launch and
              ongoing improvement.
            </p>
          </div>
          <div className="process-list">
            {process.map(([number, title, description]) => (
              <article className="process-item" key={number}>
                <span>{number}</span>
                <div><h3>{title}</h3><p>{description}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="section section-shell about anchor-section">
        <div className="portrait-frame">
          <Image
            src="/mohau-maphalle.webp"
            alt="Mohau Maphalle, founder of MOMATSTUDIO IT SOLUTIONS"
            width={1120}
            height={1400}
            sizes="(max-width: 900px) 100vw, 42vw"
          />
          <div className="portrait-label">
            <strong>Mohau Maphalle</strong>
            <span>Founder & Technical Lead</span>
          </div>
        </div>
        <div className="about-copy">
          <span className="eyebrow">Meet the founder</span>
          <h2>Technology should solve the problem—not become another one.</h2>
          <p>
            MOMATSTUDIO IT SOLUTIONS is a founder-led studio helping businesses,
            organisations and learning communities turn ideas and manual processes
            into dependable digital products.
          </p>
          <p>
            Mohau leads each project with a practical, collaborative approach and
            brings in trusted specialists when a project needs additional expertise.
            The focus stays on clarity, usability and solutions that can grow with you.
          </p>
          <Link className="text-link" href="/#contact">
            Tell us what you want to improve <FiArrowUpRight aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section id="testimonials" className="section testimonial-section anchor-section">
        <div className="section-shell">
          <div className="section-heading">
            <span className="eyebrow">Client feedback</span>
            <h2>Built with care. Remembered for results.</h2>
          </div>
          <div className="testimonial-grid">
            {testimonials.map((item) => (
              <figure className="testimonial-card" key={item.company}>
                <div className="stars" aria-label="5 out of 5 stars">★★★★★</div>
                <blockquote>“{item.quote}”</blockquote>
                <figcaption>
                  <strong>{item.name}</strong>
                  <span>{item.role}, {item.company}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section section-shell contact anchor-section">
        <div className="contact-intro">
          <span className="eyebrow eyebrow-light">Start a project</span>
          <h2>Let’s build something useful.</h2>
          <p>
            Share what you are trying to achieve, where the current process gets
            stuck and what a successful solution would look like.
          </p>
          <div className="contact-list">
            <a href="mailto:info@momatstudio.co.za"><FiMail /> info@momatstudio.co.za</a>
            <a href="tel:+27726607141"><FiPhone /> +27 72 660 7141</a>
            <span><FiMapPin /> Ga-Maphalle Village, Molototsi 0827</span>
          </div>
        </div>
        <form className="contact-form" action="https://formsubmit.co/matthewsmohau@gmail.com" method="POST">
          <div className="form-row">
            <label>Full name<input name="name" type="text" autoComplete="name" required /></label>
            <label>Email address<input name="email" type="email" autoComplete="email" required /></label>
          </div>
          <div className="form-row">
            <label>Phone number<input name="phone" type="tel" autoComplete="tel" /></label>
            <label>Service
              <select name="service" defaultValue="" required>
                <option value="" disabled>Select a service</option>
                <option>Website or web application</option>
                <option>Business management system</option>
                <option>LMS or e-learning platform</option>
                <option>Mobile app or dashboard</option>
                <option>Integration or reporting</option>
                <option>Support or improvement</option>
                <option>Not sure yet</option>
              </select>
            </label>
          </div>
          <label>Tell us about your project<textarea name="message" rows={5} required /></label>
          <label className="consent">
            <input name="privacy-consent" type="checkbox" value="agreed" required />
            <span>I agree to the <Link href="/privacy-policy">privacy policy</Link> and consent to being contacted about this enquiry.</span>
          </label>
          <input type="hidden" name="_next" value="https://momatstudio.co.za/thank-you" />
          <input type="hidden" name="_subject" value="New MOMATSTUDIO project enquiry" />
          <input type="hidden" name="_template" value="table" />
          <input type="text" name="_honey" className="honeypot" tabIndex={-1} autoComplete="off" />
          <button className="button button-primary form-submit" type="submit">
            Send enquiry <FiArrowUpRight aria-hidden="true" />
          </button>
        </form>
      </section>

      <a className="whatsapp-button" href="https://wa.me/27726607141" target="_blank" rel="noreferrer" aria-label="Chat with MOMATSTUDIO on WhatsApp">
        <span>WhatsApp</span><FiArrowUpRight aria-hidden="true" />
      </a>
    </main>
  );
}
