import React, { useState, useRef } from 'react';
import { Star, Heart, ShoppingBag, Check, ArrowRight, Sparkles, Lightbulb, Moon, Sun } from 'lucide-react';
import { products } from '../data/products';

export default function Shop({ onAddToCart, onBuyNow, favorites = [], onToggleFavorite, onOpenFullShop, t, products: propProducts }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [showAll, setShowAll] = useState(false);
  const [addedIds, setAddedIds] = useState([]);

  // =========================================================================
  // INTERAKTIV CHIROQ KALITI (TORTMA IP / PULL CORD LIGHT SWITCH)
  // =========================================================================
  const [isLightOn, setIsLightOn] = useState(true);
  const [isPulling, setIsPulling] = useState(false);
  const [dragY, setDragY] = useState(0);
  const dragStartY = useRef(null);

  const allProducts = propProducts || products;

  const shopT = t?.shopSection || {
    title: "Mahsulotlar do'koni",
    subtitle: "Zamonaviy lyustralar, energiya tejovchi lampochkalar va yuqori quvvatli konditsionerlar",
    viewMore: "Yana ko'rish (Barcha mahsulotlar)",
    less: "Kamroq ko'rsatish",
    all: "Barchasi",
    chandelier: "Lyustralar",
    lamp: "Lampochkalar",
    ac: "Konditsionerlar",
    pullCordHint: "Chiroqni yoqish / o'chirish uchun ipni bosing yoki torting!",
    lightOn: "Chiroqlar: YONIQ 💡",
    lightOff: "Chiroqlar: O'CHIQ 🌙",
    buyNow: "Sotib olish",
    addToCart: "Savatga",
    added: "Qo'shildi",
    currency: "AED",
    reviews: "baho"
  };

  // Faqat 3 toifa: Lyustra, Lampochka, Konditsioner (+ Barchasi)
  const categories = [
    { id: 'all', label: shopT.all || "Barchasi" },
    { id: 'chandelier', label: shopT.chandelier || "Lyustralar" },
    { id: 'lamp', label: shopT.lamp || "Lampochkalar" },
    { id: 'ac', label: shopT.ac || "Konditsionerlar" }
  ];

  // =========================================================================
  // MEXANIK KALIT CHIQILLASH OVOZI (WEB AUDIO API — 0 KUTUBXONA, 100% ISHONCHLI)
  // =========================================================================
  const playSwitchSound = (turnOn) => {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(turnOn ? 1200 : 700, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(140, ctx.currentTime + 0.05);

      gain.gain.setValueAtTime(0.25, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.06);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.06);

      // Ikkinchi prujina qaytish chiqillashi
      setTimeout(() => {
        try {
          const osc2 = ctx.createOscillator();
          const gain2 = ctx.createGain();
          osc2.type = 'sine';
          osc2.frequency.setValueAtTime(turnOn ? 900 : 500, ctx.currentTime);
          osc2.frequency.exponentialRampToValueAtTime(200, ctx.currentTime + 0.04);
          gain2.gain.setValueAtTime(0.15, ctx.currentTime);
          gain2.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.04);
          osc2.connect(gain2);
          gain2.connect(ctx.destination);
          osc2.start();
          osc2.stop(ctx.currentTime + 0.04);
        } catch {}
      }, 45);
    } catch (e) {
      // Audio brauzer tomonidan bloklangan bo'lsa xato chiqarmaydi
    }
  };

  // Ipni bosish yoki tortish funksiyasi
  const triggerPullSwitch = () => {
    if (isPulling) return;
    setIsPulling(true);
    setDragY(26);

    const nextState = !isLightOn;
    playSwitchSound(nextState);

    setTimeout(() => {
      setIsLightOn(nextState);
      setDragY(0);
      setIsPulling(false);
    }, 220);
  };

  // Sensorli ekran va sichqoncha bilan pastga tortish hodisalari
  const handleTouchStart = (e) => {
    dragStartY.current = e.touches[0].clientY;
  };

  const handleTouchMove = (e) => {
    if (dragStartY.current === null) return;
    const currentY = e.touches[0].clientY;
    const diff = Math.max(0, Math.min(35, currentY - dragStartY.current));
    setDragY(diff);
  };

  const handleTouchEnd = () => {
    if (dragY > 12) {
      triggerPullSwitch();
    } else {
      setDragY(0);
    }
    dragStartY.current = null;
  };

  const handleMouseDown = (e) => {
    dragStartY.current = e.clientY;
    const onMouseMove = (moveEvent) => {
      if (dragStartY.current === null) return;
      const diff = Math.max(0, Math.min(35, moveEvent.clientY - dragStartY.current));
      setDragY(diff);
    };
    const onMouseUp = () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      if (dragY > 12) {
        triggerPullSwitch();
      } else {
        setDragY(0);
      }
      dragStartY.current = null;
    };
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
  };

  // Kategoriya bo'yicha filter
  const filtered = activeCategory === 'all'
    ? allProducts
    : allProducts.filter(p => p.category === activeCategory);

  // 1 TA JOYDA / SAHIFADA: Agar showAll bo'lsa barcha mahsulotlar shu sahifada ochiladi
  const displayProducts = showAll ? filtered : filtered.slice(0, 10);

  const formatPrice = (val) => {
    return val?.toLocaleString() || val;
  };

  const handleAddToCartClick = (e, prod) => {
    e.stopPropagation();
    onAddToCart({
      id: prod.id,
      name: prod.name,
      price: prod.price,
      quantity: 1,
      image: prod.image
    });
    setAddedIds(prev => [...prev, prod.id]);
    setTimeout(() => {
      setAddedIds(prev => prev.filter(id => id !== prod.id));
    }, 1500);
  };

  return (
    <section 
      id="shop" 
      className={`relative py-8 sm:py-12 lg:py-16 w-full max-w-full overflow-hidden transition-all duration-700 ${
        isLightOn 
          ? 'bg-[#F3F7FC]' 
          : 'bg-[#0B132B] text-white shadow-2xl'
      }`}
    >
      {/* =========================================================================
          YORUG'LIK NURLARI ANIMATSIYASI (CHIROQ YONGANDA BUTUN DO'KONNI YORITADI)
          ========================================================================= */}
      {isLightOn && (
        <div 
          className="absolute inset-0 pointer-events-none transition-opacity duration-1000 opacity-100 z-0"
          style={{
            background: 'radial-gradient(circle at 85% 6%, rgba(254, 240, 138, 0.45) 0%, rgba(251, 191, 36, 0.12) 35%, transparent 70%)'
          }}
        />
      )}

      {/* Chiroq o'chgandagi atmosfera nuri */}
      {!isLightOn && (
        <div 
          className="absolute inset-0 pointer-events-none transition-opacity duration-1000 opacity-100 z-0"
          style={{
            background: 'radial-gradient(circle at 85% 6%, rgba(59, 130, 246, 0.2) 0%, rgba(30, 41, 59, 0.4) 40%, transparent 80%)'
          }}
        />
      )}

      <div className="relative z-10 max-w-[1920px] mx-auto px-3.5 sm:px-8 lg:px-12 2xl:px-16 w-full max-w-full">
        
        {/* =========================================================================
            1. HEADER: SARLAVHA + INTERAKTIV TORTMA IP (CHIROQ KALITI) + KATEGORIYA FILTRLARI
            ========================================================================= */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6 sm:mb-8 w-full max-w-full min-w-0">
          
          {/* Chap tomon: Sarlavha va status */}
          <div className="min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <span className="w-1.5 h-5 sm:h-6 bg-[#1D72FE] rounded-full inline-block"></span>
              <h2 className={`text-xl sm:text-2xl lg:text-3xl font-black tracking-tight transition-colors duration-500 ${
                isLightOn ? 'text-[#0B1528]' : 'text-white'
              }`}>
                {shopT.title}
              </h2>
            </div>
            <p className={`text-xs sm:text-sm font-medium ml-3.5 sm:ml-4 transition-colors duration-500 ${
              isLightOn ? 'text-slate-500' : 'text-slate-300'
            }`}>
              {shopT.subtitle}
            </p>
          </div>

          {/* O'rta / O'ng tomon: INTERAKTIV TORTMA IP KALITI (FOYDALANUVCHI TALABI) */}
          <div className="flex items-center justify-between lg:justify-end gap-3 flex-wrap">
            
            {/* INTERAKTIV TORTMA IP BLOKI */}
            <div 
              className={`flex items-center gap-3 px-3.5 py-2 rounded-2xl border transition-all duration-300 shadow-sm ${
                isLightOn 
                  ? 'bg-amber-50/90 border-amber-200/90 shadow-amber-500/10' 
                  : 'bg-slate-800/90 border-slate-700 shadow-blue-500/10'
              }`}
            >
              {/* Ip haqida qisqa tushuntirish */}
              <div className="text-left">
                <div className="flex items-center gap-1.5">
                  <span className={`w-2 h-2 rounded-full ${isLightOn ? 'bg-emerald-500 animate-pulse' : 'bg-rose-500'}`} />
                  <span className={`text-[11px] sm:text-xs font-black uppercase tracking-wider ${
                    isLightOn ? 'text-amber-900' : 'text-amber-300'
                  }`}>
                    {isLightOn ? (shopT.lightOn || "Chiroqlar: YONIQ 💡") : (shopT.lightOff || "Chiroqlar: O'CHIQ 🌙")}
                  </span>
                </div>
                <div className={`text-[10px] font-bold ${
                  isLightOn ? 'text-amber-700/80' : 'text-slate-400'
                }`}>
                  {shopT.pullCordHint || "Ipni pastga torting yoki bosing"}
                </div>
              </div>

              {/* HANGING PULL-CORD (TORTMA IP SVG VA BOSQICHI) */}
              <div 
                className="relative cursor-pointer select-none py-1 group flex flex-col items-center"
                onClick={triggerPullSwitch}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                onMouseDown={handleMouseDown}
                title={shopT.pullCordHint || "Ipni torting yoki bosing"}
              >
                {/* Shiftga qotirish metall bazasi */}
                <div className="w-5 h-2 rounded-t-sm bg-gradient-to-r from-amber-600 via-yellow-400 to-amber-700 shadow-xs border border-amber-800/40" />

                {/* Cho'ziluvchi metall zanjir / ip */}
                <div 
                  className="flex flex-col items-center transition-transform duration-150 ease-out origin-top"
                  style={{
                    transform: `translateY(${dragY}px)`
                  }}
                >
                  {/* Metall munchoq zanjir (Beaded pull cord chain) */}
                  <div className="w-1 h-7 flex flex-col justify-between items-center py-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shadow-2xs" />
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-300 shadow-2xs" />
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shadow-2xs" />
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shadow-2xs" />
                  </div>

                  {/* Ip uchidagi bronza/oltin qo'ng'iroqcha (Pull bell knob) */}
                  <div className="relative">
                    <div className={`w-5 h-6 rounded-b-xl rounded-t-sm bg-gradient-to-b from-yellow-300 via-amber-400 to-amber-600 shadow-md border border-amber-700/50 flex items-center justify-center transition-all ${
                      isLightOn 
                        ? 'ring-2 ring-amber-400/80 shadow-[0_0_15px_rgba(251,191,36,0.8)]' 
                        : 'group-hover:ring-2 group-hover:ring-blue-400/80'
                    }`}>
                      {/* Oltin chiziqcha */}
                      <span className="w-2.5 h-0.5 bg-amber-200/80 rounded-full" />
                    </div>

                    {/* Qo'ng'iroqcha nuri yoki puls belgisi */}
                    {isLightOn && (
                      <span className="absolute -inset-1 rounded-xl bg-amber-400/30 blur-xs -z-10 animate-pulse" />
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Kategoriya filtr tabletkalari (gorizontal scroll bilan) */}
            <div className="w-full sm:w-auto min-w-0 max-w-full overflow-hidden">
              <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-1 max-w-full no-scrollbar scrollbar-none [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`px-3.5 sm:px-5 py-2 rounded-full text-xs font-black whitespace-nowrap transition-all ${
                      activeCategory === cat.id
                        ? 'bg-[#1D72FE] text-white shadow-md shadow-blue-500/25 ring-2 ring-blue-400/40'
                        : isLightOn
                          ? 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200/90 shadow-2xs'
                          : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 shadow-2xs'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>

          </div>

        </div>

        {/* =========================================================================
            2. MOBILDA 1 QATORDA 2 TADAN MAHSULOT: grid-cols-2 (LYUSTRA, LAMPOCHKA, KONDITSIONER)
            ========================================================================= */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 gap-2.5 sm:gap-5 2xl:gap-6 w-full max-w-full">
          {displayProducts.map((prod) => {
            const isFav = favorites.includes(prod.id);
            const isAdded = addedIds.includes(prod.id);
            const prodName = t?.products?.[prod.id]?.name || prod.name;
            const prodBadge = t?.products?.[prod.id]?.badge || prod.badge;

            // Chiroq o'chganda lyustra va lampalarga maxsus shinam yorug'lik nuri
            const isLightingProduct = prod.category === 'chandelier' || prod.category === 'lamp';

            return (
              <div
                key={prod.id}
                className={`group relative rounded-2xl sm:rounded-3xl p-2.5 sm:p-5 border transition-all duration-500 flex flex-col justify-between min-w-0 w-full ${
                  isLightOn
                    ? isLightingProduct
                      ? 'bg-white border-amber-200/70 shadow-md shadow-amber-500/10 hover:shadow-xl hover:shadow-amber-500/20 hover:border-amber-400'
                      : 'bg-white border-blue-100/80 shadow-soft hover:shadow-card hover:border-[#1D72FE]/40'
                    : isLightingProduct
                      ? 'bg-slate-900/95 border-amber-500/40 shadow-[0_0_25px_rgba(251,191,36,0.15)] hover:border-amber-400'
                      : 'bg-slate-900/85 border-slate-800 hover:border-slate-700 shadow-xl'
                }`}
              >
                <div>
                  {/* Mahsulot rasmi va Wishlist */}
                  <div className="relative aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden bg-slate-100 mb-2.5 sm:mb-3.5 shadow-inner">
                    <img
                      src={prod.image}
                      alt={prodName}
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = "https://images.unsplash.com/photo-1543198126-a8ad8e47fb22?auto=format&fit=crop&w=700&q=80";
                      }}
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                      loading="lazy"
                    />

                    {/* Chiroq o'chganida lyustra va lampalarga ichki nur effekti */}
                    {!isLightOn && isLightingProduct && (
                      <div className="absolute inset-0 bg-radial-at-c from-amber-400/20 to-transparent pointer-events-none" />
                    )}

                    {/* Badge */}
                    {prodBadge && (
                      <span className="absolute top-1.5 left-1.5 sm:top-2 sm:left-2 px-1.5 sm:px-2.5 py-0.5 rounded-md sm:rounded-lg bg-black/70 backdrop-blur-xs text-white text-[9px] sm:text-[10px] font-black truncate max-w-[85px] sm:max-w-none shadow-xs">
                        {prodBadge}
                      </span>
                    )}

                    {/* Wishlist Yurakcha tugmasi */}
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onToggleFavorite(prod.id);
                      }}
                      className={`absolute top-1.5 right-1.5 sm:top-2 sm:right-2 w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-all ${
                        isFav 
                          ? 'bg-rose-50 text-rose-500 shadow-sm' 
                          : 'bg-white/90 text-slate-400 hover:text-rose-500 hover:bg-white shadow-xs'
                      }`}
                      title="Sevimlilarga qo'shish"
                    >
                      <Heart className={`w-3 h-3 sm:w-4 sm:h-4 ${isFav ? 'fill-rose-500 text-rose-500' : ''}`} />
                    </button>
                  </div>

                  {/* Reyting va Baholar */}
                  <div className="flex items-center gap-1 mb-1">
                    <Star className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-amber-400 text-amber-400" />
                    <span className={`text-[11px] sm:text-xs font-black ${isLightOn ? 'text-slate-900' : 'text-slate-100'}`}>
                      {prod.rating}
                    </span>
                    <span className="text-[10px] sm:text-[11px] text-slate-400 font-medium">
                      ({prod.reviews})
                    </span>
                  </div>

                  {/* Mahsulot nomi */}
                  <h3 className={`font-bold sm:font-black text-xs sm:text-sm leading-tight sm:leading-snug line-clamp-2 min-h-[30px] sm:min-h-[38px] transition-colors ${
                    isLightOn 
                      ? 'text-[#0B1528] group-hover:text-[#1D72FE]' 
                      : 'text-white group-hover:text-amber-300'
                  }`}>
                    {prodName}
                  </h3>

                  {/* Texnik qisqa parametr */}
                  <div className="mt-1 text-[10px] sm:text-[11px] text-slate-400 truncate">
                    {prod.specs?.power || prod.specs?.voltage || prod.specs?.length || "Rasmiy kafolat"}
                  </div>

                  {/* Narx */}
                  <div className="mt-1.5 mb-2 sm:mt-2 sm:mb-3">
                    <div className={`text-sm sm:text-lg font-black leading-tight ${
                      isLightOn ? 'text-[#0B1528]' : 'text-white'
                    }`}>
                      {formatPrice(prod.price)}{' '}
                      <span className="text-[10px] sm:text-xs font-black text-[#1D72FE]">
                        {shopT.currency}
                      </span>
                    </div>
                    {prod.oldPrice && (
                      <div className="text-[10px] sm:text-[11px] text-slate-400 line-through font-medium">
                        {formatPrice(prod.oldPrice)} {shopT.currency}
                      </div>
                    )}
                  </div>
                </div>

                {/* Pastki amallar: Sotib olish + Savatga qo'shish */}
                <div className={`flex items-center gap-1.5 sm:gap-2 pt-2 sm:pt-3 border-t ${
                  isLightOn ? 'border-slate-100' : 'border-slate-800'
                }`}>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onBuyNow({ ...prod, name: prodName });
                    }}
                    className={`flex-1 py-1.5 sm:py-2.5 rounded-xl font-black text-[10px] sm:text-xs transition-all text-center truncate ${
                      isLightOn
                        ? 'bg-blue-50 hover:bg-blue-100 text-[#1D72FE]'
                        : 'bg-slate-800 hover:bg-slate-700 text-blue-400'
                    }`}
                  >
                    {shopT.buyNow}
                  </button>

                  <button
                    type="button"
                    onClick={(e) => handleAddToCartClick(e, { ...prod, name: prodName })}
                    className={`w-7 h-7 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center transition-all ${
                      isAdded 
                        ? 'bg-emerald-500 text-white' 
                        : 'bg-[#1D72FE] text-white hover:bg-blue-600'
                    } shadow-md shadow-blue-500/20 flex-shrink-0 active:scale-95`}
                    title={shopT.addToCart}
                  >
                    {isAdded ? (
                      <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    ) : (
                      <ShoppingBag className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    )}
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* =========================================================================
            3. TEGIDA MARKAZIY "YANA KO'RISH" TUGMASI (SHU SAHIFADA BARCHA MAHSULOTLARNI OCHADI)
            ========================================================================= */}
        <div className="mt-8 sm:mt-12 text-center w-full px-2">
          <button
            onClick={() => setShowAll(!showAll)}
            className={`inline-flex items-center justify-center gap-2 sm:gap-3 px-5 sm:px-10 py-3 sm:py-4 max-w-full rounded-full font-black text-xs sm:text-base border-2 shadow-lg transition-all duration-300 transform hover:-translate-y-1 group ${
              isLightOn
                ? 'bg-white hover:bg-[#1D72FE] text-slate-800 hover:text-white border-[#1D72FE] shadow-blue-500/10 hover:shadow-blue-500/30'
                : 'bg-slate-800 hover:bg-[#1D72FE] text-white border-blue-500 shadow-blue-500/20'
            }`}
          >
            <Sparkles className="w-4 h-4 text-[#1D72FE] group-hover:text-white transition-colors flex-shrink-0" />
            <span className="truncate">{showAll ? (shopT.less || "Kamroq ko'rsatish") : shopT.viewMore}</span>
            <ArrowRight className={`w-4 h-4 transition-transform flex-shrink-0 ${showAll ? '-rotate-90' : 'group-hover:translate-x-1.5'}`} />
          </button>
        </div>

      </div>
    </section>
  );
}
