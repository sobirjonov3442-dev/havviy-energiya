import React, { useState } from 'react';
import { 
  ArrowLeft, 
  CheckCircle2, 
  Phone, 
  Send, 
  ShieldCheck, 
  Clock, 
  Wrench, 
  Star, 
  User, 
  MapPin, 
  Calendar,
  Sparkles,
  Award,
  AlertCircle
} from 'lucide-react';

export default function ServiceDetailPage({ service, onBack, onBookService, t }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '+971 50 ',
    date: '',
    time: '14:00',
    address: 'Dubai, '
  });
  const [isSuccess, setIsSuccess] = useState(false);

  if (!service) return null;

  const backHomeText = t?.shopPage?.backHome || "Bosh sahifaga qaytish";
  const orderTitle = t?.servicesSection?.orderModalTitle || "Ustani chaqirish formasi";
  const orderSubtitle = t?.servicesSection?.orderModalSubtitle || "Ma'lumotlaringizni qoldiring, usta 20-30 daqiqada yetib boradi";
  const nameLabel = t?.contactSection?.nameLabel || "Ismingiz";
  const phoneLabel = t?.contactSection?.phoneLabel || "Telefon raqamingiz";
  const addressLabel = t?.contactSection?.districtLabel || "Dubaydagi manzilingiz";
  const successTitle = t?.contactSection?.successTitle || "Buyurtmangiz qabul qilindi!";
  const successDesc = t?.contactSection?.successDesc || "Operatorimiz va mutaxassisimiz tez orada siz bilan bog'lanadi.";

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSuccess(true);
    if (onBookService) {
      onBookService(service.title);
    }
  };

  const handleWhatsApp = () => {
    const text = `Assalomu alaykum! HavviyEnergiya saytidan "${service.title}" xizmatiga usta chaqirmoqchiman.\n\n💰 Narxi: ${service.price}\n📍 Manzilim: Dubai\n\nIltimos, vaqtni tasdiqlasangiz.`;
    window.open(`https://wa.me/971500000000?text=${encodeURIComponent(text)}`, '_blank');
  };

  const handleTelegram = () => {
    const text = `Assalomu alaykum! HavviyEnergiya saytidan "${service.title}" xizmatiga usta chaqirmoqchiman.\n\n💰 Narxi: ${service.price}\n📍 Manzilim: Dubai`;
    window.open(`https://t.me/havviy_energiya?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#F4F7FC] text-slate-800 pb-16 animate-fadeIn w-full max-w-full overflow-x-hidden">
      
      {/* =========================================================================
          1. YUQORI QAYTISH TUGMASI
          ========================================================================= */}
      <div className="bg-white border-b border-slate-200/80 sticky top-0 z-30 shadow-2xs">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12 2xl:px-16 py-3.5 flex items-center justify-between gap-4">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 hover:bg-blue-50 text-slate-700 hover:text-[#1D72FE] font-bold text-xs sm:text-sm transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{backHomeText}</span>
          </button>

          <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>100% Rasmiy Kafolat</span>
          </span>
        </div>
      </div>

      <div className="max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12 2xl:px-16 pt-6 sm:pt-8 space-y-6 sm:space-y-8">
        
        {/* =========================================================================
            2. XIZMAT ASOSIY BANNERI VA MA'LUMOTLARI
            ========================================================================= */}
        <div className="rounded-3xl bg-white border border-blue-100 p-6 sm:p-10 shadow-soft overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Chap tomondagi matnlar */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-[#1D72FE] font-black text-xs border border-blue-100">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{service.tag || "Kafolatlangan xizmat"}</span>
              </div>

              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#0B1528] tracking-tight leading-tight">
                {service.title}
              </h1>

              <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed max-w-xl">
                {service.desc} Dubay shahrida professional va sertifikatlangan ustalarimiz tomonidan barcha xavfsizlik standartlariga to'liq rioya qilingan holda bajariladi.
              </p>

              {/* Narx va kafolat nishonlari */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <div className="bg-slate-50 px-4 py-3 rounded-2xl border border-slate-150">
                  <span className="text-xs text-slate-400 block font-bold">Xizmat narxi:</span>
                  <span className="text-xl sm:text-2xl font-black text-[#1D72FE]">
                    {service.price}
                  </span>
                </div>

                <div className="bg-slate-50 px-4 py-3 rounded-2xl border border-slate-150">
                  <span className="text-xs text-slate-400 block font-bold">Yetib borish vaqti:</span>
                  <span className="text-sm sm:text-base font-black text-slate-900 flex items-center gap-1.5 mt-0.5">
                    <Clock className="w-4 h-4 text-emerald-500" />
                    <span>20-30 daqiqa</span>
                  </span>
                </div>
              </div>

              {/* Tezkor aloqa tugmalari */}
              <div className="flex flex-wrap items-center gap-3 pt-3">
                <button
                  onClick={handleWhatsApp}
                  className="px-6 py-3.5 rounded-2xl bg-[#16A34A] hover:bg-[#15803D] text-white font-bold text-xs sm:text-sm shadow-md shadow-green-600/20 flex items-center gap-2 transition-all"
                >
                  <span>WhatsApp orqali chaqirish</span>
                </button>

                <button
                  onClick={handleTelegram}
                  className="px-6 py-3.5 rounded-2xl bg-[#1D72FE] hover:bg-blue-600 text-white font-bold text-xs sm:text-sm shadow-md shadow-blue-500/25 flex items-center gap-2 transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>Telegram</span>
                </button>

                <a
                  href="tel:+971500000000"
                  className="px-6 py-3.5 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs sm:text-sm flex items-center gap-2 transition-all"
                >
                  <Phone className="w-4 h-4 text-[#1D72FE]" />
                  <span>+971 50 000 0000</span>
                </a>
              </div>
            </div>

            {/* O'ng tomondagi sifatli katta rasm */}
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-lg border border-slate-100 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#1D72FE] flex items-center justify-center flex-shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-black text-slate-900">Sertifikatlangan mutaxassislar</div>
                    <div className="text-[11px] text-slate-400 font-medium">Barcha uskunalar sinovdan o'tgan</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* =========================================================================
            3. XIZMAT TARKIBI VA BUYURTMA FORMASI
            ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
          
          {/* Chap tomonda: Xizmat ichiga nimalar kiradi */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-soft space-y-6">
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-[#0B1528] tracking-tight">
                Xizmat jarayoni va kafolatlar
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-1 font-medium">
                Har bir buyurtma quyidagi professional bosqichlar asosida amalga oshiriladi
              </p>
            </div>

            <div className="space-y-3.5">
              {(Array.isArray(service.includes) ? service.includes : (service.includes ? [service.includes] : [])).map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-150">
                  <div className="w-6 h-6 rounded-full bg-blue-50 text-[#1D72FE] flex items-center justify-center flex-shrink-0 font-black text-xs mt-0.5">
                    {idx + 1}
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-slate-800 leading-snug">
                    {item}
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-100">
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-8 h-8 text-[#1D72FE] flex-shrink-0" />
                <div>
                  <div className="text-xs font-black text-slate-900">1 Yil Kafolat</div>
                  <div className="text-[11px] text-slate-400">Rasmiy kafolat cheki</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Clock className="w-8 h-8 text-amber-500 flex-shrink-0" />
                <div>
                  <div className="text-xs font-black text-slate-900">24/7 Xizmat</div>
                  <div className="text-[11px] text-slate-400">Istalgan vaqtda chaqiruv</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Wrench className="w-8 h-8 text-emerald-500 flex-shrink-0" />
                <div>
                  <div className="text-xs font-black text-slate-900">Original qismlar</div>
                  <div className="text-[11px] text-slate-400">Ishonchli detallar</div>
                </div>
              </div>
            </div>
          </div>

          {/* O'ng tomonda: Tezkor buyurtma formasi */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-blue-100 shadow-soft">
            {isSuccess ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                  {successTitle}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 max-w-xs mx-auto">
                  {successDesc}
                </p>
                <button
                  onClick={onBack}
                  className="mt-4 px-6 py-3 rounded-full bg-[#1D72FE] text-white font-bold text-xs shadow-md"
                >
                  {backHomeText}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <h3 className="text-xl font-black text-[#0B1528] tracking-tight">
                    {orderTitle}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    {orderSubtitle}
                  </p>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {nameLabel}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Masalan: Alisher Saidov"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#1D72FE]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {phoneLabel}
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+971 50 123 4567"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#1D72FE]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {addressLabel}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Downtown Dubai, Burj Residences #1402"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#1D72FE]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-2xl bg-[#1D72FE] hover:bg-blue-600 text-white font-bold text-sm shadow-md shadow-blue-500/25 transition-all mt-2"
                >
                  {t?.servicesSection?.callMaster || "Ustani chaqirish"} ({service.price})
                </button>
              </form>
            )}
          </div>

        </div>

      </div>

    </div>
  );
}

