import React, { useState } from 'react';
import { Product, VolumeOption, VOLUME_PRICES } from '../types';
import { ShoppingBag, Check } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import enzimuDzerieniImg from '../assets/enzimu-dzerieni.webp';

interface ProductCardProps {
  product: Product;
  onOpenModal: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onOpenModal }) => {
  const { addToCart, t } = useLanguage();
  const [selectedVolume, setSelectedVolume] = useState<VolumeOption>('750ml');
  const [added, setAdded] = useState(false);

  const unitPrice = VOLUME_PRICES[selectedVolume];

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product, selectedVolume, 1);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  return (
    <div
      onClick={() => onOpenModal(product)}
      className="group relative bg-[#FFFFFF] rounded-3xl border border-[#CDE8D5] p-5 card-soft-shadow cursor-pointer flex flex-col justify-between transition-all duration-300 hover:border-[#1B8044]/40"
    >
      
      {/* Bottle Photo Showcase */}
      <div className="my-2 py-4 bg-[#F2FAF4] rounded-2xl border border-[#CDE8D5]/80 flex items-center justify-center relative overflow-hidden group-hover:bg-[#E2F4E7] transition-colors h-52">
        <img
          src={product.image || enzimuDzerieniImg}
          alt={product.name}
          loading="eager"
          decoding="async"
          fetchPriority="high"
          width="200"
          height="176"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src = '/Enzimu-dzerieni.webp';
          }}
          className="h-44 max-h-full w-auto object-contain drop-shadow-md"
        />
      </div>

      {/* Product Information */}
      <div className="space-y-1 my-2">
        <h3 className="font-serif-title text-[13px] sm:text-sm font-bold text-[#122E1F] group-hover:text-[#1B8044] transition-colors leading-tight truncate" title={product.name}>
          {product.name}
        </h3>
        <p className="text-xs text-[#2E523A] line-clamp-2 leading-relaxed">
          {product.shortDescription}
        </p>
      </div>

      {/* Selection Options: Volume */}
      <div className="space-y-2.5 my-2 pt-2 border-t border-[#CDE8D5]/60" onClick={(e) => e.stopPropagation()}>
        {/* Volume Selector */}
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-xs font-semibold text-[#2E523A]">{t.productsSection.priceLabel}</span>
            <span className="text-lg font-bold text-[#122E1F]">
              €{unitPrice.toFixed(2)}
            </span>
          </div>
          <div className="grid grid-cols-2 gap-1.5">
            {(['750ml', '500ml'] as VolumeOption[]).map((vol) => (
              <button
                key={vol}
                type="button"
                onClick={() => setSelectedVolume(vol)}
                className={`py-2 px-3 rounded-xl text-xs font-extrabold transition-all border-2 flex items-center justify-center ${
                  selectedVolume === vol
                    ? 'bg-[#DCFCE7] text-[#064E3B] border-[#16A34A] shadow-xs scale-[1.02]'
                    : 'bg-[#FAF9F5] text-[#2E523A] border-[#CDE8D5] hover:bg-[#E5F4E9] hover:text-[#122E1F]'
                }`}
              >
                {vol}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Add to Cart Button */}
      <button
        type="button"
        onClick={handleAddToCart}
        className={`w-full flex items-center justify-center gap-2 mt-2 py-2.5 px-4 rounded-xl font-bold text-xs transition-all shadow-xs ${
          added
            ? "bg-[#16A34A] text-white"
            : "bg-[#1B8044] text-white hover:bg-[#146334] btn-shimmer"
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
  );
};
