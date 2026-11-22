import React from 'react';
import { 
  ShieldCheck, 
  Clock, 
  Award, 
  CheckCircle2, 
  Users, 
  Wrench, 
  Snowflake, 
  MapPin, 
  Phone, 
  Send, 
  Building2,
  ThumbsUp,
  Sparkles
} from 'lucide-react';

export default function About({ t, onContactClick }) {
  const aboutT = t?.aboutSection || {
    badge: "Biz haqimizda",
    titlePart1: "Dubayda ishonchli va professional",
    titleHighlight: "Elektr va Konditsioner",
    titlePart2: "xizmati",
    desc1: "HavviyEnergiya — Dubay amirligidagi turar-joy xonadonlari, villalar va biznes markazlariga yuqori sifatli elektr montaj, konditsioner ta'mirlash, tozalash va texnik servis xizmatlarini ko'rsatuvchi yetakchi jamoa hisoblanadi.",
    desc2: "Biz har bir mijozimizning xavfsizligi va qulayligini birinchi o'ringa qo'yamiz. Barcha ishlar DEWA talablari va xalqaro xavfsizlik standartlariga to'liq rioya qilgan holda bajariladi.",
    quickCall: "Tezkor qo'ng'iroq (+971 50 123 4567)",
    contactBtn: "Aloqa bo'limi ➔",
    experienceBadge: "DEWA Litsenziyasi va Rasmiy Kafolat",
    stats: [
      { value: "8+", label: "Yil Dubay bozorida", desc: "2018-yildan beri xizmat ko'rsatib kelamiz" },
      { value: "12,000+", label: "Muvaffaqiyatli buyurtma", desc: "Xonadonlar, villalar va biznes markazlar" },
      { value: "100%", label: "Rasmiy Kafolat", desc: "Barcha bajarilgan ishlarga rasmiy chek" },
      { value: "24/7", label: "Tezkor aloqa", desc: "Dam olishsiz favqulodda xizmatlar" }
    ],
    advantagesTitle: "Nega aynan HavviyEnergiya?",
    advantagesSubtitle: "Biz mijozlarimizga xalqaro standartdagi eng yuqori sifatni taqdim etamiz",
    advantages: [
      {
        title: "Sertifikatlangan mutaxassislar",
        desc: "Ustalarimiz DEWA (Dubai Electricity & Water Authority) standartlari va HVAC sertifikatlariga ega tajribali muhandislardir."
      },
      {
        title: "20-30 daqiqada yetib borish",
        desc: "Dubayning barcha asosiy tumanlarida mobil usta guruhlarimiz doimiy navbatchilikda turadi."
      },
      {
        title: "1 yillik rasmiy kafolat",
        desc: "O'rnatilgan uskunalar va bajarilgan ta'mirlash ishlariga to'liq yozma kafolat taqdim etiladi."
      },
      {
        title: "Zamonaviy Yevropa uskunalari",
        desc: "Germaniya va Yaponiya diagnostika apparatlari, original ehtiyot qismlar va professional asbob-uskunalar."
      },
      {
        title: "Shaffof va halol narxlar",
        desc: "Ish boshlanishidan oldin aniq narx aytiladi. Hech qanday yashirin yoki kutilmagan to'lovlar yo'q."
      },
      {
        title: "Dubay iqlimiga mos yondashuv",
        desc: "Dubayning o'ta issiq T3 tropik iqlim sharoitida konditsionerlar maksimal sovuq berishi va tejamkor ishlashi ta'minlanadi."
      }
    ],
    teamTitle: "Bizning sertifikatlangan ustalarimiz",
    teamSubtitle: "DEWA talablariga to'liq javob beruvchi malakali muhandislar jamoasi",
    team: [
      {
        name: "Farrux Usmonov",
        role: "Bosh HVAC muhandisi",
        exp: "10+ yil tajriba",
        badge: "Katta usta"
      },
      {
        name: "Jasur Rahmatov",
        role: "Elektr tizimlari yetakchi mutaxassisi",
        exp: "8+ yil tajriba",
        badge: "DEWA sertifikatli"
      },
      {
        name: "Otabek Qodirov",
        role: "Konditsioner montaj va diagnostika ustasi",
        exp: "7+ yil tajriba",
        badge: "VRF mutaxassisi"
      }
    ],
    areasTitle: "Dubay bo'yicha xizmat ko'rsatish hududlari",
    areasSubtitle: "Mobil servis guruhlarimiz barcha asosiy tumanlarda 20-30 daqiqada yetib boradi"
  };

  const advantageIcons = [Award, Clock, ShieldCheck, Wrench, ThumbsUp, Snowflake];

  const teamPhotos = [
    "https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=500&q=80"
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
    <section id="about" className="py-8 sm:py-14 w-full max-w-full overflow-hidden">
      <div className="max-w-[1920px] mx-auto px-3.5 sm:px-8 lg:px-12 2xl:px-16 space-y-8 sm:space-y-12">
        
        {/* =========================================================================
            1. SARLAVHA VA ASOSIY BANNER
            ========================================================================= */}
        <div className="relative rounded-3xl sm:rounded-[36px] bg-white border border-blue-100 p-6 sm:p-10 shadow-soft overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4 sm:space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-[#1D72FE] font-black text-xs border border-blue-100">
                <Building2 className="w-3.5 h-3.5" />
                <span>{aboutT.badge}</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-black text-[#0B1528] tracking-tight leading-tight">
                {aboutT.titlePart1} <span className="text-[#1D72FE]">{aboutT.titleHighlight}</span> {aboutT.titlePart2}
              </h2>

              <p className="text-xs sm:text-base text-slate-600 font-medium leading-relaxed">
                {aboutT.desc1}
              </p>

              <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed">
                {aboutT.desc2}
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="tel:+971501234567"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#1D72FE] hover:bg-blue-600 text-white font-bold text-xs sm:text-sm shadow-md shadow-blue-500/25 transition-all"
                >
                  <Phone className="w-4 h-4" />
                  <span>{aboutT.quickCall}</span>
                </a>

                {onContactClick && (
                  <button
                    onClick={onContactClick}
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs sm:text-sm transition-all"
                  >
                    <Send className="w-4 h-4 text-[#1D72FE]" />
                    <span>{aboutT.contactBtn}</span>
                  </button>
                )}
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white aspect-[4/3] bg-slate-100">
                <img
                  src="/dubai_hero_reference.jpg"
                  alt="HavviyEnergia Dubai"
                  className="w-full h-full object-cover filter contrast-[1.08] saturate-[1.2]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 bg-white/95 backdrop-blur-md p-3 sm:p-3.5 rounded-2xl shadow-lg border border-slate-100">
                  <div className="text-xs font-black text-slate-900">{aboutT.experienceBadge}</div>
                  <div className="text-[10px] sm:text-[11px] text-[#1D72FE] font-bold mt-0.5">Downtown • Marina • Palm Jumeirah • Business Bay</div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* =========================================================================
            2. RAQAMLAR VA STATISTIKA
            ========================================================================= */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {(aboutT.stats || []).map((s, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-7 border border-slate-100 shadow-soft text-center sm:text-left hover:shadow-card transition-all min-w-0"
            >
              <div className="text-2xl sm:text-4xl font-black text-[#1D72FE] leading-tight">
                {s.value}
              </div>
              <div className="text-xs sm:text-base font-black text-slate-900 mt-1 truncate">
                {s.label}
              </div>
              <div className="text-[10px] sm:text-xs text-slate-400 font-medium mt-1 line-clamp-2">
                {s.desc}
              </div>
            </div>
          ))}
        </div>

        {/* =========================================================================
            3. AFZALLIKLARIMIZ (NEGA AYNAN BIZ?)
            ========================================================================= */}
        <div className="bg-white rounded-3xl sm:rounded-[36px] p-6 sm:p-10 border border-slate-100 shadow-soft space-y-6">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-1.5 h-6 bg-[#1D72FE] rounded-full inline-block"></span>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-[#0B1528] tracking-tight">
                {aboutT.advantagesTitle}
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 font-medium ml-3.5">
              {aboutT.advantagesSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-6">
            {(aboutT.advantages || []).map((item, idx) => {
              const IconComp = advantageIcons[idx % advantageIcons.length] || Award;
              return (
                <div 
                  key={idx}
                  className="p-4 sm:p-5 rounded-2xl bg-slate-50 hover:bg-blue-50/50 border border-slate-150 hover:border-blue-200 transition-all space-y-2 min-w-0"
                >
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-blue-50 text-[#1D72FE] flex items-center justify-center">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h4 className="font-black text-sm sm:text-base text-slate-900 leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* =========================================================================
            4. BIZNING YETAKCHI MUTAXASSISLARIMIZ
            ========================================================================= */}
        <div className="bg-white rounded-3xl sm:rounded-[36px] p-6 sm:p-10 border border-slate-100 shadow-soft space-y-6">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-1.5 h-6 bg-[#1D72FE] rounded-full inline-block"></span>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-[#0B1528] tracking-tight">
                {aboutT.teamTitle}
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 font-medium ml-3.5">
              {aboutT.teamSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-6">
            {(aboutT.team || []).map((member, idx) => (
              <div 
                key={idx}
                className="bg-slate-50 rounded-2xl p-4 sm:p-5 border border-slate-150 flex items-center gap-3.5 hover:shadow-md transition-all min-w-0"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden bg-slate-200 flex-shrink-0 shadow-inner">
                  <img
                    src={teamPhotos[idx % teamPhotos.length]}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="inline-block px-2 py-0.5 rounded-md bg-blue-100/70 text-[#1D72FE] text-[10px] font-black uppercase tracking-wider mb-1">
                    {member.badge}
                  </div>
                  <h4 className="font-black text-sm sm:text-base text-slate-900 truncate">
                    {member.name}
                  </h4>
                  <div className="text-xs font-bold text-slate-600 truncate mt-0.5">
                    {member.role}
                  </div>
                  <div className="text-[11px] text-slate-400 font-medium mt-0.5">
                    {member.exp}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* =========================================================================
            5. DUBAY XIZMAT KO'RSATISH HUDUDLARI
            ========================================================================= */}
        <div className="bg-gradient-to-br from-[#0B1528] to-[#122240] rounded-3xl sm:rounded-[36px] p-6 sm:p-10 text-white space-y-6 shadow-xl">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 font-bold text-xs border border-blue-400/30 mb-2">
              <MapPin className="w-3.5 h-3.5" />
              <span>Coverage Districts</span>
            </div>
            <h3 className="text-xl sm:text-3xl font-black tracking-tight">
              {aboutT.areasTitle}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 font-medium mt-1">
              {aboutT.areasSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {coverageAreas.map((area, idx) => (
              <div 
                key={idx}
                className="bg-white/10 hover:bg-white/15 backdrop-blur-xs p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-white/10 flex items-center gap-2 sm:gap-2.5 transition-colors"
              >
                <div className="w-2 h-2 rounded-full bg-emerald-400 flex-shrink-0 animate-ping"></div>
                <span className="text-xs sm:text-sm font-bold text-white truncate">{area}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
