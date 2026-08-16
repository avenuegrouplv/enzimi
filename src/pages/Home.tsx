import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import { PRODUCTS } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { ProductModal } from '../components/ProductModal';
import { Product } from '../types';
import { SEOHead } from '../components/SEOHead';
import { UsageGuideSection } from '../components/UsageGuideSection';
import enzimuDzerieniImg from '../assets/enzimu-dzerieni.webp';
import startaKomplektsImg from '../assets/starta-komplekts.webp';
import pasutietEnzimuDzerienusImg from '../assets/pasutiet-enzimu-dzerienus.webp';
import {
  Sparkles,
  ArrowRight,
  Leaf,
  CheckCircle2,
  Heart,
  BookOpen,
  Award,
  ShieldCheck,
  ChevronRight,
  ChevronLeft,
  ShoppingBag,
  ChevronDown
} from 'lucide-react';

export const Home: React.FC = () => {
  const { t, getLocalizedPath, products } = useLanguage();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const servicesData = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=600&q=80",
      title: t.servicesSection.service1Title,
      desc: t.servicesSection.service1Desc,
      linkText: t.servicesPreview.learnMoreBtn,
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=600&q=80",
      title: t.servicesSection.service2Title,
      desc: t.servicesSection.service2Desc,
      linkText: t.servicesPreview.orderMoreBtn,
    },
    {
      id: 3,
      image: startaKomplektsImg,
      fallbackImage: '/Starta-komplekts.webp',
      title: t.servicesSection.service3Title,
      desc: t.servicesSection.service3Desc,
      linkText: t.servicesPreview.servicesMoreBtn,
    },
  ];

  // Duplicated list to enable seamless 1-by-1 infinite sliding from right to left
  const extendedServices = [...servicesData, ...servicesData];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setCurrentIndex((prev) => prev + 1);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  // Reset to index 0 without transition when reaching the full cycle
  useEffect(() => {
    if (currentIndex === servicesData.length) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(0);
      }, 500); // 500ms matches duration-500 css transition
      return () => clearTimeout(timer);
    }
  }, [currentIndex, servicesData.length]);

  // Top 4 featured drinks
  const featuredProducts = products.slice(0, 4);

  const faqs = t.faqsSection.items;

  return (
    <>
      <SEOHead
        title={t.hero.title}
        description={t.hero.subtitle}
      />

      {/* Hero Section */}
      <section className="relative pt-4 pb-4 md:pt-10 md:pb-6 overflow-hidden bg-gradient-to-b from-[#FAF9F5] via-[#E5F4E9]/70 to-[#FAF9F5]">
        
        {/* Soft Background Decorative Orbs */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#1B8044]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Hero Left Text Column */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              
              {/* Badges */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FEF3C7] border border-[#FDE68A] text-[#92400E] text-xs font-bold shadow-2xs">
                  <span className="w-2 h-2 rounded-full bg-[#D97706]" />
                  <span>{t.hero.underDevelopment}</span>
                </div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E5F4E9] border border-[#CDE8D5] text-[#1B8044] text-xs font-bold shadow-2xs">
                  <Leaf className="w-4 h-4 text-[#1B8044]" />
                  <span>{t.hero.badge}</span>
                </div>
              </div>

              {/* Title */}
              <h1 className="font-serif-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#122E1F] leading-[1.15]">
                {t.hero.title}
              </h1>

              {/* Subtitle */}
              <p className="text-sm sm:text-base text-[#2E523A] max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                {t.hero.subtitle}
              </p>

              {/* Hero Action CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Link
                  to={getLocalizedPath("products")}
                  className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-[#1B8044] text-white font-bold text-sm hover:bg-[#146334] transition-all shadow-md flex items-center justify-center gap-2 btn-shimmer"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>{t.hero.ctaProducts}</span>
                </Link>

                <Link
                  to={getLocalizedPath("about")}
                  className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-[#FFFFFF] border border-[#CDE8D5] text-[#122E1F] font-bold text-sm hover:bg-[#E5F4E9] transition-all flex items-center justify-center gap-2 shadow-2xs"
                >
                  <BookOpen className="w-4 h-4 text-[#1B8044]" />
                  <span>{t.hero.ctaAbout}</span>
                </Link>
              </div>
            </div>

            {/* Hero Right Visual Column */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative bg-[#FFFFFF] px-8 py-9 sm:px-10 rounded-3xl border border-[#CDE8D5] card-soft-shadow w-full max-w-[645px] text-center space-y-4">
                <div className="flex items-center justify-center gap-2">
                  <span className="bg-[#E5F4E9] text-[#1B8044] text-xs font-bold px-3 py-1 rounded-full border border-[#CDE8D5]">
                    {t.hero.bottleBadge}
                  </span>
                  <span className="bg-[#1B8044] text-white text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-2xs">
                    {t.hero.handmadeBadge}
                  </span>
                </div>

                <div className="py-2.5 flex justify-center bg-[#F2FAF4] rounded-2xl border border-[#CDE8D5]/80 p-4">
                  <img
                    src={pasutietEnzimuDzerienusImg}
                    alt={t.hero.title}
                    loading="eager"
                    decoding="async"
                    fetchPriority="high"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = '/pasutiet-enzimu-dzerienus.webp';
                    }}
                    className="h-[238px] w-auto object-contain drop-shadow-md scale-105"
                  />
                </div>

                <div className="bg-[#FAF9F5] p-4 rounded-2xl border border-[#CDE8D5] text-left space-y-1">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-sm text-[#122E1F]">{t.hero.naturalProductTitle}</span>
                  </div>
                  <p className="text-xs text-[#2E523A]">{t.hero.naturalProductDesc}</p>
                </div>

                <Link
                  to={getLocalizedPath("products")}
                  className="w-full py-3 rounded-xl bg-[#1B8044] text-white font-bold text-xs hover:bg-[#146334] transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>{t.hero.chooseDrinkBtn}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3 Value Proposition Cards Section */}
      <section className="py-6 md:py-8 bg-[#FAF9F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="bg-[#FFFFFF] p-8 rounded-3xl border border-[#CDE8D5] card-soft-shadow space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#E5F4E9] text-[#1B8044] flex items-center justify-center">
                <Leaf className="w-6 h-6" />
              </div>
              <h3 className="font-serif-title text-xl font-bold text-[#122E1F]">
                {t.hero.feature1Title}
              </h3>
              <p className="text-xs text-[#2E523A] leading-relaxed">
                {t.hero.feature1Desc}
              </p>
            </div>

            <div className="bg-[#FFFFFF] p-8 rounded-3xl border border-[#CDE8D5] card-soft-shadow space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#E5F4E9] text-[#1B8044] flex items-center justify-center">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="font-serif-title text-xl font-bold text-[#122E1F]">
                {t.hero.feature2Title}
              </h3>
              <p className="text-xs text-[#2E523A] leading-relaxed">
                {t.hero.feature2Desc}
              </p>
            </div>

            <div className="bg-[#FFFFFF] p-8 rounded-3xl border border-[#CDE8D5] card-soft-shadow space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#E5F4E9] text-[#1B8044] flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-serif-title text-xl font-bold text-[#122E1F]">
                {t.hero.feature3Title}
              </h3>
              <p className="text-xs text-[#2E523A] leading-relaxed">
                {t.hero.feature3Desc}
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* About Section Preview Teaser */}
      <section className="py-6 md:py-10 bg-[#FAF9F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#FFFFFF] rounded-3xl border border-[#CDE8D5] p-6 sm:p-12 card-soft-shadow">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-7 space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#1B8044]">
                  {t.homeAboutTeaser.badge}
                </span>
                <h2 className="font-serif-title text-3xl font-bold text-[#122E1F]">
                  {t.homeAboutTeaser.title}
                </h2>
                <p className="text-xs sm:text-sm text-[#2E523A] leading-relaxed">
                  {t.homeAboutTeaser.desc}
                </p>
                <div className="space-y-2 pt-2">
                  <div className="flex items-center gap-2.5 text-xs text-[#122E1F] font-semibold">
                    <CheckCircle2 className="w-4 h-4 text-[#1B8044]" />
                    <span>{t.homeAboutTeaser.check1}</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-[#122E1F] font-semibold">
                    <CheckCircle2 className="w-4 h-4 text-[#1B8044]" />
                    <span>{t.homeAboutTeaser.check2}</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-[#122E1F] font-semibold">
                    <CheckCircle2 className="w-4 h-4 text-[#1B8044]" />
                    <span>{t.homeAboutTeaser.check3}</span>
                  </div>
                </div>

                <div className="pt-4">
                  <Link
                    to={getLocalizedPath("about")}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#1B8044] text-white text-xs font-bold hover:bg-[#146334] transition-colors"
                  >
                    <span>{t.homeAboutTeaser.fullArticleBtn}</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5 bg-[#E5F4E9] p-6 rounded-2xl border border-[#CDE8D5] space-y-4">
                <h3 className="font-serif-title text-xl font-bold text-[#122E1F]">
                  {t.homeAboutTeaser.benefitsTitle}
                </h3>
                <div className="space-y-3 text-xs text-[#2E523A]">
                  <p>
                    <strong>{t.homeAboutTeaser.benefit1Title}:</strong> {t.homeAboutTeaser.benefit1Desc}
                  </p>
                  <p>
                    <strong>{t.homeAboutTeaser.benefit2Title}:</strong> {t.homeAboutTeaser.benefit2Desc}
                  </p>
                  <p>
                    <strong>{t.homeAboutTeaser.benefit3Title}:</strong> {t.homeAboutTeaser.benefit3Desc}
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Usage Guide Educational Section */}
      <UsageGuideSection />

      {/* Featured Products E-Shop Showcase */}
      <section className="py-6 md:py-10 bg-[#E5F4E9]/50 border-y border-[#CDE8D5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-8 md:mb-12 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#1B8044]">
                {t.popularSection.tag}
              </span>
              <h2 className="font-serif-title text-3xl sm:text-4xl font-bold text-[#122E1F] mt-1">
                {t.popularSection.title}
              </h2>
            </div>

            <Link
              to={getLocalizedPath("products")}
              className="px-5 py-2.5 rounded-xl bg-[#FFFFFF] border border-[#CDE8D5] text-[#122E1F] text-xs font-bold hover:bg-[#1B8044] hover:text-white transition-colors flex items-center gap-2"
            >
              <span>{t.popularSection.viewAllBtn}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((prod) => (
              <ProductCard
                key={prod.id}
                product={prod}
                onOpenModal={setSelectedProduct}
              />
            ))}
          </div>

        </div>
      </section>

      {/* Services Section Preview */}
      <section className="py-6 md:py-10 bg-[#FAF9F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12 space-y-3 sm:space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1B8044] block">
              {t.servicesPreview.tag}
            </span>
            <h2 className="font-serif-title text-2xl sm:text-3xl font-bold text-[#122E1F] pt-1">
              {t.servicesPreview.title}
            </h2>
          </div>

          {/* Services Horizontal Sliding Carousel (Right to Left - One by One) */}
          <div className="relative overflow-hidden w-full py-4 group px-2 sm:px-4">
            {/* Previous / Next buttons (Desktop only) */}
            <button
              onClick={() => {
                if (currentIndex === 0) {
                  setIsTransitioning(false);
                  setCurrentIndex(servicesData.length);
                  setTimeout(() => {
                    setIsTransitioning(true);
                    setCurrentIndex(servicesData.length - 1);
                  }, 20);
                } else {
                  setIsTransitioning(true);
                  setCurrentIndex((prev) => prev - 1);
                }
              }}
              className="hidden md:flex absolute left-0 sm:left-1 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/95 hover:bg-white border border-[#CDE8D5] items-center justify-center text-[#1B8044] shadow-md transition-all opacity-80 hover:opacity-100"
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => {
                setIsTransitioning(true);
                setCurrentIndex((prev) => prev + 1);
              }}
              className="hidden md:flex absolute right-0 sm:right-1 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/95 hover:bg-white border border-[#CDE8D5] items-center justify-center text-[#1B8044] shadow-md transition-all opacity-80 hover:opacity-100"
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            <div className="overflow-hidden w-full py-3 -my-3 px-1 -mx-1">
              <div
                className={`flex gap-6 ${isTransitioning ? 'transition-transform duration-500 ease-in-out' : ''}`}
                style={{
                  transform: `translateX(${
                    isMobile
                      ? `calc(-${currentIndex} * (100% + 24px))`
                      : `calc(-${currentIndex} * (100% + 24px) / 3)`
                  })`,
                }}
              >
                {extendedServices.map((service, index) => (
                  <div
                    key={`${service.id}-${index}`}
                    className="bg-[#FFFFFF] p-6 sm:p-8 rounded-3xl border border-[#CDE8D5] card-soft-shadow flex flex-col justify-between w-full md:w-[calc((100%-48px)/3)] shrink-0 box-border text-center"
                  >
                    <div className="space-y-3 flex flex-col items-center">
                      <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl bg-[#E5F4E9] overflow-hidden border border-[#CDE8D5] shrink-0 mb-2 shadow-2xs mx-auto">
                        <img
                          src={service.image}
                          alt={service.title}
                          onError={(e) => {
                            if (service.fallbackImage) {
                              (e.currentTarget as HTMLImageElement).src = service.fallbackImage;
                            }
                          }}
                          className={`w-full h-full ${service.id === 3 ? 'object-contain p-1' : 'object-cover'}`}
                        />
                      </div>
                      <h3 className="font-serif-title text-lg font-bold text-[#122E1F] min-h-[52px] flex items-center justify-center text-center">
                        {service.title}
                      </h3>
                      <p className="text-xs text-[#2E523A] leading-relaxed min-h-[48px] text-center">
                        {service.desc}
                      </p>
                    </div>

                    {/* Action Link Button inside each card */}
                    <div className="pt-4 mt-3 border-t border-[#E5F4E9]">
                      <Link
                        to={getLocalizedPath("services")}
                        className="inline-flex items-center justify-between w-full px-4 py-2.5 rounded-xl bg-[#FAF9F5] hover:bg-[#E5F4E9] active:bg-[#E5F4E9] border border-[#CDE8D5] text-xs font-bold text-[#1B8044] transition-colors"
                      >
                        <span>{service.linkText}</span>
                        <ArrowRight className="w-4 h-4 text-[#1B8044]" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center items-center gap-2 mt-6">
              {servicesData.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setIsTransitioning(true);
                    setCurrentIndex(idx);
                  }}
                  aria-label={`Slide ${idx + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentIndex % servicesData.length === idx ? 'w-6 bg-[#1B8044]' : 'w-2 bg-[#CDE8D5]'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="py-6 md:py-10 bg-[#FAF9F5] border-t border-[#CDE8D5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 md:space-y-8">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <h2 className="font-serif-title text-2xl sm:text-4xl font-bold text-[#122E1F]">
              {t.faqsSection.title}
            </h2>
          </div>

          <div className="space-y-3 max-w-3xl mx-auto">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="border border-[#CDE8D5] rounded-2xl overflow-hidden bg-[#FFFFFF] transition-colors card-soft-shadow"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full p-4 sm:p-5 text-left font-bold text-xs sm:text-sm text-[#122E1F] flex items-center justify-between gap-4"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#1B8044] shrink-0 transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-4 sm:px-5 pb-4 pt-1 text-xs sm:text-sm text-[#2E523A] leading-relaxed border-t border-[#CDE8D5]/60 whitespace-pre-line">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Bottom Banner */}
      <section className="py-6 md:py-10 bg-[#1B8044] text-white">
        <div className="max-w-5xl mx-auto px-4 text-center space-y-4 sm:space-y-6">
          <h2 className="font-serif-title text-2xl sm:text-4xl font-bold">
            {t.bottomCta.title}
          </h2>
          <p className="text-xs sm:text-sm text-[#E5F4E9] max-w-xl mx-auto leading-relaxed">
            {t.bottomCta.subtitle}
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <Link
              to={getLocalizedPath("products")}
              className="px-8 py-3.5 rounded-xl bg-[#FAF9F5] text-[#122E1F] font-bold text-xs hover:bg-[#E5F4E9] hover:text-[#1B8044] transition-colors"
            >
              {t.bottomCta.orderBtn}
            </Link>
            <Link
              to={getLocalizedPath("contact")}
              className="px-8 py-3.5 rounded-xl border border-white/40 text-white font-bold text-xs hover:bg-white/10 transition-colors"
            >
              {t.bottomCta.contactBtn}
            </Link>
          </div>
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

export default Home;
