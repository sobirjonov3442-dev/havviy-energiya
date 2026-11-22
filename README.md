# HavviyEnergiya — Dubayda elektr va konditsioner xizmati

Dubaydagi elektr ta'minoti, konditsioner xizmatlari va elektr jihozlari savdosi (Shop) uchun zamonaviy, to'liq responsive veb-platforma.

## 🌟 Asosiy imkoniyatlar:
1. **Dizayn 1-ga 1 nusxa**:
   - Asl dizayndagi har bir blok, piktogrammalar (ikonkalar), ranglar palitrasi (`#1D72FE`), shriftlar va animatsiyalar to'liq tiklangan.
   - Dubay manzarasi (Burj Khalifa) va sovuq havo puflab turgan 3D konditsioner vizuali.
   - Chiroyli statistika panellari (`100% Ishonchlilik`, `Tez xizmat`, `Professional ustalar`, `24/7 Qo'llab-quvvatlash`).
2. **Shop (Do'kon / Mahsulotlar) bo'limi**:
   - Toifalar: *Konditsionerlar*, *Lyustralar & Yoritish*, *Aqlli uy & Rozetkalar*, *Ehtiyot qismlar*.
   - Har bir tovar uchun rasm, reyting, texnik xususiyatlar, narx (AED) va eski narx.
   - **Sotib olish** va **Savatga qo'shish** funksiyasi.
   - Interaktiv savat drayveri (Cart Drawer) va buyurtmani Telegram / WhatsApp orqali yakunlash.
3. **Mavzu va Til**:
   - Qorong'i (Dark) va Yorug' (Light) rejimlar o'zgartirgichi (Sun/Moon).
   - 3 ta til: O'zbekcha (UZ), Ruscha (RU), Inglizcha (EN).
4. **Interaktiv qo'shimchalar**:
   - Video ko'rish modali (Promo video).
   - Onlayn chat yordamchisi (24/7 tezkor savol-javob).
   - Buyurtma berish modali.

## 🚀 Ishga tushirish (Run qilish)

Loyiha papkasida terminal oching:
```bash
npm run dev
```
yoki:
```bash
npm start
```

Brauzerda: `http://localhost:3000` manzilida ochiladi.

## 📱 Loyiha tuzilishi:
```
havviy-energiya/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── server.js
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│   ├── data/
│   │   ├── products.js
│   │   └── translations.js
│   └── components/
│       ├── Navbar.jsx
│       ├── Hero.jsx
│       ├── Services.jsx
│       ├── ConsultationBanner.jsx
│       ├── WhyUs.jsx
│       ├── Shop.jsx
│       ├── TelegramBanner.jsx
│       ├── Footer.jsx
│       ├── CartDrawer.jsx
│       ├── OrderModal.jsx
│       ├── VideoModal.jsx
│       └── OnlineChatModal.jsx
└── dist/ (Production build)
```
