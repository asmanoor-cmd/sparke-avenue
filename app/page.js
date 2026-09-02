"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import SiteNav from "./components/SiteNav";
import SiteFooter from "./components/SiteFooter";
import AmbientBackground from "./components/AmbientBackground";
import BrandModal, { BRANDS_DATA } from "./components/BrandModal";
import Icon from "./components/Icon";

const SERVICES = [
  { tag: "ADS", title: "Performance Marketing", desc: "Targeted Meta & Google Ads campaigns designed to generate qualified leads, high-volume sales, and measurable ROAS.", featured: true, href: "/services/performance-marketing" },
  { tag: "WEB", title: "Web Development", desc: "Modern, ultra-responsive and lightning-fast websites — from custom e-commerce stores to corporate digital portals.", href: "/services/web-development" },
  { tag: "SMM", title: "Social Media Marketing", desc: "Managing and growing authoritative presence across Instagram, Facebook, TikTok, and LinkedIn with viral content.", href: "/services/social-media-marketing" },
  { tag: "SEO", title: "SEO Services", desc: "On-page, technical, and local SEO to dominate organic search rankings and capture high-intent inbound search traffic.", href: "/services/seo-services" },
  { tag: "BRAND", title: "Branding & Design", desc: "Memorable brand identities, distinctive logos, and cohesive design systems that command authority.", href: "/services/branding-design" },
  { tag: "CONTENT", title: "Content Creation", desc: "High-end copywriting, 4K video shoots, viral reels, and creative assets that captivate your audience.", href: "/services/content-creation" },
  { tag: "ECOM", title: "E-Commerce Marketing", desc: "Full-funnel growth strategies that maximize conversion rates, average order value, and recurring revenue.", href: "/services/ecommerce-marketing" },
  { tag: "STRATEGY", title: "Digital Strategy", desc: "Data-backed roadmaps and media planning that turn ambitious ideas into predictable, sustainable growth.", href: "/services/digital-strategy" },
];

const PROCESS = [
  { num: "01", title: "Discover", desc: "We deep-dive into your brand, audience economics, and growth bottlenecks before drafting strategy." },
  { num: "02", title: "Strategize", desc: "A tailored multichannel roadmap combining the right mix of creative, media, and tech for maximum ROI." },
  { num: "03", title: "Create & Launch", desc: "High-production creative, targeted campaigns, and conversion assets go live with meticulous QA." },
  { num: "04", title: "Measure & Scale", desc: "We track core metrics daily, continuously optimizing ad spend, conversion rates, and lifetime value." },
];

const TEAM = [
  { initials: "MS", role: "Chief Executive", name: "Muhammad Saad", desc: "Five years running digital growth for direct-to-consumer and enterprise brands before launching Sparke Avenue in 2026. Directly oversees media architecture." },
  { initials: "HM", role: "Head of Strategy", name: "Hannan Munir", desc: "Leads discovery, market intelligence, and multichannel media allocation with deep expertise in attribution models and conversion funnels." },
  { initials: "KA", role: "Creative Director", name: "Kamran Abid", desc: "Directs brand identity, content studio, and video creative. Formerly built and scaled creative engines for high-growth consumer startups." },
];

const ABOUT_PILLARS = [
  { icon: "compass", title: "Strategic Architecture", desc: "No generic packages. Every media plan and digital funnel is engineered specifically for your unit economics and target demographic." },
  { icon: "palette", title: "Scroll-Stopping Creative", desc: "We marry premium aesthetics with direct-response psychology so your creative captures attention and drives conversions." },
  { icon: "trending", title: "Full-Funnel Ownership", desc: "From top-of-funnel awareness to post-purchase retention, our integrated team handles everything end-to-end." },
];

const AVENUE_PATH = "M40,470 C40,370 340,370 340,270 C340,170 40,170 40,70 C40,30 90,10 140,10";

