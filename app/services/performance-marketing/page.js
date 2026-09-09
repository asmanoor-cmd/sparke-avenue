import ServicePage from "../../components/ServicePage";

export default function Page() {
  return (
    <ServicePage
      serviceName="Performance Marketing"
      eyebrow="Performance Marketing"
      headline="Ads that don't just get clicks."
      accentWord="They get results."
      description="Sparke Avenue builds targeted Meta and Google Ads campaigns focused on leads, sales and measurable growth — not vanity metrics."
      heroMetrics={[
        { label: "ROAS", value: "3.2x", position: { top: "6%", left: "0%" } },
        { label: "Leads", value: "+120%", position: { bottom: "10%", right: "0%" } },
        { label: "CPA", value: "↓ 34%", position: { bottom: "38%", left: "-4%" } },
      ]}
      whatWeDoHeading="Built for Performance"
      whatWeDoText="We turn paid advertising into a predictable growth engine — not a one-off spend."
      whatWeDo={[
        { icon: "ads", title: "Meta Ads", desc: "Facebook & Instagram campaigns built around your funnel — from awareness to conversion." },
        { icon: "search", title: "Google Ads", desc: "Search, Display and Shopping campaigns that capture demand exactly when it happens." },
        { icon: "target", title: "Lead Generation", desc: "Full-funnel campaigns engineered to fill your pipeline with qualified leads." },
        { icon: "refresh", title: "Retargeting", desc: "Bringing back the visitors who almost converted, with the message that closes the gap." },
        { icon: "trending", title: "Conversion Optimization", desc: "Continuous testing on creative, copy and landing pages to lift your conversion rate." },
        { icon: "compass", title: "Campaign Strategy", desc: "A media plan mapped to your budget, audience and growth goals — not guesswork." },
      ]}
      processSteps={[
        { num: "01", title: "Discover", desc: "We audit your market, audience and past campaign data to find where the opportunity is." },
        { num: "02", title: "Strategize", desc: "A channel and budget plan built around your specific growth targets." },
        { num: "03", title: "Launch", desc: "Campaigns go live with tracking, creative and audiences built to convert." },
        { num: "04", title: "Optimize", desc: "We test, refine and cut what doesn't work — weekly, not quarterly." },
        { num: "05", title: "Scale", desc: "Once a channel proves itself, we scale spend without losing efficiency." },
      ]}
      results={[
        { value: 50, suffix: "+", label: "Campaigns Managed" },
        { value: 3.2, suffix: "x", label: "Average ROAS", decimals: 1 },
        { value: 120, suffix: "%", label: "Average Lead Growth" },
      ]}
      caseStudy={{
        clientName: "Jewellista.pk — Fine Jewelry E-Commerce",
        clientLogo: "/portfolio/jewellista.png",
        businessType: "Multichannel Paid Acquisition & ROAS Scaling",
        description: "Sparke Avenue structured and scaled high-converting Meta and Google Performance Max campaigns for Jewellista.pk, optimizing every stage from product video hooks to checkout conversion.",
        deliverables: "Meta Ads, Google Ads & Abandoned Cart Funnels",
        metrics: [
          { value: "+120%", label: "YoY Revenue Growth" },
          { value: "4.8x", label: "Blended ROAS" },
          { value: "↓ 34%", label: "Cost Per Acquisition" },
          { value: "85K+", label: "Targeted Community" },
        ],
      }}
      faqs={[
        { q: "What platforms do you manage?", a: "We run campaigns across Meta (Facebook & Instagram) and Google (Search, Display, Shopping and YouTube), choosing the mix that fits your audience and goals." },
        { q: "What is the minimum ad budget?", a: "This depends on your industry and goals — we'll recommend a realistic starting budget after understanding your market during the Discover phase." },
        { q: "How long before we see results?", a: "Early signal usually appears within the first 2–3 weeks, with meaningful optimization and scaling typically happening over 60–90 days." },
        { q: "Do you create ad creatives?", a: "Yes — our team handles ad copy, creative direction and design, or we can work with creative assets you already have." },
        { q: "How do you measure campaign performance?", a: "We track cost per result, ROAS, conversion rate and pipeline quality, and report on the metrics that actually connect to your business goals." },
      ]}
      finalHeadline="Ready to turn your marketing into measurable growth?"
      finalDescription="Tell us about your business and let's build a performance strategy around your goals."
      inquiryExtraLabel="Service"
      inquiryExtraPlaceholder="Service you're interested in"
      benefits={[
        { icon: "chart", title: "Data-Driven" },
        { icon: "target", title: "Targeted" },
        { icon: "cart", title: "Conversion-Focused" },
        { icon: "trending", title: "Scalable" },
      ]}
    />
  );
}
