import type { City } from "@/types/content"

/**
 * Lokal SEO için Faz 1 şehir listesi (10 il).
 * 81 ile aynı yapı ile ölçeklenir: {name, slug, districts[], economy[], note}.
 */
export const cities: City[] = [
  {
    name: "İstanbul",
    slug: "istanbul",
    plate: 34,
    region: "Marmara",
    districts: ["Maltepe", "Kadıköy", "Ataşehir", "Şişli", "Beşiktaş", "Ümraniye", "Beylikdüzü", "Başakşehir", "Kartal", "Pendik"],
    economy: ["finans ve holding merkezleri", "perakende ve e-ticaret", "lojistik ve ithalat", "yazılım ve dijital ajans ekosistemi"],
    note:
      "Türkiye'deki kurumsal yazılım talebinin en yoğun olduğu pazar; rekabet yüksek olduğu için teknik SEO ve sayfa mimarisi burada ayrı bir avantaj.",
  },
  {
    name: "Ankara",
    slug: "ankara",
    plate: 6,
    region: "İç Anadolu",
    districts: ["Çankaya", "Yenimahalle", "Etimesgut", "Keçiören", "Sincan", "Pursaklar"],
    economy: ["savunma ve teknoloji geliştirme bölgeleri", "kamu ve yüklenici firmalar", "sağlık ve klinik işletmeleri", "üniversite kaynaklı girişimler"],
    note:
      "Kamu tedarik süreçleri ve teknokent firmaları; teklif hazırlama, iş takip ve raporlama yazılımlarına talep belirgin.",
  },
  {
    name: "İzmir",
    slug: "izmir",
    plate: 35,
    region: "Ege",
    districts: ["Konak", "Karşıyaka", "Bornova", "Buca", "Çiğli", "Gaziemir", "Urla", "Aliağa"],
    economy: ["ihracatçı üretim firmaları", "tarım ve gıda işleme", "turizm ve konaklama", "lojistik ve liman bağlantılı hizmetler"],
    note:
      "İhracat odaklı KOBİ'ler için çok dilli kurumsal site ve ürün kataloğu; OSB'lerde stok ve tedarikçi yönetimi ihtiyacı yüksek.",
  },
  {
    name: "Bursa",
    slug: "bursa",
    plate: 16,
    region: "Marmara",
    districts: ["Nilüfer", "Osmangazi", "Yıldırım", "Gemlik", "İnegöl", "Mustafakemalpaşa"],
    economy: ["otomotiv ve yan sanayi", "tekstil üretimi", "mobilya ve ağaç işleri", "tarım ve gıda"],
    note:
      "Tedarik zinciri yoğun üretim şehri: sipariş, irsaliye, stok ve tedarikçi portali projelerinde talep güçlü.",
  },
  {
    name: "Antalya",
    slug: "antalya",
    plate: 7,
    region: "Akdeniz",
    districts: ["Muratpaşa", "Konyaaltı", "Kepez", "Lara", "Kemer", "Alanya", "Manavgat", "Serik"],
    economy: ["turizm ve konaklama", "tarım ve sera", "inşaat ve emlak", "sağlık turizmi"],
    note:
      "Rezervasyon, fiyat sorgulama ve çok dilli tanıtım siteleri; sezonluk talepte otomasyon ve hızlı yayına çıkma kritik.",
  },
  {
    name: "Kocaeli",
    slug: "kocaeli",
    plate: 41,
    region: "Marmara",
    districts: ["İzmit", "Gebze", "Derince", "Körfez", "Darıca", "Gölcük", "Çayırova"],
    economy: ["ağır sanayi ve kimya", "OSB'lerde üretim", "liman ve lojistik", "otomotiv"],
    note:
      "Fabrika ve OSB firmalarında saha süreçleri, iş emri, bakım ve İK takibi yazılımları öne çıkıyor.",
  },
  {
    name: "Gaziantep",
    slug: "gaziantep",
    plate: 27,
    region: "Güneydoğu Anadolu",
    districts: ["Şahinbey", "Şehitkamil", "Nizip", "İslahiye", "Oğuzeli"],
    economy: ["halı ve tekstil üretimi", "gıda ve fıstık işleme", "ihracat", "toptan ticaret"],
    note:
      "İhracatçı üreticiler için ürün kataloğu, bayi portalı ve teklif yönetimi; bölgesel rakiplerin SEO olgunluğu düşük.",
  },
  {
    name: "Konya",
    slug: "konya",
    plate: 42,
    region: "İç Anadolu",
    districts: ["Selçuklu", "Meram", "Karatay", "Ereğli", "Akşehir"],
    economy: ["tarım makineleri", "gıda ve unlu mamuller", "alüminyum ve döküm", "hayvancılık"],
    note:
      "Üretim ve tarım odaklı firmalarda bayii ağı yönetimi, sipariş ve stok modülleri ile bayi portali ihtiyacı belirgin.",
  },
  {
    name: "Adana",
    slug: "adana",
    plate: 1,
    region: "Akdeniz",
    districts: ["Seyhan", "Çukurova", "Yüreğir", "Sarıçam", "Ceyhan", "Kozan"],
    economy: ["tarım ve çiftçilik", "gıda sanayi", "tekstil", "lojistik ve dağıtım"],
    note:
      "Geniş bayi ve saha ağı; saha satış, ziyaret takibi ve online sipariş kanalları için uygun pazar.",
  },
  {
    name: "Kayseri",
    slug: "kayseri",
    plate: 38,
    region: "İç Anadolu",
    districts: ["Melikgazi", "Kocasinan", "Talas", "Develi", "İncesu"],
    economy: ["mobilya ve dekorasyon", "havacılık ve savunma sanayi", "kayseri OSB üretim", "ticaret ve toptan"],
    note:
      "Organize sanayi kültürü güçlü; e-ticaret kanalı açmak isteyen üreticilerde katalog + bayi portalı talebi yüksek.",
  },
]

export const cityBySlug = Object.fromEntries(cities.map((c) => [c.slug, c]))

export function findCity(slug: string | undefined): City | undefined {
  if (!slug) return undefined
  return cityBySlug[slug]
}

/** Hizmet sayfasında gösterilecek öncelikli şehirler */
export const primaryCitySlugs = cities.map((c) => c.slug)
