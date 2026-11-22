import React, { useState } from 'react';
import { X, Send, CheckCircle, Phone, MapPin, User, Wrench } from 'lucide-react';

export default function OrderModal({ isOpen, onClose, initialItem }) {
  if (!isOpen) return null;

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('+998 ');
  const [address, setAddress] = useState('Andijon shahar, ');
  const [service, setService] = useState(typeof initialItem === 'string' ? initialItem : initialItem?.name || "Elektr va Konditsioner xizmati");
  const [notes, setNotes] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSuccess(true);
    
    const text = `Assalomu alaykum! HavviyEnergiya saytidan yangi buyurtma:\n\n👤 Ism: ${name}\n📞 Tel: ${phone}\n📍 Manzil: ${address}\n🛠 Xizmat/Mahsulot: ${service}\n📝 Qo'shimcha: ${notes || "Yo'q"}`;
    setTimeout(() => {
      window.open(`https://t.me/havviy_energiya?text=${encodeURIComponent(text)}`, '_blank');
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md animate-fadeIn">
      <div className="relative bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-100">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 hover:text-slate-700 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-500 flex items-center justify-center mx-auto">
              <CheckCircle className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-black text-slate-900">
              Buyurtmangiz qabul qilindi!
            </h3>
            <p className="text-sm text-slate-600 max-w-sm mx-auto">
              Mutaxassisimiz tez orada siz bilan bog'lanadi. Telegram orqali tasdiqlash ochilmoqda...
            </p>
            <button
              onClick={onClose}
              className="mt-4 px-6 py-2.5 rounded-full bg-[#1D72FE] text-white font-bold text-xs"
            >
              Yopish
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[#1D72FE] font-bold text-xs mb-2">
                <span>Andijon bo'yicha 24/7 tezkor xizmat</span>
              </div>
              <h3 className="text-2xl font-black text-slate-900">
                Xizmatga buyurtma berish
              </h3>
              <p className="text-xs sm:text-sm text-slate-500">
                Ma'lumotlaringizni qoldiring, usta 20-30 daqiqada yetib boradi.
              </p>
            </div>

            {/* Service Name */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Tanlangan xizmat / mahsulot
              </label>
              <div className="relative">
                <Wrench className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  required
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#1D72FE] text-slate-900 font-semibold"
                />
              </div>
            </div>

            {/* Name */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Ismingiz
              </label>
              <div className="relative">
                <User className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  required
                  placeholder="Ismingizni kiriting"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#1D72FE] text-slate-900"
                />
              </div>
            </div>

            {/* Phone */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Telefon raqamingiz
              </label>
              <div className="relative">
                <Phone className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="tel"
                  required
                  placeholder="+998 90 123 45 67"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#1D72FE] text-slate-900 font-semibold"
                />
              </div>
            </div>

            {/* Address */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Manzilingiz
              </label>
              <div className="relative">
                <MapPin className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  required
                  placeholder="Shahar, ko'cha, uy raqami"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#1D72FE] text-slate-900"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-2xl bg-[#1D72FE] hover:bg-blue-600 text-white font-bold text-sm shadow-md shadow-blue-500/25 flex items-center justify-center gap-2 transition-all"
            >
              <Send className="w-4 h-4" />
              <span>Buyurtmani tasdiqlash</span>
            </button>

          </form>
        )}

      </div>
    </div>
  );
}
