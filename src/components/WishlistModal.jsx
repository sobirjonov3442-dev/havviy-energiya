import React from 'react';
import { X, Heart, ShoppingBag, Trash2, Sparkles } from 'lucide-react';

export default function WishlistModal({
  isOpen,
  onClose,
  favorites,
  products,
  onToggleFavorite,
  onAddToCart
}) {
  if (!isOpen) return null;

  const favoriteProducts = products.filter(p => favorites.includes(p.id));

  const formatPrice = (val) => {
    return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };

  const handleAddAllToCart = () => {
    favoriteProducts.forEach(prod => {
      onAddToCart(prod);
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-fadeIn">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-950/70 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden z-10 my-8 flex flex-col max-h-[88vh]">
        
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50/60">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-rose-50 text-rose-500 flex items-center justify-center shadow-inner">
              <Heart className="w-5 h-5 fill-rose-500 text-rose-500" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-black text-slate-900 flex items-center gap-2">
                <span>Yoqtirilganlar (Sevimlilar)</span>
                <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-rose-100 text-rose-600">
                  {favoriteProducts.length}
                </span>
              </h2>
              <p className="text-xs text-slate-400">
                Siz saqlab qo'ygan barcha mahsulotlar
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white text-slate-400 hover:text-slate-700 hover:bg-slate-100 border border-slate-200 flex items-center justify-center transition-colors"
            title="Yopish"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-3.5 scrollbar-thin">
          {favoriteProducts.length === 0 ? (
            <div className="py-16 flex flex-col items-center justify-center text-center space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-rose-50 text-rose-300 flex items-center justify-center">
                <Heart className="w-8 h-8" />
              </div>
              <h3 className="text-base font-bold text-slate-800">
                Sevimlilar ro'yxatingiz bo'sh
              </h3>
              <p className="text-xs text-slate-400 max-w-sm">
                Do'kondagi mahsulotlar ustidagi ❤️ yurakcha belgisini bosing va ularni shu yerda saqlang.
              </p>
            </div>
          ) : (
            favoriteProducts.map((item) => (
              <div
                key={item.id}
                className="group flex flex-col sm:flex-row sm:items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-200 transition-all"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 rounded-xl object-cover flex-shrink-0"
                />

                <div className="flex-1 min-w-0">
                  <h4 className="font-bold text-sm sm:text-base text-slate-900 line-clamp-1 mb-1">
                    {item.name}
                  </h4>
                  <div className="text-sm font-black text-[#1D72FE]">
                    {formatPrice(item.price)} so'm
                  </div>
                </div>

                <div className="flex items-center gap-2 pt-2 sm:pt-0">
                  <button
                    onClick={() => onAddToCart(item)}
                    className="flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#1D72FE] text-white font-bold text-xs shadow-xs hover:bg-blue-600 transition-all"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>Savatga</span>
                  </button>

                  <button
                    onClick={() => onToggleFavorite(item.id)}
                    className="p-2.5 rounded-xl bg-white text-slate-400 hover:text-rose-500 border border-slate-200 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {favoriteProducts.length > 0 && (
          <div className="p-4 sm:p-6 border-t border-slate-100 bg-slate-50 flex items-center justify-between">
            <span className="text-xs text-slate-500 font-medium">
              Jami <b>{favoriteProducts.length}</b> ta mahsulot
            </span>

            <button
              onClick={() => {
                handleAddAllToCart();
                onClose();
              }}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#1D72FE] hover:bg-blue-600 text-white font-bold text-xs shadow-md transition-all"
            >
              <Sparkles className="w-4 h-4" />
              <span>Barchasini savatga solish</span>
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
