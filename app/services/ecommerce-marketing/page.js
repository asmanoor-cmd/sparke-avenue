"use client";

import SiteNav from "../../components/SiteNav";
import SiteFooter from "../../components/SiteFooter";
import AmbientBackground from "../../components/AmbientBackground";
import InquiryForm from "../../components/InquiryForm";
import Counter from "../../components/Counter";
import useScrollReveal from "../../components/useScrollReveal";
import useMouseGlow from "../../components/useMouseGlow";
import Icon from "../../components/Icon";

const WHAT_WE_DO = [
  { icon: "compass", title: "E-Commerce Strategy", desc: "A growth plan built around your store, products and margins." },
  { icon: "megaphone", title: "Paid Advertising", desc: "Meta and Google campaigns focused on purchases, not just clicks." },
  { icon: "gear", title: "Conversion Optimization", desc: "Improving your store so more visitors become buyers." },
  { icon: "box", title: "Product Marketing", desc: "Positioning and promoting products that deserve more attention." },
  { icon: "refresh", title: "Retargeting", desc: "Bringing back visitors who almost checked out." },
  { icon: "users", title: "Customer Acquisition", desc: "Finding and converting new customers profitably." },
];

const FUNNEL = ["Awareness", "Interest", "Visit", "Add to Cart", "Purchase", "Repeat Customer"];

const PROCESS = [
  { num: "01", title: "Understand", desc: "Learning your store, products and current performance." },
  { num: "02", title: "Strategize", desc: "Planning the channels and offers that will move the needle." },
  { num: "03", title: "Launch", desc: "Getting campaigns live across the right platforms." },
  { num: "04", title: "Optimize", desc: "Testing and refining continuously." },
  { num: "05", title: "Scale", desc: "Growing spend on what's proven to convert." },
];

const DASHBOARD = [
  { value: 65, suffix: "%", label: "Revenue Growth" },
  { value: 3.4, suffix: "%", label: "Conversion Rate", decimals: 1 },
  { value: 3.8, suffix: "x", label: "ROAS", decimals: 1 },
  { value: 48, suffix: "$", label: "Avg. Order Value" },
];

const BENEFITS = [
  { icon: "trending", title: "Growth-Focused" },
  { icon: "target", title: "Conversion-Driven" },
  { icon: "chart", title: "Data-Driven" },
  { icon: "users", title: "Customer-Centered" },
];

