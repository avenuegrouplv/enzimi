import React, { useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { SEOHead } from '../components/SEOHead';
import { Sparkles, Check, ArrowRight, BookOpen, Users, Package, Send } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Pakalpojumi: React.FC = () => {
  const { t, getLocalizedPath } = useLanguage();
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [inquirySent, setInquirySent] = useState(false);

  const services = [
    {
      id: 'meistarklases',
      title: t.servicesSection.service1Title,
      desc: t.servicesSection.service1Desc,
      icon: Users,
      details: t.servicesSection.service1Details,
      priceNote: 'No €35.00 / personai',
    },
    {
      id: 'korporativie',
      title: t.servicesSection.service2Title,
      desc: t.servicesSection.service2Desc,
      icon: Sparkles,
      details: t.servicesSection.service2Details,
      priceNote: 'Individuāls aprēķins',
    },
    {
      id: 'komplekti',
      title: t.servicesSection.service3Title,
      desc: t.servicesSection.service3Desc,
      icon: Package,
      details: t.servicesSection.service3Details,
      priceNote: '750 EUR',
    },
  ];

  return (
    <>
      <SEOHead
        title="Pakalpojumi un Komplekti"
        description="Mājas ražošanas meistarklases, fermentācijas starteru komplekti un korporatīvie pasūtījumi no Enzimi."
      />

      {/* Header Banner */}
      <section className="pt-12 pb-16 bg-[#E8EFEA]/70 border-b border-[#D3DDD6]">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF9F5] border border-[#D3DDD6] text-[#1E3E2B] text-xs font-bold shadow-2xs">
            <Sparkles className="w-4 h-4 text-[#1E3E2B]" />
            <span>Fermentācijas Māksla Tavu Rokās</span>
          </div>

          <h1 className="font-serif-title text-3xl sm:text-5xl font-bold text-[#19261E]">
            {t.servicesSection.title}
          </h1>

          <p className="text-xs sm:text-sm text-[#485950] max-w-2xl mx-auto leading-relaxed">
            {t.servicesSection.subtitle}
          </p>
        </div>
      </section>

      {/* Main Services Cards */}
      <section className="py-16 bg-[#FAF9F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((s) => {
              const IconComp = s.icon;
              return (
                <div
                  key={s.id}
                  className="bg-[#FFFFFF] p-8 rounded-3xl border border-[#D3DDD6] card-soft-shadow flex flex-col justify-between space-y-6"
                >
                  <div className="space-y-4">
                    <div className="w-14 h-14 rounded-2xl bg-[#E8EFEA] text-[#1E3E2B] flex items-center justify-center">
                      <IconComp className="w-7 h-7" />
                    </div>

                    <div>
                      <span className="text-[11px] font-bold text-[#1E3E2B] bg-[#E8EFEA] px-3 py-1 rounded-full border border-[#D3DDD6] inline-block mb-2">
                        {s.priceNote}
                      </span>
                      <h3 className="font-serif-title text-2xl font-bold text-[#19261E] leading-snug">
                        {s.title}
                      </h3>
                    </div>

                    <p className="text-xs text-[#485950] leading-relaxed">
                      {s.desc}
                    </p>

                    <div className="pt-2 border-t border-[#D3DDD6] space-y-2">
                      <span className="text-[11px] font-bold text-[#19261E] uppercase tracking-wider block">
                        Kas ietverts:
                      </span>
                      <ul className="space-y-2 text-xs text-[#485950]">
                        {s.details.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <Check className="w-4 h-4 text-[#1E3E2B] shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      setSelectedService(s.title);
                      setInquirySent(false);
                    }}
                    className="w-full py-3 rounded-xl bg-[#1E3E2B] text-white font-bold text-xs hover:bg-[#142B1E] transition-all shadow-xs flex items-center justify-center gap-2"
                  >
                    <span>{t.servicesSection.inquireBtn}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              );
            })}
          </div>

          {/* Service Inquiry Form Modal */}
          {selectedService && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs animate-in fade-in duration-200">
              <div className="relative w-full max-w-lg bg-[#FAF9F5] rounded-3xl border border-[#D3DDD6] shadow-2xl p-6 sm:p-8">
                <button
                  onClick={() => setSelectedService(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-[#E8EFEA] text-[#19261E]"
                >
                  ✕
                </button>

                {inquirySent ? (
                  <div className="py-8 text-center space-y-3">
                    <div className="w-12 h-12 rounded-full bg-[#2A9D8F]/20 text-[#2A9D8F] flex items-center justify-center mx-auto">
                      ✓
                    </div>
                    <h3 className="font-serif-title text-xl font-bold text-[#19261E]">
                      Pieteikums saņemts!
                    </h3>
                    <p className="text-xs text-[#485950]">
                      Mēs ar jums sazināsimies 24 stundu laikā, lai saskaņotu detaļas par pakalpojumu <strong>{selectedService}</strong>.
                    </p>
                    <button
                      onClick={() => setSelectedService(null)}
                      className="px-6 py-2.5 rounded-xl bg-[#1E3E2B] text-white font-bold text-xs"
                    >
                      Aizvērt
                    </button>
                  </div>
                ) : (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setInquirySent(true);
                    }}
                    className="space-y-4"
                  >
                    <div>
                      <span className="text-xs font-bold text-[#1E3E2B] uppercase tracking-wider block">
                        Pieteikums pakalpojumam
                      </span>
                      <h3 className="font-serif-title text-xl font-bold text-[#19261E]">
                        {selectedService}
                      </h3>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#19261E] mb-1">Jūsu Vārds *</label>
                      <input
                        type="text"
                        required
                        placeholder="Jānis Bērziņš"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#D3DDD6] text-xs text-[#19261E]"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-bold text-[#19261E] mb-1">E-pasts *</label>
                        <input
                          type="email"
                          required
                          placeholder="janis@paraugs.lv"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#D3DDD6] text-xs text-[#19261E]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-[#19261E] mb-1">Tālrunis *</label>
                        <input
                          type="tel"
                          required
                          placeholder="+371 20000000"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#D3DDD6] text-xs text-[#19261E]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#19261E] mb-1">Ziņa / Vēlmes</label>
                      <textarea
                        rows={3}
                        placeholder="Norādiet vēlamo datumu, personu skaitu vai pasūtījuma apjomu..."
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#D3DDD6] text-xs text-[#19261E] resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 rounded-xl bg-[#1E3E2B] text-white font-bold text-xs hover:bg-[#142B1E]"
                    >
                      Nosūtīt pieteikumu
                    </button>
                  </form>
                )}
              </div>
            </div>
          )}

        </div>
      </section>
    </>
  );
};

export default Pakalpojumi;
