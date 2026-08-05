import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { SEOHead } from '../components/SEOHead';
import { Leaf, ShieldCheck, Sparkles, Heart, Check, X as XIcon, HelpCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ParEnzimiem: React.FC = () => {
  const { t, getLocalizedPath } = useLanguage();

  return (
    <>
      <SEOHead
        title={t.aboutSection.title}
        description="Profesionāla informācija par enzīmu dzērieniem, probiotiskajām baktērijām, dabīgo fermentāciju un dabisko sastāvu bez pievienota cukura."
      />

      {/* Header Banner */}
      <section className="pt-12 pb-16 bg-[#E8EFEA]/70 border-b border-[#D3DDD6]">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF9F5] border border-[#D3DDD6] text-[#1E3E2B] text-xs font-bold shadow-2xs">
            <Leaf className="w-4 h-4 text-[#1E3E2B]" />
            <span>Fermentācijas Bio-Zinātne & Daba</span>
          </div>

          <h1 className="font-serif-title text-3xl sm:text-5xl font-bold text-[#19261E]">
            {t.aboutSection.title}
          </h1>

          <p className="text-xs sm:text-sm text-[#485950] max-w-2xl mx-auto leading-relaxed">
            {t.aboutSection.subtitle}
          </p>
        </div>
      </section>

      {/* 4 Detailed Paragraphs Section */}
      <section className="py-16 bg-[#FAF9F5]">
        <div className="max-w-4xl mx-auto px-4 space-y-12">
          
          {/* Paragraph 1 Card */}
          <div className="bg-[#FFFFFF] p-8 sm:p-10 rounded-3xl border border-[#D3DDD6] card-soft-shadow space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#E8EFEA] text-[#1E3E2B] flex items-center justify-center font-bold text-sm">
                01
              </div>
              <h2 className="font-serif-title text-2xl font-bold text-[#19261E]">
                Kas ir enzīmu dzērieni?
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#485950] leading-relaxed">
              {t.aboutSection.paragraph1}
            </p>
          </div>

          {/* Paragraph 2 Card */}
          <div className="bg-[#FFFFFF] p-8 sm:p-10 rounded-3xl border border-[#D3DDD6] card-soft-shadow space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#E8EFEA] text-[#1E3E2B] flex items-center justify-center font-bold text-sm">
                02
              </div>
              <h2 className="font-serif-title text-2xl font-bold text-[#19261E]">
                Kādas ir to labās un vērtīgās īpašības?
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#485950] leading-relaxed">
              {t.aboutSection.paragraph2}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="bg-[#FAF9F5] p-3.5 rounded-2xl border border-[#D3DDD6] text-xs text-[#19261E] flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[#1E3E2B] shrink-0" />
                <span>Stiprina organisma dabiskās aizsargspējas</span>
              </div>
              <div className="bg-[#FAF9F5] p-3.5 rounded-2xl border border-[#D3DDD6] text-xs text-[#19261E] flex items-center gap-2.5">
                <Sparkles className="w-4 h-4 text-[#1E3E2B] shrink-0" />
                <span>Uzlabo barības vielu uzsūkšanos šūnās</span>
              </div>
            </div>
          </div>

          {/* Paragraph 3 Card */}
          <div className="bg-[#FFFFFF] p-8 sm:p-10 rounded-3xl border border-[#D3DDD6] card-soft-shadow space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#E8EFEA] text-[#1E3E2B] flex items-center justify-center font-bold text-sm">
                03
              </div>
              <h2 className="font-serif-title text-2xl font-bold text-[#19261E]">
                Ko dara dzērienā esošās pienskābās baktērijas?
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#485950] leading-relaxed">
              {t.aboutSection.paragraph3}
            </p>

            <div className="bg-[#E8EFEA]/70 p-4 rounded-2xl border border-[#D3DDD6] text-xs text-[#19261E] flex items-start gap-3">
              <Heart className="w-5 h-5 text-[#1E3E2B] shrink-0 mt-0.5" />
              <div>
                <strong>Zinātnisks fakts:</strong> Aptuveni 80% no cilvēka imūnsistēmas un 90% serotonīna (laimes hormona) sintēzes notiek tieši zarnu traktā. Tāpēc dzīvās pienskābās baktērijas ir tiešs ceļš uz veselību un labu garastāvokli.
              </div>
            </div>
          </div>

          {/* Paragraph 4 Card - Raw Fruits & No Sugar */}
          <div className="bg-[#FFFFFF] p-8 sm:p-10 rounded-3xl border border-[#D3DDD6] card-soft-shadow space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#E8EFEA] text-[#1E3E2B] flex items-center justify-center font-bold text-sm">
                04
              </div>
              <h2 className="font-serif-title text-2xl font-bold text-[#19261E]">
                No kā tiek gatavoti mūsu dzērieni? (Bez cukura)
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#485950] leading-relaxed">
              {t.aboutSection.paragraph4}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
              <div className="bg-[#FAF9F5] p-4 rounded-2xl border border-[#D3DDD6] space-y-1">
                <span className="font-bold text-xs text-[#19261E] block">{t.aboutSection.noSugarBadge}</span>
                <p className="text-[11px] text-[#485950]">{t.aboutSection.noSugarDesc}</p>
              </div>

              <div className="bg-[#FAF9F5] p-4 rounded-2xl border border-[#D3DDD6] space-y-1">
                <span className="font-bold text-xs text-[#19261E] block">{t.aboutSection.probioticsBadge}</span>
                <p className="text-[11px] text-[#485950]">{t.aboutSection.probioticsDesc}</p>
              </div>

              <div className="bg-[#FAF9F5] p-4 rounded-2xl border border-[#D3DDD6] space-y-1">
                <span className="font-bold text-xs text-[#19261E] block">{t.aboutSection.naturalFruitBadge}</span>
                <p className="text-[11px] text-[#485950]">{t.aboutSection.naturalFruitDesc}</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Comparison Chart */}
      <section className="py-16 bg-[#E8EFEA]/40 border-t border-[#D3DDD6]">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center space-y-2 mb-10">
            <h2 className="font-serif-title text-2xl sm:text-3xl font-bold text-[#19261E]">
              Kāpēc izvēlēties Enzīmu Dzērienus?
            </h2>
            <p className="text-xs text-[#485950]">
              Salīdzinājums ar citiem ikdienā sastopamajiem dzērieniem
            </p>
          </div>

          <div className="bg-[#FFFFFF] rounded-3xl border border-[#D3DDD6] overflow-hidden shadow-xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="bg-[#E8EFEA] text-[#19261E] font-bold border-b border-[#D3DDD6]">
                    <th className="p-4">Īpašība</th>
                    <th className="p-4 text-center">Rūpnieciskās Sulas / Dzērieni</th>
                    <th className="p-4 text-center bg-[#1E3E2B]/10 text-[#1E3E2B]">
                      Enzimi Bio-Eliksīrs
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#D3DDD6] text-[#485950]">
                  <tr>
                    <td className="p-4 font-bold text-[#19261E]">Pievienots baltais cukurs</td>
                    <td className="p-4 text-center text-red-700">Līdz 30g/pudelē</td>
                    <td className="p-4 text-center font-bold text-[#2A9D8F] bg-[#1E3E2B]/5">0g (Bez cukura)</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-[#19261E]">Termiskā apstrāde (pasterizācija)</td>
                    <td className="p-4 text-center">Jā (nomaigo fermentus)</td>
                    <td className="p-4 text-center font-bold text-[#2A9D8F] bg-[#1E3E2B]/5">Nē (100% Neapstrādāts)</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-[#19261E]">Dzīvās pienskābās baktērijas</td>
                    <td className="p-4 text-center text-red-700">Nav</td>
                    <td className="p-4 text-center font-bold text-[#2A9D8F] bg-[#1E3E2B]/5">Miljoniem probiotiku</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-[#19261E]">Svaigi augļi un meža ogas</td>
                    <td className="p-4 text-center">Bieži koncenterāti</td>
                    <td className="p-4 text-center font-bold text-[#2A9D8F] bg-[#1E3E2B]/5">100% Svaigi augļi</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="pt-10 text-center">
            <Link
              to={getLocalizedPath("products")}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#1E3E2B] text-white font-bold text-xs hover:bg-[#142B1E] transition-all shadow-xs"
            >
              <span>Izvēlēties savu dzērienu e-veikalā</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>
    </>
  );
};

export default ParEnzimiem;
