export const products = [
  {
    id: 1,
    name: "Green Inverter 12,000 BTU",
    category: "ac",
    price: 1850,
    oldPrice: 2200,
    rating: 4.9,
    reviews: "2.5k",
    badge: "Inverter",
    badgeColor: "bg-blue-600",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=700&q=80",
    specs: {
      power: "1.0 Ton (12,000 BTU)",
      gas: "R32 Eco Freon",
      warranty: "3 yil kafolat",
      area: "35 kv.m gacha"
    },
    description: "Zamonaviy Gree Inverter texnologiyasi. T3 kompressor 55°C issiqda ham barqaror ishlaydi. Kam elektr sarfi (A+++) va ultra sokin ishlash rejimi."
  },
  {
    id: 2,
    name: "Daikin 24,000 BTU T3 Tropical",
    category: "ac",
    price: 2800,
    oldPrice: 3300,
    rating: 4.8,
    reviews: "1.8k",
    badge: "Premium",
    badgeColor: "bg-indigo-600",
    image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=700&q=80",
    specs: {
      power: "2.0 Ton (24,000 BTU)",
      gas: "R32 Yangi avlod",
      warranty: "5 yil kafolat",
      area: "70 kv.m gacha"
    },
    description: "Yaponiyaning Daikin brendidan kuchli tashqi va ichki blok. Dubay iqlimi uchun maxsus T3 kompressor bilan jihozlangan."
  },
  {
    id: 3,
    name: "Gree Fairy 18,000 BTU Inverter",
    category: "ac",
    price: 2250,
    oldPrice: 2600,
    rating: 4.9,
    reviews: "950",
    badge: "Ommabop",
    badgeColor: "bg-emerald-600",
    image: "https://images.unsplash.com/photo-1574360851983-66b96f564b2a?auto=format&fit=crop&w=700&q=80",
    specs: {
      power: "1.5 Ton (18,000 BTU)",
      gas: "R410A Freon",
      warranty: "3 yil kafolat",
      area: "50 kv.m gacha"
    },
    description: "Kvartira va ofislar uchun ideal energiya tejovchi konditsioner. Wi-Fi orqali smartfon bilan boshqarish funksiyasi mavjud."
  },
  {
    id: 4,
    name: "LG Dual Inverter 18,000 BTU",
    category: "ac",
    price: 2400,
    oldPrice: 2750,
    rating: 4.8,
    reviews: "1.2k",
    badge: "Dual Inverter",
    badgeColor: "bg-rose-600",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=700&q=80",
    specs: {
      power: "1.5 Ton (18,000 BTU)",
      gas: "R32 Smart Freon",
      warranty: "10 yil kompressor",
      area: "55 kv.m gacha"
    },
    description: "Ikkita kompressorli tizim xonani 40% tezroq sovutadi va elektr energiyasini 70% gacha tejaydi."
  },
  {
    id: 5,
    name: "LED Lamp 15W Pro Daylight",
    category: "accessories",
    price: 25,
    oldPrice: 40,
    rating: 4.9,
    reviews: "3.2k",
    badge: "Tejamkor",
    badgeColor: "bg-amber-500",
    image: "https://images.unsplash.com/photo-1550524514-9b6d859e9c80?auto=format&fit=crop&w=700&q=80",
    specs: {
      power: "15W LED (E27)",
      light: "Daylight / Warm 4000K",
      warranty: "2 yil kafolat",
      lifetime: "30,000 soat"
    },
    description: "Energiyani 85% tejovchi yuqori yorqinlikdagi LED lampochka. Ko'zni toliqtirmaydigan yumshoq yorug'lik chiqaradi."
  },
  {
    id: 6,
    name: "Schneider Electric Avtomat 63A",
    category: "electric",
    price: 89,
    oldPrice: 115,
    rating: 4.9,
    reviews: "1.1k",
    badge: "Schneider",
    badgeColor: "bg-emerald-600",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=700&q=80",
    specs: {
      type: "2 qutbli (2P 63A)",
      protection: "IP40 / Qisqa tutashuv",
      origin: "Fransiya sertifikati",
      warranty: "5 yil kafolat"
    },
    description: "Schneider Electric Acti9 63A avtomat o'chirgichi. Xonadon va ofis elektr tarmog'ini yuqori kuchlanish va qisqa tutashuvdan to'liq himoya qiladi."
  },
  {
    id: 7,
    name: "Schneider Electric Avtomat Shchiti (24 modul)",
    category: "electric",
    price: 490,
    oldPrice: 580,
    rating: 4.9,
    reviews: "820",
    badge: "Top Montaj",
    badgeColor: "bg-blue-600",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=700&q=80",
    specs: {
      type: "24 modul (2 qatorli)",
      material: "Yonmaydigan ABS plastmassa",
      protection: "IP41 ichki montaj",
      warranty: "5 yil kafolat"
    },
    description: "24 ta avtomat sig'imiga ega professional elektr tarqatish qutisi. DIN-reykalar va nol shinalari jamlanmasi bilan birga keladi."
  },
  {
    id: 8,
    name: "Zamonaviy Magnitli Treksistema 48V",
    category: "accessories",
    price: 320,
    oldPrice: 390,
    rating: 4.9,
    reviews: "640",
    badge: "Dizayn 2026",
    badgeColor: "bg-purple-600",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=700&q=80",
    specs: {
      voltage: "48V xavfsiz kuchlanish",
      length: "2 metrli trek + 2 ta chiroq",
      color: "Matte Black",
      warranty: "3 yil kafolat"
    },
    description: "Premium interyerlar uchun 48 voltli magnitli treklampalar tizimi. Chiroqlarni istalgan joyga oson ko'chirish va burish mumkin."
  },
  {
    id: 9,
    name: "Elektr Kabel 3x2.5mm mis (100m)",
    category: "cables",
    price: 370,
    oldPrice: 430,
    rating: 4.8,
    reviews: "860",
    badge: "Mis (100m)",
    badgeColor: "bg-cyan-600",
    image: "https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?auto=format&fit=crop&w=700&q=80",
    specs: {
      type: "VVG-P 3x2.5mm² (100 metr)",
      material: "100% toza mis",
      standard: "BS 6004 / GOST",
      warranty: "10 yil kafolat"
    },
    description: "Dubay qurilish standartiga mos keluvchi, yonmaydigan izolyatsiyali 100 metrli mis kabel. Rozetkalar va maishiy texnikalar uchun."
  },
  {
    id: 10,
    name: "Elektr Kabel 3x1.5mm yoritish uchun (100m)",
    category: "cables",
    price: 260,
    oldPrice: 310,
    rating: 4.8,
    reviews: "530",
    badge: "100m O'ram",
    badgeColor: "bg-slate-700",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=700&q=80",
    specs: {
      type: "VVG-P 3x1.5mm² (100 metr)",
      material: "100% kislorodsiz mis",
      standard: "Yong'inga chidamli",
      warranty: "10 yil kafolat"
    },
    description: "Chiroqlar, lyustralar va yoritish tizimlari uchun maxsus moslashuvchan yuqori sifatli mis sim."
  },
  {
    id: 11,
    name: "Smart WiFi Termostat Konditsioner",
    category: "accessories",
    price: 180,
    oldPrice: 230,
    rating: 4.9,
    reviews: "410",
    badge: "Smart Home",
    badgeColor: "bg-blue-500",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=700&q=80",
    specs: {
      screen: "Sensorli LCD displey",
      connectivity: "Wi-Fi 2.4GHz + Tuya App",
      compatibility: "Barcha konditsionerlar",
      warranty: "2 yil kafolat"
    },
    description: "Xona haroratini smartfon orqali boshqaring. Siz uyga kelguningizcha xonani salqin qilib qo'yadi va 30% elektrni tejaydi."
  },
  {
    id: 12,
    name: "Tuya Smart Rozetka 16A (Energiya hisoblagich)",
    category: "accessories",
    price: 65,
    oldPrice: 95,
    rating: 4.9,
    reviews: "780",
    badge: "Smart 16A",
    badgeColor: "bg-indigo-500",
    image: "https://images.unsplash.com/photo-1550524514-9b6d859e9c80?auto=format&fit=crop&w=700&q=80",
    specs: {
      power: "16A (3680W gacha)",
      features: "Vaqt taymeri + Kilovatt hisobi",
      voice: "Alexa / Google Assistant",
      warranty: "2 yil kafolat"
    },
    description: "Konditsioner va og'ir elektr jihozlari sarflayotgan elektr miqdorini real vaqtda telefoningizda ko'rsatib turadi."
  }
];
