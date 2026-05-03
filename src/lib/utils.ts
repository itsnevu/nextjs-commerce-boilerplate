import { siteConfig } from '@/config/site';

/**
 * Sakti Currency Formatter
 * Uses central configuration from siteConfig for consistent global formatting.
 */
export const formatPrice = (price: number | string) => {
  const { locale, code, symbol } = siteConfig.brand.currency;
  
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: code,
    minimumFractionDigits: 0,
  }).format(Number(price));
};
