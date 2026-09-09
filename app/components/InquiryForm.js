"use client";

import { useState } from "react";
import { handleWhatsAppSubmit, sanitizeInput } from "../utils/whatsapp.js";

export default function InquiryForm({
  serviceName = "",
  extraLabel = "Service",
  extraPlaceholder = "",
  buttonLabel = "Send Inquiry via WhatsApp →",
}) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    extraValue: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedUrl, setSubmittedUrl] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errorMessage) {
      setErrorMessage("");
    }
  };

  const getEffectiveServiceName = () => {
    if (serviceName) return serviceName;
    if (typeof window !== "undefined") {
      const match = window.location.pathname.match(/\/services\/([^/]+)/);
      if (match && match[1]) {
        return match[1]
          .split("-")
          .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
          .join(" ");
      }
    }
    return "";
  };

  const handleResetForm = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      extraValue: "",
      message: "",
    });
    setIsSubmitted(false);
    setSubmittedUrl("");
    setErrorMessage("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    setErrorMessage("");

    const effectiveService = getEffectiveServiceName();

    const result = handleWhatsAppSubmit({
      name: sanitizeInput(formData.name),
      email: sanitizeInput(formData.email),
      phone: sanitizeInput(formData.phone),
      service: effectiveService,
      requireService: false,
      message: sanitizeInput(formData.message),
      extraLabel: extraLabel,
      extraValue: sanitizeInput(formData.extraValue),
      requireExtra: Boolean(extraPlaceholder || extraLabel),
    });

    setIsSubmitting(false);

    if (!result.success) {
      setErrorMessage(result.error);
      return;
    }

    setSubmittedUrl(result.url);
    setIsSubmitted(true);
  };

  return (
    <div style={{ maxWidth: 560, margin: "0 auto", textAlign: "left" }}>
      {isSubmitted ? (
        <div
          style={{
            background: "linear-gradient(150deg, rgba(255,171,64,0.08), rgba(76,124,240,0.05))",
            border: "1px solid rgba(255,171,64,0.3)",
            borderRadius: "16px",
            padding: "36px 30px",
            textAlign: "center",
            boxShadow: "0 20px 40px rgba(0,0,0,0.35)",
          }}
        >
          <div
            style={{
              width: "52px",
              height: "52px",
              borderRadius: "50%",
              background: "rgba(255,171,64,0.12)",
              border: "1.5px solid var(--spark)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 18px",
              color: "var(--spark)",
              fontSize: "1.4rem",
              fontWeight: "bold",
            }}
          >
            ✓
          </div>

          <h3
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "1.4rem",
              color: "#fff",
              marginBottom: "10px",
            }}
          >
            Thank You! Your Inquiry Has Been Sent
          </h3>

          <p
            style={{
              color: "var(--muted)",
              fontSize: "0.95rem",
              lineHeight: "1.65",
              maxWidth: "440px",
              margin: "0 auto 24px",
            }}
          >
            WhatsApp has been opened with your pre-filled inquiry details. Our team will review your requirements and get back to you shortly.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "12px", alignItems: "center" }}>
            {submittedUrl && (
              <a
                href={submittedUrl}
                target="_blank"
                rel="noreferrer"
                className="btn"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                  maxWidth: "320px",
                }}
              >
                Open WhatsApp Again →
              </a>
            )}

            <button
              type="button"
              onClick={handleResetForm}
              className="btn-outline"
              style={{
                width: "100%",
                maxWidth: "320px",
                justifyContent: "center",
                padding: "12px 20px",
                fontSize: "0.9rem",
              }}
            >
              Send Another Inquiry
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              maxLength={80}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email (Optional)"
              value={formData.email}
              onChange={handleChange}
              maxLength={100}
            />
          </div>

          <div className="form-row">
            <input
              type="tel"
              name="phone"
              placeholder="Phone / WhatsApp Number"
              value={formData.phone}
              onChange={handleChange}
              maxLength={30}
              required
            />
            <input
              type="text"
              name="extraValue"
              placeholder={extraPlaceholder || extraLabel}
              value={formData.extraValue}
              onChange={handleChange}
              maxLength={120}
              required
            />
          </div>

          <textarea
            rows={4}
            name="message"
            placeholder="How can we help you? Describe your requirements or project goals"
            value={formData.message}
            onChange={handleChange}
            maxLength={2000}
            required
            style={{ width: "100%" }}
          />

          {errorMessage && (
            <div
              style={{
                padding: "12px 16px",
                background: "rgba(255,107,107,0.08)",
                border: "1px solid rgba(255,107,107,0.3)",
                borderRadius: "10px",
                color: "#ff6b6b",
                fontSize: "0.88rem",
                lineHeight: "1.4",
              }}
            >
              ⚠️ {errorMessage}
            </div>
          )}

          <button
            type="submit"
            className="btn"
            disabled={isSubmitting}
            style={{
              justifyContent: "center",
              width: "100%",
              opacity: isSubmitting ? 0.7 : 1,
              cursor: isSubmitting ? "not-allowed" : "pointer",
            }}
          >
            {isSubmitting ? "Opening WhatsApp..." : buttonLabel}
          </button>
        </form>
      )}
    </div>
  );
}
