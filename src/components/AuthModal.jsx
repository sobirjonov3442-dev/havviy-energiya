import React, { useState } from 'react';
import { X, Phone, Lock, User, LogIn, UserPlus } from 'lucide-react';

export default function AuthModal({ isOpen, onClose, onLoginSuccess, t }) {
  if (!isOpen) return null;

  const [mode, setMode] = useState('login'); // 'login' or 'register'
  const [phone, setPhone] = useState('+971 50 123 4567');
  const [password, setPassword] = useState('123456');
  const [name, setName] = useState('Alisher Saidov');

  const handleSubmit = (e) => {
    e.preventDefault();

    // To'liq va boyitilgan profil ma'lumotlari (barcha servislar, sotib olinganlar va xarajatlar bilan)
    const userData = {
      name: mode === 'register' ? (name || "Alisher Saidov") : (name || "Alisher Saidov"),
      phone: phone || "+971 50 123 4567",
      email: "alisher.dubai@gmail.com",
      address: "Downtown Dubai, Burj Residences Tower 3, Apt #1402",
      registeredAt: "12.01.2025",
      clientType: "VIP Doimiy mijoz",
      services: [
        {
          id: "SRV-2026-891",
          title: "Konditsioner tozalash, freon quyish va antibakterial ishlov",
          category: "Konditsioner servisi",
          master: "Farrux Usmonov (Katta usta)",
          date: "22.11.2026, 14:30",
          location: "Downtown, Burj Residences #1402",
          status: "Jarayonda",
          price: 250,
          currency: "AED",
          note: "Usta yo'lda, belgilangan vaqtda yetib keladi."
        },
        {
          id: "SRV-2026-754",
          title: "Schneider Electric avtomat shchiti montaji va elektr simlarini yangilash",
          category: "Elektr montaj",
          master: "Jasur Rahmatov (Elektr muhandisi)",
          date: "15.11.2026",
          location: "Downtown, Burj Residences #1402",
          status: "Bajarildi",
          price: 650,
          currency: "AED",
          note: "24 modul to'liq o'rnatildi va xavfsizlik sinovidan o'tkazildi."
        },
        {
          id: "SRV-2026-610",
          title: "Daikin Inverter konditsionerini to'liq o'rnatish va trassa tortish",
          category: "Montaj xizmati",
          master: "Otabek Qodirov (Montaj ustasi)",
          date: "02.11.2026",
          location: "Downtown, Burj Residences #1402",
          status: "Bajarildi",
          price: 450,
          currency: "AED",
          note: "T3 kompressor sinovdan o'tkazildi va kafolat rasmiylashtirildi."
        },
        {
          id: "SRV-2026-420",
          title: "Favqulodda elektr nosozligini aniqlash va qisqa tutashuvni bartaraf etish",
          category: "Tezkor servis",
          master: "Jasur Rahmatov",
          date: "28.10.2026",
          location: "Downtown, Burj Residences #1402",
          status: "Bajarildi",
          price: 150,
          currency: "AED",
          note: "Muammo 30 daqiqada hal qilindi."
        }
      ],
      purchases: [
        {
          id: "PRD-1001",
          name: "Green Inverter 12,000 BTU T3 Tropical",
          category: "Konditsioner",
          image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400&q=80",
          warranty: "3 yil rasmiy kafolat",
          date: "02.11.2026",
          price: 1850,
          quantity: 1,
          status: "Yetkazildi va o'rnatildi"
        },
        {
          id: "PRD-1002",
          name: "Schneider Electric Avtomat Shchiti (24 modul)",
          category: "Elektr jihozlari",
          image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&q=80",
          warranty: "5 yil kafolat",
          date: "15.11.2026",
          price: 490,
          quantity: 1,
          status: "Yetkazildi"
        },
        {
          id: "PRD-1003",
          name: "Zamonaviy Magnitli Treksistema 48V (2 dona)",
          category: "Aksessuarlar",
          image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400&q=80",
          warranty: "2 yil kafolat",
          date: "20.11.2026",
          price: 640,
          quantity: 2,
          status: "Yetkazildi"
        },
        {
          id: "PRD-1004",
          name: "Elektr Kabel 3x2.5mm mis sim (100 metr)",
          category: "Elektr kabellari",
          image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&q=80",
          warranty: "GOST sertifikati",
          date: "15.11.2026",
          price: 370,
          quantity: 1,
          status: "Yetkazildi"
        }
      ]
    };

    onLoginSuccess(userData);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-md bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-100">
        
        {/* Yopish tugmasi */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 hover:text-slate-800 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header */}
        <div className="text-center mb-6">
          <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#1D72FE] flex items-center justify-center mx-auto mb-3 shadow-xs">
            {mode === 'login' ? <LogIn className="w-6 h-6" /> : <UserPlus className="w-6 h-6" />}
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
            {mode === 'login' ? t.auth.loginTitle : t.auth.registerTitle}
          </h3>
          <p className="text-xs text-slate-400 mt-1">
            {t.auth.demoHint}
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="grid grid-cols-2 gap-1 bg-slate-100 p-1 rounded-2xl mb-5 text-xs font-bold">
          <button
            type="button"
            onClick={() => setMode('login')}
            className={`py-2 rounded-xl transition-all ${
              mode === 'login' ? 'bg-white text-[#1D72FE] shadow-xs' : 'text-slate-500'
            }`}
          >
            {t.auth.loginBtn}
          </button>
          <button
            type="button"
            onClick={() => setMode('register')}
            className={`py-2 rounded-xl transition-all ${
              mode === 'register' ? 'bg-white text-[#1D72FE] shadow-xs' : 'text-slate-500'
            }`}
          >
            {t.auth.registerBtn}
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          
          {mode === 'register' && (
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                {t.auth.nameLabel}
              </label>
              <div className="relative">
                <User className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Alisher Saidov"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#1D72FE] text-slate-900 font-semibold"
                />
              </div>
            </div>
          )}

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              {t.auth.phoneLabel}
            </label>
            <div className="relative">
              <Phone className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+971 50 123 4567"
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#1D72FE] text-slate-900 font-semibold"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              {t.auth.passwordLabel}
            </label>
            <div className="relative">
              <Lock className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••"
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#1D72FE] text-slate-900 font-semibold"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3.5 rounded-2xl bg-[#1D72FE] hover:bg-blue-600 text-white font-bold text-sm shadow-md shadow-blue-500/25 transition-all mt-2 transform hover:-translate-y-0.5 active:translate-y-0"
          >
            {mode === 'login' ? t.auth.loginBtn : t.auth.registerBtn}
          </button>
        </form>

      </div>
    </div>
  );
}
