import type { ServiceContent } from "@/types/content"

/**
 * FAZ 2 — grup 5b: kurumsal e-posta, API entegrasyonu, ödeme/WhatsApp/CRM, AI içerik, dijital dönüşüm.
 */
export const itaiContents2: Record<string, ServiceContent> = {
  "kurumsal-email": {
    h1: "Kurumsal E-Posta: @markaniz Adresinde Güvenilir ve Kayıtlı İletişim",
    definition: [
      "Kurumsal e-posta, şirket adıyla (ad@firmaniz.com) kullanılan, yönetilen ve arşivlenebilen posta hizmetidir. Bireysel Gmail/Outlook hesaplarından farkı üç katmandadır: kimlik (adres kuruma aittir, kişiye değil), süreklilik (çalışan ayrıldığında kutu ve yazışma şirkette kalır) ve teslimat (SPF/DKIM/DMARC sayesinde gönderimler spam kutusuna düşmez).",
      "KOBİ'lerde en sık gördüğümüz tablo şudur: satışçı kişisel Gmail'inden teklif gönderir, gelen kutusu kişiyle birlikte gider; teklifler ve fiyat pazarlıkları hiçbir yerde merkezi kayıtta değildir; kurum adıyla gönderilen mailler spam'e düşer, çünkü DNS'te DKIM yoktur. Bu üç sorun, tek kurulumla kapanır.",
      "Tardigrad Software olarak Microsoft 365, Google Workspace veya yerli sağlayıcılar üzerinden kurumsal posta kurulumunu yapıyoruz: alan adı ve DNS kayıtları, MX, imzalama (DKIM) ve politika (DMARC), ortak adresler, kimlik avına karşı ayarlar, yedek/arşiv ve gelen kutusunun CRM/form sistemleriyle entegrasyonu.",
    ],
    sections: {
      whyNeeded: {
        id: "neden-gerekli",
        h2: "Kişisel Adresten Mail Atmanın Bedeli",
        bullets: [
          { title: "Kayıtlar kişide kalır", text: "Çalışan ayrılınca müşteri yazışmaları, teklif geçmişi ve fiyat pazarlığıyla birlikte gider.", icon: "UserX" },
          { title: "Spam kutusu", text: "İmzasız/eksik doğrulamalı gönderimler güvenilmez sayılır; teklifiniz müşteriye ulaşmaz ama siz bilmezsiniz.", icon: "MailWarning" },
          { title: "Taklit ve dolandırıcılık", text: "Kurum adına sahte IBAN/ödeme maili, en sık kullanılan B2B saldırısıdır; DMARC olmadan bunu ayırt etmek zordur.", icon: "ShieldAlert" },
          { title: "Yetkisiz arşiv", text: "Vergi, sözleşme ve hukuki süreç için gerekli yazışmalar dağınıktır; bulunması kişilerin iyi niyetine bağlıdır.", icon: "Archive" },
        ],
        miniCta: "Alan adınızı paylaşın; mevcut e-posta kimliğini, SPF/DKIM/DMARC durumunu ve riskleri 30 dakikada tablo hâlinde gösterelim.",
      },
      scope: {
        id: "paket-kapsami",
        h2: "Kurulum Kapsamı",
        checklist: [
          "Sağlayıcı ve plan seçimi: Microsoft 365 / Google Workspace / yerli sağlayıcı; kullanıcı, saklama alanı ve lisan karşılaştırması",
          "Alan adı doğrulama ve DNS: MX, SPF (tek kayıt birliği), DKIM imzalama, DMARC politikası ve rapor adresi",
          "Kullanıcı ve grup yönetimi: kişi hesapları, ortak adresler (info, satis, muhasebe), dağıtım listeleri, yetkisiz erişim engeli",
          "Kimlik güvenliği: 2FA zorunluluğu, oturum süreleri, cihaz yönetimi, parola politikası, eski sistemler için uygulama şifreleri kısıtı",
          "İmza ve marka standardı: kurumsal e-posta imzası şablonu (logo, unvan, yasal uyarı, KVKK notu) ve merkezi yönetim",
          "Arşiv ve süreklilik: silinen öğe kurtarma, e-posta yedekleme/okuma arşivi, ayrılışta kutu devri ve otomatik yanıt kuralları",
          "Alma/gönderme sınırları: dışa büyük ek kısıtı, otomatik yanıt ve döngü önleme, filtre/etiket kuralları ve gelen kutusu paylaşımı",
          "Phishing dayanıklılığı: gelen mesaj işaretlemeleri, bağlantı tarama, dış alan adlarından gelen “IBAN değişti” benzeri kalıplarda uyarı",
          "Entegrasyonlar: e-posta → CRM/talep (gelen mailden kayıt açma), bildirim gönderimi (SMTP/Graph API), imza ve fatura iletimi",
          "Mobil kurulum: kurum cihazlarında profil (MDM/Intune), kişisel cihazlarda erişim politikası ve veri ayrımı",
          "Eski sistemden taşıma: IMAP/araç tabanlı kutu göçü, ortak takıp ayarları ve takvim/devralma adımları",
        ],
      },
      process: {
        id: "surec",
        h2: "Kurulum Süreci: 6 Adım",
        steps: [
          { title: "1. Envanter (0,5-1 gün)", text: "Alan adı, mevcut MX/kayıtlar, kullanıcı listesi ve saklama ihtiyacı çıkarılır. Çıktı: mevcut durum tablosu.", },
          { title: "2. Sağlayıcı kararı (0,5-1 gün)", text: "Maliyet, Office/Google bağımlılığı, yerli bulut tercihi, yedek/erişim gereksinimleri. Çıktı: plan ve gerekçe.", },
          { title: "3. Hesap ve DNS kurulumu (1-2 gün)", text: "Kullanıcı/grup açılışı, doğrulama kayıtları, imzalama ve politika. Çıktı: çalışır sistem + kimlik avına karşı temel set.", },
          { title: "4. Taşıma (1-4 gün)", text: "Kutu göçü, takvim/kişi aktarımı, mobil kurulum, ortak klasör/etiketler. Çıktı: eksiksiz devralma.", },
          { title: "5. Politika ve eğitim (0,5-1 gün)", text: "İmza standardı, 2FA zorunluluğu, kısa kullanıcı eğitimi ve “şüpheli mail” prosedürü. Çıktı: ekip alışkanlığı.", },
          { title: "6. İzleme", text: "DMARC raporlarının aylık okuması, teslimat sorunları ve hesap denetimi. Çıktı: aylık not.", },
        ],
      },
      benefits: {
        id: "faydalar",
        h2: "Kazanımlar",
        metrics: [
          { value: "teslimat", label: "DKIM/DMARC sonrası dışa gönderimde spam düşüşü (tipik gözlem)" },
          { value: "0", label: "“çalışan ayrıldı, kutuya erişemiyoruz” senaryosu hedefi" },
          { value: "arşiv", label: "yazışma kuruma ait; hukuki ve mali kayıt hazır" },
          { value: "30 dk", label: "kullanıcı başı kurulum ve mobil eşleme süresi" },
        ],
        bullets: [
          { title: "Güvenilir marka", text: "Kurum adıyla yazılan, imzalı ve tutarlı bir iletişim; teklif ve sözleşme tarafında ilk izlenim.", icon: "BadgeCheck" },
          { title: "Dolandırıcılığa karşı savunma", text: "DMARC + personeli eğitimi, sahte fatura/IBAN değişimi girişimlerini büyük ölçüde kırar.", icon: "ShieldCheck" },
          { title: "Süreklilik", text: "İzin, hastalık ve ayrılıkta iş durmaz; ortak kutu ve arşiv çalışır.", icon: "Users" },
          { title: "Sistem entegrasyonu", text: "Gelen e-postaların otomatik talebe, giden bildirimlerin log'a dönmesi mümkün olur.", icon: "Plug" },
        ],
      },
      audience: {
        id: "kimler-icin",
        h2: "Kimler İçin Uygun?",
        bullets: [
          { title: "Kişisel hesapla satış yapanlar", text: "B2B teklif ve sözleşme trafiği olan tüm firmalar; en acil grup budur.", icon: "MailWarning" },
          { title: "Çalışan devri olan yapılar", text: "Saha/satış kadrosu değişen işletmelerde kayıt sürekliliği zorunlu.", icon: "UserX" },
          { title: "Regülasyon ve denetim", text: "Arşiv, erişim izi ve saklama süresi gerektiren sektörler.", icon: "Archive" },
          { title: "Taşınma/ajans değişimi", text: "Eski sağlayıcıdan çıkış ve DNS düzensizliği yaşayan firmalar.", icon: "Truck" },
        ],
      },
      whyUs: {
        id: "neden-biz",
        h2: "Neden Tardigrad Software?",
        bullets: [
          { title: "DNS'i de biz yönetiyoruz", text: "E-posta sorunlarının çoğu DNS'te başlar; alan adı, MX, SPF ve DKIM'i tek elde doğru kuruyoruz.", icon: "Globe" },
          { title: "Site ile birlikte tasarlıyoruz", text: "Form bildirimleri, şifre sıfırlama ve otomatik yanıtlar sizin alan adınızdan ve imzalı gider; “noreply@gmail.com” görünmez.", icon: "Code2" },
          { title: "Kademeli DMARC", text: "Bir gecede reject vermek maillerinizi kesebilir; raporlama → karantina → red sırasıyla ilerliyoruz.", icon: "Shield" },
          { title: "Devirde tarafsızız", text: "Lisans ve erişim sizin adınıza; sağlayıcı değişimi yeniden yazım değil, taşıma işidir.", icon: "GitBranch" },
        ],
      },
      faq: {
        id: "sss",
        h2: "Kurumsal E-Posta Hakkında Sıkça Sorulanlar",
        faq: [
          {
            q: "Microsoft 365 mi, Google Workspace mi, yerli sağlayıcı mı?",
            a: "Kullanım alışkanlığınız belirler: Office dosyaları ve Teams merkezinizdeyse M365, tarayıcı/Gmail alışkanlığı ve doküman iş birliği öndeyse Workspace daha az sürtünme üretir. Yerli sağlayıcılar ise veri yerelliği, fatura/destek yakınlığı ve maliyet açısından avantajlıdır; karşılığında bazı kurumsal entegrasyonları (Outlook/Teams ekosistemi) elle kurmak gerekebilir. Saklama alanı, arşiv ihtiyacı ve kullanıcı sayısı karşılaştırmayı netleştirir; biz üçünü de saat başına kullanıcı maliyeti + toplam sahip olma maliyeti olarak tablolaştırıyoruz.",
          },
          {
            q: "Geçiş sırasında mailleri kaybeder miyiz?",
            a: "Doğru sırayla yapılırsan hayır. Kurulum kuralımız: yeni sistemde hesaplar açılır, eski ve yeni sistem bir süre birlikte MX altında çalışır ya da IMAP göçüyle kutular kopyalanır, taşıma tamamlandıktan sonra eski hesap en az 30 gün salt-okunur açık kalır. Ortak klasörler, takvim ve kişiler ayrı iş kalemi olarak planlanır; tek hamlede “MX'i çevir” yapmak, veri kaybının ana sebebidir.",
          },
          {
            q: "DMARC gerçekten şart mı?",
            a: "Marka adına e-posta gönderen her kurum için evet; B2B'de IBAN değişikliği ve sahte fatura saldırılarının önündeki tek etkili teknik bariyer. Şart olan bir diğer şey, DMARC'ı kademeli kurmaktır: önce p=none ile rapor toplamak, kimlerin sizin adınıza gönderdiğini görmek, sonra karantina/red'e geçmek. Doğrudan reject yazmak, üçüncü parti servislerinizin (muhasebe, toplu mail, CRM) maillerini keser.",
          },
          {
            q: "E-posta arşivi ve yasal saklama ne kadar gerekli?",
            a: "Türkiye'de ticari yazışmalar ve mali belgeler için saklama yükümlülükleri vardır (vergi mevzuatı, delil ihtiyacı, KVKK saklama süreleri). Pratik yaklaşım: kritik kutular için silinemeyen/geri alınabilir arşiv katmanı, çalışan ayrılığında otomatik devir ve saklama süresi politikasıdır. Arşivi “yedek klasöründe PST” ile değil, erişimi ve bütünlüğü yönetilen bir katmanla kurmak gerekir.",
          },
          {
            q: "Toplu gönderim (bülten) ile kurumsal postayı aynı adresten yapabilir miyiz?",
            a: "Yapmamalısınız. Bülten/pazarlama gönderimi ayrı bir alt alan adı ve ayrı gönderen kimliğiyle (ör. mail.firmaniz.com + kendi SPF/DKIM, farklı içerik) yapılmalıdır; aksi hâlde yüksek şikâyet oranı tüm gönderimlerinize bulaşır ve teslimatınız bozulur. Ayrıca ticari elektronik ileti için İYS onayı ve gönderim listesi yönetimi zorunludur; biz bu ayrımı hem DNS hem uygulama bildirim tarafında kurguluyoruz.",
          },
        ],
      },
      internal: {
        id: "ilgili-hizmetler",
        h2: "E-Postayı Güçlü Kuran Katmanlar",
        paragraphs: [
          "Teslimat, alan adı/DNS disiplinine ve bildirim otomasyonuna bağlıdır. Aşağıdaki sayfalar bu bağımlılıkları anlatıyor; şehir sayfalarında yerel işletme kurgularını bulabilirsiniz.",
        ],
      },
    },
    ctaTitle: "Önce teslimat denetimi",
    ctaText:
      "Alan adınızı ve mevcut e-posta sağlayıcınızı paylaşın; SPF/DKIM/DMARC durumunu, riskleri ve üç adımlık kurulum planını tek sayfada özetleyelim.",
  },

  "api-entegrasyonu": {
    h1: "API Entegrasyonu: Sistemlerin Birbirine Konuştuğu Katman",
    definition: [
      "API entegrasyonu, birbirinden bağımsız yazılımların veriyi kontrollü biçimde paylaşmasıdır: siparişin muhasebeye düşmesi, stokun e-ticarete yansıması, gelen talebin CRM'e kaydı, kargo durumunun müşteriye bildirilmesi. İşlem elle yapılmadığında üç şey kazanılır: süre, tutarlılık ve izlenebilirlik.",
      "Entegrasyonun kolay kısmı dokümanı okuyup istek göndermektir; zor kısmı sınırlardır: kotalar, kimlik doğrulama rotasyonu, alan eşlemesi, saat dilimi ve para birimi, yinelenen isteklerin engellenmesi (idempotens), hata ve geri deneme stratejisi, gecikmeli/kısmi verinin doğru modellenmesi. Projelerin büyük bölümü bu sınırlarda tökezler; “bağladık” denir, üçüncü ayda veri kayması fark edilir.",
      "Tardigrad Software olarak entegrasyonları kuyruk + kayıt (log) deseninde kuruyoruz: her aktarım izlenir, başarısız iş yeniden denenir, uyuşmazlıklar tek panelde görünür. Ön muhasebe/ERP, e-ticaret, kargo, ödeme, banka ve e-imza sağlayıcılarıyla çalıştığımız için hangi alanın kimde kalacağını baştan netleştiriyoruz.",
    ],
    sections: {
      whyNeeded: {
        id: "neden-gerekli",
        h2: "Entegrasyonsuz Neler Olur?",
        bullets: [
          { title: "Çift veri girişi", text: "Sipariş hem panele hem muhasebeye girilir; ikisi bir noktada ayrışır ve fark kapanmaz.", icon: "Copy" },
          { title: "Stok ve fiyat kayması", text: "Kanallar senkron değilse ya çift satış ya da görünürde var gerçekte yok stoğu yaşarsınız.", icon: "PackageX" },
          { title: "Gecikmeli faturalama", text: "Belge kesimi ay sonuna kalır; tahsilat ve raporlama da gecikir.", icon: "Clock" },
          { title: "Kırılan entegrasyonlar", text: "Sağlayıcı sürüm günceller, sessizce hata üretir; siz aylar sonra fark edebilirsiniz.", icon: "FileWarning" },
        ],
        miniCta: "Hangi sistemler arasında hangi veriyi elle taşıdığınızı anlatın; akış başına kazanım ve riskleri tablo hâlinde özetleyelim.",
      },
      scope: {
        id: "paket-kapsami",
        h2: "Entegrasyon Kapsamı",
        checklist: [
          "Akış envanteri: hangi veri, hangi yönde, hangi sıklıkta, hangi alanda eşleşiyor ve kim “asıl kaynak” (source of truth)",
          "Kimlik ve erişim: API anahtarı/OAuth, izin kapsamı (scope), rotasyon prosedürü, env vars ile yönetim (koda gömülü sır yok)",
          "Alan eşleme tablosu: sistemler arası karşılıklar, tip dönüşümleri, para birimi/vergi/kur ve saat dilimi kuralları",
          "Güvenilirlik deseni: kuyruk + tekrar deneme (üstel geri çekilme), ölü mesaj kuyruğu, idempotens anahtarı, aynı kaydın iki kez yazılmaması",
          "Sayfalama ve kota: limit başına istek, inceleme (backoff), toplu işlerde zamana yayma ve kısmi ilerleme kaydı",
          "Doğrulama ve uyuşmazlık yönetimi: alan zorunlulukları, referans bütünlüğü (satır ↔ ürün ↔ cari), panelde “elle düzelt” ekranı",
          "Kayıt ve izleme: çağrı logu (istek/yanıt özeti), hata oranı ve gecikme metrikleri, kritik akışta uyarı",
          "Güvenlik: hassas alan maskeleme, PII loga yazılmaması, webhook imza doğrulama, test/üretim anahtar ayrımı",
          "Geri alma ve mutabakat: düzeltici işlemler (iade, iptal), gün sonu mutabakat raporu ve iki sistem arasındaki sayı farkının gösterimi",
          "Tipli SDK/istemci: Next.js sunucu tarafında doğrulanmış tiplerle çağrı; sözleşme değişimi derlemede yakalanır",
          "Sözleşme ve dokümantasyon: hangi alan kimde kalır, limitler, SLA'lar ve sağlayıcı değişiminde etki analizi",
        ],
      },
      process: {
        id: "surec",
        h2: "Kurulum Süreci: 6 Adım",
        steps: [
          { title: "1. Akış ve kaynak kararı (1-3 gün)", text: "Hangi sistemin asıl kaynak olduğu ve hangi verinin tek taraflı akacağı belirlenir. Çıktı: akış diyagramı + eşleme tablosu.", },
          { title: "2. Erişim ve test ortamı (0,5-2 gün)", text: "Anahtar/scope talepleri, sandbox hesapları ve test verisi. Çıktı: çalışan “merhaba dünya” çağrısı ve limit notları.", },
          { title: "3. Geliştirme (2-10 gün)", text: "Kuyruk, hata yönetimi, eşleme, panel ve log katmanıyla birlikte uçtan uca akış. Çıktı: staging'de doğrulanmış entegrasyon.", },
          { title: "4. Mutabakat testi (1-3 gün)", text: "Örnek 50-200 kayıt çift sistemde karşılaştırılır; farklar düzeltilir. Çıktı: sayısal mutabakat raporu.", },
          { title: "5. Yayın ve gölge çalıştırma (1 hafta)", text: "Otomasyon devrede ama elle akış da sürer; hata oranı düşene kadar çift gider. Çıktı: canlı + güven eşiği.", },
          { title: "6. İzleme ve bakım", text: "Kota/sürüm değişiklikleri, sağlık kontrolü ve aylık rapor. Çıktı: sürdürülebilir entegrasyon.", },
        ],
      },
      benefits: {
        id: "faydalar",
        h2: "Kazanımlar",
        metrics: [
          { value: "-%70-90", label: "aktarılan kayıt başına harcanan süre" },
          { value: "0", label: "hedefi: çift veri girişi kaynaklı uyuşmazlık" },
          { value: "anlık", label: "stok/fiyat/durum senkronu (kota sınırları dâhilinde)" },
          { value: "görünür", label: "hatalı aktarım panelde; e-posta tahminiyle değil" },
        ],
        bullets: [
          { title: "Ay sonu kısalır", text: "Belge ve cari mutabakatı beklemek yerine akış sırasında üretilir; kapanış günler yerine saatler sürer.", icon: "CalendarCheck" },
          { title: "Ölçek artınca fark büyür", text: "Günde 50 sipariş için elle iş yapılabilir; 500 için yapılamaz. Entegrasyon, büyümenin ön koşuludur.", icon: "TrendingUp" },
          { title: "Müşteriye doğru söz", text: "Kargo/stok/termin bilgisi doğru olduğundan, iade ve şikâyet trafiği azalır.", icon: "ShieldCheck" },
          { title: "Ekip moralı", text: "Kopyala-yapıştır işi kaybolur; insan muhakemesi gerektiren iş kalır.", icon: "Smile" },
        ],
      },
      audience: {
        id: "kimler-icin",
        h2: "Kimler İçin Uygun?",
        bullets: [
          { title: "Ön muhasebe/ERP kullananlar", text: "Sipariş-fatura-cari arasında elle aktarım yapan firmalar.", icon: "Calculator" },
          { title: "Çok kanallı satış", text: "E-ticaret, pazaryeri, mağaza ve bayinin aynı stoku paylaştığı yapılar.", icon: "ShoppingBag" },
          { title: "Kargo ve ödeme yoğunluğ", text: "Günlük çoklu sevkiyat/ödeme hareketi olan işletmeler.", icon: "Truck" },
          { title: "Kurum içi araçlar", text: "İK, satın alma, onay ve talep süreçleri ayrı sistemlerde duran yapılar.", icon: "Network" },
        ],
      },
      whyUs: {
        id: "neden-biz",
        h2: "Neden Tardigrad Software?",
        bullets: [
          { title: "Hata tarafını tasarlarız", text: "Entegrasyonun yarısı hata yönetimidir: tekrar deneme, ölü kuyruk, elle düzeltme ekranı ve uyuşmazlık raporu kapsamda baştan yer alır.", icon: "Wrench" },
          { title: "Sağlayıcıları tanıyoruz", text: "Logo/Mikro/Bizim Hesap/Paraşüt, kargo API'leri, sanal POS ve e-fatura entegratörlerinde bilinen tuzaklar; deneme-yanılmayı sizin bütçenizle yapmıyoruz.", icon: "Plug" },
          { title: "Kaynağı tek tutarız", text: "Hangi alan kimde yaşar kararını yazıyoruz; çift yazma, uyuşmazlığın ana sebebidir.", icon: "Database" },
          { title: "İzlenebilirlik standart", text: "“Muhasebeye gitmedi” itirazı log ile kapanır; tahminle tartışılmaz.", icon: "LineChart" },
        ],
      },
      faq: {
        id: "sss",
        h2: "API Entegrasyonu Hakkında Sıkça Sorulanlar",
        faq: [
          {
            q: "Hazır entegratör (Zapier, Make, yerli connector) kullanmak yerine neden kod yazalım?",
            a: "Hazır bağlaçlar basit, düşük hacimli ve hatasız tolere edilebilen akışlar için idealdir; biz de ilk tercihimizi onlardan yana kullanabiliyoruz. Kod tarafına geçmek için üç gerekçe var: veri dönüşümü ve iş kuralınız kalıba sığmıyor, hacim nedeniyle kota/birim maliyeti büyüyor, ya da başarısız bir aktarımın maliyeti yüksek (sipariş/fatura/stok). Bu durumda kuyruk + kayıt + mutabakat deseni gerekir, ki bunu hazır araçlar çoğu zaman veremez.",
          },
          {
            q: "Entegrasyon kırılırsa ne olacak? Bunu nasıl öğreniriz?",
            a: "Kurulumun olmazsa olmazı uyarı hattıdır. Her akış için üç metrik izlenir: başarı oranı, gecikme ve kuyruk derinliği. Eşik aşılınca (ör. %5 hata, 30 dk gecikme) teknik ekibe uyarı gider; panelde “düzelt” aksiyonu bulunur. Sağlayıcı sürüm/notifikasyon takibi de kapsamdadır — çoğu kırılma, bir API alanının sessizce değişmesinden çıkar.",
          },
          {
            q: "Aynı kaydı iki kez yazma riskini nasıl engelliyorsunuz?",
            a: "İki kural: idempotens anahtarı ve tek kaynak. Gönderilen her işleme, kaynak sistemden türetilen benzersiz bir kimlik iliştirilir; sağlayıcı tarafında aynı kimlik tekrar gelirse işlem yeniden uygulanmaz. Birinci kural işe yaramazsa (sağlayıcı desteklemiyorsa) “yazmadan önce sorgula + yerel süreç kaydı” deseni kurulur. Bu detay, entegrasyon projelerinde en çok atlanan ama üretimde en pahalıya patlayan maddedir.",
          },
          {
            q: "Mevcut sistemimizde API yok; yine de entegre olabilir miyiz?",
            a: "Genelde evet, üç yoldan biriyle. (1) Dosya köprüsü: sağlayıcının dışa/içe aktarma özelliği varsa zamanlanmış CSV/XML aktarımı kurarız (en ucuz, en kırılgan). (2) Veritabanı okuma: salt-okunur bir rapor kullanıcısı üzerinden sorgu (yazma yapmadan; çoğu senaryoda en güvenli yol). (3) Araya katman: biz kendi sistemimize yazıyor, oradan dosya/veritabanı ile eski sisteme besliyoruz. Seçim, verinin kritikliğine ve güncelliğine göre yapılır.",
          },
          {
            q: "Süreçte hangi verinin kimde kalacağını nasıl belirliyorsunuz?",
            a: "Kural basit ve yazılıdır: bir alanın tek sahibi olur. Örneğin cari hesap ve fatura muhasebede; stok miktarı depoda; sipariş satırları satış sisteminde; ürün içeriği sitede. Sahip olmayan sistem alani ya okur ya hiç görmez. Bu tabloyu çıkmadan geliştirmeye başlamıyoruz; “çift yazma” kararının, projenin altıncı ayında krize dönüştüğünü çok gördük.",
          },
        ],
      },
      internal: {
        id: "ilgili-hizmetler",
        h2: "Entegrasyonun Dayandığı Sistemler",
        paragraphs: [
          "API işi; sipariş/stok/CRM süreçleri, altyapı ve izleme katmanıyla birlikte planlanır. Aşağıdaki sayfalar bu bağımlılıkları anlatıyor.",
        ],
      },
    },
    ctaTitle: "Akış başına kazanç hesabı çıkaralım",
    ctaText:
      "Hangi veriyi hangi sistemler arasında, ne sıklıkta ve kaç kişiyle taşıdığınızı anlatın; öncelik, risk ve tahmini süreyi tek sayfada özetleyelim.",
  },

  "odeme-whatsapp-crm-entegrasyonu": {
    h1: "Ödeme, WhatsApp ve CRM Entegrasyonu: Talepten Tahsilata Tek Hat",
    definition: [
      "Bu üçlü, satışın dijital omurgasıdır: müşterinin geldiği kanal (web formu, WhatsApp), kaydın biriktiği yer (CRM) ve paranın hareket ettiği yer (sanal POS/ödeme). Ayrı ayrı kurulduklarında üç ayrı doğruluk kaynağı doğar; birlikte kurgulandığında talep → teklif → sipariş → ödeme → takip hattı tek kayıt üzerinden akar.",
      "Türkiye'de işin kendine özgü kısıtları var: sanal POS tarafında 3D Secure ve kart saklama (token) kuralları, BDDK/TCMB lisanslı sağlayıcı zorunluluğu; WhatsApp tarafında Business Platformu onaylı şablon mesajları, kullanıcı açık rızası ve 24 saatlik oturum kuralı; ticari elektronik iletilerde İYS onayı. Bunları bilmeyen kurulumlar, ilk ayda ya “ödeme alınamıyor” ya da “hesap kısıtlandı” ile karşılaşır.",
      "Tardigrad Software olarak uçtan uca kuruyoruz: forma/sohbete gelen talep CRM'e kaydedilir, teklif ve sipariş üretilir, ödeme bağlantısı gönderilir, tahsilat ve fatura durumu geri yazılır, hatırlatmalar otomatik gider ve her adım loglanır. Kart verisi hiçbir yerde bize dokunmaz; PCI yükü ödeme kuruluşunda kalır.",
    ],
    sections: {
      whyNeeded: {
        id: "neden-gerekli",
        h2: "Kanallar Kopuk Olduğunda Neler Kaçar?",
        bullets: [
          { title: "Konuşma kaybolur", text: "WhatsApp'ta anlaşılan fiyat, sipariş veya iade kararı hiçbir kayıtta yoktur; satışçı değişince baştan pazarlık yapılır.", icon: "MessageSquare" },
          { title: "Ödeme takibi yok", text: "Bağlantı gönderildi ama kim ödedi, kim vazgeçti? Cevap, muhasebe ile telefon trafiğidir.", icon: "Wallet" },
          { title: "Kaçırılan fırsat", text: "Teklif okundu ama yanıt gelmedi; hatırlatma kişisel hafızaya kaldı.", metric: "unutulan %30", icon: "BellOff" },
          { title: "Kısıt ve ceza riski", text: "Onaysız pazarlama mesajı ve eksik ticari ileti izni, WhatsApp hesabını ve itibarınızı riske atar.", icon: "ShieldAlert" },
        ],
        miniCta: "Kanal ve sistem envanterinizi paylaşın (POS/ödeme, WhatsApp, CRM, muhasebe); tek hat hâline getirmenin üç adımını çıkaralım.",
      },
      scope: {
        id: "paket-kapsami",
        h2: "Kurulum Kapsamı",
        checklist: [
          "Ödeme katmanı: iyzico/PayTR/Craftgate/Crema veya banka sanal POS; tek çekim, taksit, kapora (kısmi) ve abonelik/tekrarlayan tahsilat",
          "3D Secure ve kart saklama (token) kuralları, iade/kısmi iade, ödeme durumu webhook'ları ve çift yakalama (double-capture) koruması",
          "Sipariş akışı: teklif → sipariş → ödeme → onay → sevkiyat/teslim; her adımın CRM kaydına geri yazılması",
          "Faturalama: e-arşiv/e-fatura üretimi ve gönderimi, muhasebeye cari/fatura aktarımı, tahsilat mutabakatı",
          "WhatsApp Business Platformu: onaylı şablon mesajları (sipariş alındı, kargo, hatırlatma), mesaj logu, gelen mesajın talebe dönüşmesi",
          "Rıza ve izin yönetimi: iletişim tercihleri, İYS/ticari elektronik ileti onayı, 24 saat oturum kuralı ve iptal bağlantısı akışı",
          "CRM kaydı: kişi/firma, kaynak (UTM), aşama, aktivite geçmişi, fiyat/teklif bağlamı; WhatsApp oturumlarının kişiye iliştirilmesi",
          "Bildirim ve otomasyon: ödeme hatırlatma serisi, başarısız ödemede kademeli aksiyon, “kaydet-devam et” sepet kurtarma",
          "Dolandırıcılık kontrolleri: limit ve eşik kuralları, şüphülü işlem kuyruğu, kart/IP/adres tutarlılık kontrolü, chargeback dosyası",
          "Güvenlik ve KVKK: kart verisi tutmama, hassas alan maskeleme, erişim rolü, işlem günlüğü ve saklama süreleri",
          "Ölçüm: kanal başına talep, dönüşüm oranı, tahsilat başarı oranı, iptal/iade oranı ve ortalama sipariş değeri",
        ],
      },
      process: {
        id: "surec",
        h2: "Kurulum Süreci: 6 Adım",
        steps: [
          { title: "1. Kanal ve süreç haritası (1-3 gün)", text: "Talebin geldiği kanallar, ödeme tercihi ve kayıt sistemi; hangi verinin kimde kalacağı. Çıktı: uçtan uca akış şeması.", },
          { title: "2. Sağlayıcı ve sözleşmeler (2-10 gün)", text: "Ödeme kuruluşu başvurusu/sözleşme, WhatsApp Business Onaylı Hesap ve şablon onayları, İYS kaydı. Çıktı: hazır erişim ve onaylar (paralel yürür).", },
          { title: "3. Geliştirme (3-10 gün)", text: "Ödeme sayfası ve webhook'lar, sipariş/teklif akışı, CRM alanları, WhatsApp mesaj şablonları ve otomasyonlar. Çıktı: staging'de uçtan uca test.", },
          { title: "4. Eşleme ve mutabakat (1-3 gün)", text: "Ürün/fiyat/vergi, cari hesap ve sipariş numaraları; örnek 50 işlemle iki taraflı sayı kontrolü. Çıktı: mutabakat raporu.", },
          { title: "5. Pilot yayın (1 hafta)", text: "Tek ürün grubu/tek satış ekibiyle canlı kullanım; ödeme başarı ve mesaj teslim oranları izlenir. Çıktı: iyileştirme listesi.", },
          { title: "6. Genel yayın + izleme", text: "Tüm kanallar açılır; aylık rapor (dönüşüm, tahsilat, iade) ve kural ayarları. Çıktı: canlı hat + ölçüm.", },
        ],
      },
      benefits: {
        id: "faydalar",
        h2: "Ölçülen Kazanımlar",
        metrics: [
          { value: "+%10-25", label: "kapora/online tahsilat ile artan sipariş dönüşümü" },
          { value: "-%40", label: "ödeme hatırlatması için harcanan elle takip" },
          { value: "anında", label: "talep → CRM kaydı; numara/sohbet kaybı biter" },
          { value: "izlenebilir", label: "WhatsApp görüşmeleri kişi/aşama bağlanır; devir mümkün olur" },
        ],
        bullets: [
          { title: "Nakit akışı hızlanır", text: "Ödeme bağlantısı ve hatırlatma serisiyle tahsilat gecikmesi azalır; vade takibi otomatikleşir.", icon: "Wallet" },
          { title: "Satış konuşma kalır", text: "Fiyat, onay ve söz verilen teslim tarihi yazılı; pazarlık masasında karşılıklı anlatım biter.", icon: "FileText" },
          { title: "Kısıt riski düşer", text: "Onaylı şablon + rıza kaydı ile çalışan WhatsApp hattı, hesap askıya alınma riskini azaltır.", icon: "ShieldCheck" },
          { title: "Kanal kararı veriyle", text: "Hangi kanaldan gelen daha çok siparişe dönüyor; pazarlama bütçesi oraya kayar.", icon: "TrendingUp" },
        ],
      },
      audience: {
        id: "kimler-icin",
        h2: "Kimler İçin Uygun?",
        bullets: [
          { title: "WhatsApp'la satış yapanlar", text: "Talep, teklif ve tahsilatın büyük kısmı sohbette yürüyen işletmeler.", icon: "MessageSquare" },
          { title: "Online tahsilat isteyenler", text: "Kapora, taksit veya linkle ödeme ihtiyacı olan hizmet firmaları.", icon: "CreditCard" },
          { title: "Bayi ve saha ekipleri", text: "Siparişin merkezle muhasebeye elle yazıldığı yapılar.", icon: "Truck" },
          { title: "Abonelik/taksit modeli", text: "Tekrarlayan tahsilat ve başarısız ödeme takibi gereken işler.", icon: "RefreshCw" },
        ],
      },
      whyUs: {
        id: "neden-biz",
        h2: "Neden Tardigrad Software?",
        bullets: [
          { title: "Sadece entegrasyon değil, süreç", text: "Tek başına ödeme linki bir şey çözmez; sipariş, teklif ve kayıt hattını birlikte kuruyoruz.", icon: "Workflow" },
          { title: "Mevzuat tarafı dikkatimizde", text: "3D Secure, kart saklama, İYS ve WhatsApp onaylı hesap kuralları; “yaptık ama engellendi” sürprizi yaşatmıyoruz.", icon: "Scale" },
          { title: "Hata kuyruğu hazır", text: "Başarısız ödeme, mesaj iletilemedi ve uyuşmaz sipariş durumları tek panelde; elle arama yerine düzeltme listesi.", icon: "Inbox" },
          { title: "Ölçümle kapatıyoruz", text: "Ödeme başarı oranı ve kanal dönüşümleri raporlanır; entegrasyonun getirdiği sayıyla görünür.", icon: "LineChart" },
        ],
      },
      faq: {
        id: "sss",
        h2: "Ödeme / WhatsApp / CRM Entegrasyonu Hakkında Sıkça Sorulanlar",
        faq: [
          {
            q: "WhatsApp Business API kullanmak yasak mı, nelere dikkat etmeliyiz?",
            a: "Yasak değil; kurallı. Meta'nın Business Platformu üzerinden onaylı hesap ve onaylı mesaj şablonlarıyla çalışırsınız; pazarlama amaçlı mesajlarda kullanıcının açık onayı, mesaj içeriğinde ticari ileti kuralları (İYS) ve iptal mekanizması gerekir. Ayrıca mesaj başına ücretlendirme ve 24 saatlik müşteri hizmetleri oturumu kuralı vardır. Kural dışı toplu gönderim, numara/hesap kısıtı ile sonuçlanır; biz gönderim mimarisini bu kurallara göre kurar ve izin alanını zorunlu yaparız.",
          },
          {
            q: "Kart bilgilerini kendi sistemimizde tutabilir miyiz?",
            a: "Hayır, önermiyoruz ve genelde tutamazsınız: kart verisi saklamak PCI DSS yükümlülükleri ve denetim demektir. Doğru model, ödeme kuruluşunun sunduğu tokenizasyon (kart saklama) ve güvenli ödeme sayfası/iframe-redirect akışıdır; siz yalnızca token ve işlem durumunu tutarsınız. Tekrarlayan tahsilat, kapora ve iade akışları da bu model üzerinden kurulur.",
          },
          {
            q: "Ödeme sağlayıcısı ile CRM arasındaki veri nasıl eşleşir?",
            a: "Anahtar bizim kurduğumuz sipariş/talep numarasıdır. Ödeme kuruluşundan gelen webhook'ta işlem durumu (başarılı, 3DS bekliyor, reddedildi, iade) okunur, yerel kayda yazılır ve aşama güncellenir. Kural olarak çift yazmayı engellemek için idempotens anahtarı kullanılır ve “aynı işlem iki kez” durumunda güncelleme yapılmaz. Muhasebe tarafına ise yalnızca mutabakatı geçmiş işlemler gider; başarısız denemeler oraya yazılmaz.",
          },
          {
            q: "Mevcut muhasebe programımızda sipariş modülü var; hangisi kaynak olacak?",
            a: "Genel kural: operasyon satış tarafında, mali kayıt muhasebede kalır. Yani sipariş, teklif, ödeme durumu ve WhatsApp logu CRM/panelinizde; fatura, cari, irsaliye ve KDV muhasebede. Eşyönlü akış şöyle kurulur: sipariş onaylandığında muhasebeye fatura taslağı açılır, fatura kesildiğinde numara ve durum geri yazılır. Muhasebenizin sipariş modülü güçlüyse kaynak orası olabilir; kararı alan bazlı eşleme tablosuyla birlikte veriyoruz.",
          },
          {
            q: "Entegrasyonlar için ek lisans/aylık ücret çıkar mı?",
            a: "Üç kalem planlanmalı: ödeme kuruluşu komisyonu (işlem başına), WhatsApp mesaj ücretleri (gönderim başına, kategori bazlı) ve entegrasyon aracı kullanılıyorsa aylık abonelik. Biz bunları projeden önce tahmini işlem sayınızla birlikte aylık maliyet tablosuna çeviriyoruz. Ayrıca mesaj hacmi yüksekse “her şeyi WhatsApp'tan gönderme” yerine e-posta + WhatsApp kombinasyonu öneriyoruz; maliyet farkı genelde anlamlıdır.",
          },
        ],
      },
      internal: {
        id: "ilgili-hizmetler",
        h2: "Bu Hattı Taşıyan Sistemler",
        paragraphs: [
          "Kanal entegrasyonu; sipariş yönetimi, CRM, API katmanı ve otomasyonla birlikte çalışır. Aşağıdaki sayfalar bu parçaları anlatıyor; şehir sayfalarında bölgesel satış kurgusunu bulabilirsiniz.",
        ],
      },
    },
    ctaTitle: "Kanal envanterinizle başlayalım",
    ctaText:
      "Hangi ödeme kuruluşu, hangi CRM/muhasebe ve aylık mesaj/sipariş hacminiz konuşulsun; akış şeması, maliyet tablosu ve takvim tek sayfada netleşsin.",
  },

  "ai-icerik-araclar": {
    h1: "AI Destekli İçerik ve Araçlar: Ölçeği Modelle, Kaliteyi İnsanla Kurmak",
    definition: [
      "Yapay zekâ destekli içerik ve araçlar, tekrar eden bilişsel işleri hızlandıran kurulumlardır: hizmet ve yerel sayfa metinlerinin üretilmesi, gelen talebin sınıflandırılıp özetlenmesi, dokümanlardan bilgi çıkarılması, iç bilgi tabanından soru yanıtlayan asistan ve içerik kalite kontrolleri. Ortak nokta, modelin “ilk taslağı” üretmesi; kararı, doğrulamayı ve markanın sesini insanın üstlenmesidir.",
      "2023-2025 döneminde en sık gördüğümüz hata, aracı strateji sanmaktı: otomatik bin yazı yayımlanır, hiçbir sayfada gerçek bilgi yoktur, arama tarafında da kullanıcı tarafında da güven üretmez. Doğru kullanım ise ölçek + denetimdir: çok sayfalı setler (il, hizmet, ürün, SKU) modelle üretilir, kalite kontrol listesi ve uzman onayıyla insan tarafında filtrelenir.",
      "Tardigrad Software olarak hem entegrasyon hem de ürün tarafını kuruyoruz: OpenAI/Anthropic API bağlantısı, vektör arama ile kendi dokümanlarınıza dayanan yanıt (RAG), çıktı doğrulama ve şema kontrolleri, maliyet/limit yönetimi ve personelin kullanacağı basit arayüzler. Gerektiğinde yerel/açık modellerle veri gizliliği öncelikli kurulum yapıyoruz.",
    ],
    sections: {
      whyNeeded: {
        id: "neden-gerekli",
        h2: "Neden Model + İnsan, Neden Sadece Model Değil?",
        bullets: [
          { title: "Halüsinasyon riski", text: "Model, olmayın bir garantiyi veya yanlış fiyatı akıcı biçimde yazar; doğrulama yoksa müşteriye böyle ulaşır.", icon: "AlertTriangle" },
          { title: "Marka sesi kaybı", text: "Genel model çıktısı, herkesin sitesi gibi görünür; farklılaşma üretmez.", icon: "Copy" },
          { title: "Gizlilik", text: "Müşteri verisini üçüncü taraf modele göndermek, sözleşme ve KVKK açısından ayrıca yönetilmelidir.", icon: "Lock" },
          { title: "Ölçülemeyen maliyet", text: "Sınırsız çağrı, token ve kullanım ücreti; bütçe planı yoksa araç bir ayda kapanır.", icon: "Coins" },
        ],
        paragraphs: [
          "Bu dört risk, iyi tasarlanmış bir kurulumda kapatılabilir: bağlamı siz verirsiniz (kendi dokümanlarınız), çıktı doğrulanır (kural ve insan), erişim ve limitler yönetilir.",
        ],
        miniCta: "Hangi işi ne sıklıkla yaptığınızı anlatın; otomasyon + insan kontrolü ile ölçeklenecek ilk iki kullanımı birlikte seçelim.",
      },
      scope: {
        id: "paket-kapsami",
        h2: "Kurduğumuz Kullanım Alanları",
        checklist: [
          "İçerik üretim hattı: hizmet/ürün/il sayfaları için brief → taslak → kalite kontrol → onay → yayına alma; şema ve meta alanlarının birlikte üretilmesi",
          "Kendi verisine dayanan yanıt (RAG): doküman, sözleşme, şartname ve iç wiki üzerinde kaynak gösteren soru-cevap; modelin “uydurma” payının düşürülmesi",
          "Destek asistanı: gelen talebin sınıflandırılması, özetlenmesi, eksik bilgi sorulması ve panelde önerilen yanıt taslağı (inson onayıyla gönderim)",
          "Doküman işleme: fatura/sözleşme/teklifnamelerden alan çıkarma, karşılaştırma, eksik madde tespiti ve yapılandırılmış çıktı",
          "Kalite kontrol araçları: başlık/description uzunlukları, kesik cümle, kopya içerik, eksik alt metni ve şema tutarlılığı için otomatik denetimler",
          "Çoklu dil ve yerelleştirme: çeviri + yerel terim sözlüğü ile tutarlılık; “kelime kelime çeviri” tuzağının önlenmesi",
          "Ölçüm ve maliyet yönetimi: çağrı başı token/maliyet, kullanım başına kazanç takibi, limit ve kotalar, ucuz model/küçük model eşleştirmesi",
          "Erişim ve güvenlik: sistem hesabı ile kullanım, prompt/sır yönetimi, PII maskeleme, veri saklama kararı (üreticiyle sözleşme/yerel model)",
          "İnsan döngüsü (HITL): her otomatik çıktının kabul/red/revizyon akışı ve geri bildirimle prompt/şablon iyileştirmesi",
          "Entegrasyon: panel/CRM içinden çağrı, görev kuyrukları (uzun işler), çıktıların veri modeline yazılması ve yayına alma butonları",
        ],
      },
      process: {
        id: "surec",
        h2: "Kurulum Süreci: 6 Adım",
        steps: [
          { title: "1. Kullanım seçimi ve hedef metrik (1-2 gün)", text: "Hangi iş, ne kadar süre alıyor; başarı ölçütü ne (süre, hacim, dönüşüm). Çıktı: kapsam + hedef.", },
          { title: "2. Veri ve kaynak hazırlığı (2-5 gün)", text: "Doküman/intranet içerikleri temizlenir, bölümleme ve indeksleme planı kurulur. Çıktı: güvenilir bağlam kaynağı.", },
          { title: "3. Prototip (3-7 gün)", text: "Dar bir veri setinde uçtan uca akış: girdi → model → doğrulama → insan onayı → çıktı. Çıktı: ölçülmüş prototip.", },
          { title: "4. Değerlendirme seti (1-3 gün)", text: "30-100 örneklik test seti ve kabul kriterleri; doğruluk, kaynak gösterme ve ton ölçülür. Çıktı: eval raporu.", },
          { title: "5. Ürünleştirme (1-3 hafta)", text: "Panel ekranları, kuyruk, log, maliyet kontrolü ve erişim; kademeli kullanım. Çıktı: canlı araç.", },
          { title: "6. İyileştirme döngüsü", text: "Kabul/red oranları ve geri bildirimler izlenir; prompt, şablon ve doğrulama kuralları güncellenir. Çıktı: aylık performans notu.", },
        ],
      },
      benefits: {
        id: "faydalar",
        h2: "Ölçülebilir Kazanımlar",
        metrics: [
          { value: "-%50-70", label: "sayfa/ürün içeriği üretim süresi (taslak + onay modeliyle)" },
          { value: "3-6 ay", label: "çok sayfalı (il/hizmet/SKU) setin insan gücüyle bitme süresinden fark" },
          { value: "kaynaklı", label: "RAG ile yanıtların dayandığı belge gösterilir; güven ölçülür" },
          { value: "kontrol", label: "maliyet ve erişim sınırları panelde; kontrolsüz kullanım yok" },
        ],
        bullets: [
          { title: "Ekip ölçeklenir", text: "Tek uzmanin bilgiyi yayma kapasitesi artar; kişi izinliyken iş durmaz.", icon: "Users" },
          { title: "Kalite standardı", text: "Aynı kontrol listesi ve şablon, içeriğin her sayfada aynı seviyede olmasını sağlar.", icon: "ClipboardCheck" },
          { title: "Yanıt süresi düşer", text: "Talep özetlenip sınıflandırıldığı için, ilk doğru yanıt daha çabuk gider.", icon: "Zap" },
          { title: "Öğrenen sistem", text: "Kabul/red verisi biriktikçe öneriler isabetlenir; araç kullanıldıkça iyileşir.", icon: "TrendingUp" },
        ],
      },
      audience: {
        id: "kimler-icin",
        h2: "Kimler İçin Uygun?",
        bullets: [
          { title: "Büyük katalog/ürün seti olanlar", text: "Açıklama, teknik metin ve SEO alanları elle yazılamayacak kadar çok olan yapılar.", icon: "Package" },
          { title: "Doküman yoğun ofisler", text: "Sözleşme, şartname, teklif ve raporlarla çalışan hukuk, mühendislik ve danışmanlık ekipleri.", icon: "FileText" },
          { title: "Destek yükü yüksek firmalar", text: "Günde onlarca tekrarlayan soru alan ekipler; taslak yanıt + onay akışı.", icon: "Headset" },
          { title: "Kurum içi bilgi dağılanlar", text: "Bilginin kişilerde kaldığı; yeni çalışana anlatmanın haftalar aldığı yapılar.", icon: "GraduationCap" },
        ],
      },
      whyUs: {
        id: "neden-biz",
        h2: "Neden Tardigrad Software?",
        bullets: [
          { title: "Aracı değil, akışı kuruyoruz", text: "Model çağrısı 20 satır iş; asıl iş, girdi hazırlığı, doğrulama, panel ve maliyet kontrolü. Projeyi buna göre planlıyoruz.", icon: "Workflow" },
          { title: "Ölçmeden “çalışıyor” demiyoruz", text: "Her kurulumda değerlendirme seti ve kabul kriterleri yazılır; doğruluk ve ton sayıyla izlenir.", icon: "BarChart3" },
          { title: "Veri gizliliğini baştan netleştiririz", text: "Hangi veri modele gidecek, hangi bölgede işlenecek, saklanacak mı; üç sorunun cevabı tasarıma yazılır.", icon: "Lock" },
          { title: "SEO ve içerik standartlarımız var", text: "Üretilen sayfalarda meta, şema, iç link ve okunabilirlik kuralları bizim kontrol listemizden geçer.", icon: "Search" },
        ],
      },
      faq: {
        id: "sss",
        h2: "AI Destekli İçerik ve Araçlar Hakkında Sıkça Sorulanlar",
        faq: [
          {
            q: "Yapay zekâ ile üretilen içerik Google'da zarar verir mi?",
            a: "Zarar veren şey üretici değil, kalitesizlik ve amaçsızlıktır. Arama tarafı, bilgi değeri olmayan, kopya ve ölçek için yazılmış içeriği ayıklıyor; bunu insan da, model de yapabilir. Pratik kuralımız şu: model ilk taslağı üretir, siz kendi veriniz (ürün, fiyat, vaka, uzmanlık) ile zenginleştirir ve kalite kontrolünden geçirirsiniz. Deneyimsiz, genel metinler yerine bu kombinasyon, hem kullanıcı hem arama tarafında karşılık bulur.",
          },
          {
            q: "Kendi verimiz modele gidiyor mu, gizlilik nasıl sağlanıyor?",
            a: "Bu, tasarımda verdiğiniz bir karardır. Üç model kuruyoruz: (1) sağlayıcı API + veri saklamama/antrenmana kapatma taahhüdü (ticari sözleşme ile), (2) yerel/açık model, kurum içinde veya Türkiye'de barındırılan sunucuda, (3) karma: özetleme/çıkarım yerel, yaratıcı metin API'de. Hassas alanların (TC, IBAN, sağlık bilgisi) maskelemesi ve log politikası her üçünde de standart olarak eklenir.",
          },
          {
            q: "Halüsinasyonu nasıl engelliyorsunuz?",
            a: "Teknik olarak azaltılır, sıfırlanamaz. Kullandığımız dört önlem: kaynak gösterme zorunluluğu (RAG'ta alıntı yoksa “bilmiyorum” cevabı), çıktı doğrulama (çıkan fiyat/süre/madde, veri tabanındaki alanla karşılaştırılır), kısıtlı üretim (serbest metin yerine alan bazlı doldurma) ve insan onayı (yayına/teklife otomatik gitmez, önce insan kabulü gerekir). Kritik kararlarda — hukuki, mali, tıbbi — öneri üretiriz, kararı vermeyiz.",
          },
          {
            q: "Maliyet ne kadar? Her ay sürpriz çıkar mı?",
            a: "Maliyet, çağrı başına token ve işlem sayısıyla hesaplanır; sürpriz çıkmaması için üç kural kuruyoruz: kullanım başına kota, ucuz model/güçlü model eşlemesi (basit işe ucuz model), ve cache ile tekrar eden çağrıların kesilmesi. Pilot turda gerçek hacminizle ölçüm yapıp aylık tahmin veriyoruz; “araç açıldı, fatura sürprizi” yaşamamak için limit panelde görünür olur.",
          },
          {
            q: "Chatbot ile iç asistan aynı şey mi?",
            a: "Aynı ailenin iki ayrı ürünü. Chatbot, dış müşteriyle konuşur; yanılma payı düşük olmalı, cevaplar kısa ve kurallı olmalı, insan devri kolay olmalıdır (ai-chatbot sayfamızda ayrı ele aldık). İç asistan ise personelin doküman/panel sorgusuna cevap verir; daha geniş serbestlik kabul edilebilir ama yetki/gizlilik tarafı daha sıkıdır. İkisini birlikte kurup ortak bilgi tabanını kullanmak, çoğu kurumda en verimli yoldur.",
          },
        ],
      },
      internal: {
        id: "ilgili-hizmetler",
        h2: "AI Kurulumunun Bağlandığı Katmanlar",
        paragraphs: [
          "Model çağrısı; veri katmanı, panel, SEO standartları ve otomasyonla birlikte çalışır. Aşağıdaki sayfalar bu bağımlılıkları; şehir sayfaları ise yerel içerik ölçekleme kurgusunu anlatıyor.",
        ],
      },
    },
    ctaTitle: "İki kullanım alanıyla başlayalım",
    ctaText:
      "En çok vakit alan bilişsel işlerinizi ve veri kaynaklarınızı anlatın; prototip, değerlendirme seti ve aylık maliyet tahminiyle birlikte kapsamı netleştirelim.",
  },

  "dijital-donusum": {
    h1: "Dijital Dönüşüm: Excel'den Tek Kaynağa Geçen İşletme Dönüşümü",
    definition: [
      "Dijital dönüşüm, kağıt ve Excel üzerinde yürüyen iş süreçlerinin uçtan uca dijitalleştirilmesi, verinin tek kaynakta toplanması ve bu veriyle karar üretecek hâle gelmesidir. Yazılım satın almak değil; süreci yeniden tasarlamak, verinin nerede üretileceğini ve raporun kimde olacağını belirlemek ve ekibin bunu kullanmasını sağlamaktır.",
      "Türkiye'deki KOBİ'lerde dönüşüm projeleri iki sebeple tıkanır. Birincisi, mevcut işleyiş yazılıma olduğu gibi aktarılır: Excel'deki 40 sütun panele taşınır; kimse doldurmaz, proje öldürülür. İkincisi, süreç sahipliği yoktur: “bunu İK mi, muhasebe mi, IT mi yapsın” belirsizliği, her aşamada kararı geciktirir. Biz bu iki sebebe karşı çalışıyoruz: budama ve sahiplik.",
      "Tardigrad Software olarak dönüşümü dokuz adımlı bir hatla yürütüyoruz: keşif → süreç haritalama → veri modeli → budanmış süreç tasarımı → sistem (web/panel/CRM) → otomasyon ve entegrasyon → ölçüm/raporlama → eğitim ve benimseme → sürekli iyileştirme. Her adımda çıktı, bir sonrakinin kabul kriteri olur.",
    ],
    sections: {
      whyNeeded: {
        id: "neden-gerekli",
        h2: "Neden “Küçük Düzeltmeler” Yeterli Olmuyor?",
        bullets: [
          { title: "Aynı veri dört yerde", text: "Müşteri, sipariş, stok ve tahsilat ayrı tablolarda; uyuşmazlık her ay yeniden çözülmeye çalışılır.", icon: "Copy" },
          { title: "Süreç kişide durur", text: "İzin, fiyat onayı veya sevkiyat, o kişi müsait olmadığı için bekler; iş akış hızı kişi hızına eşittir.", icon: "Hourglass" },
          { title: "Yeni iş eklenemiyor", text: "Yeni hizmet/şube/kanal, “mevcut düzeni bozar” gerekçesiyle ertelenir; büyüme kısıtlanır.", icon: "TrendingDown" },
          { title: "Karar gecikir", text: "Veri birleştirme için harcanan günler, kararın zamanını kaçırır; fatura ve stok haberi aylık gelir.", icon: "Clock" },
        ],
        paragraphs: [
          "Dönüşümün gerekçesi “modern olmak” değil; bu dört kaybın toplamıdır. Doğru ölçüldüğünde, yatırımın geri dönüşü çoğu projede 6-18 ay arasındadır.",
        ],
        miniCta: "En çok yavaşlayan iki sürecinizi anlatın; veri akışını ve budama fırsatını birlikte çıkaralım.",
      },
      scope: {
        id: "paket-kapsami",
        h2: "Dönüşüm Programının Kapsamı",
        checklist: [
          "Keşif ve sorun envanteri: süreçler, veri akışları, zaman/maliyet kayıpları ve karar noktaları (görüşme + yerinde gözlem)",
          "Süreç haritalama: bugünkü akış ve budanmış hedef akış; hangi adımın neden var olduğu ve hangisinin kaldırıldığı",
          "Veri modeli ve sahiplik: her alanın tek kaynağı ve sorumlusu; tanımların yazılı standardı (metrik sözlüğü dâhil)",
          "Uygulama katmanı: web sitesi/panel, CRM/MYS, teklif ve sipariş yönetimi, stok, iş takip ve müşteri paneli — önceliklendirilmiş modüller",
          "Otomasyon ve entegrasyon: formlar, e-imza/e-arşiv, ön muhasebe/ERP, kargo, banka ekstre, WhatsApp/e-posta bildirimleri",
          "Raporlama ve ölçüm: metrikler, uyarılar, yönetim panosu ve aylık karar ritüeli",
          "Altyapı ve güvenlik: hosting/CDN, yedekleme, kimlik/yetki, log ve KVKK uyumu",
          "Veri göçü: mevcut Excel/kayıtların temizliği, birleştirme kuralları ve taşınması (açılış mutabakatı ile)",
          "Benimseme programı: rol bazlı eğitim, kısa kullanım kılavuzları, pilot ekip ve geri bildirim döngüsü",
          "Sürekli iyileştirme: üç aylık gözden geçirme, alan/adım budama ve yeni modül önceliklendirmesi",
          "Değişim yönetimi: süreç sahipliği, onay matrisi ve “neden değişiyor” iletişimi (projenin en çok atlanan kısmı)",
        ],
      },
      process: {
        id: "surec",
        h2: "Program Süreci: Dokuz Adım",
        steps: [
          { title: "1. Keşif (1-2 hafta)", text: "Süreçler ve veri akışları yerinde görülür; kayıplar sayısallaştırılır. Çıktı: sorun ve fırsat envanteri.", },
          { title: "2. Hedef akış (1-2 hafta)", text: "Budama kararları ve yeni süreç tasarımı. Çıktı: “bugün/yarın” akış karşılaştırması ve kural seti.", },
          { title: "3. Yol haritası (0,5-1 hafta)", text: "Modül sırası, bütçe, sahiplik ve takvim. Çıktı: 3 fazda uygulanacak program planı.", },
          { title: "4. Çekirdek sistem (4-10 hafta)", text: "Panel + CRM/sipariş/stok gibi seçili çekirdek modüllerin kurulumu. Çıktı: canlı çekirdek sistem.", },
          { title: "5. Otomasyon ve entegrasyon (2-6 hafta)", text: "Muhasebe, e-imza, kargo, bildirim ve form akışları. Çıktı: çift veri girişi olmayan hat.", },
          { title: "6. Raporlama (1-3 hafta)", text: "Metrikler, panolar ve uyarılar. Çıktı: karar ekranları ve aylık rapor formatı.", },
          { title: "7. Veri göçü (1-3 hafta)", text: "Temizlik, eşleme, içe aktarma ve açılış mutabakatı. Çıktı: tek kaynakta doğrulanmış veri.", },
          { title: "8. Eğitim ve benimseme (sürekli)", text: "Rol bazlı eğitim, pilot tur, geri bildirimle sadeleştirme. Çıktı: kullanılan sistem ve iç savunucular.", },
          { title: "9. İyileştirme döngüsü (çeyreklik)", text: "Ölç → daralt → genişlet: gereksiz alan/adımlar çıkarılır, yeni modül eklenir. Çıktı: büyüyen ama sade kalan sistem.", },
        ],
      },
      benefits: {
        id: "faydalar",
        h2: "Ölçülen Kazanımlar",
        metrics: [
          { value: "6-18 ay", label: "tipik geri dönüş süresi (programın büyüklüğüne göre)" },
          { value: "-%40-60", label: "sipariş/teklif/tahsilat süreçlerinde işlem süresi" },
          { value: "-%80", label: "ay sonu rapor birleştirme süresi" },
          { value: "1 kaynak", label: "her alan için tek doğruluk kaynağı; uyuşmazlık toplantıları biter" },
        ],
        bullets: [
          { title: "Büyüme kapasitesi", text: "Yeni şube, kanal veya ürün eklemek yeniden yapılandırma gerektirmez; kural ve şablon eklenir.", icon: "TrendingUp" },
          { title: "Kişi bağımlılığı biter", text: "Bilgi ve yetenek sistemde kaldığı için izin/ayrılık operasyonu durdurmaz.", icon: "Users" },
          { title: "Maliyet disiplini", text: "Stok, tedarikçi ve işçilik verisi görünür olduğunda, kayıp ve israf erken yakalanır.", icon: "Coins" },
          { title: "Ölçeklenebilir kalite", text: "Standart süreç ve kontrol noktaları, ekip büyürken hizmet kalitesinin düşmesini engeller.", icon: "CheckCheck" },
        ],
      },
      audience: {
        id: "kimler-icin",
        h2: "Kimler İçin Uygun?",
        bullets: [
          { title: "30-300 çalışanlı KOBİ'ler", text: "Excel ve e-posta ile yönetilen operasyonun tıkandığı ölçek.", icon: "Building2" },
          { title: "Üretim ve saha yoğun firmalar", text: "İş emri, termin, stok ve servis süreçleri dağınık olan yapılar.", icon: "Factory" },
          { title: "Çok lokasyonlu markalar", text: "Şube/bayi standardizasyonu ve merkez raporlaması ihtiyacı.", icon: "Network" },
          { title: "Büyüme/yatırım hazırlığındakiler", text: "Veri ve süreç şeffaflığı; satış, değerleme veya grup içi raporlama hazırlığı.", icon: "Briefcase" },
        ],
      },
      whyUs: {
        id: "neden-biz",
        h2: "Neden Tardigrad Software?",
        bullets: [
          { title: "Budama önceliklidir", text: "Önce “neyi yapmayı bırakacağız” sorusunu soruyoruz; ekleme yapmak en kolay, en az getirili işlemdir.", icon: "Scissors" },
          { title: "Uçtan uca tek ekip", text: "Süreç tasarımı, web/panel geliştirme, entegrasyon, veri göçü ve raporlama aynı elde; sorumluluk boşluğu kalmaz.", icon: "Workflow" },
          { title: "Benimsemeyi metrik sayarız", text: "Kullanım oranı ve kayıt disiplini izlenir; “yazılım hazır, insan hazır değil” durumunu yönetmek için programı biz de taşırız.", icon: "GraduationCap" },
          { title: "Kademeli, geri alınabilir", text: "Büyük bang yerine faz faz: her faz kendi başına fayda üretir ve vazgeçilebilir. İş böylece durmaz.", icon: "Layers" },
        ],
      },
      faq: {
        id: "sss",
        h2: "Dijital Dönüşüm Hakkında Sıkça Sorulanlar",
        faq: [
          {
            q: "ERP almak varken neden özel geliştirme? ",
            a: "Önce bunu sormak gerekir ve çoğu şirkette doğru cevap ERP'dir: standart muhasebe, satın alma, envanter ve üretim süreçleri hazır paketlerde olgunlaşmıştır. Özel geliştirmeyi önerdiğimiz üç yer: süreciniz kalıba uymuyor ve sürekli “analiz dışı” iş çıkıyorsa, müşteriyle temas eden/saha tarafı paketin zayıf noktasıysa ve entegrasyon/otomasyon katmanında paket esnekliği yetmiyorsa. En sık kurduğumuz desen, ikisini birleştirmektir: ERP muhasebe ve stok çekirdeğinde kalır; teklif, saha, müşteri paneli ve otomasyon üst katman olarak özel kurulur.",
          },
          {
            q: "Proje ne kadar sürer ve ekibime ne kadar yük biner?",
            a: "Kapsama göre 4-16 ay arası gerçekçi bir programdır; ama tek bir “büyük yayın” olarak değil, 6-10 haftalık fayda üreten fazlarla planlanır. Ekip yükü konusunda dürüst olalım: her fazda ayda kişi başı 4-8 saat görüşme/test gerekir ve veri temizliği için günler. Bu zamanı takvime yazmayan projeler, ilerlememekle kalmaz, ekibin projeye güvenini de kaybeder.",
          },
          {
            q: "Çalışanlar direnirse ne yapacağız?",
            a: "Direnç çoğu zaman inat değil, iki meşru sebeptir: işin ilk aylarda yavaşlaması ve “beni ölçmek için yapıyorlar” hissi. Bu yüzden üç şeyi bilinçli yapıyoruz: pilot ile acı çeken ekiple başlamak, kayıt yükünü azaltmak (otomatik doldurma, minimum alan) ve ölçümü cezalandırma değil iş yükünü dengeleme aracı olarak konumlandırmak. Değişim iletişimi ve süreç sahipliği, kapsamın teknik olmayan ama en etkili kısmıdır.",
          },
          {
            q: "Eski verilerimiz (Excel/arşiv) ne olacak?",
            a: "İki kategoriye ayırıyoruz: aktif işe yarayacak veri (müşteri kartı, açık sipariş, güncel fiyat/stok, sözleşme) dönüştürülüp temizlenerek yeni sisteme alınır; arşiv verisi (geçmiş yılların işlemleri) sorgulanabilir biçimde sisteme veya raporlama katmanına aktarılır. Tamamını “temizle ve taşı” yaklaşımı hem gereksiz hem zararlıdır; eski hatalı veriyi yeni sisteme taşımak, sorunu ölümsüz kılar. Bütünlük kontrolü olarak mutabakat raporu çıkarıyoruz.",
          },
          {
            q: "Yatırımı nasıl gerekçelendiririz?",
            a: "Üç kalemde sayısallaştırıyoruz: iş gücü (elle veri girişi ve rapor derleme için harcanan saatler), kayıp (kaçırılan talep, geç fatura, hatalı fiyat, stok fazlası) ve büyüme kısıtı (yeni kanal/şube ekleyememek). Keşif fazında bu üç kalemi bugünkü rakamlarla ölçüyoruz; programın sonunda aynı metriklerle karşılaştırma yapıyoruz. Bu, hem yönetim kurulu hem banka/teşvik başvurusu için savunulabilir bir gerekçe üretir.",
          },
        ],
      },
      internal: {
        id: "ilgili-hizmetler",
        h2: "Dönüşüm Programının İçindeki Hizmetler",
        paragraphs: [
          "Süreç dijitalleşmesi; panel, CRM, sipariş/stok, otomasyon ve raporlama modüllerinin birlikte kurulmasıyla gerçekleşir. Aşağıdaki sayfalar bu modülleri; şehir sayfaları ise lokasyon bazlı operasyon kurgusunu anlatıyor.",
        ],
      },
    },
    ctaTitle: "Keşif fazıyla başlayalım",
    ctaText:
      "En çok yavaşlayan iki sürecinizi ve mevcut sistem envanterinizi anlatın; sorun/fırsat envanteri, budama önerisi ve üç fazlı program planıyla dönelim.",
  },
}
