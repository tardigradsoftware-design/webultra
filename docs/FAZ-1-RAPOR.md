# Tardigrad Software — Uygulama Raporu (Faz 1 + Faz 2 grup 1)

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
| Sayfa sayısı | 219 statik HTML (5 pilot hizmet + 38 şablon hizmet + 10 il + 50 hizmet×il + 6 kurumsal/dizin) |

## 2. URL envanteri

Toplam: **219 yayına hazır route** · sitemap'te **71** URL (pilot + kurumsal + lokal; şablon hizmetler FAZ 2'ye kadar `noindex`).

| Rota | Tür | Title (kr) | Desc (kr) | Kelime | Görsel | İç link | SSS | JSON-LD | robots |
|---|---|---:|---:|---:|---:|---:|---:|---|---|
| `/` | Ana sayfa | 54 | 149 | 1844 | 2 | 59 | - | Organization+ProfessionalService+WebSite | index, follow |
| `/hakkimizda/` | Kurumsal | 31 | 151 | 352 | 1 | 53 | - | Organization+ProfessionalService+WebSite | index, follow |
| `/hizmet/ai-chatbot/adana/` | Hizmet × İl | 39 | 156 | 1549 | 2 | 63 | 7 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/ai-chatbot/ankara/` | Hizmet × İl | 40 | 154 | 1550 | 2 | 64 | 7 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/ai-chatbot/antalya/` | Hizmet × İl | 41 | 152 | 1548 | 2 | 64 | 7 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/ai-chatbot/bursa/` | Hizmet × İl | 39 | 156 | 1547 | 2 | 64 | 7 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/ai-chatbot/gaziantep/` | Hizmet × İl | 43 | 155 | 1548 | 2 | 63 | 7 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/ai-chatbot/istanbul/` | Hizmet × İl | 42 | 153 | 1554 | 2 | 64 | 7 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/ai-chatbot/izmir/` | Hizmet × İl | 39 | 158 | 1554 | 2 | 64 | 7 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/ai-chatbot/kayseri/` | Hizmet × İl | 41 | 155 | 1550 | 2 | 63 | 7 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/ai-chatbot/kocaeli/` | Hizmet × İl | 41 | 152 | 1547 | 2 | 64 | 7 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/ai-chatbot/konya/` | Hizmet × İl | 39 | 153 | 1552 | 2 | 63 | 7 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/crm/adana/` | Hizmet × İl | 32 | 152 | 1575 | 2 | 61 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/crm/ankara/` | Hizmet × İl | 33 | 156 | 1577 | 2 | 62 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/crm/antalya/` | Hizmet × İl | 34 | 154 | 1575 | 2 | 62 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/crm/bursa/` | Hizmet × İl | 32 | 152 | 1573 | 2 | 62 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/crm/gaziantep/` | Hizmet × İl | 36 | 154 | 1575 | 2 | 61 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/crm/istanbul/` | Hizmet × İl | 35 | 155 | 1581 | 2 | 62 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/crm/izmir/` | Hizmet × İl | 32 | 148 | 1579 | 2 | 62 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/crm/kayseri/` | Hizmet × İl | 34 | 157 | 1577 | 2 | 61 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/crm/kocaeli/` | Hizmet × İl | 34 | 154 | 1574 | 2 | 62 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/crm/konya/` | Hizmet × İl | 32 | 155 | 1579 | 2 | 61 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/e-ticaret-sitesi/adana/` | Hizmet × İl | 45 | 157 | 1605 | 2 | 60 | 7 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/e-ticaret-sitesi/ankara/` | Hizmet × İl | 46 | 154 | 1606 | 2 | 61 | 7 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/e-ticaret-sitesi/antalya/` | Hizmet × İl | 47 | 152 | 1604 | 2 | 61 | 7 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/e-ticaret-sitesi/bursa/` | Hizmet × İl | 45 | 157 | 1603 | 2 | 61 | 7 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/e-ticaret-sitesi/gaziantep/` | Hizmet × İl | 49 | 149 | 1604 | 2 | 60 | 7 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/e-ticaret-sitesi/istanbul/` | Hizmet × İl | 48 | 153 | 1610 | 2 | 61 | 7 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/e-ticaret-sitesi/izmir/` | Hizmet × İl | 45 | 153 | 1609 | 2 | 61 | 7 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/e-ticaret-sitesi/kayseri/` | Hizmet × İl | 47 | 155 | 1606 | 2 | 60 | 7 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/e-ticaret-sitesi/kocaeli/` | Hizmet × İl | 47 | 152 | 1603 | 2 | 61 | 7 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/e-ticaret-sitesi/konya/` | Hizmet × İl | 45 | 153 | 1608 | 2 | 60 | 7 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/firma-web-sitesi/adana/` | Hizmet × İl | 45 | 149 | 1754 | 0 | 60 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/firma-web-sitesi/ankara/` | Hizmet × İl | 46 | 153 | 1756 | 0 | 61 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/firma-web-sitesi/antalya/` | Hizmet × İl | 47 | 151 | 1754 | 0 | 61 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/firma-web-sitesi/bursa/` | Hizmet × İl | 45 | 149 | 1752 | 0 | 61 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/firma-web-sitesi/gaziantep/` | Hizmet × İl | 49 | 156 | 1755 | 0 | 60 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/firma-web-sitesi/istanbul/` | Hizmet × İl | 48 | 152 | 1760 | 0 | 61 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/firma-web-sitesi/izmir/` | Hizmet × İl | 45 | 154 | 1760 | 0 | 61 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/firma-web-sitesi/kayseri/` | Hizmet × İl | 47 | 154 | 1756 | 0 | 60 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/firma-web-sitesi/kocaeli/` | Hizmet × İl | 47 | 151 | 1753 | 0 | 61 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/firma-web-sitesi/konya/` | Hizmet × İl | 45 | 152 | 1758 | 0 | 60 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/kurumsal-web-sitesi/adana/` | Hizmet × İl | 48 | 154 | 1729 | 2 | 60 | 8 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/kurumsal-web-sitesi/ankara/` | Hizmet × İl | 49 | 152 | 1730 | 2 | 61 | 8 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/kurumsal-web-sitesi/antalya/` | Hizmet × İl | 50 | 156 | 1729 | 2 | 61 | 8 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/kurumsal-web-sitesi/bursa/` | Hizmet × İl | 48 | 154 | 1727 | 2 | 61 | 8 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/kurumsal-web-sitesi/gaziantep/` | Hizmet × İl | 52 | 153 | 1729 | 2 | 60 | 8 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/kurumsal-web-sitesi/istanbul/` | Hizmet × İl | 51 | 157 | 1735 | 2 | 61 | 8 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/kurumsal-web-sitesi/izmir/` | Hizmet × İl | 48 | 157 | 1734 | 2 | 61 | 8 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/kurumsal-web-sitesi/kayseri/` | Hizmet × İl | 50 | 153 | 1730 | 2 | 60 | 8 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/kurumsal-web-sitesi/kocaeli/` | Hizmet × İl | 50 | 156 | 1728 | 2 | 61 | 8 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/kurumsal-web-sitesi/konya/` | Hizmet × İl | 48 | 157 | 1733 | 2 | 60 | 8 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/landing-page/adana/` | Hizmet × İl | 41 | 153 | 1673 | 0 | 62 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/landing-page/ankara/` | Hizmet × İl | 42 | 157 | 1675 | 0 | 63 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/landing-page/antalya/` | Hizmet × İl | 43 | 155 | 1673 | 0 | 63 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/landing-page/bursa/` | Hizmet × İl | 41 | 153 | 1671 | 0 | 63 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/landing-page/gaziantep/` | Hizmet × İl | 45 | 154 | 1673 | 0 | 62 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/landing-page/istanbul/` | Hizmet × İl | 44 | 156 | 1679 | 0 | 63 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/landing-page/izmir/` | Hizmet × İl | 41 | 149 | 1677 | 0 | 63 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/landing-page/kayseri/` | Hizmet × İl | 43 | 151 | 1674 | 0 | 62 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/landing-page/kocaeli/` | Hizmet × İl | 43 | 155 | 1672 | 0 | 63 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/landing-page/konya/` | Hizmet × İl | 41 | 156 | 1677 | 0 | 62 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/musteri-yonetim-sistemi/adana/` | Hizmet × İl | 52 | 157 | 1619 | 0 | 62 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/musteri-yonetim-sistemi/ankara/` | Hizmet × İl | 53 | 154 | 1620 | 0 | 63 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/musteri-yonetim-sistemi/antalya/` | Hizmet × İl | 54 | 152 | 1618 | 0 | 63 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/musteri-yonetim-sistemi/bursa/` | Hizmet × İl | 52 | 157 | 1617 | 0 | 63 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/musteri-yonetim-sistemi/gaziantep/` | Hizmet × İl | 56 | 149 | 1618 | 0 | 62 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/musteri-yonetim-sistemi/istanbul/` | Hizmet × İl | 55 | 153 | 1624 | 0 | 63 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/musteri-yonetim-sistemi/izmir/` | Hizmet × İl | 52 | 153 | 1623 | 0 | 63 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/musteri-yonetim-sistemi/kayseri/` | Hizmet × İl | 54 | 155 | 1620 | 0 | 62 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/musteri-yonetim-sistemi/kocaeli/` | Hizmet × İl | 54 | 152 | 1617 | 0 | 63 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/musteri-yonetim-sistemi/konya/` | Hizmet × İl | 52 | 153 | 1622 | 0 | 62 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/portfoy-sitesi/adana/` | Hizmet × İl | 43 | 157 | 1532 | 0 | 60 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/portfoy-sitesi/ankara/` | Hizmet × İl | 44 | 152 | 1532 | 0 | 61 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/portfoy-sitesi/antalya/` | Hizmet × İl | 45 | 150 | 1530 | 0 | 61 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/portfoy-sitesi/bursa/` | Hizmet × İl | 43 | 157 | 1530 | 0 | 61 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/portfoy-sitesi/gaziantep/` | Hizmet × İl | 47 | 155 | 1531 | 0 | 60 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/portfoy-sitesi/istanbul/` | Hizmet × İl | 46 | 151 | 1536 | 0 | 61 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/portfoy-sitesi/izmir/` | Hizmet × İl | 43 | 153 | 1536 | 0 | 61 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/portfoy-sitesi/kayseri/` | Hizmet × İl | 45 | 153 | 1532 | 0 | 60 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/portfoy-sitesi/kocaeli/` | Hizmet × İl | 45 | 150 | 1529 | 0 | 61 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/portfoy-sitesi/konya/` | Hizmet × İl | 43 | 151 | 1534 | 0 | 60 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/proforma-siparis-yonetimi/adana/` | Hizmet × İl | 56 | 152 | 1600 | 0 | 60 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/proforma-siparis-yonetimi/ankara/` | Hizmet × İl | 57 | 156 | 1602 | 0 | 61 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/proforma-siparis-yonetimi/antalya/` | Hizmet × İl | 58 | 154 | 1600 | 0 | 61 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/proforma-siparis-yonetimi/bursa/` | Hizmet × İl | 56 | 152 | 1598 | 0 | 61 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/proforma-siparis-yonetimi/gaziantep/` | Hizmet × İl | 60 | 157 | 1600 | 0 | 60 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/proforma-siparis-yonetimi/istanbul/` | Hizmet × İl | 59 | 155 | 1606 | 0 | 61 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/proforma-siparis-yonetimi/izmir/` | Hizmet × İl | 56 | 154 | 1605 | 0 | 61 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/proforma-siparis-yonetimi/kayseri/` | Hizmet × İl | 58 | 157 | 1602 | 0 | 60 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/proforma-siparis-yonetimi/kocaeli/` | Hizmet × İl | 58 | 154 | 1599 | 0 | 61 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/proforma-siparis-yonetimi/konya/` | Hizmet × İl | 56 | 155 | 1604 | 0 | 60 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/rezervasyon-basvuru-sistemi/adana/` | Hizmet × İl | 59 | 154 | 1624 | 0 | 63 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/rezervasyon-basvuru-sistemi/ankara/` | Hizmet × İl | 60 | 151 | 1625 | 0 | 64 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/rezervasyon-basvuru-sistemi/antalya/` | Hizmet × İl | 40 | 156 | 1624 | 0 | 64 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/rezervasyon-basvuru-sistemi/bursa/` | Hizmet × İl | 59 | 154 | 1622 | 0 | 64 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/rezervasyon-basvuru-sistemi/gaziantep/` | Hizmet × İl | 42 | 155 | 1624 | 0 | 63 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/rezervasyon-basvuru-sistemi/istanbul/` | Hizmet × İl | 41 | 157 | 1630 | 0 | 64 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/rezervasyon-basvuru-sistemi/izmir/` | Hizmet × İl | 59 | 150 | 1628 | 0 | 64 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/rezervasyon-basvuru-sistemi/kayseri/` | Hizmet × İl | 40 | 152 | 1625 | 0 | 63 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/rezervasyon-basvuru-sistemi/kocaeli/` | Hizmet × İl | 40 | 156 | 1623 | 0 | 64 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/rezervasyon-basvuru-sistemi/konya/` | Hizmet × İl | 59 | 157 | 1628 | 0 | 63 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/stok-yonetimi/adana/` | Hizmet × İl | 42 | 149 | 1638 | 0 | 62 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/stok-yonetimi/ankara/` | Hizmet × İl | 43 | 153 | 1640 | 0 | 62 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/stok-yonetimi/antalya/` | Hizmet × İl | 44 | 151 | 1638 | 0 | 61 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/stok-yonetimi/bursa/` | Hizmet × İl | 42 | 149 | 1636 | 0 | 62 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/stok-yonetimi/gaziantep/` | Hizmet × İl | 46 | 156 | 1639 | 0 | 61 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/stok-yonetimi/istanbul/` | Hizmet × İl | 45 | 152 | 1644 | 0 | 62 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/stok-yonetimi/izmir/` | Hizmet × İl | 42 | 154 | 1644 | 0 | 62 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/stok-yonetimi/kayseri/` | Hizmet × İl | 44 | 154 | 1640 | 0 | 62 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/stok-yonetimi/kocaeli/` | Hizmet × İl | 44 | 151 | 1637 | 0 | 62 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/stok-yonetimi/konya/` | Hizmet × İl | 42 | 152 | 1642 | 0 | 61 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/teklif-hazirlama-sistemi/adana/` | Hizmet × İl | 53 | 154 | 1547 | 0 | 61 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/teklif-hazirlama-sistemi/ankara/` | Hizmet × İl | 54 | 151 | 1548 | 0 | 62 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/teklif-hazirlama-sistemi/antalya/` | Hizmet × İl | 55 | 156 | 1547 | 0 | 62 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/teklif-hazirlama-sistemi/bursa/` | Hizmet × İl | 53 | 154 | 1545 | 0 | 62 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/teklif-hazirlama-sistemi/gaziantep/` | Hizmet × İl | 57 | 155 | 1547 | 0 | 61 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/teklif-hazirlama-sistemi/istanbul/` | Hizmet × İl | 56 | 157 | 1553 | 0 | 62 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/teklif-hazirlama-sistemi/izmir/` | Hizmet × İl | 53 | 150 | 1551 | 0 | 62 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/teklif-hazirlama-sistemi/kayseri/` | Hizmet × İl | 55 | 152 | 1548 | 0 | 61 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/teklif-hazirlama-sistemi/kocaeli/` | Hizmet × İl | 55 | 156 | 1546 | 0 | 62 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/teklif-hazirlama-sistemi/konya/` | Hizmet × İl | 53 | 157 | 1551 | 0 | 61 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/teknik-seo/adana/` | Hizmet × İl | 39 | 158 | 1575 | 2 | 60 | 7 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/teknik-seo/ankara/` | Hizmet × İl | 40 | 156 | 1576 | 2 | 61 | 7 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/teknik-seo/antalya/` | Hizmet × İl | 41 | 154 | 1574 | 2 | 61 | 7 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/teknik-seo/bursa/` | Hizmet × İl | 39 | 158 | 1573 | 2 | 61 | 7 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/teknik-seo/gaziantep/` | Hizmet × İl | 43 | 151 | 1573 | 2 | 60 | 7 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/teknik-seo/istanbul/` | Hizmet × İl | 42 | 155 | 1580 | 2 | 61 | 7 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/teknik-seo/izmir/` | Hizmet × İl | 39 | 154 | 1579 | 2 | 61 | 7 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/teknik-seo/kayseri/` | Hizmet × İl | 41 | 157 | 1576 | 2 | 60 | 7 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/teknik-seo/kocaeli/` | Hizmet × İl | 41 | 154 | 1573 | 2 | 61 | 7 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/teknik-seo/konya/` | Hizmet × İl | 39 | 155 | 1578 | 2 | 60 | 7 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/urun-tanitim-sitesi/adana/` | Hizmet × İl | 57 | 154 | 1796 | 0 | 60 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/urun-tanitim-sitesi/ankara/` | Hizmet × İl | 58 | 149 | 1796 | 0 | 61 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/urun-tanitim-sitesi/antalya/` | Hizmet × İl | 59 | 156 | 1796 | 0 | 61 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/urun-tanitim-sitesi/bursa/` | Hizmet × İl | 57 | 154 | 1794 | 0 | 61 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/urun-tanitim-sitesi/gaziantep/` | Hizmet × İl | 40 | 152 | 1795 | 0 | 61 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/urun-tanitim-sitesi/istanbul/` | Hizmet × İl | 60 | 157 | 1802 | 0 | 61 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/urun-tanitim-sitesi/izmir/` | Hizmet × İl | 57 | 156 | 1801 | 0 | 61 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/urun-tanitim-sitesi/kayseri/` | Hizmet × İl | 59 | 150 | 1796 | 0 | 60 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/urun-tanitim-sitesi/kocaeli/` | Hizmet × İl | 59 | 156 | 1795 | 0 | 60 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/urun-tanitim-sitesi/konya/` | Hizmet × İl | 57 | 157 | 1800 | 0 | 60 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/urun-tedarikci-yonetimi/adana/` | Hizmet × İl | 54 | 156 | 1618 | 0 | 61 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/urun-tedarikci-yonetimi/ankara/` | Hizmet × İl | 55 | 153 | 1619 | 0 | 62 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/urun-tedarikci-yonetimi/antalya/` | Hizmet × İl | 56 | 151 | 1617 | 0 | 61 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/urun-tedarikci-yonetimi/bursa/` | Hizmet × İl | 54 | 156 | 1616 | 0 | 62 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/urun-tedarikci-yonetimi/gaziantep/` | Hizmet × İl | 58 | 157 | 1618 | 0 | 61 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/urun-tedarikci-yonetimi/istanbul/` | Hizmet × İl | 57 | 152 | 1623 | 0 | 62 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/urun-tedarikci-yonetimi/izmir/` | Hizmet × İl | 54 | 152 | 1622 | 0 | 62 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/urun-tedarikci-yonetimi/kayseri/` | Hizmet × İl | 56 | 154 | 1619 | 0 | 61 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/urun-tedarikci-yonetimi/kocaeli/` | Hizmet × İl | 56 | 151 | 1616 | 0 | 61 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/urun-tedarikci-yonetimi/konya/` | Hizmet × İl | 54 | 152 | 1621 | 0 | 62 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/web-sitesi-yenileme/adana/` | Hizmet × İl | 43 | 153 | 1718 | 0 | 60 | 7 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/web-sitesi-yenileme/ankara/` | Hizmet × İl | 44 | 157 | 1720 | 0 | 61 | 7 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/web-sitesi-yenileme/antalya/` | Hizmet × İl | 45 | 155 | 1718 | 0 | 61 | 7 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/web-sitesi-yenileme/bursa/` | Hizmet × İl | 43 | 153 | 1716 | 0 | 61 | 7 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/web-sitesi-yenileme/gaziantep/` | Hizmet × İl | 47 | 154 | 1718 | 0 | 60 | 7 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/web-sitesi-yenileme/istanbul/` | Hizmet × İl | 46 | 156 | 1724 | 0 | 61 | 7 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/web-sitesi-yenileme/izmir/` | Hizmet × İl | 43 | 149 | 1722 | 0 | 61 | 7 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/web-sitesi-yenileme/kayseri/` | Hizmet × İl | 45 | 151 | 1719 | 0 | 60 | 7 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/web-sitesi-yenileme/kocaeli/` | Hizmet × İl | 45 | 155 | 1717 | 0 | 61 | 7 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/web-sitesi-yenileme/konya/` | Hizmet × İl | 43 | 156 | 1722 | 0 | 60 | 7 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmetler/` | Hizmet dizini | 42 | 153 | 783 | 0 | 59 | - | Organization+ProfessionalService+WebSite | index, follow |
| `/hizmetler/abonelik-tabanli-yazilim/` | Hizmet sayfası | 45 | 152 | 1655 | 0 | 54 | 8 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | noindex, follow |
| `/hizmetler/ai-chatbot/` | Hizmet sayfası | 31 | 150 | 1667 | 2 | 60 | 7 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmetler/ai-icerik-araclar/` | Hizmet sayfası | 49 | 146 | 1663 | 0 | 53 | 8 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | noindex, follow |
| `/hizmetler/api-entegrasyonu/` | Hizmet sayfası | 37 | 146 | 1610 | 0 | 52 | 8 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | noindex, follow |
| `/hizmetler/cloudflare-cdn/` | Hizmet sayfası | 52 | 150 | 1618 | 0 | 52 | 8 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | noindex, follow |
| `/hizmetler/crm/` | Hizmet sayfası | 24 | 157 | 1688 | 2 | 59 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmetler/dashboard-sistemi/` | Hizmet sayfası | 38 | 152 | 1590 | 0 | 54 | 8 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | noindex, follow |
| `/hizmetler/dijital-donusum/` | Hizmet sayfası | 46 | 158 | 1619 | 0 | 54 | 8 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | noindex, follow |
| `/hizmetler/dijital-otomasyon/` | Hizmet sayfası | 38 | 145 | 1605 | 0 | 55 | 8 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | noindex, follow |
| `/hizmetler/domain-dns-yonetimi/` | Hizmet sayfası | 42 | 145 | 1643 | 0 | 52 | 8 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | noindex, follow |
| `/hizmetler/e-ticaret-sitesi/` | Hizmet sayfası | 37 | 155 | 1744 | 2 | 58 | 7 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmetler/firma-web-sitesi/` | Hizmet sayfası | 37 | 144 | 1899 | 0 | 58 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmetler/form-basvuru-sistemi/` | Hizmet sayfası | 43 | 143 | 1672 | 0 | 52 | 8 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | noindex, follow |
| `/hizmetler/google-search-console-kurulumu/` | Hizmet sayfası | 51 | 155 | 1659 | 0 | 53 | 8 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | noindex, follow |
| `/hizmetler/hosting-yedekleme/` | Hizmet sayfası | 40 | 154 | 1630 | 0 | 52 | 8 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | noindex, follow |
| `/hizmetler/is-takip-sistemi/` | Hizmet sayfası | 37 | 156 | 1651 | 0 | 53 | 8 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | noindex, follow |
| `/hizmetler/kurumsal-email/` | Hizmet sayfası | 37 | 152 | 1601 | 0 | 52 | 8 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | noindex, follow |
| `/hizmetler/kurumsal-web-sitesi/` | Hizmet sayfası | 40 | 156 | 1888 | 2 | 58 | 8 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmetler/landing-page/` | Hizmet sayfası | 33 | 146 | 1810 | 0 | 60 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmetler/lokal-seo/` | Hizmet sayfası | 30 | 155 | 1601 | 0 | 52 | 8 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | noindex, follow |
| `/hizmetler/multi-tenant-uygulama/` | Hizmet sayfası | 42 | 144 | 1590 | 0 | 52 | 8 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | noindex, follow |
| `/hizmetler/musteri-paneli/` | Hizmet sayfası | 35 | 155 | 1620 | 0 | 53 | 8 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | noindex, follow |
| `/hizmetler/musteri-yonetim-sistemi/` | Hizmet sayfası | 44 | 143 | 1720 | 0 | 60 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmetler/mvp-startup-urunu/` | Hizmet sayfası | 40 | 145 | 1650 | 0 | 52 | 8 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | noindex, follow |
| `/hizmetler/odeme-whatsapp-crm-entegrasyonu/` | Hizmet sayfası | 56 | 156 | 1668 | 0 | 53 | 8 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | noindex, follow |
| `/hizmetler/personel-kullanici-yonetimi/` | Hizmet sayfası | 50 | 150 | 1673 | 0 | 53 | 8 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | noindex, follow |
| `/hizmetler/portfoy-sitesi/` | Hizmet sayfası | 35 | 150 | 1657 | 0 | 58 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmetler/proforma-siparis-yonetimi/` | Hizmet sayfası | 48 | 147 | 1683 | 0 | 58 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmetler/raporlama-sistemi/` | Hizmet sayfası | 38 | 148 | 1606 | 0 | 53 | 8 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | noindex, follow |
| `/hizmetler/rezervasyon-basvuru-sistemi/` | Hizmet sayfası | 51 | 157 | 1717 | 0 | 61 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmetler/saas-platformu/` | Hizmet sayfası | 35 | 146 | 1613 | 0 | 52 | 8 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | noindex, follow |
| `/hizmetler/schema-org-structured-data/` | Hizmet sayfası | 49 | 151 | 1613 | 0 | 52 | 8 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | noindex, follow |
| `/hizmetler/seo-danismanligi/` | Hizmet sayfası | 37 | 146 | 1597 | 0 | 54 | 8 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | noindex, follow |
| `/hizmetler/seo-uyumlu-sayfa-mimarisi/` | Hizmet sayfası | 46 | 154 | 1683 | 0 | 52 | 8 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | noindex, follow |
| `/hizmetler/stok-yonetimi/` | Hizmet sayfası | 34 | 150 | 1722 | 0 | 59 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmetler/supabase-postgresql/` | Hizmet sayfası | 52 | 153 | 1608 | 0 | 52 | 8 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | noindex, follow |
| `/hizmetler/teklif-hazirlama-sistemi/` | Hizmet sayfası | 45 | 144 | 1630 | 0 | 59 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmetler/teknik-seo/` | Hizmet sayfası | 31 | 147 | 1686 | 2 | 58 | 7 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmetler/urun-tanitim-sitesi/` | Hizmet sayfası | 49 | 155 | 1895 | 0 | 58 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmetler/urun-tedarikci-yonetimi/` | Hizmet sayfası | 46 | 148 | 1703 | 0 | 58 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmetler/vercel-deployment/` | Hizmet sayfası | 38 | 153 | 1584 | 0 | 52 | 8 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | noindex, follow |
| `/hizmetler/web-sitesi-yenileme/` | Hizmet sayfası | 56 | 145 | 1816 | 0 | 58 | 7 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmetler/yonetim-paneli/` | Hizmet sayfası | 35 | 148 | 1616 | 0 | 53 | 8 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | noindex, follow |
| `/iletisim/` | Kurumsal | 45 | 155 | 373 | 0 | 52 | - | Organization+ProfessionalService+WebSite | index, follow |
| `/kvkk/` | Kurumsal | 45 | 158 | 299 | 0 | 52 | - | Organization+ProfessionalService+WebSite | index, follow |
| `/sehir/adana/` | Şehir sayfası | 43 | 151 | 708 | 0 | 74 | - | BreadcrumbList+LocalBusiness+Organization+ProfessionalService+WebSite | index, follow |
| `/sehir/ankara/` | Şehir sayfası | 44 | 156 | 715 | 0 | 74 | - | BreadcrumbList+LocalBusiness+Organization+ProfessionalService+WebSite | index, follow |
| `/sehir/antalya/` | Şehir sayfası | 45 | 156 | 712 | 0 | 74 | - | BreadcrumbList+LocalBusiness+Organization+ProfessionalService+WebSite | index, follow |
| `/sehir/bursa/` | Şehir sayfası | 43 | 148 | 710 | 0 | 74 | - | BreadcrumbList+LocalBusiness+Organization+ProfessionalService+WebSite | index, follow |
| `/sehir/gaziantep/` | Şehir sayfası | 47 | 151 | 709 | 0 | 74 | - | BreadcrumbList+LocalBusiness+Organization+ProfessionalService+WebSite | index, follow |
| `/sehir/istanbul/` | Şehir sayfası | 46 | 156 | 724 | 0 | 74 | - | BreadcrumbList+LocalBusiness+Organization+ProfessionalService+WebSite | index, follow |
| `/sehir/izmir/` | Şehir sayfası | 43 | 149 | 720 | 0 | 74 | - | BreadcrumbList+LocalBusiness+Organization+ProfessionalService+WebSite | index, follow |
| `/sehir/kayseri/` | Şehir sayfası | 45 | 153 | 711 | 0 | 74 | - | BreadcrumbList+LocalBusiness+Organization+ProfessionalService+WebSite | index, follow |
| `/sehir/kocaeli/` | Şehir sayfası | 45 | 149 | 710 | 0 | 74 | - | BreadcrumbList+LocalBusiness+Organization+ProfessionalService+WebSite | index, follow |
| `/sehir/konya/` | Şehir sayfası | 43 | 148 | 710 | 0 | 74 | - | BreadcrumbList+LocalBusiness+Organization+ProfessionalService+WebSite | index, follow |
| `/surec/` | Kurumsal | 54 | 152 | 279 | 1 | 52 | - | Organization+ProfessionalService+WebSite | index, follow |

