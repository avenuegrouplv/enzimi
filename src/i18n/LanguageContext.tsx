import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Language, PageKey, Translations } from "./types";
import { ROUTE_MAP, getPageKeyAndLangFromPath } from "./routes";
import { lvTranslations } from "./translations/lv";
import { enTranslations } from "./translations/en";
import { ruTranslations } from "./translations/ru";
import { CartItem, Product } from "../types";

interface LanguageContextType {
  lang: Language;
  pageKey: PageKey;
  t: Translations;
  switchLanguage: (targetLang: Language) => void;
  getLocalizedPath: (key: PageKey) => string;
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  updateCartQuantity: (productId: string, delta: number) => void;
  clearCart: () => void;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  cartCount: number;
  cartTotal: number;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translationsMap: Record<Language, Translations> = {
  LV: lvTranslations,
  EN: enTranslations,
  RU: ruTranslations,
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();

  // Cart state
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('enzimi_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem('enzimi_cart', JSON.stringify(cart));
    } catch (e) {
      console.error(e);
    }
  }, [cart]);

  const addToCart = (product: Product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const updateCartQuantity = (productId: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.product.id === productId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const cartCount = useMemo(() => {
    return cart.reduce((acc, item) => acc + item.quantity, 0);
  }, [cart]);

  const cartTotal = useMemo(() => {
    return cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  }, [cart]);

  const { lang, pageKey } = useMemo(() => {
    return getPageKeyAndLangFromPath(location.pathname);
  }, [location.pathname]);

  const t = useMemo(() => {
    return translationsMap[lang] || lvTranslations;
  }, [lang]);

  const switchLanguage = (targetLang: Language) => {
    if (targetLang === lang) return;
    const targetRoute = ROUTE_MAP[targetLang][pageKey] || ROUTE_MAP[targetLang].home;
    navigate(`${targetRoute}${location.search}`);
  };

  const getLocalizedPath = (key: PageKey) => {
    return ROUTE_MAP[lang][key] || ROUTE_MAP[lang].home;
  };

  useEffect(() => {
    document.documentElement.lang = lang.toLowerCase();
  }, [lang]);

  return (
    <LanguageContext.Provider
      value={{
        lang,
        pageKey,
        t,
        switchLanguage,
        getLocalizedPath,
        cart,
        addToCart,
        removeFromCart,
        updateCartQuantity,
        clearCart,
        isCartOpen,
        setIsCartOpen,
        cartCount,
        cartTotal,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
