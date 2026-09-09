// Central WhatsApp Configuration
// To change the business WhatsApp number across the entire site,
// either update the default below or set NEXT_PUBLIC_WHATSAPP_NUMBER in your environment.

export const WHATSAPP_CONFIG = {
  // Business WhatsApp number in international format (digits only)
  phoneNumber: (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "923144083350").replace(/\D/g, ""),
  
  // Formatted display number for UI
  displayPhone: "+92 (314) 4083350",
  
  // Brand name used in messages
  brandName: "Spark Avenue",
};
