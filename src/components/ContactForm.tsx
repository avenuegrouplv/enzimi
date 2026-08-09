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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
    } catch (err) {
      console.error('Kļūda sūtot ziņu:', err);
    } finally {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }
  };

  return (
    <div className="bg-[#FFFFFF] p-8 sm:p-10 rounded-3xl border border-[#CDE8D5] card-soft-shadow">
      {isSubmitted ? (
        <div className="text-center py-12 space-y-4 animate-in fade-in duration-300">
          <div className="w-16 h-16 rounded-full bg-[#16A34A]/20 text-[#16A34A] flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <h3 className="font-serif-title text-xl font-bold text-[#122E1F]">
            Paldies. Jūsu ziņa ir veiksmīgi nosūtīta!
          </h3>
          <p className="text-sm text-[#2E523A] max-w-sm mx-auto leading-relaxed">
            Mēs ar jums sazināsimies tuvākajā laikā.
          </p>
          <button
            onClick={() => {
              setIsSubmitted(false);
              setFormData({ name: '', email: '', phone: '', message: '', interest: 'produktus' });
            }}
            className="px-6 py-2.5 rounded-xl bg-[#E5F4E9] text-[#122E1F] text-xs font-bold hover:bg-[#CDE8D5] transition-colors"
          >
            Nosūtīt vēl vienu ziņu
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#122E1F] mb-1.5">
                {t.contactSection.nameLabel} *
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder={t.contactSection.namePlaceholder}
                className="w-full px-4 py-3 rounded-xl bg-[#FAF9F5] border border-[#CDE8D5] text-xs text-[#122E1F] focus:outline-none focus:border-[#1B8044] transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#122E1F] mb-1.5">
                {t.contactSection.emailLabel} *
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder={t.contactSection.emailPlaceholder}
                className="w-full px-4 py-3 rounded-xl bg-[#FAF9F5] border border-[#CDE8D5] text-xs text-[#122E1F] focus:outline-none focus:border-[#1B8044] transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#122E1F] mb-1.5">
              {t.contactSection.phoneLabel}
            </label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder={t.contactSection.phonePlaceholder}
              className="w-full px-4 py-3 rounded-xl bg-[#FAF9F5] border border-[#CDE8D5] text-xs text-[#122E1F] focus:outline-none focus:border-[#1B8044] transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#122E1F] mb-1.5">
              {t.contactSection.messageLabel} *
            </label>
            <textarea
              required
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder={t.contactSection.messagePlaceholder}
              className="w-full px-4 py-3 rounded-xl bg-[#FAF9F5] border border-[#CDE8D5] text-xs text-[#122E1F] focus:outline-none focus:border-[#1B8044] transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3.5 px-6 rounded-xl bg-[#1B8044] text-white font-bold text-sm hover:bg-[#146334] transition-all shadow-xs flex items-center justify-center gap-2 btn-shimmer"
          >
            <Send className="w-4 h-4" />
            <span>{isSubmitting ? t.contactSection.sendingBtn : t.contactSection.submitBtn}</span>
          </button>
        </form>
      )}
    </div>
  );
};
