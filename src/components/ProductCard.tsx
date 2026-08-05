import React, { useState } from 'react';
import { Product, VolumeOption, VOLUME_PRICES } from '../types';
import { ShoppingBag, Eye, Check, Plus, Minus } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

interface ProductCardProps {
  product: Product;
  onOpenModal: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onOpenModal }) => {
  const { addToCart, t } = useLanguage();
  const [selectedVolume, setSelectedVolume] = useState<VolumeOption>('750ml');
  const [quantity, setQuantity] = useState<number>(1);
  const [added, setAdded] = useState(false);

  const unitPrice = VOLUME_PRICES[selectedVolume];
  const totalPrice = unitPrice * quantity;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product, selectedVolume, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  return (
    <div
      onClick={() => onOpenModal(product)}
      className="group relative bg-[#FFFFFF] rounded-3xl border border-[#CDE8D5] p-5 card-soft-shadow cursor-pointer flex flex-col justify-between transition-all duration-300 hover:border-[#1B8044]/40"
    >
      
      {/* Bottle Photo Showcase */}
      <div className="my-2 py-4 bg-[#F2FAF4] rounded-2xl border border-[#CDE8D5]/80 flex items-center justify-center relative overflow-hidden group-hover:bg-[#E2F4E7] transition-colors h-48">
        <img
          src="/enzimu-dzerieni.webp"
          alt={product.name}
          className="h-full w-auto object-contain drop-shadow-md group-hover:scale-110 transition-transform duration-300 scale-105"
        />
        
        {/* Quick View Floating Eye Icon */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onOpenModal(product);
          }}
          className="absolute top-2 right-2 p-2 rounded-xl bg-white/80 text-[#122E1F] opacity-0 group-hover:opacity-100 transition-opacity hover:bg-[#1B8044] hover:text-white shadow-xs"
          title="Apskatīt sastāvu"
        >
          <Eye className="w-4 h-4" />
        </button>
      </div>

      {/* Product Information */}
      <div className="space-y-1.5 my-2">
        <span className="text-[11px] font-bold text-[#1B8044] block">
          {product.subName}
        </span>
        <h3 className="font-serif-title text-lg font-bold text-[#122E1F] group-hover:text-[#1B8044] transition-colors leading-snug line-clamp-1">
          {product.name}
        </h3>
        <p className="text-xs text-[#2E523A] line-clamp-2 leading-relaxed">
          {product.shortDescription}
        </p>
      </div>

      {/* Selection Options: Volume & Quantity */}
      <div className="space-y-2.5 my-2 pt-2 border-t border-[#CDE8D5]/60" onClick={(e) => e.stopPropagation()}>
        {/* Volume Selector */}
        <div>
          <label className="text-[10px] uppercase font-bold text-[#2E523A] tracking-wider block mb-1">
            Izvēlies tilpumu:
          </label>
          <div className="grid grid-cols-2 gap-1.5">
            {(['750ml', '500ml'] as VolumeOption[]).map((vol) => (
              <button
                key={vol}
                type="button"
                onClick={() => setSelectedVolume(vol)}
                className={`py-1.5 px-2 rounded-xl text-xs font-bold transition-all border flex flex-col items-center justify-center ${
                  selectedVolume === vol
                    ? 'bg-[#1B8044] text-white border-[#1B8044] shadow-2xs'
                    : 'bg-[#FAF9F5] text-[#122E1F] border-[#CDE8D5] hover:bg-[#E5F4E9]'
                }`}
              >
                <span>{vol}</span>
                <span className={`text-[10px] font-normal ${selectedVolume === vol ? 'text-white/90' : 'text-[#2E523A]'}`}>
                  €{VOLUME_PRICES[vol].toFixed(2)}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Quantity Controls & Price Display */}
        <div className="flex items-center justify-between gap-2 pt-1">
          <div>
            <span className="text-[10px] text-[#2E523A] font-medium block">Skaits:</span>
            <div className="flex items-center gap-1.5 bg-[#E5F4E9] rounded-xl px-2 py-1 border border-[#CDE8D5]">
              <button
                type="button"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="p-1 text-[#122E1F] hover:text-[#1B8044] transition-colors"
                title="Samazināt"
              >
                <Minus className="w-3 h-3" />
              </button>
              <span className="font-bold text-xs text-[#122E1F] min-w-[16px] text-center">
                {quantity}
              </span>
              <button
                type="button"
                onClick={() => setQuantity((q) => q + 1)}
                className="p-1 text-[#122E1F] hover:text-[#1B8044] transition-colors"
                title="Palielināt"
              >
                <Plus className="w-3 h-3" />
              </button>
            </div>
          </div>

          <div className="text-right">
            <span className="text-[10px] text-[#2E523A] block font-medium">Kopā:</span>
            <span className="text-lg font-bold text-[#122E1F]">
              €{totalPrice.toFixed(2)}
            </span>
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
            <span>Pievienot ({quantity}x {selectedVolume})</span>
          </>
        )}
      </button>

    </div>
  );
};
