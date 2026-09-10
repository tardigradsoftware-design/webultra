import type { Metadata } from "next"
import Link from "next/link"

import { site } from "@/data/site"
import { buildMetadata } from "@/lib/seo"
import { url } from "@/lib/nav"
import { Container, Section, SectionHeading } from "@/components/site/section"
import { BreadcrumbNav } from "@/components/site/breadcrumb-nav"

/**
 * Bu sayfa bir hukuki belge değil, taslaktır: yayına alınmadan önce
 * şirketin KVKK sorumlusu/avukatı ile gözden geçirilmelidir.
 */
export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata({
    title: "KVKK ve Aydınlatma Metni",
    description:
      "Tardigrad Software KVKK aydınlatma metni: iletişim formu ve teklif sürecinde işlenen kişisel veriler, amaçlar, aktarım, saklama süresi ve ilgili kişi hakları.",
    path: url("kvkk"),
  })
}

const items = [
  {
    h: "Veri sorumlusu",
    p: `Kişisel verileriniz, veri sorumlusu sıfatıyla ${site.legalName} (${site.address.streetAddress}, ${site.address.district}/${site.address.city}) tarafından işlenmektedir. İletişim: ${site.email}.`,
  },
  {
    h: "İşlenen veriler",
    p: "İletişim/teklif formu aracılığıyla: ad soyad, firma adı, e-posta, telefon, şehir, ilgilendiğiniz hizmet, bütçe bilgisi ve mesaj içeriği. Ziyaret sırasında teknik veriler: sayfa görüntüleme, tarayıcı/işletim sistemi, anonim analitik kimliği.",
  },
  {
    h: "İşleme amaçları ve hukuki sebep",
    p: "Talebinizin değerlendirilmesi ve teklif sunulması (KVKK m.5/2-c: bir sözleşmenin kurulması için gerekli olması), açık rızaya dayalı pazarlama iletişimi (m.5/1), yasal yükümlülüklerin yerine getirilmesi (m.5/2-ç) ve olası uyuşmazlıklarda ispat amaçlı saklama (m.5/2-e).",
  },
  {
    h: "Aktarım",
    p: "Veriler; e-posta altyapı sağlayıcısı (Resend), barındırma hizmeti veren sağlayıcılar ve analitik araçları üzerinden işlenebilir. Üçüncü taraflar yalnızca hizmetin gerektirdiği ölçekte ve sözleşmesel gizlilik yükümlülüğü ile erişir. Verileriniz satılmaz, reklam ağlarına pazarlık konusu olarak verilmez.",
  },
  {
    h: "Saklama süresi",
    p: "Teklif talepleri en fazla 24 ay, hukuki uyuşmazlık kaynaklı veriler kanuni zamanaşımı süreleri boyunca saklanır. Süre sonunda silme/anonimleştirme prosedürü uygulanır.",
  },
  {
    h: "Çerezler ve analitik",
    p: "Sitemiz, ölçümleme ve site içi kullanım analizi için çerez/yerel depolama kullanabilir. Zorunlu olmayanlar için onayınızı geri çekme hakkınız saklıdır.",
  },
  {
    h: "İlgili kişi hakları (KVKK m.11)",
    p: "Verilerinizin işlenip işlenmediğini öğrenme, bilgi talep etme, amacına uygun kullanılıp kullanılmadığını öğrenme, yurt içi/yurt dışı aktarım hakkında bilgi alma, eksik/yanlış işlenmişse düzeltilmesini isteme, silme/yok edilmesini isteme, otomatik analiz sonucu aleyhinize çıkan sonuca itiraz ve zarara uğramanız hâlinde tazminat talep etme haklarına sahipsiniz. Başvurularınızı e-posta ile iletmeniz hâlinde 30 gün içinde ücretsiz yanıt veriyoruz.",
  },
  {
    h: "Güvenlik önlemleri",
    p: "İletim ve depolama sırasında şifreleme (TLS), erişim yetki matrisi, loglama ve düzenli yedek doğrulaması uygulanır. Kişisel veri içeren pano ve raporlarda alan bazlı maskeleme tercih edilir.",
  },
]

export default function KvkkPage() {
  return (
    <>
      <section className="border-b border-[#E2E8F0] bg-white">
        <Container className="py-10 md:py-12">
          <BreadcrumbNav items={[{ name: "Ana Sayfa", href: "/" }, { name: "KVKK" }]} />
          <div className="mt-8">
            <SectionHeading
              as="h1"
              kicker="KVKK"
              title="Kişisel verilerin korunması ve aydınlatma metni"
              lead="Formu doldurduğunuzda neler olduğunu kısa, jargonsuz ve tam olarak anlatıyoruz."
            />
          </div>
        </Container>
      </section>

      <Section>
        <article className="max-w-3xl space-y-8">
          {items.map((it) => (
            <section key={it.h}>
              <h2 className="font-heading text-xl font-semibold text-[#0F172A]">{it.h}</h2>
              <p className="mt-2.5 text-[16px] leading-8 text-slate-700">{it.p}</p>
            </section>
          ))}
          <div className="rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] p-6">
            <p className="font-heading text-[17px] font-semibold text-[#0F2A44]">
              Başvuru ve iletişim
            </p>
            <p className="mt-2 text-[15px] leading-7 text-slate-700">
              Taleplerinizi {site.email} adresine iletebilirsiniz. Yanıt süreci, kimlik
              doğrulaması sonrası en geç 30 gündür.
            </p>
          </div>
          <p className="text-sm text-slate-500">
            Güncel doküman değişikliği gerektiğinde bu sayfa sürüm notuyla yayınlanır.{" "}
            <Link href={url("iletisim")} className="link-underline font-medium text-[#0F2A44]">
              İletişim sayfası
            </Link>
          </p>
        </article>
      </Section>
    </>
  )
}
