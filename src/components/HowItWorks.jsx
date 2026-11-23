import React from 'react';
import { Camera, Clock, MessageCircle, PhoneCall, CheckCircle } from 'lucide-react';

export default function HowItWorks({ t }) {
  const hw = t?.howItWorks || {
    title: "Qanday ishlaydi",
    subtitle: "Xizmatdan foydalanish oson va tezkor 2 ta qadamda",
    step1Title: "1. Yozing yoki rasm yuboring",
    step1Desc: "Elektr, konditsioner yoki aqlli uy bo'yicha muammo yoki rejangizni ayting.",
    step2Title: "2. Narx va vaqtni oling",
    step2Desc: "Narx va vaqt ish boshlanishidan oldin aniq va oshkora kelishiladi.",
    contactBannerTitle: "Biz bilan bog'laning",
    contactBannerSubtitle: "Butun Dubay, 24/7",
    phone: "+971 50 123 4567",
    whatsappBtn: "WhatsApp",
    callBtn: "Qo'ng'iroq"
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent("Assalomu alaykum! Dubayda usta chaqirmoqchiman. Narx va vaqtni bilish uchun yozmoqdaman.");
    window.open(`https://wa.me/971501234567?text=${text}`, '_blank');
  };

  const handleCall = () => {
    window.location.href = "tel:+971501234567";
  };

  return (
    <section className="w-full text-white pt-6 pb-12">
      {/* Sarlavha */}
      <div className="mb-6 sm:mb-8">
        <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-white tracking-tight">
          {hw.title}
        </h3>
      </div>

      {/* 2 TA QADAM (1:1 REFERENCE RASM) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-8">
        
        {/* Qadam 1: Yozing yoki rasm yuboring */}
        <div className="bg-[#111C38] border border-slate-800 rounded-2xl p-5 sm:p-6 flex items-start gap-4 shadow-lg group hover:border-blue-500/40 transition-all">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white text-[#0B132B] font-black text-base sm:text-lg flex items-center justify-center flex-shrink-0 shadow-md">
            1
          </div>
          <div>
            <h4 className="text-base sm:text-lg font-bold text-white mb-1 flex items-center gap-2">
              <span>{hw.step1Title}</span>
              <Camera className="w-4 h-4 text-cyan-400 inline" />
            </h4>
            <p className="text-xs sm:text-sm text-slate-400 font-medium">
              {hw.step1Desc}
            </p>
          </div>
        </div>

        {/* Qadam 2: Narx va vaqtni oling */}
        <div className="bg-[#111C38] border border-slate-800 rounded-2xl p-5 sm:p-6 flex items-start gap-4 shadow-lg group hover:border-blue-500/40 transition-all">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white text-[#0B132B] font-black text-base sm:text-lg flex items-center justify-center flex-shrink-0 shadow-md">
            2
          </div>
          <div>
            <h4 className="text-base sm:text-lg font-bold text-white mb-1 flex items-center gap-2">
              <span>{hw.step2Title}</span>
              <Clock className="w-4 h-4 text-amber-400 inline" />
            </h4>
            <p className="text-xs sm:text-sm text-slate-400 font-medium">
              {hw.step2Desc}
            </p>
          </div>
        </div>

      </div>

      {/* BIZ BILAN BOG'LANING BANNERI (1:1 REFERENCE RASM) */}
      <div className="bg-[#111C38] border border-slate-800 rounded-3xl p-5 sm:p-7 flex flex-col md:flex-row items-center justify-between gap-5 shadow-2xl">
        <div>
          <h4 className="text-base sm:text-lg font-bold text-white">
            {hw.contactBannerTitle || "Biz bilan bog'laning"}
          </h4>
          <p className="text-xs sm:text-sm text-slate-400 font-medium mt-0.5">
            {hw.contactBannerSubtitle || "Butun Dubay, 24/7"}
          </p>
          <div className="text-lg sm:text-2xl font-black text-white tracking-wider mt-1.5 font-mono">
            {hw.phone || "+971 50 123 4567"}
          </div>
        </div>

        {/* Tugmalar: [WhatsApp] [Qo'ng'iroq] (1:1 Reference rasm) */}
        <div className="flex items-center gap-3 w-full md:w-auto">
          <button
            onClick={handleWhatsApp}
            className="flex-1 md:flex-none px-6 py-3 rounded-xl bg-[#10B981] hover:bg-emerald-600 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-md active:scale-95"
          >
            <MessageCircle className="w-4 h-4" />
            <span>{hw.whatsappBtn || "WhatsApp"}</span>
          </button>

          <button
            onClick={handleCall}
            className="flex-1 md:flex-none px-6 py-3 rounded-xl bg-[#F59E0B] hover:bg-amber-600 text-slate-900 font-black text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-md active:scale-95"
          >
            <PhoneCall className="w-4 h-4" />
            <span>{hw.callBtn || "Qo'ng'iroq"}</span>
          </button>
        </div>
      </div>
    </section>
  );
}

