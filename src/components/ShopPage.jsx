import React, { useState, useMemo } from 'react';
import { 
  ArrowLeft, 
  Search, 
  SlidersHorizontal, 
  Star, 
  Heart, 
  ShoppingBag, 
  Check, 
  ShieldCheck, 
  Zap, 
  ChevronDown, 
  X,
  Sparkles,
  Info
} from 'lucide-react';
import { products } from '../data/products';

export default function ShopPage({ onBack, onAddToCart, onBuyNow, favorites = [], onToggleFavorite, t }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('popular'); // 'popular', 'priceAsc', 'priceDesc', 'rating'
  const [addedIds, setAddedIds] = useState([]);
  const [selectedProductDetail, setSelectedProductDetail] = useState(null);

  const shopPageT = t?.shopPage || {
    backHome: "Bosh sahifaga qaytish",
    title: "HavviyEnergiya Do'koni — Barcha Mahsulotlar",
    subtitle: "Dubay bo'yicha rasmiy kafolatli konditsionerlar, elektr avtomatlari va kabellar",
    searchPlaceholder: "Mahsulot nomi yoki brend bo'yicha qidirish...",
    itemsFound: "ta mahsulot topildi",
    sortLabel: "Saralash:",
    sortPopular: "Ommabop",
    sortPriceLow: "Arzonroq",
    sortPriceHigh: "Qimmatroq",
    sortRating: "Yuqori reyting",
    noResults: "Mahsulot topilmadi",
    noResultsDesc: "Boshqa qidiruv so'zi yoki toifani tanlab ko'ring"
  };

  const shopT = t?.shopSection || {
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

  // Qidiruv, filter va saralash
  const filteredProducts = useMemo(() => {
    return products
      .filter((p) => {
        const matchesCategory = selectedCategory === 'all' || p.category === selectedCategory;
        const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.badge?.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
      })
      .sort((a, b) => {
        if (sortBy === 'priceAsc') return a.price - b.price;
        if (sortBy === 'priceDesc') return b.price - a.price;
        if (sortBy === 'rating') return b.rating - a.rating;
        return 0; // popular
      });
  }, [selectedCategory, searchQuery, sortBy]);

  const handleAddToCartClick = (prod) => {
    onAddToCart({
      id: prod.id,
      name: prod.name,
      price: prod.price,
      quantity: 1,
      image: prod.image
    });
    setAddedIds((prev) => [...prev, prod.id]);
    setTimeout(() => {
      setAddedIds((prev) => prev.filter((id) => id !== prod.id));
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#F4F7FC] text-slate-800 pb-16 animate-fadeIn">
      
      {/* =========================================================================
          1. YUQORI QAYTISH PANELI
          ========================================================================= */}
      <div className="bg-white border-b border-slate-200/80 sticky top-0 z-30 shadow-2xs">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12 2xl:px-16 py-3.5 flex items-center justify-between gap-4">
          
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 hover:bg-blue-50 text-slate-700 hover:text-[#1D72FE] font-bold text-xs sm:text-sm transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{shopPageT.backHome}</span>
          </button>

          <div className="flex items-center gap-2">
            <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[#1D72FE] text-xs font-black border border-blue-100">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Rasmiy Dubay kafolati</span>
            </span>
          </div>

        </div>
      </div>

      <div className="max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12 2xl:px-16 pt-6 sm:pt-8 space-y-6 sm:space-y-8">
        
        {/* =========================================================================
            2. DO'KON BANNERI VA SARLAVHASI
            ========================================================================= */}
        <div className="relative rounded-3xl bg-white border border-blue-100 p-6 sm:p-8 shadow-soft overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-blue-100/50 via-blue-50/20 to-transparent rounded-full -mr-16 -mt-16 pointer-events-none"></div>

          <div className="relative z-10 max-w-2xl">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 text-[#1D72FE] text-xs font-black border border-blue-100 mb-3">
              <Zap className="w-3.5 h-3.5 fill-[#1D72FE]" />
              <span>To'liq Mahsulotlar Katalogi</span>
            </span>
            <h1 className="text-2xl sm:text-4xl font-black text-[#0B1528] tracking-tight">
              {shopPageT.title}
            </h1>
            <p className="text-xs sm:text-base text-slate-500 font-medium mt-2 leading-relaxed">
              {shopPageT.subtitle}
            </p>
          </div>
        </div>

        {/* =========================================================================
            3. QIDIRUV VA FILTR BOSHQARUV PANELI
            ========================================================================= */}
        <div className="bg-white rounded-3xl p-4 sm:p-6 border border-slate-100 shadow-soft space-y-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            
            {/* Qidiruv inputi */}
            <div className="relative flex-1 max-w-lg">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={shopPageT.searchPlaceholder}
                className="w-full pl-10 pr-10 py-2.5 rounded-2xl bg-[#F8FAFC] border border-slate-200 text-xs sm:text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#1D72FE] text-slate-900"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Saralash tanlagichi */}
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold text-slate-400 whitespace-nowrap">
                {shopPageT.sortLabel}
              </span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs font-bold text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#1D72FE]"
              >
                <option value="popular">{shopPageT.sortPopular}</option>
                <option value="priceAsc">{shopPageT.sortPriceLow}</option>
                <option value="priceDesc">{shopPageT.sortPriceHigh}</option>
                <option value="rating">{shopPageT.sortRating}</option>
              </select>
            </div>

          </div>

          {/* Kategoriya filtr tabletkalari va Natijalar soni */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2 border-t border-slate-100">
            <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar scrollbar-none [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                    selectedCategory === cat.id
                      ? 'bg-[#1D72FE] text-white shadow-md shadow-blue-500/25'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            <div className="text-xs font-bold text-slate-400 whitespace-nowrap">
              <span className="text-[#1D72FE] font-black">{filteredProducts.length}</span> {shopPageT.itemsFound}
            </div>
          </div>
        </div>

        {/* =========================================================================
            4. BARCHA MAHSULOTLAR GRIDI
            ========================================================================= */}
        {filteredProducts.length === 0 ? (
          <div className="bg-white rounded-3xl p-12 text-center border border-slate-100 space-y-3">
            <div className="w-16 h-16 rounded-2xl bg-blue-50 text-[#1D72FE] flex items-center justify-center mx-auto">
              <ShoppingBag className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-black text-slate-900">
              {shopPageT.noResults}
            </h3>
            <p className="text-xs text-slate-400 max-w-sm mx-auto">
              {shopPageT.noResultsDesc}
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="mt-2 px-5 py-2 rounded-full bg-[#1D72FE] text-white font-bold text-xs shadow-md"
            >
              Filtrni tozalash
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-2.5 sm:gap-6 w-full max-w-full">
            {filteredProducts.map((prod) => {
              const isFav = favorites.includes(prod.id);
              const isAdded = addedIds.includes(prod.id);

              return (
                <div
                  key={prod.id}
                  className="group relative bg-white rounded-2xl sm:rounded-3xl p-2.5 sm:p-5 border border-blue-100/70 shadow-soft hover:shadow-card hover:border-[#1D72FE]/40 transition-all duration-300 flex flex-col justify-between min-w-0 w-full"
                >
                  <div>
                    {/* Mahsulot rasmi va Wishlist */}
                    <div 
                      onClick={() => setSelectedProductDetail(prod)}
                      className="relative aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden bg-slate-100 mb-2.5 sm:mb-3.5 shadow-inner cursor-pointer"
                    >
                      <img
                        src={prod.image}
                        alt={prod.name}
                        onError={(e) => {
                          e.currentTarget.onerror = null;
                          e.currentTarget.src = "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=700&q=80";
                        }}
                        className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                        loading="lazy"
                      />

                      {prod.badge && (
                        <span className="absolute top-1.5 left-1.5 sm:top-2.5 sm:left-2.5 px-1.5 sm:px-2.5 py-0.5 sm:py-1 rounded-md sm:rounded-lg bg-black/60 backdrop-blur-xs text-white text-[9px] sm:text-[10px] font-black truncate max-w-[65px] sm:max-w-none">
                          {prod.badge}
                        </span>
                      )}

                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          onToggleFavorite(prod.id);
                        }}
                        className={`absolute top-1.5 right-1.5 sm:top-2.5 sm:right-2.5 w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-all ${
                          isFav 
                            ? 'bg-rose-50 text-rose-500 shadow-sm' 
                            : 'bg-white/90 text-slate-400 hover:text-rose-500 hover:bg-white shadow-xs'
                        }`}
                        title="Sevimlilarga qo'shish"
                      >
                        <Heart className={`w-3 h-3 sm:w-4 sm:h-4 ${isFav ? 'fill-rose-500 text-rose-500' : ''}`} />
                      </button>
                    </div>

                    {/* Reyting */}
                    <div className="flex items-center gap-1 mb-1">
                      <Star className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-amber-400 text-amber-400" />
                      <span className="text-[11px] sm:text-xs font-black text-slate-900">
                        {prod.rating}
                      </span>
                      <span className="text-[10px] sm:text-[11px] text-slate-400 font-medium truncate">
                        ({prod.reviews})
                      </span>
                    </div>

                    {/* Nomi */}
                    <h3 
                      onClick={() => setSelectedProductDetail(prod)}
                      className="font-bold sm:font-black text-xs sm:text-sm text-[#0B1528] leading-tight sm:leading-snug line-clamp-2 min-h-[30px] sm:min-h-[40px] group-hover:text-[#1D72FE] transition-colors cursor-pointer"
                    >
                      {prod.name}
                    </h3>

                    {/* Narx */}
                    <div className="mt-1.5 mb-2 sm:mt-3 sm:mb-3">
                      <div className="text-xs sm:text-base lg:text-lg font-black text-[#0B1528] leading-tight">
                        {prod.price?.toLocaleString()}{' '}
                        <span className="text-[10px] sm:text-xs font-black text-[#1D72FE]">
                          {shopT.currency}
                        </span>
                      </div>
                      {prod.oldPrice && (
                        <div className="text-[10px] sm:text-[11px] text-slate-400 line-through font-medium">
                          {prod.oldPrice?.toLocaleString()} {shopT.currency}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Amallar: Sotib olish + Savatga qo'shish */}
                  <div className="flex items-center gap-1.5 sm:gap-2 pt-2 sm:pt-3 border-t border-slate-100">
                    <button
                      onClick={() => onBuyNow(prod)}
                      className="flex-1 py-1.5 sm:py-2.5 rounded-xl bg-blue-50 hover:bg-blue-100 text-[#1D72FE] font-bold text-[10px] sm:text-xs transition-all text-center truncate"
                    >
                      {shopT.buyNow}
                    </button>
                    <button
                      onClick={() => handleAddToCart(prod)}
                      className={`w-7 h-7 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center transition-all ${
                        isAdded 
                          ? 'bg-emerald-500 text-white' 
                          : 'bg-[#1D72FE] text-white hover:bg-blue-600'
                      } shadow-md shadow-blue-500/20 flex-shrink-0`}
                      title="Savatga qo'shish"
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
        )}

      </div>

      {/* =========================================================================
          5. MAHSULOTNING TO'LIQ DETALLI KO'RINISH MODALI (QUICK VIEW)
          ========================================================================= */}
      {selectedProductDetail && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-2xl bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-100 overflow-hidden max-h-[90vh] overflow-y-auto">
            
            <button
              onClick={() => setSelectedProductDetail(null)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 hover:text-slate-800 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100">
                <img
                  src={selectedProductDetail.image}
                  alt={selectedProductDetail.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-4 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                    <span className="text-xs font-black text-slate-900">{selectedProductDetail.rating}</span>
                    <span className="text-xs text-slate-400">({selectedProductDetail.reviews} {shopT.reviews})</span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-black text-[#0B1528] leading-tight">
                    {selectedProductDetail.name}
                  </h3>

                  <div className="text-xl font-black text-[#1D72FE] mt-2">
                    {selectedProductDetail.price?.toLocaleString()} {shopT.currency}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed">
                    {selectedProductDetail.description}
                  </p>

                  {/* Texnik xususiyatlar */}
                  {selectedProductDetail.specs && (
                    <div className="mt-4 p-3.5 bg-slate-50 rounded-2xl border border-slate-100 space-y-1.5 text-xs">
                      {Object.entries(selectedProductDetail.specs).map(([key, value]) => (
                        <div key={key} className="flex justify-between">
                          <span className="text-slate-400 capitalize">{key}:</span>
                          <span className="font-bold text-slate-800">{value}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="flex items-center gap-2 pt-3">
                  <button
                    onClick={() => {
                      handleAddToCartClick(selectedProductDetail);
                      setSelectedProductDetail(null);
                    }}
                    className="flex-1 py-3 rounded-2xl bg-[#1D72FE] text-white font-bold text-xs sm:text-sm shadow-md"
                  >
                    Savatga qo'shish
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}

