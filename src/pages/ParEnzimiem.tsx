import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { SEOHead } from '../components/SEOHead';
import { Leaf, ShieldCheck, Sparkles, Heart, Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { UsageGuideSection } from '../components/UsageGuideSection';

export const ParEnzimiem: React.FC = () => {
  const { t, getLocalizedPath } = useLanguage();
  const about = t.aboutSection;

  return (
    <>
      <SEOHead
        title={about.title}
        description={about.paragraph1}
      />

      {/* Header Banner */}
      <section className="pt-8 pb-10 sm:pt-12 sm:pb-16 bg-[#E5F4E9]/70 border-b border-[#CDE8D5]">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF9F5] border border-[#CDE8D5] text-[#1B8044] text-xs font-bold shadow-2xs">
            <Leaf className="w-4 h-4 text-[#1B8044]" />
            <span>{about.badge}</span>
          </div>

          <h1 className="font-serif-title text-3xl sm:text-5xl font-bold text-[#122E1F]">
            {about.title}
          </h1>

          <p className="text-sm sm:text-base font-bold text-[#1B8044] uppercase tracking-wider">
            {about.subtitle}
          </p>
        </div>
      </section>

      {/* 4 Detailed Paragraphs Section */}
      <section className="py-8 sm:py-16 bg-[#FAF9F5]">
        <div className="max-w-4xl mx-auto px-4 space-y-6 sm:space-y-12">
          
          {/* Paragraph 1 Card */}
          <div className="bg-[#FFFFFF] p-8 sm:p-10 rounded-3xl border border-[#CDE8D5] card-soft-shadow space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#E5F4E9] text-[#1B8044] flex items-center justify-center font-bold text-sm">
                01
              </div>
              <h2 className="font-serif-title text-2xl font-bold text-[#122E1F]">
                {t.homeAboutTeaser.badge}
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#2E523A] leading-relaxed">
              {about.paragraph1}
            </p>
          </div>

          {/* Main Benefits Highlights */}
          <div className="bg-[#FFFFFF] p-8 sm:p-10 rounded-3xl border border-[#CDE8D5] card-soft-shadow space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#E5F4E9] text-[#1B8044] flex items-center justify-center font-bold text-sm shrink-0">
                02
              </div>
              <h2 className="font-serif-title text-xl sm:text-2xl font-bold tracking-tight text-[#122E1F]">
                {about.benefitsSectionTitle}
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#2E523A] leading-relaxed">
              {about.benefitsIntro}
            </p>
            <div className="grid grid-cols-1 gap-3 pt-2">
              {about.benefitItems.map((benefit, idx) => (
                <div key={idx} className="bg-[#FAF9F5] p-4 rounded-2xl border border-[#CDE8D5] text-xs sm:text-sm font-bold text-[#122E1F] flex items-center gap-3">
                  <Check className="w-5 h-5 text-[#1B8044] shrink-0" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Paragraph 2 Card */}
          <div className="bg-[#FFFFFF] p-8 sm:p-10 rounded-3xl border border-[#CDE8D5] card-soft-shadow space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#E5F4E9] text-[#1B8044] flex items-center justify-center font-bold text-sm">
                03
              </div>
              <h2 className="font-serif-title text-2xl font-bold text-[#122E1F]">
                {about.qualitiesTitle}
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#2E523A] leading-relaxed">
              {about.paragraph2}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="bg-[#FAF9F5] p-3.5 rounded-2xl border border-[#CDE8D5] text-xs text-[#122E1F] flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[#1B8044] shrink-0" />
                <span>{about.quality1}</span>
              </div>
              <div className="bg-[#FAF9F5] p-3.5 rounded-2xl border border-[#CDE8D5] text-xs text-[#122E1F] flex items-center gap-2.5">
                <Sparkles className="w-4 h-4 text-[#1B8044] shrink-0" />
                <span>{about.quality2}</span>
              </div>
            </div>
          </div>

          {/* Paragraph 3 Card */}
          <div className="bg-[#FFFFFF] p-8 sm:p-10 rounded-3xl border border-[#CDE8D5] card-soft-shadow space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#E5F4E9] text-[#1B8044] flex items-center justify-center font-bold text-sm">
                04
              </div>
              <h2 className="font-serif-title text-2xl font-bold text-[#122E1F]">
                {about.bacteriaRoleTitle}
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#2E523A] leading-relaxed">
              {about.paragraph3}
            </p>

            <div className="bg-[#E5F4E9]/70 p-4 rounded-2xl border border-[#CDE8D5] text-xs text-[#122E1F] flex items-start gap-3">
              <Heart className="w-5 h-5 text-[#1B8044] shrink-0 mt-0.5" />
              <div>
                <strong>{about.scientificFactLabel}</strong> {about.scientificFactText}
              </div>
            </div>
          </div>

          {/* Paragraph 4 Card - Raw Fruits & No Sugar */}
          <div className="bg-[#FFFFFF] p-8 sm:p-10 rounded-3xl border border-[#CDE8D5] card-soft-shadow space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#E5F4E9] text-[#1B8044] flex items-center justify-center font-bold text-sm">
                05
              </div>
              <h2 className="font-serif-title text-2xl font-bold text-[#122E1F]">
                {about.ingredientsTitle}
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#2E523A] leading-relaxed">
              {about.paragraph4}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
              <div className="bg-[#FAF9F5] p-4 rounded-2xl border border-[#CDE8D5] space-y-1">
                <span className="font-bold text-xs text-[#122E1F] block">{about.noSugarBadge}</span>
                <p className="text-[11px] text-[#2E523A]">{about.noSugarDesc}</p>
              </div>

              <div className="bg-[#FAF9F5] p-4 rounded-2xl border border-[#CDE8D5] space-y-1">
                <span className="font-bold text-xs text-[#122E1F] block">{about.probioticsBadge}</span>
                <p className="text-[11px] text-[#2E523A]">{about.probioticsDesc}</p>
              </div>

              <div className="bg-[#FAF9F5] p-4 rounded-2xl border border-[#CDE8D5] space-y-1">
                <span className="font-bold text-xs text-[#122E1F] block">{about.naturalFruitBadge}</span>
                <p className="text-[11px] text-[#2E523A]">{about.naturalFruitDesc}</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Usage Guide Educational Section */}
      <UsageGuideSection />

      {/* Comparison Chart */}
      <section className="py-16 bg-[#E5F4E9]/40 border-t border-[#CDE8D5]">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center space-y-2 mb-10">
            <h2 className="font-serif-title text-2xl sm:text-3xl font-bold text-[#122E1F]">
              {about.comparisonTitle}
            </h2>
            <p className="text-xs text-[#2E523A]">
              {about.comparisonSubtitle}
            </p>
          </div>

          <div className="bg-[#FFFFFF] rounded-3xl border border-[#CDE8D5] overflow-hidden shadow-xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="bg-[#E5F4E9] text-[#122E1F] font-bold border-b border-[#CDE8D5]">
                    <th className="p-4">{about.tableHeaders.feature}</th>
                    <th className="p-4 text-center">{about.tableHeaders.commercial}</th>
                    <th className="p-4 text-center bg-[#1B8044]/10 text-[#1B8044]">
                      {about.tableHeaders.enzymes}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#CDE8D5] text-[#2E523A]">
                  {about.tableRows.map((row, idx) => (
                    <tr key={idx}>
                      <td className="p-4 font-bold text-[#122E1F]">{row.feature}</td>
                      <td className="p-4 text-center text-red-700">{row.commercial}</td>
                      <td className="p-4 text-center font-bold text-[#16A34A] bg-[#1B8044]/5">{row.enzymes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="pt-10 text-center">
            <Link
              to={getLocalizedPath("products")}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#1B8044] text-white font-bold text-xs hover:bg-[#146334] transition-all shadow-xs"
            >
              <span>{about.chooseDrinkCta}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>
    </>
  );
};

export default ParEnzimiem;
