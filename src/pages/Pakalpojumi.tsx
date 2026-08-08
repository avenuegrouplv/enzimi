import React, { useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { SEOHead } from '../components/SEOHead';
import { Sparkles, Check, ArrowRight, BookOpen, Users, Package, Send } from 'lucide-react';
import { Link } from 'react-router-dom';
import startaKomplektsImg from '../assets/starta-komplekts.webp';

export const Pakalpojumi: React.FC = () => {
  const { t, getLocalizedPath } = useLanguage();
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [inquirySent, setInquirySent] = useState(false);

  const serviceImages: Record<string, string> = {
    komplekti: startaKomplektsImg,
    meistarklases: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=600&q=80',
    korporativie: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=600&q=80',
  };

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
        title="Pakalpojumi"
        description="Mājas ražošanas meistarklases, fermentācijas konsultācijas un korporatīvie pasūtījumi no Enzimi."
      />

      {/* Header Banner */}
      <section className="pt-8 pb-10 sm:pt-12 sm:pb-16 bg-[#E5F4E9]/70 border-b border-[#CDE8D5]">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF9F5] border border-[#CDE8D5] text-[#1B8044] text-xs font-bold shadow-2xs">
            <Sparkles className="w-4 h-4 text-[#1B8044]" />
            <span>Fermentācijas Māksla Tavās rokās</span>
          </div>

          <h1 className="font-serif-title text-3xl sm:text-5xl font-bold text-[#122E1F]">
            {t.servicesSection.title}
          </h1>

          <p className="text-xs sm:text-sm text-[#2E523A] max-w-2xl mx-auto leading-relaxed">
            Atbalsts enzīmu ražošanai mājas apstākļos
          </p>
        </div>
      </section>

      {/* Main Services Cards */}
      <section className="py-8 sm:py-16 bg-[#FAF9F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((s) => {
              const IconComp = s.icon;
              return (
                <div
                  key={s.id}
                  className="bg-[#FFFFFF] p-8 rounded-3xl border border-[#CDE8D5] card-soft-shadow flex flex-col justify-between space-y-6"
                >
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-[#E5F4E9] text-[#1B8044] flex items-center justify-center shrink-0 overflow-hidden border border-[#CDE8D5] shadow-2xs">
                        {serviceImages[s.id] ? (
                          <img
                            src={serviceImages[s.id]}
                            alt={s.title}
                            onError={(e) => {
                              if (s.id === 'komplekti') {
                                (e.currentTarget as HTMLImageElement).src = '/starta-komplekts.webp';
                              }
                            }}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <IconComp className="w-8 h-8" />
                        )}
                      </div>
                      <div className="flex-1 min-w-0 flex flex-col justify-center min-h-[80px] sm:min-h-[96px]">
                        <div className="mb-1">
                          <span className="text-[11px] font-bold text-[#1B8044] bg-[#E5F4E9] px-3 py-1 rounded-full border border-[#CDE8D5] inline-block">
                            {s.priceNote}
                          </span>
                        </div>
                        <h3 className="font-serif-title text-base sm:text-lg font-bold text-[#122E1F] leading-snug">
                          {s.title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-xs text-[#2E523A] leading-relaxed min-h-[48px]">
                      {s.desc}
                    </p>

                    <div className="pt-2 border-t border-[#CDE8D5] space-y-2">
                      <span className="text-[11px] font-bold text-[#122E1F] uppercase tracking-wider block">
                        Kas ietverts:
                      </span>
                      <ul className="space-y-2 text-xs text-[#2E523A]">
                        {s.details.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <Check className="w-4 h-4 text-[#1B8044] shrink-0 mt-0.5" />
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
                    className="w-full py-3 rounded-xl bg-[#1B8044] text-white font-bold text-xs hover:bg-[#146334] transition-all shadow-xs flex items-center justify-center gap-2"
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
              <div className="relative w-full max-w-lg bg-[#FAF9F5] rounded-3xl border border-[#CDE8D5] shadow-2xl p-6 sm:p-8">
                <button
                  onClick={() => setSelectedService(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-[#E5F4E9] text-[#122E1F]"
                >
                  ✕
                </button>

                {inquirySent ? (
                  <div className="py-8 text-center space-y-3">
                    <div className="w-12 h-12 rounded-full bg-[#16A34A]/20 text-[#16A34A] flex items-center justify-center mx-auto">
                      ✓
                    </div>
                    <h3 className="font-serif-title text-xl font-bold text-[#122E1F]">
                      Pieteikums saņemts!
                    </h3>
                    <p className="text-xs text-[#2E523A]">
                      Mēs ar jums sazināsimies 24 stundu laikā, lai saskaņotu detaļas par pakalpojumu <strong>{selectedService}</strong>.
                    </p>
                    <button
                      onClick={() => setSelectedService(null)}
                      className="px-6 py-2.5 rounded-xl bg-[#1B8044] text-white font-bold text-xs"
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
                      <span className="text-xs font-bold text-[#1B8044] uppercase tracking-wider block">
                        Pieteikums pakalpojumam
                      </span>
                      <h3 className="font-serif-title text-xl font-bold text-[#122E1F]">
                        {selectedService}
                      </h3>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#122E1F] mb-1">Jūsu Vārds *</label>
                      <input
                        type="text"
                        required
                        placeholder="Jānis Bērziņš"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#CDE8D5] text-xs text-[#122E1F]"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-bold text-[#122E1F] mb-1">E-pasts *</label>
                        <input
                          type="email"
                          required
                          placeholder="janis@paraugs.lv"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#CDE8D5] text-xs text-[#122E1F]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-[#122E1F] mb-1">Tālrunis *</label>
                        <input
                          type="tel"
                          required
                          placeholder="+371 20000000"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#CDE8D5] text-xs text-[#122E1F]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#122E1F] mb-1">Ziņa / Vēlmes</label>
                      <textarea
                        rows={3}
                        placeholder="Norādiet vēlamo datumu, personu skaitu vai pasūtījuma apjomu..."
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#CDE8D5] text-xs text-[#122E1F] resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 rounded-xl bg-[#1B8044] text-white font-bold text-xs hover:bg-[#146334]"
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
