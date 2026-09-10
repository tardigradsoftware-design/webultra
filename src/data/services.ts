import type { Service, ServiceContent } from "@/types/content"
import { pilotContents } from "@/data/pilot-contents"
import { pilotContents2 } from "@/data/pilot-contents-2"
import { webContents } from "@/data/service-contents-web"
import { webContents2 } from "@/data/service-contents-web-2"

/**
 * 43 hizmet — tek kaynak.
 * `status: "pilot"` = içeriği elle yazıldı (pilot-contents.ts),
 * `status: "index"` = içerik content-factory ile kategori + anahtar kelime bazlı üretilir.
 * Meta description'lar 150-160 karakter bandına göre yazıldı (npm run seo:check doğrular).
 */
export const services: Service[] = [
  {
    no: "01",
    title: "Kurumsal Web Sitesi",
    slug: "kurumsal-web-sitesi",
    category: "web",
    primaryKeyword: "kurumsal web sitesi",
    secondaryKeywords: ["kurumsal web sitesi hizmeti", "firma web sitesi", "kurumsal internet sitesi"],
    shortDescription:
      "Kurumsal web sitesi tasarımı ve geliştirmesi: hızlı, mobil öncelikli ve SEO uyumlu. Talep üreten sayfa mimarisi, yönetim paneli. Türkiye geneli çalışıyoruz.",
    cardText: "Markanızı anlatan, talep üreten, hız ve SEO hedeflerini karşılayan kurumsal site.",
    icon: "Globe",
    status: "pilot",
    related: ["firma-web-sitesi", "teknik-seo", "yonetim-paneli", "seo-uyumlu-sayfa-mimarisi"],
    cityPriority: ["istanbul", "ankara", "izmir"],
  },
  {
    no: "02",
    title: "Firma Web Sitesi",
    slug: "firma-web-sitesi",
    category: "web",
    primaryKeyword: "firma web sitesi",
    secondaryKeywords: ["firma web sitesi tasarımı", "şirket sitesi", "işletme web sitesi"],
    shortDescription:
      "Firma web sitesi kurulumu: ürün ve hizmet katalogları, bayi ve kariyer sayfaları, iletişim formları. Küçük işletmeler için hızlı ve bütçe dostu.",
    cardText: "KOBİ'ler için ürün, hizmet ve iletişim katmanı hazır gelen firma sitesi.",
    icon: "Building2",
    status: "index",
    related: ["kurumsal-web-sitesi", "urun-tanitim-sitesi", "landing-page", "kurumsal-email"],
    cityPriority: ["istanbul", "ankara", "izmir", "bursa"],
  },
  {
    no: "03",
    title: "Landing Page",
    slug: "landing-page",
    category: "web",
    primaryKeyword: "landing page",
    secondaryKeywords: ["açılış sayfası", "satış sayfası", "kampanya sayfası"],
    shortDescription:
      "Kampanya ve reklam trafiği için landing page tasarımı: tek teklif, net CTA, hızlı yükleme ve ölçülebilir form. Reklam bütçenizin verimini artırır.",
    cardText: "Reklam trafiğini talebe çeviren, tek amaçlı ve test edilebilir açılış sayfaları.",
    icon: "Rocket",
    status: "index",
    related: ["kurumsal-web-sitesi", "form-basvuru-sistemi", "ai-icerik-araclar", "teknik-seo"],
    cityPriority: ["istanbul", "ankara", "izmir", "antalya"],
  },
  {
    no: "04",
    title: "E-Ticaret Sitesi",
    slug: "e-ticaret-sitesi",
    category: "web",
    primaryKeyword: "e-ticaret sitesi",
    secondaryKeywords: ["e-ticaret web sitesi kurulumu", "online satış sitesi"],
    shortDescription:
      "E-ticaret sitesi kurulumu: katalog, varyant, sepet, sanal POS, kargo ve pazaryeri senkronu. Komisyon ödemeden kendi altyapınızda satış; stok tek kaynaktan.",
    cardText: "Kendi ürün kataloğunuzla, komisyon oranlarına sıkışmadan satış yapacağınız site.",
    icon: "ShoppingBag",
    status: "pilot",
    related: ["stok-yonetimi", "odeme-whatsapp-crm-entegrasyonu", "proforma-siparis-yonetimi", "urun-tedarikci-yonetimi"],
    cityPriority: ["istanbul", "izmir", "bursa", "antalya"],
  },
  {
    no: "05",
    title: "Ürün / Hizmet Tanıtım Sitesi",
    slug: "urun-tanitim-sitesi",
    category: "web",
    primaryKeyword: "ürün tanıtım sitesi",
    secondaryKeywords: ["ürün web sitesi", "hizmet tanıtım sitesi", "katalog sitesi"],
    shortDescription:
      "Ürün ve hizmet tanıtım sitesi: kategori ve filtre yapısı, PDF katalog, fiyat sorgulama ve bayi girişi. Ürün verisini tek yerden yönetip tüm kanallara aynı.",
    cardText: "Katalog, filtre ve fiyat sorgulaması olan ürün tanıtım platformu.",
    icon: "Package",
    status: "index",
    related: ["e-ticaret-sitesi", "urun-tedarikci-yonetimi", "teklif-hazirlama-sistemi", "kurumsal-web-sitesi"],
    cityPriority: ["istanbul", "izmir", "bursa", "gaziantep"],
  },
  {
    no: "06",
    title: "Portföy Sitesi",
    slug: "portfoy-sitesi",
    category: "web",
    primaryKeyword: "portfolyo sitesi",
    secondaryKeywords: ["portfolyo web sitesi", "kişisel portfolio sitesi"],
    shortDescription:
      "Portfolyo web sitesi: proje vitrini, filtreli galeri, vaka anlatımı ve teklif formu. Tasarımcı, mimar ve ajanslar için çalışan bir iş geçmişi sayfası.",
    cardText: "İşlerinizi güvenle sergileyen, az metinle çok şey anlatan kişisel site.",
    icon: "Images",
    status: "index",
    related: ["kurumsal-web-sitesi", "landing-page", "mvp-startup-urunu", "teknik-seo"],
    cityPriority: ["istanbul", "ankara", "izmir"],
  },
  {
    no: "07",
    title: "Rezervasyon ve Başvuru Sistemi",
    slug: "rezervasyon-basvuru-sistemi",
    category: "ozel-yazilim",
    primaryKeyword: "rezervasyon sistemi",
    secondaryKeywords: ["online rezervasyon", "randevu sistemi", "başvuru formu"],
    shortDescription:
      "Online rezervasyon ve başvuru sistemi: müsaitlik, kota, onay ve iptal akışı, hatırlatma mesajları ile raporlama. Telefon trafiğini azaltan, takvimi dolduran.",
    cardText: "Müsaitlik, onay ve hatırlatma akışını otomatikleştiren rezervasyon paneli.",
    icon: "CalendarCheck",
    status: "index",
    related: ["form-basvuru-sistemi", "musteri-paneli", "raporlama-sistemi", "odeme-whatsapp-crm-entegrasyonu"],
  },
  {
    no: "08",
    title: "Web Sitesi Yenileme / Modernizasyon",
    slug: "web-sitesi-yenileme",
    category: "web",
    primaryKeyword: "web sitesi yenileme",
    secondaryKeywords: ["web sitesi güncelleme", "site modernizasyonu"],
    shortDescription:
      "Web sitesi yenileme: hız ve Core Web Vitals iyileştirmesi, mobil uyum, SEO koruması ve 301 planı ile içerik taşıma. Mevcut otoriteyi kaybetmeyin.",
    cardText: "Eski siteyi modern stack'e alırken sıralamayı koruyan kontrollü yenileme.",
    icon: "RefreshCw",
    status: "index",
    related: ["kurumsal-web-sitesi", "teknik-seo", "hosting-yedekleme", "seo-uyumlu-sayfa-mimarisi"],
    cityPriority: ["istanbul", "kocaeli", "ankara", "izmir"],
  },
  {
    no: "09",
    title: "CRM",
    slug: "crm",
    category: "ozel-yazilim",
    primaryKeyword: "CRM",
    secondaryKeywords: ["CRM sistemi", "CRM yazılımı", "müşteri ilişkileri yönetimi"],
    shortDescription:
      "Kuruma özel CRM: müşteri, fırsat, teklif ve saha ziyareti takibi. WhatsApp ve e-posta entegrasyonuyla tüm iletişim tek kayıtta toplanır; satış hattı panelde.",
    cardText: "Satış hattınızı ve müşteri geçmişini tek panelde toplayan özel CRM.",
    icon: "Users",
    status: "pilot",
    related: ["musteri-yonetim-sistemi", "teklif-hazirlama-sistemi", "odeme-whatsapp-crm-entegrasyonu", "is-takip-sistemi"],
    cityPriority: ["istanbul", "ankara", "kocaeli", "bursa"],
  },
  {
    no: "10",
    title: "Müşteri Yönetim Sistemi",
    slug: "musteri-yonetim-sistemi",
    category: "ozel-yazilim",
    primaryKeyword: "müşteri yönetim sistemi",
    secondaryKeywords: ["müşteri takip sistemi", "müşteri veritabanı"],
    shortDescription:
      "Müşteri yönetim sistemi: tekil kayıt, temas geçmişi, etiketleme, hatırlatma ve rol bazlı erişim. Dağılan Excel kayıtlarını tek gerçeğe çevirir.",
    cardText: "Müşteri verisini temizleyen, tekrarını engelleyen, ekibe paylaşan sistem.",
    icon: "Contact",
    status: "index",
    related: ["crm", "personel-kullanici-yonetimi", "raporlama-sistemi", "musteri-paneli"],
  },
  {
    no: "11",
    title: "Teklif Hazırlama Sistemi",
    slug: "teklif-hazirlama-sistemi",
    category: "ozel-yazilim",
    primaryKeyword: "teklif hazırlama sistemi",
    secondaryKeywords: ["online teklif sistemi", "teklif yazılımı"],
    shortDescription:
      "Teklif hazırlama sistemi: fiyat listesinden saniyeler içinde markalı PDF teklif, sürüm takibi, onay akışı ve online kabul. Cevapsız tekliflerin.",
    cardText: "Fiyat listesinden tek tıkla markalı teklif üreten, takip eden sistem.",
    icon: "FileText",
    status: "index",
    related: ["proforma-siparis-yonetimi", "crm", "urun-tedarikci-yonetimi", "raporlama-sistemi"],
  },
  {
    no: "12",
    title: "Proforma / Sipariş Yönetimi",
    slug: "proforma-siparis-yonetimi",
    category: "ozel-yazilim",
    primaryKeyword: "sipariş yönetim sistemi",
    secondaryKeywords: ["proforma sistemi", "sipariş takibi"],
    shortDescription:
      "Proforma ve sipariş yönetimi: siparişten sevkiyata durum takibi, stok kontrolü, irsaliye ve fatura entegrasyonu. Geciken siparişleri görünür kılar.",
    cardText: "Siparişin her adımını tek ekranda izleten operasyon paneli.",
    icon: "ClipboardList",
    status: "index",
    related: ["stok-yonetimi", "teklif-hazirlama-sistemi", "e-ticaret-sitesi", "api-entegrasyonu"],
  },
  {
    no: "13",
    title: "Stok Yönetimi",
    slug: "stok-yonetimi",
    category: "ozel-yazilim",
    primaryKeyword: "stok yönetim sistemi",
    secondaryKeywords: ["stok takip programı", "envanter yönetimi"],
    shortDescription:
      "Stok yönetim sistemi: depo ve birim yapısı, kritik stok uyarısı, sayım ve hareket geçmişi, barkod desteği. Olmayan ürünü satmamayı ve ani tükenmeleri.",
    cardText: "Depo, kritik seviye ve hareket geçmişini netleştiren stok altyapısı.",
    icon: "Warehouse",
    status: "index",
    related: ["urun-tedarikci-yonetimi", "proforma-siparis-yonetimi", "raporlama-sistemi", "e-ticaret-sitesi"],
  },
  {
    no: "14",
    title: "Ürün / Tedarikçi Yönetimi",
    slug: "urun-tedarikci-yonetimi",
    category: "ozel-yazilim",
    primaryKeyword: "ürün yönetim sistemi",
    secondaryKeywords: ["ürün katalog yönetimi", "tedarikçi takibi"],
    shortDescription:
      "Ürün ve tedarikçi yönetimi: merkezî katalog, varyant ve fiyat politikaları, tedarikçi puanlama ve satınalma takibi. Site, katalog, panel tek kaynak.",
    cardText: "Ürün verisini tek yerden yönetip tüm kanallara aynı kaynaktan yayan sistem.",
    icon: "Boxes",
    status: "index",
    related: ["stok-yonetimi", "urun-tanitim-sitesi", "teklif-hazirlama-sistemi", "api-entegrasyonu"],
  },
  {
    no: "15",
    title: "Personel / Kullanıcı Yönetimi",
    slug: "personel-kullanici-yonetimi",
    category: "ozel-yazilim",
    primaryKeyword: "personel yönetim sistemi",
    secondaryKeywords: ["personel takip sistemi", "kullanıcı yönetimi"],
    shortDescription:
      "Personel ve kullanıcı yönetimi: rol ve yetki matrisi, özlük bilgileri, izin ve puantaj kayıtları, giriş denetimi. Yetki dağınıklığı tek panelde biter.",
    cardText: "Kimin neyi görebileceğini netleştiren rol bazlı kullanıcı yönetimi.",
    icon: "IdCard",
    status: "index",
    related: ["yonetim-paneli", "is-takip-sistemi", "multi-tenant-uygulama", "musteri-yonetim-sistemi"],
  },
  {
    no: "16",
    title: "Yönetim Paneli",
    slug: "yonetim-paneli",
    category: "ozel-yazilim",
    primaryKeyword: "yönetim paneli",
    secondaryKeywords: ["admin panel", "yönetim paneli geliştirme"],
    shortDescription:
      "Yönetim paneli geliştirme: içerik, kullanıcı, ayar ve rapor ekranları tek arayüzde. Yetki bazlı erişim ve hızlı veri girişiyle işler panele taşınır.",
    cardText: "İşletmenizi kod yazmadan yönetmenizi sağlayan panel katmanı.",
    icon: "LayoutDashboard",
    status: "index",
    related: ["musteri-paneli", "dashboard-sistemi", "kurumsal-web-sitesi", "personel-kullanici-yonetimi"],
  },
  {
    no: "17",
    title: "Müşteri Paneli",
    slug: "musteri-paneli",
    category: "ozel-yazilim",
    primaryKeyword: "müşteri paneli",
    secondaryKeywords: ["müşteri portali", "online müşteri paneli"],
    shortDescription:
      "Müşteri paneli: sipariş ve evrak geçmişi, bakiye, talep takibi ve self servis işlemler. Çağrı merkezi yükünü azaltan, markanıza ait online müşteri portalı.",
    cardText: "Müşterinizin kendi işini kendisinin gördüğü online portal.",
    icon: "MonitorSmartphone",
    status: "index",
    related: ["yonetim-paneli", "rezervasyon-basvuru-sistemi", "odeme-whatsapp-crm-entegrasyonu", "is-takip-sistemi"],
  },
  {
    no: "18",
    title: "İş Takip Sistemi",
    slug: "is-takip-sistemi",
    category: "ozel-yazilim",
    primaryKeyword: "iş takip sistemi",
    secondaryKeywords: ["proje takip yazılımı", "görev yönetim sistemi"],
    shortDescription:
      "İş takip sistemi: görev, iş emri, SLA ve sorumluluk ataması; sahadan fotoğraf ve not girişi. Geciken işler toplantıda değil panelde görünür, haftalık rapor.",
    cardText: "Görevin kimde ve hangi aşamada olduğunu net gösteren takip paneli.",
    icon: "Kanban",
    status: "index",
    related: ["raporlama-sistemi", "yonetim-paneli", "dashboard-sistemi", "dijital-otomasyon"],
  },
  {
    no: "19",
    title: "Raporlama Sistemi",
    slug: "raporlama-sistemi",
    category: "ozel-yazilim",
    primaryKeyword: "raporlama sistemi",
    secondaryKeywords: ["otomatik raporlama", "dashboard"],
    shortDescription:
      "Raporlama sistemi: yönetişim metrikleri, otomatik haftalık/aylık rapor, Excel/PDF dışa aktarım ve e-posta ile abonelik. Rapor kuyruğunda beklemeyin.",
    cardText: "Doğru veriyi, doğru kişiye, doğru sıklıkta ulaştıran rapor katmanı.",
    icon: "BarChart3",
    status: "index",
    related: ["dashboard-sistemi", "is-takip-sistemi", "crm", "api-entegrasyonu"],
  },
  {
    no: "20",
    title: "Form / Başvuru Sistemi",
    slug: "form-basvuru-sistemi",
    category: "ozel-yazilim",
    primaryKeyword: "başvuru formu sistemi",
    secondaryKeywords: ["online form sistemi", "web form"],
    shortDescription:
      "Online form ve başvuru sistemi: koşullu adımlar, dosya yükleme, KVKK onayı, durum takibi ve otomatik bilgilendirme. Kayıp başvurular sona erer.",
    cardText: "Başvuruyu toplamakla kalmayıp değerlendirmeye kadar taşıyan sistem.",
    icon: "FormInput",
    status: "index",
    related: ["rezervasyon-basvuru-sistemi", "landing-page", "dijital-otomasyon", "api-entegrasyonu"],
  },
  {
    no: "21",
    title: "SaaS Platformu",
    slug: "saas-platformu",
    category: "saas",
    primaryKeyword: "SaaS yazılım",
    secondaryKeywords: ["SaaS platformu geliştirme", "abonelik yazılımı"],
    shortDescription:
      "SaaS platformu geliştirme: çok kiracılı mimari, abonelik ve plan yönetimi, admin ve müşteri paneli, ölçülen onboarding. Ürününüzü yayına hazırlar.",
    cardText: "Abonelik, tenant ve fatura katmanı hazır, büyüyen platform altyapısı.",
    icon: "Cloud",
    status: "index",
    related: ["abonelik-tabanli-yazilim", "multi-tenant-uygulama", "mvp-startup-urunu", "yonetim-paneli"],
  },
  {
    no: "22",
    title: "Abonelik Tabanlı Yazılım",
    slug: "abonelik-tabanli-yazilim",
    category: "saas",
    primaryKeyword: "abonelik tabanlı yazılım",
    secondaryKeywords: ["abonelik sistemi", "üyelik sistemi"],
    shortDescription:
      "Abonelik tabanlı yazılım: plan ve kota yönetimi, deneme süresi, otomatik tahsilat, iade ve başarısız ödeme akışları. Tekrarlayan geliri kurala bağlayan.",
    cardText: "Tekrarlayan geliri kurala bağlayan abonelik ve tahsilat altyapısı.",
    icon: "Repeat",
    status: "index",
    related: ["saas-platformu", "odeme-whatsapp-crm-entegrasyonu", "musteri-paneli", "raporlama-sistemi"],
  },
  {
    no: "23",
    title: "Multi-Tenant Uygulama",
    slug: "multi-tenant-uygulama",
    category: "saas",
    primaryKeyword: "multi-tenant",
    secondaryKeywords: ["çok kiracılı uygulama", "çok firmalı yazılım"],
    shortDescription:
      "Multi-tenant uygulama mimarisi: tenant izolasyonu, şube/marka bazlı yapılandırma, tek kod tabanı. Her firmaya ayrı panel, tek merkezden yönetim.",
    cardText: "Birden çok firmayı tek altyapıda, veri karışmadan çalıştıran mimari.",
    icon: "Network",
    status: "index",
    related: ["saas-platformu", "personel-kullanici-yonetimi", "yonetim-paneli", "supabase-postgresql"],
  },
  {
    no: "24",
    title: "Dashboard Sistemi",
    slug: "dashboard-sistemi",
    category: "saas",
    primaryKeyword: "dashboard",
    secondaryKeywords: ["online dashboard", "veri görselleştirme"],
    shortDescription:
      "Dashboard geliştirme: veri kaynaklarını birleştiren yönetişim ekranları, anlık metrikler ve alarm eşikleri. Yönetici kararını kurulu tek ekrandan verir.",
    cardText: "Karmaşık veriyi okunur, tıklanabilir ve karar verilebilir ekrana çevirir.",
    icon: "LineChart",
    status: "index",
    related: ["raporlama-sistemi", "yonetim-paneli", "is-takip-sistemi", "supabase-postgresql"],
  },
  {
    no: "25",
    title: "MVP / Startup Ürünü",
    slug: "mvp-startup-urunu",
    category: "saas",
    primaryKeyword: "MVP geliştirme",
    secondaryKeywords: ["startup web uygulaması", "hızlı ürün geliştirme"],
    shortDescription:
      "MVP geliştirme: tek akış, net hedef, 6-10 haftada canlı ürün. Yatırımcı sunumu, kullanıcı onayı ve ilk dağıtım için hazır altyapı birlikte gelir.",
    cardText: "Fikri ölçülebilir bir ürüne çeviren, gereksiz kapsamı kesen MVP sprinti.",
    icon: "Zap",
    status: "index",
    related: ["saas-platformu", "abonelik-tabanli-yazilim", "dashboard-sistemi", "vercel-deployment"],
  },
  {
    no: "26",
    title: "Teknik SEO",
    slug: "teknik-seo",
    category: "seo",
    primaryKeyword: "teknik SEO",
    secondaryKeywords: ["teknik SEO hizmeti", "SEO denetimi"],
    shortDescription:
      "Teknik SEO: Core Web Vitals, indeksleme ve tarama bütçesi, URL/canonical mimarisi, schema ve log analizi. Düzeltmeleri kod tarafında biz uygularız.",
    cardText: "Rapor bırakıp çıkmayan; düzeltmeyi kodda yapan teknik SEO hizmeti.",
    icon: "Search",
    status: "pilot",
    related: ["seo-uyumlu-sayfa-mimarisi", "lokal-seo", "schema-org-structured-data", "google-search-console-kurulumu"],
    cityPriority: ["istanbul", "ankara", "izmir"],
  },
  {
    no: "27",
    title: "Lokal SEO",
    slug: "lokal-seo",
    category: "seo",
    primaryKeyword: "lokal SEO",
    secondaryKeywords: ["yerel SEO", "Google'da görünürlük"],
    shortDescription:
      "Lokal SEO hizmeti: işletme profili, il ve ilçe sayfa ailesi, yerel schema ve yorum sinyalleri. Yakınımdaki aramalarında bulunur hâle gelin; Türkiye geneli.",
    cardText: "Şehir ve ilçe bazlı sayfa ailesiyle yerel aramalarda öne çıkma.",
    icon: "MapPin",
    status: "index",
    related: ["teknik-seo", "seo-uyumlu-sayfa-mimarisi", "schema-org-structured-data", "kurumsal-web-sitesi"],
  },
  {
    no: "28",
    title: "SEO Uyumlu Sayfa Mimarisi",
    slug: "seo-uyumlu-sayfa-mimarisi",
    category: "seo",
    primaryKeyword: "SEO uyumlu sayfa mimarisi",
    secondaryKeywords: ["SEO sayfa yapısı", "URL yapısı"],
    shortDescription:
      "SEO uyumlu sayfa mimarisi: küme yapısı, URL taksonomisi, başlık hiyerarşisi ve iç link planı. 43 sayfadan 4.300 sayfaya aynı şablonla, kopya içerik riski.",
    cardText: "43 sayfayı 43 tekil metin gibi kurgulayan ölçeklenebilir sayfa mimarisi.",
    icon: "ListTree",
    status: "index",
    related: ["teknik-seo", "lokal-seo", "kurumsal-web-sitesi", "schema-org-structured-data"],
  },
  {
    no: "29",
    title: "Schema.org / Structured Data",
    slug: "schema-org-structured-data",
    category: "seo",
    primaryKeyword: "schema.org",
    secondaryKeywords: ["structured data", "JSON-LD"],
    shortDescription:
      "Schema.org ve JSON-LD kurulumu: Organization, Service, FAQPage, BreadcrumbList ve LocalBusiness şemaları; doğrulanmış ve zengin sonuç testinden geçmiş.",
    cardText: "Google'a sitenizi doğru anlatan, doğrulanmış yapısal veri katmanı.",
    icon: "Code2",
    status: "index",
    related: ["teknik-seo", "google-search-console-kurulumu", "seo-uyumlu-sayfa-mimarisi", "lokal-seo"],
  },
  {
    no: "30",
    title: "Google Search Console Kurulumu",
    slug: "google-search-console-kurulumu",
    category: "seo",
    primaryKeyword: "Google Search Console",
    secondaryKeywords: ["GSC kurulumu", "site doğrulama"],
    shortDescription:
      "Google Search Console kurulumu ve yönetimi: mülk doğrulama, sitemap gönderimi, indeksleme raporu ve sorun takibi. Raporu aksiyon listesine çeviren düzenli.",
    cardText: "GSC'yi rapor aracı değil, aksiyon kaynağı olarak kuran kurulum.",
    icon: "Gauge",
    status: "index",
    related: ["teknik-seo", "schema-org-structured-data", "seo-uyumlu-sayfa-mimarisi", "raporlama-sistemi"],
  },
  {
    no: "31",
    title: "SEO Danışmanlığı",
    slug: "seo-danismanligi",
    category: "seo",
    primaryKeyword: "SEO danışmanlığı",
    secondaryKeywords: ["SEO danışman hizmeti", "SEO stratejisi"],
    shortDescription:
      "SEO danışmanlığı: strateji, rekabet analizi, önceliklendirilmiş yol haritası ve ekiplerin yönlendirilmesi. İsterseniz uygulamasını da biz yaparız.",
    cardText: "Kendi ekibinizle yürüyeceğiniz, net sorumlu ve takvimli SEO planı.",
    icon: "Lightbulb",
    status: "index",
    related: ["teknik-seo", "lokal-seo", "ai-icerik-araclar", "dijital-donusum"],
  },
  {
    no: "32",
    title: "Dijital Otomasyon",
    slug: "dijital-otomasyon",
    category: "it-ai",
    primaryKeyword: "dijital otomasyon",
    secondaryKeywords: ["iş süreç otomasyonu", "otomasyon yazılımı"],
    shortDescription:
      "Dijital otomasyon: tekliften faturaya, formdan CRM'e kadar tekrarlayan adımları kural motoruyla bağlayan iş akışları. Elle yapılanı sisteme alın.",
    cardText: "Aynı veriyi üçüncü kez girmeyi bıraktıran süreç otomasyonu.",
    icon: "Workflow",
    status: "index",
    related: ["api-entegrasyonu", "form-basvuru-sistemi", "dijital-donusum", "ai-icerik-araclar"],
  },
  {
    no: "33",
    title: "Domain / DNS Yönetimi",
    slug: "domain-dns-yonetimi",
    category: "it-ai",
    primaryKeyword: "DNS yönetimi",
    secondaryKeywords: ["domain yönetimi", "DNS ayarları"],
    shortDescription:
      "Domain ve DNS yönetimi: kayıt transferi, subdomain planı, e-posta kayıtları, sertifika ve yenileme takvimi. Tek kişiye bağlı altyapıdan kurtulun.",
    cardText: "Kayıtların, sürelerin ve sahipliğin belgelendiği güvenli DNS yönetimi.",
    icon: "Server",
    status: "index",
    related: ["kurumsal-email", "cloudflare-cdn", "hosting-yedekleme", "vercel-deployment"],
  },
  {
    no: "34",
    title: "Hosting / Yedekleme",
    slug: "hosting-yedekleme",
    category: "it-ai",
    primaryKeyword: "web hosting",
    secondaryKeywords: ["hosting yönetimi", "web sitesi yedekleme"],
    shortDescription:
      "Hosting ve yedekleme yönetimi: doğru plan seçimi, otomatik yedek, test edilmiş geri yükleme, izleme ve güvenlik güncellemeleri. Doğrulanmayan yedek yedek.",
    cardText: "Yayınlama, yedekleme ve geri yükleme tatbikatını birlikte kurar.",
    icon: "HardDrive",
    status: "index",
    related: ["cloudflare-cdn", "domain-dns-yonetimi", "vercel-deployment", "supabase-postgresql"],
  },
  {
    no: "35",
    title: "Cloudflare / CDN Yapılandırması",
    slug: "cloudflare-cdn",
    category: "it-ai",
    primaryKeyword: "Cloudflare",
    secondaryKeywords: ["Cloudflare kurulumu", "CDN yapılandırma"],
    shortDescription:
      "Cloudflare ve CDN kurulumu: cache stratejisi, WAF ve bot koruması, DNS yönetimi, yönlendirme kuralları ve anlık purge. Hız ile güvenliği tek noktadan.",
    cardText: "Cache, güvenlik ve DNS'i doğru ayarlayan Cloudflare yapılandırması.",
    icon: "Shield",
    status: "index",
    related: ["hosting-yedekleme", "domain-dns-yonetimi", "teknik-seo", "vercel-deployment"],
  },
  {
    no: "36",
    title: "Vercel Deployment",
    slug: "vercel-deployment",
    category: "it-ai",
    primaryKeyword: "Vercel",
    secondaryKeywords: ["Vercel deployment", "Next.js Vercel"],
    shortDescription:
      "Vercel yayın hattı: preview ortamı, otomatik deploy, ortam değişkenleri ve domain yönetimi. Her pull request ayrı önizleme, her merge canlıya çıkış alır.",
    cardText: "Next.js projelerinde kontrollü, geri alınabilir ve hızlı yayın akışı.",
    icon: "Upload",
    status: "index",
    related: ["cloudflare-cdn", "saas-platformu", "mvp-startup-urunu", "hosting-yedekleme"],
  },
  {
    no: "37",
    title: "Supabase / PostgreSQL Altyapısı",
    slug: "supabase-postgresql",
    category: "it-ai",
    primaryKeyword: "Supabase",
    secondaryKeywords: ["Supabase kurulumu", "PostgreSQL"],
    shortDescription:
      "Supabase ve PostgreSQL kurulumu: şema tasarımı, satır bazlı güvenlik politikaları, kimlik doğrulama ve dosya deposu. Veri omurgası baştan sağlam kurulur.",
    cardText: "Auth, depolama ve satır bazlı güvenlikle hazır veri katmanı.",
    icon: "Database",
    status: "index",
    related: ["api-entegrasyonu", "yonetim-paneli", "multi-tenant-uygulama", "hosting-yedekleme"],
  },
  {
    no: "38",
    title: "Kurumsal E-Posta",
    slug: "kurumsal-email",
    category: "it-ai",
    primaryKeyword: "kurumsal e-posta",
    secondaryKeywords: ["kurumsal mail", "profesyonel e-posta"],
    shortDescription:
      "Kurumsal e-posta kurulumu: Google Workspace/Microsoft 365 seçimi, ortak hesaplar, SPF-DKIM-DMARC, imza ve arşiv politikaları. Mailleriniz kutuya düşsün.",
    cardText: "Adres, güvenlik kayıtları ve kullanım kuralları net e-posta sistemi.",
    icon: "Mail",
    status: "index",
    related: ["domain-dns-yonetimi", "dijital-otomasyon", "kurumsal-web-sitesi", "api-entegrasyonu"],
  },
  {
    no: "39",
    title: "API Entegrasyonu",
    slug: "api-entegrasyonu",
    category: "it-ai",
    primaryKeyword: "API entegrasyonu",
    secondaryKeywords: ["REST API", "üçüncü parti entegrasyon"],
    shortDescription:
      "API entegrasyonu: muhasebe, e-fatura, kargo, pazaryeri, ödeme ve ERP bağlantıları; webhook, kuyruk, hata telafisi ve izleme. Veri elle taşınmasın.",
    cardText: "Sistemlerinizi konuşturan, kırılgan olmayan entegrasyon katmanı.",
    icon: "Plug",
    status: "index",
    related: ["odeme-whatsapp-crm-entegrasyonu", "dijital-otomasyon", "e-ticaret-sitesi", "supabase-postgresql"],
  },
  {
    no: "40",
    title: "Ödeme / WhatsApp / CRM Entegrasyonu",
    slug: "odeme-whatsapp-crm-entegrasyonu",
    category: "it-ai",
    primaryKeyword: "CRM entegrasyonu",
    secondaryKeywords: ["ödeme entegrasyonu", "WhatsApp API"],
    shortDescription:
      "Ödeme, WhatsApp Business API ve CRM entegrasyonu: sanal POS, sipariş bildirimleri, şablon mesajlar ve satış kaydının otomatik oluşması. Tek akış, tek kayıt.",
    cardText: "Sohbeti, tahsilatı ve kaydı aynı akışta birleştiren entegrasyon.",
    icon: "MessageCircle",
    status: "index",
    related: ["crm", "api-entegrasyonu", "e-ticaret-sitesi", "musteri-paneli"],
  },
  {
    no: "41",
    title: "AI Chatbot",
    slug: "ai-chatbot",
    category: "it-ai",
    primaryKeyword: "AI chatbot",
    secondaryKeywords: ["chatbot yazılımı", "yapay zekâ chatbot"],
    shortDescription:
      "AI chatbot geliştirme: kurumsal bilgi tabanına bağlı (RAG) yanıt, insan devri, WhatsApp/web kanal ve raporlama. Tekrarlayan soruları otomatikleştirin.",
    cardText: "Sitenizin ve WhatsApp hattınızın 7/24 çalışan, kaynağa bağlı asistanı.",
    icon: "Bot",
    status: "pilot",
    related: ["ai-icerik-araclar", "api-entegrasyonu", "odeme-whatsapp-crm-entegrasyonu", "musteri-paneli"],
    cityPriority: ["istanbul", "ankara", "izmir", "bursa"],
  },
  {
    no: "42",
    title: "AI Destekli İçerik / Araçlar",
    slug: "ai-icerik-araclar",
    category: "it-ai",
    primaryKeyword: "AI içerik",
    secondaryKeywords: ["yapay zekâ içerik", "AI araçları"],
    shortDescription:
      "AI destekli içerik araçları: hizmet/şehir bazlı metin üretimi, marka sözlüğü, kontrol akışı ve iç link önerisi. 800 sayfayı tek tek elle yazmayın.",
    cardText: "Ölçekli içerik üretimini kalite kontrolüyle birleştiren AI hattı.",
    icon: "Sparkles",
    status: "index",
    related: ["ai-chatbot", "dijital-otomasyon", "seo-uyumlu-sayfa-mimarisi", "landing-page"],
  },
  {
    no: "43",
    title: "Dijital Dönüşüm Süreçleri",
    slug: "dijital-donusum",
    category: "it-ai",
    primaryKeyword: "dijital dönüşüm",
    secondaryKeywords: ["dijital dönüşüm danışmanlığı", "dijitalleşme"],
    shortDescription:
      "Dijital dönüşüm: süreç envanteri, önceliklendirme ve yol haritası. Excel, WhatsApp ve telefon trafiğinden ölçülebilir sistemlere geçişi adım adım planlıyoruz.",
    cardText: "Kağıt ve tabloda yaşayan işleri ölçülebilir sistemlere çevirir.",
    icon: "Compass",
    status: "index",
    related: ["dijital-otomasyon", "is-takip-sistemi", "yonetim-paneli", "raporlama-sistemi"],
  },
]

/**
 * Pilot hizmet içerikleri (elle yazılmış, Bölüm 6 sırasıyla) kayıtla birleştirilir.
 * Pilot olmayanlar `status: "index"` kalır; içerikleri content-factory ile üretilir.
 */
export const pilotContentsBySlug: Record<string, ServiceContent> = {
  ...pilotContents,
  ...pilotContents2,
  ...webContents,
  ...webContents2,
}

for (const svc of services) {
  const hand = pilotContentsBySlug[svc.slug]
  if (hand) {
    svc.content = hand
    svc.status = "pilot"
  }
}

export const serviceBySlug: Record<string, Service> = Object.fromEntries(
  services.map((s) => [s.slug, s]),
)

export const pilotServiceSlugs = services
  .filter((s) => s.status === "pilot")
  .map((s) => s.slug)

export function getService(slug: string): Service | undefined {
  return serviceBySlug[slug]
}

export function servicesByCategory(category: string): Service[] {
  return services.filter((s) => s.category === category)
}

/** Sitemap / liste için indekslenebilir hizmetler */
export const indexableServices = services
export const allServiceSlugs = services.map((s) => s.slug)
