import type { ServiceContent } from "@/types/content"

/**
 * FAZ 2 — grup 1 (devam): “web” kategorisinin kalan üç hizmeti.
 * Bölüm 6 sırası: tanım → neden gerekli → kapsam → süreç → faydalar →
 * kimler için → neden biz → SSS → iç linkler → CTA.
 */
export const webContents2: Record<string, ServiceContent> = {
  "urun-tanitim-sitesi": {
    h1: "Ürün Tanıtım Sitesi Nedir? Kataloğunuzun Canlı Hâli",
    definition: [
      "Ürün ve hizmet tanıtım sitesi, bir firmanın ürün ailesini arama, filtre, teknik tablo ve doküman katmanıyla sunan web sitesidir. E-ticaretten farkı sepet ve ödeme içermemesi; kurumsal siteden farkı ise ürün verisinin yapılı bir şekilde yönetilmesidir. Ziyaretçi aradığı modeli bulur, teknik değerlerini karşılaştırır, PDF dökümanı indirir ve fiyat/teslim için size tek tıkla ulaşır.",
      "Bu tür sitelerin çoğu, yanlış yere kurulduğu için işe yaramaz: ürünler fotoğraf+paragraf biçiminde sayfalara gömülür. Altı ay sonra fiyatlar bayatlar, yeni seri eklemek ajans ricası gerektirir, iki ayrı sayfadaki aynı ürün çelişen bilgiler taşır. Doğru kurulumda ise ürün tek bir kayıt olarak yönetilir; liste sayfası, detay sayfası, PDF katalog ve bayi ekranı aynı kaynaktan beslenir.",
      "Tardigrad Software olarak tanıtım sitesini bir veri projesi gibi ele alıyoruz: kategori/ürün/özellik modeli, arama ve filtre davranışı, doküman yönetimi, bayi girişleri ve gerekirse fiyat sorgulama akışı. Ön yüz Next.js + Tailwind + shadcn/ui ile kurulur, sayfa hızı ve SEO standartları korunur; panelde ürün eklemek bir tabloya satır girmek kadar basittir.",
    ],
    sections: {
      whyNeeded: {
        id: "neden-gerekli",
        h2: "Neden Ayrı Bir Ürün Tanıtım Sitesi?",
        paragraphs: [
          "Ürün gamı geniş olan firmalarda satış talebinin büyük kısmı “hangi model benim işime yarar?” sorusundan doğar. Bu soruyu telefonla yanıtlamak mümkündür ama ölçeklenmez; bayilere Word dosyasıyla gitmek ise her ay yeniden düzenleme demektir. Yapılı bir katalog sitesi, soruyu ziyaretçinin kendisinin yanıtlamasını sağlar ve satış ekibini teknik detay anlatmaktan kurtarır.",
        ],
        bullets: [
          {
            title: "Ürün verisi dağınık",
            text: "Fiyat bir Excel'de, teknik tablo PDF'te, fotoğraflar ajans klasöründe. Üçü ayrı yerden güncellenince müşteri hatalı bilgiyle karar verir.",
            icon: "Boxes",
          },
          {
            title: "Yeni seri eklemek proje hâline geliyor",
            text: "Her yeni ürün için ayrı tasarım rica edilir; sonuçta yeni seri, sitede iki ay geç görünür. Panel olan yapıda bu 10 dakikadır.",
            metric: "10 dk",
            icon: "Zap",
          },
          {
            title: "Bayi doğru dokümana ulaşamıyor",
            text: "Güncel katalog, montaj şeması ve onaylı fiyat listesi WhatsApp gruplarında kaybolur. Bayi girişi olan site tek doğruluk kaynağı olur.",
            icon: "Users",
          },
          {
            title: "Aramada ürün bulunamıyor",
            text: "“Ürün adı + teknik özellik” arayan alıcı, PDF'te gömülü sayfayı değil; indekslenmiş, başlığı doğru bir ürün sayfasını görmek ister.",
            icon: "Search",
          },
        ],
        miniCta: "Mevcut katalogunuzu (PDF/Excel) paylaşın; kaç ürün, kaç kategori ve hangi alanların filtre olması gerektiğini birlikte netleştirelim.",
      },
      scope: {
        id: "paket-kapsami",
        h2: "Ürün Tanıtım Sitesi Kapsamı",
        paragraphs: [
          "Kapsam, ürün sayısına ve teknik veri derinliğine göre değişir; 50 ürünlük bir vitrin ile 3.000 satırlık bir endüstriyel katalog aynı mimarinin farklı boyutlarıdır. Aşağıdaki liste standart paketi özetler.",
        ],
        checklist: [
          "Ürün veri modeli: kategori, alt kategori, marka/seri, varyant, teknik özellik listesi, doküman bağlantıları",
          "Liste ve arama sayfası: metin araması, kategori seçimi, özellik filtreleri, sıralama (yeni, popüler, A-Z)",
          "Ürün detay sayfası: görsel galeri, teknik tablo, indirilebilir doküman, benzer ürün önerisi, talep formu",
          "Karşılaştırma ekranı: 2-4 ürünün özellik tablosunu yan yana gösterme",
          "PDF katalog üreteci: panelden seçilen ürün kümesinden markalı PDF üretimi",
          "Doküman yönetimi: montaj şeması, garanti belgesi, CE/uygunluk, fiyat listesi; sürüm ve tarih bilgisiyle",
          "Bayi/müşteri alanı: giriş korumalı fiyat listesi ve stok durumu gösterimi (isteğe bağlı)",
          "Fiyat sorgulama / teklif sepeti: ürünleri listeye ekleyip tek formda gönderme (e-ticaret olmadan)",
          "Yönetim paneli: ürün, kategori, özellik ve doküman CRUD işlemleri; toplu içe aktarma (Excel/CSV)",
          "SEO katmanı: kategori ve ürün sayfaları için başlık/description şablonları, canonical, breadcrumb, Product/ItemList yapısal verisi",
          "Hız ve görsel hattı: WebP dönüşümü, kaydırarak yükleme (lazy), sabit ölçülü görsel kutuları",
          "Analitik: ürün görüntüleme, doküman indirme ve talep olaylarının ölçümlenmesi",
        ],
      },
      process: {
        id: "surec",
        h2: "Ürün Tanıtım Sitesi Kurulum Süreci: 8 Adım",
        steps: [
          {
            title: "1. Ürün verisi envanteri (2-3 gün)",
            text: "Excel, PDF ve mevcut site dökülür; hangi alanların gerçekten filtre/arama için gerekli olduğu belirlenir. Çıktı: alan listesi ve veri kalitesi raporu.",
          },
          {
            title: "2. Kategori ve bilgi mimarisi (2-4 gün)",
            text: "Kategori ağacı, URL kalıpları ve isimlendirme standardı kurulur. Yanlış kategori ağacı sonradan en pahalı hatadır; burada sabırlı davranırız. Çıktı: sayfa haritası.",
          },
          {
            title: "3. Veri modeli ve panel tasarımı (2-3 gün)",
            text: "Ürün, varyant, özellik ve doküman tabloları; panelde hangi ekranların görüneceği tasarlanır. Çıktı: şema + panel akışı.",
          },
          {
            title: "4. Tasarım (3-6 gün)",
            text: "Ürün kartı, liste, detay ve karşılaştırma ekranları mobil öncelikli tasarlanır; görsel stili (fondan ürün fotoğrafı, yakınlaştırma) netleşir. Çıktı: tıklayabilir taslak.",
          },
          {
            title: "5. Geliştirme ve içe aktarma (5-10 gün)",
            text: "Ön yüz ve panel kodlanır, veri temizlenip içe aktarılır, dokümanlar bağlanır. Çıktı: gerçek ürünlerle dolu bir ön izleme ortamı.",
          },
          {
            title: "6. Arama/filtre ve hız ince ayarı (2-4 gün)",
            text: "Filtre performansı, boş sonuç stratejisi, sayfalama ve görsel ağırlıkları optimize edilir. Çıktı: ölçüm raporu ve düzeltmeler.",
          },
          {
            title: "7. SEO/şema kurulumu ve eğitim (1-2 gün)",
            text: "Meta şablonları, sitemap, yapısal veri ve analitik olayları kurulur; panel eğitimi kayda geçirilir. Çıktı: kontrol listesi + eğitim videosu.",
          },
          {
            title: "8. Yayın ve 30 gün gözlem",
            text: "Eski URL'ler için 301 planı uygulanır, yayın sonrası Search Console verisi izlenir; ilk indekslenme sorunları bu pencerede kapatılır. Çıktı: canlı site ve ilk ay raporu.",
          },
        ],
      },
      benefits: {
        id: "faydalar",
        h2: "Sayılarla Ürün Tanıtım Sitesi",
        metrics: [
          { value: "1 kaynak", label: "ürün verisi; site, PDF ve bayi ekranı aynı kayıttan beslenir" },
          { value: "6-10 hafta", label: "500 ürünük katalog için tipik teslim süresi" },
          { value: "-%50", label: "teknik soru için gelen arama trafiğinde azalma" },
          { value: "<2.5s", label: "liste ve detay sayfalarında mobil LCP hedefi" },
        ],
        bullets: [
          {
            title: "Satış ekibi satışa döner",
            text: "Temel teknik sorular sitede yanıtlandığı için ekip, teklif ve demo gibi katma değerli işlere vakit ayırır.",
            icon: "Phone",
          },
          {
            title: "Bayi hatasız bilgiyle gider",
            text: "Güncel fiyat ve doküman tek yerden alındığı için sazada yanlış ürün/yanlış fiyat konuşulmaz.",
            icon: "ShieldCheck",
          },
          {
            title: "Yeni seri aynı gün yayında",
            text: "Panel + şablon sistemi sayesinde ürün ekleme, tasarım projesi olmaktan çıkar.",
            metric: "aynı gün",
            icon: "Zap",
          },
          {
            title: "Organik talepte artış",
            text: "Ürün ve kategori sayfaları, uzun kuyruk aramalarda (model + özellik + şehir) trafiğin doğal kapısı olur.",
            icon: "TrendingUp",
          },
        ],
      },
      audience: {
        id: "kimler-icin",
        h2: "Bu Hizmet Kimin İçin Uygun?",
        bullets: [
          {
            title: "Üretici ve ithalatçılar",
            text: "Geniş ürün gamı, teknik tablo ve doküman yükü olan; bayi ağı bulunan firmalar.",
            icon: "Package",
          },
          {
            title: "Endüstriyel tedarikçiler",
            text: "Alıcının spesifikasyonla karar verdiği sektörler: makine, elektrik-elektronik, kimyasal, yapı malzemesi.",
            icon: "Boxes",
          },
          {
            title: "Hizmet firmaları (kataloglı)",
            text: "Paket/hizmet listesi olan; her hizmetin kapsam ve süresini şeffaf göstermek isteyen ofisler.",
            icon: "Briefcase",
          },
          {
            title: "E-ticarete geçişi planlayanlar",
            text: "Önce ürün verisini yapılandırmak, ödeme katmanını sonra eklemek isteyen markalar için doğru ilk adım.",
            icon: "Layers",
          },
        ],
      },
      whyUs: {
        id: "neden-biz",
        h2: "Neden Tardigrad Software ile Ürün Sitesi?",
        bullets: [
          {
            title: "Önce veri modeli, sonra tasarım",
            text: "Katalog sitelerinin çoğu veri modelinin yanlış kurulmasından ölür. Biz envanter ve alan kararını ilk haftada bitiriyoruz.",
            icon: "Workflow",
          },
          {
            title: "SEO ve hız baştan planlanır",
            text: "Binlerce sayfalık sitelerde tarama bütçesi, başlık şablonları ve sayfalama stratejisi kritiktir; bunlar sonradan eklenen işler değil, mimari kararlardır.",
            icon: "Search",
          },
          {
            title: "Paneli sizin ekibiniz kullanabilsin",
            text: "Toplu içe aktarma, görsel kırpma ve doküman sürümü gibi detaylar panelde hazır gelir; ajans bağımlılığı üretmiyoruz.",
            icon: "Upload",
          },
          {
            title: "Ölçeklendikçe yeniden yapılmaz",
            text: "Aynı mimariye sepet, ödeme ve bayi siparişi eklenebilir; e-ticarete geçiş projeyi sıfırlamaz.",
            icon: "ShoppingBag",
          },
        ],
      },
      faq: {
        id: "sss",
        h2: "Ürün Tanıtım Sitesi Hakkında Sıkça Sorulanlar",
        faq: [
          {
            q: "Ürün sayısı çok fazla (3.000+), yine de olur mu?",
            a: "Olur ve tam da bu tip projeler için kurulmuş bir mimaridir. Kritik kararlar kategori ağacının derinliği, sayfalama stratejisi ve arama/filtre altyapısıdır. Böyle projelerde tüm sayfaların aynı anda indekslenmesi gerekmez; önce kategori ve seri sayfalarını öne çıkarıp ürün sayfalarını kademeli açıyoruz. Mevcut veri Excel'deyse içe aktarma ile başlangıç yükünü saatler içinde bitiriyoruz.",
          },
          {
            q: "Fiyatları sitede göstermek zorunda mıyız?",
            a: "Hayır. Üç yaygın model var: (1) fiyat hiç gösterilmez, sadece “teklif iste”; (2) fiyat bayi/müşteri girişinden sonra görünür; (3) liste fiyatı gösterilir, kampanya indirimi sepette hesaplanır. Rekabet ve kanal yapınıza göre hangisinin doğru olduğunu teklif görüşmesinde birlikte seçiyoruz; panelde bu ayar ürün bazında değiştirilebilir şekilde kurulur.",
          },
          {
            q: "Ürün fotoğraflarını kim hazırlayacak?",
            a: "Genelde firma mevcut görselleri verir, biz tarafında optimize edilir: arka plan temizliği, tutarlı kırpma oranı, WebP dönüşümü ve sabit kutu ölçüleri. Stüdyo çekimi gereken ürünlerde bir çekim standardı (fon, açı, dosya adlandırma) paylaşıyoruz; bu, siteye giriş maliyetini düşüren en etkili adımdır.",
          },
          {
            q: "PDF kataloğu otomatik üretebilir miyiz?",
            a: "Evet. Panelden ürün kümesi seçilip markalı bir PDF üretimi yapılabilir; fiyat, teknik tablo ve doküman bağlantıları aynı kaynaktan geldiği için PDF ile site arasında tutarsızlık oluşmaz. Basılı sipariş için baskıya hazır çıktı ve web için hafif dosya olmak üzere iki format sunuyoruz.",
          },
          {
            q: "Hazır e-ticaret altyapısı kullanmak daha ucuz değil mi?",
            a: "Kısa vadede evet; uzun vadede çoğu zaman hayır. Hazır altyapılar ürün verisini “satış” şemasına sıkıştırır; bayi alanı, özel filtre, doküman sürümü, teklif sepeti gibi B2B ihtiyaçları ya eklenti yığınıyla ya da dışarıdan işlerle çözülür. Biz önce tanıtım + talep, sonra isteyen için satış olacak şekilde kuruyoruz; böylece ilk yatırım boşa gitmiyor.",
          },
          {
            q: "Ürün sayfalarını SEO için nasıl yapıyorsunuz?",
            a: "Her ürün sayfasında dört katman olur: doğru başlık ve description şablonu, teknik özellik tablosu, kullanım/uyum bilgisi ve ilgili ürün bağlantıları. Ayrıca Product ve ItemList yapısal verisi, breadcrumb ve kanonik URL'ler kurulur. Binlerce sayfada kopya içerik riskine karşı, şablon metinleri ürün verisinden üretilir ve aynı kelime kalıbının yüzlerce sayfada dönmesine izin vermeyiz.",
          },
        ],
      },
      internal: {
        id: "ilgili-hizmetler",
        h2: "Katalog Sitesini Satış Kanalına Çeviren Katmanlar",
        paragraphs: [
          "Ürün verisi hazır olduktan sonra asıl kazanç, bu veriyi sipariş, teklif ve stok süreçlerine bağlamaktan gelir. Aşağıdaki hizmet sayfaları bu katmanları anlatıyor; şehir sayfalarında ise bölgesel talebi karşılayan sayfa kurgusunu bulabilirsiniz.",
        ],
      },
    },
    ctaTitle: "Kataloğunuzu canlıya alalım",
    ctaText:
      "Elinizdeki Excel/PDF'yi paylaşın; alan listesi, kategori ağacı ve ilk sürümün kapsamı üzerine tek sayfalık bir planla dönelim. Ürün sayınıza göre tek fiyat ve takvim netleşsin.",
  },

  "portfoy-sitesi": {
    h1: "Portfolyo Sitesi Nedir? İşlerinizi Anlatan, Teklif Getiren Site",
    definition: [
      "Portfolyo sitesi; yapılan işlerin, ölçülebilir sonuçlarla birlikte sergilendiği ve ziyaretçiyi doğrudan iş görüşmesine taşıyan web sitesidir. Tasarımcı, mimar, fotoğrafçı, yazılım ekip lideri, ajans ve danışman gibi “çıktısı görünür” mesleklerde bu site, özgeçmişin ve sunum dosyasının yerini alır; çoğu projenin ilk elemesi portfolyoya bakılarak yapılır.",
      "İyi bir portfolyo sitesi iki şeyi aynı anda başarır: doğru işi doğru bağlamda göstermek ve iş almak. Bunun için proje başına bir vaka anlatımı gerekir: sorun, yaklaşım, süreç, sonuç ve kullanılan yöntem. Sadece görsel dizisi olan siteler estetik olarak güçlü görünür ama karar vericiye “seni neden seçeyim?” cevabını vermez; metin-vaka katmanı eksiktir.",
      "Tardigrad Software olarak portfolyo sitelerini filtreli proje listesi, vaka sayfaları, hakkımda/yöntem sayfaları ve iletişim katmanıyla kuruyoruz. Panelden yeni proje eklemek, kapak görseli ve teknik bilgiyi girmek birkaç dakika sürer; site hız, SEO ve erişilebilirlik standartlarını korur. Kişisel markanızı büyütürken “yeni işi site üzerinden almayı” ölçülebilir hâle getirirsiniz.",
    ],
    sections: {
      whyNeeded: {
        id: "neden-gerekli",
        h2: "Neden Sadece Sosyal Medya veya PDF Dosyası Yetmez?",
        paragraphs: [
          "Sosyal medya görünürlük sağlar ama sahiplik vermez: erişim algoritmasına bağlıdır, arşiv kayar ve profesyonel alıcıların çoğu “işinizi ciddi anlatan” bir adresi tercih eder. PDF sunum dosyası ise güncel kalmaz ve link paylaşıldığında mobilde kötü görünür. Kendi siteniz, üç kanalı da (arama, sosyal, e-posta) karşılayan tek kalıcı yüzeydir.",
        ],
        bullets: [
          {
            title: "Görsel var, hikâye yok",
            text: "Karar verici, sonuca değil sürece bakar: kısıtlar neydi, hangi kararı verdiniz, ölçülen sonuç ne oldu? Vaka anlatımı olmayan portfolyo fiyat kırarak kazanır.",
            icon: "Images",
          },
          {
            title: "Ulaşılması zor işler",
            text: "“Geçmiş işlerinizden x tipinde bir örnek var mı?” sorusu her seferinde yeniden yanıtlanır; filtreli liste bunu otomatikleştirir.",
            icon: "Filter",
          },
          {
            title: "Erişilebilirlik ve hız",
            text: "Ağır görsellerle dolu şablonlar mobilde yavaşlar; potansiyel müşteri ilk projeyi görmeden sekmeyi kapatır.",
            metric: "<2.5s LCP",
            icon: "Gauge",
          },
          {
            title: "Kendi markanız için zaman yok",
            text: "İş yaparken siteyle uğraşmak ertelenir; panel sade kurulursa bakım haftalar yerine dakikalar alır.",
            icon: "Zap",
          },
        ],
        miniCta: "Mevcut iş listenizi ve hedeflediğiniz müşteri tipini paylaşın; site iskeleti ve vaka şablonunu birlikte seçelim.",
      },
      scope: {
        id: "paket-kapsami",
        h2: "Portfolyo Sitesi Paketi",
        checklist: [
          "Vaka/proje listesi: kapak görseli, başlık, kategori, yıl ve kısa sonuç cümlesi",
          "Filtreler: disiplin (iç mimari, marka, arayüz…), sektör, yıl; adreslenebilir filtre URL'leri",
          "Proje detay sayfası: sorun → yaklaşım → süreç → sonuç → kullanılan araç/bölüm akışı",
          "Görsel galeri: optimize edilmiş, sabit oranlı, klavye ile gezilebilir lightbox",
          "Hakkımda / yöntem: özgeçmiş yerine çalışma biçimi, ilke ve süreç anlatımı",
          "Hizmet ve süreç sayfası: ne yaptığınız, nasıl fiyatladığınız, teslim takvimi",
          "İletişim: kısa form, takvim bağlantısı, e-posta ve sosyal kanallar",
          "Opsiyonel: blog/yazı katmanı (vaka analizi ve bilgi içerikleri için)",
          "Yönetim paneli: proje, görsel, kategori ve sıralama yönetimi; taslak/yayın durumu",
          "SEO: başlık/description, Open Graph görselleri, sitemap, yapısal veri (Person + CreativeWork)",
          "Performans: görsel optimizasyonu, font hattı, sunucu tarafında render; CLS'i sıfırlayan görsel kutuları",
          "Çoklu dil (isteğe bağlı): EN/AR gibi ikinci dilde proje sayfaları",
        ],
      },
      process: {
        id: "surec",
        h2: "Portfolyo Sitesi Süreci: 6 Adım",
        steps: [
          {
            title: "1. Hedef ve iş seçimi (1-2 gün)",
            text: "Hangi müşteri tipine ulaşmak istediğinizi netleştirip göstereceğiniz 8-12 işi birlikte seçiyoruz. Çok iş göstermek, az iş göstermekten daha zayıf bir stratejidir.",
          },
          {
            title: "2. Vaka metinleri (2-5 gün)",
            text: "Her proje için sorun-yaklaşım-sonuç metnini yazıyoruz; siz teknik detayları onaylarsınız. Çıktı: yayınlanabilir vaka metinleri.",
          },
          {
            title: "3. Görsel hazırlığı (1-3 gün)",
            text: "Görseller kırpma oranına göre düzenlenir, optimize edilir ve sıralanır; kapak görselleri tutarlı bir kompozisyona kavuşur.",
          },
          {
            title: "4. Tasarım ve yerleşim (3-6 gün)",
            text: "Tipografi, boşluk ritmi ve liste/proje şablonları belirlenir; sade bir görsel kimlikle “işler öne çıkar” prensibi uygulanır. Çıktı: ön izleme.",
          },
          {
            title: "5. Geliştirme ve panel (3-6 gün)",
            text: "Site koda dönüşür, panel bağlanır, analitik ve SEO kurulumları yapılır. Çıktı: gerçek verilerle dolu test ortamı.",
          },
          {
            title: "6. Yayın ve ilk ay",
            text: "Alan adı/DNS yerleşimi, form testleri ve 30 günlük destek; gerekirse metin ve sıralama ayarları bu sürede yapılır.",
          },
        ],
      },
      benefits: {
        id: "faydalar",
        h2: "Portfolyo Sitesinin Getirdiği Somut Kazanımlar",
        bullets: [
          {
            title: "Daha nitelikli talep",
            text: "Vaka anlatımı, “en ucuz kim?” diyen yerine “bu işi yapan kimi?” diyen müşteriyi çeker; filtreli liste niyeti netleştirir.",
            icon: "Target",
          },
          {
            title: "Sunum hazırlığı biter",
            text: "Teklif öncesi dosya hazırlamak yerine link gönderilir; link her zaman günceldir.",
            metric: "tek link",
            icon: "FileText",
          },
          {
            title: "Aramada bulunabilirlik",
            text: "“İç mimar + şehir” veya “marka tasarımı + sektör” aramalarında kişisel otorite sayfanız öne çıkar.",
            icon: "Search",
          },
          {
            title: "Fiyat görüşmesinde güç",
            text: "Sonuç ve süreç anlatan işler, tek başına görselden daha yüksek bütçe konuşmanızı sağlar.",
            icon: "TrendingUp",
          },
        ],
      },
      audience: {
        id: "kimler-icin",
        h2: "Kimler İçin Uygun?",
        bullets: [
          { title: "Mimar, iç mimar ve peyzaj ofisleri", text: "Fotoğraf ağırlıklı işlerde hız ve ölçeklendirme kritik; vaka kurgusu teknik kararı anlatır.", icon: "Building2" },
          { title: "Grafik/marka tasarımcıları", text: "Yeni logo/marka işlerinde “süreç” göstermek en az sonuç görseli kadar ikna edicidir.", icon: "Palette" },
          { title: "Ürün/UI-UX tasarımcıları", text: "Ekran görselleri + problem tanımı + ölçülen sonuç; işe alım ve freelance müşteri için ortak beklenti.", icon: "LayoutDashboard" },
          { title: "Fotoğrafçı ve video ekipleri", text: "Seri bazlı galeri, lisans/iletişim katmanı ve hızlı yükleme; portfolyo burada envanter işlevi de görür.", icon: "Camera" },
          { title: "Danışman ve serbest profesyoneller", text: "Yöntem, vaka ve sonuç odaklı metin ağırlıklı siteler; güven inşası ön planda.", icon: "Briefcase" },
        ],
      },
      whyUs: {
        id: "neden-biz",
        h2: "Neden Tardigrad Software ile Portfolyo Sitesi?",
        bullets: [
          {
            title: "Metin yazarlığı dâhil",
            text: "Portfolyonun zayıf halkası genelde yazıdır. Vaka metinlerini birlikte kuruyor; siz onaylıyorsunuz.",
            icon: "FileText",
          },
          {
            title: "Hız takıntısı",
            text: "Görsel ağırlıklı sitelerde performans bir tercih değil zorunluluktur; WebP/AVIF, sabit kutu oranları ve lazy-load ile CLS≈0 hedeflenir.",
            icon: "Gauge",
          },
          {
            title: "Hazır tema yerine kontrol",
            text: "Galeri davranışı, filtre mantığı ve sıralama panelden yönetilebilir; tema şirketinin yol haritasına bağımlı kalmazsınız.",
            icon: "Settings2",
          },
          {
            title: "Büyümeye açık mimari",
            text: "Yazı/blog, çoklu dil, teklif formu veya rezervasyon gibi ekler aynı yapıya eklenir; site “bir kez yapılıp bırakılan” şey olmaz.",
            icon: "Layers",
          },
        ],
      },
      faq: {
        id: "sss",
        h2: "Portfolyo Sitesi Hakkında Sıkça Sorulanlar",
        faq: [
          {
            q: "Kaç proje göstermeliyim?",
            a: "Genellikle 8-12. Hedeflediğiniz iş türünü temsil eden, sonucu anlatabildiğiniz işler seçilir; “her işimi görmek isterler” refleksi çoğu zaman listeyi zayıflatır. Panelde “gizli/taslak” durumu olduğu için bir projeyi yayından kaldırmadan görünmez yapabilir, sezonluk listeler kurabilirsiniz.",
          },
          {
            q: "NDA nedeniyle işlerimi gösteremiyorum, ne yapmalıyım?",
            a: "İki yol var: (1) metrik ve süreci anlatan, marka adı vermeyen anonim vaka; (2) görsel yerine diyagram, wireframe veya üretim detayı paylaşmak. Müşteri adı gizli olsa da karar kaliteniz görünür; bir sözleşme maddesiyle izin alınabiliyorsa kısa onay metni ekliyoruz.",
          },
          {
            q: "Şablon/hazır site kullanmak yerine neden özel kurulum?",
            a: "Portfolyoda fark, içeriği sunma biçimindedir: filtreleme, vaka kurgusu, hız ve görsel davranışı. Hazır şablonlar bunların çoğunu “tema ayarı” olarak sınırlar; özel kurulumda galeri ve liste mantığı sizin iş akışınıza göre yazılır. Bütçe kısıtlıysa sade bir başlangıç kurup sonra genişletmeyi de öneriyoruz.",
          },
          {
            q: "Görseller sitemi yavaşlatır mı?",
            a: "Doğru hatta çalışırsa hayır. Görseller sabit oranlarda kırpılır, WebP'e dönüştürülür, ilk ekran dışında lazy-load edilir ve placeholder ile CLS sıfırlanır. Böylece 30 görselli bir galeri sayfası bile mobilde hızlı açılır; ölçümü yayından önce Lighthouse ile paylaşıyoruz.",
          },
          {
            q: "İş bulmak için SEO şart mı?",
            a: "Sosyal medya ve tavsiye yeterliyken şart değil; ama “şehir + disiplin” aramalarından gelen müşteri, soğuk trafik içinde en yüksek dönüşüm oranına sahiptir. Üç-beş hizmet sayfası (ör. “restoran iç mimarisi Ankara”) ve vaka başlıklarının doğru yazımı, düşük eforla yüksek getiri üreten kısımdır.",
          },
          {
            q: "Yazı/blog ekler miyim?",
            a: "Önerimiz, blog yerine “vaka analizi” formatında az sayıda derin yazıdır. Yılda 6-10 yazı, hem uzmanlık sinyali verir hem arama trafiği getirir; yüzeyde 600 kelimelik genel içerikler markanıza değer katmaz. Panelde yazı editörü baştan kurulur, sonra istediğiniz zaman açarsınız.",
          },
        ],
      },
      internal: {
        id: "ilgili-hizmetler",
        h2: "Portfolyoyu Gelir Kanalına Çeviren Adımlar",
        paragraphs: [
          "Site tek başına müşteri getirmez; talebi karşılayan form, görünürlüğü kuran SEO ve paylaşımı hızlandıran içerik üretimi birlikte çalışır. Aşağıdaki sayfalar bu katmanları açıklıyor; şehir sayfalarında ise yerel aramalarda bulunabilirlik kurgusunu bulabilirsiniz.",
        ],
      },
    },
    ctaTitle: "İşlerinizi anlatan bir site kuralım",
    ctaText:
      "Göstereceğiniz işleri ve hedeflediğiniz müşteri tipini paylaşın; vaka şablonu, liste yapısı ve hız hedefi netleşsin. Tek fiyat, tek takvimle 3-5 haftada yayındayız.",
  },

  "web-sitesi-yenileme": {
    h1: "Web Sitesi Yenileme: Hız, Mobil ve SEO'yu Kaybetmeden Modernizasyon",
    definition: [
      "Web sitesi yenileme, mevcut sitenin içeriğini ve otoritesini koruyarak teknik altyapısını, tasarımını ve hızını güncellemektir. “Yeni site yaptırmak”tan ayrıldığı nokta şudur: sıfırdan bir site kurarken trafik ve sıralama riski de sıfırdan başlar; yenilemede ise korunması gereken bir birikim vardır — indekslenmiş URL'ler, backlink profili, dönüşüm veren sayfalar ve yılların içerik değeri.",
      "Yenileme projelerinde en pahalı hata, bu birikimi hesaba katmamaktır. 301 yönlendirme planı olmayan bir taşıma, trafiğin haftalarca düşmesi demektir; başlık hiyerarşisi bozulan bir tasarım değişikliği, sıralama kaybettirir; görseller optimize edilmeden yapılan “yeni tasarım”, mobil hızını çökertir. Doğru süreç, önce mevcut durumun ölçülmesi, sonra risklerin sıraya konmasıdır.",
      "Tardigrad Software olarak yenilemeyi dört katmanda yürütüyoruz: teknik altyapı (Next.js + Tailwind + shadcn/ui, hosting/CDN), performans (Core Web Vitals), içerik/mimari (URL ve başlık planı, 301 haritası) ve dönüşüm (form, CTA, ölçümleme). Yayın öncesi/sonrası ölçümleri yan yana raporluyoruz; “yeni site” kararının ticari gerekçesini veriyle gösteriyoruz.",
    ],
    sections: {
      whyNeeded: {
        id: "neden-gerekli",
        h2: "Ne Zaman Yenileme, Ne Zaman Yeni Site?",
        paragraphs: [
          "Karar, estetikten çok veriyle ilgili. Aşağıdaki dört işaretten ikisi sizde varsa yenileme (kontrollü modernizasyon) doğru tercihtir; hepsi varsa ve mimari kurtarılamıyorsa yeni site planlanır — ama bu kez 301 ve içerik taşıma projesinin merkezde olduğu bir yeni site.",
        ],
        bullets: [
          {
            title: "Mobilde yavaş, masaüstünde “tamam”",
            text: "LCP 3,5 saniyenin üzerinde, görseller optimize edilmemiş, tema şişmiş. Hız, içeriği güçlü siteleri de öldürür.",
            metric: "LCP >3.5s",
            icon: "Gauge",
          },
          {
            title: "İçerik güncellenemiyor",
            text: "Küçük bir değişiklik için yazılımcı bekleniyor; panel yok veya kullanılamaz durumda. Bayat içerik güveni yer.",
            icon: "RefreshCw",
          },
          {
            title: "Trafik düşüyor, neden bilinmiyor",
            text: "Search Console'da gösterim/veri kaybı var ama hangi kümenin etkilendiği belli değil. Yenileme, bu teşhisle başlamalı.",
            icon: "LineChart",
          },
          {
            title: "Güvenlik ve bakım riski",
            text: "E sürüm CMS/eklenti yığını, güncelleme geldikçe bozulan tema; bakımsız altyapı hem SEO hem KVKK açısından risk.",
            icon: "Shield",
          },
        ],
        miniCta: "Mevcut siteniz için ücretsiz teknik denetim: hız, indekslenme, bozuk link ve form kontrol listesi.",
      },
      scope: {
        id: "paket-kapsami",
        h2: "Yenileme Kapsamı: Neyi Kapatıyoruz, Neyi Koruyoruz?",
        paragraphs: [
          "Yenileme projesinin başarısı, “neyin değişmeyeceği”ni yazılı söylemekten geçer. Aşağıdaki liste, standart modernizasyon kapsamıdır; içerik stratejisi veya redesign kararı bu planın üstüne eklenir.",
        ],
        checklist: [
          "Ön analiz: mevcut sitenin ayrıntılı taraması — hız (Lighthouse), indekslenmiş URL envanteri, trafik getiren sayfalar, backlink profiline kısa bakış",
          "URL ve içerik envanteri: hangi sayfa korunacak, hangisi birleştirilecek, hangisi kaldırmayacak (decision log)",
          "301 yönlendirme haritası: değiştirilen/birleştirilen her URL için eşleme + test",
          "Bilgi mimarisi: menü, kategori ve breadcrumb planı; başlık hiyerarşisinin korunması",
          "Yeni ön yüz: Next.js + Tailwind + shadcn/ui; mobil öncelikli, tasarım sistemi ile (buton/kart/form standardı)",
          "Görsel hattı: mevcut görsellerin WebP'e dönüştürülmesi, ölçü standardı ve lazy-load politikası",
          "Meta ve şema taşıma: title/description/OG görsellerinin korunması; Organization/Service/LocalBusiness şemalarının yeniden kurulması",
          "Form ve entegrasyon: iletişim formu, e-posta/CRM, telefon ve WhatsApp kanalları; ölçümleme olayları ile birlikte",
          "Panel: içerik sahibinin güncelleyebileceği sayfa/görsel/meta yönetimi",
          "Kanonical/sitemap/robots: yayın gününde eksiksiz kurulum; geçici “noindex staging” kontrolü",
          "Yayın öncesi kontrol listesi: bozuk link taraması, form testleri, hız ölçümü, mobil görsel kontroller",
          "Yayın sonrası izleme: Search Console ve analitik karşılaştırması; ilk iki haftalık anomali takibi",
        ],
      },
      process: {
        id: "surec",
        h2: "Yenileme Süreci: 8 Adım (Trafik Kaybı Riski Yönetimiyle)",
        steps: [
          {
            title: "1. Mevcut durum denetimi (2-4 gün)",
            text: "Hız, indekslenme, trafik getiren sayfalar ve dönüşüm noktaları ölçülür. Çıktı: bulgu listesi + risk haritası (dokunulmaması gereken sayfalar dâhil).",
          },
          {
            title: "2. Kapsam kararı (1-2 gün)",
            text: "Yenileme mi redesign mı, içerik kimin yazacağı, panel derinliği ve takvim netleşir. Çıktı: tek fiyat + tek takvim.",
          },
          {
            title: "3. URL/envanter planı (2-4 gün)",
            text: "Sayfalar tek tek listelenip korunacak/birleştirilecek/kaldırılacak olarak işaretlenir; 301 eşlemesi burada yazılır. Çıktı: taşıma planı.",
          },
          {
            title: "4. Tasarım yönü (3-7 gün)",
            text: "Mevcut marka dili korunarak tipografi, renk ve bileşen seti güncellenir; kritik sayfaların iki ekran tasarımı üzerinden anlaşılır. Çıktı: onaylı arayüz.",
          },
          {
            title: "5. Geliştirme ve içerik taşıma (5-12 gün)",
            text: "Yeni ön yüz kurulur, içerik aktarılır, meta/şema değerleri taşınır, form ve panel bağlanır. Çıktı: staging ortamında gezilebilir site.",
          },
          {
            title: "6. Teknik karşılaştırma testleri (2-3 gün)",
            text: "Hız ölçümü, bozuk link taraması, başlık/meta/şema kontrolü, form ve 301 testleri. Çıktı: yayın öncesi onay listesi.",
          },
          {
            title: "7. Yayın (yarım gün) + DNS/CDN",
            text: "Yayın penceresi seçilir (trafik dip saati), 301'ler ve sitemap devreye alınır; eski site yalnızca yönlendirme için tutulur. Çıktı: canlı site.",
          },
          {
            title: "8. İki haftalık izleme",
            text: "Search Console ve analitik verisi günlük okunur; indeksleme sorunları ve eksik yönlendirmeler bu pencerede kapatılır. Çıktı: yayın öncesi/sonrası rapor.",
          },
        ],
      },
      benefits: {
        id: "faydalar",
        h2: "Yenilemenin Ölçülebilir Sonuçları",
        metrics: [
          { value: "-%45", label: "mobil LCP süresinde tipik iyileşme" },
          { value: "+%20-35", label: "form dönüşümünde artış (CTA ve hız etkisiyle)" },
          { value: "%98", label: "trafik getiren URL'lerin korunma hedefi (301 ile)" },
          { value: "3-6 hafta", label: "ortalama yenileme süresi" },
        ],
        bullets: [
          {
            title: "Hız = gelir",
            text: "Saniyelerle ölçülen iyileşme, reklam ve organik trafiğin ikisinde de dönüşümü artırır; ek bütçe gerektirmez.",
            icon: "Zap",
          },
          {
            title: "SEO birikimi korunur",
            text: "Planlı 301 ve başlık/metadata taşıma ile sıralama kaybı minimumda tutulur; çoğu projede 2-4 hafta içinde eski görünürlük geri gelir.",
            icon: "TrendingUp",
          },
          {
            title: "Bakım maliyeti düşer",
            text: "Eklenti yığını ve tema güncellemeleri biter; bağımlılık listesi kısalır, güvenlik riski azalır.",
            icon: "Shield",
          },
          {
            title: "Güncellenebilirlik",
            text: "Panel sayesinde fiyat, ekip ve referans değişiklikleri anında yapılır; içerik tekrar canlı kalır.",
            icon: "RefreshCw",
          },
        ],
      },
      audience: {
        id: "kimler-icin",
        h2: "Bu Hizmet Kimin İçin Uygun?",
        bullets: [
          { title: "Trafikte düşüş yaşayan siteler", text: "İçerik iyi ama teknik yorgun; yenileme, düşüşü durdurmanın en hızlı yoludur.", icon: "LineChart" },
          { title: "Hazır tema/CMS ile şişmiş siteler", text: "Yüzlerce gereksiz eklenti ve tema kodu; sadeleştirme büyük hız kazancı üretir.", icon: "Layers" },
          { title: "Kurumsal kimliği değişen firmalar", text: "Yeni logo/marka dili sonrası eski site güven vermez; görsel ve içerik birlikte yenilenir.", icon: "Palette" },
          { title: "Reklam verimi düşük işletmeler", text: "Trafik geliyor ama form dolmuyor; dönüşüm katmanı yeniden kurgulanır.", icon: "Target" },
        ],
      },
      whyUs: {
        id: "neden-biz",
        h2: "Neden Tardigrad Software ile Yenileme?",
        bullets: [
          {
            title: "Risk yönetimi önce gelir",
            text: "Yayın öncesi/sonrası ölçüm ve 301 haritası, işin ayrılmaz parçasıdır; “önce yeni site, SEO sonra düşünülür” demiyoruz.",
            icon: "ShieldCheck",
          },
          {
            title: "İçerikle değil, veriyle konuşuruz",
            text: "Kararlar Lighthouse, Search Console ve analitik okumalarına dayanır; bulguları tablo olarak paylaşırız.",
            icon: "BarChart3",
          },
          {
            title: "Tek elden taşıma",
            text: "Tasarım, kod, içerik aktarımı, panel ve teknik SEO aynı ekipte; “biz yapmadık, ajans yapsın” bölgesi yoktur.",
            icon: "Workflow",
          },
          {
            title: "Modern ve sade stack",
            text: "Next.js + TypeScript + Tailwind + shadcn/ui; hız ve erişilebilirlik varsayılan, tema lisansı ve eklenti kiralama maliyeti ise yok.",
            icon: "Code2",
          },
        ],
      },
      faq: {
        id: "sss",
        h2: "Web Sitesi Yenileme Hakkında Sıkça Sorulanlar",
        faq: [
          {
            q: "Yenileme sırasında sıralamam düşer mi?",
            a: "Kontrol altına alınabilir bir risktir, “kesin düşer” diye bir kural yok. Düşüşü yaratan şeyler: URL'lerin korunmaması, başlık/metadata kaybı, iç link yapısının bozulması, hızın kötüleşmesi ve indeksleme gecikmesi. Bunların her biri için önlem alıyoruz: 301 haritası, meta taşıma, iç link eşlemesi, yayın öncesi hız testi ve yayın sonrası Search Console takibi. Deneyimimizde görünürlük 1-2 hafta dalgalanır, sonra eşit veya daha iyi seviyeye gelir.",
          },
          {
            q: "İçeriği de değiştirecek miyiz, yoksa sadece teknik mi?",
            a: "İki kapsam da mümkün. Yalnızca teknik modernizasyon (hız, mobil, panel, şema) en kısa sürelidir; içerik ve bilgi mimarisi değişirse süre ve getiri artar. Önerimiz, en azından “trafik getiren sayfalar” için içerik denetimi: başlık düzeltmesi, eksik SSS bloğu, CTA iyileştirmesi gibi düşük riskli-yüksek kazanç değişiklikleri aynı projede yapmak.",
          },
          {
            q: "Mevcut CMS'imdeki veriler kaybolur mu?",
            a: "Hayır; önce envanter çıkar, sonra taşınır. WordPress gibi sistemlerden içerik, görsel, kategori ve meta verisi yapılandırılmış şekilde aktarılır. Aktarılamayan eklenti işlevleri (ör. bir slider veya özel form) bilinçli olarak yeniden yazılır veya düşürülür; bu karar, taşıma planında yazılı durur. Eski site yayın sonrası yönlendirme için bir süre ayakta kalır.",
          },
          {
            q: "Yenileme mi, yeni site mi daha ucuz?",
            a: "Kısa vadede “sıfırdan yapalım” ucuz görünebilir; çünkü analiz ve taşıma işi yok gibi görünür. Gerçekte trafik getiren sayfaların korunması, 301 planı ve testler projenin en kritik kısmıdır ve atlandığında çoğu zaman ek bir “kurtarma projesi” doğurur. Yenileme, mevcut birikimi koruduğu için toplam maliyette genelde daha avantajlıdır; envanteriniz ağır bozuksa yeni siteyi biz de öneririz.",
          },
          {
            q: "Proje süresince sitem yayında kalır mı?",
            a: "Evet. Çalışma staging ortamında yürür; mevcut site yayında kalmaya devam eder. Yayın için trafiğin en düşük olduğu pencereyi seçeriz ve geçiş, DNS/CDN ayarı ile dakikalar içinde tamamlanır. Kritik dönem (kampanya, sezon) varsa yayını o dönemin dışına planlarız.",
          },
          {
            q: "Hız ve Core Web Vitals gerçekten düzelir mi?",
            a: "Çoğu vakada evet, çünkü şişkinliğin kaynağı bellidir: optimize edilmemiş görsel, tema eklentileri ve render engeli oluşturan script'ler. Sunucu tarafında render, görsel optimizasyonu ve CSS/JS yığışımlaması ile mobil LCP tipik olarak %40-50 iyileşir; CLS sabit görsel kutularıyla neredeyse sıfırlanır. Yayın öncesi ölçümü size göstermeden canlıya almıyoruz.",
          },
          {
            q: "Yenileme sonrası blog ve SEO işlerini kim yapacak?",
            a: "Panel sizin ekibinizde olur; metin ve görsel girişlerini kendiniz yapabilirsiniz. Düzenli içerik üretimi, teknik SEO takibi ve raporlama isterseniz bunu ayrı bir bakım/SEO anlaşması olarak planlıyoruz — zorunlu değil, ama “yaptık bitti” bırakmak yenilemenin kazancını zamanla eritir.",
          },
        ],
      },
      internal: {
        id: "ilgili-hizmetler",
        h2: "Yenilemeyi Tamamlayan Teknik Katmanlar",
        paragraphs: [
          "Yenileme projesi; hız, hosting, sayfa mimarisi ve ölçümleme kararlarıyla birlikte ele alındığında kalıcı olur. Aşağıdaki sayfalar bu başlıkları derinlemesine anlatıyor; şehir sayfalarında yerel taşınma/rekabet notlarını bulabilirsiniz.",
        ],
      },
    },
    ctaTitle: "Önce mevcut sitenizi ölçelim",
    ctaText:
      "Ücretsiz teknik denetimde hız, indekslenme, bozuk link ve form durumunu tablo hâlinde çıkarıyoruz; hangi sayfaların korunması gerektiğini de gösteriyoruz. Ardından tek fiyat, tek takvim ve risk planı geliyor.",
  },
}
