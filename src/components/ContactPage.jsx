import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Phone, 
  Send, 
  MapPin, 
  Clock, 
  Mail, 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles,
  MessageSquare,
  AlertCircle,
  HelpCircle,
  ChevronDown
} from 'lucide-react';

export default function ContactPage({ onBack, showToast, t }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '+971 50 ',
    serviceType: 'Konditsioner servisi',
    district: 'Downtown Dubai',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    if (showToast) {
      showToast("Murojaatingiz qabul qilindi! Tez orada bog'lanamiz 📞");
    }
  };

  const handleWhatsApp = () => {
    const text = `Assalomu alaykum! HavviyEnergiya bo'yicha maslahat yoki usta chaqirmoqchiman. Manzilim: Dubai`;
    window.open(`https://wa.me/971501234567?text=${encodeURIComponent(text)}`, '_blank');
  };

  const handleTelegram = () => {
    const text = `Assalomu alaykum! HavviyEnergiya Dubay servisiga murojaat qilmoqchiman.`;
    window.open(`https://t.me/havviy_energiya?text=${encodeURIComponent(text)}`, '_blank');
  };

  const faqs = [
    {
      q: "Usta qancha vaqtda yetib keladi?",
      a: "Dubay shahri bo'ylab (Downtown, Marina, Business Bay, Palm Jumeirah va boshqa tumanlar) mobil servis guruhlarimiz chaqiruvdan so'ng 20-30 daqiqada yetib boradi."
    },
    {
      q: "Xizmatlarga rasmiy kafolat beriladimi?",
      a: "Ha, barcha o'rnatilgan uskunalar, almashtirilgan original ehtiyot qismlar va bajarilgan ishlarga 1 yillik rasmiy kafolat hujjati beriladi."
    },
    {
      q: "To'lov qanday usullarda qabul qilinadi?",
      a: "Naqd pul (AED), bank kartalari (Visa, MasterCard), bank o'tkazmasi orqali to'lov qilishingiz mumkin. Ish to'liq tugatilib, sinovdan o'tkazilgandan so'ng to'lanadi."
    },
    {
      q: "Tunda yoki dam olish kunlari ishlaydimi?",
      a: "Ha, bizning favqulodda avariya brigadamiz 24/7 rejimida – haftaning 7 kuni, kechayu-kunduz xizmat ko'rsatadi."
    }
  ];

  return (
    <div className="min-h-screen bg-[#F3F7FC] text-slate-800 pb-16 animate-fadeIn w-full max-w-full overflow-x-hidden">
      
      {/* =========================================================================
          1. YUQORI HEADER / QAYTISH TUGMASI
          ========================================================================= */}
      <div className="bg-white border-b border-slate-200/80 sticky top-0 z-30 shadow-2xs">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12 2xl:px-16 py-3.5 flex items-center justify-between gap-4">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 hover:bg-blue-50 text-slate-700 hover:text-[#1D72FE] font-bold text-xs sm:text-sm transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Bosh sahifaga qaytish</span>
          </button>

          <span className="hidden sm:inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>24/7 Aloqa markazi ochiq</span>
          </span>
        </div>
      </div>

      <div className="max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12 2xl:px-16 pt-6 sm:pt-10 space-y-8 sm:space-y-12">
        
        {/* =========================================================================
            2. ALOQA HEADER SARLAVHASI
            ========================================================================= */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-[#1D72FE] font-black text-xs border border-blue-100">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Aloqa va Bog'lanish</span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#0B1528] tracking-tight">
            Biz bilan bog'laning — <span className="text-[#1D72FE]">24/7 Dubay</span>
          </h1>

          <p className="text-xs sm:text-base text-slate-500 font-medium">
            Konditsioner yoki elektr bo'yicha savollaringiz bormi? Mutaxassislarimiz har qanday vaqtda sizga tezkor yordam ko'rsatishga tayyor.
          </p>
        </div>

        {/* =========================================================================
            3. TEZKOR ALOQA BLOKLARI (4 TA ASOSIY KARTA)
            ========================================================================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          
          {/* Telefon */}
          <a
            href="tel:+971501234567"
            className="group bg-white rounded-3xl p-6 border border-slate-100 shadow-soft hover:shadow-card hover:border-blue-200 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#1D72FE] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Phone className="w-6 h-6" />
              </div>
              <div className="text-xs font-black text-slate-400 uppercase tracking-wider">Tezkor qo'ng'iroq</div>
              <div className="text-lg font-black text-slate-900 mt-1">+971 50 123 4567</div>
              <div className="text-xs text-slate-500 mt-1 font-medium">Dubay bo'ylab 24/7 tunu-kun ochiq</div>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 text-xs font-black text-[#1D72FE] flex items-center gap-1">
              <span>Qo'ng'iroq qilish</span> ➔
            </div>
          </a>

          {/* WhatsApp */}
          <div
            onClick={handleWhatsApp}
            className="group bg-white rounded-3xl p-6 border border-slate-100 shadow-soft hover:shadow-card hover:border-green-200 transition-all flex flex-col justify-between cursor-pointer"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <MessageSquare className="w-6 h-6" />
              </div>
              <div className="text-xs font-black text-slate-400 uppercase tracking-wider">WhatsApp Chat</div>
              <div className="text-lg font-black text-slate-900 mt-1">+971 50 123 4567</div>
              <div className="text-xs text-slate-500 mt-1 font-medium">1 daqiqada javob beramiz</div>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 text-xs font-black text-emerald-600 flex items-center gap-1">
              <span>Chatni ochish</span> ➔
            </div>
          </div>

          {/* Telegram */}
          <div
            onClick={handleTelegram}
            className="group bg-white rounded-3xl p-6 border border-slate-100 shadow-soft hover:shadow-card hover:border-blue-200 transition-all flex flex-col justify-between cursor-pointer"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#1D72FE] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Send className="w-6 h-6" />
              </div>
              <div className="text-xs font-black text-slate-400 uppercase tracking-wider">Telegram Kanal & Bot</div>
              <div className="text-lg font-black text-slate-900 mt-1">@havviy_energiya</div>
              <div className="text-xs text-slate-500 mt-1 font-medium">Rasmiy xizmat kanali</div>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 text-xs font-black text-[#1D72FE] flex items-center gap-1">
              <span>Telegramga o'tish</span> ➔
            </div>
          </div>

          {/* Manzil */}
          <div className="group bg-white rounded-3xl p-6 border border-slate-100 shadow-soft hover:shadow-card transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <MapPin className="w-6 h-6" />
              </div>
              <div className="text-xs font-black text-slate-400 uppercase tracking-wider">Bosh ofis manzili</div>
              <div className="text-sm font-black text-slate-900 mt-1">Boulevard Plaza Tower 1</div>
              <div className="text-xs text-slate-500 mt-0.5 font-medium">Downtown Dubai, BAA</div>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 text-xs font-black text-amber-600 flex items-center gap-1">
              <span>24/7 Ochiq</span>
            </div>
          </div>

        </div>

        {/* =========================================================================
            4. FORM VA XARITA BO'LIMI
            ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Chap tomonda: Interaktiv murojaat formasi */}
          <div className="lg:col-span-7 bg-white rounded-3xl sm:rounded-[36px] p-6 sm:p-10 border border-blue-100 shadow-soft">
            {isSubmitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-black text-slate-900">
                  Murojaatingiz qabul qilindi!
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 max-w-sm mx-auto">
                  Rahmat! Mutaxassisimiz 5 daqiqa ichida siz bilan bog'lanib, xizmat vaqti va usta kelishini tasdiqlaydi.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-4 px-6 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs"
                >
                  Yana xabar yuborish
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                <div>
                  <h2 className="text-xl sm:text-2xl font-black text-[#0B1528] tracking-tight">
                    Onlayn murojaat yoki savol qoldirish
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-400 mt-1">
                    Ma'lumotlaringizni to'ldiring, qisqa vaqtda javob qaytaramiz
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Ism va familiyangiz *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Masalan: Alisher Saidov"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#1D72FE]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Telefon raqamingiz *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+971 50 123 4567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#1D72FE]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Xizmat turi
                    </label>
                    <select
                      value={formData.serviceType}
                      onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#1D72FE]"
                    >
                      <option value="Konditsioner servisi">Konditsioner montaji va ta'mirlash</option>
                      <option value="Konditsioner tozalash">Antibakterial tozalash & freon</option>
                      <option value="Elektr xizmati">Uy va ofis elektr ishlari</option>
                      <option value="Panel shchit">Avtomat shchit yig'ish (DEWA)</option>
                      <option value="Mahsulot xaridi">Do'kondagi mahsulotlar bo'yicha</option>
                      <option value="Boshqa maslahat">Boshqa maslahat</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Dubaydagi tumaningiz
                    </label>
                    <select
                      value={formData.district}
                      onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#1D72FE]"
                    >
                      <option value="Downtown Dubai">Downtown Dubai & Burj Khalifa</option>
                      <option value="Dubai Marina">Dubai Marina & JBR</option>
                      <option value="Palm Jumeirah">Palm Jumeirah</option>
                      <option value="Business Bay">Business Bay</option>
                      <option value="Dubai Hills">Dubai Hills Estate</option>
                      <option value="JLT">Jumeirah Lake Towers</option>
                      <option value="Boshqa tuman">Boshqa Dubay hududi</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Xabar yoki murojaat matni
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Muammo yoki qiziqtirgan savolingizni qisqacha yozib qoldiring..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#1D72FE]"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-2xl bg-[#1D72FE] hover:bg-blue-600 text-white font-black text-sm shadow-lg shadow-blue-500/25 transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Xabarni yuborish</span>
                </button>
              </form>
            )}
          </div>

          {/* O'ng tomonda: Lokatsiya kartasi va favqulodda yordam */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Favqulodda aloqa banneri */}
            <div className="bg-gradient-to-br from-amber-500 to-amber-600 text-white rounded-3xl p-6 sm:p-7 shadow-xl space-y-3">
              <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                <AlertCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-black">
                Favqulodda nosozlik bormi?
              </h3>
              <p className="text-xs sm:text-sm text-amber-50 font-medium leading-relaxed">
                Konditsionerdan suv oqyaptimi yoki elektr to'satdan uzildimi? Bizning tezkor navbatchi ustamiz 20-30 daqiqada yetib boradi.
              </p>
              <a
                href="tel:+971501234567"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-white text-amber-600 font-black text-xs sm:text-sm shadow-md mt-2 transition-transform transform hover:scale-105"
              >
                <Phone className="w-4 h-4" />
                <span>+971 50 123 4567 — 24/7 Chaqiruv</span>
              </a>
            </div>

            {/* Dubay ofisi va xarita ko'rinishi */}
            <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-soft space-y-4">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[#1D72FE]" />
                <h3 className="font-black text-base text-slate-900">Dubaydagi bosh ofisimiz</h3>
              </div>

              <div className="relative rounded-2xl overflow-hidden aspect-[16/9] bg-slate-100 border border-slate-200">
                <img
                  src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=700&q=80"
                  alt="Downtown Dubai"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent flex items-end p-4">
                  <div className="text-white text-xs">
                    <div className="font-black">Boulevard Plaza Tower 1, Downtown</div>
                    <div className="text-slate-300 text-[11px]">Burj Khalifa ro'parasida, Dubai, UAE</div>
                  </div>
                </div>
              </div>

              <div className="space-y-2 text-xs text-slate-600 font-medium">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#1D72FE] flex-shrink-0" />
                  <span>Ish vaqti: 24 soat / 7 kun ochiq</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#1D72FE] flex-shrink-0" />
                  <span>info@havviyenergiya.ae</span>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* =========================================================================
            5. KO'P BERILADIGAN SAVOLLAR (FAQ)
            ========================================================================= */}
        <div className="bg-white rounded-3xl sm:rounded-[36px] p-6 sm:p-10 border border-slate-100 shadow-soft space-y-5">
          <div className="flex items-center gap-2 mb-2">
            <HelpCircle className="w-5 h-5 text-[#1D72FE]" />
            <h2 className="text-xl sm:text-2xl font-black text-[#0B1528] tracking-tight">
              Tez-tez so'raladigan savollar (FAQ)
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div 
                  key={idx}
                  className="rounded-2xl border border-slate-150 overflow-hidden bg-slate-50/50 transition-all"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full text-left p-4 sm:p-5 font-black text-xs sm:text-sm text-slate-900 flex items-center justify-between gap-4"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${isOpen ? 'rotate-180 text-[#1D72FE]' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-4 sm:px-5 sm:pb-5 text-xs sm:text-sm text-slate-600 font-medium leading-relaxed border-t border-slate-100 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>

    </div>
  );
}

