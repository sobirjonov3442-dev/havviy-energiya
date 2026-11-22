import React from 'react';
import { 
  Phone, 
  MapPin, 
  Mail, 
  Clock, 
  ArrowUp, 
  ShieldCheck, 
  Smartphone, 
  Send, 
  CheckCircle2,
  Sparkles
} from 'lucide-react';

// Custom SVG Icons for Brands (WhatsApp, Telegram, Instagram, YouTube, Apple iPhone)
export function IconWhatsApp({ className = "w-5 h-5" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.53 7.35C9.36 7.35 9.09 7.41 8.86 7.66C8.63 7.91 7.98 8.52 7.98 9.77C7.98 11.02 8.89 12.22 9.02 12.39C9.15 12.56 10.8 15.11 13.32 16.2C13.92 16.46 14.39 16.62 14.75 16.73C15.36 16.93 15.91 16.9 16.35 16.83C16.84 16.76 17.86 16.21 18.07 15.62C18.28 15.03 18.28 14.52 18.22 14.42C18.16 14.32 17.99 14.26 17.73 14.13C17.48 14 16.25 13.39 16.02 13.31C15.79 13.23 15.62 13.19 15.45 13.44C15.28 13.7 14.8 14.26 14.65 14.43C14.5 14.6 14.36 14.62 14.1 14.49C13.85 14.36 13.04 14.1 12.08 13.24C11.33 12.57 10.83 11.74 10.68 11.49C10.53 11.23 10.66 11.09 10.79 10.97C10.9 10.86 11.04 10.68 11.17 10.53C11.3 10.38 11.34 10.27 11.43 10.1C11.52 9.93 11.47 9.78 11.41 9.66C11.34 9.53 10.83 8.28 10.62 7.77C10.41 7.27 10.2 7.34 10.05 7.34H9.53Z" />
    </svg>
  );
}

export function IconTelegram({ className = "w-5 h-5" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .37z" />
    </svg>
  );
}

