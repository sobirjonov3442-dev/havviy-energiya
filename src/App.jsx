import React, { useState, useEffect } from 'react';
import { 
  Home, 
  ShoppingBag, 
  User, 
  ChevronDown, 
  MapPin, 
  Wrench, 
  Play, 
  ArrowRight, 
  ShieldCheck, 
  Clock, 
  Truck, 
  Headphones,
  Menu,
  X,
  Phone,
  Zap,
  CheckCircle2,
  Sparkles,
  Search,
  Sliders
} from 'lucide-react';
import { translations } from './data/translations';
import { products as defaultProducts } from './data/products';
import AuthModal from './components/AuthModal';
import ProfilePage from './components/ProfilePage';
import CartDrawer from './components/CartDrawer';
import LanguageDropdown from './components/LanguageDropdown';
import Services from './components/Services';
import ServiceDetailPage from './components/ServiceDetailPage';
import About from './components/About';
import Contact from './components/Contact';
import Shop from './components/Shop';
import ShopPage from './components/ShopPage';
import Footer from './components/Footer';
import AdminPanel from './components/AdminPanel';

export default function App() {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('havviy_lang') || 'uz';
  });

  // Sahifa holati: 'home', 'profile', 'shop', 'service-detail', 'about', 'contact'
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedService, setSelectedService] = useState(null);
  const [activeTab, setActiveTab] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Cart state: boshlang'ich 2 ta mahsulot reference rasmga muvofiq (1130 AED)
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem('havviy_cart');
      if (saved) return JSON.parse(saved);
    } catch {}
    return [
      {
        id: 1,
        name: "Zamonaviy Magnitli Treksistema 48V",
        price: 320,
        quantity: 2,
        image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400&q=80"
      },
      {
        id: 2,
        name: "Schneider Electric Avtomat Shchiti (24 modul)",
        price: 490,
        quantity: 1,
        image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400&q=80"
      }
    ];
  });

  const [isCartOpen, setIsCartOpen] = useState(false);

  // =========================================================================
  // ADMIN PANEL DAVRIY MA'LUMOTLARI (LOCALSTORAGE BILAN 100% PERSISTENT)
  // =========================================================================
  const [productsList, setProductsList] = useState(() => {
    try {
      const saved = localStorage.getItem('havviy_products');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error(e);
    }
    return defaultProducts;
  });

  const [servicesList, setServicesList] = useState(() => {
    try {
      const saved = localStorage.getItem('havviy_services');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed.map((s, idx) => ({
            id: s.id || idx + 1,
            title: s.title || "Xizmat",
            price: s.price || "100 AED",
            tag: s.tag || "Kafolat",
            image: s.image || "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&q=80",
            desc: s.desc || "",
            includes: Array.isArray(s.includes) ? s.includes : []
          }));
        }
      }
    } catch (e) {
      console.error(e);
    }
    return [
      {
        id: 1,
        title: "Konditsioner o'rnatish va ta'mirlash",
        desc: "Barcha turdagi split va markaziy konditsionerlarni montaj qilish va ta'mirlash",
        price: "150 AED",
        tag: "100% Kafolat",
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
        title: "Elektr xizmatlari",
        desc: "Xonadonlar va tijorat binolari uchun to'liq elektr ishlari va montaj",
        price: "100 AED",
        tag: "Tezkor usta",
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
        title: "Uy elektr tarmoqlari",
        desc: "Kvartira va villalarda xavfsiz elektr simlarini tortish va yangilash",
        price: "200 AED",
        tag: "Xavfsizlik",
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
        title: "Elektr panel o'rnatish",
        desc: "Avtomat shchitlarini zamonaviy Yevropa standartida yig'ish va ulash",
        price: "250 AED",
        tag: "Yevropa standarti",
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
        title: "Konditsioner tozalash",
        desc: "Antibakterial chuqur tozalash, dezinfeksiya va freon quyish",
        price: "120 AED",
        tag: "Toza havo",
        image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=600&q=80",
        includes: [
          "Bosim ostida antibakterial yuvish",
          "Mog'or va yoqimsiz hidlarni to'liq yo'qotish",
          "Freon R410A / R32 bosimini to'ldirish",
          "Elektr sarfini 20-30% ga kamaytirish"
        ]
      }
    ];
  });

  const [heroConfig, setHeroConfig] = useState(() => {
    try {
      const saved = localStorage.getItem('havviy_hero');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error(e);
    }
    return {
      titlePart1: "Dubayda",
      titlePart2: "Elektr va",
      titleHighlight: "Konditsioner",
      titlePart3: "xizmati",
      desc: "Sizning qulayligingiz uchun zamonaviy texnologiya va professional yondashuv!",
      badge: "Dubayda",
      qualityCardTitle: "100% Sifat kafolati",
      qualityCardDesc: "Rasmiy servis markazi",
      image: "/dubai_hero_reference.jpg",
      stats: [
        { id: 1, title: "24/7", subtitle: "Xizmat" },
        { id: 2, title: "Sifat kafolati", subtitle: "100% ishonch" },
        { id: 3, title: "Tezkor", subtitle: "Yetkazib berish" },
        { id: 4, title: "Professional", subtitle: "Ishonchli xizmat" }
      ]
    };
  });

  const [footerConfig, setFooterConfig] = useState(() => {
    try {
      const saved = localStorage.getItem('havviy_footer');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error(e);
    }
    return {
      phone: "+971 50 123 4567",
      emergencyPhone: "+971 52 987 6543",
      email: "info@havviyenergiya.ae",
      address: "Business Bay, Iris Bay Tower, 14-qavat, Dubay, BAA",
      hours: "24/7 — Har kuni uzluksiz",
      whatsapp: "+971501234567",
      telegram: "https://t.me/havviy_energiya",
      instagram: "https://instagram.com/havviy_energiya",
      youtube: "https://youtube.com/@havviy_energiya",
      copyright: "2026 HavviyEnergiya — Dubay, BAA. Barcha huquqlar himoyalangan."
    };
  });

  const [ordersList, setOrdersList] = useState(() => {
    try {
      const saved = localStorage.getItem('havviy_orders');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error(e);
    }
    return [
      {
        id: "ORD-2026-901",
        customer: "Alisher Saidov",
        phone: "+971 50 123 4567",
        items: "Green Inverter 12,000 BTU x 1, Schneider Avtomat x 2",
        total: 2830,
        status: "Yangi",
        date: "22.11.2026, 19:40",
        location: "Downtown, Burj Residences"
      },
      {
        id: "ORD-2026-900",
        customer: "Jasur Rahimov",
        phone: "+971 55 456 7890",
        items: "Konditsioner o'rnatish va ta'mirlash xizmati",
        total: 150,
        status: "Jarayonda",
        date: "22.11.2026, 17:15",
        location: "Dubai Marina, Marina Gate"
      },
      {
        id: "ORD-2026-899",
        customer: "Muhammad Ali",
        phone: "+971 54 321 0000",
        items: "Daikin 24,000 BTU T3 Tropical x 1",
        total: 2800,
        status: "Bajarildi",
        date: "21.11.2026, 14:00",
        location: "Palm Jumeirah, Villa #42"
      }
    ];
  });

  const handleUpdateProducts = (newProds) => {
    setProductsList(newProds);
    localStorage.setItem('havviy_products', JSON.stringify(newProds));
  };

  const handleUpdateServices = (newServices) => {
    setServicesList(newServices);
    localStorage.setItem('havviy_services', JSON.stringify(newServices));
  };

  const handleUpdateHero = (newHero) => {
    setHeroConfig(newHero);
    localStorage.setItem('havviy_hero', JSON.stringify(newHero));
  };

  const handleUpdateFooter = (newFooter) => {
    setFooterConfig(newFooter);
    localStorage.setItem('havviy_footer', JSON.stringify(newFooter));
  };

  const handleUpdateOrders = (newOrders) => {
    setOrdersList(newOrders);
    localStorage.setItem('havviy_orders', JSON.stringify(newOrders));
  };

  // Standart foydalanuvchi ma'lumotlari (barcha xaridlar va servislar bilan)
  const defaultUser = {
    name: "Alisher Saidov",
    phone: "+971 50 123 4567",
    email: "alisher.dubai@gmail.com",
    address: "Downtown Dubai, Burj Residences Tower 3, Apt #1402",
    registeredAt: "12.01.2025",
    clientType: "VIP Resident",
    services: [
      {
        id: "SRV-2026-891",
        title: "Konditsioner tozalash, freon quyish va antibakterial ishlov",
        category: "Konditsioner servisi",
        master: "Farrux Usmonov (Katta usta)",
        date: "22.11.2026, 14:30",
        location: "Downtown, Burj Residences #1402",
        status: "Jarayonda",
        price: 250,
        currency: "AED",
        note: "Usta yo'lda, belgilangan vaqtda yetib keladi."
      },
      {
        id: "SRV-2026-754",
        title: "Schneider Electric avtomat shchiti montaji va elektr simlarini yangilash",
        category: "Elektr montaj",
        master: "Jasur Rahmatov (Elektr muhandisi)",
        date: "15.11.2026",
        location: "Downtown, Burj Residences #1402",
        status: "Bajarildi",
        price: 650,
        currency: "AED",
        note: "24 modul to'liq o'rnatildi va xavfsizlik sinovidan o'tkazildi."
      },
      {
        id: "SRV-2026-610",
        title: "Daikin Inverter konditsionerini to'liq o'rnatish va trassa tortish",
        category: "Montaj xizmati",
        master: "Otabek Qodirov (Montaj ustasi)",
        date: "02.11.2026",
        location: "Downtown, Burj Residences #1402",
        status: "Bajarildi",
        price: 450,
        currency: "AED",
        note: "T3 kompressor sinovdan o'tkazildi va kafolat rasmiylashtirildi."
      },
      {
        id: "SRV-2026-420",
        title: "Favqulodda elektr nosozligini aniqlash va qisqa tutashuvni bartaraf etish",
        category: "Tezkor servis",
        master: "Jasur Rahmatov",
        date: "28.10.2026",
        location: "Downtown, Burj Residences #1402",
        status: "Bajarildi",
        price: 150,
        currency: "AED",
        note: "Muammo 30 daqiqada hal qilindi."
      }
    ],
    purchases: [
      {
        id: "PRD-1001",
        name: "Green Inverter 12,000 BTU T3 Tropical",
        category: "Konditsioner",
        image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400&q=80",
        warranty: "3 yil rasmiy kafolat",
        date: "02.11.2026",
        price: 1850,
        quantity: 1,
        status: "Yetkazildi va o'rnatildi"
      },
      {
        id: "PRD-1002",
        name: "Schneider Electric Avtomat Shchiti (24 modul)",
        category: "Elektr jihozlari",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&q=80",
        warranty: "5 yil kafolat",
        date: "15.11.2026",
        price: 490,
        quantity: 1,
        status: "Yetkazildi"
      },
      {
        id: "PRD-1003",
        name: "Zamonaviy Magnitli Treksistema 48V (2 dona)",
        category: "Aksessuarlar",
        image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400&q=80",
        warranty: "2 yil kafolat",
        date: "20.11.2026",
        price: 640,
        quantity: 2,
        status: "Yetkazildi"
      },
      {
        id: "PRD-1004",
        name: "Elektr Kabel 3x2.5mm mis sim (100 metr)",
        category: "Elektr kabellari",
        image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&q=80",
        warranty: "GOST sertifikati",
        date: "15.11.2026",
        price: 370,
        quantity: 1,
        status: "Yetkazildi"
      }
    ]
  };

  // Authenticated user state
  const [user, setUser] = useState(() => {
    try {
      const saved = localStorage.getItem('havviy_user');
      return saved ? JSON.parse(saved) : defaultUser;
    } catch {
      return defaultUser;
    }
  });

  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  // Toast
  const [toast, setToast] = useState({ visible: false, message: '' });

  const showToast = (message) => {
    setToast({ visible: true, message });
    setTimeout(() => {
      setToast({ visible: false, message: '' });
    }, 2800);
  };

  // Sync lang
  useEffect(() => {
    localStorage.setItem('havviy_lang', lang);
  }, [lang]);

  // Sync cart
  useEffect(() => {
    localStorage.setItem('havviy_cart', JSON.stringify(cart));
  }, [cart]);

  // Sync user
  useEffect(() => {
    if (user) {
      localStorage.setItem('havviy_user', JSON.stringify(user));
    } else {
      localStorage.removeItem('havviy_user');
    }
  }, [user]);

  const t = translations[lang] || translations.uz;

  // Tilga qarab hero va statistika matnlari (UZ da admin sozlamasi, boshqa tillarda 100% tarjima)
  const heroBadge = lang === 'uz' ? (heroConfig.badge || t.hero.badge) : t.hero.badge;
  const heroQualityTitle = lang === 'uz' ? (heroConfig.qualityCardTitle || t.hero.qualityCardTitle) : t.hero.qualityCardTitle;
  const heroQualityDesc = lang === 'uz' ? (heroConfig.qualityCardDesc || t.hero.qualityCardDesc) : t.hero.qualityCardDesc;
  const heroTitlePart1 = lang === 'uz' ? (heroConfig.titlePart1 || t.hero.titlePart1) : t.hero.titlePart1;
  const heroTitlePart2 = lang === 'uz' ? (heroConfig.titlePart2 || t.hero.titlePart2) : t.hero.titlePart2;
  const heroTitleHighlight = lang === 'uz' ? (heroConfig.titleHighlight || t.hero.titleHighlight) : t.hero.titleHighlight;
  const heroTitlePart3 = lang === 'uz' ? (heroConfig.titlePart3 || t.hero.titlePart3) : t.hero.titlePart3;
  const heroDesc = lang === 'uz' ? (heroConfig.desc || t.hero.desc) : t.hero.desc;

  const stat1Title = lang === 'uz' ? (heroConfig.stats?.[0]?.title || t.stats.s1Val) : t.stats.s1Val;
  const stat1Subtitle = lang === 'uz' ? (heroConfig.stats?.[0]?.subtitle || t.stats.s1Label) : t.stats.s1Label;
  const stat2Title = lang === 'uz' ? (heroConfig.stats?.[1]?.title || t.stats.s2Val) : t.stats.s2Val;
  const stat2Subtitle = lang === 'uz' ? (heroConfig.stats?.[1]?.subtitle || t.stats.s2Label) : t.stats.s2Label;
  const stat3Title = lang === 'uz' ? (heroConfig.stats?.[2]?.title || t.stats.s3Val) : t.stats.s3Val;
  const stat3Subtitle = lang === 'uz' ? (heroConfig.stats?.[2]?.subtitle || t.stats.s3Label) : t.stats.s3Label;
  const stat4Title = lang === 'uz' ? (heroConfig.stats?.[3]?.title || t.stats.s4Val) : t.stats.s4Val;
  const stat4Subtitle = lang === 'uz' ? (heroConfig.stats?.[3]?.subtitle || t.stats.s4Label) : t.stats.s4Label;

  const handleLoginSuccess = (userData) => {
    setUser(userData);
    showToast(`Xush kelibsiz, ${userData.name}!`);
  };

  const handleLogout = () => {
    setUser(null);
    setCurrentPage('home');
    showToast("Hisobdan chiqildi");
  };

  const updateCartQuantity = (id, delta) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
    showToast("Mahsulot savatdan olib tashlandi");
  };

  // Sevimlilar (Wishlist) holati
  const [favorites, setFavorites] = useState(() => {
    try {
      const saved = localStorage.getItem('havviy_favs');
      return saved ? JSON.parse(saved) : [1, 3, 6];
    } catch {
      return [1, 3, 6];
    }
  });

  const toggleFavorite = (id) => {
    setFavorites((prev) => {
      const exists = prev.includes(id);
      const updated = exists ? prev.filter((x) => x !== id) : [...prev, id];
      localStorage.setItem('havviy_favs', JSON.stringify(updated));
      showToast(exists ? "Sevimlilardan olib tashlandi" : "Sevimlilarga qo'shildi ❤️");
      return updated;
    });
  };

  const handleAddToCart = (item) => {
    setCart((prev) => {
      const existingIndex = prev.findIndex((x) => x.id === item.id);
      if (existingIndex > -1) {
        const copy = [...prev];
        copy[existingIndex] = {
          ...copy[existingIndex],
          quantity: copy[existingIndex].quantity + (item.quantity || 1)
        };
        return copy;
      }
      return [...prev, { ...item, quantity: item.quantity || 1 }];
    });
    showToast(`"${item.name}" savatga qo'shildi 🛍️`);
  };

  const handleBuyNow = (prod) => {
    handleAddToCart({
      id: prod.id,
      name: prod.name,
      price: prod.price,
      quantity: 1,
      image: prod.image
    });
    // Foydalanuvchi talabi bo'yicha: Har safar savat oynasi to'satdan ochilib ketmaydi,
    // faqat "Qo'shildi" bildirishnomasi va savat belgisi ko'rsatiladi.
  };

  // Cart count: mahsulot turlari soni
  const cartBadgeCount = cart.length;

  return (
    <div className="min-h-screen flex flex-col bg-[#F3F7FC] text-slate-800 font-sans selection:bg-[#1D72FE] selection:text-white antialiased w-full max-w-full overflow-x-hidden">
      
      {/* =========================================================================
          ASOSIY HEADER / NAVBAR (DROPDOWN MENYULAR KESILIB QOLMASLIGI UCHUN OVERFLOW-VISIBLE)
          ========================================================================= */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-xs border-b border-slate-100 py-2.5 sm:py-3.5 px-3 sm:px-8 lg:px-12 2xl:px-16 transition-all w-full max-w-full">
        <div className="max-w-[1920px] mx-auto flex items-center justify-between gap-2 sm:gap-4 w-full">
          
          {/* Logo (Moviy uycha + HavviyEnergiya) */}
          <button 
            onClick={() => {
              setCurrentPage('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-2 sm:gap-3 group focus:outline-none flex-shrink-0 text-left min-w-0"
          >
            <div className="w-9 h-9 sm:w-11 sm:h-11 text-[#1D72FE] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
              <svg className="w-8 h-8 sm:w-9 sm:h-9 fill-[#1D72FE]" viewBox="0 0 24 24">
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                <path d="M11.5 8.5L9 13h3l-1 4.5 4-6h-3.5z" fill="white" />
              </svg>
            </div>
            <div className="min-w-0">
              <span className="text-lg sm:text-2xl 2xl:text-3xl font-black text-[#0B1528] tracking-tight leading-none block truncate">
                Havviy<span className="text-[#1D72FE]">Energiya</span>
              </span>
              <span className="hidden sm:block text-[11px] sm:text-xs font-bold text-slate-400 mt-0.5 truncate">
                {t.hero.titlePart2} {t.hero.titleHighlight} {t.hero.titlePart3}
              </span>
            </div>
          </button>

          {/* O'rtadagi Kapsula Navigatsiya Menyusi (Avtomatik tanlangan tilda) */}
          <nav className="hidden xl:flex items-center gap-1 bg-white p-1 rounded-full border border-slate-200/80 shadow-2xs">
            <button
              onClick={() => {
                setCurrentPage('home');
                setActiveTab('home');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`flex items-center gap-2 px-5 py-2 text-xs sm:text-sm font-bold rounded-full transition-all ${
                currentPage === 'home' && activeTab === 'home'
                  ? 'bg-[#1D72FE] text-white shadow-md shadow-blue-500/25'
                  : 'text-slate-700 hover:text-[#1D72FE]'
              }`}
            >
              <Home className="w-4 h-4 fill-current" />
              <span>{t.nav.home}</span>
            </button>

            <button
              onClick={() => {
                setCurrentPage('home');
                setActiveTab('services');
                setTimeout(() => {
                  const el = document.getElementById('services');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }, 50);
              }}
              className="flex items-center gap-1 px-4 py-2 text-xs sm:text-sm font-bold rounded-full text-slate-700 hover:text-[#1D72FE] transition-colors"
            >
              <span>{t.nav.services}</span>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
            </button>

            <button
              onClick={() => {
                setCurrentPage('home');
                setActiveTab('shop');
                setTimeout(() => {
                  const el = document.getElementById('shop');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }, 50);
              }}
              className="flex items-center gap-1 px-4 py-2 text-xs sm:text-sm font-bold rounded-full text-slate-700 hover:text-[#1D72FE] transition-colors"
            >
              <span>{t.nav.shop}</span>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
            </button>

            <button
              onClick={() => {
                setCurrentPage('home');
                setActiveTab('accessories');
                setTimeout(() => {
                  const el = document.getElementById('shop');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }, 50);
              }}
              className="px-4 py-2 text-xs sm:text-sm font-bold rounded-full text-slate-700 hover:text-[#1D72FE] transition-colors"
            >
              <span>{t.nav.accessories}</span>
            </button>

            <button
              onClick={() => {
                setCurrentPage('home');
                setActiveTab('about');
                setTimeout(() => {
                  const el = document.getElementById('about');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }, 50);
              }}
              className="px-4 py-2 text-xs sm:text-sm font-bold rounded-full text-slate-700 hover:text-[#1D72FE] transition-colors"
            >
              <span>{t.nav.about}</span>
            </button>

            <button
              onClick={() => {
                setCurrentPage('home');
                setActiveTab('contact');
                setTimeout(() => {
                  const el = document.getElementById('contact');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }, 50);
              }}
              className="px-4 py-2 text-xs sm:text-sm font-bold rounded-full text-slate-700 hover:text-[#1D72FE] transition-colors"
            >
              <span>{t.nav.contact}</span>
            </button>
          </nav>

          {/* O'ng tomondagi elementlar: Til tanlagich, Qidiruv, Savat, Kirish/Profil */}
          <div className="flex items-center gap-1.5 sm:gap-3 flex-shrink-0">
            
            {/* Til tanlash kapsulasi (1:1 Reference Image 1 & 2: RU EN TR UZ) */}
            <LanguageDropdown lang={lang} onSelectLang={setLang} />

            {/* QIDIRUV TUGMASI (1:1 Reference Image 4: Dumaloq qidiruv belgisi) */}
            <button
              onClick={() => {
                if (currentPage !== 'home') {
                  setCurrentPage('home');
                  setTimeout(() => {
                    const el = document.getElementById('shop');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }, 50);
                } else {
                  const el = document.getElementById('shop');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="hidden sm:flex w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-slate-100 text-slate-700 hover:text-[#1D72FE] hover:bg-blue-50 items-center justify-center transition-colors flex-shrink-0"
              title={t.nav?.search || "Qidiruv"}
            >
              <Search className="w-4 h-4 sm:w-5 sm:h-5 text-slate-700" />
            </button>

            {/* SAVAT TUGMASI: BOSILGANDA SAVAT DRAWERNINI OCHADI (1:1 Image 3: qizil raqam dumaloq va buzilmagan) */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-slate-100 text-slate-700 hover:text-[#1D72FE] hover:bg-blue-50 flex items-center justify-center transition-colors flex-shrink-0"
              title={t.nav?.cart || "Savat"}
            >
              <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5" />
              {cartBadgeCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 min-w-[20px] min-h-[20px] max-w-[20px] max-h-[20px] aspect-square rounded-full bg-[#EF4444] text-white text-[10px] sm:text-[11px] font-black flex items-center justify-center shadow-xs border-2 border-white pointer-events-none leading-none z-10 flex-shrink-0 p-0 text-center">
                  {cartBadgeCount}
                </span>
              )}
            </button>

            {/* Kirish / Shaxsiy Profil tugmasi */}
            {user ? (
              <button
                onClick={() => setCurrentPage(currentPage === 'profile' ? 'home' : 'profile')}
                className={`inline-flex items-center gap-1.5 sm:gap-2 px-2 sm:px-4 py-1.5 sm:py-2.5 rounded-full border text-xs sm:text-sm font-bold shadow-xs transition-all flex-shrink-0 ${
                  currentPage === 'profile'
                    ? 'bg-[#1D72FE] border-[#1D72FE] text-white'
                    : 'bg-blue-50 border-blue-200 text-[#1D72FE] hover:bg-blue-100'
                }`}
                title="Mening profilim"
              >
                <div className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center text-[10px] sm:text-[11px] font-black flex-shrink-0 ${
                  currentPage === 'profile' ? 'bg-white text-[#1D72FE]' : 'bg-[#1D72FE] text-white'
                }`}>
                  {user.name.charAt(0).toUpperCase()}
                </div>
                <span className="hidden sm:inline max-w-[120px] truncate">{user.name}</span>
              </button>
            ) : (
              <button
                onClick={() => setIsAuthModalOpen(true)}
                className="w-9 h-9 sm:w-auto sm:px-5 sm:py-2.5 rounded-full bg-[#1D72FE] hover:bg-blue-600 text-white font-bold text-xs sm:text-sm shadow-md shadow-blue-500/25 transition-all flex items-center justify-center gap-2 flex-shrink-0"
              >
                <User className="w-4 h-4" />
                <span className="hidden sm:inline">{t.nav.login}</span>
              </button>
            )}

            {/* ADMIN PANEL TUGMASI (To'g'ridan-to'g'ri Admin panelga kirish) */}
            <button
              onClick={() => {
                setCurrentPage(currentPage === 'admin' ? 'home' : 'admin');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`inline-flex items-center gap-1.5 px-2.5 sm:px-3.5 py-1.5 sm:py-2.5 rounded-full border text-xs sm:text-sm font-black shadow-xs transition-all cursor-pointer flex-shrink-0 ${
                currentPage === 'admin'
                  ? 'bg-slate-900 border-slate-900 text-white shadow-md ring-2 ring-blue-400'
                  : 'bg-slate-100 hover:bg-slate-200 border-slate-200/90 text-slate-800'
              }`}
              title="Admin Panel (Boshqaruv)"
            >
              <Sliders className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#1D72FE]" />
              <span className="hidden sm:inline">Admin</span>
            </button>

            {/* Mobil menyu ochish */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="xl:hidden w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center flex-shrink-0"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

          </div>

        </div>

        {/* Mobil Menyusi */}
        {isMobileMenuOpen && (
          <div className="xl:hidden bg-white border-t border-slate-100 px-4 py-3 mt-3 space-y-2 animate-fadeIn shadow-xl rounded-2xl">
            <div className="pb-2 border-b border-slate-100 flex items-center justify-between">
              <span className="text-xs font-bold text-slate-500">Til / Language:</span>
              <LanguageDropdown lang={lang} onSelectLang={setLang} />
            </div>

            {/* Admin Panel (Mobil menyu) */}
            <button
              onClick={() => {
                setCurrentPage('admin');
                setIsMobileMenuOpen(false);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full text-left px-4 py-2.5 rounded-xl font-black text-sm bg-slate-900 text-white flex items-center justify-between"
            >
              <span className="flex items-center gap-2">
                <Sliders className="w-4 h-4 text-[#1D72FE]" />
                <span>Admin Panel</span>
              </span>
              <span className="text-[10px] bg-[#1D72FE] px-2 py-0.5 rounded-full font-black">
                Boshqaruv
              </span>
            </button>
            <button 
              onClick={() => {
                setCurrentPage('home');
                setIsMobileMenuOpen(false);
              }}
              className="w-full text-left px-4 py-2.5 rounded-xl font-bold text-sm bg-blue-50 text-[#1D72FE]"
            >
              {t.nav.home}
            </button>
            <button 
              onClick={() => {
                setCurrentPage('home');
                setIsMobileMenuOpen(false);
                setTimeout(() => {
                  const el = document.getElementById('services');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }, 50);
              }}
              className="w-full text-left px-4 py-2.5 rounded-xl font-bold text-sm text-slate-700"
            >
              {t.nav.services}
            </button>
            <button 
              onClick={() => {
                setCurrentPage('home');
                setIsMobileMenuOpen(false);
                setTimeout(() => {
                  const el = document.getElementById('shop');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }, 50);
              }}
              className="w-full text-left px-4 py-2.5 rounded-xl font-bold text-sm text-slate-700"
            >
              {t.nav.shop}
            </button>
            <button 
              onClick={() => {
                setCurrentPage('home');
                setIsMobileMenuOpen(false);
                setTimeout(() => {
                  const el = document.getElementById('shop');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }, 50);
              }}
              className="w-full text-left px-4 py-2.5 rounded-xl font-bold text-sm text-slate-700"
            >
              {t.nav.accessories}
            </button>
            <button 
              onClick={() => {
                setCurrentPage('home');
                setIsMobileMenuOpen(false);
                setTimeout(() => {
                  const el = document.getElementById('about');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }, 50);
              }}
              className="w-full text-left px-4 py-2.5 rounded-xl font-bold text-sm text-slate-700"
            >
              {t.nav.about}
            </button>
            <button 
              onClick={() => {
                setCurrentPage('home');
                setIsMobileMenuOpen(false);
                setTimeout(() => {
                  const el = document.getElementById('contact');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }, 50);
              }}
              className="w-full text-left px-4 py-2.5 rounded-xl font-bold text-sm text-slate-700"
            >
              {t.nav.contact}
            </button>
            
            {user ? (
              <button 
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setCurrentPage('profile');
                }}
                className="w-full text-center py-2.5 rounded-xl font-bold text-sm bg-blue-50 text-[#1D72FE] border border-blue-200"
              >
                {user.name} ({t.nav.profile})
              </button>
            ) : (
              <button 
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsAuthModalOpen(true);
                }}
                className="w-full text-center py-2.5 rounded-xl font-bold text-sm bg-[#1D72FE] text-white"
              >
                {t.nav.login}
              </button>
            )}
          </div>
        )}
      </header>

      {/* =========================================================================
          ROUTING: PROFIL YOKI ALOHIDA XIZMAT SAHIFASI (QOLGAN BARCHASI BITTA SAHIFADA)
          ========================================================================= */}
      {currentPage === 'admin' ? (
        <AdminPanel
          onBack={() => {
            setCurrentPage('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          products={productsList}
          onUpdateProducts={handleUpdateProducts}
          services={servicesList}
          onUpdateServices={handleUpdateServices}
          heroConfig={heroConfig}
          onUpdateHero={handleUpdateHero}
          footerConfig={footerConfig}
          onUpdateFooter={handleUpdateFooter}
          orders={ordersList}
          onUpdateOrders={handleUpdateOrders}
        />
      ) : currentPage === 'profile' ? (
        <ProfilePage
          user={user}
          onBack={() => setCurrentPage('home')}
          onLogout={handleLogout}
          t={t}
        />
      ) : currentPage === 'service-detail' ? (
        <ServiceDetailPage
          service={selectedService}
          onBack={() => setCurrentPage('home')}
          onBookService={(srvTitle) => showToast(`"${srvTitle}" xizmati uchun so'rovingiz qabul qilindi!`)}
          t={t}
          lang={lang}
        />
      ) : (
        /* =========================================================================
            ASOSIY BOSH SAHIFA (HERO + STATS + XIZMATLAR + 2 QATOR DO'KON)
            ========================================================================= */
        <main className="flex-1 py-3 sm:py-6 lg:py-8 2xl:py-10 w-full max-w-full overflow-hidden">
          <div className="w-full max-w-[1920px] mx-auto px-3 sm:px-8 lg:px-12 2xl:px-16">
            
            {/* Main Hero Card Container */}
            <div className="relative rounded-2xl sm:rounded-[40px] bg-white border border-blue-100/90 shadow-soft overflow-hidden min-h-[480px] sm:min-h-[600px] lg:min-h-[660px] 2xl:min-h-[740px] flex items-center w-full">
              
              {/* ULTRA-HD ORQA FON: DUBAY SHAHRI PANORAMASI + USTA VA KONDITSIONER (SOCHNIY VA TINIQ) */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                <img 
                  src={heroConfig.image || "/dubai_hero_reference.jpg"} 
                  alt="Dubayda elektr va konditsioner xizmati" 
                  className="w-full h-full object-cover object-[78%_center] sm:object-right select-none filter contrast-[1.12] saturate-[1.35] brightness-[0.98] transition-all"
                  style={{ imageRendering: '-webkit-optimize-contrast' }}
                />

                {/* Chap tomondagi nozik gradient (Mobilda rasm oqarib ketmasligi uchun shaffofligi yumshatilgan) */}
                <div className="absolute inset-y-0 left-0 w-full sm:w-3/4 md:w-3/5 lg:w-1/2 bg-gradient-to-r from-white/90 via-white/40 to-transparent sm:via-white/90 pointer-events-none"></div>

                {/* Pastki chap moviy to'lqin chizig'i (SVG wave 1:1 Reference) */}
                <div className="absolute bottom-0 left-0 w-1/2 max-w-lg h-24 sm:h-36 pointer-events-none opacity-80 sm:opacity-100">
                  <svg viewBox="0 0 500 150" preserveAspectRatio="none" className="w-full h-full">
                    <path d="M0,80 C150,140 300,30 500,120 L500,150 L0,150 Z" fill="#1D72FE" opacity="0.25"></path>
                    <path d="M0,100 C180,150 280,60 500,140 L500,150 L0,150 Z" fill="#1D72FE" opacity="0.65"></path>
                  </svg>
                </div>
              </div>

              {/* DEKORATIV NUQTALAR NAQSHI (Dot Grid 1:1 Reference) */}
              <div className="absolute top-6 sm:top-8 left-6 sm:left-10 z-10 pointer-events-none grid grid-cols-5 gap-2 opacity-30">
                {[...Array(20)].map((_, i) => (
                  <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#1D72FE]"></div>
                ))}
              </div>

              <div className="absolute bottom-6 sm:bottom-8 right-6 sm:right-10 z-10 pointer-events-none grid grid-cols-5 gap-2 opacity-30">
                {[...Array(20)].map((_, i) => (
                  <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#1D72FE]"></div>
                ))}
              </div>

              {/* O'ng yuqori suzuvchi badge: Sifat va Ishonchlilik */}
              <div className="hidden sm:flex absolute top-5 sm:top-8 right-4 sm:right-10 z-20 bg-white/95 backdrop-blur-md px-4 sm:px-5 py-2.5 sm:py-3 rounded-2xl shadow-xl border border-blue-50 items-center gap-3 animate-float">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-blue-50 text-[#1D72FE] flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="w-6 h-6 fill-[#1D72FE] text-white" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-black text-[#0B1528] leading-tight">
                    {heroQualityTitle}
                  </div>
                  <div className="text-[11px] sm:text-xs font-bold text-[#1D72FE] leading-tight mt-0.5">
                    {heroQualityDesc}
                  </div>
                </div>
              </div>

              {/* CONTENT (CHAP TOMONDAGI ASOSIY MATN VA TUGMALAR) */}
              <div className="relative z-10 px-4 sm:px-12 lg:px-16 2xl:px-20 py-8 sm:py-16 max-w-2xl 2xl:max-w-3xl space-y-4 sm:space-y-6 2xl:space-y-8 w-full">
                
                {/* Kichik badge: 📍 Dubayda */}
                <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-white text-[#1D72FE] font-black text-xs sm:text-sm shadow-md border border-blue-100">
                  <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-[#1D72FE] text-[#1D72FE]" />
                  <span>{heroBadge}</span>
                </div>

                {/* Katta sarlavha (Tanlangan tilda) */}
                <h1 className="text-2xl sm:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-black text-[#0B1528] leading-[1.12] sm:leading-[1.08] tracking-tight">
                  {heroTitlePart1} <br />
                  {heroTitlePart2} <br />
                  <span className="text-[#1D72FE]">{heroTitleHighlight}</span> <br />
                  {heroTitlePart3}
                </h1>

                {/* Tavsif */}
                <p className="text-xs sm:text-base lg:text-lg 2xl:text-xl text-slate-700 font-semibold sm:font-medium leading-relaxed max-w-lg 2xl:max-w-xl">
                  {heroDesc}
                </p>

                {/* Tugmalar: Xizmatga buyurtma berish ➔ & ▶ Biz haqimizda */}
                <div className="flex flex-wrap items-center gap-2.5 sm:gap-4 pt-2">
                  
                  <button
                    onClick={() => {
                      const el = document.getElementById('services');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="inline-flex items-center gap-2 px-5 sm:px-8 py-3 sm:py-4 rounded-full bg-[#1D72FE] hover:bg-blue-600 text-white font-bold text-xs sm:text-sm 2xl:text-base shadow-lg shadow-blue-500/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                  >
                    <Wrench className="w-4 h-4 2xl:w-5 2xl:h-5" />
                    <span>{t.hero.orderBtn}</span>
                    <ArrowRight className="w-4 h-4 2xl:w-5 2xl:h-5 ml-1" />
                  </button>

                  <button
                    onClick={() => {
                      const el = document.getElementById('about');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="inline-flex items-center gap-2 px-5 sm:px-8 py-3 sm:py-4 rounded-full bg-white hover:bg-slate-50 text-slate-800 font-bold text-xs sm:text-sm 2xl:text-base shadow-md border border-slate-150 transition-all"
                  >
                    <div className="w-5 h-5 sm:w-6 sm:h-6 2xl:w-7 2xl:h-7 rounded-full bg-blue-50 text-[#1D72FE] flex items-center justify-center">
                      <Play className="w-3 h-3 sm:w-3.5 sm:h-3.5 2xl:w-4 2xl:h-4 fill-[#1D72FE]" />
                    </div>
                    <span>{t.hero.aboutBtn}</span>
                  </button>

                </div>

              </div>

            </div>

            {/* =========================================================================
                HERO OSTIDAGI 4 TA STATISTIKA KARTASI (Tanlangan tilda)
                ========================================================================= */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-6 2xl:gap-8 mt-4 sm:mt-7 2xl:mt-8 w-full">
              
              {/* 1. 24/7 Xizmat */}
              <div className="bg-white rounded-xl sm:rounded-3xl p-3 sm:p-6 2xl:p-7 border border-slate-100 shadow-soft flex items-center gap-2.5 sm:gap-4 hover:shadow-card hover:border-blue-100 transition-all min-w-0">
                <div className="w-9 h-9 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-blue-50 text-[#1D72FE] flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 sm:w-7 sm:h-7" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="font-black text-xs sm:text-lg 2xl:text-xl text-[#0B1528] leading-tight truncate">
                    {stat1Title}
                  </div>
                  <div className="text-[10px] sm:text-sm text-slate-400 font-medium mt-0.5 truncate">
                    {stat1Subtitle}
                  </div>
                </div>
              </div>

              {/* 2. Sifat kafolati */}
              <div className="bg-white rounded-xl sm:rounded-3xl p-3 sm:p-6 2xl:p-7 border border-slate-100 shadow-soft flex items-center gap-2.5 sm:gap-4 hover:shadow-card hover:border-blue-100 transition-all min-w-0">
                <div className="w-9 h-9 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-blue-50 text-[#1D72FE] flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="w-5 h-5 sm:w-7 sm:h-7" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="font-black text-xs sm:text-lg 2xl:text-xl text-[#0B1528] leading-tight truncate">
                    {stat2Title}
                  </div>
                  <div className="text-[10px] sm:text-sm text-slate-400 font-medium mt-0.5 truncate">
                    {stat2Subtitle}
                  </div>
                </div>
              </div>

              {/* 3. Tezkor */}
              <div className="bg-white rounded-xl sm:rounded-3xl p-3 sm:p-6 2xl:p-7 border border-slate-100 shadow-soft flex items-center gap-2.5 sm:gap-4 hover:shadow-card hover:border-blue-100 transition-all min-w-0">
                <div className="w-9 h-9 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-blue-50 text-[#1D72FE] flex items-center justify-center flex-shrink-0">
                  <Truck className="w-5 h-5 sm:w-7 sm:h-7" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="font-black text-xs sm:text-lg 2xl:text-xl text-[#0B1528] leading-tight truncate">
                    {stat3Title}
                  </div>
                  <div className="text-[10px] sm:text-sm text-slate-400 font-medium mt-0.5 truncate">
                    {stat3Subtitle}
                  </div>
                </div>
              </div>

              {/* 4. Professional */}
              <div className="bg-white rounded-xl sm:rounded-3xl p-3 sm:p-6 2xl:p-7 border border-slate-100 shadow-soft flex items-center gap-2.5 sm:gap-4 hover:shadow-card hover:border-blue-100 transition-all min-w-0">
                <div className="w-9 h-9 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-blue-50 text-[#1D72FE] flex items-center justify-center flex-shrink-0">
                  <Headphones className="w-5 h-5 sm:w-7 sm:h-7" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="font-black text-xs sm:text-lg 2xl:text-xl text-[#0B1528] leading-tight truncate">
                    {stat4Title}
                  </div>
                  <div className="text-[10px] sm:text-sm text-slate-400 font-medium mt-0.5 truncate">
                    {stat4Subtitle}
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* =========================================================================
              2. BIZNING XIZMATLARIMIZ BO'LIMI (REFERENCE RASMDA 1:1, MOBILDA 1 QATORDA 2 TA)
              ========================================================================= */}
          <Services
            onOpenServiceDetail={(srv) => {
              setSelectedService(srv);
              setCurrentPage('service-detail');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            t={t}
            lang={lang}
            services={servicesList}
          />

          {/* =========================================================================
              3. MAHSULOTLAR DO'KONI (2 QATOR BO'LIB CHIQADI, "YANA KO'RISH" BOSILGANDA SHU YERNING O'ZIDA KENGAYADI)
              ========================================================================= */}
          <Shop
            onAddToCart={handleAddToCart}
            onBuyNow={handleBuyNow}
            favorites={favorites}
            onToggleFavorite={toggleFavorite}
            t={t}
            lang={lang}
            products={productsList}
          />

          {/* =========================================================================
              4. BIZ HAQIMIZDA BO'LIMI (1 TA JOYDA / BITTA ASOSIY SAHIFADA)
              ========================================================================= */}
          <About 
            t={t} 
            onContactClick={() => {
              const el = document.getElementById('contact');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }} 
          />

          {/* =========================================================================
              5. BOG'LANISH VA ALOQA BO'LIMI (1 TA JOYDA / BITTA ASOSIY SAHIFADA)
              ========================================================================= */}
          <Contact showToast={showToast} t={t} />

        </main>
      )}

      {/* =========================================================================
          PROFESSIONAL PREMIUM FOOTER (IPHONE & BRAND BADGES, INSTAGRAM, TELEGRAM, WHATSAPP, YOUTUBE)
          ========================================================================= */}
      <Footer
        t={t}
        footerConfig={footerConfig}
        onOpenAdmin={() => {
          setCurrentPage('admin');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onNavClick={(sectionId) => {
          if (currentPage !== 'home') {
            setCurrentPage('home');
            setTimeout(() => {
              if (sectionId === 'hero') window.scrollTo({ top: 0, behavior: 'smooth' });
              else {
                const el = document.getElementById(sectionId);
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }
            }, 50);
          } else {
            if (sectionId === 'hero') window.scrollTo({ top: 0, behavior: 'smooth' });
            else {
              const el = document.getElementById(sectionId);
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }
          }
        }}
      />

      {/* Floating Toast */}
      {toast.visible && (
        <div className="fixed bottom-6 right-6 z-50 animate-fadeIn">
          <div className="bg-[#0B1528] text-white px-5 py-3 rounded-2xl shadow-2xl border border-slate-700 flex items-center gap-2.5 text-xs sm:text-sm font-bold">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>{toast.message}</span>
          </div>
        </div>
      )}

      {/* Savat Draweri (1:1 Reference rasm bo'yicha: WhatsApp, Telegram, hisob-kitob) */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        updateQuantity={updateCartQuantity}
        removeFromCart={removeFromCart}
        t={t}
      />

      {/* Kirish / Ro'yxatdan o'tish modali */}
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        onLoginSuccess={handleLoginSuccess}
        t={t}
      />

    </div>
  );
}
