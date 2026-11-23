import React, { useState } from 'react';
import { 
  Smartphone, 
  Mic, 
  Sun, 
  Sliders, 
  Zap, 
  Sparkles, 
  ArrowRight, 
  MessageCircle, 
  Lightbulb, 
  Power 
} from 'lucide-react';

export default function SmartHome({ t, onOpenServiceDetail }) {
  const [isLightOn, setIsLightOn] = useState(true);
  const [brightness, setBrightness] = useState(85);

  const sh = t?.smartHomeSection || {
    badge: "Kelajak texnologiyasi",
    title: "Aqlli uy",
    subtitle: "Chiroq, rozetka, parda va konditsioner telefon, ovoz yoki jadval bo'yicha boshqariladi.",
    simPhoneControl: "Telefondan boshqarish",
    simLightOn: "Chiroq: YONIQ",
    simLightOff: "Chiroq: O'CHIQ",
    simHint: "Chiroqni yoqish yoki o'chirish uchun vikyuchatelni bosing",
    features: [
      {
        id: 1,
        icon: "Smartphone",
        text: "Telefon orqali boshqariladigan aqlli vikyuchatel va rozetkalar"
      },
      {
        id: 2,
        icon: "Mic",
        text: "Ovoz bilan: «yotoqxonadagi chiroqni yoq»"
      },
      {
        id: 3,
        icon: "Sun",
        text: "Ssenariy: «Xayrli tong» va «Xayrli tun» bir bosishda"
      },
      {
        id: 4,
        icon: "Blinds",
        text: "Aqlli parda, datchiklar va konditsioner nazorati"
      }
    ],
    orderBtn: "Aqlli uyga buyurtma berish"
  };

  const handleSmartHomeOrder = () => {
    const text = encodeURIComponent("Assalomu alaykum! Dubayda xonadonimga «Aqlli uy» (Smart Home) tizimini o'rnatish bo'yicha narxlar va maslahat olmoqchiman.");
    window.open(`https://wa.me/971501234567?text=${text}`, '_blank');
  };

  return (
    <section id="smart-home" className="w-full text-white pt-6 pb-12">
      {/* Sarlavha va Kichik tavsif */}
      <div className="mb-6 sm:mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 font-bold text-xs uppercase tracking-wider mb-2">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{sh.badge || "Kelajak texnologiyasi"}</span>
        </div>
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
          {sh.title}
        </h3>
        <p className="text-xs sm:text-base text-slate-300 mt-1.5 font-medium max-w-2xl">
          {sh.subtitle}
        </p>
      </div>

      {/* Asosiy 2 ustunli tuzilma: Chapda Simulyator, O'ngda 4 ta afzallik (1:1 Reference rasm) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        
        {/* CHAP TOMON: INTERAKTIV SMART HOME SIMULYATORI */}
        <div className="lg:col-span-6 bg-[#111C38] border border-slate-800 rounded-3xl p-5 sm:p-7 flex flex-col justify-between shadow-2xl relative overflow-hidden group">
          
          {/* Yuqori info satri */}
          <div className="flex items-center justify-between z-10 mb-4">
            <span className="text-xs font-mono font-bold text-slate-400 flex items-center gap-1.5">
              <span className={`w-2 h-2 rounded-full transition-colors ${isLightOn ? 'bg-amber-400 animate-pulse' : 'bg-slate-600'}`}></span>
              <span>HAVVIY SMART SIMULATOR</span>
            </span>
            <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border transition-all ${
              isLightOn 
                ? 'bg-amber-500/20 text-amber-300 border-amber-500/40' 
                : 'bg-slate-800 text-slate-400 border-slate-700'
            }`}>
              {isLightOn ? "YONIQ • 100%" : "O'CHIQ • 0%"}
            </span>
          </div>

          {/* SIMULYATOR XONASI VA OSILGAN CHIROQ (1:1 REFERENCE RASM) */}
          <div 
            onClick={() => setIsLightOn(!isLightOn)}
            className="relative w-full h-56 sm:h-64 rounded-2xl bg-[#090E1F] border border-slate-800 flex flex-col items-center justify-start overflow-hidden cursor-pointer select-none transition-all duration-500"
          >
            {/* Shift va sim */}
            <div className="w-16 h-2 bg-slate-700 rounded-b-md shadow-md z-10"></div>
            <div className="w-0.5 h-16 bg-slate-500 z-10"></div>

            {/* Chiroq patroni va lampa */}
            <div className="relative z-20 flex flex-col items-center">
              <div className="w-6 h-5 bg-slate-700 rounded-t-sm border border-slate-600"></div>
              
              {/* Lampa lampochkasi */}
              <div className={`w-10 h-10 rounded-full transition-all duration-500 flex items-center justify-center ${
                isLightOn 
                  ? 'bg-amber-300 shadow-[0_0_50px_#f59e0b,0_0_100px_#fbbf24] scale-105' 
                  : 'bg-slate-700 border border-slate-600 opacity-60'
              }`}>
                <Lightbulb className={`w-5 h-5 transition-colors ${isLightOn ? 'text-amber-900 fill-amber-500' : 'text-slate-500'}`} />
              </div>
            </div>

            {/* YORUG'LIK NURI KONUSI (LIGHT BEAM CONE EFFECT) */}
            <div className={`absolute top-24 left-1/2 -translate-x-1/2 w-80 sm:w-96 h-48 pointer-events-none transition-opacity duration-700 ${
              isLightOn ? 'opacity-100' : 'opacity-0'
            }`}>
              <div 
                className="w-full h-full"
                style={{
                  background: 'radial-gradient(ellipse at top, rgba(245, 158, 11, 0.45) 0%, rgba(245, 158, 11, 0.15) 45%, transparent 75%)'
                }}
              ></div>
            </div>

            {/* Pastdagi xona qavati yoritilishi */}
            <div className={`absolute bottom-0 inset-x-0 h-16 transition-opacity duration-500 pointer-events-none ${
              isLightOn ? 'opacity-100 bg-gradient-to-t from-amber-500/20 to-transparent' : 'opacity-0'
            }`}></div>

            {/* Bosish uchun ishora matni */}
            <span className="absolute bottom-2 text-[10px] text-slate-500 font-medium">
              💡 {sh.simHint || "Chiroqni yoqish / o'chirish uchun bosing"}
            </span>
          </div>

          {/* PASTKI INTERAKTIV VIKYUCHATEL (1:1 REFERENCE RASM: TELEFONDAN BOSHQARISH) */}
          <div className="mt-5 pt-4 border-t border-slate-800/80 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-blue-500/20 text-[#1D72FE] flex items-center justify-center">
                <Smartphone className="w-4 h-4" />
              </div>
              <span className="text-sm font-bold text-white">
                {sh.simPhoneControl}
              </span>
            </div>

            {/* REAL INTERAKTIV TOGGLE SWITCH */}
            <button
              onClick={() => setIsLightOn(!isLightOn)}
              role="switch"
              aria-checked={isLightOn}
              className={`relative inline-flex h-7 w-14 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-hidden ${
                isLightOn ? 'bg-[#1D72FE]' : 'bg-slate-700'
              }`}
            >
              <span
                aria-hidden="true"
                className={`pointer-events-none inline-block h-6 w-6 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out ${
                  isLightOn ? 'translate-x-7' : 'translate-x-0'
                }`}
              />
            </button>
          </div>

        </div>

        {/* O'NG TOMON: 4 TA XUSUSIYAT RO'YXATI VA BUYURTMA TUGMASI (1:1 REFERENCE RASM) */}
        <div className="lg:col-span-6 flex flex-col justify-between space-y-3.5 sm:space-y-4">
          
          {/* 1. Telefon orqali boshqaruv */}
          <div className="bg-[#111C38] border border-slate-800 hover:border-amber-500/40 rounded-2xl p-4 sm:p-4.5 flex items-center gap-3.5 transition-all shadow-md group">
            <div className="w-10 h-10 rounded-xl bg-amber-500/15 border border-amber-500/30 text-amber-400 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
              <Smartphone className="w-5 h-5" />
            </div>
            <p className="text-xs sm:text-sm font-semibold text-white group-hover:text-amber-200 transition-colors">
              Telefon orqali boshqariladigan aqlli vikyuchatel va rozetkalar
            </p>
          </div>

          {/* 2. Ovoz bilan boshqaruv */}
          <div className="bg-[#111C38] border border-slate-800 hover:border-amber-500/40 rounded-2xl p-4 sm:p-4.5 flex items-center gap-3.5 transition-all shadow-md group">
            <div className="w-10 h-10 rounded-xl bg-amber-500/15 border border-amber-500/30 text-amber-400 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
              <Mic className="w-5 h-5" />
            </div>
            <p className="text-xs sm:text-sm font-semibold text-white group-hover:text-amber-200 transition-colors">
              Ovoz bilan: «yotoqxonadagi chiroqni yoq» (Siri, Google, Alisa)
            </p>
          </div>

          {/* 3. Ssenariylar */}
          <div className="bg-[#111C38] border border-slate-800 hover:border-amber-500/40 rounded-2xl p-4 sm:p-4.5 flex items-center gap-3.5 transition-all shadow-md group">
            <div className="w-10 h-10 rounded-xl bg-amber-500/15 border border-amber-500/30 text-amber-400 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
              <Sun className="w-5 h-5" />
            </div>
            <p className="text-xs sm:text-sm font-semibold text-white group-hover:text-amber-200 transition-colors">
              Ssenariy: «Xayrli tong» va «Xayrli tun» bir bosishda
            </p>
          </div>

          {/* 4. Pardalar va konditsioner nazorati */}
          <div className="bg-[#111C38] border border-slate-800 hover:border-amber-500/40 rounded-2xl p-4 sm:p-4.5 flex items-center gap-3.5 transition-all shadow-md group">
            <div className="w-10 h-10 rounded-xl bg-amber-500/15 border border-amber-500/30 text-amber-400 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
              <Sliders className="w-5 h-5" />
            </div>
            <p className="text-xs sm:text-sm font-semibold text-white group-hover:text-amber-200 transition-colors">
              Aqlli parda, datchiklar va konditsioner nazorati
            </p>
          </div>

          {/* AQLLI UYGA BUYURTMA BERISH TUGMASI */}
          <div className="pt-2">
            <button
              onClick={handleSmartHomeOrder}
              className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-[#1D72FE] to-blue-600 hover:from-blue-600 hover:to-[#1D72FE] text-white font-black text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-lg shadow-blue-500/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <MessageCircle className="w-5 h-5 text-emerald-300" />
              <span>{sh.orderBtn || "Aqlli uyga buyurtma berish"}</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}

