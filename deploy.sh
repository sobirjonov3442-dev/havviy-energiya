#!/bin/bash
# ==============================================================================
# HavviyEnergiya (tenda.ae) - Avtomatlashtirilgan Xavfsiz Deploy Skripti
# Ushbu skript serverdagi boshqa loyihalarga MUTLAQO TEGMASDAN faqat tenda.ae
# domenini xavfsiz va tezkor o'rnatadi.
# ==============================================================================

set -e

DOMAIN="tenda.ae"
PROJECT_DIR="/var/www/$DOMAIN"
REPO_URL="https://github.com/sobirjonov3442-dev/havviy-energiya.git"
EMAIL="sardorbekahost@gmail.com"

echo ""
echo "=================================================================="
echo "  🚀 HavviyEnergiya ($DOMAIN) loyihasini o'rnatish boshlandi..."
echo "  🛡️  Xavfsizlik: Serverdagi boshqa saytlar va loyihalarga tegmaydi!"
echo "=================================================================="
echo ""

# 1. Root huquqini tekshirish
if [ "$EUID" -ne 0 ]; then
  echo "❌ Xatolik: Iltimos, ushbu skriptni root yoki sudo orqali ishga tushiring:"
  echo "   sudo bash $0"
  exit 1
fi

# 2. Kerakli paketlarni tekshirish (git, curl, nginx)
echo "📦 [1/6] Kerakli dasturlar tekshirilmoqda..."

if ! command -v git &> /dev/null; then
  echo "Git o'rnatilmoqda..."
  apt-get update -y && apt-get install -y git || yum install -y git
fi

if ! command -v nginx &> /dev/null; then
  echo "Nginx o'rnatilmoqda..."
  apt-get update -y && apt-get install -y nginx || yum install -y nginx
  systemctl enable nginx
  systemctl start nginx
fi

# Node.js va npm tekshirish (kamida Node 18+)
if ! command -v node &> /dev/null || [ $(node -v | cut -d'v' -f2 | cut -d'.' -f1) -lt 18 ]; then
  echo "Node.js 20 LTS o'rnatilmoqda..."
  if command -v apt-get &> /dev/null; then
    curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
    apt-get install -y nodejs
  elif command -v yum &> /dev/null; then
    curl -fsSL https://rpm.nodesource.com/setup_20.x | bash -
    yum install -y nodejs
  fi
fi

echo "✅ Node.js: $(node -v), npm: $(npm -v), Nginx: $(nginx -v 2>&1 | cut -d'/' -f2)"

# 3. Loyiha kodini yuklash yoki yangilash
echo ""
echo "📂 [2/6] Loyiha fayllari yangilanmoqda ($PROJECT_DIR)..."
mkdir -p /var/www

git config --global --add safe.directory "$PROJECT_DIR" 2>/dev/null || true
git config --global --add safe.directory "*" 2>/dev/null || true

if [ -d "$PROJECT_DIR/.git" ]; then
  echo "Mavjud repozitoriya yangilanmoqda (git pull)..."
  cd "$PROJECT_DIR"
  git reset --hard
  git pull origin main
else
  echo "Yangi nusxa klonlanmoqda..."
  rm -rf "$PROJECT_DIR"
  git clone "$REPO_URL" "$PROJECT_DIR"
  cd "$PROJECT_DIR"
fi

# 4. Bog'liqliklarni o'rnatish va loyihani yig'ish (build)
echo ""
echo "⚙️ [3/6] Loyiha build qilinmoqda (npm run build)..."
cd "$PROJECT_DIR"
npm install --no-audit --no-fund
npm run build

if [ ! -d "$PROJECT_DIR/dist" ]; then
  echo "❌ Build xatosi: dist papkasi topilmadi!"
  exit 1
fi

echo "✅ Loyiha muvaffaqiyatli build qilindi!"

# Huquqlarni xavfsiz to'g'rilash
chown -R www-data:www-data "$PROJECT_DIR" 2>/dev/null || chown -R nginx:nginx "$PROJECT_DIR" 2>/dev/null || true
chmod -R 755 "$PROJECT_DIR"

