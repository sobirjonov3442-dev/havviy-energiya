import React, { useState } from 'react';
import { X, User, Phone, MapPin, Package, ShoppingBag, Clock, CheckCircle2, LogOut, Calendar } from 'lucide-react';

export default function ProfileDrawer({ isOpen, onClose, user, onLogout, t }) {
  if (!isOpen || !user) return null;

  const [activeTab, setActiveTab] = useState('orders'); // 'orders' or 'purchases'

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-fadeIn">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-4 sm:pl-10">
        <div className="w-full max-w-md bg-white shadow-2xl flex flex-col border-l border-slate-100">
          
          {/* Header */}
          <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-gradient-to-r from-blue-50/50 via-white to-slate-50">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-[#1D72FE] text-white flex items-center justify-center font-black text-lg shadow-md shadow-blue-500/25">
                {user.name ? user.name.charAt(0).toUpperCase() : 'U'}
              </div>
              <div>
                <h3 className="font-black text-slate-900 text-base sm:text-lg leading-tight">
                  {user.name}
                </h3>
                <span className="text-xs text-slate-400 font-medium">
                  {user.phone}
                </span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-slate-100 text-slate-400 hover:text-slate-800 flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* User Info Card */}
          <div className="p-6 border-b border-slate-100 bg-slate-50/50 space-y-2 text-xs">
            <div className="flex items-center gap-2 text-slate-600">
              <MapPin className="w-4 h-4 text-[#1D72FE] flex-shrink-0" />
              <span>{user.address || "Dubai, UAE"}</span>
            </div>
            <div className="flex items-center gap-2 text-slate-600">
              <Calendar className="w-4 h-4 text-[#1D72FE] flex-shrink-0" />
              <span>Ro'yxatdan o'tilgan: {user.registeredAt || "2026"}</span>
            </div>
          </div>

          {/* Tabs: Buyurtmalarim vs Sotib olinganlar */}
          <div className="px-6 pt-4">
            <div className="grid grid-cols-2 gap-1 bg-slate-100 p-1 rounded-2xl text-xs font-bold">
              <button
                onClick={() => setActiveTab('orders')}
                className={`py-2 rounded-xl flex items-center justify-center gap-1.5 transition-all ${
                  activeTab === 'orders' ? 'bg-white text-[#1D72FE] shadow-xs' : 'text-slate-500'
                }`}
              >
                <Package className="w-3.5 h-3.5" />
                <span>{t.profile.ordersTab} ({user.orders?.length || 0})</span>
              </button>
              
              <button
                onClick={() => setActiveTab('purchases')}
                className={`py-2 rounded-xl flex items-center justify-center gap-1.5 transition-all ${
                  activeTab === 'purchases' ? 'bg-white text-[#1D72FE] shadow-xs' : 'text-slate-500'
                }`}
              >
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>{t.profile.purchasesTab} ({user.purchases?.length || 0})</span>
              </button>
            </div>
          </div>

          {/* Content Lists */}
          <div className="flex-1 overflow-y-auto p-6 space-y-3 scrollbar-thin">
            {activeTab === 'orders' ? (
              // Buyurtma qilingan xizmatlar tarixi
              user.orders && user.orders.length > 0 ? (
                user.orders.map((ord) => (
                  <div
                    key={ord.id}
                    className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-black text-slate-400">
                        #{ord.id}
                      </span>
                      <span className={`text-[10px] font-extrabold px-2.5 py-0.5 rounded-full flex items-center gap-1 ${
                        ord.status === 'Bajarildi'
                          ? 'bg-emerald-100 text-emerald-700'
                          : 'bg-amber-100 text-amber-700'
                      }`}>
                        <CheckCircle2 className="w-3 h-3" />
                        <span>{ord.status}</span>
                      </span>
                    </div>

                    <h4 className="font-bold text-xs sm:text-sm text-slate-900 leading-snug">
                      {ord.service}
                    </h4>

                    <div className="flex items-center justify-between pt-1 border-t border-slate-200/60 text-xs">
                      <span className="text-slate-400">{ord.date}</span>
                      <span className="font-black text-[#1D72FE]">{ord.price}</span>
                    </div>
                  </div>
                ))
              ) : (
                <div className="py-12 text-center text-slate-400 text-xs">
                  {t.profile.noOrders}
                </div>
              )
            ) : (
              // Sotib olingan tovarlar tarixi
              user.purchases && user.purchases.length > 0 ? (
                user.purchases.map((pur) => (
                  <div
                    key={pur.id}
                    className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-black text-slate-400">
                        #{pur.id}
                      </span>
                      <span className="text-[10px] font-bold bg-blue-100 text-blue-700 px-2 py-0.5 rounded-md">
                        {pur.status}
                      </span>
                    </div>

                    <h4 className="font-bold text-xs sm:text-sm text-slate-900">
                      {pur.name}
                    </h4>

                    <div className="flex items-center justify-between pt-1 border-t border-slate-200/60 text-xs">
                      <span className="text-slate-400">{pur.date}</span>
                      <span className="font-black text-[#1D72FE]">{pur.price}</span>
                    </div>
                  </div>
                ))
              ) : (
                <div className="py-12 text-center text-slate-400 text-xs">
                  {t.profile.noPurchases}
                </div>
              )
            )}
          </div>

          {/* Footer: Chiqish tugmasi */}
          <div className="p-6 border-t border-slate-100 bg-slate-50">
            <button
              onClick={onLogout}
              className="w-full py-3 rounded-2xl bg-rose-50 hover:bg-rose-100 text-rose-600 font-bold text-xs flex items-center justify-center gap-2 transition-colors"
            >
              <LogOut className="w-4 h-4" />
              <span>{t.profile.logout}</span>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

