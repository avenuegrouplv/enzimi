import React, { useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { X, Trash2, Plus, Minus, ShoppingBag, Truck, CheckCircle, ArrowRight } from 'lucide-react';

export const CartDrawer: React.FC = () => {
  const {
    isCartOpen,
    setIsCartOpen,
    cart,
    removeFromCart,
    updateCartQuantity,
    cartTotal,
    clearCart,
    t,
  } = useLanguage();

  const [deliveryMethod, setDeliveryMethod] = useState<'delivery' | 'pickup'>('delivery');
  const [customerName, setCustomerName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [isCheckoutStep, setIsCheckoutStep] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isCartOpen) return null;

  const deliveryCost = deliveryMethod === 'delivery' ? 3.50 : 0;
  const finalTotal = cartTotal + deliveryCost;

  const handleOrderSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName || !email || !phone) return;
    setIsSuccess(true);
  };

  const handleClose = () => {
    setIsCartOpen(false);
    if (isSuccess) {
      clearCart();
      setIsSuccess(false);
      setIsCheckoutStep(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/40 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FAF9F5] border-l border-[#D3DDD6] shadow-2xl flex flex-col justify-between p-6 overflow-y-auto">
          
          {/* Header */}
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-[#D3DDD6]">
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-[#1E3E2B]" />
                <h2 className="font-serif-title text-xl font-bold text-[#19261E]">
                  {t.cartDrawer.title}
                </h2>
              </div>
              <button
                onClick={handleClose}
                className="p-2 rounded-full bg-[#E8EFEA] text-[#19261E] hover:bg-[#1E3E2B] hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content Views */}
            {isSuccess ? (
              <div className="py-12 text-center space-y-4 animate-in zoom-in-95 duration-200">
                <div className="w-16 h-16 rounded-full bg-[#2A9D8F]/20 text-[#2A9D8F] flex items-center justify-center mx-auto">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <h3 className="font-serif-title text-2xl font-bold text-[#19261E]">
                  {t.cartDrawer.orderSuccessTitle}
                </h3>
                <p className="text-xs text-[#485950] leading-relaxed max-w-xs mx-auto">
                  {t.cartDrawer.orderSuccessDesc}
                </p>
                <div className="bg-[#E8EFEA] p-4 rounded-2xl border border-[#D3DDD6] text-left text-xs space-y-1.5 text-[#19261E]">
                  <p><strong>Pircējs:</strong> {customerName}</p>
                  <p><strong>E-pasts:</strong> {email}</p>
                  <p><strong>Piegāde:</strong> {deliveryMethod === 'delivery' ? 'Piegāde' : 'Saņemšana klātienē Rīgā'} ({address || 'Pieteikts'})</p>
                  <p><strong>Kopā apmaksai:</strong> €{finalTotal.toFixed(2)}</p>
                </div>
                <button
                  onClick={handleClose}
                  className="w-full py-3 rounded-xl bg-[#1E3E2B] text-white font-bold text-sm hover:bg-[#142B1E] transition-all shadow-xs"
                >
                  {t.cartDrawer.closeBtn}
                </button>
              </div>
            ) : cart.length === 0 ? (
              <div className="py-16 text-center space-y-4 text-[#485950]">
                <ShoppingBag className="w-12 h-12 text-[#1E3E2B] mx-auto opacity-40" />
                <p className="text-sm font-medium">{t.cartDrawer.emptyText}</p>
              </div>
            ) : !isCheckoutStep ? (
              /* Item List View */
              <div className="py-4 space-y-4">
                {cart.map(({ product, quantity }) => (
                  <div
                    key={product.id}
                    className="flex items-center justify-between bg-[#FFFFFF] p-3.5 rounded-2xl border border-[#D3DDD6] shadow-xs"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#E8EFEA] flex items-center justify-center font-bold text-xs text-[#1E3E2B]">
                        750ml
                      </div>
                      <div>
                        <h4 className="font-bold text-xs text-[#19261E] leading-tight line-clamp-1">
                          {product.name}
                        </h4>
                        <span className="text-[10px] text-[#485950]">€{product.price.toFixed(2)} / gab.</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1.5 bg-[#E8EFEA] rounded-lg px-2 py-1 border border-[#D3DDD6] text-xs">
                        <button
                          onClick={() => updateCartQuantity(product.id, -1)}
                          className="p-0.5 text-[#19261E] hover:text-[#1E3E2B]"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="font-bold text-[#19261E] px-1">{quantity}</span>
                        <button
                          onClick={() => updateCartQuantity(product.id, 1)}
                          className="p-0.5 text-[#19261E] hover:text-[#1E3E2B]"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <button
                        onClick={() => removeFromCart(product.id)}
                        className="p-1.5 rounded-lg text-red-700 hover:bg-red-50 transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              /* Checkout Details Form */
              <form id="checkout-form" onSubmit={handleOrderSubmit} className="py-4 space-y-4">
                <div>
                  <label className="block text-xs font-bold text-[#19261E] uppercase tracking-wider mb-1">
                    {t.contactSection.nameLabel} *
                  </label>
                  <input
                    type="text"
                    required
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder={t.contactSection.namePlaceholder}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#FFFFFF] border border-[#D3DDD6] text-xs text-[#19261E] focus:outline-none focus:border-[#1E3E2B]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-[#19261E] uppercase tracking-wider mb-1">
                      {t.contactSection.emailLabel} *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="epasts@paraugs.lv"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#FFFFFF] border border-[#D3DDD6] text-xs text-[#19261E] focus:outline-none focus:border-[#1E3E2B]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#19261E] uppercase tracking-wider mb-1">
                      {t.contactSection.phoneLabel} *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+371 20000000"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#FFFFFF] border border-[#D3DDD6] text-xs text-[#19261E] focus:outline-none focus:border-[#1E3E2B]"
                    />
                  </div>
                </div>

                {/* Delivery Selector */}
                <div>
                  <label className="block text-xs font-bold text-[#19261E] uppercase tracking-wider mb-2">
                    {t.cartDrawer.deliveryTitle}
                  </label>
                  <div className="space-y-2">
                    {[
                      { id: 'delivery', label: 'Piegāde', price: 3.50 },
                      { id: 'pickup', label: 'Saņemšana klātienē Rīgā', price: 0 },
                    ].map((m) => (
                      <label
                        key={m.id}
                        className={`flex items-center justify-between p-3 rounded-xl border text-xs cursor-pointer transition-colors ${
                          deliveryMethod === m.id
                            ? 'bg-[#E8EFEA] border-[#1E3E2B] font-bold text-[#19261E]'
                            : 'bg-[#FFFFFF] border-[#D3DDD6] text-[#485950]'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <input
                            type="radio"
                            name="delivery"
                            checked={deliveryMethod === m.id}
                            onChange={() => setDeliveryMethod(m.id as any)}
                            className="accent-[#1E3E2B]"
                          />
                          <span>{m.label}</span>
                        </div>
                        <span className="text-[11px] font-bold">
                          {m.price > 0 ? `€${m.price.toFixed(2)}` : 'Bezmaksas'}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {deliveryMethod !== 'pickup' && (
                  <div>
                    <label className="block text-xs font-bold text-[#19261E] uppercase tracking-wider mb-1">
                      {t.cartDrawer.addressLabel}
                    </label>
                    <input
                      type="text"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      placeholder="Piem., Rīgas Spice Omniva pakomāts vai Adrese"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#FFFFFF] border border-[#D3DDD6] text-xs text-[#19261E] focus:outline-none focus:border-[#1E3E2B]"
                    />
                  </div>
                )}
              </form>
            )}
          </div>

          {/* Footer Actions */}
          {cart.length > 0 && !isSuccess && (
            <div className="pt-4 border-t border-[#D3DDD6] space-y-3">
              <div className="space-y-1 text-xs text-[#485950]">
                <div className="flex justify-between">
                  <span>Dzērieni:</span>
                  <span className="font-bold text-[#19261E]">€{cartTotal.toFixed(2)}</span>
                </div>
                {isCheckoutStep && (
                  <div className="flex justify-between">
                    <span>Piegāde:</span>
                    <span className="font-bold text-[#19261E]">€{deliveryCost.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between text-base font-bold text-[#19261E] pt-1 border-t border-[#D3DDD6]">
                  <span>Kopā:</span>
                  <span>€{finalTotal.toFixed(2)}</span>
                </div>
              </div>

              {!isCheckoutStep ? (
                <button
                  onClick={() => setIsCheckoutStep(true)}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#1E3E2B] text-white font-bold text-sm hover:bg-[#142B1E] transition-all shadow-xs btn-shimmer"
                >
                  <span>{t.cartDrawer.checkoutBtn}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => setIsCheckoutStep(false)}
                    className="py-3 px-4 rounded-xl bg-[#E8EFEA] text-[#19261E] font-bold text-xs hover:bg-[#D3DDD6]"
                  >
                    Atpakaļ
                  </button>
                  <button
                    type="submit"
                    form="checkout-form"
                    className="flex-1 py-3 px-4 rounded-xl bg-[#1E3E2B] text-white font-bold text-sm hover:bg-[#142B1E] shadow-xs"
                  >
                    {t.cartDrawer.confirmOrder}
                  </button>
                </div>
              )}
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
