import React from 'react';
import { Clock, Sun, Utensils, Activity, Droplets, AlertCircle, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

export const UsageGuideSection: React.FC = () => {
  const { t } = useLanguage();
  const guide = t.usageGuide;

  return (
    <section id="ka-un-kad-lietot" className="py-8 sm:py-10 bg-[#FAF9F5]">
      <div className="max-w-5xl mx-auto px-4 space-y-8">
        {/* Header */}
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <h2 className="font-serif-title text-2xl sm:text-4xl font-bold text-[#122E1F]">
            {guide.mainTitle}
          </h2>
          <p className="text-xs sm:text-sm text-[#2E523A] leading-relaxed">
            {guide.mainSubtitle}
          </p>
        </div>

        {/* Grid 1: Kad lietot (When to use) */}
        <div className="space-y-4">
          <h3 className="font-serif-title text-xl font-bold text-[#122E1F] flex items-start gap-2.5">
            <Clock className="w-5 h-5 text-[#1B8044] shrink-0 mt-1" />
            <span>{guide.whenTitle}</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Morning */}
            <div className="bg-[#FFFFFF] p-6 rounded-3xl border border-[#CDE8D5] card-soft-shadow space-y-3 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-[#E5F4E9] flex items-center justify-center text-[#1B8044] border border-[#CDE8D5]">
                  <Sun className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <span className="text-[11px] font-bold text-[#1B8044] uppercase tracking-wider block">
                    {guide.morningBadge}
                  </span>
                  <h4 className="font-serif-title text-base font-bold text-[#122E1F]">
                    {guide.morningTitle}
                  </h4>
                </div>
                <p className="text-xs text-[#2E523A] leading-relaxed">
                  {guide.morningDesc}
                </p>
              </div>
              <div className="pt-2 border-t border-[#CDE8D5]/60 flex items-center gap-1.5 text-[11px] font-bold text-[#122E1F]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#1B8044]" />
                <span>{guide.morningFooter}</span>
              </div>
            </div>

            {/* Before Meals */}
            <div className="bg-[#FFFFFF] p-6 rounded-3xl border border-[#CDE8D5] card-soft-shadow space-y-3 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-[#E5F4E9] flex items-center justify-center text-[#1B8044] border border-[#CDE8D5]">
                  <Utensils className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <span className="text-[11px] font-bold text-[#1B8044] uppercase tracking-wider block">
                    {guide.mealBadge}
                  </span>
                  <h4 className="font-serif-title text-base font-bold text-[#122E1F]">
                    {guide.mealTitle}
                  </h4>
                </div>
                <p className="text-xs text-[#2E523A] leading-relaxed">
                  {guide.mealDesc}
                </p>
              </div>
              <div className="pt-2 border-t border-[#CDE8D5]/60 flex items-center gap-1.5 text-[11px] font-bold text-[#122E1F]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#1B8044]" />
                <span>{guide.mealFooter}</span>
              </div>
            </div>

            {/* After Sport/Meals */}
            <div className="bg-[#FFFFFF] p-6 rounded-3xl border border-[#CDE8D5] card-soft-shadow space-y-3 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-[#E5F4E9] flex items-center justify-center text-[#1B8044] border border-[#CDE8D5]">
                  <Activity className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <span className="text-[11px] font-bold text-[#1B8044] uppercase tracking-wider block">
                    {guide.sportBadge}
                  </span>
                  <h4 className="font-serif-title text-base font-bold text-[#122E1F]">
                    {guide.sportTitle}
                  </h4>
                </div>
                <p className="text-xs text-[#2E523A] leading-relaxed">
                  {guide.sportDesc}
                </p>
              </div>
              <div className="pt-2 border-t border-[#CDE8D5]/60 flex items-center gap-1.5 text-[11px] font-bold text-[#122E1F]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#1B8044]" />
                <span>{guide.sportFooter}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Grid 2: Kā pareizi lietot (How to use & Tips) */}
        <div className="bg-[#FFFFFF] p-6 sm:p-8 rounded-3xl border border-[#CDE8D5] card-soft-shadow space-y-6">
          <h3 className="font-serif-title text-xl font-bold text-[#122E1F] flex items-start gap-2.5">
            <Droplets className="w-5 h-5 text-[#1B8044] shrink-0 mt-1" />
            <span>{guide.rulesTitle}</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-[#FAF9F5] p-4 rounded-2xl border border-[#CDE8D5] space-y-2">
              <span className="text-xs font-bold text-[#1B8044] block">{guide.doseTitle}</span>
              <p className="text-xs text-[#2E523A]">
                {guide.doseDesc}
              </p>
            </div>

            <div className="bg-[#FAF9F5] p-4 rounded-2xl border border-[#CDE8D5] space-y-2">
              <span className="text-xs font-bold text-[#1B8044] block">{guide.waterTitle}</span>
              <p className="text-xs text-[#2E523A]">
                {guide.waterDesc}
              </p>
            </div>

            <div className="bg-[#FAF9F5] p-4 rounded-2xl border border-[#CDE8D5] space-y-2">
              <span className="text-xs font-bold text-[#1B8044] block">{guide.durationTitle}</span>
              <p className="text-xs text-[#2E523A]">
                {guide.durationDesc}
              </p>
            </div>

            <div className="bg-[#FAF9F5] p-4 rounded-2xl border border-[#CDE8D5] space-y-2">
              <span className="text-xs font-bold text-[#1B8044] block">{guide.storageTitle}</span>
              <p className="text-xs text-[#2E523A]">
                {guide.storageDesc}
              </p>
            </div>
          </div>

          {/* Golden Rule Warning */}
          <div className="bg-[#E5F4E9]/80 p-4 sm:p-5 rounded-2xl border border-[#CDE8D5] flex items-start gap-3.5">
            <AlertCircle className="w-5 h-5 text-[#1B8044] shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-[#122E1F] space-y-1">
              <strong className="font-bold block">{guide.importantRuleLabel}</strong>
              <p className="text-[#2E523A] leading-relaxed">
                {guide.importantRuleDesc}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
