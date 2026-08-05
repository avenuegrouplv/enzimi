import React, { useState, useEffect } from 'react';
import { ShieldCheck, X } from 'lucide-react';

export const CookieBanner: React.FC = () => {
  const [accepted, setAccepted] = useState(true);

  useEffect(() => {
    const isConsent = localStorage.getItem('enzimi_cookie_consent');
    if (!isConsent) {
      setAccepted(false);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('enzimi_cookie_consent', 'true');
    setAccepted(true);
  };

  if (accepted) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 z-50 max-w-md bg-[#FAF9F5] border border-[#CDE8D5] rounded-2xl p-4 shadow-xl flex items-start gap-3 text-xs text-[#122E1F] animate-in slide-in-from-bottom duration-300">
      <ShieldCheck className="w-5 h-5 text-[#1B8044] shrink-0 mt-0.5" />
      <div className="flex-1 space-y-1">
        <p className="font-bold">Sīkdatņu izmantošana</p>
        <p className="text-[#2E523A] text-[11px] leading-relaxed">
          Mēs izmantojam nepieciešamās sīkdatnes, lai nodrošinātu mājaslapas nevainojamu darbību un e-veikalu.
        </p>
        <div className="pt-2 flex items-center gap-2">
          <button
            onClick={handleAccept}
            className="px-3 py-1.5 rounded-lg bg-[#1B8044] text-white font-bold text-[11px] hover:bg-[#146334] transition-colors"
          >
            Saprasts & Piekrītu
          </button>
        </div>
      </div>
      <button
        onClick={() => setAccepted(true)}
        className="text-[#2E523A] hover:text-[#122E1F]"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};
