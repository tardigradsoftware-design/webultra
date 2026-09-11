import type { ServiceContent } from "@/types/content"

/**
 * FAZ 2 — grup 4b-iii: SEO danışmanlığı.
 */
export const seoContents3: Record<string, ServiceContent> = {
  "seo-danismanligi": {
    h1: "SEO Danışmanlığı: Hangi İşin Sırayla Yapılacağını Belirleyen Rehberlik",
    definition: [
      "SEO danışmanlığı, bir sitede görünürlüğü artıracak işlerin teşhis edilmesi, önceliklendirilmesi ve ölçülebilir hâle getirilmesidir. Tema, renk veya “kelime stuffing” değil; veri okuma, teknik karar ve içerik stratejisidir. İyi bir danışmanlık, size 40 maddelik bir PDF bırakıp gitmez; ilk üç maddenin kim tarafından, hangi sürede, hangi metrikle kapatılacağını netleştirir.",
      "Piyasadaki iki uç da zarar üretir: bir yanda “30 günde ilk sırada” vaadiyle spam link satan yaklaşım, öte yanda “teknik rapor var, uygulama yok” diyen ve aylarca hiçbir şeyi düzeltmeyen rapor üretimi. Bizim çalışmamız bunun ortasında, uygulama tarafında durur: raporu yazan ile kodu yazan aynı ekip olduğu için, bulunan sorunlar ya kapatılır ya da gerekçesiyle birlikte “yapılmayacaklar” listesine alınır.",
      "Tardigrad Software olarak danışmanlığı iki şekilde veriyoruz: sınırlı süreli denetim + yol haritası (kendi ekibiniz uygular) ve sürenli teknik SEO ortaklığı (biz uygular, ölçer ve raporlarız). İkinci model, ajans/yazılımcı/İç ekip üçgeninde işlerin sıkıştığı firmalar için tasarlandı.",
    ],
    sections: {
      whyNeeded: {
        id: "neden-gerekli",
        h2: "Neden Danışmanlık, Neden Sadece İçerik Değil?",
        paragraphs: [
          "Türkiye'de KOBİ'lerin büyük kısmı ya hiç SEO çalışması yapmıyor ya da tek bir işe odaklanıyor: “blog yazısı yayımla”. Oysa görünürlüğü belirleyen sıralama şudur: teknik iskelet, sayfa/küme mimarisi, içerik kalitesi, hız ve deneyim, son olarak otorite/bağlantı. İkinci ve dördüncü basamaklar bozuksa, beşinci blog yazısı hiçbir şeyi değiştirmez.",
        ],
        bullets: [
          { title: "Yanlış işe bütçe", text: "Site 5 saniyede açılırken veya 800 kopya sayfa üretirken içerik üretmek, en pahalı verimsizliktir.", icon: "Coins" },
          { title: "Ölçüsüzlük", text: "Gösterim, tıklama ve dönüşüm üçlüsü izlenmezse “çalışıyoruz” cümlesinin karşılığı yoktur.", icon: "LineChart" },
          { title: "Sorumluluk boşluğu", text: "Ajans “yazılımcı yapsın”, yazılımcı “içerikçi yapsın” der; üç ayda hiçbir madde kapanmaz.", icon: "Users" },
          { title: "Riskli taktikler", text: "Satın alınan link ve kapı sayfası yığını, kısa vadeli kazanç sonrası kayıp ürettiği gibi elle müdahale riski de taşır.", icon: "AlertTriangle" },
        ],
        miniCta: "Site adresinizi ve hedeflerinizi paylaşın; 15 maddelik ön değerlendirmede hangi basamakta sıkıştığınızı gösterelim.",
      },
      scope: {
        id: "paket-kapsami",
        h2: "Danışmanlık Kapsamı",
        checklist: [
          "Durum tespiti: indekslenme, sorgu/sayfa dağılımı, hız ve mobil, yapısal veri, iç link ve kopya içerik denetimi",
          "Rakip analizi: hedef kümelerde ilk sayfadaki sitelerin içerik derinliği, mimarisi ve otorite göstergeleri",
          "Kelime kümesi ve arama niyeti planı: hangi küme hangi sayfada, hangi sayfa birleştirilecek, hangisi açılacak",
          "Teknik yol haritası: URL/kanonik/noindex kararları, sitemap, şema, tarama bütçesi ve sayfalama stratejisi",
          "İçerik brief standardı: sayfa başına hedef bilgi seti, SSS/şema/adım bloğu ve kalite kontrol listesi",
          "Önceliklendirme: etki × efor matrisi; ilk 90 günün üç iş bloğu ve tahmini kazanç bandı",
          "Uygulama desteği (ortaklık modelinde): geliştirme ekibiyle birlikte işlerin kapatılması ve kod incelemesi",
          "Ölçüm kurulumu: Search Console, GA4, dönüşüm hedefleri ve ayda bir okuma ritüeli",
          "Ekip eğitimi: içerik ve yazılım ekipleri için şablon/kontrol listesi ve kısa eğitim (bağımlılık üretmemek hedefi)",
          "Aylık rapor ve karar notu: ne yapıldı, veri nasıl hareket etti, gelecek ay ne yapılacak ve neden",
          "Risk denetimi: link profili, kapı sayfası/kopya kalıpları ve elle müdahale belirtilerinin erken tespiti",
        ],
      },
      process: {
        id: "surec",
        h2: "Çalışma Süreci: 6 Adım",
        steps: [
          { title: "1. Önden bakış (1-2 gün)", text: "Hızlı tarama ve GSC erişimiyle “büyük üç sorun” belirlenir; çalışmaya değip değmeyeceği söylenir. Çıktı: 3 maddelik ön bulgu.",
          },
          { title: "2. Derin denetim (3-7 gün)", text: "Teknik, içerik, hız ve rakip katmanları birlikte incelenir. Çıktı: bulgu listesi (etki/efor notlu, tekrarlanabilir testlerle).",
          },
          { title: "3. Yol haritası (2-4 gün)", text: "Öncelik sırası, iş sahipleri, takvim ve ölçülecek metrikler netleşir. Çıktı: 90 günlük plan + tek fiyat teklifi (uygulama istenirse).",
          },
          { title: "4. Uygulama (sürekli)", text: "Siz uygulayın ya da biz; her blok sonunda kontrol listesiyle kapanış yapılır. Çıktı: tamamlanan işlerin kaydı.",
          },
          { title: "5. Ölçüm ve okuma (aylık)", text: "Gösterim/tıklama/dönüşüm hareketi, indekslenme ve hız verisi birlikte okunur. Çıktı: aylık not ve sapma analizi.",
          },
          { title: "6. Yeniden önceliklendirme (çeyreklik)", text: "Kazanan sayfalar derinleştirilir, çalışmayan işler çıkarılır; bütçe gerçek veriye göre kaydırılır. Çıktı: güncellenmiş plan.",
          },
        ],
      },
      benefits: {
        id: "faydalar",
        h2: "Danışmanlığın Somut Çıktıları",
        metrics: [
          { value: "3-6 ay", label: "teknik + içerik işlerinin görünürlüğe yansıma süresi (sektöre göre)" },
          { value: "öncelik", label: "etki × efor matrisi; kaynak en çok getiren iki işe gider" },
          { value: "0", label: "kaynağı belirsiz taktik: yapılan her iş gerekçeli ve ölçülü" },
          { value: "1 rapor", label: "ayda tek sayfa: ne yapıldı, ne değişti, sonra ne olacak" },
        ],
        bullets: [
          { title: "Reklam maliyetine alternatif", text: "Organik kanalda kazanılan her sorgu, aynı sorgu için ödenecek tıklama bedelini düşürür; uzun vadede toplam talep maliyeti geriler.", icon: "TrendingDown" },
          { title: "İç ekip güçlenir", text: "Şablon ve kontrol listesi sayesinde ajans değişse de standart korunur; bilgi kişide kalmaz.", icon: "GraduationCap" },
          { title: "Risk azalır", text: "Sitenin yeni sürüme taşınması, redesign ve platform değişikliklerinde görünürlük kaybı yaşayan taraf siz olmazsınız.", icon: "Shield" },
          { title: "Karar netleşir", text: "İçerik mi, hız mı, satış sayfası mı? Öncelik tartisması veri üzerinden yapılır, kırgınlık üretmez.", icon: "Scale" },
        ],
      },
      audience: {
        id: "kimler-icin",
        h2: "Kimler İçin Uygun?",
        bullets: [
          { title: "Trafik var ama talep yok", text: "Ziyaretçi geliyor, form dolmuyor: sorun sayfa mimarisi ve teklif kurgusudur.", icon: "MousePointerClick" },
          { title: "İçerik üretip sonuç alamayanlar", text: "Ayda on yazı yayımlanıyor ama gösterim kıpırdamıyor; genelde teknik taban bozuktur.", icon: "FileWarning" },
          { title: "Redesign/tasima öncesi", text: "Görünürlüğü korumak için 301, kanonik ve içerik eşleme planı şart.", icon: "Truck" },
          { title: "Ajans denetimi isteyenler", text: "Çalışan ajansın yaptığı işi bağımsız gözle ölçmek ve soruları doğru sormak isteyen yönetim.", icon: "ClipboardList" },
        ],
      },
      whyUs: {
        id: "neden-biz",
        h2: "Neden Tardigrad Software?",
        bullets: [
          { title: "Raporla bırakmıyoruz", text: "Kurucu ekip yazılımcı: bulunan teknik madde kodda kapatılabilir. Bu, danışmanlığın en büyük farkı.", icon: "Code2" },
          { title: "Ürün ve site birlikte", text: "MYS, sipariş, katalog ve SEO işleri tek mimaride ele alınır; “site iyi ama satış süreci yok” boşluğu oluşmaz.", icon: "Workflow" },
          { title: "Vaat değil aralık", text: "Sıralama garantisi vermiyoruz; ölçeceğimiz gösterim, tıklama ve form sayılarını taahhüt ediyoruz.", icon: "LineChart" },
          { title: "Bağımlılık üretmiyoruz", text: "Şablon, kontrol listesi ve eğitimle işi ekibe devretmek hedefimiz; danışmana mecbur kalacağınız bir düzen kurmuyoruz.", icon: "GraduationCap" },
        ],
      },
      faq: {
        id: "sss",
        h2: "SEO Danışmanlığı Hakkında Sıkça Sorulanlar",
        faq: [
          {
            q: "Ne kadar sürede sonuç alırız?",
            a: "Doğru soru “hangi işin ne zaman etkisini gösterdiği”. Hız ve teknik düzeltmeler çoğu zaman 2-6 hafta içinde gösterime yansır; içerik ve küme genişletme 3-6 ay, otorite çalışması 6-12 ay ister. Yeni domain veya hiç indekslenmemiş sayfalar için ilk aylar beklemedir. Kimse size “şu tarihte birinci sıra” diyemez; kim derse, o cümlenin kendisi bir uyarı işaretidir.",
          },
          {
            q: "Aylık mı proje bazlı mı çalışıyorsunuz?",
            a: "İki model de var. Denetim + yol haritası tek seferlik bir iş paketidir (tipik olarak 2-3 hafta) ve uygulamasını kendi ekibiniz yapar. Ortaklık modeli ise aylık çalışır: uygulama, ölçüm ve aylık karar notu dâhil. Hangisinin doğru olduğunu denetim sonunda biz söylüyoruz; “sürekli ajans ihtiyacınız var” cümlesini kurmaca gerekçe olarak kullanmıyoruz.",
          },
          {
            q: "Link satın alma yapıyor musunuz?",
            a: "Hayır. Satın alınan bağlantı paketleri, Google'ın spam politikaları kapsamında risktir ve çoğu zaman değersiz dizin/press-bülten ağlarından gelir. Bunun yerine kazanan içerik, yerel bahsi, basın/dizin kayıtları ve faydalı araçlar gibi organik bahsi üreten yolları çalışıyoruz. Mevcut sitenizde şüpheli bir bağlantı profili varsa, reddetme (disavow) kararını veri göstererek öneriyoruz — bu nadiren gerekir, keyfi kullanılmaz.",
          },
          {
            q: "İçerikleri siz mi yazacaksınız?",
            a: "İki biçim çalışıyoruz: brief ve kontrol listesi verip ekibinize yazdırmak, ya da içerikleri birlikte üretmek. Hangisinin iyi sonuç verdiği ekibe bağlı: bilgi birikimi sizde olan teknik konularda brief daha iyidir, çünkü gerçek uzmanlığı taklit etmek mümkün değil. Öte yandan boş kalan hizmet sayfaları veya yerel sayfalar için yazımı üstlenmek işi hızlandırır. Her iki durumda da üretilen metnin kalite kontrolünden biz geçeriz.",
          },
          {
            q: "AI ile içerik üretimi hakkında ne düşünüyorsunuz?",
            a: "Araç olarak evet, strateji olarak hayır. Ölçek gerektiren yerel/sayfa setlerinde ve brief üretiminde yapay zekâ hız kazandırır; ancak sıradan, deneyimsiz metinler Google'da değil rakip sitelerde de aynı kalıpla görünür. Bize düşen, modeli kendi uzmanlık verinizle beslemek ve üretilen içeriği gerçekten bilgilendirici hâle getirmektir; “1.000 yazı ürettik” yaklaşımı ise çoğu sitede sonuç değil risk üretmiştir.",
          },
          {
            q: "Rakibimiz bizden iyi görünüyor; ne yapıyor olabilir?",
            a: "Genelde üç şeyden biri: daha doğru sayfa eşlemesi (her kümeye tek, derin sayfa), daha iyi site mimarisi ve iç link, ya da gerçek kullanıcı deneyimi (hız, mobil, kolay temas). Nadiren “gizli taktik”. Denetimde bu üç katmanı karşılaştırmalı olarak ölçüyoruz; çoğu vakada aradaki fark, bir-iki aylık düzenli işle kapanabilecek türdendir.",
          },
        ],
      },
      internal: {
        id: "ilgili-hizmetler",
        h2: "Danışmanlığın Uygulamaya Döndüğü Alanlar",
        paragraphs: [
          "Yol haritası; teknik SEO, sayfa mimarisi, yapılandırılmış veri ve ölçüm kurulumuyla birlikte yürür. Aşağıdaki sayfalar bu işleri; şehir sayfaları ise yerel rekabet analizini anlatıyor.",
        ],
      },
    },
    ctaTitle: "Önce 15 maddelik ön değerlendirme",
    ctaText:
      "Site adresinizi ve hedeflerinizi paylaşın; hangi basamakta sıkıştığınızı gösteren kısa bir denetim ve 90 günlük öncelik listesiyle dönelim. Zorunlu bir taahhüt yok.",
  },
}
