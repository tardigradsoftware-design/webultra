import type { ServiceContent } from "@/types/content"

/** Pilot içerikler (devam): CRM, Teknik SEO, AI Chatbot */
export const pilotContents2: Record<string, ServiceContent> = {
  crm: {
    h1: "CRM Nedir? Müşteri İlişkilerini Tek Kayıttan Yönetmek",
    definition: [
      "CRM (müşteri ilişkileri yönetimi), bir firmanın müşteriyle temas ettiği her anı tek bir kayıtta toplayan sistemdir: kim, ne zaman, hangi ürün için fiyat aldı; teklif hangi aşamada; ödeme ne durumda; şikâyet açıldı mı, kapatıldı mı. Kelimenin teknik karşısı basit bir veritabanı, işletme karşılığı ise satışın ve hizmetin kaybolmamasıdır.",
      "Hazır paket CRM'ler bu kaydı standart bir şablonla sunar. Kurumunuza uymadığında üç yol vardır: süreci CRM'e uydurmak (ekip direnir, veri kirlenir), ekstra modül satın almak (maliyet artar) ya da kendi sürecinize göre tasarlanmış bir CRM kurmak. Tardigrad Software olarak üçüncü yolu öneriyoruz; çünkü satış ve saha süreçleri rekabet avantajınızın kendisidir, bir yazılımın varsayılanına devredilmemeli.",
      "Kurduğumuz CRM; müşteri ve firma kartları, fırsat/pipeline yönetimi, teklif ve sipariş bağlantısı, saha ziyareti kaydı, e-posta ve WhatsApp entegrasyonu, rol bazlı yetki ve yönetim raporlarını içerir. Veri tabanı PostgreSQL'de, arayüz Next.js + Tailwind + shadcn/ui ile; yani panel hem hızlı hem de ileride büyütmeye açık.",
    ],
    sections: {
      whyNeeded: {
        id: "neden-gerekli",
        h2: "CRM Olmadan Ne Kaybediyorsunuz?",
        paragraphs: [
          "CRM eksikliğinin bedeli genellikle “yazılım eksiği” olarak değil, kaçan iş ve kayıp müşteri olarak ödenir. Aşağıdaki dört tablo, CRM projesi için gelen firmalarda ölçtüğümüz başlangıç durumlarıdır.",
        ],
        bullets: [
          { title: "Satışçı ayrılınca müşteri de ayrılır", text: "Tüm ilişki kişisel telefon rehberinde ve WhatsApp geçmişinde duruyorsa, işten ayrılma = müşteri kaybı riski demektir." },
          { title: "Teklif havada kalıyor", text: "Kaç teklif verdiniz, kaçı geri döndü, hangisi neden kaybedildi? Cevap yoksa satış hattı yönetilmiyor, tahmin ediliyor demektir." },
          { title: "Aynı müşteriye iki farklı fiyat", text: "Müşteri kartı tek kaynak olmadığı için indirim yetkisi, geçmiş fiyat ve vade bilgisi ekip arasında dağılır." },
          { title: "Saha kayıtları telefonda kalıyor", text: "Ziyaret notu, fotoğraf ve imza WhatsApp'ta kaybolur; ay sonunda rapor elle toplanırken tartışma çıkar." },
        ],
      },
      scope: {
        id: "ne-alirsiniz",
        h2: "CRM Paket Kapsamı",
        checklist: [
          "Müşteri/firma kartı: iletişim, sektör, segment, etiket, sahib (owner) ve temas geçmişi",
          "Fırsat ve pipeline yönetimi: aşamalar, kazanma olasılığı, beklenen kapanış tarihi",
          "Teklif modülü: fiyat listesinden saniyeler içinde PDF teklif, sürüm ve onay akışı",
          "Saha ziyareti kaydı: konum, foto, imza, sonraki adım ve hatırlatma",
          "Görev ve iş emri: satış sonrası işlerin satış kaydına bağlanması",
          "E-posta ve WhatsApp entegrasyonu: gönderimlerin müşteri kartına otomatik düşmesi",
          "Rol bazlı yetki ve veri erişimi: bölge, ekip ve yönetici seviyeleri",
          "Yönetim paneli: boru hattı, hedef/gerçekleşen, kaynak analizi ve aktivite raporları",
          "Mevcut Excel/muhasebe verisinin temizlenip içe aktarılması (dedupe + eşleme raporu)",
          "Mobil uyumlu panel ve saha için hızlı giriş ekranları",
          "Audit log: kim neyi değiştirdi kaydı ve geri alma imkânı",
          "Kullanıcı eğitimi, kısa video dokümantasyon ve 30 gün hiperbakım",
        ],
      },
      process: {
        id: "nasil-calisiriz",
        h2: "CRM Kurulum Süreci: 8 Adım",
        steps: [
          { title: "1. Süreç görüşmesi", text: "Satış, saha ve müşteri hizmetleri akışları tek tek çıkarılır; “bugün nasıl yapıyoruz” sorusunun cevabı yazılır. Çıktı: mevcut akış diyagramı." },
          { title: "2. Metrik ve hedef tanımı", text: "CRM'in başarısı hangi sayıyla ölçülecek? (tepki süresi, teklif kapanma oranı, ziyaret başına kayıt kalitesi). Çıktı: 3-5 hedef metrik." },
          { title: "3. Veri modeli", text: "Müşteri, fırsat, teklif, aktivite ve kullanıcı ilişkileri; mevcut Excel/muhasebe alanlarıyla eşlenir. Çıktı: şema taslağı ve eşleme tablosu." },
          { title: "4. Arayüz ve ekran seti", text: "Satışçının günde 40 kez kullanacağı ekranlar önceliklendirilir; yönetici panelleri sonra gelir. Çıktı: tıklanabilir prototip." },
          { title: "5. Geliştirme", text: "Next.js + PostgreSQL ile panel; rol/yetki, bildirim ve entegrasyon katmanları. Çıktı: staging'de canlı veri akışı." },
          { title: "6. Veri migrasyonu", text: "Eski kayıtlar temizlenir, tekrarlar birleştirilir, alanlar eşlenir ve doğrulama raporu çıkarılır. Çıktı: taşınmış, sayısal olarak tutan veri." },
          { title: "7. Pilot ekip ve eğitim", text: "Önce 5-8 kişilik pilot grup kullanır; 2 hafta sonra gerçek gözlemlerle ekranlar sadeleştirilir. Çıktı: benimsemiş kullanıcı grubu." },
          { title: "8. Yaygınlaştırma ve gelişim sprintleri", text: "Tüm ekibe açılır; ardından çeyreklik sprintlerle yeni modül (hizmet, sözleşme, tahsilat) eklenir. Çıktı: büyüyen sistem." },
        ],
      },
      benefits: {
        id: "faydalar",
        h2: "CRM'in Sayısal Karşılığı",
        bullets: [
          { title: "Teklif takibinden gelen ilave satış", text: "Cevap bekleyen tekliflerin hatırlatılması ve aşama takibi; kapanma oranını doğrudan etkiler.", metric: "+%15-30" },
          { title: "Satışçı başına daha az idari iş", text: "Rapor, teklif ve ziyaret kaydının otomasyonu ile haftada kişi başı 3-6 saat satışa döner.", metric: "3-6 saat/hafta" },
          { title: "Hızlı tepki süresi", text: "Yeni talebe ilk dönüş süresi dakikalara iner; ilk dönenin kazanma şansı belirgin yüksektir.", metric: "<30 dk" },
          { title: "Doğru tahmin", text: "Boru hattı verisi gerçek aşamalarla dolduğu için ay/çeyrek tahmini varsayımdan veriye geçer." },
          { title: "Kurumsal bellek", text: "Müşteri geçmişi kişide değil sistemde durur; devir teslim bir Excel dosyası değil, tek tık olur." },
        ],
        metrics: [
          { value: "1", label: "müşteri veri kaynağı" },
          { value: "8", label: "adımlı kurulum" },
          { value: "2 hf", label: "pilot ekip süresi" },
          { value: "%100", label: "değişiklik geçmişi (audit log)" },
        ],
      },
      audience: {
        id: "kimler-icin",
        h2: "Hangi Firmalar İçin Uygun?",
        bullets: [
          { title: "Saha ekibi olan firmalar", text: "Ziyaret, iş emri ve numune takibi telefon trafiğiyle yürütülüyorsa." },
          { title: "Teklifle satanlar", text: "Proje, taahhüt, danışmanlık ve üretim firmalarında teklif hacmi yüksekse." },
          { title: "Bayii ağı yönetenler", text: "Bayiye özel fiyat, stok ve sipariş akışı gereken üretici/toptancılar." },
          { title: "Abone/müşteri sadeliği kritik olanlar", text: "Hizmet sektörü: yenileme takibi, hatırlatma ve şikâyet yönetimi zorunluysa." },
          { title: "Hazır CRM'e sığmayanlar", text: "Paketi kullandı ama süreçlerine uymadığı için Excel'e geri dönen ekipler." },
        ],
      },
      whyUs: {
        id: "neden-tardigrad",
        h2: "Neden Tardigrad Software ile CRM?",
        bullets: [
          { title: "Önce süreç, sonra ekran", text: "Koda geçmeden mevcut akışı ve hedef metriği sayıya bağlıyoruz. Başarı kriteri “panelin açılması” değil, değişen davranıştır." },
          { title: "Modüler başlangıç", text: "Tek seferde 12 modüllük canavar yerine, 3-4 haftada canlıya alınan müşteri kartı + fırsat + teklif seti; sonra sırayla eklenen modüller." },
          { title: "Entegrasyon yeteneği", text: "Muhasebe/e-fatura, WhatsApp Business API, santral/VOIP ve takvim bağlantılarını panelin içine gömüyoruz; dışı boş kalan bir CRM bırakmıyoruz." },
          { title: "Veri sizde, kilit yok", text: "PostgreSQL şemanız ve kod deposu sizin. Dışa aktarım her zaman açık; yarın başka bir ekibe devredebilirsiniz." },
        ],
      },
      faq: {
        id: "sss",
        h2: "CRM Hakkında Sıkça Sorulanlar",
        faq: [
          { q: "Hazır bir CRM (Satışforce, HubSpot, Zoho) yerine neden özel yazılım?", a: "Üç sorudan birine “evet” diyorsanız özel yazılım mantıklıdır: (1) Süreçleriniz paketin akışına uymuyor ve kullanıcı zorlanıyor; (2) Muhasebe/üretim gibi kendi sistemlerinizle derin entegrasyon gerekiyor; (3) Kullanıcı başı lisans maliyeti, ekip büyüdükçe kabul edilemez hâle geliyor. Uyumluysanız hazır paket öneririz; biz de kuruyoruz." },
          { q: "Kendi ekibimizle hazır CRM kullanmak istiyoruz, siz ne yapıyorsunuz?", a: "Bu durumda işi satış yapmıyoruz. Mevcut paketin kurulumu, alan eşlemesi ve otomasyonları için danışmanlık veriyoruz; özel geliştirmeye ihtiyaç doğduğunda (ör. mobil saha uygulaması) parçayı biz yazıyoruz." },
          { q: "Veri güvenliği ve KVKK nasıl ele alınıyor?", a: "Rol bazlı erişim, alan bazlı maskeleme (TCKN, kart bilgisi), şifreli yedekleme, audit log ve açık rıza kayıtları standart. Veri saklama süreleri ve silme politikası birlikte tanımlanır; KVKK aydınlatma metinleri panele bağlanır." },
          { q: "Eski Excel kayıtlarımızı taşır mısınız?", a: "Evet. Alan eşleme tablosu çıkarır, tekrarları birleştirir, bozuk kayıtları ayırıp raporlarız. Genellikle 1-2 haftalık bir migrasyon sprinti gerekir ve doğrulama raporu olmadan canlıya geçmeyiz." },
          { q: "Kullanıcılar alışır mı? En büyük risk nedir?", a: "En büyük risk, satışçının gün boyu kullanacağı ekranların ağır olması. Bu yüzden mobil öncelikli, tek ekrana sığan kayıt formları ve otomatik doldurma (konum, tarih, müşteri) kuruyoruz; zorunlu alan sayısını düşük tutuyoruz. Benimseme için pilot ekip aşaması zorunludur." },
          { q: "Maliyet ve süre nasıl?", a: "Kapsama göre tipik süre 6-12 hafta, maliyet modül sayısı, kullanıcı sayısı ve entegrasyon derinliği ile belirlenir. Hazır paketlerin yıllık lisans toplamı ile özel yazılımın ilk 3 yıl toplam sahip olma maliyetini karşılaştıran tabloyu teklif ile birlikte veriyoruz." },
        ],
      },
      internal: {
        id: "ilgili-hizmetler",
        h2: "CRM'i Tamamlayan Hizmetler",
        paragraphs: [
          "CRM tek başına bir panel değildir; teklif, sipariş, stok ve iletişim kanallarıyla birlikte çalıştığında değer üretir. Aşağıdaki hizmet sayfaları bu bağlantıları kurar.",
        ],
      },
    },
    ctaTitle: "CRM ihtiyaç analizi için görüşelim",
    ctaText:
      "Satış ve saha akışınızı 45 dakikada çıkarıyor, kaç teklifin neden kaybolduğunu sayıya bağlıyoruz. Ardından kapsam, kullanıcı sayısı ve takvimle tek fiyat geliyor.",
  },

  "teknik-seo": {
    h1: "Teknik SEO Nedir? Sitenin Altyapısını Arama Motoruna Hazırlamak",
    definition: [
      "Teknik SEO, bir web sitesinin arama motorları tarafından doğru taranması, anlaşılması, indekslenmesi ve kullanıcıya hızlı sunulması için yapılan altyapı çalışmalarıdır. İçerik ve backlink'in ön koşuldur; çünkü taranmayan, yavaş veya kopya olan bir sayfaya yazılan en iyi metin de sonuç vermez. Kısaca Teknik SEO, “sitenizin arama motoruyla konuşma biçimi”dir.",
      "Kapsam dört ana eksende toplanır: taranabilirlik (robots, sitemap, tarama bütçesi, log analizi), indeks kalitesi (canonical, noindex, kopya ve ince içerik, pagination), sayfa içi mimari (başlık hiyerarşisi, URL yapısı, iç link, görsel alt metinleri) ve performans (Core Web Vitals: LCP, CLS, INP). Bunların üçü kod gerektirir; dördüncüsü sunucu/CDN ayarıdır.",
      "Tardigrad Software'in farkı, Teknik SEO'yu rapor olarak teslim etmemesidir. Denetimi biz çıkarır, düzeltmeleri de biz uygularız: Next.js'te metadata, sitemap/robots, şema, görsel optimizasyonu ve render stratejisi aynı ekip tarafından değiştirilir. Böylece “rapor var, aksiyon yok” kaybı yaşanmaz.",
    ],
    sections: {
      whyNeeded: {
        id: "neden-gerekli",
        h2: "Neden Teknik SEO Gerekli?",
        paragraphs: [
          "Türkiye'de ölçebildiğimiz çoğu sitede, organik trafiğin kaydı içerik eksikliğinden değil teknik engelden düşer. Aşağıdaki dört durum, denetimlerde en sık karşılaştığımız kayıp noktalarıdır.",
        ],
        bullets: [
          { title: "Sayfalar indekslenmiyor", text: "Yanlış noindex, eksik canonical, robots ile engellenmiş CSS/JS veya sitemap'e girmemiş URL'ler; üretilen içerik görünürlüğe dönüşmez." },
          { title: "Tarama bütçesi boşa harcanıyor", text: "Filtre ve parametre URL'leri, sonsuz dizinler ve kopya listelemeler, bütçeyi değersiz sayfalara tüketir; önemli sayfalar seyrek taranır." },
          { title: "Core Web Vitals kırmızıda", text: "Optimize edilmemiş görseller, render engelleyen scriptler ve ağır eklentiler; hem sıralamayı hem dönüşümü düşürür." },
          { title: "Yapısal veri yok", text: "Organization, Service, FAQ, Breadcrumb ve Product şemaları olmadan Google sayfanızı zengin sonuçta göstermez; tıklama oranı baskılanır." },
        ],
        miniCta: "15 maddelik hızlı teknik tarama raporu, ücretlendirmeden önce paylaşılır.",
      },
      scope: {
        id: "ne-alirsiniz",
        h2: "Teknik SEO Hizmet Kapsamı",
        checklist: [
          "Tam teknik denetim: indeksleme, tarama, kopya/ince içerik, kırık ve yönlendirme zincirleri",
          "Log dosyası ve Search Console analizi ile tarama bütçesi planı",
          "Core Web Vitals iyileştirmesi: LCP kaynağı, CLS iticileri, INP engelleri ve düzeltme listesi",
          "URL ve canonical mimarisi: varyant yönetimi, pagination, parametre kuralları",
          "XML/News/Image sitemap ve robots stratejisi, otomasyonu",
          "Schema.org JSON-LD kurulumu: Organization, ProfessionalService, Service, FAQPage, BreadcrumbList, Product, LocalBusiness",
          "İçerik ve başlık mimarisi: küme (cluster) yapısı, H1-H3 hiyerarşisi, iç link planı",
          "Görsel SEO: WebP/AVIF, boyut, alt metin ve dosya adı standardı",
          "Çok dilli/çok bölgeli sitelerde hreflang ve bölgesel sayfa ailesi kurulumu",
          "Uygulama: kod tarafında değişiklik, staging doğrulama ve yayına alma",
          "Ölçüm: Search Console + GA4 raporlama paneli ve aylık iyileştirme listesi",
          "Ekip eğitimi: yeni eklenecek her sayfa için SEO kontrol listesi ve şablon",
        ],
      },
      process: {
        id: "nasil-calisiriz",
        h2: "Teknik SEO Süreci: 9 Adım",
        steps: [
          { title: "1. Hedef ve rekabet analizi", text: "Kazanılacak sorgular, sayfa eşlemesi ve rakip sitelerin teknik avantajları çıkarılır." },
          { title: "2. Denetim (crawl + veri)", text: "Sitemiz Log, Search Console, GA4, Lighthouse ve crawl araçlarıyla taranır; sorunlar etki/çaba matrisine dizilir." },
          { title: "3. Önceliklendirme planı", text: "İlk sprintte “yüksek etki, düşük çaba” maddeleri yapılır; takvim ve sorumlu netleşir." },
          { title: "4. Mimari kararlar", text: "URL taksonomisi, küme yapısı, pagination ve iç link stratejisi yazılı kurala bağlanır." },
          { title: "5. Kod tarafı uygulama", text: "Metadata, canonical, robots, sitemap, schema ve render stratejisi Next.js tarafında uygulanır; performans düzeltmeleri yapılır." },
          { title: "6. Doğrulama", text: "Zengin sonuç testleri, indeksleme isteği, Lighthouse ve mobil testler; staging üzerinden yayın öncesi kontrol." },
          { title: "7. Yayın ve izleme", text: "Değişiklikler yayına alınır, 7-14 günlük gösterim/tıklama verisi izlenir; geri alma planı hazırdır." },
          { title: "8. İçerik ve lokal genişletme", text: "Hizmet × şehir sayfa ailesi, blog/klaster içerikleri ve iç link ile otorite tabanı büyütülür." },
          { title: "9. Aylık rapor ve borç yönetimi", text: "Yeni sayfaların SEO kontrol listesi, teknik borç takibi ve çeyreklik derin denetim ile iyileşme sürdürülür." },
        ],
      },
      benefits: {
        id: "faydalar",
        h2: "Faydalar: Teknik SEO'nun Ölçülebilir Karşılığı",
        bullets: [
          { title: "Daha fazla taranan ve indekslenen sayfa", text: "Tarama bütçesi değeri olan sayfalara yöneldiğinde, indekslenen URL sayısı artar; uzun kuyruk sorgularından trafik gelmeye başlar.", metric: "+%40-80 indeks" },
          { title: "Hızda artış, dönüşümde artış", text: "LCP'nin 2.5 saniyenin altına inmesi mobil dönüşüm oranını tipik olarak çift haneli iyileştirir.", metric: "+%10-20" },
          { title: "Zengin sonuç görünürlüğü", text: "FAQ, Breadcrumb ve Service şemaları ile arama sonucunda ek satırlar alınır; tıklama oranı yükselir.", metric: "+%8-15 CTR" },
          { title: "Reklam bütçesine bağımlılığın azalması", text: "Organik kanaldan gelen nitelikli ziyaretçi arttıkça, aynı iş için gereken tıklama maliyeti düşer." },
          { title: "Kalıcı altyapı", text: "Tek seferlik düzeltme değil; yeni eklenen her sayfanın otomatik doğru kurulumu. Teknik borç birikmez." },
        ],
        metrics: [
          { value: "<2.5s", label: "LCP hedefi" },
          { value: "<0.1", label: "CLS hedefi" },
          { value: "<200ms", label: "INP hedefi" },
          { value: "2-6 hf", label: "teknik etkinin okunma süresi" },
        ],
      },
      audience: {
        id: "kimler-icin",
        h2: "Kimler İçin Uygun?",
        bullets: [
          { title: "Yeni site kuran firmalar", text: "Mimari hatalarını sonradan sökmeden, doğru kurulumla başlamak isteyenler." },
          { title: "Trafik düşüşü yaşayanlar", text: "Gösterim/sayfa sayısı düşen, indeksleme hatası artan siteler; ilk iş teknik nedenleri elemektir." },
          { title: "E-ticaret siteleri", text: "Binlerce kategori/ürün/varyant URL'i olan, kopya ve indeksleme sorunu yaşayan mağazalar." },
          { title: "Kurumsal 50+ sayfalık siteler", text: "Sayfa ekledikçe iç link ve başlık hiyerarşisi bozulan siteler." },
          { title: "SaaS ve ürün siteleri", text: "Rakip yoğunluğunda teknik avantaj arayan ve içerik üretimini ölçeklemek isteyen ekipler." },
        ],
      },
      whyUs: {
        id: "neden-tardigrad",
        h2: "Neden Tardigrad Software ile Teknik SEO?",
        bullets: [
          { title: "Raporu yazan, kodu da yazan ekip", text: "Denetim bulgularını geliştiriciye bırakıp kaybolmuyor; metadata, sitemap, schema ve hız düzeltmelerini biz uyguluyoruz." },
          { title: "Frontend + SEO birlikte", text: "Render stratejisi (SSG/ISR/SSR), cache ve CDN ayarları SEO kararlarıyla birlikte veriliyor; bu ikili genelde ayrı ekiplerde çakışır." },
          { title: "Ölçeklenebilir sayfa ailesi", text: "Hizmet × ilçe/şehir sayfalarını şablon + veri ile kuruyoruz; 43 sayfa da 4.300 sayfa da aynı mimariyle üretiliyor." },
          { title: "Doğrulanmış yapısal veri", text: "Şemaları tahminle değil, doğrulama araçlarından geçirerek ve içeriğin birebir aynısı olarak yayınlıyoruz." },
        ],
      },
      faq: {
        id: "sss",
        h2: "Teknik SEO Hakkında Sıkça Sorulanlar",
        faq: [
          { q: "Teknik SEO ile içerik SEO'su arasındaki fark nedir?", a: "Teknik SEO, sitenin arama motoru tarafından doğru okunabilir ve hızlı sunulabilir hâle getirilmesidir (tarama, indeksleme, hız, şema, mimari). İçerik SEO'su ise hangi soruya, hangi sayfada, hangi derinlikte cevap verileceğini kurgular. İkisi sıralı çalışır: teknik zemin düzelmeden içerik yatırımı tam geri dönmez." },
          { q: "Sonuçları ne kadar sürede görürüz?", a: "İndeksleme ve hız etkisi çoğu sitede 2-6 hafta içinde Search Console verisinde okunur. İçerik, otorite ve sayfa ailesinin birikimi 3-9 ay arası etki üretir. Takvimi bu iki katmana göre ayrı planlıyoruz." },
          { q: "Anahtar kelime garantisi veriyor musunuz?", a: "Hayır; sıralama garantisi veren hiçbir yöntem kalıcı değildir ve çoğu politik ihlale dayanır. Verdiğimiz söz şudur: denetlenmiş ve uygulanmış teknik altyapı, doğrulanmış yapısal veri, önceliklendirilmiş yol haritası ve şeffaf raporlama." },
          { q: "Core Web Vitals'da hedefiniz ne?", a: "Mobil ve masaüstünde LCP < 2.5s, CLS < 0.1, INP < 200ms. Bu üç hedefi sayfa şablonu başına yazılı hız bütçesi olarak belirliyor, yayında Lighthouse ve gerçek kullanıcı verisi (CrUX) ile izliyoruz." },
          { q: "Siteyi taşımak zorunda kalır mıyız?", a: "Genellikle hayır. Önce mevcut altyapıda düzeltilebilecekler yapılır; CMS veya framework taşınması ancak hız ve ölçek açısından ölçülebilir kazanç varsa önerilir. Taşımada 301 planı zorunludur." },
          { q: "Aylık mı, proje bazlı mı çalışıyorsunuz?", a: "İki model de var. İlk kurulum proje bazlı (denetim + uygulama), sonrasında isteğe bağlı aylık bakım anlaşması: izleme, teknik borç yönetimi, yeni sayfa aileleri ve çeyreklik derin denetim." },
          { q: "Kendi içerik ekibimizle çalışabilir miyiz?", a: "Evet. Şablon, kontrol listesi ve yazım kurallarını ekiplere devrediyoruz; biz önceliklendirme, denetim ve uygulama tarafında kalıyoruz. Bu model genelde en hızlı büyüyen modeldir." },
        ],
      },
      internal: {
        id: "ilgili-hizmetler",
        h2: "Teknik SEO ile Birlikte Çalışan Hizmetler",
        paragraphs: [
          "Teknik SEO, sayfa mimarisi, lokal SEO ve yapısal veri ile birlikte düşünüldüğünde kalıcı hâle gelir. Aşağıdaki sayfalar bu parçaları tamamlıyor; il sayfaları ise yerel görünürlük planının adresidir.",
        ],
      },
    },
    ctaTitle: "Siteniz için ücretsiz hızlı teknik tarama",
    ctaText:
      "20 dakikalık görüşmede indekslenme, hız ve şema başlıklarını tarayıp önceliklendirilmiş bir borç listesi veriyoruz; kapsam ve takvim aynı hafta yazılı gelir.",
  },

  "ai-chatbot": {
    h1: "AI Chatbot Nedir? Kurumsal Bilgiyle Çalışan Dijital Asistan",
    definition: [
      "AI chatbot, kullanıcıların yazılı veya sesli sorularını yapay zekâ modeliyle anlayıp yanıtlayan dijital destek asistanıdır. Sitede, WhatsApp'ta, mobil uygulamada ya da iç sistemlerde çalışabilir; hedefi tek cümledir: tekrarlayan ve önceden bilinen soruları insan kaynağına bırakmadan çözmek, karmaşık kalanı doğru kişiye devretmek.",
      "Kurgumuz “model aç, bağla” şeklinde değil. Chatbot'un doğru cevap vermesi, hangi bilgi tabanına bağlı olduğuna ve nasıl doğrulandığına bağlıdır. Bu yüzden önce SSS, hizmet sayfası, fiyat/kapsam dokümanı, politika metinleri ve geçmiş ticket'lardan oluşan kaynak katmanı temizlenir; ardından RAG (retrieval augmented generation) ile model yalnızca bu kaynaklardan üretir, yanıtında kaynak gösterir ve emin olmadığında insan devrine geçer.",
      "Tardigrad Software olarak chatbot'u kurumsal web sitesi, CRM ve WhatsApp Business API hattıyla birlikte tasarlıyoruz. Böylece sohbet, kayıtsız bir konuşma olmaktan çıkar; müşteri kartına, talep kaydına ve satış hattına bağlanır. Ölçüm (çözülen oranı, devir nedeni, memnuniyet) ilk günden kurulur.",
    ],
    sections: {
      whyNeeded: {
        id: "neden-gerekli",
        h2: "Neden AI Chatbot?",
        paragraphs: [
          "Çoğu şirkette destek ve satış ekibinin zamanının önemli bir kısmı aynı 20 soruya cevap vermekle geçer. Bu işi modele devretmek, ekibi asıl işine döndürür. Aşağıdaki dört tablo, chatbot projesi için gelen firmaların tipik başlangıç noktasıdır.",
        ],
        bullets: [
          { title: "Mesai dışı talepler birikiyor", text: "Akşam ve hafta sonu gelen sorular, sabah yığına ve geç dönüşlere dönüşür; müşteri ilk yanıt verenle ilerler." },
          { title: "Aynı soru, beş farklı cevap", text: "Fiyat, kapsam ve politika soruları kişiden kişiye değişince, müşteri haklı olarak güven kaybeder." },
          { title: "Site içeriğiyle bot kopuk", text: "Sitede yazanla bota yazan farklıysa, kullanıcı “bot da bilmiyor” sonucuna varır ve formu bırakır." },
          { title: "Ölçüm yok", text: "Kaç soru geldi, kaçı çözüldü, kaçı insana düştü bilinmiyorsa yatırımın geri dönüşü tartışılır kalır." },
        ],
      },
      scope: {
        id: "ne-alirsiniz",
        h2: "AI Chatbot Projesi Kapsamı",
        checklist: [
          "Kaynak analizi ve bilgi tabanı hazırlığı (SSS, hizmet sayfaları, politika ve süreç dokümanları)",
          "RAG altyapısı: döküman bölme, vektör arama ve kaynak gösterimli yanıt üretimi",
          "Marka tonu ve cevap kuralları: neyi bilir, neyi bilmez, ne zaman devreder",
          "Web widget'ı ve mobil uyumlu sohbet arayüzü (shadcn/ui tabanlı, sitenin tasarım diliyle birebir)",
          "WhatsApp Business API veya Instagram/Telegram kanalı entegrasyonu",
          "İnsan devri: canlı desteğe veya CRM ticket'a bağlama, bağlam aktarımı",
          "Form ve randevu akışı: bot içinde ön eleme, form doldurma ve takvim bağlantısı",
          "Çok dilli kurulum (Türkçe/İngilizce) ve dil algılama",
          "Yetki ve kişisel veri güvenliği: maskeleme, saklama süresi, KVKK onay akışı",
          "Ölçüm paneli: çözülme oranı, devir nedeni, memnuniyet, en sık sorular",
          "Süreklilik: sohbet loglarının arşivi ve aylık iyileştirme döngüsü",
          "Test ve kalite kapıları: halüsinasyon, tutarsızlık ve hassas soru testleri",
        ],
      },
      process: {
        id: "nasil-calisiriz",
        h2: "AI Chatbot Geliştirme Süreci: 8 Adım",
        steps: [
          { title: "1. Kullanım senaryosu ve hedef metrik", text: "Bot hangi sorunu çözecek ve başarı neyle ölçülecek? (ör. ilk yanıt süresi, çözülme oranı, form tamamlama). Çıktı: tek sayfalık hedef tanımı." },
          { title: "2. Soru madeni", text: "Gerçek geçmiş sorular (e-posta, WhatsApp, ticket) sınıflandırılır; ilk sürümde çözülecek soru listesi belirlenir." },
          { title: "3. Bilgi tabanı", text: "Dokümanlar temizlenir, bölünür ve sürümlenir; hangi bilginin kaynak olduğu netleştirilir. Çıktı: indekslenebilir bilgi seti." },
          { title: "4. Diyalog tasarımı", text: "Yanıt tonu, boşlukta davranış, devir ve onay kuralları yazılır; kötü senaryolar (küfür, veri isteği, hukuki soru) tasarlanır." },
          { title: "5. Geliştirme ve entegrasyon", text: "Model ve vektör arama katmanı, web widget'ı, WhatsApp/CRM bağlantıları ve güvenlik kuralları kodlanır." },
          { title: "6. Kalite değerlendirmesi", text: "Gerçek sorulardan test seti ile yanıt doğruluğu ölçülür; halüsinasyon ve kaynak eksikliği giderilene kadar iterasyon yapılır." },
          { title: "7. Yumuşak açılış", text: "Önce trafiğin bir kısmına (ör. %20) veya tek kanala açılır; günlük gözden geçirme ile kural ve metinler düzeltilir." },
          { title: "8. Ölçüm ve büyüme", text: "Kapanmayan sorular yeni bilgi tabanı maddelerine dönüşür; ikinci fazda randevu, sipariş durumu veya iç sistem sorguları eklenir." },
        ],
      },
      benefits: {
        id: "faydalar",
        h2: "Faydalar: Chatbot'un Getirdiği",
        bullets: [
          { title: "Anında ilk yanıt", text: "Bekleme süresi sıfıra iner; mesai dışı talepler kaybolmaz.", metric: "24/7" },
          { title: "Ekip zamanı boşalır", text: "Tekrarlayan soruların önemli kısmı bot tarafından kapatılır; insan karmaşık işe odaklanır.", metric: "%30-60 azalma" },
          { title: "Tutarlı ve kaynaklı bilgi", text: "Her yanıt kurumsal dokümana bağlanır; kişiden kişiye değişen cevap dönemi biter." },
          { title: "Daha fazla tamamlanan form", text: "Bot ön eleme ve yönlendirme yaptığı için, gelen talebin kalitesi ve tamamlanma oranı artar.", metric: "+%15" },
          { title: "Sorulardan ürün fikri çıkar", text: "En sık sorulan ama kaynakta olmayan konular, içerik ve hizmet geliştirme için doğrudan sinyaldir." },
        ],
        metrics: [
          { value: "<10sn", label: "ortalama ilk yanıt" },
          { value: "2", label: "dil (tr/en) desteği" },
          { value: "%80", label: "kaynak gösterimli yanıt" },
          { value: "30 gün", label: "kalite iyileştirme döngüsü" },
        ],
      },
      audience: {
        id: "kimler-icin",
        h2: "Kimler İçin Uygun?",
        bullets: [
          { title: "Yoğun ön bilgilendirme alan firmalar", text: "Süreç, fiyat aralığı ve belgeleri sorulan; telefon/mesaj trafiği yüksek hizmet işletmeleri." },
          { title: "E-ticaret ve satış sonrası", text: "Kargo, iade, garanti ve stok durumu sorularını otomatikleştirmek isteyen mağazalar." },
          { title: "Sağlık, eğitim ve randevulu işler", text: "Randevu alma, iptal ve bilgilendirme akışını tek yerde yönetmek isteyen kurumlar." },
          { title: "Kurumsal içi kullanım", text: "İK, İT ve prosedür sorularını çalışanlara yanıtlayan iç asistan kurmak isteyen organizasyonlar." },
          { title: "B2B ve çözüm satanlar", text: "Potansiyel müşteriyi doğru satışçıya ve doğru soru setiyle yönlendirmek isteyen firmalar." },
        ],
      },
      whyUs: {
        id: "neden-tardigrad",
        h2: "Neden Tardigrad Software ile AI Chatbot?",
        bullets: [
          { title: "Demo değil, üretim", text: "Soyut bir sohbet deneyimi yerine, bilgi tabanına bağlı, ölçülen ve sahiplenilen bir sistem kuruyoruz." },
          { title: "Site + bot + CRM tek elde", text: "Widget'ı sitenizin tasarım diline, cevapları içerik yapınıza, kayıtları CRM'inize bağlıyoruz; üç ayrı satıcı arasında kaybolmuyor." },
          { title: "Halüsinasyonu yönetiyoruz", text: "Model yalnızca verilen kaynaklardan üretir, kaynak gösterir, emin değilse devreder. Test seti ve kalite kapıları olmadan yayına almıyoruz." },
          { title: "Veri kontrolü sizde", text: "Model seçimi (bulut API veya kendin-barındır), saklama süresi ve maskeleme kuralları birlikte belirlenir; sohbet verisinin akışı şeffaftır." },
        ],
      },
      faq: {
        id: "sss",
        h2: "AI Chatbot Hakkında Sıkça Sorulanlar",
        faq: [
          { q: "Chatbot yanlış bilgi verir mi, markama zarar verir mi?", a: "Kontrollü kurulumda risk düşüktür. Model yalnızca onayladığınız kaynaklardan yanıt üretir (RAG), her yanıtta kaynak gösterir, kapsam dışı sorularda “bilmiyorum” deyip insana devreder. Ayrıca yayından önce halüsinasyon, hassas veri ve hukuki/sağlık soruları test setiyle denenir." },
          { q: "Hangi modeli kullanıyorsunuz?", a: "İhtiyaca göre GPT-4o/4.1, Claude, Gemini veya açık kaynak modeller; bulut API ya da kuruma özel barındırma. Kriterler: doğruluk, maliyet, veri gizliliği ve Türkçe performansı. Model seçimini senaryoya göre birlikte yapıyor, gerekirse iki modeli karşılaştırıyoruz." },
          { q: "Maliyeti ne olur?", a: "İki kalem vardır: kurulum (bilgi tabanı, geliştirme, entegrasyon, test) ve çalışma maliyeti (token/çözüm başı model ücreti, barındırma, WhatsApp mesaj ücreti). Aylık konuşma hacmi tahmin edilerek toplam maliyet tablosu teklifte yazılır; tipik KOBİ kullanımında bulut API maliyeti, bir kişinin yarım günlük mesaisinden düşüktür." },
          { q: "WhatsApp'ta da çalışır mı?", a: "Evet. WhatsApp Business API üzerinden resmi hesapla çalışır; şablon mesaj kuralları, onay akışı ve mesai dışı davranışı birlikte kurgulanır. Web sitesi widget'ı ile aynı bilgi tabanını paylaşırlar." },
          { q: "Kendi sistemlerimize (CRM, stok, sipariş) bağlayabilir misiniz?", a: "Evet, araç çağrısı (function calling) ile: sipariş durumu sorgulama, randevu oluşturma, talep açma gibi eylemler güvenli API'larınız üzerinden yapılır. Yetki kontrolü ve loglama bu katmanda zorunludur." },
          { q: "Ne kadar sürede canlıya geçer?", a: "Tek kanallı, 60-150 arası soruyu kapsayan bir ilk sürüm için tipik süre 3-6 haftadır. Çok dilli, çok kanallı ve sistem entegrasyonlu kurulumlar 8-12 hafta sürer." },
          { q: "Ölçümlemeyi nasıl yapıyorsunuz?", a: "Kullanılan metrikler: çözülme oranı, insan devir oranı ve nedeni, ortalama tur sayısı, memnuniyet puanı, en sık gelen ve yanıtlanamayan sorular. Panel haftalık olarak ekip ile gözden geçirilir; kapatılamayan sorular bilgi tabanına eklenir." },
        ],
      },
      internal: {
        id: "ilgili-hizmetler",
        h2: "AI Chatbot ile Birlikte Kurulan Katmanlar",
        paragraphs: [
          "Chatbot'un kalitesi bilgi tabanının kalitesidir; bu yüzden içerik, SEO mimarisi ve entegrasyon işleri birlikte planlandığında sonuç belirginleşir. Aşağıdaki sayfalar bu parçaları anlatır.",
        ],
      },
    },
    ctaTitle: "Chatbot fizibilitesini birlikte yapalım",
    ctaText:
      "Geçmiş sorularınızdan 20 maddelik bir örnek set çıkarıyor, ilk sürümün kapsamını ve aylık maliyet tablosunu 30 dakikada netleştiriyoruz.",
  },
}
