import React from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      id: 1,
      name: "Azizbek Mirzayev",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
      rating: 5,
      comment: "Juda tez yetib kelishdi, sifat a'lo darajada. Tavsiya qilaman!"
    },
    {
      id: 2,
      name: "Dilshoda Karimova",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
      rating: 5,
      comment: "Konditsioner o'rnatishlari professional. Rahmat!"
    },
    {
      id: 3,
      name: "Sardorbek Abdqudirov",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
      rating: 5,
      comment: "Elektr muammosini tez hal qilishdi. Zo'r xizmat!"
    }
  ];

  return (
    <section className="py-8 sm:py-12">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 w-full">
        
        {/* Header (Matching Reference 1:1) */}
        <div className="flex items-end justify-between gap-4 mb-7">
          <div>
            <div className="flex items-center gap-2.5 mb-1">
              <span className="w-1.5 h-6 bg-[#1D72FE] rounded-full inline-block"></span>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900 tracking-tight">
                Mijozlar fikri
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 font-medium ml-4">
              Bizning xizmatimiz haqida mijozlar nima deydi?
            </p>
          </div>

          {/* Slider Arrows (Matching Reference top-right) */}
          <div className="flex items-center gap-2">
            <button
              className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors"
              aria-label="Next review"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 3 Reviews Grid (Exact match to Reference 1:1) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-slate-100 shadow-soft hover:shadow-card transition-all flex items-start gap-4"
            >
              {/* Avatar */}
              <img
                src={rev.avatar}
                alt={rev.name}
                className="w-12 h-12 rounded-full object-cover border border-slate-200 flex-shrink-0"
              />

              {/* Info */}
              <div className="flex-1 min-w-0">
                <h4 className="font-bold text-sm text-slate-900 leading-tight">
                  {rev.name}
                </h4>

                {/* Rating 5 stars */}
                <div className="flex items-center gap-1 my-1 text-amber-400">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>

                {/* Comment quote */}
                <p className="text-xs text-slate-500 leading-relaxed mt-1">
                  "{rev.comment}"
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
