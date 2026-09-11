import type { ServiceContent } from "@/types/content"

/**
 * FAZ 2 — grup 5a: BT & yapay zekâ (otomasyon, alan adı/DNS, hosting, Cloudflare, Vercel, Supabase).
 */
export const itaiContents: Record<string, ServiceContent> = {
  "dijital-otomasyon": {
    h1: "Dijital Otomasyon: Aynı Veriyi İki Kez Girmeyi Bırakmak",
    definition: [
      "Dijital otomasyon, tekrarlayan ve kurallı işleri yazılıma devretmektir: gelen talebin kayda dönüşmesi, eksik bilginin sorulması, teklifin hazırlanması, faturanın kesilmesi, teslimatın bildirilmesi, raporun gönderilmesi. Amaç “daha az insan” değil; insanı, hata yapan ve hoşlanmadığı işlerden çekip karar gerektiren işlere oturtmaktır.",
      "Otomasyonun zor kısmı entegrasyon değil, karar listesidir. Bir süreci otomatikleştirmek için şu üç sorunun cevabı yazılı olmalıdır: hangi olay tetikleyici, hangi koşulda insan onayı gerekir, hata durumunda iş nereye düşer? Bu üçlü netleşmeden kurulan akışlar, ilk ayda “yarım iş” yığını üretir ve ekipler yeniden Excel'e döner.",
      "Tardigrad Software olarak otomasyonu ya kendi sistemlerimiz içinde (form → panel → CRM → bildirim) ya da n8n / Make / Zapier gibi bir orkestrasyon katmanı üzerinden kuruyoruz. Önerimiz genelde şudur: kural basitse mevcut araçlarla otomasyon, kural işinize özelse kod tarafında iş kuralı motoru; ikisi birlikte de çalışabilir.",
    ],
    sections: {
      whyNeeded: {
        id: "neden-gerekli",
        h2: "Otomasyon Olmadan Neler Olur?",
        bullets: [
          { title: "Çift veri girişi", text: "Aynı talep hem formda, hem Excel'de, hem muhasebede; üç yerde üç farklı hâlde.", icon: "Copy" },
          { title: "Yanıt gecikmesi", text: "Talep gelmiş ama kimseye atanmamış; müşteri “yazdık, dönmediler” der.", metric: "24+ saat", icon: "Clock" },
          { title: "Unutulan adımlar", text: "Fatura, sözleşme, iade, hatırlatma; kişi hatırlarsa yapılıyor.", icon: "BellOff" },
          { title: "Standart bozulması", text: "Her satışçı ayrı format, ayrı vaatkâr dil; marka ve hukuki risk birikir.", icon: "FileWarning" },
        ],
        paragraphs: [
          "Bu kayıplar tek tek küçük görünür; toplamı, bir çalışanın aylık mesaisi kadardır. Otomasyonun geri dönüşü de tam burada hesaplanır.",
        ],
        miniCta: "Ayda en çok tekrar eden üç işinizi anlatın; etki × efor hesabıyla hangisinin önce otomatikleşeceğini gösterelim.",
      },
      scope: {
        id: "paket-kapsami",
        h2: "Otomasyon Kapsamı",
        checklist: [
          "Süreç envanteri: hangi iş kimde başlıyor, hangi veriyi bekliyor, ne zaman bitmiş sayılıyor",
          "Tetikleyici kataloğu: form gönderimi, e-posta, WhatsApp mesajı, takvim olayı, ödeme durumu değişimi, dosya klasörüne düşen Excel",
          "Alan eşleme ve doğrulama: eksik/bozuk veride akışın durması, düzeltme için otomatik geri sorma",
          "Rota ve atama: bölge/ürün/ağırlık bazlı sorumlu ataması, boşta kalan işin eşzamanlı dağıtımı, devir kuralları",
          "Belge/iletişim üretimi: teklif PDF'i, sözleşme şablonu, teşekkür/hatırlatma e-postaları, durum mesajları",
          "Sistemler arası aktarım: CRM ↔ ön muhasebe ↔ stok ↔ e-posta/WhatsApp; tek taraflı çift taraflı senkron kararları",
          "Onay ve insan kapısı: limit üstü iskontoda, iptalde, dışa gönderimde onay adımı ve gerekçe alanı",
          "Hata kuyruğu: başarısız adımların tek ekranda toplanması, yeniden deneme ve el ile düzeltme imkânı",
          "Zamanlanmış görevler: sabah raporu, geciken iş uyarısı, aylık stok/fatura hatırlatmaları",
          "Güvenlik ve denetim: sistem hesabı (kişi değil) kullanımı, erişim anahtarlarının saklanması, işlem günlüğü",
          "Ölçüm: otomasyon öncesi/sonrası süre, elle yapılan adım sayısı ve kuyruk derinliği",
        ],
      },
      process: {
        id: "surec",
        h2: "Kurulum Süreci: 6 Adım",
        steps: [
          { title: "1. İş seçimi ve etki hesabı (2-4 gün)", text: "Tekrar, süre ve hata oranı ölçülür; kazanım tahmini yapılır. Çıktı: öncelik listesi (ilk akış dahil).", },
          { title: "2. Kural dokümanı (1-3 gün)", text: "Tetikleyici, koşul, istisna ve hata davranışı yazılır. Çıktı: onaylı akış şeması.", },
          { title: "3. Araç kararı (0,5-1 gün)", text: "Mevcut sistemler içinde mi, n8n/Make/Zapier ile mi? Maliyet ve bakım karşılaştırması. Çıktı: karar notu.", },
          { title: "4. Kurulum/geliştirme (3-10 gün)", text: "Akışlar kurulur, entegrasyonlar bağlanır, hata kuyruğu ve log eklenir. Çıktı: test ortamında çalışan akış.", },
          { title: "5. Paralel çalışma (1-2 hafta)", text: "Otomasyon ve manuel akış birlikte yürür; farklar karşılaştırılıp düzeltilir. Çıktı: güven eşiği ve geçiş onayı.", },
          { title: "6. Yaygınlaştırma + izleme", text: "Diğer akışlara genişletilir, aylık ölçüm raporuna bağlanır. Çıktı: canlı otomasyon + metrik.", },
        ],
      },
      benefits: {
        id: "faydalar",
        h2: "Ölçülen Kazanımlar",
        metrics: [
          { value: "-%50-80", label: "seçili akışlarda işlem süresi (tekrar eden veri girişi ortadan kalkar)" },
          { value: "dk", label: "talep yanıt süresi; saatler/günler yerine" },
          { value: "0", label: "“unutulan adım” hedefi — akış ya tamamlanır ya kuyruğa düşer" },
          { value: "1 ay", label: "ilk akışta geri dönüş süresi tipik gözlem" },
        ],
        bullets: [
          { title: "Standart kalite", text: "Aynı şablon, aynı dil, aynı kontrol listesi; kişi değişince iş değişmez.", icon: "FileText" },
          { title: "Ölçeklenme kolaylığı", text: "Hacim arttıkça insan eklemek yerine kural eklenir; maliyet doğrusal büyümekten çıkar.", icon: "TrendingUp" },
          { title: "Denetim izi", text: "Kim neyi otomatik yaptı, hangi veriye dayanarak; rapor ve itirazlarda kayıt gösterilir.", icon: "ShieldCheck" },
          { title: "Ekip memnuniyeti", text: "Kopyala-yapıştır işi azalan ekip, işin nitelikli kısmına vakit ayırır.", icon: "Smile" },
        ],
      },
      audience: {
        id: "kimler-icin",
        h2: "Kimler İçin Uygun?",
        bullets: [
          { title: "Talep yoğun işletmeler", text: "Günde onlarca form/mesaj alan; ilk yanıt süresi rekabetçi olan yapılar.", icon: "Inbox" },
          { title: "Birden çok sistem kullananlar", text: "CRM, muhasebe, stok ve e-posta arasında elle veri taşıyan ekipler.", icon: "Layers" },
          { title: "Şube/ekip çokluğu", text: "Standart işleyişin elle sağlanamadığı çok lokasyonlu yapılar.", icon: "Network" },
          { title: "Tekrarlayan iç süreçler", text: "İzin, satın alma, demirbaş, fatura onayı gibi iç işleyişler de otomasyonun en verimli alanıdır.", icon: "ClipboardList" },
        ],
      },
      whyUs: {
        id: "neden-biz",
        h2: "Neden Tardigrad Software?",
        bullets: [
          { title: "Önce durdurma cesareti", text: "Bazı süreçler otomasyona değmez; bunu baştan söylüyoruz. Otomasyon satmak için akış uydurmuyoruz.", icon: "Target" },
          { title: "Hata kuyruğu standarttır", text: "Otomasyon projelerinin çoğu “ya tersi olursa” sorusunu cevaplamaz; biz akışın yarısını buna ayırıyoruz.", icon: "Shield" },
          { title: "Sistemleri biz kuruyoruz", text: "Form, panel, CRM ve muhasebe tarafında neyin mümkün olduğunu bildiğimiz için “entegrasyon yok” bahanesiyle karşılaşmıyoruz.", icon: "Plug" },
          { title: "Ölçerek kapatıyoruz", text: "Süre ve adım sayısı önce/sonra ölçülür; kazanç raporda görünür.", icon: "LineChart" },
        ],
      },
      faq: {
        id: "sss",
        h2: "Dijital Otomasyon Hakkında Sıkça Sorulanlar",
        faq: [
          {
            q: "Hazır otomasyon araçları (Zapier, Make, n8n) varken neden siz?",
            a: "Çoğu akış için hazır araç yeterlidir ve biz de öneriyoruz. Fark, iki yerde belirir: kuralınız işinize özgü olduğunda (onay eşikleri, alan dönüştürme, çakışma kontrolü) araç “kod bloğu”na düşer ve bakım yükü başlar; ve ikinci olarak, verinin kendi sisteminizde kalması gerektiğinde. Bu durumda akışı biz kurup ya kendi sunucumuzda (n8n self-hosted) ya da uygulama içinde çalıştırıyoruz. Karar, akışın karmaşıklığı ve bakım sahibi üzerinden verilir.",
          },
          {
            q: "Hangi işleri önce otomatikleştirmeliyiz?",
            a: "Üç kritere bakıyoruz: sıklık (günde/haftada kaç kez), süre (bir tur kaç dakika) ve hata maliyeti (yanlış yapılınca ne oluyor). İlk aday genelde “talep kabul” akışıdır: her gün olur, gecikmesi müşteriye mal olur ve kaydı başka sistemlere de yayılır. Onu teklif/fatura üretimi ve durum bildirimleri izler. Ayda bir kez yapılan bir iş, otomasyon listesinde son sıradadır — cazip görünse de getirisi düşüktür.",
          },
          {
            q: "Otomasyon insan hatasını bitirir mi, yoksa yeni hata türü mü üretir?",
            a: "İkisi de. Elle veri giriş hataları biter; ama “yanlış kuralın binlerce kez uygulanması” diye yeni bir risk doğar. Bu yüzden üç önlem standarttır: paralel çalışma dönemi (elle akış devam ederken karşılaştırma), kural değişikliklerinde onay ve test, ve olağandışı miktarda üretimde alarm (bir saatte 400 kayıt oluştuysa durdur). Otomasyonu denetimsiz bırakmak, en hızlı hata üretim biçimidir.",
          },
          {
            q: "Entegrasyon izinleri ve güvenlik nasıl yönetiliyor?",
            a: "Sistemlere kişi hesabıyla değil, minimum yetkili servis hesabıyla bağlanıyoruz; anahtarlar ortam değişkenlerinde tutulur ve depoya girmez, periyodik rotasyon önerilir. Hangi verinin dışarıya (otomasyon bulutuna) gideceği açıkça listelenir; kişisel veri için alan minimizasyonu yapılır. Birlikte çalışmayı bıraktığımızda anahtarlarınızın iptal edilebilir olması da tasarım gereğidir.",
          },
          {
            q: "Yapay zekâyı nereye koyuyorsunuz?",
            a: "Otomasyonun “karar” adımlarında değil, “sınıflandırma ve özetleme” adımlarında. Örneğin gelen mesajı konusuna göre sınıflandırmak, uzun bir talebi özetlemek, eksik alanı önermek; ama fiyat vermek, iade onaylamak, sözleşme hükmü yorumlamak gibi adımlarda insan onayı kalır. Bu ayrımı yazılı kurallaştırıyor ve modelin hata payını ölçerek genişletiyoruz.",
          },
        ],
      },
      internal: {
        id: "ilgili-hizmetler",
        h2: "Otomasyonu Mümkün Kılan Altyapı",
        paragraphs: [
          "Akışların dayanacağı yer API entegrasyonu, kurumsal e-posta ve iş takip/raporlama katmanıdır. Aşağıdaki sayfalar bu temelleri; şehir sayfaları ise bölgesel operasyon kurgusunu anlatıyor.",
        ],
      },
    },
    ctaTitle: "Tek akışla başlayalım",
    ctaText:
      "En çok tekrar eden işinizi ve bugünkü süresini anlatın; etki hesabı, kural dokümanı ve ilk akışın kurulum kapsamı tek sayfada netleşsin.",
  },

  "domain-dns-yonetimi": {
    h1: "Domain ve DNS Yönetimi: Alan Adının Kontrolünü Elden Bırakmamak",
    definition: [
      "Domain/DNS yönetimi; alan adınızın kaydından çözümlemesine kadar tüm teknik ayarların sizin kontrolünüzde, kayıt altında ve hatasız tutulmasıdır: kayıt sahibi ve e-posta, otomatik yenileme, isim sunucuları, A/AAAA/CNAME/MX/TXT/CAA kayıtları, alt alan adları ve doğrulama kayıtları. Sitenizin açılıp açılmaması, e-postanızın çalışıp çalışmaması bu tabloya bağlıdır.",
      "Türkiye'de en sık gördüğümüz sorun teknik değil, mülkiyet sorunudur: alan adı eski çalışanın veya ajansın hesabında kayıtlıdır, yenileme onun kartına bağlıdır, DNS paneline erişim kimse bilmiyordur. Site sorunsuz görünür; ta ki yenileme günü gelip e-posta kutusunun sahibi cevap veremeyene kadar.",
      "Tardigrad Software olarak önce envanter ve devralma yapıyoruz (kayıt sahibi, DNS sağlayıcı, yenileme tarihi, mevcut kayıtların yedeği), sonra düzenli hâle getiriyoruz: doğrulama kayıtları, e-posta güvenliği (SPF/DKIM/DMARC), CDN ve sertifika ayarları, alt alan adı standardı ve değişiklik günlüğü.",
    ],
    sections: {
      whyNeeded: {
        id: "neden-gerekli",
        h2: "DNS Dağınık Olduğunda Ne Olur?",
        bullets: [
          { title: "Alan adı süresi dolar", text: "Ödeme kartı eski ajansın hesabındaysa, yenileme gününde site ve e-posta birlikte durur; geri alma ücreti ve kaybı ağırdır.", icon: "CalendarClock" },
          { title: "E-posta spam kutusuna düşer", text: "SPF/DKIM/DMARC eksik veya hatalıysa, gönderimler “güvenilir değil” muamelesi görür; satış maili ulaşmaz.", icon: "MailWarning" },
          { title: "Kimse neyin nerede olduğunu bilmez", text: "DNS bir yerde, site başka yerde, doğrulama kaydı üçüncü yerde; sorun çıkınca iki saat tahminle harcanır.", icon: "MapPinned" },
          { title: "Sertifika ve taşıma kazaları", text: "Alt alan adı, CDN veya taşıma sırasında sertifikalar bozulur, “site güvenle açılamıyor” uyarısı çıkar.", icon: "AlertTriangle" },
        ],
        miniCta: "Alan adınızı paylaşın; kayıt sahibi, yenileme tarihi ve DNS kaydınızı 30 dakikada tablo hâline getirelim.",
      },
      scope: {
        id: "paket-kapsami",
        h2: "Yönetim Kapsamı",
        checklist: [
          "Envanter ve devralma: kayıt sahibi/kurum, teknik ve idari iletişim, yenileme tarihi, isim sunucuları ve DNS sağlayıcısı",
          "Kilitlerin kontrolü: transfer kilidi (registrar lock), 2FA, kurtarma e-posta/telefonlarının güncelliği",
          "Kayıt yedeği ve normalizasyon: mevcut tüm DNS kayıtlarının dışa aktarımı, standart isimlendirme, gereksiz/reklam kayıtlarının temizliği",
          "A/AAAA/CNAME politikası: düz alan adı (apex) için doğru çözümleme, www yönlendirmesi, alt alan adı standardı (api-, cdn-, mail-, staging-)",
          "E-posta güvenliği: SPF tek kayıt birliği, DKIM imza ve anahtar uzunluğu, DMARC politikası (p=none → quarantine → reject kademeli geçiş) ve raporlama adresi",
          "Doğrulama kayıtları: Google Search Console, Microsoft 365, ödeme/entegrasyon sağlayıcıları ve SEO araçlarının TXT kayıtlarının listelenmesi",
          "TLS/HTTPS: sertifika türü (Let's Encrypt / ticari), otomatik yenileme,CAA kaydı, karma içerik ve HSTS kararları",
          "CDN ve cache ayarları: Cloudflare/proxy modu, gerçek istemci IP'sinin korunması, cache kuralları ve geçiş testleri",
          "Taşıma planı: registrar ve DNS taşımalarında TTL düşürme, çift çalıştırma ve geri alma adımları",
          "Değişiklik günlüğü ve prosedür: kim izinli, hangi değişiklik onay gerektirir, acil durumda erişim nasıl sağlanır",
          "İzleme: site erişilebilirliği, sertifika bitiş tarihi, yenileme uyarıları ve DMARC raporlarının aylık okuması",
        ],
      },
      process: {
        id: "surec",
        h2: "Çalışma Süreci: 5 Adım",
        steps: [
          { title: "1. Envanter (0,5-1 gün)", text: "Kayıt, DNS, e-posta, CDN ve sertifika tarafında ne nerede; kimde erişim var. Çıktı: mülkiyet haritası.", },
          { title: "2. Devralma ve kilitler (1-5 gün)", text: "Transfer/onay süreçleri, şifrelerin kurumsal hesaba alınması, 2FA ve yenileme ödeme yönteminin değiştirilmesi. Çıktı: sizin adınıza kayıtlı kontroller.", },
          { title: "3. DNS ve e-posta düzeltmesi (1-3 gün)", text: "Kayıt temizliği, SPF birleştirme, DKIM aktivasyonu ve DMARC rapor adresi kurulumu. Çıktı: doğrulanmış kayıt seti.", },
          { title: "4. Sertifikasyon ve CDN (1-2 gün)", text: "TLS otomasyonu, proxy/cache kuralları, yönlendirme ve HSTS kararları. Çıktı: test raporu.", },
          { title: "5. Prosedür + aylık izleme", text: "Değişiklik günlüğü, acil durum erişim planı ve aylık uyarı kontrolü. Çıktı: bakım rutini + rapor.", },
        ],
      },
      benefits: {
        id: "faydalar",
        h2: "Neden Değer?",
        metrics: [
          { value: "0", label: "“alan adının süresi doldu” kazası hedefi (takvim + otomatik yenileme)" },
          { value: "≤1 saat", label: "sorun anında erişim; “kimde şifre var” araması yok" },
          { value: "+", label: "e-posta teslim oranı: DKIM/DMARC sonrası gelen/ gönderilen kutusu düzelir" },
          { value: "saatler", label: "site taşıma başına kazanılan süre (prosedür ve kayıt listesi sayesinde)" },
        ],
        bullets: [
          { title: "Varlık güvence altında", text: "Alan adı, markanızın dijital tapusudur; kişi hesabında durmamalı.", icon: "ShieldCheck" },
          { title: "İtibar koruması", text: "Sahte alan adı/phishing girişimlerini izleme ve marka koruması için temel veri burada.", icon: "Eye" },
          { title: "Taşımalar sancısız", text: "Doğru TTL ve kayıt listesiyle host/CDN/panel değişikliği kesinti yaratmaz.", icon: "Truck" },
          { title: "Ekip değişimi normalleşir", text: "Ajans veya personel değiştiğinde devir, bir dosya ve iki onay kadardır.", icon: "Users" },
        ],
      },
      audience: {
        id: "kimler-icin",
        h2: "Kimler İçin Uygun?",
        bullets: [
          { title: "Alan adı ajans/calisan uzerine kayitli firmalar", text: "Mülkiyetin şirkette olmadığı her yapı; ilk iş devralmadır.", icon: "KeyRound" },
          { title: "E-posta teslimatı sorun yaşayanlar", text: "Teklif ve fatura mailleri spam kutusuna düşen KOBİ'ler.", icon: "MailWarning" },
          { title: "Çok alan adı/portföy sahipleri", text: "Marka koruması için varyant ve eski alan adlarını yöneten yapılar.", icon: "Layers" },
          { title: "Taşıma/yenileme öncesi", text: "Host, CDN veya platform değiştirecek siteler için hazırlık.", icon: "Truck" },
        ],
      },
      whyUs: {
        id: "neden-biz",
        h2: "Neden Tardigrad Software?",
        bullets: [
          { title: "Site ve DNS birlikte düşünülür", text: "Biz hem yayını hem çözümü yönettiğimiz için “bu kayıt bizi ilgilendirmez” bölgesi yok.", icon: "Workflow" },
          { title: "DMARC'ı kademeli kurarız", text: "Bir gecede reject vermek e-postalarınızı keser; önce raporlama, sonra karantina, sonra red — veriye göre ilerleme.", icon: "Shield" },
          { title: "Kayıt ve prosedür bırakırız", text: "Erişim listesi, değişiklik günlüğü ve acil durum planı dokümante edilir; kurum içi bilgi olur.", icon: "FileText" },
          { title: "Bağımlılık üretmiyoruz", text: "Kayıtlar sizin adınıza; istediğiniz an başka bir ekibe devredebilirsiniz.", icon: "GitBranch" },
        ],
      },
      faq: {
        id: "sss",
        h2: "Domain ve DNS Hakkında Sıkça Sorulanlar",
        faq: [
          {
            q: "Alan adımı neden kendi hesabımda tutmalıyım?",
            a: "Çünkü alan adı, sitenin, e-postanın ve markanın birlikte bağlı olduğu tek varlıktır. Üçüncü kişi hesabında durduğunda üç risk doğar: yenileme gününün kaçması, erişimin kaybolması (ayrılan çalışan/ajans) ve transferde pazarlık gücünün karşı tarafta olması. Kurumsal bir hesapta (sizin Registrar hesabınız, şirket e-postası, kurumsal kart, 2FA yöneticisi) tutmak bu üç riski tek hamlede kapatır; ajansa ise yalnızca “teknik iletişim” rolü verilir.",
          },
          {
            q: "SPF, DKIM ve DMARC tam olarak ne yapıyor?",
            a: "SPF, alan adınız adına kimin mail gönderebileceğini listeler; DKIM, gönderilen mesajın size ait ve yolda bozulmadığını imzalar; DMARC ise “ikisi tutmuyorsa ne yap” kuralıdır ve size rapor gönderir. Üçü birlikte çalıştığında hem dışa gönderiminiz spam kutusundan çıkar hem de markanıza taklit (phishing) girişimleri zorlaşır. Biz kurulumu “bir gecede sert politika” ile değil, raporlama aşamasıyla başlayıp veriye göre sıkılaştırarak yapıyoruz.",
          },
          {
            q: "DNS'i Cloudflare'a taşımak siteyi yavaşlatır mı?",
            a: "Tam tersi, genellikle hızlandırır; ama iki hataya dikkat etmek gerekir. Birincisi, proxy (turuncu bulut) modunun yanlış sayfalar için seçilmesi: websocket, yönetim paneli veya özel portlu servisler bundan etkilenebilir. İkincisi, cache kurallarının statik olmayan sayfalara uygulanması. Biz taşımada proxy modunu sayfa türüne göre ayarlıyor, gerçek istemci IP'sinin uygulamaya ulaşmasını sağlıyor ve değişiklik öncesi/sonrası hız ölçümü yapıyoruz.",
          },
          {
            q: "Alt alan adlarını nasıl düzenlemeliyiz?",
            a: "Standart bir isimlendirme, ileride en çok işe yarayan karardır: app, api, admin, cdn, mail, smtp, staging, blog, katalog gibi sabit adlar; ortama göre sonek (-test, -uat). Rastgele üretilmiş alt alan adları hem sertifika yönetiminde hem de “bu neyin sunucusu” sorusunda kayıp üretir. Taşıma sonrası terk edilmiş kayıtları silmek de önemlidir: bunlar hem güvenlik hem kafa karışıklığı kaynağıdır.",
          },
          {
            q: "Alan adı taşınırken site kapanır mı?",
            a: "Doğru sırayla yapılırsa kapanmaz. Kritik üç adım: taşımadan önce TTL değerlerini düşürmek (değişikliğin hızlı yayılması), kayıt setinin birebir kopyasını almak ve eski kayıtları bir süre çift çalıştırmak, ve transfer kilidi/onay sürecini önceden başlatmak (60 gün kuralı gibi registrar kısıtlarını kontrol etmek). E-posta MX kayıtlarını aynı pencereye denk getirmemek, en sık yapılan ve en pahalı hatadır; bu yüzden taşımaları takvimle ve tek seferde planlıyoruz.",
          },
        ],
      },
      internal: {
        id: "ilgili-hizmetler",
        h2: "Alan Adına Bağlı Diğer Katmanlar",
        paragraphs: [
          "DNS; kurumsal e-posta, hosting/CDN ve yayın hattı ile birlikte anlam kazanır. Aşağıdaki sayfalar bu katmanları anlatıyor; şehir sayfalarında ise yerel alan adı ve markalama notlarını bulabilirsiniz.",
        ],
      },
    },
    ctaTitle: "Önce mülkiyet haritası",
    ctaText:
      "Alan adınızı ve mevcut kayıt sahibini paylaşın; erişim, yenileme tarihi ve DNS kayıtlarının dökümüyle birlikte üç adımlık bir düzeltme planı çıkaralım.",
  },

  "hosting-yedekleme": {
    h1: "Hosting ve Yedekleme: Sitenin Ayakta Kalma Sigortası",
    definition: [
      "Hosting ve yedekleme hizmeti; sitenizin/aplikasyonunuzun erişilebilir, hızlı ve geri yüklenebilir olmasını sağlayan altyapı katmanıdır. Barındırma tarafında sunucu/CDN/önbellek ve PHP-Node yapılandırması, işletim sistemi güncellemeleri ve izleme; yedekleme tarafında ise otomatik kopya, saklama periyodu ve — en önemlisi — geri yükleme tatbikatı yer alır.",
      "Çoğu firma hosting'i “aylık fatura” olarak görür; sorun da burada başlar. Gerçek maliyet, site erişilemez olduğunda ve veri kaybı yaşandığında ortaya çıkar. Yedekleme “var” olmak yetmez: son çalıştırıldığı tarihte bozuk bir veritabanını kurtarmıyorsa, o yedek bir kayıttır, çözüm değil.",
      "Tardigrad Software olarak barındırmayı Next.js/Vercel, VPS (Docker + ters vekil sunucu) veya yönetilen bulut çözümleri üzerinden kuruyor; otomatik veritabanı/dosya yedeklerini, saklama politikasını, izleme ve uyarıları ve yılda en az bir geri yükleme provasını kapsama yazıyoruz.",
    ],
    sections: {
      whyNeeded: {
        id: "neden-gerekli",
        h2: "Paylaşımlı Hosting Nerede Kırılır?",
        bullets: [
          { title: "Yavaşlık ve kesinti", text: "Aynı sunucudaki komşu site kaynak tüketir; kampanya anında siteniz yavaşlar.", icon: "Gauge" },
          { title: "Kısıtlı kurulum", text: "Node/Next.js sürümü, cron, uzun PHP süresi, özel port: çoğu yönetilemez.", icon: "Container" },
          { title: "Yedek illüzyonu", text: "Host “otomatik yedek var” der; 30 gün geriye gitmek istediğinizde dosyaların silinmiş olduğu görülür.", icon: "Archive" },
          { title: "Güvenlik borcu", text: "Güncellenmemiş yazılım ve açık FTP/SSH, ilk hedeflenen kapılardır; saldırı sonrası temizlik daha pahalıdır.", icon: "ShieldAlert" },
        ],
        miniCta: "Mevcut host, ziyaretçi hacmi ve kritik süreçlerinizi anlatın; uygun altyapı ve yedek planını tablo hâlinde özetleyelim.",
      },
      scope: {
        id: "paket-kapsami",
        h2: "Kapsam",
        checklist: [
          "Altyapı seçimi: statik/hafif siteler için yönetilen hosting, uygulama/SaaS için VPS-konteyner veya sunucusuz (Vercel/Netlify) karşılaştırması",
          "Bölge ve gecikme: Türkiye hedefli kitle için sunucu bölgesi, CDN kenar noktaları ve veri yerelliği kararları",
          "TLS ve güvenlik başlıkları: sertifika otomasyonu, HSTS, CSP, XSS/CSRF korumaları, port ve servisin açık bırakılmaması",
          "Kaynak ve ölçek: CPU/RAM/disk planlaması, otomatik ölçek veya yükseltme eşiği, veritabanı boyut izleme",
          "CI/CD ve ortam ayrımı: staging/canlı, deploy otomasyonu, geri alma (rollback) ve migration disiplinleri",
          "Otomatik yedekleme: veritabanı (mantıksal döküm + WAL/PITR) ve dosya/medya; günlük/haftalık periyot, 30-90 gün saklama",
          "Yedeklerin ayrı konumda tutulması: farklı sağlayıcı/bölgeye kopya; host'un kendi yedeğine tek başına güvenmeme kuralı",
          "Geri yükleme tatbikatı: yılda en az bir kez “sıfırdan ayağa kaldırma” provası ve süre ölçümü (RTO)",
          "İzleme ve uyarı: çalışma süresi kontrolü, hız, hata oranı, disk doluluğu, sertifika bitişi; ekip bildirim kanalı",
          "Log ve denetim: erişim/hata logları merkezileştirme, kritik değişikliklerin kaydı, SSH erişim disiplini",
          "Felaket planı (DR): erişilemezlik/bozulma senaryosunda adım adım rol ve zaman hedefleri (RPO/RTO)",
        ],
      },
      process: {
        id: "surec",
        h2: "Kurulum/Taşıma Süreci: 6 Adım",
        steps: [
          { title: "1. Ölçüm ve ihtiyaç (1-2 gün)", text: "Trafik, sayfa ağırlığı, veritabanı boyutu, kritik işlem saatleri ve bütçe. Çıktı: altyapı gereksinim dokümanı.", },
          { title: "2. Sağlayıcı ve model kararı (0,5-2 gün)", text: "Yönetilen hosting / VPS / sunucusuz karşılaştırması, aylık maliyet ve bakım yükü ile birlikte. Çıktı: karar notu.", },
          { title: "3. Kurulum ve sertleştirme (1-4 gün)", text: "Sunucu/ortam, TLS, güvenlik başlıkları, firewall, kullanıcı/erişim disiplini ve izleme. Çıktı: hazır altyapı.", },
          { title: "4. Uygulama ve veri taşıma (1-3 gün)", text: "Kod/medya/veritabanı aktarımı, DNS TTL düşürme, çift çalıştırma ve test. Çıktı: yeni ortamda doğrulanmış site.", },
          { title: "5. Yedekleme hattı ve prova (0,5-2 gün)", text: "Zamanlanmış yedekler, saklama politikası, ayrı konuma kopya ve ilk geri yükleme provası. Çıktı: test raporu.", },
          { title: "6. Yayın + izleme ritüeli", text: "Canlıya geçiş, ilk hafta günlük izleme, aylık rapor (çalışma süresi, hız, yedek durumu). Çıktı: canlı altyapı + rapor.", },
        ],
      },
      benefits: {
        id: "faydalar",
        h2: "Kazanımlar",
        metrics: [
          { value: "≤15 dk", label: "geri yükleme provası sonrası hedeflenen ayağa kalkma süresi (RTO)" },
          { value: "≤24 saat", label: "veri kaybı toleransı (RPO) — günlük + saatlik dökümle" },
          { value: "-%30-60", label: "mobil yükleme süresi (doğru altyapı + önbellek + CDN ile)" },
          { value: "1 rapor", label: "çalışma süresi, yedek ve hız tek ayda görünür" },
        ],
        bullets: [
          { title: "Kesinti maliyeti düşer", text: "Bir e-ticaret veya talep sitesi için saatler süren kesinti, çoğu zaman aylık altyapı farkından daha pahalıdır.", icon: "Clock" },
          { title: "Saldırı sonrası toparlanma", text: "Bozulan siteyi “temizle ve yeniden kur” yerine “yedekten geri yükle” ile kurtarmak mümkün olur.", icon: "ShieldCheck" },
          { title: "Büyüme hazır kapasite", text: "Kampanya/sezonda ölçek eşiği bellidir; “site yavaşladı, ne yapalım” toplantısı gerekmez.", icon: "TrendingUp" },
          { title: "Ekip rahatlar", text: "Kurulum ve yama işleri prosedüre bağlanınca, yazılımcı geliştirmeye odaklanır.", icon: "Users" },
        ],
      },
      audience: {
        id: "kimler-icin",
        h2: "Kimler İçin Uygun?",
        bullets: [
          { title: "Paylaşımlı hostta kalan siteler", text: "Trafik artmış, yavaşlamış, “host limitine takıldık” uyarısı alanlar.", icon: "Gauge" },
          { title: "Veri kaydı kritik olanlar", text: "Müşteri/sipariş/öğrenci/pasaj verisi tutan yapılar; yedek tek seçenek değil, zorunluluk.", icon: "Database" },
          { title: "Uygulama/SaaS sahipleri", text: "Arka uç, kuyruk ve zamanlanmış işleri olan; staging/canlı ayrımı gereken ürünler.", icon: "Container" },
          { title: "E-ticaret", text: "Sezonluk trafik patlaması ve kesinti maliyeti yüksek olan mağazalar.", icon: "ShoppingBag" },
        ],
      },
      whyUs: {
        id: "neden-biz",
        h2: "Neden Tardigrad Software?",
        bullets: [
          { title: "Uygulamayı biz yazıyoruz", text: "Barındırma kararı, kodun nasıl çalıştığını bilmeyi gerektirir; Next.js/Node/PHP tarafında neyin neye ihtiyacı olduğunu bizden iyi “hosting satıcısı” bilemez.", icon: "Code2" },
          { title: "Yedek, provasıyla yedektir", text: "Geri yükleme testi olmayan yedek planını kapsam saymıyoruz; tatbikatı takvime yazıyoruz.", icon: "Archive" },
          { title: "Maliyet şeffaflığı", text: "Aylık altyapı maliyetini ve büyüme eğrisini baştan gösteririz; “ucuz” diye seçilen planların sonradan çıkan eklenti maliyetlerini de.", icon: "Coins" },
          { title: "Devir ve dokümantasyon", text: "Erişimler, yapılandırma dosyaları ve prosedür sizin adınıza teslim edilir; kimseye bağımlı kalmazsınız.", icon: "FileText" },
        ],
      },
      faq: {
        id: "sss",
        h2: "Hosting ve Yedekleme Hakkında Sıkça Sorulanlar",
        faq: [
          {
            q: "Paylaşımlı hosting, VPS ve sunucusuz (Vercel) arasındaki seçim nasıl yapılır?",
            a: "Üç soru belirler: uygulamanız ne istiyor, trafiğiniz nasıl hareket ediyor ve kim bakacak. Statik/hafif kurumsal siteler ve küçük PHP siteleri paylaşımlı planda mutlu yaşar. Node/Next.js uygulaması, kuyruk, websocket veya cron gibi ihtiyaçlar VPS veya sunucusuz platform ister. Trafiğiniz sezonluk sıçrıyorsa otomatik ölçekleyen yönetim plan avantajlıdır. Son soru kritik: küçük ekiplerde VPS'in yama/izleme yükü, bulut platformunun primini ödemeyi akıllıca kılabilir.",
          },
          {
            q: "Yedeği host'um zaten alıyor, yetmez mi?",
            a: "Genelde yetmez, iki sebeple. Birincisi saklama süresi: çoğu planda 7-30 günlük kopya tutulur ve bir hatayı üç ay sonra fark ederseniz o tarih zaten yoktur. İkincisi izolasyon: saldırgan sunucuyu ele geçirdiğinde aynı makinedeki yedeğe de ulaşır. Bu yüzden yedeği ikinci bir konuma (farklı sağlayıcı/bölge) kopyalıyor ve periyodu ihtiyaçlarınıza göre uzatıyoruz.",
          },
          {
            q: "RPO ve RTO ne demek, bizim için kaç olmalı?",
            a: "RPO, “kaç saatlik veriyi göze alabiliyorum”, RTO ise “kaç saat kapalı kalabilirim” demektir. Kurumsal tanıtım sitesinde 24 saatlik veri ve yarım günlük kesinti kabul edilebilirken, sipariş/ödeme alan bir yapıda RPO dakikalar, RTO ise bir saatin altında hedeflenir. Bu iki sayı, altyapı ve yedekleme maliyetini asıl belirleyen şeydir; önce bunları yazıya döküyoruz.",
          },
          {
            q: "Siteyi taşırken SEO etkilenir mi?",
            a: "Taşımanın kendisi değil, hatalı yapılması etkiler. Kural seti basit: URL yapısı birebir korunur, tüm alt alan/adres yönlendirmeleri test edilir, robots/sitemap/canonical değerleri yeni ortamda doğrulanır, hız ölçümü taşınan ortamda da eşit veya iyi çıkar ve bu doğrulanmadan DNS kesilir. Taşıma sonrası Search Console'da indekslenme ve tarama verisi iki hafta günlük izlenir.",
          },
          {
            q: "Saldırıya uğrarsak ilk kim ne yapar?",
            a: "Felaket planında bu senaryo yazılı olmalı ve dört adım içerir: yayını durdurma/karantina kararı, temiz kurulum (yeni sunucu + doğrulanmış yedek), dosya bütünlüğü ve zafiyet kontrolü, ve KVKK/şirket içi bildirim kararları. Biz bu planı önceden yazıyoruz; kriz anında “kim erişecek, neyi onaylayacak” sorusuyla kaybedilen zaman, saldırının kendisinden daha maliyetlidir.",
          },
        ],
      },
      internal: {
        id: "ilgili-hizmetler",
        h2: "Altyapıyı Tamamlayan Katmanlar",
        paragraphs: [
          "Hosting; alan adı/DNS, CDN ve yayın hattı ile birlikte çalışır. Aşağıdaki sayfalar bu parçaları anlatıyor; şehir sayfalarında yerel hedef kitle için bölge ve gecikme notlarını bulabilirsiniz.",
        ],
      },
    },
    ctaTitle: "Altyapınızı ve yedek durumunuzu ölçelim",
    ctaText:
      "Mevcut sağlayıcı, trafik ve veri büyüklüğünüzü paylaşın; maliyet/performans karşılaştırması ve yedek-geri yükleme planıyla birlikte tek sayfalık öneri sunalım.",
  },

  "cloudflare-cdn": {
    h1: "Cloudflare ve CDN Yapılandırması: Hız, Korumali Trafik ve Akıllı Önbellek",
    definition: [
      "CDN (içerik dağıtım ağı), sitenizin statik varlıklarını ve çoğu zaman HTML yanıtını, ziyaretçiye coğrafi olarak yakın kenar sunuculardan sunan katmandır. Cloudflare bu işi, DNS, TLS, bot koruması, WAF ve cache kurallarıyla birlikte sunduğu için KOBİ'ler için en pratik çözümdür: tek panelde hız, güvenlik ve maliyet kontrolü.",
      "Beklenen kazanç üç başlıktır: daha düşük yükleme süresi (özellikle mobil ve şehir dışı/bölge dışı ziyaretçilerde), daha az kaynak tüketimi (sunucuya giden istek azalır, kampanya anında ayakta kalırsınız) ve daha az çöp trafik (bot/tarama istekleri kaynağa ulaşmaz). Yanlış yapılandırmada ise iki tipik zarar görülür: dinamik sayfaların cache'lenmesi (eski içerik gösterimi) ve gerçek IP'nin kaybolması (log/analitik/güvenlik bozulur).",
      "Tardigrad Software olarak Cloudflare'i “turuncu bulutu aç” düzeyinde değil, kural setiyle kuruyoruz: cache ayrımı, sayfa türüne göre proxy modu, güvenlik duvarı kuralları, rate-limit, e-posta/DNS kayıtlarının korunması ve uygulama tarafında gerçek IP çözümlemesi.",
    ],
    sections: {
      whyNeeded: {
        id: "neden-gerekli",
        h2: "CDN Katmanı Ne Çözer?",
        bullets: [
          { title: "Uzak bölgelerde yavaşlık", text: "Sunucu İstanbul'da, ziyaretçi Van'da veya Almanya'da; her varlık için gecikme katlanır.", icon: "Gauge" },
          { title: "Trafik sıçramaları", text: "Kampanya veya haber anında sunucu kaynakları tükenir; önbellek bu sıçramayı emer.", icon: "TrendingUp" },
          { title: "Bot ve tarama yükü", text: "Kırık link tarayıcıları, credential-stuffing ve agresif botlar kaynağı yorar; kenarda kesilir.", icon: "Shield" },
          { title: "TLS ve başlık disiplini", text: "Sertifika yönetimi, HSTS ve güvenlik başlıkları tek yerden uygulanabilir.", icon: "Lock" },
        ],
        miniCta: "Site adresinizi paylaşın; cache oranı, TTFB ve bot trafiği üzerinden kazanım tahminini tablo hâlinde çıkaralım.",
      },
      scope: {
        id: "paket-kapsami",
        h2: "Yapılandırma Kapsamı",
        checklist: [
          "DNS devralma ve kayıt temizliği: mevcut kayıtların Cloudflare'e taşınması, doğrulanmış proxy modları (turuncu/gri), gereksiz kayıtların ayrıştırılması",
          "Cache politikası: statik varlıklarda uzun süre, HTML'de sayfa türüne göre karar (kurumsal site için “cache everything” yerine kurallı yaklaşım), cache kontrol/etag davranışı",
          "Kurallar (Page Rules / Cache Rules): yönetim paneli, sepet/ödeme, giriş sayfaları ve API uçlarının önbellek dışı bırakılması",
          "Gerçek istemci IP'si: başlık yapılandırması ve uygulama tarafında çözümleme; analitik/güvenlik loglarının bozulmaması",
          "TLS modu seçimi ve sertleştirme: Full (strict), sertifika otomasyonu, minimum TLS sürümü, HSTS ve otomatik karma içerik düzeltmesi",
          "Bot ve WAF: yönetilen kurallar, saldırı modu, özel kurallar (wp-admin/panel yollarını coğrafi/IP kısıtı), rate-limit",
          "Güvenlik başlıkları: CSP, X-Frame-Options/frame-ancestors, Referrer-Policy, Permissions-Policy; Next.js tarafıyla uyumlu kurulum",
          "Resim ve medya: Polish/webp dönüştürme kararları, boyut limitleri ve optimize edilmiş görsellerle çakışmama",
          "E-posta koruması: MX/SMTP geçişinin bozulmaması, grproxy kuralları, DKIM/DMARC kayıtlarının dokunulmadan taşınması",
          "Analitik ve hız ölçümü: Web Analytics/Real User Monitoring ile önce/sonra TTFB-LCP kıyası, Core Web Vitals takibi",
          "Kokpit ve dokümantasyon: kimin hangi ayarı değiştirebildiği, değişiklik günlüğü ve acil durum “DNS yalnız” geri dönüş planı",
        ],
      },
      process: {
        id: "surec",
        h2: "Kurulum Süreci: 6 Adım",
        steps: [
          { title: "1. Ölçüm (0,5-1 gün)", text: "Mevcut hız, önbellek vur oranı ve trafik dağılımı ölçülür. Çıktı: referans metrik tablosu (önce/sonra karşılaştırması için).", },
          { title: "2. Kayıt ve DNS hazırlığı (0,5-1 gün)", text: "Kayıtlar dökülür, TTL düşürülür, proxy modları ve e-posta kayıtları planlanır. Çıktı: taşınma listesi.", },
          { title: "3. Kural tasarımı (0,5-1 gün)", text: "Cache/güvenlik/başlık kuralları sayfa türlerine göre yazılır; “neler önbelleğe alınmayacak” açıkça listelenir. Çıktı: onaylı kural seti.", },
          { title: "4. Kurulum ve uygulama uyumu (1-3 gün)", text: "Cloudflare yapılandırması ve sunucu/uygulama tarafı (IP çözümleme, başlıklar) birlikte ayarlanır. Çıktı: test raporu.", },
          { title: "5. Yayın ve doğrulama (0,5-1 gün)", text: "İsim sunucuları değiştirilir; sepet/ödeme/giriş akışları ve e-posta testi yapılır. Çıktı: canlı + doğrulama notu.", },
          { title: "6. İyileştirme döngüsü", text: "İki haftalık ölçümle kural ince ayarı; vur oranı, TTFB ve bloklanan bot sayısına göre sıkılaştırma. Çıktı: aylık not.", },
        ],
      },
      benefits: {
        id: "faydalar",
        h2: "Ölçülen Kazanımlar",
        metrics: [
          { value: "-%30-60", label: "statik varlıklarda yükleme süresi; uzak bölgelerde daha belirgin" },
          { value: "-%40-70", label: "sunucuya ulaşan istek (önbellek vur oranına göre)" },
          { value: "azalan", label: "bot/tarama kaynaklı CPU ve log yükü" },
          { value: "tek panel", label: "DNS + TLS + WAF + cache; dağılım kaynaklı hata azalır" },
        ],
        bullets: [
          { title: "Kampanya güvenliği", text: "Trafiği karşılamak için sunucuyu büyütmek yerine önbelleğe almak çoğu durumda daha ucuzdur.", icon: "Rocket" },
          { title: "Daha az saldırı yüzeyi", text: "Origin sunucu doğrudan erişime kapanır; bilinen zafiyet taramaları ve brute-force denemeleri kesilir.", icon: "ShieldCheck" },
          { title: "SEO'ya dost hız", text: "LCP ve TTFB iyileşmesi, Core Web Vitals raporlarına olumlu yansır.", icon: "TrendingUp" },
          { title: "Maliyet kontrolü", text: "Bant genişliği ve bulut çıkış ücretleri düşer; özellikle medya ağırlıklı sitelerde fark büyüktür.", icon: "Coins" },
        ],
      },
      audience: {
        id: "kimler-icin",
        h2: "Kimler İçin Uygun?",
        bullets: [
          { title: "Yavaş açılan kurumsal siteler", text: "Görsel ağırlıklı, mobilde geciken, uzak illerde yavaşlayan yapılar.", icon: "Gauge" },
          { title: "Trafik sıçrayan kampanyalar", text: "Reklam/fuar/haber dönemlerinde kesinti yaşayan siteler.", icon: "TrendingUp" },
          { title: "Giriş/paneli hedef alınan sistemler", text: "CRM, müşteri paneli ve yönetim ekranları bot saldırılarına açık yapılar.", icon: "Lock" },
          { title: "E-ticaret ve kataloglar", text: "Binlerce varlık, yoğun statik trafik ve sepet tutarlılığı dengesi gereken siteler.", icon: "ShoppingBag" },
        ],
      },
      whyUs: {
        id: "neden-biz",
        h2: "Neden Tardigrad Software?",
        bullets: [
          { title: "Cache'i uygulama tarafıyla birlikte kurarız", text: "Doğru kural, sayfaların nasıl üretildiğini bilmeyi gerektirir; Next.js'te statik/ISR/SSR ayrımına göre cache politikası yazıyoruz.", icon: "Code2" },
          { title: "E-postayı kırmak yok", text: "CDN geçişlerinde en sık zarar, MX/DKIM kayıtlarının proxy'e alınmasıdır; biz bu kayıtları dokunulmaz listeye yazıyoruz.", icon: "MailWarning" },
          { title: "Önce/sonra ölçümü", text: "“Daha hızlı oldu” yerine TTFB/LCP/vur oranı rakamlarını paylaşıyoruz.", icon: "LineChart" },
          { title: "Geri dönüş planı hazır", text: "Her adımda DNS yalnız modu ve kural yedeği bulunur; sorun çıkarsa tek hareketle eski duruma dönülür.", icon: "RotateCcw" },
        ],
      },
      faq: {
        id: "sss",
        h2: "Cloudflare / CDN Hakkında Sıkça Sorulanlar",
        faq: [
          {
            q: "Cloudflare ücretsiz plan yeterli mi?",
            a: "Küçük ve orta ölçekteki kurumsal siteler için genelde evet: DNS, CDN, TLS, temel bot koruması ve sınırlı sayıda kural ücretsiz planda vardır. Paralı plana geçiş için üç tipik neden: ayrıntılı WAF kuralları/özel kurallar, görüntü optimizasyonu ve daha yüksek limitli cache ayarları, kurumsal SSO/sertifika ihtiyaçları. Kararı, hangi ücretsiz sınırına dayandığınızı göstererek veriyoruz — “ihtiyacınız var” diye değil.",
          },
          {
            q: "“Cache Everything” açmalı mıyız?",
            a: "Çoğu dinamik uygulamada hayır. Bu ayar, sepet/ödeme/giriş ve panel sayfalarını da önbelleğe alarak “başka müşterinin sepeti” gibi ciddi hatalar üretebilir. Doğrusu kural bazlı yaklaşım: statik varlıklarda uzun ömür, HTML için yalnızca oturumsuz ve kişiselleştirilmemiş sayfa türlerinde cache, cookie'suz/asset türlerine göre ayrım. Kuralları sayfa türü listenize göre yazıyor ve test ediyoruz.",
          },
          {
            q: "Gerçek IP'mizi kaybeder miyiz, analitik bozulur mu?",
            a: "Yapılandırılmazsa evet: log ve analitikte tüm ziyaretçiler Cloudflare IP'siyle görünür. Çözüm standart: CF-Connecting-IP / X-Forwarded-For başlıklarının uygulanması, ters vekil sunucuda “trusted proxy” tanımı, GeoIP/ülke verisinin Cloudflare başlığından okunması ve gerekiyorda IP tabanlı kısıtların yeniden yazılması. Biz bu kısmı kurulum listesinin ilk maddelerine yazıyoruz.",
          },
          {
            q: "Cloudflare kullanınca SEO'ya zararı olur mu?",
            a: "Hayır; doğru kurulumda faydası olur. Dikkat edilen üç nokta: yönlendirmelerin (ör. www ↔ apex, HTTP → HTTPS) tek adımda ve doğru tip (301) yapılması, tüm kenar/alt alan adlarında tutarlı kanonik davranış, ve robots/sitemap dosyalarının önbellek/kural dışı bırakılması. Hız iyileşmesi de Core Web Vitals tarafına olumlu yansır.",
          },
          {
            q: "Zaten host'un kendi CDN'i var, ikisi birlikte olur mu?",
            a: "Önermiyoruz: üst üste iki CDN, önbellek hatalarını ve hata ayıklamayı zorlaştırır. Doğru yaklaşım bir katman seçmek ve diğerini kapatmaktır. Pratikte seçim şöyle olur: varlıkları host'un kendi CDN'i iyi sunuyorsa (ve güvenlik/erişim kontrolü sizin için yetiyorsa) Cloudflare'i yalnızca DNS + WAF için (DNS-only, gri bulut) kullanmak; hız ve bot kontrolü öncelikliyse Cloudflare'e proxy verip host'un CDN'ini kapatmak. İkisi arasında kalan karışık kurulum, çoğu “garip cache” sorununun kaynağıdır.",
          },
        ],
      },
      internal: {
        id: "ilgili-hizmetler",
        h2: "CDN Katmanının Bağlandığı Yerler",
        paragraphs: [
          "CDN; alan adı/DNS, hosting ve teknik SEO kararlarıyla birlikte çalışır. Aşağıdaki sayfalar bu bağımlılıkları anlatıyor; şehir sayfalarında bölgesel gecikme ve yerel SEO notlarını bulabilirsiniz.",
        ],
      },
    },
    ctaTitle: "Önce ölçüm, sonra kural",
    ctaText:
      "Site adresinizi ve mevcut hız verilerinizi paylaşın; cache kuralları, IP/güvenlik ayarları ve beklenen kazanç için tek sayfalık bir yapılandırma planı çıkaralım.",
  },

  "vercel-deployment": {
    h1: "Vercel Deployment: Next.js Uygulamalarını Yayına Alma Hattı",
    definition: [
      "Vercel deployment, Next.js ile yazılmış bir sitenin/uygulamanın önizleme, derleme ve yayın adımlarını otomatize eden yayın hattıdır: her git push için otomatik önizleme ortamı, main dalında üretim sürümü, atomik yayın ve tek tuşla geri alma. Bu, “FTP ile dosya atma” alışkanlığının modern karşılığıdır ve ekip çalışmasını değiştirir.",
      "Doğru kurulmadığında üç tipik sorun görülür: ortam değişkenlerinin eksikliğiyle “çalışan sayfa, boş üretime” dönüşmesi, görüntü/optimizasyon ve edge fonksiyonlarının yanlış bölgede çalışıp gecikme üretmesi, ve analytics/SEO verisinin hangi derlemeden geldiğinin bilinmemesi. Doğru kurulduğunda ise yayıncılık sıkıntısızdır: pazarlama ekibi içeriği yayar, yazılım ekibi gece yarısı sunucuya bağlanmaz.",
      "Tardigrad Software olarak kurulumu uçtan uca yapıyoruz: repo bağlantısı, derleme ayarları, ortam değişkenleri, özel alan adı ve DNS, görüntü optimizasyonu, ISR/edge stratejisi, analitik ve güvenlik başlıkları, önizleme paylaşım alışkanlığı ile deploy bildirimleri.",
    ],
    sections: {
      whyNeeded: {
        id: "neden-gerekli",
        h2: "Manuel Yayın Neden Yeterli Değil?",
        bullets: [
          { title: "Çalışan kopya, bozuk yayın", text: "Sunucuda elle düzenlenen dosyalar, bir sonraki derlemede kaybolur; “dün düzeltmiştik” döngüsü başlar.", icon: "FileWarning" },
          { title: "Geri alama yok", text: "Hatalı sürümde geri dönüş, yedekten elle kurulum demektir; dakikalar yerine saatler sürer.", icon: "RotateCcw" },
          { title: "Önizleme yok", text: "Tasarım/içerik onayı canlıda yapılır; hata müşteri tarafından görülür.", icon: "Eye" },
          { title: "Değişken karmaşası", text: "API anahtarı ve site adresi ortamlara göre elle kopyalanır; unutulan değer sessiz hata üretir.", icon: "Settings2" },
        ],
        miniCta: "Repo ve ortam yapınızı anlatın; önizleme, değişken ve DNS kurulumunu tek oturumda planlayalım.",
      },
      scope: {
        id: "paket-kapsami",
        h2: "Kurulum Kapsamı",
        checklist: [
          "Vercel projesi ve repo bağlantısı: dal eşlemesi, derleme komutu, çıktı/monorepo ayarları, cache davranışı",
          "Ortam değişkenleri yönetimi: üretim/önizleme/geliştirme ayrımı, sır değeri gizliliği ve rotasyon prosedürü",
          "Özel alan adı: apex + www stratejisi, DNS devralma, TLS otomasyonu, yönlendirme ve HSTS kararı",
          "Önizleme bağlantıları: her PR için paylaşılabilir sürüm, şifre koruması ve ekip içi yorum alışkanlığı",
          "Atomik yayın ve geri alma: deploy'lar arani anlık geçiş, tek tıkla önceki sürüme dönme ve yayın günlüğü",
          "Next.js yapılandırması: görüntü alan adları, ISR/revalidate kararları, middleware ve edge fonksiyon bölgesi",
          "Performans bütçesi ve izleme: Core Web Vitals (RUM) entegrasyonu, derleme uyarıları, büyük paket raporları",
          "Analitik ve SEO: GA4/veri olayları, sitemap/robots'un her derlemede üretilmesi, OG görsel uçlarının çalışırlığı",
          "Güvenlik: WAF/CSRF/robots filtre kararları, korumalı önizleme erişimi, API rate limit stratejisi",
          "Bildirim ve otomasyon: Slack/e-posta deploy bildirimleri, başarısız derleme eskalasyonu, zamanlanmış görevler (cron)",
          "Ekip rolleri: kim yayınlar, kim önizleme onaylar, pazılama ekibinin erişim seviyesi",
        ],
      },
      process: {
        id: "surec",
        h2: "Kurulum Süreci: 6 Adım",
        steps: [
          { title: "1. Proje hazırlığı (0,5-1 gün)", text: "Bağımlılıklar, derleme ayarları, node sürümü ve ortam değişkenlerinin listesi. Çıktı: derlenebilir repo + değişken envanteri.", },
          { title: "2. Vercel bağlantısı (0,5 gün)", text: "Proje oluşturma, dal eşlemesi, önizleme ayarları. Çıktı: çalışan önizleme linkleri.", },
          { title: "3. Alan adı ve DNS (0,5-1 gün)", text: "Domain bağlama, DNS doğrulama, yönlendirme ve TLS. Çıktı: güvenli canlı adres (apex/www tutarlı).", },
          { title: "4. Next.js ince ayarı (1-3 gün)", text: "Görsel, ISR, edge/middleware, analitik ve OG ucu doğrulamaları. Çıktı: hız ve SEO metrik raporları.", },
          { title: "5. Yayın disiplini (0,5-1 gün)", text: "PR → önizleme → onay → yayın akışı ve bildirim kurulumu. Çıktı: çalışma prosedürü + ekip eğitimi.", },
          { title: "6. Destek ve iyileştirme", text: "İlk iki hafta derleme/hata izleme; maliyet ve kullanım raporunun okunması. Çıktı: canlı yayın hattı.", },
        ],
      },
      benefits: {
        id: "faydalar",
        h2: "Kazanımlar",
        metrics: [
          { value: "<1 dk", label: "geri alma süresi (önceki deploy'a dönme)" },
          { value: "her PR", label: "için tıklayabilir önizleme; onay canlıya kalmadan verilir" },
          { value: "0", label: "elle sunucu dosyası düzenleme; kaynak repo'dur" },
          { value: "1 panel", label: "log, analitik, hız ve deploy geçmişi tek yerde" },
        ],
        bullets: [
          { title: "Sunucu bakımı yok", text: "İşletim sistemi yamaları, web sunucusu ve SSL sürekliliği platformda; ekip geliştirmeye odaklanır.", icon: "Zap" },
          { title: "Kenar dağıtım hızı", text: "Statik ve ISR sayfalar dünya genelinde yakından sunulur; uzak illerde dahi açılış kısa kalır.", icon: "Globe" },
          { title: "Denetlenebilirlik", text: "Hangi sürüm ne zaman yayında, hangi ortam değişkeniyle: deploy detaylarında okunur.", icon: "FileText" },
          { title: "Ölçek maliyeti şeffaf", text: "Kullanım (fonksiyon süresi, bant genişliği, build dakika) panelde görünür; sürpriz fatura yerine plan vardır.", icon: "Coins" },
        ],
      },
      audience: {
        id: "kimler-icin",
        h2: "Kimler İçin Uygun?",
        bullets: [
          { title: "Next.js ile yazılan siteler", text: "Kurumsal site, katalog, blog ve pazarlama sayfaları; statik/ISR avantajı burada belirgindir.", icon: "Code2" },
          { title: "Küçük ürün ekipleri", text: "DevOps'u olmayan 2-8 kişilik ekipler; bakım yükünü platforma devretmek en rasyonel seçimdir.", icon: "Users" },
          { title: "Sık içerik yayımlayanlar", text: "Editörün kendi yayını anında canlıya alması gereken yapılar.", icon: "FileText" },
          { title: "Kampanya/ölçeklenme", text: "Trafik sıçraması olan lansmanlar; ölçek eşiği ve CDN davranışı platformda hazırdır.", icon: "Rocket" },
        ],
      },
      whyUs: {
        id: "neden-biz",
        h2: "Neden Tardigrad Software?",
        bullets: [
          { title: "Next.js'i biz yazıyoruz", text: "ISR, middleware ve görüntü yapılandırması gibi ayarlar, kodu bilmeyi gerektirir; “deploy var ama cache bozuk” tablosunu biz kurmayız.", icon: "Layers" },
          { title: "SEO'yu deploy'a bağlıyoruz", text: "Sitemap, robots, kanonik ve OG uçlarının her yayında doğru üretilmesi kontrol listesindedir.", icon: "Search" },
          { title: "Maliyeti planlarız", text: "Fonksiyon süresi ve build dakika tüketimini öngörüp, gerekiyorsa statik üretime ağırlık verdiriyoruz.", icon: "Calculator" },
          { title: "Taşınabilirlik korunur", text: "Standart Next.js çıktısı ve Docker alternatifi bırakıyoruz; yarın kendi sunucunuza geçmek yeniden yazım gerektirmez.", icon: "Truck" },
        ],
      },
      faq: {
        id: "sss",
        h2: "Vercel Deployment Hakkında Sıkça Sorulanlar",
        faq: [
          {
            q: "Vercel'in Türkiye'deki ziyaretçilere etkisi nedir; veri yerelliği sorunu yaratır mı?",
            a: "Statik ve ISR ile üretilmiş sayfalar Kenar (edge) ağ üzerinden sunulduğu için Türkiye'den erişim genelde hızlıdır; problem, yoğun sunucu taraflı render (SSR) ve veriyoğun API uçlarında ortaya çıkar: bu istekler uygulamanızın veritabanına gider ve kıtalararası gecikme ekler. Çözüm: veritabanını yakın bölgeye almak, SSR yerine statik/ISR'ye ağırlık vermek ve cache ile başlamak. Hangi sayfanın nerede üretileceğini birlikte planlıyoruz.",
          },
          {
            q: "Kendi sunucumuzdan Vercel'e geçiş maliyeti ne?",
            a: "Geçişin büyük kısmı yapılandırma işidir: ortam değişkenleri, alan adı/DNS, görüntü alan adları, özel header/redirect kuralları ve cron işlerinin taşınması. Zor kısım, sunucuya “yapışmış” özelliklerdir: uzun süreçli işler, websocket, doğrudan dosya yazma veya özel sistem bağımlılıkları. Bunlar için kuyruk, nesne deposu veya ayrı bir worker servisi gibi alternatifler kuruyoruz. Tipik bir kurumsal sitede 1-4 gün, uygulama tarafında 1-3 hafta gerçekçi bir süredir.",
          },
          {
            q: "Ücretsiz plan yeterli mi, ne zaman Pro gerekir?",
            a: "Tek site ve küçük ekipler için ücretsiz plan genelde yeter; sınırlar kişisel/hobi kullanımına göre tanımlıdır ve ticari kullanımda Pro beklenir. Pro'ya geçiş tetikleyicileri şunlardır: ekip üyeleri ve rol yönetimi, korumalı önizlemeler, daha yüksek build dakika/kullanım limitleri, gelişmiş analitik ve SLA beklentisi. Önerimiz, aylık maliyeti ziyaretçi/talep sayısına oranlayarak değerlendirmektir — çoğu KOBİ'de fark, tek bir reklam kampanyasının günlük maliyetinden küçüktür.",
          },
          {
            q: "Veritabanı ve backend nerede olsun?",
            a: "Yaygın iki kurulum var. Birincisi, Vercel üzerinde Next.js API rotaları + yönetilen veritabanı (Supabase, Neon, PlanetScale gibi) — en az operasyon yükü, hızlı başlangıç. İkincisi, ayrı bir uygulama/worker servisi (Railway, Fly.io, kendi VPS) + Vercel'in yalnızca ön yüz ve pazarlama sayfaları için kullanılması. Ağır iş kuyruğu, uzun süreli işlem veya e-posta/entegrasyon yoğunluğu olan projelerde ikinci model daha dayanıklıdır; kararı veri ve işlem desenine göre veriyoruz.",
          },
          {
            q: "Deploy sırasında site kesintiye uğrar mı?",
            a: "Hayır: yayın atomiktir. Yeni derleme tamamlandığında üretim adresi tek adımda yeni sürüme işaret eder, önceki sürüm “instant rollback” ile anında geri alınabilir. Yine de iki şeye dikkat ediyoruz: veritabanı migration'larının geri alınabilir tasarlanması (geri alma, şemayı geri almaz) ve zorunlu bir kesinti varsa bunu trafiğin dip saatine almak.",
          },
        ],
      },
      internal: {
        id: "ilgili-hizmetler",
        h2: "Yayın Hattının Bağlandığı Katmanlar",
        paragraphs: [
          "Deploy; alan adı/DNS, hosting/CDN, veritabanı ve performans işleriyle birlikte planlanır. Aşağıdaki sayfalar bu katmanları anlatıyor.",
        ],
      },
    },
    ctaTitle: "Yayın hattını birlikte kuralım",
    ctaText:
      "Repo, ortam değişkenleri ve alan adı durumunuz netleşsin; önizleme akışı, DNS ve ISR/görüntü ayarları dâhil tek sayfalık kurulum planıyla dönelim.",
  },

  "supabase-postgresql": {
    h1: "Supabase / PostgreSQL Veritabanı Katmanı: Güvenli, Sorgulanabilir, Ölçeklenen",
    definition: [
      "Supabase, PostgreSQL üzerine kurulmuş bir uygulama arka ucudur: ilişkisel veritabanı, satır seviyesi güvenlik politikaları (RLS), kimlik (auth), depolama (dosyalar), gerçek zamanlı abonelikler ve fonksiyonlar tek pakette gelir. Temel avantajı, PostgreSQL'in sorgu gücünü kaybetmeden kimlik/dosya/gerçek zaman katmanını hazır vermesi ve bu sayede küçük ekiplerin haftalar kazanmasıdır.",
      "Bu sayfadaki “PostgreSQL” vurgusu önemlidir: doğru tercih çoğu zaman Supabase değil, düz Postgres (Neon, RDS, kendi VPS'iniz) olabilir. Ölçüt basittir: çok kiracılı bir ürün mü, iç panel mi, dosya/gerçek zaman ihtiyacı var mı, sorgu ağırlığınız nedir, ekip SQL'e ne kadar hâkim? Bu soruların cevabı mimariyi belirler.",
      "Tardigrad Software olarak veri katmanını şemayla başlatıyoruz: tablo/ilişki tasarım, indeks planı, RLS politikaları, migration disiplini, yedek/geri yükleme ve maliyet kontrolü. Ayrıca Postgres'i ürününüzün “kural motoru” olarak kullanmayı tercih ediyoruz: doğrulama ve hesap, uygulamanın rastgele noktalarına değil kısıt/tetik/fonksiyon katmanına yazılır.",
    ],
    sections: {
      whyNeeded: {
        id: "neden-gerekli",
        h2: "Hazır Backend Yerine Neden İlişkisel Veri + RLS?",
        paragraphs: [
          "Doküman tabanlı NoSQL çözümler hızlı başlangıç sunar; ancak işletme verisi ilişki ister: müşteri ↔ sipariş ↔ satır ↔ ödeme ↔ fatura. Bu ilişkiler üzerinde raporlama, bütünlük kısıtı ve transaction gereksinimi doğduğunda, ilişkisel veritabanı sade ve ucuz bir tercih hâline gelir.",
        ],
        bullets: [
          { title: "Raporlama acısı", text: "İç içe dokümanlarda JOIN ve toplu ölçüm, ilişkisel modele göre pahalıdır; yönetim raporu gecikir.", icon: "BarChart3" },
          { title: "Veri bütünlüğü yok", text: "Kısıt olmadığı için yetim kayıt, çift stok hareketi ve tutarsız durum birikir.", icon: "AlertTriangle" },
          { title: "Yetki uygulamada", text: "Her sorguda “kiracı filtresi” kodla hatırlanır; bir yerde unutulursa veri sızıntısı doğar.", icon: "Shield" },
          { title: "Ölçek kararı geç gelir", text: "Büyüme başlayınca indeks/şema/maliyet kararları yeniden yazımı zorunlu kılar.", icon: "TrendingUp" },
        ],
        miniCta: "Veri modelinizi ve kullanıcı tiplerinizi anlatın; şema, RLS ve yedek planı için bir sayfalık taslak çıkaralım.",
      },
      scope: {
        id: "paket-kapsami",
        h2: "Kapsam",
        checklist: [
          "Şema tasarımı: tablo/ilişki modelleri, birinci normal form dengesi, JSONB kullanım kuralı (ne zaman esnek, ne zaman sütun)",
          "Kimlik ve oturum: e-posta, OAuth (Google/Microsoft), magic link; rol/grup yapısı ve kiracı (tenant) eşlemesi",
          "RLS politikaları: kiracı bazlı “sadece kendi verisi”, yönetici istisnaları, yazma/okuma ayrımı ve politika testleri",
          "İndeks ve sorgu planı: yavaş sorgu envanteri, birleşik indeksler, sayfalama (keyset) ve N+1 temizliği",
          "Migration disiplini: sürüm kontrollü şema değişiklikleri, geri alınabilirlik, sıfır kesintili yaklaşım (yalnız ekle, sonra temizle)",
          "Doğruluk katmanı: CHECK kısıtları, zorunlu alanlar, enum durum makinesi ve çifte yazmayı engelleyen unique kuralları",
          "Kâr amacı güden veride tutarlılık: sipariş/stok/tahsilat gibi akışlarda transaction ve idempotens (aynı isteğin iki kez uygulanmaması)",
          "Dosya/medya: Supabase Storage veya S3 uyumlu depo; erişim token'ları, boyut/tip doğrulama, görüntü dönüştürme ve CDN önü",
          "Realtime ve bildirim: abonelik gerektiren ekranlar (panel, kuyruk) ve webhook/kuyruk alternatifi kararları",
          "Yedekleme ve geri yükleme: günlük döküm + PITR, kiracı bazlı kurtarma provası ve saklama politikası",
          "İzleme ve maliyet: sorgu istatistikleri, bağlantı sayısı, tablo büyüme hızı, disk/ağ tüketimi ve uyarı eşikleri",
          "Veri güvenliği: şifreleme beklentileri, hassas alan maskeleme, dışa aktarma yetkisi ve işlem günlüğü",
        ],
      },
      process: {
        id: "surec",
        h2: "Kurulum Süreci: 6 Adım",
        steps: [
          { title: "1. Alan ve veri modeli (1-4 gün)", text: "Varlıklar, ilişkiler ve durum makinesi yazılır; sorgu senaryoları (rapor, liste, detay) örneklenir. Çıktı: ER şeması + senaryo listesi.", },
          { title: "2. Sağlayıcı kararı (0,5-1 gün)", text: "Supabase / yönetilen Postgres / kendi sunucunuz: operasyon yükü, ek özellikler ve maliyet kıyası. Çıktı: karar notu.", },
          { title: "3. Şema + RLS kurulumu (2-6 gün)", text: "Migration'lar, kısıtlar, indeksler ve politikalar yazılır; testleri ile birlikte gelir. Çıktı: sürüm kontrollü veritabanı.", },
          { title: "4. Uygulama entegrasyonu (2-8 gün)", text: "Sunucu taraflı erişim deseni, ORM/istemci seçimi, dosya/gerçek zaman bağlantıları. Çıktı: uçtan uca çalışan akışlar.", },
          { title: "5. Performans ve güvenlik taraması (1-3 gün)", text: "Yavaş sorgu, eksik indeks, bağlantı sızıntısı ve politika boşlukları kontrolü. Çıktı: bulgu + düzeltme listesi.", },
          { title: "6. Yedek/izleme ve devir", text: "Yedek hattı, uyarı eşikleri, operasyon notu ve ekibin kullanacağı SQL araçları. Çıktı: canlı + dokümante sistem.", },
        ],
      },
      benefits: {
        id: "faydalar",
        h2: "Kazanımlar",
        metrics: [
          { value: "haftalar", label: "kimlik/dosya/realtime katmanını hazır alarak kazanılan süre" },
          { value: "tek kural", label: "RLS ile kiracı yalıtımı; kod tekrarına bağlı güvenlik açığı azalır" },
          { value: "sorgu başına", label: "indeks ve plan çalışmasıyla tipik gecikme düşüşü (gözlem)" },
          { value: "0 veri kaybı", label: "hedefi değil ama net RPO; döküm + PITR ile saatler içinde geri dönüş" },
        ],
        bullets: [
          { title: "Raporlama doğal gelir", text: "İlişkisel şemada yönetim raporları ek altyapı gerektirmez; SQL ile üretilir.", icon: "LineChart" },
          { title: "Entegrasyonlar kolaylaşır", text: "Ön muhasebe, kargo ve ödeme verisi için temiz anahtarlar ve tek kaynak olur.", icon: "Plug" },
          { title: "Kurumsal müşteriye hazır", text: "Politika ve log yapısı, güvenlik sorularını cevaplamanızı kolaylaştırır.", icon: "ShieldCheck" },
          { title: "Maliyet öngörülebilir", text: "Bağlantı, disk ve sorgu desenleri ölçüldüğü için artış planlanır; bulut sürprizi azalır.", icon: "Coins" },
        ],
      },
      audience: {
        id: "kimler-icin",
        h2: "Kimler İçin Uygun?",
        bullets: [
          { title: "Yeni SaaS ürünleri", text: "Kiracı/yetki/dosya ihtiyacını hızlı çözmek isteyen ekipler.", icon: "Rocket" },
          { title: "Kurum içi paneller", text: "CRM/iş takip/stok tipi uygulamalar; veri bütünlüğü kritik.", icon: "LayoutDashboard" },
          { title: "Karmaşık katalog siteleri", text: "Ürün varyantı, stok ve fiyat ilişkisi olan siteler.", icon: "Package" },
          { title: "Postgres'e taşınan NoSQL'cular", text: "Rapor ve bütünlük yükü büyüyen yapılar.", icon: "Database" },
        ],
      },
      whyUs: {
        id: "neden-biz",
        h2: "Neden Tardigrad Software?",
        bullets: [
          { title: "Aracı katmanlar kadar SQL'i de severiz", text: "ORM varsayılanlarının ürettiği N+1 ve indeks eksiklerini koda bakarak değil, EXPLAIN ile buluyoruz.", icon: "Search" },
          { title: "Politika testleri yazıyoruz", text: "RLS'in doğru çalıştığını otomatik testle kanıtlamadan “güvenli” demiyoruz.", icon: "CheckCheck" },
          { title: "Supabase'e kilitlemiyoruz", text: "Standart Postgres şeması ve migration'lar sayesinde taşınabilirlik korunur; platform değişikliği yeniden yazım olmaz.", icon: "GitBranch" },
          { title: "Maliyeti birlikte yönetiriz", text: "Bağlantı havuzu, sorgu deseni ve tablo büyümesi aylık okunur; planı veriyle büyütüyoruz.", icon: "Calculator" },
        ],
      },
      faq: {
        id: "sss",
        h2: "Supabase / PostgreSQL Hakkında Sıkça Sorulanlar",
        faq: [
          {
            q: "Supabase mi, Firebase mi, yoksa düz Postgres mi?",
            a: "Üç ayrı aile, üç ayrı ihtiyaç. Firebase, doküman modeli ve gerçek zamanlılıkla mobil/etkileşim yoğun ürünlerde hızlıdır; ancak karmaşık ilişkiler, raporlama ve transaction tarafında zorlanırsınız. Supabase, Postgres + kimlik + dosya + realtime paketidir ve ilişkisel veri modelinde hızlı ilerletir. Düz Postgres (Neon/RDS/VPS), en esnek ve maliyet kontrolü yüksek seçenektir; ama kimlik/dosya/gerçek zaman katmanlarını siz kurarsınız. Seçim, veri şeklinize ve ekibin üstleneceği operasyon yüküne göre yapılır.",
          },
          {
            q: "RLS gerçekten gerekli mi, uygulamada filtrelemek yetmez mi?",
            a: "Çok kiracılı ve dış kullanıcıya açık sistemlerde gerekli. Uygulama katmanında filtreleme, yüzlerce sorgu satırının doğru hatırlanmasına bağlıdır; bir yerde unutulursa veri sızıntısı olur. RLS, kuralı veritabanına taşır: politika yoksa satır görünmez. Bu, hem yeni eklenecek ekranlarda hem de üçüncü parti araçların (raporlama, iş kuyruğu) doğru veriye erişmesini garanti eder. Biz politikaları yalnızca kurmakla kalmıyor, otomatik testleriyle doğruluyoruz.",
          },
          {
            q: "Verimiz Türkiye'de saklanabilir mi, KVKK açısından ne yapmalıyız?",
            a: "Supabase'te bölge seçimi (Frankfurt, Virginia, Singapur vb.) Türkiye'yi doğrudan içermez; veri yerelliği zorunluluğunuz varsa (bazı regüle sektörler ve kurumsal sözleşmeler) kendi VPS veya yerel sağlayıcı üzerinde Postgres kuruyoruz. KVKK tarafında ise şunu netleştiriyoruz: saklama süresi, hassas alanların maskelemesi, dışa aktarma/yetki politikası, işleyen-sorumlu ayrımına uygun alt işlemeci listesi (tedarikçi/altyapı) ve silme/anonimleştirme akışı. Veri envanterini şemayla birlikte çıkarıyoruz.",
          },
          {
            q: "Gerçek zamanlı (realtime) abonelik ne zaman gerekir?",
            a: "Panel ve operasyon ekranlarında nadiren, ama kuyruk/monitör tipli ekranlarda çok işe yarar: sipariş düşüşü, teknisyen durumu, stok kritik uyarıları. Yine de ilk tercihimiz basitlik: çoğu panelde 5-10 saniyelik yeniden doğrulama (revalidate/poll) yeterlidir; abonelik, hata ve maliyet yüzeyini büyütür. Gerçekten anlık akış gerekiyorsa kuyruk + kanal desenini birlikte kuruyoruz.",
          },
          {
            q: "Mevcut MySQL veya Excel verimizi taşıyabilir misiniz?",
            a: "Evet, taşıma rutin bir iştir ve genelde en riskli kısmı tiplerle ilgili değildir, temizliktir. MySQL/MariaDB'den Postgres'e geçişte tarih/saat dilimi, karakter seti (utf8), enum/boolean karşılıkları, otomatik artan anahtarlar ve sorgu farkları (LIKE/collation, GROUP BY davranışı) ele alınır. Excel kaynaklı taşımalarda ise yinelenen kayıt birleştirme ve birim/telefon normalize işi eklenir. İkisinde de önce salt-okunur eşzamanlı çalışma, sonra kesim yapılır; çift dönemde mutabakat raporu çıkarılır.",
          },
        ],
      },
      internal: {
        id: "ilgili-hizmetler",
        h2: "Veri Katmanının Üzerinde Çalışan Sistemler",
        paragraphs: [
          "Postgres/Supabase; multi-tenant mimari, yönetim paneli ve raporlama ile birlikte planlanır. Aşağıdaki sayfalar bu katmanları anlatıyor; şehir sayfalarında yerel veri/altyapı notlarını bulabilirsiniz.",
        ],
      },
    },
    ctaTitle: "Şemayı birlikte çizelim",
    ctaText:
      "Varlıklarınız, kiracı/yetki yapınız ve kritik sorgularınız konuşulsun; sağlayıcı kararı, RLS planı ve migration takvimi tek sayfada netleşsin.",
  },
}
