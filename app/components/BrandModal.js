"use client";

import { useEffect } from "react";
import Icon from "./Icon";

export const BRANDS_DATA = [
  {
    id: "azmat-cables",
    name: "Azmat Cables",
    logo: "/portfolio/azmat-cables.png",
    industry: "Cables & Electrical Manufacturing",
    badge: "Industrial & Manufacturing",
    tagline: "Powering Industries Across Pakistan With Certified Quality Wiring",
    overview:
      "Azmat Cables is one of Pakistan's trusted electrical and industrial cable manufacturers, engineering top-tier power transmission, domestic wiring, and custom industrial cabling solutions.",
    challenge:
      "The brand required a complete corporate digital transformation from traditional B2B trade to a modernized digital ecosystem with online product catalogs, technical data sheets, and scalable commercial lead generation.",
    servicesProvided: [
      "Corporate Brand Identity & Visual Positioning",
      "Interactive Product Catalog Website & Technical Specs",
      "B2B Performance Lead Generation on Google Search & LinkedIn",
      "Industrial Facility Photography & Corporate Showreel",
      "Trade Collateral & Digital Product Brochures",
    ],
    results: [
      { value: "340%", label: "Increase in B2B Leads" },
      { value: "100%", label: "Digital Catalog Coverage" },
      { value: "#1", label: "Industrial Search Ranking" },
    ],
    summary:
      "Sparke Avenue established Azmat Cables as the premier modern brand in the electrical manufacturing sector, generating consistent high-value distributor and contractor inquiries.",
  },
  {
    id: "jewellista",
    name: "Jewellista.pk",
    logo: "/portfolio/jewellista.png",
    industry: "Luxury Jewelry — E-Commerce",
    badge: "E-Commerce & Luxury",
    tagline: "Fine Craftsmanship, Modern Elegance & Global E-Commerce Scale",
    overview:
      "Jewellista.pk is a premier online fine jewelry destination delivering exquisite bridal sets, solitaire rings, diamond-finish jewels, and bespoke heirlooms across Pakistan and international markets.",
    challenge:
      "Scaling customer acquisition profitably while maintaining an exclusive high-end luxury brand image, reducing customer acquisition costs (CAC), and optimizing cart checkout conversions.",
    servicesProvided: [
      "Custom High-Speed E-Commerce Storefront Development",
      "High-ROI Meta (Instagram/Facebook) & Google Shopping Campaigns",
      "4K Macro Jewelry Videography & Aesthetic Social Media Creative",
      "Automated WhatsApp & Email Abandoned Cart Recovery",
      "VIP Customer Retention & Seasonal Launch Campaigns",
    ],
    results: [
      { value: "4.8x", label: "Blended Return on Ad Spend" },
      { value: "+120%", label: "YoY E-Commerce Revenue" },
      { value: "85K+", label: "Targeted Instagram Community" },
    ],
    summary:
      "Sparke Avenue manages Jewellista's end-to-end digital growth, scaling online orders consistently month-over-month while positioning the brand at the summit of luxury e-commerce.",
  },
  {
    id: "majid-silver",
    name: "Majid Silver & Gold Collection",
    logo: "/portfolio/majid-silver.png",
    industry: "Jewelry & 925 Sterling Silver",
    badge: "Heritage Retail & Online",
    tagline: "Authentic 925 Sterling Silver & Timeless Custom Jewelry",
    overview:
      "Majid Silver & Gold Jewelry Collection is celebrated for masterful 925 silver craftsmanship, custom bridal pieces, and contemporary everyday luxury jewelry with nationwide delivery.",
    challenge:
      "Transitioning from local showroom sales into a viral social media brand with high-volume direct WhatsApp ordering and pan-Pakistan brand authority.",
    servicesProvided: [
      "Full Social Media Management & Creative Strategy",
      "Viral Short-Form Reel Production & Trend Curation",
      "Direct WhatsApp Sales Funnel & Catalog Management",
      "Geo-Targeted Meta Ads for Store Visits & Online Orders",
      "Product Packaging Design & Unboxing Experience",
    ],
    results: [
      { value: "2.9M+", label: "Viral Reel Impressions" },
      { value: "65%", label: "Rise in Direct Inquiries" },
      { value: "98%", label: "Positive Customer Sentiment" },
    ],
    summary:
      "Through scroll-stopping video content and conversational commerce, Sparke Avenue transformed Majid Silver into one of the most recognized 925 silver jewelry brands online.",
  },
  {
    id: "waheed-jewellers",
    name: "Waheed Jewellers",
    logo: "/portfolio/waheed-jewellers.png",
    industry: "Luxury Jewelry Retail & Bridal Sets",
    badge: "Bridal & Fine Jewelry",
    tagline: "Timeless Bridal Gold & Fine Jewelry Masterpieces",
    overview:
      "Waheed Jewellers is an established luxury retail jeweler renowned for bespoke bridal sets, 22K gold creations, and certified diamond jewelry designed for memorable life milestones.",
    challenge:
      "Capturing high-net-worth bridal shoppers during peak wedding seasons and driving verified appointments to their flagship showroom while elevating brand prestige online.",
    servicesProvided: [
      "Luxury Brand Positioning & Visual Identity Standards",
      "Bridal Season Paid Campaign Management (Meta & Google)",
      "High-End Model & Jewelry Studio Photoshoots",
      "Local SEO, Google Business Profile & Showroom Footfall Ads",
      "Bespoke Bridal Catalog & Customer Appointment Automation",
    ],
    results: [
      { value: "180%", label: "Growth in Bridal Consultations" },
      { value: "45K+", label: "Engaged Luxury Followers" },
      { value: "5.0★", label: "Google Business Rating" },
    ],
    summary:
      "Sparke Avenue built a multi-channel acquisition funnel connecting digital bridal shoppers directly with showroom jewelry consultants, driving record seasonal sales.",
  },
  {
    id: "zarnoor-collection",
    name: "Zarnoor Collection",
    logo: "/portfolio/zarnoor-collection.png",
    industry: "Ladies Luxury Bags & Jewellery",
    badge: "Fashion E-Commerce",
    tagline: "Curated Statement Bags, Accessories & Designer Jewellery",
    overview:
      "Zarnoor Collection is a fast-growing fashion boutique brand offering modern women statement handbags, clutches, luxury jewelry, and fashion-forward accessories.",
    challenge:
      "Managing high-velocity inventory turns, running high-volume multi-channel ads on Meta and TikTok, and maximizing average order value (AOV) across seasonal collections.",
    servicesProvided: [
      "Full E-Commerce Management & Store Optimization",
      "Omnichannel Performance Marketing (Meta & TikTok Ads)",
      "Daily UGC Creatives, Reel Editing & Lifestyle Graphic Design",
      "Cash-on-Delivery (COD) & Courier Logistics Integration",
      "Dynamic Retargeting & Upsell Funnels",
    ],
    results: [
      { value: "12,000+", label: "Orders Fulfilled" },
      { value: "3.8x", label: "Average Blended ROAS" },
      { value: "240%", label: "Year-over-Year Growth" },
    ],
    summary:
      "Sparke Avenue powers Zarnoor Collection's continuous growth engine, turning daily trend content into profitable high-volume e-commerce transactions.",
  },
  {
    id: "fpul-alliance",
    name: "FPUL Alliance",
    logo: "/portfolio/fpul-alliance.png",
    industry: "Trade & Business Alliance",
    badge: "Institutional & Leadership",
    tagline: "Uniting Industrial Leaders & Trade Pioneers at LCCI",
    overview:
      "FPUL Alliance is a major business coalition within the Lahore Chamber of Commerce & Industry (LCCI) representing founders, progressive business groups, and leading trade pioneers.",
    challenge:
      "Executing a high-stakes, fast-paced electoral and institutional branding campaign across print, digital, video PR, and member outreach to achieve maximum voter engagement.",
    servicesProvided: [
      "Executive Election Campaign & Media Strategy",
      "Digital PR, Press Releases & Executive Testimonials",
      "High-Impact Campaign Video Production & Interviews",
      "Convention, Event Branding & Print Campaign Collateral",
      "Multi-Channel Member Engagement & WhatsApp Broadcasts",
    ],
    results: [
      { value: "Record", label: "Voter Turnout & Win" },
      { value: "25+", label: "Industry Sectors Reached" },
      { value: "1.5M+", label: "Digital PR Impressions" },
    ],
    summary:
      "Sparke Avenue led the unified digital and visual communications strategy that delivered a historic electoral victory and reinforced FPUL Alliance's trade leadership.",
  },
];

