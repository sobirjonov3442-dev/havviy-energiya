import React from 'react';
import { 
  ArrowLeft, 
  ShieldCheck, 
  Clock, 
  Award, 
  CheckCircle2, 
  Users, 
  Wrench, 
  Zap, 
  Snowflake, 
  MapPin, 
  Phone, 
  Send, 
  Star,
  Building2,
  ThumbsUp,
  Sparkles
} from 'lucide-react';

export default function AboutPage({ onBack, onContact, onBookService, t }) {
  const stats = [
    { value: "8+", label: "Yil Dubay bozorida", desc: "2018-yildan beri xizmat ko'rsatib kelamiz" },
    { value: "12,000+", label: "Muvaffaqiyatli buyurtma", desc: "Xonadonlar, villalar va biznes markazlar" },
    { value: "100%", label: "Rasmiy Kafolat", desc: "Barcha bajarilgan ishlarga rasmiy chek" },
    { value: "24/7", label: "Tezkor aloqa", desc: "Dam olishsiz favqulodda xizmatlar" }
  ];

  const advantages = [
    {
      icon: Award,
      title: "Sertifikatlangan mutaxassislar",
      desc: "Ustalarimiz DEWA (Dubai Electricity & Water Authority) standartlari va HVAC sertifikatlariga ega tajribali muhandislardir."
    },
    {
      icon: Clock,
      title: "20-30 daqiqada yetib borish",
      desc: "Dubayning barcha asosiy tumanlarida mobil usta guruhlarimiz doimiy navbatchilikda turadi."
    },
    {
      icon: ShieldCheck,
      title: "1 yillik rasmiy kafolat",
      desc: "O'rnatilgan uskunalar va bajarilgan ta'mirlash ishlariga to'liq yozma kafolat taqdim etiladi."
    },
    {
      icon: Wrench,
      title: "Zamonaviy Yevropa uskunalari",
      desc: "Germaniya va Yaponiya diagnostika apparatlari, original ehtiyot qismlar va professional asbob-uskunalar."
    },
    {
      icon: ThumbsUp,
      title: "Shaffof va halol narxlar",
      desc: "Ish boshlanishidan oldin aniq narx aytiladi. Hech qanday yashirin yoki kutilmagan to'lovlar yo'q."
    },
    {
      icon: Snowflake,
      title: "Dubay iqlimiga mos yondashuv",
      desc: "Dubayning o'ta issiq T3 tropik iqlim sharoitida konditsionerlar maksimal sovuq berishi va tejamkor ishlashi ta'minlanadi."
    }
  ];

  const team = [
    {
      name: "Farrux Usmonov",
      role: "Bosh HVAC muhandisi",
      exp: "10+ yil tajriba",
      badge: "Katta usta",
      image: "https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?auto=format&fit=crop&w=500&q=80"
    },
    {
      name: "Jasur Rahmatov",
      role: "Elektr tizimlari yetakchi mutaxassisi",
      exp: "8+ yil tajriba",
      badge: "DEWA sertifikatli",
      image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=500&q=80"
    },
    {
      name: "Otabek Qodirov",
      role: "Konditsioner montaj va diagnostika ustasi",
      exp: "7+ yil tajriba",
      badge: "VRF mutaxassisi",
      image: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=500&q=80"
    }
  ];

  const coverageAreas = [
    "Downtown Dubai & Burj Khalifa",
    "Dubai Marina & JBR",
    "Palm Jumeirah",
    "Business Bay",
    "Dubai Hills Estate",
    "Arabian Ranches & Damac Hills",
    "Jumeirah Lake Towers (JLT)",
    "Deira & Bur Dubai"
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

          <span className="hidden sm:inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#1D72FE] text-xs font-bold border border-blue-100">
            <Sparkles className="w-3.5 h-3.5" />
            <span>HavviyEnergiya — Dubay, BAA</span>
          </span>
        </div>
      </div>

      <div className="max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12 2xl:px-16 pt-6 sm:pt-10 space-y-8 sm:space-y-12">
        
        {/* =========================================================================
            2. HERO BANNER: KOMPANIYA HAQIDA
            ========================================================================= */}
        <div className="relative rounded-3xl sm:rounded-[36px] bg-white border border-blue-100 p-6 sm:p-12 shadow-soft overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4 sm:space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-[#1D72FE] font-black text-xs border border-blue-100">
                <Building2 className="w-3.5 h-3.5" />
                <span>Biz haqimizda</span>
              </div>

              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#0B1528] tracking-tight leading-tight">
                Dubayda ishonchli va yuqori sifatli <span className="text-[#1D72FE]">Elektr va Konditsioner</span> xizmati
              </h1>

              <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
                <strong>HavviyEnergiya</strong> — Dubay amirligidagi turar-joy xonadonlari, hashamatli villalar va biznes markazlariga 
                yuqori sifatli elektr montaj, konditsioner ta'mirlash, tozalash va texnik servis xizmatlarini ko'rsatuvchi yetakchi kompaniya hisoblanadi.
              </p>

              <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
                Biz har bir mijozimizning xavfsizligi va qulayligini birinchi o'ringa qo'yamiz. Barcha ishlar xalqaro standartlar va Dubay energetika (DEWA) qoidalariga to'liq rioya qilgan holda bajariladi.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="tel:+971501234567"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#1D72FE] hover:bg-blue-600 text-white font-bold text-xs sm:text-sm shadow-md shadow-blue-500/25 transition-all"
                >
                  <Phone className="w-4 h-4" />
                  <span>Tezkor qo'ng'iroq (+971 50 123 4567)</span>
                </a>

                <button
                  onClick={onContact}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs sm:text-sm transition-all"
                >
                  <Send className="w-4 h-4 text-[#1D72FE]" />
                  <span>Aloqa bo'limi</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3] bg-slate-100">
                <img
                  src="/dubai_hero_reference.jpg"
                  alt="HavviyEnergiya Dubai"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-lg border border-slate-100">
                  <div className="text-xs font-black text-slate-900">Dubay shahrining barcha hududlarida 24/7</div>
                  <div className="text-[11px] text-[#1D72FE] font-bold mt-0.5">Downtown • Marina • Palm Jumeirah • Business Bay</div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* =========================================================================
            3. RAQAMLAR VA STATISTIKA
            ========================================================================= */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {stats.map((s, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-7 border border-slate-100 shadow-soft text-center sm:text-left hover:shadow-card transition-all"
            >
              <div className="text-2xl sm:text-4xl font-black text-[#1D72FE] leading-tight">
                {s.value}
              </div>
              <div className="text-xs sm:text-base font-black text-slate-900 mt-1">
                {s.label}
              </div>
              <div className="text-[11px] sm:text-xs text-slate-400 font-medium mt-1">
                {s.desc}
              </div>
            </div>
          ))}
        </div>

        {/* =========================================================================
            4. BIZNING AFZALLIKLARIMIZ (NEGA AYNAN BIZ?)
            ========================================================================= */}
        <div className="bg-white rounded-3xl sm:rounded-[36px] p-6 sm:p-10 border border-slate-100 shadow-soft space-y-6">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-1.5 h-6 bg-[#1D72FE] rounded-full inline-block"></span>
              <h2 className="text-xl sm:text-3xl font-black text-[#0B1528] tracking-tight">
                Nima uchun mijozlar HavviyEnergiyani tanlashadi?
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 font-medium ml-3.5">
              Biz faqat bir martalik emas, uzoq muddatli va ishonchli hamkorlikni ta'minlaymiz
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {advantages.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div 
                  key={idx}
                  className="p-5 rounded-2xl bg-slate-50 hover:bg-blue-50/50 border border-slate-150 hover:border-blue-200 transition-all space-y-2.5"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#1D72FE] flex items-center justify-center">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h3 className="font-black text-sm sm:text-base text-slate-900">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* =========================================================================
            5. BIZNING YETAKCHI MUTAXASSISLARIMIZ
            ========================================================================= */}
        <div className="bg-white rounded-3xl sm:rounded-[36px] p-6 sm:p-10 border border-slate-100 shadow-soft space-y-6">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-1.5 h-6 bg-[#1D72FE] rounded-full inline-block"></span>
              <h2 className="text-xl sm:text-3xl font-black text-[#0B1528] tracking-tight">
                Professional ustalarimiz jamoasi
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 font-medium ml-3.5">
              Ko'p yillik tajribaga ega sertifikatlangan muhandis va montajchilar
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {team.map((member, idx) => (
              <div 
                key={idx}
                className="bg-slate-50 rounded-2xl p-4 sm:p-5 border border-slate-150 flex items-center gap-4 hover:shadow-md transition-all"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden bg-slate-200 flex-shrink-0 shadow-inner">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <span className="text-[10px] font-black px-2 py-0.5 rounded-md bg-blue-100 text-[#1D72FE] inline-block mb-1">
                    {member.badge}
                  </span>
                  <h3 className="font-black text-sm sm:text-base text-slate-900 truncate">
                    {member.name}
                  </h3>
                  <div className="text-xs text-slate-500 font-medium mt-0.5 truncate">
                    {member.role}
                  </div>
                  <div className="text-[11px] text-emerald-600 font-bold mt-1">
                    ✓ {member.exp}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* =========================================================================
            6. QAMROV HUDUDLARI VA TEZKOR CHAQIRUV BANNERI
            ========================================================================= */}
        <div className="rounded-3xl bg-gradient-to-r from-[#0B1528] to-[#162746] text-white p-6 sm:p-10 shadow-2xl space-y-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold text-blue-400 uppercase tracking-widest block mb-1">
              Dubay amirligi bo'ylab
            </span>
            <h2 className="text-xl sm:text-3xl font-black text-white">
              Biz Dubayning barcha tumanlarida xizmat ko'rsatamiz
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-2 font-medium">
              Qayerda bo'lishingizdan qat'i nazar, mobil servis brigadamiz chaqiruvingizdan so'ng 20-30 daqiqa ichida yetib boradi.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3">
            {coverageAreas.map((area, idx) => (
              <div 
                key={idx}
                className="bg-white/10 backdrop-blur-xs rounded-xl p-3 border border-white/10 flex items-center gap-2"
              >
                <MapPin className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" />
                <span className="text-xs font-bold text-slate-200 truncate">{area}</span>
              </div>
            ))}
          </div>

          <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="text-xs text-slate-400">Favqulodda servis kerakmi?</div>
              <div className="text-base sm:text-lg font-black text-white">+971 50 123 4567 (24/7 Ochiq)</div>
            </div>

            <button
              onClick={onContact}
              className="px-8 py-3.5 rounded-full bg-[#1D72FE] hover:bg-blue-600 text-white font-black text-xs sm:text-sm shadow-lg shadow-blue-500/30 transition-all"
            >
              Bog'lanish sahifasi ➔
            </button>
          </div>
        </div>

      </div>

    </div>
  );
}

