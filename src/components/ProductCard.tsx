import React, { useState } from 'react';
import { Product } from '../types';
import { BottleGraphic } from './BottleGraphic';
import { ShoppingBag, Eye, Check, Sparkles } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

interface ProductCardProps {
  product: Product;
  onOpenModal: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onOpenModal }) => {
  const { addToCart, t } = useLanguage();
  const [added, setAdded] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  return (
    <div
      onClick={() => onOpenModal(product)}
      className="group relative bg-[#FFFFFF] rounded-3xl border border-[#D3DDD6] p-5 card-soft-shadow cursor-pointer flex flex-col justify-between transition-all duration-300"
    >
      
      {/* Bottle Illustration Showcase */}
      <div className="my-3 py-4 bg-[#FAF9F5] rounded-2xl border border-[#D3DDD6]/60 flex items-center justify-center relative overflow-hidden group-hover:bg-[#E8EFEA]/80 transition-colors">
        <BottleGraphic
          colorGradient={product.colorGradient}
          bottleAccent={product.bottleAccent}
          size="md"
        />
        
        {/* Quick View Floating Eye Icon */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onOpenModal(product);
          }}
          className="absolute top-2 right-2 p-2 rounded-xl bg-white/80 text-[#19261E] opacity-0 group-hover:opacity-100 transition-opacity hover:bg-[#1E3E2B] hover:text-white shadow-xs"
          title="Apskatīt sastāvu"
        >
          <Eye className="w-4 h-4" />
        </button>
      </div>

      {/* Product Information */}
      <div className="space-y-2 my-2">
        <span className="text-[11px] font-bold text-[#1E3E2B] block">
          {product.subName}
        </span>
        <h3 className="font-serif-title text-lg font-bold text-[#19261E] group-hover:text-[#1E3E2B] transition-colors leading-snug line-clamp-1">
          {product.name}
        </h3>
        <p className="text-xs text-[#485950] line-clamp-2 leading-relaxed">
          {product.shortDescription}
        </p>
      </div>

      {/* Bottom Price & Add to Cart Controls */}
      <div className="pt-3 border-t border-[#D3DDD6] flex items-center justify-between mt-2">
        <div>
          <span className="text-xl font-bold text-[#19261E]">€{product.price.toFixed(2)}</span>
          <span className="text-[10px] text-[#485950] block font-medium">750ml stikla pudele</span>
        </div>

        <button
          onClick={handleAddToCart}
          className={`flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl font-bold text-xs transition-all shadow-xs ${
            added
              ? "bg-[#2A9D8F] text-white"
              : "bg-[#1E3E2B] text-white hover:bg-[#142B1E]"
          }`}
        >
          {added ? (
            <>
              <Check className="w-4 h-4" />
              <span>{t.productsSection.addedToCart}</span>
            </>
          ) : (
            <>
              <ShoppingBag className="w-4 h-4" />
              <span>{t.productsSection.addToCart}</span>
            </>
          )}
        </button>
      </div>

    </div>
  );
};
