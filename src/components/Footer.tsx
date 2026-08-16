import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import { Leaf, Phone, Mail, MapPin, Heart, ShieldCheck, Truck, Sparkles } from 'lucide-react';

export const Footer: React.FC = () => {
  const { t, getLocalizedPath, products } = useLanguage();

  return (
    <footer className="bg-[#E5F4E9] border-t border-[#CDE8D5] pt-16 pb-8 text-[#122E1F] relative overflow-hidden">
      
      {/* Background soft botanical watermark accent */}
      <div className="absolute -right-16 -bottom-16 w-80 h-80 rounded-full bg-[#1B8044]/5 pointer-events-none blur-2xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Features Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pb-12 border-b border-[#CDE8D5]">
          <div className="flex items-center gap-4 bg-[#FAF9F5] p-4 rounded-2xl border border-[#CDE8D5]/80">
            <div className="w-12 h-12 rounded-xl bg-[#1B8044]/10 flex items-center justify-center text-[#1B8044] shrink-0">
              <Leaf className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-[#122E1F]">{t.footer.feature1Title}</h4>
              <p className="text-xs text-[#2E523A]">{t.footer.feature1Desc}</p>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-[#FAF9F5] p-4 rounded-2xl border border-[#CDE8D5]/80">
            <div className="w-12 h-12 rounded-xl bg-[#1B8044]/10 flex items-center justify-center text-[#1B8044] shrink-0">
              <Truck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-[#122E1F]">{t.footer.feature2Title}</h4>
              <p className="text-xs text-[#2E523A]">{t.footer.feature2Desc}</p>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-[#FAF9F5] p-4 rounded-2xl border border-[#CDE8D5]/80">
            <div className="w-12 h-12 rounded-xl bg-[#1B8044]/10 flex items-center justify-center text-[#1B8044] shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-[#122E1F]">{t.footer.feature3Title}</h4>
              <p className="text-xs text-[#2E523A]">{t.footer.feature3Desc}</p>
            </div>
          </div>
        </div>

        {/* Main 4-Column Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-12">
          
          {/* Col 1: Brand Info */}
          <div className="space-y-4">
            <Link to={getLocalizedPath("home")} className="flex items-center gap-2.5">
              <div className="w-[43px] h-[43px] rounded-xl bg-[#1B8044] text-white flex items-center justify-center">
                <Leaf className="w-[22px] h-[22px]" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif-title text-[26px] font-bold text-[#122E1F] leading-none">
                  Enzīmi
                </span>
              </div>
            </Link>
            <p className="text-[13px] font-bold text-[#1B8044] tracking-wide">
              {t.footer.brandTagline}
            </p>
            <p className="text-xs text-[#2E523A] leading-relaxed">
              {t.footer.description}
            </p>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider text-[#122E1F] mb-4">
              {t.footer.quickLinks}
            </h3>
            <ul className="space-y-2.5 text-xs text-[#2E523A]">
              <li>
                <Link to={getLocalizedPath("home")} className="hover:text-[#1B8044] transition-colors">
                  {t.nav.home}
                </Link>
              </li>
              <li>
                <Link to={getLocalizedPath("about")} className="hover:text-[#1B8044] transition-colors">
                  {t.nav.about}
                </Link>
              </li>
              <li>
                <Link to={getLocalizedPath("products")} className="hover:text-[#1B8044] transition-colors">
                  {t.nav.products}
                </Link>
              </li>
              <li>
                <Link to={getLocalizedPath("services")} className="hover:text-[#1B8044] transition-colors">
                  {t.nav.services}
                </Link>
              </li>
              <li>
                <Link to={getLocalizedPath("contact")} className="hover:text-[#1B8044] transition-colors">
                  {t.nav.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Popular Products */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider text-[#122E1F] mb-4">
              {t.footer.popularDrinks}
            </h3>
            <ul className="space-y-2.5 text-xs text-[#2E523A]">
              {products.slice(0, 5).map((product) => (
                <li key={product.id}>
                  <Link to={getLocalizedPath("products")} className="hover:text-[#1B8044] transition-colors">
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact Info */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider text-[#122E1F] mb-4">
              {t.nav.contact}
            </h3>
            <ul className="space-y-3 text-xs text-[#2E523A]">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#1B8044] shrink-0 mt-0.5" />
                <span>{t.contactSection.addressInfo}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#1B8044] shrink-0" />
                <span>{t.contactSection.phoneInfo}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#1B8044] shrink-0" />
                <span>{t.contactSection.emailInfo}</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#CDE8D5] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-[#2E523A] font-medium">
          <p>{t.footer.copyright}</p>
          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-3">
            <span className="hover:text-[#1B8044] cursor-pointer transition-colors">{t.footer.privacy}</span>
            <span>|</span>
            <span className="hover:text-[#1B8044] cursor-pointer transition-colors">{t.footer.terms}</span>
            <span>|</span>
            <span>
              Izstrādātājs:{' '}
              <a
                href="https://sageonmedia.eu"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-[#1B8044] hover:underline"
              >
                Sageon Media
              </a>
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