export function IconInstagram({ className = "w-5 h-5" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

export function IconYouTube({ className = "w-5 h-5" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

export function IconApple({ className = "w-5 h-5" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.89c.66-.82 1.11-1.96.99-3.1-.96.04-2.12.64-2.8 1.44-.6.69-1.13 1.84-.99 2.95 1.07.08 2.15-.49 2.8-1.29z" />
    </svg>
  );
}

export default function Footer({ t, onNavClick, footerConfig = {}, onOpenAdmin }) {
  const footerT = t?.footerSection || {
    cardCallTitle: "24/7 iPhone Qo'ng'iroq",
    cardCallSub: "Dubay bo'yicha 20-30 daqiqada usta",
    cardWhatsAppTitle: "WhatsApp Online",
    cardWhatsAppSub: "1 daqiqada xabar va javob",
    cardOfficeTitle: "Downtown Dubai Ofisi",
    cardOfficeSub: "Burj Khalifa ro'parasida, BAA",
    brandDesc: "Dubay amirligidagi xonadonlar, villalar va biznes binolari uchun professional texnik servis. DEWA standartlari, 1 yillik rasmiy kafolat va 24/7 tezkor xizmat.",
    socialHeading: "Biz ijtimoiy tarmoqlarda:",
    navHeading: "Bo'limlar",
    servicesHeading: "Xizmatlarimiz",
    guaranteeHeading: "Rasmiy kafolat",
    guaranteeText: "Har bir buyurtma va o'rnatilgan uskunaga 1 yildan 5 yilgacha rasmiy kafolat hujjati beriladi.",
    dewaBadge: "100% DEWA Litsenziyalangan Texnik Xizmat",
    appsHeading: "iPhone & Mobil aloqa",
    appsSub: "Telefoningizdan istalgan vaqtda 1 bosish orqali tezkor buyurtma bering:",
    copyright: "2026 HavviyEnergiya — Dubay, BAA. Barcha huquqlar himoyalangan.",
    scrollTop: "Sahifa boshiga chiqish"
  };

  const navT = t?.nav || {
    home: "Bosh sahifa",
    services: "Bizning xizmatlar",
    shop: "Mahsulotlar do'koni",
    about: "Biz haqimizda",
    contact: "Bog'lanish & Aloqa"
  };

  const servicesT = t?.servicesSection?.items || [
    { title: "Konditsioner montaji" },
    { title: "Antibakterial tozalash" },
    { title: "Uy va villa elektr ishlari" },
    { title: "DEWA avtomat shchiti" },
    { title: "Freon R410A / R32 quyish" }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNav = (sectionId) => {
    if (onNavClick) {
      onNavClick(sectionId);
    } else {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
      else window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#071120] text-slate-300 pt-14 sm:pt-20 pb-8 border-t border-slate-800/80 w-full max-w-full overflow-hidden relative">
      
      {/* Yuqori nozik fon nuri */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-4xl h-px bg-gradient-to-r from-transparent via-blue-500/60 to-transparent"></div>

      <div className="max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12 2xl:px-16 w-full">
        
        {/* =========================================================================
            1. YUQORI QISM: IPHONE USLUBIDAGI 3 TA TEZKOR ALOQA KARTALARI
            ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 pb-12 sm:pb-16 border-b border-slate-800/80">
          
          {/* 1. iPhone Tezkor Chaqiruv */}
          <a
            href={`tel:${footerConfig?.phone?.replace(/\s+/g, '') || "+971501234567"}`}
            className="group bg-[#0D1B2E] hover:bg-[#132742] p-5 sm:p-6 rounded-3xl border border-slate-800 hover:border-blue-500/50 transition-all flex items-center gap-4 shadow-xl"
          >
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#1D72FE]/15 text-[#1D72FE] flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-[#1D72FE] group-hover:text-white transition-all">
              <Phone className="w-6 h-6" />
            </div>
            <div className="min-w-0">
              <div className="text-[11px] font-black text-blue-400 uppercase tracking-wider flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>{footerT.cardCallTitle}</span>
              </div>
              <div className="text-base sm:text-lg font-black text-white mt-0.5 truncate">
                {footerConfig?.phone || "+971 50 123 4567"}
              </div>
              <div className="text-xs text-slate-400 truncate">
                {footerT.cardCallSub}
              </div>
            </div>
          </a>

          {/* 2. WhatsApp Tezkor Chat */}
          <a
            href={`https://wa.me/${(footerConfig?.whatsapp || "971501234567").replace(/[^0-9]/g, '')}?text=Assalomu%20alaykum!%20HavviyEnergiya%20Dubay%20xizmati%20kerak`}
            target="_blank"
            rel="noreferrer"
            className="group bg-[#0D1B2E] hover:bg-[#132742] p-5 sm:p-6 rounded-3xl border border-slate-800 hover:border-emerald-500/50 transition-all flex items-center gap-4 shadow-xl"
          >
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-emerald-500/15 text-emerald-400 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-white transition-all">
              <IconWhatsApp className="w-6 h-6" />
            </div>
            <div className="min-w-0">
              <div className="text-[11px] font-black text-emerald-400 uppercase tracking-wider">
                {footerT.cardWhatsAppTitle}
              </div>
              <div className="text-base sm:text-lg font-black text-white mt-0.5 truncate">
                {footerConfig?.whatsapp || "+971 50 123 4567"}
              </div>
              <div className="text-xs text-slate-400 truncate">
                {footerT.cardWhatsAppSub}
              </div>
            </div>
          </a>

          {/* 3. Dubay Bosh Ofisi */}
          <div className="group bg-[#0D1B2E] p-5 sm:p-6 rounded-3xl border border-slate-800 flex items-center gap-4 shadow-xl">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-amber-500/15 text-amber-400 flex items-center justify-center flex-shrink-0">
              <MapPin className="w-6 h-6" />
            </div>
            <div className="min-w-0">
              <div className="text-[11px] font-black text-amber-400 uppercase tracking-wider">
                {footerT.cardOfficeTitle}
              </div>
              <div className="text-base sm:text-lg font-black text-white mt-0.5 truncate">
                Boulevard Plaza Tower 1
              </div>
              <div className="text-xs text-slate-400 truncate">
                {footerT.cardOfficeSub}
              </div>
            </div>
          </div>

        </div>

        {/* =========================================================================
            2. ASOSIY FOOTER USTUNLARI (BRAND, IJTIMOIY TARMOQLAR, HAVOLALAR, IPHONE BADGE)
            ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 py-12 sm:py-16 border-b border-slate-800/80">
          
          {/* 1-Ustun: Brend, Ma'lumot va Barcha Ijtimoiy Tarmoqlar */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-[#1D72FE] text-white flex items-center justify-center shadow-lg shadow-blue-500/30 flex-shrink-0">
                <svg className="w-7 h-7 fill-white" viewBox="0 0 24 24">
                  <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                  <path d="M11.5 8.5L9 13h3l-1 4.5 4-6h-3.5z" fill="#071120" />
                </svg>
              </div>
              <div>
                <span className="text-2xl font-black text-white tracking-tight block">
                  Havviy<span className="text-[#1D72FE]">Energiya</span>
                </span>
                <span className="text-[11px] font-bold text-slate-400 block -mt-0.5">
                  Dubai Electrical & AC Services
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 font-medium max-w-md leading-relaxed">
              {footerT.brandDesc}
            </p>

            {/* IJTIMOIY TARMOQLAR TUGMALARI */}
            <div>
              <div className="text-xs font-black text-slate-300 uppercase tracking-wider mb-3 flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-[#1D72FE]" />
                <span>{footerT.socialHeading}</span>
              </div>

              <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
                
                {/* 1. INSTAGRAM */}
                <a
                  href="https://instagram.com/havviy_energiya"
                  target="_blank"
                  rel="noreferrer"
                  className="group relative w-11 h-11 rounded-2xl bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white flex items-center justify-center shadow-lg shadow-rose-900/20 hover:scale-110 hover:shadow-rose-600/40 transition-all duration-300"
                  title="Instagram"
                  aria-label="Instagram"
                >
                  <IconInstagram className="w-5 h-5 group-hover:scale-105 transition-transform" />
                  <span className="sr-only">Instagram</span>
                </a>

                {/* 2. TELEGRAM */}
                <a
                  href="https://t.me/havviy_energiya"
                  target="_blank"
                  rel="noreferrer"
                  className="group relative w-11 h-11 rounded-2xl bg-[#0088cc] hover:bg-[#0077b5] text-white flex items-center justify-center shadow-lg shadow-blue-900/30 hover:scale-110 hover:shadow-blue-500/40 transition-all duration-300"
                  title="Telegram"
                  aria-label="Telegram"
                >
                  <IconTelegram className="w-5 h-5 group-hover:scale-105 transition-transform" />
                  <span className="sr-only">Telegram</span>
                </a>

                {/* 3. WHATSAPP */}
                <a
                  href="https://wa.me/971501234567"
                  target="_blank"
                  rel="noreferrer"
                  className="group relative w-11 h-11 rounded-2xl bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center shadow-lg shadow-green-900/30 hover:scale-110 hover:shadow-green-500/40 transition-all duration-300"
                  title="WhatsApp"
                  aria-label="WhatsApp"
                >
                  <IconWhatsApp className="w-5 h-5 group-hover:scale-105 transition-transform" />
                  <span className="sr-only">WhatsApp</span>
                </a>

                {/* 4. YOUTUBE */}
                <a
                  href="https://youtube.com/@havviy_energiya"
                  target="_blank"
                  rel="noreferrer"
                  className="group relative w-11 h-11 rounded-2xl bg-[#FF0000] hover:bg-[#d90000] text-white flex items-center justify-center shadow-lg shadow-red-900/30 hover:scale-110 hover:shadow-red-500/40 transition-all duration-300"
                  title="YouTube"
                  aria-label="YouTube"
                >
                  <IconYouTube className="w-5 h-5 group-hover:scale-105 transition-transform" />
                  <span className="sr-only">YouTube</span>
                </a>

              </div>
            </div>

            {/* Kafolat nishoni */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 text-slate-300 text-xs font-bold">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>{footerT.dewaBadge}</span>
            </div>

          </div>

          {/* 2-Ustun: Sahifalar va Bo'limlar */}
          <div className="lg:col-span-2 space-y-3.5">
            <h3 className="text-sm font-black text-white uppercase tracking-wider">
              {footerT.navHeading}
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-400 font-medium">
              <li>
                <button 
                  onClick={() => handleNav('hero')} 
                  className="hover:text-[#1D72FE] hover:translate-x-1 transition-all"
                >
                  {navT.home}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('services')} 
                  className="hover:text-[#1D72FE] hover:translate-x-1 transition-all"
                >
                  {navT.services}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('shop')} 
                  className="hover:text-[#1D72FE] hover:translate-x-1 transition-all"
                >
                  {navT.shop}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('about')} 
                  className="hover:text-[#1D72FE] hover:translate-x-1 transition-all"
                >
                  {navT.about}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('contact')} 
                  className="hover:text-[#1D72FE] hover:translate-x-1 transition-all"
                >
                  {navT.contact}
                </button>
              </li>
            </ul>
          </div>

          {/* 3-Ustun: Mashhur Xizmatlar */}
          <div className="lg:col-span-2 space-y-3.5">
            <h3 className="text-sm font-black text-white uppercase tracking-wider">
              {footerT.servicesHeading}
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-400 font-medium">
              {servicesT.slice(0, 5).map((srv, idx) => (
                <li key={idx}>
                  <button 
                    onClick={() => handleNav('services')} 
                    className="hover:text-[#1D72FE] hover:translate-x-1 transition-all text-left"
                  >
                    {srv.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* 4-Ustun: iPhone & Mobil ilova / Tezkor bog'lanish kartasi */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-sm font-black text-white uppercase tracking-wider">
              {footerT.appsHeading}
            </h3>
            
            <p className="text-xs text-slate-400 leading-relaxed font-medium">
              {footerT.appsSub}
            </p>

            {/* iPhone App Badge */}
            <div className="space-y-2.5 pt-1">
              
              {/* Apple App Store iPhone Badge */}
              <a
                href="https://apps.apple.com"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/15 hover:border-white/30 transition-all shadow-md"
              >
                <div className="w-8 h-8 rounded-xl bg-white text-black flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                  <IconApple className="w-5 h-5 fill-current" />
                </div>
                <div className="text-left">
                  <div className="text-[10px] text-slate-400 uppercase leading-none font-bold">iOS iPhone</div>
                  <div className="text-xs font-black text-white leading-tight mt-0.5">App Store</div>
                </div>
              </a>

              {/* Google Play Badge */}
              <a
                href="https://play.google.com"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/15 hover:border-white/30 transition-all shadow-md"
              >
                <div className="w-8 h-8 rounded-xl bg-[#1D72FE] text-white flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                  <Smartphone className="w-4 h-4 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-[10px] text-slate-400 uppercase leading-none font-bold">Android</div>
                  <div className="text-xs font-black text-white leading-tight mt-0.5">Google Play</div>
                </div>
              </a>

            </div>

            {/* Email aloqa */}
            <div className="pt-2">
              <div className="text-[11px] text-slate-400 font-bold mb-1">E-mail:</div>
              <a href="mailto:info@havviyenergiya.ae" className="text-xs font-bold text-[#1D72FE] hover:underline">
                info@havviyenergiya.ae
              </a>
            </div>

          </div>

        </div>

        {/* =========================================================================
            3. PASTKI QISM: COPYRIGHT + YUQORIGA CHIQISH TUGMASI (SCROLL TO TOP)
            ========================================================================= */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-medium">
          
          <div className="text-center sm:text-left flex flex-wrap items-center gap-2 sm:gap-3">
            <span>© {footerConfig?.copyright || footerT.copyright}</span>
            <span>•</span>
            <button
              onClick={onOpenAdmin}
              className="text-[#1D72FE] hover:underline font-bold inline-flex items-center gap-1 cursor-pointer"
              title="Admin Panelga o'tish"
            >
              <span>⚙️ Admin Panel</span>
            </button>
          </div>

          <div className="flex items-center gap-5 sm:gap-6">
            <span className="hover:text-slate-300 cursor-pointer transition-colors">
              Privacy Policy
            </span>
            <span>•</span>
            <span className="hover:text-slate-300 cursor-pointer transition-colors">
              Terms of Service
            </span>

            {/* Scroll to Top Moviy Doira Tugmasi */}
            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full bg-[#1D72FE] hover:bg-blue-600 text-white flex items-center justify-center shadow-lg shadow-blue-500/30 transition-all transform hover:-translate-y-1 active:translate-y-0 flex-shrink-0"
              title={footerT.scrollTop}
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>

    </footer>
  );
}
