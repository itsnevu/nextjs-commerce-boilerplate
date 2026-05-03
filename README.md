# Next.js E-Commerce Template

A production-ready, modular, and scalable e-commerce boilerplate built with the latest technologies.

## 🚀 Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS & Shadcn UI
- **Database**: Prisma ORM with PostgreSQL
- **State Management**: Zustand
- **Auth**: NextAuth.js
- **Validation**: Zod
- **Icons**: Lucide React

## 📂 Project Structure

```text
src/
├── app/               # Next.js App Router (pages, layouts, api)
├── components/
│   ├── modules/       # Feature-specific components (product, cart, etc.)
│   └── ui/            # Reusable UI components (Shadcn)
├── lib/
│   ├── api/           # API client and service functions
│   ├── auth/          # NextAuth configuration
│   └── store/         # Zustand state stores
├── prisma/            # Database schema and migrations
└── public/            # Static assets
```

## 🛠️ Getting Started

### 1. Clone the repository
```bash
git clone <your-repo-url>
cd fe-ecommerce
```

### 2. Install dependencies
```bash
npm install
```

### 3. Environment Variables
Create a `.env` file in the root directory and add the following:
```env
DATABASE_URL="postgresql://user:password@localhost:5432/ecommerce"
NEXTAUTH_SECRET="your-secret"
NEXTAUTH_URL="http://localhost:3000"
GOOGLE_CLIENT_ID=""
GOOGLE_CLIENT_SECRET=""
```

### 4. Database Setup
```bash
npx prisma db push
```

### 5. Run development server
```bash
npm run dev
```

## ✨ Features

- [x] **Product Management**: Dynamic routing, category filtering, and search.
- [x] **Shopping Cart**: Persistent cart with Zustand.
- [ ] **Auth**: Credentials & Google Provider (NextAuth).
- [ ] **User Dashboard**: Order history and profile.
- [ ] **Admin Panel**: Product CRUD and basic analytics.
- [ ] **Payments**: Midtrans/Stripe integration placeholder.

## 📄 License

MIT
