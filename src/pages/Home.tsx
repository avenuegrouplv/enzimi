import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import { PRODUCTS } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { ProductModal } from '../components/ProductModal';
import { Product } from '../types';
import { SEOHead } from '../components/SEOHead';
import { BottleGraphic } from '../components/BottleGraphic';
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
  ShoppingBag
} from 'lucide-react';

export const Home: React.FC = () => {
  const { t, getLocalizedPath } = useLanguage();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Top 4 featured drinks
  const featuredProducts = PRODUCTS.slice(0, 4);

  return (
    <>
      <SEOHead
        title="Dabas Fermentēti Enzīmu Dzērieni"
        description="Svaigi fermentēti bioloģiskie enzīmu dzērieni un eliksīri bez pievienota cukura. 100% dabīgi augļi un dzīvās pienskābās baktērijas."
      />

      {/* Hero Section */}
      <section className="relative pt-12 pb-20 md:pt-16 md:pb-28 overflow-hidden bg-gradient-to-b from-[#FAF9F5] via-[#E8EFEA]/70 to-[#FAF9F5]">
        
        {/* Soft Background Decorative Orbs */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#1E3E2B]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Hero Left Text Column */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8EFEA] border border-[#D3DDD6] text-[#1E3E2B] text-xs font-bold shadow-2xs">
                <Leaf className="w-4 h-4 text-[#1E3E2B]" />
                <span>{t.hero.badge}</span>
              </div>

              {/* Title */}
              <h1 className="font-serif-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#19261E] leading-[1.15]">
                Dabas spēks un <span className="text-[#1E3E2B] italic">dzīvīgums</span> katrā enzīmu dzēriena malkā
              </h1>

              {/* Subtitle */}
              <p className="text-sm sm:text-base text-[#485950] max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                {t.hero.subtitle}
              </p>

              {/* Hero Action CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Link
                  to={getLocalizedPath("products")}
                  className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-[#1E3E2B] text-white font-bold text-sm hover:bg-[#142B1E] transition-all shadow-md flex items-center justify-center gap-2 btn-shimmer"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>{t.hero.ctaProducts}</span>
                </Link>

                <Link
                  to={getLocalizedPath("about")}
                  className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-[#FFFFFF] border border-[#D3DDD6] text-[#19261E] font-bold text-sm hover:bg-[#E8EFEA] transition-all flex items-center justify-center gap-2 shadow-2xs"
                >
                  <BookOpen className="w-4 h-4 text-[#1E3E2B]" />
                  <span>{t.hero.ctaAbout}</span>
                </Link>
              </div>
            </div>

            {/* Hero Right Visual Column */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative bg-[#FFFFFF] p-8 rounded-3xl border border-[#D3DDD6] card-soft-shadow w-full max-w-md text-center space-y-4">
                <div className="inline-block bg-[#E8EFEA] text-[#1E3E2B] text-xs font-bold px-3 py-1 rounded-full border border-[#D3DDD6]">
                  Dabas Eliksīrs • 750ml Stikla Pudele
                </div>

                <div className="py-2 flex justify-center">
                  <BottleGraphic
                    colorGradient="from-[#F4A261] to-[#E76F51]"
                    bottleAccent="#E76F51"
                    subName="Dzīvās Probiotikas"
                    size="lg"
                  />
                </div>

                <div className="bg-[#FAF9F5] p-4 rounded-2xl border border-[#D3DDD6] text-left space-y-1">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-sm text-[#19261E]">Smiltsērkšķu & Ingvera Enzīms</span>
                    <span className="font-bold text-base text-[#1E3E2B]">€12.99</span>
                  </div>
                  <p className="text-xs text-[#485950]">100% svaigi augļi, pienskābās baktērijas, dabīgais medus raugs.</p>
                </div>

                <Link
                  to={getLocalizedPath("products")}
                  className="w-full py-3 rounded-xl bg-[#1E3E2B] text-white font-bold text-xs hover:bg-[#142B1E] transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>Izvēlēties savu dzērienu</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3 Value Proposition Cards Section */}
      <section className="py-16 bg-[#FAF9F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="bg-[#FFFFFF] p-8 rounded-3xl border border-[#D3DDD6] card-soft-shadow space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#E8EFEA] text-[#1E3E2B] flex items-center justify-center">
                <Leaf className="w-6 h-6" />
              </div>
              <h3 className="font-serif-title text-xl font-bold text-[#19261E]">
                {t.hero.feature1Title}
              </h3>
              <p className="text-xs text-[#485950] leading-relaxed">
                {t.hero.feature1Desc}
              </p>
            </div>

            <div className="bg-[#FFFFFF] p-8 rounded-3xl border border-[#D3DDD6] card-soft-shadow space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#E8EFEA] text-[#1E3E2B] flex items-center justify-center">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="font-serif-title text-xl font-bold text-[#19261E]">
                {t.hero.feature2Title}
              </h3>
              <p className="text-xs text-[#485950] leading-relaxed">
                {t.hero.feature2Desc}
              </p>
            </div>

            <div className="bg-[#FFFFFF] p-8 rounded-3xl border border-[#D3DDD6] card-soft-shadow space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#E8EFEA] text-[#1E3E2B] flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-serif-title text-xl font-bold text-[#19261E]">
                {t.hero.feature3Title}
              </h3>
              <p className="text-xs text-[#485950] leading-relaxed">
                {t.hero.feature3Desc}
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Featured Products E-Shop Showcase */}
      <section className="py-20 bg-[#E8EFEA]/50 border-y border-[#D3DDD6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#1E3E2B]">
                E-Veikala Piedāvājums
              </span>
              <h2 className="font-serif-title text-3xl sm:text-4xl font-bold text-[#19261E] mt-1">
                Populārākie Enzīmu Dzērieni
              </h2>
              <p className="text-xs text-[#485950] mt-1">
                Visi dzērieni pildīti 750ml stikla pudelēs.
              </p>
            </div>

            <Link
              to={getLocalizedPath("products")}
              className="px-5 py-2.5 rounded-xl bg-[#FFFFFF] border border-[#D3DDD6] text-[#19261E] text-xs font-bold hover:bg-[#1E3E2B] hover:text-white transition-colors flex items-center gap-2"
            >
              <span>Apskatīt visus 10 produktus</span>
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

      {/* About Section Preview Teaser */}
      <section className="py-20 bg-[#FAF9F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#FFFFFF] rounded-3xl border border-[#D3DDD6] p-8 sm:p-12 card-soft-shadow">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-7 space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#1E3E2B]">
                  Kas Ir Enzīmu Dzērieni?
                </span>
                <h2 className="font-serif-title text-3xl font-bold text-[#19261E]">
                  Dabiski fermentēti bio-aktīvie eliksīri šūnu spēkam
                </h2>
                <p className="text-xs sm:text-sm text-[#485950] leading-relaxed">
                  Enzīmu dzērieni ir dabiski fermentēti eliksīri, kas top ilgstošā mikroorganismu un dabas velšu sadarbībā. Tie netiek termiski apstrādāti vai pasterizēti, saglabājot visas dzīvās pienskābās baktērijas, aminoskābes un gremošanas fermentus.
                </p>
                <div className="space-y-2 pt-2">
                  <div className="flex items-center gap-2.5 text-xs text-[#19261E] font-semibold">
                    <CheckCircle2 className="w-4 h-4 text-[#1E3E2B]" />
                    <span>Bez pievienota cukura – izmantota tikai augļu dabīgā fruktoze un medus.</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-[#19261E] font-semibold">
                    <CheckCircle2 className="w-4 h-4 text-[#1E3E2B]" />
                    <span>100% Svaigi augļi, meža ogas un bioloģiskie ārstniecības augi.</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-[#19261E] font-semibold">
                    <CheckCircle2 className="w-4 h-4 text-[#1E3E2B]" />
                    <span>7–14 dienu lēna fermentācija stikla traukos.</span>
                  </div>
                </div>

                <div className="pt-4">
                  <Link
                    to={getLocalizedPath("about")}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#1E3E2B] text-white text-xs font-bold hover:bg-[#142B1E] transition-colors"
                  >
                    <span>Lasīt pilnu aprakstu par enzīmu dzērieniem</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5 bg-[#E8EFEA] p-6 rounded-2xl border border-[#D3DDD6] space-y-4">
                <h3 className="font-serif-title text-xl font-bold text-[#19261E]">
                  Ko sniedz enzīmu dzērieni?
                </h3>
                <div className="space-y-3 text-xs text-[#485950]">
                  <p>
                    <strong>Gremošanas atbalsts:</strong> Dabīgie fermenti palīdz sašķelt uzturvielas un mazina smaguma sajūtu.
                  </p>
                  <p>
                    <strong>Imunitātes stiprināšana:</strong> Zarnu mikroflorā atrodas 80% imūnšūnu, ko spēcina dzīvās baktērijas.
                  </p>
                  <p>
                    <strong>Dabiska enerģija:</strong> Bez kofeīna un cukura straujām svārstībām.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Services Section Preview */}
      <section className="py-20 bg-[#E8EFEA]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1E3E2B]">
              Mūsu Pakalpojumi
            </span>
            <h2 className="font-serif-title text-3xl sm:text-4xl font-bold text-[#19261E]">
              Sava dzēriena ražošana & komplekti
            </h2>
            <p className="text-xs text-[#485950]">
              Piedāvājam meistarklases, individuālās receptūras un gatavos ražošanas starteru komplektus.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#FFFFFF] p-8 rounded-3xl border border-[#D3DDD6] card-soft-shadow flex flex-col justify-between">
              <div className="space-y-3">
                <h3 className="font-serif-title text-lg font-bold text-[#19261E]">
                  {t.servicesSection.service1Title}
                </h3>
                <p className="text-xs text-[#485950] leading-relaxed">
                  {t.servicesSection.service1Desc}
                </p>
              </div>
              <div className="pt-6">
                <Link
                  to={getLocalizedPath("services")}
                  className="text-xs font-bold text-[#1E3E2B] hover:underline flex items-center gap-1"
                >
                  <span>Plašāk par apmācībām</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="bg-[#FFFFFF] p-8 rounded-3xl border border-[#D3DDD6] card-soft-shadow flex flex-col justify-between">
              <div className="space-y-3">
                <h3 className="font-serif-title text-lg font-bold text-[#19261E]">
                  {t.servicesSection.service2Title}
                </h3>
                <p className="text-xs text-[#485950] leading-relaxed">
                  {t.servicesSection.service2Desc}
                </p>
              </div>
              <div className="pt-6">
                <Link
                  to={getLocalizedPath("services")}
                  className="text-xs font-bold text-[#1E3E2B] hover:underline flex items-center gap-1"
                >
                  <span>Plašāk par pasūtījumiem</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="bg-[#FFFFFF] p-8 rounded-3xl border border-[#D3DDD6] card-soft-shadow flex flex-col justify-between">
              <div className="space-y-3">
                <h3 className="font-serif-title text-lg font-bold text-[#19261E]">
                  {t.servicesSection.service3Title}
                </h3>
                <p className="text-xs text-[#485950] leading-relaxed">
                  {t.servicesSection.service3Desc}
                </p>
              </div>
              <div className="pt-6">
                <Link
                  to={getLocalizedPath("services")}
                  className="text-xs font-bold text-[#1E3E2B] hover:underline flex items-center gap-1"
                >
                  <span>Apskatīt komplektus</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Bottom Banner */}
      <section className="py-16 bg-[#1E3E2B] text-white">
        <div className="max-w-5xl mx-auto px-4 text-center space-y-6">
          <h2 className="font-serif-title text-3xl sm:text-4xl font-bold">
            Sajūti dabas dāvāto spēku un vieglumu jau šodien
          </h2>
          <p className="text-xs sm:text-sm text-[#E8EFEA] max-w-xl mx-auto leading-relaxed">
            Izvēlies kādu no mūsu 10 unikālajiem enzīmu dzērieniem vai pasūti savu sākotnējo ražošanas komplektu mājas apstākļiem.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <Link
              to={getLocalizedPath("products")}
              className="px-8 py-3.5 rounded-xl bg-[#FAF9F5] text-[#19261E] font-bold text-xs hover:bg-[#E8EFEA] hover:text-[#1E3E2B] transition-colors"
            >
              Pasūtīt e-veikalā
            </Link>
            <Link
              to={getLocalizedPath("contact")}
              className="px-8 py-3.5 rounded-xl border border-white/40 text-white font-bold text-xs hover:bg-white/10 transition-colors"
            >
              Sazināties ar mums
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
