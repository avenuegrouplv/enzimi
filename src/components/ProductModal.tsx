import React, { useState } from 'react';
import { Product, VolumeOption, VOLUME_PRICES } from '../types';
import { X, Check, ShoppingBag, Droplet, Plus, Minus } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  const { addToCart, t } = useLanguage();
  const [selectedVolume, setSelectedVolume] = useState<VolumeOption>('750ml');
  const [quantity, setQuantity] = useState<number>(1);

  if (!product) return null;

  const unitPrice = VOLUME_PRICES[selectedVolume];
  const totalPrice = unitPrice * quantity;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs animate-in fade-in duration-200 overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-[#FAF9F5] rounded-3xl border border-[#CDE8D5] shadow-2xl overflow-hidden p-6 sm:p-8 animate-in zoom-in-95 duration-200 my-8">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-[#E5F4E9] text-[#122E1F] hover:bg-[#1B8044] hover:text-white transition-colors z-20"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          {/* Bottle Photo Showcase Column */}
          <div className="md:col-span-5 flex flex-col items-center justify-center p-6 bg-[#F2FAF4] rounded-2xl border border-[#CDE8D5] relative h-80">
            <span className="absolute top-3 left-3 bg-[#FAF9F5] text-[#1B8044] text-xs font-bold px-3 py-1 rounded-full border border-[#CDE8D5] z-10">
              {product.categoryLabel}
            </span>
            <img
              src="/enzimu-dzerieni.webp"
              alt={product.name}
              className="h-48 w-auto object-contain drop-shadow-lg mb-2"
            />
            <div className="text-center">
              <span className="text-2xl font-bold text-[#122E1F]">€{totalPrice.toFixed(2)}</span>
              <p className="text-xs text-[#2E523A] font-medium">{quantity}x {selectedVolume} Stikla Pudele</p>
            </div>
          </div>

          {/* Details Column */}
          <div className="md:col-span-7 space-y-4 text-[#122E1F]">
            <div>
              <span className="text-xs font-bold text-[#1B8044] uppercase tracking-wider">
                {product.subName}
              </span>
              <h2 className="font-serif-title text-2xl font-bold text-[#122E1F] mt-0.5">
                {product.name}
              </h2>
            </div>

            <p className="text-xs text-[#2E523A] leading-relaxed">
              {product.fullDescription}
            </p>

            {/* Taste Notes */}
            <div className="bg-[#E5F4E9]/80 p-3 rounded-xl border border-[#CDE8D5] flex items-start gap-2.5">
              <Droplet className="w-4 h-4 text-[#1B8044] shrink-0 mt-0.5" />
              <div>
                <span className="text-xs font-bold text-[#122E1F]">Garšas buķete: </span>
                <span className="text-xs text-[#2E523A]">{product.tasteNotes}</span>
              </div>
            </div>

            {/* Ingredients */}
            <div>
              <h4 className="text-xs font-bold text-[#122E1F] uppercase tracking-wider mb-1.5">
                Sastāvs & Dabas veltes:
              </h4>
              <ul className="grid grid-cols-1 gap-1 text-xs text-[#2E523A]">
                {product.ingredients.map((ing, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#1B8044]" />
                    <span>{ing}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Volume and Quantity Selection Box */}
            <div className="p-3.5 bg-[#FFFFFF] rounded-2xl border border-[#CDE8D5] space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#122E1F] uppercase tracking-wider">Pudeles tilpums:</span>
                <div className="flex gap-2">
                  {(['750ml', '500ml'] as VolumeOption[]).map((vol) => (
                    <button
                      key={vol}
                      type="button"
                      onClick={() => setSelectedVolume(vol)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all border ${
                        selectedVolume === vol
                          ? 'bg-[#1B8044] text-white border-[#1B8044]'
                          : 'bg-[#FAF9F5] text-[#122E1F] border-[#CDE8D5] hover:bg-[#E5F4E9]'
                      }`}
                    >
                      {vol} (€{VOLUME_PRICES[vol].toFixed(2)})
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-[#CDE8D5]/60">
                <span className="text-xs font-bold text-[#122E1F] uppercase tracking-wider">Daudzums:</span>
                <div className="flex items-center gap-2 bg-[#E5F4E9] rounded-xl px-3 py-1.5 border border-[#CDE8D5]">
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="p-1 text-[#122E1F] hover:text-[#1B8044]"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="font-bold text-sm text-[#122E1F] min-w-[20px] text-center">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => q + 1)}
                    className="p-1 text-[#122E1F] hover:text-[#1B8044]"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="pt-2 flex items-center gap-3">
              <button
                type="button"
                onClick={() => {
                  addToCart(product, selectedVolume, quantity);
                  onClose();
                }}
                className="flex-1 flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-[#1B8044] text-white font-bold text-sm hover:bg-[#146334] transition-all shadow-xs btn-shimmer"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Pievienot grozam (€{totalPrice.toFixed(2)})</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
