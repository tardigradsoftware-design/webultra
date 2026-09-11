import type { ServiceContent } from "@/types/content"

/**
 * FAZ 2 — grup 4a: SaaS kategorisi (platform, abonelik, multi-tenant, dashboard, MVP).
 */
export const saasContents: Record<string, ServiceContent> = {
  "saas-platformu": {
    h1: "SaaS Platformu: Abonelikle Satılan Bir Ürünü Üretime Almak",
    definition: [
      "SaaS platformu, yazılımın müşteriye kurulum dosyası olarak değil, internet üzerinden abonelikle kiralanan bir hizmet olarak sunulduğu üründür. Teknik anlamda çok kiracılı (multi-tenant) bir mimari, kimlik ve abonelik yönetimi, kullanım ölçümü ve sürekli yayın akışı demektir; ticari anlamda ise tekrarlayan gelir ve müşteri başına maliyet disiplini demektir.",
      "SaaS'ı zorlayan şey arayüz değil, kararlarıdır: kiracı verisi nasıl ayrılır, plan/limit nasıl modellenir, ödeme ve fatura tarafı kimde durur, müşteri kendi kullanıcılarını nasıl yönetir, ölçek artınca maliyet nasıl kontrol altında tutulur. Erken yanlış verilen kararlar, 6-12 ay sonra “yazılımı yeniden yazıyoruz” cümlesine dönüşür.",
      "Tardigrad Software olarak SaaS ürünlerini Next.js + TypeScript + PostgreSQL (Supabase veya kendi veritabanımız), kuyruk işleri ve Vercel/Cloudflare yayın hattı ile kuruyoruz. İster fikrin ilk sürümünü (MVP) çıkarıyor olun, ister masa-bazı satılan yazılımınızı abonelik modeline taşıyor olun; mimariyi ölçek ve bakım maliyetine göre planlıyoruz.",
    ],
    sections: {
      whyNeeded: {
        id: "neden-gerekli",
        h2: "Neden Tek Müşteri Projesi Değil, SaaS?",
        paragraphs: [
          "Proje bazlı yazılım satışında gelir, harcanan saatle sınırlıdır: aynı işi ikinci müşteriye de yeniden yaparsınız. SaaS'ta geliştirme bir kez yapılır, müşteri eklemenin marjinal maliyeti düşer. Bu, nakit akışı ve değerleme açısından başka bir işletme modelidir; karşılığında üç disiplini ister: self-servis onboarding, desteğe az ihtiyaç duyan ürün ve sürekli ölçüm.",
        ],
        bullets: [
          { title: "Aynı özellik, 20 müşteri", text: "Proje modelinde her müşteri kendi özelleştirmesini ister; ürün ilerleyemez. Kiracı bazlı ayar katmanı bu baskıyı kırar.", icon: "Layers" },
          { title: "Kurulum maliyeti", text: "Müşteri başına manuel kurulum ve eğitim, büyüdükçe ekibin iş gücünü yer. Self-servis akış bunu otomatikleştirir.", icon: "Clock" },
          { title: "Ölçülemeyen churn", text: "Kaç müşteri geliyor, kaçı ayrılıyor, hangi planda neden? Veri yoksa fiyat ve yol haritası kararları tahmindir.", icon: "LineChart" },
          { title: "Altyapı sürprizleri", text: "Bir kiracının yoğun kullanımı diğerlerini yavaşlatabilir; limit ve yalıtım tasarımı bunu engeller.", icon: "Gauge" },
        ],
        miniCta: "Ürün fikrinizi ve bugünkü müşteri yapınızı anlatın; mimari, plan/limit kurgusu ve ilk sürüm kapsamı için tek sayfalık plan çıkaralım.",
      },
      scope: {
        id: "paket-kapsami",
        h2: "SaaS Platformu Kapsamı",
        checklist: [
          "Kiracı (tenant) modeli: veri yalıtımı stratejisi (satır bazlı tenant_id / şema / ayrı veritabanı) ve buna bağlı operasyon kararları",
          "Kimlik ve üyelik: kayıt, giriş (e-posta + Google/Microsoft ile SSO), ekip daveti, rol ve yetkiler",
          "Abonelik ve plan motoru: plan/özellik/limit şeması, yükseltme-düşürme, deneme süresi, limit aşımı davranışı",
          "Ödeme ve fatura: iyzico/PayTR/Stripe ile kart ve tekrarlayan tahsilat, başarısız ödeme takibi, e-arşiv/e-fatura entegrasyonu",
          "Self-servis onboarding: kurulum sihirbazı, örnek veri, ilk değere ulaşma adımı ve boş ekran stratejisi",
          "Kullanım ölçümü ve kota: metrik toplama, limit kontrolü, kota uyarısı ve gerekirse aşım ücreti",
          "Yönetim/operasyon paneli: müşteri listesi, abonelik durumu, iptal/geri kazanma notları, özellik bayrakları",
          "Uygulama içi destek: yardım merkezi, sürüm notları, destek talebi ve durum sayfası",
          "Güvenlik ve uyum: rol bazlı erişim, audit log, veri saklama/silme akışı (KVKK), yedekleme ve geri yükleme tatbikatı",
          "Geliştirici hattı: CI/CD, staging/canlı ayrımı, veritabanı migration disiplini, hata izleme ve analitik",
          "API ve webhook'lar: üçüncü sistem entegrasyonları ve ileride müşteriye açılacak programatik erişim",
        ],
      },
      process: {
        id: "surec",
        h2: "Kurulum Süreci: 7 Adım",
        steps: [
          { title: "1. Ürün ve iş modeli netleştirme (2-5 gün)", text: "Kim, hangi problemi, ne sıklıkla yaşıyor; fiyat ve plan mantığı nedir? Çıktı: kapsam ve öncelik listesi." },
          { title: "2. Mimari kararlar (2-4 gün)", text: "Kiracı yalıtımı, ödeme sağlayıcı, veritabanı, ölçek ve maliyet modeli yazılı olarak kararlaştırılır. Çıktı: mimari karar notu (ADR)." },
          { title: "3. Veri modeli ve plan şeması (3-5 gün)", text: "Kiracı, kullanıcı, abonelik, limit ve kullanım tabloları; özellik anahtarları tasarlanır. Çıktı: şema + alan sözlüğü." },
          { title: "4. Tasarım sistemi ve akışlar (4-8 gün)", text: "Onboarding, ana ekran, ayarlar ve faturalama arayüzleri; shadcn/ui üzerine kurulan bileşen setiyle tasarlanır. Çıktı: prototip." },
          { title: "5. Geliştirme — ilk sürüm (4-10 hafta)", text: "İki haftalık döngülerle üretime çıkan parçalar: önce uçtan uca çalışan çekirdek, sonra genişleme. Çıktı: canlı MVP." },
          { title: "6. Ölçüm ve güvenli yayın", text: "Analitik olayları, hata izleme, performans bütçesi ve feature flag'ler devrede; kapalı beta ile test. Çıktı: beta raporu." },
          { title: "7. Genel yayın ve iterasyon", text: "Fiyat/plan ayarı, yardım merkezi, SEO/landing katmanı ve aylık yol haritası döngüsü. Çıktı: büyüme çevrimi." },
        ],
      },
      benefits: {
        id: "faydalar",
        h2: "Doğru Kurulmuş Bir SaaS'ın Sayısal Gerçekleri",
        metrics: [
          { value: "2 hafta", label: "üretimde yazılım çıkan sprint ritmi" },
          { value: "8-12 hafta", label: "kapsama göre ilk satışa hazır sürüm" },
          { value: "self-servis", label: "kurulum başına insan maliyeti düşer" },
          { value: "kullanım bazlı", label: "maliyet ve fiyat optimizasyonu ölçümle mümkün" },
        ],
        bullets: [
          { title: "Yatırım anlatısı hazır", text: "MRR, churn, CAC ve kullanım verisi ölçümlendiği için yatırımcıya tablo gösterilir, sunum değil.", icon: "TrendingUp" },
          { title: "Destek yükü kontrol altında", text: "İyi onboarding ve yardım merkezi, müşteri başına destek saatini düşük tutar; marj bozulmaz.", icon: "LifeBuoy" },
          { title: "Ölçek maliyeti öngörülebilir", text: "Limit ve kota tasarımı, tek kiracının maliyet patlamasını diğerlerine yansıtmaz.", icon: "Gauge" },
          { title: "Yeniden yazma riski düşer", text: "Kiracı/abonelik/limit şeması baştan kurulduğu için ürün büyümesi mimariyi kırmaz.", icon: "ShieldCheck" },
        ],
      },
      audience: {
        id: "kimler-icin",
        h2: "Kimler İçin Uygun?",
        bullets: [
          { title: "SaaS fikri olan girişimler", text: "Doğrulanmış bir problemi ve ilk müşterileri hazır ekipler; hız ve sade kapsam kritik.", icon: "Rocket" },
          { title: "Masa-bazlı yazılım satanlar", text: "Kurulum/özel geliştirme ile büyüyen; abonelik modeline geçmek isteyen ürün ekipleri.", icon: "Layers" },
          { title: "Hizmet firmaları", text: "Kendi süreçlerinde kullandığı aracı dışarıya da satmak isteyen ajans, ofis ve operasyon şirketleri.", icon: "Briefcase" },
          { title: "Sektör dikey çözümleri", text: "Belirli bir sektörün dilini bilen, entegrasyon ihtiyacı olan dikey SaaS fikirleri (klinik, lojistik, emlak, eğitim).", icon: "Target" },
        ],
      },
      whyUs: {
        id: "neden-biz",
        h2: "Neden Tardigrad Software?",
        bullets: [
          { title: "Mimariyi yazılı gerekçelendiririz", text: "Kiracı yalıtımı ve veritabanı kararı, “alışkanlık” değil ADR olarak kayıt altına alınan bir seçimdir; altı ay sonra neden böyle yapıldığı bilinir.", icon: "FileText" },
          { title: "Faturalama tarafını hafife almayız", text: "Tekrarlayan tahsilat, başarısız ödeme ve iade akışları SaaS'ta en çok ihmal edilen ve en pahalıya patlayan kısımdır; kart yükünü sağlayıcıya bırakıyoruz.", icon: "CreditCard" },
          { title: "Kapsamı budamak işin parçası", text: "İlk sürümde neyin olmayacağını da yazıyoruz; “bir de şu olsun” listesi, SaaS ürünlerinin en sık tökezleme sebebidir.", icon: "Filter" },
          { title: "Uzun soluklu ekip", text: "Ürün çıkıp büyüme başladığında bakım, ölçek ve ekip devri için gereken dokümantasyonu baştan üretiyoruz.", icon: "GitBranch" },
        ],
      },
      faq: {
        id: "sss",
        h2: "SaaS Platformu Hakkında Sıkça Sorulanlar",
        faq: [
          {
            q: "Multi-tenant mı, her müşteriye ayrı veritabanı mı?",
            a: "Üç ana model var ve hangisinin doğru olduğu veri hacmi, yalıtım gereksinimi ve operasyon maliyetiyle belirlenir. Satır bazlı yalıtım (tenant_id + satır seviyesi güvenlik politikası) en ucuz ve en kolay ölçeklenen modeldir; şema başına kiracı güçlü ayrım ama daha ağır bakım ister; kiracı başına veritabanı ise regüle sektörler ve büyük kurumsal müşteriler için mantıklıdır. Türkiye pazarında tipik başlangıç: satır bazlı yalıtım + kritik müşteriler için ayrıştırma planı.",
          },
          {
            q: "Ödeme ve faturayı kim yönetecek?",
            a: "Kart saklama ve tekrarlayan tahsilatı, BDDK/TCMB lisanslı ödeme kuruluşlarının altyapısına bırakıyoruz; biz abonelik durumunu, plan değişimlerini, başarısız ödeme takibini ve fatura üretim tetikleyicisini yönetiyoruz. Türkiye'de e-arşiv/e-fatura tarafında bir entegratörle çalışmak muhasebe yükünü azaltır. Kart verisi sistemimize girmez; PCI yükü sağlayıcıda kalır.",
          },
          {
            q: "MVP ile satışa hazır ilk sürüm arasındaki fark nedir?",
            a: "MVP, “bir müşterinin problemini çözen en küçük uçtan uca akış”tır; satışa hazır ilk sürüm ise bunu alan, faturalandıran ve desteklenebilir kılan pakettir. Tipik bir dikey SaaS'ta MVP 4-8 hafta, satışa hazır ilk sürüm 8-12 hafta sürer. Süreyi belirleyen şey ekran sayısı değil, entegrasyon ve veri taşıma yüküdür: ödeme, içe aktarma, migrasyon ve iç panel takvimi belirler.",
          },
          {
            q: "Sunucular nerede olsun: Vercel, kendi sunucumuz mu, Supabase mi?",
            a: "Hız ve bakım maliyeti önceliğinizse Vercel + Supabase/PostgreSQL + Cloudflare kombinasyonu çok verimlidir; operatör yükü minimumdur ve küçük ekiplerde bunun değeri büyüktür. Veri yerelliği veya sabit maliyet zorunluluğu varsa kendi VPS/konteyner kurulumu da planlanır; bu durumda yedekleme, izleme, güncelleme ve ölçekleme için aylık bir operasyon bütçesi ekliyoruz. Kararı, bulutta beklenen aylık maliyet ile DevOps iş yükünü yan yana koyarak veriyoruz.",
          },
          {
            q: "Yatırımcıya gösterilecek metrikleri kim kuruyor?",
            a: "Biz. Ürün analizinin ilk gün kurulması gerekir; sonradan geçmiş veri toparlanamaz. Kayıt → aktif kullanım → ödeme hunisi, haftalık kullanım derinliği, MRR, churn ve genişleme geliri için olay şemasını baştan tasarlıyor, GA4 ve ürün analitiği (ör. PostHog/Amplitude) kurulumunu yapıyoruz. Böylece ilk altı ayın verisi birikmiş olur.",
          },
          {
            q: "Zaten bir no-code aracımız var; geçiş yapmaya değer mi?",
            a: "Değer, üç koşula bağlıdır: kullanım artınca no-code maliyetinin sizi geçmesi, özellik/entegrasyon kısıtına takılmanız ve müşteriye API/özel akış vaat etmeniz. Koşullardan biri oluştuysa geçişi planlıyoruz: çekirdek ekranlar kademeli taşınır, veri dışa aktarılır ve no-code arayüzü bir süre çift çalışır. İkisini birden kapatmak riskli olduğundan geçiş takvimi yazılı olur.",
          },
        ],
      },
      internal: {
        id: "ilgili-hizmetler",
        h2: "SaaS Ürününün Üzerinde Durduğu Katmanlar",
        paragraphs: [
          "Abonelik, çok kiracılı mimari, panel ve yayın hattı birbirinden bağımsız kararlar değildir. Aşağıdaki sayfalar bu katmanları; şehir sayfaları ise yerel müşteri/onboarding kurgusunu anlatıyor.",
        ],
      },
    },
    ctaTitle: "Mimariyi birlikte netleştirelim",
    ctaText:
      "Ürün fikriniz, plan yapınız ve hedeflediğiniz ilk müşteri sayısı konuşulsun; kiracı modeli, ödeme/entegrasyon kapsamı ve 12 haftalık ilk sürüm planı tek sayfada özetlensin.",
  },

  "abonelik-tabanli-yazilim": {
    h1: "Abonelik Tabanlı Yazılım: Plan, Limit ve Tekrarlayan Tahsilat Mimarisi",
    definition: [
      "Abonelik tabanlı yazılım, ürünün aylık/yıllık periyotlarla kiralandığı ve erişimin plan bazlı limitlerle kontrol edildiği modeldir. Görünen kısmı fiyat sayfasıdır; gerçekte ise üç sistem gerektirir: abonelik durumu motoru (aktif, gecikmeli, askıya alınmış, iptal), kullanım ölçüm katmanı ve ödeme yaşam döngüsü (ilk tahsilat, yenileme, başarısız ödeme, iade).",
      "Bu üçü doğru kurulmadığında tipik senaryolar şunlardır: kartı geçersiz olan müşteri 40 gün boyunca ücretsiz kullanmaya devam eder, plan değişikliği eski döneme mi yeni döneme mi yansısın belirsizdir, limit aşımı ya hiç engellenmez ya da müşteri çalışırken aniden kesilir. Her biri doğrudan gelir kaçıdır ve hiçbirinin çözümü “bir alan eklemek” değildir.",
      "Tardigrad Software olarak abonelik katmanını ya SaaS ürününüzün çekirdeğine kuruyor ya da mevcut projenize (danışmanlık, periyodik bakım, içerik, yazılım lisansı) modül olarak ekliyoruz. Sağlayıcı tarafında iyzico/PayTR/Stripe, fatura tarafında e-arşiv/e-fatura entegratörleriyle çalışıyor; plan/limit kurallarını panel üzerinden değiştirilebilir kılıyoruz.",
    ],
    sections: {
      whyNeeded: {
        id: "neden-gerekli",
        h2: "Tek Seferlik Satıştan Aboneliğe Geçerken Neler Kırılır?",
        bullets: [
          { title: "Yenileme takibi elle yapılır", text: "Süresi dolan müşteriyi satışçı hatırlar; hatırlamadığı gelir kaybolur.", icon: "CalendarClock" },
          { title: "Kart/banka tarafı dağınık", text: "Havale ile başlayan süreçte “ödeme geldi mi” muhasebe ile telefon trafiğidir.", icon: "CreditCard" },
          { title: "Plan tanımı belirsiz", text: "Standart planda kaç kullanıcı/limit var, sözleşmede mi? Uygulamada kimse bilmez, şikâyet büyür.", icon: "FileWarning" },
          { title: "Ayrılma gerekçesi toplanmaz", text: "Churn'un sebebi bilinmezse fiyat artırarak daha çok kaybedilir.", icon: "TrendingDown" },
        ],
        paragraphs: [
          "Abonelik modeli, geliri öngörülebilir kılar; ancak öngörülebilirlik ancak sistemli takip ile gerçekleşir.",
        ],
        miniCta: "Mevcut fiyatlandırmanızı ve yenileme listenizi paylaşın; plan/limit ve tahsilat akışını birlikte tasarlayalım.",
      },
      scope: {
        id: "paket-kapsami",
        h2: "Abonelik Katmanının Kapsamı",
        checklist: [
          "Plan ve özellik matrisi: plan başına limit (kullanıcı, kayıt, aylık işlem, depolama), özellik bayrakları, eklenti paketleri",
          "Dönem yönetimi: aylık/yıllık periyot, deneme süresi, dönem ortası yükseltme/düşürme ve pro-rata hesaplama",
          "Ödeme yaşam döngüsü: ilk tahsilat, otomatik yenileme, başarısız ödemede kademeli hatırlatma (dunning), son çare askıya alma",
          "Kullanım ölçümü ve kota: sayaçlar, dönem bazlı tüketim, limit aşımında politika (uyar / kısıtla / ek ücret)",
          "Müşteri self-servisi: plan değiştirme, ek kullanıcı satın alma, ödeme yöntemi güncelleme, fatura indirme, iptal akışı",
          "Kampanya altyapısı: indirim kodu, ilk dönem indirimi, “yıllık öde, 2 ay ücretsiz”, kurumsal özel fiyat",
          "Durum ve erişim kontrolü: askıya alma ekranı (“ödemeniz alınamadı, hesabınızı kurtarın”), veri saklama ve silme süresi",
          "Finans katmanı: e-arşiv/e-fatura üretimi, muhasebeye aktarım, tahsilat mutabakatı ve gelir tanımı (kazanılmış vs. faturalandırılmış)",
          "Operasyon paneli: abonelik listesi, gecikmeler, iptal gerekçeleri, geri kazanma notları, manuel düzeltme yetkisi ve logu",
          "Metrikler: MRR/ARR, churn ve kazanım, ortalama plan değeri, genişleme/küçülme geliri, ödeme başı başarı oranı",
        ],
      },
      process: {
        id: "surec",
        h2: "Kurulum Süreci: 6 Adım",
        steps: [
          { title: "1. Fiyat ve plan tasarımı (2-4 gün)", text: "Kaç plan, hangi limitler, hangi özellik hangisinde; fiyat kademelendirme planı. Çıktı: plan matrisi." },
          { title: "2. Sağlayıcı seçimi (1-2 gün)", text: "Kartlı tekrarlayan tahsilat, sanal POS/havale karma modeli ve komisyon karşılaştırması. Çıktı: karar notu + entegrasyon planı." },
          { title: "3. Durum makinesi (1-3 gün)", text: "Deneme → aktif → ödeme gecikmeli → askıda → kapalı geçişleri ve her durumda müşteriye görünecek mesaj. Çıktı: onaylı durum şeması." },
          { title: "4. Geliştirme (6-12 gün)", text: "Abonelik motoru, ölçüm/kota, self-servis ekranlar ve panel; ödeme webhook'ları ve fatura entegrasyonu. Çıktı: test ortamında uçtan uca akış." },
          { title: "5. Geçiş (migrasyon) planı (2-5 gün)", text: "Mevcut müşterilerin plan/dönem/borç bilgilerinin aktarımı; iki faturalandırma turu çift çalıştırılarak doğrulanır. Çıktı: geçiş raporu." },
          { title: "6. Yayın + ilk iki dönem izleme", text: "Ödeme başarı oranı, kurtarılan tahsilat ve limit aşımı davranışı izlenip ayarlanır. Çıktı: ilk dönem raporu." },
        ],
      },
      benefits: {
        id: "faydalar",
        h2: "Kazanımlar: Nakit ve Azalan Kaçak",
        metrics: [
          { value: "-%60-80", label: "yenileme takibi için harcanan elle iş" },
          { value: "+%5-15", label: "başarısız ödeme otomasyonu ile kurtarılan tahsilat" },
          { value: "pro-rata", label: "dönem ortası plan değişimi otomatik hesaplanır" },
          { value: "MRR", label: "aylık gelir, tahmin edilebilir hâle gelir" },
        ],
        bullets: [
          { title: "Tahsilat gecikmesi azalır", text: "Otomatik yenileme + hatırlatma serisi, “bu ay kapatalım” muhasebe trafiğini düşürür.", icon: "Wallet" },
          { title: "Gelir kaçağı kapanır", text: "Limit aşımı ve aşırı kullanıcı kullanımı ölçüldüğü için, ek gelir fırsatı görünür olur.", icon: "TrendingUp" },
          { title: "Müşteri kontrolü hisseder", text: "Plan ve fatura bilgisi şeffaf olan müşteri, iptal yerine plan değiştirir.", icon: "Eye" },
          { title: "Fiyat kararı veriye döner", text: "Hangi plan hangi limiti tüketiyor; fiyat artırımı veya yeni plan tasarımı ölçümle yapılır.", icon: "Scale" },
        ],
      },
      audience: {
        id: "kimler-icin",
        h2: "Kimler İçin Uygun?",
        bullets: [
          { title: "Yazılım lisansı satanlar", text: "Tek seferlik lisans yerine yıllık bakım/lisans modeline geçmek isteyen ürün ekipleri.", icon: "Code2" },
          { title: "Periyodik hizmet verenler", text: "Bakım, temizlik, güvenlik, danışmanlık; abonelik doğal modeldir.", icon: "RefreshCw" },
          { title: "İçerik ve eğitim platformları", text: "Dergi, video, kurs, şablon kütüphanesi gibi tüketim bazlı sunumlarda limit ölçümü gerekir.", icon: "PlayCircle" },
          { title: "Donanım + yazılım kombinasyonları", text: "Cihaz kiralama, sarf malzeme ve servis paketinin birlikte faturalandığı modeller.", icon: "Cpu" },
        ],
      },
      whyUs: {
        id: "neden-biz",
        h2: "Neden Tardigrad Software?",
        bullets: [
          { title: "Kötü gidişatı da tasarlarız", text: "Başarısız ödeme, iade, kart değişimi ve iptal akışları; abonelik projelerinin asıl zor kısmıdır ve kapsamda baştan yer alır.", icon: "ShieldCheck" },
          { title: "Para hesabı şeffaf", text: "Pro-rata ve dönem ortası değişimler test senaryolarıyla doğrulanır; müşterinin önüne anlaşılmaz fatura çıkmaz.", icon: "Calculator" },
          { title: "Muhasebenizle barışık", text: "Gelirin kazanılmış/faturalandırılmış ayrımını ve e-fatura tarafını, muhasebe sorumlunuzla birlikte netleştiriyoruz.", icon: "Plug" },
          { title: "Motoru size bırakıyoruz", text: "Kural motoru ve veritabanı sizde kalır; üçüncü parti abonelik servisi tercih ederseniz ona entegre kurarız.", icon: "GitBranch" },
        ],
      },
      faq: {
        id: "sss",
        h2: "Abonelik Tabanlı Yazılım Hakkında Sıkça Sorulanlar",
        faq: [
          {
            q: "Hazır abonelik servisleri varken neden kendimiz kuralım?",
            a: "Uluslararası satışa odaklı ve plan yapınız standart ise hazır servis (Chargebee, Recurly gibi) genelde daha doğrudur; biz de önce bunu değerlendiririz. Kendi motorunu kurmanın gerekçesi şunlardan biridir: plan/limit kuralınız ürünün iç mantığına bağlı, Türkiye'deki fatura/ödeme sağlayıcılarıyla derin entegrasyon gerekiyor veya kullanıcı başı abonelik maliyeti gelirinizi eritiyor. Hibrit model de mümkündür: tahsilat hazır serviste, limit ve özellik kontrolü sizde.",
          },
          {
            q: "Türkiye'de tekrarlayan kartlı tahsilat nasıl yapılıyor?",
            a: "Kart saklama (tokenizasyon) ve tekrarlayan tahsilat, BDDK/TCMB lisanslı kuruluşların altyapısıyla yapılır; iyzico, PayTR, Craftgate, Crema ve bankaların sanal POS çözümleri bu akışı sunar. Abonelik sözleşmesi için açık rıza, kart vade takibi, 3D Secure ve başarısız ödeme deneme politikası kurulur. Kart verisi sizin sunucunuzda tutulmaz; sağlayıcı token'ı ile çalışılır.",
          },
          {
            q: "Abonelikten çıkan müşterinin verisi ne olacak?",
            a: "Bunu baştan yazılı kurala bağlıyoruz: iptal sonrası kaç gün salt-okunur erişim, kaç gün sonra anonimleştirme/silme, veri dışa aktarma hakkı ve yasal saklama süreleri (fatura ve mali kayıtlar). Panel bu süreleri otomatik uygular ve müşteriye “verinizi indirin” bağlantısı gösterir. Böylece hem KVKK hem operasyon tarafı netleşir.",
          },
          {
            q: "Plan değişikliğinde ücret nasıl hesaplanır?",
            a: "Üç yaygın politika vardır ve kararı siz verirsiniz: (1) derhal değişim + pro-rata (kısmi dönem farkı alınır/iade edilir), (2) dönem sonunda uygulanır (karışıklık olmaz ama müşteri yükseltmede bekletir), (3) yükseltme derhal, düşürme dönem sonunda. Tipik olarak üçüncüsünü öneriyoruz; panelde plan başına bu politika seçilebilir şekilde kurulur.",
          },
          {
            q: "Deneme süresi (trial) işe yarar mı?",
            a: "Self-servis modellerde evet, ama tek başına değil. Kazandıran kombinasyon: kısa ve net deneme + ilk oturumda değeri gösteren onboarding + bitişte somut teklif. Kart istememek başvuru sayısını artırır, ödeme dönüşümünü düşürür; kart istemek tam tersi. Hangisinin sizin ürününüzde daha iyi çalıştığını iki tur testle ölçüyoruz; tahminle karar vermiyoruz.",
          },
          {
            q: "Churn oranımız yüksekse önce ne yapılmalı?",
            a: "Önce ayrılma gerekçesini veriye dönüştürmek gerekir: iptal akışına tek soruluk bir gerekçe formu ve kullanım verisi eşleştirmesi. Pratikte çoğu erken churn “kullanmadım”dır ve çözümü fiyat değil onboardingdir. İkinci sırada plan/limit uyumsuzluğu gelir: müşterinin gerçek kullanımı ile planı eşleşmiyorsa ya iptal eder ya ek paket alır — doğru kurulan ölçüm bunu gelir fırsatına çevirir.",
          },
        ],
      },
      internal: {
        id: "ilgili-hizmetler",
        h2: "Abonelik Modelini Taşıyan Sistemler",
        paragraphs: [
          "Plan/limit verisi, müşteri paneli ve raporlama olmadan yönetilemez; ödeme ve fatura tarafı da entegrasyon ister. Aşağıdaki sayfalar bu katmanları anlatıyor.",
        ],
      },
    },
    ctaTitle: "Plan matrisini ve tahsilat akışını tasarlayalım",
    ctaText:
      "Kaç plan, hangi limitler, hangi ödeme modeli ve hangi fatura tarafı sorularını netleştirelim; durum makinesi ve kapsam listesiyle tek fiyat + takvim sunalım.",
  },

  "multi-tenant-uygulama": {
    h1: "Multi-Tenant Uygulama: Tek Kod Tabanı, Birbirinden Ayrı Müşteriler",
    definition: [
      "Multi-tenant (çok kiracılı) uygulama, tek kod tabanı ve tek altyapı üzerinde birden fazla müşteriyi (kiracıyı), verileri birbirinden yalıtılmış biçimde çalıştıran mimaridir. Her kiracının kendi kullanıcıları, ayarları, markası ve verileri vardır; ama sunucu, sürüm ve bakım tek yerden yürür. Buna karşılık “her müşteriye ayrı kurulum” (single-tenant) modeli özelleştirme kolaylığı getirirken bakım yükünü müşteri sayısıyla çarpar.",
      "Zor kısım mimarinin adı değil, detaylarıdır: veriye erişim kuralının uygulama katmanında değil veritabanı seviyesinde zorlanması, migration'ların yüz kiracıyı aynı anda etkilemesi, rapor ve dışa aktarma sorgularının kiracı bazlı sınırlanması, yedeklemede tek kiracının kurtarılabilmesi ve tek kiracının diğerlerinin performansını bozmasının engellenmesi.",
      "Tardigrad Software olarak çok kiracılı uygulamaları Next.js + PostgreSQL (satır bazlı yalıtım + satır seviyesi güvenlik politikası) üzerine kuruyor, müşteri bazlı ayar ve özellik bayraklarıyla yönetilebilir kılıyoruz. Mevcut tek kiracılı yapınızı çok kiracılıya taşırken kesintisiz bir migrasyon planı uyguluyoruz.",
    ],
    sections: {
      whyNeeded: {
        id: "neden-gerekli",
        h2: "Ayrı Kurulumlar Neden Sürdürülemez Olur?",
        paragraphs: [
          "Müşteri başına ayrı kurulum, ilk iki müşteride sorunsuz görünür. Altıncı müşteride bakım penceresi doğar: aynı yamanın altı kez uygulanması, her müşteride farklı sürüm, “bizdeki versiyon eski” tartışması ve bir müşterideki hatanın diğerlerinde fark edilmemesi.",
        ],
        bullets: [
          { title: "Sürüm dağınıklığı", text: "Her müşteride farklı sürüm varsa hata ayıklama ve güvenlik güncellemesi katlanarak zorlaşır.", icon: "GitBranch" },
          { title: "Maliyet katlaması", text: "Aynı sunucu, yedekleme, izleme ve güncelleme işi müşteri sayısı kadar tekrar edilir.", icon: "Coins" },
          { title: "Özelleştirme baskısı", text: "Müşteri “bize özel olsun” der; kod tabanı çatallanır ve bir noktada bakım durur.", icon: "GitMerge" },
          { title: "Rapor kısırlığı", text: "Kiracılar arası karşılaştırma yapılamaz; ürün kararları tek müşteri deneyimine sıkışır.", icon: "BarChart3" },
        ],
        miniCta: "Mevcut yapınızı (tek kiracılı/çok kiracılı) anlatın; yalıtım modeli ve migrasyon yol haritasını birlikte seçelim.",
      },
      scope: {
        id: "paket-kapsami",
        h2: "Kurduğumuz Çok Kiracılı Yapının Kapsamı",
        checklist: [
          "Yalıtım stratejisi kararı: satır bazlı tenant_id + PostgreSQL satır seviyesi güvenlik politikası (RLS), şema başına veya veritabanı başına kiracı seçeneklerinin gerekçesi",
          "Kiracı kayıt ve yaşam döngüsü: oluşturma, marka/özellik ayarları, askıya alma, kapatma, veri dışa aktarma",
          "Kiracı bazlı ayar katmanı: özellik bayrakları, dil/para birimi/zaman dilimi, çalışma takvimi ve iş kuralları",
          "Özel alan (custom field) desteği: kiracının kendi alanlarını ekleyebilmesi, şema göçü gerektirmeden",
          "Kimlik ve yetki: kiracı içi roller, dizin entegrasyonu (Azure AD/Google), tek oturum ve kiracılar arası geçiş güvenliği",
          "Alt alan adı/marka yönetimi: musteri.urununuz.com veya müşteri alan adı bağlama, TLS, e-posta gönderen adı",
          "Performans ve kota: kiracı bazlı istek limiti, sorgu planı denetimi, pahalı işlemlerin kuyruğa alınması",
          "Göç (migration) disiplini: geri alınabilir migration'lar, kademeli yayın, büyük tablolar için kilitsiz yaklaşım",
          "Yedekleme/geri yükleme: kiracı bazlı geri yükleme provası ve RPO/RTO hedeflerinin yazılması",
          "Kiracı bazlı log/ölçüm: hata ve kullanım izlemesinde kiracı etiketi; sorun tespiti ve maliyet atfı",
          "Test altyapısı: çok kiracılı senaryoların (eşzamanlı kayıt, kota, yetki sızıntısı) otomatik testleri",
        ],
      },
      process: {
        id: "surec",
        h2: "Kurulum / Taşıma Süreci: 7 Adım",
        steps: [
          { title: "1. Yalıtım kararı (1-3 gün)", text: "Veri hassasiyeti, ölçek ve operasyon tercihi değerlendirilir; ADR olarak yazılır. Çıktı: mimari karar notu." },
          { title: "2. Şema düzenlemesi (2-5 gün)", text: "Kiracı anahtarı, zorunlu indeksler ve RLS politikaları; her sorgunun kiracı filtresiyle geçtiğinin garantisi. Çıktı: migration seti." },
          { title: "3. Kimlik ve kiracı çözümleme (2-4 gün)", text: "Alt alan adı/özel domain, oturum, rol ve kiracılar arası yalıtım testleri. Çıktı: kimlik akışı." },
          { title: "4. Ayar/özellik katmanı (2-4 gün)", text: "Özellik bayrakları ve kiracı bazlı kural yönetimi; panel üzerinden değişebilen ayarlar. Çıktı: ayar şeması." },
          { title: "5. Mevcut verinin taşınması (3-10 gün)", text: "Kiracısız yapının kiracılıya dönüştürülmesi: veri etiketleme, çift çalışma dönemi ve doğrulama raporları. Çıktı: taşınmış sistem." },
          { title: "6. Kota, izleme ve yük testi (2-4 gün)", text: "Kiracı bazlı limitler, metrik etiketleri ve yoğun senaryo testleri; tek kiracının diğerlerini etkilemediği doğrulanır. Çıktı: yük testi raporu." },
          { title: "7. Kademeli açılış + geri alma planı", text: "Yeni kiracı modeline müşteri müşteri geçiş; her adımda geri alınabilir yayın. Çıktı: canlı çok kiracılı sistem." },
        ],
      },
      benefits: {
        id: "faydalar",
        h2: "Kazanımlar",
        metrics: [
          { value: "1 sürüm", label: "tüm kiracılar aynı güncellemeyi alır; yama penceresi kısalır" },
          { value: "-%70", label: "müşteri başına bakım işi (tek altyapı, tek izleme)" },
          { value: "kiracı bazlı", label: "maliyet ve kullanım atfı; fiyat kararı veriye dayanır" },
          { value: "saatler", label: "yeni müşteri kurulumu (self-servis onboarding ile)" },
        ],
        bullets: [
          { title: "Özelleştirme çatallanmadan", text: "Ayar katmanı ve özel alanlar sayesinde müşteri talebi ayrı sürüm üretmez.", icon: "SlidersHorizontal" },
          { title: "Güvenlik iddiası", text: "Veritabanı seviyesinde RLS, “kod bir yerde unutulursa” sızıntısı riskini kapatır.", icon: "Lock" },
          { title: "Karşılaştırılabilir veri", text: "Kiracılar arası kullanım analizi, ürün yol haritasını tek müşterinin sesinden kurtarır.", icon: "TrendingUp" },
          { title: "Kurumsal müşteriye kapı açar", text: "SSO, log, yedekleme ve yalıtım belgelenince büyük müşterinin güvenlik soruları cevaplanabilir.", icon: "ShieldCheck" },
        ],
      },
      audience: {
        id: "kimler-icin",
        h2: "Kimler İçin Uygun?",
        bullets: [
          { title: "SaaS'a geçiş yapan ürünler", text: "Tek müşteriyle büyüyen özel yazılımını ürüne dönüştürmek isteyen firmalar.", icon: "Layers" },
          { title: "Grup/holding içi kullanım", text: "Bir uygulamanın farklı şirket/birimler tarafından ayrı veriyle kullanılması.", icon: "Building2" },
          { title: "Ajans ve bayilik modelleri", text: "Her bayi kendi markasıyla ama tek platformda çalışacak yapılar.", icon: "Store" },
          { title: "Franchise ve şube zincirleri", text: "Merkezin standartları, şubenin kendi verisi; rapor hem şube hem merkez için üretilir.", icon: "Network" },
        ],
      },
      whyUs: {
        id: "neden-biz",
        h2: "Neden Tardigrad Software?",
        bullets: [
          { title: "Yalıtımı koda bırakmayız", text: "Kiracı filtresini unutmak en sık görülen güvenlik hatasıdır; RLS ile veritabanında zorunlu kılıyoruz.", icon: "Database" },
          { title: "Taşımayı planla yaparız", text: "Kiracısızdan kiracılıya geçiş, geri alma planı ve çift çalışma dönemi olmadan denenmez.", icon: "Workflow" },
          { title: "Operasyonu baştan yazarız", text: "Kiracı bazlı geri yükleme, log ve kota gibi “sonra hallederiz” denilen şeyler kapsamda yer alır.", icon: "Wrench" },
          { title: "Maliyeti görünür kılarız", text: "Kiracı başına kaynak tüketimi ölçümlenir; kârlı ve zararlı müşteri ayrımı veriyle yapılır.", icon: "Coins" },
        ],
      },
      faq: {
        id: "sss",
        h2: "Multi-Tenant Uygulama Hakkında Sıkça Sorulanlar",
        faq: [
          {
            q: "Kiracı başına veritabanı daha güvenli değil mi?",
            a: "“Daha güvenli” demek yerine “daha ağır” demek doğru. Yalıtımın asıl kaynağı sorgu katmanıdır: satır bazlı model doğru yazılmışsa (RLS + zorunlu kiracı filtresi + testler) bir kiracı diğerinin verisini okuyamaz. Buna karşılık kiracı başına veritabanı, migration ve yedekleme sayısını artırır, maliyeti büyütür. Genelde hibrit öneriyoruz: çoğunluk satır bazlı, veri hassasiyeti yüksek birkaç kurumsal müşteri ayrı şema veya veritabanında.",
          },
          {
            q: "Mevcut uygulamam tek kiracılı, taşımaya değer mi?",
            a: "Değer, satış modeline bağlıdır. İki müşteriye daha aynı kurulumu elle yapacaksanız evet; çünkü bakım ve özelleştirme yükü her müşteriyle artıyor. Taşıma maliyetini belirleyen üç şey: tablolara kiracı anahtarı eklenmesi, sorgu katmanının filtrelenmesi ve oturum/kimlik tarafının kiracı çözümlemesi. Küçük ürünlerde 2-4 hafta, büyüklerde 4-8 haftalık bir iş; kademeli yapılabilir.",
          },
          {
            q: "Bir müşteri çok yoğun kullanırsa diğerleri yavaşlar mı?",
            a: "Önlem alınırsa hayır. Kullandığımız dört araç: kiracı bazlı istek limitleri ve kota, ağır işlemlerin (dışa aktarma, rapor, toplu güncelleme) kuyruğa alınması, pahalı sorguların izlenip indekslenmesi ve gerektiğinde büyük kiracılar için ayrı kaynak havuzu. Yük testinde iki kiracıdan birini kasten aşırı yükleyerek ölçüm yapıyoruz.",
          },
          {
            q: "Özel alan (custom field) desteği şart mı?",
            a: "Kiracılarınız farklı sektörlerde çalışıyorsa kısa sürede şart hâle gelir. Bunu ayrı SQL migration'ları ile değil, JSONB tabanlı alan tanımı + panelde şema yönetimi ile kuruyoruz; böylece bir müşterinin talebi için sürüm yayınlamak gerekmez. Dikkat noktası, bu alanlarda filtre/raporlama performansının baştan tasarlanması ve alan tipinin doğrulanmasıdır.",
          },
          {
            q: "Müşteri kendi alan adını bağlayabilir mi?",
            a: "Evet. Alt alan adı (musteri.urununuz.com) varsayılan modeldir; ek olarak müşterinin kendi domain'ini bağlaması ve TLS sertifikasının otomatik yenilenmesi (CNAME + Let's Encrypt / Cloudflare for SaaS) kurulabilir. Bu durumda çerez alanı, CSP, webhook adresleri ve e-posta gönderen kimliği gibi detaylar da kiracı bazlı yönetilmelidir — taşıma listesine baştan ekliyoruz.",
          },
          {
            q: "Yedekleme ve geri yükleme nasıl çalışıyor?",
            a: "PITR (anlık kurtarma) destekli otomatik yedekler, kurtarma noktası/süresi hedefleri ve geri yükleme tatbikatı kuruyoruz; kritik fark ise kiracı bazlı geri yükleme provasına dönüşüyor. Tüm veritabanını geri yüklemek kolaydır, tek kiracıyı kurtarmak planlama ister: tablo kopyalama, dışa aktarma ve test ortamında doğrulama akışı yazılı hâle getirilir. RPO/RTO hedeflerini müşteri sözleşmenize göre birlikte belirliyoruz.",
          },
        ],
      },
      internal: {
        id: "ilgili-hizmetler",
        h2: "Çok Kiracılı Yapının Dayandığı Katmanlar",
        paragraphs: [
          "Kiracı yönetimi; kullanıcı/yetki sistemi, veritabanı seçimi ve panel ile birlikte karar gerektirir. Aşağıdaki sayfalar bu bağımlılıkları anlatıyor.",
        ],
      },
    },
    ctaTitle: "Yalıtım modelini birlikte seçelim",
    ctaText:
      "Veri hassasiyetiniz, müşteri sayınız ve operasyon tercihiniz netleşsin; ADR niteliğinde bir karar notu, migrasyon planı ve tek fiyat/takvimle dönelim.",
  },

  "dashboard-sistemi": {
    h1: "Dashboard Sistemi: Ekranı Değil, Kararı Tasarlamak",
    definition: [
      "Dashboard, bir işletmenin kritik sayılarını tek ekranda, karşılaştırılabilir ve filtrelenebilir biçimde gösteren arayüzdür. Grafik koleksiyonuyla ilgisi yoktur: iyi dashboard, bakana “ne yapmalıyım” sorusunun cevabına götüren üç-beş metriği, doğru kıyasla ve doğru derinlikle sunar. Kötü dashboard ise güzel görünür, kimse açmaz.",
      "Kurulması gereken üç katman vardır: veri (hangi sistemden, ne sıklıkla, hangi tanımla), model (hangi gösterge hangi kararı üretir) ve arayüz (kime hangi görünüm, hangi filtre, hangi derine inme). Bu katmanların ikisi eksikse ekran, toplantıda bir kez bakılıp terk edilen bir süs olur.",
      "Tardigrad Software olarak dashboard'ları ya kurduğumuz sistemlerin (CRM, iş takip, sipariş, stok) içine gömülü pano olarak ya da birden çok kaynağı birleştiren bağımsız bir raporlama panosu olarak geliştiriyoruz. Power BI/Metabase gibi araçlarla çalışmak isterseniz veri modeli ve tanımları kuruyor, görselleştirmeyi size bırakıyoruz.",
    ],
    sections: {
      whyNeeded: {
        id: "neden-gerekli",
        h2: "Sayı Var, Tablo Var; Neden Hâlâ Bilmiyoruz?",
        bullets: [
          { title: "Sayı kıyaslanmıyor", text: "“Bu ay 120 iş” tek başına bir şey söylemez; geçen aya, hedefe ve kişi dağılımına bakılmadan karar verilmez.", icon: "Scale" },
          { title: "Veri geç gelir", text: "Ay sonu çıkarılan tablo, müdahale penceresini kapatır; sorun iki ay sonra görünür.", icon: "Clock" },
          { title: "Tanımlar farklı", text: "İki departman “aktif müşteri”yi farklı sayar; toplantıda sorun tartışılır, çözüm değil.", icon: "FileWarning" },
          { title: "Derine inilemiyor", text: "Düşüş görünüyor ama hangi ürün/bölge/ekip kaynaklı; cevaba ulaşmak için üç saat uğraşılır.", icon: "Search" },
        ],
        miniCta: "Yönetim toplantınızın gündemini paylaşın; hangi 5-8 kartın gerçekten karar ürettiğini birlikte ayıralım.",
      },
      scope: {
        id: "paket-kapsami",
        h2: "Dashboard Sisteminin Kapsamı",
        checklist: [
          "Gösterge sözlüğü: her kartın tanımı, formülü, sorumlusu ve tazelik seviyesi yazılı olarak",
          "Hedef ve kıyas katmanı: önceki dönem, hedef, bütçe ve sapma yüzdesi",
          "Filtreler: dönem, şube/bölge, ekip, ürün grubu, müşteri segmenti; kayıtlı görünüm ve paylaşım",
          "Drill-down: grafik noktadan satıra inme ve ilgili kayda (sipariş/iş/müşteri) bağlantı",
          "Anormallik uyarıları: eşik ve trend bazlı bildirim (e-posta, Slack/Teams, WhatsApp)",
          "Rollere göre görünüm: üst yönetim özeti, bölüm müdürü detayı, saha/operasyon günlük listesi",
          "Zamanlı çıktı: sabah özeti, haftalık kapanış, aylık yönetim raporu (PDF/e-posta)",
          "Televizyon/ekran modu: ofisa asılı pano; otomatik dönen, büyük punto, tazelik rozeti",
          "Performans bütçesi: sorgu süreleri, önbellekleme ve artımlı toplama; panonun “ağır” hissettirmemesi",
          "Erişim güvenliği: satır seviyesi veri sınırı (bölge müdürü kendi bölgesini görür), indirme izni ve log",
          "Mobil kullanım: dar ekranda okunabilir kart düzeni ve kritik liste görünümleri",
        ],
      },
      process: {
        id: "surec",
        h2: "Kurulum Süreci: 6 Adım",
        steps: [
          { title: "1. Karar envanteri (1-2 gün)", text: "Yönetimin her hafta/hangi kararı verdiği yazılır; gösterge listesi buradan türer. Çıktı: karar ↔ gösterge eşlemesi." },
          { title: "2. Gösterge sözlüğü (2-4 gün)", text: "Tanım, formül, kaynak ve tazelik; tartışmalı konular karara bağlanır. Çıktı: sözlük belgesi." },
          { title: "3. Veri hazırlığı (2-6 gün)", text: "Kaynak sistemlerden toplama, temizleme ve model kurulumu; eksik alanlar için iş kuralı. Çıktı: güvenilir veri katmanı." },
          { title: "4. Arayüz geliştirme (4-10 gün)", text: "Kartlar, grafikler, filtreler, derine inme ve uyarılar; okuma ritmine göre yerleşim. Çıktı: ön izleme panosu." },
          { title: "5. Mutabakat testi (1 hafta)", text: "Muhasebe ve bölüm raporlarıyla sayı karşılaştırması; farklar tek tek açıklanır. Çıktı: güven raporu — panonun kabul şartı." },
          { title: "6. Yayın + ritüel + iyileştirme", text: "Toplantı gündemi panoya göre güncellenir; bir ay sonra bakılmayan kartlar çıkarılır. Çıktı: canlı sistem + revizyon notu." },
        ],
      },
      benefits: {
        id: "faydalar",
        h2: "Kazanımlar",
        metrics: [
          { value: "-%80", label: "elle rapor derleme süresi" },
          { value: "günlük", label: "veri tazeliği; müdahale gecikmez" },
          { value: "tek tanım", label: "“hangi sayı doğru” tartışması biter" },
          { value: "5-8 kart", label: "gereksiz gösterge ayıklanmış, okunan bir pano" },
        ],
        bullets: [
          { title: "Sorun erken görünür", text: "Geciken tahsilat, biriken kuyruk, düşen dönüşüm uyarı üretir; kriz hâline gelmeden yakalanır.", icon: "Bell" },
          { title: "Ekibin odağı netleşir", text: "Kişi/ekip bazlı görünürlük, “neyi iyileştirelim” sorusuna ortak cevap verir.", icon: "Target" },
          { title: "Karar savunulabilir olur", text: "Bütçe, kadro ve fiyat kararı veriyle gerekçelendirilir; iç ve dış raporlamada kaynağı gösterilir.", icon: "FileText" },
          { title: "Yönetim süresi kısalır", text: "Toplantı veri derlemekle değil, veri yorumlamakla geçer.", icon: "Users" },
        ],
      },
      audience: {
        id: "kimler-icin",
        h2: "Kimler İçin Uygun?",
        bullets: [
          { title: "Birden fazla sistem kullananlar", text: "Muhasebe, CRM, stok ve saha verisi ayrı; ortada birleşik bir pano yok.", icon: "Layers" },
          { title: "Çok şube/bölge olanlar", text: "Karşılaştırma, sıralama ve standart metrik ihtiyacı.", icon: "Network" },
          { title: "Operasyon yoğun ekipler", text: "Kuyruk, kapasite ve SLA takibi; günlük kısa toplantı ritüeli.", icon: "Gauge" },
          { title: "Yatırımcı/grup raporlaması", text: "Düzenli ve tutarlı metrik seti dışarıya da sunulacaksa.", icon: "Briefcase" },
        ],
      },
      whyUs: {
        id: "neden-biz",
        h2: "Neden Tardigrad Software?",
        bullets: [
          { title: "Gösterge budaması yaparız", text: "İlk sürümde 30 kart önermiyoruz; bakılmayan kartı ölçüp çıkarıyoruz. Pano sade kalırsa kullanılır.", icon: "Filter" },
          { title: "Sayıya güven testi şart", text: "Muhasebe ile mutabakat kapanmadan panoyu yayına almıyoruz; güvenilmeyen pano iki ayda ölür.", icon: "ShieldCheck" },
          { title: "Kaynağa inebilen arayüz", text: "Grafikten satıra, satırdan iş kaydına; soruyu yanıtlayan bağlantıdır, grafik güzelliği değil.", icon: "MousePointerClick" },
          { title: "Kendi aracınızla uyum", text: "Power BI/Metabase/Looker tercih ederseniz modeli kurup devrediyoruz; araç bağımlılığı üretmiyoruz.", icon: "Wrench" },
        ],
      },
      faq: {
        id: "sss",
        h2: "Dashboard Sistemi Hakkında Sıkça Sorulanlar",
        faq: [
          {
            q: "Power BI yeterli değil mi?",
            a: "Lisansınız ve veri analistiniz varsa çoğu ihtiyaç için yeterlidir. Öne geçtiğimiz iki durum var: (1) pano içinden işleme geçmek istiyorsanız (karttaki gecikmiş siparişe tıklayıp sevkiyat ekranını açmak) — bu, gömülü panel gerektirir; (2) üst yönetim mobil/ekran için sade ve hızlı bir özet istiyorsa; BI araçları genelde derinlik için iyidir, gündelik okuma için ağırdır. Üçüncü seçenek Power BI'ı gömerek kullanmak; bu durumda da gereken şey doğru veri modeli ve tanımlardır.",
          },
          {
            q: "Hangi göstergeleri koymalıyız?",
            a: "Kural basit: bir gösterge, ancak bir kararı değiştirecekse panoda yer alır. Bu yüzden “karar envanteri” ile başlıyoruz — yönetim haftada/ayda hangi kararı veriyor? Tipik set 5-8 ana kart ve bunların altında kırılımlardır: satışta boru hattı ve kazanma oranı, operasyonda kuyruk/gecikme, finansal tarafta nakit ve alacak yaşı, hizmette SLA. Yirmi kartlık panolar, iki ay sonra açılmaz hâle gelir.",
          },
          {
            q: "Verilerimiz dağınık, yine de kurulur mu?",
            a: "Kurulumun en ağır kısmı zaten burası. Kaynaklar tek tek değerlendirilir: API var mı, Excel'i kim üretiyor, hangi alan eksik. Çözüm üç kademeli olabilir: (1) API/entegrasyon ile otomatik toplama, (2) planlı dosya aktarımı (SFTP/Drive), (3) elle giriş gerektiren metrikler için kısa form. Üçüncüsünden mümkün olan en kısa sürede çıkmak hedefimizdir; elle beslenen pano, zamanla eksik beslenir.",
          },
          {
            q: "Pano ne sıklıkla güncellenmeli?",
            a: "Karar ritmi neyse o. Operasyonel metrikler (kuyruk, stok, sevkiyat) için dakika/saat bazlı; finansal özetler için günlük; pazarlama ve satış eğilimleri için günlük-haftalık yeterlidir. Tazelik, maliyetle doğru orantılı artar: her dakika yeniden hesaplanan bir gösterge, bulut faturanızı görünür biçimde artırabilir. Bu yüzden gösterge başına tazelik seviyesini sözlüğe yazıyoruz.",
          },
          {
            q: "Sonucu rapor olarak dışarı paylaşabilir miyiz?",
            a: "Evet, iki biçimde: zamanlı PDF/e-posta (yönetim raporu, müşteriye aylık özet) ve bağlantı ile erişim kontrollü canlı görünüm. Paylaşımda kritik olan iki konuyu baştan kararlaştırıyoruz: maskeleme (müşteri adları, hassas maliyet) ve indirme yetkisi. Müşteriye gösterilecek SLA/performans kartları için ayrı görünüm kuruyoruz; aynı pano iki tarafa da uyarlanır.",
          },
        ],
      },
      internal: {
        id: "ilgili-hizmetler",
        h2: "Pano İçin Gerekli Olan Veri ve Erişim Katmanı",
        paragraphs: [
          "Dashboard; raporlama, iş takip ve yönetim paneliyle birlikte çalıştığında eyleme dönüşür. Aşağıdaki sayfalar bu bağımlılıkları anlatıyor.",
        ],
      },
    },
    ctaTitle: "Beş kartla başlayalım",
    ctaText:
      "Toplantı gündeminizi ve bugünkü rapor akışınızı anlatın; gösterge sözlüğü taslağı, kaynak veri durumu ve ilk pano kapsamı tek sayfada netleşsin.",
  },

  "mvp-startup-urunu": {
    h1: "MVP / Startup Ürünü: İlk Sürümü 12 Haftada Üretime Almak",
    definition: [
      "MVP (minimum uygulanabilir ürün), hedef müşterinin problemini çözen en küçük uçtan uca sürümdür: bir problemi, tek bir akışla, gerçekten kullanılabilir şekilde çözer ve geri bildirim toplanabilir. “Yarım ürün” veya “demo şovu” değildir; ilk müşterinin para verebileceği kadar tam, ama gereksiz hiçbir şeyi içermeyecek kadar küçüktür.",
      "Kurucu ekiplerde en sık kayıp, ürünün ilk sürümünü genişletmektir: beş ekran daha, iki entegrasyon daha, “yatırımcıya böyle daha iyi görünür”. Bunun maliyeti, öğrenmenin gecikmesidir. Doğru yaklaşım tek bir öğrenme hedefi seçmek, ürünün o hedefi ölçecek şekilde kurulması ve sürenin 8-12 hafta ile sınırlanmasıdır.",
      "Tardigrad Software olarak MVP süreçlerini teknik ortak gibi yürütüyoruz: kapsam budağı, mimari karar notu (ADR), Next.js + TypeScript + shadcn/ui + PostgreSQL (Supabase) ile geliştirme, kimlik/ödeme/abonelik için hazır servis entegrasyonları, Vercel/Cloudflare yayın hattı ve ilk metrik kurulumu. Gerektiğinde ikinci aşamada ölçek ve bakım işlerini üstleniyoruz.",
    ],
    sections: {
      whyNeeded: {
        id: "neden-gerekli",
        h2: "MVP Sürecinde Neler Tıkanır?",
        bullets: [
          { title: "Kapsam şişer", text: "“Bir de şu olsun” listesi, öğrenmeyi üç ayla geciktirir ve bütçeyi tüketir.", icon: "Layers" },
          { title: "Mimari ertelenir", text: "Kiracı, yetki ve veri modeli “sonra düzelir” denir; onuncu müşteride yeniden yazma gündeme gelir.", icon: "Shield" },
          { title: "Ölçüm kurulmaz", text: "Ürün çıkar ama kimin kullandığı, nerede vazgeçtiği bilinmez; yol haritası tahmine kalır.", icon: "BarChart3" },
          { title: "Tek kişi riski", text: "Bir freelance kişiye bağlı kod, tatil/hastalık/ayrılık anında durur; dokümantasyon yoktur.", icon: "UserX" },
        ],
        paragraphs: [
          "Bu dört madde, MVP'nin teknik değil süreç kaynaklı tökezleme sebepleridir. Çalışma biçimimiz tam bunlara göre kurgulanır.",
        ],
        miniCta: "Tek sayfalık problem/çözüm özetinizi paylaşın; kapsam listesi, 12 haftalık plan ve bütçe aralığıyla dönelim.",
      },
      scope: {
        id: "paket-kapsami",
        h2: "MVP Paketinin İçeriği",
        checklist: [
          "Kapsam atölyesi: öğrenme hedefi, kullanıcı akışları ve “ilk sürümde olmayanlar” listesinin yazılması",
          "Teknik karar notu (ADR): kiracı modeli, veritabanı, kimlik, ödeme, hosting ve neden seçildiği",
          "Tasarım sistemi: shadcn/ui üzerinde markanıza uyarlanmış, sonraki sürümlere ölçeklenen bileşen seti",
          "Kimlik ve onboarding: e-posta + Google ile giriş, kurulum sihirbazı, örnek veri ve ilk değer adımı",
          "Ana akışın uçtan uca çalışması: temel işlem, doğrulama, boş/hata durumları ve bildirim",
          "Ödeme/abonelik (gerekiyorsa): iyzico/Stripe ile plan ve tekrarlayan tahsilat, fatura tarafı için entegrasyon",
          "Yönetim ekranı: müşteri/abone listesi, durum değişikliği ve basit rapor; erken destek ihtiyacını karşılar",
          "Analitik ve hata izleme: olay şeması (kayıt, aktivasyon, ilk değer, ödeme), Sentry, hız bütçesi",
          "SEO/landing: bekleme listesi, pazarlama sayfaları ve Open Graph görselleri (tanıtım hazırlığı dâhil)",
          "CI/CD ve ortam ayrımı: staging/canlı, migration disiplini, otomatik test ve geri alma",
          "Devir paketi: kod deposu, README, ortam değişkenleri, mimari notu ve ekip içi eğitim",
        ],
      },
      process: {
        id: "surec",
        h2: "MVP Süreci: 5 Aşama / 12 Hafta",
        steps: [
          { title: "0. Ücretsiz ön görüşme (1 hafta)", text: "Problem, hedef kullanıcı, rakipler ve bütçe beklentisi; kapsamın gerçekçiliği konuşulur. Çıktı: tek sayfalık kapsam + takvim + fiyat aralığı." },
          { title: "1. Şekillendirme (1-2 hafta)", text: "Kullanıcı akışları, ekran listesi, veri modeli ve ADR'ler netleşir. Çıktı: geliştirme onayı bekleyen plan." },
          { title: "2. Çekirdek akış (3-5 hafta)", text: "İki haftalık sprintlerle uçtan uca ana akış çıkar; her turda görebilirsiniz. Çıktı: staging'de gezilebilir ürün." },
          { title: "3. Alpha (1-2 hafta)", text: "5-10 gerçek kullanıcıyla kullanım; analitik ve destek notları toplanır. Çıktı: önceliklendirilmiş iyileştirme listesi." },
          { title: "4. Beta + lansman (2 hafta)", text: "Ödeme, onboarding, hata ve hız düzeltmeleri; kapalı beta sonrası genel erişim. Çıktı: canlı ürün + ölçüm paneli." },
        ],
      },
      benefits: {
        id: "faydalar",
        h2: "Bu Çalışma Biçiminin Size Getirdiği",
        metrics: [
          { value: "8-12 hafta", label: "fikirden canlı ürüne tipik süre" },
          { value: "2 hafta", label: "sprint ritmi; her turda görebilir bir çıktı" },
          { value: "%100", label: "kod, depo ve dokümantasyon sizin adınıza" },
          { value: "1 ADR", label: "mimari kararların yazılı gerekçesi (devir için kritik)" },
        ],
        bullets: [
          { title: "Yatırımcıya somut gösterirsiniz", text: "Sunum değil link: ölçülen kullanım verisi, en az bir ödeme almış bir akış ve net yol haritası.", icon: "TrendingUp" },
          { title: "Yanlış fikri ucuza anlarsınız", text: "Öğrenme hedefi küçük olduğu için, yön değiştirme kararı aylar yerine haftalar içinde verilir.", icon: "Filter" },
          { title: "Ekip devri kolaydır", text: "Sonra kendi yazılımcınızı alıp devam edebilirsiniz; tipik kurulumda 2-4 haftada devir tamamlanır.", icon: "GitBranch" },
          { title: "Erken teknik borç azalır", text: "Kiracı/yetki/veri modeli baştan kurulur; altı ay sonra “sıfırdan yazalım” masaya gelmez.", icon: "ShieldCheck" },
        ],
      },
      audience: {
        id: "kimler-icin",
        h2: "Kimler İçin Uygun?",
        bullets: [
          { title: "Teknik olmayan kurucular", text: "Ürün fikri ve müşteri erişimi var; teknik liderlik ve süreç yönetimi gerekiyor.", icon: "Rocket" },
          { title: "Teknik kurucular, zamanı olmayanlar", text: "Ürünü yan proje olarak yürütüp ilerleyemeyen ekipler; hız ve disiplin gerek.", icon: "Clock" },
          { title: "Kurum içi girişimler", text: "Yeni ürün denemesi; bütçe ve onay döngüleri kısa sürsün diye tek elden çözüm.", icon: "Building2" },
          { title: "Mevcut ürünü yeniden yapanlar", text: "Eski/terk edilmiş yazılımı modern yığına taşıyacak, riski yöneten bir geçiş planı.", icon: "RefreshCw" },
        ],
      },
      whyUs: {
        id: "neden-biz",
        h2: "Neden Tardigrad Software?",
        bullets: [
          { title: "Kapsamı biz budarız", text: "“Buna gerek yok” demek, teknik ortaktan beklenen asıl hizmettir; öğrenme hedefine bağlı kalmayı sözleşmeye yazıyoruz.", icon: "Scissors" },
          { title: "Maliyet ve takvim tek kalemde", text: "Sprint bazlı sabit fiyat: hangi turda neyin çıkacağı ve kaç para olduğu baştan bilinir; sürpriz fatura üretmiyoruz.", icon: "Calculator" },
          { title: "SEO'yu da düşünüyoruz", text: "Landing, hız ve yapısal veri ilk sürümde kurulur; tanıtım bütçeniz teknik aksaklıkla heba olmaz.", icon: "Search" },
          { title: "Devir, işin son maddesi", text: "Kod, ortam değişkenleri, mimari notu ve eğitim kaydı teslim edilir; “ajansa bağımlı kalma” riskini tasarlamıyoruz.", icon: "KeyRound" },
        ],
      },
      faq: {
        id: "sss",
        h2: "MVP Geliştirme Hakkında Sıkça Sorulanlar",
        faq: [
          {
            q: "MVP için bütçe ne kadar olmalı?",
            a: "Kapsama göre değişir ama gerçekçi aralığı baştan söylemek gerekir: tek akışlı, kimlik ve ödeme içeren, yönetim ekranı olan bir web ürünü için yaklaşık 12 haftalık bir program; daha sade bir doğrulama sürümü için 6-8 hafta. Ayrıca yayından sonraki aylar için bakım/izleme bütçesi planlanmalıdır. En sık yapılan hata, lansman sonrası için hiç bütçe ayırmamaktır; ürün ilk iki çeyrekte en çok o dönemde düzelir.",
          },
          {
            q: "Hisseye ortak olarak teknik kurucu gibi çalışır mısınız?",
            a: "Hayır; nakit + net kapsam ile çalışıyoruz. Gerekçemiz dürüstlük: ürün odaklı uzun dönem taahhüdünü, tek bir projeye bağlanmış bir ekip yapısı veremez. Alternatifimiz net: MVP'yi teslim eder, ilk 6-12 ay için sabit bir aylık hız programı (küçük bütçe, öncelik sırası, ölçüm) öneririz. Böylece hem ölçeklenebilir hem ayrılabilir bir iş birliği olur.",
          },
          {
            q: "No-code ile kendimiz yapsak olmaz mı?",
            a: "Olur, ve bazı doğrulama aşamalarında öneriyoruz: problemi test eden bir hafta süren otomasyon + form + ödeme bağlantısı, geliştirme masrafının yüzde biri olabilir. No-code'un sınıra dayandığı üç yer var: özel iş kuralları ve hesaplama, kiracı/yetki karmaşıklığı, maliyet/performans. Doğru sıra şu: no-code ile öğren, sonra öğrenileni sağlam ürüne taşı — taşımayı da biz yapıyoruz.",
          },
          {
            q: "Fikrim çalınır mı, NDA imzalar mısınız?",
            a: "NDA imzalıyor ve kod/veri tarafındaki erişimi minimize ediyoruz. Ancak pratik gerçek şu: rekabet avantajı fikirde değil, icra ve dağıtımdadır. Bu yüzden ilk görüşmede hem hukuki korumayı hem de sizi asıl koruyacak şeyi — hızla öğrenmek ve dağıtım kanalını kurmak — konuşuyoruz. Pazara çıkma planı olmayan bir ürün, koruması olan ama kullanıcısı olmayan ürün olur.",
          },
          {
            q: "Yatırımcı sunumu için teknik bir şey gerekir mi?",
            a: "Gerekir ve bu genelde küçümsenir: çalışan bir link, ölçülebilen bir kullanım verisi ve “nasıl inşa edilecek” sorusuna verilmiş mimari cevap. Üçü için 6-10 hafta yeter. Biz MVP çıktısında bu üçünü de hazır bırakıyoruz: staging/canlı ortam, analitik paneli ve bir sayfalık teknik yaklaşım notu.",
          },
          {
            q: "Süreç içinde fikri pivot edersek ne olur?",
            a: "İyi bir sonuçtur, yeter ki bunu baştan planlayalım. Çalışma biçimimiz bu yüzden iki haftalık turlara bölünür: her turun sonunda öğrenmeyi tartışır, kapsamı yeniden sıralarız. Pivot hâlinde atılan iş, çöpe giden sözleşme olmaz; çünkü çekirdek katman (kimlik, veri modeli, panel, yayın hattı) çoğu pivotta yeniden kullanılır. Sözleşmeye de kapsamı turlara göre güncelleme hakkını yazıyoruz.",
          },
        ],
      },
      internal: {
        id: "ilgili-hizmetler",
        h2: "MVP'den Sonra Gerekli Olan Katmanlar",
        paragraphs: [
          "Ürün tuttuğunda ilk işler ölçek, abonelik, panel ve görünürlük olur. Aşağıdaki sayfalar bu sonraki adımları anlatıyor.",
        ],
      },
    },
    ctaTitle: "Tek sayfa ile başlayın",
    ctaText:
      "Problem, hedef kullanıcı ve bugün elinizde olanı özetleyin; öğrenme hedefi, kapsam budaması ve 12 haftalık plan dâhil bir sayfalık teklif hazırlayalım.",
  },
}
