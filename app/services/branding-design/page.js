"use client";

import SiteNav from "../../components/SiteNav";
import SiteFooter from "../../components/SiteFooter";
import AmbientBackground from "../../components/AmbientBackground";
import InquiryForm from "../../components/InquiryForm";
import useScrollReveal from "../../components/useScrollReveal";
import useMouseGlow from "../../components/useMouseGlow";
import Icon from "../../components/Icon";

const WHAT_WE_CREATE = [
  { icon: "layers", title: "Brand Identity", desc: "A complete visual and verbal identity that represents who you are." },
  { icon: "pen", title: "Logo Design", desc: "A distinctive mark your audience will recognize instantly." },
  { icon: "palette", title: "Visual Identity", desc: "Colors, typography and imagery that work together consistently." },
  { icon: "phone", title: "Social Media Design", desc: "Templates and creatives built for how your audience actually scrolls." },
  { icon: "printer", title: "Marketing Materials", desc: "Business cards, brochures and print assets that match your brand." },
  { icon: "rocket", title: "Creative Campaigns", desc: "Concept-driven creative for launches and key moments." },
];

const PROCESS = [
  { num: "01", title: "Discover", desc: "Understanding your business, values and audience." },
  { num: "02", title: "Define", desc: "Setting the strategic direction for the brand." },
  { num: "03", title: "Concept", desc: "Exploring creative directions and initial concepts." },
  { num: "04", title: "Design", desc: "Building out the full visual identity." },
  { num: "05", title: "Refine", desc: "Iterating based on your feedback." },
  { num: "06", title: "Deliver", desc: "Handing over final files and brand guidelines." },
];

const BRAND_SYSTEM = ["Logo", "Typography", "Colors", "Imagery", "Icons", "Design Guidelines"];
const WHY_BRANDING = ["Recognition", "Trust", "Consistency", "Differentiation", "Memorability"];
const BENEFITS = [
  { icon: "palette", title: "Creative" },
  { icon: "compass", title: "Strategic" },
  { icon: "layout", title: "Consistent" },
  { icon: "bulb", title: "Distinctive" },
];

