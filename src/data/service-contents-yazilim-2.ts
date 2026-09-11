import type { ServiceContent } from "@/types/content"

/**
 * FAZ 2 — grup 2b: sipariş, stok ve ürün/tedarikçi yönetimi.
 */
export const yazilimContents2: Record<string, ServiceContent> = {
  "proforma-siparis-yonetimi": {
    h1: "Proforma ve Sipariş Yönetimi: Tekliften Tahsilata Kopmayan Zincir",
    definition: [
      "Proforma ve sipariş yönetimi, satın alma veya satış tarafındaki “anlaşma → sipariş → irsaliye → fatura → tahsilat” adımlarının tek kayıt zinciriyle izlendiği sistemdir. Proforma, ödeme/üretim için esas alınan ön belgedir; sipariş ise bu ön belgenin bağlayıcı hâle gelmiş hâlidir. Ayrı programlarda değil, aynı satır kaydında tutulduğunda stok rezervasyonu, termin takibi ve tahsilat tarihi kendiliğinden doğru çalışır.",
      "Tipik bir KOBİ'de bu akış, Excel, muhasebe programı ve WhatsApp yazışmaları arasında bölünür. Sonuç: hangi siparişin ne kadarının sevk edildiği bilinmez, kısmi sevkiyatlarda kalan bakiye unutulur, proforma ile fatura tutarsızlığı tartışma çıkarır, stok “görünürde var, gerçekte yok” olur. Zinciri tek kayda indirmek, bu beş kronik sorunu yapısal olarak kapatır.",
      "Tardigrad Software olarak sipariş modülünü ya mevcut ön muhasebe/ERP sisteminize entegrasyon katmanıyla kuruyoruz ya da sipariş akışınız standart kalıbın dışındaysa baştan sipariş yönetim sistemi olarak geliştiriyoruz. İkisinde de karar aynı: satır verisi tek yerde üretilir, belge sadece çıktısı olur.",
    ],
    sections: {
      whyNeeded: {
        id: "neden-gerekli",
        h2: "Sipariş Takibi Koptuğunda Neler Kaybolur?",
        paragraphs: [
          "Sipariş süreci, işletmenin nakit akışını doğrudan üreten hattır. Bu hatta görünürlük kaybı, bilançoda en hızlı hissedilen kayıptır. Aşağıdaki dört tablo, “sevkiyat ve tahsilat karışıyor” cümlesiyle gelen firmalardan tanıdık:",
        ],
        bullets: [
          { title: "Kısmi sevkiyat unutkanlığı", text: "Siparişin %80'i gitti, bakiye kimse tarafından takip edilmiyor; müşteri “yarısı eksik” diyor, siz hatırlamıyorsunuz.", icon: "Boxes" },
          { title: "Proforma–fatura farkı", text: "Fiyat, koli adedi veya vade farklı; pazarlık masasında müşterinin elinde kendi proforması var.", icon: "FileText" },
          { title: "Stok kırılması", text: "Sipariş alındı ama mal ayrılmadı; iki müşteriye aynı palet söz verildi.", metric: "çift satış", icon: "PackageX" },
          { title: "Tahsilat gecikmesi", text: "Vade bilgisi siparişle ilişkili değilse, geciken ödeme görünmez; nakit planı şaşar.", icon: "Wallet" },
        ],
        miniCta: "Sipariş akışınızı (proforma → sevkiyat → fatura) birlikte haritalayalım; nerede veri yitirdiğinizi gösterelim.",
      },
      scope: {
        id: "paket-kapsami",
        h2: "Sistemde Neler Olur?",
        checklist: [
          "Proforma üretimi: tekliften tek tuşla, satır/iskonto/KDV korunarak; geçerlilik ve ödeme planı alanları",
          "Sipariş kaydı: müşteri referansı, termin tarihi, ödeme koşulu, sevk adresi, özel not ve ek doküman",
          "Stok rezervasyonu: sipariş anında ayrılan miktar, “serbest stok / ayrılan stok” ayrımı",
          "Kısmi sevkiyat ve irsaliye: sipariş satırı bazında kalan bakiye takibi, çoklu sevk desteği",
          "İade ve düzeltme: kısmi iade, fiyat farkı faturası, iptal edilen satırın stok geri dönüşü",
          "Fatura kesimi: sevkiyatla eşleşen fatura, tek faturada birleştirme, e-arşiv/e-fatura çıkışı",
          "Tahsilat planı: vade, kısmi tahsilat, gecikme uyarısı ve cari bakiye ilişkisi",
          "Üretim/tedarik bağlantısı: siparisten iş emri veya satın alma talebi üretme (talep bazlı tedarik)",
          "Onay ve yetki: limit üstü iskontoda yönetici onayı, termin onayı, kredi limiti aşımında blokaj",
          "Raporlama: açık siparişler, termin riski, sevk edilemeyen satırlar, müşteri bazlı ortalama sipariş döngüsü",
          "Entegrasyonlar: ön muhasebe/ERP, kargo firmaları, e-fatura sağlayıcısı, banka ekstre içe aktarımı",
        ],
      },
      process: {
        id: "surec",
        h2: "Kurulum Süreci: 6 Adım",
        steps: [
          { title: "1. Akış ve belge envanteri (2-3 gün)", text: "Hangi belgenin kim tarafından düzenlendiği, nerede çift girildiği çıkarılır. Çıktı: mevcut akış diyagramı + sorun listesi." },
          { title: "2. Durum makinesi (1-3 gün)", text: "Siparişin hâlleri (taslak, onaylı, üretime alındı, kısmen sevk, tamamlandı, kapandı) ve geçiş koşulları yazılır. Çıktı: onaylı durum şeması." },
          { title: "3. Veri ve entegrasyon planı (1-2 gün)", text: "Ürün, müşteri ve stok verisinin kaynağı; muhasebe/kargo/e-fatura tarafında hangi alanın kimde kalacağı netleşir. Çıktı: alan eşleme tablosu." },
          { title: "4. Geliştirme (8-15 gün)", text: "Sipariş editörü, stok hareketleri, sevkiyat ve fatura akışı, panel ve raporlar kodlanır. Çıktı: test ortamında uçtan uca sipariş." },
          { title: "5. Açılış verisi ve pilot (2-5 gün)", text: "Açık sipariş bakiyeleri ve stok sayımı aktarılır; tek müşteri grubuyla bir haftalık pilot yapılır. Çıktı: doğrulanmış bakiyeler." },
          { title: "6. Yayın + eğitim + 30 gün destek", text: "Canlıya geçiş, depo/ofis eğitimi ve ilk ay izleme; kalan bakiye mutabakatı bu pencerede kapatılır. Çıktı: canlı sistem." },
        ],
      },
      benefits: {
        id: "faydalar",
        h2: "Kazanımlar: Süre, Hata ve Nakit",
        metrics: [
          { value: "-%50", label: "sipariş giriş ve kontrol süresi (tekliften kopyalama ile)" },
          { value: "satır bazlı", label: "kalan bakiye ve stok ayrımları anlık görünür" },
          { value: "-%30", label: "gecikmiş tahsilatta vade planı ile düşüş" },
          { value: "tek kaynak", label: "proforma–fatura tutarsızlığı sona erer" },
        ],
        bullets: [
          { title: "Depo ile ofis aynı şeyi görür", text: "Sevk edilen ve kalan miktar tek ekranda; “telefonla sorma” devri biter.", icon: "Warehouse" },
          { title: "Söz verilebilir stok", text: "Rezervasyon mantığı sayesinde yeni sipariş, ayrılmış stoku satmaz.", icon: "ShieldCheck" },
          { title: "Nakit akışı öngörülebilir", text: "Vade ve tahsilat planı siparişe bağlı olduğu için haftalık nakit tahmini gerçek veriyle yapılır.", icon: "LineChart" },
          { title: "Müşteri güveni", text: "Kargo takip numarası ve eksik satır bilgisi otomatik bildirilir; şikâyet aramaları azalır.", icon: "Truck" },
        ],
      },
      audience: {
        id: "kimler-icin",
        h2: "Kimler İçin Uygun?",
        bullets: [
          { title: "Toptan ve bayi kanalına satanlar", text: "Çok sayıda müşteri, kısmi sevk, vade ve iskonto karmaşası yaşayan firmalar.", icon: "Boxes" },
          { title: "Talebe üretim yapanlar", text: "Sipariş gelmeden üretim/stok tutmayan; termin ve iş emri zinciri kritik olan imalatçılar.", icon: "HardHat" },
          { title: "E-ticaret + mağaza karması", text: "Aynı stok havuzundan birden çok kanalın sattığı yapılar; çift satışı engellemek önceliklidir.", icon: "ShoppingBag" },
          { title: "İhracat ve ithalat", text: "Proforma invoice, çeki listesi, döviz vade ve kısmi sevkiyat takibi gereken firmalar.", icon: "Globe" },
        ],
      },
      whyUs: {
        id: "neden-biz",
        h2: "Neden Tardigrad Software?",
        bullets: [
          { title: "Belge değil hareket odaklıyız", text: "Stok ve tahsilat doğruluğu, belge sayısından değil hareket kaydından gelir; modeli buna göre kuruyoruz.", icon: "Activity" },
          { title: "Muhasebenizi bozmadan çalışır", text: "Fatura ve cari tarafı çoğu projede mevcut ön muhasebe/ERP'de kalır; biz sipariş ve sevkiyat katmanını kurar, veriyi temiz aktarırız.", icon: "Plug" },
          { title: "Kısmi durumları baştan tasarlarız", text: "İade, fiyat farkı, eksik sevk, iptal; projeleri batıran bunlardır. Test senaryoları bu durumlara göre yazılır.", icon: "Workflow" },
          { title: "Depo ve ofis birlikte eğitilir", text: "Sistemin tutması için ekran akışını sahadan alıyoruz; barkod/termal çıktı gereksinimleri kapsamda baştan yer alır.", icon: "ScanLine" },
        ],
      },
      faq: {
        id: "sss",
        h2: "Proforma ve Sipariş Yönetimi Hakkında Sıkça Sorulanlar",
        faq: [
          {
            q: "Proforma ile fatura arasındaki fark nedir, sistemde neden ikisi tutulur?",
            a: "Proforma, ödeme veya üretim için esas alınan ön belgedir; vergi kanunları açısından fatura yerine geçmez ama ticari olarak fiyat ve şartları bağlar. Fatura ise sevkiyat/fatura kesimi anında mali hükmü olan belgedir. Sistemde ikisini ayrı tutup satırlarını eşliyoruz; böylece “proformada şu fiyat vardı” tartışması kayıtla kapanıyor, fatura proformanın satırlarından üretildiği için tutarsızlık oluşmuyor.",
          },
          {
            q: "Mevcut programımızda (Logo, Mikro, Paraşüt vb.) sipariş zaten var; neden ayrı sistem?",
            a: "Birçoğunda “sipariş” var, ama satış ekibinin çalışma biçimiyle uyuşmaz: revizyon, alternatif ürün, kısmi termin ve teklif geçmişi ya yoktur ya ağırdır. İki sağlıklı yol var: (1) mevcut programı sipariş kaynağı yapıp satış tarafına hafif bir arayüz + otomasyon eklemek; (2) sipariş ve sevkiyatı ayrı yönetip muhasebeye yalnızca fatura/cari verisi göndermek. Hangisini seçeceğimize entegrasyon derinliğine göre karar veriyoruz.",
          },
          {
            q: "Stok rezervasyonu tam olarak neyi engeller?",
            a: "Sipariş onaylandığında ilgili miktar “ayrılan stok” olur; serbest stok, satılabilir miktardan düşülür. Böylece aynı paleti iki müşteriye satmazsınız. Kritik nokta ayrımın politikasıdır: rezerve stok kaç günde serbest döner, acil sipariş rezervasyonu kırabilir mi, iade gelen mal ne zaman satılabilir olur. Bu kuralları sizle netleştirip motora yazıyoruz.",
          },
          {
            q: "Kısmi sevkiyat ve kalan bakiye takibi nasıl çalışır?",
            a: "Sipariş satırı bazında “sipariş edilen / sevk edilen / faturalanan / kalan” dört kolon tutulur. Kısmi sevk, satırı kapatmadan bakiyeyi günceller; kalan bakiye hem raporda hem müşteri kartında görünür. Termin riski olan satırlar (gecikmiş, eksik sevk) panelde renklenir; böylece bakiye “unutulan satır” olmaz.",
          },
          {
            q: "Kargo/lojistik entegrasyonu şart mı?",
            a: "Şart değil ama en hızlı geri dönüş veren parçalardan biri. Anlaşmalı kargo firmasının API'si ile irsaliyeden kargo etiketi ve takip numarası üretimi, müşteriye otomatik bilgilendirme ve iade talebi akışı kurulur. Entegrasyon yoksa barkod/Excel aktarımı ile ara çözüm kuruyor, sonra API'ye geçiyoruz.",
          },
          {
            q: "Geçmiş sipariş verilerini taşımalı mıyız?",
            a: "Tamamını değil. Genelde müşteri ve ürün kartları ile açık bakiyeler (kalan sevkiyat, bekleyen tahsilat) taşınır; geçmiş siparişler arşiv olarak ya içe aktarılır ya da eski sistemde sorgulanabilir bırakılır. Açılış stoğu fiziki sayımla eşitlenir; sayım yapılmadan açılış stoğu girmek, sistemin ilk haftasında güven kaybeden en yaygın hatadır.",
          },
        ],
      },
      internal: {
        id: "ilgili-hizmetler",
        h2: "Sipariş Zincirinin Diğer Halkaları",
        paragraphs: [
          "Sipariş; stok, tedarik, teklif ve entegrasyon katmanlarıyla birlikte anlam kazanır. Aşağıdaki sayfalar bu halkaları, şehir sayfaları ise bölgesel müşteri ve lojistik dinamiklerini anlatıyor.",
        ],
      },
    },
    ctaTitle: "Açık sipariş bakiyelerinizden başlayalım",
    ctaText:
      "Kısmi sevk ve tahsilat tarafında nerede kaybettiğinizi konuşalım; durum makinesi ve entegrasyon planı netleşince tek fiyat ve takvimle geliyoruz.",
  },

  "stok-yonetimi": {
    h1: "Stok Yönetim Sistemi: Elinizdeki Malı Görmek, Eksiltmemek, Bağlamamak",
    definition: [
      "Stok yönetim sistemi; malzeme, yarı mamul ve mamullerin nerede ne kadar olduğunu, hangi hareketle değiştiğini ve ne zaman sipariş edilmesi gerektiğini anlık olarak izleyen yazılımdır. Üç işi aynı anda yapar: doğru sayı (gerçek stok), doğru ayrım (satılabilir, ayrılan, blokeli, yolda) ve doğru karar (min/max, fire, yeniden sipariş noktası).",
      "“Stok fazlalığı” ve “stok tükenmesi” aynı madalyonun iki yüzüdür ve ikisinin de sebebi çoğu zaman veri eksikliği değil, veri karmaşasıdır. Raf sayısı ile sistemin sayısı farklıdır; ayrılan stok düşülmemiştir; iade gelen mal satılabilir sayılmıştır; birim (koli/adet/kg) dönüşümleri yanlış tanımlıdır. Bu dört hata, ya sermayeyi rafta bağlar ya da satış kaçırır.",
      "Tardigrad Software olarak stok çözümünü ya bağımsız bir depo/stok paneli olarak kuruyoruz ya da mevcut ön muhasebe/ERP sisteminizin üstüne depo katmanı (barkod, sayım, lokasyon, raf) ekliyoruz. E-ticaret veya mağaza kanallarınız varsa, aynı stok havuzunu kanallara dağıtan senkron katmanını da kuruyoruz.",
    ],
    sections: {
      whyNeeded: {
        id: "neden-gerekli",
        h2: "Stok Verisi Güvenilmezse Ne Olur?",
        paragraphs: [
          "Stok, bilançoda en büyük kalemlerden biri olmasına rağmen çoğu işletmede en seyrek doğrulanan veridir. Aşağıdaki dört tablo, sayımdan çıkmış ama üç ay sonra yeniden dağılmış depolardan tanıdık:",
        ],
        bullets: [
          { title: "Rafta var, sistemde yok (veya tam tersi)", text: "Satışçı “var” diyemiyor, müşteri bekliyor; ya da “var” deniyor ve sevkiyat gecikiyor.", icon: "PackageX" },
          { title: "Sermaye rafta uyuyor", text: "Hareketsiz kalemler için para bağlanır; nakit ihtiyacı doğarken raflar dolu görünür.", metric: "%15-25 atıl", icon: "Coins" },
          { title: "Birimi yanlış, sayısı yanlış", text: "Koli/adet/kg dönüşümü hatalıysa tüm sipariş noktaları şaşar; “azaldı sanıp” ısmarlanır.", icon: "Ruler" },
          { title: "Sayım işkencesi", text: "Yılda iki kez, üç gün, kâğıt formlarla sayım; bulunan farklar kayda geçmediği için birikerek devam eder.", icon: "ClipboardList" },
        ],
        miniCta: "Bir ürün grubunuzda hızlı bir sayım + fire analizi yapalım; hangi kalemlerin sermaye bağladığını gösterelim.",
      },
      scope: {
        id: "paket-kapsami",
        h2: "Stok Yönetim Sisteminin Kapsamı",
        checklist: [
          "Ürün ve varyant kartı: barkod/EAN, birim dönüşümleri, kategori, tedarikçi, raf/lokasyon, KDV ve maliyet yöntemi",
          "Hareket defteri: giriş, çıkış, transfer, sayım farkı, fire, iade; her hareketin belgesi, sorumlusu ve zamanı",
          "Lokasyon yönetimi: depo, raf, bölme; çoklu depo ve depolar arası transfer",
          "Stok durum ayrımı: fiili, ayrılan/rezerve, blokeli (kalite kontrol/hasarlı), yolda (transit) miktarlar",
          "Min/max ve yeniden sipariş noktası: ortalama tüketim, tedarik süresi ve güvenlik stoğu hesabı",
          "Maliyet yöntemi: ortalama maliyet / FIFO; son giriş maliyeti ve maliyet değişim geçmişi",
          "Barkod/termal çıktı: elleçleme, toplu sevkiyat doğrulama ve sayım ekranları; mobil okuyucu veya telefon kamerası",
          "Sayım modülü: kısımlı sayım, çift sayım, fark onayı ve otomatik düzeltme belgesi",
          "Konsinye ve teslim alma modelleri: satıcıya ait görünen ama rafta duran stokun ayrı tutulması",
          "Kritik stok ve son kullanma: lot/seri numarası, SKT takibi, FEFO (ilk giren ilk çıkar) kuralı",
          "Raporlar: devir hızı, ölü stok, raf ömrü (ageing), tedarikçi bazlı servis oranı, fire oranı, stok değerlemesi",
          "Entegrasyonlar: ön muhasebe/ERP, e-ticaret kanalları, kargo, üretim iş emri ve satın alma",
        ],
      },
      process: {
        id: "surec",
        h2: "Kurulum Süreci: 7 Adım",
        steps: [
          { title: "1. Depo ve akış analizi (2-4 gün)", text: "Mal kabulden sevkiyata fizik akış ve sorumlular çıkarılır; fiili durum ile sistem farkı görülür. Çıktı: akış şeması + sorun listesi." },
          { title: "2. Ürün ve birim standardı (2-5 gün)", text: "Kart alanları, kategori ağacı, birim dönüşümleri ve adlandırma kuralları netleşir. Çıktı: veri sözlüğü + şablon." },
          { title: "3. Politika kararı (1-2 gün)", text: "Maliyet yöntemi, rezerv mantığı, fire ve iade kuralları, sayım periyodu yazılı olarak belirlenir. Çıktı: onaylı stok politikası." },
          { title: "4. Açılış sayımı ve veri yükleme (3-10 gün)", text: "Ürün grubu grubu sayım yapılır, farklar tutanaklanır ve sistem bu fiili rakamlarla açılır. Çıktı: doğrulanmış açılış stoğu." },
          { title: "5. Geliştirme/entegrasyon (8-16 gün)", text: "Panel, hareket ekranları, barkod/sayım modülleri ve muhasebe/kanal senkronu kurulur. Çıktı: test ortamında çalışan sistem." },
          { title: "6. Pilot depo ve eğitim (3-7 gün)", text: "Tek depo veya tek ürün grubuyla canlı gibi çalışılır; elleçleme süresi ve hata oranı ölçülür. Çıktı: iyileştirilmiş akış + eğitim kaydı." },
          { title: "7. Yaygınlaştırma + aylık gözlem", text: "Tüm depolara açılır; ilk üç ay aylık stok değerleme ve fark raporları paylaşılır. Çıktı: canlı sistem + rapor seti." },
        ],
      },
      benefits: {
        id: "faydalar",
        h2: "Stok Disiplininin Sayısal Karşılığı",
        metrics: [
          { value: "-%10-20", label: "stok bağlama (hareketsiz kalem azalması) — ilk yıl gözlemi" },
          { value: "%98+", label: "stok doğruluk hedefi (sayım + hareket disipliniyle)" },
          { value: "-%50", label: "sayım süresi (kısımlı sayım ve mobil okuma)" },
          { value: "anlık", label: "satılabilir stok görünürlüğü; çift satış riski düşer" },
        ],
        bullets: [
          { title: "Nakit serbest kalır", text: "Ölü stok azalınca aynı ciro daha az sermaye bağlar; finansman maliyeti düşer.", icon: "Coins" },
          { title: "Satış kaçmaz", text: "Doğru “satılabilir” sayısı, söz verilebilir termin demektir; iptal ve rakibe giden sipariş azalır.", icon: "TrendingUp" },
          { title: "Çalma/fire görünür olur", text: "Hareket kaydı ve çift sayım disiplini, kaybı istisna hâline getirir; kişisel takip yerine sistem bakar.", icon: "ShieldCheck" },
          { title: "Tedarikçi pazarlığı güçlenir", text: "Tedarikçi bazlı servis oranı ve gerçek tüketim verisi, fiyat ve termin müzakeresinde elinizi büyütür.", icon: "Handshake" },
        ],
      },
      audience: {
        id: "kimler-icin",
        h2: "Kimler İçin Uygun?",
        bullets: [
          { title: "Bayiye/müşteriye çok kalem satanlar", text: "Kalem sayısı 500'ü geçen toptancı ve dağıtıcılar; elle takip artık imkânsızdır.", icon: "Boxes" },
          { title: "İmalatçılar", text: "Malzeme-yarı mamul-mamul zinciri, reçete ve fire takibi gereken üretim yapan firmalar.", icon: "Factory" },
          { title: "Çok kanallı satış", text: "E-ticaret, mağaza ve toptan satışın aynı stoku paylaştığı markalar; senkron kritik.", icon: "ShoppingBag" },
          { title: "SKT/lot takibi gerekenler", text: "Gıda, kozmetik, kimya, medikal; FEFO ve lot geri izleme zorunluluğu olan sektörler.", icon: "CalendarClock" },
        ],
      },
      whyUs: {
        id: "neden-biz",
        h2: "Neden Tardigrad Software?",
        bullets: [
          { title: "Önce sayım disiplini", text: "Yazılımdan önce açılış sayımı ve fark politikasını kurarız; yanlış açılış stoğu ile başlayan proje ilk ayda güven kaybeder.", icon: "ClipboardList" },
          { title: "Sahayı tanıyoruz", text: "Depo ekranı, okuyucu, termal çıktı ve çift sayım; “ofiste güzel, depoda kullanılmaz” tasarımı yapmıyoruz.", icon: "ScanLine" },
          { title: "Muhasebe ile barışık", text: "Maliyet ve stok değerlemesi tarafında çift kayıt yerine tek doğruluk kaynağı ilkesiyle entegre oluruz.", icon: "Plug" },
          { title: "Kademeli kurulum", text: "Önce hareket ve sayım, sonra lokasyon ve lot; kurum aynı anda beş modülle boğulmaz.", icon: "Layers" },
        ],
      },
      faq: {
        id: "sss",
        h2: "Stok Yönetim Sistemi Hakkında Sıkça Sorulanlar",
        faq: [
          {
            q: "Ön muhasebe programımız stok da gösteriyor; ayrıca sisteme gerek var mı?",
            a: "Stok “miktarını” göstermek ile stok yönetmek farklı işler. Ön muhasebe çözümleri giriş/çıkış belgelerini tutar; lokasyon, rezerv, sayım, lot/SKT, fire ve çoklu depo ayrımı, barkodla elleçleme çoğunda zayıftır. Mal kabulden sevkiyata fizik akışı yönetmeniz gerekiyorsa depo katmanı şart; sadece aylık değerleme yeterliyse mevcut programı düzgün kullanmak daha akıllıca olabilir. Kararı depo hareket sayınıza göre veriyoruz.",
          },
          {
            q: "Barkod/terminal şart mı? Telefon kamerası yeterli olur mu?",
            a: "Kalem adedi ve günlük hareket sayısına göre değişir. Düşük hacimde telefon kamerası ile barkod okuma (aynı ekran üzerinde) yeterlidir ve ek donanım maliyeti doğmaz; yüksek hacimde endüstriyel el terminali ve termal yazıcı hız farkı yaratır. Pilot ölçümde elleçleme süresine bakarak karar veriyoruz; telefona göre planlanmış bir akışı terminale taşımak kolaydır, tersi değil.",
          },
          {
            q: "Sayım farkları sisteme nasıl yansır, kim onaylar?",
            a: "Sayım modülünde fark, otomatik düzeltme yerine onaylı bir belge üretir: sayan kişi, kontrol eden kişi, fark miktarı ve gerekçe. Onaylanan fark stok hareketine dönüşür ve raporlarda “sayım farkı” olarak ayrı izlenir. Bu ayrım önemlidir; farkları kaynağı belirsiz düzeltmelerle kapatırsanız hem maliyet hem sorumluluk verisi kirlenir.",
          },
          {
            q: "E-ticaret kanalında stok kırmasını nasıl önlüyorsunuz?",
            a: "Tek stok havuzu + kanal bazlı tampon politikası kuruyoruz: kanala gösterilen miktar, fiili stoktan ayrılan pay düşülerek hesaplanır; sipariş gelince rezerv satır bazlı yapılır. Yoğun dönemlerde (kampanya, indirim günleri) eşik değer yükselir ve kritik seviyenin altında kanal stoğu otomatik kapanır. Tam senkron yerine gecikmeli (30-60 sn) kuyruk kullanmak, ani satış patlamalarında daha güvenlidir.",
          },
          {
            q: "Ne zaman sipariş vermem gerektiğini sistem nasıl anlar?",
            a: "Son 3-6 aylık gerçek tüketim, tedarik süresi ve kabul edilebilir kesinti riskiyle yeniden sipariş noktası hesaplanır: sipariş noktası = ortalama günlük tüketim × tedarik süresi + güvenlik stoğu. Mevsimsellik güçlüyse aynı formülü dönem ağırlıklı çalıştırıyoruz. Çıktı, “şu üründen şu kadar ısmarla” önerisidir; onayı siz verirsiniz, sistem sizi uyarmış olur.",
          },
          {
            q: "Proje ne kadar sürer ve maliyeti neye göre değişir?",
            a: "Dört değişken belirleyici: kalem ve hareket hacmi, lokasyon/lot/SKT gibi izleme derinliği, entegrasyon sayısı (muhasebe, e-ticaret, kargo) ve donanım (terminal/yazıcı) ihtiyacı. Tipik bir tek depo kurulumu 4-8 hafta, çok depolu/üretim bağlantılı projeler 8-16 hafta sürer. Açılış sayımı için ayıracağınız insan kaynağını da takvime yazıyoruz; en sık ertelenen madde budur.",
          },
        ],
      },
      internal: {
        id: "ilgili-hizmetler",
        h2: "Stoğu Verimli Kılan Bağlantılar",
        paragraphs: [
          "Stok verisi; sipariş, tedarikçi yönetimi, ürün kataloğu ve raporlama ile birleştiğinde karar üretir. Aşağıdaki sayfalar bu katmanları, şehir sayfaları ise bölgesel depo/lojistik kurgusunu anlatıyor.",
        ],
      },
    },
    ctaTitle: "Önce bir ürün grubunda doğruluk testi yapalım",
    ctaText:
      "Sayım farkınız, hareketsiz stok listeniz ve kanal kırılmalarınızı konuşuyoruz; kapsam, maliyet ve pilot depo kararı tek sayfada netleşsin.",
  },

  "urun-tedarikci-yonetimi": {
    h1: "Ürün ve Tedarikçi Yönetimi: Tek Kayıttan Alan Katalog ve Satın Alma",
    definition: [
      "Ürün ve tedarikçi yönetimi; sattığınız her kalemin teknik bilgisinin, fiyat/maliyet geçmişinin, tedarikçisinin ve termin sürelerinin tek bir kayıtta tutulması, tüm kanalların bu kayıttan beslenmesidir. Ürün kartı ile tedarikçi kartı birbirine bağlıdır: birincisi “neyi satıyoruz”, ikincisi “neye mal oluyor, kim ne kadar sürede getiriyor” sorularını yanıtlar.",
      "Bu iki kayıt doğru kurulmadığında, stok ve sipariş sistemi ne kadar iyi olursa olsun karar kalitesi düşer: maliyet güncelliğini yitirir, kâr marjı kâğıt üstünde kalır, alternatif ürün bilgisi sadece satın almacının hafızasında durur, fiyat artışının hangi ürüne ne zaman yansıyacağı bilinmez. KOBİ'lerde en sık kayıp, tedarikçi fiyat değişiminin satış fiyatına geç yansıması ve marjı sessizce eritmesidir.",
      "Tardigrad Software olarak ürün/tedarikçi modülünü ya kurduğumuz katalog ve sipariş sistemlerinin çekirdeğine yerleştiriyor ya da mevcut yapınıza ayrı bir merkez olarak ekliyoruz. Amaç, pazarlama, satış, satın alma ve muhasebenin aynı ürün kaydına bakması; veri bir kez girilir, herkes kendi ihtiyacını aynı yerden alır.",
    ],
    sections: {
      whyNeeded: {
        id: "neden-gerekli",
        h2: "Ürün Verisi Dağınık Olduğunda Neler Tükenir?",
        paragraphs: [
          "Ürün verisi, şirkette en çok kopyalanan ama en az sahiplenilen bilgidir. Pazarlama bir Excel'de, satış başka bir tabloda, satın alma tedarikçi mailinde tutar; üçü de “güncel” olduğunu düşünür.",
        ],
        bullets: [
          { title: "Eski fiyatla satış", text: "Maliyet artmış, satış fiyatı aynı; yıl sonunda kârın eridiği görülür ama hangi üründen olduğu bilinmez.", icon: "TrendingDown" },
          { title: "Alternatif ürün bilinmez", text: "Kalem tükenince satış durur; oysa aynı işi gören ikinci bir tedarikçi/ürün kayıttadır ama bulunamaz.", icon: "Layers" },
          { title: "Kopyala-yapıştır içerik", text: "Site, katalog ve teklif için üç ayrı yerden metin üretilir; bilgi tutarsızlığı müşteriye kadar yansır.", icon: "Copy" },
          { title: "Tedarikçi performansı ölçülmez", text: "Kim geç teslim ediyor, kim kalite iadesi yapıyor? Kayıt yoksa pazarlık da yoktur.", icon: "FileSearch" },
        ],
        miniCta: "Ürün listeniz ve tedarikçi yapınız üzerinden bir alan denetimi yapalım; hangi verinin gerçekten eksik olduğunu görelim.",
      },
      scope: {
        id: "paket-kapsami",
        h2: "Modülün Kapsamı",
        checklist: [
          "Ürün kartı: kod/barkod, marka/seri, teknik özellik seti, görsel ve dokümanlar, KDV, birim ve dönüşümler, raf ömrü",
          "Fiyat ve maliyet katmanı: alış fiyatı geçmişi, fiyat artış takvimi, satış fiyatı kuralları, segment/bayi bazlı fiyat",
          "Tedarikçi kartı: yetkili/iletişim, ödeme ve teslim koşulları, garanti/iade politikası, belge arşivi (sözleşme, sertifika)",
          "Ürün–tedarikçi eşlemesi: ana tedarikçi + alternatifler, birim fiyat, minimum sipariş, termin süresi, sipariş çokluğu",
          "Kategori ve filtre mimarisi: site/katalog/teklif tarafından ortak kullanılan ağaç",
          "Revizyon ve sürüm: fiyat ve teknik bilgi değişimlerinin kim/ne zaman kaydı, eski sürüm arşivi",
          "Onay akışı: yeni ürün açılışı, fiyat değişimi ve ürün kapatma taleplerinde sorumlu onayı",
          "Stok ve sipariş bağlantısı: min/max, sipariş önerisi, satın alma talebine tek tuşla dönüşüm",
          "Doküman merkezi: teknik tablo, uygunluk belgesi, montaj şeması, görsel klasörü; kanala göre yayına alma",
          "Raporlama: marj analizi, tedarikçi bazlı termin/iade performansı, hareket eden/ölmüş ürün listesi, fiyat değişim etkisi",
          "İçe/dışa aktarım: Excel/CSV yüklemesi, katalog ve e-ticarete besleme, ERP/ön muhasebe senkronu",
        ],
      },
      process: {
        id: "surec",
        h2: "Kurulum Süreci: 6 Adım",
        steps: [
          { title: "1. Envanter çıkarımı (2-4 gün)", text: "Ürün, fiyat ve tedarikçi verilerinin bugün nerede durduğu listelenir; çift kayıt ve çelişkiler görülür. Çıktı: kaynak haritası." },
          { title: "2. Alan ve kategori modeli (2-4 gün)", text: "Hangi alanın zorunlu, hangisinin opsiyonel olacağı ve kategori ağacı belirlenir. Çıktı: veri sözlüğü + kategori şeması." },
          { title: "3. Tedarikçi değerlendirme formatı (1-3 gün)", text: "Termin, minimum sipariş, kalite iadesi ve ödeme koşulu için tek tip kayıt şablonu kurulur. Çıktı: tedarikçi skor kartı." },
          { title: "4. Geliştirme (6-14 gün)", text: "Ürün/tedarikçi modülü, onay akışları, fiyat motoru ve entegrasyonlar kodlanır; panel ve yetkiler ayarlanır. Çıktı: test ortamı." },
          { title: "5. Veri temizliği ve yükleme (3-8 gün)", text: "Excel yığınları normalize edilir, birimler düzeltilir, yinelenen ürünler birleştirilir ve yüklenir. Çıktı: tek kaynağa inmiş veri." },
          { title: "6. Yayın + sahiplik ataması", text: "Ürün grubu bazında “sorumlu” ataması yapılır; 30 gün boyunca eksik alan raporları paylaşılır. Çıktı: canlı sistem + bakım planı." },
        ],
      },
      benefits: {
        id: "faydalar",
        h2: "Kazanımlar: Marj, Hız ve Pazarlık Gücü",
        metrics: [
          { value: "+%3-8", label: "fiyat artışını zamanında yansıtma ile kazanılan marj (gözlem aralığı)" },
          { value: "tek kayıt", label: "site, katalog, teklif ve sipariş aynı üründen beslenir" },
          { value: "-%60", label: "yeni ürünün yayına alınma süresi" },
          { value: "skor bazlı", label: "tedarikçi termin/iade performansı ölçülür" },
        ],
        bullets: [
          { title: "Marj kâğıt üstünde kalmaz", text: "Maliyet ve satış fiyatı aynı kartta olduğu için ürün bazlı kâr görünür; zararına satış erken yakalanır.", icon: "LineChart" },
          { title: "Satın alma hızlanır", text: "Alternatif tedarikçi ve minimum sipariş bilgisi tek ekranda; tükenen ürün için bekleme süresi kısalır.", icon: "Zap" },
          { title: "Pazarlık veriyle yapılır", text: "Geç teslim ve iade oranları kayıt altında olduğu için tedarikçi görüşmesine rakamla girilir.", icon: "Handshake" },
          { title: "İçerik üretimi kolaylaşır", text: "Katalog ve web içerikleri aynı teknik bilgiden türer; metin üç ayrı yerde yazılmaz.", icon: "FileText" },
        ],
      },
      audience: {
        id: "kimler-icin",
        h2: "Kimler İçin Uygun?",
        bullets: [
          { title: "Geniş kalem listesi olan toptancılar", text: "Yüzlerce-binlerce SKU ile çalışan, tedarikçi portföyü dağınık firmalar.", icon: "Boxes" },
          { title: "İmalatçılar", text: "Hammadde alternatifleri ve fiyat oynaklığı kritik olan üreticiler.", icon: "Factory" },
          { title: "E-ticaret markaları", text: "Ürün içeriğini site, pazaryeri ve kataloğa aynı anda yayması gereken satıcılar.", icon: "ShoppingBag" },
          { title: "Proje bazlı satış yapanlar", text: "Teknik şartname, alternatif ürün ve opsiyon listesiyle teklif üreten yapılar.", icon: "HardHat" },
        ],
      },
      whyUs: {
        id: "neden-biz",
        h2: "Neden Tardigrad Software?",
        bullets: [
          { title: "Pazarlama ve satın alma aynı kartta", text: "Ürün verisini teknik taraftan koparmadan kuruyoruz; içerik ekibi ile satın alma aynı kaydı farklı alanlarla kullanır.", icon: "Workflow" },
          { title: "Fiyat motorunu birlikte tasarlarız", text: "Kural bazlı fiyat (segment, miktar, kur, sezon) desteği modüle baştan girer; sonradan yama gerekmez.", icon: "Calculator" },
          { title: "Veri temizliği bir iş kalemidir", text: "Bunu “maliyet” diye gizlemiyoruz: Excel yığınından tek kaynağa geçiş için ayrı plan ve takvim koyuyoruz.", icon: "Filter" },
          { title: "Sahiplik modeli kuruyoruz", text: "Alanları dolduracak kişi ve periyodik eksik raporu olmadan her sistem üç ayda bayatlar; bunu projeye dâhil ediyoruz.", icon: "UserCheck" },
        ],
      },
      faq: {
        id: "sss",
        h2: "Ürün ve Tedarikçi Yönetimi Hakkında Sıkça Sorulanlar",
        faq: [
          {
            q: "Ürün kartını kim dolduracak, iş yükü kimde kalacak?",
            a: "Başlangıç yükü bizde: mevcut Excel/katalog verisini normalize edip yüklüyoruz. Sonrasında her ürün grubuna bir “ürün sahibi” atanmasını öneriyoruz; yeni ürün açılışı ve fiyat değişimi bu kişi üzerinden onay akışıyla yürür. Raporlar hangi kartların eksik alan taşıdığını gösterir; böylece sorumluluk kişiden kişiye kaymaz, sistemde kalır.",
          },
          {
            q: "Tedarikçi sayımız çok ve hepsi Excel/mailde; hepsini kayda geçirmek gerekir mi?",
            a: "Hepsini değil, önce A grubunu. Kalem hacminizin %80'ini besleyen tedarikçilerle başlamak yeterli; uzun kuyruktakiler için minimum alan seti (iletişim, ödeme koşulu, termin) tutulur. Böylece ilk ayda görülebilir bir kazanç üretir, ikinci fazda genişletiriz. Proje motivasyonunu koruyan şey bu sıralamadır.",
          },
          {
            q: "Maliyet ve fiyat değişimlerini ne sıklıkla güncellemeliyiz?",
            a: "Sektöre göre değişir ama sağlıklı bir kural var: tedarikçi fiyat bildirimi geldiği gün maliyet güncellenir; satış fiyatı politikası ise haftalık/aylık bir gözle ile karar verilerek değiştirilir. Sistemde fiyat sürümü ve yayına alma zamanı olduğu için “ne zaman değişti, kaç müşteri eski fiyatla aldı” sorusu cevaplanabilir kalır.",
          },
          {
            q: "Mevcut ERP/ön muhasebe programımızda ürün kartı var; çift kayıt olmaz mı?",
            a: "Kaynağı tek seçerek olmaz. İki yaygın model kuruyoruz: (1) ürün kartı ERP'de kalır, bizim sistemimiz tedarikçi puanı, doküman, görsel ve pazarlama alanlarını tutar; senkron tek yönlü çalışır. (2) ürün merkezi bizim sistemimiz olur, ERP'ye sadece kod/birim/KDV/alış fiyatı gider. Hangisinin doğru olduğu, hangi ekibin veriyi daha disiplinli girebildiğine bağlıdır.",
          },
          {
            q: "Alternatif ürün ve ikame ilişkisini kurmak gerçekten işe yarar mı?",
            a: "En yüksek getirisi olan alanlardan biri. Kalem tükendiğinde satış ekibi “muadili” bilgisine saniyeler içinde ulaşır; sipariş beklemek yerine alternatif satılır. Ayrıca tedarikçi fiyat artışında alternatifin marj farkı görünür hâle gelir. Bu ilişkiyi veri modelinde ilk günden kuruyoruz; sonradan eklemek genelde yapılmıyor.",
          },
          {
            q: "Ürün görsel ve dokümanlarını da sistem mi yönetecek?",
            a: "Evet, yönetmesi gerekir. Doküman (teknik tablo, uygunluk belgesi, montaj şeması) ve görseller sürüm ve tarih bilgisiyle kartta tutulur; site, katalog ve bayi ekranı aynı dosyaları kullanır. Böylece yanlış versiyonla basılmış katalog veya eksik sertifika gibi konular, dosya arama işi olmaktan çıkar.",
          },
        ],
      },
      internal: {
        id: "ilgili-hizmetler",
        h2: "Ürün Verisini Kullanan Katmanlar",
        paragraphs: [
          "Ürün/tedarikçi merkezi; stok, sipariş, katalog sitesi ve teklif sistemi tarafından ortak kullanılır. Aşağıdaki sayfalar bu kullanımı, şehir sayfaları ise bölgesel tedarik ve lojistik dinamiklerini anlatıyor.",
        ],
      },
    },
    ctaTitle: "Ürün listeniz ve tedarikçi yapınızla başlayalım",
    ctaText:
      "Kalem sayınız, fiyat değişim sıklığınız ve tedarikçi listeniz netleşsin; hangi verinin tek kaynak olacağına karar verip modülün kapsamını ve pilot ürün grubunu birlikte seçelim.",
  },
}
