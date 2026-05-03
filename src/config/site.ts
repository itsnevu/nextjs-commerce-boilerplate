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
    address: "Senopati St. No. 88, South Jakarta, Indonesia",
    socials: {
      instagram: "https://instagram.com/luxe.design",
      twitter: "https://twitter.com/luxe.design",
      tiktok: "https://tiktok.com/@luxe.design",
      youtube: "https://youtube.com/luxe.design"
    }
  },

  // UI Content (Universal & Sakti!)
  content: {
    hero: {
      title: "The Art of Modern Living",
      subtitle: "Discover our curated collection of architectural pieces designed to transform your space into a gallery of excellence.",
      primaryCta: "EXPLORE COLLECTION",
      secondaryCta: "OUR STORY"
    },
    newsletter: {
      title: "JOIN THE CLUB",
      subtitle: "Subscribe to receive updates on new collections and exclusive events.",
      button: "JOIN"
    },
    features: [
      { title: "Global Shipping", desc: "Premium delivery worldwide" },
      { title: "Secure Payment", desc: "100% encrypted checkout" },
      { title: "Artisanal Quality", desc: "Hand-picked curation" },
      { title: "24/7 Support", desc: "Dedicated concierge service" }
    ],
    testimonials: [
      { name: "Alexander Wright", text: "The product quality is exceptional. The craftsmanship is incredibly precise and brings a luxurious feel to my space." },
      { name: "Sarah Jenkins", text: "Beautifully minimalist yet functional design. It fits perfectly with my modern home concept." },
      { name: "Kevin Sanjaya", text: "Professional service and timely delivery. I highly recommend LUXE for premium home interiors." },
      { name: "Elena Rodriguez", text: "Truly transformed the atmosphere of my home into something more classy. Guests always compliment the furniture." },
      { name: "David Chen", text: "The materials used feel very premium. This is the best investment for my home decoration." },
      { name: "Maya Putri", text: "I love the navigation concept, making it easy to find categories. The products are truly exclusive." },
    ]
  },

  // Payment Settings
  payment: {
    provider: process.env.NEXT_PUBLIC_PAYMENT_PROVIDER || "MIDTRANS",
    environment: process.env.NEXT_PUBLIC_PAYMENT_ENV || "sandbox"
  }
};

export type SiteConfig = typeof siteConfig;
