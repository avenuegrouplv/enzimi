import React, { useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { SEOHead } from '../components/SEOHead';
import { ContactForm } from '../components/ContactForm';
import { Phone, Mail, MapPin, Clock, HelpCircle, ChevronDown } from 'lucide-react';

export const Kontakti: React.FC = () => {
  const { t } = useLanguage();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: "Cik ilgs ir enzīmu dzērienu derīguma termiņš un kā tos pareizi uzglabāt?",
      a: "Tā kā mūsu dzērieni ir dzīvi un nepasterizēti, tos ieteicams uzglabāt ledusskapī temperatūrā no +2°C līdz +6°C. Neatvērtā veidā tie ir derīgi vismaz 6 mēnešus. Pēc atvēršanas vēlams izlietot 7-10 dienu laikā.",
    },
    {
      q: "Kā pareizi lietot enzīmu dzērienus?",
      a: "Ieteicamā ikdienas porcija ir 50-100 ml 15-20 minūtes pirms ēšanas vai no rīta tukšā dūšā. Dzērienu var dzert tīrā veidā vai atšķaidīt ar vēsā avota ūdenī. Nav ieteicams jaukt ar karstu ūdeni, lai nesabojātu dzīvās baktērijas.",
    },
    {
      q: "Kāpēc dzērienos netiek izmantots pārstrādāts cukurs?",
      a: "Mēs iestājamies par 100% natūrālu veselību. Dzērienu gatavošanā izmantojam tikai svaigu augļu dabisko fruktozi un pavasara ziedu medu, kas fermentācijas gaitā pilnībā pārvēršas organiskajās skābēs un fermentos.",
    },
    {
      q: "Kā notiek piegāde un cik ātri es saņemšu savu pasūtījumu?",
      a: "Dzērienus izsūtām 24 stundu laikā no pasūtījuma saņemšanas aizsargpakojumā. Pieejama piegāde vai saņemšana klātienē Rīgā.",
    },
  ];

  return (
    <>
      <SEOHead
        title="Kontakti"
        description="Sazinieties ar Enzimi komandu. Adrese, tālrunis, e-pasts un saziņas forma."
      />

      {/* Header Banner */}
      <section className="pt-12 pb-16 bg-[#E8EFEA]/70 border-b border-[#D3DDD6]">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF9F5] border border-[#D3DDD6] text-[#1E3E2B] text-xs font-bold shadow-2xs">
            <Mail className="w-4 h-4 text-[#1E3E2B]" />
            <span>Mēs Esam Tev Sasniedzami</span>
          </div>

          <h1 className="font-serif-title text-3xl sm:text-5xl font-bold text-[#19261E]">
            Sazinies Ar Mums
          </h1>

          <p className="text-xs sm:text-sm text-[#485950] max-w-2xl mx-auto leading-relaxed">
            {t.contactSection.subtitle}
          </p>
        </div>
      </section>

      {/* Main Form & Contact Info Grid */}
      <section className="py-16 bg-[#FAF9F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Contact Details Card */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-[#FFFFFF] p-8 rounded-3xl border border-[#D3DDD6] card-soft-shadow space-y-6">
                <div>
                  <span className="text-xs font-bold text-[#1E3E2B] uppercase tracking-wider block mb-1">
                    Kontaktinformācija
                  </span>
                  <h2 className="font-serif-title text-2xl font-bold text-[#19261E]">
                    Enzimi
                  </h2>
                </div>

                <div className="space-y-4 text-xs text-[#485950]">
                  <div className="flex items-start gap-3.5 p-3 rounded-2xl bg-[#FAF9F5] border border-[#D3DDD6]">
                    <MapPin className="w-5 h-5 text-[#1E3E2B] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#19261E] block font-bold mb-0.5">Adrese:</strong>
                      <span>{t.contactSection.addressInfo}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 p-3 rounded-2xl bg-[#FAF9F5] border border-[#D3DDD6]">
                    <Phone className="w-5 h-5 text-[#1E3E2B] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#19261E] block font-bold mb-0.5">Tālrunis:</strong>
                      <span>{t.contactSection.phoneInfo}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 p-3 rounded-2xl bg-[#FAF9F5] border border-[#D3DDD6]">
                    <Mail className="w-5 h-5 text-[#1E3E2B] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#19261E] block font-bold mb-0.5">E-pasts:</strong>
                      <span>{t.contactSection.emailInfo}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 p-3 rounded-2xl bg-[#FAF9F5] border border-[#D3DDD6]">
                    <Clock className="w-5 h-5 text-[#1E3E2B] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#19261E] block font-bold mb-0.5">Darba laiks:</strong>
                      <span>{t.contactSection.hoursInfo}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Column */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

          </div>

          {/* FAQ Accordion Section */}
          <div className="bg-[#FFFFFF] p-8 sm:p-12 rounded-3xl border border-[#D3DDD6] card-soft-shadow space-y-6">
            <div className="text-center max-w-xl mx-auto space-y-2">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1E3E2B] uppercase tracking-wider">
                <HelpCircle className="w-4 h-4" />
                <span>Biežāk Uzdotie Jautājumi</span>
              </div>
              <h2 className="font-serif-title text-2xl sm:text-3xl font-bold text-[#19261E]">
                Biežāk uzdotie jautājumi par enzīmu dzērieniem
              </h2>
            </div>

            <div className="space-y-3 max-w-3xl mx-auto pt-4">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div
                    key={index}
                    className="border border-[#D3DDD6] rounded-2xl overflow-hidden bg-[#FAF9F5] transition-colors"
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      className="w-full p-4 text-left font-bold text-xs sm:text-sm text-[#19261E] flex items-center justify-between gap-4"
                    >
                      <span>{faq.q}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-[#1E3E2B] shrink-0 transition-transform ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-4 pb-4 pt-1 text-xs text-[#485950] leading-relaxed border-t border-[#D3DDD6]">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default Kontakti;
