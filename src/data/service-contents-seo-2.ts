import type { ServiceContent } from "@/types/content"

/**
 * FAZ 2 — grup 4b-ii: yapılandırılmış veri ve Search Console kurulumu.
 */
export const seoContents2: Record<string, ServiceContent> = {
  "schema-org-structured-data": {
    h1: "Schema.org / Yapılandırılmış Veri: Sayfanızı Makinece Okunur Kılmak",
    definition: [
      "Schema.org yapılandırılmış verisi, sayfadaki bilgilerin arama motoruna standart bir dille (JSON-LD) anlatılmasıdır: bu sayfa hangi varlığı (kurum, hizmet, ürün, kişi, etkinlik, makale) tanımlıyor; adres, fiyat, SSS, adım listesi ve puan nerede duruyor. Sayfa insan için yazılır; şema, aynı içeriği makine için de okunur kılar.",
      "Yaygın iki yanlış var. Birincisi, şemayı “SEO ayarı” sanmak: sayfa içeriğinde olmayan bir bilgiyi (ör. yıldız puanı) koda eklemek, manuel işlem riski üretir ve çoğu zaman zengin sonuç kazanımını kaybettirir. İkincisi, hiç kurmamak: özellikle hizmet, SSS ve breadcrumb tarafında bu, boşuna bir rekabet dezavantajıdır.",
      "Tardigrad Software olarak JSON-LD'yi statik üretimle, içerik verisinden türetiyoruz: her sayfa türü için şema şablonu, zorunlu/opsiyonel alanlar ve tutarlılık kontrolleri. Böylece sayfa şema ile içeriği arasında çelişki oluşmaz ve 500 sayfalık bir sitede bile kurulum tek yerden yönetilir.",
    ],
    sections: {
      whyNeeded: {
        id: "neden-gerekli",
        h2: "Şema Ne Kazandırır, Ne Kazandırmaz?",
        paragraphs: [
          "Şema, sıralamayı doğrudan yükselten bir “sihir” değildir; görünürlüğü ve tıklamayı etkiler. Kazandırdığı şey, sonucun arama sayfasında daha ayrıntılı ve doğru görünmesidir; kaybettirdiği şey ise yanlış kurulumun yarattığı güven ve denetim sorunudur.",
        ],
        bullets: [
          { title: "Zengin sonuçlar için ön koşul", text: "SSS, breadcrumb, ürün fiyatı, etkinlik tarihi gibi ek görünümler yapılandırılmış veri olmadan güvenilir biçimde üretilmez.", icon: "Sparkles" },
          { title: "Varlık anlama", text: "Aynı isimde üç firma/kişiyi ayırmak için Google, bağlantılı varlıkları şemadan okur; aynı kurum, adres ve logoyu tutarlı tanımlamak markayı netleştirir.", icon: "Network" },
          { title: "Kod/icerik tutarsızlığı riski", text: "İçerikte olmayan puan veya fiyatı şemaya yazmak, manuel işlem riski üretir. Biz bu kuralı otomatik denetliyoruz.", icon: "AlertTriangle" },
          { title: "Manuel bakım yükü", text: " Elle yazılan JSON-LD elli sayfada bayatlar; veriden türetilen şema kendiliğinden güncel kalır.", icon: "RefreshCw" },
        ],
        miniCta: "Sayfa türlerinizi listeleyin; hangisinde hangi şemanın gerekli olduğunu ve eksik alanları gösteren bir tablo çıkaralım.",
      },
      scope: {
        id: "paket-kapsami",
        h2: "Kurduğumuz Yapılandırılmış Veri Katmanı",
        checklist: [
          "Organization (veya ProfessionalService): logo, adres, telefon ve sameAs sosyal profil bağlantılarıyla site genelinde tutarlı tanım",
          "LocalBusiness / sektöre göre alt türler (MedicalBusiness, Restaurant, RealEstateAgent, HomeAndConstructionBusiness): adres, koordinat, çalışma saatleri, hizmet bölgesi",
          "Service + Offer: hizmet sayfasında sunulan iş, fiyat aralığı veya “teklif iste” CTA'sı, sunan kurum bağlantısı",
          "FAQPage ve HowTo/ServiceProcess: SSS blokları ve süreç adımlarının sayfadaki görünen metinle birebir eşleşmesi",
          "BreadcrumbList: menü hiyerarşisiyle uyumlu, her sayfada otomatik üretilen gezinme şeması",
          "Product / ItemList: e-ticaret ve katalog sayfalarında ürün ve liste şemaları, fiyat/stok güncelliği kuralı",
          "Article / BlogPosting: yazı sayfalarında yazar, yayınevi, tarih ve görsel bilgisi (blog fazında devreye alınır)",
          "WebSite + SearchAction: site içi arama bağlantısı ve marka odaklı yerel arama davranışı",
          "Entity eşleme: Organization ↔ WebSite ↔ yerel sayfalar ↔ hizmet sayfaları arasındaki @id referanslarıyla tek bilgi grafiği",
          "Doğrulama hattı: zengin sonuç testi, GSC durum raporu ve CI/derleme aşamasında tutarlılık kontrolü (şema alanı boşsa derleme uyarısı)",
          "Sürüm yönetimi: alan değişikliklerinin merkezi şablondan yapılması; sayfa bazında elle kod düzenleme ihtiyacının ortadan kalkması",
        ],
      },
      process: {
        id: "surec",
        h2: "Kurulum Süreci: 6 Adım",
        steps: [
          { title: "1. Sayfa türü envanteri (1-2 gün)", text: "Hangi tür sayfa var ve her biri hangi varlığı temsil ediyor? Çıktı: sayfa türü ↔ şema eşlemesi." },
          { title: "2. Alan denetimi (1-3 gün)", text: "Şemada yer alacak her alanın içerikte gerçekten bulunup bulunmadığı kontrol edilir. Çıktı: eksik alan listesi (SSS, adres, saat, fiyat politikası).",
          },
          { title: "3. Entity kimlik planı (0,5-1 gün)", text: "@id / sameAs yapısı ve Organization–WebSite–LocalBusiness ilişkileri tanımlanır. Çıktı: varlık grafiği." },
          { title: "4. Şablon geliştirme (2-6 gün)", text: "Veri katmanından JSON-LD üreten şablonlar ve sayfa bazlı besleme kurulur. Çıktı: otomatik şema üretimi." },
          { title: "5. Doğrulama ve test (1-2 gün)", text: "Zengin sonuç testleri, yapılandırılmış veri raporu ve CI kontrolü. Çıktı: 0 hata/uyarı listesi." },
          { title: "6. İzleme", text: "GSC “yapılandırılmış veri” ve “geliştirilmeler” raporları aylık okunur; yeni görünen hatalar kapatılır. Çıktı: aylık teknik not." },
        ],
      },
      benefits: {
        id: "faydalar",
        h2: "Ölçülebilir Etki",
        metrics: [
          { value: "+%10-30", label: "tıklama oranında zengin sonuç/breadcrumb görünürlüğü etkisi (gözlem)" },
          { value: "0", label: "kod-içerik çelişkisi: tutarlılık kontrolü derleme sırasında" },
          { value: "tek yer", label: "alan değişikliği 500 sayfaya aynı anda yansır" },
          { value: "1-2 hafta", label: "kurulum ve doğrulama süresi (mevcut içerikle)" },
        ],
        bullets: [
          { title: "Daha az tıklama kaybı", text: "SSS ve breadcrumb'lı sonuç, rakip sonuç arasında daha fazla güven verir; sıralama değişmeden trafik artabilir.", icon: "MousePointerClick" },
          { title: "Marka paneli tutarlılığı", text: "Logo, adres ve sosyal profil bağlantıları doğru eşlendiğinde bilgi paneli daha temiz beslenir.", icon: "BadgeCheck" },
          { title: "Yeni içerik hazır gelir", text: "Şablon çalıştığı için, blog ve yeni hizmet sayfaları doğru şemayla doğar; sonradan ekleme gerekmez.", icon: "Layers" },
          { title: "Hata erken görülür", text: "Tutarlılık kontrolü sayesinde, “yirmide on sekizi boş” alan yayınlanmadan yakalanır.", icon: "ShieldCheck" },
        ],
      },
      audience: {
        id: "kimler-icin",
        h2: "Kimler İçin Uygun?",
        bullets: [
          { title: "Yeni kurulan siteler", text: "Şema baştan kurulursa sonradan 500 sayfayı tek tek düzeltme maliyeti doğmaz.", icon: "Rocket" },
          { title: "Çok sayfalı/KOBİ katalog siteleri", text: "Şablon üretiminin farkının en büyük olduğu grup.", icon: "Package" },
          { title: "Yerel hizmet işletmeleri", text: "LocalBusiness + hizmet + SSS üçlüsü, yerel aramanın omurgası.", icon: "MapPin" },
          { title: "E-ticaret markaları", text: "Ürün ve liste sayfalarında Product/ItemList, doğru stok/fiyat politikasıyla.", icon: "ShoppingBag" },
        ],
      },
      whyUs: {
        id: "neden-biz",
        h2: "Neden Tardigrad Software?",
        bullets: [
          { title: "Şema veri katmanında üretilir", text: "İçerik modeli ve şema şablonu aynı yerde; böylece görsel değişiklik şemayı kırmaz.", icon: "Code2" },
          { title: "Manuel işlem riskine karşıyız", text: "İçerikte olmayanı yazmayız; bu, “zengin sonuç kazanalım” uğruna sıralama kaybetmenin tek yolu.", icon: "Shield" },
          { title: "Doğrulama otomasyonumuz var", text: "Site içi denetimimiz her sayfada şema varlığını ve JSON geçerliliğini kontrol eder (bu raporda “JSON-LD hatası: 0” satırı bundan geliyor).", icon: "LineChart" },
          { title: "Entegrasyonlarla uyumlu", text: "Yazı, hizmet, şehir ve ürün sayfaları tek şema mantığını paylaşır; site büyüdükçe kural bozulmaz.", icon: "Workflow" },
        ],
      },
      faq: {
        id: "sss",
        h2: "Yapılandırılmış Veri Hakkında Sıkça Sorulanlar",
        faq: [
          {
            q: "Hangi formatı kullanmalıyız: JSON-LD mi, microdata mı?",
            a: "JSON-LD önerilir ve pratikte Google'ın tercihi de bu: HTML'i kirletmez, JavaScript ile üretilse bile çalışır, tek yerde (şablon) yönetilir ve test araçlarında en az hata üretir. Microdata/RDFa sadece eski sistemlerde ve mecburiyet durumunda gündeme gelir.",
          },
          {
            q: "Şema kurmak sıralamayı yükseltir mi?",
            a: "Doğrudan bir sıralama faktörü değildir. Etkisi dolaylı ama ölçülebilir: zengin sonuç ve daha doğru görünürlük tıklamayı artırır, bilgi grafiği eşleşmesi marka sorgularında netlik sağlar, hatalı veri ise risk yaratır. Asıl kazanan, içerik + mimari + hız ile birlikte çalıştığında ortaya çıkar.",
          },
          {
            q: "Ücretsiz şema eklentileri yerine neden elle kurulum?",
            a: "Eklentiler tipik olarak iki işi yapar: hazır alanları doldurur, ama sitenizin içeriğiyle senkron kalamaz (fiyat, SSS, hizmet listesi bayatlar) ve bazen içerikte olmayan veri uydurur. Bizim kurulumumuz, şemayı içerik verisinden ürettiği için tutarlılık kendiliğinden korunur; denetim kuralı da derleme hattında çalışır.",
          },
          {
            q: "Zengin sonuç garantisi veriyor musunuz?",
            a: "Hayır; kimse vermemeli. Görünüm kararını Google verir, sıklıkla test/özellik değişkenlerine göre de değişir. Taahhüdümüz kurulumun doğruluğu: alanların eksiksiz ve içerikle tutarlı olması, hata/uyarının 0 olması ve GSC'den aylık takip edilmesi.",
          },
          {
            q: "Schema.org dışında başka ne var? Open Graph farklı mı?",
            a: "Farklı katmanlar, farklı işler: Schema.org arama motoruna “bu sayfa neyi anlatıyor” der; Open Graph/Twitter Cards ise paylaşım kartına “bu bağlantı paylaşıldığında nasıl görünsün” der. İkisi birbirinin yerine geçmez; biz ikisini de aynı veri katmanından üretiriz ki başlık, açıklama ve görsel üçlüsü kanallar arasında çelişmesin.",
          },
        ],
      },
      internal: {
        id: "ilgili-hizmetler",
        h2: "Şemayı Besleyen Teknik Katmanlar",
        paragraphs: [
          "Yapılandırılmış veri, sayfa mimarisi, teknik SEO ve yerel sayfalarla birlikte çalışır. Aşağıdaki sayfalar bu bağımlılıkları; şehir sayfaları ise LocalBusiness eşleşmelerini anlatıyor.",
        ],
      },
    },
    ctaTitle: "Şema denetimiyle başlayalım",
    ctaText:
      "Sayfa türlerinizi paylaşın; hangi şemanın gerekli olduğunu, hangi alanların içerikte eksik kaldığını ve kurulum süresini tek sayfada özetleyelim.",
  },

  "google-search-console-kurulumu": {
    h1: "Google Search Console Kurulumu: Görünürlüğü Ölçülebilir Hale Getirmek",
    definition: [
      "Google Search Console (GSC), sitenizin arama sonuçlarındaki gerçek davranışını gösteren ücretsiz araçtır: hangi sorgularda kaç kez göründüğünüz, kaç tıklama aldığınız, hangi sayfaların indekslendiği, hangi URL'lerin taranmadığı, hangi ülkelerden ve cihazlardan geldiğiniz. Bu veriler olmadan SEO çalışması, ölçüm yapmadan hastayı tedavi etmeye benzer.",
      "Kurulum “doğrulama kodu eklemek”ten ibaret değildir. Domain mülkiyeti (DNS ile) doğrulanmalı, site haritası gönderilmeli, dizin/kanonik davranışı izlenmeli, tarama istatistikleri ve sayfa deneyimi (Core Web Vitals) raporları düzenli okunacak hâle getirilmeli; ekip içinde kimin hangi rapora baktığı netleşmelidir. Aksi takdirde GSC, bir kez kurulup unutulan bir araç olarak kalır.",
      "Tardigrad Software olarak GSC ve GA4 kurulumunu uçtan uca yapıyoruz: doğrulama ve mülkiyet yönetimi, GA4 olay ve dönüşüm eşlemesi, rapor okuma rituali ve aylık teknik not. İsterseniz erişim sizde kalır, biz raporlamayı yürütürüz.",
    ],
    sections: {
      whyNeeded: {
        id: "neden-gerekli",
        h2: "GSC'siz Ne Kaçırılır?",
        bullets: [
          { title: "Gerçek talep kelimeleri", text: "Ajans/uygulama “hedef kelime” listesiyle çalışır; oysa ziyaretçi sizden başka şeyler arayıp gelir. Bu liste yalnızca GSC'de görünür.", icon: "Search" },
          { title: "İndeks kaybı sessizdir", text: "Bir robots/kanonik hatası yüzünden yüzlerce sayfa bir ay boyunca indekslenmeyebilir; bunu ölçüm olmadan fark edemezsiniz.", icon: "FileWarning" },
          { title: "Tıklama oranı ipucu", text: "Aynı sıralamada daha çok tıklama almak, çoğu zaman başlık/description düzeltmesidir; hangi sayfada gerektiğini yine GSC söyler.", metric: "CTR", icon: "MousePointerClick" },
          { title: "Sayfa deneyimi", text: "Mobil kullanılabilirlik ve Core Web Vitals uyarıları, hız işlerinin önceliklendirmesini verir.", icon: "Gauge" },
        ],
        miniCta: "Mevcut GSC/GA4 erişiminizi paylaşın; ilk ayda okunacak 10 tabloyu birlikte belirleyelim.",
      },
      scope: {
        id: "paket-kapsami",
        h2: "Kurulum ve Kurumsallaştırma Kapsamı",
        checklist: [
          "Domain mülkiyeti doğrulaması (DNS TXT) ve alt mülk/preprod sitelerinin ayıklanması",
          "Erişim yönetimi: ajans, ajans dışı ekip ve yönetim için rol bazlı izinler (tam/içerik/mülk)",
          "XML sitemap gönderimi, robots.txt doğrulaması, site içi kanonik ve hreflang denetimi",
          "URL İnceleme akışının kullanıma açılması ve elle istek kurallarının ekibi tarafından bilinmesi",
          "Tarama istatistikleri okuma planı: “taranmış ama indekslenmemiş” nedenlerinin önceliklendirilmesi",
          "GSC ↔ GA4 bağlantısı: organik trafiğin oturum ve dönüşümle eşleştirilmesi",
          "Dönüşüm olayları: form gönderimi, telefon tıklaması, WhatsApp ve dosya indirme hedeflerinin tanımlı olması",
          "Sorgu-sayfa analiz notu: hangi sayfanın hangi sorgu kümesini kazandığı, hangilerinin kaniballeştiği",
          "CTR fırsat listesi: ilk sayfa sınırındaki sorgular, düşük CTR'lı yüksek gösterimli sayfalar",
          "Sayfa deneyimi ve mobil kullanılabilirlik uyarılarının takibi; hız düzeltmelerinin kapatılıp kapatılmadığının izlenmesi",
          "Aylık rapor şablonu: gösterim, tıklama, CTR, indekslenme oranı, kritik uyarılar ve gelecek ayın üç aksiyonu",
        ],
      },
      process: {
        id: "surec",
        h2: "Kurulum Süreci: 6 Adım",
        steps: [
          { title: "1. Erişim ve mülkiyet (0,5-1 gün)", text: "Domain doğrulaması, mevcut mülklerin birleştirilmesi ve rollerin tanımlanması. Çıktı: tek doğrulanmış mülk + yetki listesi.",
          },
          { title: "2. Teknik ön ayarlar (1-3 gün)", text: "Sitemap/robots/kanonik kontrolleri, noindex taraması ve site içi hataların listelenmesi. Çıktı: düzeltme listesi.",
          },
          { title: "3. GA4 entegrasyonu (1-2 gün)", text: "Ölçüm etiketleri, olay/dönüşüm tanımları ve GSC bağlantısı. Çıktı: dönüşüm ölçümü çalışan kurulum.",
          },
          { title: "4. İlk okuma raporu (2-5 gün)", text: "Son 3-6 ayın sorgu/sayfa/ülke/cihaz verisi okunur; fırsat ve kayıp listesi çıkar. Çıktı: önceliklendirilmiş 10 maddelik aksiyon listesi.",
          },
          { title: "5. Ritüel kurulumu (0,5-1 gün)", text: "Kim hangi raporu, hangi sıklıkla açacak; toplantı gündemi ve karar eşikleri belirlenir. Çıktı: GSC okuma planı.",
          },
          { title: "6. Süreklilik (aylık)", text: "Aylık teknik not ve sapma uyarıları; değişikliklerin (redesign, içerik, hız) verilere etkisinin raporlanması. Çıktı: aylık rapor.",
          },
        ],
      },
      benefits: {
        id: "faydalar",
        h2: "Kurulumun Getirdiği Görünürlük",
        metrics: [
          { value: "%100", label: "kritik sayfaların indekslenme durumu takibi" },
          { value: "CTR", label: "düşük tıklamalı yüksek gösterim sayfaları liste hâlinde görünür" },
          { value: "gerçek", label: "sorgu verisiyle içerik planı; kelime listesi uydurma olmaz" },
          { value: "0", label: "sessizce biriken teknik uyarı hedefi (aylık sıfırlama)" },
        ],
        bullets: [
          { title: "Hızlı kazançlar", text: "Başlık iyileştirmesi gibi “sıfır içerik” işler, gösterimi yüksek ama CTR'ı düşük sayfaların listesiyle ortaya çıkar.", icon: "Zap" },
          { title: "Kaynak israfı biter", text: "Hangi sayfanın trafik ürettiği bilinince, içerik üretimi doğru sayfaya kayar.", icon: "Filter" },
          { title: "Ekip aynı ekrana bakar", text: "Pazarlama–SEO–yazılım arasında “senin raporun benim raporum” tartışması azalır.", icon: "Users" },
          { title: "Alarma sahiptir", text: "Ani düşüşler (inceleme, ceza, teknik arıza) erken uyarıyla yakalanır; müdahale maliyeti düşer.", icon: "Bell" },
        ],
      },
      audience: {
        id: "kimler-icin",
        h2: "Kimler İçin Uygun?",
        bullets: [
          { title: "Yeni siteye geçen firmalar", text: "Ölçüm baştan kurulmazsa ilk yılın öğrenmesi kaybolur.", icon: "Rocket" },
          { title: "Ajansla çalışan markalar", text: "“Rapor gönderiyoruz” cümlesinin yerine, erişim sizde olan şeffaf bir ölçüm kurumu gerekir.", icon: "Handshake" },
          { title: "Trafiği düşen siteler", text: "Düşüşün kaynağını (sorgu, sayfa, indeksleme) ayırmak için zorunlu araç.", icon: "TrendingDown" },
          { title: "E-ticaret ve katalog siteleri", text: "Kategori/ürün sayfalarının görünürlük dağılımı burada okunur.", icon: "Package" },
        ],
      },
      whyUs: {
        id: "neden-biz",
        h2: "Neden Tardigrad Software?",
        bullets: [
          { title: "Ölçümü kodla birlikte kuruyoruz", text: "Etiket, olay ve dönüşüm tanımları; yazılım ekibinin yaptığı değişiklikleri de izleyecek şekilde tasarlanır.", icon: "Code2" },
          { title: "Araç değil ritüel bırakırız", text: "Kurulumdan sonra hangi raporun kim tarafından okunacağı ve hangi eşikte aksiyon alınacağı dokümante edilir.", icon: "Workflow" },
          { title: "Uyarılar birikmez", text: "Aylık teknik notla “inceleme bekleyen” uyarı listesi sıfırlanır; sorun büyümeden kapanır.", icon: "CheckCheck" },
          { title: "Erişim sizde", text: "Mülk ve GA4 hakları sizin adınıza; iş birliği bittiğinde geçmiş veriler sizde kalır.", icon: "ShieldCheck" },
        ],
      },
      faq: {
        id: "sss",
        h2: "Search Console Kurulumu Hakkında Sıkça Sorulanlar",
        faq: [
          {
            q: "Domain mi, URL ön eki mülkü mü doğrulamalıyız?",
            a: "Domain (alan adı) mülkü doğrulamak gerekir: tüm alt alan adları ve yollar tek raporda toplanır, alt mülkler (mobil, staging, blog alt alanı) otomatik dahil olur. URL ön eki mülkü yalnızca dar kapsamlı izleme istenen durumlarda ikincil olarak tutulur. Alan adı erişiminiz yoksa doğrulama dosyası veya etiket yöneticisi ile de yapılabilir — ama bu durumda raporlama parçalanır, mümkünse DNS tercih edilir.",
          },
          {
            q: "Taranmış ama indekslenmemiş uyarısı ne kadar ciddi?",
            a: "Genelde panik gerektirmez. Çoğu, değersiz veya kopya sayfanın indekslenmemesidir ve bu iyi bir şeydir. Ciddi olan, sizin önemli sayfanızın bu listede yer almasıdır: sitemap'te olan bir hizmet sayfası burada görünüyorsa kanonik, noindex, iç link eksikliği veya yetersiz içerik sebebiyle eleniyor olabilir. Bu yüzden raporu “tüm liste” değil, “öncelikli sayfa listesi” üzerinden okumak gerekir.",
          },
          {
            q: "Anlamadığım metriklerle boğulmak istemiyorum; neye bakmalıyız?",
            a: "Ayda üç ekrana bakmak yeterlidir: (1) toplam gösterim ve tıklama trendi (son 3 ay, dönem kıyaslı), (2) “taranmış ama indekslenmemiş” listesinde öncelikli sayfaların durumu, (3) 10-20 sıra aralığındaki sorgular (tıklama potansiyeli yüksek, yakın mesafe). Bunun dışındaki ayrıntılar, yalnızca bir karar üretilecekse açılır.",
          },
          {
            q: "GA4'a neden aynı anda bakıyoruz, yetmez mi?",
            a: "GSC, arama tarafını; GA4, sitede olanı gösterir. İkisi birleşmeden “trafik var ama talep yok” ya da “talep var ama nereden geldi” soruları cevapsız kalır. Bu yüzden GSC–GA4 bağlantısı ve dönüşüm tanımları tek iş olarak kurulur; aylık raporda gösterim→tıklama→oturum→form zinciri yan yana görünür.",
          },
          {
            q: "Verilerimiz üçüncü taraflarla paylaşılıyor mu?",
            a: "GSC ve GA4 zaten Google ürünleridir; bu araçları kullanmamak da bir tercih olabilir, ama o zaman organik arama verisi başka kanaldan ölçülemez hâle gelir. KVKK açısından dikkat ettiğimiz iki nokta var: ziyaretçi verisini minimum seviyede toplamak (GA4 veri saklama ayarı, IP anonimleştirme) ve erişimleri role göre kısıtlamak. Ajans/ekip dışına ham veri paylaşımı yerine özelleştirilmiş rapor sunuyoruz.",
          },
        ],
      },
      internal: {
        id: "ilgili-hizmetler",
        h2: "Ölçümü Yorumlayan Teknik Katmanlar",
        paragraphs: [
          "GSC verisi, teknik SEO, sayfa mimarisi ve raporlama ile birleştiğinde aksiyona dönüşür. Aşağıdaki sayfalar bu üç katmanı; şehir sayfaları ise yerel sorgu analizini anlatıyor.",
        ],
      },
    },
    ctaTitle: "Kurulumu ve okuma planını birlikte kuralım",
    ctaText:
      "Alan adı erişiminiz ve mevcut GSC durumunuz paylaşılınca; doğrulama, GA4 eşleştirme ve ilk okuma raporu için tek fiyat + takvimle dönelim.",
  },
}
