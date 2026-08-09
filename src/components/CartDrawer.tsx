import React, { useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { VolumeOption, VOLUME_PRICES } from '../types';
import { X, Trash2, Plus, Minus, ShoppingBag, CheckCircle, ArrowRight } from 'lucide-react';
import enzimuDzerieniImg from '../assets/enzimu-dzerieni.webp';

export const CartDrawer: React.FC = () => {
  const {
    isCartOpen,
    setIsCartOpen,
    cart,
    removeFromCart,
    updateCartQuantity,
    updateCartItemVolume,
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
  const grandTotal = Math.round((cartTotal + deliveryCost) * 100) / 100;
  const displayedTotal = isCheckoutStep ? grandTotal : cartTotal;

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
        <div className="w-screen max-w-md bg-[#FAF9F5] border-l border-[#CDE8D5] shadow-2xl flex flex-col justify-between p-6 overflow-y-auto">
          
          {/* Header */}
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-[#CDE8D5]">
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-[#1B8044]" />
                <h2 className="font-serif-title text-xl font-bold text-[#122E1F]">
                  {t.cartDrawer.title}
                </h2>
              </div>
              <button
                onClick={handleClose}
                className="p-2 rounded-full bg-[#E5F4E9] text-[#122E1F] hover:bg-[#1B8044] hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content Views */}
            {isSuccess ? (
              <div className="py-12 text-center space-y-4 animate-in zoom-in-95 duration-200">
                <div className="w-16 h-16 rounded-full bg-[#16A34A]/20 text-[#16A34A] flex items-center justify-center mx-auto">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <h3 className="font-serif-title text-2xl font-bold text-[#122E1F]">
                  {t.cartDrawer.orderSuccessTitle}
                </h3>
                <p className="text-xs text-[#2E523A] leading-relaxed max-w-xs mx-auto">
                  {t.cartDrawer.orderSuccessDesc}
                </p>
                <div className="bg-[#E5F4E9] p-4 rounded-2xl border border-[#CDE8D5] text-left text-xs space-y-2 text-[#122E1F]">
                  <p><strong>Pircējs:</strong> {customerName}</p>
                  <p><strong>E-pasts:</strong> {email}</p>
                  <p><strong>Piegāde:</strong> {deliveryMethod === 'delivery' ? 'Piegāde' : 'Saņemšana klātienē Rīgā'} ({address || 'Pieteikts'})</p>
                  <div className="pt-2 border-t border-[#CDE8D5]">
                    <strong className="block mb-1">Pasūtītās preces:</strong>
                    <ul className="space-y-1">
                      {cart.map((item, idx) => {
                        const vol = item.selectedVolume || '750ml';
                        const price = item.unitPrice || VOLUME_PRICES[vol];
                        return (
                          <li key={idx} className="flex justify-between text-[11px] text-[#2E523A]">
                            <span>{item.quantity}x {item.product.name} ({vol})</span>
                            <span className="font-bold text-[#122E1F]">€{(price * item.quantity).toFixed(2)}</span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                  <p className="pt-2 border-t border-[#CDE8D5]"><strong>Kopā apmaksai:</strong> €{grandTotal.toFixed(2)}</p>
                </div>
                <button
                  onClick={handleClose}
                  className="w-full py-3 rounded-xl bg-[#1B8044] text-white font-bold text-sm hover:bg-[#146334] transition-all shadow-xs"
                >
                  {t.cartDrawer.closeBtn}
                </button>
              </div>
            ) : cart.length === 0 ? (
              <div className="py-16 text-center space-y-4 text-[#2E523A]">
                <ShoppingBag className="w-12 h-12 text-[#1B8044] mx-auto opacity-40" />
                <p className="text-sm font-medium">{t.cartDrawer.emptyText}</p>
              </div>
            ) : !isCheckoutStep ? (
              /* Item List View */
              <div className="py-4 space-y-3">
                {cart.map((item) => {
                  const vol: VolumeOption = item.selectedVolume || '750ml';
                  const unitPrice = item.unitPrice || VOLUME_PRICES[vol];
                  const itemTotal = unitPrice * item.quantity;

                  return (
                    <div
                      key={`${item.product.id}-${vol}`}
                      className="bg-[#FFFFFF] p-3.5 rounded-2xl border border-[#CDE8D5] shadow-xs space-y-2.5"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex items-center gap-3">
                          <img
                            src={item.product.image || enzimuDzerieniImg}
                            alt={item.product.name}
                            onError={(e) => {
                              (e.currentTarget as HTMLImageElement).src = enzimuDzerieniImg;
                            }}
                            className="w-10 h-10 object-contain p-0.5 rounded-xl bg-[#E5F4E9] border border-[#CDE8D5]"
                          />
                          <div>
                            <h4 className="font-bold text-xs text-[#122E1F] leading-snug line-clamp-1">
                              {item.product.name}
                            </h4>
                            <span className="text-[10px] text-[#2E523A]">€{unitPrice.toFixed(2)} / gab.</span>
                          </div>
                        </div>

                        <button
                          type="button"
                          onClick={() => removeFromCart(item.product.id, vol)}
                          className="p-1.5 rounded-lg text-red-600 hover:bg-red-50 transition-colors cursor-pointer"
                          title="Dzēst no groza"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>

                      {/* Interactive Controls: Volume Switcher & Quantity */}
                      <div className="flex items-center justify-between pt-2 border-t border-[#CDE8D5]/60 text-xs">
                        {/* Volume Selector Pills */}
                        <div className="flex items-center gap-1">
                          {(['750ml', '500ml'] as VolumeOption[]).map((v) => (
                            <button
                              key={v}
                              type="button"
                              onClick={() => updateCartItemVolume(item.product.id, vol, v)}
                              className={`px-2 py-1 rounded-lg text-[10px] font-bold border transition-colors ${
                                vol === v
                                  ? 'bg-[#1B8044] text-white border-[#1B8044]'
                                  : 'bg-[#FAF9F5] text-[#2E523A] border-[#CDE8D5] hover:bg-[#E5F4E9]'
                              }`}
                            >
                              {v}
                            </button>
                          ))}
                        </div>

                        {/* Quantity Counter */}
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-1 bg-[#E5F4E9] rounded-lg px-2 py-1 border border-[#CDE8D5]">
                            <button
                              type="button"
                              onClick={() => updateCartQuantity(item.product.id, vol, -1)}
                              className="p-0.5 text-[#122E1F] hover:text-[#1B8044]"
                              title="Samazināt skaitu"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="font-bold text-xs text-[#122E1F] px-1">{item.quantity}</span>
                            <button
                              type="button"
                              onClick={() => updateCartQuantity(item.product.id, vol, 1)}
                              className="p-0.5 text-[#122E1F] hover:text-[#1B8044]"
                              title="Palielināt skaitu"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>

                          <span className="font-bold text-xs text-[#122E1F] min-w-[50px] text-right">
                            €{itemTotal.toFixed(2)}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              /* Checkout Details Form */
              <form id="checkout-form" onSubmit={handleOrderSubmit} className="py-4 space-y-4">
                <div>
                  <label className="block text-xs font-bold text-[#122E1F] uppercase tracking-wider mb-1">
                    {t.contactSection.nameLabel} *
                  </label>
                  <input
                    type="text"
                    required
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder={t.contactSection.namePlaceholder}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#FFFFFF] border border-[#CDE8D5] text-xs text-[#122E1F] focus:outline-none focus:border-[#1B8044]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-[#122E1F] uppercase tracking-wider mb-1">
                      {t.contactSection.emailLabel} *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="epasts@paraugs.lv"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#FFFFFF] border border-[#CDE8D5] text-xs text-[#122E1F] focus:outline-none focus:border-[#1B8044]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#122E1F] uppercase tracking-wider mb-1">
                      {t.contactSection.phoneLabel} *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+371 20000000"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#FFFFFF] border border-[#CDE8D5] text-xs text-[#122E1F] focus:outline-none focus:border-[#1B8044]"
                    />
                  </div>
                </div>

                {/* Delivery Selector */}
                <div>
                  <label className="block text-xs font-bold text-[#122E1F] uppercase tracking-wider mb-2">
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
                            ? 'bg-[#E5F4E9] border-[#1B8044] font-bold text-[#122E1F]'
                            : 'bg-[#FFFFFF] border-[#CDE8D5] text-[#2E523A]'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <input
                            type="radio"
                            name="delivery"
                            checked={deliveryMethod === m.id}
                            onChange={() => setDeliveryMethod(m.id as any)}
                            className="accent-[#1B8044]"
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
                    <label className="block text-xs font-bold text-[#122E1F] uppercase tracking-wider mb-1">
                      {t.cartDrawer.addressLabel}
                    </label>
                    <input
                      type="text"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      placeholder="Piem., Rīgas Spice Omniva pakomāts vai Adrese"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#FFFFFF] border border-[#CDE8D5] text-xs text-[#122E1F] focus:outline-none focus:border-[#1B8044]"
                    />
                  </div>
                )}
              </form>
            )}
          </div>

          {/* Footer Actions */}
          {cart.length > 0 && !isSuccess && (
            <div className="pt-4 border-t border-[#CDE8D5] space-y-3">
              <div className="space-y-1 text-xs text-[#2E523A]">
                {isCheckoutStep && (
                  <>
                    <div className="flex justify-between">
                      <span>Dzērieni:</span>
                      <span className="font-bold text-[#122E1F]">€{cartTotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Piegāde:</span>
                      <span className="font-bold text-[#122E1F]">
                        {deliveryCost > 0 ? `€${deliveryCost.toFixed(2)}` : 'Bezmaksas'}
                      </span>
                    </div>
                  </>
                )}
                <div className="flex justify-between text-base font-bold text-[#122E1F] pt-1 border-t border-[#CDE8D5]">
                  <span>Kopā:</span>
                  <span>€{displayedTotal.toFixed(2)}</span>
                </div>
              </div>

              {!isCheckoutStep ? (
                <button
                  onClick={() => setIsCheckoutStep(true)}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#1B8044] text-white font-bold text-sm hover:bg-[#146334] transition-all shadow-xs btn-shimmer"
                >
                  <span>{t.cartDrawer.checkoutBtn}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => setIsCheckoutStep(false)}
                    className="py-3 px-4 rounded-xl bg-[#E5F4E9] text-[#122E1F] font-bold text-xs hover:bg-[#CDE8D5]"
                  >
                    Atpakaļ
                  </button>
                  <button
                    type="submit"
                    form="checkout-form"
                    className="flex-1 py-3 px-4 rounded-xl bg-[#1B8044] text-white font-bold text-sm hover:bg-[#146334] shadow-xs"
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