### 2b. İndekslenebilir URL'ler — meta değerleri (sitemap'teki 71 kayıt)

| URL | Title | Description |
|---|---|---|
| `/` | Tardigrad Software | Kurumsal Web, Özel Yazılım ve SEO | Kurumsal web sitesi, özel yazılım, SaaS, e-ticaret ve SEO hizmetlerini tek elden yürüten Türkiye geneli teknoloji firması. 43 hizmet, 9 adımlı süreç. |
| `/hakkimizda/` | Hakkımızda | Tardigrad Software | Tardigrad Software; kurumsal web, özel yazılım, SaaS, SEO ve IT/AI işlerini tek ekiple yürüten Türkiye merkezli teknoloji firması. 43 hizmet, 9 adımlı. |
| `/hizmet/ai-chatbot/adana/` | AI Chatbot — Adana | Tardigrad Software | AI chatbot hizmeti Adana için: Sitenizin ve WhatsApp hattınızın 7/24 çalışan, kaynağa bağlı asistanı — Akdeniz bölgesi. İl/ilçe sayfa ailesi ve ölçüm planı. |
| `/hizmet/ai-chatbot/ankara/` | AI Chatbot — Ankara | Tardigrad Software | AI chatbot hizmeti Ankara için: Sitenizin ve WhatsApp hattınızın 7/24 çalışan, kaynağa bağlı asistanı — İç Anadolu bölgesi. İl/ilçe sayfa ailesi ve ölçüm. |
| `/hizmet/ai-chatbot/antalya/` | AI Chatbot — Antalya | Tardigrad Software | AI chatbot hizmeti Antalya için: Sitenizin ve WhatsApp hattınızın 7/24 çalışan, kaynağa bağlı asistanı — Akdeniz bölgesi. İl/ilçe sayfa ailesi ve ölçüm. |
| `/hizmet/ai-chatbot/bursa/` | AI Chatbot — Bursa | Tardigrad Software | AI chatbot hizmeti Bursa için: Sitenizin ve WhatsApp hattınızın 7/24 çalışan, kaynağa bağlı asistanı — Marmara bölgesi. İl/ilçe sayfa ailesi ve ölçüm planı. |
| `/hizmet/ai-chatbot/gaziantep/` | AI Chatbot — Gaziantep | Tardigrad Software | AI chatbot hizmeti Gaziantep için: Sitenizin ve WhatsApp hattınızın 7/24 çalışan, kaynağa bağlı asistanı — Güneydoğu Anadolu bölgesi. İl/ilçe sayfa ailesi. |
| `/hizmet/ai-chatbot/istanbul/` | AI Chatbot — İstanbul | Tardigrad Software | AI chatbot hizmeti İstanbul için: Sitenizin ve WhatsApp hattınızın 7/24 çalışan, kaynağa bağlı asistanı — Marmara bölgesi. İl/ilçe sayfa ailesi ve ölçüm. |
| `/hizmet/ai-chatbot/izmir/` | AI Chatbot — İzmir | Tardigrad Software | AI chatbot hizmeti İzmir için: Sitenizin ve WhatsApp hattınızın 7/24 çalışan, kaynağa bağlı asistanı — Ege bölgesi. İl/ilçe sayfa ailesi ve ölçüm planı dâhil. |
| `/hizmet/ai-chatbot/kayseri/` | AI Chatbot — Kayseri | Tardigrad Software | AI chatbot hizmeti Kayseri için: Sitenizin ve WhatsApp hattınızın 7/24 çalışan, kaynağa bağlı asistanı — İç Anadolu bölgesi. İl/ilçe sayfa ailesi ve ölçüm. |
| `/hizmet/ai-chatbot/kocaeli/` | AI Chatbot — Kocaeli | Tardigrad Software | AI chatbot hizmeti Kocaeli için: Sitenizin ve WhatsApp hattınızın 7/24 çalışan, kaynağa bağlı asistanı — Marmara bölgesi. İl/ilçe sayfa ailesi ve ölçüm. |
| `/hizmet/ai-chatbot/konya/` | AI Chatbot — Konya | Tardigrad Software | AI chatbot hizmeti Konya için: Sitenizin ve WhatsApp hattınızın 7/24 çalışan, kaynağa bağlı asistanı — İç Anadolu bölgesi. İl/ilçe sayfa ailesi ve ölçüm. |
| `/hizmet/crm/adana/` | CRM — Adana | Tardigrad Software | CRM hizmeti Adana için: Satış hattınızı ve müşteri geçmişini tek panelde toplayan özel CRM — Akdeniz bölgesi. İl/ilçe sayfa ailesi ve ölçüm planı dâhil. |
| `/hizmet/crm/ankara/` | CRM — Ankara | Tardigrad Software | CRM hizmeti Ankara için: Satış hattınızı ve müşteri geçmişini tek panelde toplayan özel CRM — İç Anadolu bölgesi. İl/ilçe sayfa ailesi ve ölçüm planı dâhil. |
| `/hizmet/crm/antalya/` | CRM — Antalya | Tardigrad Software | CRM hizmeti Antalya için: Satış hattınızı ve müşteri geçmişini tek panelde toplayan özel CRM — Akdeniz bölgesi. İl/ilçe sayfa ailesi ve ölçüm planı dâhil. |
| `/hizmet/crm/bursa/` | CRM — Bursa | Tardigrad Software | CRM hizmeti Bursa için: Satış hattınızı ve müşteri geçmişini tek panelde toplayan özel CRM — Marmara bölgesi. İl/ilçe sayfa ailesi ve ölçüm planı dâhil. |
| `/hizmet/crm/gaziantep/` | CRM — Gaziantep | Tardigrad Software | CRM hizmeti Gaziantep için: Satış hattınızı ve müşteri geçmişini tek panelde toplayan özel CRM — Güneydoğu Anadolu bölgesi. İl/ilçe sayfa ailesi ve ölçüm. |
| `/hizmet/crm/istanbul/` | CRM — İstanbul | Tardigrad Software | CRM hizmeti İstanbul için: Satış hattınızı ve müşteri geçmişini tek panelde toplayan özel CRM — Marmara bölgesi. İl/ilçe sayfa ailesi ve ölçüm planı dâhil. |
| `/hizmet/crm/izmir/` | CRM — İzmir | Tardigrad Software | CRM hizmeti İzmir için: Satış hattınızı ve müşteri geçmişini tek panelde toplayan özel CRM — Ege bölgesi. İl/ilçe sayfa ailesi ve ölçüm planı dâhil. |
| `/hizmet/crm/kayseri/` | CRM — Kayseri | Tardigrad Software | CRM hizmeti Kayseri için: Satış hattınızı ve müşteri geçmişini tek panelde toplayan özel CRM — İç Anadolu bölgesi. İl/ilçe sayfa ailesi ve ölçüm planı dâhil. |
| `/hizmet/crm/kocaeli/` | CRM — Kocaeli | Tardigrad Software | CRM hizmeti Kocaeli için: Satış hattınızı ve müşteri geçmişini tek panelde toplayan özel CRM — Marmara bölgesi. İl/ilçe sayfa ailesi ve ölçüm planı dâhil. |
| `/hizmet/crm/konya/` | CRM — Konya | Tardigrad Software | CRM hizmeti Konya için: Satış hattınızı ve müşteri geçmişini tek panelde toplayan özel CRM — İç Anadolu bölgesi. İl/ilçe sayfa ailesi ve ölçüm planı dâhil. |
| `/hizmet/e-ticaret-sitesi/adana/` | E-Ticaret Sitesi — Adana | Tardigrad Software | E-ticaret sitesi hizmeti Adana için: Kendi ürün kataloğunuzla, komisyon oranlarına sıkışmadan satış yapacağınız site — Akdeniz bölgesi. İl/ilçe sayfa ailesi. |
| `/hizmet/e-ticaret-sitesi/ankara/` | E-Ticaret Sitesi — Ankara | Tardigrad Software | E-ticaret sitesi hizmeti Ankara için: Kendi ürün kataloğunuzla, komisyon oranlarına sıkışmadan satış yapacağınız site — İç Anadolu bölgesi. İl/ilçe sayfa. |
| `/hizmet/e-ticaret-sitesi/antalya/` | E-Ticaret Sitesi — Antalya | Tardigrad Software | E-ticaret sitesi hizmeti Antalya için: Kendi ürün kataloğunuzla, komisyon oranlarına sıkışmadan satış yapacağınız site — Akdeniz bölgesi. İl/ilçe sayfa. |
| `/hizmet/e-ticaret-sitesi/bursa/` | E-Ticaret Sitesi — Bursa | Tardigrad Software | E-ticaret sitesi hizmeti Bursa için: Kendi ürün kataloğunuzla, komisyon oranlarına sıkışmadan satış yapacağınız site — Marmara bölgesi. İl/ilçe sayfa ailesi. |
| `/hizmet/e-ticaret-sitesi/gaziantep/` | E-Ticaret Sitesi — Gaziantep | Tardigrad Software | E-ticaret sitesi hizmeti Gaziantep için: Kendi ürün kataloğunuzla, komisyon oranlarına sıkışmadan satış yapacağınız site — Güneydoğu Anadolu bölgesi. |
| `/hizmet/e-ticaret-sitesi/istanbul/` | E-Ticaret Sitesi — İstanbul | Tardigrad Software | E-ticaret sitesi hizmeti İstanbul için: Kendi ürün kataloğunuzla, komisyon oranlarına sıkışmadan satış yapacağınız site — Marmara bölgesi. İl/ilçe sayfa. |
| `/hizmet/e-ticaret-sitesi/izmir/` | E-Ticaret Sitesi — İzmir | Tardigrad Software | E-ticaret sitesi hizmeti İzmir için: Kendi ürün kataloğunuzla, komisyon oranlarına sıkışmadan satış yapacağınız site — Ege bölgesi. İl/ilçe sayfa ailesi. |
| `/hizmet/e-ticaret-sitesi/kayseri/` | E-Ticaret Sitesi — Kayseri | Tardigrad Software | E-ticaret sitesi hizmeti Kayseri için: Kendi ürün kataloğunuzla, komisyon oranlarına sıkışmadan satış yapacağınız site — İç Anadolu bölgesi. İl/ilçe sayfa. |
| `/hizmet/e-ticaret-sitesi/kocaeli/` | E-Ticaret Sitesi — Kocaeli | Tardigrad Software | E-ticaret sitesi hizmeti Kocaeli için: Kendi ürün kataloğunuzla, komisyon oranlarına sıkışmadan satış yapacağınız site — Marmara bölgesi. İl/ilçe sayfa. |
| `/hizmet/e-ticaret-sitesi/konya/` | E-Ticaret Sitesi — Konya | Tardigrad Software | E-ticaret sitesi hizmeti Konya için: Kendi ürün kataloğunuzla, komisyon oranlarına sıkışmadan satış yapacağınız site — İç Anadolu bölgesi. İl/ilçe sayfa. |
| `/hizmet/firma-web-sitesi/adana/` | Firma Web Sitesi — Adana | Tardigrad Software | Firma web sitesi hizmeti Adana için: KOBİ'ler için ürün, hizmet ve iletişim katmanı hazır gelen firma sitesi — Akdeniz bölgesi. İl/ilçe sayfa ailesi. |
| `/hizmet/firma-web-sitesi/ankara/` | Firma Web Sitesi — Ankara | Tardigrad Software | Firma web sitesi hizmeti Ankara için: KOBİ'ler için ürün, hizmet ve iletişim katmanı hazır gelen firma sitesi — İç Anadolu bölgesi. İl/ilçe sayfa ailesi. |
| `/hizmet/firma-web-sitesi/antalya/` | Firma Web Sitesi — Antalya | Tardigrad Software | Firma web sitesi hizmeti Antalya için: KOBİ'ler için ürün, hizmet ve iletişim katmanı hazır gelen firma sitesi — Akdeniz bölgesi. İl/ilçe sayfa ailesi. |
| `/hizmet/firma-web-sitesi/bursa/` | Firma Web Sitesi — Bursa | Tardigrad Software | Firma web sitesi hizmeti Bursa için: KOBİ'ler için ürün, hizmet ve iletişim katmanı hazır gelen firma sitesi — Marmara bölgesi. İl/ilçe sayfa ailesi. |
| `/hizmet/firma-web-sitesi/gaziantep/` | Firma Web Sitesi — Gaziantep | Tardigrad Software | Firma web sitesi hizmeti Gaziantep için: KOBİ'ler için ürün, hizmet ve iletişim katmanı hazır gelen firma sitesi — Güneydoğu Anadolu bölgesi. İl/ilçe sayfa. |
| `/hizmet/firma-web-sitesi/istanbul/` | Firma Web Sitesi — İstanbul | Tardigrad Software | Firma web sitesi hizmeti İstanbul için: KOBİ'ler için ürün, hizmet ve iletişim katmanı hazır gelen firma sitesi — Marmara bölgesi. İl/ilçe sayfa ailesi. |
| `/hizmet/firma-web-sitesi/izmir/` | Firma Web Sitesi — İzmir | Tardigrad Software | Firma web sitesi hizmeti İzmir için: KOBİ'ler için ürün, hizmet ve iletişim katmanı hazır gelen firma sitesi — Ege bölgesi. İl/ilçe sayfa ailesi ve ölçüm. |
| `/hizmet/firma-web-sitesi/kayseri/` | Firma Web Sitesi — Kayseri | Tardigrad Software | Firma web sitesi hizmeti Kayseri için: KOBİ'ler için ürün, hizmet ve iletişim katmanı hazır gelen firma sitesi — İç Anadolu bölgesi. İl/ilçe sayfa ailesi. |
| `/hizmet/firma-web-sitesi/kocaeli/` | Firma Web Sitesi — Kocaeli | Tardigrad Software | Firma web sitesi hizmeti Kocaeli için: KOBİ'ler için ürün, hizmet ve iletişim katmanı hazır gelen firma sitesi — Marmara bölgesi. İl/ilçe sayfa ailesi. |
| `/hizmet/firma-web-sitesi/konya/` | Firma Web Sitesi — Konya | Tardigrad Software | Firma web sitesi hizmeti Konya için: KOBİ'ler için ürün, hizmet ve iletişim katmanı hazır gelen firma sitesi — İç Anadolu bölgesi. İl/ilçe sayfa ailesi. |
| `/hizmet/kurumsal-web-sitesi/adana/` | Kurumsal Web Sitesi — Adana | Tardigrad Software | Kurumsal web sitesi hizmeti Adana için: Markanızı anlatan, talep üreten, hız ve SEO hedeflerini karşılayan kurumsal site — Akdeniz bölgesi. İl/ilçe sayfa. |
| `/hizmet/kurumsal-web-sitesi/ankara/` | Kurumsal Web Sitesi — Ankara | Tardigrad Software | Kurumsal web sitesi hizmeti Ankara için: Markanızı anlatan, talep üreten, hız ve SEO hedeflerini karşılayan kurumsal site — İç Anadolu bölgesi. İl/ilçe. |
| `/hizmet/kurumsal-web-sitesi/antalya/` | Kurumsal Web Sitesi — Antalya | Tardigrad Software | Kurumsal web sitesi hizmeti Antalya için: Markanızı anlatan, talep üreten, hız ve SEO hedeflerini karşılayan kurumsal site — Akdeniz bölgesi. İl/ilçe sayfa. |
| `/hizmet/kurumsal-web-sitesi/bursa/` | Kurumsal Web Sitesi — Bursa | Tardigrad Software | Kurumsal web sitesi hizmeti Bursa için: Markanızı anlatan, talep üreten, hız ve SEO hedeflerini karşılayan kurumsal site — Marmara bölgesi. İl/ilçe sayfa. |
| `/hizmet/kurumsal-web-sitesi/gaziantep/` | Kurumsal Web Sitesi — Gaziantep | Tardigrad Software | Kurumsal web sitesi hizmeti Gaziantep için: Markanızı anlatan, talep üreten, hız ve SEO hedeflerini karşılayan kurumsal site — Güneydoğu Anadolu bölgesi. |
| `/hizmet/kurumsal-web-sitesi/istanbul/` | Kurumsal Web Sitesi — İstanbul | Tardigrad Software | Kurumsal web sitesi hizmeti İstanbul için: Markanızı anlatan, talep üreten, hız ve SEO hedeflerini karşılayan kurumsal site — Marmara bölgesi. İl/ilçe sayfa. |
| `/hizmet/kurumsal-web-sitesi/izmir/` | Kurumsal Web Sitesi — İzmir | Tardigrad Software | Kurumsal web sitesi hizmeti İzmir için: Markanızı anlatan, talep üreten, hız ve SEO hedeflerini karşılayan kurumsal site — Ege bölgesi. İl/ilçe sayfa ailesi. |
| `/hizmet/kurumsal-web-sitesi/kayseri/` | Kurumsal Web Sitesi — Kayseri | Tardigrad Software | Kurumsal web sitesi hizmeti Kayseri için: Markanızı anlatan, talep üreten, hız ve SEO hedeflerini karşılayan kurumsal site — İç Anadolu bölgesi. İl/ilçe. |
| `/hizmet/kurumsal-web-sitesi/kocaeli/` | Kurumsal Web Sitesi — Kocaeli | Tardigrad Software | Kurumsal web sitesi hizmeti Kocaeli için: Markanızı anlatan, talep üreten, hız ve SEO hedeflerini karşılayan kurumsal site — Marmara bölgesi. İl/ilçe sayfa. |
| `/hizmet/kurumsal-web-sitesi/konya/` | Kurumsal Web Sitesi — Konya | Tardigrad Software | Kurumsal web sitesi hizmeti Konya için: Markanızı anlatan, talep üreten, hız ve SEO hedeflerini karşılayan kurumsal site — İç Anadolu bölgesi. İl/ilçe sayfa. |
| `/hizmet/landing-page/adana/` | Landing Page — Adana | Tardigrad Software | Landing page hizmeti Adana için: Reklam trafiğini talebe çeviren, tek amaçlı ve test edilebilir açılış sayfaları — Akdeniz bölgesi. İl/ilçe sayfa ailesi. |
| `/hizmet/landing-page/ankara/` | Landing Page — Ankara | Tardigrad Software | Landing page hizmeti Ankara için: Reklam trafiğini talebe çeviren, tek amaçlı ve test edilebilir açılış sayfaları — İç Anadolu bölgesi. İl/ilçe sayfa ailesi. |
| `/hizmet/landing-page/antalya/` | Landing Page — Antalya | Tardigrad Software | Landing page hizmeti Antalya için: Reklam trafiğini talebe çeviren, tek amaçlı ve test edilebilir açılış sayfaları — Akdeniz bölgesi. İl/ilçe sayfa ailesi. |
| `/hizmet/landing-page/bursa/` | Landing Page — Bursa | Tardigrad Software | Landing page hizmeti Bursa için: Reklam trafiğini talebe çeviren, tek amaçlı ve test edilebilir açılış sayfaları — Marmara bölgesi. İl/ilçe sayfa ailesi. |
| `/hizmet/landing-page/gaziantep/` | Landing Page — Gaziantep | Tardigrad Software | Landing page hizmeti Gaziantep için: Reklam trafiğini talebe çeviren, tek amaçlı ve test edilebilir açılış sayfaları — Güneydoğu Anadolu bölgesi. İl/ilçe. |
| `/hizmet/landing-page/istanbul/` | Landing Page — İstanbul | Tardigrad Software | Landing page hizmeti İstanbul için: Reklam trafiğini talebe çeviren, tek amaçlı ve test edilebilir açılış sayfaları — Marmara bölgesi. İl/ilçe sayfa ailesi. |
| `/hizmet/landing-page/izmir/` | Landing Page — İzmir | Tardigrad Software | Landing page hizmeti İzmir için: Reklam trafiğini talebe çeviren, tek amaçlı ve test edilebilir açılış sayfaları — Ege bölgesi. İl/ilçe sayfa ailesi. |
| `/hizmet/landing-page/kayseri/` | Landing Page — Kayseri | Tardigrad Software | Landing page hizmeti Kayseri için: Reklam trafiğini talebe çeviren, tek amaçlı ve test edilebilir açılış sayfaları — İç Anadolu bölgesi. İl/ilçe sayfa. |
| `/hizmet/landing-page/kocaeli/` | Landing Page — Kocaeli | Tardigrad Software | Landing page hizmeti Kocaeli için: Reklam trafiğini talebe çeviren, tek amaçlı ve test edilebilir açılış sayfaları — Marmara bölgesi. İl/ilçe sayfa ailesi. |
| `/hizmet/landing-page/konya/` | Landing Page — Konya | Tardigrad Software | Landing page hizmeti Konya için: Reklam trafiğini talebe çeviren, tek amaçlı ve test edilebilir açılış sayfaları — İç Anadolu bölgesi. İl/ilçe sayfa ailesi. |
| `/hizmet/musteri-yonetim-sistemi/adana/` | Müşteri Yönetim Sistemi — Adana | Tardigrad Software | Müşteri yönetim sistemi hizmeti Adana için: Müşteri verisini temizleyen, tekrarını engelleyen, ekibe paylaşan sistem — Akdeniz bölgesi. İl/ilçe sayfa ailesi. |
| `/hizmet/musteri-yonetim-sistemi/ankara/` | Müşteri Yönetim Sistemi — Ankara | Tardigrad Software | Müşteri yönetim sistemi hizmeti Ankara için: Müşteri verisini temizleyen, tekrarını engelleyen, ekibe paylaşan sistem — İç Anadolu bölgesi. İl/ilçe sayfa. |
| `/hizmet/musteri-yonetim-sistemi/antalya/` | Müşteri Yönetim Sistemi — Antalya | Tardigrad Software | Müşteri yönetim sistemi hizmeti Antalya için: Müşteri verisini temizleyen, tekrarını engelleyen, ekibe paylaşan sistem — Akdeniz bölgesi. İl/ilçe sayfa. |
| `/hizmet/musteri-yonetim-sistemi/bursa/` | Müşteri Yönetim Sistemi — Bursa | Tardigrad Software | Müşteri yönetim sistemi hizmeti Bursa için: Müşteri verisini temizleyen, tekrarını engelleyen, ekibe paylaşan sistem — Marmara bölgesi. İl/ilçe sayfa ailesi. |
| `/hizmet/musteri-yonetim-sistemi/gaziantep/` | Müşteri Yönetim Sistemi — Gaziantep | Tardigrad Software | Müşteri yönetim sistemi hizmeti Gaziantep için: Müşteri verisini temizleyen, tekrarını engelleyen, ekibe paylaşan sistem — Güneydoğu Anadolu bölgesi. |
| `/hizmet/musteri-yonetim-sistemi/istanbul/` | Müşteri Yönetim Sistemi — İstanbul | Tardigrad Software | Müşteri yönetim sistemi hizmeti İstanbul için: Müşteri verisini temizleyen, tekrarını engelleyen, ekibe paylaşan sistem — Marmara bölgesi. İl/ilçe sayfa. |
| `/hizmet/musteri-yonetim-sistemi/izmir/` | Müşteri Yönetim Sistemi — İzmir | Tardigrad Software | Müşteri yönetim sistemi hizmeti İzmir için: Müşteri verisini temizleyen, tekrarını engelleyen, ekibe paylaşan sistem — Ege bölgesi. İl/ilçe sayfa ailesi. |
| `/hizmet/musteri-yonetim-sistemi/kayseri/` | Müşteri Yönetim Sistemi — Kayseri | Tardigrad Software | Müşteri yönetim sistemi hizmeti Kayseri için: Müşteri verisini temizleyen, tekrarını engelleyen, ekibe paylaşan sistem — İç Anadolu bölgesi. İl/ilçe sayfa. |
| `/hizmet/musteri-yonetim-sistemi/kocaeli/` | Müşteri Yönetim Sistemi — Kocaeli | Tardigrad Software | Müşteri yönetim sistemi hizmeti Kocaeli için: Müşteri verisini temizleyen, tekrarını engelleyen, ekibe paylaşan sistem — Marmara bölgesi. İl/ilçe sayfa. |
| `/hizmet/musteri-yonetim-sistemi/konya/` | Müşteri Yönetim Sistemi — Konya | Tardigrad Software | Müşteri yönetim sistemi hizmeti Konya için: Müşteri verisini temizleyen, tekrarını engelleyen, ekibe paylaşan sistem — İç Anadolu bölgesi. İl/ilçe sayfa. |
| `/hizmet/portfoy-sitesi/adana/` | Portföy Sitesi — Adana | Tardigrad Software | Portfolyo sitesi hizmeti Adana için: İşlerinizi güvenle sergileyen, az metinle çok şey anlatan kişisel site — Akdeniz bölgesi. İl/ilçe sayfa ailesi ve ölçüm. |
| `/hizmet/portfoy-sitesi/ankara/` | Portföy Sitesi — Ankara | Tardigrad Software | Portfolyo sitesi hizmeti Ankara için: İşlerinizi güvenle sergileyen, az metinle çok şey anlatan kişisel site — İç Anadolu bölgesi. İl/ilçe sayfa ailesi. |
| `/hizmet/portfoy-sitesi/antalya/` | Portföy Sitesi — Antalya | Tardigrad Software | Portfolyo sitesi hizmeti Antalya için: İşlerinizi güvenle sergileyen, az metinle çok şey anlatan kişisel site — Akdeniz bölgesi. İl/ilçe sayfa ailesi. |
| `/hizmet/portfoy-sitesi/bursa/` | Portföy Sitesi — Bursa | Tardigrad Software | Portfolyo sitesi hizmeti Bursa için: İşlerinizi güvenle sergileyen, az metinle çok şey anlatan kişisel site — Marmara bölgesi. İl/ilçe sayfa ailesi ve ölçüm. |
| `/hizmet/portfoy-sitesi/gaziantep/` | Portföy Sitesi — Gaziantep | Tardigrad Software | Portfolyo sitesi hizmeti Gaziantep için: İşlerinizi güvenle sergileyen, az metinle çok şey anlatan kişisel site — Güneydoğu Anadolu bölgesi. İl/ilçe sayfa. |
| `/hizmet/portfoy-sitesi/istanbul/` | Portföy Sitesi — İstanbul | Tardigrad Software | Portfolyo sitesi hizmeti İstanbul için: İşlerinizi güvenle sergileyen, az metinle çok şey anlatan kişisel site — Marmara bölgesi. İl/ilçe sayfa ailesi. |
| `/hizmet/portfoy-sitesi/izmir/` | Portföy Sitesi — İzmir | Tardigrad Software | Portfolyo sitesi hizmeti İzmir için: İşlerinizi güvenle sergileyen, az metinle çok şey anlatan kişisel site — Ege bölgesi. İl/ilçe sayfa ailesi ve ölçüm. |
| `/hizmet/portfoy-sitesi/kayseri/` | Portföy Sitesi — Kayseri | Tardigrad Software | Portfolyo sitesi hizmeti Kayseri için: İşlerinizi güvenle sergileyen, az metinle çok şey anlatan kişisel site — İç Anadolu bölgesi. İl/ilçe sayfa ailesi. |
| `/hizmet/portfoy-sitesi/kocaeli/` | Portföy Sitesi — Kocaeli | Tardigrad Software | Portfolyo sitesi hizmeti Kocaeli için: İşlerinizi güvenle sergileyen, az metinle çok şey anlatan kişisel site — Marmara bölgesi. İl/ilçe sayfa ailesi. |
| `/hizmet/portfoy-sitesi/konya/` | Portföy Sitesi — Konya | Tardigrad Software | Portfolyo sitesi hizmeti Konya için: İşlerinizi güvenle sergileyen, az metinle çok şey anlatan kişisel site — İç Anadolu bölgesi. İl/ilçe sayfa ailesi. |
| `/hizmet/proforma-siparis-yonetimi/adana/` | Proforma / Sipariş Yönetimi — Adana | Tardigrad Software | Sipariş yönetim sistemi hizmeti Adana için: Siparişin her adımını tek ekranda izleten operasyon paneli — Akdeniz bölgesi. İl/ilçe sayfa ailesi ve ölçüm. |
| `/hizmet/proforma-siparis-yonetimi/ankara/` | Proforma / Sipariş Yönetimi — Ankara | Tardigrad Software | Sipariş yönetim sistemi hizmeti Ankara için: Siparişin her adımını tek ekranda izleten operasyon paneli — İç Anadolu bölgesi. İl/ilçe sayfa ailesi ve ölçüm. |
| `/hizmet/proforma-siparis-yonetimi/antalya/` | Proforma / Sipariş Yönetimi — Antalya | Tardigrad Software | Sipariş yönetim sistemi hizmeti Antalya için: Siparişin her adımını tek ekranda izleten operasyon paneli — Akdeniz bölgesi. İl/ilçe sayfa ailesi ve ölçüm. |
| `/hizmet/proforma-siparis-yonetimi/bursa/` | Proforma / Sipariş Yönetimi — Bursa | Tardigrad Software | Sipariş yönetim sistemi hizmeti Bursa için: Siparişin her adımını tek ekranda izleten operasyon paneli — Marmara bölgesi. İl/ilçe sayfa ailesi ve ölçüm. |
| `/hizmet/proforma-siparis-yonetimi/gaziantep/` | Proforma / Sipariş Yönetimi — Gaziantep | Tardigrad Software | Sipariş yönetim sistemi hizmeti Gaziantep için: Siparişin her adımını tek ekranda izleten operasyon paneli — Güneydoğu Anadolu bölgesi. İl/ilçe sayfa ailesi. |
| `/hizmet/proforma-siparis-yonetimi/istanbul/` | Proforma / Sipariş Yönetimi — İstanbul | Tardigrad Software | Sipariş yönetim sistemi hizmeti İstanbul için: Siparişin her adımını tek ekranda izleten operasyon paneli — Marmara bölgesi. İl/ilçe sayfa ailesi ve ölçüm. |
| `/hizmet/proforma-siparis-yonetimi/izmir/` | Proforma / Sipariş Yönetimi — İzmir | Tardigrad Software | Sipariş yönetim sistemi hizmeti İzmir için: Siparişin her adımını tek ekranda izleten operasyon paneli — Ege bölgesi. İl/ilçe sayfa ailesi ve ölçüm planı. |
| `/hizmet/proforma-siparis-yonetimi/kayseri/` | Proforma / Sipariş Yönetimi — Kayseri | Tardigrad Software | Sipariş yönetim sistemi hizmeti Kayseri için: Siparişin her adımını tek ekranda izleten operasyon paneli — İç Anadolu bölgesi. İl/ilçe sayfa ailesi ve ölçüm. |
| `/hizmet/proforma-siparis-yonetimi/kocaeli/` | Proforma / Sipariş Yönetimi — Kocaeli | Tardigrad Software | Sipariş yönetim sistemi hizmeti Kocaeli için: Siparişin her adımını tek ekranda izleten operasyon paneli — Marmara bölgesi. İl/ilçe sayfa ailesi ve ölçüm. |
| `/hizmet/proforma-siparis-yonetimi/konya/` | Proforma / Sipariş Yönetimi — Konya | Tardigrad Software | Sipariş yönetim sistemi hizmeti Konya için: Siparişin her adımını tek ekranda izleten operasyon paneli — İç Anadolu bölgesi. İl/ilçe sayfa ailesi ve ölçüm. |
| `/hizmet/rezervasyon-basvuru-sistemi/adana/` | Rezervasyon ve Başvuru Sistemi — Adana | Tardigrad Software | Rezervasyon sistemi hizmeti Adana için: Müsaitlik, onay ve hatırlatma akışını otomatikleştiren rezervasyon paneli — Akdeniz bölgesi. İl/ilçe sayfa ailesi. |
| `/hizmet/rezervasyon-basvuru-sistemi/ankara/` | Rezervasyon ve Başvuru Sistemi — Ankara | Tardigrad Software | Rezervasyon sistemi hizmeti Ankara için: Müsaitlik, onay ve hatırlatma akışını otomatikleştiren rezervasyon paneli — İç Anadolu bölgesi. İl/ilçe sayfa. |
| `/hizmet/rezervasyon-basvuru-sistemi/antalya/` | Rezervasyon ve Başvuru Sistemi — Antalya | Rezervasyon sistemi hizmeti Antalya için: Müsaitlik, onay ve hatırlatma akışını otomatikleştiren rezervasyon paneli — Akdeniz bölgesi. İl/ilçe sayfa ailesi. |
| `/hizmet/rezervasyon-basvuru-sistemi/bursa/` | Rezervasyon ve Başvuru Sistemi — Bursa | Tardigrad Software | Rezervasyon sistemi hizmeti Bursa için: Müsaitlik, onay ve hatırlatma akışını otomatikleştiren rezervasyon paneli — Marmara bölgesi. İl/ilçe sayfa ailesi. |
| `/hizmet/rezervasyon-basvuru-sistemi/gaziantep/` | Rezervasyon ve Başvuru Sistemi — Gaziantep | Rezervasyon sistemi hizmeti Gaziantep için: Müsaitlik, onay ve hatırlatma akışını otomatikleştiren rezervasyon paneli — Güneydoğu Anadolu bölgesi. İl/ilçe. |
| `/hizmet/rezervasyon-basvuru-sistemi/istanbul/` | Rezervasyon ve Başvuru Sistemi — İstanbul | Rezervasyon sistemi hizmeti İstanbul için: Müsaitlik, onay ve hatırlatma akışını otomatikleştiren rezervasyon paneli — Marmara bölgesi. İl/ilçe sayfa ailesi. |
| `/hizmet/rezervasyon-basvuru-sistemi/izmir/` | Rezervasyon ve Başvuru Sistemi — İzmir | Tardigrad Software | Rezervasyon sistemi hizmeti İzmir için: Müsaitlik, onay ve hatırlatma akışını otomatikleştiren rezervasyon paneli — Ege bölgesi. İl/ilçe sayfa ailesi. |
| `/hizmet/rezervasyon-basvuru-sistemi/kayseri/` | Rezervasyon ve Başvuru Sistemi — Kayseri | Rezervasyon sistemi hizmeti Kayseri için: Müsaitlik, onay ve hatırlatma akışını otomatikleştiren rezervasyon paneli — İç Anadolu bölgesi. İl/ilçe sayfa. |
| `/hizmet/rezervasyon-basvuru-sistemi/kocaeli/` | Rezervasyon ve Başvuru Sistemi — Kocaeli | Rezervasyon sistemi hizmeti Kocaeli için: Müsaitlik, onay ve hatırlatma akışını otomatikleştiren rezervasyon paneli — Marmara bölgesi. İl/ilçe sayfa ailesi. |
| `/hizmet/rezervasyon-basvuru-sistemi/konya/` | Rezervasyon ve Başvuru Sistemi — Konya | Tardigrad Software | Rezervasyon sistemi hizmeti Konya için: Müsaitlik, onay ve hatırlatma akışını otomatikleştiren rezervasyon paneli — İç Anadolu bölgesi. İl/ilçe sayfa ailesi. |
| `/hizmet/stok-yonetimi/adana/` | Stok Yönetimi — Adana | Tardigrad Software | Stok yönetim sistemi hizmeti Adana için: Depo, kritik seviye ve hareket geçmişini netleştiren stok altyapısı — Akdeniz bölgesi. İl/ilçe sayfa ailesi. |
| `/hizmet/stok-yonetimi/ankara/` | Stok Yönetimi — Ankara | Tardigrad Software | Stok yönetim sistemi hizmeti Ankara için: Depo, kritik seviye ve hareket geçmişini netleştiren stok altyapısı — İç Anadolu bölgesi. İl/ilçe sayfa ailesi. |
| `/hizmet/stok-yonetimi/antalya/` | Stok Yönetimi — Antalya | Tardigrad Software | Stok yönetim sistemi hizmeti Antalya için: Depo, kritik seviye ve hareket geçmişini netleştiren stok altyapısı — Akdeniz bölgesi. İl/ilçe sayfa ailesi. |
| `/hizmet/stok-yonetimi/bursa/` | Stok Yönetimi — Bursa | Tardigrad Software | Stok yönetim sistemi hizmeti Bursa için: Depo, kritik seviye ve hareket geçmişini netleştiren stok altyapısı — Marmara bölgesi. İl/ilçe sayfa ailesi. |
| `/hizmet/stok-yonetimi/gaziantep/` | Stok Yönetimi — Gaziantep | Tardigrad Software | Stok yönetim sistemi hizmeti Gaziantep için: Depo, kritik seviye ve hareket geçmişini netleştiren stok altyapısı — Güneydoğu Anadolu bölgesi. İl/ilçe sayfa. |
| `/hizmet/stok-yonetimi/istanbul/` | Stok Yönetimi — İstanbul | Tardigrad Software | Stok yönetim sistemi hizmeti İstanbul için: Depo, kritik seviye ve hareket geçmişini netleştiren stok altyapısı — Marmara bölgesi. İl/ilçe sayfa ailesi. |
| `/hizmet/stok-yonetimi/izmir/` | Stok Yönetimi — İzmir | Tardigrad Software | Stok yönetim sistemi hizmeti İzmir için: Depo, kritik seviye ve hareket geçmişini netleştiren stok altyapısı — Ege bölgesi. İl/ilçe sayfa ailesi ve ölçüm. |
| `/hizmet/stok-yonetimi/kayseri/` | Stok Yönetimi — Kayseri | Tardigrad Software | Stok yönetim sistemi hizmeti Kayseri için: Depo, kritik seviye ve hareket geçmişini netleştiren stok altyapısı — İç Anadolu bölgesi. İl/ilçe sayfa ailesi. |
| `/hizmet/stok-yonetimi/kocaeli/` | Stok Yönetimi — Kocaeli | Tardigrad Software | Stok yönetim sistemi hizmeti Kocaeli için: Depo, kritik seviye ve hareket geçmişini netleştiren stok altyapısı — Marmara bölgesi. İl/ilçe sayfa ailesi. |
| `/hizmet/stok-yonetimi/konya/` | Stok Yönetimi — Konya | Tardigrad Software | Stok yönetim sistemi hizmeti Konya için: Depo, kritik seviye ve hareket geçmişini netleştiren stok altyapısı — İç Anadolu bölgesi. İl/ilçe sayfa ailesi. |
| `/hizmet/teklif-hazirlama-sistemi/adana/` | Teklif Hazırlama Sistemi — Adana | Tardigrad Software | Teklif hazırlama sistemi hizmeti Adana için: Fiyat listesinden tek tıkla markalı teklif üreten, takip eden sistem — Akdeniz bölgesi. İl/ilçe sayfa ailesi. |
| `/hizmet/teklif-hazirlama-sistemi/ankara/` | Teklif Hazırlama Sistemi — Ankara | Tardigrad Software | Teklif hazırlama sistemi hizmeti Ankara için: Fiyat listesinden tek tıkla markalı teklif üreten, takip eden sistem — İç Anadolu bölgesi. İl/ilçe sayfa. |
| `/hizmet/teklif-hazirlama-sistemi/antalya/` | Teklif Hazırlama Sistemi — Antalya | Tardigrad Software | Teklif hazırlama sistemi hizmeti Antalya için: Fiyat listesinden tek tıkla markalı teklif üreten, takip eden sistem — Akdeniz bölgesi. İl/ilçe sayfa ailesi. |
| `/hizmet/teklif-hazirlama-sistemi/bursa/` | Teklif Hazırlama Sistemi — Bursa | Tardigrad Software | Teklif hazırlama sistemi hizmeti Bursa için: Fiyat listesinden tek tıkla markalı teklif üreten, takip eden sistem — Marmara bölgesi. İl/ilçe sayfa ailesi. |
| `/hizmet/teklif-hazirlama-sistemi/gaziantep/` | Teklif Hazırlama Sistemi — Gaziantep | Tardigrad Software | Teklif hazırlama sistemi hizmeti Gaziantep için: Fiyat listesinden tek tıkla markalı teklif üreten, takip eden sistem — Güneydoğu Anadolu bölgesi. İl/ilçe. |
| `/hizmet/teklif-hazirlama-sistemi/istanbul/` | Teklif Hazırlama Sistemi — İstanbul | Tardigrad Software | Teklif hazırlama sistemi hizmeti İstanbul için: Fiyat listesinden tek tıkla markalı teklif üreten, takip eden sistem — Marmara bölgesi. İl/ilçe sayfa ailesi. |
| `/hizmet/teklif-hazirlama-sistemi/izmir/` | Teklif Hazırlama Sistemi — İzmir | Tardigrad Software | Teklif hazırlama sistemi hizmeti İzmir için: Fiyat listesinden tek tıkla markalı teklif üreten, takip eden sistem — Ege bölgesi. İl/ilçe sayfa ailesi. |
| `/hizmet/teklif-hazirlama-sistemi/kayseri/` | Teklif Hazırlama Sistemi — Kayseri | Tardigrad Software | Teklif hazırlama sistemi hizmeti Kayseri için: Fiyat listesinden tek tıkla markalı teklif üreten, takip eden sistem — İç Anadolu bölgesi. İl/ilçe sayfa. |
| `/hizmet/teklif-hazirlama-sistemi/kocaeli/` | Teklif Hazırlama Sistemi — Kocaeli | Tardigrad Software | Teklif hazırlama sistemi hizmeti Kocaeli için: Fiyat listesinden tek tıkla markalı teklif üreten, takip eden sistem — Marmara bölgesi. İl/ilçe sayfa ailesi. |
| `/hizmet/teklif-hazirlama-sistemi/konya/` | Teklif Hazırlama Sistemi — Konya | Tardigrad Software | Teklif hazırlama sistemi hizmeti Konya için: Fiyat listesinden tek tıkla markalı teklif üreten, takip eden sistem — İç Anadolu bölgesi. İl/ilçe sayfa ailesi. |
| `/hizmet/teknik-seo/adana/` | Teknik SEO — Adana | Tardigrad Software | Teknik SEO hizmeti Adana için: Rapor bırakıp çıkmayan; düzeltmeyi kodda yapan teknik SEO hizmeti — Akdeniz bölgesi. İl/ilçe sayfa ailesi ve ölçüm planı dâhil. |
| `/hizmet/teknik-seo/ankara/` | Teknik SEO — Ankara | Tardigrad Software | Teknik SEO hizmeti Ankara için: Rapor bırakıp çıkmayan; düzeltmeyi kodda yapan teknik SEO hizmeti — İç Anadolu bölgesi. İl/ilçe sayfa ailesi ve ölçüm planı. |
| `/hizmet/teknik-seo/antalya/` | Teknik SEO — Antalya | Tardigrad Software | Teknik SEO hizmeti Antalya için: Rapor bırakıp çıkmayan; düzeltmeyi kodda yapan teknik SEO hizmeti — Akdeniz bölgesi. İl/ilçe sayfa ailesi ve ölçüm planı. |
| `/hizmet/teknik-seo/bursa/` | Teknik SEO — Bursa | Tardigrad Software | Teknik SEO hizmeti Bursa için: Rapor bırakıp çıkmayan; düzeltmeyi kodda yapan teknik SEO hizmeti — Marmara bölgesi. İl/ilçe sayfa ailesi ve ölçüm planı dâhil. |
| `/hizmet/teknik-seo/gaziantep/` | Teknik SEO — Gaziantep | Tardigrad Software | Teknik SEO hizmeti Gaziantep için: Rapor bırakıp çıkmayan; düzeltmeyi kodda yapan teknik SEO hizmeti — Güneydoğu Anadolu bölgesi. İl/ilçe sayfa ailesi. |
| `/hizmet/teknik-seo/istanbul/` | Teknik SEO — İstanbul | Tardigrad Software | Teknik SEO hizmeti İstanbul için: Rapor bırakıp çıkmayan; düzeltmeyi kodda yapan teknik SEO hizmeti — Marmara bölgesi. İl/ilçe sayfa ailesi ve ölçüm planı. |
| `/hizmet/teknik-seo/izmir/` | Teknik SEO — İzmir | Tardigrad Software | Teknik SEO hizmeti İzmir için: Rapor bırakıp çıkmayan; düzeltmeyi kodda yapan teknik SEO hizmeti — Ege bölgesi. İl/ilçe sayfa ailesi ve ölçüm planı dâhil. |
| `/hizmet/teknik-seo/kayseri/` | Teknik SEO — Kayseri | Tardigrad Software | Teknik SEO hizmeti Kayseri için: Rapor bırakıp çıkmayan; düzeltmeyi kodda yapan teknik SEO hizmeti — İç Anadolu bölgesi. İl/ilçe sayfa ailesi ve ölçüm planı. |
| `/hizmet/teknik-seo/kocaeli/` | Teknik SEO — Kocaeli | Tardigrad Software | Teknik SEO hizmeti Kocaeli için: Rapor bırakıp çıkmayan; düzeltmeyi kodda yapan teknik SEO hizmeti — Marmara bölgesi. İl/ilçe sayfa ailesi ve ölçüm planı. |
| `/hizmet/teknik-seo/konya/` | Teknik SEO — Konya | Tardigrad Software | Teknik SEO hizmeti Konya için: Rapor bırakıp çıkmayan; düzeltmeyi kodda yapan teknik SEO hizmeti — İç Anadolu bölgesi. İl/ilçe sayfa ailesi ve ölçüm planı. |
| `/hizmet/urun-tanitim-sitesi/adana/` | Ürün / Hizmet Tanıtım Sitesi — Adana | Tardigrad Software | Ürün tanıtım sitesi hizmeti Adana için: Katalog, filtre ve fiyat sorgulaması olan ürün tanıtım platformu — Akdeniz bölgesi. İl/ilçe sayfa ailesi ve ölçüm. |
| `/hizmet/urun-tanitim-sitesi/ankara/` | Ürün / Hizmet Tanıtım Sitesi — Ankara | Tardigrad Software | Ürün tanıtım sitesi hizmeti Ankara için: Katalog, filtre ve fiyat sorgulaması olan ürün tanıtım platformu — İç Anadolu bölgesi. İl/ilçe sayfa ailesi. |
| `/hizmet/urun-tanitim-sitesi/antalya/` | Ürün / Hizmet Tanıtım Sitesi — Antalya | Tardigrad Software | Ürün tanıtım sitesi hizmeti Antalya için: Katalog, filtre ve fiyat sorgulaması olan ürün tanıtım platformu — Akdeniz bölgesi. İl/ilçe sayfa ailesi ve ölçüm. |
| `/hizmet/urun-tanitim-sitesi/bursa/` | Ürün / Hizmet Tanıtım Sitesi — Bursa | Tardigrad Software | Ürün tanıtım sitesi hizmeti Bursa için: Katalog, filtre ve fiyat sorgulaması olan ürün tanıtım platformu — Marmara bölgesi. İl/ilçe sayfa ailesi ve ölçüm. |
| `/hizmet/urun-tanitim-sitesi/gaziantep/` | Ürün / Hizmet Tanıtım Sitesi — Gaziantep | Ürün tanıtım sitesi hizmeti Gaziantep için: Katalog, filtre ve fiyat sorgulaması olan ürün tanıtım platformu — Güneydoğu Anadolu bölgesi. İl/ilçe sayfa. |
| `/hizmet/urun-tanitim-sitesi/istanbul/` | Ürün / Hizmet Tanıtım Sitesi — İstanbul | Tardigrad Software | Ürün tanıtım sitesi hizmeti İstanbul için: Katalog, filtre ve fiyat sorgulaması olan ürün tanıtım platformu — Marmara bölgesi. İl/ilçe sayfa ailesi ve ölçüm. |
| `/hizmet/urun-tanitim-sitesi/izmir/` | Ürün / Hizmet Tanıtım Sitesi — İzmir | Tardigrad Software | Ürün tanıtım sitesi hizmeti İzmir için: Katalog, filtre ve fiyat sorgulaması olan ürün tanıtım platformu — Ege bölgesi. İl/ilçe sayfa ailesi ve ölçüm planı. |
| `/hizmet/urun-tanitim-sitesi/kayseri/` | Ürün / Hizmet Tanıtım Sitesi — Kayseri | Tardigrad Software | Ürün tanıtım sitesi hizmeti Kayseri için: Katalog, filtre ve fiyat sorgulaması olan ürün tanıtım platformu — İç Anadolu bölgesi. İl/ilçe sayfa ailesi. |
| `/hizmet/urun-tanitim-sitesi/kocaeli/` | Ürün / Hizmet Tanıtım Sitesi — Kocaeli | Tardigrad Software | Ürün tanıtım sitesi hizmeti Kocaeli için: Katalog, filtre ve fiyat sorgulaması olan ürün tanıtım platformu — Marmara bölgesi. İl/ilçe sayfa ailesi ve ölçüm. |
| `/hizmet/urun-tanitim-sitesi/konya/` | Ürün / Hizmet Tanıtım Sitesi — Konya | Tardigrad Software | Ürün tanıtım sitesi hizmeti Konya için: Katalog, filtre ve fiyat sorgulaması olan ürün tanıtım platformu — İç Anadolu bölgesi. İl/ilçe sayfa ailesi ve ölçüm. |
| `/hizmet/urun-tedarikci-yonetimi/adana/` | Ürün / Tedarikçi Yönetimi — Adana | Tardigrad Software | Ürün yönetim sistemi hizmeti Adana için: Ürün verisini tek yerden yönetip tüm kanallara aynı kaynaktan yayan sistem — Akdeniz bölgesi. İl/ilçe sayfa ailesi. |
| `/hizmet/urun-tedarikci-yonetimi/ankara/` | Ürün / Tedarikçi Yönetimi — Ankara | Tardigrad Software | Ürün yönetim sistemi hizmeti Ankara için: Ürün verisini tek yerden yönetip tüm kanallara aynı kaynaktan yayan sistem — İç Anadolu bölgesi. İl/ilçe sayfa. |
| `/hizmet/urun-tedarikci-yonetimi/antalya/` | Ürün / Tedarikçi Yönetimi — Antalya | Tardigrad Software | Ürün yönetim sistemi hizmeti Antalya için: Ürün verisini tek yerden yönetip tüm kanallara aynı kaynaktan yayan sistem — Akdeniz bölgesi. İl/ilçe sayfa. |
| `/hizmet/urun-tedarikci-yonetimi/bursa/` | Ürün / Tedarikçi Yönetimi — Bursa | Tardigrad Software | Ürün yönetim sistemi hizmeti Bursa için: Ürün verisini tek yerden yönetip tüm kanallara aynı kaynaktan yayan sistem — Marmara bölgesi. İl/ilçe sayfa ailesi. |
| `/hizmet/urun-tedarikci-yonetimi/gaziantep/` | Ürün / Tedarikçi Yönetimi — Gaziantep | Tardigrad Software | Ürün yönetim sistemi hizmeti Gaziantep için: Ürün verisini tek yerden yönetip tüm kanallara aynı kaynaktan yayan sistem — Güneydoğu Anadolu bölgesi. İl/ilçe. |
| `/hizmet/urun-tedarikci-yonetimi/istanbul/` | Ürün / Tedarikçi Yönetimi — İstanbul | Tardigrad Software | Ürün yönetim sistemi hizmeti İstanbul için: Ürün verisini tek yerden yönetip tüm kanallara aynı kaynaktan yayan sistem — Marmara bölgesi. İl/ilçe sayfa. |
| `/hizmet/urun-tedarikci-yonetimi/izmir/` | Ürün / Tedarikçi Yönetimi — İzmir | Tardigrad Software | Ürün yönetim sistemi hizmeti İzmir için: Ürün verisini tek yerden yönetip tüm kanallara aynı kaynaktan yayan sistem — Ege bölgesi. İl/ilçe sayfa ailesi. |
| `/hizmet/urun-tedarikci-yonetimi/kayseri/` | Ürün / Tedarikçi Yönetimi — Kayseri | Tardigrad Software | Ürün yönetim sistemi hizmeti Kayseri için: Ürün verisini tek yerden yönetip tüm kanallara aynı kaynaktan yayan sistem — İç Anadolu bölgesi. İl/ilçe sayfa. |
| `/hizmet/urun-tedarikci-yonetimi/kocaeli/` | Ürün / Tedarikçi Yönetimi — Kocaeli | Tardigrad Software | Ürün yönetim sistemi hizmeti Kocaeli için: Ürün verisini tek yerden yönetip tüm kanallara aynı kaynaktan yayan sistem — Marmara bölgesi. İl/ilçe sayfa. |
| `/hizmet/urun-tedarikci-yonetimi/konya/` | Ürün / Tedarikçi Yönetimi — Konya | Tardigrad Software | Ürün yönetim sistemi hizmeti Konya için: Ürün verisini tek yerden yönetip tüm kanallara aynı kaynaktan yayan sistem — İç Anadolu bölgesi. İl/ilçe sayfa. |
| `/hizmet/web-sitesi-yenileme/adana/` | Web Sitesi Yenileme / Modernizasyon — Adana | Web sitesi yenileme hizmeti Adana için: Eski siteyi modern stack'e alırken sıralamayı koruyan kontrollü yenileme — Akdeniz bölgesi. İl/ilçe sayfa ailesi. |
| `/hizmet/web-sitesi-yenileme/ankara/` | Web Sitesi Yenileme / Modernizasyon — Ankara | Web sitesi yenileme hizmeti Ankara için: Eski siteyi modern stack'e alırken sıralamayı koruyan kontrollü yenileme — İç Anadolu bölgesi. İl/ilçe sayfa ailesi. |
| `/hizmet/web-sitesi-yenileme/antalya/` | Web Sitesi Yenileme / Modernizasyon — Antalya | Web sitesi yenileme hizmeti Antalya için: Eski siteyi modern stack'e alırken sıralamayı koruyan kontrollü yenileme — Akdeniz bölgesi. İl/ilçe sayfa ailesi. |
| `/hizmet/web-sitesi-yenileme/bursa/` | Web Sitesi Yenileme / Modernizasyon — Bursa | Web sitesi yenileme hizmeti Bursa için: Eski siteyi modern stack'e alırken sıralamayı koruyan kontrollü yenileme — Marmara bölgesi. İl/ilçe sayfa ailesi. |
| `/hizmet/web-sitesi-yenileme/gaziantep/` | Web Sitesi Yenileme / Modernizasyon — Gaziantep | Web sitesi yenileme hizmeti Gaziantep için: Eski siteyi modern stack'e alırken sıralamayı koruyan kontrollü yenileme — Güneydoğu Anadolu bölgesi. İl/ilçe. |
| `/hizmet/web-sitesi-yenileme/istanbul/` | Web Sitesi Yenileme / Modernizasyon — İstanbul | Web sitesi yenileme hizmeti İstanbul için: Eski siteyi modern stack'e alırken sıralamayı koruyan kontrollü yenileme — Marmara bölgesi. İl/ilçe sayfa ailesi. |
| `/hizmet/web-sitesi-yenileme/izmir/` | Web Sitesi Yenileme / Modernizasyon — İzmir | Web sitesi yenileme hizmeti İzmir için: Eski siteyi modern stack'e alırken sıralamayı koruyan kontrollü yenileme — Ege bölgesi. İl/ilçe sayfa ailesi. |
| `/hizmet/web-sitesi-yenileme/kayseri/` | Web Sitesi Yenileme / Modernizasyon — Kayseri | Web sitesi yenileme hizmeti Kayseri için: Eski siteyi modern stack'e alırken sıralamayı koruyan kontrollü yenileme — İç Anadolu bölgesi. İl/ilçe sayfa. |
| `/hizmet/web-sitesi-yenileme/kocaeli/` | Web Sitesi Yenileme / Modernizasyon — Kocaeli | Web sitesi yenileme hizmeti Kocaeli için: Eski siteyi modern stack'e alırken sıralamayı koruyan kontrollü yenileme — Marmara bölgesi. İl/ilçe sayfa ailesi. |
| `/hizmet/web-sitesi-yenileme/konya/` | Web Sitesi Yenileme / Modernizasyon — Konya | Web sitesi yenileme hizmeti Konya için: Eski siteyi modern stack'e alırken sıralamayı koruyan kontrollü yenileme — İç Anadolu bölgesi. İl/ilçe sayfa ailesi. |
| `/hizmetler/` | Hizmetler (43 Başlık) | Tardigrad Software | Tardigrad Software hizmet listesi: kurumsal web sitesi, e-ticaret, CRM, SaaS, teknik ve lokal SEO, API entegrasyonu, AI chatbot dahil 43 başlık. Türkiye. |
| `/hizmetler/ai-chatbot/` | AI Chatbot | Tardigrad Software | AI chatbot geliştirme: kurumsal bilgi tabanına bağlı (RAG) yanıt, insan devri, WhatsApp/web kanal ve raporlama. Tekrarlayan soruları otomatikleştirin. |
| `/hizmetler/crm/` | CRM | Tardigrad Software | Kuruma özel CRM: müşteri, fırsat, teklif ve saha ziyareti takibi. WhatsApp ve e-posta entegrasyonuyla tüm iletişim tek kayıtta toplanır; satış hattı panelde. |
| `/hizmetler/e-ticaret-sitesi/` | E-Ticaret Sitesi | Tardigrad Software | E-ticaret sitesi kurulumu: katalog, varyant, sepet, sanal POS, kargo ve pazaryeri senkronu. Komisyon ödemeden kendi altyapınızda satış; stok tek kaynaktan. |
| `/hizmetler/firma-web-sitesi/` | Firma Web Sitesi | Tardigrad Software | Firma web sitesi kurulumu: ürün ve hizmet katalogları, bayi ve kariyer sayfaları, iletişim formları. Küçük işletmeler için hızlı ve bütçe dostu. |
| `/hizmetler/kurumsal-web-sitesi/` | Kurumsal Web Sitesi | Tardigrad Software | Kurumsal web sitesi tasarımı ve geliştirmesi: hızlı, mobil öncelikli ve SEO uyumlu. Talep üreten sayfa mimarisi, yönetim paneli. Türkiye geneli çalışıyoruz. |
| `/hizmetler/landing-page/` | Landing Page | Tardigrad Software | Kampanya ve reklam trafiği için landing page tasarımı: tek teklif, net CTA, hızlı yükleme ve ölçülebilir form. Reklam bütçenizin verimini artırır. |
| `/hizmetler/musteri-yonetim-sistemi/` | Müşteri Yönetim Sistemi | Tardigrad Software | Müşteri yönetim sistemi: tekil kayıt, temas geçmişi, etiketleme, hatırlatma ve rol bazlı erişim. Dağılan Excel kayıtlarını tek gerçeğe çevirir. |
| `/hizmetler/portfoy-sitesi/` | Portföy Sitesi | Tardigrad Software | Portfolyo web sitesi: proje vitrini, filtreli galeri, vaka anlatımı ve teklif formu. Tasarımcı, mimar ve ajanslar için çalışan bir iş geçmişi sayfası. |
| `/hizmetler/proforma-siparis-yonetimi/` | Proforma / Sipariş Yönetimi | Tardigrad Software | Proforma ve sipariş yönetimi: siparişten sevkiyata durum takibi, stok kontrolü, irsaliye ve fatura entegrasyonu. Geciken siparişleri görünür kılar. |
| `/hizmetler/rezervasyon-basvuru-sistemi/` | Rezervasyon ve Başvuru Sistemi | Tardigrad Software | Online rezervasyon ve başvuru sistemi: müsaitlik, kota, onay ve iptal akışı, hatırlatma mesajları ile raporlama. Telefon trafiğini azaltan, takvimi dolduran. |
| `/hizmetler/stok-yonetimi/` | Stok Yönetimi | Tardigrad Software | Stok yönetim sistemi: depo ve birim yapısı, kritik stok uyarısı, sayım ve hareket geçmişi, barkod desteği. Olmayan ürünü satmamayı ve ani tükenmeleri. |
| `/hizmetler/teklif-hazirlama-sistemi/` | Teklif Hazırlama Sistemi | Tardigrad Software | Teklif hazırlama sistemi: fiyat listesinden saniyeler içinde markalı PDF teklif, sürüm takibi, onay akışı ve online kabul. Cevapsız tekliflerin. |
| `/hizmetler/teknik-seo/` | Teknik SEO | Tardigrad Software | Teknik SEO: Core Web Vitals, indeksleme ve tarama bütçesi, URL/canonical mimarisi, schema ve log analizi. Düzeltmeleri kod tarafında biz uygularız. |
| `/hizmetler/urun-tanitim-sitesi/` | Ürün / Hizmet Tanıtım Sitesi | Tardigrad Software | Ürün ve hizmet tanıtım sitesi: kategori ve filtre yapısı, PDF katalog, fiyat sorgulama ve bayi girişi. Ürün verisini tek yerden yönetip tüm kanallara aynı. |
| `/hizmetler/urun-tedarikci-yonetimi/` | Ürün / Tedarikçi Yönetimi | Tardigrad Software | Ürün ve tedarikçi yönetimi: merkezî katalog, varyant ve fiyat politikaları, tedarikçi puanlama ve satınalma takibi. Site, katalog, panel tek kaynak. |
| `/hizmetler/web-sitesi-yenileme/` | Web Sitesi Yenileme / Modernizasyon | Tardigrad Software | Web sitesi yenileme: hız ve Core Web Vitals iyileştirmesi, mobil uyum, SEO koruması ve 301 planı ile içerik taşıma. Mevcut otoriteyi kaybetmeyin. |
| `/iletisim/` | İletişim ve Teklif Formu | Tardigrad Software | Tardigrad Software iletişim: kurumsal web sitesi, özel yazılım, SaaS, SEO ve AI chatbot talepleriniz için form, e-posta ve WhatsApp. 24 saat içinde yazılı. |
| `/kvkk/` | KVKK ve Aydınlatma Metni | Tardigrad Software | Tardigrad Software KVKK aydınlatma metni: iletişim formu ve teklif sürecinde işlenen kişisel veriler, amaçlar, aktarım, saklama süresi ve ilgili kişi hakları. |
| `/sehir/adana/` | Adana Yazılım, Web Sitesi ve SEO Hizmetleri | Adana ve ilçelerinde kurumsal web sitesi, özel yazılım, e-ticaret ve SEO hizmetleri. tarım ve çiftçilik, gıda sanayi başlıkları öne çıkıyor; Tardigrad. |
| `/sehir/ankara/` | Ankara Yazılım, Web Sitesi ve SEO Hizmetleri | Ankara ve ilçelerinde kurumsal web sitesi, özel yazılım, e-ticaret ve SEO hizmetleri. savunma ve teknoloji geliştirme bölgeleri, kamu ve yüklenici firmalar. |
| `/sehir/antalya/` | Antalya Yazılım, Web Sitesi ve SEO Hizmetleri | Antalya ve ilçelerinde kurumsal web sitesi, özel yazılım, e-ticaret ve SEO hizmetleri. turizm ve konaklama, tarım ve sera başlıkları öne çıkıyor; Tardigrad. |
| `/sehir/bursa/` | Bursa Yazılım, Web Sitesi ve SEO Hizmetleri | Bursa ve ilçelerinde kurumsal web sitesi, özel yazılım, e-ticaret ve SEO hizmetleri. otomotiv ve yan sanayi, tekstil üretimi başlıkları öne çıkıyor. |
| `/sehir/gaziantep/` | Gaziantep Yazılım, Web Sitesi ve SEO Hizmetleri | Gaziantep ve ilçelerinde kurumsal web sitesi, özel yazılım, e-ticaret ve SEO hizmetleri. halı ve tekstil üretimi, gıda ve fıstık işleme başlıkları öne. |
| `/sehir/istanbul/` | İstanbul Yazılım, Web Sitesi ve SEO Hizmetleri | İstanbul ve ilçelerinde kurumsal web sitesi, özel yazılım, e-ticaret ve SEO hizmetleri. finans ve holding merkezleri, perakende ve e-ticaret başlıkları öne. |
| `/sehir/izmir/` | İzmir Yazılım, Web Sitesi ve SEO Hizmetleri | İzmir ve ilçelerinde kurumsal web sitesi, özel yazılım, e-ticaret ve SEO hizmetleri. ihracatçı üretim firmaları, tarım ve gıda işleme başlıkları öne. |
| `/sehir/kayseri/` | Kayseri Yazılım, Web Sitesi ve SEO Hizmetleri | Kayseri ve ilçelerinde kurumsal web sitesi, özel yazılım, e-ticaret ve SEO hizmetleri. mobilya ve dekorasyon, havacılık ve savunma sanayi başlıkları öne. |
| `/sehir/kocaeli/` | Kocaeli Yazılım, Web Sitesi ve SEO Hizmetleri | Kocaeli ve ilçelerinde kurumsal web sitesi, özel yazılım, e-ticaret ve SEO hizmetleri. ağır sanayi ve kimya, OSB'lerde üretim başlıkları öne çıkıyor. |
| `/sehir/konya/` | Konya Yazılım, Web Sitesi ve SEO Hizmetleri | Konya ve ilçelerinde kurumsal web sitesi, özel yazılım, e-ticaret ve SEO hizmetleri. tarım makineleri, gıda ve unlu mamuller başlıkları öne çıkıyor. |
| `/surec/` | Nasıl Çalışıyoruz? 9 Adımlı Süreç | Tardigrad Software | Tardigrad Software'in 9 adımlı teslim süreci: analiz, strateji, UI/UX, geliştirme, SEO kurulumu, test, canlıya çıkış, ölçüm ve bakım. Her adımda yazılı. |

