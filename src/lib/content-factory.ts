import type { ServiceContent, Service, FaqItem, IconBullet } from "@/types/content"
import { categoryById } from "@/data/categories"
import { processSteps } from "@/data/process"
import { site } from "@/data/site"
import { capitalize, hashString, pick } from "@/lib/utils"

/**
 * İçerik üretici (content-factory).
 *
 * 43 hizmet sayfasının tamamı aynı 11 blok sırasını uygular (Bölüm 6).
 * - Pilot sayfalar: `content` alanı elle yazılmıştır → burada yalnızca boş alanlar doldurulur.
 * - Diğer sayfalar: kategori tohumları + hizmet verisi ile üretilir; her hizmette
 *   anahtar kelime, ikincil kelimeler, hizmet no ve şehir bilgisiyle farklılaşır.
 *
 * Amaç: duplicate content riskini düşüren, okunabilir, satış odaklı metin.
 */

function sentences(seed: number, list: string[]): string {
  return pick(list, seed)
}

function kw(s: Service) {
  return s.primaryKeyword
}

function secondary(s: Service, seed: number): string {
  return pick(s.secondaryKeywords, seed)
}

function definition(s: Service, seed: number): string[] {
  const c = categoryById[s.category]
  return [
    `${s.title}, ${kw(s)} ihtiyaçlarını tek bir dijital temel üzerinde toplayan hizmet başlığıdır. ` +
      `Pratikte bu; doğru kurgulanmış sayfa yapısı, hızlı açılan arayüzler, ölçümlenebilir formlar ve ` +
      `sonradan eklenen her modülün bozmadığı bir mimari demektir. ${capitalize(secondary(s, seed))} ` +
      `aramalarında görünürlük bu temelin üzerine inşa edilir.`,
    `${site.name} yaklaşımında ${kw(s)} işi üç katmanda ele alınır: iş katmanı (hangi süreç, hangi rol, hangi veri), ` +
      `arayüz katmanı (kullanıcının gerçekten kullandığı ekranlar) ve teknik katman (hız, güvenlik, SEO, yayın hattı). ` +
      `${c.description}`,
    `Proje teslimi bir son değil başlangıçtır. Yayına çıktıktan sonra 30/60/90 gün periyotlarında ` +
      `kullanım ve performans verisi okunur; ${kw(s)} kapsamındaki iyileştirmeler bu veriye göre önceliklendirilir. ` +
      `Türkiye geneli tüm müşterilerimizde aynı akış işler; İstanbul, Ankara, İzmir veya herhangi bir ildeki ` +
      `ekibinizle uzaktan veya yerinde birlikte çalışırız.`,
  ]
}

function whyNeededPains(s: Service): IconBullet[] {
  const c = categoryById[s.category]
  const seed = hashString(s.slug)
  return c.pains.map((p, i) => ({
    title: p.title,
    text: `${p.text} ${kw(s)} projelerinde bu tablo genellikle ${
      i === 0 ? "talep kaybı" : i === 1 ? "yavaşlık ve mobil uyum sorunları" : "sürekli artan bakım maliyeti"
    } olarak geri döner; ${sentences(seed + i, [
      "ertelendikçe maliyeti artar.",
      "büyümeyle birlikte katlanarak büyür.",
      "ekibin iş yapma biçimini yavaşlatır.",
    ])}`,
  }))
}

function scopeBullets(s: Service): string[] {
  const c = categoryById[s.category]
  const base = [...c.deliverables]
  const extra = [
    `${capitalize(kw(s))} için tek noktadan kurulum ve dokümante edilmiş yapı`,
    "Metin, görsel ve CTA değişikliklerini kendi ekibinizin yapabilmesi",
    `${capitalize(secondary(s, hashString(s.slug)))} hedefli açılış/başlangıç sayfaları`,
  ]
  const merged = [...base, ...extra]
  // 6-10 madde
  return merged.slice(0, Math.min(10, Math.max(6, merged.length)))
}

function benefitBullets(s: Service): { title: string; text: string; metric?: string }[] {
  const c = categoryById[s.category]
  const seed = hashString(s.slug + "b")
  const generated = [
    {
      title: "Bir elden takip",
      text: `Tasarım, kod, SEO ve altyapı ayrı satıcılara bölünmez; ${kw(s)} işinin tek bir sahibi olur.`,
    },
    {
      title: "Ölçülebilir iyileşme",
      text: sentences(seed, [
        "Her değişiklik öncesi/sonrası metrikle raporlanır; hissiyat yerine veri konuşur.",
        "Yayın sonrası ilk ay gösterim, form ve hız metrikleri birlikte izlenir.",
        "Değişiklikler etki analizi ile yayınlanır; geri alma planı hazırdır.",
      ]),
    },
    {
      title: "Sürekli bakım",
      text: "Aylık bakım anlaşmasıyla güncelleme, yedek ve izleme işleri kimseye hatırlatılmaz.",
      metric: "aylık",
    },
  ]
  return [...c.benefits, ...generated].slice(0, 6)
}

