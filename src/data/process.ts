import type { ProcessStep } from "@/types/content"

/** Bölüm 6: Nasıl Çalışıyoruz — 9 adım (tüm hizmet sayfalarında aynı iskelet, içerik hizmete göre zenginleştirilir) */
export const processSteps: ProcessStep[] = [
  {
    title: "Analiz",
    text: "Mevcut durum, hedef kitle, rakip ve süreç envanteri çıkarılır. Sayıya bağlanmamış hiçbir problem işleme alınmaz.",
  },
  {
    title: "Strateji",
    text: "Kapsam, öncelik sırası ve ölçülebilir hedefler yazılır: hangi metrik, hangi tarihte, kimin sorumluluğunda.",
  },
  {
    title: "UI/UX Tasarım",
    text: "Wireframe'den bileşen setine; mobil öncelikli, kurumsal ve tutarlı bir arayüz sistemi kurulur.",
  },
  {
    title: "Geliştirme",
    text: "Next.js App Router + TypeScript + Tailwind + shadcn/ui ile tip güvenli, test edilebilir kod tabanı yazılır.",
  },
  {
    title: "İçerik & SEO Kurulumu",
    text: "URL yapısı, başlık/meta hiyerarşisi, schema, sitemap ve iç link ağı; içerik girişleri ile birlikte.",
  },
  {
    title: "Test & Kalite",
    text: "Uçtan uca akış testleri, Lighthouse, mobil cihaz, form ve yetki senaryoları; hata listesi kapatılır.",
  },
  {
    title: "Canlıya Çıkış",
    text: "DNS, SSL, CDN ve redirect planı uygulanır; yayına alma geri alınabilir şekilde yapılır.",
  },
  {
    title: "Ölçüm & İyileştirme",
    text: "Search Console, analitik ve dönüşüm hedefleri kurulur; ilk 30/60/90 gün raporları paylaşılır.",
  },
  {
    title: "Bakım & Geliştirme",
    text: "Güvenlik güncellemeleri, yedekleme doğrulaması, yeni özellik sprintleri ve aylık performans kontrolü.",
  },
]

/** Hizmet sayfalarında gösterilen kısaltılmış akış (üstte 6 adım vurgusu) */
export const processHighlights = processSteps.slice(0, 6)

export const deliveryPrinciples = [
  {
    title: "Haftalık demo",
    text: "Her cuma canlı ortamda çalışan parça gösterilir; sürpriz yerine yönlendirme yaparsınız.",
  },
  {
    title: "Tek fiyat, tek takvim",
    text: "Kapsam değişmezse fiyat değişmez. Değişirse yazılı etki analizi çıkar.",
  },
  {
    title: "Kod sizin",
    text: "Depo, CI/CD, ortam değişkenleri ve dokümantasyon teslim edilir; kimseye bağımlı kalmazsınız.",
  },
  {
    title: "Ölçerek teslim",
    text: "Hız, indekslenme ve dönüşüm hedefleri teslimden önce sayıya bağlanır.",
  },
] as const
