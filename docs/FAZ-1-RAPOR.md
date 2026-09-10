# Tardigrad Software — FAZ 1 Uygulama Raporu

> Bu rapor `npm run report` betiğiyle üretilir: build çıktısındaki HTML'den
> title/description/kelime/schema/görsel/link metrikleri okunur, veri katmanıyla eşleştirilir.
> Üretim tarihi: 2026-09-10 · Branch: `arena/01a08ac0-webultra`

## 1. Kurulum durumu

| Öğe | Durum |
|---|---|
| Stack | Next.js 14.2.35 (App Router) · TypeScript · Tailwind v3 · shadcn/ui (CVA + Radix) · lucide-react · framer-motion |
| Tema | Beyaz `#FFFFFF` + slate-50 zemin, lacivert `#0F2A44`/`#1E3A5F`, cyan/yeşil yalnızca vurgu. Koyu tema kapalı (`color-scheme: light`, `viewport.colorScheme: "light"`) |
| Dil | `<html lang="tr">`, tüm arayüz metinleri Türkçe |
| Font | Başlıklar Geist (600-700) · gövde Inter Variable (400-500) — self-hosted, `next/font` + `@fontsource-variable/inter` |
| Logo | **BEKLENİYOR** → `public/logo-placeholder.svg` ve `public/icon.svg` içinde `LOGO SVG BURAYA` işaretçisi |
| Build | `npx next build` hatasız · lint + tip kontrolü build'e bağlı |
| Sayfa sayısı | 109 statik HTML (5 pilot hizmet + 38 şablon hizmet + 10 il + 50 hizmet×il + 6 kurumsal/dizin) |

## 2. URL envanteri

Toplam: **109 yayına hazır route** · sitemap'te **71** URL (pilot + kurumsal + lokal; şablon hizmetler FAZ 2'ye kadar `noindex`).