function audienceList(s: Service) {
  const c = categoryById[s.category]
  return c.audience.map((a) => ({
    ...a,
    note: `${a.note} — ${kw(s)} tarafında en sık karşılaştığımız senaryo budur.`,
  }))
}

function whyUsList(s: Service) {
  const c = categoryById[s.category]
  return c.whyUs.map((w) => ({ ...w }))
}

function faqList(s: Service): FaqItem[] {
  const c = categoryById[s.category]
  const generated: FaqItem[] = [
    {
      q: `${s.title} hizmetinin süresi ne kadar?`,
      a: `Kapsama göre değişir: tek bir ${kw(s)} işi için tipik takvim 2–6 hafta, ${c.title.toLowerCase()} ile birleşen projelerde 6–12 hafta. Ücretsiz ön analiz sonrası tahmini değil, sprint'lere bölünmüş kesin bir takvim paylaşıyoruz.`,
    },
    {
      q: `${s.title} fiyatı nasıl belirleniyor?`,
      a: `Fiyat; ekran/modül sayısı, içerik üretimi, entegrasyonlar ve bakım kapsamı ile belirlenir. ${site.name} olarak saatlik değil tek fiyat + tek takvim modeliyle çalışıyoruz; kapsam değişirse yazılı etki analizi çıkar.`,
    },
    {
      q: "Mevcut sistemimize ve verilerimize ne olur?",
      a: "Mevcut yapıyı silmek zorunda değiliz. Veri envanterini çıkarır, gerekli alanları taşır ve eski sistemi kademeli olarak devre dışı bırakırız. Redirect ve yedekleme planı olmadan canlıya çıkmıyoruz.",
    },
    {
      q: `${s.title} sonrası destek veriyor musunuz?`,
      a: `Evet. Teslim sonrası 30 gün hiperbakım dahildir; sonrasında aylık bakım anlaşması ile güvenlik güncellemeleri, yedek doğrulama, izleme ve ${kw(s)} üzerinde iyileştirme sprintleri yürütülür.`,
    },
    {
      q: "Hangi şehirlerde hizmet veriyorsunuz?",
      a: `Türkiye geneli uzaktan çalışıyoruz; merkezimiz İstanbul/${site.address.district}. ${s.cityPriority?.length ? "Yoğun olarak birlikte çalıştığımız şehirler: " + s.cityPriority.length + " il için ayrı lokal SEO sayfaları hazırladık." : "Onlarca il için sayfa ve süreç deneyimimiz var."} İstenirse toplantılar yerinde yapılır.`,
    },
  ]
  return [...c.faq, ...generated].slice(0, 8)
}

