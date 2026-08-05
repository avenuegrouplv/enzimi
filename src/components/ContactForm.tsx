import React, { useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { Send, CheckCircle2 } from 'lucide-react';

export const ContactForm: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    interest: 'produktus',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1000);
  };

  return (
    <div className="bg-[#FFFFFF] p-8 sm:p-10 rounded-3xl border border-[#D3DDD6] card-soft-shadow">
      {isSubmitted ? (
        <div className="text-center py-12 space-y-4 animate-in fade-in duration-300">
          <div className="w-16 h-16 rounded-full bg-[#2A9D8F]/20 text-[#2A9D8F] flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <h3 className="font-serif-title text-2xl font-bold text-[#19261E]">
            Ziņa Veiksmīgi Nosūtīta!
          </h3>
          <p className="text-xs text-[#485950] max-w-sm mx-auto leading-relaxed">
            {t.contactSection.successMessage}
          </p>
          <button
            onClick={() => {
              setIsSubmitted(false);
              setFormData({ name: '', email: '', phone: '', message: '', interest: 'produktus' });
            }}
            className="px-6 py-2.5 rounded-xl bg-[#E8EFEA] text-[#19261E] text-xs font-bold hover:bg-[#D3DDD6] transition-colors"
          >
            Nosūtīt vēl vienu ziņu
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#19261E] mb-1.5">
                {t.contactSection.nameLabel} *
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder={t.contactSection.namePlaceholder}
                className="w-full px-4 py-3 rounded-xl bg-[#FAF9F5] border border-[#D3DDD6] text-xs text-[#19261E] focus:outline-none focus:border-[#1E3E2B] transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#19261E] mb-1.5">
                {t.contactSection.emailLabel} *
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder={t.contactSection.emailPlaceholder}
                className="w-full px-4 py-3 rounded-xl bg-[#FAF9F5] border border-[#D3DDD6] text-xs text-[#19261E] focus:outline-none focus:border-[#1E3E2B] transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#19261E] mb-1.5">
              {t.contactSection.phoneLabel}
            </label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder={t.contactSection.phonePlaceholder}
              className="w-full px-4 py-3 rounded-xl bg-[#FAF9F5] border border-[#D3DDD6] text-xs text-[#19261E] focus:outline-none focus:border-[#1E3E2B] transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#19261E] mb-1.5">
              {t.contactSection.messageLabel} *
            </label>
            <textarea
              required
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder={t.contactSection.messagePlaceholder}
              className="w-full px-4 py-3 rounded-xl bg-[#FAF9F5] border border-[#D3DDD6] text-xs text-[#19261E] focus:outline-none focus:border-[#1E3E2B] transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3.5 px-6 rounded-xl bg-[#1E3E2B] text-white font-bold text-sm hover:bg-[#142B1E] transition-all shadow-xs flex items-center justify-center gap-2 btn-shimmer"
          >
            <Send className="w-4 h-4" />
            <span>{isSubmitting ? t.contactSection.sendingBtn : t.contactSection.submitBtn}</span>
          </button>
        </form>
      )}
    </div>
  );
};
