import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import { PRODUCTS } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { ProductModal } from '../components/ProductModal';
import { Product } from '../types';
import { SEOHead } from '../components/SEOHead';
import { BottleGraphic } from '../components/BottleGraphic';
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
  ShoppingBag,
  HelpCircle,
  ChevronDown
} from 'lucide-react';

export const Home: React.FC = () => {
  const { t, getLocalizedPath } = useLanguage();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Top 4 featured drinks
  const featuredProducts = PRODUCTS.slice(0, 4);

  const faqs = [
    {
      q: "Vai enzīmu dzērieni ir veselīgi organismam?",
      a: "Enzīmu dzērieni ir izcili veselīgi, jo tie satur miljoniem dzīvu pienskābo baktēriju (probiotiku), aminoskābes un bio-aktīvus fermentus. Tie dabiskā veidā uzlabo zarnu mikrofloru, veicina uzturvielu uzsūkšanos, stiprina imūnsistēmu un sniedz organismam ilgtspējīgu enerģiju.",
    },
    {
      q: "Vai ar enzīmu dzērieniem var aizvietot veikalos nopērkamos saldinātos dzērienus un limonādes?",
      a: "Jā, enzīmu dzēriens ir lieliska un veselīga alternatīva rūpnieciski ražotajām limonādēm un saldinātajām sulām. Tas sniedz patīkamu, atspirdzinošu un dabiski fermentētu garšu bez kaitīgā cukura, sintētiskām krāsvielām un konservantiem, vienlaikus uzlabojot pašsajūtu un veselību.",
    },
    {
      q: "Kādas ir enzīmu dzērienu galvenās priekšrocības?",
      a: "Enzīmu dzērienu galvenās priekšrocības ir:\n• ATBALSTA GREMOŠANAS SISTĒMU UN VIELMAIŅU\n• STIPRINA IMUNITĀTI UN UZLABO PAŠSAJŪTU\n• DABISKS ATBALSTS AKNĀM, NIERĒM UN CITĀM ĶERMEŅA FUNKCIJĀM\n• NODROŠINA ENERĢIJAS ATJAUNOŠANOS UN DZĪVOTSPĒKU\n• BEZ CUKURA – SALDINĀTS AR MEDU, DABĪGS UN VESELĪGS RISINĀJUMS",
    },
    {
      q: "Kāda ir ieteicamā ikdienas enzīmu dzēriena porcija?",
      a: "Ieteicamā ikdienas porcija ir 50-100 ml 15-20 minūtes pirms ēšanas vai no rīta tukšā dūšā. Dzērienu var dzert tīrā veidā vai atšķaidīt ar vēsu ūdeni. Nav ieteicams jaukt ar karstu ūdeni, kas var sabojāt dzīvās baktērijas.",
    },
    {
      q: "Kādas sastāvdaļas tiek izmantotas enzīmu dzērienu gatavošanā?",
      a: "Mēs iestājamies par 100% naturālu produktu un cilvēka veselību visā tās veselumā. Enzīmu dzērienu gatavošanā izmantojam tikai svaigus augļus un citas dabas veltes, kā arī medu, kas fermentācijas gaitā pilnībā pārvēršas organiskajās skābēs un fermentos.",
    },
    {
      q: "Cik ilgā laikā tiek veikta enzīmu dzērienu piegāde?",
      a: "Piegāde ir atkarīga no tā, vai konkrētais enzīma dzēriens ir pieejams vai nav. Izgatavojam pēc pasūtījuma, kas nozīmē, ka pasūtījums ir gatavs piegādei aptuveni nedēļas laikā pēc pasūtījuma pieteikuma saņemšanas un priekšapmaksas rēķina apmaksas.",
    },
    {
      q: "Kāda ir norēķinu kārtība par enzīmu dzērieniem?",
      a: "Norēķini par enzīmu dzērieniem tiek veikti priekšapmaksas veidā, pamatojoties uz mūsu izsniegto rēķinu.",
    },
  ];

  return (
    <>
      <SEOHead
        title="Dabas Fermentēti Enzīmu Dzērieni"
        description="Svaigi fermentēti bioloģiskie enzīmu dzērieni un eliksīri bez pievienota cukura. 100% dabīgi augļi un dzīvās pienskābās baktērijas."
      />

      {/* Hero Section */}
      <section className="relative pt-6 pb-6 md:pt-16 md:pb-10 overflow-hidden bg-gradient-to-b from-[#FAF9F5] via-[#E5F4E9]/70 to-[#FAF9F5]">
        
        {/* Soft Background Decorative Orbs */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#1B8044]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Hero Left Text Column */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E5F4E9] border border-[#CDE8D5] text-[#1B8044] text-xs font-bold shadow-2xs">
                <Leaf className="w-4 h-4 text-[#1B8044]" />
                <span>{t.hero.badge}</span>
              </div>

              {/* Title */}
              <h1 className="font-serif-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#122E1F] leading-[1.15]">
                Dabas spēks <span className="text-[#1B8044] italic">veselīgai dzīvei</span> katrā enzīmu dzēriena malkā
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
                    Dabas Eliksīrs • 750ml / 500ml Stikla Pudele
                  </span>
                  <span className="bg-[#1B8044] text-white text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-2xs">
                    Handmade
                  </span>
                </div>

                <div className="py-2.5 flex justify-center bg-[#F2FAF4] rounded-2xl border border-[#CDE8D5]/80 p-4">
                  <img
                    src={pasutietEnzimuDzerienusImg}
                    alt="Pasūtiet enzīmu dzērienus"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = '/Pasutiet-enzimu-dzerienus.webp';
                    }}
                    className="h-[238px] w-auto object-contain drop-shadow-md scale-105"
                  />
                </div>

                <div className="bg-[#FAF9F5] p-4 rounded-2xl border border-[#CDE8D5] text-left space-y-1">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-sm text-[#122E1F]">Smiltsērkšķu & Ingvera Enzīms</span>
                    <span className="font-bold text-base text-[#1B8044]">€12.99</span>
                  </div>
                  <p className="text-xs text-[#2E523A]">100% svaigi augļi, pienskābās baktērijas, dabīgais medus raugs.</p>
                </div>

                <Link
                  to={getLocalizedPath("products")}
                  className="w-full py-3 rounded-xl bg-[#1B8044] text-white font-bold text-xs hover:bg-[#146334] transition-colors flex items-center justify-center gap-1.5"
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
      <section className="pt-2 md:pt-24 pb-12 bg-[#FAF9F5]">
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

      {/* Featured Products E-Shop Showcase */}
      <section className="py-10 md:py-20 bg-[#E5F4E9]/50 border-y border-[#CDE8D5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-8 md:mb-12 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#1B8044]">
                E-Veikala Piedāvājums
              </span>
              <h2 className="font-serif-title text-3xl sm:text-4xl font-bold text-[#122E1F] mt-1">
                Populārākie Enzīmu Dzērieni
              </h2>
            </div>

            <Link
              to={getLocalizedPath("products")}
              className="px-5 py-2.5 rounded-xl bg-[#FFFFFF] border border-[#CDE8D5] text-[#122E1F] text-xs font-bold hover:bg-[#1B8044] hover:text-white transition-colors flex items-center gap-2"
            >
              <span>Apskatīt visus produktus</span>
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
      <section className="py-10 md:py-20 bg-[#FAF9F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#FFFFFF] rounded-3xl border border-[#CDE8D5] p-6 sm:p-12 card-soft-shadow">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-7 space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#1B8044]">
                  Kas Ir Enzīmu Dzērieni?
                </span>
                <h2 className="font-serif-title text-3xl font-bold text-[#122E1F]">
                  Dabiski fermentēti bio-aktīvie eliksīri šūnu spēkam
                </h2>
                <p className="text-xs sm:text-sm text-[#2E523A] leading-relaxed">
                  Enzīmu dzērieni ir dabiski fermentēti eliksīri, kas top ilgstošā mikroorganismu un dabas velšu sadarbībā. Tie netiek termiski apstrādāti vai pasterizēti, saglabājot visas dzīvās pienskābās baktērijas, aminoskābes un gremošanas fermentus.
                </p>
                <div className="space-y-2 pt-2">
                  <div className="flex items-center gap-2.5 text-xs text-[#122E1F] font-semibold">
                    <CheckCircle2 className="w-4 h-4 text-[#1B8044]" />
                    <span>Bez pievienota cukura – izmantota tikai augļu dabīgā fruktoze un medus.</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-[#122E1F] font-semibold">
                    <CheckCircle2 className="w-4 h-4 text-[#1B8044]" />
                    <span>100% Svaigi augļi, meža ogas un bioloģiskie ārstniecības augi.</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-[#122E1F] font-semibold">
                    <CheckCircle2 className="w-4 h-4 text-[#1B8044]" />
                    <span>7–14 dienu lēna fermentācija stikla traukos.</span>
                  </div>
                </div>

                <div className="pt-4">
                  <Link
                    to={getLocalizedPath("about")}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#1B8044] text-white text-xs font-bold hover:bg-[#146334] transition-colors"
                  >
                    <span>Lasīt pilnu aprakstu par enzīmu dzērieniem</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5 bg-[#E5F4E9] p-6 rounded-2xl border border-[#CDE8D5] space-y-4">
                <h3 className="font-serif-title text-xl font-bold text-[#122E1F]">
                  Ko sniedz enzīmu dzērieni?
                </h3>
                <div className="space-y-3 text-xs text-[#2E523A]">
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
      <section className="py-10 md:py-20 bg-[#E5F4E9]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1B8044]">
              Mūsu Pakalpojumi
            </span>
            <h2 className="font-serif-title text-2xl sm:text-3xl font-bold text-[#122E1F]">
              Piedāvājam meistarklases, individuālas dāvanas un Mājražošanas komplektu
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-[#FFFFFF] p-6 sm:p-8 rounded-3xl border border-[#CDE8D5] card-soft-shadow flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-[#E5F4E9] overflow-hidden border border-[#CDE8D5] shrink-0 mb-2 shadow-2xs">
                  <img
                    src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=600&q=80"
                    alt={t.servicesSection.service1Title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-serif-title text-lg font-bold text-[#122E1F] min-h-[52px] flex items-center">
                  {t.servicesSection.service1Title}
                </h3>
                <p className="text-xs text-[#2E523A] leading-relaxed min-h-[48px]">
                  {t.servicesSection.service1Desc}
                </p>
              </div>
              <div className="pt-6">
                <Link
                  to={getLocalizedPath("services")}
                  className="text-xs font-bold text-[#1B8044] hover:underline flex items-center gap-1"
                >
                  <span>Plašāk par apmācībām</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="bg-[#FFFFFF] p-8 rounded-3xl border border-[#CDE8D5] card-soft-shadow flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-[#E5F4E9] overflow-hidden border border-[#CDE8D5] shrink-0 mb-2 shadow-2xs">
                  <img
                    src="https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=600&q=80"
                    alt={t.servicesSection.service2Title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-serif-title text-lg font-bold text-[#122E1F] min-h-[52px] flex items-center">
                  {t.servicesSection.service2Title}
                </h3>
                <p className="text-xs text-[#2E523A] leading-relaxed min-h-[48px]">
                  {t.servicesSection.service2Desc}
                </p>
              </div>
              <div className="pt-6">
                <Link
                  to={getLocalizedPath("services")}
                  className="text-xs font-bold text-[#1B8044] hover:underline flex items-center gap-1"
                >
                  <span>Plašāk par pasūtījumiem</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="bg-[#FFFFFF] p-8 rounded-3xl border border-[#CDE8D5] card-soft-shadow flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-[#E5F4E9] overflow-hidden border border-[#CDE8D5] shrink-0 mb-2 shadow-2xs">
                  <img
                    src={startaKomplektsImg}
                    alt={t.servicesSection.service3Title}
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = '/starta-komplekts.webp';
                    }}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-serif-title text-lg font-bold text-[#122E1F] min-h-[52px] flex items-center">
                  {t.servicesSection.service3Title}
                </h3>
                <p className="text-xs text-[#2E523A] leading-relaxed min-h-[48px]">
                  {t.servicesSection.service3Desc}
                </p>
              </div>
              <div className="pt-6">
                <Link
                  to={getLocalizedPath("services")}
                  className="text-xs font-bold text-[#1B8044] hover:underline flex items-center gap-1"
                >
                  <span>Plašāk par pakalpojumiem</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="py-10 md:py-20 bg-[#FAF9F5] border-t border-[#CDE8D5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 md:space-y-8">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1B8044] uppercase tracking-wider">
              <HelpCircle className="w-4 h-4" />
              <span>Biežāk Uzdotie Jautājumi</span>
            </div>
            <h2 className="font-serif-title text-2xl sm:text-4xl font-bold text-[#122E1F]">
              Biežāk uzdotie jautājumi par enzīmu dzērieniem
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
      <section className="py-10 md:py-16 bg-[#1B8044] text-white">
        <div className="max-w-5xl mx-auto px-4 text-center space-y-4 sm:space-y-6">
          <h2 className="font-serif-title text-3xl sm:text-4xl font-bold">
            Sajūti dabas dāvāto spēku un vieglumu jau šodien
          </h2>
          <p className="text-xs sm:text-sm text-[#E5F4E9] max-w-xl mx-auto leading-relaxed">
            Izvēlies kādu no mūsu unikālajiem enzīmu dzērieniem vai izmanto kādu citu no mūsu piedāvātajiem pakalpojumiem
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <Link
              to={getLocalizedPath("products")}
              className="px-8 py-3.5 rounded-xl bg-[#FAF9F5] text-[#122E1F] font-bold text-xs hover:bg-[#E5F4E9] hover:text-[#1B8044] transition-colors"
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
