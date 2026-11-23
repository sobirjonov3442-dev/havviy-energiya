import React from 'react';
import { AlertTriangle, ArrowRight, MessageCircle, Zap } from 'lucide-react';

export default function ElectricalProblems({ t, onSelectProblem }) {
  const ep = t?.electricalProblems || {
    badge: "Tezkor Yechimlar",
    title: "Elektr: tez-tez uchraydigan muammolar",
    subtitle: "Biz eng ko'p tuzatadigan muammolar va yechimlari. Shulardan biri bo'lsa, yozing.",
    btnText: "WhatsApp orqali yozish",
    items: [
      {
        id: 1,
        problem: "Rozetka qiziydi yoki kuyib hid chiqaradi",
        solution: "Kontakt yoki rozetkani almashtiramiz, sim va yuklamani tekshiramiz."
      },
      {
        id: 2,
        problem: "Avtomat tushib qoladi",
        solution: "Qisqa tutashuv yoki ortiqcha yuklamani topib, sababini bartaraf etamiz."
      },
      {
        id: 3,
        problem: "Chiroq miltillaydi yoki lampa o'chadi",
        solution: "Kontakt, drayver va vikyuchatelni tekshiramiz, nosozini almashtiramiz."
      },
      {
        id: 4,
        problem: "Eski simlar, uchqun chiqadi",
        solution: "Qismini yoki butun liniyani yangi kabelga almashtiramiz."
      },
      {
        id: 5,
        problem: "Shchit shovqin qiladi yoki qiziydi",
        solution: "Ulanishlarni tekshiramiz, avtomatlarni va kerak bo'lsa shchitni almashtiramiz."
      }
    ]
  };

  const handleProblemClick = (item) => {
    const text = encodeURIComponent(`Assalomu alaykum! Tenda.ae saytidan murojaat qilyapman. Menda elektr bo'yicha muammo bor:\n«${item.problem}»\nUsta yuborishingizni so'rayman.`);
    window.open(`https://wa.me/971501234567?text=${text}`, '_blank');
  };

  return (
    <section className="w-full text-white pt-6 pb-10">
      {/* Sarlavha qismi (1:1 Reference rasm) */}
      <div className="mb-6 sm:mb-8">
        <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-white tracking-tight flex items-center gap-2.5">
          <Zap className="w-6 h-6 text-amber-400 fill-amber-400" />
          <span>{ep.title}</span>
        </h3>
        <p className="text-xs sm:text-sm text-slate-400 mt-1.5 font-medium max-w-2xl">
          {ep.subtitle}
        </p>
      </div>

      {/* Muammolar kartalari: 1-qator 3 ta, 2-qator 2 ta (Keng ekranlarda), Mobilda 1 ta ustun */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
        {ep.items.map((item, index) => (
          <div
            key={item.id}
            onClick={() => handleProblemClick(item)}
            className={`group bg-[#111C38] hover:bg-[#162347] border border-slate-800/80 hover:border-blue-500/50 rounded-2xl p-4 sm:p-5 transition-all duration-200 cursor-pointer flex flex-col justify-between shadow-lg relative overflow-hidden ${
              index >= 3 ? 'lg:col-span-1.5' : ''
            }`}
          >
            {/* Fon nur effekti */}
            <div className="absolute -top-12 -right-12 w-28 h-28 bg-amber-500/10 rounded-full blur-2xl group-hover:bg-amber-500/20 transition-all pointer-events-none"></div>

            <div>
              {/* Muammo sarlavhasi va ogohlantirish ikonkasi */}
              <div className="flex items-start gap-3 mb-3">
                <div className="w-8 h-8 rounded-lg bg-amber-500/15 border border-amber-500/30 text-amber-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <AlertTriangle className="w-4 h-4 fill-amber-400/20" />
                </div>
                <h4 className="text-sm sm:text-base font-bold text-white leading-snug group-hover:text-amber-300 transition-colors">
                  {item.problem}
                </h4>
              </div>

              {/* Yechim matni (1:1 Reference rasmda yashil rangda) */}
              <div className="pt-2.5 border-t border-slate-800/80">
                <p className="text-xs sm:text-sm text-emerald-400 font-medium leading-relaxed">
                  <span className="font-bold underline decoration-emerald-500/40 mr-1.5">Yechim:</span>
                  {item.solution}
                </p>
              </div>
            </div>

            {/* Pastki tugma: WhatsApp orqali yozish */}
            <div className="mt-4 pt-3 border-t border-slate-800/40 flex items-center justify-between text-[11px] sm:text-xs text-slate-400 group-hover:text-white transition-colors">
              <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                <MessageCircle className="w-3.5 h-3.5" />
                <span>{ep.btnText || "WhatsApp orqali murojaat"}</span>
              </span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:translate-x-1 group-hover:text-amber-400 transition-all" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

