import React from 'react';
import { Zap, Wrench, Play, ShieldCheck, Clock, Truck, Headphones, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

export default function Hero({ onOpenOrder, onOpenAbout }) {
  return (
    <section id="home" className="pt-4 sm:pt-6 pb-10">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 w-full">
        
        {/* Main Hero Banner Container (Exact match to Reference 1:1) */}
        <div className="relative rounded-3xl sm:rounded-[36px] bg-gradient-to-r from-[#EBF3FE] via-[#F4F8FE] to-white border border-blue-100/90 shadow-soft p-6 sm:p-10 lg:p-14 overflow-hidden">
          
          {/* Slider Arrow Left (Matching Reference) */}
          <button 
            className="hidden sm:flex absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-slate-700 shadow-md items-center justify-center transition-all hover:scale-105"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Slider Arrow Right (Matching Reference) */}
          <button 
            className="hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-slate-700 shadow-md items-center justify-center transition-all hover:scale-105"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center relative z-10">
            
            {/* Left Content (Matching Reference typography and layout) */}
            <div className="lg:col-span-6 space-y-5 sm:space-y-6">
              
              {/* Badge: ⚡ Siz uchun eng yaxshi yechim */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/80 text-[#1D72FE] font-bold text-xs tracking-wide shadow-xs">
                <Zap className="w-3.5 h-3.5 fill-[#1D72FE] text-[#1D72FE]" />
                <span>Siz uchun eng yaxshi yechim</span>
              </div>

              {/* Main Headline (Exact match to Reference) */}
              <h1 className="text-3xl sm:text-5xl lg:text-5xl xl:text-6xl font-black text-slate-900 leading-[1.12] tracking-tight">
                Elektr va <br />
                <span className="text-[#1D72FE]">Konditsioner</span> <br />
                xizmatlari
              </h1>

              {/* Subtitle */}
              <p className="text-sm sm:text-base lg:text-lg text-slate-600 font-medium max-w-lg leading-relaxed">
                Uy va ofis uchun sifatli xizmat, zamonaviy texnologiya va professional yondashuv!
              </p>

              {/* Action Buttons (Matching Reference 1:1) */}
              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                {/* 1. Xizmatga buyurtma berish (Blue pill with wrench and arrow) */}
                <button
                  onClick={onOpenOrder}
                  className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-3.5 rounded-full bg-[#1D72FE] hover:bg-blue-600 text-white font-bold text-xs sm:text-sm shadow-md shadow-blue-500/25 transition-all transform hover:-translate-y-0.5"
                >
                  <Wrench className="w-4 h-4" />
                  <span>Xizmatga buyurtma berish</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </button>

                {/* 2. Biz haqimizda (White pill with play icon) */}
                <a
                  href="#about"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-white hover:bg-slate-50 text-slate-800 font-bold text-xs sm:text-sm border border-slate-200 shadow-xs transition-all"
                >
                  <div className="w-6 h-6 rounded-full bg-blue-50 text-[#1D72FE] flex items-center justify-center">
                    <Play className="w-3.5 h-3.5 fill-[#1D72FE]" />
                  </div>
                  <span>Biz haqimizda</span>
                </a>
              </div>

            </div>

            {/* Right Visual: AC Unit, Breaker Box, Blue Cable, Lamp, Socket & Room BG */}
            <div className="lg:col-span-6 relative flex items-center justify-center">
              
              {/* Floating Badge: Sifat va ishonch biz bilan! (Reference top right) */}
              <div className="absolute top-2 right-2 sm:right-6 z-30 bg-white/95 backdrop-blur-md px-4 py-2 rounded-2xl shadow-lg border border-blue-100 flex items-center gap-2.5 animate-float">
                <div className="w-8 h-8 rounded-xl bg-blue-50 text-[#1D72FE] flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-[#1D72FE]" />
                </div>
                <div>
                  <div className="text-xs font-black text-slate-900 leading-tight">
                    Sifat va
                  </div>
                  <div className="text-xs font-bold text-[#1D72FE] leading-tight">
                    ishonch biz bilan!
                  </div>
                </div>
              </div>

              {/* Main Visual Composition Container */}
              <div className="relative w-full max-w-[540px] aspect-[4/3] sm:aspect-[16/12] flex items-center justify-center">
                
                {/* Background Room Silhouette / Window View */}
                <div className="absolute inset-0 rounded-3xl overflow-hidden bg-gradient-to-tr from-blue-50 via-white to-slate-100 border border-white/60 shadow-inner">
                  <img 
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80" 
                    alt="Modern Home Interior" 
                    className="w-full h-full object-cover opacity-35 mix-blend-overlay"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent"></div>
                </div>

                {/* 1. Large Wall Mounted AC Unit (Top Right Area) */}
                <div className="absolute top-6 sm:top-8 right-2 sm:right-8 z-20 w-[75%] sm:w-[70%] max-w-[380px]">
                  <div className="relative bg-gradient-to-b from-white via-slate-50 to-slate-100 rounded-2xl p-4 sm:p-5 shadow-2xl border border-white/90">
                    {/* AC Top Air vent and Temp */}
                    <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                        <span className="text-[9px] font-black tracking-widest text-slate-400 uppercase">
                          HAVVIY INVERTER
                        </span>
                      </div>
                      <span className="text-xs font-mono font-black text-[#1D72FE] bg-blue-50 px-2 py-0.5 rounded-md">
                        24°C ❄️
                      </span>
                    </div>

                    {/* AC Body */}
                    <div className="py-4 text-center">
                      <div className="text-[11px] font-extrabold text-slate-300 tracking-widest uppercase">
                        ECO AIR CONDITIONER
                      </div>
                    </div>

                    {/* AC Bottom Louver with cold breeze glow */}
                    <div className="h-3 bg-slate-200/80 rounded-b-lg overflow-hidden flex items-center px-2">
                      <div className="w-full h-1 bg-gradient-to-r from-blue-300 via-blue-500 to-blue-300 rounded-full animate-pulse"></div>
                    </div>

                    {/* Flowing Air Waves effect */}
                    <div className="absolute -bottom-8 left-4 right-4 pointer-events-none opacity-60">
                      <svg viewBox="0 0 200 40" className="w-full h-auto text-blue-400" fill="none">
                        <path d="M5 10 C 50 30, 100 5, 195 25" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" strokeLinecap="round" />
                        <path d="M15 20 C 60 40, 110 15, 190 35" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" strokeLinecap="round" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* 2. Electrical Breaker Box, Blue Cable, Lamp and Sockets (Bottom Composite) */}
                <div className="absolute bottom-2 left-2 sm:left-4 z-20 w-[95%] flex items-end justify-between gap-2">
                  
                  {/* Electric Panel / Breaker Box */}
                  <div className="w-[45%] max-w-[210px] bg-white rounded-2xl p-3 shadow-xl border border-slate-200/90 transform -rotate-1 hover:rotate-0 transition-transform">
                    <div className="flex items-center justify-between border-b border-slate-100 pb-1.5 mb-2">
                      <span className="text-[9px] font-bold text-slate-500 uppercase">Avtomat Shchiti</span>
                      <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    </div>
                    {/* Simulated miniature breakers */}
                    <div className="grid grid-cols-6 gap-1 bg-slate-100 p-1.5 rounded-lg border border-slate-200">
                      <div className="h-7 bg-[#1D72FE] rounded-xs"></div>
                      <div className="h-7 bg-[#1D72FE] rounded-xs"></div>
                      <div className="h-7 bg-[#1D72FE] rounded-xs"></div>
                      <div className="h-7 bg-slate-300 rounded-xs"></div>
                      <div className="h-7 bg-slate-300 rounded-xs"></div>
                      <div className="h-7 bg-amber-400 rounded-xs"></div>
                    </div>
                  </div>

                  {/* Coil of Blue Electric Cable & Glowing Lamp & Wall Socket */}
                  <div className="relative flex items-end gap-2">
                    
                    {/* Coiled Blue Cable */}
                    <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full border-8 border-blue-600 bg-blue-700/20 shadow-lg flex items-center justify-center">
                      <div className="w-10 h-10 rounded-full border-4 border-blue-500 bg-blue-900/30"></div>
                      <span className="absolute -bottom-2 text-[8px] font-extrabold bg-blue-600 text-white px-1.5 rounded-full">
                        2.5mm
                      </span>
                    </div>

                    {/* Glowing Filament Bulb */}
                    <div className="relative -ml-3 mb-2">
                      <div className="w-12 h-12 rounded-full bg-amber-400/30 blur-md absolute inset-0 animate-pulse"></div>
                      <div className="relative w-10 h-10 rounded-full bg-gradient-to-t from-amber-200 to-amber-400 text-slate-900 flex items-center justify-center shadow-lg border border-amber-300">
                        <Zap className="w-5 h-5 fill-amber-500 text-amber-700" />
                      </div>
                    </div>

                    {/* Modern Wall Socket */}
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-xl shadow-md border border-slate-200 p-2 flex flex-col justify-center items-center gap-1.5">
                      <div className="flex gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-700"></span>
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-700"></span>
                      </div>
                      <span className="w-2.5 h-1 bg-slate-300 rounded-xs"></span>
                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* 4 Feature/Stat Cards Grid Under Hero (Exact match to Reference 1:1) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mt-4 sm:mt-6">
          
          {/* Card 1: 24/7 Xizmat */}
          <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-slate-100 shadow-soft flex items-center gap-3.5 sm:gap-4 hover:shadow-card transition-all">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-blue-50 text-[#1D72FE] flex items-center justify-center flex-shrink-0">
              <Clock className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <div className="font-black text-sm sm:text-base text-slate-900 leading-tight">
                24/7
              </div>
              <div className="text-xs text-slate-400 font-medium mt-0.5">
                Xizmat
              </div>
            </div>
          </div>

          {/* Card 2: Sifat kafolati (100% ishonch) */}
          <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-slate-100 shadow-soft flex items-center gap-3.5 sm:gap-4 hover:shadow-card transition-all">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-blue-50 text-[#1D72FE] flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <div className="font-black text-sm sm:text-base text-slate-900 leading-tight">
                Sifat kafolati
              </div>
              <div className="text-xs text-slate-400 font-medium mt-0.5">
                100% ishonch
              </div>
            </div>
          </div>

          {/* Card 3: Tezkor (Yetkazib berish) */}
          <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-slate-100 shadow-soft flex items-center gap-3.5 sm:gap-4 hover:shadow-card transition-all">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-blue-50 text-[#1D72FE] flex items-center justify-center flex-shrink-0">
              <Truck className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <div className="font-black text-sm sm:text-base text-slate-900 leading-tight">
                Tezkor
              </div>
              <div className="text-xs text-slate-400 font-medium mt-0.5">
                Yetkazib berish
              </div>
            </div>
          </div>

          {/* Card 4: Professional (muhandislar) */}
          <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-slate-100 shadow-soft flex items-center gap-3.5 sm:gap-4 hover:shadow-card transition-all">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-blue-50 text-[#1D72FE] flex items-center justify-center flex-shrink-0">
              <Headphones className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <div className="font-black text-sm sm:text-base text-slate-900 leading-tight">
                Professional
              </div>
              <div className="text-xs text-slate-400 font-medium mt-0.5">
                muhandislar
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
