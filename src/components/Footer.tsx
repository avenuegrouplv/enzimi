import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import { Leaf, Phone, Mail, MapPin, Heart, ShieldCheck, Truck, Sparkles } from 'lucide-react';

export const Footer: React.FC = () => {
  const { t, getLocalizedPath } = useLanguage();

  return (
    <footer className="bg-[#E8EFEA] border-t border-[#D3DDD6] pt-16 pb-8 text-[#19261E] relative overflow-hidden">
      
      {/* Background soft botanical watermark accent */}
      <div className="absolute -right-16 -bottom-16 w-80 h-80 rounded-full bg-[#1E3E2B]/5 pointer-events-none blur-2xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Features Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pb-12 border-b border-[#D3DDD6]">
          <div className="flex items-center gap-4 bg-[#FAF9F5] p-4 rounded-2xl border border-[#D3DDD6]/80">
            <div className="w-12 h-12 rounded-xl bg-[#1E3E2B]/10 flex items-center justify-center text-[#1E3E2B] shrink-0">
              <Leaf className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-[#19261E]">100% Dabīgas Sostāvdaļas</h4>
              <p className="text-xs text-[#485950]">Svaigi augļi un bioloģiskie augi bez cukura</p>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-[#FAF9F5] p-4 rounded-2xl border border-[#D3DDD6]/80">
            <div className="w-12 h-12 rounded-xl bg-[#1E3E2B]/10 flex items-center justify-center text-[#1E3E2B] shrink-0">
              <Truck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-[#19261E]">Saņemšanas iespējas</h4>
              <p className="text-xs text-[#485950]">Piegāde vai saņemšana klātienē Rīgā</p>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-[#FAF9F5] p-4 rounded-2xl border border-[#D3DDD6]/80">
            <div className="w-12 h-12 rounded-xl bg-[#1E3E2B]/10 flex items-center justify-center text-[#1E3E2B] shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-[#19261E]">Dabīgā Fermentācija</h4>
              <p className="text-xs text-[#485950]">Saglabāti visi bio-enzīmi un probiotikas</p>
            </div>
          </div>
        </div>

        {/* Main 4-Column Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-12">
          
          {/* Col 1: Brand Info */}
          <div className="space-y-4">
            <Link to={getLocalizedPath("home")} className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-[#1E3E2B] text-white flex items-center justify-center">
                <Leaf className="w-5 h-5" />
              </div>
              <span className="font-serif-title text-2xl font-bold text-[#19261E]">Enzimi</span>
            </Link>
            <p className="text-xs text-[#485950] leading-relaxed">
              {t.footer.tagline}
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs font-semibold text-[#1E3E2B]">
              <Sparkles className="w-4 h-4 text-[#9E6723]" />
              <span>Dabas harmonija un dzīvīgs spēks</span>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider text-[#19261E] mb-4">
              {t.footer.quickLinks}
            </h3>
            <ul className="space-y-2.5 text-xs text-[#485950]">
              <li>
                <Link to={getLocalizedPath("home")} className="hover:text-[#1E3E2B] transition-colors">
                  {t.nav.home}
                </Link>
              </li>
              <li>
                <Link to={getLocalizedPath("about")} className="hover:text-[#1E3E2B] transition-colors">
                  {t.nav.about}
                </Link>
              </li>
              <li>
                <Link to={getLocalizedPath("products")} className="hover:text-[#1E3E2B] transition-colors">
                  {t.nav.products}
                </Link>
              </li>
              <li>
                <Link to={getLocalizedPath("services")} className="hover:text-[#1E3E2B] transition-colors">
                  {t.nav.services}
                </Link>
              </li>
              <li>
                <Link to={getLocalizedPath("contact")} className="hover:text-[#1E3E2B] transition-colors">
                  {t.nav.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Popular Products */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider text-[#19261E] mb-4">
              Populārākie Dzērieni
            </h3>
            <ul className="space-y-2.5 text-xs text-[#485950]">
              <li>Smiltsērkšķu un Ingvera Enzīms</li>
              <li>Dzērveņu un Rožu Gūžu Enzīms</li>
              <li>Ābolu un Kanēļa Biosvaigums</li>
              <li>Melleņu un Lavandas Miera Enzīms</li>
              <li>Upeņu un Piparmētras Enerģija</li>
            </ul>
          </div>

          {/* Col 4: Contact Info */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider text-[#19261E] mb-4">
              {t.nav.contact}
            </h3>
            <ul className="space-y-3 text-xs text-[#485950]">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#1E3E2B] shrink-0 mt-0.5" />
                <span>{t.contactSection.addressInfo}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#1E3E2B] shrink-0" />
                <span>{t.contactSection.phoneInfo}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#1E3E2B] shrink-0" />
                <span>{t.contactSection.emailInfo}</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#D3DDD6] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#485950]">
          <p>{t.footer.copyright}</p>
          <div className="flex items-center gap-3">
            <span className="hover:text-[#1E3E2B] cursor-pointer transition-colors">{t.footer.privacy}</span>
            <span>I</span>
            <span className="hover:text-[#1E3E2B] cursor-pointer transition-colors">{t.footer.terms}</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
