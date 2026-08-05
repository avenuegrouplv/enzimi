import React from 'react';
import { Product } from '../types';
import { BottleGraphic } from './BottleGraphic';
import { X, Check, ShoppingBag, Sparkles, Droplet } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  const { addToCart, t } = useLanguage();

  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#FAF9F5] rounded-3xl border border-[#D3DDD6] shadow-2xl overflow-hidden p-6 sm:p-8 animate-in zoom-in-95 duration-200">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-[#E8EFEA] text-[#19261E] hover:bg-[#1E3E2B] hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          {/* Bottle Graphic Showcase Column */}
          <div className="md:col-span-5 flex flex-col items-center justify-center p-6 bg-[#E8EFEA] rounded-2xl border border-[#D3DDD6] relative">
            <span className="absolute top-3 left-3 bg-[#FAF9F5] text-[#1E3E2B] text-xs font-bold px-3 py-1 rounded-full border border-[#D3DDD6]">
              {product.categoryLabel}
            </span>
            <BottleGraphic
              colorGradient={product.colorGradient}
              bottleAccent={product.bottleAccent}
              size="lg"
            />
            <div className="mt-4 text-center">
              <span className="text-2xl font-bold text-[#19261E]">€{product.price.toFixed(2)}</span>
              <p className="text-xs text-[#485950] font-medium">{product.volume} Stikla Pudele</p>
            </div>
          </div>

          {/* Details Column */}
          <div className="md:col-span-7 space-y-4 text-[#19261E]">
            <div>
              <span className="text-xs font-bold text-[#1E3E2B] uppercase tracking-wider">
                {product.subName}
              </span>
              <h2 className="font-serif-title text-2xl font-bold text-[#19261E] mt-0.5">
                {product.name}
              </h2>
            </div>

            <p className="text-xs text-[#485950] leading-relaxed">
              {product.fullDescription}
            </p>

            {/* Taste Notes */}
            <div className="bg-[#E8EFEA]/80 p-3 rounded-xl border border-[#D3DDD6] flex items-start gap-2.5">
              <Droplet className="w-4 h-4 text-[#1E3E2B] shrink-0 mt-0.5" />
              <div>
                <span className="text-xs font-bold text-[#19261E]">Garšas buķete: </span>
                <span className="text-xs text-[#485950]">{product.tasteNotes}</span>
              </div>
            </div>

            {/* Ingredients */}
            <div>
              <h4 className="text-xs font-bold text-[#19261E] uppercase tracking-wider mb-1.5">
                Sastāvs & Dabas veltes:
              </h4>
              <ul className="grid grid-cols-1 gap-1 text-xs text-[#485950]">
                {product.ingredients.map((ing, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#1E3E2B]" />
                    <span>{ing}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Health Benefits */}
            <div>
              <h4 className="text-xs font-bold text-[#19261E] uppercase tracking-wider mb-1.5">
                Labās īpašības:
              </h4>
              <div className="space-y-1">
                {product.benefits.map((b, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-[#19261E] font-medium">
                    <Check className="w-3.5 h-3.5 text-[#1E3E2B] shrink-0" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Modal Actions */}
            <div className="pt-3 flex items-center gap-3">
              <button
                onClick={() => {
                  addToCart(product);
                  onClose();
                }}
                className="flex-1 flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-[#1E3E2B] text-white font-bold text-sm hover:bg-[#142B1E] transition-all shadow-xs btn-shimmer"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>{t.productsSection.addToCart} (€12.99)</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
