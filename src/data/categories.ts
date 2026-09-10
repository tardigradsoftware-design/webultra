import type { CategoryId } from "@/types/content"

export interface ServiceCategory {
  id: CategoryId
  title: string
  kicker: string
  description: string
  icon: string
  /** Şablon üretici (content-factory) için kategori bazlı içerik tohumları */
  pains: { title: string; text: string }[]
  deliverables: string[]
  benefits: { title: string; text: string; metric?: string }[]
  audience: { sector: string; note: string }[]
  whyUs: { title: string; text: string }[]
  faq: { q: string; a: string }[]
}

export const serviceCategories: ServiceCategory[] = [
  {
    id: "web",
    title: "Web & Kurumsal Site",
    kicker: "Görünürlük",
    description:
      "Markanızı anlatan, hızlı ve SEO uyumlu kurumsal siteler, landing page'ler ve e-ticaret arayüzleri.",
    icon: "LayoutDashboard",
    pains: [
      {
        title: "Site var ama satış getirmiyor",
        text: "Ziyaretçi geliyor, form dolmuyor. Sorun genelde tasarım değil; mesaj hiyerarşisi, güven sinyalleri ve teklif kurgusudur.",
      },
      {
        title: "Yavaş ve mobilde dağılan sayfalar",
        text: "3 saniyeyi geçen yükleme, mobilde kayan bölümler ve dev JSX paketleri; hem kullanıcıyı hem Google'ı yorar.",
      },
      {
        title: "Her değişiklik ajansa bağımlı",
        text: "Bir metin güncellemek için ticket açmak, içerik ekiplerini yavaşlatır ve siteyi bayat bırakır.",
      },
    ],
    deliverables: [
      "Marka diline uygun UI kiti (renk, tipografi, bileşen seti)",
      "Mobil öncelikli, 60+ breakpoint testli sayfa düzeni",
      "Hız bütçesi: LCP < 2.5s, CLS < 0.1, INP < 200ms",
      "SEO uyumlu URL, başlık, meta ve içerik mimarisi",
      "Yönetilebilir içerik katmanı (bloklar, sayfalar, medya)",
      "Form → CRM/e-posta entegrasyonu ve telemetri kurulumu",
      "Analitik, Search Console ve dönüşüm hedefleri kurulumu",
      "Canlı sonrası bakım, yedekleme ve izleme planı",
    ],
    benefits: [
      { title: "Daha fazla nitelikli talep", text: "Net teklif, sosyal kanıt ve doğru konumlanmış form; talep başına maliyeti düşürür.", metric: "+%35" },
      { title: "Kurumsal algı", text: "Tutarlı tipografi, boşluk ritmi ve güven blokları; ilk 5 saniyede profesyonellik hissi verir." },
      { title: "Bakım maliyetinde düşüş", text: "Bileşen bazlı yapı ve tip güvenli kod tabanı; sonraki değişiklikler daha hızlı ve hatasız.", metric: "-%40" },
    ],
    audience: [
      { sector: "KOBİ ve üretim firmaları", note: "Ürün kataloğu, bayii talebi ve kurumsal güven ihtiyacı" },
      { sector: "Hizmet sektörü", note: "Randevu, teklif ve başvuru akışları olan ofisler" },
      { sector: "E-ticaret markaları", note: "Katalog, kampanya landing page ve ödeme akışı" },
      { sector: "Kurumsal markalar", note: "Kurumsal iletişim, kariyer ve basın katmanı" },
    ],
    whyUs: [
      { title: "Tasarım ve kod aynı elde", text: "Figma'da kalan mockup değil; Next.js + Tailwind + shadcn/ui ile üretime hazır, ölçülebilir arayüz teslim ediyoruz." },
      { title: "SEO sonradan eklenmiyor", text: "URL, şema, başlık hiyerarşisi ve hız bütçesi ilk günden plana giriyor." },
      { title: "Ölçeklenebilir mimari", text: "Bugün 10 sayfa, yarın 800 sayfa; aynı mimari, aynı hız." },
      { title: "Teslim sonrası sahiplik", text: "Kod deposu, CI/CD, dokümantasyon ve eğitim sizin oluyor. Kilitli sistem yok." },
    ],
    faq: [
      { q: "Süre ne kadar sürüyor?", a: "Kapsama göre 3–8 hafta arası değişiyor. Pilot sprint 2 haftada ilk yayınlanabilir iskeleti çıkarıyoruz, kalan sayfalar blok blok büyüyor." },
      { q: "Mevcut sitemizi taşıyabilir misiniz?", a: "Evet. İçerik envanterini çıkarıp URL eşleme (redirect) planı ile taşıyoruz; mevcut indekslenmiş sayfaların otoritesini korumak için 301 planı zorunlu kabul edilir." },
      { q: "İçeriği kendimiz güncelleyebilir miyiz?", a: "Evet. Sayfalar blok bazlı yönetilir; metin, görsel ve CTA değişiklikleri için geliştirici gerekmez." },
      { q: "Fiyat nasıl belirlenir?", a: "Sayfa/blok sayısı, içerik üretimi, entegrasyonlar ve bakım kapsamına göre. Ücretsiz ön analiz sonrası tek fiyat, tek takvim veriyoruz." },
    ],
  },
  {
    id: "ozel-yazilim",
    title: "Özel Yazılım & İş Uygulamaları",
    kicker: "Verimlilik",
    description:
      "Excel'de yaşayan süreçleri panele çeviren CRM, iş takip, stok, teklif ve raporlama çözümleri.",
    icon: "Boxes",
    pains: [
      {
        title: "Süreçler tablolarda dağılıyor",
        text: "Aynı bilgi üç farklı Excel'de, üç farklı versiyonda. Tek gerçek kaynak (single source of truth) olmadığı için kararlar gecikiyor.",
      },
      {
        title: "Sahada kayıt tutulmuyor",
        text: "Müşteri ziyareti, teklif durumu ve stok hareketi telefonda konuşulup kayboluyor; raporlama ay sonunda manuel toplanıyor.",
      },
      {
        title: "Hazır paketler kuruma uymuyor",
        text: "Kutudan çıkan yazılımlar ya gereğinden büyük ya da süreçlerinizi zorluyor; entegrasyon her seferinde ek maliyet.",
      },
    ],
    deliverables: [
      "Süreç haritası ve rol/yetki matrisi",
      "Veri modeli ve tek gerçek kaynak şeması (PostgreSQL)",
      "Yetkilendirmeli yönetim paneli ve kullanıcı rolleri",
      "Müşteri/tedarikçi/stok/teklif modülleri",
      "Otomatik raporlama ve dışa aktarım (Excel, PDF)",
      "Mevcut muhasebe, e-fatura ve WhatsApp entegrasyonları",
      "Audit log, yedekleme ve geri yükleme senaryoları",
      "Kullanıcı eğitimi ve 30 gün hiperbakım",
    ],
    benefits: [
      { title: "Manuel işçilikte azalma", text: "Aynı veriyi tekrar yazma, mail toplama ve elle raporlama saatleri ortadan kalkar.", metric: "-%50" },
      { title: "Anlık görünürlük", text: "Yönetici panelden sipariş, teklif ve stok durumunu canlı görür; toplantı verisi tartışılmaz hâle gelir." },
      { title: "Ölçeklenebilir ekip", text: "Yeni personel, yeni şube, yeni müşteri: sürece değil panele alınır.", metric: "3x" },
    ],
    audience: [
      { sector: "Üretim ve toptan satış", note: "Stok, tedarikçi, sipariş ve irsaliye süreçleri" },
      { sector: "Saha ekipli firmalar", note: "Ziyaret, iş emri ve teklif takibi" },
      { sector: "Danışmanlık ve ajanslar", note: "Proje, görev, saat ve faturalama" },
      { sector: "Lojistik ve servis", note: "Araç, servis kaydı ve SLA takibi" },
    ],
    whyUs: [
      { title: "Önce süreç, sonra kod", text: "Koda geçmeden önce mevcut akışı sayıya bağlıyoruz; hedef, kaç saat ve kaç hata azalacağı." },
      { title: "Modüler başlangıç", text: "Tek dev proje yerine, 2-3 haftada canlıya alınan tek bir modül ve ardından büyüyen panel." },
      { title: "Veri sizin", text: "Postgres şemanız, yedeğiniz ve kod deposu sizin adınıza. Taşınabilir, kilitli olmayan sistem." },
      { title: "Kurumsal güvenlik", text: "Rol bazlı yetki, audit log, 2FA ve şifreli yedekleme ilk günden kurulur." },
    ],
    faq: [
      { q: "Hazır CRM yerine neden özel yazılım?", a: "Süreçleriniz pakete uymuyorsa kullanıcı zorlar, veri kirlenir. Özel çözüm süreci sizin dilinizle modeler; entegrasyon ve raporlama maliyeti uzun vadede daha düşük olur." },
      { q: "Mevcut verimizi aktarabilir misiniz?", a: "Evet. Excel/CSV/muhasebe çıktıları için eşleme script'i yazıyoruz, tek seferlik migrasyon + doğrulama raporu teslim edilir." },
      { q: "Kaç kişilik ekipler kullanacak?", a: "5 kişilik ekipten 300 kişilik sahaya kadar aynı mimari çalışır; çok şubeli ve çok kiracılı senaryolar ayrı tasarlanır." },
      { q: "Mobilde kullanılır mı?", a: "Panel responsive çalışır; saha için ayrıca mobil öncelikli ekranlar (iş emri, fotoğraf, imza, offline not) tasarlanır." },
    ],
  },
  {
    id: "saas",
    title: "SaaS & Platform Geliştirme",
    kicker: "Ürün",
    description:
      "Abonelik, çok kiracılı yapı, panel ve faturalama ile uçtan uca SaaS ürün geliştirme ve MVP.",
    icon: "Layers",
    pains: [
      {
        title: "Fikir var, yol haritası yok",
        text: "Kapsam büyüdükçe MVP hiç bitmiyor. Çıkış tarihi yerine öğrenme hedefleri yazılmadığı için ürün sürüklemede kalıyor.",
      },
      {
        title: "Abonelik ve fatura karmaşası",
        text: "Plan, kota, deneme süresi, iade ve KVKK kayıtları elle yönetilmeye çalışılıyor; tahsilat kaçağı başlıyor.",
      },
      {
        title: "İlk müşteri geldi, mimari yetmedi",
        text: "Tek kiracılı düşünülmüş veri modeli, ikinci firmada tenant izolasyonu ve rol karmaşası üretiyor.",
      },
    ],
    deliverables: [
      "Ürün keşfi, ICP ve 90 günlük yol haritası",
      "MVP kapsamı: tek akış, tek ölçülebilir hedef",
      "Multi-tenant veri modeli ve tenant bazlı satır seviyesi güvenlik",
      "Kimlik doğrulama, roller, davet akışı ve 2FA",
      "Abonelik, plan, kota ve faturalama katmanı",
      "Admin paneli + müşteri paneli (aynı tasarım sistemi)",
      "Onboarding, e-posta ve kullanım analitiği",
      "Ölçeklenebilir dağıtım (edge, CDN, worker kuyrukları)",
    ],
    benefits: [
      { title: "Hızlı ilk yayın", text: "Kesin MVP kapsamı ile 6–10 haftada gerçek kullanıcıya açılan ürün.", metric: "6 hf" },
      { title: "Tahsilat güvence altında", text: "Plan değişimi, deneme süresi ve başarısız ödeme akışları otomatikleşir." },
      { title: "Yatırım için hazır altyapı", text: "Ölçülen aktivasyon, tutma (retention) ve churn metrikleri; teknik dokümantasyon ve temiz mimari.", metric: "3 metrik" },
    ],
    audience: [
      { sector: "Startup'lar", note: "MVP, yatırımcı demosu ve ilk müşteriler" },
      { sector: "Kurum içi ürün ekipleri", note: "Yeni ürün hattı veya dijital servis" },
      { sector: "Ajanslar", note: "Kendi markasıyla satacaği beyaz etiket panel" },
      { sector: "Niş B2B servisler", note: "Dikey SaaS: rezervasyon, raporlama, teklif, saha" },
    ],
    whyUs: [
      { title: "Ürün disiplini", text: "Kapsamı biz yazmayız; aktivasyon metriği üzerinden birlikte keseriz. Sprint sonunda demo zorunlu." },
      { title: "Next.js + Postgres çekirdeği", text: "App Router, tip güvenliği, Prisma/Supabase ve Vercel üzerinde tekrarlanabilir dağıtım." },
      { title: "Faturalamayı ertelemezsiniz", text: "Plan, kota, deneme ve iade akışları ilk sprintte kurulur; sonra ek proje açılmaz." },
      { title: "Ekip sizinle büyür", text: "Teslimden sonra kendi geliştiricinizi alabileceğiniz dokümantasyon ve yapılandırılmış kod bırakırız." },
    ],
    faq: [
      { q: "MVP ile tam ürün arasındaki fark nedir?", a: "MVP, tek bir kullanıcı sorununu ölçülebilir biçimde çözen minimum akıştı. Özellik listesi değil, öğrenme aracıdır; kalan her şey sürüm 1.1'den sonra gelir." },
      { q: "Multi-tenant nasıl kurguluyorsunuz?", a: "Genellikle paylaşımlı veritabanı + tenant_id izolasyonu ve satır seviyesi politika. Yüksek izolasyon gereken kurumlarda şema bazlı veya ayrı veritabanı seçeneklerini birlikte değerlendiriyoruz." },
      { q: "Ödeme altyapısında ne kullanıyorsunuz?", a: "Türkiye operasyonları için sanal POS (iyzico, PayTR, Craftgate) ve global kartlar için Stripe; webhook'lar ve mutabakat akışıyla birlikte kurulur." },
      { q: "Sunucu maliyetimiz ne olur?", a: "İlk 6 ay için aylık 15–60 USD bandında bir altyapı tipiktir. Ölçek arttıkça worker, cache ve veritabanı planlaması yeniden yapılır." },
    ],
  },
  {
    id: "seo",
    title: "SEO & Görünürlük",
    kicker: "Trafik",
    description:
      "Teknik SEO, lokal SEO, içerik mimarisi, schema ve Search Console ile ölçülebilir görünürlük artışı.",
    icon: "Search",
    pains: [
      {
        title: "Site var, ziyaretçi yok",
        text: "Marka adı dışında sorgularda görünmeyen siteler, ajans maliyetini tek başına karşılayamaz. Kayıp genelde teknik altyapı ve içerik mimarisindedir.",
      },
      {
        title: "Yerelde rakip önde",
        text: "Harita, adres, il/ilçe sayfası ve yorum sinyali olmayan işletme, 'yakınımdaki' aramalarda hiç yarışamaz.",
      },
      {
        title: "Yıllık SEO raporu, sıfır aksiyon",
        text: "Rapor PDF olarak kalıyor; geliştirici ticket'ı açılmıyor, teknik borç birikiyor.",
      },
    ],
    deliverables: [
      "Tam teknik denetim: indeksleme, tarama bütçesi, kopya içerik",
      "Core Web Vitals düzeltme planı ve uygulama",
      "URL/canonical/bilgilendirme mimarisi ve iç link planı",
      "Schema.org JSON-LD (Organization, Service, FAQ, Breadcrumb, LocalBusiness)",
      "Anahtar kelime ve arama niyeti matrisi",
      "Hizmet × şehir sayfa ailesi (lokal SEO)",
      "Google Business Profile ve Harita optimizasyonu",
      "Search Console, GA4 ve rank/dönüşüm raporlama paneli",
    ],
    benefits: [
      { title: "Organik talep artışı", text: "Niyeti yüksek servis sorgularından gelen trafik, reklam bütçesine bağımlılığı azaltır.", metric: "+%60" },
      { title: "Yerel aramada öne çıkma", text: "İl/ilçe sayfaları ve harita sinyalleriyle yakınımdaki sorgularında görünürlük." },
      { title: "Ölçülen iyileşme", text: "Haftalık panel: gösterim, tık, dönüşüm ve teknik sağlık tek ekranda." },
    ],
    audience: [
      { sector: "Yeni site kuran firmalar", note: "Doğru mimari ile başlamak, sonradan söküm yapmamak" },
      { sector: "Reklam bağımlı işletmeler", note: "Tıklama maliyeti artan, organik kanalı olmayan markalar" },
      { sector: "Şubeli / sahada hizmet veren", note: "İl bazlı sayfa ailesi gereken firmalar" },
      { sector: "E-ticaret", note: "Kategori/ürün sayfa mimarisi ve indeksleme sorunları" },
    ],
    whyUs: [
      { title: "Uygulamayı biz yaparız", text: "Denetim raporu bırakıp çıkmıyoruz; düzeltmeleri kod tarafında biz uyguluyoruz." },
      { title: "Geliştirici + strateji aynı ekipte", text: "SEO ile geliştirici tarafı arasındaki kaybolan işler tek elde toplanır." },
      { title: "Yapısal veri uzmanlığı", text: "JSON-LD'yi tahminle değil, doğrulanmış şemalarla kuruyoruz." },
      { title: "Şeffaf raporlama", text: "Ne yapıldı, ne değişti, sıradaki adım; tek sayfada, jargon boğmadan." },
    ],
    faq: [
      { q: "Sonuçları ne kadar sürede görürüz?", a: "Teknik düzeltmelerin etkisi 2–6 hafta içinde gösterim verisinde okunur; içerik ve otorite etkisi 3–9 ayda birikir. Takvim buna göre iki katmanlı planlanır." },
      { q: "Garanti veriyor musunuz?", a: "Sıralama garantisi vermeyen herkes gibi biz de vermiyoruz; uygulama, doğrulama ve raporlama garantisi veriyoruz. Ölçüm hedefleri sözleşmede net yazar." },
      { q: "Reklamı bırakmalı mıyız?", a: "Hayır. SEO organik kanalın tabanını büyütür, reklam ise kampanya ve lansmanlarda hız sağlar; ikisi birlikte planlanır." },
      { q: "Ceza riski var mı?", a: "Link satın alma, içerik çiftliği ve gizli metin gibi yöntemleri kullanmıyoruz. Risk iştahı yüksek teknikler uygulanmaz; kalıcı mimari kurulur." },
    ],
  },
  {
    id: "it-ai",
    title: "IT, Altyapı & Yapay Zekâ",
    kicker: "Altyapı",
    description:
      "Domain/DNS, hosting, Cloudflare, kurumsal e-posta, API entegrasyonları ve AI chatbot/araçlar.",
    icon: "Server",
    pains: [
      {
        title: "Teknik işler kişilere bağlı",
        text: "DNS'i bilen tek kişi izne çıktığında site taşınamaz, mail akmaz, sertifika yenilenmez.",
      },
      {
        title: "Güvenlik ve yedekme ihmal ediliyor",
        text: "Son yedeklemenin gerçekten çalışıp çalışmadığı kimse tarafından test edilmedi.",
      },
      {
        title: "Yapay zekâ pilot olarak kaldı",
        text: "Demo chatbot üretildi ama kurumsal bilgi tabanına bağlı, ölçülen ve sahiplenilen bir ürüne dönüşmedi.",
      },
    ],
    deliverables: [
      "Domain, DNS ve e-posta kayıt (SPF/DKIM/DMARC) yönetimi",
      "Vercel/Cloudflare tabanlı yayın hattı, CDN ve cache stratejisi",
      "Ortam yönetimi: production / staging / preview",
      "Yedekleme + geri yükleme tatbikatı ve RTO/RPO tanımları",
      "İzleme, uptime ve olay bildirim akışları",
      "Bilgi tabanına bağlı AI chatbot (RAG) ve insan devri akışı",
      "API entegrasyonları: ödeme, WhatsApp, CRM, e-fatura",
      "Kurumsal e-posta, arşiv ve kimlik doğrulama politikaları",
    ],
    benefits: [
      { title: "Kesinti süresinde düşüş", text: "Otomatik yedek, izleme ve hızlı geri yükleme ile kritik sorunlar dakika içinde yönetilir.", metric: "-%70" },
      { title: "Maliyet ve hız", text: "Statik/edge yayın ile altyapı maliyeti düşer, sayfa süreleri kısalır." },
      { title: "Yapay zekâ üretkenliğe döner", text: "Tekrarlayan sorular chatbot'ta, personel karmaşık işte kalır.", metric: "24/7" },
    ],
    audience: [
      { sector: "Büyüyen KOBİ'ler", note: "Tek kişilik IT yükünden kurtulmak isteyenler" },
      { sector: "E-ticaret", note: "Yoğun trafik, ödeme ve stok entegrasyonları" },
      { sector: "Kurumsal departmanlar", note: "Uyum, güvenlik ve kurumsal e-posta politikası" },
      { sector: "Ürün ekipleri", note: "AI özellik eklemek isteyen ama altyapısı olmayan ekipler" },
    ],
    whyUs: [
      { title: "Geliştirici gözüyle altyapı", text: "Yayın hattını kod tarafıyla birlikte tasarlıyoruz; 'çalışıyor' ile 'ölçülü ve geri alınabilir' arasındaki farkı biz kapatırız." },
      { title: "Dokümante edilmiş sistem", text: "Teslimde mimari şeması, kayıt envanteri ve acil durum kartı bırakılır." },
      { title: "AI'ı üretime bağlıyoruz", text: "Model seçimi, bilgi tabanı, kalite ölçümü ve insan devri; demo değil, işletilen sistem." },
      { title: "Sabırlı bakım ortağı", text: "Aylık bakım anlaşması ile izleme, güncelleme ve iyileştirme süreklidir." },
    ],
    faq: [
      { q: "Mevcut hosting'imizi değiştirmek zorunda mıyız?", a: "Hayır. Önce mevcut kurulumu denetleriz; taşımaya değecek bir kazanç varsa Vercel/Cloudflare hattına geçeriz, yoksa yerinde iyileştirme yaparız." },
      { q: "AI chatbot yanlış bilgi verir mi?", a: "Kurumsal bilgi tabanına bağlı (RAG) kurulumda model yalnızca verilen kaynaklardan yanıtlar, kaynak gösterir ve emin olmadığında insan devrine yönlendirir." },
      { q: "Yedekleme nasıl doğrulanıyor?", a: "Ayda bir geri yükleme tatbikatı yapılır ve süresi raporlanır. Doğrulanmamış yedek, yedek sayılmaz." },
      { q: "E-posta deliverability sorununu çözer misiniz?", a: "SPF, DKIM, DMARC ve kayıt hizalama kurulumu + gönderim testi ile çoğu sorun ilk hafta içinde çözülür." },
    ],
  },
]

export const categoryById = Object.fromEntries(
  serviceCategories.map((c) => [c.id, c]),
) as Record<CategoryId, ServiceCategory>

export const homeCategoryBlurb: Record<CategoryId, string> = {
  web: "Kurumsal site, e-ticaret ve landing page — hızlı, ölçülebilir, SEO uyumlu.",
  "ozel-yazilim": "CRM, iş takip, stok ve raporlama; Excel'den panele geçiş.",
  saas: "MVP'den çok kiracılı platforma; abonelik, panel ve faturalama.",
  seo: "Teknik SEO, lokal SEO, schema ve içerik mimarisi ile görünürlük.",
  "it-ai": "DNS, hosting, CDN, kurumsal e-posta, API ve AI chatbot.",
}
