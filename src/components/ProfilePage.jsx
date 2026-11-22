import React, { useState } from 'react';
import { 
  ArrowLeft, 
  User, 
  Phone, 
  MapPin, 
  Mail, 
  Calendar, 
  ShieldCheck, 
  CheckCircle2, 
  Clock, 
  Wrench, 
  Package, 
  ShoppingBag, 
  DollarSign, 
  TrendingUp, 
  LogOut, 
  Zap,
  Sparkles,
  ExternalLink,
  ChevronRight,
  Filter
} from 'lucide-react';

export default function ProfilePage({ user, onBack, onLogout, t }) {
  const [activeTab, setActiveTab] = useState('all'); // 'all', 'services', 'purchases', 'expenses'
  const profT = t?.profile || {};

  // Hisob-kitoblar (Xarajatlar tahlili)
  const servicesList = user?.services || [];
  const purchasesList = user?.purchases || [];

  const totalServicesSpent = servicesList.reduce((acc, s) => acc + (s.price || 0), 0);
  const totalPurchasesSpent = purchasesList.reduce((acc, p) => acc + ((p.price || 0) * (p.quantity || 1)), 0);
  const totalSpent = totalServicesSpent + totalPurchasesSpent;

  const completedServicesCount = servicesList.filter(s => s.status === 'Bajarildi' || s.status === 'Completed' || s.status === 'Выполнен' || s.status === 'Tamamlandı').length;
  const inProgressServicesCount = servicesList.length - completedServicesCount;

  return (
    <div className="min-h-screen bg-[#F4F7FC] text-slate-800 pb-16 animate-fadeIn">
      
      {/* =========================================================================
          1. PROFIL SAHIFASI YUQORI PANEL (NAVBAR VA QAYTISH)
          ========================================================================= */}
      <div className="bg-white border-b border-slate-200/80 sticky top-0 z-30 shadow-2xs">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12 2xl:px-16 py-3.5 flex items-center justify-between">
          
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 hover:bg-blue-50 text-slate-700 hover:text-[#1D72FE] font-bold text-xs sm:text-sm transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{profT.backHome || "Bosh sahifaga qaytish"}</span>
          </button>

          <div className="flex items-center gap-3">
            <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200/60">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              {profT.verifiedClient || "Tasdiqlangan hisob"}
            </span>

            <button
              onClick={onLogout}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-red-50 hover:bg-red-100 text-red-600 font-bold text-xs sm:text-sm transition-colors"
            >
              <LogOut className="w-4 h-4" />
              <span>{profT.logout || "Hisobdan chiqish"}</span>
            </button>
          </div>

        </div>
      </div>

      <div className="max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12 2xl:px-16 pt-6 sm:pt-8 space-y-6 sm:space-y-8">
        
        {/* =========================================================================
            2. FOYDALANUVCHI ASOSIY KARTASI (USER HERO BANNER)
            ========================================================================= */}
        <div className="relative rounded-3xl bg-white border border-blue-100 p-6 sm:p-8 shadow-soft overflow-hidden">
          {/* Orqa fon bezak to'lqini */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-100/50 via-blue-50/20 to-transparent rounded-full -mr-20 -mt-20 pointer-events-none"></div>

          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            
            <div className="flex items-center gap-4 sm:gap-6">
              {/* Katta Avatar */}
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-gradient-to-tr from-[#1D72FE] to-[#3B82F6] text-white flex items-center justify-center font-black text-3xl shadow-xl shadow-blue-500/25 flex-shrink-0">
                {user?.name ? user.name.charAt(0).toUpperCase() : 'U'}
                <div className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-emerald-500 border-4 border-white flex items-center justify-center">
                  <ShieldCheck className="w-3.5 h-3.5 text-white" />
                </div>
              </div>

              {/* Ism va Manzil */}
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <h1 className="text-2xl sm:text-3xl font-black text-[#0B1528] tracking-tight">
                    {user?.name || "Mijoz"}
                  </h1>
                  <span className="px-3 py-1 rounded-full bg-blue-50 text-[#1D72FE] text-xs font-black border border-blue-100">
                    VIP Resident
                  </span>
                </div>

                <div className="mt-2 flex flex-wrap items-center gap-y-2 gap-x-4 text-xs sm:text-sm text-slate-500 font-medium">
                  <div className="flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-[#1D72FE]" />
                    <span>{user?.phone || "+971 50 123 4567"}</span>
                  </div>
                  <span>•</span>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-emerald-500" />
                    <span>{user?.address || "Downtown Dubai, Burj Residences #1402"}</span>
                  </div>
                  <span>•</span>
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-amber-500" />
                    <span>Ro'yxatdan o'tilgan: {user?.registeredAt || "12.01.2025"}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Status Pill */}
            <div className="bg-[#F8FAFC] border border-slate-200/70 p-4 rounded-2xl flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#1D72FE] flex items-center justify-center flex-shrink-0">
                <Sparkles className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-400">Dubay filiali bo'yicha mijoz maqomi</div>
                <div className="text-sm font-black text-[#0B1528]">Kafolatlangan xizmat ko'rsatish</div>
              </div>
            </div>

          </div>
        </div>

        {/* =========================================================================
            3. XARAJATLAR VA BUYURTMALAR STATISTIKASI (4 TA STAT KARTA)
            ========================================================================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          
          {/* 1. Jami sarflangan summa */}
          <div className="bg-white rounded-3xl p-5 sm:p-6 border border-blue-100 shadow-soft hover:shadow-card transition-all">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                {profT.totalSpentTitle || "Jami sarflangan"}
              </span>
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#1D72FE] flex items-center justify-center">
                <DollarSign className="w-5 h-5" />
              </div>
            </div>
            <div className="mt-3 flex items-baseline gap-2">
              <span className="text-2xl sm:text-3xl font-black text-[#0B1528]">
                {totalSpent.toLocaleString()}
              </span>
              <span className="text-sm font-black text-[#1D72FE]">AED</span>
            </div>
            <div className="mt-2 text-xs text-emerald-600 font-bold flex items-center gap-1">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>Barcha xizmat va jihozlar hisobi</span>
            </div>
          </div>

          {/* 2. Usta va servis chaqiruvlari */}
          <div className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-100 shadow-soft hover:shadow-card transition-all">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                {profT.serviceCallsTitle || "Servis chaqiruvlari"}
              </span>
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
                <Wrench className="w-5 h-5" />
              </div>
            </div>
            <div className="mt-3 flex items-baseline gap-2">
              <span className="text-2xl sm:text-3xl font-black text-[#0B1528]">
                {servicesList.length}
              </span>
              <span className="text-xs font-bold text-slate-400">marta chaqirilgan</span>
            </div>
            <div className="mt-2 text-xs text-slate-500 font-medium">
              Xizmat sarfi: <span className="font-bold text-slate-800">{totalServicesSpent.toLocaleString()} AED</span>
            </div>
          </div>

          {/* 3. Sotib olingan mahsulotlar */}
          <div className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-100 shadow-soft hover:shadow-card transition-all">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                {profT.productsCountTitle || "Sotib olinganlar"}
              </span>
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <ShoppingBag className="w-5 h-5" />
              </div>
            </div>
            <div className="mt-3 flex items-baseline gap-2">
              <span className="text-2xl sm:text-3xl font-black text-[#0B1528]">
                {purchasesList.length}
              </span>
              <span className="text-xs font-bold text-slate-400">ta jihoz</span>
            </div>
            <div className="mt-2 text-xs text-slate-500 font-medium">
              Texnikalar narxi: <span className="font-bold text-slate-800">{totalPurchasesSpent.toLocaleString()} AED</span>
            </div>
          </div>

          {/* 4. Faol jarayondagi buyurtma */}
          <div className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-100 shadow-soft hover:shadow-card transition-all">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                {profT.activeStatusTitle || "Jarayonda"}
              </span>
              <div className="w-10 h-10 rounded-xl bg-indigo-50 text-[#1D72FE] flex items-center justify-center">
                <Clock className="w-5 h-5" />
              </div>
            </div>
            <div className="mt-3 flex items-baseline gap-2">
              <span className="text-2xl sm:text-3xl font-black text-[#0B1528]">
                {inProgressServicesCount}
              </span>
              <span className="text-xs font-bold text-amber-500">faol buyurtma</span>
            </div>
            <div className="mt-2 text-xs text-emerald-600 font-bold flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>{completedServicesCount} ta muvaffaqiyatli yakunlangan</span>
            </div>
          </div>

        </div>

        {/* =========================================================================
            4. TABLAR: BARCHASI | SERVIS CHAQIRUVLARI | XARIDLAR | XARAJATLAR TAHLILI
            ========================================================================= */}
        <div className="flex items-center gap-2 border-b border-slate-200 overflow-x-auto pb-2 scrollbar-none">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${
              activeTab === 'all'
                ? 'bg-[#1D72FE] text-white shadow-md shadow-blue-500/25'
                : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200/70'
            }`}
          >
            {profT.tabOverview || "Umumiy ko'rinish"}
          </button>

          <button
            onClick={() => setActiveTab('services')}
            className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${
              activeTab === 'services'
                ? 'bg-[#1D72FE] text-white shadow-md shadow-blue-500/25'
                : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200/70'
            }`}
          >
            {profT.tabServices || "Servis va Usta chaqiruvlari"} ({servicesList.length})
          </button>

          <button
            onClick={() => setActiveTab('purchases')}
            className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${
              activeTab === 'purchases'
                ? 'bg-[#1D72FE] text-white shadow-md shadow-blue-500/25'
                : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200/70'
            }`}
          >
            {profT.tabPurchases || "Sotib olingan jihozlar"} ({purchasesList.length})
          </button>

          <button
            onClick={() => setActiveTab('expenses')}
            className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${
              activeTab === 'expenses'
                ? 'bg-[#1D72FE] text-white shadow-md shadow-blue-500/25'
                : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200/70'
            }`}
          >
            {profT.tabExpenses || "Xarajatlar tahlili"}
          </button>
        </div>

        {/* =========================================================================
            5. SERVIS VA USTA CHAQIRUVLARI BO'LIMI
            ========================================================================= */}
        {(activeTab === 'all' || activeTab === 'services') && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg sm:text-xl font-black text-[#0B1528] tracking-tight">
                  {profT.servicesSectionTitle || "Servis va usta chaqiruvlari tarixi"}
                </h2>
                <p className="text-xs text-slate-400 font-medium">
                  {profT.servicesSectionSubtitle || "Konditsioner tozalash, ta'mirlash, montaj va elektr ishlari"}
                </p>
              </div>
              <span className="text-xs font-bold text-slate-400">
                Jami: {servicesList.length} ta
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {servicesList.map((srv) => (
                <div 
                  key={srv.id}
                  className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-100 shadow-soft hover:border-blue-200 transition-all space-y-4"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-2xl bg-blue-50 text-[#1D72FE] flex items-center justify-center flex-shrink-0">
                        <Wrench className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[11px] font-black text-slate-400">
                          #{srv.id}
                        </span>
                        <h3 className="text-sm sm:text-base font-bold text-[#0B1528] leading-tight">
                          {srv.title}
                        </h3>
                      </div>
                    </div>

                    <span className={`text-[11px] font-black px-3 py-1 rounded-full flex items-center gap-1 flex-shrink-0 ${
                      srv.status === 'Bajarildi' || srv.status === 'Completed' || srv.status === 'Выполнен' || srv.status === 'Tamamlandı'
                        ? 'bg-emerald-100 text-emerald-700'
                        : 'bg-amber-100 text-amber-700 animate-pulse'
                    }`}>
                      {srv.status}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-xs bg-slate-50 p-3.5 rounded-2xl border border-slate-100">
                    <div>
                      <span className="text-slate-400 font-medium block">Biriktirilgan usta:</span>
                      <span className="font-bold text-slate-800">{srv.master}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 font-medium block">Sana va vaqt:</span>
                      <span className="font-bold text-slate-800">{srv.date}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 font-medium block">Manzil:</span>
                      <span className="font-bold text-slate-800">{srv.location}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 font-medium block">Xizmat narxi:</span>
                      <span className="font-black text-[#1D72FE] text-sm">{srv.price} {srv.currency}</span>
                    </div>
                  </div>

                  {srv.note && (
                    <div className="text-xs text-slate-500 italic bg-blue-50/50 p-2.5 rounded-xl border border-blue-100/60">
                      💡 {srv.note}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* =========================================================================
            6. SOTIB OLINGAN MAHSULOTLAR BO'LIMI (NIMA OLGANLARI)
            ========================================================================= */}
        {(activeTab === 'all' || activeTab === 'purchases') && (
          <div className="space-y-4 pt-4">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg sm:text-xl font-black text-[#0B1528] tracking-tight">
                  {profT.purchasesSectionTitle || "Sotib olingan jihozlar va materiallar"}
                </h2>
                <p className="text-xs text-slate-400 font-medium">
                  {profT.purchasesSectionSubtitle || "Rasmiy do'kondan xarid qilingan sertifikatlangan uskunalar"}
                </p>
              </div>
              <span className="text-xs font-bold text-slate-400">
                Jami: {purchasesList.length} ta
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {purchasesList.map((prd) => (
                <div 
                  key={prd.id}
                  className="bg-white rounded-3xl p-4 sm:p-5 border border-slate-100 shadow-soft hover:border-blue-200 transition-all flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="relative w-full h-40 rounded-2xl overflow-hidden bg-slate-100 border border-slate-100">
                      <img 
                        src={prd.image} 
                        alt={prd.name} 
                        className="w-full h-full object-cover"
                      />
                      <span className="absolute top-2 left-2 px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-xs text-white text-[10px] font-bold">
                        {prd.category}
                      </span>
                    </div>

                    <div>
                      <span className="text-[10px] font-black text-slate-400">
                        #{prd.id}
                      </span>
                      <h4 className="text-sm font-bold text-[#0B1528] line-clamp-2 leading-tight">
                        {prd.name}
                      </h4>
                    </div>

                    <div className="space-y-1 text-xs">
                      <div className="flex items-center justify-between text-slate-500">
                        <span>Xarid sanasi:</span>
                        <span className="font-semibold text-slate-800">{prd.date}</span>
                      </div>
                      <div className="flex items-center justify-between text-slate-500">
                        <span>Kafolat:</span>
                        <span className="font-semibold text-emerald-600">{prd.warranty}</span>
                      </div>
                      <div className="flex items-center justify-between text-slate-500">
                        <span>Holati:</span>
                        <span className="font-bold text-[#1D72FE]">{prd.status}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-medium text-slate-400">Narxi:</span>
                    <span className="text-base font-black text-[#1D72FE]">
                      {prd.price} AED
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* =========================================================================
            7. XARAJATLAR TAHLILI (QANCHA XARAJAT QILGANI TARKIBI)
            ========================================================================= */}
        {(activeTab === 'all' || activeTab === 'expenses') && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-soft space-y-6">
            <div>
              <h2 className="text-lg sm:text-xl font-black text-[#0B1528] tracking-tight">
                {profT.expensesSectionTitle || "Moliyaviy xarajatlar taqsimoti"}
              </h2>
              <p className="text-xs text-slate-400 font-medium">
                {profT.expensesSectionSubtitle || "Xizmatlar, uskunalar va elektr materiallari bo'yicha sarflangan mablag'"}
              </p>
            </div>

            {/* Rangli foizli chiziq (Progress bar) */}
            <div className="space-y-2">
              <div className="w-full h-4 rounded-full bg-slate-100 overflow-hidden flex">
                <div 
                  className="h-full bg-[#1D72FE]" 
                  style={{ width: `${(totalServicesSpent / totalSpent) * 100}%` }}
                  title="Servis va usta xizmatlari"
                ></div>
                <div 
                  className="h-full bg-emerald-500" 
                  style={{ width: `${(totalPurchasesSpent / totalSpent) * 100}%` }}
                  title="Sotib olingan jihozlar"
                ></div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 text-xs font-bold pt-2">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#1D72FE]"></div>
                  <span className="text-slate-600">Servis va Usta xizmatlari:</span>
                  <span className="font-black text-[#0B1528]">{totalServicesSpent.toLocaleString()} AED ({Math.round((totalServicesSpent / totalSpent) * 100)}%)</span>
                </div>

                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                  <span className="text-slate-600">Jihozlar va materiallar:</span>
                  <span className="font-black text-[#0B1528]">{totalPurchasesSpent.toLocaleString()} AED ({Math.round((totalPurchasesSpent / totalSpent) * 100)}%)</span>
                </div>

                <div className="flex items-center gap-1.5 text-slate-900 bg-blue-50 px-3 py-1.5 rounded-xl border border-blue-100">
                  <span>Jami hisob:</span>
                  <span className="font-black text-[#1D72FE] text-sm">{totalSpent.toLocaleString()} AED</span>
                </div>
              </div>
            </div>

          </div>
        )}

      </div>

    </div>
  );
}

