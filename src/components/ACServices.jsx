import React from 'react';
import { Snowflake, Wrench, Sparkles, Check, MessageCircle, Wind } from 'lucide-react';

export default function ACServices({ t }) {
  const ac = t?.acSection || {
    badge: "ALOHIDA XIZMAT",
    title: "Konditsionerlar",
    subtitle: "Dubay iqlimiga mos professional konditsioner servisi va texnik xizmati",
    askWhatsapp: "WhatsApp'da so'rash",
    items: [
      {
        id: "clean",
        title: "Tozalash",
        badge: "Gigiyenik tozalash",
        icon: Sparkles,
        features: [
          "Ichki va tashqi blokni tozalash",
          "Filtr va drenajni tozalash"
        ]
      },
      {
        id: "repair",
        title: "Ta'mirlash",
        badge: "Sababini tez topamiz",
        icon: Wrench,
        features: [
          "Sovutmaydi yoki kuchsiz sovutadi",
          "Suv oqadi yoki shovqin qiladi",
          "Yonmaydi, displeyda xato chiqadi"
        ]
      },
      {
        id: "install",
        title: "Yangi o'rnatish",
        badge: "Kalit topshirig'i",
        icon: Snowflake,
        features: [
          "Bloklar va trassani o'rnatish",
          "Elektr va avtomatni ulash",
          "Ishga tushirish va qisqa yo'riqnoma"
        ]
      }
    ]
  };

  const handleWhatsAppInquiry = (serviceTitle) => {
    const text = encodeURIComponent(`Assalomu alaykum! Tenda.ae saytidan «${serviceTitle}» xizmati bo'yicha ma'lumot va usta chaqirish uchun yozmoqdaman.`);
    window.open(`https://wa.me/971501234567?text=${text}`, '_blank');
  };

  return (
    <section className="w-full text-white pt-6 pb-12">
      {/* Sarlavha va Kichik Badge */}
      <div className="flex flex-wrap items-center gap-3 mb-6">
        <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-white tracking-tight flex items-center gap-2.5">
          <Snowflake className="w-6 h-6 text-cyan-400" />
          <span>{ac.title}</span>
        </h3>
        <span className="text-[11px] sm:text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
          {ac.badge}
        </span>
      </div>

      {/* 1:1 REFERENCE RASMDAGI KONDITSIONER ANIMATSION KARTASI */}
      <div className="relative rounded-2xl sm:rounded-3xl bg-gradient-to-b from-[#111C38] to-[#0D152B] border border-cyan-500/20 p-6 sm:p-10 mb-6 flex flex-col items-center justify-center overflow-hidden shadow-2xl">
        {/* Sovuq shabada nuri va foni */}
        <div className="absolute inset-0 bg-radial from-cyan-500/10 via-transparent to-transparent pointer-events-none"></div>

        {/* Konditsioner illyustratsiyasi (Reference rasm 1:1) */}
        <div className="relative z-10 flex flex-col items-center">
          {/* Konditsioner bloki */}
          <div className="w-48 sm:w-64 h-14 sm:h-18 rounded-xl bg-gradient-to-b from-slate-100 to-slate-200 border-2 border-slate-300 shadow-xl flex items-center justify-between px-4 sm:px-5 relative">
            {/* Havo chiqish paneli */}
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping absolute top-2 right-4"></div>
            <div className="w-2 h-2 rounded-full bg-emerald-400 absolute top-2.5 right-4.5"></div>
            <span className="text-[10px] sm:text-xs font-mono font-bold text-slate-700 tracking-wider">HAVVIY COOL</span>
            <div className="w-16 sm:w-24 h-1.5 bg-slate-300 rounded-full"></div>
            
            {/* Havo paneli pastda */}
            <div className="absolute -bottom-1 left-4 right-4 h-1.5 bg-cyan-400/80 rounded-full shadow-[0_0_10px_#22d3ee]"></div>
          </div>

          {/* Pastga tushayotgan sovuq havo tomchilari / shabada oqimi (Reference rasm 1:1) */}
          <div className="flex items-center gap-4 sm:gap-6 mt-3 sm:mt-4 text-cyan-400">
            <div className="w-1.5 h-4 sm:h-5 bg-gradient-to-b from-cyan-400 to-transparent rounded-full animate-bounce [animation-delay:0ms]"></div>
            <div className="w-1.5 h-5 sm:h-7 bg-gradient-to-b from-cyan-300 to-transparent rounded-full animate-bounce [animation-delay:150ms]"></div>
            <div className="w-1.5 h-6 sm:h-8 bg-gradient-to-b from-cyan-400 to-transparent rounded-full animate-bounce [animation-delay:300ms]"></div>
            <div className="w-1.5 h-5 sm:h-7 bg-gradient-to-b from-cyan-300 to-transparent rounded-full animate-bounce [animation-delay:150ms]"></div>
            <div className="w-1.5 h-4 sm:h-5 bg-gradient-to-b from-cyan-400 to-transparent rounded-full animate-bounce [animation-delay:0ms]"></div>
          </div>
          <p className="text-[11px] sm:text-xs text-cyan-200/80 font-medium mt-2 flex items-center gap-1.5">
            <Wind className="w-3.5 h-3.5 text-cyan-400" />
            <span>Dubay haroratida kafolatli muzdek toza sovutish</span>
          </p>
        </div>
      </div>

      {/* 3 ta Xizmat Kartalari (Tozalash, Ta'mirlash, Yangi o'rnatish) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
        {ac.items.map((item) => {
          const IconComp = item.id === 'clean' ? Sparkles : item.id === 'repair' ? Wrench : Snowflake;
          return (
            <div
              key={item.id}
              className="bg-[#111C38] border border-slate-800 rounded-2xl p-5 sm:p-6 flex flex-col justify-between hover:border-cyan-500/40 transition-all shadow-xl group"
            >
              <div>
                {/* Sarlavha va Ikonka */}
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-9 h-9 rounded-xl bg-amber-500/15 border border-amber-500/30 text-amber-400 flex items-center justify-center flex-shrink-0">
                    <IconComp className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-white">
                      {item.title}
                    </h4>
                    {item.badge && (
                      <span className="text-[10px] text-cyan-300 font-medium">
                        {item.badge}
                      </span>
                    )}
                  </div>
                </div>

                {/* Xususiyatlar ro'yxati (yashil galochka bilan) */}
                <ul className="space-y-2 mt-4">
                  {item.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                      <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* WhatsApp orqali so'rash tugmasi */}
              <button
                onClick={() => handleWhatsAppInquiry(item.title)}
                className="mt-6 w-full py-2.5 px-4 rounded-xl bg-[#1A264A] hover:bg-[#20305E] border border-cyan-500/30 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all hover:scale-[1.02] active:scale-95 shadow-md"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>{ac.askWhatsapp || "WhatsApp'da so'rash"}</span>
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
}