export default function EcommerceMarketingPage() {
  useScrollReveal();
  const glowRef = useMouseGlow();

  return (
    <>
      <AmbientBackground />
      <div className="mouse-glow" ref={glowRef} />
      <SiteNav />

      <section className="svc-hero section">
        <div className="svc-hero-copy">
          <span className="eyebrow">E-Commerce Marketing</span>
          <h1 className="reveal in">Turn browsers into buyers.</h1>
          <p>Growth-focused marketing strategies designed to attract customers, increase conversions and grow online stores.</p>
          <div className="cta-row">
            <a href="/#contact" className="btn">Grow My Store</a>
            <a href="#case-study" className="btn-outline">View Our Work</a>
          </div>
        </div>
        <div className="svc-visual reveal">
          <div className="ecom-mock">
            <div className="ecom-card" style={{ animationDelay: ".2s" }}><div className="e-label">Revenue</div><div className="e-value">↑ 65%</div></div>
            <div className="ecom-card" style={{ animationDelay: ".35s" }}><div className="e-label">ROAS</div><div className="e-value">3.8x</div></div>
            <div className="ecom-card wide" style={{ animationDelay: ".5s" }}><div className="e-label">Orders This Week</div><div className="e-value">🛒 New order received</div></div>
          </div>
          <div className="float-badge" style={{ top: "2%", right: "-2%", animationDelay: ".9s" }}><span className="dot" />Cart Recovered</div>
        </div>
      </section>

      <div className="road-divider" />

      <section className="section">
        <div className="section-head reveal">
          <span className="eyebrow" style={{ justifyContent: "center" }}>What We Do</span>
          <h2 className="section-title">Full-Funnel E-Commerce Growth</h2>
        </div>
        <div className="svc-grid">
          {WHAT_WE_DO.map((s) => (
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
          <span className="eyebrow" style={{ justifyContent: "center" }}>Growth Funnel</span>
          <h2 className="section-title">From Awareness to Repeat Customer</h2>
        </div>
        <div className="funnel reveal">
          {FUNNEL.map((f, i) => (
            <div key={f} style={{ display: "contents" }}>
              <div className="funnel-step">{f}</div>
              {i < FUNNEL.length - 1 && <div className="funnel-arrow">↓</div>}
            </div>
          ))}
        </div>
      </section>

      <div className="road-divider" />

      <section className="section">
        <div className="section-head reveal">
          <span className="eyebrow" style={{ justifyContent: "center" }}>Our Process</span>
          <h2 className="section-title">A Clear Path to Growth</h2>
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
          <span className="eyebrow" style={{ justifyContent: "center" }}>Performance Dashboard</span>
          <h2 className="section-title">Numbers That Matter</h2>
        </div>
        <div className="results-grid">
          {DASHBOARD.map((r) => (
            <div className="result-card reveal" key={r.label}>
              <Counter value={r.value} suffix={r.suffix} decimals={r.decimals || 0} />
              <div className="r-label">{r.label}</div>
            </div>
          ))}
        </div>
        <div className="results-note">Verified e-commerce performance metrics across Sparke Avenue managed online stores.</div>
      </section>

      <div className="road-divider" />

      <section id="case-study" className="section">
        <div className="section-head reveal">
          <span className="eyebrow" style={{ justifyContent: "center" }}>Featured Case Study</span>
          <h2 className="section-title">Scaling Online Sales to Record Volume</h2>
          <p>How Sparke Avenue powered full-funnel e-commerce growth for Zarnoor Collection.</p>
        </div>
        <div className="case-study-card reveal">
          <div>
            <span className="eyebrow">Zarnoor Collection — Fashion Boutique</span>
            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.6rem", color: "#fff", marginBottom: 12 }}>
              Omnichannel Performance Ads &amp; High-Velocity Order Scaling
            </h3>
            <p style={{ color: "var(--muted)", fontSize: ".95rem", lineHeight: 1.6, marginBottom: 24 }}>
              By integrating TikTok &amp; Meta Ads with daily dynamic UGC creatives, seamless COD checkout, and automated abandoned cart recovery, Sparke Avenue scaled monthly order volume rapidly.
            </p>
            <div className="case-meta">
              <div><b>12,000+</b><span>Orders Fulfilled</span></div>
              <div><b>3.8x</b><span>Blended ROAS</span></div>
              <div><b>+140%</b><span>Revenue Growth</span></div>
              <div><b>48$</b><span>Average Order Value</span></div>
            </div>
            <a href="/#contact" className="btn">Scale Your Store →</a>
          </div>
          <div className="case-visual-badge">
            <div className="brand-card-logo-frame" style={{ margin: "0 auto 14px", width: 80, height: 80 }}>
              <img src="/portfolio/zarnoor-collection.png" alt="Zarnoor Collection" />
            </div>
            <div style={{ textAlign: "center" }}>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: ".72rem", color: "var(--spark)", textTransform: "uppercase", letterSpacing: 1 }}>
                Growth Channels
              </span>
              <h4 style={{ fontFamily: "var(--font-display)", color: "#fff", fontSize: "1.05rem", marginTop: 4 }}>
                Meta, TikTok, Retargeting &amp; COD Ops
              </h4>
            </div>
          </div>
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
        <h2>Ready to grow your store?</h2>
        <p style={{ color: "var(--muted)", maxWidth: 560, margin: "0 auto 40px" }}>
          Tell us about your store and your goals, and let&apos;s create a growth strategy.
        </p>
        <InquiryForm extraLabel="Store / Website" extraPlaceholder="Your Store or Website URL" />
      </section>

      <SiteFooter />
    </>
  );
}
