import type { ServiceContent } from "@/types/content"

/**
 * FAZ 2 — grup 1: “web” kategorisindeki hizmetlerin elle içeriği.
 * Bölüm 6 sırası: tanım → neden gerekli → kapsam → süreç → faydalar →
 * kimler için → neden biz → SSS → iç linkler → CTA.
 * Hedef: sayfa başına 900-1.400 kelime, anahtar kelime H1 + ilk 100 kelime + H2'lerde.
 */
export const webContents: Record<string, ServiceContent> = {
  "firma-web-sitesi": {
    h1: "Firma Web Sitesi Nedir? Küçük İşletmenin Satış Yapan Vitrini",
    definition: [
      "Firma web sitesi, bir işletmenin kendini tanıttığı, ürün ve hizmetlerini listelediği, müşteri adayının ilk teması kurduğu dijital vitrindir. Kurumsal siteden farkı ölçek ve hedeftir: kurumsal site marka mimarisi ve çok katmanlı içerik üzerine kurulurken, firma sitesi çoğu zaman tek bir işi iyi yapar — ziyaretçiyi arama, form veya WhatsApp üzerinden satış konuşmasına dönüştürür.",
      "Pratikte iyi bir firma web sitesi; ana sayfa, hizmet/ürün sayfaları, hakkında, referanslar ve iletişim katmanından oluşur. Bu iskeletin arkasında üç teknik karar vardır: sayfa hızı (mobilde 2,5 saniyede açılan bir site), mobil öncelikli yerleşim ve içerik sahibinin kendi başına güncelleyebileceği bir yönetim paneli. Bu üçünden biri eksik olduğunda site, kartvizit seviyesinde kalır ve ziyaretçi talebe dönüşmez.",
      "Tardigrad Software olarak firma sitelerini “ucuz hazır site” ile “kurumsal proje” arasındaki boşluğu kapatacak şekilde kuruyoruz: Next.js + Tailwind + shadcn/ui ile üretime hazır bir ön yüz, içerik paneli, form/CRM bağlantısı ve teknik SEO kurulumu tek pakette geliyor. Böylece ilk aydan hem aramalarda görünür hem de ölçümlenebilir bir kanalınız olur.",
    ],
    sections: {
      whyNeeded: {
        id: "neden-gerekli",
        h2: "Firma Web Sitesi Olmadan Ne Kaybediyorsunuz?",
        paragraphs: [
          "Türkiye'de KOBİ'lerin büyük kısmı müşteri bulma işini pazaryerleri, sosyal medya ve tavsiyeye bırakmış durumda. Bu kanallar çalışır ama hiçbirinde firmanın kontrolü yoktur: sosyal medya erişimi düşer, pazaryeri komisyonu artar, tavsiye ise ölçeklenmez. Web sitesi, bu üç kanaldan gelen trafiği tek yerde toplayabilen tek varlıktır — ve doğru kurulursa bedava trafik de getirir.",
          "Aşağıdaki dört tablo, bize “sitemiz var ama işlemiyor” diyen firmalarda en sık gördüğümüz durumlar:",
        ],
        bullets: [
          {
            title: "Telefon meşgul, form dolu değil",
            text: "Ziyaretçi bilgi almak istiyor ama tek seçeneği telefon. Numara meşgul olduğunda talep rakip firmaya gidiyor; siz kaçırdığınızı bile görmüyorsunuz.",
            metric: "%0 takip",
            icon: "Phone",
          },
          {
            title: "Google'da bulunamayan site",
            text: "Site var ama “ürün + şehir” aramalarında rakipler çıkıyor. Sebep genelde estetik değil; başlık hiyerarşisi, sayfa mimarisi ve hız eksikliği.",
            metric: "0 gösterim",
            icon: "Search",
          },
          {
            title: "Bayat içerik",
            text: "Fiyat listesi iki yıl önceki ürünü gösteriyor, ekip sayfasında ayrılan personel duruyor. Bayat bilgi, yanlış bilgiden daha çok güven kaybettirir.",
            icon: "RefreshCw",
          },
          {
            title: "Her değişiklik dışarıdan rica",
            text: "Bir fotoğraf değişecek, ajansa mesaj atılacak, 3 gün beklenecek. Küçük işletmede bu gecikme, güncel kalma motivasyonunu öldürüyor.",
            icon: "Users",
          },
        ],
        miniCta:
          "Mevcut sitenizi veya siteniz yoksa rakip sitelerinizi 15 maddelik kontrol listesiyle ücretsiz değerlendiriyoruz.",
      },
      scope: {
        id: "paket-kapsami",
        h2: "Firma Web Sitesi Paketinde Neler Var?",
        paragraphs: [
          "Kapsam, işletmenin büyüklüğüne göre iki-üç sayfa ile onlarca sayfa arasında değişebilir; aşağıdaki liste, ortalama bir firma sitesinde teslim edilen parçaları gösteriyor. Maddelerin tamamı tek fiyat ve tek takvim içinde planlanır.",
        ],
        checklist: [
          "Ana sayfa: değer önerisi, hizmet özeti, referans şeridi ve tek bir hedefe (form/arama/WhatsApp) odaklanan CTA katmanı",
          "Hizmet veya ürün sayfaları: her hizmet için ayrı, arama niyetine göre yazılmış sayfa (başlık, açıklama, görsel, SSS)",
          "Hakkımızda + ekip + sertifikalar: güven kuran somut bilgiler (kuruluş yılı, kapasite, çalışma alanları)",
          "Referanslar / yapılan işler: sektör ve lokasyon bazlı, filtrelenebilir iş listesi",
          "İletişim: form, harita, çalışma saatleri, WhatsApp ve e-posta kanallarının birlikte çalıştığı sayfa",
          "İçerik yönetim paneli: sayfa, hizmet, görsel ve meta alanlarının kod bilgisi olmadan güncellenebilmesi",
          "Form → e-posta + CRM/Excel aktarımı: her talebin kaybolmadan kayıt altına alınması",
          "Teknik SEO kurulumu: başlık/description şablonları, sitemap, robots, canonical, yapısal veri (Organization + LocalBusiness + Service)",
          "Hız ve Core Web Vitals hedefi: WebP görseller, sunucu tarafında render, font optimizasyonu",
          "KVKK uyumu: aydınlatma metni, açık rıza kutusu, çerez/analitik kurulumu",
          "Analitik ve hedef takibi: Google Analytics 4 + Search Console kurulumu, form dönüşüm olayı",
          "Yayın sonrası 30 gün destek: düzeltmeler, küçük içerik değişiklikleri ve eğitim",
        ],
      },
      process: {
        id: "surec",
        h2: "Firma Web Sitesi Kurulum Süreci: 6 Adım",
        paragraphs: [
          "Küçük işletme projelerinde süreç uzadıkça karar yorgunluğu artar; bu yüzden adımları az, çıktıları net tutuyoruz. Her adımın sonunda elinizde tartışmasız bir belge veya canlı demo olur.",
        ],
        steps: [
          {
            title: "1. Kısa görüşme ve sektör analizi (1-2 gün)",
            text: "30 dakikalık görüşmede kimi hedeflediğinizi, hangi hizmetten ciro geldiğini ve rakiplerin sitelerini konuşuyoruz. Çıktı: tek sayfalık hedef ve kapsam özeti.",
          },
          {
            title: "2. İçerik ve sayfa mimarisi (2-4 gün)",
            text: "Hangi sayfaların açılacağı, her sayfada hangi başlıkların bulunacağı ve sayfa URL'leri netleşiyor. Çıktı: sayfa haritası + başlık planı (SEO'nun temeli burada atılır).",
          },
          {
            title: "3. Tasarım ve ön izleme (3-6 gün)",
            text: "Markanıza uygun, sade ve mobil öncelikli bir tasarım uygulanıyor; masaüstü ve mobil ön izleme linki paylaşılıyor. Çıktı: tıklayarak gezebileceğiniz taslak site.",
          },
          {
            title: "4. Geliştirme ve içerik yerleşimi (4-8 gün)",
            text: "Sayfalar üretime hazır koda dönüşüyor, yönetim paneli bağlanıyor, görseller optimize ediliyor, formlar ve entegrasyonlar kuruluyor. Çıktı: güncellenebilir, tam işlevli site.",
          },
          {
            title: "5. SEO/teknik kontroller ve testler (2-3 gün)",
            text: "Meta alanları, yapısal veri, sitemap, hız, form testleri ve tarayıcı/mobil kontrolleri yapılıyor. Çıktı: kontrol listesi ve düzeltilmiş yayına hazır sürüm.",
          },
          {
            title: "6. Yayın + eğitim + 30 gün destek",
            text: "DNS ve e-posta yönlendirmeleri yapılarak site canlıya alınıyor; panel eğitimi kayda geçiriliyor. Çıktı: canlı site, erişim teslimi ve destek takvimi.",
          },
        ],
      },
      benefits: {
        id: "faydalar",
        h2: "Doğru Kurulmuş Bir Firma Sitesinin Sayısal Karşılığı",
        paragraphs: [
          "Aşağıdaki aralıklar, benzer ölçekte yayına aldığımız firmaların ilk 3-6 aylık gözlemleridir; sektör ve talebe göre değişir. Amacımız bu sayıları tahmin değil, ölçüm konusu hâline getirmek.",
        ],
        bullets: [
          {
            title: "Organik talepler",
            text: "“Hizmet + şehir” aramalarından gelen talep sayısı, yayından sonraki ilk 3-6 ayda ölçülür hâle gelir; hedef sayfa başına aylık talep bandı birlikte belirlenir.",
            metric: "ölçülebilir",
            icon: "LineChart",
          },
          {
            title: "Güven ve profesyonellik",
            text: "Ziyaretçinin sayfada geçirdiği süre ve sekme bırakma oranı, hız ve içerik düzeniyle doğrudan ilişkilidir. Hızlı site, uzun oturum demektir.",
            metric: "-%40 kaçış",
            icon: "Gauge",
          },
          {
            title: "Güncel kalma maliyeti",
            text: "Panel olduğu sürece bir fiyat veya fotoğraf değişikliği 5 dakikadır; ajans ricası beklemek zorunda kalmazsınız.",
            metric: "5 dk",
            icon: "Zap",
          },
          {
            title: "Reklam verimliliği",
            text: "Landing page kalitesi arttıkça aynı reklam bütçesiyle daha fazla form alınır; tıklama başına maliyet yerine talep başına maliyet konuşulmaya başlanır.",
            metric: "+%30 form",
            icon: "Target",
          },
          {
            title: "Tekrar kullanılabilir altyapı",
            text: "Açtığınız her yeni hizmet, aynı şablondan çoğaltılır; site büyüdükçe birim maliyet düşer.",
            icon: "Layers",
          },
        ],
      },
      audience: {
        id: "kimler-icin",
        h2: "Bu Hizmet Kimin İçin Uygun?",
        bullets: [
          {
            title: "Üretici ve toptan satış firmaları",
            text: "Ürün kataloğu, teknik tablo ve bayi talebi olan; müşteriye “fiyat için arayın” demek yerine filtreli katalog sunmak isteyen firmalar.",
            icon: "Building2",
          },
          {
            title: "Hizmet işletmeleri",
            text: "Klinik, atölye, büro, taahhüt, danışmanlık gibi güven ve randevu odaklı işler; iletişim kanallarının net olması kritik.",
            icon: "Users",
          },
          {
            title: "Bölgesel ticaret yapanlar",
            text: "Belirli bir il veya ilçede aranan firmalar; lokal SEO ve il/ilçe sayfalarıyla bulunabilirlik büyütülür.",
            icon: "MapPin",
          },
          {
            title: "Yeni kurulmuş işletmeler",
            text: "Marka henüz tanınmıyor; hızlı, sade ve güvenilir bir site, kurumsal kimliğin ilk parçası olur.",
            icon: "Rocket",
          },
        ],
      },
      whyUs: {
        id: "neden-biz",
        h2: "Neden Tardigrad Software ile Firma Sitesi?",
        bullets: [
          {
            title: "Tasarım, kod ve SEO aynı elde",
            text: "Ayrı satıcılarda kaybolan işler burada tek planda yürür; hız ve görünürlük sonradan yamalanacak bir madde değil, başlangıç kararıdır.",
            icon: "Workflow",
          },
          {
            title: "Hazır tema değil, üretime hazır kod",
            text: "Next.js + TypeScript + Tailwind + shadcn/ui ile kurulan yapı; tema lisansı, eklenti kütüphanesi ve yıllık “bakım sürprizi” üretmez.",
            icon: "Code2",
          },
          {
            title: "Tek fiyat, tek takvim",
            text: "Kapsam dışı kalemler yazılı olarak belirtilir; değişiklik olursa etki analizi eklenir. Sürpriz maliyet çıkmaz.",
            icon: "FileText",
          },
          {
            title: "Mülkiyet sizde",
            text: "Alan adı, hosting, kod deposu, panel erişimi ve dokümantasyon sizin adınıza teslim edilir; dilediğinizde kendi ekibinize devredebilirsiniz.",
            icon: "ShieldCheck",
          },
        ],
      },
      faq: {
        id: "sss",
        h2: "Firma Web Sitesi Hakkında Sıkça Sorulanlar",
        faq: [
          {
            q: "Firma web sitesi ile kurumsal web sitesi arasındaki fark nedir?",
            a: "Kurumsal site, marka mimarisi ve çok katmanlı içerikle (hizmet ailesi, haberler, kariyer, yatırımcı/bayi alanları) kurulur; firma sitesi ise daha dar bir hedefle çalışır: hizmet ve ürünleri tanıtmak, iletişime geçmek ve talep almak. Ölçek farklıdır, teknik standart aynıdır. Bütçeyi zorlamadan doğru hedefi kuran versiyon genellikle firma sitesidir; büyüdükçe kurumsal yapıya evrilmesi planlanırsa mimari buna uygun kurulur.",
          },
          {
            q: "Siteyi yayına aldıktan sonra kendimiz güncelleyebilir miyiz?",
            a: "Evet, paketin temel maddelerinden biri budur. Sayfa metinleri, görseller, hizmet listeleri, fiyat tabloları ve meta alanları yönetim panelinden değişir; kod bilgisi gerekmez. Paneli kullanmayı öğrenmeniz için yayın haftasında kısa bir eğitim veriyor ve kaydı size bırakıyoruz.",
          },
          {
            q: "Hazır site yaptırma seçeneklerinden farkı ne?",
            a: "Hazır şablon siteler düşük maliyetle hızlı sonuç verir; ancak hız, SEO esnekliği ve entegrasyon konularında çabuk tavan yapar. Bizim kurduğumuz yapı, başlangıçta sade tutulsa da sonradan genişletilebilir: yeni hizmet sayfası, katalog, bayi girişi, form-CRM bağlantısı gibi ekler aynı mimariye oturur. Yani ilk yıl ucuz görünen fark, ikinci yıl çoğu zaman yeniden yaptırmaya döner.",
          },
          {
            q: "Firma sitemiz e-ticarete dönüşebilir mi?",
            a: "Dönüşebilir, ama baştan karar verilmesi gereken bir mimari konusudur. Ürün verisi, stok ve varyant yapısı doğru kurgulanmış bir katalog sitesi, ödeme ve sipariş katmanı eklenerek e-ticarete taşınabilir. Bu yüzden e-ticareti düşünüyorsanız bunu ilk görüşmede söylün; sayfa şemaları ve veri modeli ona göre kurulur.",
          },
          {
            q: "Mevcut sitemiz kötüyse sıfırdan mı yapılmalı?",
            a: "Her zaman değil. Önce bir denetim yapıyoruz: hız, indekslenme durumu, trafik getiren sayfalar, formların çalışma hâli. Sitenin teknolojisi ve içerikleri taşınabilir durumdaysa, korunması gereken URL'leri ve otoriteyi 301 planıyla yeni yapıya taşıyoruz. Sıfırdan yapmak ile yenilemek arasındaki kararı, trafik ve sıralama riskini hesaplayarak veriyoruz.",
          },
          {
            q: "Süre ve bütçe nasıl belirleniyor?",
            a: "Sayfa sayısı, içerinin kim tarafından yazılacağı, özel modül (katalog, bayi girişi, randevu) gerekip gerekmediği ve yönetim paneli derinliği dört ana değişkendir. Ücretsiz ön analizden sonra bu değişkenlere göre tek fiyat ve takvim önerisi yazılı olarak gelir; tipik bir firma sitesi 3-6 hafta içinde yayına alınır.",
          },
        ],
      },
      internal: {
        id: "ilgili-hizmetler",
        h2: "Firma Sitesini Tamamlayan Hizmetler",
        paragraphs: [
          "Firma sitesi tek başına bir vitrindir; yanına talep toplama, görünürlük ve operasyon katmanları eklendiğinde satış kanalı olur. Aşağıdaki sayfalar, en sık birlikte kurduğumuz parçaları anlatıyor. Şehir sayfalarında ise yerel arama davranışına göre önceliklendirmeyi bulabilirsiniz.",
        ],
      },
    },
    ctaTitle: "Firma sitenizi konuştuktan 3 hafta sonra yayına alabiliriz",
    ctaText:
      "Kaç sayfa olacağı, içeriği kimin yazacağı ve panelde neleri yönetmek istediğiniz netleşsin; ardından tek fiyat, tek takvim ve sayfa planı geliyor. Ücretsiz ön analizde mevcut siteniz veya rakipleriniz için teknik bir değerlendirme de sunuyoruz.",
  },

  "landing-page": {
    h1: "Landing Page Nedir? Tek Hedefe Odaklanan Satış Sayfası",
    definition: [
      "Landing page (açılış sayfası), bir reklam, e-posta veya QR kod bağlantısından gelen ziyaretçiyi karşılamak için kurulmuş, tek hedefli web sayfasıdır. Ana sayfadan farkı şudur: ziyaretçiye on farklı yol sunulmaz, tek bir yol sunulur — formu doldurmak, randevu almak, teklif istemek veya ürünü satın almak. Bu odak, dönüşüm oranını belirleyen ilk faktördür.",
      "Etkili bir landing page; ilk ekranda net bir vaat, üç-beş somut fayda, itirazları yanıtlayan kısa bir bölüm, sosyal kanıt ve tekrar eden bir call-to-action ile kurulur. Teknik tarafında ise hız (mobilde 2 saniyenin altında açılış), ağırlıksız scriptler, ölçümleme olayları ve A/B testine izin veren sade bir yapı gerekir. Reklam bütçesinin verimi, tam olarak bu sayfada belirlenir.",
      "Tardigrad Software olarak landing page işini tasarım+metin+geliştirme+ölçüm döngüsü olarak yürütüyoruz: sayfayı yayına aldıktan sonra tek seferlik bırakmıyor, başlık/görsel/form varyasyonlarını ölçerek iyileştiriyoruz. Sayfalar Next.js ile sunucu tarafında render edildiği için reklam platformlarının kalite puanları (ör. Google Ads hız/senet) da olumlu etkilenir.",
    ],
    sections: {
      whyNeeded: {
        id: "neden-gerekli",
        h2: "Neden Reklam Trafiği Ana Sayfaya Değil, Landing Page'e Gitmeli?",
        paragraphs: [
          "Reklamdan gelen kullanıcının sabrı saniyelerle ölçülür. Ana sayfaya düşen bir ziyaretçi, aradığını bulmak için menüyü tarar, ikinci sekmeye geçer ve çoğu zaman geri dönmez. Kampanyaya özel kurulmuş bir açılış sayfasında ise mesaj zaten ona hitap ediyordur: aynı başlık, aynı görsel dili, tek bir buton. Bu tutarlılık, dönüşüm oranını iki-üç katına çıkarabilen tek en etkili değişikliklerden biridir.",
        ],
        bullets: [
          {
            title: "Reklam bütçesi aynı, talep iki katı",
            text: "Tıklama başına maliyeti düşürmeye çalışmak pazarlık gibidir; dönüşüm oranını yükseltmek ise mühendislik. Aynı bütçeyle daha fazla form almak, çoğu projede daha hızlı sonuç verir.",
            metric: "+%30-60 form",
            icon: "TrendingUp",
          },
          {
            title: "Mesaj dağınıklığı",
            text: "Kampanya “ucuz kombi bakımı” diyorsa, açılış sayfasında kurumsal tarihçe ve 6 hizmet listesi görünmemeli. Mesaj-vaat uyumsuzluğu güveni kırar.",
            icon: "Megaphone",
          },
          {
            title: "Ölçülemeyen kampanya",
            text: "Olay (event) tanımlı değilse hangi görselin, hangi başlığın işe yaradığı bilinmez; bütçe tahminle harcanır. Biz her sayfayı dönüşüm hedefiyle kuruyoruz.",
            metric: "ölçülebilir",
            icon: "LineChart",
          },
          {
            title: "Yavaş sayfa, pahalı tıklama",
            text: "Mobilde 4 saniye açılış, tıklamaların önemli bir kısmının sayfayı görmeden gitmesi demektir. Hız, doğrudan reklam maliyetidir.",
            metric: "<2.5s LCP",
            icon: "Gauge",
          },
        ],
        miniCta: "Kampanya metninizi ve hedef kitlenizi paylaşın; tek sayfalık bir dönüşüm planı ve sayfa iskeleti çıkaralım.",
      },
      scope: {
        id: "paket-kapsami",
        h2: "Landing Page Paketinin Kapsamı",
        paragraphs: [
          "Aşağıdaki liste, tek bir kampanya için kurulan standart landing page kapsamıdır. Çoklu varyasyon veya birden fazla kampanya için blok sayısı artar; her blok ayrı sayfa olarak da üretilir.",
        ],
        checklist: [
          "Kampanya hedefi ve tek CTA kararının birlikte netleştirilmesi (form / arama / WhatsApp / teklif)",
          "Metin yazarlığı: başlık, alt başlık, fayda maddeleri, itiraz yanıtları, kapanış metni",
          "İlk ekran (hero) tasarımı: vaat + görsel + formun aynı ekranda görünmesi",
          "Form kurulumu: kısa form (ad, telefon, şehir), otomatik kaynak (UTM) yakalama, spam koruması",
          "Sosyal kanıt bloğu: müşteri yorumları, tamamlanan iş sayısı, sertifika/ünvan, logo şeridi",
          "SSS ve garanti/İade/iptal açıklamaları (itirazları sayfada yanıtlama)",
          "Mobil öncelikli yerleşim ve erişilebilirlik kontrolü (kontrast, odak sırası, dokunma alanları)",
          "Hız işleri: WebP/AVIF görsel, kritik CSS, font optimizasyonu, script yığışımlaması",
          "Ölçümleme: GA4 + Meta/Google Ads olayları, sanal sayfa hızı, form dönüşüm hedefi",
          "A/B test altyapısı: başlık/görsel/CTA renk varyasyonlarının kolay değiştirilmesi",
          "Reklam politikası uyumu: KVKK metni, açık rıza, aydınlatma bağlantısı, sahte sayaç/gerçek dışı vaat kontrolü",
          "İki revizyon turu + yayın + 14 günlük iyileştirme penceresi",
        ],
      },
      process: {
        id: "surec",
        h2: "Landing Page Süreci: 7 Adımda Yayın ve İyileştirme",
        steps: [
          {
            title: "1. Kampanya brifi (yarım gün)",
            text: "Ürün/hizmet, hedef kitle, teklif, bütçe beklentisi ve rekabet konuşulur. Çıktı: tek sayfalık brief; ölçülecek hedef sayı burada yazılır.",
          },
          {
            title: "2. Rakip ve mesaj araştırması (1 gün)",
            text: "Aynı teklifi reklamda kullanan 3-5 rakibin sayfası, vaatleri ve kanıt biçimleri incelenir. Çıktı: fark yaratacak başlık/teklif önerileri.",
          },
          {
            title: "3. Sayfa iskeleti ve metin (1-2 gün)",
            text: "Blok sırası (vaat → fayda → kanıt → itiraz → kapanış) ve tüm metin yazılır; tasarımdan önce metin üzerinde anlaşırız. Çıktı: onaylı metin akışı.",
          },
          {
            title: "4. Tasarım (1-3 gün)",
            text: "İki-üç ekranlık, reklam görsel diliyle uyumlu bir tasarım uygulanır. Çıktı: masaüstü/mobil görsel ön izleme.",
          },
          {
            title: "5. Geliştirme ve form entegrasyonu (1-3 gün)",
            text: "Sayfa koda dönüşür; form, CRM/e-posta ve WhatsApp bağlantıları kurulur, UTM yakalama eklenir. Çıktı: ön izleme linki ve test formu.",
          },
          {
            title: "6. Ölçüm ve hız kontrolleri (1 gün)",
            text: "Olay kurulumları, reklam platformu doğrulamaları ve Lighthouse/hız testleri yapılır. Çıktı: kontrol listesi; reklam çıkışa hazır.",
          },
          {
            title: "7. Yayın + iyileştirme döngüsü (14 gün)",
            text: "Veri gelmeye başladığında başlık/görsel/CTA varyasyonları test edilir; hangi değişimin talebi artırdığı raporlanır. Çıktı: iyileştirilmiş sayfa ve karar notları.",
          },
        ],
      },
      benefits: {
        id: "faydalar",
        h2: "Landing Page Kullanmanın Ölçülebilir Faydaları",
        metrics: [
          { value: "+%30-60", label: "form dönüşümünde tipik artış aralığı" },
          { value: "<2.5s", label: "mobil LCP hedefi" },
          { value: "7 gün", label: "brief’ten yayına standart süre" },
          { value: "2 varyasyon", label: "ilk test turunda karşılaştırılır" },
        ],
        bullets: [
          {
            title: "Daha düşük talep başına maliyet",
            text: "Dönüşüm oranı arttıkça aynı reklam bütçesiyle daha fazla talep alınır; raporlarda “tıklama başına maliyet” değil “talep başına maliyet” konuşulmaya başlanır.",
            icon: "Target",
          },
          {
            title: "Hızlı öğrenme",
            text: "Tek sayfa, tek hipotez ilkesiyle çalıştığı için hangi vaadin işe yaradığını haftalar içinde değil, günler içinde görürsünüz.",
            icon: "Zap",
          },
          {
            title: "Kaliteli talep",
            text: "Formu doğru kurgulamak (nitelikleyici sorular, net beklenti metni) satış ekibinin vaktini boşa gitiren talepleri azaltır.",
            icon: "Filter",
          },
          {
            title: "Kampanya bağımsızlığı",
            text: "Doğru altyapı ile yeni bir kampanya için sıfırdan ajans beklenmez; bloklar kopyalanıp metin değişir, sayfa saatler içinde çoğalır.",
            icon: "Layers",
          },
        ],
      },
      audience: {
        id: "kimler-icin",
        h2: "Bu Hizmet Kimin İçin Uygun?",
        bullets: [
          {
            title: "Performans reklamı veren KOBİ'ler",
            text: "Google/Meta reklamı çıkıyor ama formlar dolmuyor; asıl sorun reklamda değil, açılış sayfasında.",
            icon: "Megaphone",
          },
          {
            title: "Sezonluk kampanya yürütenler",
            text: "İndirim, bakım paketi, yeni ürün lansmanı gibi kısa vadeli teklifler için geçici ama ölçen sayfalar gerekir.",
            icon: "CalendarClock",
          },
          {
            title: "Lokasyon bazlı işletmeler",
            text: "Belirli il/ilçede reklam çıkacak işletmeler; şehir varyantlı sayfalar maliyeti düşürür, talebi niteliklendirir.",
            icon: "MapPin",
          },
          {
            title: "B2B talep toplama ekipleri",
            text: "Fuar, e-posta veya LinkedIn trafiği için “indirilebilir rehber + form” kurgusu; satış öncesi nitelikli veri toplama.",
            icon: "Briefcase",
          },
        ],
      },
      whyUs: {
        id: "neden-biz",
        h2: "Neden Tardigrad Software ile Landing Page?",
        bullets: [
          {
            title: "Metin + tasarım + kod birlikte",
            text: "Kampanya sayfasında en pahalı hata, üç işin ayrı ellere bölünmesidir. Bizde başlık ile buton, aynı ekibin kararıdır.",
            icon: "Workflow",
          },
          {
            title: "Hız bir özellik gibi çalışılır",
            text: "Sunucu tarafında render, optimize görsel, sıfır gereksiz script: reklam platformlarının kalite puanını yükselten şey budur.",
            metric: "<2.5s LCP",
            icon: "Gauge",
          },
          {
            title: "Ölçüm olmadan yayın yok",
            text: "Olay tanımları, UTM yakalama ve form dönüşüm hedefi kurulmadan kampanya açılmıyor; “reklamı verdik, bakalım” sürecine izin vermiyoruz.",
            icon: "LineChart",
          },
          {
            title: "Politika ve KVKK uyumu",
            text: "Reklam politikalarına takılan (sahte sayaç, yanıltıcı indirim, eksik aydınlatma) sayfalar hesabı kapatır; metni ve formları buna göre kuruyoruz.",
            icon: "ShieldCheck",
          },
        ],
      },
      faq: {
        id: "sss",
        h2: "Landing Page Hakkında Sıkça Sorulanlar",
        faq: [
          {
            q: "Landing page ile web sitesi arasındaki fark nedir?",
            a: "Web sitesi, markanın tüm sayfalarını barındıran ve farklı niyetlere hizmet eden bir bütündür; landing page ise tek bir kampanyanın trafiğini karşılamak için kurulmuş, tek hedefli bir sayfadır. Menü, alt sayfalar ve dağıtan bağlantılar landing page’te bilinçli olarak yoktur. Bir siteden farklı olarak buradaki başarı ölçütü nettir: dönüşüm oranı ve talep başına maliyet.",
          },
          {
            q: "Bir sayfa ne kadar sürede yayına alınır?",
            a: "Kampanya hedefi ve görseller hazırsa standart süremiz 5-7 iş günü: brifing ve araştırma 1-2 gün, metin ve tasarım 2-4 gün, geliştirme-test 1-3 gün. Acele kampanyalarda “tek ekran + form” biçiminde 48 saatlik bir hızlı tur da çıkarabiliyoruz; bu durumda test/iyileştirme yayından sonra yapılır.",
          },
          {
            q: "A/B testini kim yapıyor, ne sıklıkla?",
            a: "İlk iki varyasyonu biz kuruyoruz; reklam hesabındaki test ayarlarına göre yönlendiriyoruz. Haftada bir veri okuması yapıp başlık, ana görsel, form uzunluğu ve CTA rengi gibi yüksek etkili öğelerde değişiklik öneriyoruz. Değişikliklerin uygulanması 14 günlük destek kapsamındadır; sonrasında isterseniz ölçüm+iyileştirme ortaklığı olarak devam ederiz.",
          },
          {
            q: "Formu mu, WhatsApp’ı mı öneriyorsunuz?",
            a: "Talebin niteliğine göre ikisi birlikte çalışır. Form, veri toplamak ve CRM’e kaydetmek için zorunludur; WhatsApp ise hızlı iletişim kurmak isteyen azınlık için ikinci kanaldır. Tek CTA kuralını bozmamak için WhatsApp’ı genelde buton ikincil olarak, formu birincil olarak konumlandırıyoruz.",
          },
          {
            q: "Reklam hesabı ve analiz hakları kimde olmalı?",
            a: "Mutlaka sizde. Biz kullanıcı erişimi (analiz/ajans rolü) ile çalışıyoruz; yayın ve ölçüm ayarlarını sizin hesabınızda yapıyoruz. Böylece işbirliği bittiğinde kampanya geçmişi, kitleler ve dönüşüm verileri sizde kalır.",
          },
          {
            q: "SEO landing page’te işe yarar mı?",
            a: "Kısmen. Kampanya sayfaları genelde noindex ile yayına alınır (reklam trafiği için hızlı, bağımsız bir varyant). Organik trafik hedefliyorsanız aynı vaadi, sitenizin hizmet sayfasında yapılandırılmış içerik olarak kuruyoruz; böylece reklam için ayrı, arama için ayrı ama tutarlı iki yüzey olur.",
          },
        ],
      },
      internal: {
        id: "ilgili-hizmetler",
        h2: "Kampanya Sayfasını Güçlendiren Hizmetler",
        paragraphs: [
          "Bir açılış sayfasının verimi; formu işleyen sistemle, içerik üretim hızıyla ve teknik altyapının kalitesiyle sınırlıdır. Aşağıdaki hizmet sayfaları bu üç katmanı tamamlıyor. Şehir sayfalarında ise il/ilçe bazlı kampanya kurgusunu bulabilirsiniz.",
        ],
      },
    },
    ctaTitle: "Kampanyanız için sayfa planını birlikte çıkaralım",
    ctaText:
      "Reklam metninizi, teklifinizi ve hedef kitlenizi paylaşın; başlık adayları, sayfa iskeleti ve ölçüm planı dâhil tek sayfalık bir öneriyle dönelim. Süre ve fiyat tek kalemde netleşsin.",
  },
}
