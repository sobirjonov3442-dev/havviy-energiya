import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Check } from 'lucide-react';

// O'zbekiston bayrog'i (High quality SVG)
export function FlagUZ({ className = "w-6 h-4" }) {
  return (
    <svg viewBox="0 0 500 250" className={className} style={{ display: 'block' }}>
      <rect width="500" height="80" fill="#0099B5" />
      <rect y="80" width="500" height="5" fill="#CE1126" />
      <rect y="85" width="500" height="80" fill="#FFFFFF" />
      <rect y="165" width="500" height="5" fill="#CE1126" />
      <rect y="170" width="500" height="80" fill="#1EB53A" />
      <circle cx="50" cy="40" r="22" fill="#FFFFFF" />
      <circle cx="58" cy="40" r="18" fill="#0099B5" />
      <circle cx="95" cy="22" r="3.5" fill="#FFFFFF" />
      <circle cx="112" cy="22" r="3.5" fill="#FFFFFF" />
      <circle cx="129" cy="22" r="3.5" fill="#FFFFFF" />
      <circle cx="112" cy="38" r="3.5" fill="#FFFFFF" />
      <circle cx="129" cy="38" r="3.5" fill="#FFFFFF" />
      <circle cx="146" cy="38" r="3.5" fill="#FFFFFF" />
      <circle cx="95" cy="54" r="3.5" fill="#FFFFFF" />
      <circle cx="112" cy="54" r="3.5" fill="#FFFFFF" />
      <circle cx="129" cy="54" r="3.5" fill="#FFFFFF" />
      <circle cx="146" cy="54" r="3.5" fill="#FFFFFF" />
      <circle cx="163" cy="54" r="3.5" fill="#FFFFFF" />
    </svg>
  );
}

// Rossiya bayrog'i (High quality SVG)
export function FlagRU({ className = "w-6 h-4" }) {
  return (
    <svg viewBox="0 0 600 400" className={className} style={{ display: 'block' }}>
      <rect width="600" height="133.3" fill="#FFFFFF" />
      <rect y="133.3" width="600" height="133.3" fill="#0039A6" />
      <rect y="266.6" width="600" height="133.4" fill="#D52B1E" />
    </svg>
  );
}

// Buyuk Britaniya bayrog'i (High quality SVG)
export function FlagGB({ className = "w-6 h-4" }) {
  return (
    <svg viewBox="0 0 60 30" className={className} style={{ display: 'block' }}>
      <rect width="60" height="30" fill="#012169" />
      <path d="M0,0 L60,30 M60,0 L0,30" stroke="#FFFFFF" strokeWidth="6" />
      <path d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" strokeWidth="4" />
      <path d="M30,0 v30 M0,15 h60" stroke="#FFFFFF" strokeWidth="10" />
      <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" />
    </svg>
  );
}

// Turkiya bayrog'i (High quality SVG)
export function FlagTR({ className = "w-6 h-4" }) {
  return (
    <svg viewBox="0 0 600 400" className={className} style={{ display: 'block' }}>
      <rect width="600" height="400" fill="#E30A17" />
      <circle cx="210" cy="200" r="100" fill="#FFFFFF" />
      <circle cx="235" cy="200" r="80" fill="#E30A17" />
      <polygon 
        points="290,200 325,212 312,175 344,195 305,195 337,175 324,212"
        fill="#FFFFFF"
      />
    </svg>
  );
}

const LANGUAGES = [
  { code: 'uz', name: "O'zbekcha", short: "UZ", Flag: FlagUZ },
  { code: 'ru', name: "Русский", short: "RU", Flag: FlagRU },
  { code: 'en', name: "English", short: "EN", Flag: FlagGB },
  { code: 'tr', name: "Türkçe", short: "TR", Flag: FlagTR }
];

/**
 * Professional Dropdown menyu:
 * - Hozirgi tanlangan til bayrog'i va kodi bilan tugma
 * - Bosilganda pastga chiroyli ro'yxat (bayroqlar, to'liq nomlar, check belgisi) ochiladi
 * - 100% mustahkam va tashqariga bosilganda xatosiz yopiladi
 */