Şablon (FAZ 2) hizmet sayfalarının tam meta listesi: `docs/seo-audit.json` ve `docs/meta-dokum.txt`.

**Özet metrikler:** {"pages":219,"servicePages":43,"pagesWithFaq":43,"indexablePages":192,"handWrittenServicePages":16,"avgServiceWords":1671,"maxServiceWords":1899,"minServiceWords":1584,"totalImages":114,"brokenLinks":0,"pagesWithoutJsonLd":0}

- Kırık iç link: 0
- JSON-LD olmayan sayfa: 0
- Hizmet sayfaları kelime sayısı (ana içerik): min 1584 / ortalama 1671 / maks 1899
- Uyarı listesi: yok ✓

## 2c. Faz 2 içerik durumu (hizmet bazında)

| # | Hizmet | Slug | Kategori | İçerik modu | Durum |
|---:|---|---|---|---|---|
| 01 | Kurumsal Web Sitesi | `kurumsal-web-sitesi` | web | elle yazıldı | index, follow |
| 02 | Firma Web Sitesi | `firma-web-sitesi` | web | elle yazıldı | index, follow |
| 03 | Landing Page | `landing-page` | web | elle yazıldı | index, follow |
| 04 | E-Ticaret Sitesi | `e-ticaret-sitesi` | web | elle yazıldı | index, follow |
| 05 | Ürün / Hizmet Tanıtım Sitesi | `urun-tanitim-sitesi` | web | elle yazıldı | index, follow |
| 06 | Portföy Sitesi | `portfoy-sitesi` | web | elle yazıldı | index, follow |
| 07 | Rezervasyon ve Başvuru Sistemi | `rezervasyon-basvuru-sistemi` | ozel-yazilim | elle yazıldı | index, follow |
| 08 | Web Sitesi Yenileme / Modernizasyon | `web-sitesi-yenileme` | web | elle yazıldı | index, follow |
| 09 | CRM | `crm` | ozel-yazilim | elle yazıldı | index, follow |
| 10 | Müşteri Yönetim Sistemi | `musteri-yonetim-sistemi` | ozel-yazilim | elle yazıldı | index, follow |
| 11 | Teklif Hazırlama Sistemi | `teklif-hazirlama-sistemi` | ozel-yazilim | elle yazıldı | index, follow |
| 12 | Proforma / Sipariş Yönetimi | `proforma-siparis-yonetimi` | ozel-yazilim | elle yazıldı | index, follow |
| 13 | Stok Yönetimi | `stok-yonetimi` | ozel-yazilim | elle yazıldı | index, follow |
| 14 | Ürün / Tedarikçi Yönetimi | `urun-tedarikci-yonetimi` | ozel-yazilim | elle yazıldı | index, follow |
| 15 | Personel / Kullanıcı Yönetimi | `personel-kullanici-yonetimi` | ozel-yazilim | şablon (content-factory) | noindex, follow (Faz 2) |
| 16 | Yönetim Paneli | `yonetim-paneli` | ozel-yazilim | şablon (content-factory) | noindex, follow (Faz 2) |
| 17 | Müşteri Paneli | `musteri-paneli` | ozel-yazilim | şablon (content-factory) | noindex, follow (Faz 2) |
| 18 | İş Takip Sistemi | `is-takip-sistemi` | ozel-yazilim | şablon (content-factory) | noindex, follow (Faz 2) |
| 19 | Raporlama Sistemi | `raporlama-sistemi` | ozel-yazilim | şablon (content-factory) | noindex, follow (Faz 2) |
| 20 | Form / Başvuru Sistemi | `form-basvuru-sistemi` | ozel-yazilim | şablon (content-factory) | noindex, follow (Faz 2) |
| 21 | SaaS Platformu | `saas-platformu` | saas | şablon (content-factory) | noindex, follow (Faz 2) |
| 22 | Abonelik Tabanlı Yazılım | `abonelik-tabanli-yazilim` | saas | şablon (content-factory) | noindex, follow (Faz 2) |
| 23 | Multi-Tenant Uygulama | `multi-tenant-uygulama` | saas | şablon (content-factory) | noindex, follow (Faz 2) |
| 24 | Dashboard Sistemi | `dashboard-sistemi` | saas | şablon (content-factory) | noindex, follow (Faz 2) |
| 25 | MVP / Startup Ürünü | `mvp-startup-urunu` | saas | şablon (content-factory) | noindex, follow (Faz 2) |
| 26 | Teknik SEO | `teknik-seo` | seo | elle yazıldı | index, follow |
| 27 | Lokal SEO | `lokal-seo` | seo | şablon (content-factory) | noindex, follow (Faz 2) |
| 28 | SEO Uyumlu Sayfa Mimarisi | `seo-uyumlu-sayfa-mimarisi` | seo | şablon (content-factory) | noindex, follow (Faz 2) |
| 29 | Schema.org / Structured Data | `schema-org-structured-data` | seo | şablon (content-factory) | noindex, follow (Faz 2) |
| 30 | Google Search Console Kurulumu | `google-search-console-kurulumu` | seo | şablon (content-factory) | noindex, follow (Faz 2) |
| 31 | SEO Danışmanlığı | `seo-danismanligi` | seo | şablon (content-factory) | noindex, follow (Faz 2) |
| 32 | Dijital Otomasyon | `dijital-otomasyon` | it-ai | şablon (content-factory) | noindex, follow (Faz 2) |
| 33 | Domain / DNS Yönetimi | `domain-dns-yonetimi` | it-ai | şablon (content-factory) | noindex, follow (Faz 2) |
| 34 | Hosting / Yedekleme | `hosting-yedekleme` | it-ai | şablon (content-factory) | noindex, follow (Faz 2) |
| 35 | Cloudflare / CDN Yapılandırması | `cloudflare-cdn` | it-ai | şablon (content-factory) | noindex, follow (Faz 2) |
| 36 | Vercel Deployment | `vercel-deployment` | it-ai | şablon (content-factory) | noindex, follow (Faz 2) |
| 37 | Supabase / PostgreSQL Altyapısı | `supabase-postgresql` | it-ai | şablon (content-factory) | noindex, follow (Faz 2) |
| 38 | Kurumsal E-Posta | `kurumsal-email` | it-ai | şablon (content-factory) | noindex, follow (Faz 2) |
| 39 | API Entegrasyonu | `api-entegrasyonu` | it-ai | şablon (content-factory) | noindex, follow (Faz 2) |
| 40 | Ödeme / WhatsApp / CRM Entegrasyonu | `odeme-whatsapp-crm-entegrasyonu` | it-ai | şablon (content-factory) | noindex, follow (Faz 2) |
| 41 | AI Chatbot | `ai-chatbot` | it-ai | elle yazıldı | index, follow |
| 42 | AI Destekli İçerik / Araçlar | `ai-icerik-araclar` | it-ai | şablon (content-factory) | noindex, follow (Faz 2) |
| 43 | Dijital Dönüşüm Süreçleri | `dijital-donusum` | it-ai | şablon (content-factory) | noindex, follow (Faz 2) |

