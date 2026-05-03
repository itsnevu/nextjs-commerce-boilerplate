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
      { name: "Arif Budiman", text: "Kualitas produknya luar biasa. Detail pengerjaannya sangat rapi dan memberikan kesan mewah pada ruangan saya." },
      { name: "Siti Sarah", text: "Desain yang sangat minimalis namun tetap fungsional. Sangat cocok dengan konsep rumah modern saya." },
      { name: "Kevin Sanjaya", text: "Pelayanan sangat profesional dan pengiriman tepat waktu. Sangat merekomendasikan LUXE untuk interior rumah." },
      { name: "Dewi Lestari", text: "Benar-benar mengubah suasana rumah menjadi lebih berkelas. Setiap tamu yang datang selalu memuji furniture-nya." },
      { name: "Budi Santoso", text: "Material yang digunakan terasa sangat premium. Ini adalah investasi terbaik untuk dekorasi rumah saya." },
      { name: "Maya Putri", text: "Suka sekali dengan konsep megamenu-nya, memudahkan saya mencari kategori yang saya butuhkan. Produknya pun eksklusif." },
    ]
  },

  // Payment Settings
  payment: {
    provider: process.env.NEXT_PUBLIC_PAYMENT_PROVIDER || "MIDTRANS",
    environment: process.env.NEXT_PUBLIC_PAYMENT_ENV || "sandbox"
  }
};

export type SiteConfig = typeof siteConfig;
