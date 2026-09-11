import type { ServiceContent } from "@/types/content"

/**
 * FAZ 2 — grup 3b: iş takibi, raporlama ve form/başvuru sistemleri.
 */
export const yazilimContents4: Record<string, ServiceContent> = {
  "is-takip-sistemi": {
    h1: "İş Takip Sistemi: İşin Nerede Beklediğini Gösteren Omurga",
    definition: [
      "İş takip sistemi, bir işin talep edilmesinden kapanmasına kadar geçen her adımı; sorumlusu, süresi, ekleri ve durum bilgisiyle kaydeden yazılımdır. Görev yönetimi araçlarından farkı, işin işletmenizin gerçek sırasını (teklif → onay → hazırlık → uygulama → teslim → faturalama) modellemesi ve bu akışa kural bağlamasıdır.",
      "Paneli olmayan ekiplerde iş, “en çok bağıran” kişinin önceliğine göre akar. Bu, müşteri tarafında güveni, ekip tarafında süreyi eritir. İş takip sistemi iki şeyi standartlaştırır: herkesin gününü tek ekrandan görmesi ve yöneticinin tıkanan adımı gecikmeden fark etmesi.",
      "Tardigrad Software olarak iş takip modülünü ya yönetim panelinizin çekirdeği olarak ya da saha/üretim/ofis süreçlerinize göre özel akış motoru şeklinde kuruyoruz. Fotoğraf, konum, imza ve barkod gibi saha ihtiyaçları; SLA, hatırlatma ve otomatik atama gibi kurallarla birlikte tasarlanır.",
    ],
    sections: {
      whyNeeded: {
        id: "neden-gerekli",
        h2: "İş Takibi Olmazsa Hangi Kayıplar Birikir?",
        bullets: [
          { title: "Unutulan iş, fark edilmeyen gecikme", text: "“Not aldım” ile “takibe aldım” arasındaki fark, kaybedilen teslim tarihi olur.", icon: "BellOff" },
          { title: "Kimde, bilmiyoruz", text: "İş bir kişide takılı kalır; sorulmadığı sürece görünmez. İzin ve devir dönemlerinde durur.", icon: "UserX" },
          { title: "Aynı iş iki kez yapılır", text: "Bilgi paylaşımı olmadığı için iki kişi aynı hazırlığı yapar; maliyet raporlara girmez.", icon: "Copy" },
          { title: "Süreç bilinmiyor", text: "Hangi adım ortalama kaç gün sürüyor? Bu ölçülmediği için termin sözü tahminle verilir.", metric: "? gün", icon: "Hourglass" },
        ],
        paragraphs: [
          "Dört kaybın da çözümü “daha dikkatli olmak” değil; akışı ve durumu sisteme yazmaktır.",
        ],
        miniCta: "Bir işin doğumdan kapanışa geçtiği adımları anlatın; durum makinesi ve ekran akışını birlikte kuralım.",
      },
      scope: {
        id: "paket-kapsami",
        h2: "İş Takip Sisteminin Kapsamı",
        checklist: [
          "İş türleri ve şablonları: her tür için adım listesi, tahmini süre, gerekli alanlar ve kontrol noktaları",
          "Durum makinesi: yeni → atanıyor → işlemede → kontrol → onay → tamamlandı → kapandı (geçiş kurallarıyla)",
          "Atama ve devir: kişi/ekip ataması, yoğunluğa göre otomatik dağıtım, izinli kişiden devir",
          "Öncelik ve takvim: aciliyet, termin tarihi, gecikme hesaplama, ısı haritası",
          "İş detay ekranı: açıklama, ek dosya/fotoğraf, konum, iç/dış notlar, geçmiş ve işlem günlüğü",
          "Saha özellikleri: mobilde fotoğraf yükleme, imza alma, barkod/seri okutma, çevrimdışı taslak",
          "Onay ve kontrol: kalite kontrol adımı, iki kişilik onay, reddedince gerekçe zorunluluğu",
          "Bildirim ve hatırlatma: geciken iş için sorumlu ve yöneticiye uyarı; müşteriye durum mesajı",
          "SLA kuralları: tür bazlı yanıt/çözüm hedefleri, ihlal sayacı ve eskalasyon",
          "Müşteri/talep girişi: web formu, e-posta ve WhatsApp'tan otomatik iş açma; tekilleştirme",
          "Raporlama: kişi/ekip/tür bazlı adet ve süre, gecikme nedenleri, tamamlanma oranı, iş yükü dağılımı",
        ],
      },
      process: {
        id: "surec",
        h2: "Kurulum Süreci: 6 Adım",
        steps: [
          { title: "1. Süreç haritalama (2-4 gün)", text: "Örnek 10-15 gerçek iş üzerinden adım, sorumlular ve beklenen süreler yazılır. Çıktı: süreç dokümanı." },
          { title: "2. Durum ve kural seti (1-3 gün)", text: "Durum isimleri, geçiş koşulları, SLA hedefleri ve otomasyonlar netleşir. Çıktı: onaylı kural listesi." },
          { title: "3. Ekran tasarımı (2-5 gün)", text: "Kuyruk, detay ve saha ekranları; “bir işi kapatmak kaç dokunuş” hedefiyle sadeleştirilir. Çıktı: prototip." },
          { title: "4. Geliştirme ve entegrasyon (7-15 gün)", text: "Motor, panel, mobil ekran, bildirim ve varsa CRM/muhasebe bağlantısı kodlanır. Çıktı: test ortamı." },
          { title: "5. Pilot (1-2 hafta)", text: "Bir ekip tüm işleri panelden yürütür; adım süresi ve boş bırakılan alanlar ölçülür. Çıktı: sadeleştirilmiş sürüm." },
          { title: "6. Yaygınlaştırma + rapor katmanı", text: "Tüm ekipler açılır, yönetici panoları ve aylık rapor şablonları kurulur. Çıktı: canlı sistem + ölçüm." },
        ],
      },
      benefits: {
        id: "faydalar",
        h2: "Ölçülebilir Kazanımlar",
        metrics: [
          { value: "-%25", label: "iş başında bekleme/el değiştirme süresi (otomatik atama ile)" },
          { value: "%100", label: "kayda giren talep; “ağzı ile gelen iş” kaybı azalır" },
          { value: "gerçek", label: "adım süreleri ölçüldüğü için termin sözü tahmin değil veri" },
          { value: "tek ekran", label: "yönetici için tıkanan iş listesi" },
        ],
        bullets: [
          { title: "Termin güvenilirliği", text: "Adım süreleri bilindiği için müşteriye verilen tarih gerçekçi olur; “bir gün geç” alışkanlığı biter.", icon: "CalendarCheck" },
          { title: "Hakça iş yükü", text: "Dağılım ölçüldüğü için yoğun kişiyi görmek mümkün; motivasyon ve devir kalitesi artar.", icon: "Users" },
          { title: "Süreç iyileştirme zemini", text: "Hangi adımda ne kadar kayıp var, raporda görünür; dijital dönüşüm kararları buradan başlar.", icon: "TrendingUp" },
          { title: "Müşteriye şeffaflık", text: "İş durumu müşteri panelinden izlenebildiğinde durum sorgusu aramaları azalır.", icon: "Eye" },
        ],
      },
      audience: {
        id: "kimler-icin",
        h2: "Kimler İçin Uygun?",
        bullets: [
          { title: "Saha ekibi olan firmalar", text: "Teknik servis, montaj, bakım, kurulum; işin konumu ve kanıt fotoğrafı önemli.", icon: "MapPin" },
          { title: "Proje ofisleri", text: "Mimarlık, mühendislik, yazılım, ajans; aşama ve onay zinciri karmaşık işler.", icon: "Layers" },
          { title: "Üretim ve atölyeler", text: "İş emri, duruş kaydı ve operatör takibi ihtiyacı olan imalatçılar.", icon: "Factory" },
          { title: "İç servisler", text: "İT, İK, idari işler gibi “talep gelen” departmanlar; kendi kuyruklarını yönetmek ister.", icon: "Inbox" },
        ],
      },
      whyUs: {
        id: "neden-biz",
        h2: "Neden Tardigrad Software?",
        bullets: [
          { title: "Şablona uydurmuyoruz", text: "Durum akışı sizin iş sıranızdan türer; “araca göre süreç” dayatması, panelin terk edilme sebebi bir numaradır.", icon: "Workflow" },
          { title: "Sahayı düşünerek kuruyoruz", text: "Tek elle kullanım, büyük dokunma alanları, çevrimdışı taslak ve fotoğraf sıkıştırma; saha ekibi için kritik.", icon: "Smartphone" },
          { title: "Ölçmeden bırakmıyoruz", text: "Adım süreleri ve terk edilen alanlar raporlanır; sistem canlı kaldıkça sadeleşir.", icon: "LineChart" },
          { title: "Diğer modüllerle tek veri", text: "Talep, sipariş, stok ve fatura aynı iş kaydına bağlanır; kopuk araçlar arasında veri taşınmaz.", icon: "Plug" },
        ],
      },
      faq: {
        id: "sss",
        h2: "İş Takip Sistemi Hakkında Sıkça Sorulanlar",
        faq: [
          {
            q: "Trello/Asana gibi araçlar varken neden özel sistem?",
            a: "Kart tabanlı araçlar küçük ekiplerde ve proje işlerinde çok etkilidir; hâlâ onları önerdiğimiz durumlar da oluyor. Özel sistemin gerekçesi şu üçünün bir arada olmasıdır: işin bir durum makinesi ve onay kuralı olması, sahadan fotoğraf/imza/konum gibi kanıt gelmesi ve kaydın sipariş/müşteri/maliyet verisiyle ilişkilenmesi. Bunlar yoksa hazır aracı entegrasyonla kullanmak daha ekonomiktir.",
          },
          {
            q: "SLA kurmak zorunda mıyız?",
            a: "Şart değil ama en hızlı geri dönüş veren kararlardan biri. SLA, “bu tür işler için hedef süre şudur” demektir; sistem gecikmeyi ölçer, yönetici müdahale eder, müşteriye ne zaman döneceğinizi bilirsiniz. Hedefleri bugünkü gerçek sürenizin %10-15 iyisi olarak koyuyoruz; ilk çeyrekte tekrar gözden geçirilir.",
          },
          {
            q: "Personel “boşuna mı uğraşıyoruz” derse ne olacak?",
            a: "Bu endişe genelde iki sebepten doğar: çok alanlı form ve çift kayıt. Biz alan sayısını minimumda tutuyoruz, zorunlu olanları birlikte buduyoruz ve mevcut Excel/tablo varsa içe aktarma ile tek girişe indiriyoruz. Pilot ekipte “kayıt açma süresi”ni ölçüyoruz; 20 saniyenin üzerindeyse tasarımı değiştiriyoruz, ekibi değil.",
          },
          {
            q: "Müşteri kendi işini kendisi açabilir mi?",
            a: "Evet, en verimli kurulumlardan biri. Web formu veya WhatsApp üzerinden açılan talep doğrudan kuyruğa düşer, iş numarası ve tahmini dönüş süresi müşteriye iletilir. Böylece hem “nerede bu iş” sorgusu azalır hem de talep bilgisi eksiksiz gelir (adres, fotoğraf, seri no).",
          },
          {
            q: "Çevrimdışı çalışır mı? İnternet olmayan sahada iş durur mu?",
            a: "Sahada internet kesintisi gerçek bir senaryodur; çevrimdışı taslak ve senkron desteği kuruyoruz. Ekran, kaydı cihazda bekletir ve bağlantı geldiğinde gönderir; çakışma olursa zaman damgasına göre kural çalışır. Fotoğraf ağırlığı için otomatik sıkıştırma ve kalite ayarı da kapsamda yer alır.",
          },
        ],
      },
      internal: {
        id: "ilgili-hizmetler",
        h2: "İş Takibini Bağladığımız Sistemler",
        paragraphs: [
          "İş takip; yönetim paneli, raporlama ve dijital otomasyonla birlikte çalıştığında kalıcı olur. Aşağıdaki sayfalar bu katmanları; şehir sayfaları ise bölgesel saha ekiplerine göre kurulum notlarını anlatıyor.",
        ],
      },
    },
    ctaTitle: "Bir işinizi uçtan uca modelleyelim",
    ctaText:
      "Talebin gelişinden kapanışa kadar geçen adımları ve bugünkü süreleri konuşalım; durum makinesi, ekran akışı ve pilot planı tek sayfada netleşsin.",
  },

  "raporlama-sistemi": {
    h1: "Raporlama Sistemi: Kararı Tablo Başlığında Değil, Veride Bulan Ekip",
    definition: [
      "Raporlama sistemi, işletmenin ürettiği veriyi (satış, sipariş, stok, iş, müşteri, tahsilat) yöneticinin karar verebileceği biçimde özetleyen katmandır: doğru metrikler, karşılaştırma dönemleri, filtrelenebilir boyutlar ve gerektiğinde uyarı üreten eşikler. İyi bir raporlama tek bir “sayı” göstermez; sayının neden hareket ettiğini sorgulamanıza izin verir.",
      "Çoğu şirkette rapor, ay sonunda bir analistin Excel'de birleştirdiği dosyalardır. Bu yaklaşım üç sorun taşır: rapor geciktiği için karar da gecikir, kullanılan tanımlar kişiden kişiye değişir (“aktif müşteri” kim?) ve veri hataları rapor çıktıktan sonra fark edilir. Sistemli raporlamada üçü de kapanır: tek tanım, otomatik üretim ve anlık erişim.",
      "Tardigrad Software olarak iki çözüm kuruyoruz: ya mevcut ön muhasebe/CRM/ERP verinizi bir veri katmanında toplayıp web tabanlı raporlama panoları geliştiriyoruz ya da kurduğumuz sistemlerin içine raporlama modülü ekliyoruz. Metrik tanımlarını önce sizinle yazılı standarda bağlıyor, sonra ekrana döküyoruz.",
    ],
    sections: {
      whyNeeded: {
        id: "neden-gerekli",
        h2: "Excel Raporu Neden Geç Kalır?",
        bullets: [
          { title: "Rapor bayat gelir", text: "Ay sonu hazırlanan rapor, karar penceresini kapatır; müdahale iki ay sonraya kalır.", icon: "Clock" },
          { title: "Tanım birliği yok", text: "İki departman “ciro”yu farklı hesaplar; toplantıda veri değil tanım tartışılır.", icon: "Scale" },
          { title: "Kök neden görünmez", text: "Düşüş var ama hangi ürün/müşteri/bölge kaynaklı; cevaba ulaşmak için üç saat ek uğraş gerekir.", icon: "Search" },
          { title: "Kopya tablo çoğalır", text: "Her ay “temiz” Excel, iki ay sonra sürüm karmaşasıdır; kimin doğru dosyayı tuttuğu belirsiz.", icon: "FileWarning" },
        ],
        paragraphs: [
          "Raporlama sistemi, bu dört sorunu tek bir ilkeyle çözer: veri ve tanım bir kez kurulur, herkes aynı kaynaktan bakar.",
        ],
        miniCta: "Yönetim toplantısında baktığınız 5-8 sayıyı paylaşın; hangilerinin otomatik ve anlık üretilebileceğini gösterelim.",
      },
      scope: {
        id: "paket-kapsami",
        h2: "Raporlama Sisteminin Kapsamı",
        checklist: [
          "Metrik sözlüğü: ciro, brüt marj, aktif müşteri, açık iş, ortalama sepet, tahsilat günü, kazanma oranı — tanım ve formülüyle",
          "Veri toplama katmanı: kaynak sistemlerden (muhasebe, CRM, stok, iş takip) planlı aktarım ve veri kalitesi kontrolleri",
          "Yönetici panosu: dönem karşılaştırması, hedef/gerçekleşen, öne çıkan sapmalar ve açıklama notu",
          "Bölümlere özel ekranlar: satış (müşteri/ürün/bölge), operasyon (kapasite/gecikme), finans (nakit/alacak)",
          "Drill-down: sayıdan kayda inme — grafikteki noktaya tıklayınca ilgili sipariş/iş/müşteri listesi",
          "Dinamik filtreler: dönem, bölge, ekip, ürün grubu, müşteri segmenti; kayıtlı görünüm ve paylaşım",
          "Plan/tahmin katmanı: bütçe girişi, gerçekleşen sapması ve basit trend tahmini",
          "Zamanlı raporlar: sabah özeti, haftalık kapanış, aylık yönetim raporu (PDF/e-posta)",
          "Uyarı/eşik: kritik stok, geciken tahsilat, SLA ihlali, hedefin altındaki ekip gibi koşullarda bildirim",
          "Erişim güvenliği: rol bazlı görünüm, hassas metrikte maskeleme, dışa aktarma izni ve log",
          "Mobil görünüm ve ekran modu: toplantı odası/televizyon için otomatik dönen pano",
        ],
      },
      process: {
        id: "surec",
        h2: "Kurulum Süreci: 6 Adım",
        steps: [
          { title: "1. Karar toplantısı (1-2 gün)", text: "Hangi kararların veriye ihtiyaç duyduğu yazılır; gereksiz metrik baştan elenir. Çıktı: karar ↔ metrik eşlemesi." },
          { title: "2. Metrik sözlüğü (2-4 gün)", text: "Her metriğin tanımı, formülü, kaynak alanı ve sorumlu kişisi netleşir. Çıktı: sözlük — raporlama projesinin en kıymetli çıktısı." },
          { title: "3. Kaynak ve veri haritası (2-4 gün)", text: "Verinin hangi sistemde, hangi tabloda, hangi eksiklerle durduğu görülür. Çıktı: aktarım planı + kalite kuralları." },
          { title: "4. Geliştirme (6-14 gün)", text: "Aktarım katmanı, modeller, panolar ve rapor üretimi kodlanır; test verisiyle doğrulanır. Çıktı: ön izleme panosu." },
          { title: "5. Doğrulama turu (1 hafta)", text: "Muhasebe/ay sonu rakamlarıyla pano değerleri karşılaştırılır; farklar tek tek açıklanır. Çıktı: güven testi raporu." },
          { title: "6. Yayın + ritüel tasarımı", text: "Raporlar zamanlı gönderime alınır; haftalık toplantı gündemi panoya göre güncellenir. Çıktı: canlı sistem + kullanım kılavuzu." },
        ],
      },
      benefits: {
        id: "faydalar",
        h2: "Sistemli Raporlamanın Getirisi",
        metrics: [
          { value: "günlük", label: "veri tazeliği; aylık bekleme biter" },
          { value: "-%80", label: "elle rapor derleme süresi" },
          { value: "tek tanım", label: "“hangi sayı doğru” tartışması kapanır" },
          { value: "uyarı", label: "sapma, rapor beklenmeden görünür" },
        ],
        bullets: [
          { title: "Hızlı müdahale", text: "Düşen bir ürün grubu veya geciken tahsilat, rapor günü beklenmeden görülür.", icon: "Zap" },
          { title: "Doğru hedef koyma", text: "Geçmiş adım süreleri ve dönüşüm oranları bilindiği için hedefler temenni değil hesap olur.", icon: "Target" },
          { title: "Şeffaf ekip yönetimi", text: "Kişi/ekip bazlı görünürlük, tartışmayı performanstan veriye taşır.", icon: "Users" },
          { title: "Nakit kontrolü", text: "Alacak yaşlandırma ve tahsilat tahmini tek yerde toplanır; nakit planı gerçekçi kurulur.", icon: "Wallet" },
        ],
      },
      audience: {
        id: "kimler-icin",
        h2: "Kimler İçin Uygun?",
        bullets: [
          { title: "Birden çok sistem kullananlar", text: "Muhasebe, CRM, stok ve saha uygulamaları ayrı; ortada tek pano yok.", icon: "Layers" },
          { title: "Çok şubeli/bölgeli firmalar", text: "Karşılaştırma ve standart metrik ihtiyacı; bölge müdürü kendi ekranını görmek ister.", icon: "MapPin" },
          { title: "Büyüme evresindeki KOBİ'ler", text: "Yatırımcı, banka veya grup raporlaması için tutarlı veri seti gerekiyordur.", icon: "TrendingUp" },
          { title: "Operasyon yoğun ekipler", text: "Kapasite, gecikme ve SLA ölçümü; günlük toplantılar veriyle yürür.", icon: "Gauge" },
        ],
      },
      whyUs: {
        id: "neden-biz",
        h2: "Neden Tardigrad Software?",
        bullets: [
          { title: "Önce tanım, sonra grafik", text: "BI araçlarını süslemek kolay; zor olan metrik tanımını yazılı standarda bağlamaktır. Projeye sözlükle başlıyoruz.", icon: "FileText" },
          { title: "Veri kalitesi ayrı iş kalemi", text: "Kaynak verideki boşluk ve tutarsızlıkları raporluyoruz; “yanlış görünen rakam”ın sebebi böylece görünür.", icon: "Filter" },
          { title: "Sizin kullandığınız araçla çalışır", text: "Power BI/Metabase/Looker tercih ediyorsanız modeli kurup görselleştirmeyi oraya bırakırız; araç dayatması yok.", icon: "Wrench" },
          { title: "Kurduğumuz sistemle entegre", text: "CRM, iş takip, sipariş ve stok modüllerini biz kurduysak, raporlama için ek veri katmanı gerekmez.", icon: "Plug" },
        ],
      },
      faq: {
        id: "sss",
        h2: "Raporlama Sistemi Hakkında Sıkça Sorulanlar",
        faq: [
          {
            q: "Power BI veya Metabase varken neden özel raporlama?",
            a: "Bu araçlar güçlüdür ve çoğu projede doğru tercih bunlardır. Ancak bir şartla: aşağıda temiz, tutarlı bir veri katmanı ve tanımlı metrikler varsa. Eksik olan bu ise araç yalnızca hızlı bir dashboard üretir, karar verici rakama güvenmez. Biz genelde iki katmanda çalışıyoruz: veri hazırlığı + metrik modeli (biz) ve görselleştirme (tercihen sizin BI aracınız). Özel pano ise yalnızca işlem yapılan sistemle iç içe rapor gerektiğinde (rapordan işe dönme, satıra inme) mantıklı hâle gelir.",
          },
          {
            q: "Ön muhasebe programının kendi raporları yetmiyor mu?",
            a: "Mali raporlarda (cari, kasa, yaşlandırma) genelde yeterlidir; bizim önerimiz o raporları yeniden yazmak değil. Yetmediği yer, işletmenin kendi boyutları: ürün grubu bazlı marj, müşteri segmenti performansı, iş/termin süreleri, saha ekibi verimliliği. Raporlama sistemi bu iç metriği üretir; finansal rakamlarda ise muhasebeyle mutabakat testi yaparak aynı sayıyı gösterdiğini doğrularız.",
          },
          {
            q: "Verilerim gerçek zamanlı olacak mı?",
            a: "İki model kuruyoruz: operasyonel metrikler için yakın anlık (dakika bazlı, olay tetikli) ve mali/özet metrikler için planlı (günlük/gece) aktarım. Tam gerçek zamanlıya geçmek pahalı ve genelde gereksizdir; karar ritminize göre hangi metriğin ne kadar taze olması gerektiğini birlikte belirliyoruz.",
          },
          {
            q: "Mevcut verilerim dağınık/kirli, yine de çalışır mı?",
            a: "Çalışır, ama başlangıçta bir kalite katmanı gerekir: standart alan adları, boş zorunlu alan politikası, yinelenen müşteri/ürün birleştirme kuralları ve mutabakat testleri. Bu kısmı gizlemiyoruz; projenin toplam süresinin yaklaşık %20-30'u buraya gider. Alternatifi, temiz görünmeyen ama güvenilmeyen bir panodur — ki en pahalı seçenektir.",
          },
          {
            q: "Yönetici dışında kim kullanacak? Ekip rapora bakar mı?",
            a: "Raporlamanın kalıcı olması için ekibin günlük işine dokunması gerekir. Bu yüzden kişi bazlı “sizin işleriniz/gecikmeleriniz” ekranı ve haftalık otomatik özet ekliyoruz. Toplantı gündemini de panoya göre kuruyoruz: aynı ekrana bakarak konuşulan bir ritüel oluştuğunda, raporlama aracı değil alışkanlık olur.",
          },
        ],
      },
      internal: {
        id: "ilgili-hizmetler",
        h2: "Raporu Doğuran Veri Katmanları",
        paragraphs: [
          "Raporlama; iş takip, sipariş, stok ve CRM verisinin üzerine kurulur. Aşağıdaki sayfalar bu kaynakları, şehir sayfaları ise bölge bazlı karşılaştırma kurgusunu anlatıyor.",
        ],
      },
    },
    ctaTitle: "Beş metrikle başlayalım",
    ctaText:
      "Yönetim toplantısında baktığınız sayıları ve bugün nereye not ettiğinizi paylaşın; metrik sözlüğü taslağı ve kaynak veri analiziyle dönelim.",
  },

  "form-basvuru-sistemi": {
    h1: "Form ve Başvuru Sistemi: Talebi Doğru Veriyle Toplayan Akış",
    definition: [
      "Form ve başvuru sistemi, web sitesi, QR kod veya e-posta üzerinden gelen taleplerin standart alanlarla toplanması, doğrulanması, kaydedilmesi ve ilgili kişiye atanması için kurulan yazılımdır. Basit bir iletişim formundan farkı, arka planda bir iş akışı taşımasıdır: eksik alan varsa form ilerlemez, mükerrer kayıt birleştirilir, başvuruya numara verilir, inceleme ve yanıt adımları kayıt altında yürür.",
      "Formun kendisi kolay; zor olan gelen veriyi işleyebilmektir. Telefon numarası formatı bozuktur, dosya yüklenmemiştir, “diğer” seçeneğine yazılan açıklama okunamaz, aynı kişi beş kez başvurmuştur ve hiçbirinin durumu bilinmiyordur. Sistem kurmak, bu dağınıklığı alan kuralları, belge kontrolü ve durum takibiyle kapatmaktır.",
      "Tardigrad Software olarak başvuru formlarını Next.js ile erişilebilir ve hızlı kurar; veriyi Google Sheets/Excel'e değil, durum alanıyla birlikte veritabanına yazarız. Gerekirse e-imza, belge yükleme, KVKK onayı, SMS/e-posta bilgilendirmesi ve değerlendirme puanlaması ekleriz.",
    ],
    sections: {
      whyNeeded: {
        id: "neden-gerekli",
        h2: "E-posta ile Gelen Talep Neden Kaybolur?",
        bullets: [
          { title: "Alan eksik, iş geri döner", text: "“Vesika fotoğrafı yok” için üçüncü e-posta; başvuru sahibinin bir kısmı bu turda vazgeçer.", icon: "FileWarning" },
          { title: "Durum bilinmiyor", text: "Başvuran “ne oldu?” diye arar; personel dosyayı bulmak için e-posta arşivine dalar.", icon: "Search" },
          { title: "Mükerrer kayıt", text: "Aynı kişi üç kez göndermiştir; üçü de ayrı değerlendirilir, kaynak boşa harcanır.", icon: "Copy" },
          { title: "Sayı verisi yok", text: "Kaç başvuru geldi, hangileri eksikti, kaç gün sürdü? Ölçülmediği için süreç iyileştirilemez.", icon: "BarChart3" },
        ],
        paragraphs: [
          "Kurumlar için ikinci bir risk daha var: kişisel verinin e-posta kutularında ve kişisel klasörlerde birikmesi. Form sistemi, veriyi tek yerde ve erişim kontrollü tutarak bu riski de daraltır.",
        ],
        miniCta: "Mevcut formunuzu ve başvuru metninizi paylaşın; alan, belge ve durum setini birlikte budayalım.",
      },
      scope: {
        id: "paket-kapsami",
        h2: "Form ve Başvuru Sisteminin Kapsamı",
        checklist: [
          "Alan kurgusu ve mantıksal dallanma: cevaba göre soru değişmesi, uzun formların adımlara bölünmesi",
          "Doğrulama kuralları: T.C. kimlik/vergi no kontrolü, telefon/e-posta biçimi, dosya tipi ve boyut sınırı",
          "Belge yükleme: çoklu dosya, sürüm takibi, ön izleme ve eksik belge uyarısı",
          "Durum akışı: alındı → inceleniyor → eksik bilgi → değerlendirme → sonuçlandı; her geçişte bildirim",
          "Başvuru numarası ve sorgulama ekranı: “ad + numara” ile durum öğrenme, giriş gerektirmeden",
          "Mükerrer/tekilleştirme: kimlik veya e-posta üzerinden otomatik tespit ve uyarı",
          "Değerlendirme ekranı: puanlama kriterleri, değerlendirici ataması, iç notlar, sonuç gerekçesi",
          "Bildirimler: başvuru sahibine e-posta/SMS, değerlendiriciye atama ve gecikme uyarısı",
          "KVKK ve aydınlatma: açık rıza kutuları, veri saklama süresi, silme/talep akışı, çerez/analitik uyumu",
          "Erişilebilirlik ve mobil: klavye ile gezinme, hata mesajlarının okunurluğu, tek elle doldurma",
          "Raporlama: başvuru adedi, tamamlanma oranı, eksik belge dağılımı, adım süreleri, kaynak (UTM) kırılımı",
          "Gerekirse e-imza ve evrak üretimi: sonuç belgesinin otomatik oluşturulması ve imzaya gönderilmesi",
        ],
      },
      process: {
        id: "surec",
        h2: "Kurulum Süreci: 6 Adım",
        steps: [
          { title: "1. Başvuru süreci görüşmesi (1-2 gün)", text: "Kim, hangi bilgiyle başvurur; kim inceler, hangi kriterle sonuçlanır? Bugünkü akış ve tıkanmalar yazılır. Çıktı: süreç dokümanı." },
          { title: "2. Alan ve belge listesi (1-3 gün)", text: "Zorunlu/opsiyonel alanlar budanır; her alanın “neden gerekiyor” cevabı verilir. Çıktı: form planı." },
          { title: "3. Durum ve bildirim tasarımı (1-2 gün)", text: "Durum seti, geçiş kuralları ve başvuru sahibine ne söyleneceği netleşir. Çıktı: durum makinesi." },
          { title: "4. Geliştirme (4-10 gün)", text: "Form adımları, doğrulama, yükleme, panel, bildirim ve raporlama kodlanır. Çıktı: test ortamı." },
          { title: "5. Erişilebilirlik/hız/test turu (1-2 gün)", text: "Mobil, klavye, ekran okuyucu, yavaş bağlantı ve spam denemeleriyle test; alan başına terk oranı ölçülür. Çıktı: düzeltmeler." },
          { title: "6. Yayın + izleme", text: "Yayın sonrası ilk 30 gün terk noktası ve eksik belge dağılımı izlenir; alan sırası/etiketleri iyileştirilir. Çıktı: canlı sistem + ilk ay raporu." },
        ],
      },
      benefits: {
        id: "faydalar",
        h2: "Kazanımlar: Daha Az Tur, Daha Temiz Veri",
        metrics: [
          { value: "-%40-70", label: "eksik bilgi için geri dönüş sayısı (alan kurallarıyla)" },
          { value: "+%15-30", label: "form tamamlama oranı (adım bölme + mobil iyileştirme)" },
          { value: "anında", label: "ilgili kişiye atama; “e-posta okunmadı” gecikmesi biter" },
          { value: "ölçülü", label: "adım süreleri ve tamamlanma oranı raporlanır" },
        ],
        bullets: [
          { title: "Başvuru sahibi memnuniyeti", text: "Durumunu gören kişi aramaz; “sonuç ne oldu” stresi azalır.", icon: "Smile" },
          { title: "Personel yükü azalır", text: "Dosya arama ve veri tekrarı biter; inceleme tarafı sadece karara odaklanır.", icon: "CheckCheck" },
          { title: "Denetim ve şeffaflık", text: "Kimin, ne zaman, hangi gerekçeyle sonuçlandırdığı kayıt altındadır; itiraz ve inceleme taleplerinde savunulabilir.", icon: "ShieldCheck" },
          { title: "Kampanyaya bağlanır", text: "Kaynak/UTM verisiyle hangi kanaldan başvuru geldiği görülür; bütçe kararı netleşir.", icon: "LineChart" },
        ],
      },
      audience: {
        id: "kimler-icin",
        h2: "Kimler İçin Uygun?",
        bullets: [
          { title: "Belediye, üniversite, dernek, vakıf", text: "Burs, yardım, kayıt, etkinlik ve başvuru dönemleri olan kurumlar.", icon: "Landmark" },
          { title: "Eğitim ve sağlık kuruluşları", text: "Ön kayıt, randevu ve evrak toplama süreçleri yoğun yapılar.", icon: "Stethoscope" },
          { title: "KOBİ'ler ve bayi kanalları", text: "Bayi başvurusu, servis kaydı, iade/değişim talebi ve teklif formları.", icon: "Building2" },
          { title: "Kampanya yürüten pazarlama ekipleri", text: "Lider (lead) toplama; form verisinin doğrudan CRM'e akması gerekir.", icon: "Megaphone" },
        ],
      },
      whyUs: {
        id: "neden-biz",
        h2: "Neden Tardigrad Software?",
        bullets: [
          { title: "Formu “uzun” yapmayız", text: "Her alan için “bu veri nerede kullanılacak” sorusunu sorar, cevabı yoksa alanı çıkarırız. Uzun form, veri kirliliğidir.", icon: "Filter" },
          { title: "Erişilebilirlik standart", text: "Klavye ile gezinme, hata mesajlarının bağlantılı olması, kontrast ve ekran okuyucu etiketleri; kamu ve kurumsal için zorunlu titizlik.", icon: "Accessibility" },
          { title: "Spam ve kötüye kullanım", text: "Bot/hız limitleri, geçici e-posta engeli, honeypot ve doğrulama; inceleme tarafının boş kayıt görmemesi için.", icon: "Shield" },
          { title: "Sonrası da bizim işimiz", text: "Veri panelde birikip kaybolmasın diye atama, durum ve rapor katmanını baştan kuruyoruz.", icon: "Layers" },
        ],
      },
      faq: {
        id: "sss",
        h2: "Form ve Başvuru Sistemi Hakkında Sıkça Sorulanlar",
        faq: [
          {
            q: "Google Forms ile farkı ne?",
            a: "Google Forms, hızlı toplama aracıdır; cevaplar bir tabloya akar. Eksik olan şey süreçtir: adım bazlı ilerleme, belge doğrulama, başvuru numarası, durum sorgulama, değerlendirme ekranı, atama ve süre ölçümü. Ayrıca hassas kişisel verinin tek bir tablo dosyasında toplanması hem erişim kontrolü hem KVKK bakımından zayıftır. Form sistemimiz, veriyi panel içinde rol bazlı tutar.",
          },
          {
            q: "Form verisi doğrudan CRM'imize aksın, mümkün mü?",
            a: "Evet; en sık kurduğumuz bağlantı bu. Başvuru/lider kaydı ilgili sisteme (CRM, ön muhasebe, iş takip) alan eşlemesiyle düşer, orada durum güncellemesi geri yazılır. Gerçek zamanlı webhook veya periyodik senkron seçenekleri var; hangisinin uygun olduğunu veri hacmi ve CRM'inizin API kapasitesine göre belirliyoruz.",
          },
          {
            q: "Başvuru sahibi durumunu nasıl öğrenir?",
            a: "İki model kuruyoruz: (1) e-posta/SMS ile olay bazlı bilgilendirme (alındı, eksik belge, sonuçlandı); (2) başvuru numarası + ad/telefon ile sorgulama ekranı. Giriş/şifre isteyen tam panel modeli ise üçüncü seçenek; kurumun müşteri paneli varsa ona bağlanır. Modeli, başvuru hacmi ve personel yüküne göre seçiyoruz.",
          },
          {
            q: "KVKK açısından nelere dikkat ediyoruz?",
            a: "Dört kuralı standart uyguluyoruz: yalnızca gereken veriyi istemek (veri minimizasyonu), aydınlatma metnini forma bağlamak, açık rıza gereken alanları ayrı tutmak ve saklama süresi sonunda silme/anonimleştirme akışı kurmak. Ayrıca belge yükleme varsa dosyaların erişim yetkisi ve indirme kaydı tutulur; kurum içi paylaşımlarda maskeleme uygulanabilir. Bu kurallar, sistem kurulurken teknik olarak da uygulanır — yalnızca metinle bırakılmaz.",
          },
          {
            q: "Yüksek trafikli başvuru döneminde çöker mi?",
            a: "Dönemsel yoğunluk (burs kaydı, sınav ön kayıt, kampanya) için üç önlem alıyoruz: sayfaların statik/hızlı sunumu, kademeli kayıt (kısmi kayıt ve devam etme) ve yavaşlatma kuyruğu (yoğun saatte başvuru alınır, işleme gecikmeli girer). Ayrıca alan adı/CDN tarafında bot koruması ve limit ayarıyla sahte başvuru yükü kesilir.",
          },
          {
            q: "E-imza veya kimlik doğrulama gerekir mi?",
            a: "Başvurunun hukuki niteliğine göre değişir. Çoğu ön kayıt/bilgi formunda kimlik alanları ve açık rıza yeterlidir; taahhüt veya sözleşme içeren başvurularda e-imza sağlayıcısı (mobil imza/elektronik imza servisleri) veya kimlik doğrulama akışı eklenir. Gerekiyorsa bu katmanı entegrasyon olarak kuruyor, kendimiz imza altyapısı üretmiyoruz.",
          },
        ],
      },
      internal: {
        id: "ilgili-hizmetler",
        h2: "Formdan Sonra Başlayan Süreçler",
        paragraphs: [
          "Toplanan veri; iş takibi, otomasyon, raporlama ve kampanya sayfalarıyla birleştiğinde kuruma değer üretir. Aşağıdaki sayfalar bu adımları, şehir sayfaları ise yerel başvuru yapılarını anlatıyor.",
        ],
      },
    },
    ctaTitle: "Formunuzu birlikte budayalım",
    ctaText:
      "Hangi alanın neden gerektiğini, hangi belgenin zorunlu olacağını ve durum akışını konuşalım; form planı, panel kapsamı ve takvim tek sayfada netleşsin.",
  },
}
