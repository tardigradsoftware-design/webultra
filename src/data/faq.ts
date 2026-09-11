import type { FaqItem } from "@/types/content"
import { site } from "@/data/site"

/** Ana sayfa + kurumsal sayfalar için genel SSS (FAQPage şeması ile birebir aynı metin) */
export const siteFaq: FaqItem[] = [
  {
    q: "Tardigrad Software tam olarak ne yapıyor?",
    a: `Kurumsal web sitesi, e-ticaret, özel yazılım (CRM, iş takip, stok, teklif), SaaS/MVP geliştirme, teknik ve lokal SEO ile IT/AI hizmetlerini tek ekipte birleştiriyoruz. ${site.name}'in farkı, tasarımı, kodu ve görünürlüğü aynı sahiplikte yürütmesi; böylece ajans–yazılımcı–SEO arasındaki kaybolan işler ortadan kalkıyor.`,
  },
  {
    q: "Neden 43 ayrı hizmet sayfası var?",
    a: "Çünkü her hizmetin arama niyeti farklı. Kurumsal site arayan bir firma ile CRM arayan bir firmanın beklentisi, soruları ve karar kriterleri aynı değil. Her hizmeti kendi sayfasında; tanım, kapsam, süreç, fayda ve SSS katmanıyla anlatıyoruz. Böylece sayılarla ölçülebilen organik talep üretiliyor.",
  },
  {
    q: "Şehir dışındaki firmalarla çalışıyor musunuz?",
    a: "Evet. Türkiye geneli uzaktan çalışıyoruz; merkezimiz İstanbul/Maltepe. Görüşmeler çevrim içi, teslimat ve bakım süreçleri tamamen dijital yürür. İsteyen firmalarla yılda birkaç kez yüz yüze toplantı yapıyoruz. İl sayfalarımızda her şehrin iş dünyasına göre önceliklendirdiğimiz hizmetleri bulabilirsiniz.",
  },
  {
    q: "Süreç nasıl işliyor ve ne kadar sürüyor?",
    a: "Dokuz adımlı bir akış uyguluyoruz: analiz, strateji, UI/UX, geliştirme, SEO/temel kurulumlar, test, canlıya çıkış, ölçüm ve bakım. Küçük işler 2-4 hafta, kurumsal site 4-8 hafta, e-ticaret ve özel yazılımlar 6-12 hafta, SaaS/MVP ürünler kapsamına göre 6-16 hafta sürer. Her hafta canlı demo yapılır.",
  },
  {
    q: "Fiyatlandırma nasıl yapılıyor?",
    a: "Saatlik değil, kapsam bazlı tek fiyat veriyoruz. Ücretsiz ön analizde hedef, kapsam ve takvim netleşir; ardından tek fiyat, tek takvim ve kapsam dışı kalemlerin listesi yazılı olarak gelir. Kapsam değişirse yazılı etki analizi çıkar, sürpriz maliyet oluşmaz.",
  },
  {
    q: "İş bittikten sonra siteyi/yazılımı kendimiz yönetebilir miyiz?",
    a: "Evet, bu zaten temel prensibimiz. Kod deposu, veritabanı, yayın hattı ve dokümantasyon sizin adınıza teslim edilir; içerik değişiklikleri için yönetim paneli kullanırsınız, geliştirici beklemeniz gerekmez. İsterseniz bakım anlaşması ile biz devam ederiz, isterseniz kendi ekibinize devrederiz.",
  },
]
