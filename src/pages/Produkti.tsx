import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import { PRODUCTS } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { ProductModal } from '../components/ProductModal';
import { Product } from '../types';
import { SEOHead } from '../components/SEOHead';
import { Search, Sparkles, Leaf, MessageSquare, ShoppingBag } from 'lucide-react';

export const Produkti: React.FC = () => {
  const { t, getLocalizedPath, products } = useLanguage();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const pSec = t.productsSection;

  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      return (
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.subName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.ingredients.some((ing) => ing.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    });
  }, [products, searchQuery]);

  return (
    <>
      <SEOHead
        title={`${pSec.title} | E-Veikals`}
        description={pSec.subtitle}
      />

      {/* Header Banner */}
      <section className="pt-8 pb-10 sm:pt-12 sm:pb-16 bg-[#E5F4E9]/70 border-b border-[#CDE8D5]">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF9F5] border border-[#CDE8D5] text-[#1B8044] text-xs font-bold shadow-2xs">
            <ShoppingBag className="w-4 h-4 text-[#1B8044]" />
            <span>{pSec.headerBadge}</span>
          </div>

          <h1 className="font-serif-title text-3xl sm:text-5xl font-bold text-[#122E1F]">
            {pSec.title}
          </h1>

          <p className="text-xs sm:text-sm text-[#2E523A] max-w-2xl mx-auto leading-relaxed">
            {pSec.subtitle}
          </p>
        </div>
      </section>

      {/* Main E-Shop Section */}
      <section className="py-8 sm:py-16 bg-[#FAF9F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
          
          {/* Controls: Search Bar */}
          <div className="flex items-center justify-between gap-4 bg-[#FFFFFF] p-4 rounded-3xl border border-[#CDE8D5] card-soft-shadow">
            <div className="relative w-full max-w-md mx-auto sm:mx-0">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#1B8044]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={pSec.searchPlaceholder}
                className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-[#FAF9F5] border border-[#CDE8D5] text-xs text-[#122E1F] focus:outline-none focus:border-[#1B8044]"
              />
            </div>
            <div className="text-xs font-bold text-[#2E523A] hidden sm:block">
              {pSec.totalDrinks.replace('{count}', filteredProducts.length.toString())}
            </div>
          </div>

          {/* Product Grid (12 Cards) */}
          {filteredProducts.length === 0 ? (
            <div className="text-center py-16 bg-[#FFFFFF] rounded-3xl border border-[#CDE8D5] space-y-3">
              <Leaf className="w-10 h-10 text-[#1B8044] mx-auto opacity-40" />
              <p className="text-sm font-medium text-[#2E523A]">{pSec.noProductsFound}</p>
              <button
                onClick={() => setSearchQuery('')}
                className="px-4 py-2 rounded-xl bg-[#E5F4E9] text-[#122E1F] text-xs font-bold hover:bg-[#CDE8D5]"
              >
                {pSec.showAllBtn}
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onOpenModal={setSelectedProduct}
                />
              ))}
            </div>
          )}

          {/* Custom Recipe / Individual Order Banner */}
          <div className="mt-12 bg-gradient-to-r from-[#E5F4E9] via-[#F2FAF4] to-[#E5F4E9] rounded-3xl p-6 sm:p-10 border border-[#CDE8D5] card-soft-shadow flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
            <div className="space-y-2 text-center md:text-left max-w-2xl relative z-10">
              <div className="inline-flex items-center gap-2 bg-[#FFFFFF] px-3 py-1 rounded-full text-xs font-bold text-[#1B8044] border border-[#CDE8D5] shadow-2xs">
                <Sparkles className="w-3.5 h-3.5 text-[#1B8044]" />
                <span>{pSec.customOrderBadge}</span>
              </div>
              <h3 className="font-serif-title text-xl sm:text-2xl font-bold text-[#122E1F]">
                {pSec.customOrderTitle}
              </h3>
              <p className="text-xs sm:text-sm text-[#2E523A] leading-relaxed">
                {pSec.customOrderDesc}
              </p>
            </div>
            <Link
              to={getLocalizedPath("contact")}
              className="shrink-0 bg-[#1B8044] text-white hover:bg-[#146334] px-6 py-3.5 rounded-2xl font-bold text-xs sm:text-sm transition-all shadow-md flex items-center gap-2 relative z-10"
            >
              <MessageSquare className="w-4 h-4 text-white" />
              <span>{pSec.customOrderBtn}</span>
            </Link>
          </div>

        </div>
      </section>

      {/* Product Quick View Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </>
  );
};

export default Produkti;
