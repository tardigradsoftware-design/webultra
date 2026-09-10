import type { ServiceContent } from "@/types/content"

/**
 * Pilot hizmet içerikleri (Faz 1).
 * Bölüm 6 sırası elle yazılmıştır: tanım → neden gerekli → kapsam → süreç →
 * faydalar → kimler için → neden biz → SSS → iç linkler.
 * Hedef: 800-1400 kelime, anahtar kelime H1 + ilk 100 kelime + H2'lerde doğal geçiş.
 */
export const pilotContents: Record<string, ServiceContent> = {
  "kurumsal-web-sitesi": {
    h1: "Kurumsal Web Sitesi Nedir? Firmanızı Satışa Dönüştüren Site",
    definition: [
      "Kurumsal web sitesi, bir firmanın dijitaldeki resmidir: ürün ve hizmetlerini, referanslarını, ekip ve iletişim kanallarını tek bir güvenilir çatı altında toplayan sayfa bütünü. İyi tasarlanmış bir kurumsal web sitesi üç işi aynı anda yapar; markayı doğru anlatır, arama motorlarında ilgili sorgularda görünür ve ziyaretçiyi talebe (form, arama, WhatsApp) dönüştürür. Bu üçünden biri eksikse site, kartvizitten öteye geçmez.",
      "Teknik olarak kurumsal site; mobil öncelikli, hızlı açılan, ölçümlenen ve içerik ekiplerinin kendi başına güncelleyebildiği bir yapıdır. Tardigrad Software olarak bu yapıyı Next.js (App Router), TypeScript, Tailwind CSS ve shadcn/ui ile kuruyoruz; sayfalar sunucu tarafında render edildiği için Core Web Vitals hedefleri (LCP < 2.5s, CLS < 0.1, INP < 200ms) tasarım masasında belirleniyor, sonradan kurtarılmaya çalışılmıyor.",
      "Kurumsal web sitesi hizmeti, tasarım + kod + içerik mimarisi + SEO kurulumu + yayın ve bakım hattını tek pakette birleştirir. Böylece tasarım ajansı, yazılım firması ve SEO danışmanı arasındaki “bende değil, onda” bölgesi ortadan kalkar; tek bir ekip, tek bir fiyat ve tek bir takvimle ilerler.",
    ],
    sections: {
      whyNeeded: {
        id: "neden-gerekli",
        h2: "Kurumsal Web Sitesi Neden Bu Kadar Önemli?",
        paragraphs: [
          "Türkiye'de B2B alıcıların büyük kısmı, bir firmayla görüşmeye gitmeden önce o firmayı internetten aratır. Bu aramada karşılarına yavaş, mobilde dağınık veya son güncellemesi iki yıl önce yapılmış bir site çıkıyorsa, toplantıya önyargıyla gelirler. Kurumsal site bu yüzden pazarlama harcamasından önce gelen bir güven katmanıdır.",
          "Sorun çoğu zaman “güzel olmaması” değil, iş yapmamasıdır. Aşağıdaki dört tablo, mevcut sitesini yenilemek için gelen firmalarda en sık gördüğümüz durumlar:",
        ],
        bullets: [
          {
            title: "Ziyaretçi var, talep yok",
            text: "Sayfalar geziliyor ama form dolmuyor. Genelde sorun mesaj hiyerarşisindedir: ilk ekranda “biz kimiz” yazıyor, “sizin için ne yapıyoruz” yazmıyor.",
          },
          {
            title: "Mobilde kayan, 4 saniyede açılan sayfalar",
            text: "Trafiğin yarıdan fazlası mobilde. Ağır tema, optimize edilmemiş görseller ve rastgele eklentiler hem kullanıcıyı hem Google'ı yorar.",
          },
          {
            title: "Her güncelleme ajansa bağımlı",
            text: "Fiyat, ekip listesi veya referans değişecek; ticket açılacak, 3 gün beklenacak. İçerik bayatlar, site güvenilirliğini kaybeder.",
          },
          {
            title: "Ölçülemeyen sonuç",
            text: "Analitik kurulu değilse “sitemiz var” cümlesinin hiçbir ticari karşılığı yoktur. Nereden gelen kim, hangi sayfada ne yapıyor bilinmez.",
          },
        ],
        miniCta: "Mevcut sitenizi 15 maddelik teknik ve içerik kontrol listesiyle ücretsiz değerlendiriyoruz.",
      },
      scope: {
        id: "ne-alirsiniz",
        h2: "Kurumsal Web Sitesi Paket Kapsamı",
        paragraphs: [
          "Kapsamı “5 sayfa site” gibi belirsiz bir tanım yerine, teslimde tek tek kontrol edeceğiniz maddelerle yazıyoruz. Aşağıdaki liste standart kurulumumuzdur;",
        ],
        checklist: [
          "Anasayfa + hizmet/ürün sayfaları + hakkımızda + referanslar + kariyer + iletişim (sayfa listesi ücretsiz ön analizde netleşir)",
          "Marka diline özel UI kiti: renk paleti, tipografi ölçeği, buton/kart/form bileşen seti",
          "Mobil öncelikli düzen; 360px-1536px arası cihaz ve tarayıcı testleri",
          "Hız bütçesi: LCP < 2.5s, CLS < 0.1, INP < 200ms ve Lighthouse 90+ hedefi",
          "SEO altyapısı: URL taksonomisi, başlık/meta hiyerarşisi, canonical, sitemap, robots, iç link planı",
          "Yapısal veri: Organization / ProfessionalService, Service, FAQPage ve BreadcrumbList JSON-LD",
          "İletişim ve teklif formları: spam korumalı, e-posta + CRM aktarımlı, KVKK onaylı",
          "İçerik yönetim katmanı: blok bazlı sayfa düzeni, medya kütüphanesi, sürüm/önizleme",
          "Analitik ve hedef kurulumu: GA4 + Search Console + form/WhatsApp tıklama olayları",
          "Yayın ve bakım: CDN, SSL, yedekleme, izleme ve dokümante edilmiş dağıtım hattı",
        ],
      },
      process: {
        id: "nasil-calisiriz",
        h2: "Nasıl Çalışıyoruz? 9 Adımda Kurumsal Site",
        paragraphs: [
          "Web projelerinin yarısı kapsam belirsizliğinden, diğer yarısı da sıralı düşünülmemiş işlerden gecikir. Bu yüzden dokuz adımlı, her adımı bir çıktıya bağlı bir akış uyguluyoruz.",
        ],
        steps: [
          { title: "1. Keşif ve analiz", text: "90 dakikalık çalışma toplantısı: hedef kitle, karar vericiler, sunulan hizmetler, rakip siteleri ve mevcut içerik envanteri çıkarılır. Çıktı: sorun/fırsat listesi ve sayfa ağacı taslağı." },
          { title: "2. Strateji ve metin", text: "Her sayfanın tek bir işi olacak şekilde mesaj hiyerarşisi ve SEO odaklı metinler yazılır. Çıktı: sayfa bazlı içerik planı ve ilk metin seti." },
          { title: "3. UI/UX tasarımı", text: "Wireframe'den arayüze; lacivert-beyaz kurumsal dilde, şablon değil markaya özel bileşen seti. Çıktı: masaüstü + mobil tasarım ve UI kiti." },
          { title: "4. Geliştirme", text: "Next.js App Router + TypeScript + Tailwind + shadcn/ui ile kodlama; tip güvenli içerik modeli ve yönetim paneli. Çıktı: staging ortamında çalışan site." },
          { title: "5. SEO ve teknik kurulum", text: "Meta, canonical, sitemap, robots, schema, görsel alt metin ve yönlendirme planı uygulanır. Çıktı: Search Console'a doğrulanmış, taranabilir site." },
          { title: "6. Test ve performans", text: "Form/akış testleri, cihaz testleri, Lighthouse ve Core Web Vitals kontrolü, güvenlik başlıkları. Çıktı: kapatılmış hata listesi." },
          { title: "7. Yayına alma", text: "DNS ve SSL ayarları, CDN cache politikaları, 301 yönlendirmeleri ve son yedek ile canlıya geçiş. Çıktı: yayında, izlenen site." },
          { title: "8. Ölçüm ve iyileştirme", text: "30/60/90 gün periyotlarında gösterim, sıralama ve dönüşüm verisi okunur; sayfa bazlı iyileştirmeler yapılır. Çıktı: etki raporu." },
          { title: "9. Bakım anlaşması", text: "Güvenlik güncellemeleri, aylık doğrulanmış yedek geri yükleme tatbikatı, küçük değişiklikler ve yeni sayfa/ servis eklemeleri. Çıktı: bayatlamayan site." },
        ],
      },
      benefits: {
        id: "faydalar",
        h2: "Faydalar: Sitenin İş Tarafındaki Karşılığı",
        paragraphs: [
          "Kurumsal site yatırımını “prestij” olarak savunmuyoruz; aşağıdaki ölçülebilir karşılıklarla savunuyoruz. İlk 90 günün sonunda bu kalemlerin her birini birlikte değerlendiriyoruz.",
        ],
        bullets: [
          { title: "Daha fazla nitelikli talep", text: "Doğru kurgulanmış hizmet sayfaları ve CTA akışı ile form dönüşüm oranı tipik olarak 1,5-2,5 kat artar; gelen talebin satışa dönme oranı yükselir.", metric: "+%35-60" },
          { title: "Düşük talep başına maliyet", text: "Organik kanaldan gelen talep, reklam bütçesine bağımlılığı azaltır; aynı bütçeyle daha fazla görüşme yapılır.", metric: "-%30" },
          { title: "Hızlı ve stabil yayın", text: "Statik/edge render sayesinde sayfalar ilk baytta açılır; yoğun trafikte bile süre sabit kalır.", metric: "<2.5s" },
          { title: "Ekiplerin hızlanması", text: "İçerik değişikliği için geliştirici beklemez; pazarlama ekibi bloğu sürükleyip yayar.", metric: "-%40" },
          { title: "Uzun vadeli maliyet kontrolü", text: "Lisans/tema bağımlılığı olmadığı için yıllık bakım maliyeti, hazır sistemlerdeki eklenti/tema ücretlerinin çoğu zaman altında kalır." },
        ],
        metrics: [
          { value: "43", label: "hizmet sayfası tek mimaride" },
          { value: "9", label: "adımlı delivery süreci" },
          { value: "90+", label: "Lighthouse hedefi" },
          { value: "30/60/90", label: "gün etki raporlaması" },
        ],
      },
      audience: {
        id: "kimler-icin",
        h2: "Kimler İçin Uygun?",
        bullets: [
          { title: "Üretim ve toptan satış firmaları", text: "Ürün kataloğu, bayi talebi ve kurumsal güven ihtiyacı olan; “bizi arıyorlar ama sitelerine bakınca tereddüt ediyorlar” diyen firmalar." },
          { title: "Hizmet sektörü ve profesyonel ofisler", text: "Danışmanlık, mühendislik, muhasebe, hukuk ve sağlık ofisleri; randevu ve ön bilgilendirme akışına ihtiyaç duyanlar." },
          { title: "İhale ve kurumsal müşteriye satanlar", text: "Referans, sertifika ve ekip bilgisi görünür olmak zorunda olan firmalar." },
          { title: "Yeni kurulan girişimler", text: "İlk 6 ayda hem vitrin hem talep kanalı kuran, sonra büyütülebilir bir temel arayan ekipler." },
          { title: "Reklam bağımlı işletmeler", text: "Tıklama başı maliyet arttıkça nefesi daralan; organik kanal kurmak isteyen markalar." },
        ],
      },
      whyUs: {
        id: "neden-tardigrad",
        h2: "Neden Tardigrad Software?",
        bullets: [
          { title: "Tasarım ve kod aynı elde", text: "Figma'da kalan mockup teslim etmiyoruz; üretime hazır, tip güvenli ve ölçülen arayüz bırakıyoruz. Tasarım kararları kod kısıtlarıyla birlikte alınır." },
          { title: "SEO sonradan eklenmez", text: "URL yapısı, başlık hiyerarşisi, schema ve hız bütçesi ilk sprintte planlanır. “Önce site, sonra SEO” yaklaşımının açtığı delikleri kapatıyoruz." },
          { title: "Ölçeklenebilir mimari", text: "Bugün 10 sayfa, iki yıl sonra 800 sayfa; aynı altyapı, aynı hız. Hizmet × şehir sayfaları gibi genişlemeler baştan tasarlanır." },
          { title: "Sizden çıkan mülk", text: "Kod deposu, CI/CD, ortam değişkenleri ve dokümantasyon sizin adınıza teslim edilir. Başka bir yazılımcıya rahatça devredebilirsiniz." },
          { title: "Raporla konuşuruz", text: "Haftalık demo, aylık performans ve dönüşüm raporu; projenin durumu takipten değil ekrandan okunur." },
        ],
      },
      faq: {
        id: "sss",
        h2: "Kurumsal Web Sitesi Hakkında Sıkça Sorulanlar",
        paragraphs: [
          "Teklif görüşmelerinde en çok sorulan başlıklar. Listede olmayan bir konunuz varsa ücretsiz ön analizde netleştiriyoruz.",
        ],
        faq: [
          { q: "Kurumsal web sitesi ne kadar sürede hazır olur?", a: "Standart kapsamda 4-8 hafta arası tipiktir: 1. hafta analiz ve içerik planı, 2-3. hafta tasarım, 4-6. hafta geliştirme ve SEO kurulumu, son hafta test ve yayın. 15 sayfanın üzerindeki çok dilli projelerde takvim 10-12 haftaya uzar." },
          { q: "Fiyat nedir ve neden “paket” olarak vermiyorsunuz?", a: "Fiyat; sayfa/blok sayısı, özel tasarım ihtiyacı, içerik üretimi, entegrasyon (CRM, e-fatura, ödeme) ve bakım kapsamı ile belirlenir. Ön analiz sonrası tek fiyat ve tek takvim veriyoruz; çünkü “kurumsal site” tek bir ürün değil, ölçeği değişen bir iştir." },
          { q: "Mevcut sitemizdeki içerikler kaybolur mu, SEO'muz düşer mi?", a: "Düşmemesi için çalışıyoruz. Tüm mevcut URL'lerin envanterini çıkarıyor, eşdeğer yeni sayfalarla eşliyoruz ve 301 yönlendirme planı uyguluyoruz. Yayın sonrası 2-6 hafta arası geçici dalga normaldir; Search Console verisini birlikte izliyoruz." },
          { q: "İçeriği (metin, görsel, fiyat) kendimiz güncelleyebilir miyiz?", a: "Evet. Sayfalar blok bazlı yönetilir; başlık, metin, görsel, liste ve CTA değişiklikleri için geliştirici gerekmez. Yayın öncesi ekibinize 1 saatlik kullanım eğitimi ve kayıt bırakıyoruz." },
          { q: "Hangi teknolojiyi kullanıyorsunuz ve neden?", a: "Next.js (App Router) + TypeScript + Tailwind CSS + shadcn/ui ve PostgreSQL/Supabase. Sebep: sunucu tarafı render ile hızlı ve SEO dostu çıktı, tip güvenliği ile azalan hata oranı, bileşen sistemi ile düşük maliyetli bakım. Hazır tema/website builder kullanmıyoruz; bu nedenle satıcıya bağımlı kalmazsınız." },
          { q: "Alan adı, hosting ve e-posta işlerini kim yapıyor?", a: "Hepsi tarafımızca kurulur ve sizin adınıza yönetilir: domain, DNS, SSL, CDN/hosting ve kurumsal e-posta (SPF/DKIM/DMARC). Yenileme tarihlerini takibe alırız; hangi kaydın nerede olduğu dokümante edilir." },
          { q: "Bakım ve güvenlik kapsamı nasıl?", a: "Yayın sonrası ilk 30 gün hiperbakım dahildir. Sonrasında isteğe bağlı aylık bakım anlaşması ile güvenlik güncellemeleri, doğrulanmış yedek geri yükleme tatbikatı, uptime izleme ve küçük içerik/görsel değişiklikleri yürütülür." },
          { q: "Türkiye dışında yaşayan müşterilere de çalışıyor musunuz?", a: "Evet. Türkiye geneli ve yurt dışındaki firmalarla uzaktan çalışıyoruz; merkez İstanbul/Maltepe, toplantılar çevrim içi yapılır, istenirse yılda birkaç kez yüz yüze görüşülür." },
        ],
      },
      internal: {
        id: "ilgili-hizmetler",
        h2: "Kurumsal Web Sitesi ile Birlikte Planlanan Hizmetler",
        paragraphs: [
          "Kurumsal site tek başına bir proje değil, dijital dönüşümün vitrin katmanıdır. Aşağıdaki hizmetlerle birlikte planlandığında toplam etki belirgin biçimde artıyor; özellikle teknik SEO ve içerik mimarisi, sitenin bulunabilirliğini belirleyen iki temel başlıktır.",
        ],
      },
    },
    ctaTitle: "Kurumsal web siteniz için ücretsiz ön analiz",
    ctaText:
      "20 dakikalık görüşmede mevcut sitenizi 15 maddelik kontrol listesiyle değerlendiriyor, sayfa yapısı ve tahmini takvimi netleştiriyoruz. Ardından tek fiyat, tek takvim yazılı olarak geliyor.",
  },

  "e-ticaret-sitesi": {
    h1: "E-Ticaret Sitesi Kurulumu: Kendi Altyapınızda Satış",
    definition: [
      "E-ticaret sitesi, ürünlerinizi kendi markanız altında, komisyon ve kural bağımlılığı olmadan satabildiğiniz dijital mağazadır. Pazaryeri hesapları satış getirir; ancak müşteri verisi, fiyat esnekliği, kampanya kurgusu ve sadakat programı o platformun kurallarına tabidir. Kendi e-ticaret altyapınızda bu dört başlık tamamen sizin kontrolünüzde olur.",
      "Kurduğumuz yapı; ürün kataloğu ve varyant yönetimi, sepet ve ödeme akışı, kargo ve entegrasyon katmanı, stok/muhasebe senkronu ile yönetim panelinden oluşur. Ön yüz Next.js + Tailwind + shadcn/ui ile sunucu tarafında render edilir; kategori ve ürün sayfaları hız ve SEO hedeflerini karşılayacak şekilde tasarlanır. Böylece hem reklam kampanyalarına hem organik aramalara aynı anda açık bir kanal kurulur.",
      "Tardigrad Software olarak e-ticaret sitesini tek başına bir “mağaza” değil, siparişten faturaya uzayan bir operasyon zinciri olarak ele alıyoruz. Sepeti terk ettirmeyen bir akış, stok kırmasını önleyen bir senkron ve muhasebeye temiz veri gönderen bir entegrasyon; e-ticaret projesinin gerçek maliyetini ve getirisini belirleyen kısımlardır.",
    ],
    sections: {
      whyNeeded: {
        id: "neden-gerekli",
        h2: "Neden Kendi E-Ticaret Siteniz Olmalı?",
        paragraphs: [
          "Pazaryeri bağımlılığı, cirosu büyüyen her firma için bir risk masasıdır. Komisyon artışı, kategori kuralları, kampanya zorunlulukları ve hesap askıya alma ihtimali; işinizin kontrol dışı değişkenleridir. Kendi siteniz bu risklerin sigortasıdır.",
        ],
        bullets: [
          { title: "Komisyon marjı eritiyor", text: "Yüzde 8-22 arası komisyon, kargo ve kampanya kesintileri; kârlılığı en çok aşındıran kalem. Aynı ciro kendi sitenizde daha az kesintiyle kapanır." },
          { title: "Müşteri verisi sizde değil", text: "Pazaryeri size “müşteri”yi değil, siparişi verir. E-posta, davranış ve segment verisi olmadan tekrarlayan satış kurmak mümkün olmaz." },
          { title: "Fiyat ve stok senkronu kopuyor", text: "Aynı ürünü 3 kanalda elle yönetmek, stok kırması ve fiyat hatası demektir. Her hata ya iptal ya ceza olarak geri döner." },
          { title: "SEO'dan gelen ücretsiz trafik yok", text: "Marka dışı ürün aramalarında (ör. “xx modelo uyumlu filtre”) kendi mağazanıza trafik gelmiyorsa, en kârlı kanal hiç çalışmıyor demektir." },
        ],
        miniCta: "Mevcut pazaryeri operasyonunuzu birlikte sayalım: komisyon, iade, kargo ve stok maliyeti.",
      },
      scope: {
        id: "ne-alirsiniz",
        h2: "E-Ticaret Sitesi Paket Kapsamı",
        checklist: [
          "Ürün/varyant/attribute mimarisi ve toplu içe aktarma (Excel/CSV, XML besleme)",
          "Kategori ağacı, filtreleme, arama ve karşılaştırma deneyimi",
          "Sepet, tek sayfa ödeme, misafir giriş ve hızlı tekrar sipariş",
          "Sanal POS entegrasyonu (iyzico/PayTR/Craftgate/Stripe) + taksit ve 3D Secure",
          "Kargo firmaları, fiyat kuralları, iade/değişim akışı ve etiket üretimi",
          "Stok ve fiyat senkronu: pazaryerleri (Trendyol, Hepsiburada, Amazon TR) ile iki yönlü entegrasyon",
          "Muhasebe/e-fatura/e-arşiv entegrasyonu ve sipariş kapanış otomasyonu",
          "Kampanya altyapısı: kupon, sepette indirim, çoklu al, fiyat kuralları ve zamanlama",
          "Yönetim paneli: sipariş, stok, içerik, raporlama ve yetkilendirme",
          "SEO katmanı: kategori/ürün schema, canonical, indekslenebilir URL, hız ve görsel optimizasyonu",
          "Analitik ve olay takibi: GA4, Meta/TikTok piksel, sunucu taraflı olay aktarımı",
          "KVKK ve mesafeli satış metinleri, çerez politikası ve açık rıza akışları",
        ],
      },
      process: {
        id: "nasil-calisiriz",
        h2: "E-Ticaret Kurulum Süreci: 9 Adım",
        steps: [
          { title: "1. Süreç ve ürün analizi", text: "Katalog boyutu, varyant karmaşıklığı, sevkiyat modeli, iade oranları ve muhasebe akışı çıkarılır. Çıktı: veri modeli taslağı ve risk listesi." },
          { title: "2. Kanal stratejisi", text: "Kendi siteniz ile pazaryerleri arasındaki görev dağılımı (hangisi stok tutar, hangisi fiyatı belirler) yazılı kurala bağlanır." },
          { title: "3. UX ve ürün sayfaları", text: "Ürün sayfası şablonu, filtreleme ve ödeme akışı; sepeti terk oranını düşürecek şekilde tasarlanır." },
          { title: "4. Altyapı ve veri modeli", text: "Next.js ön yüz + PostgreSQL veri tabanı + yönetim paneli; stok, fiyat ve sipariş senkronu için kuyruk altyapısı kurulur." },
          { title: "5. Entegrasyonlar", text: "POS, kargo, muhasebe ve pazaryeri entegrasyonları tek tek doğrulanır; hata telafisi ve tekrar deneme (retry) senaryoları yazılır." },
          { title: "6. İçerik ve katalog yerleşimi", text: "Ürün metinleri, görseller, varyant ve SEO başlıkları; şablon + editöryal kontrol ile yerleştirilir." },
          { title: "7. Test ve pilot siparişler", text: "Gerçek ödeme ile uçtan uca sipariş, iade ve mutabakat testi; kargo etiketi ve fatura kontrolü yapılır." },
          { title: "8. Lansman ve reklam açılışı", text: "Kampanyalı lansman, stok hazırlığı, analitik hedefleri ve reklam beslemeleri ile canlı satış başlatılır." },
          { title: "9. Operasyon ve büyüme", text: "Aylık katalog/SEO genişletme, terk eden sepet otomasyonu, sadakat programı ve performans raporları." },
        ],
      },
      benefits: {
        id: "faydalar",
        h2: "Faydalar: Sayılarla Kendi Mağazanız",
        bullets: [
          { title: "Komisyonsuz satış hacmi", text: "Kendi kanalınızdan gelen siparişlerde platform komisyonu ödemezsiniz; marj, reklam ve sadelik yatırımına döner.", metric: "%0 komisyon" },
          { title: "Müşteri verisi sizinle", text: "E-posta, sipariş geçmişi ve segmentler; tekrarlayan satışı kuran asıl varlıktır.", metric: "sahip olunan liste" },
          { title: "Stok hatasında düşüş", text: "İki yönlü senkron ve uyarı mekanizması ile iptal edilen siparişler belirgin azalır.", metric: "-%60 iptal" },
          { title: "Organik trafik kanalı", text: "Ürün/kategori sayfalarının SEO mimarisi ile reklam dışı talep akışı kurulur.", metric: "6-9 ay" },
          { title: "Hız ve dönüşüm", text: "Mobilde 2 saniyenin altında açılan ürün sayfası ve tek ekran ödeme, sepeti terk oranını düşürür." },
        ],
        metrics: [
          { value: "1", label: "merkezî stok/fiyat kaynağı" },
          { value: "9", label: "adımlı kurulum" },
          { value: "<2s", label: "ürün sayfası LCP hedefi" },
          { value: "3", label: "kanal senkronu (site, pazaryeri, muhasebe)" },
        ],
      },
      audience: {
        id: "kimler-icin",
        h2: "Kimler İçin Uygun?",
        bullets: [
          { title: "Pazaryerine bağımlı satıcılar", text: "Cirosunun büyük kısmı pazaryerinden gelen ve komisyon ve risk yükünü azaltmak isteyen markalar." },
          { title: "Üretici ve ithalatçılar", text: "Bayii ağı olan, bayiye özel fiyat ve stok göstermek isteyen firmalar; B2B sipariş portalı ihtiyacı." },
          { title: "Niş ve butik markalar", text: "Anlatacak hikâyesi, sadık kitlesi ve premium konumlandırması olan; deneyimi kendi kontrol etmek isteyen markalar." },
          { title: "Kurumsal satış yapanlar", text: "Teklif bazlı, adetli ve sözleşmeli satış akışlarına e-ticaret mantığı eklemek isteyen firmalar." },
          { title: "Yurt dışına satış hedefleyenler", text: "Çok dilli/çok paralı mağaza ve cross-border kargo-ödeme kurgusu isteyen ihracatçılar." },
        ],
      },
      whyUs: {
        id: "neden-tardigrad",
        h2: "Neden Tardigrad Software ile E-Ticaret?",
        bullets: [
          { title: "Operasyonu da kuruyoruz", text: "Siparişten faturaya giden hattı entegre etmeden “site bitti” demiyoruz. E-fatura, mutabakat ve kargo süreçleri ilk günden çalışır." },
          { title: "Hazır kutu yerine ölçülebilir hız", text: "Ağır hazır platformlar yerine Next.js tabanlı ön yüz; kategori/ürün sayfaları hızlı açılır ve SEO'da avantaj üretir." },
          { title: "Entegrasyon deneyimi", text: "iyzico, PayTR, Craftgate, Stripe, Mikro, Logo, Paraşüt, Trendyol ve Hepsiburada API'ları ile çalıştık; webhook, retry ve mutabakat senaryoları hazır." },
          { title: "Kademeli başlangıç", text: "Tüm katalogu tek seferde taşımak zorunda değilsiniz. Önce en çok satan 200 SKU ile canlıya çıkar, sonra büyütürüz." },
        ],
      },
      faq: {
        id: "sss",
        h2: "E-Ticaret Sitesi Hakkında Sıkça Sorulanlar",
        faq: [
          { q: "Kendi sitemizden satış, pazaryerinden daha mı kârlı?", a: "Genellikle evet ama bu tek başına cevap değil. Kendi kanalınızda komisyon ödemezsiniz; buna karşılık trafiği siz getirirsiniz (reklam + SEO). Kârlılık farkı; sepet ortalaması, iade oranı ve tekrar satın alma davranışına göre hesaplanır. Ücretsiz ön analizde bu üç sayı ile birlikte basit bir kârlılık modeli kuruyoruz." },
          { q: "Stok ve fiyat senkronunu nasıl sağlıyorsunuz?", a: "Tek kaynak (genellikle ERP/muhasebe veya e-ticaret paneli) belirlenir; diğer kanallar bu kaynağa webhook veya periyodik job ile bağlanır. Çakışma ve gecikme senaryoları için tampon stok, kuyruk ve alarm kurulumu standarttır." },
          { q: "Ödeme altyapısında hangi seçenekler var?", a: "Türkiye'de iyzico, PayTR, Craftgate gibi sanal POS sağlayıcıları; yurt dışı kartları için Stripe. Taksit, 3D Secure, pazaryeri ödeme (marketplace) ve B2B havale/EFT akışları desteklenir. Şirket tipi ve sektörünüze göre hangi sağlayıcının uygun olduğunu görüşmede netleştiriyoruz." },
          { q: "Sitenin maliyeti ne kadar?", a: "Kapsama göre değişir: temel mağaza + ödeme + kargo kurulumu, pazaryeri/muhasebe senkronu ve yönetim paneli kalemleri fiyatı belirler. Hazır bulut mağaza çözümlerinin aylık ücretleri ile kendi altyapınızın toplam sahip olma maliyetini karşılaştıran bir tablo veriyoruz; çoğu KOBİ'de 12-18 ay içinde kendi altyapısı öne geçiyor." },
          { q: "Ne kadar sürede canlıya geçeriz?", a: "Standart kurulum 6-10 hafta. Çok kanallı senkron ve 5.000+ SKU'lu projelerde 10-16 hafta. Pilot lansman yaklaşımıyla ilk 200 SKU ile 5. haftada satışa başlamanızı öneriyoruz." },
          { q: "SEO tarafında ne yapıyorsunuz?", a: "Kategori/ürün URL taksonomisi, başlık ve meta şablonları, Product/Offer/Review schema, görsel optimizasyonu, filtre sayfalarının yönetimi (indeksle/yoksay kuralları), iç link ve sitemap üretimi. Ayrıca kopya içerik riski yaratmamak için ürün açıklamalarını üretici metninden ayrıştırıyoruz." },
          { q: "Sipariş ve iade süreçlerinde kim sorumlu?", a: "Operasyon sizin, araçlar bizim. Panelde sipariş durumu, iade talebi, kargo etiketi ve müşteri notu akışını ekipleriniz yönetir. Süreç hatası olan yerlerde (ör. iade mutabakatı) ek otomasyon kurarız." },
        ],
      },
      internal: {
        id: "ilgili-hizmetler",
        h2: "E-Ticaret ile Birlikte Kurulan Sistemler",
        paragraphs: [
          "Mağaza tek başına bir site değil; stok, sipariş, teklif ve entegrasyon katmanlarıyla bir sistemdir. Aşağıdaki hizmet sayfaları, kurulumu tamamlayan parçaları anlatıyor. Şehir sayfalarında ise yerel rekabet ve lojistik dinamiklerini bulacaksınız.",
        ],
      },
    },
    ctaTitle: "E-ticaret kurulumu için ücretsiz ön analiz",
    ctaText:
      "Katalog boyutunuzu, pazaryeri ciro dağılımınızı ve iade oranlarınızı konuşuyoruz; ardından komisyon/marj hesaplı bir kârlılık modeli ve tek fiyat + tek takvim geliyor.",
  },
}
