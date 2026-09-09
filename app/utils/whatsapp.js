import { WHATSAPP_CONFIG } from "../config/whatsapp.js";

/**
 * Sanitizes user input string by stripping HTML tags and trimming.
 * Prevents HTML/script injection and cleans up whitespace.
 */
export function sanitizeInput(str = "") {
  return String(str)
    .replace(/[<>]/g, "")
    .trim();
}

/**
 * Strips all non-digit characters from a phone number for standard wa.me URL compatibility.
 */
export function cleanPhoneNumber(phone = "") {
  return String(phone).replace(/\D/g, "");
}

/**
 * Validates inquiry form inputs before submission.
 * Enforces length limits, valid formats, and security checks.
 */
export function validateInquiryData({
  name = "",
  email = "",
  phone = "",
  service = "",
  requireService = false,
  message = "",
  extraLabel = "",
  extraValue = "",
  requireExtra = false,
}) {
  const cleanName = sanitizeInput(name);
  if (!cleanName) {
    return { isValid: false, error: "Please enter your name." };
  }
  if (cleanName.length < 2) {
    return { isValid: false, error: "Please enter a valid full name (at least 2 characters)." };
  }
  if (cleanName.length > 80) {
    return { isValid: false, error: "Name is too long (maximum 80 characters)." };
  }

  const cleanEmail = sanitizeInput(email);
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (cleanEmail && !emailRegex.test(cleanEmail)) {
    return { isValid: false, error: "Please enter a valid email address." };
  }
  if (cleanEmail.length > 100) {
    return { isValid: false, error: "Email address is too long." };
  }

  const cleanPhone = sanitizeInput(phone);
  const phoneDigits = cleanPhoneNumber(cleanPhone);
  if (!cleanPhone) {
    return { isValid: false, error: "Please enter your phone / WhatsApp number." };
  }
  if (phoneDigits.length < 7 || phoneDigits.length > 15) {
    return { isValid: false, error: "Please enter a valid phone number (7 to 15 digits)." };
  }

  if (requireService && !service) {
    return { isValid: false, error: "Please select a service you're interested in." };
  }

  if (requireExtra && extraLabel && !sanitizeInput(extraValue)) {
    return { isValid: false, error: `Please enter your ${extraLabel.toLowerCase()}.` };
  }

  const cleanMsg = sanitizeInput(message);
  if (!cleanMsg) {
    return { isValid: false, error: "Please enter your message or project requirements." };
  }
  if (cleanMsg.length < 5) {
    return { isValid: false, error: "Please provide a slightly more descriptive message (at least 5 characters)." };
  }
  if (cleanMsg.length > 2000) {
    return { isValid: false, error: "Message is too long (maximum 2000 characters)." };
  }

  return { isValid: true, error: "" };
}

/**
 * Creates a clear, professionally formatted WhatsApp message containing the inquiry details.
 */
export function formatWhatsAppMessage({
  name = "",
  email = "",
  phone = "",
  service = "",
  message = "",
  extraLabel = "",
  extraValue = "",
}) {
  const cleanName = sanitizeInput(name);
  const cleanEmail = sanitizeInput(email);
  const cleanPhone = sanitizeInput(phone);
  const cleanServ = sanitizeInput(service);
  const cleanExtraVal = sanitizeInput(extraValue);
  const cleanMsg = sanitizeInput(message);

  const lines = [
    `New Inquiry from ${WHATSAPP_CONFIG.brandName} Website`,
    "",
    `Name: ${cleanName}`,
  ];

  if (cleanEmail) {
    lines.push(`Email: ${cleanEmail}`);
  }

  lines.push(`Phone: ${cleanPhone}`);

  if (cleanServ) {
    lines.push(`Service: ${cleanServ}`);
  }

  if (extraLabel && cleanExtraVal) {
    const isDuplicateServiceLabel = extraLabel.trim().toLowerCase() === "service" && cleanServ;
    const label = isDuplicateServiceLabel ? "Specific Interest" : extraLabel.trim();
    lines.push(`${label}: ${cleanExtraVal}`);
  }

  lines.push("");
  lines.push("Message:");
  lines.push(cleanMsg);

  return lines.join("\n");
}

/**
 * Builds the WhatsApp click-to-chat URL with the pre-filled message.
 */
export function buildWhatsAppUrl(message, phoneNumber = WHATSAPP_CONFIG.phoneNumber) {
  const targetNumber = cleanPhoneNumber(phoneNumber) || WHATSAPP_CONFIG.phoneNumber;
  return `https://wa.me/${targetNumber}?text=${encodeURIComponent(message)}`;
}

/**
 * Opens WhatsApp click-to-chat URL in a new tab reliably across browsers.
 * Uses a temporary anchor element click for native browser security compliance.
 */
export function openWhatsAppChat(url) {
  if (typeof window === "undefined" || !url) return false;

  try {
    const link = document.createElement("a");
    link.href = url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    document.body.appendChild(link);
    link.click();
    setTimeout(() => {
      try {
        if (link.parentNode) {
          link.parentNode.removeChild(link);
        }
      } catch {
        // ignore if already removed
      }
    }, 100);
    return true;
  } catch {
    try {
      window.open(url, "_blank");
      return true;
    } catch {
      window.location.assign(url);
      return false;
    }
  }
}

/**
 * High-level handler that validates, formats, and triggers WhatsApp redirection.
 */
export function handleWhatsAppSubmit({
  name = "",
  email = "",
  phone = "",
  service = "",
  requireService = false,
  message = "",
  extraLabel = "",
  extraValue = "",
  requireExtra = false,
  phoneNumber = WHATSAPP_CONFIG.phoneNumber,
}) {
  const validation = validateInquiryData({
    name,
    email,
    phone,
    service,
    requireService,
    message,
    extraLabel,
    extraValue,
    requireExtra,
  });

  if (!validation.isValid) {
    return { success: false, error: validation.error };
  }

  const formattedMessage = formatWhatsAppMessage({
    name,
    email,
    phone,
    service,
    message,
    extraLabel,
    extraValue,
  });

  const url = buildWhatsAppUrl(formattedMessage, phoneNumber);
  const openedInNewTab = openWhatsAppChat(url);

  return {
    success: true,
    url,
    openedInNewTab,
    message: formattedMessage,
  };
}