export default function LanguageDropdown({ lang, onSelectLang, className = "" }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Tashqariga bosilganda xavfsiz yopish
  useEffect(() => {
    function handlePointerDownOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('pointerdown', handlePointerDownOutside);
    return () => {
      document.removeEventListener('pointerdown', handlePointerDownOutside);
    };
  }, []);

  const currentLang = LANGUAGES.find((l) => l.code === lang) || LANGUAGES[0];
  const CurrentFlag = currentLang.Flag;

  const dropdownTexts = {
    uz: { title: "Tilni tanlash", select: "Tilni tanlang", badge: "Bayroqlar" },
    ru: { title: "Выбор языка", select: "Выберите язык", badge: "Флаги" },
    en: { title: "Select language", select: "Select Language", badge: "Flags" },
    tr: { title: "Dil seçimi", select: "Dil seçin", badge: "Bayraklar" }
  };
  const curTexts = dropdownTexts[lang] || dropdownTexts.uz;

  return (
    <div className={`relative inline-block text-left z-50 ${className}`} ref={dropdownRef}>
      
      {/* Tanlangan til tugmasi (Bosilganda menyu ochiladi) */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen((prev) => !prev);
        }}
        className={`inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-full border transition-all duration-200 select-none cursor-pointer flex-shrink-0 ${
          isOpen 
            ? 'bg-blue-50 border-[#1D72FE] text-[#1D72FE] shadow-sm ring-2 ring-blue-500/20' 
            : 'bg-white hover:bg-slate-50 border-slate-200 text-slate-800 shadow-2xs hover:border-[#1D72FE]'
        }`}
        aria-expanded={isOpen}
        aria-haspopup="true"
        title={curTexts.title}
      >
        <div className="w-5 h-3.5 sm:w-5.5 sm:h-4 rounded-[2px] overflow-hidden shadow-2xs flex-shrink-0 border border-slate-300/80 flex items-center justify-center">
          <CurrentFlag className="w-full h-full object-cover" />
        </div>
        <span className="font-black text-slate-900 text-xs sm:text-sm tracking-wide">
          {currentLang.short}
        </span>
        <ChevronDown 
          className={`w-3.5 h-3.5 transition-transform duration-200 ${
            isOpen ? 'rotate-180 text-[#1D72FE]' : 'text-slate-400'
          }`} 
        />
      </button>

      {/* Ochiluvchi Dropdown Menyu */}
      {isOpen && (
        <div 
          className="absolute right-0 top-full mt-2 w-52 sm:w-56 bg-white rounded-2xl shadow-2xl border border-slate-200/90 p-1.5 z-[9999] animate-fadeIn divide-y divide-slate-100"
          style={{ zIndex: 9999 }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="text-[10px] font-black uppercase text-slate-400 px-3 py-1.5 tracking-wider flex items-center justify-between">
            <span>{curTexts.select}</span>
            <span className="text-[10px] text-[#1D72FE] font-black tracking-normal">{curTexts.badge}</span>
          </div>

          <div className="pt-1 space-y-1">
            {LANGUAGES.map((item) => {
              const isSelected = item.code === lang;
              const FlagComp = item.Flag;
              return (
                <button
                  key={item.code}
                  type="button"
                  onClick={() => {
                    onSelectLang(item.code);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    isSelected 
                      ? 'bg-blue-50 text-[#1D72FE] font-black shadow-2xs ring-1 ring-blue-500/20' 
                      : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
                  }`}
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="w-6 h-4 rounded-[3px] overflow-hidden shadow-2xs flex-shrink-0 flex items-center justify-center border border-slate-300/80">
                      <FlagComp className="w-full h-full object-cover" />
                    </div>
                    <span className="truncate text-xs font-bold">{item.name}</span>
                  </div>

                  <div className="flex items-center gap-1.5 flex-shrink-0">
                    <span className={`text-[10px] px-1.5 py-0.5 rounded-md font-black ${
                      isSelected ? 'bg-blue-200/70 text-[#1D72FE]' : 'bg-slate-100 text-slate-400'
                    }`}>
                      {item.short}
                    </span>
                    {isSelected && <Check className="w-4 h-4 text-[#1D72FE]" />}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      )}

    </div>
  );
}
