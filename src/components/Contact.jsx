import React, { useState } from 'react';
import { 
  Phone, 
  Send, 
  MapPin, 
  Clock, 
  Mail, 
  CheckCircle2, 
  MessageSquare, 
  AlertCircle, 
  HelpCircle, 
  ChevronDown 
} from 'lucide-react';

export default function Contact({ showToast, t }) {
  const contactT = t?.contactSection || {
    badge: "Bog'lanish va Aloqa",
    title: "Biz bilan bog'laning",
    subtitle: "Savollaringiz bormi yoki usta kerakmi? 24/7 aloqadamiz",
    callCardTitle: "24/7 Telefon qo'ng'irog'i",
    callCardDesc: "Bepul maslahat va zudlik bilan usta chaqirish",
    whatsappCardTitle: "WhatsApp Onlayn Chat",
    whatsappCardDesc: "Tezkor yozishmalar va fotosurat jo'natish",
    telegramCardTitle: "Telegram Rasmiy Kanal",
    telegramCardDesc: "Xizmatlar, narxlar va maxsus takliflar",
    officeCardTitle: "Dubaydagi Bosh Ofisimiz",
    officeCardDesc: "Downtown Dubai, Burj Khalifa ro'parasida",
    formTitle: "Onlayn usta chaqirish arizasi",
    formSubtitle: "Ma'lumotlaringizni qoldiring, usta 20-30 daqiqada yetib boradi",
    nameLabel: "Ismingiz *",
    namePlaceholder: "Masalan: Alisher Saidov",
    phoneLabel: "Telefon raqamingiz *",
    serviceLabel: "Kerakli xizmat turi *",
    serviceOptions: [
      "Konditsioner o'rnatish va montaj",
      "Konditsioner tozalash va freon quyish",
      "Elektr nosozliklarini bartaraf etish",
      "Avtomat shchit yig'ish va montaj",
      "To'liq elektr simlarini tortish",
      "Boshqa xizmatlar"
    ],
    districtLabel: "Dubaydagi tumaningiz *",
    districtOptions: [
      "Downtown Dubai & Burj Khalifa",
      "Dubai Marina & JBR",
      "Palm Jumeirah",
      "Business Bay",
      "Dubai Hills Estate",
      "Arabian Ranches & Damac Hills",
      "Jumeirah Lake Towers (JLT)",
      "Deira & Bur Dubai",
      "Boshqa tuman"
    ],
    messageLabel: "Muammo yoki qo'shimcha izoh (ixtiyoriy)",
    messagePlaceholder: "Masalan: Konditsioner sovuq bermayapti yoki qisqa tutashuv bo'ldi...",
    submitBtn: "Ustani chaqirish (Ariza yuborish)",
    successTitle: "Murojaatingiz muvaffaqiyatli qabul qilindi!",
    successDesc: "Operatorimiz 5 daqiqa ichida siz bilan bog'lanadi va ustaning kelish vaqtini tasdiqlaydi.",
    newReqBtn: "Yangi so'rov yuborish",
    emergencyTitle: "Favqulodda vaziyatmi? Kutib o'tirmang!",
    emergencyDesc: "Qisqa tutashuv, elektr simlarining qizishi yoki konditsionerdan suv oqishi holatlarida zudlik bilan qo'ng'iroq qiling:",
    faqBadge: "Ko'p beriladigan savollar",
    faqTitle: "Savollaringiz bormi? Bizda javoblar tayyor",
    faqSubtitle: "Mijozlarimiz eng ko'p so'raydigan savollarga tezkor javoblar",
    faqs: [
      {
        q: "Usta qancha vaqtda yetib keladi?",
        a: "Dubay shahri bo'ylab (Downtown, Marina, Business Bay, Palm Jumeirah va boshqa tumanlar) mobil servis guruhlarimiz chaqiruvdan so'ng 20-30 daqiqada yetib boradi."
      },
      {
        q: "Bajarilgan ishlarga kafolat beriladimi?",
        a: "Ha, albatta! Barcha ta'mirlash, tozalash va elektr montaj ishlariga 1 yillik rasmiy yozma kafolat beriladi."
      },
      {
        q: "To'lov qanday shaklda amalga oshiriladi?",
        a: "To'lov ish to'liq topshirilib, siz tomoningizdan sinovdan o'tkazilgandan so'ng naqd pulda, bank kartasi yoki bank o'tkazmasi orqali qabul qilinadi."
      },
      {
        q: "Ustalar litsenziyaga egami?",
        a: "Ha, barcha ustalarimiz DEWA (Dubai Electricity and Water Authority) standartlari bo'yicha sertifikatlangan tajribali muhandislardir."
      }
    ]
  };

  const [formData, setFormData] = useState({
    name: '',
    phone: '+971 50 ',
    serviceType: contactT.serviceOptions?.[0] || 'Konditsioner servisi',
    district: contactT.districtOptions?.[0] || 'Downtown Dubai',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    if (showToast) {
      showToast(contactT.successTitle);
    }
  };

  const handleWhatsApp = () => {
    const text = `Assalomu alaykum! HavviyEnergiya Dubai service: ${formData.serviceType || 'AC/Electrical'} - ${formData.district || 'Dubai'}`;
    window.open(`https://wa.me/971501234567?text=${encodeURIComponent(text)}`, '_blank');
  };

  const handleTelegram = () => {
    const text = `Assalomu alaykum! HavviyEnergiya Dubai service: ${formData.serviceType || 'AC/Electrical'}`;
    window.open(`https://t.me/havviy_energiya?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="contact" className="py-8 sm:py-14 w-full max-w-full overflow-hidden bg-white/70 border-t border-slate-100">
      <div className="max-w-[1920px] mx-auto px-3.5 sm:px-8 lg:px-12 2xl:px-16 space-y-8 sm:space-y-12">
        
        {/* =========================================================================
            1. SARLAVHA
            ========================================================================= */}
        <div className="text-center max-w-3xl mx-auto space-y-2.5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-[#1D72FE] font-black text-xs border border-blue-100">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>{contactT.badge}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black text-[#0B1528] tracking-tight">
            {contactT.title} — <span className="text-[#1D72FE]">24/7 Dubai</span>
          </h2>

          <p className="text-xs sm:text-base text-slate-500 font-medium">
            {contactT.subtitle}
          </p>
        </div>

        {/* =========================================================================
            2. TEZKOR ALOQA BLOKLARI (4 TA KARTA)
            ========================================================================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-6">
          
          {/* Telefon */}
          <a
            href="tel:+971501234567"
            className="group bg-white rounded-3xl p-5 sm:p-6 border border-slate-100 shadow-soft hover:shadow-card hover:border-blue-200 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-blue-50 text-[#1D72FE] flex items-center justify-center mb-3.5 group-hover:scale-110 transition-transform">
                <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div className="text-xs font-black text-slate-400 uppercase tracking-wider">{contactT.callCardTitle}</div>
              <div className="text-base sm:text-lg font-black text-slate-900 mt-1">+971 50 123 4567</div>
              <div className="text-xs text-slate-500 mt-0.5 font-medium">{contactT.callCardDesc}</div>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 text-xs font-black text-[#1D72FE] flex items-center gap-1">
              <span>{contactT.callCardTitle}</span> ➔
            </div>
          </a>

          {/* WhatsApp */}
          <div
            onClick={handleWhatsApp}
            className="group bg-white rounded-3xl p-5 sm:p-6 border border-slate-100 shadow-soft hover:shadow-card hover:border-green-200 transition-all flex flex-col justify-between cursor-pointer"
          >
            <div>
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-3.5 group-hover:scale-110 transition-transform">
                <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div className="text-xs font-black text-slate-400 uppercase tracking-wider">{contactT.whatsappCardTitle}</div>
              <div className="text-base sm:text-lg font-black text-slate-900 mt-1">+971 50 123 4567</div>
              <div className="text-xs text-slate-500 mt-0.5 font-medium">{contactT.whatsappCardDesc}</div>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 text-xs font-black text-emerald-600 flex items-center gap-1">
              <span>WhatsApp Chat</span> ➔
            </div>
          </div>

          {/* Telegram */}
          <div
            onClick={handleTelegram}
            className="group bg-white rounded-3xl p-5 sm:p-6 border border-slate-100 shadow-soft hover:shadow-card hover:border-blue-200 transition-all flex flex-col justify-between cursor-pointer"
          >
            <div>
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-blue-50 text-[#1D72FE] flex items-center justify-center mb-3.5 group-hover:scale-110 transition-transform">
                <Send className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div className="text-xs font-black text-slate-400 uppercase tracking-wider">{contactT.telegramCardTitle}</div>
              <div className="text-base sm:text-lg font-black text-slate-900 mt-1">@havviy_energiya</div>
              <div className="text-xs text-slate-500 mt-0.5 font-medium">{contactT.telegramCardDesc}</div>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 text-xs font-black text-[#1D72FE] flex items-center gap-1">
              <span>Telegram</span> ➔
            </div>
          </div>

          {/* Manzil */}
          <div className="group bg-white rounded-3xl p-5 sm:p-6 border border-slate-100 shadow-soft hover:shadow-card transition-all flex flex-col justify-between">
            <div>
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mb-3.5 group-hover:scale-110 transition-transform">
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div className="text-xs font-black text-slate-400 uppercase tracking-wider">{contactT.officeCardTitle}</div>
              <div className="text-sm sm:text-base font-black text-slate-900 mt-1">Boulevard Plaza Tower 1</div>
              <div className="text-xs text-slate-500 mt-0.5 font-medium">{contactT.officeCardDesc}</div>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 text-xs font-black text-amber-600 flex items-center gap-1">
              <span>24/7 Open</span>
            </div>
          </div>

        </div>

        {/* =========================================================================
            3. FORMA VA LOKATSIYA
            ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          
          {/* Chap tomonda: Interaktiv murojaat formasi */}
          <div className="lg:col-span-7 bg-white rounded-3xl sm:rounded-[36px] p-6 sm:p-10 border border-blue-100 shadow-soft">
            {isSubmitted ? (
              <div className="py-10 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                  {contactT.successTitle}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 max-w-sm mx-auto">
                  {contactT.successDesc}
                </p>
                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 py-2.5 rounded-full bg-[#1D72FE] text-white font-bold text-xs"
                >
                  {contactT.newReqBtn}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-[#0B1528] tracking-tight">
                    {contactT.formTitle}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 font-medium mt-1">
                    {contactT.formSubtitle}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  {/* Ism */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700">
                      {contactT.nameLabel}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={contactT.namePlaceholder}
                      className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm font-semibold text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#1D72FE] focus:bg-white transition-all"
                    />
                  </div>

                  {/* Telefon */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700">
                      {contactT.phoneLabel}
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm font-semibold text-slate-900 focus:outline-none focus:border-[#1D72FE] focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Xizmat turi */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700">
                      {contactT.serviceLabel}
                    </label>
                    <select
                      value={formData.serviceType}
                      onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm font-semibold text-slate-900 focus:outline-none focus:border-[#1D72FE] focus:bg-white transition-all cursor-pointer"
                    >
                      {(contactT.serviceOptions || []).map((opt, i) => (
                        <option key={i} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>

                  {/* Tuman */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700">
                      {contactT.districtLabel}
                    </label>
                    <select
                      value={formData.district}
                      onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm font-semibold text-slate-900 focus:outline-none focus:border-[#1D72FE] focus:bg-white transition-all cursor-pointer"
                    >
                      {(contactT.districtOptions || []).map((opt, i) => (
                        <option key={i} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Qo'shimcha xabar */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700">
                    {contactT.messageLabel}
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={contactT.messagePlaceholder}
                    className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm font-semibold text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#1D72FE] focus:bg-white transition-all resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-2xl bg-[#1D72FE] hover:bg-blue-600 text-white font-bold text-xs sm:text-sm shadow-lg shadow-blue-500/25 transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>{contactT.submitBtn}</span>
                </button>
              </form>
            )}
          </div>

          {/* O'ng tomonda: Xarita va Favqulodda Banner */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Favqulodda Holat Box */}
            <div className="bg-gradient-to-br from-rose-500 to-rose-600 rounded-3xl p-6 text-white shadow-xl space-y-3">
              <div className="flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-white animate-bounce" />
                <span className="font-black text-sm uppercase tracking-wider">{contactT.emergencyTitle}</span>
              </div>
              <p className="text-xs sm:text-sm text-rose-100 font-medium leading-relaxed">
                {contactT.emergencyDesc}
              </p>
              <a
                href="tel:+971501234567"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-rose-600 font-black text-xs shadow-md hover:bg-rose-50 transition-all"
              >
                <Phone className="w-4 h-4" />
                <span>+971 50 123 4567</span>
              </a>
            </div>

            {/* Ofis surati */}
            <div className="relative rounded-3xl overflow-hidden shadow-lg border border-slate-150 aspect-[16/10] bg-slate-100">
              <img
                src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80"
                alt="Downtown Dubai"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="text-xs font-black">Boulevard Plaza Tower 1, Downtown Dubai</div>
                <div className="text-[11px] text-slate-300">Burj Khalifa ro'parasida • 24/7 Mobile Dispatch Hub</div>
              </div>
            </div>

          </div>

        </div>

        {/* =========================================================================
            4. FAQ (KO'P BERILADIGAN SAVOLLAR AKKORDEONI)
            ========================================================================= */}
        <div className="bg-white rounded-3xl sm:rounded-[36px] p-6 sm:p-10 border border-slate-100 shadow-soft space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[#1D72FE] font-black text-[11px] border border-blue-100">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>{contactT.faqBadge}</span>
            </div>
            <h3 className="text-xl sm:text-3xl font-black text-[#0B1528] tracking-tight">
              {contactT.faqTitle}
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 font-medium">
              {contactT.faqSubtitle}
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {(contactT.faqs || []).map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div 
                  key={idx}
                  className="rounded-2xl border border-slate-200/80 overflow-hidden transition-all bg-white"
                >
                  <button
                    type="button"
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full px-5 py-4 text-left font-black text-xs sm:text-sm text-slate-900 hover:text-[#1D72FE] flex items-center justify-between gap-4 transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-4 h-4 text-slate-400 flex-shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-[#1D72FE]' : ''}`} />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-4 text-xs sm:text-sm text-slate-600 font-medium leading-relaxed border-t border-slate-100 pt-3 bg-slate-50/50">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
