export const products = [
  // =========================================================================
  // 1. LYUSTRALAR (CHANDELIERS & MODERN DESIGNER CEILING LIGHTS)
  // =========================================================================
  {
    id: 1,
    name: "Zamonaviy Kristalli Ring Lyustra LED (3 xalqa)",
    category: "chandelier",
    price: 1450,
    oldPrice: 1800,
    rating: 5.0,
    reviews: "1.4k",
    badge: "Premium Lyustra",
    badgeColor: "bg-amber-600",
    image: "https://images.unsplash.com/photo-1543198126-a8ad8e47fb22?auto=format&fit=crop&w=700&q=80",
    specs: {
      power: "90W LED (3 rejim)",
      material: "K9 Xrustal + Oltin qoplama",
      control: "Pult va Smartfon Wi-Fi",
      warranty: "3 yil kafolat"
    },
    description: "Premium toifadagi 3 xalqali zamonaviy kristalli lyustra. Oltin rangli titan korpus, K9 xrustal kristallari va smartfon orqali yorug'lik rangini sozlash imkoniyati."
  },
  {
    id: 2,
    name: "Skandinavcha Minimalist Shiftdor Lyustra 6 Shoxli",
    category: "chandelier",
    price: 890,
    oldPrice: 1150,
    rating: 4.9,
    reviews: "920",
    badge: "Dizayn 2026",
    badgeColor: "bg-indigo-600",
    image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=700&q=80",
    specs: {
      power: "6 x E27 (60W max)",
      material: "Matte Black & Brass oltin",
      style: "Skandinaviya Loft dizayn",
      warranty: "3 yil kafolat"
    },
    description: "Mehmonxona va yotoqxona uchun nozik skandinavcha minimalist lyustra. Mat qora va bronza oltin ranglar uyg'unligi, 360 darajali keng yoritish burchagi."
  },
  {
    id: 3,
    name: "Smart Dimmerli Geometrik LED Lyustra (Kvadrat)",
    category: "chandelier",
    price: 650,
    oldPrice: 790,
    rating: 4.8,
    reviews: "780",
    badge: "Smart Home",
    badgeColor: "bg-blue-600",
    image: "https://images.unsplash.com/photo-1540932239986-30128078f3c5?auto=format&fit=crop&w=700&q=80",
    specs: {
      power: "72W Ultra Bright LED",
      control: "Tuya / Smart Life / Pult",
      light: "Iliq 3000K dan Oq 6500K gacha",
      warranty: "2 yil kafolat"
    },
    description: "Ultra yupqa dizaynga ega kvadrat LED lyustra. Pult va telefon orqali yorug'lik kuchi hamda rang haroratini 1 foizdan 100 foizgacha erkin boshqaring."
  },
  {
    id: 4,
    name: "Zamonaviy Magnitli Treksistema Lyustra 48V",
    category: "chandelier",
    price: 420,
    oldPrice: 520,
    rating: 4.9,
    reviews: "1.1k",
    badge: "Top Montaj",
    badgeColor: "bg-purple-600",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=700&q=80",
    specs: {
      voltage: "48V xavfsiz kuchlanish",
      length: "2 metrli rels + 3 ta modul",
      type: "Spot + Lineer yoritgichlar",
      warranty: "5 yil kafolat"
    },
    description: "Premium interyerlar uchun 48 voltli magnitli treklampa tizimi. Chiroqlarni istalgan joyga qo'lda oson ko'chirish, aylantirish va joyini o'zgartirish mumkin."
  },

  // =========================================================================
  // 2. LAMPOCHKALAR (LED, RETRO EDISON & SMART BULBS)
  // =========================================================================
  {
    id: 5,
    name: "Philips LED Smart Lampochka 15W Pro Daylight",
    category: "lamp",
    price: 35,
    oldPrice: 50,
    rating: 4.9,
    reviews: "3.2k",
    badge: "Tejamkor A+++",
    badgeColor: "bg-emerald-600",
    image: "https://images.unsplash.com/photo-1550524514-9b6d859e9c80?auto=format&fit=crop&w=700&q=80",
    specs: {
      power: "15W (120W ekvivalent)",
      lumen: "1500 Lumen yuqori quvvat",
      socket: "E27 standart patron",
      lifetime: "35,000 soat xizmat"
    },
    description: "Energiyani 85% tejovchi yuqori yorqinlikdagi Philips LED lampochka. Miltillamaydigan, ko'zni toliqtirmaydigan tiniq tabiiy yorug'lik."
  },
  {
    id: 6,
    name: "Retro Edison Dizaynerlik Filament Lampasi E27",
    category: "lamp",
    price: 28,
    oldPrice: 42,
    rating: 4.9,
    reviews: "2.1k",
    badge: "Vintage Loft",
    badgeColor: "bg-amber-600",
    image: "https://images.unsplash.com/photo-1517991104123-1d56a6e81ed9?auto=format&fit=crop&w=700&q=80",
    specs: {
      power: "4W Spiral Filament LED",
      temp: "2200K iliq qahrabo nur",
      glass: "Amber qoraytirilgan shisha",
      warranty: "2 yil kafolat"
    },
    description: "Restoran, kafe va shinam xonadonlar uchun retro uslubdagi Edison lampasi. Iliq qahrabo (amber) nuri bilan betakror shinam atmosfera yaratadi."
  },
  {
    id: 7,
    name: "Tuya RGB Smart WiFi Rangli Lampochka 10W",
    category: "lamp",
    price: 45,
    oldPrice: 65,
    rating: 4.8,
    reviews: "890",
    badge: "RGB 16M Rang",
    badgeColor: "bg-pink-600",
    image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=700&q=80",
    specs: {
      power: "10W RGB + Oq rejim",
      control: "Wi-Fi Tuya / Alexa / Google",
      features: "Musiqa sinxroni, taymer",
      warranty: "2 yil kafolat"
    },
    description: "16 million rang jilosi va ovozli boshqaruvga ega aqlli lampochka. Musiqa ritmiga qarab rangini o'zgartiradi va smartfondan boshqariladi."
  },
  {
    id: 8,
    name: "Pro Daylight LED Shiftdor Panel 24W (Dumaloq)",
    category: "lamp",
    price: 38,
    oldPrice: 55,
    rating: 4.9,
    reviews: "1.5k",
    badge: "Dubay Standart",
    badgeColor: "bg-cyan-600",
    image: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?auto=format&fit=crop&w=700&q=80",
    specs: {
      power: "24W Ultra Slim Panel",
      light: "6500K sof oq yorug'lik",
      mounting: "Shiftdor o'yma montaj",
      warranty: "3 yil kafolat"
    },
    description: "Xonadonlar va ofislar uchun o'rnatiladigan yupqa alyuminiy korpusli LED panel. Yaxlit tekis yorug'lik tarqatadi va qizib ketmaydi."
  },

  // =========================================================================
  // 3. KONDITSIONERLAR (INVERTER & TROPICAL T3 AC UNITS)
  // =========================================================================
  {
    id: 9,
    name: "Green Inverter 12,000 BTU T3 Tropical",
    category: "ac",
    price: 1850,
    oldPrice: 2200,
    rating: 4.9,
    reviews: "2.5k",
    badge: "T3 Inverter",
    badgeColor: "bg-blue-600",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=700&q=80",
    specs: {
      power: "1.0 Ton (12,000 BTU)",
      gas: "R32 Eco Freon",
      warranty: "3 yil to'liq kafolat",
      area: "35 kv.m gacha xonalar"
    },
    description: "Zamonaviy Gree Inverter texnologiyasi. T3 kompressor 55°C issiqda ham barqaror ishlaydi. Kam elektr sarfi (A+++) va ultra sokin ishlash rejimi."
  },
  {
    id: 10,
    name: "Daikin 24,000 BTU T3 Tropical Heavy Duty",
    category: "ac",
    price: 2800,
    oldPrice: 3300,
    rating: 4.9,
    reviews: "1.8k",
    badge: "Premium Yapon",
    badgeColor: "bg-indigo-600",
    image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=700&q=80",
    specs: {
      power: "2.0 Ton (24,000 BTU)",
      gas: "R32 Yangi avlod freon",
      warranty: "5 yil rasmiy kafolat",
      area: "70 kv.m gacha maydon"
    },
    description: "Yaponiyaning Daikin brendidan kuchli tashqi va ichki blok. Dubayning jazirama iqlimi uchun maxsus T3 tropik kompressor bilan jihozlangan."
  },
  {
    id: 11,
    name: "Gree Fairy 18,000 BTU Inverter Wi-Fi",
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
      area: "50 kv.m gacha maydon"
    },
    description: "Kvartira va ofislar uchun ideal energiya tejovchi konditsioner. Wi-Fi orqali smartfon bilan masofadan boshqarish funksiyasi mavjud."
  },
  {
    id: 12,
    name: "LG Dual Inverter 18,000 BTU Fast Cool",
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
      warranty: "10 yil kompressor kafolati",
      area: "55 kv.m gacha maydon"
    },
    description: "Ikkita kompressorli tizim xonani 40% tezroq sovutadi va elektr energiyasini 70% gacha tejaydi. Sokin va ishonchli."
  }
];
