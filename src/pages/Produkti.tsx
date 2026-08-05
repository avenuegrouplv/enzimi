import React, { useState, useMemo } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { PRODUCTS } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { ProductModal } from '../components/ProductModal';
import { Product } from '../types';
import { SEOHead } from '../components/SEOHead';
import { ShoppingBag, Search, Filter, Sparkles, Leaf } from 'lucide-react';

export const Produkti: React.FC = () => {
  const { t } = useLanguage();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', label: t.productsSection.filterAll },
    { id: 'imunitate', label: t.productsSection.filterImmunity },
    { id: 'gremosana', label: t.productsSection.filterDigestion },
    { id: 'energija', label: t.productsSection.filterEnergy },
    { id: 'relaksacija', label: t.productsSection.filterRelaxation },
    { id: 'detox', label: t.productsSection.filterDetox },
  ];

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((p) => {
      const matchesCategory = activeCategory === 'all' || p.category === activeCategory;
      const matchesSearch =
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.subName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.ingredients.some((ing) => ing.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <>
      <SEOHead
        title="Enzīmu Dzērieni | E-Veikals"
        description="Iegādājieties 100% dabiski fermentētus bio-enzīmu dzērienus stikla pudelēs. 10 unikālas garšas imunitātei, gremošanai un enerģijai. Cena €12.99."
      />

      {/* Header Banner */}
      <section className="pt-12 pb-16 bg-[#E8EFEA]/70 border-b border-[#D3DDD6]">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF9F5] border border-[#D3DDD6] text-[#1E3E2B] text-xs font-bold shadow-2xs">
            <ShoppingBag className="w-4 h-4 text-[#1E3E2B]" />
            <span>750ml Stikla Pudeles</span>
          </div>

          <h1 className="font-serif-title text-3xl sm:text-5xl font-bold text-[#19261E]">
            Enzīmu Dzērienu Kolekcija
          </h1>

          <p className="text-xs sm:text-sm text-[#485950] max-w-2xl mx-auto leading-relaxed">
            {t.productsSection.subtitle}
          </p>
        </div>
      </section>

      {/* Main E-Shop Section */}
      <section className="py-16 bg-[#FAF9F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          {/* Controls: Search & Category Filter Tabs */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4 bg-[#FFFFFF] p-4 rounded-3xl border border-[#D3DDD6] card-soft-shadow">
            
            {/* Category Pills */}
            <div className="flex flex-wrap items-center gap-1.5 w-full lg:w-auto">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 rounded-2xl text-xs font-bold transition-all ${
                    activeCategory === cat.id
                      ? "bg-[#1E3E2B] text-white shadow-xs"
                      : "bg-[#E8EFEA]/70 text-[#485950] hover:bg-[#D3DDD6] hover:text-[#19261E]"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Search Bar */}
            <div className="relative w-full lg:w-72">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#1E3E2B]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Meklēt garšu vai sastāvdaļu..."
                className="w-full pl-10 pr-4 py-2 rounded-2xl bg-[#FAF9F5] border border-[#D3DDD6] text-xs text-[#19261E] focus:outline-none focus:border-[#1E3E2B]"
              />
            </div>

          </div>

          {/* Product Grid (10 Cards) */}
          {filteredProducts.length === 0 ? (
            <div className="text-center py-16 bg-[#FFFFFF] rounded-3xl border border-[#D3DDD6] space-y-3">
              <Leaf className="w-10 h-10 text-[#1E3E2B] mx-auto opacity-40" />
              <p className="text-sm font-medium text-[#485950]">Netika atrasts neviens dzēriens ar šādiem meklēšanas kritērijiem.</p>
              <button
                onClick={() => {
                  setActiveCategory('all');
                  setSearchQuery('');
                }}
                className="px-4 py-2 rounded-xl bg-[#E8EFEA] text-[#19261E] text-xs font-bold hover:bg-[#D3DDD6]"
              >
                Atiestatīt meklētāju
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