export default function BrandModal({ brand, onClose }) {
  useEffect(() => {
    if (!brand) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [brand, onClose]);

  if (!brand) return null;

  return (
    <div className="brand-modal-overlay" onClick={onClose}>
      <div
        className="brand-modal-card"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        <button
          className="brand-modal-close"
          onClick={onClose}
          aria-label="Close modal"
        >
          <Icon name="close" size={20} />
        </button>

        <div className="brand-modal-header">
          <div className="brand-modal-logo-wrap">
            <img src={brand.logo} alt={brand.name} />
          </div>
          <div className="brand-modal-title-group">
            <span className="brand-modal-badge">{brand.badge}</span>
            <h3>{brand.name}</h3>
            <p className="brand-modal-tagline">{brand.tagline}</p>
          </div>
        </div>

        <div className="brand-modal-body">
          <div className="brand-modal-section">
            <h4>Client Overview</h4>
            <p>{brand.overview}</p>
          </div>

          <div className="brand-modal-section">
            <h4>The Challenge &amp; Objective</h4>
            <p>{brand.challenge}</p>
          </div>

          <div className="brand-modal-section">
            <h4>Services Managed by Sparke Avenue</h4>
            <ul className="brand-services-list">
              {brand.servicesProvided.map((s, idx) => (
                <li key={idx}>
                  <span className="bullet-icon">
                    <Icon name="check" size={14} />
                  </span>
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="brand-modal-results-grid">
            {brand.results.map((r, idx) => (
              <div className="brand-result-item" key={idx}>
                <b>{r.value}</b>
                <span>{r.label}</span>
              </div>
            ))}
          </div>

          <div className="brand-modal-summary-box">
            <span className="summary-tag">The Impact</span>
            <p>{brand.summary}</p>
          </div>
        </div>

        <div className="brand-modal-footer">
          <a
            href="/#contact"
            className="btn"
            onClick={onClose}
            style={{ width: "100%", justifyContent: "center" }}
          >
            Start a Similar Project →
          </a>
        </div>
      </div>
    </div>
  );
}