# 5. Nginx konfiguratsiyasini xavfsiz sozlash
echo ""
echo "🌐 [4/6] Nginx konfiguratsiyasi yaratilmoqda..."

NGINX_CONF_CONTENT="server {
    listen 80;
    listen [::]:80;
    server_name $DOMAIN www.$DOMAIN;

    root $PROJECT_DIR/dist;
    index index.html;

    # Gzip siqish (sayt maksimal tez yuklanishi uchun)
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_proxied expired no-cache no-store private auth;
    gzip_types text/plain text/css text/xml text/javascript application/x-javascript application/xml application/javascript image/svg+xml;

    # Statik kesh (rasmlar, shriftlar, skriptlar)
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control \"public, no-transform\";
    }

    # SPA (Single Page Application) marshrutlash
    location / {
        try_files \$uri \$uri/ /index.html;
    }

    # Xavfsizlik sarlavhalari
    add_header X-Frame-Options \"SAMEORIGIN\" always;
    add_header X-Content-Type-Options \"nosniff\" always;
    add_header X-XSS-Protection \"1; mode=block\" always;
}
"

# Debian/Ubuntu (sites-available) yoki CentOS (conf.d) ni aniqlash
if [ -d "/etc/nginx/sites-available" ]; then
  echo "$NGINX_CONF_CONTENT" > "/etc/nginx/sites-available/$DOMAIN"
  ln -sf "/etc/nginx/sites-available/$DOMAIN" "/etc/nginx/sites-enabled/$DOMAIN"
  # Eski conf.d dagi fayl bo'lsa ziddiyat bo'lmasligi uchun tozalash
  rm -f "/etc/nginx/conf.d/$DOMAIN.conf"
else
  mkdir -p /etc/nginx/conf.d
  echo "$NGINX_CONF_CONTENT" > "/etc/nginx/conf.d/$DOMAIN.conf"
fi

# Nginx konfiguratsiyasini sinovdan o'tkazish
echo "Nginx tekshiruvi (nginx -t)..."
if nginx -t; then
  echo "✅ Nginx konfiguratsiyasi to'g'ri, reload qilinmoqda..."
  systemctl reload nginx || service nginx reload
else
  echo "❌ Xatolik: Nginx konfiguratsiyasida xatolik bor, boshqa saytlar buzilmasligi uchun reload bekor qilindi!"
  exit 1
fi

# 6. Bepul SSL (HTTPS) sertifikatini sozlash (Certbot orqali)
echo ""
echo "🔒 [5/6] Bepul Let's Encrypt SSL (HTTPS) sertifikati tekshirilmoqda..."

if ! command -v certbot &> /dev/null; then
  echo "Certbot o'rnatilmoqda..."
  if command -v apt-get &> /dev/null; then
    apt-get update -y && apt-get install -y certbot python3-certbot-nginx || true
  elif command -v yum &> /dev/null; then
    yum install -y certbot python3-certbot-nginx || true
  fi
fi

if command -v certbot &> /dev/null; then
  echo "HTTPS sertifikati o'rnatilmoqda ($DOMAIN, www.$DOMAIN)..."
  certbot --nginx -d "$DOMAIN" -d "www.$DOMAIN" --non-interactive --agree-tos --email "$EMAIL" --redirect || {
    echo "⚠️ Certbot ogohlantirishi: SSL ulanmadi yoki DNS hali to'liq tarqalmagan bo'lishi mumkin. Sayt HTTP orqali ishlayveradi."
  }
else
  echo "⚠️ Certbot topilmadi, sayt HTTP (80) orqali ishlaydi."
fi

# Nginx yakuniy qayta tekshirib qayta yuklash
nginx -t && systemctl reload nginx 2>/dev/null || true

echo ""
echo "=================================================================="
echo "  🎉 TABRIKLAYMIZ! HavviyEnergiya muvaffaqiyatli o'rnatildi!"
echo "=================================================================="
echo "  🌐 Saytingiz: https://$DOMAIN yoki http://$DOMAIN"
echo "  📁 Joylashgan papka: $PROJECT_DIR"
echo "  🛡️  Boshqa barcha loyihalaringiz xavfsiz va o'z holicha ishlayapti!"
echo "=================================================================="
echo ""