Elle yazılan hizmet sayısı: **16/43**. Pilot olmayanlar yayında ama indekslenmiyor; içerik yazıldıkça `src/data/service-contents-*.ts` dosyalarına eklenir ve otomatik olarak indekslenir hâle gelir (ayrı bir config gerekmez).

## 3. Pilot hizmet sayfaları (elle yazılmış içerik)

| # | Hizmet | Slug | Kelime | Title | Bölüm 6 blokları | SSS |
|---|---|---|---:|---|---|---:|
| 01 | Kurumsal Web Sitesi | `kurumsal-web-sitesi` | 1888 | 40 kr | tanım · neden · kapsam · süreç · fayda · kimler için · neden biz · SSS · CTA+form · iç linkler | 8 |
| 02 | Firma Web Sitesi | `firma-web-sitesi` | 1899 | 37 kr | tanım · neden · kapsam · süreç · fayda · kimler için · neden biz · SSS · CTA+form · iç linkler | 6 |
| 03 | Landing Page | `landing-page` | 1810 | 33 kr | tanım · neden · kapsam · süreç · fayda · kimler için · neden biz · SSS · CTA+form · iç linkler | 6 |
| 04 | E-Ticaret Sitesi | `e-ticaret-sitesi` | 1744 | 37 kr | tanım · neden · kapsam · süreç · fayda · kimler için · neden biz · SSS · CTA+form · iç linkler | 7 |
| 05 | Ürün / Hizmet Tanıtım Sitesi | `urun-tanitim-sitesi` | 1895 | 49 kr | tanım · neden · kapsam · süreç · fayda · kimler için · neden biz · SSS · CTA+form · iç linkler | 6 |
| 06 | Portföy Sitesi | `portfoy-sitesi` | 1657 | 35 kr | tanım · neden · kapsam · süreç · fayda · kimler için · neden biz · SSS · CTA+form · iç linkler | 6 |
| 07 | Rezervasyon ve Başvuru Sistemi | `rezervasyon-basvuru-sistemi` | 1717 | 51 kr | tanım · neden · kapsam · süreç · fayda · kimler için · neden biz · SSS · CTA+form · iç linkler | 6 |
| 08 | Web Sitesi Yenileme / Modernizasyon | `web-sitesi-yenileme` | 1816 | 56 kr | tanım · neden · kapsam · süreç · fayda · kimler için · neden biz · SSS · CTA+form · iç linkler | 7 |
| 09 | CRM | `crm` | 1688 | 24 kr | tanım · neden · kapsam · süreç · fayda · kimler için · neden biz · SSS · CTA+form · iç linkler | 6 |
| 10 | Müşteri Yönetim Sistemi | `musteri-yonetim-sistemi` | 1720 | 44 kr | tanım · neden · kapsam · süreç · fayda · kimler için · neden biz · SSS · CTA+form · iç linkler | 6 |
| 11 | Teklif Hazırlama Sistemi | `teklif-hazirlama-sistemi` | 1630 | 45 kr | tanım · neden · kapsam · süreç · fayda · kimler için · neden biz · SSS · CTA+form · iç linkler | 6 |
| 12 | Proforma / Sipariş Yönetimi | `proforma-siparis-yonetimi` | 1683 | 48 kr | tanım · neden · kapsam · süreç · fayda · kimler için · neden biz · SSS · CTA+form · iç linkler | 6 |
| 13 | Stok Yönetimi | `stok-yonetimi` | 1722 | 34 kr | tanım · neden · kapsam · süreç · fayda · kimler için · neden biz · SSS · CTA+form · iç linkler | 6 |
| 14 | Ürün / Tedarikçi Yönetimi | `urun-tedarikci-yonetimi` | 1703 | 46 kr | tanım · neden · kapsam · süreç · fayda · kimler için · neden biz · SSS · CTA+form · iç linkler | 6 |
| 26 | Teknik SEO | `teknik-seo` | 1686 | 31 kr | tanım · neden · kapsam · süreç · fayda · kimler için · neden biz · SSS · CTA+form · iç linkler | 7 |
| 41 | AI Chatbot | `ai-chatbot` | 1667 | 31 kr | tanım · neden · kapsam · süreç · fayda · kimler için · neden biz · SSS · CTA+form · iç linkler | 7 |

Diğer 27 hizmet: sayfa iskeleti, meta, schema, iç linkler ve görsel fallback'i hazır; gövde metni kategori tohumlarıyla (`src/lib/content-factory.ts`) üretiliyor ve FAZ 2'de elle yazılacak. Bu sayfalar FAZ 2 bitene kadar `noindex, follow`.

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
