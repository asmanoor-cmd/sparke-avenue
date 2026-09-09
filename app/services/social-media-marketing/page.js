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
  { icon: "compass", title: "Social Media Strategy", desc: "A content and growth plan built around your brand and audience." },
  { icon: "calendar", title: "Content Planning", desc: "Organized calendars so your posting is consistent, not random." },
  { icon: "palette", title: "Content Creation", desc: "Posts, reels and visuals designed to stop the scroll." },
  { icon: "chat", title: "Community Management", desc: "Responding, engaging and building real relationships with your audience." },
  { icon: "megaphone", title: "Paid Social", desc: "Boosted and targeted campaigns that extend your reach." },
  { icon: "chart", title: "Analytics & Reporting", desc: "Clear reporting on what's working and what's next." },
];

const PROCESS = [
  { num: "01", title: "Research", desc: "Understanding your audience, competitors and platform trends." },
  { num: "02", title: "Strategy", desc: "Defining content pillars, tone and growth goals." },
  { num: "03", title: "Create", desc: "Producing posts, reels and campaigns." },
  { num: "04", title: "Publish", desc: "Consistent posting on the right platforms at the right times." },
  { num: "05", title: "Engage", desc: "Building community through comments, DMs and interaction." },
  { num: "06", title: "Optimize", desc: "Refining based on what the data tells us." },
];

const CONTENT_SYSTEM = ["Posts", "Reels", "Stories", "Campaigns", "Promotions"];

const RESULTS = [
  { value: 85, suffix: "%", label: "Reach Growth" },
  { value: 4.6, suffix: "%", label: "Engagement Rate", decimals: 1 },
  { value: 60, suffix: "%", label: "Follower Growth" },
  { value: 90, suffix: "+", label: "Leads Generated" },
];

const PORTFOLIO = [
  {
    name: "Majid Silver & Gold Collection",
    logo: "/portfolio/majid-silver.png",
    tag: "Viral Video & Reels Strategy",
    desc: "Short-form video storytelling, daily jewelry trend reels & direct WhatsApp customer conversion funnel.",
    metric: "2.9M+ Reel Views",
  },
  {
    name: "Waheed Jewellers",
    logo: "/portfolio/waheed-jewellers.png",
    tag: "Luxury Bridal Curation",
    desc: "High-end bridal shoot reels, showroom appointment campaigns & lifestyle branding.",
    metric: "45K+ Engaged Following",
  },
  {
    name: "Zarnoor Collection",
    logo: "/portfolio/zarnoor-collection.png",
    tag: "E-Commerce Fashion Socials",
    desc: "Daily product unboxings, UGC-style creative hooks, and TikTok/Instagram shopping funnels.",
    metric: "+85% Audience Growth",
  },
];

const BENEFITS = [
  { icon: "compass", title: "Strategic" },
  { icon: "palette", title: "Creative" },
  { icon: "calendar", title: "Consistent" },
  { icon: "chart", title: "Data-Driven" },
];

export default function SocialMediaMarketingPage() {
  useScrollReveal();
  const glowRef = useMouseGlow();

  return (
    <>
      <AmbientBackground />
      <div className="mouse-glow" ref={glowRef} />
      <SiteNav />

      <section className="svc-hero section">
        <div className="svc-hero-copy">
          <span className="eyebrow">Social Media Marketing</span>
          <h1 className="reveal in">Make your brand impossible to scroll past.</h1>
          <p>Strategic social media management that builds visibility, engagement and meaningful brand growth.</p>
          <div className="cta-row">
            <a href="/#contact" className="btn">Grow With Us</a>
            <a href="#portfolio" className="btn-outline">See Our Work</a>
          </div>
        </div>
        <div className="svc-visual reveal">
          <div className="feed-mock">
            <div className="feed-post" style={{ animationDelay: ".3s" }}>
              <div className="fp-top"><div className="fp-avatar" /><div className="fp-line" style={{ width: "50%" }} /></div>
              <div className="fp-line" style={{ width: "90%" }} />
              <div className="fp-line" style={{ width: "70%" }} />
              <div className="fp-stats"><span>❤️ 1.2k</span><span>💬 84</span><span>↗️ 210</span></div>
            </div>
            <div className="feed-post" style={{ animationDelay: ".6s" }}>
              <div className="fp-top"><div className="fp-avatar" /><div className="fp-line" style={{ width: "40%" }} /></div>
              <div className="fp-line" style={{ width: "80%" }} />
              <div className="fp-stats"><span>❤️ 940</span><span>💬 52</span><span>↗️ 130</span></div>
            </div>
          </div>
          <div className="float-badge" style={{ top: "2%", right: "0%", animationDelay: ".9s" }}><span className="dot" />Engagement ↑</div>
        </div>
      </section>

      <div className="road-divider" />

      <section className="section">
        <div className="section-head reveal">
          <span className="eyebrow" style={{ justifyContent: "center" }}>What We Do</span>
          <h2 className="section-title">Full-Service Social Management</h2>
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
          <span className="eyebrow" style={{ justifyContent: "center" }}>Our Process</span>
          <h2 className="section-title">A System, Not Guesswork</h2>
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
          <span className="eyebrow" style={{ justifyContent: "center" }}>Content System</span>
          <h2 className="section-title">Everything On One Calendar</h2>
        </div>
        <div className="flow-row reveal">
          {CONTENT_SYSTEM.map((c, i) => (
            <span key={c} style={{ display: "contents" }}>
              <span className="flow-step">{c}</span>
              {i < CONTENT_SYSTEM.length - 1 && <span className="flow-sep">→</span>}
            </span>
          ))}
        </div>
      </section>

      <div className="road-divider" />

      <section className="section">
        <div className="section-head reveal">
          <span className="eyebrow" style={{ justifyContent: "center" }}>Performance</span>
          <h2 className="section-title">Growth That Shows Up In The Numbers</h2>
        </div>
        <div className="results-grid">
          {RESULTS.map((r) => (
            <div className="result-card reveal" key={r.label}>
              <Counter value={r.value} suffix={r.suffix} decimals={r.decimals || 0} />
              <div className="r-label">{r.label}</div>
            </div>
          ))}
        </div>
        <div className="results-note">Verified growth and engagement metrics across Sparke Avenue managed social accounts.</div>
      </section>

      <div className="road-divider" />

      <section id="portfolio" className="section">
        <div className="section-head reveal">
          <span className="eyebrow" style={{ justifyContent: "center" }}>Client Campaigns</span>
          <h2 className="section-title">Campaigns We&apos;re Proud Of</h2>
        </div>
        <div className="showcase-grid">
          {PORTFOLIO.map((p, i) => (
            <div className="showcase-card reveal" key={i}>
              <div className="showcase-logo-thumb" style={{ padding: "26px 0 10px" }}>
                <div className="brand-card-logo-frame" style={{ width: 76, height: 76, margin: "0 auto" }}>
                  <img src={p.logo} alt={p.name} />
                </div>
              </div>
              <div className="showcase-body">
                <span className="sc-tag">{p.tag}</span>
                <h4>{p.name}</h4>
                <p>{p.desc}</p>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 14 }}>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: ".75rem", color: "var(--spark)" }}>{p.metric}</span>
                  <a href="/#contact">Explore →</a>
                </div>
              </div>
            </div>
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
        <h2>Your audience is already scrolling. Let&apos;s give them something to stop for.</h2>
        <InquiryForm serviceName="Social Media Marketing" extraLabel="Business / Brand" extraPlaceholder="Business / Brand Name" />
      </section>

      <SiteFooter />
    </>
  );
}
