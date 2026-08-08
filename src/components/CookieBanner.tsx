import React, { useState, useEffect } from 'react';
import { ShieldCheck, Cookie, Settings, X, Check } from 'lucide-react';

export const CookieBanner: React.FC = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showCustomizeModal, setShowCustomizeModal] = useState(false);

  // Cookie preference options
  const [preferences, setPreferences] = useState({
    necessary: true, // mandatory
    analytics: true,
    marketing: false,
  });

  useEffect(() => {
    const savedConsent = localStorage.getItem('enzimi_cookie_consent');
    if (!savedConsent) {
      setShowBanner(true);
    }
  }, []);

  const handleAcceptAll = () => {
    const fullConsent = { necessary: true, analytics: true, marketing: true };
    localStorage.setItem('enzimi_cookie_consent', JSON.stringify(fullConsent));
    setShowBanner(false);
    setShowCustomizeModal(false);
  };

  const handleRejectAll = () => {
    const minConsent = { necessary: true, analytics: false, marketing: false };
    localStorage.setItem('enzimi_cookie_consent', JSON.stringify(minConsent));
    setShowBanner(false);
    setShowCustomizeModal(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem('enzimi_cookie_consent', JSON.stringify(preferences));
    setShowBanner(false);
    setShowCustomizeModal(false);
  };

  if (!showBanner) return null;

  return (
    <>
      {/* Full-width horizontal cookie bar at the bottom */}
      <div className="fixed bottom-0 left-0 right-0 z-50 w-full bg-[#FAF9F5] border-t border-[#CDE8D5] shadow-[0_-8px_25px_rgba(18,46,31,0.12)] p-4 sm:px-6 lg:px-8 animate-in slide-in-from-bottom duration-300">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-4">
          
          {/* Information Text */}
          <div className="flex items-start gap-3 flex-1 text-xs text-[#122E1F]">
            <Cookie className="w-5 h-5 text-[#1B8044] shrink-0 mt-0.5 hidden sm:block" />
            <p className="leading-relaxed text-[#2E523A] text-xs sm:text-[13px]">
              Mēs izmantojam sīkdatnes, lai uzlabotu Jūsu lietošanas pieredzi, nodrošinātu vietnes darbību un analizētu apmeklētāju plūsmu. Jūs varat piekrist visām sīkdatnēm vai pielāgot savas izvēles. Vairāk informācijas mūsu{' '}
              <a
                href="/kontakti"
                className="font-bold text-[#1B8044] underline hover:text-[#146334] transition-colors"
              >
                Privātuma politika
              </a>
              .
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-end gap-2 shrink-0 w-full lg:w-auto">
            <button
              onClick={handleAcceptAll}
              className="flex-1 sm:flex-initial px-5 py-2.5 rounded-xl bg-[#1B8044] text-white font-bold text-xs hover:bg-[#146334] transition-all shadow-xs btn-shimmer text-center"
            >
              Piekrītu visām
            </button>

            <button
              onClick={() => setShowCustomizeModal(true)}
              className="flex-1 sm:flex-initial px-4 py-2.5 rounded-xl bg-[#E5F4E9] border border-[#CDE8D5] text-[#1B8044] font-bold text-xs hover:bg-[#1B8044] hover:text-white transition-all text-center flex items-center justify-center gap-1.5"
            >
              <Settings className="w-3.5 h-3.5" />
              <span>Pielāgot</span>
            </button>

            <button
              onClick={handleRejectAll}
              className="flex-1 sm:flex-initial px-4 py-2.5 rounded-xl bg-[#FAF9F5] border border-[#CDE8D5] text-[#2E523A] font-bold text-xs hover:bg-red-50 hover:text-red-700 hover:border-red-200 transition-all text-center"
            >
              Noraidīt
            </button>
          </div>
        </div>
      </div>

      {/* Customize Modal */}
      {showCustomizeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg bg-[#FAF9F5] rounded-3xl border border-[#CDE8D5] shadow-2xl overflow-hidden p-6 sm:p-8 animate-in zoom-in-95 duration-200 space-y-6">
            
            <div className="flex items-center justify-between border-b border-[#CDE8D5] pb-4">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#1B8044]" />
                <h3 className="font-serif-title text-lg font-bold text-[#122E1F]">
                  Sīkdatņu Iestatījumi
                </h3>
              </div>
              <button
                onClick={() => setShowCustomizeModal(false)}
                className="p-1.5 rounded-full bg-[#E5F4E9] text-[#122E1F] hover:bg-[#1B8044] hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs text-[#2E523A] leading-relaxed">
              Pielāgojiet, kādas sīkdatnes atļaujat izmantot mūsu vietnē. Obligātās sīkdatnes ir nepieciešamas vietnes pamata funkciju nodrošināšanai.
            </p>

            <div className="space-y-3">
              {/* Necessary */}
              <div className="flex items-center justify-between p-3.5 bg-white rounded-2xl border border-[#CDE8D5]">
                <div className="pr-4">
                  <h4 className="font-bold text-xs text-[#122E1F]">Nepieciešamās sīkdatnes</h4>
                  <p className="text-[11px] text-[#2E523A]">Nepieciešamas e-veikala un pirkumu groza darbībai.</p>
                </div>
                <span className="text-[11px] font-bold text-[#1B8044] bg-[#E5F4E9] px-2.5 py-1 rounded-lg shrink-0">
                  Obligātas
                </span>
              </div>

              {/* Analytics */}
              <div className="flex items-center justify-between p-3.5 bg-white rounded-2xl border border-[#CDE8D5]">
                <div className="pr-4">
                  <h4 className="font-bold text-xs text-[#122E1F]">Analītiskās sīkdatnes</h4>
                  <p className="text-[11px] text-[#2E523A]">Palīdz mums saprast, kā apmeklētāji izmanto mājaslapu.</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer shrink-0">
                  <input
                    type="checkbox"
                    checked={preferences.analytics}
                    onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                    className="sr-only peer"
                  />
                  <div className="w-9 h-5 bg-gray-200 peer-focus:outline-hidden rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#1B8044]"></div>
                </label>
              </div>

              {/* Marketing */}
              <div className="flex items-center justify-between p-3.5 bg-white rounded-2xl border border-[#CDE8D5]">
                <div className="pr-4">
                  <h4 className="font-bold text-xs text-[#122E1F]">Mārketinga sīkdatnes</h4>
                  <p className="text-[11px] text-[#2E523A]">Nodrošina pielāgotu reklāmu un satura rādīšanu.</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer shrink-0">
                  <input
                    type="checkbox"
                    checked={preferences.marketing}
                    onChange={(e) => setPreferences({ ...preferences, marketing: e.target.checked })}
                    className="sr-only peer"
                  />
                  <div className="w-9 h-5 bg-gray-200 peer-focus:outline-hidden rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#1B8044]"></div>
                </label>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-3">
              <button
                onClick={handleSavePreferences}
                className="flex-1 py-3 px-4 rounded-xl bg-[#1B8044] text-white font-bold text-xs hover:bg-[#146334] transition-all flex items-center justify-center gap-2"
              >
                <Check className="w-4 h-4" />
                <span>Saglabāt izvēles</span>
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
};

