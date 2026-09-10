import { readFileSync, writeFileSync } from "node:fs"

/**
 * Meta description'ları editoryal olarak düzeltir:
 *  - otomatik eklenen " Tek fiyat, tek takvim." / ", Türkiye geneli." kuyruklarını temizler
 *  - verilen listeyle cümle bütünlüğü olan 130-158 karakterlik metinleri yazar
 * Kullanım: node scripts/fix-descriptions.mjs
 */
const p = "src/data/services.ts"
let s = readFileSync(p, "utf8")

const overrides = {
  "e-ticaret-sitesi":
    "E-ticaret sitesi kurulumu: katalog, varyant, sepet, sanal POS, kargo ve pazaryeri senkronu. Komisyon ödemeden kendi altyapınızda satış; stok tek kaynaktan.",
  "portfoy-sitesi":
    "Portfolyo web sitesi: proje vitrini, filtreli galeri, vaka anlatımı ve teklif formu. Tasarımcı, mimar ve ajanslar için çalışan bir iş geçmişi sayfası.",
  "personel-kullanici-yonetimi":
    "Personel ve kullanıcı yönetimi: rol ve yetki matrisi, özlük bilgileri, izin ve puantaj kayıtları, giriş denetimi. Yetki dağınıklığı tek panelde biter.",
  "yonetim-paneli":
    "Yönetim paneli geliştirme: içerik, kullanıcı, ayar ve rapor ekranları tek arayüzde. Yetki bazlı erişim ve hızlı veri girişiyle işler panele taşınır.",
  "dashboard-sistemi":
    "Dashboard geliştirme: veri kaynaklarını birleştiren yönetişim ekranları, anlık metrikler ve alarm eşikleri. Yönetici kararını kurulu tek ekrandan verir.",
  "mvp-startup-urunu":
    "MVP geliştirme: tek akış, net hedef, 6-10 haftada canlı ürün. Yatırımcı sunumu, kullanıcı onayı ve ilk dağıtım için hazır altyapı birlikte gelir.",
  "vercel-deployment":
    "Vercel yayın hattı: preview ortamı, otomatik deploy, ortam değişkenleri ve domain yönetimi. Her pull request ayrı önizleme, her merge canlıya çıkış alır.",
  "supabase-postgresql":
    "Supabase ve PostgreSQL kurulumu: şema tasarımı, satır bazlı güvenlik politikaları, kimlik doğrulama ve dosya deposu. Veri omurgası baştan sağlam kurulur.",
  "odeme-whatsapp-crm-entegrasyonu":
    "Ödeme, WhatsApp Business API ve CRM entegrasyonu: sanal POS, sipariş bildirimleri, şablon mesajlar ve satış kaydının otomatik oluşması. Tek akış, tek kayıt.",
  "dijital-donusum":
    "Dijital dönüşüm: süreç envanteri, önceliklendirme ve yol haritası. Excel, WhatsApp ve telefon trafiğinden ölçülebilir sistemlere geçişi adım adım planlıyoruz.",
}

let changed = 0
for (const [slug, text] of Object.entries(overrides)) {
  const i = s.indexOf(`slug: "${slug}"`)
  if (i < 0) {
    console.log("bulunamadı:", slug)
    continue
  }
  const j = s.indexOf("shortDescription:", i)
  const k = s.indexOf("cardText:", j)
  s = s.slice(0, j) + `shortDescription:\n      "${text}",\n    ` + s.slice(k)
  changed++
}

// otomatik kuyruk kalıntılarını temizle
s = s.replace(/,\s*Türkiye geneli\."\s*,/g, '. Türkiye geneli çalışıyoruz.",')
s = s.replace(/\s*Tek fiyat, tek takvim\."\s*,/g, '",')

writeFileSync(p, s)

// rapor
const re = /slug:\s*"([\w-]+)"[\s\S]{0,400}?shortDescription:\s*\n?\s*"([^"]+)"/g
let m
const bad = []
while ((m = re.exec(s))) {
  const [, slug, d] = m
  if (d.length > 158 || d.length < 128 || /(ve|ile|tek|için|bir|veya)\.$/.test(d)) bad.push([slug, d.length])
}
console.log(`override: ${changed} · kontrol dışı: ${bad.length}`, bad)