export default function Home() {
  const [formStatus, setFormStatus] = useState("");
  const [serviceOpen, setServiceOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [activeBrand, setActiveBrand] = useState(null);
  const selectRef = useRef(null);

  useEffect(() => {
    const revealEls = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add("in"), i * 60);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    revealEls.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  // close custom dropdown on outside click
  useEffect(() => {
    const onClick = (e) => {
      if (selectRef.current && !selectRef.current.contains(e.target)) {
        setServiceOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedService) {
      setFormStatus("Please select a service you're interested in.");
      return;
    }
    setFormStatus("Thank you! Your message has been received. We will get back to you shortly.");
    e.target.reset();
    setSelectedService("");
  };

  return (
    <>
      <AmbientBackground />
      <SiteNav />

      {/* Hero Section */}
      <section id="home" className="hero section">
        <div className="hero-copy">
          <span className="eyebrow">Digital Marketing &amp; Creative Agency</span>
          <h1>
            <span className="line"><span>IGNITE YOUR BRAND.</span></span>
            <span className="line"><span className="accent">SPARK</span> YOUR GROWTH.</span>
          </h1>
          <p>
            Sparke Avenue combines high-level strategy, bespoke creative production, modern web technology,
            and data-driven performance marketing to turn ambitious brands into category leaders.
          </p>
          <div className="cta-row">
            <a href="#contact" className="btn">Start a Project →</a>
            <a href="#portfolio" className="btn-outline">View Client Work</a>
          </div>
        </div>
        <div className="avenue-visual">
          <svg viewBox="0 0 400 500" fill="none">
            <defs>
              <filter id="glow" x="-100%" y="-100%" width="300%" height="300%">
                <feGaussianBlur stdDeviation="6" result="blur" />
                <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
              </filter>
            </defs>
            <path d={AVENUE_PATH} stroke="rgba(255,255,255,0.12)" strokeWidth="2" strokeDasharray="2 10" strokeLinecap="round" />
            <circle r="7" fill="#ffab40" filter="url(#glow)">
              <animateMotion dur="7s" repeatCount="indefinite" path={AVENUE_PATH} />
            </circle>
          </svg>
          <span className="way-tag" style={{ top: "6%", left: "24%", animationDelay: "1s" }}>SEO</span>
          <span className="way-tag" style={{ top: "34%", right: "6%", animationDelay: "1.4s" }}>ADS</span>
          <span className="way-tag" style={{ top: "62%", left: "58%", animationDelay: "1.8s" }}>SMM</span>
          <span className="way-tag" style={{ bottom: "8%", left: "6%", animationDelay: "2.2s" }}>WEB</span>
        </div>
      </section>

      {/* Marquee Track */}
      <div className="marquee-wrap">
        <div className="marquee-track">
          {[...SERVICES, ...SERVICES].map((s, i) => (
            <span key={i}><b>{s.tag}</b>{s.title}</span>
          ))}
        </div>
      </div>

      {/* About Section */}
      <section id="about" className="section">
        <div className="about-wrap">
          <div className="about-header reveal">
            <span className="eyebrow">Who We Are</span>
            <h2 className="section-title">We engineer digital identities that stand out, connect, and scale.</h2>
            <p className="about-lead">
              Sparke Avenue is a full-service digital marketing and creative agency built for businesses that demand more than traditional agencies deliver.
              We unite commercial strategy, premium creative, and conversion-first engineering to help brands show up with clarity and authority across every digital touchpoint.
            </p>
          </div>

          {/* Core Pillars */}
          <div className="about-pillars-grid">
            {ABOUT_PILLARS.map((p) => (
              <div className="about-pillar-card reveal" key={p.title}>
                <div className="pillar-icon">
                  <Icon name={p.icon} size={22} />
                </div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>

          {/* High-Impact Stat Grid */}
          <div className="about-stats-container reveal">
            <div className="stat-card">
              <span className="stat-num">360°</span>
              <span className="stat-label">Full-Service Digital Management</span>
            </div>
            <div className="stat-card">
              <span className="stat-num">8+</span>
              <span className="stat-label">Integrated Service Disciplines</span>
            </div>
            <div className="stat-card">
              <span className="stat-num">100%</span>
              <span className="stat-label">Data-Driven Growth Execution</span>
            </div>
            <div className="stat-card">
              <span className="stat-num">50M+</span>
              <span className="stat-label">Multichannel Impressions Generated</span>
            </div>
          </div>
        </div>
      </section>

      <div className="road-divider" />

      {/* Vision & Mission Section */}
      <section className="section" style={{ paddingTop: 90, paddingBottom: 90 }}>
        <div className="section-head reveal">
          <span className="eyebrow" style={{ justifyContent: "center" }}>Why We Exist</span>
          <h2 className="section-title">Vision &amp; Mission</h2>
        </div>
        <div className="vm-grid">
          <div className="vm-card reveal">
            <span className="eyebrow">Our Vision</span>
            <p>To become a globally trusted digital growth partner, transforming high-potential ideas into dominant market brands through relentless creativity, strategic precision, and measurable ROI.</p>
          </div>
          <div className="vm-card reveal">
            <span className="eyebrow">Our Mission</span>
            <p>To empower businesses with holistic digital strategies, captivating creative assets, and performance-driven campaigns that build unshakeable brand equity and predictable customer acquisition.</p>
          </div>
        </div>
      </section>

      <div className="road-divider" />

      {/* PORTFOLIO & BRAND SHOWCASE (Positioned BEFORE Services) */}
      <section id="portfolio" className="section">
        <div className="section-head reveal">
          <span className="eyebrow" style={{ justifyContent: "center" }}>Client Success Stories</span>
          <h2 className="section-title">Brands We&apos;ve Partnered With</h2>
          <p>
            From high-growth e-commerce and luxury retail to corporate manufacturing and trade alliances,
            explore how Sparke Avenue manages full-scale digital growth. Click any brand to view details.
          </p>
        </div>

        <div className="brands-showcase-grid">
          {BRANDS_DATA.map((brand) => (
            <div
              className="brand-card-interactive reveal"
              key={brand.id}
              onClick={() => setActiveBrand(brand)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") setActiveBrand(brand); }}
            >
              <div className="brand-card-logo-frame">
                <img src={brand.logo} alt={brand.name} />
              </div>
              <div className="brand-card-content">
                <span className="brand-card-badge">{brand.badge}</span>
                <h4>{brand.name}</h4>
                <p>{brand.industry}</p>
                <div className="brand-card-cta">
                  <span>View Case Study</span>
                  <Icon name="arrowRight" size={15} />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="portfolio-section-footer reveal">
          <Link href="/portfolio" className="btn-outline">
            <span>Explore All Portfolio Case Studies</span>
            <Icon name="external" size={16} />
          </Link>
        </div>
      </section>

      <div className="road-divider" />

      {/* Services Bento Section */}
      <section id="services" className="section">
        <div className="section-head reveal">
          <span className="eyebrow" style={{ justifyContent: "center" }}>What We Do</span>
          <h2 className="section-title">Our Core Services</h2>
          <p>Eight specialized disciplines, one unified growth strategy — designed around where your brand needs to scale next.</p>
        </div>
        <div className="bento">
          {SERVICES.map((s) =>
            s.href ? (
              <Link href={s.href} className={`card reveal ${s.featured ? "featured" : ""}`} key={s.tag}>
                <span className="tag">{s.tag}</span>
                <div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              </Link>
            ) : (
              <div className={`card reveal ${s.featured ? "featured" : ""}`} key={s.tag}>
                <span className="tag">{s.tag}</span>
                <div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              </div>
            )
          )}
          <a href="#contact" className="card reveal cta-tile">
            <span className="tag">GET STARTED</span>
            <div>
              <h3>Have a project in mind?</h3>
              <p>Let&apos;s talk about where your brand needs to grow next.</p>
              <div className="arrow">→</div>
            </div>
          </a>
        </div>
      </section>

      <div className="road-divider" />

      {/* Process Section */}
      <section id="process" className="section">
        <div className="section-head reveal">
          <span className="eyebrow" style={{ justifyContent: "center" }}>How We Work</span>
          <h2 className="section-title">A Process Built Around Results</h2>
        </div>
        <div className="timeline">
          {PROCESS.map((p) => (
            <div className="timeline-item reveal" key={p.num}>
              <div className="timeline-num">{p.num}</div>
              <div>
                <h4>{p.title}</h4>
                <p>{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="road-divider" />

      {/* Team Section */}
      <section id="team" className="section">
        <div className="section-head reveal">
          <span className="eyebrow" style={{ justifyContent: "center" }}>Meet The Team</span>
          <h2 className="section-title">The People Behind Sparke Avenue</h2>
        </div>
        <div className="team-grid">
          {TEAM.map((t) => (
            <div className="team-card reveal" key={t.name}>
              <div className="team-avatar">{t.initials}</div>
              <div className="role">{t.role}</div>
              <h4>{t.name}</h4>
              <p>{t.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="road-divider" />

      {/* Contact Section */}
      <section id="contact" className="section">
        <div className="section-head reveal">
          <span className="eyebrow" style={{ justifyContent: "center" }}>Let&apos;s Connect</span>
          <h2 className="section-title">Let&apos;s Spark Your Brand&apos;s Growth</h2>
          <p>Ready to elevate your digital presence? Send us an inquiry for tailored marketing solutions and pricing.</p>
        </div>
        <div className="contact-wrap">
          <div className="contact-info reveal">
            <h3>Direct Channels</h3>
            
            <div className="info-line">
              <div className="icon">
                <Icon name="phone" size={18} />
              </div>
              <div>
                <b>Call / WhatsApp</b>
                <a href="https://wa.me/923000000000" target="_blank" rel="noreferrer">+92 (300) 000-0000</a>
              </div>
            </div>

            <div className="info-line">
              <div className="icon">
                <Icon name="mail" size={18} />
              </div>
              <div>
                <b>Direct Email</b>
                <a href="mailto:hello@sparkeavenue.com">hello@sparkeavenue.com</a>
              </div>
            </div>

            <div className="info-line">
              <div className="icon">
                <Icon name="instagram" size={18} />
              </div>
              <div>
                <b>Instagram</b>
                <a href="https://www.instagram.com/sparkeavenue?igsi=MTJxODM2cWQ1eGg0ag==" target="_blank" rel="noreferrer">@sparkeavenue</a>
              </div>
            </div>

            <div className="info-line">
              <div className="icon">
                <Icon name="facebook" size={18} />
              </div>
              <div>
                <b>Facebook</b>
                <a href="https://www.facebook.com/share/1FAhyJD6xb/" target="_blank" rel="noreferrer">/sparkeavenue</a>
              </div>
            </div>

            <div className="info-line">
              <div className="icon">
                <Icon name="linkedin" size={18} />
              </div>
              <div>
                <b>LinkedIn</b>
                <a href="https://www.linkedin.com/company/144785010" target="_blank" rel="noreferrer">Sparke Avenue</a>
              </div>
            </div>
          </div>

          <form className="reveal contact-form-card" onSubmit={handleSubmit}>
            <div className="form-row">
              <input type="text" placeholder="Your Full Name" required />
              <input type="email" placeholder="Your Email Address" required />
            </div>

            <div className="custom-select" ref={selectRef}>
              <button
                type="button"
                className={`select-trigger ${serviceOpen ? "open" : ""} ${!selectedService ? "placeholder" : ""}`}
                onClick={() => setServiceOpen(!serviceOpen)}
              >
                {selectedService || "Select service you're interested in"}
                <span className="select-caret">▾</span>
              </button>
              {serviceOpen && (
                <div className="select-panel">
                  {SERVICES.map((s) => (
                    <div
                      key={s.tag}
                      className={`select-option ${selectedService === s.title ? "active" : ""}`}
                      onClick={() => { setSelectedService(s.title); setServiceOpen(false); }}
                    >
                      {s.title}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <textarea rows={5} placeholder="Tell us about your brand, current goals, and project timeline" required />
            <button type="submit" className="btn" style={{ justifyContent: "center", width: "100%" }}>
              Send Inquiry Message →
            </button>
            {formStatus && <div className="form-status">{formStatus}</div>}
          </form>
        </div>
      </section>

      <SiteFooter />

      {/* Brand Case Study Modal */}
      <BrandModal brand={activeBrand} onClose={() => setActiveBrand(null)} />
    </>
  );
}

