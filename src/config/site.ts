/**
 * LUXE E-COMMERCE TEMPLATE CONFIGURATION (SAKTI EDITION)
 * 
 * The ultimate "Central Command" for developers. 
 * Change these values to completely rebrand the store in seconds.
 */

export const siteConfig = {
  name: "LUXE",
  description: "Curated Excellence for Modern Living",
  url: "https://luxe-design.com",
  
  // Theme Customization (Sakti!)
  theme: {
    primary: "#000000",
    accent: "#d4af37", // Gold
    radius: "12px",
    font: "Inter, sans-serif"
  },

  // Branding
  brand: {
    tagline: "Elevating everyday environments through curated excellence.",
    logo: "/logo.svg",
    currency: {
      code: "IDR",
      symbol: "Rp",
      locale: "id-ID"
    }
  },

  // Store Categories (Dynamic!)
  // Changing these will update Navbar, Footer, and Shop Filters automatically.
  categories: [
    { 
      id: "furniture", 
      name: "FURNITURE", 
      subcategories: ["Living Room", "Bedroom", "Office"] 
    },
    { 
      id: "lighting", 
      name: "LIGHTING", 
      subcategories: ["Floor Lamps", "Pendants", "Wall Lights"] 
    },
    { 
      id: "decor", 
      name: "DECOR", 
      subcategories: ["Ceramics", "Wall Art", "Textiles"] 
    }
  ],

  // Contact & Social
  contact: {
    email: "hello@luxe.design",
    phone: "+62 812 3456 789",
    whatsapp: "628123456789",
    address: "Jl. Senopati No. 88, Jakarta Selatan",
    socials: {
      instagram: "https://instagram.com/luxe.design",
      twitter: "https://twitter.com/luxe.design",
      youtube: "https://youtube.com/luxe.design"
    }
  },

  // Payment Settings
  payment: {
    provider: process.env.NEXT_PUBLIC_PAYMENT_PROVIDER || "MIDTRANS",
    environment: process.env.NEXT_PUBLIC_PAYMENT_ENV || "sandbox"
  }
};

export type SiteConfig = typeof siteConfig;