| Rota | Tür | Title (kr) | Desc (kr) | Kelime | Görsel | İç link | SSS | JSON-LD | robots |
|---|---|---:|---:|---:|---:|---:|---:|---|---|
| `/` | Ana sayfa | 54 | 149 | 1844 | 2 | 59 | - | Organization+ProfessionalService+WebSite | index, follow |
| `/hakkimizda/` | Kurumsal | 31 | 157 | 351 | 1 | 53 | - | Organization+ProfessionalService+WebSite | index, follow |
| `/hizmet/ai-chatbot/adana/` | Hizmet × İl | 39 | 157 | 1557 | 2 | 63 | 7 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/ai-chatbot/ankara/` | Hizmet × İl | 40 | 153 | 1559 | 2 | 64 | 7 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/ai-chatbot/antalya/` | Hizmet × İl | 41 | 151 | 1557 | 2 | 64 | 7 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/ai-chatbot/bursa/` | Hizmet × İl | 39 | 157 | 1555 | 2 | 64 | 7 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/ai-chatbot/gaziantep/` | Hizmet × İl | 43 | 153 | 1559 | 2 | 63 | 7 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/ai-chatbot/istanbul/` | Hizmet × İl | 42 | 152 | 1563 | 2 | 64 | 7 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/ai-chatbot/izmir/` | Hizmet × İl | 39 | 153 | 1561 | 2 | 64 | 7 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/ai-chatbot/kayseri/` | Hizmet × İl | 41 | 154 | 1559 | 2 | 63 | 7 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/ai-chatbot/kocaeli/` | Hizmet × İl | 41 | 151 | 1556 | 2 | 64 | 7 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/ai-chatbot/konya/` | Hizmet × İl | 39 | 152 | 1561 | 2 | 63 | 7 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/crm/adana/` | Hizmet × İl | 32 | 157 | 1582 | 2 | 61 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/crm/ankara/` | Hizmet × İl | 33 | 151 | 1584 | 2 | 62 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/crm/antalya/` | Hizmet × İl | 34 | 149 | 1582 | 2 | 62 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/crm/bursa/` | Hizmet × İl | 32 | 157 | 1580 | 2 | 62 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/crm/gaziantep/` | Hizmet × İl | 36 | 153 | 1584 | 2 | 61 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/crm/istanbul/` | Hizmet × İl | 35 | 150 | 1588 | 2 | 62 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/crm/izmir/` | Hizmet × İl | 32 | 153 | 1586 | 2 | 62 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/crm/kayseri/` | Hizmet × İl | 34 | 152 | 1584 | 2 | 61 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/crm/kocaeli/` | Hizmet × İl | 34 | 149 | 1581 | 2 | 62 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/crm/konya/` | Hizmet × İl | 32 | 150 | 1586 | 2 | 61 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/e-ticaret-sitesi/adana/` | Hizmet × İl | 45 | 152 | 1616 | 2 | 60 | 7 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/e-ticaret-sitesi/ankara/` | Hizmet × İl | 46 | 153 | 1618 | 2 | 61 | 7 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/e-ticaret-sitesi/antalya/` | Hizmet × İl | 47 | 154 | 1616 | 2 | 61 | 7 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/e-ticaret-sitesi/bursa/` | Hizmet × İl | 45 | 152 | 1614 | 2 | 61 | 7 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/e-ticaret-sitesi/gaziantep/` | Hizmet × İl | 49 | 156 | 1618 | 2 | 60 | 7 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/e-ticaret-sitesi/istanbul/` | Hizmet × İl | 48 | 155 | 1622 | 2 | 61 | 7 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/e-ticaret-sitesi/izmir/` | Hizmet × İl | 45 | 152 | 1620 | 2 | 61 | 7 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/e-ticaret-sitesi/kayseri/` | Hizmet × İl | 47 | 154 | 1618 | 2 | 60 | 7 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/e-ticaret-sitesi/kocaeli/` | Hizmet × İl | 47 | 154 | 1615 | 2 | 61 | 7 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/e-ticaret-sitesi/konya/` | Hizmet × İl | 45 | 152 | 1620 | 2 | 60 | 7 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/kurumsal-web-sitesi/adana/` | Hizmet × İl | 48 | 156 | 1741 | 2 | 60 | 8 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/kurumsal-web-sitesi/ankara/` | Hizmet × İl | 49 | 157 | 1743 | 2 | 61 | 8 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/kurumsal-web-sitesi/antalya/` | Hizmet × İl | 50 | 149 | 1741 | 2 | 61 | 8 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/kurumsal-web-sitesi/bursa/` | Hizmet × İl | 48 | 156 | 1739 | 2 | 61 | 8 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/kurumsal-web-sitesi/gaziantep/` | Hizmet × İl | 52 | 151 | 1743 | 2 | 60 | 8 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/kurumsal-web-sitesi/istanbul/` | Hizmet × İl | 51 | 150 | 1747 | 2 | 61 | 8 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/kurumsal-web-sitesi/izmir/` | Hizmet × İl | 48 | 156 | 1745 | 2 | 61 | 8 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/kurumsal-web-sitesi/kayseri/` | Hizmet × İl | 50 | 149 | 1743 | 2 | 60 | 8 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/kurumsal-web-sitesi/kocaeli/` | Hizmet × İl | 50 | 149 | 1740 | 2 | 61 | 8 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/kurumsal-web-sitesi/konya/` | Hizmet × İl | 48 | 156 | 1745 | 2 | 60 | 8 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/teknik-seo/adana/` | Hizmet × İl | 39 | 153 | 1582 | 2 | 60 | 7 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/teknik-seo/ankara/` | Hizmet × İl | 40 | 157 | 1584 | 2 | 61 | 7 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/teknik-seo/antalya/` | Hizmet × İl | 41 | 155 | 1582 | 2 | 61 | 7 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/teknik-seo/bursa/` | Hizmet × İl | 39 | 153 | 1580 | 2 | 61 | 7 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/teknik-seo/gaziantep/` | Hizmet × İl | 43 | 149 | 1584 | 2 | 60 | 7 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/teknik-seo/istanbul/` | Hizmet × İl | 42 | 156 | 1588 | 2 | 61 | 7 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/teknik-seo/izmir/` | Hizmet × İl | 39 | 149 | 1586 | 2 | 61 | 7 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/teknik-seo/kayseri/` | Hizmet × İl | 41 | 150 | 1584 | 2 | 60 | 7 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/teknik-seo/kocaeli/` | Hizmet × İl | 41 | 155 | 1581 | 2 | 61 | 7 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/teknik-seo/konya/` | Hizmet × İl | 39 | 156 | 1586 | 2 | 60 | 7 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmetler/` | Hizmet dizini | 42 | 151 | 783 | 0 | 59 | - | Organization+ProfessionalService+WebSite | index, follow |
| `/hizmetler/abonelik-tabanli-yazilim/` | Hizmet sayfası | 45 | 152 | 1655 | 0 | 54 | 8 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | noindex, follow |
| `/hizmetler/ai-chatbot/` | Hizmet sayfası | 31 | 150 | 1667 | 2 | 60 | 7 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmetler/ai-icerik-araclar/` | Hizmet sayfası | 49 | 146 | 1663 | 0 | 53 | 8 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | noindex, follow |
| `/hizmetler/api-entegrasyonu/` | Hizmet sayfası | 37 | 146 | 1610 | 0 | 52 | 8 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | noindex, follow |
| `/hizmetler/cloudflare-cdn/` | Hizmet sayfası | 52 | 150 | 1618 | 0 | 52 | 8 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | noindex, follow |
| `/hizmetler/crm/` | Hizmet sayfası | 24 | 157 | 1688 | 2 | 59 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmetler/dashboard-sistemi/` | Hizmet sayfası | 38 | 155 | 1590 | 0 | 54 | 8 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | noindex, follow |
| `/hizmetler/dijital-donusum/` | Hizmet sayfası | 46 | 155 | 1619 | 0 | 54 | 8 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | noindex, follow |
| `/hizmetler/dijital-otomasyon/` | Hizmet sayfası | 38 | 145 | 1605 | 0 | 55 | 8 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | noindex, follow |
| `/hizmetler/domain-dns-yonetimi/` | Hizmet sayfası | 42 | 145 | 1643 | 0 | 52 | 8 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | noindex, follow |
| `/hizmetler/e-ticaret-sitesi/` | Hizmet sayfası | 37 | 154 | 1744 | 2 | 58 | 7 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmetler/firma-web-sitesi/` | Hizmet sayfası | 37 | 144 | 1682 | 0 | 52 | 8 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | noindex, follow |
| `/hizmetler/form-basvuru-sistemi/` | Hizmet sayfası | 43 | 143 | 1672 | 0 | 52 | 8 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | noindex, follow |
| `/hizmetler/google-search-console-kurulumu/` | Hizmet sayfası | 51 | 155 | 1659 | 0 | 53 | 8 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | noindex, follow |
| `/hizmetler/hosting-yedekleme/` | Hizmet sayfası | 40 | 154 | 1630 | 0 | 52 | 8 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | noindex, follow |
| `/hizmetler/is-takip-sistemi/` | Hizmet sayfası | 37 | 156 | 1651 | 0 | 53 | 8 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | noindex, follow |
| `/hizmetler/kurumsal-email/` | Hizmet sayfası | 37 | 152 | 1601 | 0 | 52 | 8 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | noindex, follow |
| `/hizmetler/kurumsal-web-sitesi/` | Hizmet sayfası | 40 | 144 | 1888 | 2 | 58 | 8 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmetler/landing-page/` | Hizmet sayfası | 33 | 146 | 1634 | 0 | 54 | 8 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | noindex, follow |
| `/hizmetler/lokal-seo/` | Hizmet sayfası | 30 | 155 | 1601 | 0 | 52 | 8 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | noindex, follow |
| `/hizmetler/multi-tenant-uygulama/` | Hizmet sayfası | 42 | 144 | 1590 | 0 | 52 | 8 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | noindex, follow |
| `/hizmetler/musteri-paneli/` | Hizmet sayfası | 35 | 155 | 1620 | 0 | 53 | 8 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | noindex, follow |
| `/hizmetler/musteri-yonetim-sistemi/` | Hizmet sayfası | 44 | 143 | 1652 | 0 | 54 | 8 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | noindex, follow |
| `/hizmetler/mvp-startup-urunu/` | Hizmet sayfası | 40 | 157 | 1650 | 0 | 52 | 8 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | noindex, follow |
| `/hizmetler/odeme-whatsapp-crm-entegrasyonu/` | Hizmet sayfası | 56 | 156 | 1668 | 0 | 53 | 8 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | noindex, follow |
| `/hizmetler/personel-kullanici-yonetimi/` | Hizmet sayfası | 50 | 157 | 1673 | 0 | 53 | 8 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | noindex, follow |
| `/hizmetler/portfoy-sitesi/` | Hizmet sayfası | 35 | 155 | 1638 | 0 | 52 | 8 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | noindex, follow |
| `/hizmetler/proforma-siparis-yonetimi/` | Hizmet sayfası | 48 | 147 | 1671 | 0 | 52 | 8 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | noindex, follow |
| `/hizmetler/raporlama-sistemi/` | Hizmet sayfası | 38 | 148 | 1606 | 0 | 53 | 8 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | noindex, follow |
| `/hizmetler/rezervasyon-basvuru-sistemi/` | Hizmet sayfası | 51 | 157 | 1656 | 0 | 55 | 8 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | noindex, follow |
| `/hizmetler/saas-platformu/` | Hizmet sayfası | 35 | 146 | 1613 | 0 | 52 | 8 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | noindex, follow |
| `/hizmetler/schema-org-structured-data/` | Hizmet sayfası | 49 | 151 | 1613 | 0 | 52 | 8 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | noindex, follow |
| `/hizmetler/seo-danismanligi/` | Hizmet sayfası | 37 | 146 | 1597 | 0 | 54 | 8 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | noindex, follow |
| `/hizmetler/seo-uyumlu-sayfa-mimarisi/` | Hizmet sayfası | 46 | 154 | 1683 | 0 | 52 | 8 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | noindex, follow |
| `/hizmetler/stok-yonetimi/` | Hizmet sayfası | 34 | 150 | 1644 | 0 | 53 | 8 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | noindex, follow |
| `/hizmetler/supabase-postgresql/` | Hizmet sayfası | 52 | 155 | 1608 | 0 | 52 | 8 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | noindex, follow |
| `/hizmetler/teklif-hazirlama-sistemi/` | Hizmet sayfası | 45 | 144 | 1662 | 0 | 53 | 8 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | noindex, follow |
| `/hizmetler/teknik-seo/` | Hizmet sayfası | 31 | 147 | 1686 | 2 | 58 | 7 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmetler/urun-tanitim-sitesi/` | Hizmet sayfası | 49 | 155 | 1721 | 0 | 52 | 8 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | noindex, follow |
| `/hizmetler/urun-tedarikci-yonetimi/` | Hizmet sayfası | 46 | 148 | 1677 | 0 | 52 | 8 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | noindex, follow |
| `/hizmetler/vercel-deployment/` | Hizmet sayfası | 38 | 157 | 1584 | 0 | 52 | 8 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | noindex, follow |
| `/hizmetler/web-sitesi-yenileme/` | Hizmet sayfası | 56 | 145 | 1718 | 0 | 52 | 8 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | noindex, follow |
| `/hizmetler/yonetim-paneli/` | Hizmet sayfası | 35 | 156 | 1616 | 0 | 53 | 8 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | noindex, follow |
| `/iletisim/` | Kurumsal | 45 | 155 | 373 | 0 | 52 | - | Organization+ProfessionalService+WebSite | index, follow |
| `/kvkk/` | Kurumsal | 45 | 158 | 299 | 0 | 52 | - | Organization+ProfessionalService+WebSite | index, follow |
| `/sehir/adana/` | Şehir sayfası | 56 | 157 | 781 | 0 | 63 | - | BreadcrumbList+LocalBusiness+Organization+ProfessionalService+WebSite | index, follow |
| `/sehir/ankara/` | Şehir sayfası | 57 | 149 | 788 | 0 | 63 | - | BreadcrumbList+LocalBusiness+Organization+ProfessionalService+WebSite | index, follow |
| `/sehir/antalya/` | Şehir sayfası | 58 | 156 | 785 | 0 | 63 | - | BreadcrumbList+LocalBusiness+Organization+ProfessionalService+WebSite | index, follow |
| `/sehir/bursa/` | Şehir sayfası | 56 | 150 | 783 | 0 | 63 | - | BreadcrumbList+LocalBusiness+Organization+ProfessionalService+WebSite | index, follow |
| `/sehir/gaziantep/` | Şehir sayfası | 50 | 155 | 782 | 0 | 63 | - | BreadcrumbList+LocalBusiness+Organization+ProfessionalService+WebSite | index, follow |
| `/sehir/istanbul/` | Şehir sayfası | 59 | 155 | 797 | 0 | 63 | - | BreadcrumbList+LocalBusiness+Organization+ProfessionalService+WebSite | index, follow |
| `/sehir/izmir/` | Şehir sayfası | 56 | 148 | 793 | 0 | 63 | - | BreadcrumbList+LocalBusiness+Organization+ProfessionalService+WebSite | index, follow |
| `/sehir/kayseri/` | Şehir sayfası | 58 | 152 | 784 | 0 | 63 | - | BreadcrumbList+LocalBusiness+Organization+ProfessionalService+WebSite | index, follow |
| `/sehir/kocaeli/` | Şehir sayfası | 58 | 151 | 783 | 0 | 63 | - | BreadcrumbList+LocalBusiness+Organization+ProfessionalService+WebSite | index, follow |
| `/sehir/konya/` | Şehir sayfası | 56 | 150 | 783 | 0 | 63 | - | BreadcrumbList+LocalBusiness+Organization+ProfessionalService+WebSite | index, follow |
| `/surec/` | Kurumsal | 54 | 152 | 279 | 1 | 52 | - | Organization+ProfessionalService+WebSite | index, follow |

**Özet metrikler:** {"pages":109,"servicePages":43,"pilotPages":43,"avgServiceWords":1650,"maxServiceWords":1888,"minServiceWords":1584,"totalImages":114,"brokenLinks":0,"pagesWithoutJsonLd":0}

- Kırık iç link: 0
- JSON-LD olmayan sayfa: 0
- Hizmet sayfaları kelime sayısı (ana içerik): min 1584 / ortalama 1650 / maks 1888
- Uyarı listesi: yok ✓

## 3. Pilot hizmet sayfaları (elle yazılmış içerik)

| # | Hizmet | Slug | Kelime | Title | Bölüm 6 blokları | SSS |
|---|---|---|---:|---|---|---:|
| 01 | Kurumsal Web Sitesi | `kurumsal-web-sitesi` | 1888 | 40 kr | tanım · neden · kapsam · süreç · fayda · kimler için · neden biz · SSS · CTA+form · iç linkler | 8 |
| 04 | E-Ticaret Sitesi | `e-ticaret-sitesi` | 1744 | 37 kr | tanım · neden · kapsam · süreç · fayda · kimler için · neden biz · SSS · CTA+form · iç linkler | 7 |
| 09 | CRM | `crm` | 1688 | 24 kr | tanım · neden · kapsam · süreç · fayda · kimler için · neden biz · SSS · CTA+form · iç linkler | 6 |
| 26 | Teknik SEO | `teknik-seo` | 1686 | 31 kr | tanım · neden · kapsam · süreç · fayda · kimler için · neden biz · SSS · CTA+form · iç linkler | 7 |
| 41 | AI Chatbot | `ai-chatbot` | 1667 | 31 kr | tanım · neden · kapsam · süreç · fayda · kimler için · neden biz · SSS · CTA+form · iç linkler | 7 |

Diğer 38 hizmet: sayfa iskeleti, meta, schema, iç linkler ve görsel fallback'i hazır; gövde metni kategori tohumlarıyla (`src/lib/content-factory.ts`) üretiliyor ve FAZ 2'de elle yazılacak. Bu sayfalar FAZ 2 bitene kadar `noindex, follow`.

## 4. Görsel varlıkları

Kaynak PNG'ler `public/images/_src/` (gitignore'da), yayın formatı WebP + `loading="lazy"` + `width/height`.

| Dosya | Boyut | Hizmet/amaç |
|---|---|---|
| `/images/hero/hero-kurumsal-dijital-donusum-paneli.webp` | 1280×800 · 15 KB | `images/_src/hero-kurumsal-dijital-donusum-paneli.png` |
| `/images/services/ai-chatbot-musteri-destek-sohbet-paneli.webp` | 1280×720 · 30 KB | `images/_src/ai-chatbot-musteri-destek-sohbet-paneli.png` |
| `/images/services/crm-musteri-iliskileri-yonetim-paneli.webp` | 1280×720 · 17 KB | `images/_src/crm-musteri-iliskileri-yonetim-paneli.png` |
| `/images/services/e-ticaret-sitesi-urun-katalog-sepet.webp` | 1280×720 · 29 KB | `images/_src/e-ticaret-sitesi-urun-katalog-sepet.png` |
| `/images/services/kurumsal-web-sitesi-tasarim-mockup.webp` | 1280×720 · 17 KB | `images/_src/kurumsal-web-sitesi-tasarim-mockup.png` |
| `/images/services/teknik-seo-arama-motori-buyume-grafigi.webp` | 1280×720 · 33 KB | `images/_src/teknik-seo-arama-motori-buyume-grafigi.png` |
| `/images/shared/dijital-donusum-excel-den-webe.webp` | 1280×720 · 10 KB | `images/_src/dijital-donusum-excel-den-webe.png` |
| `/images/shared/surec-9-adim-akisi.webp` | 1280×720 · 18 KB | `images/_src/surec-9-adim-akisi.png` |

Görseli olmayan hizmet sayfalarında CSS/SVG mockup fallback kullanılır (boş kutu oluşmaz).
`alt` metinleri hizmet + şehir + bağlam içerir; dekoratif öğeler `aria-hidden`.

## 5. Form ve dönüşüm hattı

- Bileşen: `src/components/forms/lead-form.tsx` — react-hook-form + zod (`src/lib/lead.ts`), şema hem client hem server'da aynı.
- Alanlar: ad, firma, e-posta, telefon, hizmet seçimi (43), konu, bütçe aralığı, şehir, mesaj (min 30 kr), KVKK açık rıza.
- Uç: `POST /api/lead/` → doğrulama → honeypot + geçici e-posta engeli → IP başına saatlik istek sınırı (varsayılan 6) → Resend ile bilgilendirme e-postası (HTML + text, `replyTo` başvuru sahibi) → başarı/hata ekranı + sonner toast.
- Yedek: Resend erişilemezse talep `data/leads.jsonl` dosyasına yazılır ve kullanıcıya başarı döner (talep kaybı yok).
- CTA'lar: her hizmet sayfasında hero'da, bölüm sonunda ("Projenizi Konuşalım" + "Ücretsiz Ön Analiz"), footer'da ve şehir sayfalarında.
- E-posta: `info@tardigradsoftware.com` · WhatsApp linki `nofollow`.

## 6. Yapısal veri (JSON-LD)

| Şema | Nerede |
|---|---|
| Organization + ProfessionalService (adres: İstanbul/Maltepe, geo, openingHours, areaServed TR, knowsAbout) | her sayfada (layout) |
| WebSite (publisher) | her sayfada |
| Service (areaServed City, serviceArea GeoCircle, offers, availableChannel) | hizmet + hizmet×il sayfaları |
| FAQPage (görünen SSS ile birebir aynı metin) | hizmet + hizmet×il sayfaları |
| BreadcrumbList | hizmet, hizmet×il, şehir, kurumsal sayfalar |
| LocalBusiness (şehir bazlı, ilçe Place'leri) | /sehir/{il}/ sayfaları |

## 7. Teknik SEO

- Trailing slash tutarlılığı (`trailingSlash: true`), sayfa başına canonical + `language: tr_TR`
- Title ≤ 60 kr ("{Sayfa} | Tardigrad Software"), description 145-158 kr, 43'ü de benzersiz
- `/sitemap.xml` (71 URL, lastmod + changefreq + priority, pilot hizmetlerde resim etiketi) ve `/robots.txt` Next native metadata route
- `/manifest.webmanifest`, `/icon.svg`, `favicon.ico`, `apple-icon.png`
- OG/Twitter: dinamik `/api/og/` (1200×630, beyaz+lacivert, Geist) — her sayfada benzersiz t/d/e parametreleri (örnek çıktı: `docs/og-ornek.png`)
- Hız: görseller WebP + lazy (hero hariç `fetchpriority=high`), width/height ile CLS≈0, 43 KB CSS, framer-motion yalnızca client chunk'ında
- Erişilebilirlik: skip-link, `lang="tr"`, Radix odak yönetimi, kontrast (lacivert/beyaz), `prefers-reduced-motion` desteği

## 8. FAZ 2 — kalan 38 hizmet için yapılacaklar

1. `src/data/pilot-contents-3.ts` … biçiminde elle içerik blokları yaz (5-8'er grup hâlinde), `src/data/services.ts` içindeki `pilotContentsBySlug`'a ekle.
2. Her hizmet için kapak görselini üret → `public/images/_src/` → `npm run imgs`.
3. Hizmet × il sayfalarını ``generateStaticParams`` içinde tüm hizmetlere aç (43 × 10 = 430 sayfa) ve gerekirse ilçe varyantlarını ekle.
4. `noindex` kısıtını kaldır, sitemap'i tüm hizmetleri kapsayacak şekilde genişlet (`src/app/sitemap.ts` filtresi).
5. Blog: 10 yazı + Article/BlogPosting şemaları + hizmet sayfalarına ilgili yazı linkleri.
6. Analytics/GSC doğrulaması, yedek lead kanalı (DB/queue), 2-3 dil (EN/RU/AR) için i18n kararı.

## 9. Bilinen noktalar / onay bekleyenler

| Konu | Durum |
|---|---|
| Logo SVG | Teslim edilmedi → `public/logo-placeholder.svg`, `public/icon.svg`, `src/components/site/logo.tsx` içinde `LOGO SVG BURAYA` işaretçileri duruyor. Organization şemasındaki `logo` alanı `/logo-placeholder.svg`'yu gösteriyor; dosya değişince schema da kendiliğinden güncellenir |
| E-posta teslimi | Bu ortamda `POST /api/lead/` uçtan uca çalışıyor; Resend yanıtı `application_error — Unable to fetch data` (alan adı doğrulanmadığı için). Kod, bu durumda talebi `data/leads.jsonl`'e yazıp kullanıcıya başarı döndürüyor. Üretimde: Resend → Domains → `tardigradsoftware.com` SPF/DKIM/DMARC kayıtlarını ekleyip `RESEND_FROM`'u bu domaine alın |
| Kelime sayıları | Denetim `<main>` etiketi içindeki tüm metni sayar (hero + bölümler + form etiketleri + CTA). 109 sayfanın tamamı hedefin üstünde: hizmet sayfaları ~1.65-1.89 bin kelime, hizmet×il ~1.55-1.75 bin, pilotlarda 8 SSS + 6-8 blok metin |
| noindex grubu | 38 hizmet sayfası FAZ 2'ye kadar `noindex, follow`; internal link ağı yine de çalışıyor (0 kırık link) |
| Font | `next/font/google` bu Next sürümünde Geist barındırmıyor → `geist` npm paketi + `@fontsource-variable/inter` (self-hosted, build sırasında ağ isteği yapmaz) |
| next-sitemap | Kullanılmadı; native `app/sitemap.ts` + `app/robots.ts` veri katmanından üretiliyor (tek kaynak, postbuild adımı yok) |
| `distDir` | Dev `.next-dev`, build `.next` — `next build` açık dev sunucusunu bozmuyor |

## 10. Devreye alma

```bash
cp .env.example .env.local   # RESEND_API_KEY, RESEND_FROM, NEXT_PUBLIC_SITE_URL
npm install
npm run build && npm run start   # veya Vercel: otomatik
npm run seo:check && npm run report
```

Resend'de `info@tardigradsoftware.com` alıcısının gönderime açık olması için alan adınızı
(tardigradsoftware.com) DNS kayıtlarıyla doğrulayın; doğrulanmadan gönderim sandbox
kısıtı nedeniyle 502 üretir (talepler bu durumda `data/leads.jsonl`'e düşer).
