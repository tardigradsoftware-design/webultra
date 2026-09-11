import type { ServiceContent } from "@/types/content"

/**
 * FAZ 2 — grup 3a: iç yönetim yazılımları (personel/kullanıcı, yönetim paneli, müşteri paneli).
 */
export const yazilimContents3: Record<string, ServiceContent> = {
  "personel-kullanici-yonetimi": {
    h1: "Personel ve Kullanıcı Yönetimi: Kim, Nereye Erişebilir, Ne Yaptı?",
    definition: [
      "Personel ve kullanıcı yönetimi; bir yazılımda kimin hangi ekranı gördüğü, hangi işlemi yaptığı ve bu işlemin arkasında nasıl bir iz bıraktığının tanımlandığı katmandır. İki ayrı ama iç içe işi tek yerde çözer: İK tarafında özlük, izin, görev ve vardiya bilgisi; teknik tarafta ise hesap, rol, yetki ve oturum yönetimi.",
      "Büyüyen her işletmede üç sorun aynı anda belirir: ayrılan çalışanın hesapları kapanmaz, yeni gelen “her şeye yetkili” başlar ve bir hatanın kim tarafından yapıldığı sorulduğunda kimse kesin cevap veremez. Bu üç sorun, tek bir yetki modeli ve işlem günlüğü ile kapanır; hiçbir ek modül gerektirmez.",
      "Tardigrad Software olarak bu katmanı ya kurduğumuz yönetim panelinin çekirdeğine yerleştiriyor ya da mevcut yapınıza ayrı bir kimlik/yetki servisi olarak ekliyoruz. Tek oturum (SSO), rol bazlı erişim ve log mimarisi kurulumun merkezinde yer alır.",
    ],
    sections: {
      whyNeeded: {
        id: "neden-gerekli",
        h2: "Yetki Dağınık Olduğunda Ne Olur?",
        bullets: [
          { title: "Ayrılan çalışanın hesabı açık kalır", text: "Panel, e-posta, bulut depoları; erişim kapanmadığı için hem veri riski hem denetim bulgusu doğar.", icon: "UserX" },
          { title: "Herkes her şeyi görür", text: "Maaş, maliyet ve müşteri verisi gibi alanlar yetkisiz ekrana düşer; “kim gördü” sorusu cevapsız kalır.", icon: "Eye" },
          { title: "İzin/vardiya hesabı Excel'de", text: "Devam, yıllık izin ve fazla mesai bilgisi elle tutulduğunda ay sonu tartışması bitmez.", icon: "CalendarClock" },
          { title: "Onay zinciri belirsiz", text: "Fiyat değişti, belge silindi; kimin onayladığı yazılı değilse sorumluluk tanımsız kalır.", icon: "FileWarning" },
        ],
        paragraphs: [
          "Bu tablo, yazılımdan çok organizasyon disipliniyle ilgilidir. Doğru kurulum, “kim ne yapabilir” sorusunu kişilerin hafızasından alıp sistemin kuralına taşır.",
        ],
        miniCta: "Mevcut rol/yetki haritanızı 30 dakikada çıkaralım; hangi ekranlarda kimin neye eriştiğini tablo hâlinde görelim.",
      },
      scope: {
        id: "paket-kapsami",
        h2: "Modülün Kapsamı",
        checklist: [
          "Kimlik yönetimi: kullanıcı, departman, unvan, yönetim zinciri, işe giriş/çıkış tarihi ve durum (aktif/izinde/ayrıldı)",
          "Rol ve yetki modeli: işlev bazlı (ekran/işlem) ve veri bazlı (kendi ekibi / departmanı / tümü) iki eksen",
          "Tek oturum (SSO) ve iki adımlı doğrulama; parola politikası ve geçici erişim süreleri",
          "İzin ve devamsızlık: yıllık/mazeret/hastalık tipleri, onay akışı, bakiye hesabı, takvim görünümü",
          "Vardiya ve çalışma planı: şube/mağaza tipinde vardiya ataması ve çakışma kontrolü",
          "Özlük ve evrak: sözleşme, imza sirküleri, sertifika ve eğitim kayıtları; süre dolmadan uyarı",
          "Görev ve yetkilendirme devri: izinli kişininkilerin otomatik devri ve devir kaydı",
          "İşlem günlüğü (audit log): kim, neyi, ne zaman, hangi değerden hangi değere değiştirdi",
          "Otomatik hesap kapatma: çıkış tarihi geldiğinde tüm erişimlerin kural ile sonlandırılması",
          "Yönetici ekranları: ekip görünürlüğü, onay kuyruğu, departman bazlı raporlar",
          "Entegrasyonlar: bordro/İK programı, e-posta dizini (Azure AD/Google Workspace), turnike/PPKS verisi",
        ],
      },
      process: {
        id: "surec",
        h2: "Kurulum Süreci: 6 Adım",
        steps: [
          { title: "1. Yetki haritası (2-4 gün)", text: "Her ekran/işlem için “kim yapabilir, kim görebilir” tablosu çıkarılır. Çıktı: rol matrisi." },
          { title: "2. Organizasyon verisi (1-3 gün)", text: "Departman, unvan ve yönetim zinciri netleşir; bordroyu kim besleyecek belirlenir. Çıktı: organizasyon şeması + veri kaynağı kararı." },
          { title: "3. Kimlik modeli (1-2 gün)", text: "SSO, parola/2FA politikası ve hesap yaşam döngüsü (açılış-devir-kapanış) tasarlanır. Çıktı: kimlik akış diyagramı." },
          { title: "4. Geliştirme (7-15 gün)", text: "Panel, rol motoru, izin/vardiya modülleri ve log altyapısı kodlanır; entegrasyonlar bağlanır. Çıktı: test ortamında çalışan sistem." },
          { title: "5. Yetki geçişi ve prova (2-4 gün)", text: "Mevcut hesaplar yeni rollere eşlenir, yetkisiz erişimlerin kapatıldığı bir “geçiş turu” yapılır. Çıktı: eşleme raporu." },
          { title: "6. Yayın + eğitim + ilk ay izleme", text: "Canlıya geçiş, yönetici eğitimi; log ve onay kuyruğu verileri ilk ay paylaşılır. Çıktı: canlı sistem + denetim raporu." },
        ],
      },
      benefits: {
        id: "faydalar",
        h2: "Kazanımlar",
        metrics: [
          { value: "0", label: "ayrıldıktan sonra açık kalan hesap (kural ile otomatik kapatma)" },
          { value: "tek tuş", label: "izin onayı ve devir işlemleri için" },
          { value: "%100", label: "kritik işlemlerde kim/zaman izi (audit log)" },
          { value: "1-2 saat", label: "ay sonu izin/bakiye mutabakatında kişi başı kazanılan süre" },
        ],
        bullets: [
          { title: "Denetim hazır olur", text: "Müşteri denetimi veya ISO/KVKK sorgusu geldiğinde ekran görüntüsü değil, kayıt gösterilir.", icon: "ShieldCheck" },
          { title: "Veri sızıntısı riski düşer", text: "Rol bazlı görünümle hassas alanlar yalnızca ihtiyacı olanın ekranına gelir.", icon: "Lock" },
          { title: "İK işi azalır", text: "İzin, devamsızlık ve evrak takibi tek panelde; e-posta/Excel yazışması yerine onay kuyruğu çalışır.", icon: "ClipboardList" },
          { title: "Yeni şube kolaylaşır", text: "Rol ve plan şablonları çoğaltıldığı için organizasyon büyümesi yeniden yapılandırma gerektirmez.", icon: "Layers" },
        ],
      },
      audience: {
        id: "kimler-icin",
        h2: "Kimler İçin Uygun?",
        bullets: [
          { title: "50+ çalışanlı firmalar", text: "Excel ile izin ve yetki takibinin fiilen imkânsızlaştığı ölçek.", icon: "Users" },
          { title: "Şubeli/magazalı yapılar", text: "Vardiya, bölge yöneticisi ve yetki devri dinamik çalışan yapılar.", icon: "Store" },
          { title: "Çok kiracılı SaaS'lar", text: "Müşteri organizasyonunu kendi yönetmesini isteyen ürün ekipleri; departman ve rol ağacı ürüne taşınır.", icon: "Building2" },
          { title: "Regülasyona tabi sektörler", text: "Sağlık, finans, enerji; erişim kaydı ve onay izi zorunlu alanlar.", icon: "Shield" },
        ],
      },
      whyUs: {
        id: "neden-biz",
        h2: "Neden Tardigrad Software?",
        bullets: [
          { title: "Yetkiyi veriye kadar indiririz", text: "Sadece “ekranı açma izni” değil, “hangi kaydı görür” sorusu da modelde yer alır; iki eksen birlikte çalışır.", icon: "Filter" },
          { title: "İnsan hatasına karşı tasarım", text: "Yetki atama ekranı tek listeden yapılır, “yanlışlıkla herkes” seçeneği yoktur; değişiklikler loglanır.", icon: "MousePointerClick" },
          { title: "Bordroyu icat etmiyoruz", text: "Resmî özlük/maaş hesapları genelde mevcut İK/bordro programında kalır; biz senkron ve görünüm katmanını kurarız.", icon: "Plug" },
          { title: "Kademeli yetki geçişi", text: "Rol matrisini bir gecede uygulamak kaos üretir; önce gölge mod (izleme), sonra kademeli geçiş planlıyoruz.", icon: "Workflow" },
        ],
      },
      faq: {
        id: "sss",
        h2: "Personel ve Kullanıcı Yönetimi Hakkında Sıkça Sorulanlar",
        faq: [
          {
            q: "İK yazılımı almak varken neden böyle bir modül kuralım?",
            a: "Tam kapsamlı İK/bordro yazılımı, resmî süreç (bordro, SGK, izin defteri) için gereklidir ve onu yeniden yazma niyetinde değiliz. Bu modülün konusu, organizasyon ve yetki: yazılımınızda kimin neye erişeceği, devamsızlık ve onay akışının iş süreçlerinize bağlanması. Bordro programıyla entegrasyon kurarak çift giriş de ortadan kalkar.",
          },
          {
            q: "Azure AD / Google Workspace ile tek oturum (SSO) kurulabilir mi?",
            a: "Evet ve önerimiz budur. Şirket zaten bir dizin kullanıyorsa hesapları ayrı tutmak iki kez iş ve iki kez risk demektir. SAML/OpenID Connect ile SSO, grup bazlı rol eşleme ve dizinden otomatik kapatma akışı kuruyoruz; dış kullanıcı (bayi, taşeron) için ise ayrı bir hesap türü ve süreli erişim tanımı tutuyoruz.",
          },
          {
            q: "Audit log verisi ne kadar saklanmalı, nereye yazılmalı?",
            a: "Sektöre ve müşterilerinize karşı üstlendiğiniz taahhütlere göre değişir; tipik aralık 12-24 ay. Logları uygulama veritabanında tutmak kolaydır ama sorgu yükü büyür; kritik işlemleri ayrı bir saklama alanına (nesne deposu veya log servisi) yazıp panelde özet göstermeyi öneriyoruz. Hangi olayların loglanacağını da baştan listeliyoruz: giriş, yetki değişimi, fiyat/veri değişimi, silme, dışa aktarma.",
          },
          {
            q: "İzin ve vardiya modülü fazla mesai hesabını yapar mı?",
            a: "Kayıt ve kural motoru tarafını yapar: planlanan/gerçekleşen saat, devamsızlık tipi, çakışma ve birikimler. Resmî fazla mesai ve bordro hesabı mevzuata bağlı olduğu için çoğu projede rakamları bordro programına aktarıyoruz; hesap orada yapılır. Talep ederseniz iç takip için kaba bir fazladan saat raporu da üretiyoruz; resmî belge yerine geçmez.",
          },
          {
            q: "Eski sistemdeki yetkileri nasıl taşırız?",
            a: "Önce eşleme: mevcut kullanıcı/rol listesi dökülür, yeni rol matrisine atanır ve “hiçbir yetki” varsayılanıyla başlanır. İlk hafta gölge modda (herkes eski yetkisiyle çalışır, sistem farkları loglar) ölçüm yaparız; hangi rolün gerçekten gerekli olduğunu bu veriden sonra netleştiririz. Böylece “yetkimiz kapanmış, iş durdu” senaryosu yaşamazsınız.",
          },
        ],
      },
      internal: {
        id: "ilgili-hizmetler",
        h2: "Yetki Katmanının Üzerinde Çalıştığı Sistemler",
        paragraphs: [
          "Kullanıcı yönetimi tek başına bir ürün değil; panel, CRM ve iş takip sistemlerinin güvenlik temeli. Aşağıdaki sayfalar bu temelin üzerinde kurulan katmanları; şehir sayfaları ise çok lokasyonlu erişim kurgusunu anlatıyor.",
        ],
      },
    },
    ctaTitle: "Rol matrisini birlikte çıkaralım",
    ctaText:
      "Ekranlarınız, rolleriniz ve hassas alanlarınız listelensin; hangi yetkinin gerçekten gerekli olduğunu ve SSO/entegrasyon kapsamını tek sayfada özetleyelim.",
  },

  "yonetim-paneli": {
    h1: "Yönetim Paneli: Operasyonu Tek Ekrandan Yöneten Arayüz",
    definition: [
      "Yönetim paneli, bir işletmenin günlük işlerini dijital olarak yürüttüğü arayüzdür: kayıt girişi, durum güncelleme, onay, dosya yönetimi, rapor görüntüleme ve gerektiğinde kural değiştirme. Müşteriye görünen siteden farkı, şirketin iç motoru olmasıdır; “site vitrindir, panel mutfağıdır” demek yerindedir.",
      "Panel kurulumunun başarısı, ekran sayısıyla değil, işin kaç adımda bittiğiyle ölçülür. Çok alanlı formlar, anlamsız zorunluluklar ve menüde kaybolan modüller, paneli “yukarıdan dayatılan araç” hâline getirir; ekipler bir süre sonra veriyi Excel'de tutmaya, panele ise sadece rapor için bakar. Biz tersini hedefliyoruz: panel tek giriş noktası olsun.",
      "Tardigrad Software olarak panelleri Next.js + TypeScript + Tailwind + shadcn/ui ile kuruyor; rol bazlı erişim, liste/filtre/kütle işlem davranışları, işlem günlüğü ve rapor katmanını standarda bağlıyoruz. İsterseniz panele bağımsız bir ürün olarak, isterseniz CRM, sipariş, stok veya rezervasyon sistemlerinizin ortak arayüzü olarak sahip olursunuz.",
    ],
    sections: {
      whyNeeded: {
        id: "neden-gerekli",
        h2: "Panel Yokken İş Nasıl Yürür?",
        paragraphs: [
          "Panelin olmadığı bir şirkette “sistem” aslında insan hafızası, WhatsApp grupları ve bir-iki ortak Excel dosyasıdır. Hacim arttıkça bu üçlü çatlar ve aşağıdaki dört tablo belirir.",
        ],
        bullets: [
          { title: "Aynı bilgi üç yerde", text: "Müşteri, talep ve durum bilgisi e-postada, tabloda ve mesajda ayrı ayrı tutulur; güncel olan hangisi bilinmez.", icon: "Copy" },
          { title: "Durum soruları", text: "Gün içinde yönetici “bu iş nerede?” diye sorar; cevap almak için ilgili kişiyi bulmak gerekir.", icon: "MessageSquare" },
          { title: "Dosya/evrak karmaşası", text: "Sözleşme, teklif ve teknik dosya kişisel bilgisayarlarda; kişi izinliyken iş durur.", icon: "FolderOpen" },
          { title: "Rapor için akşam mesaisi", text: "Ay sonu tablo birleştirmek için harcanan günler; karar, veri tazelendiği için gecikir.", icon: "Clock" },
        ],
        miniCta: "Hangi işi hangi adımlarla yaptığınızı anlatın; tek ekranlı bir panel akışı ve alan listesi çıkaralım.",
      },
      scope: {
        id: "paket-kapsami",
        h2: "Standart Yönetim Panelinde Neler Olur?",
        checklist: [
          "Varlık yönetimi: kayıt listeleme, arama, filtre, sıralama, kütle işlemi, toplu içe/dışa aktarma",
          "Detay ekranı: durum akışı (ör. yeni → atanıyor → işlemede → tamamlandı), notlar, ekler, geçmiş",
          "Rol bazlı erişim ve onay akışları (yönetici onayı, çift kontrol)",
          "İş kuyruğu: kişinin kendi açık işleri, gecikenler, bugünün özeti",
          "Dashboard: kritik sayılar, hedef/gerçekleşen, trend ve anormallik uyarıları",
          "Dosya/evrak merkezi: sürüm, son güncelleyen, indirme izi",
          "Bildirimler: panel içi, e-posta ve WhatsApp/SMS tarafı; abone olma tercihleri",
          "İşlem günlüğü: kritik alan değişimlerinin kim/zaman/eski-yeni kaydı",
          "Ayarlar ekranı: durum isimleri, otomatik atama kuralları, şablonlar ve entegrasyon anahtarları",
          "Mobil uyumlu arayüz: saha/personel için tek elle kullanılabilen ekranlar",
          "Performans ve güvenlik: sayfa başına sınırlı veri, indeksli sorgular, 2FA ve oturum politikası",
        ],
      },
      process: {
        id: "surec",
        h2: "Panel Kurulum Süreci: 6 Adım",
        steps: [
          { title: "1. İş akışı görüşmesi (1-3 gün)", text: "Bir işin doğumdan kapanışa geçtiği adımlar ve sorumlular yazılır. Çıktı: akış şeması + “ekranda ne olmalı” listesi." },
          { title: "2. Veri modeli ve alan seti (1-3 gün)", text: "Zorunlu alanlar minimumda tutulur; raporlama için gerekenler belirlenir. Çıktı: veri sözlüğü." },
          { title: "3. Akış tasarımı (2-5 gün)", text: "Liste, detay ve form ekranları tasarlanır; “kayıt açma” süresi metrik kabul edilir. Çıktı: tıklayabilir prototip." },
          { title: "4. Geliştirme (6-14 gün)", text: "Panel, yetki katmanı, kuyruk ve dashboard kodlanır; entegrasyonlar (e-posta, dosya, muhasebe, mesaj) bağlanır. Çıktı: test ortamı." },
          { title: "5. Pilot ekip ve ölçüm (1-2 hafta)", text: "5-8 kişi gerçek işleri panelden yürütür; hangi alanın boş kaldığı, hangi adımın yavaşladığı ölçülür. Çıktı: iyileştirilmiş sürüm." },
          { title: "6. Yaygınlaştırma + dokümantasyon", text: "Tüm ekibe açılır; kısa kullanım videosu ve ekran kılavuzu bırakılır. Çıktı: canlı panel + eğitim seti." },
        ],
      },
      benefits: {
        id: "faydalar",
        h2: "Panelin Getirdiği Somut Fark",
        metrics: [
          { value: "-%40-60", label: "iş kaydı açma süresi (standart alan seti + kütle işlemi)" },
          { value: "0", label: "“bu iş nerede?” için telefon trafiği" },
          { value: "ay sonu yok", label: "rapor birikmez, panel canlı gösterir" },
          { value: "3-6 hafta", label: "tek süreç odaklı panel için tipik teslim" },
        ],
        bullets: [
          { title: "Karar hızı", text: "Veri taze olduğu için müdahale gecikmez; tıkanan kuyruk aynı gün görülür.", icon: "Zap" },
          { title: "Kurumsal hafıza", text: "İşin geçmişi kişide değil sistemde kalır; izin ve ayrılık operasyonu durdurmaz.", icon: "Database" },
          { title: "Ölçülebilirlik", text: "Süre, adet ve kişi bazlı yük dağılımı raporda görünür; kadro ve süreç kararı veriye dayanır.", icon: "LineChart" },
          { title: "Denetim kolaylığı", text: "Onay izleri ve geçmiş kayıtları, müşteri/uyum kontrollerinde hazır durur.", icon: "ShieldCheck" },
        ],
      },
      audience: {
        id: "kimler-icin",
        h2: "Kimler İçin Uygun?",
        bullets: [
          { title: "Süreç odaklı servis firmaları", text: "Teknik servis, saha ekibi, bakım/onarım, ajans ve danışmanlık; iş emri ve durum takibi kritik.", icon: "ClipboardList" },
          { title: "Operasyonu yoğun KOBİ'ler", text: "Sipariş, stok ve sevkiyatı e-posta/Excel ile koordine eden ekipler.", icon: "Boxes" },
          { title: "Ürün ekipleri", text: "SaaS sahibi firmalar; müşteri/abone yönetimi ve iç araçlar için ortak arayüz.", icon: "LayoutDashboard" },
          { title: "Çok lokasyonlu yapılar", text: "Şube/magaza/fabrikalar arası standart işleyiş ve karşılaştırma ihtiyacı.", icon: "MapPin" },
        ],
      },
      whyUs: {
        id: "neden-biz",
        h2: "Neden Tardigrad Software?",
        bullets: [
          { title: "Formun uzunluğunu biz kısıtlarız", text: "Paneli öldüren şey, “her ihtimale karşı” eklenen zorunlu alanlardır. Alan listesini sizinle buduyoruz.", icon: "Filter" },
          { title: "Tek panel, çok modül", text: "CRM, sipariş, stok ve raporlama aynı arayüzde oturur; sekmeler arası giriş-çıkış ve çift kayıt biter.", icon: "Layers" },
          { title: "Kullanılabilirlik ölçülür", text: "Pilot turda kayıt açma süresi ve terk edilen alan sayısı raporlanır; “panel kullanılıyor mu” sorusu veriyle cevaplanır.", icon: "Gauge" },
          { title: "Devredilebilir yapı", text: "Kod, dokümantasyon ve şema sizin; dilediğinizde kendi ekibiniz geliştirmeye devam edebilir.", icon: "GitBranch" },
        ],
      },
      faq: {
        id: "sss",
        h2: "Yönetim Paneli Hakkında Sıkça Sorulanlar",
        faq: [
          {
            q: "Hazır bir iş yazılımı (ERP/CRM) varken neden panel kuralım?",
            a: "İşiniz standart kalıba uyuyorsa hazır yazılım daha hızlı ve ucuzdur; bunu ilk görüşmede söylüyoruz. Panel kurma kararı için üç gerekçe vardır: süreciniz kalıba uymuyor ve “modül yok” nedeniyle Excel'e kaçıyorsanız, mevcut yazılım kullanıcı başı abonelikle maliyeti ölçeklemiyorsa, ya da paneli müşteri/bayiye de açmak istiyorsanız. Bu üçünün dışında biz de hazır çözüm + entegrasyon öneririz.",
          },
          {
            q: "Paneli mobil uygulama olarak da kullanabilir miyiz?",
            a: "Evet. Kurduğumuz arayüz mobil önceliklidir ve “ana ekrana ekle” ile uygulama gibi çalışır; çevrimdışı not/saha fotoğrafı gibi ileri ihtiyaçlar olursa ayrı bir istemci geliştirebiliriz. Bu durumda da iş kuralı ve veri panelin sunucusunda kalır; böylece tek doğruluk kaynağı korunur.",
          },
          {
            q: "Mevcut Excel verimizi panele aktarabilir misiniz?",
            a: "Aktarıyoruz ve bunu ayrı bir iş kalemi olarak planlıyoruz. Süreç şöyle: tablo başlıkları panel alanlarına eşlenir, veri kalitesi kontrolü (boş zorunlu alan, yinelenen kayıt, hatalı telefon/tarih) yapılır, temizlik kararları alınır ve içe aktarma loglanır. Genelde verinin %5-15'i ya düzeltilir ya birleştirilir; bu, panelin ilk kazancıdır.",
          },
          {
            q: "Kaç modül olmalı, hepsini baştan kuralım mı?",
            a: "Hayır. Paneli tek süreçle açmak, benimseme açısından en sağlıklı yoldur: önce en çok acı çeken süreç (genellikle iş emri veya sipariş), sonra yan modüller. Baştan altı modül kurulan panellerde ekipler alışkanlık değiştiremediği için kayıt disiplini kayboluyor; biz “bir işi panelden bitir, ikincisini sonra alalım” ritmini öneriyoruz.",
          },
          {
            q: "Panel güvenliği ve veri yedekleme nasıl sağlanıyor?",
            a: "Rol bazlı erişim, 2FA, oturum politikası, işlem günlüğü ve alan şifrelemesi standartlarımızdandır. Veritabanı günlük otomatik yedeklenir ve geri yükleme testi yapılır; bulut sağlayıcı tercihinize göre bölge (Türkiye/ABD/AB) ve yedek saklama süresi sözleşmede netleşir. Ayrıca dışa aktarma yetkisini ayrı bir role bağlayıp veri çekme işlemlerini logluyoruz.",
          },
          {
            q: "Bakım ve yeni özellik talepleri nasıl işliyor?",
            a: "Yayın sonrası 30 gün düzeltme ve küçük değişiklikler kapsamda. Sonrasında iki model var: saatlik/yıllık bakım anlaşması (güvenlik güncellemeleri, izleme, küçük geliştirmeler) veya talebe göre iş paketi. Önerimiz, paneli “canlı” tutacak küçük bir aylık bütçe; çünkü kullanıldıkça yeni ihtiyaç çıkacak ve bunu karşılamayan panel zamanla terk edilir.",
          },
        ],
      },
      internal: {
        id: "ilgili-hizmetler",
        h2: "Paneli Tamamlayan Modüller",
        paragraphs: [
          "Yönetim paneli; kullanıcı yönetimi, raporlama, iş takibi ve müşteri paneliyle birlikte çalıştığında operasyonun merkezi olur. Aşağıdaki sayfalar bu parçaları; şehir sayfaları ise çok lokasyonlu kurguyu anlatıyor.",
        ],
      },
    },
    ctaTitle: "Tek süreçle başlayalım",
    ctaText:
      "En çok yavaşlayan iş akışınızı anlatın; alan seti, ekran akışı ve pilot ekip planı dâhil tek sayfalık bir panel önerisiyle dönelim.",
  },

  "musteri-paneli": {
    h1: "Müşteri Paneli: Hesabını Kendi Yöneten Müşteri, Vaktini Koruyan Ekip",
    definition: [
      "Müşteri paneli, müşterinizin kendi işini sizin desteğiniz olmadan görebildiği ve yürütebildiği giriş korumalı alandır: geçmiş talepler, açık siparişler, belge ve faturalar, sözleşme arşivi, kullanım özeti ve yeni talep oluşturma. Amaç “ekstra site” değil, telefon ve e-posta trafiğinin büyük kısmını müşterinin kendi vaktine bırakmaktır.",
      "Bir hizmet işletmesinde destek taleplerinin çoğu bilgi sorusudur: “fatura kesildi mi, ne zaman geliyor, dosyam hangi aşamada, sözleşmem nerede?” Bu soruların her biri personelin dikkatini böler ve yanıt süresi ekibin yoğunluğuna bağlıdır. Panel, bu bilgiyi kaynağından (sizin sisteminizden) ve anlık olarak müşterinin ekranına taşır.",
      "Tardigrad Software olarak müşteri panelini kurduğumuz CRM, sipariş veya iş takip sistemlerinin üzerine oturtuyoruz; ayrı bir sistemde çift kayıt yerine tek veri kaynağından beslenen bir dış cephe kuruyoruz. Marka, dil ve gizlilik kuralları panelde sizin kontrolünüzde kalır.",
    ],
    sections: {
      whyNeeded: {
        id: "neden-gerekli",
        h2: "Panel Olmayan Müşteri İlişkisi Nerede Tıkanır?",
        bullets: [
          { title: "Aynı soru, farklı kişilere", text: "Müşteri beş ayrı e-posta atar; üç farklı personel aynı bilgiyi farklı söyler.", icon: "Mail" },
          { title: "Durum belirsizliği", text: "“İşim ne zaman biter?” sorusunun cevabı yoksa arayış başlar; personel aramayı açmak için işini bırakır.", icon: "Clock" },
          { title: "Evrak peşin koşusu", text: "Sözleşme, fatura ve raporlar her seferinde yeniden istenir ve e-posta ile iletilir; kaybolur, sürüm kirlenir.", icon: "FolderOpen" },
          { title: "Ödeme takibi yok", text: "Borç ve son ödeme tarihi görünür değilse tahsilat gecikir, hatırlatma kişiye kalır.", icon: "Wallet" },
        ],
        miniCta: "Müşterilerinizin en çok sorduğu beş soruyu listeleyin; panelde hangi ekranların bunları kapatacağını gösterelim.",
      },
      scope: {
        id: "paket-kapsami",
        h2: "Müşteri Panelinin Kapsamı",
        checklist: [
          "Giriş ve hesap yönetimi: e-posta/parola, 2FA, firma çoklu kullanıcı ve rol (yetkili/izleyici)",
          "Talep/iş emri ekranı: yeni talep açma, durum ve aşama takibi, personelle notlaşma, dosya ekleme",
          "Sipariş ve sevkiyat: açık/tamamlanan siparişler, kargo takip numarası, kalan bakiye",
          "Belge merkezi: sözleşme, ek protokol, teknik rapor, garanti ve iade belgeleri; sürüm ve tarih bilgisiyle",
          "Fatura ve ödeme: e-fatura/e-arşiv görüntüleme, PDF indirme, son ödeme tarihi, online ödeme bağlantısı",
          "Kullanım/abonelik özeti: limit, tüketim, gelecek yenileme tarihi ve plan değişikliği talebi",
          "Bildirim tercihleri: e-posta/SMS/WhatsApp kanal seçimi ve olay bazlı abonelik",
          "Performans ve şeffaflık: SLA uyumu, ortalama çözüm süresi, dönemsel özet",
          "İç görünürlük: paneldeki her işlem CRM/iş sisteminde karşılık bulur; müşteri notu ile iç not ayrımı",
          "Çoklu dil ve marka: müşteriye göre TR/EN arayüz, firma logosu ve renkleri",
          "Güvenlik: rol bazlı veri sınırı, indirme izi, oturum süresi ve KVKK uyumlu veri gösterimi",
        ],
      },
      process: {
        id: "surec",
        h2: "Kurulum Süreci: 6 Adım",
        steps: [
          { title: "1. Müşteri temas analizi (1-2 gün)", text: "Gelen talep/soru türleri sınıflandırılır; panelde karşılığı olacaklar seçilir. Çıktı: ekran listesi + kapatılacak sorular." },
          { title: "2. Veri ve erişim planı (1-2 gün)", text: "Hangi bilginin hangi sistemden geleceği, müşteriye neyin gösterilmeyeceği netleşir. Çıktı: alan/eşleme tablosu." },
          { title: "3. Tasarım (2-5 gün)", text: "Giriş, panel ana ekran ve talep akışı tasarlanır; mobilde tek elle kullanım önceliklidir. Çıktı: prototip." },
          { title: "4. Geliştirme ve entegrasyon (6-12 gün)", text: "Panel kodlanır; CRM/ERP/muhasebe ve belge tarafına bağlanır, yetki ve log katmanı kurulur. Çıktı: test ortamı." },
          { title: "5. Pilot müşteri grubu (1-2 hafta)", text: "5-10 müşteriyle canlı kullanım; “bulamadım” dedikleri noktalar düzeltilir. Çıktı: doğrulanmış panel + davet akışı." },
          { title: "6. Kademeli açılış + bilgilendirme", text: "Toplu davet e-postası, kısa tanıtım videosu ve ilk hafta destek hattı ile yaygınlaştırma. Çıktı: aktif kullanıcı oranı raporu." },
        ],
      },
      benefits: {
        id: "faydalar",
        h2: "Panelin Ölçülebilir Etkisi",
        metrics: [
          { value: "-%30-50", label: "bilgi amaçlı gelen e-posta/arama hacmi (pilot gözlemi)" },
          { value: "dakikalar", label: "talep açma süresi; mesai beklenmez" },
          { value: "24/7", label: "belge ve durum erişimi" },
          { value: "görünür", label: "son ödeme tarihi ile tahsilat disiplini" },
        ],
        bullets: [
          { title: "Ekip işine döner", text: "Telefon ve e-posta trafiği azalınca personel, çözüm üreten işlere vakit ayırır.", icon: "Zap" },
          { title: "Algılanan profesyonellik", text: "Kendi hesabını yönetebilen müşteri, kurumu daha yetkin konumlandırır; yenileme kararına olumlu yansır.", icon: "TrendingUp" },
          { title: "İtibar riski düşer", text: "Yanlış bilgi verme ve eksik belge gönderme ihtimali azalır; her şey tek kaynaktan gelir.", icon: "ShieldCheck" },
          { title: "Çapraz satış zemini", text: "Kullanım ve limit verisi görünür olduğu için, doğru zamanda doğru teklif sunulabilir.", icon: "Target" },
        ],
      },
      audience: {
        id: "kimler-icin",
        h2: "Kimler İçin Uygun?",
        bullets: [
          { title: "Abonelik ve bakım satanlar", text: "Periyodik hizmet, sözleşme ve SLA takibi olan firmalar.", icon: "RefreshCw" },
          { title: "Bayi/müşteri kanalına satanlar", text: "Sipariş, bakiye ve evrak trafiği yoğun toptancılar.", icon: "Boxes" },
          { title: "Proje teslim eden ofisler", text: "Mimarlık, mühendislik, yazılım, ajans; aşama/doküman paylaşımı kritik.", icon: "FolderOpen" },
          { title: "Kurumsal müşteriye hizmet verenler", text: "Danışmanlık, muhasebe, hukuk; belge güvenliği ve erişim izi önemli.", icon: "Briefcase" },
        ],
      },
      whyUs: {
        id: "neden-biz",
        h2: "Neden Tardigrad Software?",
        bullets: [
          { title: "Ayrı sistem değil, dış cephe", text: "Paneli bağımsız bir veritabanıyla kurmuyoruz; kaynağınızda ne varsa müşteri onu görür, çift bakım çıkmaz.", icon: "Workflow" },
          { title: "Gizlilik sınırları net", text: "Müşteri A, B'nin varlığını bilmemeli; sorgu seviyesinde filtre kurar, indirme ve görüntüleme izlerini tutarız.", icon: "Lock" },
          { title: "Benimseme planı dâhil", text: "Pilot grup, davet akışı ve tanıtım videosu kurulumun parçası; “yaptık, kullanılır” demiyoruz.", icon: "GraduationCap" },
          { title: "Ölçümle kapatıyoruz", text: "Aktif kullanıcı oranı ve azalan talep hacmi raporlanır; panelin getirisi sayıyla görünür.", icon: "LineChart" },
        ],
      },
      faq: {
        id: "sss",
        h2: "Müşteri Paneli Hakkında Sıkça Sorulanlar",
        faq: [
          {
            q: "Müşterilerim panel kullanmak ister mi?",
            a: "Hepsi istemez ve bu normaldir; hedef, trafiğin büyük kısmını oluşturan “bilgi sorusu”nu kaldırmaktır. Pilot gözlemimizde, paneli ilk ayda en az bir kez kullanan müşteri oranı %40-60 aralığında seyreder ve ikinci ayda kullanmayanların bir kısmı geri gelir (belge veya talep için). Kalıcı benimseme, panelin gerçekten bilgi tutması ve e-posta yerine oradan yanıt verilmesiyle olur: müşteriyi panele yönlendiren bir ekip alışkanlığı gerekir.",
          },
          {
            q: "Zaten bir yardım masası (ticket) yazılımımız var, panel gerekir mi?",
            a: "Ticket sistemi talebi yönetir; panel ise bunun yanında belge, fatura, sipariş, kullanım özeti ve durum bilgisini tek yerde gösterir. Eğer ihtiyaç yalnızca talep yönetimi ise mevcut ticket aracınızı markalayıp entegre etmek daha doğrudur. Panelin gerekçesi, müşteriye “hesabı” göstermektir; bu farkı ilk görüşmede netleştiriyoruz.",
          },
          {
            q: "Fatura ve ödeme bilgilerini göstermek güvenli mi?",
            a: "Mali veriler için iki tercih sunuyoruz: (1) görüntüleme/link bizim sistemimizde, ödeme ise sağlayıcıda (3D Secure) — en yaygın model; (2) yalnızca belge indirme, ödeme tarafında e-posta bağlantısı. Kart verisi tutulmaz; ödemeyi sanal POS veya ödeme sağlayıcısı üstlenir. Oturum süresi, 2FA ve indirme logu ile erişimi sıkılaştırıyoruz.",
          },
          {
            q: "Bayiler için ayrı bir panel mi gerekir?",
            a: "Aynı panel, farklı rol ve farklı alan setiyle çalışabilir. Bayi rolünde stok, fiyat listesi, sipariş ve tahsilat görünürlürken; standart müşteri rolünde yalnızca kendi belgeleri görünür. Bu yaklaşım bakım maliyetini düşürür; zamanla ayrışan ihtiyaçlar için panel içi modül çoğaltılır, ikinci bir sistem kurulmaz.",
          },
          {
            q: "Eski sistemimizde (Excel/muhasebe) panel yok, yine de kurabilir miyiz?",
            a: "Kurabiliriz; ancak müşteriye gösterilecek bilginin taze olması gerekir. Bu yüzden paneli genelde sipariş/iş takip veya CRM katmanıyla birlikte planlıyoruz. Veri hâlâ Excel'de kalacaksa ara bir içe aktarma + zamanlanmış senkron kuruyoruz; süreklilik içinse paneli, verinin üretildiği sürece bağlamak daha sağlıklıdır — iki yolun maliyet farkını da açıkça söylüyoruz.",
          },
        ],
      },
      internal: {
        id: "ilgili-hizmetler",
        h2: "Panelin Arkasında Çalışan Katmanlar",
        paragraphs: [
          "Müşteri paneli; iş takibi, sipariş yönetimi ve CRM olmadan yüzeysel kalır. Aşağıdaki sayfalar bu çekirdeği, şehir sayfaları ise bölgesel müşteri yapılarına göre açılış planını anlatıyor.",
        ],
      },
    },
    ctaTitle: "Müşterinizin en çok sorduğu soru ne?",
    ctaText:
      "Talep ve soru tiplerinizi paylaşın; panelde hangi ekranların bunları kapatacağını, pilot müşteri planını ve takvimi tek sayfada özetleyelim.",
  },
}
