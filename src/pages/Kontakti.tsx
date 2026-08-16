import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { SEOHead } from '../components/SEOHead';
import { ContactForm } from '../components/ContactForm';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export const Kontakti: React.FC = () => {
  const { t } = useLanguage();
  const cSec = t.contactSection;

  return (
    <>
      <SEOHead
        title={`${cSec.title} | Enzīmi`}
        description={cSec.subtitle}
      />

      {/* Header Banner */}
      <section className="pt-8 pb-10 sm:pt-12 sm:pb-16 bg-[#E5F4E9]/70 border-b border-[#CDE8D5]">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF9F5] border border-[#CDE8D5] text-[#1B8044] text-xs font-bold shadow-2xs">
            <Mail className="w-4 h-4 text-[#1B8044]" />
            <span>{cSec.badge}</span>
          </div>

          <h1 className="font-serif-title text-3xl sm:text-5xl font-bold text-[#122E1F]">
            {cSec.title}
          </h1>

          <p className="text-xs sm:text-sm text-[#2E523A] max-w-2xl mx-auto leading-relaxed">
            {cSec.subtitle}
          </p>
        </div>
      </section>

      {/* Main Form & Contact Info Grid */}
      <section className="py-8 sm:py-16 bg-[#FAF9F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-12">
            
            {/* Contact Details Card */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-[#FFFFFF] p-8 rounded-3xl border border-[#CDE8D5] card-soft-shadow space-y-6">
                <div>
                  <span className="text-xs font-bold text-[#1B8044] uppercase tracking-wider block mb-1">
                    {cSec.infoBoxTitle}
                  </span>
                  <h2 className="font-serif-title text-2xl font-bold text-[#122E1F]">
                    Enzīmi
                  </h2>
                </div>

                <div className="space-y-4 text-xs text-[#2E523A]">
                  <div className="flex items-start gap-3.5 p-3 rounded-2xl bg-[#FAF9F5] border border-[#CDE8D5]">
                    <MapPin className="w-5 h-5 text-[#1B8044] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#122E1F] block font-bold mb-0.5">{cSec.addressLabel}</strong>
                      <span>{cSec.addressInfo}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 p-3 rounded-2xl bg-[#FAF9F5] border border-[#CDE8D5]">
                    <Phone className="w-5 h-5 text-[#1B8044] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#122E1F] block font-bold mb-0.5">{cSec.phoneLabel}:</strong>
                      <span>{cSec.phoneInfo}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 p-3 rounded-2xl bg-[#FAF9F5] border border-[#CDE8D5]">
                    <Mail className="w-5 h-5 text-[#1B8044] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#122E1F] block font-bold mb-0.5">{cSec.emailLabel}:</strong>
                      <span>{cSec.emailInfo}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 p-3 rounded-2xl bg-[#FAF9F5] border border-[#CDE8D5]">
                    <Clock className="w-5 h-5 text-[#1B8044] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#122E1F] block font-bold mb-0.5">{cSec.hoursLabel}</strong>
                      <span>{cSec.hoursInfo}</span>
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

        </div>
      </section>
    </>
  );
};

export default Kontakti;
