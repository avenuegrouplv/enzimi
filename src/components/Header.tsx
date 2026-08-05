import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "../i18n/LanguageContext";
import { Language } from "../i18n/types";
import { ShoppingBag, Menu, X, ChevronDown, Leaf, Sparkles } from "lucide-react";

export const Header: React.FC = () => {
  const { lang, switchLanguage, getLocalizedPath, t, cartCount, setIsCartOpen } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navItems = [
    { key: "home", label: t.nav.home, path: getLocalizedPath("home") },
    { key: "about", label: t.nav.about, path: getLocalizedPath("about") },
    { key: "products", label: t.nav.products, path: getLocalizedPath("products") },
    { key: "services", label: t.nav.services, path: getLocalizedPath("services") },
    { key: "contact", label: t.nav.contact, path: getLocalizedPath("contact") },
  ];

  const languages: Language[] = ["LV", "EN", "RU"];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#FAF9F5]/95 backdrop-blur-md shadow-xs border-b border-[#CDE8D5]/70 py-3"
          : "bg-[#FAF9F5]/80 backdrop-blur-xs py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link to={getLocalizedPath("home")} className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-[#E5F4E9] border border-[#CDE8D5] flex items-center justify-center text-[#1B8044] group-hover:bg-[#1B8044] group-hover:text-white transition-colors">
              <Leaf className="w-5 h-5 transition-transform group-hover:rotate-12" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif-title text-2xl font-bold tracking-tight text-[#122E1F]">
                Enzimi
              </span>
              <span className="text-[9px] sm:text-[10px] uppercase tracking-wider text-[#1B8044] -mt-0.5 font-sans font-bold">
                Dabīgs Spēks Labākai Dzīvei
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 bg-[#E5F4E9]/80 p-1.5 rounded-full border border-[#CDE8D5]">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path || (item.key === 'home' && (location.pathname === '/' || location.pathname === '/en' || location.pathname === '/ru'));
              return (
                <Link
                  key={item.key}
                  to={item.path}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    isActive
                      ? "bg-[#FFFFFF] text-[#122E1F] shadow-xs font-semibold"
                      : "text-[#2E523A] hover:text-[#122E1F] hover:bg-[#FFFFFF]/50"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Controls: Cart & Language & CTA */}
          <div className="flex items-center gap-3">
            
            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#E5F4E9] border border-[#CDE8D5] text-[#122E1F] text-xs font-bold hover:bg-[#CDE8D5]/60 transition-colors"
                aria-label="Izvēlēties valodu"
              >
                <span>{lang}</span>
                <ChevronDown className={`w-3.5 h-3.5 text-[#1B8044] transition-transform ${langDropdownOpen ? "rotate-180" : ""}`} />
              </button>

              {langDropdownOpen && (
                <div className="absolute right-0 mt-2 w-24 bg-[#FFFFFF] border border-[#CDE8D5] rounded-xl shadow-lg py-1 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  {languages.map((l) => (
                    <button
                      key={l}
                      onClick={() => {
                        switchLanguage(l);
                        setLangDropdownOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2 text-xs font-semibold flex items-center justify-between transition-colors ${
                        lang === l
                          ? "bg-[#E5F4E9] text-[#1B8044]"
                          : "text-[#122E1F] hover:bg-[#FAF9F5]"
                      }`}
                    >
                      <span>{l}</span>
                      {lang === l && <div className="w-1.5 h-1.5 rounded-full bg-[#1B8044]" />}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Shopping Cart Trigger */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2.5 rounded-xl bg-[#E5F4E9] border border-[#CDE8D5] text-[#122E1F] hover:bg-[#1B8044] hover:text-white transition-colors group"
              aria-label="Pirkumu grozs"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-[#1B8044] text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-[#FAF9F5] animate-bounce">
                  {cartCount}
                </span>
              )}
            </button>

            {/* E-Shop CTA Button */}
            <Link
              to={getLocalizedPath("products")}
              className="hidden lg:flex items-center gap-2 px-4 py-2 rounded-xl bg-[#1B8044] text-white text-xs font-semibold hover:bg-[#146334] transition-all shadow-xs btn-shimmer"
            >
              <Sparkles className="w-3.5 h-3.5 text-emerald-200" />
              <span>{t.nav.orderNow}</span>
            </Link>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2.5 rounded-xl bg-[#E5F4E9] text-[#122E1F] hover:bg-[#CDE8D5] transition-colors"
              aria-label="Izvēlne"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF9F5] border-b border-[#CDE8D5] px-4 pt-3 pb-6 space-y-2 shadow-lg animate-in slide-in-from-top duration-200">
          <div className="flex flex-col gap-1.5">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.key}
                  to={item.path}
                  className={`px-4 py-3 rounded-xl text-base font-semibold transition-colors flex items-center justify-between ${
                    isActive
                      ? "bg-[#1B8044] text-white"
                      : "text-[#122E1F] hover:bg-[#E5F4E9]"
                  }`}
                >
                  <span>{item.label}</span>
                  <ChevronDown className="-rotate-90 w-4 h-4 opacity-50" />
                </Link>
              );
            })}
          </div>

          <div className="pt-2">
            <Link
              to={getLocalizedPath("products")}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#1B8044] text-white text-sm font-bold shadow-xs"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>{t.nav.orderNow}</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
