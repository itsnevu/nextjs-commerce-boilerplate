# 💎 LUXE E-Commerce Template (Sakti Edition)

Welcome to **LUXE**, a professional-grade, high-performance Next.js e-commerce template designed for premium brands. This template is engineered to give developers a "Sakti" (powerful) head start in building luxury online stores.

## 🚀 Key Features

- **Centralized Configuration**: Rebrand the entire store in seconds via `src/config/site.ts`.
- **Dynamic Inventory**: Single source of truth for products in `src/lib/mocks.ts`.
- **Conversion Engines**: Built-in Wishlist, Urgency Engine (Scarcity indicators), and Free Shipping Progress Bar.
- **Payment Ready**: Integrated with a `PaymentService` bridge (compatible with Midtrans/Stripe).
- **Responsive Design**: Fully optimized for Desktop, Tablet, and Mobile with a custom Hamburger menu.
- **Premium Aesthetics**: Glassmorphism UI, smooth animations, and curated typography.
- **Floating Actions**: Built-in Scroll-to-Top and WhatsApp contact triggers.

## 🛠️ Setup Instructions

1. **Clone & Install**:
   ```bash
   npm install
   # or
   bun install
   ```

2. **Configure Your Brand**:
   Open `src/config/site.ts` and update your brand name, colors, and social links.

3. **Add Products**:
   Edit `src/lib/mocks.ts` to define your initial product catalog.

4. **Environment Variables**:
   Copy `.env.example` to `.env.local` and add your payment gateway credentials.

## 🎨 Customization

### Changing the Theme
The entire design system is controlled by CSS variables in `src/app/layout.tsx` which are derived from `siteConfig.theme`.
- **Accent Color**: Change `siteConfig.theme.accent` to update all gold elements instantly.
- **Border Radius**: Adjust `siteConfig.theme.radius` for a sharper or more rounded look.

### Adding New Categories
Simply add a new object to the `categories` array in `siteConfig.ts`. The Navbar, Footer, and Shop Filters will update automatically.

## 📦 Project Structure

- `/src/app`: Next.js App Router pages and layouts.
- `/src/components`: Modular UI components (Layout, Product, Cart, etc.).
- `/src/lib`: Logic, stores (Zustand), and services.
- `/src/config`: Global site configuration.

## 🤝 Contribution & Support
This template is built with developers in mind. For support or custom feature requests, contact through the WhatsApp floating button integrated into the demo.

---
*Built with ❤️ for High-Performance E-Commerce.*
