import React from 'react';
import { X, Trash2, Plus, Minus, Send, ShoppingBag } from 'lucide-react';

export default function CartDrawer({
  isOpen,
  onClose,
  cart,
  updateQuantity,
  removeFromCart,
  t
}) {
  if (!isOpen) return null;

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const cartT = t?.cart || {
    title: "Savat",
    totalLabel: "Jami hisob:",
    currency: "AED",
    whatsappBtn: "WhatsApp orqali sotib olish",
    telegramBtn: "Telegram orqali buyurtma berish",
    note: "Yetkazib berish va o'rnatish narxi operator tomonidan kelishiladi.",
    emptyTitle: "Savatingiz hozircha bo'sh",
    emptyDesc: "Kerakli mahsulot yoki xizmatlarni savatga qo'shing",
    close: "Yopish"
  };

  const handleWhatsApp = () => {
    if (cart.length === 0) return;
    const itemsText = cart
      .map(
        (i) =>
          `• ${i.name} — ${i.quantity} dona x ${i.price} AED = ${
            i.quantity * i.price
          } AED`
      )
      .join('\n');
    const msg = `Assalomu alaykum! HavviyEnergiya saytidan buyurtma bermoqchiman:\n\n${itemsText}\n\nJami: ${total} AED\nManzilim: Dubai`;
    window.open(`https://wa.me/971500000000?text=${encodeURIComponent(msg)}`, '_blank');
  };

  const handleTelegram = () => {
    if (cart.length === 0) return;
    const itemsText = cart
      .map(
        (i) =>
          `• ${i.name} — ${i.quantity} dona x ${i.price} AED = ${
            i.quantity * i.price
          } AED`
      )
      .join('\n');
    const msg = `Assalomu alaykum! HavviyEnergiya saytidan buyurtma bermoqchiman:\n\n${itemsText}\n\nJami: ${total} AED\nManzilim: Dubai`;
    window.open(`https://t.me/havviy_energiya?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-fadeIn">
      {/* Qoraytirilgan orqa fon */}
      <div
        className="absolute inset-0 bg-slate-950/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-4 sm:pl-10">
        <div className="w-full max-w-md bg-white shadow-2xl flex flex-col border-l border-slate-100">
          
          {/* =========================================================================
              HEADER (1:1 Reference: Moviy sumka belgisi + Savat (2) + X yopish)
              ========================================================================= */}
          <div className="px-6 py-5 border-b border-slate-100 flex items-center justify-between bg-white">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-blue-50/80 border border-blue-100 text-[#1D72FE] flex items-center justify-center flex-shrink-0">
                <ShoppingBag className="w-5 h-5 text-[#1D72FE]" />
              </div>
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
                {cartT.title} ({totalCount})
              </h2>
            </div>

            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-slate-100/80 text-slate-400 hover:text-slate-800 flex items-center justify-center transition-colors"
              title={cartT.close}
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* =========================================================================
              MAHSULOTLAR RO'YXATI (1:1 Reference kartochkalar)
              ========================================================================= */}
          <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-3.5 scrollbar-thin">
            {cart.length === 0 ? (
              <div className="py-20 flex flex-col items-center justify-center text-center space-y-3">
                <div className="w-16 h-16 rounded-2xl bg-blue-50 text-[#1D72FE] flex items-center justify-center">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h3 className="text-base font-bold text-slate-900">
                  {cartT.emptyTitle}
                </h3>
                <p className="text-xs text-slate-400 max-w-xs">
                  {cartT.emptyDesc}
                </p>
              </div>
            ) : (
              cart.map((item) => (
                <div
                  key={item.id}
                  className="bg-[#F8FAFC] rounded-2xl p-3.5 flex items-center gap-3.5 border border-slate-100 hover:border-blue-200 transition-all shadow-2xs"
                >
                  {/* Mahsulot rasmi */}
                  <img
                    src={item.image}
                    alt={item.name}
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=700&q=80";
                    }}
                    className="w-20 h-20 rounded-xl object-cover flex-shrink-0 bg-slate-100"
                  />

                  {/* Mahsulot ma'lumoti */}
                  <div className="flex-1 min-w-0">
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900 truncate">
                      {t?.products?.[item.id]?.name || item.name}
                    </h4>
                    
                    <div className="text-sm font-black text-[#1D72FE] mt-1">
                      {item.price} {cartT.currency}
                    </div>

                    {/* Soni boshqaruvi va O'chirish (1:1 Reference) */}
                    <div className="flex items-center justify-between mt-2.5">
                      <div className="inline-flex items-center gap-2.5 bg-white border border-slate-200 rounded-full px-2.5 py-1 shadow-2xs">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="w-4 h-4 flex items-center justify-center text-slate-400 hover:text-slate-800 transition-colors"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-xs font-bold text-slate-900 min-w-[14px] text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="w-4 h-4 flex items-center justify-center text-slate-400 hover:text-slate-800 transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      {/* O'chirish qutisi (trash icon) */}
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="p-1.5 text-slate-400 hover:text-red-500 transition-colors"
                        title="O'chirish"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* =========================================================================
              FOOTER (1:1 Reference: Jami hisob + Yashil WhatsApp + Moviy Telegram + Izoh)
              ========================================================================= */}
          {cart.length > 0 && (
            <div className="p-5 sm:p-6 border-t border-slate-100 bg-white space-y-3.5 shadow-lg">
              {/* Jami hisob */}
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-slate-500">
                  {cartT.totalLabel}
                </span>
                <span className="text-2xl sm:text-3xl font-black text-slate-900">
                  {total}{' '}
                  <span className="text-sm font-black text-[#1D72FE]">
                    {cartT.currency}
                  </span>
                </span>
              </div>

              {/* 1. Yashil WhatsApp tugmasi */}
              <button
                onClick={handleWhatsApp}
                className="w-full py-3.5 rounded-full bg-[#16A34A] hover:bg-[#15803D] text-white font-bold text-sm shadow-md shadow-green-600/25 flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>{cartT.whatsappBtn}</span>
              </button>

              {/* 2. Moviy Telegram tugmasi */}
              <button
                onClick={handleTelegram}
                className="w-full py-3.5 rounded-full bg-[#1D72FE] hover:bg-blue-600 text-white font-bold text-sm shadow-md shadow-blue-500/25 flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <Send className="w-4 h-4" />
                <span>{cartT.telegramBtn}</span>
              </button>

              {/* Izoh matni */}
              <p className="text-[11px] text-center text-slate-400 font-medium leading-relaxed">
                {cartT.note}
              </p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
