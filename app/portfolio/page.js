"use client";

import { useState } from "react";
import SiteNav from "../components/SiteNav";
import SiteFooter from "../components/SiteFooter";
import AmbientBackground from "../components/AmbientBackground";
import useScrollReveal from "../components/useScrollReveal";
import BrandModal, { BRANDS_DATA } from "../components/BrandModal";
import Icon from "../components/Icon";

export default function PortfolioPage() {
  useScrollReveal();
  const [activeBrand, setActiveBrand] = useState(null);

  return (
    <>
      <AmbientBackground />
      <SiteNav />

      <section className="section" style={{ paddingTop: 140 }}>
        <div className="section-head reveal">
          <span className="eyebrow" style={{ justifyContent: "center" }}>Our Work &amp; Case Studies</span>
          <h2 className="section-title">Brands We&apos;ve Partnered With</h2>
          <p>
            From e-commerce scaling and luxury branding to corporate B2B presence and institutional campaigns,
            explore how we drive measurable digital growth.
          </p>
        </div>

        <div className="portfolio-grid">
          {BRANDS_DATA.map((c) => (
            <div
              className="portfolio-card reveal"
              key={c.id}
              onClick={() => setActiveBrand(c)}
              tabIndex={0}
              role="button"
              onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") setActiveBrand(c); }}
            >
              <div className="portfolio-logo-frame">
                <img src={c.logo} alt={c.name} />
              </div>
              <span className="p-industry">{c.badge}</span>
              <h4>{c.name}</h4>
              <p className="p-tagline">{c.tagline}</p>
              <div className="portfolio-card-action">
                <span>Explore Case Study</span>
                <Icon name="arrowRight" size={16} />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="final-cta reveal">
        <span className="eyebrow" style={{ justifyContent: "center" }}>Let&apos;s Build Together</span>
        <h2>Want your brand to be our next success story?</h2>
        <a href="/#contact" className="btn">Start a Conversation →</a>
      </section>

      <SiteFooter />

      <BrandModal brand={activeBrand} onClose={() => setActiveBrand(null)} />
    </>
  );
}
