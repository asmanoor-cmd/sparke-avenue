"use client";

import { useEffect, useRef, useState } from "react";
import SiteNav from "./SiteNav";
import SiteFooter from "./SiteFooter";
import AmbientBackground from "./AmbientBackground";
import InquiryForm from "./InquiryForm";
import Icon from "./Icon";

function Counter({ value, suffix = "", decimals = 0, duration = 1600 }) {
  const [display, setDisplay] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            const start = performance.now();
            const step = (now) => {
              const progress = Math.min((now - start) / duration, 1);
              setDisplay(progress * value);
              if (progress < 1) requestAnimationFrame(step);
              else setDisplay(value);
            };
            requestAnimationFrame(step);
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [value, duration]);

  return (
    <span className="counter" ref={ref}>
      {display.toFixed(decimals)}
      {suffix}
    </span>
  );
}

export default function ServicePage({
  eyebrow,
  headline,
  accentWord,
  description,
  primaryCtaLabel = "Let's Grow Your Business",
  secondaryCtaLabel = "View Our Work",
  heroMetrics,
  chartHeights = [40, 65, 50, 85, 70, 95],
  whatWeDoHeading = "Built For Performance",
  whatWeDoText,
  whatWeDo,
  processHeading = "From Discovery to Scale",
  processSteps,
  results,
  caseStudy,
  faqs,
  benefits,
  finalHeadline = "Ready to turn your marketing into measurable growth?",
  finalDescription,
  inquiryExtraLabel = "Service",
  inquiryExtraPlaceholder,
  serviceName,
}) {
  const [openFaq, setOpenFaq] = useState(null);
  const glowRef = useRef(null);

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
      { threshold: 0.15 }
    );
    revealEls.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const el = glowRef.current;
    if (!el) return;
    const move = (e) => {
      el.style.left = e.clientX + "px";
      el.style.top = e.clientY + "px";
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      <AmbientBackground />
      <div className="mouse-glow" ref={glowRef} />
      <SiteNav />

      <section className="svc-hero section">
        <div className="svc-hero-copy">
          <span className="eyebrow">{eyebrow}</span>
          <h1 className="reveal in">
            {headline} <span className="accent">{accentWord}</span>
          </h1>
          <p>{description}</p>
          <div className="cta-row">
            <a href="/#contact" className="btn">{primaryCtaLabel}</a>
            <a href="#case-study" className="btn-outline">{secondaryCtaLabel}</a>
          </div>
        </div>
        <div className="svc-visual reveal">
          <div className="chart-panel">
            <span className="eyebrow" style={{ marginBottom: 4 }}>Performance Snapshot</span>
            <div className="chart-bars">
              {chartHeights.map((h, i) => (
                <span key={i} style={{ height: `${h}%`, animationDelay: `${0.1 + i * 0.1}s` }} />
              ))}
            </div>
          </div>
          {heroMetrics.map((m, i) => (
            <div
              className="metric-float"
              key={m.label}
              style={{ ...m.position, animationDelay: `${0.8 + i * 0.3}s` }}
            >
              <div className="m-label">{m.label}</div>
              <div className="m-value">{m.value}</div>
            </div>
          ))}
        </div>
      </section>

      <div className="road-divider" />

      <section className="section">
        <div className="section-head reveal">
          <span className="eyebrow" style={{ justifyContent: "center" }}>What We Do</span>
          <h2 className="section-title">{whatWeDoHeading}</h2>
          <p>{whatWeDoText}</p>
        </div>
        <div className="svc-grid">
          {whatWeDo.map((s) => (
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
          <h2 className="section-title">{processHeading}</h2>
        </div>
        <div className="timeline">
          {processSteps.map((p) => (
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

      <section className="section">
        <div className="section-head reveal">
          <span className="eyebrow" style={{ justifyContent: "center" }}>Results</span>
          <h2 className="section-title">Numbers That Matter</h2>
        </div>
        <div className="results-grid">
          {results.map((r) => (
            <div className="result-card reveal" key={r.label}>
              <Counter value={r.value} suffix={r.suffix} decimals={r.decimals || 0} />
              <div className="r-label">{r.label}</div>
            </div>
          ))}
        </div>
        <div className="results-note">Verified campaign and performance benchmarks across Sparke Avenue client accounts.</div>
      </section>

      <div className="road-divider" />

      <section id="case-study" className="section">
        <div className="section-head reveal">
          <span className="eyebrow" style={{ justifyContent: "center" }}>Featured Case Study</span>
          <h2 className="section-title">A Proven Client Win</h2>
          <p>Explore how Sparke Avenue delivered measurable impact for our client partner.</p>
        </div>
        <div className="case-study-card reveal">
          <div>
            <span className="eyebrow">{caseStudy.clientName || "Client Success"}</span>
            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.6rem", color: "#fff", marginBottom: 12 }}>
              {caseStudy.businessType}
            </h3>
            {caseStudy.description && (
              <p style={{ color: "var(--muted)", fontSize: ".95rem", lineHeight: 1.6, marginBottom: 24 }}>
                {caseStudy.description}
              </p>
            )}
            <div className="case-meta">
              {caseStudy.metrics.map((m) => (
                <div key={m.label}><b>{m.value}</b><span>{m.label}</span></div>
              ))}
            </div>
            <a href="/#contact" className="btn">Start Your Project →</a>
          </div>
          <div className="case-visual-badge">
            {caseStudy.clientLogo && (
              <div className="brand-card-logo-frame" style={{ margin: "0 auto 14px", width: 80, height: 80 }}>
                <img src={caseStudy.clientLogo} alt={caseStudy.clientName} />
              </div>
            )}
            <div style={{ textAlign: "center" }}>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: ".72rem", color: "var(--spark)", textTransform: "uppercase", letterSpacing: 1 }}>
                Verified Deliverables
              </span>
              <h4 style={{ fontFamily: "var(--font-display)", color: "#fff", fontSize: "1.1rem", marginTop: 4 }}>
                {caseStudy.deliverables || "Full-Service Execution"}
              </h4>
            </div>
          </div>
        </div>
      </section>

      <div className="road-divider" />

      <section className="section">
        <div className="section-head reveal">
          <span className="eyebrow" style={{ justifyContent: "center" }}>FAQ</span>
          <h2 className="section-title">Common Questions</h2>
        </div>
        <div className="faq-list reveal">
          {faqs.map((f, i) => (
            <div className={`faq-item ${openFaq === i ? "open" : ""}`} key={f.q}>
              <button
                type="button"
                className="faq-q"
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                {f.q}
                <span className="faq-caret">+</span>
              </button>
              <div className="faq-a">
                <p>{f.a}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="road-divider" />

      {benefits && (
        <>
          <section className="section">
            <div className="section-head reveal">
              <span className="eyebrow" style={{ justifyContent: "center" }}>Why Sparke Avenue</span>
              <h2 className="section-title">Why Clients Choose Us</h2>
            </div>
            <div className="benefit-grid">
              {benefits.map((b) => (
                <div className="benefit-chip reveal" key={b.title}>
                  <div className="b-icon"><Icon name={b.icon} size={26} /></div>
                  <h4>{b.title}</h4>
                </div>
              ))}
            </div>
          </section>
          <div className="road-divider" />
        </>
      )}

      <section className="final-cta reveal">
        <h2>{finalHeadline}</h2>
        {finalDescription && (
          <p style={{ color: "var(--muted)", maxWidth: 560, margin: "0 auto 40px" }}>{finalDescription}</p>
        )}
        <InquiryForm
          serviceName={serviceName || eyebrow}
          extraLabel={inquiryExtraLabel}
          extraPlaceholder={inquiryExtraPlaceholder}
        />
      </section>

      <SiteFooter />
    </>
  );
}
