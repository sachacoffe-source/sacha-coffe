import React from 'react';
import { useTranslation } from 'react-i18next';

export default function LanguageSelector() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const languages = [
    { code: 'es', label: 'ES', flag: '🇨🇴' },
    { code: 'en', label: 'EN', flag: '🇺🇸' },
    { code: 'ja', label: 'JA', flag: '🇯🇵' }
  ];

  return (
    <div className="inline-flex items-center bg-[#f9f0ea]/10 border border-[#a1a794]/30 rounded-lg p-0.5">
      {languages.map((lang) => {
        const isActive = i18n.language && i18n.language.startsWith(lang.code);
        return (
          <button
            key={lang.code}
            onClick={() => changeLanguage(lang.code)}
            className={`px-2 py-1 text-xs font-mono rounded transition-all cursor-pointer flex items-center gap-1 ${
              isActive
                ? 'bg-[#f9f0ea] text-[#0c3321] font-bold shadow-sm'
                : 'text-[#f9f0ea]/70 hover:text-[#f9f0ea] hover:bg-white/5'
            }`}
          >
            <span className="text-[10px]">{lang.flag}</span>
            <span>{lang.label}</span>
          </button>
        );
      })}
    </div>
  );
}