export default function BrandingDesignPage() {
  useScrollReveal();
  const glowRef = useMouseGlow();

  return (
    <>
      <AmbientBackground />
      <div className="mouse-glow" ref={glowRef} />
      <SiteNav />

      <section className="svc-hero section">
        <div className="svc-hero-copy">
          <span className="eyebrow">Branding &amp; Design</span>
          <h1 className="reveal in">Build a brand people remember.</h1>
          <p>Memorable identities, visuals and creative systems that make businesses stand out.</p>
          <div className="cta-row">
            <a href="/#contact" className="btn">Build My Brand</a>
            <a href="#showcase" className="btn-outline">View Creative Work</a>
          </div>
        </div>
        <div className="svc-visual reveal">
          <div className="brand-board">
            <div className="swatch" style={{ background: "linear-gradient(135deg,#4c7cf0,#1c2f5c)", animationDelay: ".2s" }} />
            <div className="swatch" style={{ background: "linear-gradient(135deg,#ffab40,#7a4b0f)", animationDelay: ".35s" }} />
            <div className="type-card" style={{ animationDelay: ".5s" }}>
              <div className="big">Aa</div>
              <div className="small">Typography System</div>
            </div>
          </div>
          <div className="float-badge" style={{ top: "4%", right: "-2%", animationDelay: ".9s" }}><span className="dot" />Logo Concepts</div>
        </div>
      </section>

      <div className="road-divider" />

      <section className="section">
        <div className="section-head reveal">
          <span className="eyebrow" style={{ justifyContent: "center" }}>What We Create</span>
          <h2 className="section-title">Every Piece of Your Identity</h2>
        </div>
        <div className="svc-grid">
          {WHAT_WE_CREATE.map((s) => (
            <div className="svc-card reveal" key={s.title}>
              <div className="icon-chip"><Icon name={s.icon} /></div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="road-divider" />

      <section className="section">
        <div className="section-head reveal">
          <span className="eyebrow" style={{ justifyContent: "center" }}>Our Creative Process</span>
          <h2 className="section-title">From Concept to Identity</h2>
        </div>
        <div className="timeline">
          {PROCESS.map((p) => (
            <div className="timeline-item reveal" key={p.num}>
              <div className="timeline-num">{p.num}</div>
              <div><h4>{p.title}</h4><p>{p.desc}</p></div>
            </div>
          ))}
        </div>
      </section>

      <div className="road-divider" />

      <section className="section">
        <div className="section-head reveal">
          <span className="eyebrow" style={{ justifyContent: "center" }}>Brand System</span>
          <h2 className="section-title">Everything Working Together</h2>
        </div>
        <div className="benefit-grid">
          {BRAND_SYSTEM.map((b) => (
            <div className="benefit-chip reveal" key={b}><h4>{b}</h4></div>
          ))}
        </div>
      </section>

      <div className="road-divider" />

      <section id="showcase" className="section">
        <div className="section-head reveal">
          <span className="eyebrow" style={{ justifyContent: "center" }}>Creative Showcase</span>
          <h2 className="section-title">A Look At Our Work</h2>
        </div>
        <div className="showcase-grid">
          {[
            {
              name: "Zarnoor Collection",
              logo: "/portfolio/zarnoor-collection.png",
              tag: "Luxury Fashion Identity",
              desc: "Complete visual identity, custom gold monogram, premium unboxing packaging, and social design kits.",
            },
            {
              name: "Waheed Jewellers",
              logo: "/portfolio/waheed-jewellers.png",
              tag: "Bridal Heritage Branding",
              desc: "Refined bridal logo standards, elegant metallic print collateral, and luxury store signage.",
            },
            {
              name: "Azmat Cables",
              logo: "/portfolio/azmat-cables.png",
              tag: "Industrial Corporate Rebrand",
              desc: "Modernized corporate visual identity, certified packaging seals, and commercial catalog systems.",
            },
          ].map((b, i) => (
            <div className="showcase-card reveal" key={i}>
              <div className="showcase-logo-thumb" style={{ padding: "26px 0 10px" }}>
                <div className="brand-card-logo-frame" style={{ width: 76, height: 76, margin: "0 auto" }}>
                  <img src={b.logo} alt={b.name} />
                </div>
              </div>
              <div className="showcase-body">
                <span className="sc-tag">{b.tag}</span>
                <h4>{b.name}</h4>
                <p>{b.desc}</p>
                <a href="/#contact" style={{ display: "inline-block", marginTop: 12 }}>View Case Study →</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="road-divider" />

      <section className="section">
        <div className="section-head reveal">
          <span className="eyebrow" style={{ justifyContent: "center" }}>Why Branding Matters</span>
          <h2 className="section-title">More Than Just a Logo</h2>
        </div>
        <div className="benefit-grid">
          {WHY_BRANDING.map((w) => (
            <div className="benefit-chip reveal" key={w}><h4>{w}</h4></div>
          ))}
        </div>
      </section>

      <div className="road-divider" />

      <section className="section">
        <div className="section-head reveal">
          <span className="eyebrow" style={{ justifyContent: "center" }}>Why Sparke Avenue</span>
          <h2 className="section-title">Why Clients Choose Us</h2>
        </div>
        <div className="benefit-grid">
          {BENEFITS.map((b) => (
            <div className="benefit-chip reveal" key={b.title}>
              <div className="b-icon"><Icon name={b.icon} size={26} /></div>
              <h4>{b.title}</h4>
            </div>
          ))}
        </div>
      </section>

      <section className="final-cta reveal">
        <span className="eyebrow" style={{ justifyContent: "center" }}>Let&apos;s Talk</span>
        <h2>Your brand deserves to be remembered.</h2>
        <p style={{ color: "var(--muted)", maxWidth: 560, margin: "0 auto 40px" }}>
          Tell us your vision and let&apos;s create an identity that represents your business.
        </p>
        <InquiryForm extraLabel="Business Name" extraPlaceholder="Your Business Name" />
      </section>

      <SiteFooter />
    </>
  );
}
