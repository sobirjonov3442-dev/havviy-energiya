import React, { useState } from 'react';
import { Home, Phone, MapPin, ShieldCheck, Zap, Search, ShoppingBag, Heart, User, ChevronDown, Menu, X, ArrowRight } from 'lucide-react';

export default function Navbar({
  activeTab,
  setActiveTab,
  cartCount = 0,
  setIsCartOpen,
  favoritesCount = 0,
  onOpenWishlist,
  user,
  onOpenAuth,
  onOpenProfile,
  onOpenSearch
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const handleNavClick = (id) => {
    setActiveTab(id);
    setIsMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full shadow-sm">
      {/* 1. Top Informational Strip (Exact match to Reference top bar) */}
      <div className="bg-[#0B1528] text-slate-300 text-[11px] sm:text-xs py-2 px-4 sm:px-8 lg:px-12 border-b border-slate-800">
        <div className="max-w-[1600px] mx-auto flex flex-wrap items-center justify-between gap-3">
          
          {/* Left: 24/7 xizmat | Sifat kafolati | Andijon, O'zbekiston */}
          <div className="flex items-center gap-4 sm:gap-6 flex-wrap">
            <div className="flex items-center gap-1.5 font-medium text-slate-300">
              <Zap className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span>24/7 xizmat</span>
            </div>
            <span className="hidden sm:inline text-slate-700">•</span>
            <div className="flex items-center gap-1.5 font-medium text-slate-300">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
              <span>Sifat kafolati</span>
            </div>
            <span className="hidden sm:inline text-slate-700">•</span>
            <div className="flex items-center gap-1.5 font-medium text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-emerald-400" />
              <span>Andijon, O'zbekiston</span>
            </div>
          </div>

          {/* Right: Phone number */}
          <div className="flex items-center gap-2">
            <a 
              href="tel:+998901234567" 
              className="flex items-center gap-1.5 font-bold text-white hover:text-blue-400 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-blue-400 fill-blue-400" />
              <span>+998 90 123 45 67</span>
            </a>
          </div>

        </div>
      </div>

      {/* 2. Main Navigation Bar (Exact match to Reference) */}
      <div className="bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 py-3 sm:py-3.5 px-4 sm:px-8 lg:px-12 transition-colors">
        <div className="max-w-[1600px] mx-auto flex items-center justify-between gap-4">
          
          {/* Brand Logo (Reference Logo with blue badge + HavviyEnergiya text) */}
          <a
            href="#home"
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 group focus:outline-none flex-shrink-0"
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-gradient-to-tr from-[#1D72FE] to-blue-400 text-white flex items-center justify-center shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
              <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
              </svg>
            </div>
            <div>
              <span className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight leading-tight block">
                Havviy<span className="text-[#1D72FE]">Energiya</span>
              </span>
              <span className="text-[11px] font-medium text-slate-400 block -mt-0.5">
                Elektr va Konditsioner xizmatlari
              </span>
            </div>
          </a>

          {/* Center Navigation Links (Matching Reference Pill Layout) */}
          <nav className="hidden xl:flex items-center gap-1 bg-[#F1F5F9]/80 dark:bg-slate-800/80 p-1.5 rounded-full border border-slate-200/60 dark:border-slate-700/60">
            {/* Bosh sahifa (Active Pill with Blue Background) */}
            <button
              onClick={() => handleNavClick('home')}
              className={`flex items-center gap-1.5 px-5 py-2 text-xs sm:text-sm font-bold rounded-full transition-all duration-200 ${
                activeTab === 'home'
                  ? 'bg-[#1D72FE] text-white shadow-md shadow-blue-500/25'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-white/70 dark:hover:bg-slate-700'
              }`}
            >
              <Home className="w-3.5 h-3.5" />
              <span>Bosh sahifa</span>
            </button>

            {/* Xizmatlar with dropdown chevron */}
            <button
              onClick={() => handleNavClick('services')}
              className={`flex items-center gap-1 px-4 py-2 text-xs sm:text-sm font-bold rounded-full transition-all duration-200 ${
                activeTab === 'services'
                  ? 'bg-[#1D72FE] text-white shadow-md'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-white/70'
              }`}
            >
              <span>Xizmatlar</span>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
            </button>

            {/* Do'kon with dropdown chevron */}
            <button
              onClick={() => handleNavClick('shop')}
              className={`flex items-center gap-1 px-4 py-2 text-xs sm:text-sm font-bold rounded-full transition-all duration-200 ${
                activeTab === 'shop'
                  ? 'bg-[#1D72FE] text-white shadow-md'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-white/70'
              }`}
            >
              <span>Do'kon</span>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
            </button>

            {/* Aksessuarlar */}
            <button
              onClick={() => handleNavClick('shop')}
              className="px-4 py-2 text-xs sm:text-sm font-bold rounded-full text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-white/70 transition-all"
            >
              <span>Aksessuarlar</span>
            </button>

            {/* Biz haqimizda */}
            <button
              onClick={() => handleNavClick('about')}
              className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-full transition-all duration-200 ${
                activeTab === 'about'
                  ? 'bg-[#1D72FE] text-white shadow-md'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-white/70'
              }`}
            >
              <span>Biz haqimizda</span>
            </button>

            {/* Bog'lanish */}
            <button
              onClick={() => handleNavClick('contact')}
              className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-full transition-all duration-200 ${
                activeTab === 'contact'
                  ? 'bg-[#1D72FE] text-white shadow-md'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-white/70'
              }`}
            >
              <span>Bog'lanish</span>
            </button>
          </nav>

          {/* Right Action Buttons (Search, Wishlist, Cart, Login) */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* Search Icon Button */}
            <button
              onClick={() => handleNavClick('shop')}
              className="w-10 h-10 rounded-full bg-[#F1F5F9] dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-[#1D72FE] hover:bg-blue-50 dark:hover:bg-slate-700 flex items-center justify-center transition-colors"
              title="Qidiruv"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Wishlist / Likes Icon Button */}
            <button
              onClick={onOpenWishlist}
              className="relative w-10 h-10 rounded-full bg-[#F1F5F9] dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-rose-500 hover:bg-rose-50 dark:hover:bg-slate-700 flex items-center justify-center transition-colors"
              title="Sevimlilar"
            >
              <Heart className={`w-4 h-4 ${favoritesCount > 0 ? 'fill-rose-500 text-rose-500' : ''}`} />
              {favoritesCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-rose-500 text-white text-[10px] font-black w-4.5 h-4.5 rounded-full flex items-center justify-center">
                  {favoritesCount}
                </span>
              )}
            </button>

            {/* Cart Button with Red Notification Badge (Matching Reference red "2") */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative w-10 h-10 rounded-full bg-[#F1F5F9] dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:text-[#1D72FE] hover:bg-blue-50 dark:hover:bg-slate-700 flex items-center justify-center transition-colors"
              title="Savat"
            >
              <ShoppingBag className="w-4 h-4" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-black w-4.5 h-4.5 rounded-full flex items-center justify-center shadow-xs">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Kirish Button (Blue Pill Button with User Icon) */}
            {user ? (
              <button
                onClick={onOpenProfile}
                className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1D72FE] text-white font-bold text-xs sm:text-sm shadow-md shadow-blue-500/25 hover:bg-blue-600 transition-all"
              >
                <User className="w-4 h-4" />
                <span className="max-w-[90px] truncate">{user.name}</span>
              </button>
            ) : (
              <button
                onClick={onOpenAuth}
                className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1D72FE] text-white font-bold text-xs sm:text-sm shadow-md shadow-blue-500/25 hover:bg-blue-600 transition-all"
              >
                <User className="w-4 h-4" />
                <span>Kirish</span>
              </button>
            )}

            {/* Mobile Hamburger Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="xl:hidden w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 flex items-center justify-center"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="xl:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-6 py-4 space-y-2 animate-fadeIn shadow-xl">
          <button
            onClick={() => handleNavClick('home')}
            className="w-full text-left px-4 py-2.5 rounded-xl font-bold text-sm bg-blue-50 dark:bg-slate-800 text-[#1D72FE]"
          >
            Bosh sahifa
          </button>
          <button
            onClick={() => handleNavClick('services')}
            className="w-full text-left px-4 py-2.5 rounded-xl font-bold text-sm text-slate-700 dark:text-slate-200"
          >
            Xizmatlar
          </button>
          <button
            onClick={() => handleNavClick('shop')}
            className="w-full text-left px-4 py-2.5 rounded-xl font-bold text-sm text-slate-700 dark:text-slate-200"
          >
            Do'kon
          </button>
          <button
            onClick={() => handleNavClick('about')}
            className="w-full text-left px-4 py-2.5 rounded-xl font-bold text-sm text-slate-700 dark:text-slate-200"
          >
            Biz haqimizda
          </button>
          <button
            onClick={() => handleNavClick('contact')}
            className="w-full text-left px-4 py-2.5 rounded-xl font-bold text-sm text-slate-700 dark:text-slate-200"
          >
            Bog'lanish
          </button>
        </div>
      )}
    </header>
  );
}
