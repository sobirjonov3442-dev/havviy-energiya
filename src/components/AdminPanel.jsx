import React, { useState } from 'react';
import {
  LayoutDashboard,
  Home,
  Wrench,
  Package,
  PhoneCall,
  ShoppingBag,
  ArrowLeft,
  Plus,
  Trash2,
  Edit3,
  Save,
  Check,
  Search,
  Filter,
  Eye,
  RefreshCw,
  LogOut,
  Sliders,
  DollarSign,
  AlertCircle,
  ExternalLink,
  Sparkles,
  Layers,
  Clock,
  ShieldCheck,
  Send,
  X
} from 'lucide-react';

export default function AdminPanel({
  onBack,
  products = [],
  onUpdateProducts,
  services = [],
  onUpdateServices,
  heroConfig = {},
  onUpdateHero,
  footerConfig = {},
  onUpdateFooter,
  orders = [],
  onUpdateOrders
}) {
  // Tanlangan faol bo'lim: 'dashboard', 'home', 'services', 'products', 'footer', 'orders'
  const [activeTab, setActiveTab] = useState('dashboard');
  const [toastMessage, setToastMessage] = useState(null);

  // Qidiruv va filtrlar (Mahsulotlar uchun)
  const [productSearch, setProductSearch] = useState('');
  const [productCategoryFilter, setProductCategoryFilter] = useState('all');

  // Modallar holati
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);

  const [isServiceModalOpen, setIsServiceModalOpen] = useState(false);
  const [editingService, setEditingService] = useState(null);

  // Home bo'limi forma holati
  const [heroForm, setHeroForm] = useState({
    titlePart1: heroConfig.titlePart1 || "Dubayda",
    titlePart2: heroConfig.titlePart2 || "Elektr va",
    titleHighlight: heroConfig.titleHighlight || "Konditsioner",
    titlePart3: heroConfig.titlePart3 || "xizmati",
    desc: heroConfig.desc || "Sizning qulayligingiz uchun zamonaviy texnologiya va professional yondashuv!",
    badge: heroConfig.badge || "Dubayda",
    qualityCardTitle: heroConfig.qualityCardTitle || "100% Sifat kafolati",
    qualityCardDesc: heroConfig.qualityCardDesc || "Rasmiy servis markazi",
    image: heroConfig.image || "/dubai_hero_reference.jpg",
    stat1Title: heroConfig.stats?.[0]?.title || "24/7",
    stat1Desc: heroConfig.stats?.[0]?.subtitle || "Xizmat",
    stat2Title: heroConfig.stats?.[1]?.title || "Sifat kafolati",
    stat2Desc: heroConfig.stats?.[1]?.subtitle || "100% ishonch",
    stat3Title: heroConfig.stats?.[2]?.title || "Tezkor",
    stat3Desc: heroConfig.stats?.[2]?.subtitle || "Yetkazib berish",
    stat4Title: heroConfig.stats?.[3]?.title || "Professional",
    stat4Desc: heroConfig.stats?.[3]?.subtitle || "Ishonchli xizmat"
  });

  // Footer bo'limi forma holati
  const [footerForm, setFooterForm] = useState({
    phone: footerConfig.phone || "+971 50 123 4567",
    emergencyPhone: footerConfig.emergencyPhone || "+971 52 987 6543",
    email: footerConfig.email || "info@havviyenergiya.ae",
    address: footerConfig.address || "Business Bay, Iris Bay Tower, 14-qavat, Dubay, BAA",
    hours: footerConfig.hours || "24/7 — Har kuni uzluksiz",
    whatsapp: footerConfig.whatsapp || "+971501234567",
    telegram: footerConfig.telegram || "https://t.me/havviy_energiya",
    instagram: footerConfig.instagram || "https://instagram.com/havviy_energiya",
    youtube: footerConfig.youtube || "https://youtube.com/@havviy_energiya",
    copyright: footerConfig.copyright || "2026 HavviyEnergiya — Dubay, BAA. Barcha huquqlar himoyalangan."
  });

  // Yangi / Tahrirlanayotgan mahsulot forma ma'lumotlari
  const [productForm, setProductForm] = useState({
    name: "",
    category: "ac",
    price: "",
    oldPrice: "",
    badge: "Yangi",
    badgeColor: "bg-blue-600",
    image: "",
    power: "1.5 Ton (18,000 BTU)",
    warranty: "3 yil rasmiy kafolat",
    area: "40-50 kv.m",
    description: ""
  });

  // Yangi / Tahrirlanayotgan xizmat forma ma'lumotlari
  const [serviceForm, setServiceForm] = useState({
    title: "",
    price: "150 AED",
    tag: "100% Kafolat",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&q=80",
    desc: "",
    includes: "Konditsioner montaji va ulanishi\nTrassa tortish va vakuumlash\nSinovdan o'tkazish\n1 yillik kafolat"
  });

  // Toast xabarnoma ko'rsatish
  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  // =========================================================================
  // 1. HOME SAQLASH
  // =========================================================================
  const handleSaveHome = (e) => {
    e.preventDefault();
    const updatedHero = {
      titlePart1: heroForm.titlePart1,
      titlePart2: heroForm.titlePart2,
      titleHighlight: heroForm.titleHighlight,
      titlePart3: heroForm.titlePart3,
      desc: heroForm.desc,
      badge: heroForm.badge,
      qualityCardTitle: heroForm.qualityCardTitle,
      qualityCardDesc: heroForm.qualityCardDesc,
      image: heroForm.image,
      stats: [
        { id: 1, title: heroForm.stat1Title, subtitle: heroForm.stat1Desc },
        { id: 2, title: heroForm.stat2Title, subtitle: heroForm.stat2Desc },
        { id: 3, title: heroForm.stat3Title, subtitle: heroForm.stat3Desc },
        { id: 4, title: heroForm.stat4Title, subtitle: heroForm.stat4Desc }
      ]
    };
    onUpdateHero(updatedHero);
    showToast("Bosh sahifa (Home) ma'lumotlari muvaffaqiyatli saqlandi!");
  };

  // =========================================================================
  // 2. FOOTER SAQLASH
  // =========================================================================
  const handleSaveFooter = (e) => {
    e.preventDefault();
    onUpdateFooter({ ...footerForm });
    showToast("Footer va Aloqa ma'lumotlari muvaffaqiyatli saqlandi!");
  };

  // =========================================================================
  // 3. MAHSULOTLAR CRUD
  // =========================================================================
  const handleOpenAddProduct = () => {
    setEditingProduct(null);
    setProductForm({
      name: "",
      category: "ac",
      price: "",
      oldPrice: "",
      badge: "Yangi",
      badgeColor: "bg-blue-600",
      image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&q=80",
      power: "1.5 Ton (18,000 BTU)",
      warranty: "3 yil kafolat",
      area: "40-50 kv.m",
      description: "Zamonaviy sifatli mahsulot. Dubay iqlimiga to'liq moslashgan."
    });
    setIsProductModalOpen(true);
  };

  const handleOpenEditProduct = (prod) => {
    setEditingProduct(prod);
    setProductForm({
      name: prod.name || "",
      category: prod.category || "ac",
      price: prod.price || "",
      oldPrice: prod.oldPrice || "",
      badge: prod.badge || "Yangi",
      badgeColor: prod.badgeColor || "bg-blue-600",
      image: prod.image || "",
      power: prod.specs?.power || "1.5 Ton (18,000 BTU)",
      warranty: prod.specs?.warranty || "3 yil kafolat",
      area: prod.specs?.area || "40-50 kv.m",
      description: prod.description || ""
    });
    setIsProductModalOpen(true);
  };

  const handleSaveProduct = (e) => {
    e.preventDefault();
    if (!productForm.name || !productForm.price) {
      alert("Iltimos, mahsulot nomi va narxini kiriting!");
      return;
    }

    if (editingProduct) {
      // Tahrirlash
      const updated = products.map((p) => {
        if (p.id === editingProduct.id) {
          return {
            ...p,
            name: productForm.name,
            category: productForm.category,
            price: Number(productForm.price),
            oldPrice: productForm.oldPrice ? Number(productForm.oldPrice) : null,
            badge: productForm.badge,
            badgeColor: productForm.badgeColor,
            image: productForm.image || p.image,
            specs: {
              ...p.specs,
              power: productForm.power,
              warranty: productForm.warranty,
              area: productForm.area
            },
            description: productForm.description
          };
        }
        return p;
      });
      onUpdateProducts(updated);
      showToast("Mahsulot ma'lumotlari yangilandi!");
    } else {
      // Yangi qo'shish
      const newId = products.length > 0 ? Math.max(...products.map((p) => p.id || 0)) + 1 : 1;
      const newProduct = {
        id: newId,
        name: productForm.name,
        category: productForm.category,
        price: Number(productForm.price),
        oldPrice: productForm.oldPrice ? Number(productForm.oldPrice) : null,
        badge: productForm.badge,
        badgeColor: productForm.badgeColor,
        image: productForm.image || "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&q=80",
        rating: 5.0,
        reviews: "1",
        specs: {
          power: productForm.power,
          warranty: productForm.warranty,
          area: productForm.area
        },
        description: productForm.description
      };
      onUpdateProducts([newProduct, ...products]);
      showToast("Yangi mahsulot muvaffaqiyatli qo'shildi!");
    }

    setIsProductModalOpen(false);
  };

  const handleDeleteProduct = (id) => {
    if (window.confirm("Rostdan ham ushbu mahsulotni o'chirmoqchimisiz?")) {
      const filtered = products.filter((p) => p.id !== id);
      onUpdateProducts(filtered);
      showToast("Mahsulot o'chirildi!");
    }
  };

  // =========================================================================
  // 4. XIZMATLAR CRUD
  // =========================================================================
  const handleOpenAddService = () => {
    setEditingService(null);
    setServiceForm({
      title: "",
      price: "150 AED",
      tag: "100% Kafolat",
      image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&q=80",
      desc: "",
      includes: "Professional montaj\nKafolat hujjati\nSinovdan o'tkazish"
    });
    setIsServiceModalOpen(true);
  };

  const handleOpenEditService = (srv) => {
    setEditingService(srv);
    setServiceForm({
      title: srv.title || "",
      price: srv.price || "150 AED",
      tag: srv.tag || "Kafolat",
      image: srv.image || "",
      desc: srv.desc || "",
      includes: Array.isArray(srv.includes) ? srv.includes.join('\n') : (srv.includes || "")
    });
    setIsServiceModalOpen(true);
  };

  const handleSaveService = (e) => {
    e.preventDefault();
    if (!serviceForm.title || !serviceForm.price) {
      alert("Iltimos, xizmat nomi va narxini kiriting!");
      return;
    }

    const incArray = serviceForm.includes
      .split('\n')
      .map((s) => s.trim())
      .filter(Boolean);

    if (editingService) {
      // Tahrirlash
      const updated = services.map((s) => {
        if (s.id === editingService.id) {
          return {
            ...s,
            title: serviceForm.title,
            price: serviceForm.price,
            tag: serviceForm.tag,
            image: serviceForm.image || s.image,
            desc: serviceForm.desc,
            includes: incArray
          };
        }
        return s;
      });
      onUpdateServices(updated);
      showToast("Xizmat ma'lumotlari yangilandi!");
    } else {
      // Yangi xizmat qo'shish
      const newId = services.length > 0 ? Math.max(...services.map((s) => s.id || 0)) + 1 : 1;
      const newService = {
        id: newId,
        title: serviceForm.title,
        price: serviceForm.price,
        tag: serviceForm.tag,
        image: serviceForm.image || "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&q=80",
        desc: serviceForm.desc,
        includes: incArray
      };
      onUpdateServices([...services, newService]);
      showToast("Yangi xizmat muvaffaqiyatli qo'shildi!");
    }

    setIsServiceModalOpen(false);
  };

  const handleDeleteService = (id) => {
    if (window.confirm("Ushbu xizmatni o'chirishni tasdiqlaysizmi?")) {
      const filtered = services.filter((s) => s.id !== id);
      onUpdateServices(filtered);
      showToast("Xizmat o'chirildi!");
    }
  };

  // =========================================================================
  // 5. BUYURTMA STATUSINI O'ZGARTIRISH
  // =========================================================================
  const handleUpdateOrderStatus = (id, newStatus) => {
    const updated = orders.map((o) => (o.id === id ? { ...o, status: newStatus } : o));
    onUpdateOrders(updated);
    showToast(`Buyurtma #${id} holati "${newStatus}" ga o'zgartirildi!`);
  };

  const handleDeleteOrder = (id) => {
    if (window.confirm("Buyurtmani o'chirmoqchimisiz?")) {
      const filtered = orders.filter((o) => o.id !== id);
      onUpdateOrders(filtered);
      showToast("Buyurtma o'chirildi!");
    }
  };

  // Filtrlangan mahsulotlar
  const filteredProducts = products.filter((p) => {
    const matchesSearch = p.name?.toLowerCase().includes(productSearch.toLowerCase());
    const matchesCategory = productCategoryFilter === 'all' || p.category === productCategoryFilter;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-[#F1F5F9] flex flex-col lg:flex-row font-sans text-slate-800 selection:bg-[#1D72FE] selection:text-white antialiased">
      
      {/* Toast xabarnoma */}
      {toastMessage && (
        <div className="fixed top-5 right-5 z-[10000] bg-emerald-600 text-white px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-3 animate-fadeIn border border-emerald-500">
          <Check className="w-5 h-5 flex-shrink-0" />
          <span className="font-bold text-sm">{toastMessage}</span>
        </div>
      )}

      {/* =========================================================================
          ASIDE SIDEBAR MENYUSI (1:1 So'ralgan talab: Home, Xizmatlar, Mahsulotlar, Footer)
          ========================================================================= */}
      <aside className="w-full lg:w-72 bg-[#0B1528] text-white flex flex-col flex-shrink-0 border-r border-slate-800 shadow-2xl z-40">
        
        {/* Brand & Admin Info */}
        <div className="p-5 sm:p-6 border-b border-slate-800/80 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#1D72FE] text-white flex items-center justify-center font-black shadow-lg shadow-blue-500/30 flex-shrink-0">
              <Sliders className="w-5 h-5" />
            </div>
            <div>
              <div className="font-black text-base tracking-tight text-white flex items-center gap-2">
                <span>Havviy</span>
                <span className="text-[#1D72FE]">Admin</span>
              </div>
              <div className="text-[11px] font-bold text-emerald-400 flex items-center gap-1.5 mt-0.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Administrator (Online)</span>
              </div>
            </div>
          </div>

          <button
            onClick={onBack}
            className="lg:hidden p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white"
            title="Saytga qaytish"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* ASIDE MENYU TUGMALARI */}
        <nav className="p-3 sm:p-4 space-y-1.5 flex-1 overflow-y-auto">
          
          <div className="text-[10px] font-black uppercase text-slate-500 px-3 py-2 tracking-wider">
            Boshqaruv menyusi
          </div>

          {/* 1. Dashboard */}
          <button
            onClick={() => setActiveTab('dashboard')}
            className={`w-full flex items-center gap-3 px-3.5 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeTab === 'dashboard'
                ? 'bg-[#1D72FE] text-white shadow-lg shadow-blue-500/25'
                : 'text-slate-300 hover:bg-slate-800/80 hover:text-white'
            }`}
          >
            <LayoutDashboard className="w-4 h-4 flex-shrink-0" />
            <span className="flex-1 text-left">Dashboard</span>
          </button>

          {/* 2. HOME O'ZGARTIR */}
          <button
            onClick={() => setActiveTab('home')}
            className={`w-full flex items-center gap-3 px-3.5 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeTab === 'home'
                ? 'bg-[#1D72FE] text-white shadow-lg shadow-blue-500/25'
                : 'text-slate-300 hover:bg-slate-800/80 hover:text-white'
            }`}
          >
            <Home className="w-4 h-4 flex-shrink-0" />
            <div className="flex-1 text-left">
              <div>Home o'zgartir</div>
              <div className="text-[10px] opacity-70 font-normal">Banner, matnlar, statistika</div>
            </div>
          </button>

          {/* 3. XIZMATLAR O'ZGARTIR */}
          <button
            onClick={() => setActiveTab('services')}
            className={`w-full flex items-center gap-3 px-3.5 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeTab === 'services'
                ? 'bg-[#1D72FE] text-white shadow-lg shadow-blue-500/25'
                : 'text-slate-300 hover:bg-slate-800/80 hover:text-white'
            }`}
          >
            <Wrench className="w-4 h-4 flex-shrink-0" />
            <div className="flex-1 text-left flex items-center justify-between">
              <div>
                <div>Xizmatlar o'zgartir</div>
                <div className="text-[10px] opacity-70 font-normal">Narxlar, qo'shish, o'chirish</div>
              </div>
              <span className="text-[10px] bg-blue-900/60 text-blue-300 px-2 py-0.5 rounded-full font-black">
                {services.length}
              </span>
            </div>
          </button>

          {/* 4. MAHSULOTLAR */}
          <button
            onClick={() => setActiveTab('products')}
            className={`w-full flex items-center gap-3 px-3.5 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeTab === 'products'
                ? 'bg-[#1D72FE] text-white shadow-lg shadow-blue-500/25'
                : 'text-slate-300 hover:bg-slate-800/80 hover:text-white'
            }`}
          >
            <Package className="w-4 h-4 flex-shrink-0" />
            <div className="flex-1 text-left flex items-center justify-between">
              <div>
                <div>Mahsulotlar</div>
                <div className="text-[10px] opacity-70 font-normal">Katalog, narx, zaxira</div>
              </div>
              <span className="text-[10px] bg-emerald-900/60 text-emerald-300 px-2 py-0.5 rounded-full font-black">
                {products.length}
              </span>
            </div>
          </button>

          {/* 5. FOOTER MA'LUMOT */}
          <button
            onClick={() => setActiveTab('footer')}
            className={`w-full flex items-center gap-3 px-3.5 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeTab === 'footer'
                ? 'bg-[#1D72FE] text-white shadow-lg shadow-blue-500/25'
                : 'text-slate-300 hover:bg-slate-800/80 hover:text-white'
            }`}
          >
            <PhoneCall className="w-4 h-4 flex-shrink-0" />
            <div className="flex-1 text-left">
              <div>Footer ma'lumot</div>
              <div className="text-[10px] opacity-70 font-normal">Telefon, WhatsApp, manzillar</div>
            </div>
          </button>

          {/* 6. BUYURTMALAR */}
          <button
            onClick={() => setActiveTab('orders')}
            className={`w-full flex items-center gap-3 px-3.5 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeTab === 'orders'
                ? 'bg-[#1D72FE] text-white shadow-lg shadow-blue-500/25'
                : 'text-slate-300 hover:bg-slate-800/80 hover:text-white'
            }`}
          >
            <ShoppingBag className="w-4 h-4 flex-shrink-0" />
            <div className="flex-1 text-left flex items-center justify-between">
              <div>
                <div>Buyurtmalar</div>
                <div className="text-[10px] opacity-70 font-normal">Tushgan xaridlar</div>
              </div>
              <span className="text-[10px] bg-amber-900/60 text-amber-300 px-2 py-0.5 rounded-full font-black">
                {orders.length}
              </span>
            </div>
          </button>

        </nav>

        {/* Sidebar pastki qismi: Saytga qaytish */}
        <div className="p-4 border-t border-slate-800/80 space-y-2 bg-[#080F1E]">
          <button
            onClick={onBack}
            className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-2xl bg-[#1D72FE] hover:bg-blue-600 text-white font-black text-xs sm:text-sm transition-all shadow-md shadow-blue-500/20 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Saytga o'tish (Jonli ko'rish)</span>
          </button>
        </div>

      </aside>

      {/* =========================================================================
          ASOSIY KONTENT SOHASI (TANLANGAN BO'LIMGA QARAB O'ZGARADI)
          ========================================================================= */}
      <main className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        
        {/* Yuqori panel (Top bar) */}
        <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200/80 px-4 sm:px-8 py-3.5 flex items-center justify-between gap-4 shadow-2xs">
          <div>
            <h1 className="text-lg sm:text-xl font-black text-slate-900 capitalize">
              {activeTab === 'dashboard' && "📊 Boshqaruv paneli (Dashboard)"}
              {activeTab === 'home' && "🏠 Bosh sahifa (Home) ma'lumotlarini o'zgartirish"}
              {activeTab === 'services' && "🛠️ Xizmatlarni boshqarish (Services)"}
              {activeTab === 'products' && "📦 Mahsulotlarni boshqarish (Products)"}
              {activeTab === 'footer' && "📞 Footer va Aloqa ma'lumotlarini o'zgartirish"}
              {activeTab === 'orders' && "📋 Buyurtmalar ro'yxati (Orders)"}
            </h1>
            <p className="text-xs text-slate-500 font-medium">
              Barcha o'zgarishlar darhol saqlanadi va jonli saytda aks etadi
            </p>
          </div>

          <div className="flex items-center gap-3 flex-shrink-0">
            {activeTab === 'products' && (
              <button
                onClick={handleOpenAddProduct}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#1D72FE] hover:bg-blue-600 text-white font-bold text-xs shadow-md shadow-blue-500/20 transition-all cursor-pointer"
              >
                <Plus className="w-4 h-4" />
                <span className="hidden sm:inline">Yangi mahsulot</span>
              </button>
            )}

            {activeTab === 'services' && (
              <button
                onClick={handleOpenAddService}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#1D72FE] hover:bg-blue-600 text-white font-bold text-xs shadow-md shadow-blue-500/20 transition-all cursor-pointer"
              >
                <Plus className="w-4 h-4" />
                <span className="hidden sm:inline">Yangi xizmat</span>
              </button>
            )}

            <button
              onClick={onBack}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-colors cursor-pointer"
              title="Asosiy sahifaga o'tish"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span className="hidden md:inline">Saytni ko'rish</span>
            </button>
          </div>
        </header>

        {/* Sahifa kontenti */}
        <div className="p-4 sm:p-8 space-y-6 flex-1">
          
          {/* =========================================================================
              1. DASHBOARD BO'LIMI
              ========================================================================= */}
          {activeTab === 'dashboard' && (
            <div className="space-y-6 animate-fadeIn">
              
              {/* 4 ta Statistika kartochkasi */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                
                <div className="bg-white p-5 rounded-3xl border border-slate-200/80 shadow-xs flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Jami Mahsulotlar</div>
                    <div className="text-3xl font-black text-slate-900 mt-1">{products.length} ta</div>
                    <div className="text-[11px] font-bold text-emerald-600 mt-1">Do'konda faol</div>
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#1D72FE] flex items-center justify-center">
                    <Package className="w-6 h-6" />
                  </div>
                </div>

                <div className="bg-white p-5 rounded-3xl border border-slate-200/80 shadow-xs flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Faol Xizmatlar</div>
                    <div className="text-3xl font-black text-slate-900 mt-1">{services.length} ta</div>
                    <div className="text-[11px] font-bold text-blue-600 mt-1">Konditsioner & Elektr</div>
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center">
                    <Wrench className="w-6 h-6" />
                  </div>
                </div>

                <div className="bg-white p-5 rounded-3xl border border-slate-200/80 shadow-xs flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Buyurtmalar</div>
                    <div className="text-3xl font-black text-slate-900 mt-1">{orders.length} ta</div>
                    <div className="text-[11px] font-bold text-emerald-600 mt-1">Oxirgi haftada</div>
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                    <ShoppingBag className="w-6 h-6" />
                  </div>
                </div>

                <div className="bg-white p-5 rounded-3xl border border-slate-200/80 shadow-xs flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Tizim holati</div>
                    <div className="text-xl font-black text-emerald-600 mt-2">100% Barqaror</div>
                    <div className="text-[11px] font-bold text-slate-400 mt-0.5">Dubay 24/7 Servis</div>
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                </div>

              </div>

              {/* Tezkor amallar tugmalari */}
              <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-xs space-y-4">
                <h2 className="text-base font-black text-slate-900">Tezkor boshqaruv amallari</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                  <button
                    onClick={() => {
                      setActiveTab('products');
                      handleOpenAddProduct();
                    }}
                    className="p-4 rounded-2xl bg-blue-50/70 hover:bg-blue-100/70 border border-blue-200 text-[#1D72FE] text-left transition-all cursor-pointer font-bold text-xs"
                  >
                    <Plus className="w-5 h-5 mb-2" />
                    <div>Yangi Mahsulot qo'shish</div>
                    <div className="text-[11px] font-normal text-slate-500 mt-0.5">Konditsioner, avtomat, sim</div>
                  </button>

                  <button
                    onClick={() => {
                      setActiveTab('services');
                      handleOpenAddService();
                    }}
                    className="p-4 rounded-2xl bg-amber-50/70 hover:bg-amber-100/70 border border-amber-200 text-amber-700 text-left transition-all cursor-pointer font-bold text-xs"
                  >
                    <Plus className="w-5 h-5 mb-2" />
                    <div>Yangi Xizmat qo'shish</div>
                    <div className="text-[11px] font-normal text-slate-500 mt-0.5">Ta'mirlash, montaj, servis</div>
                  </button>

                  <button
                    onClick={() => setActiveTab('home')}
                    className="p-4 rounded-2xl bg-purple-50/70 hover:bg-purple-100/70 border border-purple-200 text-purple-700 text-left transition-all cursor-pointer font-bold text-xs"
                  >
                    <Edit3 className="w-5 h-5 mb-2" />
                    <div>Home bannerini tahrirlash</div>
                    <div className="text-[11px] font-normal text-slate-500 mt-0.5">Sarlavhalar va statistika</div>
                  </button>

                  <button
                    onClick={() => setActiveTab('footer')}
                    className="p-4 rounded-2xl bg-emerald-50/70 hover:bg-emerald-100/70 border border-emerald-200 text-emerald-700 text-left transition-all cursor-pointer font-bold text-xs"
                  >
                    <PhoneCall className="w-5 h-5 mb-2" />
                    <div>Footer aloqalarini sozlash</div>
                    <div className="text-[11px] font-normal text-slate-500 mt-0.5">Telefon, WhatsApp, manzil</div>
                  </button>
                </div>
              </div>

              {/* So'nggi buyurtmalar */}
              <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-xs space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-base font-black text-slate-900">So'nggi kelib tushgan buyurtmalar</h2>
                  <button
                    onClick={() => setActiveTab('orders')}
                    className="text-xs font-bold text-[#1D72FE] hover:underline"
                  >
                    Barchasini ko'rish →
                  </button>
                </div>

                <div className="divide-y divide-slate-100">
                  {orders.slice(0, 3).map((o) => (
                    <div key={o.id} className="py-3 flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center font-bold text-xs">
                          {o.id.split('-')[2] || 'ORD'}
                        </div>
                        <div>
                          <div className="text-xs sm:text-sm font-bold text-slate-900">{o.customer}</div>
                          <div className="text-[11px] text-slate-500">{o.items}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs sm:text-sm font-black text-[#1D72FE]">{o.total} AED</div>
                        <span className={`text-[10px] font-black px-2 py-0.5 rounded-full inline-block mt-0.5 ${
                          o.status === 'Bajarildi' ? 'bg-emerald-100 text-emerald-700' :
                          o.status === 'Jarayonda' ? 'bg-blue-100 text-blue-700' : 'bg-amber-100 text-amber-700'
                        }`}>
                          {o.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          )}

          {/* =========================================================================
              2. HOME O'ZGARTIR BO'LIMI
              ========================================================================= */}
          {activeTab === 'home' && (
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-xs space-y-6 animate-fadeIn">
              
              <div className="border-b border-slate-100 pb-4">
                <h2 className="text-base sm:text-lg font-black text-slate-900">
                  Bosh sahifa (Hero banner va statistika) ma'lumotlarini o'zgartirish
                </h2>
                <p className="text-xs text-slate-500 mt-1">
                  Bu yerda kiritilgan matnlar darhol saytning eng yuqori qismidagi katta banner va uning ostidagi 4 ta kartada ko'rinadi.
                </p>
              </div>

              <form onSubmit={handleSaveHome} className="space-y-6">
                
                {/* 1. Sarlavha 4 ta bo'lakka bo'lingan */}
                <div className="space-y-3">
                  <label className="text-xs font-black text-slate-700 uppercase tracking-wider block">
                    Banner Sarlavhasi (Bo'laklar bo'yicha)
                  </label>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                    <div>
                      <span className="text-[11px] text-slate-500 font-bold block mb-1">1-qator:</span>
                      <input
                        type="text"
                        value={heroForm.titlePart1}
                        onChange={(e) => setHeroForm({ ...heroForm, titlePart1: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-800 focus:outline-none focus:border-[#1D72FE]"
                        placeholder="Masalan: Dubayda"
                      />
                    </div>

                    <div>
                      <span className="text-[11px] text-slate-500 font-bold block mb-1">2-qator (boshlanishi):</span>
                      <input
                        type="text"
                        value={heroForm.titlePart2}
                        onChange={(e) => setHeroForm({ ...heroForm, titlePart2: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-800 focus:outline-none focus:border-[#1D72FE]"
                        placeholder="Masalan: Elektr va"
                      />
                    </div>

                    <div>
                      <span className="text-[11px] text-blue-600 font-bold block mb-1">Ajratilgan so'z (Moviy):</span>
                      <input
                        type="text"
                        value={heroForm.titleHighlight}
                        onChange={(e) => setHeroForm({ ...heroForm, titleHighlight: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-blue-300 text-xs font-black text-[#1D72FE] focus:outline-none focus:border-[#1D72FE] bg-blue-50/40"
                        placeholder="Masalan: Konditsioner"
                      />
                    </div>

                    <div>
                      <span className="text-[11px] text-slate-500 font-bold block mb-1">3-qator (oxiri):</span>
                      <input
                        type="text"
                        value={heroForm.titlePart3}
                        onChange={(e) => setHeroForm({ ...heroForm, titlePart3: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-800 focus:outline-none focus:border-[#1D72FE]"
                        placeholder="Masalan: xizmati"
                      />
                    </div>
                  </div>
                </div>

                {/* 2. Tavsif va Badge */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-black text-slate-700 uppercase tracking-wider block mb-1.5">
                      Banner Tavsifi (Subtitle)
                    </label>
                    <textarea
                      rows={3}
                      value={heroForm.desc}
                      onChange={(e) => setHeroForm({ ...heroForm, desc: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-medium text-slate-800 focus:outline-none focus:border-[#1D72FE]"
                      placeholder="Sizning qulayligingiz uchun zamonaviy texnologiya..."
                    />
                  </div>

                  <div>
                    <label className="text-xs font-black text-slate-700 uppercase tracking-wider block mb-1.5">
                      Joylashuv Nishoni (Badge)
                    </label>
                    <input
                      type="text"
                      value={heroForm.badge}
                      onChange={(e) => setHeroForm({ ...heroForm, badge: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-800 focus:outline-none focus:border-[#1D72FE]"
                      placeholder="Dubayda"
                    />

                    <div className="mt-3">
                      <label className="text-xs font-black text-slate-700 uppercase tracking-wider block mb-1.5">
                        Banner Rasm URL
                      </label>
                      <input
                        type="text"
                        value={heroForm.image}
                        onChange={(e) => setHeroForm({ ...heroForm, image: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-800 focus:outline-none focus:border-[#1D72FE]"
                        placeholder="/dubai_hero_reference.jpg"
                      />
                    </div>
                  </div>
                </div>

                {/* 3. 4 ta Statistika kartochkalari */}
                <div className="pt-4 border-t border-slate-100 space-y-3">
                  <label className="text-xs font-black text-slate-700 uppercase tracking-wider block">
                    Banner Ostidagi 4 ta Statistika Bloki
                  </label>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    
                    {/* Stat 1 */}
                    <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                      <div className="text-[11px] font-bold text-blue-600">1-blok (Soat)</div>
                      <input
                        type="text"
                        value={heroForm.stat1Title}
                        onChange={(e) => setHeroForm({ ...heroForm, stat1Title: e.target.value })}
                        className="w-full px-2.5 py-1.5 rounded-lg border border-slate-200 text-xs font-bold"
                        placeholder="24/7"
                      />
                      <input
                        type="text"
                        value={heroForm.stat1Desc}
                        onChange={(e) => setHeroForm({ ...heroForm, stat1Desc: e.target.value })}
                        className="w-full px-2.5 py-1.5 rounded-lg border border-slate-200 text-xs font-medium text-slate-500"
                        placeholder="Xizmat"
                      />
                    </div>

                    {/* Stat 2 */}
                    <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                      <div className="text-[11px] font-bold text-blue-600">2-blok (Kafolat)</div>
                      <input
                        type="text"
                        value={heroForm.stat2Title}
                        onChange={(e) => setHeroForm({ ...heroForm, stat2Title: e.target.value })}
                        className="w-full px-2.5 py-1.5 rounded-lg border border-slate-200 text-xs font-bold"
                        placeholder="Sifat kafolati"
                      />
                      <input
                        type="text"
                        value={heroForm.stat2Desc}
                        onChange={(e) => setHeroForm({ ...heroForm, stat2Desc: e.target.value })}
                        className="w-full px-2.5 py-1.5 rounded-lg border border-slate-200 text-xs font-medium text-slate-500"
                        placeholder="100% ishonch"
                      />
                    </div>

                    {/* Stat 3 */}
                    <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                      <div className="text-[11px] font-bold text-blue-600">3-blok (Yetkazish)</div>
                      <input
                        type="text"
                        value={heroForm.stat3Title}
                        onChange={(e) => setHeroForm({ ...heroForm, stat3Title: e.target.value })}
                        className="w-full px-2.5 py-1.5 rounded-lg border border-slate-200 text-xs font-bold"
                        placeholder="Tezkor"
                      />
                      <input
                        type="text"
                        value={heroForm.stat3Desc}
                        onChange={(e) => setHeroForm({ ...heroForm, stat3Desc: e.target.value })}
                        className="w-full px-2.5 py-1.5 rounded-lg border border-slate-200 text-xs font-medium text-slate-500"
                        placeholder="Yetkazib berish"
                      />
                    </div>

                    {/* Stat 4 */}
                    <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                      <div className="text-[11px] font-bold text-blue-600">4-blok (Usta)</div>
                      <input
                        type="text"
                        value={heroForm.stat4Title}
                        onChange={(e) => setHeroForm({ ...heroForm, stat4Title: e.target.value })}
                        className="w-full px-2.5 py-1.5 rounded-lg border border-slate-200 text-xs font-bold"
                        placeholder="Professional"
                      />
                      <input
                        type="text"
                        value={heroForm.stat4Desc}
                        onChange={(e) => setHeroForm({ ...heroForm, stat4Desc: e.target.value })}
                        className="w-full px-2.5 py-1.5 rounded-lg border border-slate-200 text-xs font-medium text-slate-500"
                        placeholder="Ishonchli xizmat"
                      />
                    </div>

                  </div>
                </div>

                {/* Saqlash tugmasi */}
                <div className="pt-4 flex items-center justify-end">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-7 py-3 rounded-2xl bg-[#1D72FE] hover:bg-blue-600 text-white font-black text-xs sm:text-sm shadow-lg shadow-blue-500/25 transition-all cursor-pointer"
                  >
                    <Save className="w-4 h-4" />
                    <span>Home o'zgarishlarini saqlash</span>
                  </button>
                </div>

              </form>

            </div>
          )}

          {/* =========================================================================
              3. XIZMATLAR O'ZGARTIR BO'LIMI
              ========================================================================= */}
          {activeTab === 'services' && (
            <div className="space-y-6 animate-fadeIn">
              
              <div className="bg-white p-5 sm:p-6 rounded-3xl border border-slate-200/80 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <h2 className="text-base sm:text-lg font-black text-slate-900">
                    Xizmatlar ro'yxati ({services.length} ta)
                  </h2>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Xizmatlar narxi, nomi, tavsifini o'zgartiring yoki yangi xizmat qo'shing
                  </p>
                </div>

                <button
                  onClick={handleOpenAddService}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-[#1D72FE] hover:bg-blue-600 text-white font-bold text-xs sm:text-sm shadow-md shadow-blue-500/20 transition-all cursor-pointer"
                >
                  <Plus className="w-4 h-4" />
                  <span>Yangi xizmat qo'shish</span>
                </button>
              </div>

              {/* Xizmatlar ro'yxati kartochkalari */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {services.map((srv) => (
                  <div
                    key={srv.id}
                    className="bg-white rounded-3xl border border-slate-200/80 shadow-xs overflow-hidden flex flex-col hover:border-blue-300 transition-all"
                  >
                    <div className="relative h-44 w-full bg-slate-100">
                      <img
                        src={srv.image || "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&q=80"}
                        alt={srv.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-black text-[#1D72FE] shadow-sm">
                        {srv.price}
                      </div>
                      <div className="absolute bottom-3 left-3 bg-[#0B1528]/80 backdrop-blur-md px-2.5 py-0.5 rounded-full text-[10px] font-bold text-white">
                        {srv.tag || "Kafolat"}
                      </div>
                    </div>

                    <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                      <div>
                        <h3 className="text-sm sm:text-base font-black text-slate-900 line-clamp-1">
                          {srv.title}
                        </h3>
                        <p className="text-xs text-slate-500 line-clamp-2 mt-1">
                          {srv.desc}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                        <button
                          onClick={() => handleOpenEditService(srv)}
                          className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-blue-50 hover:bg-blue-100 text-[#1D72FE] font-bold text-xs transition-colors cursor-pointer"
                        >
                          <Edit3 className="w-3.5 h-3.5" />
                          <span>Tahrirlash</span>
                        </button>

                        <button
                          onClick={() => handleDeleteService(srv.id)}
                          className="p-2 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-600 transition-colors cursor-pointer"
                          title="Xizmatni o'chirish"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          )}

          {/* =========================================================================
              4. MAHSULOTLAR (PRODUCTS CRUD) BO'LIMI
              ========================================================================= */}
          {activeTab === 'products' && (
            <div className="space-y-6 animate-fadeIn">
              
              {/* Qidiruv, Filter va Yangi qo'shish paneli */}
              <div className="bg-white p-5 sm:p-6 rounded-3xl border border-slate-200/80 shadow-xs flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
                
                <div className="flex-1 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  
                  {/* Qidiruv qutisi */}
                  <div className="relative flex-1">
                    <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      value={productSearch}
                      onChange={(e) => setProductSearch(e.target.value)}
                      placeholder="Mahsulot nomi bo'yicha qidirish..."
                      className="w-full pl-10 pr-4 py-2.5 rounded-2xl border border-slate-200 text-xs sm:text-sm font-medium focus:outline-none focus:border-[#1D72FE]"
                    />
                  </div>

                  {/* Toifa filteri */}
                  <select
                    value={productCategoryFilter}
                    onChange={(e) => setProductCategoryFilter(e.target.value)}
                    className="px-3.5 py-2.5 rounded-2xl border border-slate-200 text-xs sm:text-sm font-bold text-slate-700 focus:outline-none focus:border-[#1D72FE] bg-white"
                  >
                    <option value="all">Barcha toifalar</option>
                    <option value="chandelier">Lyustralar</option>
                    <option value="lamp">Lampochkalar</option>
                  </select>

                </div>

                <button
                  onClick={handleOpenAddProduct}
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-2xl bg-[#1D72FE] hover:bg-blue-600 text-white font-black text-xs sm:text-sm shadow-md shadow-blue-500/20 transition-all cursor-pointer flex-shrink-0"
                >
                  <Plus className="w-4 h-4" />
                  <span>+ Yangi mahsulot qo'shish</span>
                </button>

              </div>

              {/* Mahsulotlar ro'yxati (Jadval ko'rinishida) */}
              <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse text-xs sm:text-sm">
                    <thead>
                      <tr className="bg-slate-50 border-b border-slate-200 text-[11px] font-black uppercase tracking-wider text-slate-500">
                        <th className="py-3.5 px-4 sm:px-6">Mahsulot</th>
                        <th className="py-3.5 px-4">Toifasi</th>
                        <th className="py-3.5 px-4">Narxi</th>
                        <th className="py-3.5 px-4">Nishon (Badge)</th>
                        <th className="py-3.5 px-4 text-right">Amallar</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {filteredProducts.map((p) => (
                        <tr key={p.id} className="hover:bg-slate-50/70 transition-colors">
                          <td className="py-3 px-4 sm:px-6">
                            <div className="flex items-center gap-3">
                              <img
                                src={p.image || "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=200&q=80"}
                                alt={p.name}
                                className="w-12 h-12 rounded-xl object-cover border border-slate-200 flex-shrink-0"
                              />
                              <div>
                                <div className="font-black text-slate-900 line-clamp-1">{p.name}</div>
                                <div className="text-[11px] text-slate-400 font-medium">ID: #{p.id} • {p.specs?.power || "Standard"}</div>
                              </div>
                            </div>
                          </td>

                          <td className="py-3 px-4">
                            <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 capitalize">
                              {p.category === 'ac' ? 'Konditsioner' :
                               p.category === 'chandelier' ? 'Lyustra' :
                               p.category === 'lamp' ? 'Lampochka' :
                               p.category === 'electric' ? 'Elektr' :
                               p.category === 'accessories' ? 'Aksessuar' : p.category}
                            </span>
                          </td>

                          <td className="py-3 px-4">
                            <div className="font-black text-[#1D72FE] text-sm">
                              {p.price} AED
                            </div>
                            {p.oldPrice && (
                              <div className="text-[11px] text-slate-400 line-through">
                                {p.oldPrice} AED
                              </div>
                            )}
                          </td>

                          <td className="py-3 px-4">
                            {p.badge && (
                              <span className="text-[10px] font-black px-2.5 py-0.5 rounded-full bg-blue-100 text-[#1D72FE]">
                                {p.badge}
                              </span>
                            )}
                          </td>

                          <td className="py-3 px-4 text-right">
                            <div className="flex items-center justify-end gap-2">
                              <button
                                onClick={() => handleOpenEditProduct(p)}
                                className="p-2 rounded-xl bg-blue-50 hover:bg-blue-100 text-[#1D72FE] transition-colors cursor-pointer"
                                title="Tahrirlash"
                              >
                                <Edit3 className="w-4 h-4" />
                              </button>

                              <button
                                onClick={() => handleDeleteProduct(p.id)}
                                className="p-2 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-600 transition-colors cursor-pointer"
                                title="O'chirish"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>

                  {filteredProducts.length === 0 && (
                    <div className="py-12 text-center text-slate-400 text-xs font-bold">
                      Mos keluvchi mahsulotlar topilmadi.
                    </div>
                  )}
                </div>
              </div>

            </div>
          )}

          {/* =========================================================================
              5. FOOTER MA'LUMOTLARI BO'LIMI
              ========================================================================= */}
          {activeTab === 'footer' && (
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-xs space-y-6 animate-fadeIn">
              
              <div className="border-b border-slate-100 pb-4">
                <h2 className="text-base sm:text-lg font-black text-slate-900">
                  Footer va Aloqa (Contact) ma'lumotlarini o'zgartirish
                </h2>
                <p className="text-xs text-slate-500 mt-1">
                  Saytning eng pastki qismidagi telefon raqamlar, WhatsApp, Telegram, Instagram havolalari va manzillarni tahrirlash.
                </p>
              </div>

              <form onSubmit={handleSaveFooter} className="space-y-6">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  <div>
                    <label className="text-xs font-black text-slate-700 uppercase tracking-wider block mb-1">
                      Asosiy Telefon raqam
                    </label>
                    <input
                      type="text"
                      value={footerForm.phone}
                      onChange={(e) => setFooterForm({ ...footerForm, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-800 focus:outline-none focus:border-[#1D72FE]"
                      placeholder="+971 50 123 4567"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-black text-slate-700 uppercase tracking-wider block mb-1">
                      Favqulodda (24/7) Aloqa raqami
                    </label>
                    <input
                      type="text"
                      value={footerForm.emergencyPhone}
                      onChange={(e) => setFooterForm({ ...footerForm, emergencyPhone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-800 focus:outline-none focus:border-[#1D72FE]"
                      placeholder="+971 52 987 6543"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-black text-slate-700 uppercase tracking-wider block mb-1">
                      WhatsApp Raqam / Havola
                    </label>
                    <input
                      type="text"
                      value={footerForm.whatsapp}
                      onChange={(e) => setFooterForm({ ...footerForm, whatsapp: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-800 focus:outline-none focus:border-[#1D72FE]"
                      placeholder="+971501234567"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-black text-slate-700 uppercase tracking-wider block mb-1">
                      Telegram Havolasi
                    </label>
                    <input
                      type="text"
                      value={footerForm.telegram}
                      onChange={(e) => setFooterForm({ ...footerForm, telegram: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-800 focus:outline-none focus:border-[#1D72FE]"
                      placeholder="https://t.me/havviy_energiya"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-black text-slate-700 uppercase tracking-wider block mb-1">
                      Instagram Havolasi
                    </label>
                    <input
                      type="text"
                      value={footerForm.instagram}
                      onChange={(e) => setFooterForm({ ...footerForm, instagram: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-800 focus:outline-none focus:border-[#1D72FE]"
                      placeholder="https://instagram.com/havviy_energiya"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-black text-slate-700 uppercase tracking-wider block mb-1">
                      YouTube Havolasi
                    </label>
                    <input
                      type="text"
                      value={footerForm.youtube}
                      onChange={(e) => setFooterForm({ ...footerForm, youtube: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-800 focus:outline-none focus:border-[#1D72FE]"
                      placeholder="https://youtube.com/@havviy_energiya"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-black text-slate-700 uppercase tracking-wider block mb-1">
                      Rasmiy E-mail
                    </label>
                    <input
                      type="email"
                      value={footerForm.email}
                      onChange={(e) => setFooterForm({ ...footerForm, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-800 focus:outline-none focus:border-[#1D72FE]"
                      placeholder="info@havviyenergiya.ae"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-black text-slate-700 uppercase tracking-wider block mb-1">
                      Ish Vaqti
                    </label>
                    <input
                      type="text"
                      value={footerForm.hours}
                      onChange={(e) => setFooterForm({ ...footerForm, hours: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-800 focus:outline-none focus:border-[#1D72FE]"
                      placeholder="24/7 — Har kuni uzluksiz"
                    />
                  </div>

                </div>

                <div>
                  <label className="text-xs font-black text-slate-700 uppercase tracking-wider block mb-1">
                    Dubay Ofisi Manzili
                  </label>
                  <input
                    type="text"
                    value={footerForm.address}
                    onChange={(e) => setFooterForm({ ...footerForm, address: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-800 focus:outline-none focus:border-[#1D72FE]"
                    placeholder="Business Bay, Iris Bay Tower, 14-qavat, Dubay, BAA"
                  />
                </div>

                <div>
                  <label className="text-xs font-black text-slate-700 uppercase tracking-wider block mb-1">
                    Copyright Matni
                  </label>
                  <input
                    type="text"
                    value={footerForm.copyright}
                    onChange={(e) => setFooterForm({ ...footerForm, copyright: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-800 focus:outline-none focus:border-[#1D72FE]"
                    placeholder="2026 HavviyEnergiya — Dubay, BAA. Barcha huquqlar himoyalangan."
                  />
                </div>

                {/* Saqlash tugmasi */}
                <div className="pt-4 flex items-center justify-end">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-7 py-3 rounded-2xl bg-[#1D72FE] hover:bg-blue-600 text-white font-black text-xs sm:text-sm shadow-lg shadow-blue-500/25 transition-all cursor-pointer"
                  >
                    <Save className="w-4 h-4" />
                    <span>Footer ma'lumotlarini saqlash</span>
                  </button>
                </div>

              </form>

            </div>
          )}

          {/* =========================================================================
              6. BUYURTMALAR (ORDERS) BO'LIMI
              ========================================================================= */}
          {activeTab === 'orders' && (
            <div className="space-y-6 animate-fadeIn">
              
              <div className="bg-white p-5 sm:p-6 rounded-3xl border border-slate-200/80 shadow-xs flex items-center justify-between">
                <div>
                  <h2 className="text-base sm:text-lg font-black text-slate-900">
                    Barcha Buyurtmalar ({orders.length} ta)
                  </h2>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Mijozlardan kelib tushgan buyurtmalar va ularning holati
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse text-xs sm:text-sm">
                    <thead>
                      <tr className="bg-slate-50 border-b border-slate-200 text-[11px] font-black uppercase tracking-wider text-slate-500">
                        <th className="py-3.5 px-4 sm:px-6">ID / Sana</th>
                        <th className="py-3.5 px-4">Mijoz / Telefon</th>
                        <th className="py-3.5 px-4">Buyurtma tafsiloti</th>
                        <th className="py-3.5 px-4">Summa</th>
                        <th className="py-3.5 px-4">Holat (Status)</th>
                        <th className="py-3.5 px-4 text-right">O'chirish</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {orders.map((o) => (
                        <tr key={o.id} className="hover:bg-slate-50/70 transition-colors">
                          <td className="py-3.5 px-4 sm:px-6">
                            <div className="font-black text-slate-900">{o.id}</div>
                            <div className="text-[11px] text-slate-400 font-medium">{o.date}</div>
                          </td>

                          <td className="py-3.5 px-4">
                            <div className="font-bold text-slate-800">{o.customer}</div>
                            <div className="text-[11px] text-slate-500">{o.phone}</div>
                          </td>

                          <td className="py-3.5 px-4">
                            <div className="font-medium text-slate-700 max-w-xs">{o.items}</div>
                            <div className="text-[11px] text-blue-600 font-bold">{o.location}</div>
                          </td>

                          <td className="py-3.5 px-4 font-black text-[#1D72FE] text-sm">
                            {o.total} AED
                          </td>

                          <td className="py-3.5 px-4">
                            <select
                              value={o.status}
                              onChange={(e) => handleUpdateOrderStatus(o.id, e.target.value)}
                              className={`px-3 py-1.5 rounded-xl text-xs font-black border cursor-pointer ${
                                o.status === 'Bajarildi' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' :
                                o.status === 'Jarayonda' ? 'bg-blue-50 text-blue-700 border-blue-200' :
                                'bg-amber-50 text-amber-700 border-amber-200'
                              }`}
                            >
                              <option value="Yangi">Yangi</option>
                              <option value="Jarayonda">Jarayonda</option>
                              <option value="Bajarildi">Bajarildi</option>
                            </select>
                          </td>

                          <td className="py-3.5 px-4 text-right">
                            <button
                              onClick={() => handleDeleteOrder(o.id)}
                              className="p-2 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-600 transition-colors cursor-pointer"
                              title="Buyurtmani o'chirish"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

            </div>
          )}

        </div>

      </main>

      {/* =========================================================================
          MAHSULOT QO'SHISH / TAHRIRLASH MODALI
          ========================================================================= */}
      {isProductModalOpen && (
        <div className="fixed inset-0 z-[9999] bg-slate-950/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto animate-fadeIn">
          <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 w-full max-w-xl overflow-hidden my-8">
            
            <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50">
              <h3 className="font-black text-slate-900 text-base">
                {editingProduct ? "Mahsulotni tahrirlash" : "Yangi mahsulot qo'shish"}
              </h3>
              <button
                onClick={() => setIsProductModalOpen(false)}
                className="w-8 h-8 rounded-full bg-slate-200/60 text-slate-500 hover:text-slate-900 flex items-center justify-center"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleSaveProduct} className="p-6 space-y-4 max-h-[80vh] overflow-y-auto">
              
              <div>
                <label className="text-xs font-black text-slate-700 uppercase tracking-wider block mb-1">
                  Mahsulot nomi *
                </label>
                <input
                  type="text"
                  required
                  value={productForm.name}
                  onChange={(e) => setProductForm({ ...productForm, name: e.target.value })}
                  placeholder="Masalan: Daikin Inverter 18,000 BTU"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm font-bold text-slate-800 focus:outline-none focus:border-[#1D72FE]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-black text-slate-700 uppercase tracking-wider block mb-1">
                    Toifasi (Kategoriya)
                  </label>
                  <select
                    value={productForm.category}
                    onChange={(e) => setProductForm({ ...productForm, category: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-800 focus:outline-none focus:border-[#1D72FE] bg-white"
                  >
                    <option value="chandelier">Lyustra</option>
                    <option value="lamp">Lampochka</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-black text-slate-700 uppercase tracking-wider block mb-1">
                    Nishon (Badge)
                  </label>
                  <input
                    type="text"
                    value={productForm.badge}
                    onChange={(e) => setProductForm({ ...productForm, badge: e.target.value })}
                    placeholder="Inverter, Premium, Tejamkor"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-800 focus:outline-none focus:border-[#1D72FE]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-black text-slate-700 uppercase tracking-wider block mb-1">
                    Narxi (AED) *
                  </label>
                  <input
                    type="number"
                    required
                    value={productForm.price}
                    onChange={(e) => setProductForm({ ...productForm, price: e.target.value })}
                    placeholder="1850"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm font-black text-[#1D72FE] focus:outline-none focus:border-[#1D72FE]"
                  />
                </div>

                <div>
                  <label className="text-xs font-black text-slate-700 uppercase tracking-wider block mb-1">
                    Eski narxi (AED)
                  </label>
                  <input
                    type="number"
                    value={productForm.oldPrice}
                    onChange={(e) => setProductForm({ ...productForm, oldPrice: e.target.value })}
                    placeholder="2200"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-medium text-slate-400 focus:outline-none focus:border-[#1D72FE]"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-black text-slate-700 uppercase tracking-wider block mb-1">
                  Rasm URL manzili
                </label>
                <input
                  type="text"
                  value={productForm.image}
                  onChange={(e) => setProductForm({ ...productForm, image: e.target.value })}
                  placeholder="https://images.unsplash.com/..."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-800 focus:outline-none focus:border-[#1D72FE]"
                />
              </div>

              <div className="grid grid-cols-3 gap-2">
                <div>
                  <label className="text-[11px] font-bold text-slate-500 block mb-1">Quvvati / Parametr</label>
                  <input
                    type="text"
                    value={productForm.power}
                    onChange={(e) => setProductForm({ ...productForm, power: e.target.value })}
                    className="w-full px-2.5 py-2 rounded-lg border border-slate-200 text-xs"
                    placeholder="1.5 Ton"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-bold text-slate-500 block mb-1">Kafolat</label>
                  <input
                    type="text"
                    value={productForm.warranty}
                    onChange={(e) => setProductForm({ ...productForm, warranty: e.target.value })}
                    className="w-full px-2.5 py-2 rounded-lg border border-slate-200 text-xs"
                    placeholder="3 yil kafolat"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-bold text-slate-500 block mb-1">Maydon</label>
                  <input
                    type="text"
                    value={productForm.area}
                    onChange={(e) => setProductForm({ ...productForm, area: e.target.value })}
                    className="w-full px-2.5 py-2 rounded-lg border border-slate-200 text-xs"
                    placeholder="40-50 kv.m"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-black text-slate-700 uppercase tracking-wider block mb-1">
                  Mahsulot tavsifi
                </label>
                <textarea
                  rows={3}
                  value={productForm.description}
                  onChange={(e) => setProductForm({ ...productForm, description: e.target.value })}
                  placeholder="Mahsulot haqida batafsil ma'lumot..."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-medium text-slate-800 focus:outline-none focus:border-[#1D72FE]"
                />
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsProductModalOpen(false)}
                  className="px-4 py-2.5 rounded-xl bg-slate-100 text-slate-700 font-bold text-xs hover:bg-slate-200 transition-colors"
                >
                  Bekor qilish
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-[#1D72FE] text-white font-black text-xs hover:bg-blue-600 transition-colors shadow-md shadow-blue-500/20"
                >
                  {editingProduct ? "O'zgarishlarni saqlash" : "Mahsulotni qo'shish"}
                </button>
              </div>

            </form>
          </div>
        </div>
      )}

      {/* =========================================================================
          XIZMAT QO'SHISH / TAHRIRLASH MODALI
          ========================================================================= */}
      {isServiceModalOpen && (
        <div className="fixed inset-0 z-[9999] bg-slate-950/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto animate-fadeIn">
          <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 w-full max-w-xl overflow-hidden my-8">
            
            <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50">
              <h3 className="font-black text-slate-900 text-base">
                {editingService ? "Xizmatni tahrirlash" : "Yangi xizmat qo'shish"}
              </h3>
              <button
                onClick={() => setIsServiceModalOpen(false)}
                className="w-8 h-8 rounded-full bg-slate-200/60 text-slate-500 hover:text-slate-900 flex items-center justify-center"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleSaveService} className="p-6 space-y-4 max-h-[80vh] overflow-y-auto">
              
              <div>
                <label className="text-xs font-black text-slate-700 uppercase tracking-wider block mb-1">
                  Xizmat nomi *
                </label>
                <input
                  type="text"
                  required
                  value={serviceForm.title}
                  onChange={(e) => setServiceForm({ ...serviceForm, title: e.target.value })}
                  placeholder="Masalan: Konditsioner ta'mirlash va profilaktika"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm font-bold text-slate-800 focus:outline-none focus:border-[#1D72FE]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-black text-slate-700 uppercase tracking-wider block mb-1">
                    Narxi *
                  </label>
                  <input
                    type="text"
                    required
                    value={serviceForm.price}
                    onChange={(e) => setServiceForm({ ...serviceForm, price: e.target.value })}
                    placeholder="150 AED"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm font-black text-[#1D72FE] focus:outline-none focus:border-[#1D72FE]"
                  />
                </div>

                <div>
                  <label className="text-xs font-black text-slate-700 uppercase tracking-wider block mb-1">
                    Teg / Nishon
                  </label>
                  <input
                    type="text"
                    value={serviceForm.tag}
                    onChange={(e) => setServiceForm({ ...serviceForm, tag: e.target.value })}
                    placeholder="100% Kafolat, Tezkor usta"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-800 focus:outline-none focus:border-[#1D72FE]"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-black text-slate-700 uppercase tracking-wider block mb-1">
                  Rasm URL
                </label>
                <input
                  type="text"
                  value={serviceForm.image}
                  onChange={(e) => setServiceForm({ ...serviceForm, image: e.target.value })}
                  placeholder="https://images.unsplash.com/..."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-800 focus:outline-none focus:border-[#1D72FE]"
                />
              </div>

              <div>
                <label className="text-xs font-black text-slate-700 uppercase tracking-wider block mb-1">
                  Qisqa tavsifi
                </label>
                <textarea
                  rows={2}
                  value={serviceForm.desc}
                  onChange={(e) => setServiceForm({ ...serviceForm, desc: e.target.value })}
                  placeholder="Xizmat haqida umumiy tushuntirish..."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-medium text-slate-800 focus:outline-none focus:border-[#1D72FE]"
                />
              </div>

              <div>
                <label className="text-xs font-black text-slate-700 uppercase tracking-wider block mb-1">
                  Xizmatga nimalar kiradi? (Har bir qator alohida band)
                </label>
                <textarea
                  rows={4}
                  value={serviceForm.includes}
                  onChange={(e) => setServiceForm({ ...serviceForm, includes: e.target.value })}
                  placeholder="Konditsionerni tekshirish&#10;Freon bosimini o'lchash&#10;Kafolat berish"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-medium text-slate-800 focus:outline-none focus:border-[#1D72FE]"
                />
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsServiceModalOpen(false)}
                  className="px-4 py-2.5 rounded-xl bg-slate-100 text-slate-700 font-bold text-xs hover:bg-slate-200 transition-colors"
                >
                  Bekor qilish
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-[#1D72FE] text-white font-black text-xs hover:bg-blue-600 transition-colors shadow-md shadow-blue-500/20"
                >
                  {editingService ? "Xizmatni saqlash" : "Xizmatni qo'shish"}
                </button>
              </div>

            </form>
          </div>
        </div>
      )}

    </div>
  );
}