/** 11 bloklu servis içeriğini üretir; elle yazılmış (pilot) içerikte boş alanları doldurur. */
export function buildServiceContent(service: Service): ServiceContent {
  const seed = hashString(service.slug)
  const hand = service.content
  const c = categoryById[service.category]

  const base: ServiceContent = {
    h1: hand?.h1 ?? `${service.title} Hizmeti`,
    definition: hand?.definition ?? definition(service, seed),
    sections: {
      whyNeeded: {
        id: "neden-gerekli",
        h2: hand?.sections.whyNeeded.h2 ?? `${service.title} Neden Gerekli?`,
        paragraphs: hand?.sections.whyNeeded.paragraphs ?? [
          `Birçok firmada ${kw(service)} konusu, iş büyüyene kadar ertelenen bir başlık olarak kalır. ` +
            `Ertelenmenin maliyeti genellikle ilk ayda görünmez; üç ay sonra talep kaybı, çift veri girişi ve ` +
            `elle toplanan raporlar olarak faturaya yansır. Aşağıdaki üç tablo, ${c.title.toLowerCase()} ` +
            `projelerinde en sık gördüğümüz başlangıç noktalarıdır.`,
        ],
        bullets: hand?.sections.whyNeeded.bullets ?? whyNeededPains(service),
      },
      scope: {
        id: "ne-alirsiniz",
        h2: hand?.sections.scope.h2 ?? "Tardigrad Software ile Ne Alırsınız?",
        paragraphs: hand?.sections.scope.paragraphs ?? [
          `Kapsam, ${kw(service)} işinde “ne teslim ediliyor?” sorusunun net cevabıdır. ` +
            `Aşağıdaki liste, sözleşmeye yazdığımız ve teslimde tek tek kontrol ettiğimiz maddelerdir.`,
        ],
        checklist: hand?.sections.scope.checklist ?? scopeBullets(service),
      },
      process: {
        id: "nasil-calisiriz",
        h2: hand?.sections.process.h2 ?? "Nasıl Çalışıyoruz? 9 Adım",
        paragraphs: hand?.sections.process.paragraphs ?? [
          `${capitalize(kw(service))} projesini dokuz adımda yürütüyoruz. Her adımın bir çıkış çıktısı vardır; ` +
            `çıktı onaylanmadan sonraki adıma geçilmez. Bu, hem sürpriz maliyetleri hem de “ne oldu?” belirsizliğini ortadan kaldırır.`,
        ],
        steps: hand?.sections.process.steps ?? processSteps.map((step, i) => ({
          title: `${i + 1}. ${step.title}`,
          text:
            i === 1
              ? `${step.text} ${capitalize(kw(service))} tarafında hedef, ölçülebilir bir metrik olarak tanımlanır.`
              : i === 3
                ? `${step.text} Kod tabanı, ${kw(service)} için tekrar kullanılabilir bileşenler üzerine kurulur.`
                : step.text,
        })),
      },
      benefits: {
        id: "faydalar",
        h2: hand?.sections.benefits.h2 ?? `${service.title} Faydaları`,
        paragraphs: hand?.sections.benefits.paragraphs ?? [
          `Fayda, “iş bitti” demek değil; işletmenin ölçebildiği farktır. ${kw(service)} yatırımlarında beklediğimiz ` +
            `etki, ilk 90 günde kullanım ve performans verisinde okunabilir hâle gelir.`,
        ],
        bullets: hand?.sections.benefits.bullets ?? benefitBullets(service),
        metrics: hand?.sections.benefits.metrics ?? [
          { value: "30/60/90", label: "gün ölçüm periyodu" },
          { value: "<2.5s", label: "LCP hedefi" },
          { value: "%100", label: "mobil öncelikli arayüz" },
        ],
      },
      audience: {
        id: "kimler-icin",
        h2: hand?.sections.audience.h2 ?? `${service.title} Kimler İçin Uygun?`,
        paragraphs: hand?.sections.audience.paragraphs ?? [
          `${service.title}; süreçleri netleşmiş, dijital kanalda büyüme hedefi olan firmalar için tasarlandı. ` +
            `Aşağıdaki dört profilden birine uyuyorsanız, ön analizde aynı dilde konuşuyoruz demektir.`,
        ],
        bullets: hand?.sections.audience.bullets ?? audienceList(service).map((a) => ({ title: a.sector, text: a.note })),
      },
      whyUs: {
        id: "neden-tardigrad",
        h2: hand?.sections.whyUs.h2 ?? "Neden Tardigrad Software?",
        paragraphs: hand?.sections.whyUs.paragraphs ?? [
          `${site.name}, web, özel yazılım, SaaS, SEO ve IT katmanlarını tek ekipte birleştirir. ` +
            `${capitalize(kw(service))} işinde de fark yaratan şey bu bütünlüktür: ayrı satıcılar arasındaki kaybolan işler bizde kaybolmaz.`,
        ],
        bullets: hand?.sections.whyUs.bullets ?? whyUsList(service),
      },
      faq: {
        id: "sss",
        h2: hand?.sections.faq.h2 ?? `${service.title} Hakkında Sıkça Sorulanlar`,
        paragraphs: hand?.sections.faq.paragraphs ?? [
          `Aşağıdaki yanıtlar, ${kw(service)} görüşmelerinde en çok sorulan sorular ve net cevaplarıdır. ` +
            `Listede olmayan bir başlık varsa ön analizde birlikte netleştiririz.`,
        ],
        faq: hand?.sections.faq.faq ?? faqList(service),
      },
      internal: {
        id: "ilgili",
        h2: hand?.sections.internal.h2 ?? `${service.title} ile Birlikte Planlananlar`,
        paragraphs: hand?.sections.internal.paragraphs ?? [
          `${capitalize(kw(service))} tek başına bir proje değil, daha büyük bir dijital dönüşüm adımının parçasıdır. ` +
            `Aşağıdaki hizmet ve şehir sayfaları, bu işi birlikte planladığımız komşu başlıklardır.`,
        ],
      },
    },
    ctaTitle: hand?.ctaTitle ?? `${service.title} için ücretsiz ön analiz alın`,
    ctaText:
      hand?.ctaText ??
      `20 dakikalık görüşmede ${kw(service)} kapsamınızı, hedef kitlenizi ve tahmini takvimi netleştiriyoruz; ardından tek fiyat, tek takvim yazılı olarak geliyor.`,
    image: hand?.image ?? service.image,
  }

  return base
}

/** Hizmet × şehir varyantı: lokal SEO sayfaları için üretilen içerik */
export function buildCityServiceContent(service: Service, cityName: string, region: string) {
  const title = `${service.title} — ${cityName}`
  return {
    title,
    description:
      `${capitalize(kw(service))} hizmeti ${cityName} ve çevresi için: ${service.cardText} ` +
      `Yerel rekabet, il/ilçe aramaları ve ${region} pazarının beklentileri gözetilerek planlanır. ${site.name}, Türkiye geneli çalışır.`,
    intro:
      `${cityName} firmaları için ${kw(service)} işi, genel Türkiye planından farklı iki noktada yoğunlaşır: ` +
      `yerel aramalarda görünürlük ve şehirdeki karar vericilerin beklentisi. Sayfa yapısını, örnek olayları ve ` +
      `iletişim kanallarını buna göre kurguluyoruz.`,
  }
}
