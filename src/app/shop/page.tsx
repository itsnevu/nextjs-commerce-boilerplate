import styles from './shop.module.css';
import ProductCard from '@/components/modules/product/product-card';
import Navbar from '@/components/layout/navbar';
import db from '@/lib/db';
import { Filter, X } from 'lucide-react';
import Link from 'next/link';
import ShopFilters from '@/components/modules/shop/shop-filters';
import { siteConfig } from '@/config/site';
import { mockProducts } from '@/lib/mocks';

async function getProducts(search?: string, category?: string) {
  return []; // Placeholder for now since we use central mocks
}

async function getCategories() {
  return []; // Placeholder for now
}

export default async function ShopPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;
  const search = params.search;
  const category = params.category;
  const sort = params.sort;
  
  const searchTerm = typeof search === 'string' ? search : undefined;
  const categoryFilter = typeof category === 'string' ? category : 'ALL';
  const sortOrder = typeof sort === 'string' ? sort : 'newest';

  const dbProducts = await getProducts(searchTerm, categoryFilter);
  const dbCategories = await getCategories();
  
  // Filter mock products if DB is empty or unreachable
  let products = dbProducts.length > 0 ? dbProducts : mockProducts;
  if (dbProducts.length === 0) {
    if (searchTerm) {
      products = products.filter((p: any) => p.name.toLowerCase().includes(searchTerm.toLowerCase()));
    }
    if (categoryFilter !== 'ALL') {
      products = products.filter((p: any) => p.category.name === categoryFilter);
    }
  }

  // Apply Sorting
  products = [...products].sort((a: any, b: any) => {
    if (sortOrder === 'price_low') return Number(a.price) - Number(b.price);
    if (sortOrder === 'price_high') return Number(b.price) - Number(a.price);
    return 0; // Default (newest)
  });

  const categories = dbCategories.length > 0 
    ? dbCategories.map((c: { name: string }) => c.name) 
    : siteConfig.categories.map(c => c.name);
    
  const allCategories = ["ALL", ...categories];

  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <h1 className={styles.title}>The <span className="mono-text">Collection</span></h1>
          <p className={styles.subtitle}>
            {searchTerm ? `Search results for "${searchTerm}"` : 'Explore our curated selection of high-end essentials.'}
          </p>
        </div>
      </header>

      <section className={styles.shopSection}>
        <div className={styles.container}>
          {/* Toolbar */}
          <div className={styles.toolbar}>
            <div className={styles.filterTrigger}>
              <Filter size={18} strokeWidth={1.5} />
              <span>Filters</span>
              {(searchTerm || categoryFilter !== 'ALL') && (
                <Link href="/shop" className={styles.clearFilter}>
                  Clear All <X size={14} />
                </Link>
              )}
            </div>
            <div className={styles.resultsCount}>
              Showing {products.length} products
            </div>
            <ShopFilters sortOrder={sortOrder} />
          </div>

          <div className={styles.layout}>
            {/* Sidebar */}
            <aside className={styles.sidebar}>
              <div className={styles.sidebarBlock}>
                <h3>CATEGORIES</h3>
                <div className={styles.categoryList}>
                  {allCategories.map((cat: string) => (
                    <Link 
                      key={cat} 
                      href={`/shop?category=${cat}${searchTerm ? `&search=${searchTerm}` : ''}${sortOrder !== 'newest' ? `&sort=${sortOrder}` : ''}`}
                      className={`${styles.categoryBtn} ${categoryFilter === cat ? styles.activeCategory : ''}`}
                    >
                      {cat}
                    </Link>
                  ))}
                </div>
              </div>

              <div className={styles.sidebarBlock}>
                <h3>PRICE RANGE</h3>
                <div className={styles.priceFilter}>
                  <input type="range" min="0" max="20000000" step="500000" className={styles.rangeInput} />
                  <div className={styles.priceLabels}>
                    <span>Rp 0</span>
                    <span>Rp 20jt+</span>
                  </div>
                </div>
              </div>
            </aside>

            {/* Grid */}
            <div className={styles.gridContainer}>
              {products.length > 0 ? (
                <div className={styles.productGrid}>
                  {products.map((product: any) => (
                    <ProductCard key={product.id} product={{
                      id: product.id,
                      name: product.name,
                      price: Number(product.price),
                      image: product.image || (product.images && product.images[0]) || "/hero-placeholder.png",
                      slug: product.slug,
                      category: product.category?.name
                    }} />
                  ))}
                </div>
              ) : (
                <div className={styles.noResults}>
                  <div className="glass" style={{ padding: '4rem', borderRadius: 'var(--radius-main)', textAlign: 'center' }}>
                    <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>No Products Found</h2>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>We couldn't find anything matching your search.</p>
                    <Link href="/shop" className={styles.clearBtn}>VIEW ALL PRODUCTS</Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
