import React, { useState } from 'react';
import { Star, Heart, ShoppingBag, Check, ArrowRight, Sparkles } from 'lucide-react';
import { products } from '../data/products';

export default function Shop({ onAddToCart, onBuyNow, favorites = [], onToggleFavorite, onOpenFullShop, t, products: propProducts }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [showAll, setShowAll] = useState(false);
  const [addedIds, setAddedIds] = useState([]);

  const allProducts = propProducts || products;

  const shopT = t?.shopSection || {
    title: "Mahsulotlar do'koni",
    subtitle: "Zamonaviy lyustralar va sifatli energiya tejovchi lampochkalar",
    viewMore: "Yana ko'rish (Barcha mahsulotlar)",
    less: "Kamroq ko'rsatish",
    all: "Barchasi",
    chandelier: "Lyustralar",
    lamp: "Lampochkalar",
    buyNow: "Sotib olish",
    addToCart: "Savatga",
    added: "Qo'shildi",
    currency: "AED",
    reviews: "baho"
  };

  const categories = [
    { id: 'all', label: shopT.all || "Barchasi" },
    { id: 'chandelier', label: shopT.chandelier || "Lyustralar" },
    { id: 'lamp', label: shopT.lamp || "Lampochkalar" }
  ];

  // Kategoriya bo'yicha filter
  const filtered = activeCategory === 'all'
    ? allProducts
    : allProducts.filter(p => p.category === activeCategory);

  const displayProducts = showAll ? filtered : filtered.slice(0, 8);

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
    <section id="shop" className="py-8 sm:py-12 lg:py-16 w-full max-w-full overflow-hidden bg-[#F3F7FC]">
      <div className="max-w-[1920px] mx-auto px-3.5 sm:px-8 lg:px-12 2xl:px-16 w-full max-w-full">
        
        {/* =========================================================================
            1. HEADER (SARLAVHA VA KATEGORIYA FILTRLARI — TOZA, TARTIBLI, ZAMONAVIY)
            ========================================================================= */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 mb-5 sm:mb-8 w-full max-w-full min-w-0">
          <div className="min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <span className="w-1.5 h-5 sm:h-6 bg-[#1D72FE] rounded-full inline-block"></span>
              <h2 className="text-lg sm:text-2xl lg:text-3xl font-black text-[#0B1528] tracking-tight">
                {shopT.title}
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 font-medium ml-3.5 sm:ml-4">
              {shopT.subtitle}
            </p>
          </div>

          {/* Kategoriya filtr tabletkalari (Barchasi, Lyustralar, Lampochkalar) */}
          <div className="w-full md:w-auto min-w-0 max-w-full overflow-hidden">
            <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-1 max-w-full no-scrollbar scrollbar-none [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3.5 sm:px-5 py-2 rounded-full text-xs font-black whitespace-nowrap transition-all ${
                    activeCategory === cat.id
                      ? 'bg-[#1D72FE] text-white shadow-md shadow-blue-500/25 ring-2 ring-blue-400/40'
                      : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200/90 shadow-2xs'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* =========================================================================
            2. MOBILDA 1 QATORDA 2 TADAN MAHSULOT: grid-cols-2 (LYUSTRALAR VA LAMPOCHKALAR)
            ========================================================================= */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-4 gap-2.5 sm:gap-5 2xl:gap-6 w-full max-w-full">
          {displayProducts.map((prod) => {
            const isFav = favorites.includes(prod.id);
            const isAdded = addedIds.includes(prod.id);
            const prodName = t?.products?.[prod.id]?.name || prod.name;
            const prodBadge = t?.products?.[prod.id]?.badge || prod.badge;

            return (
              <div
                key={prod.id}
                className="group relative bg-white rounded-2xl sm:rounded-3xl p-2.5 sm:p-5 border border-blue-100/80 shadow-soft hover:shadow-card hover:border-[#1D72FE]/40 transition-all duration-300 flex flex-col justify-between min-w-0 w-full"
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
                    <span className="text-[11px] sm:text-xs font-black text-slate-900">
                      {prod.rating}
                    </span>
                    <span className="text-[10px] sm:text-[11px] text-slate-400 font-medium">
                      ({prod.reviews})
                    </span>
                  </div>

                  {/* Mahsulot nomi */}
                  <h3 className="font-bold sm:font-black text-xs sm:text-sm text-[#0B1528] leading-tight sm:leading-snug line-clamp-2 min-h-[30px] sm:min-h-[38px] group-hover:text-[#1D72FE] transition-colors">
                    {prodName}
                  </h3>

                  {/* Texnik qisqa parametr */}
                  <div className="mt-1 text-[10px] sm:text-[11px] text-slate-400 truncate">
                    {prod.specs?.power || prod.specs?.voltage || prod.specs?.length || prod.specs?.material || "Rasmiy kafolat"}
                  </div>

                  {/* Narx */}
                  <div className="mt-1.5 mb-2 sm:mt-2 sm:mb-3">
                    <div className="text-sm sm:text-lg font-black text-[#0B1528] leading-tight">
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
                <div className="flex items-center gap-1.5 sm:gap-2 pt-2 sm:pt-3 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onBuyNow({ ...prod, name: prodName });
                    }}
                    className="flex-1 py-1.5 sm:py-2.5 rounded-xl bg-blue-50 hover:bg-blue-100 text-[#1D72FE] font-black text-[10px] sm:text-xs transition-all text-center truncate"
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
            3. TEGIDA MARKAZIY "YANA KO'RISH" TUGMASI (SHU SAHIFADA HAMMASINI OCHADI)
            ========================================================================= */}
        <div className="mt-8 sm:mt-12 text-center w-full px-2">
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center justify-center gap-2 sm:gap-3 px-5 sm:px-10 py-3 sm:py-4 max-w-full rounded-full bg-white hover:bg-[#1D72FE] text-slate-800 hover:text-white font-black text-xs sm:text-base border-2 border-[#1D72FE] shadow-lg shadow-blue-500/10 hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-1 group"
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
