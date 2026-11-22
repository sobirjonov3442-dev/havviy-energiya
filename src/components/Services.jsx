import React from 'react';
import { 
  Snowflake, 
  Zap, 
  Home, 
  Settings, 
  RefreshCw, 
  ArrowRight, 
  Phone,
  Wrench
} from 'lucide-react';

export default function Services({ onOpenServiceDetail, t, services: propServices }) {
  const secT = t?.servicesSection || {
    badge: "Professional xizmatlar",
    title: "Bizning xizmatlarimiz",
    subtitle: "Sizning qulayligingiz uchun eng yaxshi xizmatlar",
    viewAll: "Barchasini ko'rish",
    details: "Batafsil"
  };

  const servicesData = [
    {
      id: 1,
      title: secT.items?.[0]?.title || "Konditsioner o'rnatish va ta'mirlash",
      desc: secT.items?.[0]?.desc || "Barcha turdagi split va markaziy konditsionerlarni montaj qilish va ta'mirlash",
      price: secT.items?.[0]?.price || "150 AED",
      tag: secT.items?.[0]?.tag || "100% Kafolat",
      icon: Snowflake,
      image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=600&q=80",
      includes: [
        "Konditsioner to'liq montaji va ulanishi",
        "Trassa tortish va vakuumlash",
        "Ishlashini sinovdan o'tkazish",
        "1 yillik rasmiy kafolat hujjati"
      ]
    },
    {
      id: 2,
      title: secT.items?.[1]?.title || "Elektr xizmatlari",
      desc: secT.items?.[1]?.desc || "Xonadonlar va tijorat binolari uchun to'liq elektr ishlari va montaj",
      price: secT.items?.[1]?.price || "100 AED",
      tag: secT.items?.[1]?.tag || "Tezkor usta",
      icon: Zap,
      image: "https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?auto=format&fit=crop&w=600&q=80",
      includes: [
        "Elektr nosozliklarini aniqlash va bartaraf etish",
        "Rozetka, vikyuchatel va lyustralar o'rnatish",
        "Qisqa tutashuv va ortiqcha yuklamani oldini olish",
        "Tezkor 24/7 chaqiruv xizmati"
      ]
    },
    {
      id: 3,
      title: secT.items?.[2]?.title || "Uy elektr tarmoqlari",
      desc: secT.items?.[2]?.desc || "Kvartira va villalarda xavfsiz elektr simlarini tortish va yangilash",
      price: secT.items?.[2]?.price || "200 AED",
      tag: secT.items?.[2]?.tag || "Xavfsizlik",
      icon: Home,
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80",
      includes: [
        "Yangi binolarda noldan sim tortish",
        "Eski simlarni zamonaviy mis kabellarga almashtirish",
        "Yerga ulash (zazemleniye) tizimini o'rnatish",
        "Texnik xavfsizlik sertifikati"
      ]
    },
    {
      id: 4,
      title: secT.items?.[3]?.title || "Elektr panel o'rnatish",
      desc: secT.items?.[3]?.desc || "Avtomat shchitlarini zamonaviy Yevropa standartida yig'ish va ulash",
      price: secT.items?.[3]?.price || "250 AED",
      tag: secT.items?.[3]?.tag || "Yevropa standarti",
      icon: Settings,
      image: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=600&q=80",
      includes: [
        "Schneider Electric va ABB avtomatlarini terish",
        "UZO va kuchlanish relesini to'g'ri ulash",
        "Yuklamalarni faza bo'yicha teng taqsimlash",
        "Markirovka va kafolat xizmati"
      ]
    },
    {
      id: 5,
      title: secT.items?.[4]?.title || "Konditsioner tozalash",
      desc: secT.items?.[4]?.desc || "Antibakterial chuqur tozalash, dezinfeksiya va freon quyish",
      price: secT.items?.[4]?.price || "120 AED",
      tag: secT.items?.[4]?.tag || "Toza havo",
      icon: RefreshCw,
      image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=600&q=80",
      includes: [
        "Bosim ostida antibakterial yuvish",
        "Mog'or va yoqimsiz hidlarni to'liq yo'qotish",
        "Freon R410A / R32 bosimini to'ldirish",
        "Elektr sarfini 20-30% ga kamaytirish"
      ]
    }
  ];

  const finalServices = propServices && propServices.length > 0 ? propServices : servicesData;

  return (
    <section id="services" className="py-8 sm:py-12 lg:py-16 w-full max-w-full overflow-hidden">
      <div className="max-w-[1920px] mx-auto px-3.5 sm:px-8 lg:px-12 2xl:px-16 w-full">
        
        {/* =========================================================================
            1. SARLAVHA (REFERENCE RASMDA 1:1)
            ========================================================================= */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-5 sm:mb-8">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-1.5 h-5 sm:h-6 bg-[#1D72FE] rounded-full inline-block"></span>
              <h2 className="text-lg sm:text-2xl lg:text-3xl font-black text-[#0B1528] tracking-tight">
                {secT.title}
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 font-medium ml-3.5 sm:ml-4">
              {secT.subtitle}
            </p>
          </div>

          <button
            onClick={() => onOpenServiceDetail(finalServices[0])}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-200 text-[#1D72FE] hover:bg-[#1D72FE] hover:text-white font-bold text-xs sm:text-sm transition-all self-start sm:self-auto shadow-2xs group"
          >
            <span>{secT.viewAll}</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* =========================================================================
            2. MOBILDA 1 QATORDA 2 TADAN KARTA: grid-cols-2 (Talab 1:1 bajarildi)
            ========================================================================= */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2.5 sm:gap-5 2xl:gap-6 w-full max-w-full">
          {finalServices.map((item) => {
            const IconComponent = item.icon || Wrench;
            return (
              <div
                key={item.id}
                onClick={() => onOpenServiceDetail(item)}
                className="group bg-white rounded-2xl sm:rounded-3xl p-2.5 sm:p-5 border border-blue-100/70 shadow-soft hover:shadow-card hover:border-[#1D72FE]/40 transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col justify-between cursor-pointer min-w-0 w-full"
              >
                <div>
                  {/* Yuqori qism: Icon va Kichik tegi */}
                  <div className="flex items-center justify-between mb-2.5 sm:mb-3.5">
                    <div className="w-7 h-7 sm:w-10 sm:h-10 rounded-xl bg-blue-50 text-[#1D72FE] flex items-center justify-center shadow-2xs group-hover:bg-[#1D72FE] group-hover:text-white transition-colors">
                      {IconComponent ? (
                        <IconComponent className="w-3.5 h-3.5 sm:w-5 sm:h-5" />
                      ) : (
                        <Wrench className="w-3.5 h-3.5 sm:w-5 sm:h-5" />
                      )}
                    </div>
                    
                    <span className="text-[9px] sm:text-[10px] font-black px-1.5 py-0.5 sm:px-2.5 sm:py-1 rounded-full bg-blue-50 text-[#1D72FE] border border-blue-100/80 truncate max-w-[70px] sm:max-w-none">
                      {item.tag || "Kafolat"}
                    </span>
                  </div>

                  {/* Sifatli rasm */}
                  <div className="relative aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden bg-slate-100 mb-2.5 sm:mb-4 shadow-inner">
                    <img
                      src={item.image || "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&q=80"}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                      loading="lazy"
                    />
                    
                    {/* Narx burchakda */}
                    <span className="absolute bottom-1.5 left-1.5 sm:bottom-2 sm:left-2 px-1.5 sm:px-2.5 py-0.5 rounded-md sm:rounded-lg bg-white/95 backdrop-blur-xs text-[#0B1528] text-[9px] sm:text-[11px] font-black shadow-xs">
                      {item.price}
                    </span>
                  </div>

                  {/* Xizmat nomi */}
                  <h3 className="font-bold sm:font-black text-xs sm:text-sm md:text-base text-[#0B1528] leading-tight sm:leading-snug line-clamp-2 min-h-[30px] sm:min-h-[40px] group-hover:text-[#1D72FE] transition-colors">
                    {item.title}
                  </h3>

                  {/* Qisqa tavsifi (faqat planshet va kompyuterda) */}
                  <p className="hidden sm:block text-xs text-slate-500 font-medium line-clamp-2 mt-1 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* Pastki qism: Batafsil va Telefoncha belgisi */}
                <div className="pt-2 sm:pt-3.5 mt-2 border-t border-slate-100 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1 text-[10px] sm:text-xs font-bold text-[#1D72FE] group-hover:translate-x-0.5 transition-transform">
                    <span>{secT.details}</span>
                    <ArrowRight className="w-3 h-3" />
                  </span>

                  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-slate-50 text-slate-400 group-hover:bg-blue-50 group-hover:text-[#1D72FE] flex items-center justify-center transition-colors">
                    <Phone className="w-3 h-3" />
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
