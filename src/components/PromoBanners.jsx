import React from 'react';
import { Zap, ArrowRight } from 'lucide-react';

export default function PromoBanners({ onOpenOrder }) {
  return (
    <section className="py-6 sm:py-8">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 w-full">
        
        {/* Two Side-by-Side Dark Blue Banners (Exact match to Reference 1:1) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6">
          
          {/* Banner 1: Professional montaj xizmati (Left) */}
          <div className="relative rounded-3xl bg-gradient-to-r from-[#071324] via-[#0B1A30] to-[#0F2342] text-white p-6 sm:p-8 overflow-hidden shadow-xl border border-blue-950 flex flex-col sm:flex-row items-center justify-between gap-6">
            
            {/* Left Photo: AC Technician with Cap */}
            <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-2xl overflow-hidden flex-shrink-0 border-2 border-white/10 shadow-lg relative group">
              <img
                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=400&q=80"
                alt="Professional montaj"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>

            {/* Right Texts & Button */}
            <div className="flex-1 space-y-3 text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-2 text-[#1D72FE]">
                <Zap className="w-4 h-4 fill-[#1D72FE]" />
                <h3 className="text-base sm:text-lg lg:text-xl font-black text-white tracking-tight">
                  Professional montaj xizmati
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 font-medium">
                Tez, sifatli va ishonchli!
              </p>

              <button
                onClick={() => onOpenOrder("Konditsioner montaj xizmati")}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white hover:bg-slate-100 text-[#0B1A30] font-black text-xs sm:text-sm shadow-md transition-all transform hover:-translate-y-0.5"
              >
                <span>Buyurtma berish</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

          {/* Banner 2: Elektr tizimini yangilang! (Right) */}
          <div className="relative rounded-3xl bg-gradient-to-r from-[#071324] via-[#0B1A30] to-[#0F2342] text-white p-6 sm:p-8 overflow-hidden shadow-xl border border-blue-950 flex flex-col sm:flex-row items-center justify-between gap-6">
            
            {/* Left Texts & Button */}
            <div className="flex-1 space-y-3 text-center sm:text-left order-2 sm:order-1">
              <div className="flex items-center justify-center sm:justify-start gap-2 text-amber-400">
                <Zap className="w-4 h-4 fill-amber-400" />
                <h3 className="text-base sm:text-lg lg:text-xl font-black text-white tracking-tight">
                  Elektr tizimini yangilang!
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 font-medium">
                Eng yaxshi narxda
              </p>

              <button
                onClick={() => onOpenOrder("Elektr tizimini yangilash")}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-600/30 hover:bg-blue-600/50 text-blue-200 border border-blue-400/40 font-bold text-xs sm:text-sm transition-all"
              >
                <span>Batafsil</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Right Photo: Cables, Socket & Glowing Bulb */}
            <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-2xl overflow-hidden flex-shrink-0 border-2 border-white/10 shadow-lg relative group order-1 sm:order-2">
              <img
                src="https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?auto=format&fit=crop&w=400&q=80"
                alt="Elektr tizimi"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

