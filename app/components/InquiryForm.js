"use client";

import { useState } from "react";

export default function InquiryForm({ extraLabel = "Service", extraPlaceholder = "" }) {
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Thanks! We'll connect this form to email once Zoho is set up.");
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 560, margin: "0 auto", textAlign: "left" }}>
      <div className="form-row">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
      </div>
      <input type="text" placeholder={extraPlaceholder || extraLabel} required style={{ marginTop: 16 }} />
      <textarea rows={4} placeholder="Message" required style={{ marginTop: 16, width: "100%" }} />
      <button type="submit" className="btn" style={{ justifyContent: "center", width: "100%", marginTop: 16 }}>
        Send Message
      </button>
      <div className="form-status">{status}</div>
    </form>
  );
}
