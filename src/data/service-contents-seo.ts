import type { ServiceContent } from "@/types/content"

/**
 * FAZ 2 — grup 4b-i: lokal SEO ve sayfa mimarisi.
 */
export const seoContents: Record<string, ServiceContent> = {
  "lokal-seo": {
    h1: "Lokal SEO: “Yakınımdaki …” Aramalarında Çıkan Firma Olmak",
    definition: [
      "Lokal SEO, işletmenin şehir/ilçe bazlı aramalarda (“kombi servisi Kadıköy”, “ankara avukat”, “yakınımdaki …” sorguları) görünür olmasını sağlayan çalışma bütünüdür. Üç dayanağı vardır: Google Business Profile (harita kaydı) doğruluğu, sitedeki il/hizmet sayfalarının yerel bilgisi ve dış kaynaklarda (dizin, katalog, basın) geçen isim-adres-telefon birliği.",
      "Yerel aramalar, hizmet işletmeleri için en yüksek dönüşüm potansiyeline sahip kanaldır: niyet bellidir, mesafe önemlidir ve kullanıcı çoğu zaman aynı gün harekete geçer. Rekabet ulusal kelimelere göre düşüktür; bu yüzden etki/çaba oranı yüksektir. Kayıp çoğu zaman “sitemiz yok” değil, adresin eski olması, telefon formatlarının farklı yazılması veya il sayfasının elli kelimelik kopya metin olmasıdır.",
      "Tardigrad Software olarak lokal SEO'yu içerik + teknik + profil katmanıyla birlikte kuruyoruz: il/ilçe bazlı hizmet sayfaları, LocalBusiness yapısal verisi, profil optimizasyonu ve yorum akışı. Çok şubeli yapılarda her şube için ayrı kayıt ve izleme kuruyor; ölçümü “sıralama” gibi belirsiz metriklerle değil, il bazlı gösterim, arama ve form verisiyle raporluyoruz.",
    ],
    sections: {
      whyNeeded: {
        id: "neden-gerekli",
        h2: "Neden Sadece Harita Kaydı Açmak Yetmez?",
        paragraphs: [
          "Profil açmak lokal görünürlüğün başlangıcıdır; harita sonuçları üç faktörle sıralanır: alaka (kategori ve içerik doğru mu), mesafe ve ün (yorum sayısı, yanıt disiplini, bahsi). Siteniz bu üçünü desteklemiyorsa profil tek başına ikinci sayfada kalır.",
        ],
        bullets: [
          { title: "Kategori ve hizmet listesi eksik", text: "Doğru ana/ikincil kategori seçilmemiş, hizmetler boş; Google sayfayı ne için göstereceğini bilemez.", icon: "Tag" },
          { title: "İl sayfası kopya metin", text: "“İstanbul'da hizmet veriyoruz” cümlesi dört ilde aynıysa alaka sinyali üretmez, kullanıcıya da bir şey söylemez.", icon: "Copy" },
          { title: "Adres/telefon tutarsız", text: "Dizinlerde eski adres ve farklı telefon formatları durur; harita kaydı bölünür, güven sinyali zedelenir.", icon: "MapPin" },
          { title: "Yorum disiplini yok", text: "Rakipte 180 yorum, sizde 7; yanıt süresi haftaları buluyor. Oysa karar, yorum ve yanıt hızına göre veriliyor.", icon: "MessageSquare" },
        ],
        miniCta: "Hedeflediğiniz 5-10 kelime × il için mevcut görünürlüğünüzü tablo hâlinde çıkaralım; eksikleri öncelik sırasıyla gösterelim.",
      },
      scope: {
        id: "paket-kapsami",
        h2: "Lokal SEO Kapsamı",
        checklist: [
          "Profil kurulumu ve optimizasyonu: kategori ağacı, hizmet listesi, çalışma saatleri, fotoğraf seti, SSS, gönderi planı",
          "Çok şubeli yapılarda şube başına ayrı kayıt, doğrulama ve izleme",
          "İl ve ilçe bazlı hizmet sayfaları: ulaşım, çalışma sahası, örnek işler gibi gerçek yerel bilgiyle (kopya metin üretmeyen şablon)",
          "Doğru şema türü ve alanları: LocalBusiness (sektöre göre MedicalBusiness/HomeAndConstructionBusiness), adres, telefon, koordinat, çalışma saatleri",
          "Site içi sinyaller: başlık ve description'da il adı, il ↔ hizmet iç link ağı, menü ve footer bağlantıları",
          "İletişim sayfası kalitesi: yol tarifi, park/ulaşım notu, WhatsApp ve form kanalları, mekân görselleri",
          "Yorum stratejisi: iş sonrası otomatik talep linki, olumsuz geri bildirime yanıt şablonu, yanıt süresi hedefi",
          "Dizin ve citasyon temizliği: Türkiye/sektör dizinlerinde birleşik isim-adres-telefon, işe yaramaz kayıtların düzeltilmesi",
          "Rakip haritalama: hedef kelime × il için ilk sayfadaki profillerin içerik ve yorum karşılaştırması",
          "Ölçüm: Search Console'da il bazlı sorgu analizi, profil içgörüleri, çağrı ve form dönüşümleri; aylık yerel görünürlük raporu",
        ],
      },
      process: {
        id: "surec",
        h2: "Çalışma Süreci: 6 Adım",
        steps: [
          { title: "1. Yerel görünürlük denetimi (2-4 gün)", text: "Hedef kelime × il listesi için mevcut durum, rakip profilleri ve eksikler çıkarılır. Çıktı: bulgu + fırsat tablosu." },
          { title: "2. Profil ve veri standardı (1-2 gün)", text: "Kategori seçimi, adres/telefon birliği ve doğrulama süreci; dizin kayıtlarının düzeltilmesi. Çıktı: temiz profil + kayıt listesi." },
          { title: "3. Yerel sayfa planı (2-5 gün)", text: "Hangi il/ilçe sayfaları açılacak, her sayfada hangi yerel bilgi bulunacak. Çıktı: sayfa haritası ve içerik şablonu." },
          { title: "4. İçerik ve teknik kurulum (1-3 hafta)", text: "Sayfalar yazılır/güncellenir, yapısal veri ve iç link ağı kurulur, hız ve mobil kontrolleri yapılır. Çıktı: yayında yerel sayfalar." },
          { title: "5. Yorum ve gönderi ritmi (sürekli)", text: "Talep otomasyonu, haftalık profil gönderisi, yanıt SLA'sı. Çıktı: biriken yorum ve etkileşim verisi." },
          { title: "6. Aylık ölçüm ve ayar", text: "İl bazlı gösterim/tıklama, çağrı ve form sayıları; sıradaki ayın öncelikleri. Çıktı: yerel görünürlük raporu." },
        ],
      },
      benefits: {
        id: "faydalar",
        h2: "Yerel Çalışmanın Getirdiği",
        metrics: [
          { value: "+%30-80", label: "hedef illerde profil/gösterim artışı (3-6 aylık tipik gözlem)" },
          { value: "aynı gün", label: "yerel aramada yüksek aciliyet; dönüşüm penceresi kısadır" },
          { value: "düşük rekabet", label: "ulusal kelime yerine il + ilçe bazlı hedefleme" },
          { value: "il bazlı", label: "çağrı/form takibi; talep nereden geldi net" },
        ],
        bullets: [
          { title: "Daha nitelikli talep", text: "Yakınlık başlı başına bir elemedir; mesafe uygun müşteriden gelen arama daha yüksek kapanma oranına sahiptir.", icon: "Target" },
          { title: "Reklam bağımlılığı azalır", text: "Organik yerel görünürlük, aynı bölge için verilen reklamın verimini artırır ve uzun vadede kısmen ikame eder.", icon: "TrendingDown" },
          { title: "Yeni şube hızlı açılır", text: "Standart il sayfası ve profil şablonu sayesinde lokasyon kurulumu tekrar eden bir proje olmaktan çıkar.", icon: "Layers" },
          { title: "İtibar verisi birikir", text: "Yorumlar, yanıt hızı ve profil etkileşimi hem arama motoru hem müşteri için güven kanıtıdır.", icon: "Star" },
        ],
      },
      audience: {
        id: "kimler-icin",
        h2: "Kimler İçin Uygun?",
        bullets: [
          { title: "Yerinde hizmet verenler", text: "Servis, tamir, bakım, temizlik, kurye; mesafe belirleyici faktördür.", icon: "Wrench" },
          { title: "Sağlık ve güzellik", text: "Klinik, diş, optik, güzellik merkezi; yorum ve fotoğraf kararı belirler.", icon: "Stethoscope" },
          { title: "Ofis ve profesyonel hizmetler", text: "Hukuk, muhasebe, danışmanlık; “şehir + uzmanlık” araması yoğundur.", icon: "Scale" },
          { title: "Çok şubeli markalar", text: "Her şubenin kendi profili ve sayfası olması gereken zincirler.", icon: "Network" },
        ],
      },
      whyUs: {
        id: "neden-biz",
        h2: "Neden Tardigrad Software?",
        bullets: [
          { title: "İçerik, teknik ve profil birlikte", text: "Lokal SEO'nun üç ayağı da aynı elde; ajans–yazılımcı–profil yöneticisi arasında kaybolan sorumluluk kalmaz.", icon: "Workflow" },
          { title: "Kopya il sayfası üretmiyoruz", text: "Sayfalar gerçek yerel bilgiyle beslenir; on ilde aynı metni yayınlamak ceza riski üretir, biz yapmıyoruz.", icon: "FileText" },
          { title: "Taahhüdümüz ölçüm", text: "“1. sıraya çıkarıyoruz” demiyoruz; gösterim, arama ve form sayılarını il bazlı raporluyoruz.", icon: "LineChart" },
          { title: "Profil sizin kalır", text: "Erişim sizde, biz yönetici yetkisiyle çalışırız; iş birliği bitse de kayıt ve yorumlar sizde kalır.", icon: "ShieldCheck" },
        ],
      },
      faq: {
        id: "sss",
        h2: "Lokal SEO Hakkında Sıkça Sorulanlar",
        faq: [
          {
            q: "Profil doğrulaması nasıl yapılıyor, ne kadar sürer?",
            a: "Doğrulama yöntemi işletmeye göre değişir: posta ile kod, telefon, video veya hızlı doğrulama. Posta ile gelen yöntem çoğu kayıtta uygulanır ve 5-15 gün sürebilir; bu süreyi takvime baştan yazıyoruz, çünkü doğrulanmamış profil yayına girmez ve ilk ayın bir bölümü burada kaybolabilir.",
          },
          {
            q: "Her ilçe için ayrı sayfa açmalı mıyız?",
            a: "Yalnızca o ilçeye dair anlamlı bilginiz veya gerçek varlığınız varsa. Otuz dokuz ilçenin tamamına aynı 150 kelimelik metni yayınlamak kapı sayfası (doorway) kalıbına girer ve zararı faydasından büyük olur. Önerimiz: hizmet verdiğiniz 3-6 ilçe için örnek iş, ulaşım ve yerel talep bilgisiyle sayfalar kurmak; diğer ilçeleri il sayfasında “hizmet bölgemiz” listesi ve şema ile işaretlemek.",
          },
          {
            q: "Yorumları kim toplayacak?",
            a: "Süreç sizin, kurulum bizim. En verimli model şudur: iş tamamlandıktan sonra otomatik e-posta/SMS ile doğrudan yorum linki gönderilir; olumsuz geri bildirim önce kendi panelinize düşer ve müşteriyle çözülür; yanıtlar standart tonda verilir. Biz bu akışı, yanıt şablonlarını ve haftalık takip ekranını kuruyoruz; içeriği siz üretirsiniz.",
          },
          {
            q: "Reklam varken lokal SEO şart mı?",
            a: "İkisi birbirini tamamlar ama yerini tutmaz. Reklam üst sırayı satın alır; organik ve harita görünürlüğü ise birikimlidir, reklam kapatıldığında da çalışır. En verimli kurulum, reklam açılış sayfalarını yerel içerik sayfalarınızla aynı kalitede tutmaktır: aynı içerik, aynı form, aynı ölçüm; böylece talep başına maliyet düşer.",
          },
          {
            q: "Kaç ayda sonuç görülür?",
            a: "Profil ve içerik düzeltmelerinin etkisi genelde ilk ayda gösterim olarak görünür; yerel sıralama ve talep artışı için 3-6 aylık çalışma gerekir, çünkü yorum birikimi ve yerel otorite zaman alır. Söz verdiğimiz şey sıralama değil rapor: ilk ay sonunda gösterim/arama/form tablosu, ilk çeyrek sonunda il bazlı karşılaştırma.",
          },
        ],
      },
      internal: {
        id: "ilgili-hizmetler",
        h2: "Yerel Görünürlüğü Kalıcı Kılan Katmanlar",
        paragraphs: [
          "Lokal başarı; sayfa mimarisi, yapısal veri ve Search Console verisinin doğru kullanımıyla kalıcı olur. Aşağıdaki sayfalar bu katmanları, şehir sayfaları ise il bazlı içerik kurgusunu anlatıyor.",
        ],
      },
    },
    ctaTitle: "Bölgenizi ölçerek başlayalım",
    ctaText:
      "Hedeflediğiniz il/ilçe ve 5-10 anahtar kelimeyi paylaşın; rakip ve profil denetimiyle birlikte ilk ay planını tablo hâlinde çıkaralım.",
  },

  "seo-uyumlu-sayfa-mimarisi": {
    h1: "SEO Uyumlu Sayfa Mimarisi: Taranabilir, Ölçeklenebilir Site İskeleti",
    definition: [
      "Sayfa mimarisi; sayfalarınızın nasıl adlandırıldığı, nasıl gruplandığı ve birbirine nasıl bağlandığıdır: URL kalıpları, kategori ağacı, başlık hiyerarşisi, iç link ağı ve indeksleme kararları. Tasarımdan önce gelen bu iskelet, SEO çalışmalarının kalıcılığını belirler; kötü bir mimarinin üzerine yazılmış iyi içerikler zamanla kaybolur.",
      "Ölçekli sitelerde mesele “doğru kelimeyi başlığa koymak” değil, binlerce sayfanın çakışmadan çalışmasıdır: aynı konuyu anlatan dört sayfa (kanibalizasyon), indekslenmesi gerekenin yanlışlıkla noindex'te kalması, filtre kombinasyonlarının sınırsız kopya URL üretmesi, sayfalama tekrarları ve breadcrumb'ların gerçek hiyerarşiyi yansıtmaması.",
      "Tardigrad Software olarak mimariyi iki katmanda kuruyoruz: kelime kümesi ↔ sayfa eşlemesi (her kümenin tek sahibi bir sayfa olur) ve teknik iskelet (URL şablonu, iç link, sitemap, canonical, yapısal veri). Mevcut sitenizi yeniden yapılandırırken de yeni projeyi kurarken de bu iki katmanı birlikte planlıyor ve kararı yazılı dokümana bağlıyoruz.",
    ],
    sections: {
      whyNeeded: {
        id: "neden-gerekli",
        h2: "Mimari Yanlışsa İçerik Neden Yetmez?",
        paragraphs: [
          "İçerik üretimi devam ederken sıralamanın kıpırdamamasının dört yaygın mimari sebebi var:",
        ],
        bullets: [
          { title: "Kendi sayfalarınız yarışır", text: "Aynı kelimeyi hedefleyen dört sayfa sıralamayı bölüştürür; hiçbiri ilk sayfaya çıkamaz.", icon: "Shuffle" },
          { title: "Tarama bütçesi israfı", text: "Filtre ve oturum URL'leri binlerce kopya sayfa üretir; Google önemli sayfaya erişmekte gecikir.", icon: "Gauge" },
          { title: "Yeni sayfa bulunamaz", text: "İç linki olmayan hizmet/blog sayfası indekslense bile otorite alamaz; tavanı düşük kalır.", icon: "Link2" },
          { title: "Taşıma kaosu", text: "URL'ler rastgele üretildiği için yönlendirme planı elle yapılır; her projede risk büyür.", icon: "AlertTriangle" },
        ],
        miniCta: "Sayfa listenizi ve URL yapınızı paylaşın; küme eşlemesi, çakışan sayfalar ve teknik iskelet için tek sayfalık mimari plan çıkaralım.",
      },
      scope: {
        id: "paket-kapsami",
        h2: "Kapsam: Hangi Kararlar Veriliyor?",
        checklist: [
          "Kelime kümesi envanteri ve sayfa eşlemesi; her kümenin tek sahibi sayfa olur, yakınlaşan sayfalar birleştirilir",
          "URL şablonu: /hizmetler/{slug}/ gibi tahmin edilebilir kalıplar; Türkçe karakter transliterasyon standardı, tarih/ID kalabalığından kaçınma",
          "Bilgi mimarisi: kategori derinliği, ana sayfadan hedef sayfaya maksimum 3-4 tık, menü ve footer link politikası",
          "İç link motoru: konuya göre ilgili içerik blokları, çapa metin kuralları ve yeni sayfanın ilk 48 saatte bağlantı alması",
          "İndeksleme politikası: hangi sayfa türü indekslenecek, hangisi noindex; canonical kuralları ve filtre davranışı",
          "robots.txt, XML sitemap (öncelikli kümeler için ayrı sitemap) ve içerik değişiminde otomatik güncelleme",
          "Şema eşlemesi: sayfa türü bazında Service / Article / FAQPage / ItemList / BreadcrumbList / Product",
          "Başlık ve description şablonları: karakter sınırları, marka eki, üretilme kuralı ve h1-h2-h3 hiyerarşisi",
          "Performans mimarisi: statik/SSR üretim, görsel politikası, sayfa başı Core Web Vitals hedefi",
          "Taşıma planı: eski URL → yeni URL eşlemesi, 301 zinciri ve test kuralları",
          "Ölçüm: indekslenme hızı, “taranmış ama indekslenmemiş” oranı, sayfa/küme bazlı gösterim ve kanibal tespiti",
        ],
      },
      process: {
        id: "surec",
        h2: "Çalışma Süreci: 6 Adım",
        steps: [
          { title: "1. Envanter (2-5 gün)", text: "Tüm URL'ler, sayfa türleri, kelime eşleşmeleri ve teknik durum Search Console verisiyle birleştirilerek listelenir. Çıktı: sayfa envanteri." },
          { title: "2. Küme analizi (2-5 gün)", text: "Sayfalar arama niyetine göre kümelenir; birleşecek, boşta kalan ve eksik sayfalar belirlenir. Çıktı: küme ↔ sayfa haritası." },
          { title: "3. Mimari plan (2-4 gün)", text: "URL şablonu, kategori ağacı, iç link ve indeksleme politikası yazılır. Çıktı: onaylı mimari dokümanı." },
          { title: "4. Uygulama (1-3 hafta)", text: "Şablon ve bileşenler, şema, sitemap/robots, breadcrumb ve iç link blokları devreye alınır. Çıktı: yayına hazır teknik iskelet." },
          { title: "5. Taşıma ve 301 (yaklaşık 1 hafta)", text: "Yapı değiştiyse eski URL eşlemesi, zincirsiz yönlendirme ve doğrulama testleri. Çıktı: 301 haritası + test raporu." },
          { title: "6. İzleme ve budama (sürekli)", text: "İndekslenme oranı, kanibal ve “iç link almayan yetim sayfa” takibi; aylık küçük düzeltmeler. Çıktı: aylık teknik rapor." },
        ],
      },
      benefits: {
        id: "faydalar",
        h2: "Kazanımlar",
        metrics: [
          { value: "tek hedef", label: "kelime kümesi başına tek sayfa; kanibalizasyon azalır" },
          { value: "%90+", label: "öncelikli sayfaların indekslenme oranı (takip + budama ile)" },
          { value: "≤3 tık", label: "ana sayfadan her öncelikli sayfaya erişim" },
          { value: "2-8 hafta", label: "yapısal iyileştirmelerin görünürlüğe yansıma süresi" },
        ],
        bullets: [
          { title: "Yeni içerik hızlı değerlenir", text: "Şablon ve iç link ağı hazır olduğundan yeni sayfa yayına girdiği gün bağlamına oturur.", icon: "Zap" },
          { title: "Ölçek yönetilebilir kalır", text: "Kırk sayfadan dört bin sayfaya çıkış, doğru mimariyle “aynı şablonu çoğaltmak” hâline gelir.", icon: "Layers" },
          { title: "Düşüşler erken yakalanır", text: "Sayfa/küme bazlı izleme, düşüşü genelden önce gösterir; müdahale ucuzlar.", icon: "LineChart" },
          { title: "Teknik borç birikmez", text: "Standart şablonlar sayesinde ekip veya ajans değişiminde site bozulmadan devam eder.", icon: "ShieldCheck" },
        ],
      },
      audience: {
        id: "kimler-icin",
        h2: "Kimler İçin Uygun?",
        bullets: [
          { title: "Geniş kataloglu siteler", text: "E-ticaret, emlak, iş ilanı, eğitim kataloğu gibi çok sayfalı yapılar.", icon: "Package" },
          { title: "İçerik üreten firmalar", text: "Blog, hizmet ve kategori sayfaları hızla çoğalan KOBİ'ler.", icon: "FileText" },
          { title: "Taşıma/redesign yapanlar", text: "Platform veya teknoloji değişiminde görünürlüğü koruması gereken markalar.", icon: "Truck" },
          { title: "Çok dilli siteler", text: "hreflang, dil/ülke URL şeması ve kopya içerik yönetimi gereken yapılar.", icon: "Languages" },
        ],
      },
      whyUs: {
        id: "neden-biz",
        h2: "Neden Tardigrad Software?",
        bullets: [
          { title: "SEO kararı koda dönüşür", text: "Mimari plan, şablon koduna işlenmediği sürece kâğıt üstünde kalır; ikisini birlikte uyguluyoruz.", icon: "Code2" },
          { title: "Statik üretim avantajı", text: "Sayfa, şema ve sitemap'i build sırasında üretiyoruz; tarama ve hız açısından en temiz kalıp budur.", icon: "Zap" },
          { title: "Taşımada risk yönetimi", text: "301 zinciri, indeksleme ve kanibal kontrolleriyle “yeni site yaptı, trafik düştü” hikâyesini tekrarlatmıyoruz.", icon: "Shield" },
          { title: "Rapor sayfa bazlı", text: "Genel gösterim değil: küme başına hareket, indekslenme oranı ve budama listesi veriyoruz.", icon: "BarChart3" },
        ],
      },
      faq: {
        id: "sss",
        h2: "Sayfa Mimarisi Hakkında Sıkça Sorulanlar",
        faq: [
          {
            q: "URL'lerde Türkçe karakter kullanmalı mıyız?",
            a: "Hayır; ASCII transliterasyon kullanın (ı→i, ş→s, ç→c, ğ→g, ö→o, ü→u). Türkçe karakterli URL'ler teknik olarak çalışır ama paylaşım ve kopyalama sırasında kodlanmış hâlde okunmaz olur, eski sistemlerde bozulur ve raporlarda karışır. Kuralımız: kısa, anlam taşıyan, tire ile ayrılan, kategori hiyerarşisini yansıtan ve tarih/ID içermeyen URL.",
          },
          {
            q: "Kategori mi, etiket mi, yoksa ikisi birden mi?",
            a: "Kategori sitenin sabit iskeletidir ve indekslenir; etiket geçici bir kesittir ve kontrol edilmezse sınırsız kopya sayfa üretir. Önerimiz kategori sayfalarını birincil yapı olarak kurmak, etiketleri ya hiç indekslememek ya da yalnızca yeterli içeriği (8-10+ sayfa) olanları indekslemek ve canonical ile doğru sayfaya referans vermektir. Etiket bombardımanı, büyük sitelerde en sık görülen kalite düşürücüdür.",
          },
          {
            q: "Sayfalama için noindex mi, rel=next mi kullanmalıyım?",
            a: "Modern uygulama: ikinci ve sonraki liste sayfalarını noindex,follow yapmak — Google taramayı sürdürür ama kopya liste sayfaları indekslenmez. Eski rel=next/prev etiketleri artık sinyal olarak dikkate alınmıyor; kaldırmanız zarar vermez, koymanız fayda sağlamaz. Kritik olan, sayfalama URL kalıbının tutarlı olması ve sitemap'e liste sayfalarının yalnızca ilk sayfasının girmesidir.",
          },
          {
            q: "Yapılandırılmış veri ile mimari nasıl bağdaşıyor?",
            a: "Şema, sayfanın hangi varlığı anlattığını makineye söyleyen katmandır ve hiyerarşiyle tutarlı olmalıdır. Hizmet sayfasında Service + BreadcrumbList + Organization, kategori sayfasında ItemList, ürün sayfasında Product görünür. Şema ile sayfadaki gerçek içerik çelişirse (olmayan fiyat, olmayan SSS) manuel işlem riski doğar; bu yüzden şema eşlemesini sayfa türü bazında mimari planda sabitliyoruz.",
          },
          {
            q: "Sitenin tamamını yeniden yapılandırmak trafiği düşürür mü?",
            a: "Korunmazsa evet; korunursa tipik olarak 1-3 hafta dalgalanma sonrası eski seviye veya üstü görülür. Düşüşü yaratan dört şey şunlardır: eksik 301 planı, canonical/işaretleme hataları, sayfa eşlemesinin bozulması ve hız kaybı. Bu yüzden yeniden yapılandırmayı ölçümle açıyor ve Search Console verisini ilk iki hafta günlük izliyoruz.",
          },
        ],
      },
      internal: {
        id: "ilgili-hizmetler",
        h2: "Mimariyi Uygulamaya Döken Çalışmalar",
        paragraphs: [
          "İskeletin çalışması teknik SEO, yapısal veri ve ölçüm kurulumu ile mümkündür. Aşağıdaki sayfalar bu uygulamaları; şehir sayfaları ise çok sayfalı yerel mimariyi anlatıyor.",
        ],
      },
    },
    ctaTitle: "Önce envanter, sonra karar",
    ctaText:
      "Sayfa listeniz ve mevcut URL yapınızla başlayalım; kelime kümesi eşlemesi, çakışan sayfalar ve teknik iskelet için tek sayfalık bir mimari plan çıkaralım.",
  },
}
