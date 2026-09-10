import type { ServiceContent } from "@/types/content"

/**
 * FAZ 2 — grup 2a: özel yazılım hizmetleri (rezervasyon/başvuru, müşteri yönetimi, teklif).
 * Hedef: Bölüm 6 sırası + ~1.100-1.300 kelime/sayfa, 5-6 SSS.
 */
export const yazilimContents: Record<string, ServiceContent> = {
  "rezervasyon-basvuru-sistemi": {
    h1: "Rezervasyon ve Başvuru Sistemi: Takvimi Otomatiğe Alan Altyapı",
    definition: [
      "Rezervasyon ve başvuru sistemi; bir randevu, yer, araç, koltuk, salon veya kontenjan için gelen taleplerin internetten alınmasını, takvimle çakışma kontrolünün otomatik yapılmasını ve sürecin onay/ödeme/takip adımlarla yürütülmesini sağlayan yazılımdır. Temel fark şudur: telefon ve WhatsApp üzerinden yürüyen kayıt işi, sistemde verili bir kural setine dönüşür; “boş yer var mı?” sorusunu artık insan sormaz.",
      "Bu tip bir projede zor olan randevu ekranı değil, arkadaki kurallardır: hangi kaynak (kişi, masa, cihaz, oda) hangi kapasiteyle çalışacak, iptal ve gecikme ne sayılacak, ön ödeme gerekli mi, aynı kişi iki kez kayıt olabilir mi, kontenjan aşımı nasıl engellenecek, yoğun saatlerde kuyruk ve kilit nasıl çalışacak. Biz bu kuralları ilk haftada yazılı olarak netleştirir, sonra kodlarız.",
      "Tardigrad Software olarak çözümü Next.js + TypeScript + Tailwind + shadcn/ui ön yüz, sunucu tarafında iş kuralı motoru ve yönetim paneli olarak kuruyoruz; dileyen müşteri paneli, SMS/e-posta hatırlatma, ödeme bağlantısı ve mevcut muhasebe/CRM entegrasyonunu aynı pakete ekliyor.",
    ],
    sections: {
      whyNeeded: {
        id: "neden-gerekli",
        h2: "Neden Takvim + Excel ile Yürüyen Kayıt İşini Sisteme Almalısınız?",
        paragraphs: [
          "Manuel kayıt, düşük hacimde çalışır; hacim arttıkça üç yerde kırılır: çakışan kayıtlar, gelen talebe geç dönülmesi ve gün sonunda kimin geldiğinin bilinmemesi. Aşağıdaki dört tablo, görüşmeye gelen işletmelerde en sık duyduğumuz cümlelerdir.",
        ],
        bullets: [
          { title: "Çift kayıt ve boş takvim", text: "Aynı saate iki müşteri; ya da takvim dolu görünüp koltukların boş kalması. Sonuç ya iade ya itibar kaybı.", icon: "CalendarX" },
          { title: "Gelen talebe geç yanıt", text: "Mesajlar birikir, ilk 15 dakikada dönmeyen talep rakibe gider. Sistemde yanıt anlıktır.", metric: "0 sn", icon: "Clock" },
          { title: "No-show (gelmeme) kaybı", text: "Hatırlatma ve ön ödeme olmadığında boş gelen randevu oranı çift hanelere çıkar; kayıp ciro raporlanmadığı için görünmez kalır.", icon: "UserX" },
          { title: "Ölçülemeyen doluluk", text: "Hangi saat, hangi personel, hangi hizmet dolu? Bu veri olmadan fiyat ve kadro kararı tahminle alınır.", icon: "LineChart" },
        ],
        miniCta: "Kayıt akışınızı 30 dakikada dinleyip kural setini ve kapasite modelini birlikte yazalım.",
      },
      scope: {
        id: "paket-kapsami",
        h2: "Kapsam: Sistemde Ne Olur, Ne Olmaz?",
        checklist: [
          "Kaynak ve kapasite modeli: kişi, oda, masa, araç, cihaz veya kontenjan bazlı takvim; çalışma saatleri ve mola kuralları",
          "Halka açık rezervasyon ekranı: tarih-saat seçimi, boşluk gösterimi, mobil öncelikli akış, misafir olarak kayıt",
          "Kural motoru: minimum/maksimum süre, tampon süre, ileriden rezervasyon sınırı, aynı kişinin tekrar kaydı, iptal süresi",
          "Onay akışı: anlık onay, bekleme listesi veya “talep alındı → manuel onay” modları",
          "Bildirimler: e-posta/SMS/WhatsApp hatırlatma, onay ve iptal mesajları; kişiye özel şablonlar",
          "Ödeme katmanı (opsiyonel): kapora, tam ödeme veya yerinde ödeme; iade/erteleme kuralları",
          "Yönetim paneli: takvim görünümü, sürükle-bırak ile taşıma, toplu işlemler, açıklamalar ve etiketler",
          "Müşteri kartı: geçmiş rezervasyonlar, notlar, tercih edilen saat/personel, tekrar gelen müşteri ayrımı",
          "Raporlama: doluluk, gelir, iptal/gelmeme oranı, personel bazlı performans, saatlik ısı haritası",
          "Entegrasyonlar: Google/Outlook takvim senkronu, ön muhasebe, mevcut CRM veya form sistemi",
          "Yetki ve güvenlik: rol bazlı erişim, KVKK uyumlu veri saklama, log kaydı ve yedekleme",
        ],
      },
      process: {
        id: "surec",
        h2: "Kurulum Süreci: 6 Adım",
        steps: [
          { title: "1. Süreç çıkarma (1-2 gün)", text: "Bugünkü kayıt akışı adım adım yazılır: kim arıyor, hangi bilgi isteniyor, kim onaylıyor, iptalde ne oluyor. Çıktı: kural seti dokümanı." },
          { title: "2. Kapasite ve fiyat modeli (1-2 gün)", text: "Kaynaklar, süreler, ek ücretler ve kontenjan mantığı netleşir. Çıktı: veri modeli + ekran listesi." },
          { title: "3. Tasarım ve akış ön izleme (2-4 gün)", text: "Rezervasyon ekranı, panel ve bildirim şablonları tasarlanır; tıklayarak test edersiniz. Çıktı: onaylı akış." },
          { title: "4. Geliştirme (5-12 gün)", text: "Kural motoru, takvim, panel ve bildirim hattı kodlanır; ödeme/entegrasyon varsa bu adımda bağlanır. Çıktı: test ortamında çalışan sistem." },
          { title: "5. Veri girişi ve prova (1-3 gün)", text: "Mevcut takvim ve müşteri kayıtları aktarılır; personelle bir günlük prova yapılarak gerçek rezervasyonlar sistemden geçirilir. Çıktı: canlıya hazır ayar." },
          { title: "6. Yayın + 30 gün gözlem", text: "Canlıya geçiş, personel eğitimi ve ilk ay izleme; kural ince ayarları bu pencerede yapılır. Çıktı: canlı sistem + rapor." },
        ],
      },
      benefits: {
        id: "faydalar",
        h2: "Sisteme Geçince Ne Değişir?",
        metrics: [
          { value: "-%70", label: "çift kayıt / çakışma hatası (kural motoru sayesinde)" },
          { value: "-%30-50", label: "no-show oranında hatırlatma + kapora ile düşüş" },
          { value: "7/24", label: "rezervasyon alma; mesai sınırı kalkar" },
          { value: "1 panel", label: "takvim, müşteri, gelir ve doluluk tek ekranda" },
        ],
        bullets: [
          { title: "Telefon trafiği azalır", text: "“Boş yer var mı?” sorusu ekrana taşınır; ekip işin kendisine vakit ayırır.", icon: "PhoneOff" },
          { title: "Doluluk bilinçli yönetilir", text: "Boş saatler için indirim/kampanya, yoğun saatler için asgari süre kuralı uygulanabilir.", icon: "TrendingUp" },
          { title: "Gelir kaçağı görünür olur", text: "İptal, gecikme ve yerinde ödeme farkları raporda tutulur; kayıp ölçülürse kapanır.", icon: "LineChart" },
          { title: "Müşteri verisi birikir", text: "Tekrar gelen oranı, tercih edilen saat ve personel bilgisi; sadakat çalışması için zemin oluşur.", icon: "Users" },
        ],
      },
      audience: {
        id: "kimler-icin",
        h2: "Kimler İçin Uygun?",
        bullets: [
          { title: "Randevu ile çalışan işletmeler", text: "Klinik, güzellik merkezi, terapist, tamir servisi, stüdyo; kaynak kişi veya cihazdır.", icon: "CalendarClock" },
          { title: "Yer/kapasite satanlar", text: "Restoran, kafe, salon, etkinlik alanı, sinema/atölye; kaynak masa, koltuk veya kontenjandır.", icon: "Armchair" },
          { title: "Araç ve ekipman kiralama", text: "Araç, spor saati, iş makinesi, sahne ekipmanı; bakım ve tampon süreleri kritiktir.", icon: "Truck" },
          { title: "Kontenjanlı başvuru süreçleri", text: "Eğitim, burs, program, başvuru dönemi olan kurumlar: kayıt tarihi aralığı, belge yükleme ve değerlendirme akışı.", icon: "FileCheck" },
        ],
      },
      whyUs: {
        id: "neden-biz",
        h2: "Neden Tardigrad Software?",
        bullets: [
          { title: "Önce kural, sonra kod", text: "Kapasite, iptal ve tampon kuralları yazılı onaylanmadan geliştirme başlamaz; sonradan “böyle mi olacaktı” tartışması çıkmaz.", icon: "FileText" },
          { title: "Yarış durumunu ciddiye alıyoruz", text: "Yoğun saatte aynı boşluğa iki talep düşerse ne olacağı, veritabanı kilidi ve kuyruk mantığıyla belirlidir; hazır şablonların çoğu burada kırılır.", icon: "ShieldCheck" },
          { title: "Paneli personelin kullanabildiği tasarım", text: "Sekreterya/kabul ekranı hızlı olmalı: tek ekranda gün, sürükle-bırak ve kısa tuşlar.", icon: "MousePointerClick" },
          { title: "Mülkiyet ve devir", text: "Kod, veritabanı ve dokümantasyon sizin adınıza; dilediğinizde kendi ekibinize devredilebilir.", icon: "GitBranch" },
        ],
      },
      faq: {
        id: "sss",
        h2: "Rezervasyon ve Başvuru Sistemi Hakkında Sıkça Sorulanlar",
        faq: [
          {
            q: "Hazır rezervasyon uygulamaları varken neden özel yazılım?",
            a: "Hazır uygulamalar standart akışlarda mantıklıdır ve biz de ilk soruda “hazır yeter mi?” diye bakarız. Özel kurulum genellikle üç durumda gerekir: kural setiniz standart kalıba uyuşmadığında (tampon süre, personeller arası geçiş, karma kaynak), kayıt verisini kendi sisteminize akıtmak istediğinizde ve komisyon/abonelik maliyetinin cironuzla büyüdüğünde. Kararı bu üç madde üzerinden birlikte veriyoruz; gerekirse hazır araç + entegrasyon kuruyoruz.",
          },
          {
            q: "Ödeme altyapısını da siz mi kuruyorsunuz?",
            a: "Evet. Türkiye'de iyzico, PayTR, Craftgate gibi sağlayıcılarla sanal POS entegrasyonu, kapora (kısmi ödeme) ve iade/erteleme akışı kurulabilir. 3D Secure ve kart saklama (token) konularında PCI yükünü sağlayıcıya bırakacak şekilde tasarlıyoruz; ödeme sayfasını sizin sitenizin görünümünde ama sağlayıcının güvenli akışıyla çalıştırıyoruz.",
          },
          {
            q: "Mevcut takvimimizle (Google/Outlook) uyumlu olur mu?",
            a: "Olur. Kişi ve kaynak bazlı takvim senkronu kuruyoruz: dış takvimde dolu olan blok sistemde boş görünmez, sistemden giren kayıt dış takvime düşer. Tek yönlü veya çift yönlü senkron seçimini, düzenlemeyi kimin yaptığına göre belirliyoruz.",
          },
          {
            q: "No-show'u gerçekten azaltır mı?",
            a: "Tek başına mucize değil ama etkisi ölçülebilir: onay + 24 saat ve 2 saat önce hatırlatma, iptal/erteleme linki ve kapora istemek birlikte çalıştığında gelmeme oranı tipik olarak belirgin şekilde düşer. Hangi kombinasyonun size uygun olduğunu ilk ayın verisiyle seçiyoruz; agresif kapora bazı sektörlerde satış da kaybettirebilir.",
          },
          {
            q: "Başvuru sistemi ile rezervasyon sistemi aynı şey mi?",
            a: "Aynı iskeletin iki farklı ucu. Rezervasyonda kaynak-zaman eşleşmesi, başvuruda ise form + belge + değerlendirme akışı öne çıkar. İkisini birlikte kuran taleplerde (ör. kontenjanlı eğitim kaydı) tek tabloda durum makinesi kuruyoruz: taslak → alındı → ön inceleme → eksik belge → onaylandı → kontenjan tahsisi.",
          },
          {
            q: "Sistem mobil uygulama mı, web mi olacak?",
            a: "Standart çözüm mobil öncelikli web uygulamasıdır: kurulum gerektirmez, iOS/Android'de tarayıcıdan ve “ana ekrana ekle” ile tam ekran kullanılır. Bildirim ve kamera/barkod gibi cihaz özellikleri yoğun kullanacaksanız ayrıca uygulama planlarız; bu durumda da takvim ve kural motoru tek sunucuda kalır, istemci değişir.",
          },
        ],
      },
      internal: {
        id: "ilgili-hizmetler",
        h2: "Rezervasyon Sistemini Tamamlayan Katmanlar",
        paragraphs: [
          "Takvim tek başına bir gelir sistemi değildir; ödeme, müşteri kartı, otomasyon ve raporlama katmanlarıyla birlikte çalıştığında sonuç üretir. Aşağıdaki sayfalar bu parçaları, şehir sayfaları ise yerel talebi karşılama biçimini anlatıyor.",
        ],
      },
    },
    ctaTitle: "Akışınızı dinleyip kural setini yazalım",
    ctaText:
      "Kapasite modeliniz, iptal kurallarınız ve ödeme beklentiniz netleşsin; ardından kapsam, tek fiyat ve takvimle birlikte ekran akışını da gösteriyoruz.",
  },

  "musteri-yonetim-sistemi": {
    h1: "Müşteri Yönetim Sistemi (MYS): Müşteri Verisini Satışa Dönüştüren Disiplin",
    definition: [
      "Müşteri yönetim sistemi, bir işletmenin müşteriyle kurduğu tüm teması — talep, teklif, görüşme notu, sipariş, destek kaydı ve tahsilat — tek kayıt altında toplayan yazılımdır. Halk arasında CRM olarak da anılır; pratikte ikisi aynı şemsiyenin parçalarıdır: “müşteri yönetimi” işlevi, “CRM” ise bu işlevi taşıyan sistem. Bu sayfada, satış ve satış sonrası süreçleri tek havuzda toplamak için kurduğumuz yapıyı anlatıyoruz.",
      "Türkiye'deki KOBİ'lerde müşteri bilgisinin büyük kısmı kişilerin telefonunda, WhatsApp sohbetlerinde ve dağınık Excel dosyalarında durur. Bu, iki pahalı sonuca yol açar: deneyimli biri ayrıldığında ilişki geçmişi de gider, ve kimin ne aşamada olduğu bilinmediği için takip fırsatları kaybolur. Sistem kurmak, bu bilgiyi şirkete ait, aranabilir ve raporlanabilir bir varlığa dönüştürmektir.",
      "Tardigrad Software olarak iki yol öneriyoruz: yerleşik bir CRM'i (ör. HubSpot, Zoho, SuiteCRM) ihtiyaçlarınıza göre uyarlayıp kendi sistemlerinize bağlamak, ya da satış süreciniz standart kalıba uymuyorsa paneli size özel bir MYS kurmak. Hangi yolun doğru olduğunu, ekip büyüklüğünüz ve sürecinizin ne kadar “size özel” olduğu belirler.",
    ],
    sections: {
      whyNeeded: {
        id: "neden-gerekli",
        h2: "Excel ile Yönetilen Müşteri Neden Taşar?",
        paragraphs: [
          "Excel, tek kişinin hafızası için mükemmel bir araçtır; beş kişi ve üç aylık birikimden sonra ise bilgi çöplüğüne dönüşür. Aşağıdaki dört tabloyu yaşıyorsanız, mesele “daha düzenli bir tablo” değil, sistem değiştirmektir.",
        ],
        bullets: [
          { title: "Aynı müşteriye iki satışçı", text: "Kayıt tek yerde olmadığı için aynı teklifi iki kez verir, müşteriyi rakibe kaptırır veya fiyat erozyonuna girersiniz.", icon: "Users" },
          { title: "Takip unutulur", text: "“Haftaya arayacağım” notu 400 satırın içinde kaybolur; kapanmamış fırsat sayısı raporlanmadığı için kayıp görünmez.", metric: "%20-30 kaçan fırsat", icon: "BellOff" },
          { title: "Çalışan ayrılınca ilişki gider", text: "Kişisel telefonda duran yazışmalar şirketin hafızasını taşır; yeni kişi sıfırdan başlar.", icon: "UserX" },
          { title: "Fiyat/iskonto disiplini yok", text: "Kimin hangi fiyattan aldığı bilinmez; yıl sonunda kârlılık analizi yapılamaz.", icon: "TrendingDown" },
        ],
        miniCta: "Satış sürecinizi 5 aşamada haritalayıp hangi verinin gerçekten gerektiğini birlikte belirleyelim.",
      },
      scope: {
        id: "paket-kapsami",
        h2: "Kurduğumuz Müşteri Yönetim Sisteminin Kapsamı",
        checklist: [
          "Müşteri ve firma kartı: tekilleştirme (benzer kayıt birleştirme), sektör/bölge/segment alanları, ekip ataması",
          "Aşama (pipeline) yönetimi: fırsattan kapanışa kanıtlanmış aşamalar, kayıp nedenleri, aşama bazlı beklenen süre",
          "Aktivite kaydı: arama, görüşme, e-posta ve WhatsApp notları; hatırlatma ve “bir sonraki adım” zorunluluğu",
          "Teklif ve ürün satırları: fiyattan beslenen teklif şablonu, iskonto yetki kuralları, PDF çıktı ve sürüm geçmişi",
          "Sipariş → fatura → tahsilat takibi: ön muhasebe/ERP bağlantısı veya manuel akış; geciken tahsilat uyarısı",
          "Destek/talep kuyruğu: gelen sorunun kayda dönüşmesi, SLA ve devretme; satış sonrası ilişkinin kopmaması",
          "Yönetici panosu: hedef/gerçekleşen, aşama dönüşüm oranları, ekip başı açık fırsat, borçlanma yaşlandırma",
          "Mobil kullanım: sahadaki ekibin tek ekrandan kayıt girmesi, konum/fotoğraf eklemesi",
          "Otomasyonlar: yeni talebe otomatik atama, 3 gün hareketsiz fırsatta uyarı, kazanınca teklif formunun hazırlanması",
          "İçe aktarma ve veri temizliği: mevcut Excel/CRM verisinin alan eşlemesiyle taşınması",
          "Yetkilendirme ve KVKK: rol bazlı erişim, veri saklama süresi, silme/anonimleştirme akışı, işlem kaydı",
        ],
      },
      process: {
        id: "surec",
        h2: "Kurulum Süreci: 7 Adım",
        steps: [
          { title: "1. Süreç görüşmesi (2-3 gün)", text: "Satış ekibinin gerçek akışı dinlenir; “olması gereken” değil “olan” yazılır. Çıktı: süreç diyagramı ve aşama tanımları." },
          { title: "2. Veri modeli (1-2 gün)", text: "Müşteri, fırsat, teklif, aktivite ve destek kaydı alanları; hangilerinin zorunlu olacağı belirlenir. Çıktı: şema + alan sözlüğü." },
          { title: "3. Yol seçimi (1 gün)", text: "Yerleşik CRM uyarlaması mı, özel MYS mi; maliyet, esneklik ve bakım açısından karşılaştırma raporu. Çıktı: karar ve gerekçesi." },
          { title: "4. Kurulum/geliştirme (5-15 gün)", text: "Seçilen yol uygulanır; entegrasyonlar (e-posta, ön muhasebe, WhatsApp, web formu) bağlanır. Çıktı: test ortamında sistem." },
          { title: "5. Veri taşıma ve temizlik (2-5 gün)", text: "Excel/CSV'den alan eşlemesi, yinelenen kayıtların birleştirilmesi, hatalı telefon/e-posta düzeltmeleri. Çıktı: temiz, taşınmış veri." },
          { title: "6. Eğitim ve pilot ekip (3-5 gün)", text: "Önce 3-5 kişilik pilot grupla iki hafta kullanım; ekran ve alan düzenlemeleri bu geri bildirimle kapanır. Çıktı: benimsemiş ekip + eğitim kaydı." },
          { title: "7. Yaygınlaştırma + rapor katmanı", text: "Tüm ekibe açılır, yönetici panoları ve otomasyonlar devreye alınır. Çıktı: canlı sistem + ilk ay raporlaması." },
        ],
      },
      benefits: {
        id: "faydalar",
        h2: "Sayılarla Etki",
        metrics: [
          { value: "+%10-25", label: "takip disipliniyle artan kapanma oranı (tipik gözlem)" },
          { value: "-%60", label: "yinelenen/mükerrer müşteri kaydı" },
          { value: "1 bakış", label: "her fırsat için “bir sonraki adım” net" },
          { value: "2 hafta", label: "pilot ekiple kuruma yerleşme süresi" },
        ],
        bullets: [
          { title: "Şirket öğrenir", text: "Hangi segment, hangi kaynak, hangi aşama kaybettiriyor — veri biriktikçe karar kalitesi artar.", icon: "LineChart" },
          { title: "Onboarding hızlanır", text: "Yeni satışçı müşterinin geçmişini ekrandan okur; “eskiyi sormak” için yöneticiyi meşgul etmez.", icon: "GraduationCap" },
          { title: "Tahsilat düzeni", text: "Geciken ödeme listesi ve yaşlandırma raporu, nakit akışını satışın önüne koyar.", icon: "Wallet" },
          { title: "Fiyat disiplini", text: "İskonto yetki kuralları sistemde olduğu için kâr marjı korunur, “son anda indirim” azalır.", icon: "ShieldCheck" },
        ],
      },
      audience: {
        id: "kimler-icin",
        h2: "Kimler İçin Uygun?",
        bullets: [
          { title: "3-30 kişilik satış ekipleri", text: "Telefonla yönetilebilir sınıra yaklaşmış ekipler; kayıt disiplini tek başına yetmiyor.", icon: "Users" },
          { title: "Teklifle satış yapanlar", text: "Proje, taahhüt, toptan satış gibi çok aşamalı ve revizyonlu teklif döngüsü olan firmalar.", icon: "FileText" },
          { title: "Saha + merkez karma çalışması", text: "Saha ekibinin ziyaret kaydını, merkezin teklif takibini aynı havuzda toplaması gereken yapılar.", icon: "MapPin" },
          { title: "Satış sonrası ilişki kritik olanlar", text: "Abonelik, bakım, sarf malzemesi veya periyodik servis modeli; tekrar satışı verinin kendisi üretir.", icon: "RefreshCw" },
        ],
      },
      whyUs: {
        id: "neden-biz",
        h2: "Neden Tardigrad Software?",
        bullets: [
          { title: "Önce “gerek var mı?” diyoruz", text: "Bazı firmalarda doğru çözüm mevcut bir CRM'in düzgün kurulumu ve entegrasyonudur; gereksiz özel yazılım üretmiyoruz.", icon: "Target" },
          { title: "Süreci yazılıma uydurmuyoruz", text: "Aşama ve alan seti sizin akışınıza göre şekillenir; “kutunun kutusu” doldurulmayan alanlarla şişmez.", icon: "Workflow" },
          { title: "Uçtan uca tek ekip", text: "Web formu, e-posta, WhatsApp, ön muhasebe ve panel aynı mimaride kurulur; veri taşırken kaybolmaz.", icon: "Plug" },
          { title: "Benimsemeyi proje hedefi sayıyoruz", text: "Eğitim, pilot tur ve kısa alan formları sayesinde sistem “yukarıdan zorla kullanılan” bir araç olmaz.", icon: "GraduationCap" },
        ],
      },
      faq: {
        id: "sss",
        h2: "Müşteri Yönetim Sistemi Hakkında Sıkça Sorulanlar",
        faq: [
          {
            q: "CRM ile müşteri yönetim sistemi aynı şey mi?",
            a: "İkisi çoğu zaman eş anlamlı kullanılır; ince ayrım şu: müşteri yönetimi bir iş disiplini (kimin, hangi aşamada, hangi adımla takip edileceği), CRM ise bu disiplini taşıyan yazılım. Pratikte doğru sıra disiplinin tanımlanması, aracın sonra seçilmesidir. Önce araç alınırsa, kutu dolmayacak alanlarla şişer ve ekip “boş veri girmekten” vazgeçer.",
          },
          {
            q: "Hazır CRM kiralamak yerine neden özel sistem kuralım?",
            a: "Üç nedenden biri varsa: (1) teklif/iskonto ve onay kurallarınız standart kalıba sığmıyor; (2) veriyi kendi altyapınızda, kendi veritabanınızda tutmak zorundasınız; (3) kullanıcı başı abonelik, ekibiniz büyüdükçe özel geliştirme maliyetini aşıyor. Aksi hâlde hazır CRM'i entegrasyonlarla kullanmanızı öneririz; satışımız değil, uygunluğu önemsiyoruz.",
          },
          {
            q: "Ekibim “form doldurmakla” uğraşmak istemez, ne olacak?",
            a: "En sık başarısızlık sebebi budur ve çözümü zor kullanmak değil, tasarlamaktır: zorunlu alan sayısını en aza indiririz, e-posta/WhatsApp yazışmasını otomatik çekeriz, tek tuşla “arandı / kaldı / sonra ara” kaydı koyarız. Pilot ekipte iki hafta boyunca hangi alanın gerçekten doldurulduğunu ölçer, doldurulanı bırakırız.",
          },
          {
            q: "Mevcut Excel verimiz dağınık, yine de taşınır mı?",
            a: "Taşınır; fakat öncesinde bir temizlik turu şart. Alan eşlemesi, yinelenen kayıtların birleştirme kuralı (vergi no/e-posta), telefon biçimlendirmesi ve boş zorunlu alanlar için karar listesi çıkarıyoruz. Genelde tablonun %10-20'si ya silinir ya birleştirilir; bu, sistemin ilk kazandığı disiplin olur.",
          },
          {
            q: "Verimiz KVKK açısından uygun olur mu?",
            a: "Açık rıza ve aydınlatma metinleri, veri saklama süresi, silme/anonimleştirme akışı, rol bazlı erişim ve işlem günlüğü kurulumun parçasıdır. Pazarlama amaçlı iletişim için izin alanlarını ayrı tutar, ticari elektronik ileti onayının (İYS) gönderim tarafında zorunlu olmasını sağlar ve kişisel veri içeren alanları raporlarda maskeleyebiliriz.",
          },
          {
            q: "Satış dışında (üretim, proje, destek) de kullanılabilir mi?",
            a: "Evet. Aynı “kayıt + aşama + aktivite + sorumlu” iskeleti, proje takibi ve destek kuyruğu için de çalışır. İhtiyaç büyürse iş takip sistemi ve yönetim paneli sayfalarında anlattığımız modüllerle birleştirir; ayrı ayrı üç araç yerine tek panoda iki süreç yürütürüz.",
          },
        ],
      },
      internal: {
        id: "ilgili-hizmetler",
        h2: "Müşteri Verisini İşleyen Sistemleri Birbirine Bağlamak",
        paragraphs: [
          "MYS'nin değeri, teklif, sipariş, iş takibi ve raporlama katmanlarıyla birlikte çalıştığında ortaya çıkar. Aşağıdaki sayfalar bu bağlantıları nasıl kurduğumuzu anlatıyor; şehir sayfalarında ise bölgesel müşteri yapısına göre önceliklendirmeyi bulabilirsiniz.",
        ],
      },
    },
    ctaTitle: "Satış sürecinizi haritalayalım",
    ctaText:
      "Aşamalarınız, kayıp nedenleriniz ve bugün takip için harcanan süre konuşulsun; hangi alanların gerçekten gerekeceğini ve hazır CRM mi özel sistem mi olduğunu gerekçesiyle özetleyelim.",
  },

  "teklif-hazirlama-sistemi": {
    h1: "Teklif Hazırlama Sistemi: Dakikalar İçinde, Hatasız, Takip Edilen Teklif",
    definition: [
      "Teklif hazırlama sistemi, satış ekibinin fiyat listesi, işçilik ve indirim kurallarını kullanarak kısa sürede biçimlendirilmiş, onay akışlı ve takip edilebilir teklif üretmesini sağlayan yazılımdır. Ortaya çıkan şey bir PDF değil, veritabanında satırları olan bir kayıttır; bu yüzden revizyonu, süresi, geçerlilik tarihi, kazancı ve kaybı ölçülebilir.",
      "Manuel teklif hazırlamanın maliyeti çoğu zaman görünmez: bir teklif için 40-90 dakika harcanır, yanlış fiyat veya eksik kalem fark edilmez, gönderilen 60 tekliften hangisinin hatırlatılmayı beklediği bilinmez, yıl sonunda hangi ürünün ne kârla satıldığı çıkartılamaz. Sistem, bu dört kaybı aynı anda kapatır: hız, tutarlılık, takip ve analiz.",
      "Tardigrad Software olarak teklif modülünü ya kurduğumuz CRM/MYS içine yerleştiriyor ya da bağımsız bir araç olarak kuruyoruz; fiyat listesini ürün/tedarikçi modülünden veya ön muhasebe/ERP'den besletiyoruz. Böylece teklif, stok ve kâr marjı tek veri kaynağından türüyor.",
    ],
    sections: {
      whyNeeded: {
        id: "neden-gerekli",
        h2: "Word + Excel ile Teklif Neden Pahalıdır?",
        paragraphs: [
          "Teklif, satışın en çok zaman alan ve en çok hata üreten belgesidir. Tabloları kopyalayan, indirim hesabını elle yapan ve son fiyat listesini bulamayan bir ekip, fark edilmeden para kaybeder.",
        ],
        bullets: [
          { title: "Yanlış fiyat riski", text: "Bayat fiyat listesiyle gönderilen teklif, ya zarara satış ya da müşteride güven kaybı doğurur.", icon: "AlertTriangle" },
          { title: "Teklif başına zaman", text: "Ortalama bir teknik teklif 45-90 dakika; 10 kişilik ekipte yılda binlerce saat demek.", metric: "45-90 dk", icon: "Clock" },
          { title: "Takip kopuyor", text: "Gönderilen teklifin akıbeti bilinmiyor; hatırlatma zamanı “hatırlanınca” geliyor.", icon: "BellOff" },
          { title: "Kâr marjı belirsiz", text: "Hangi ürün/müşteri segmenti gerçekten kazandırıyor? Satır bazlı maliyet yoksa cevap yok.", icon: "TrendingDown" },
        ],
        miniCta: "Bir örnek teklifinizi paylaşın; hangi satırların otomatikleştirilebileceğini ve süreyi ne kadar kısaltabileceğimizi gösterelim.",
      },
      scope: {
        id: "paket-kapsami",
        h2: "Teklif Sisteminin Kapsamı",
        checklist: [
          "Fiyat listesi yönetimi: versiyon/tarih, müşteri segmentine ve bayiye özel fiyat, kur/para birimi",
          "Kalem kütüphanesi: ürün/hizmet, birim, açıklama şablonu, teknik özellik ve maliyet bilgisi",
          "Teklif şablonları: sektöre göre düzenlenmiş, markalı PDF/HTML çıktı; birim, vergi ve geçerlilik ayarları",
          "Hesap motoru: iskonto kuralları, kademe fiyatları, işçilik/nakliye/montaj ekleri, KDV ve kesinti hesapları",
          "Onay akışı: yetki üstü indirimde yönetici onayı, dijital imza/paraflı çıktı, onay günlüğü",
          "Revizyon yönetimi: sürüm geçmişi, revizyon farklarının listelenmesi, müşteriye “v2” gönderiminin izi",
          "Teklif → sipariş → fatura: kazanan teklifin tek tuşla siparişe dönüşmesi, satırların korunması",
          "Takip katmanı: geçerlilik süresi, hatırlatma zamanları, kazanma/kaybetme nedeni kaydı",
          "Müşteriye özel portal (opsiyonel): teklifin linkten görüntülenmesi, onaylanması ve indirmesi",
          "Raporlama: teklif başına süre, kazanma oranı, segment/müşteri/ürün bazlı kâr marjı, açık teklif listesi",
          "Entegrasyonlar: ön muhasebe (Logo, Mikro, Paraşüt, Bizim Hesap vb.), e-fatura, WhatsApp/e-posta gönderimi, CRM",
        ],
      },
      process: {
        id: "surec",
        h2: "Kurulum Süreci: 6 Adım",
        steps: [
          { title: "1. Teklif analizi (1-2 gün)", text: "Mevcut 5-10 örnek teklif üzerinden kalem, hesap ve biçim ihtiyacı çıkarılır. Çıktı: şablon listesi + kural dokümanı." },
          { title: "2. Fiyat ve maliyet modeli (2-4 gün)", text: "Fiyat listesinin kaynağı, güncellenme sıklığı, maliyet verisinin nereden geleceği netleşir. Çıktı: alan şeması." },
          { title: "3. Kural tasarımı (1-3 gün)", text: "İskonto yetkileri, kademe fiyatları, onay eşikleri ve geçerlilik süreleri yazılır. Çıktı: onaylı kural seti." },
          { title: "4. Geliştirme ve şablon uygulaması (6-12 gün)", text: "Teklif editörü, PDF üretimi, onay akışı ve panel kodlanır; CRM/muhasebe bağlantıları kurulur. Çıktı: test ortamında uçtan uca akış." },
          { title: "5. Veri yükleme ve pilot (2-4 gün)", text: "Kalem kütüphanesi ve fiyat listesi yüklenir, 2-3 satışçıyla iki haftalık pilot yapılır. Çıktı: doğrulanmış şablonlar." },
          { title: "6. Yaygınlaştırma + eğitim", text: "Tüm ekibe açılır, eğitim kaydı ve kısa kullanım kılavuzu bırakılır. Çıktı: canlı sistem + ölçüm paneli." },
        ],
      },
      benefits: {
        id: "faydalar",
        h2: "Ölçülebilir Kazanımlar",
        metrics: [
          { value: "-%70", label: "teklif başına hazırlık süresi (kütüphane + hesap motoru)" },
          { value: "+%10-20", label: "zamanında gönderim ve hatırlatma ile kazanma oranı" },
          { value: "0", label: "yanlış fiyatla gönderilen teklif (tek kaynak fiyat listesi)" },
          { value: "satır bazlı", label: "kâr marjı ve kayıp nedeni analizi" },
        ],
        bullets: [
          { title: "Hız, rekabet avantajı", text: "İlk gönderen avantajını kaybetmemek için 2-3 kalemlik standart teklifler dakikalar içinde çıkar.", icon: "Zap" },
          { title: "Kurumsal görünüm", text: "Aynı şablon, aynı terminoloji; her satışçının teklifi aynı kalitede görünür.", icon: "FileText" },
          { title: "İndirim kontrolü", text: "Yetki üstü indirim yönetici onayına düştüğü için marj korunur; “müşteri istedi” gerekçesi işlemez.", icon: "ShieldCheck" },
          { title: "Doğru fiyatlama verisi", text: "Kaybedilen tekliflerin fiyat ve neden bilgisi birikir; fiyat politikası tahminden veriye geçer.", icon: "LineChart" },
        ],
      },
      audience: {
        id: "kimler-icin",
        h2: "Kimler İçin Uygun?",
        bullets: [
          { title: "Proje ve taahhüt firmaları", text: "Keşif/metraj, iş kalemleri ve alternatifli paketlerle karmaşık teklif üreten yapılar.", icon: "HardHat" },
          { title: "Toptan ve bayi kanalı", text: "Müşteriye özel fiyat, kademe iskontosu ve bayi girişiyle teklif talebi yönetimi.", icon: "Boxes" },
          { title: "Hizmet firmaları", text: "Paket + ek işçilik modeli; adam/gün, saatlik veya modüler fiyatlamayla teklif üreten ofisler.", icon: "Briefcase" },
          { title: "İmalat ve teknik satış", text: "Teknik özellik tablosu, opsiyon/aksesuar listesi ve revizyon döngüsü yoğun sektörler.", icon: "Package" },
        ],
      },
      whyUs: {
        id: "neden-biz",
        h2: "Neden Tardigrad Software?",
        bullets: [
          { title: "Teklif, sipariş ve stok aynı havuzda", text: "Fiyat listesi bir yerde, teklif başka yerde olursa hata kaçınılmazdır; kaynağı tek tutuyoruz.", icon: "Workflow" },
          { title: "PDF değil, kayıt üretir", text: "Çıktı güzel görünür ama asıl değer satırların veritabanında olmasıdır; takip ve analiz bunu gerektirir.", icon: "Database" },
          { title: "Muhasebe entegrasyonunu biliyoruz", text: "Logo/Micro/ön muhasebe servisleriyle cari, stok ve irsaliye tarafında hangi verinin nerede kalacağını baştan netleştiririz.", icon: "Plug" },
          { title: "Yetki ve log disiplini", text: "İndirim, iptal ve fiyat değişimi kim tarafından yapıldı; sistemde izi olur. Denetimde bu fark eder.", icon: "ShieldCheck" },
        ],
      },
      faq: {
        id: "sss",
        h2: "Teklif Hazırlama Sistemi Hakkında Sıkça Sorulanlar",
        faq: [
          {
            q: "Ön muhasebe programımız zaten teklif üretiyor, gerek var mı?",
            a: "Çoğu ön muhasebe ve ERP çözümü teklifi bir belge olarak üretir; ancak çok kalemi, revizyonu, teknik açıklamayı ve onay akışını yönetmekte zayıftır. Satış ekibi bu yüzden Excel'de hazırlayıp içeri girer — çift iş, hata riski. Sistem kurarken hedef, Excel'deki “hazırlama” kısmını alıp belgeyi muhasebeye otomatik bırakmak: kalem kütüphanesi ve hesap motoru bizde, fatura/cari tarafı sizde kalır.",
          },
          {
            q: "Fiyat listesi çok sık değişiyor, ne yapacağız?",
            a: "Fiyat listesinin tek doğruluk kaynağı belirlenmeli: Excel mu kalmalı, sistem mi taşımalı? Genelde listeyi sistemde versiyonlu tutuyoruz (yayın tarihi, geçerlilik aralığı, kim değiştirdi); eski tarihli teklifler kendi fiyatıyla donuyor, yenileri yeni listeden besleniyor. Excel kaynak kalacaksa içe aktarma ve değişiklik uyarısı kuruyoruz.",
          },
          {
            q: "Karmaşık hesaplar (kademe, alternatif, opsiyon) çalışır mı?",
            a: "Çalışır; önemli olan bu kuralların yazılı tanımlanması. Miktar kademeleri, ürün ailesi içi alternatif seçimi, opsiyon/aksesuar ekleri, işçilik ve nakliye hesapları, minimum kâr marjı kontrolü tipik ihtiyaçlardır. Kural ne kadar özelse, tanımlama adımına o kadar süre ayırıyoruz; motoru buna göre kuruyoruz.",
          },
          {
            q: "Teklif onayı ve müşterinin kabulü nasıl işliyor?",
            a: "İki katman var. İç onayda, yetki üstü indirim veya özel koşul yönetici onayına düşer; dijital onay kaydı teklifin sürümüne iliştirilir. Dış kabulde ise müşteriye özel link üzerinden teklifi görüntüleme, şartları kabul etme ve dijital onay verme akışı kurulabilir; isteyen için e-imza sağlayıcısına bağlanır, isteyen için e-posta onayı yeterlidir.",
          },
          {
            q: "WhatsApp'tan teklif göndermek mümkün mü?",
            a: "Evet. Onaylı Business hesabı üzerinden şablon mesajla PDF/link gönderimi ve okundu/tepki takibi kurulabilir. Burada dikkat ettiğimiz nokta, müşterinin telefon numarasına açık rıza olmadan ticari ileti göndermemek; izin durumu sistemde alan olarak tutulur ve gönderim buna göre engellenir.",
          },
          {
            q: "Kazanma oranımız gerçekten artar mı?",
            a: "Doğrudan değil, dolaylı olarak artar: sistem hızı, tutarlılığı ve hatırlatma disiplinini yükseltir; kazancı üreten şey bunların toplamıdır. İlk iki ayda ölçeceğimiz üç gösterge var: teklif başına hazırlık süresi, geçerlilik tarihinden sonra gönderilen teklif sayısı ve hatırlatma yapılmadan kalan açık teklif oranı.",
          },
        ],
      },
      internal: {
        id: "ilgili-hizmetler",
        h2: "Teklif Sürecini Uçtan Uca Kapatmak",
        paragraphs: [
          "Teklifin girdisi ürün ve maliyet verisinden, çıktısı sipariş ve faturadan beslenir. Aşağıdaki sayfalar bu zincirin diğer halkalarını anlatıyor; şehir sayfalarında ise bölgesel müşteri yapısına göre kurguyu bulabilirsiniz.",
        ],
      },
    },
    ctaTitle: "Örnek teklifinizden bir prototip çıkaralım",
    ctaText:
      "Kalem sayınız, hesap kurallarınız ve onay akışınız netleşsin; hangi bölümlerin otomatikleşeceğini ve pilot süreyi birlikte planlayalım.",
  },
}
