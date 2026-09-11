# Tardigrad Software — Uygulama Raporu (Faz 1 + Faz 2: 43/43 hizmet elle yazıldı)

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
| Sayfa sayısı | 489 statik HTML (5 pilot hizmet + 38 şablon hizmet + 10 il + 50 hizmet×il + 6 kurumsal/dizin) |

## 2. URL envanteri

Toplam: **489 yayına hazır route** · sitemap'te **71** URL (pilot + kurumsal + lokal; şablon hizmetler FAZ 2'ye kadar `noindex`).

| Rota | Tür | Title (kr) | Desc (kr) | Kelime | Görsel | İç link | SSS | JSON-LD | robots |
|---|---|---:|---:|---:|---:|---:|---:|---|---|
| `/` | Ana sayfa | 54 | 149 | 1844 | 2 | 59 | - | Organization+ProfessionalService+WebSite | index, follow |
| `/hakkimizda/` | Kurumsal | 31 | 151 | 352 | 1 | 53 | - | Organization+ProfessionalService+WebSite | index, follow |
| `/hizmet/abonelik-tabanli-yazilim/adana/` | Hizmet × İl | 53 | 151 | 1540 | 0 | 62 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/abonelik-tabanli-yazilim/ankara/` | Hizmet × İl | 54 | 155 | 1542 | 0 | 63 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/abonelik-tabanli-yazilim/antalya/` | Hizmet × İl | 55 | 153 | 1540 | 0 | 63 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/abonelik-tabanli-yazilim/bursa/` | Hizmet × İl | 53 | 151 | 1538 | 0 | 63 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/abonelik-tabanli-yazilim/gaziantep/` | Hizmet × İl | 57 | 152 | 1540 | 0 | 62 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/abonelik-tabanli-yazilim/istanbul/` | Hizmet × İl | 56 | 154 | 1546 | 0 | 63 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/abonelik-tabanli-yazilim/izmir/` | Hizmet × İl | 53 | 156 | 1546 | 0 | 63 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/abonelik-tabanli-yazilim/kayseri/` | Hizmet × İl | 55 | 156 | 1542 | 0 | 62 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/abonelik-tabanli-yazilim/kocaeli/` | Hizmet × İl | 55 | 153 | 1539 | 0 | 63 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/abonelik-tabanli-yazilim/konya/` | Hizmet × İl | 53 | 154 | 1544 | 0 | 62 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
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
| `/hizmet/ai-icerik-araclar/adana/` | Hizmet × İl | 57 | 156 | 1600 | 0 | 62 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/ai-icerik-araclar/ankara/` | Hizmet × İl | 58 | 154 | 1601 | 0 | 63 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/ai-icerik-araclar/antalya/` | Hizmet × İl | 59 | 158 | 1600 | 0 | 63 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/ai-icerik-araclar/bursa/` | Hizmet × İl | 57 | 156 | 1598 | 0 | 63 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/ai-icerik-araclar/gaziantep/` | Hizmet × İl | 40 | 149 | 1598 | 0 | 62 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/ai-icerik-araclar/istanbul/` | Hizmet × İl | 60 | 153 | 1605 | 0 | 63 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/ai-icerik-araclar/izmir/` | Hizmet × İl | 57 | 152 | 1604 | 0 | 63 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/ai-icerik-araclar/kayseri/` | Hizmet × İl | 59 | 155 | 1601 | 0 | 62 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/ai-icerik-araclar/kocaeli/` | Hizmet × İl | 59 | 158 | 1599 | 0 | 63 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/ai-icerik-araclar/konya/` | Hizmet × İl | 57 | 153 | 1603 | 0 | 62 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/api-entegrasyonu/adana/` | Hizmet × İl | 45 | 156 | 1550 | 0 | 60 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/api-entegrasyonu/ankara/` | Hizmet × İl | 46 | 154 | 1551 | 0 | 61 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/api-entegrasyonu/antalya/` | Hizmet × İl | 47 | 152 | 1549 | 0 | 61 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/api-entegrasyonu/bursa/` | Hizmet × İl | 45 | 156 | 1548 | 0 | 61 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/api-entegrasyonu/gaziantep/` | Hizmet × İl | 49 | 155 | 1549 | 0 | 60 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/api-entegrasyonu/istanbul/` | Hizmet × İl | 48 | 153 | 1555 | 0 | 61 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/api-entegrasyonu/izmir/` | Hizmet × İl | 45 | 158 | 1555 | 0 | 61 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/api-entegrasyonu/kayseri/` | Hizmet × İl | 47 | 155 | 1551 | 0 | 60 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/api-entegrasyonu/kocaeli/` | Hizmet × İl | 47 | 152 | 1548 | 0 | 61 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/api-entegrasyonu/konya/` | Hizmet × İl | 45 | 153 | 1553 | 0 | 60 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/cloudflare-cdn/adana/` | Hizmet × İl | 60 | 153 | 1593 | 0 | 60 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/cloudflare-cdn/ankara/` | Hizmet × İl | 40 | 157 | 1595 | 0 | 61 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/cloudflare-cdn/antalya/` | Hizmet × İl | 41 | 155 | 1593 | 0 | 61 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/cloudflare-cdn/bursa/` | Hizmet × İl | 60 | 153 | 1591 | 0 | 61 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/cloudflare-cdn/gaziantep/` | Hizmet × İl | 43 | 152 | 1592 | 0 | 60 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/cloudflare-cdn/istanbul/` | Hizmet × İl | 42 | 156 | 1599 | 0 | 61 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/cloudflare-cdn/izmir/` | Hizmet × İl | 60 | 155 | 1598 | 0 | 61 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/cloudflare-cdn/kayseri/` | Hizmet × İl | 41 | 152 | 1594 | 0 | 60 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/cloudflare-cdn/kocaeli/` | Hizmet × İl | 41 | 155 | 1592 | 0 | 61 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/cloudflare-cdn/konya/` | Hizmet × İl | 60 | 156 | 1597 | 0 | 60 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
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
| `/hizmet/dashboard-sistemi/adana/` | Hizmet × İl | 46 | 152 | 1488 | 0 | 62 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/dashboard-sistemi/ankara/` | Hizmet × İl | 47 | 156 | 1490 | 0 | 63 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/dashboard-sistemi/antalya/` | Hizmet × İl | 48 | 154 | 1488 | 0 | 63 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/dashboard-sistemi/bursa/` | Hizmet × İl | 46 | 152 | 1486 | 0 | 63 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/dashboard-sistemi/gaziantep/` | Hizmet × İl | 50 | 157 | 1488 | 0 | 62 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/dashboard-sistemi/istanbul/` | Hizmet × İl | 49 | 155 | 1494 | 0 | 63 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/dashboard-sistemi/izmir/` | Hizmet × İl | 46 | 154 | 1493 | 0 | 63 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/dashboard-sistemi/kayseri/` | Hizmet × İl | 48 | 157 | 1490 | 0 | 62 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/dashboard-sistemi/kocaeli/` | Hizmet × İl | 48 | 154 | 1487 | 0 | 63 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/dashboard-sistemi/konya/` | Hizmet × İl | 46 | 155 | 1492 | 0 | 62 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/dijital-donusum/adana/` | Hizmet × İl | 54 | 154 | 1584 | 0 | 63 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/dijital-donusum/ankara/` | Hizmet × İl | 55 | 152 | 1585 | 0 | 64 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/dijital-donusum/antalya/` | Hizmet × İl | 56 | 156 | 1584 | 0 | 64 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/dijital-donusum/bursa/` | Hizmet × İl | 54 | 154 | 1582 | 0 | 64 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/dijital-donusum/gaziantep/` | Hizmet × İl | 58 | 153 | 1583 | 0 | 63 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/dijital-donusum/istanbul/` | Hizmet × İl | 57 | 157 | 1590 | 0 | 64 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/dijital-donusum/izmir/` | Hizmet × İl | 54 | 156 | 1589 | 0 | 64 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/dijital-donusum/kayseri/` | Hizmet × İl | 56 | 153 | 1585 | 0 | 63 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/dijital-donusum/kocaeli/` | Hizmet × İl | 56 | 156 | 1583 | 0 | 64 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/dijital-donusum/konya/` | Hizmet × İl | 54 | 157 | 1588 | 0 | 63 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/dijital-otomasyon/adana/` | Hizmet × İl | 46 | 158 | 1502 | 0 | 63 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/dijital-otomasyon/ankara/` | Hizmet × İl | 47 | 156 | 1503 | 0 | 64 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/dijital-otomasyon/antalya/` | Hizmet × İl | 48 | 154 | 1501 | 0 | 64 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/dijital-otomasyon/bursa/` | Hizmet × İl | 46 | 158 | 1500 | 0 | 64 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/dijital-otomasyon/gaziantep/` | Hizmet × İl | 50 | 151 | 1500 | 0 | 63 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/dijital-otomasyon/istanbul/` | Hizmet × İl | 49 | 155 | 1507 | 0 | 64 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/dijital-otomasyon/izmir/` | Hizmet × İl | 46 | 154 | 1506 | 0 | 64 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/dijital-otomasyon/kayseri/` | Hizmet × İl | 48 | 157 | 1503 | 0 | 63 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/dijital-otomasyon/kocaeli/` | Hizmet × İl | 48 | 154 | 1500 | 0 | 64 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/dijital-otomasyon/konya/` | Hizmet × İl | 46 | 155 | 1505 | 0 | 63 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/domain-dns-yonetimi/adana/` | Hizmet × İl | 50 | 152 | 1584 | 0 | 60 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/domain-dns-yonetimi/ankara/` | Hizmet × İl | 51 | 156 | 1586 | 0 | 61 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/domain-dns-yonetimi/antalya/` | Hizmet × İl | 52 | 154 | 1584 | 0 | 61 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/domain-dns-yonetimi/bursa/` | Hizmet × İl | 50 | 152 | 1582 | 0 | 61 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/domain-dns-yonetimi/gaziantep/` | Hizmet × İl | 54 | 157 | 1584 | 0 | 60 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/domain-dns-yonetimi/istanbul/` | Hizmet × İl | 53 | 155 | 1590 | 0 | 61 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/domain-dns-yonetimi/izmir/` | Hizmet × İl | 50 | 154 | 1589 | 0 | 61 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/domain-dns-yonetimi/kayseri/` | Hizmet × İl | 52 | 157 | 1586 | 0 | 60 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/domain-dns-yonetimi/kocaeli/` | Hizmet × İl | 52 | 154 | 1583 | 0 | 61 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/domain-dns-yonetimi/konya/` | Hizmet × İl | 50 | 155 | 1588 | 0 | 60 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
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
| `/hizmet/form-basvuru-sistemi/adana/` | Hizmet × İl | 51 | 149 | 1562 | 0 | 61 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/form-basvuru-sistemi/ankara/` | Hizmet × İl | 52 | 153 | 1564 | 0 | 62 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/form-basvuru-sistemi/antalya/` | Hizmet × İl | 53 | 151 | 1562 | 0 | 62 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/form-basvuru-sistemi/bursa/` | Hizmet × İl | 51 | 149 | 1560 | 0 | 62 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/form-basvuru-sistemi/gaziantep/` | Hizmet × İl | 55 | 156 | 1563 | 0 | 62 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/form-basvuru-sistemi/istanbul/` | Hizmet × İl | 54 | 152 | 1568 | 0 | 62 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/form-basvuru-sistemi/izmir/` | Hizmet × İl | 51 | 154 | 1568 | 0 | 62 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/form-basvuru-sistemi/kayseri/` | Hizmet × İl | 53 | 154 | 1564 | 0 | 61 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/form-basvuru-sistemi/kocaeli/` | Hizmet × İl | 53 | 151 | 1561 | 0 | 61 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/form-basvuru-sistemi/konya/` | Hizmet × İl | 51 | 152 | 1566 | 0 | 61 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/google-search-console-kurulumu/adana/` | Hizmet × İl | 59 | 154 | 1566 | 0 | 61 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/google-search-console-kurulumu/ankara/` | Hizmet × İl | 60 | 149 | 1566 | 0 | 62 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/google-search-console-kurulumu/antalya/` | Hizmet × İl | 40 | 156 | 1566 | 0 | 62 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/google-search-console-kurulumu/bursa/` | Hizmet × İl | 59 | 154 | 1564 | 0 | 62 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/google-search-console-kurulumu/gaziantep/` | Hizmet × İl | 42 | 152 | 1565 | 0 | 61 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/google-search-console-kurulumu/istanbul/` | Hizmet × İl | 41 | 157 | 1572 | 0 | 62 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/google-search-console-kurulumu/izmir/` | Hizmet × İl | 59 | 156 | 1571 | 0 | 62 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/google-search-console-kurulumu/kayseri/` | Hizmet × İl | 40 | 150 | 1566 | 0 | 61 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/google-search-console-kurulumu/kocaeli/` | Hizmet × İl | 40 | 156 | 1565 | 0 | 62 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/google-search-console-kurulumu/konya/` | Hizmet × İl | 59 | 157 | 1570 | 0 | 61 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/hosting-yedekleme/adana/` | Hizmet × İl | 48 | 157 | 1578 | 0 | 60 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/hosting-yedekleme/ankara/` | Hizmet × İl | 49 | 155 | 1579 | 0 | 61 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/hosting-yedekleme/antalya/` | Hizmet × İl | 50 | 153 | 1577 | 0 | 61 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/hosting-yedekleme/bursa/` | Hizmet × İl | 48 | 157 | 1576 | 0 | 61 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/hosting-yedekleme/gaziantep/` | Hizmet × İl | 52 | 150 | 1576 | 0 | 60 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/hosting-yedekleme/istanbul/` | Hizmet × İl | 51 | 154 | 1583 | 0 | 61 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/hosting-yedekleme/izmir/` | Hizmet × İl | 48 | 153 | 1582 | 0 | 61 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/hosting-yedekleme/kayseri/` | Hizmet × İl | 50 | 156 | 1579 | 0 | 60 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/hosting-yedekleme/kocaeli/` | Hizmet × İl | 50 | 153 | 1576 | 0 | 61 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/hosting-yedekleme/konya/` | Hizmet × İl | 48 | 154 | 1581 | 0 | 60 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/is-takip-sistemi/adana/` | Hizmet × İl | 45 | 152 | 1511 | 0 | 62 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/is-takip-sistemi/ankara/` | Hizmet × İl | 46 | 156 | 1513 | 0 | 63 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/is-takip-sistemi/antalya/` | Hizmet × İl | 47 | 154 | 1511 | 0 | 63 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/is-takip-sistemi/bursa/` | Hizmet × İl | 45 | 152 | 1509 | 0 | 63 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/is-takip-sistemi/gaziantep/` | Hizmet × İl | 49 | 157 | 1511 | 0 | 62 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/is-takip-sistemi/istanbul/` | Hizmet × İl | 48 | 155 | 1517 | 0 | 63 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/is-takip-sistemi/izmir/` | Hizmet × İl | 45 | 154 | 1516 | 0 | 63 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/is-takip-sistemi/kayseri/` | Hizmet × İl | 47 | 157 | 1513 | 0 | 62 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/is-takip-sistemi/kocaeli/` | Hizmet × İl | 47 | 154 | 1510 | 0 | 63 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/is-takip-sistemi/konya/` | Hizmet × İl | 45 | 155 | 1515 | 0 | 62 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/kurumsal-email/adana/` | Hizmet × İl | 45 | 154 | 1552 | 0 | 60 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/kurumsal-email/ankara/` | Hizmet × İl | 46 | 149 | 1552 | 0 | 61 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/kurumsal-email/antalya/` | Hizmet × İl | 47 | 156 | 1552 | 0 | 61 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/kurumsal-email/bursa/` | Hizmet × İl | 45 | 154 | 1550 | 0 | 61 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/kurumsal-email/gaziantep/` | Hizmet × İl | 49 | 152 | 1551 | 0 | 60 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/kurumsal-email/istanbul/` | Hizmet × İl | 48 | 157 | 1558 | 0 | 61 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/kurumsal-email/izmir/` | Hizmet × İl | 45 | 156 | 1557 | 0 | 61 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/kurumsal-email/kayseri/` | Hizmet × İl | 47 | 150 | 1552 | 0 | 60 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/kurumsal-email/kocaeli/` | Hizmet × İl | 47 | 156 | 1551 | 0 | 61 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/kurumsal-email/konya/` | Hizmet × İl | 45 | 157 | 1556 | 0 | 60 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
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
| `/hizmet/lokal-seo/adana/` | Hizmet × İl | 38 | 154 | 1580 | 0 | 60 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/lokal-seo/ankara/` | Hizmet × İl | 39 | 158 | 1582 | 0 | 61 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/lokal-seo/antalya/` | Hizmet × İl | 40 | 156 | 1580 | 0 | 61 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/lokal-seo/bursa/` | Hizmet × İl | 38 | 154 | 1578 | 0 | 61 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/lokal-seo/gaziantep/` | Hizmet × İl | 42 | 156 | 1580 | 0 | 60 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/lokal-seo/istanbul/` | Hizmet × İl | 41 | 157 | 1586 | 0 | 61 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/lokal-seo/izmir/` | Hizmet × İl | 38 | 150 | 1584 | 0 | 61 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/lokal-seo/kayseri/` | Hizmet × İl | 40 | 153 | 1581 | 0 | 60 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/lokal-seo/kocaeli/` | Hizmet × İl | 40 | 156 | 1579 | 0 | 61 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/lokal-seo/konya/` | Hizmet × İl | 38 | 157 | 1584 | 0 | 60 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/multi-tenant-uygulama/adana/` | Hizmet × İl | 50 | 156 | 1581 | 0 | 60 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/multi-tenant-uygulama/ankara/` | Hizmet × İl | 51 | 154 | 1582 | 0 | 61 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/multi-tenant-uygulama/antalya/` | Hizmet × İl | 52 | 152 | 1580 | 0 | 61 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/multi-tenant-uygulama/bursa/` | Hizmet × İl | 50 | 156 | 1579 | 0 | 61 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/multi-tenant-uygulama/gaziantep/` | Hizmet × İl | 54 | 155 | 1580 | 0 | 60 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/multi-tenant-uygulama/istanbul/` | Hizmet × İl | 53 | 153 | 1586 | 0 | 61 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/multi-tenant-uygulama/izmir/` | Hizmet × İl | 50 | 158 | 1586 | 0 | 61 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/multi-tenant-uygulama/kayseri/` | Hizmet × İl | 52 | 155 | 1582 | 0 | 60 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/multi-tenant-uygulama/kocaeli/` | Hizmet × İl | 52 | 152 | 1579 | 0 | 61 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/multi-tenant-uygulama/konya/` | Hizmet × İl | 50 | 153 | 1584 | 0 | 60 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/musteri-paneli/adana/` | Hizmet × İl | 43 | 154 | 1532 | 0 | 62 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/musteri-paneli/ankara/` | Hizmet × İl | 44 | 158 | 1534 | 0 | 63 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/musteri-paneli/antalya/` | Hizmet × İl | 45 | 156 | 1532 | 0 | 63 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/musteri-paneli/bursa/` | Hizmet × İl | 43 | 154 | 1530 | 0 | 63 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/musteri-paneli/gaziantep/` | Hizmet × İl | 47 | 156 | 1532 | 0 | 62 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/musteri-paneli/istanbul/` | Hizmet × İl | 46 | 157 | 1538 | 0 | 63 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/musteri-paneli/izmir/` | Hizmet × İl | 43 | 150 | 1536 | 0 | 63 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/musteri-paneli/kayseri/` | Hizmet × İl | 45 | 153 | 1533 | 0 | 62 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/musteri-paneli/kocaeli/` | Hizmet × İl | 45 | 156 | 1531 | 0 | 63 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/musteri-paneli/konya/` | Hizmet × İl | 43 | 157 | 1536 | 0 | 62 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
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
| `/hizmet/mvp-startup-urunu/adana/` | Hizmet × İl | 48 | 156 | 1533 | 0 | 60 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/mvp-startup-urunu/ankara/` | Hizmet × İl | 49 | 151 | 1533 | 0 | 61 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/mvp-startup-urunu/antalya/` | Hizmet × İl | 50 | 149 | 1531 | 0 | 61 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/mvp-startup-urunu/bursa/` | Hizmet × İl | 48 | 156 | 1531 | 0 | 61 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/mvp-startup-urunu/gaziantep/` | Hizmet × İl | 52 | 154 | 1532 | 0 | 60 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/mvp-startup-urunu/istanbul/` | Hizmet × İl | 51 | 150 | 1537 | 0 | 61 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/mvp-startup-urunu/izmir/` | Hizmet × İl | 48 | 152 | 1537 | 0 | 61 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/mvp-startup-urunu/kayseri/` | Hizmet × İl | 50 | 152 | 1533 | 0 | 60 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/mvp-startup-urunu/kocaeli/` | Hizmet × İl | 50 | 149 | 1530 | 0 | 61 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/mvp-startup-urunu/konya/` | Hizmet × İl | 48 | 150 | 1535 | 0 | 60 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/odeme-whatsapp-crm-entegrasyonu/adana/` | Hizmet × İl | 43 | 156 | 1650 | 0 | 61 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/odeme-whatsapp-crm-entegrasyonu/ankara/` | Hizmet × İl | 44 | 154 | 1651 | 0 | 62 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/odeme-whatsapp-crm-entegrasyonu/antalya/` | Hizmet × İl | 45 | 152 | 1649 | 0 | 62 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/odeme-whatsapp-crm-entegrasyonu/bursa/` | Hizmet × İl | 43 | 156 | 1648 | 0 | 62 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/odeme-whatsapp-crm-entegrasyonu/gaziantep/` | Hizmet × İl | 47 | 155 | 1649 | 0 | 61 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/odeme-whatsapp-crm-entegrasyonu/istanbul/` | Hizmet × İl | 46 | 153 | 1655 | 0 | 62 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/odeme-whatsapp-crm-entegrasyonu/izmir/` | Hizmet × İl | 43 | 158 | 1655 | 0 | 62 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/odeme-whatsapp-crm-entegrasyonu/kayseri/` | Hizmet × İl | 45 | 155 | 1651 | 0 | 61 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/odeme-whatsapp-crm-entegrasyonu/kocaeli/` | Hizmet × İl | 45 | 152 | 1648 | 0 | 62 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/odeme-whatsapp-crm-entegrasyonu/konya/` | Hizmet × İl | 43 | 153 | 1653 | 0 | 61 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/personel-kullanici-yonetimi/adana/` | Hizmet × İl | 58 | 152 | 1542 | 0 | 61 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/personel-kullanici-yonetimi/ankara/` | Hizmet × İl | 59 | 156 | 1544 | 0 | 62 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/personel-kullanici-yonetimi/antalya/` | Hizmet × İl | 60 | 154 | 1542 | 0 | 62 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/personel-kullanici-yonetimi/bursa/` | Hizmet × İl | 58 | 152 | 1540 | 0 | 62 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/personel-kullanici-yonetimi/gaziantep/` | Hizmet × İl | 41 | 153 | 1542 | 0 | 61 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/personel-kullanici-yonetimi/istanbul/` | Hizmet × İl | 40 | 155 | 1548 | 0 | 62 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/personel-kullanici-yonetimi/izmir/` | Hizmet × İl | 58 | 157 | 1548 | 0 | 62 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/personel-kullanici-yonetimi/kayseri/` | Hizmet × İl | 60 | 157 | 1544 | 0 | 61 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/personel-kullanici-yonetimi/kocaeli/` | Hizmet × İl | 60 | 154 | 1541 | 0 | 62 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/personel-kullanici-yonetimi/konya/` | Hizmet × İl | 58 | 155 | 1546 | 0 | 61 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
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
| `/hizmet/raporlama-sistemi/adana/` | Hizmet × İl | 46 | 154 | 1497 | 0 | 62 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/raporlama-sistemi/ankara/` | Hizmet × İl | 47 | 149 | 1497 | 0 | 63 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/raporlama-sistemi/antalya/` | Hizmet × İl | 48 | 156 | 1497 | 0 | 63 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/raporlama-sistemi/bursa/` | Hizmet × İl | 46 | 154 | 1495 | 0 | 63 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/raporlama-sistemi/gaziantep/` | Hizmet × İl | 50 | 152 | 1496 | 0 | 62 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/raporlama-sistemi/istanbul/` | Hizmet × İl | 49 | 157 | 1503 | 0 | 63 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/raporlama-sistemi/izmir/` | Hizmet × İl | 46 | 156 | 1502 | 0 | 63 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/raporlama-sistemi/kayseri/` | Hizmet × İl | 48 | 150 | 1497 | 0 | 62 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/raporlama-sistemi/kocaeli/` | Hizmet × İl | 48 | 156 | 1496 | 0 | 62 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/raporlama-sistemi/konya/` | Hizmet × İl | 46 | 157 | 1501 | 0 | 63 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
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
| `/hizmet/saas-platformu/adana/` | Hizmet × İl | 43 | 157 | 1620 | 0 | 60 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/saas-platformu/ankara/` | Hizmet × İl | 44 | 155 | 1621 | 0 | 61 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/saas-platformu/antalya/` | Hizmet × İl | 45 | 153 | 1619 | 0 | 61 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/saas-platformu/bursa/` | Hizmet × İl | 43 | 157 | 1618 | 0 | 61 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/saas-platformu/gaziantep/` | Hizmet × İl | 47 | 156 | 1619 | 0 | 60 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/saas-platformu/istanbul/` | Hizmet × İl | 46 | 154 | 1625 | 0 | 61 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/saas-platformu/izmir/` | Hizmet × İl | 43 | 153 | 1624 | 0 | 61 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/saas-platformu/kayseri/` | Hizmet × İl | 45 | 156 | 1621 | 0 | 60 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/saas-platformu/kocaeli/` | Hizmet × İl | 45 | 153 | 1618 | 0 | 61 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/saas-platformu/konya/` | Hizmet × İl | 43 | 154 | 1623 | 0 | 60 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/schema-org-structured-data/adana/` | Hizmet × İl | 57 | 158 | 1562 | 0 | 60 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/schema-org-structured-data/ankara/` | Hizmet × İl | 58 | 156 | 1563 | 0 | 61 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/schema-org-structured-data/antalya/` | Hizmet × İl | 59 | 154 | 1561 | 0 | 61 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/schema-org-structured-data/bursa/` | Hizmet × İl | 57 | 158 | 1560 | 0 | 61 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/schema-org-structured-data/gaziantep/` | Hizmet × İl | 40 | 151 | 1560 | 0 | 60 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/schema-org-structured-data/istanbul/` | Hizmet × İl | 60 | 155 | 1567 | 0 | 61 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/schema-org-structured-data/izmir/` | Hizmet × İl | 57 | 154 | 1566 | 0 | 61 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/schema-org-structured-data/kayseri/` | Hizmet × İl | 59 | 157 | 1563 | 0 | 60 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/schema-org-structured-data/kocaeli/` | Hizmet × İl | 59 | 154 | 1560 | 0 | 61 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/schema-org-structured-data/konya/` | Hizmet × İl | 57 | 155 | 1565 | 0 | 60 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/seo-danismanligi/adana/` | Hizmet × İl | 45 | 152 | 1608 | 0 | 63 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/seo-danismanligi/ankara/` | Hizmet × İl | 46 | 156 | 1610 | 0 | 63 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/seo-danismanligi/antalya/` | Hizmet × İl | 47 | 154 | 1608 | 0 | 63 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/seo-danismanligi/bursa/` | Hizmet × İl | 45 | 152 | 1606 | 0 | 63 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/seo-danismanligi/gaziantep/` | Hizmet × İl | 49 | 157 | 1608 | 0 | 62 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/seo-danismanligi/istanbul/` | Hizmet × İl | 48 | 155 | 1614 | 0 | 63 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/seo-danismanligi/izmir/` | Hizmet × İl | 45 | 154 | 1613 | 0 | 63 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/seo-danismanligi/kayseri/` | Hizmet × İl | 47 | 157 | 1610 | 0 | 63 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/seo-danismanligi/kocaeli/` | Hizmet × İl | 47 | 154 | 1607 | 0 | 62 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/seo-danismanligi/konya/` | Hizmet × İl | 45 | 155 | 1612 | 0 | 62 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/seo-uyumlu-sayfa-mimarisi/adana/` | Hizmet × İl | 54 | 151 | 1553 | 0 | 60 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/seo-uyumlu-sayfa-mimarisi/ankara/` | Hizmet × İl | 55 | 155 | 1555 | 0 | 61 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/seo-uyumlu-sayfa-mimarisi/antalya/` | Hizmet × İl | 56 | 153 | 1553 | 0 | 61 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/seo-uyumlu-sayfa-mimarisi/bursa/` | Hizmet × İl | 54 | 151 | 1551 | 0 | 61 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/seo-uyumlu-sayfa-mimarisi/gaziantep/` | Hizmet × İl | 58 | 150 | 1553 | 0 | 60 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/seo-uyumlu-sayfa-mimarisi/istanbul/` | Hizmet × İl | 57 | 154 | 1559 | 0 | 61 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/seo-uyumlu-sayfa-mimarisi/izmir/` | Hizmet × İl | 54 | 154 | 1558 | 0 | 61 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/seo-uyumlu-sayfa-mimarisi/kayseri/` | Hizmet × İl | 56 | 156 | 1555 | 0 | 60 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/seo-uyumlu-sayfa-mimarisi/kocaeli/` | Hizmet × İl | 56 | 153 | 1552 | 0 | 61 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/seo-uyumlu-sayfa-mimarisi/konya/` | Hizmet × İl | 54 | 154 | 1557 | 0 | 60 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
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
| `/hizmet/supabase-postgresql/adana/` | Hizmet × İl | 60 | 150 | 1616 | 0 | 60 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/supabase-postgresql/ankara/` | Hizmet × İl | 40 | 154 | 1618 | 0 | 61 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/supabase-postgresql/antalya/` | Hizmet × İl | 41 | 152 | 1616 | 0 | 61 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/supabase-postgresql/bursa/` | Hizmet × İl | 60 | 150 | 1614 | 0 | 61 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/supabase-postgresql/gaziantep/` | Hizmet × İl | 43 | 152 | 1616 | 0 | 60 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/supabase-postgresql/istanbul/` | Hizmet × İl | 42 | 153 | 1622 | 0 | 61 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/supabase-postgresql/izmir/` | Hizmet × İl | 60 | 146 | 1620 | 0 | 61 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/supabase-postgresql/kayseri/` | Hizmet × İl | 41 | 155 | 1618 | 0 | 60 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/supabase-postgresql/kocaeli/` | Hizmet × İl | 41 | 152 | 1615 | 0 | 61 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/supabase-postgresql/konya/` | Hizmet × İl | 60 | 153 | 1620 | 0 | 60 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
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
| `/hizmet/vercel-deployment/adana/` | Hizmet × İl | 46 | 157 | 1533 | 0 | 60 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/vercel-deployment/ankara/` | Hizmet × İl | 47 | 155 | 1534 | 0 | 61 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/vercel-deployment/antalya/` | Hizmet × İl | 48 | 153 | 1532 | 0 | 61 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/vercel-deployment/bursa/` | Hizmet × İl | 46 | 157 | 1531 | 0 | 61 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/vercel-deployment/gaziantep/` | Hizmet × İl | 50 | 150 | 1531 | 0 | 60 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/vercel-deployment/istanbul/` | Hizmet × İl | 49 | 154 | 1538 | 0 | 61 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/vercel-deployment/izmir/` | Hizmet × İl | 46 | 153 | 1537 | 0 | 61 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/vercel-deployment/kayseri/` | Hizmet × İl | 48 | 156 | 1534 | 0 | 60 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/vercel-deployment/kocaeli/` | Hizmet × İl | 48 | 153 | 1531 | 0 | 61 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/vercel-deployment/konya/` | Hizmet × İl | 46 | 154 | 1536 | 0 | 60 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
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
| `/hizmet/yonetim-paneli/adana/` | Hizmet × İl | 43 | 156 | 1498 | 0 | 61 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/yonetim-paneli/ankara/` | Hizmet × İl | 44 | 154 | 1499 | 0 | 62 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/yonetim-paneli/antalya/` | Hizmet × İl | 45 | 158 | 1498 | 0 | 62 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/yonetim-paneli/bursa/` | Hizmet × İl | 43 | 156 | 1496 | 0 | 62 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/yonetim-paneli/gaziantep/` | Hizmet × İl | 47 | 149 | 1496 | 0 | 61 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/yonetim-paneli/istanbul/` | Hizmet × İl | 46 | 153 | 1503 | 0 | 62 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/yonetim-paneli/izmir/` | Hizmet × İl | 43 | 152 | 1502 | 0 | 62 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/yonetim-paneli/kayseri/` | Hizmet × İl | 45 | 155 | 1499 | 0 | 61 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/yonetim-paneli/kocaeli/` | Hizmet × İl | 45 | 158 | 1497 | 0 | 62 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmet/yonetim-paneli/konya/` | Hizmet × İl | 43 | 153 | 1501 | 0 | 61 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmetler/` | Hizmet dizini | 42 | 153 | 783 | 0 | 59 | - | Organization+ProfessionalService+WebSite | index, follow |
| `/hizmetler/abonelik-tabanli-yazilim/` | Hizmet sayfası | 45 | 152 | 1616 | 0 | 60 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmetler/ai-chatbot/` | Hizmet sayfası | 31 | 150 | 1667 | 2 | 60 | 7 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmetler/ai-icerik-araclar/` | Hizmet sayfası | 49 | 146 | 1674 | 0 | 59 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmetler/api-entegrasyonu/` | Hizmet sayfası | 37 | 146 | 1608 | 0 | 58 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmetler/cloudflare-cdn/` | Hizmet sayfası | 52 | 150 | 1663 | 0 | 58 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmetler/crm/` | Hizmet sayfası | 24 | 157 | 1688 | 2 | 59 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmetler/dashboard-sistemi/` | Hizmet sayfası | 38 | 152 | 1546 | 0 | 60 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmetler/dijital-donusum/` | Hizmet sayfası | 46 | 158 | 1657 | 0 | 60 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmetler/dijital-otomasyon/` | Hizmet sayfası | 38 | 145 | 1571 | 0 | 61 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmetler/domain-dns-yonetimi/` | Hizmet sayfası | 42 | 145 | 1654 | 0 | 58 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmetler/e-ticaret-sitesi/` | Hizmet sayfası | 37 | 155 | 1744 | 2 | 58 | 7 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmetler/firma-web-sitesi/` | Hizmet sayfası | 37 | 144 | 1899 | 0 | 58 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmetler/form-basvuru-sistemi/` | Hizmet sayfası | 43 | 143 | 1639 | 0 | 58 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmetler/google-search-console-kurulumu/` | Hizmet sayfası | 51 | 155 | 1625 | 0 | 59 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmetler/hosting-yedekleme/` | Hizmet sayfası | 40 | 154 | 1647 | 0 | 58 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmetler/is-takip-sistemi/` | Hizmet sayfası | 37 | 156 | 1580 | 0 | 59 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmetler/kurumsal-email/` | Hizmet sayfası | 37 | 152 | 1618 | 0 | 58 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmetler/kurumsal-web-sitesi/` | Hizmet sayfası | 40 | 156 | 1888 | 2 | 58 | 8 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmetler/landing-page/` | Hizmet sayfası | 33 | 146 | 1810 | 0 | 60 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmetler/lokal-seo/` | Hizmet sayfası | 30 | 155 | 1653 | 0 | 58 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmetler/multi-tenant-uygulama/` | Hizmet sayfası | 42 | 144 | 1650 | 0 | 58 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmetler/musteri-paneli/` | Hizmet sayfası | 35 | 155 | 1606 | 0 | 59 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmetler/musteri-yonetim-sistemi/` | Hizmet sayfası | 44 | 143 | 1720 | 0 | 60 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmetler/mvp-startup-urunu/` | Hizmet sayfası | 40 | 145 | 1612 | 0 | 58 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmetler/odeme-whatsapp-crm-entegrasyonu/` | Hizmet sayfası | 56 | 156 | 1695 | 0 | 59 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmetler/personel-kullanici-yonetimi/` | Hizmet sayfası | 50 | 150 | 1619 | 0 | 59 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmetler/portfoy-sitesi/` | Hizmet sayfası | 35 | 150 | 1657 | 0 | 58 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmetler/proforma-siparis-yonetimi/` | Hizmet sayfası | 48 | 147 | 1683 | 0 | 58 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmetler/raporlama-sistemi/` | Hizmet sayfası | 38 | 148 | 1570 | 0 | 59 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmetler/rezervasyon-basvuru-sistemi/` | Hizmet sayfası | 51 | 157 | 1717 | 0 | 61 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmetler/saas-platformu/` | Hizmet sayfası | 35 | 146 | 1727 | 0 | 58 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmetler/schema-org-structured-data/` | Hizmet sayfası | 49 | 151 | 1623 | 0 | 58 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmetler/seo-danismanligi/` | Hizmet sayfası | 37 | 146 | 1694 | 0 | 60 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmetler/seo-uyumlu-sayfa-mimarisi/` | Hizmet sayfası | 46 | 154 | 1612 | 0 | 58 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmetler/stok-yonetimi/` | Hizmet sayfası | 34 | 150 | 1722 | 0 | 59 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmetler/supabase-postgresql/` | Hizmet sayfası | 52 | 153 | 1661 | 0 | 58 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmetler/teklif-hazirlama-sistemi/` | Hizmet sayfası | 45 | 144 | 1630 | 0 | 59 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmetler/teknik-seo/` | Hizmet sayfası | 31 | 147 | 1686 | 2 | 58 | 7 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmetler/urun-tanitim-sitesi/` | Hizmet sayfası | 49 | 155 | 1895 | 0 | 58 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmetler/urun-tedarikci-yonetimi/` | Hizmet sayfası | 46 | 148 | 1703 | 0 | 58 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmetler/vercel-deployment/` | Hizmet sayfası | 38 | 153 | 1604 | 0 | 58 | 5 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmetler/web-sitesi-yenileme/` | Hizmet sayfası | 56 | 145 | 1816 | 0 | 58 | 7 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/hizmetler/yonetim-paneli/` | Hizmet sayfası | 35 | 148 | 1576 | 0 | 59 | 6 | BreadcrumbList+FAQPage+Organization+ProfessionalService+Service+WebSite | index, follow |
| `/iletisim/` | Kurumsal | 45 | 155 | 373 | 0 | 52 | - | Organization+ProfessionalService+WebSite | index, follow |
| `/kvkk/` | Kurumsal | 45 | 158 | 299 | 0 | 52 | - | Organization+ProfessionalService+WebSite | index, follow |
| `/sehir/adana/` | Şehir sayfası | 43 | 151 | 558 | 0 | 95 | - | BreadcrumbList+LocalBusiness+Organization+ProfessionalService+WebSite | index, follow |
| `/sehir/ankara/` | Şehir sayfası | 44 | 156 | 565 | 0 | 95 | - | BreadcrumbList+LocalBusiness+Organization+ProfessionalService+WebSite | index, follow |
| `/sehir/antalya/` | Şehir sayfası | 45 | 156 | 562 | 0 | 95 | - | BreadcrumbList+LocalBusiness+Organization+ProfessionalService+WebSite | index, follow |
| `/sehir/bursa/` | Şehir sayfası | 43 | 148 | 560 | 0 | 95 | - | BreadcrumbList+LocalBusiness+Organization+ProfessionalService+WebSite | index, follow |
| `/sehir/gaziantep/` | Şehir sayfası | 47 | 151 | 559 | 0 | 95 | - | BreadcrumbList+LocalBusiness+Organization+ProfessionalService+WebSite | index, follow |
| `/sehir/istanbul/` | Şehir sayfası | 46 | 156 | 574 | 0 | 95 | - | BreadcrumbList+LocalBusiness+Organization+ProfessionalService+WebSite | index, follow |
| `/sehir/izmir/` | Şehir sayfası | 43 | 149 | 570 | 0 | 95 | - | BreadcrumbList+LocalBusiness+Organization+ProfessionalService+WebSite | index, follow |
| `/sehir/kayseri/` | Şehir sayfası | 45 | 153 | 561 | 0 | 95 | - | BreadcrumbList+LocalBusiness+Organization+ProfessionalService+WebSite | index, follow |
| `/sehir/kocaeli/` | Şehir sayfası | 45 | 149 | 560 | 0 | 95 | - | BreadcrumbList+LocalBusiness+Organization+ProfessionalService+WebSite | index, follow |
| `/sehir/konya/` | Şehir sayfası | 43 | 148 | 560 | 0 | 95 | - | BreadcrumbList+LocalBusiness+Organization+ProfessionalService+WebSite | index, follow |
| `/surec/` | Kurumsal | 54 | 152 | 279 | 1 | 52 | - | Organization+ProfessionalService+WebSite | index, follow |

### 2b. İndekslenebilir URL'ler — meta değerleri (sitemap'teki 71 kayıt)

| URL | Title | Description |
|---|---|---|
| `/` | Tardigrad Software | Kurumsal Web, Özel Yazılım ve SEO | Kurumsal web sitesi, özel yazılım, SaaS, e-ticaret ve SEO hizmetlerini tek elden yürüten Türkiye geneli teknoloji firması. 43 hizmet, 9 adımlı süreç. |
| `/hakkimizda/` | Hakkımızda | Tardigrad Software | Tardigrad Software; kurumsal web, özel yazılım, SaaS, SEO ve IT/AI işlerini tek ekiple yürüten Türkiye merkezli teknoloji firması. 43 hizmet, 9 adımlı. |
| `/hizmet/abonelik-tabanli-yazilim/adana/` | Abonelik Tabanlı Yazılım — Adana | Tardigrad Software | Abonelik tabanlı yazılım hizmeti Adana için: Tekrarlayan geliri kurala bağlayan abonelik ve tahsilat altyapısı — Akdeniz bölgesi. İl/ilçe sayfa ailesi. |
| `/hizmet/abonelik-tabanli-yazilim/ankara/` | Abonelik Tabanlı Yazılım — Ankara | Tardigrad Software | Abonelik tabanlı yazılım hizmeti Ankara için: Tekrarlayan geliri kurala bağlayan abonelik ve tahsilat altyapısı — İç Anadolu bölgesi. İl/ilçe sayfa ailesi. |
| `/hizmet/abonelik-tabanli-yazilim/antalya/` | Abonelik Tabanlı Yazılım — Antalya | Tardigrad Software | Abonelik tabanlı yazılım hizmeti Antalya için: Tekrarlayan geliri kurala bağlayan abonelik ve tahsilat altyapısı — Akdeniz bölgesi. İl/ilçe sayfa ailesi. |
| `/hizmet/abonelik-tabanli-yazilim/bursa/` | Abonelik Tabanlı Yazılım — Bursa | Tardigrad Software | Abonelik tabanlı yazılım hizmeti Bursa için: Tekrarlayan geliri kurala bağlayan abonelik ve tahsilat altyapısı — Marmara bölgesi. İl/ilçe sayfa ailesi. |
| `/hizmet/abonelik-tabanli-yazilim/gaziantep/` | Abonelik Tabanlı Yazılım — Gaziantep | Tardigrad Software | Abonelik tabanlı yazılım hizmeti Gaziantep için: Tekrarlayan geliri kurala bağlayan abonelik ve tahsilat altyapısı — Güneydoğu Anadolu bölgesi. İl/ilçe. |
| `/hizmet/abonelik-tabanli-yazilim/istanbul/` | Abonelik Tabanlı Yazılım — İstanbul | Tardigrad Software | Abonelik tabanlı yazılım hizmeti İstanbul için: Tekrarlayan geliri kurala bağlayan abonelik ve tahsilat altyapısı — Marmara bölgesi. İl/ilçe sayfa ailesi. |
| `/hizmet/abonelik-tabanli-yazilim/izmir/` | Abonelik Tabanlı Yazılım — İzmir | Tardigrad Software | Abonelik tabanlı yazılım hizmeti İzmir için: Tekrarlayan geliri kurala bağlayan abonelik ve tahsilat altyapısı — Ege bölgesi. İl/ilçe sayfa ailesi ve ölçüm. |
| `/hizmet/abonelik-tabanli-yazilim/kayseri/` | Abonelik Tabanlı Yazılım — Kayseri | Tardigrad Software | Abonelik tabanlı yazılım hizmeti Kayseri için: Tekrarlayan geliri kurala bağlayan abonelik ve tahsilat altyapısı — İç Anadolu bölgesi. İl/ilçe sayfa ailesi. |
| `/hizmet/abonelik-tabanli-yazilim/kocaeli/` | Abonelik Tabanlı Yazılım — Kocaeli | Tardigrad Software | Abonelik tabanlı yazılım hizmeti Kocaeli için: Tekrarlayan geliri kurala bağlayan abonelik ve tahsilat altyapısı — Marmara bölgesi. İl/ilçe sayfa ailesi. |
| `/hizmet/abonelik-tabanli-yazilim/konya/` | Abonelik Tabanlı Yazılım — Konya | Tardigrad Software | Abonelik tabanlı yazılım hizmeti Konya için: Tekrarlayan geliri kurala bağlayan abonelik ve tahsilat altyapısı — İç Anadolu bölgesi. İl/ilçe sayfa ailesi. |
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
| `/hizmet/ai-icerik-araclar/adana/` | AI Destekli İçerik / Araçlar — Adana | Tardigrad Software | AI içerik hizmeti Adana için: Ölçekli içerik üretimini kalite kontrolüyle birleştiren AI hattı — Akdeniz bölgesi. İl/ilçe sayfa ailesi ve ölçüm planı dâhil. |
| `/hizmet/ai-icerik-araclar/ankara/` | AI Destekli İçerik / Araçlar — Ankara | Tardigrad Software | AI içerik hizmeti Ankara için: Ölçekli içerik üretimini kalite kontrolüyle birleştiren AI hattı — İç Anadolu bölgesi. İl/ilçe sayfa ailesi ve ölçüm planı. |
| `/hizmet/ai-icerik-araclar/antalya/` | AI Destekli İçerik / Araçlar — Antalya | Tardigrad Software | AI içerik hizmeti Antalya için: Ölçekli içerik üretimini kalite kontrolüyle birleştiren AI hattı — Akdeniz bölgesi. İl/ilçe sayfa ailesi ve ölçüm planı dâhil. |
| `/hizmet/ai-icerik-araclar/bursa/` | AI Destekli İçerik / Araçlar — Bursa | Tardigrad Software | AI içerik hizmeti Bursa için: Ölçekli içerik üretimini kalite kontrolüyle birleştiren AI hattı — Marmara bölgesi. İl/ilçe sayfa ailesi ve ölçüm planı dâhil. |
| `/hizmet/ai-icerik-araclar/gaziantep/` | AI Destekli İçerik / Araçlar — Gaziantep | AI içerik hizmeti Gaziantep için: Ölçekli içerik üretimini kalite kontrolüyle birleştiren AI hattı — Güneydoğu Anadolu bölgesi. İl/ilçe sayfa ailesi. |
| `/hizmet/ai-icerik-araclar/istanbul/` | AI Destekli İçerik / Araçlar — İstanbul | Tardigrad Software | AI içerik hizmeti İstanbul için: Ölçekli içerik üretimini kalite kontrolüyle birleştiren AI hattı — Marmara bölgesi. İl/ilçe sayfa ailesi ve ölçüm planı. |
| `/hizmet/ai-icerik-araclar/izmir/` | AI Destekli İçerik / Araçlar — İzmir | Tardigrad Software | AI içerik hizmeti İzmir için: Ölçekli içerik üretimini kalite kontrolüyle birleştiren AI hattı — Ege bölgesi. İl/ilçe sayfa ailesi ve ölçüm planı dâhil. |
| `/hizmet/ai-icerik-araclar/kayseri/` | AI Destekli İçerik / Araçlar — Kayseri | Tardigrad Software | AI içerik hizmeti Kayseri için: Ölçekli içerik üretimini kalite kontrolüyle birleştiren AI hattı — İç Anadolu bölgesi. İl/ilçe sayfa ailesi ve ölçüm planı. |
| `/hizmet/ai-icerik-araclar/kocaeli/` | AI Destekli İçerik / Araçlar — Kocaeli | Tardigrad Software | AI içerik hizmeti Kocaeli için: Ölçekli içerik üretimini kalite kontrolüyle birleştiren AI hattı — Marmara bölgesi. İl/ilçe sayfa ailesi ve ölçüm planı dâhil. |
| `/hizmet/ai-icerik-araclar/konya/` | AI Destekli İçerik / Araçlar — Konya | Tardigrad Software | AI içerik hizmeti Konya için: Ölçekli içerik üretimini kalite kontrolüyle birleştiren AI hattı — İç Anadolu bölgesi. İl/ilçe sayfa ailesi ve ölçüm planı. |
| `/hizmet/api-entegrasyonu/adana/` | API Entegrasyonu — Adana | Tardigrad Software | API entegrasyonu hizmeti Adana için: Sistemlerinizi konuşturan, kırılgan olmayan entegrasyon katmanı — Akdeniz bölgesi. İl/ilçe sayfa ailesi ve ölçüm planı. |
| `/hizmet/api-entegrasyonu/ankara/` | API Entegrasyonu — Ankara | Tardigrad Software | API entegrasyonu hizmeti Ankara için: Sistemlerinizi konuşturan, kırılgan olmayan entegrasyon katmanı — İç Anadolu bölgesi. İl/ilçe sayfa ailesi ve ölçüm. |
| `/hizmet/api-entegrasyonu/antalya/` | API Entegrasyonu — Antalya | Tardigrad Software | API entegrasyonu hizmeti Antalya için: Sistemlerinizi konuşturan, kırılgan olmayan entegrasyon katmanı — Akdeniz bölgesi. İl/ilçe sayfa ailesi ve ölçüm. |
| `/hizmet/api-entegrasyonu/bursa/` | API Entegrasyonu — Bursa | Tardigrad Software | API entegrasyonu hizmeti Bursa için: Sistemlerinizi konuşturan, kırılgan olmayan entegrasyon katmanı — Marmara bölgesi. İl/ilçe sayfa ailesi ve ölçüm planı. |
| `/hizmet/api-entegrasyonu/gaziantep/` | API Entegrasyonu — Gaziantep | Tardigrad Software | API entegrasyonu hizmeti Gaziantep için: Sistemlerinizi konuşturan, kırılgan olmayan entegrasyon katmanı — Güneydoğu Anadolu bölgesi. İl/ilçe sayfa ailesi. |
| `/hizmet/api-entegrasyonu/istanbul/` | API Entegrasyonu — İstanbul | Tardigrad Software | API entegrasyonu hizmeti İstanbul için: Sistemlerinizi konuşturan, kırılgan olmayan entegrasyon katmanı — Marmara bölgesi. İl/ilçe sayfa ailesi ve ölçüm. |
| `/hizmet/api-entegrasyonu/izmir/` | API Entegrasyonu — İzmir | Tardigrad Software | API entegrasyonu hizmeti İzmir için: Sistemlerinizi konuşturan, kırılgan olmayan entegrasyon katmanı — Ege bölgesi. İl/ilçe sayfa ailesi ve ölçüm planı dâhil. |
| `/hizmet/api-entegrasyonu/kayseri/` | API Entegrasyonu — Kayseri | Tardigrad Software | API entegrasyonu hizmeti Kayseri için: Sistemlerinizi konuşturan, kırılgan olmayan entegrasyon katmanı — İç Anadolu bölgesi. İl/ilçe sayfa ailesi ve ölçüm. |
| `/hizmet/api-entegrasyonu/kocaeli/` | API Entegrasyonu — Kocaeli | Tardigrad Software | API entegrasyonu hizmeti Kocaeli için: Sistemlerinizi konuşturan, kırılgan olmayan entegrasyon katmanı — Marmara bölgesi. İl/ilçe sayfa ailesi ve ölçüm. |
| `/hizmet/api-entegrasyonu/konya/` | API Entegrasyonu — Konya | Tardigrad Software | API entegrasyonu hizmeti Konya için: Sistemlerinizi konuşturan, kırılgan olmayan entegrasyon katmanı — İç Anadolu bölgesi. İl/ilçe sayfa ailesi ve ölçüm. |
| `/hizmet/cloudflare-cdn/adana/` | Cloudflare / CDN Yapılandırması — Adana | Tardigrad Software | Cloudflare hizmeti Adana için: Cache, güvenlik ve DNS'i doğru ayarlayan Cloudflare yapılandırması — Akdeniz bölgesi. İl/ilçe sayfa ailesi ve ölçüm planı. |
| `/hizmet/cloudflare-cdn/ankara/` | Cloudflare / CDN Yapılandırması — Ankara | Cloudflare hizmeti Ankara için: Cache, güvenlik ve DNS'i doğru ayarlayan Cloudflare yapılandırması — İç Anadolu bölgesi. İl/ilçe sayfa ailesi ve ölçüm planı. |
| `/hizmet/cloudflare-cdn/antalya/` | Cloudflare / CDN Yapılandırması — Antalya | Cloudflare hizmeti Antalya için: Cache, güvenlik ve DNS'i doğru ayarlayan Cloudflare yapılandırması — Akdeniz bölgesi. İl/ilçe sayfa ailesi ve ölçüm planı. |
| `/hizmet/cloudflare-cdn/bursa/` | Cloudflare / CDN Yapılandırması — Bursa | Tardigrad Software | Cloudflare hizmeti Bursa için: Cache, güvenlik ve DNS'i doğru ayarlayan Cloudflare yapılandırması — Marmara bölgesi. İl/ilçe sayfa ailesi ve ölçüm planı. |
| `/hizmet/cloudflare-cdn/gaziantep/` | Cloudflare / CDN Yapılandırması — Gaziantep | Cloudflare hizmeti Gaziantep için: Cache, güvenlik ve DNS'i doğru ayarlayan Cloudflare yapılandırması — Güneydoğu Anadolu bölgesi. İl/ilçe sayfa ailesi. |
| `/hizmet/cloudflare-cdn/istanbul/` | Cloudflare / CDN Yapılandırması — İstanbul | Cloudflare hizmeti İstanbul için: Cache, güvenlik ve DNS'i doğru ayarlayan Cloudflare yapılandırması — Marmara bölgesi. İl/ilçe sayfa ailesi ve ölçüm planı. |
| `/hizmet/cloudflare-cdn/izmir/` | Cloudflare / CDN Yapılandırması — İzmir | Tardigrad Software | Cloudflare hizmeti İzmir için: Cache, güvenlik ve DNS'i doğru ayarlayan Cloudflare yapılandırması — Ege bölgesi. İl/ilçe sayfa ailesi ve ölçüm planı dâhil. |
| `/hizmet/cloudflare-cdn/kayseri/` | Cloudflare / CDN Yapılandırması — Kayseri | Cloudflare hizmeti Kayseri için: Cache, güvenlik ve DNS'i doğru ayarlayan Cloudflare yapılandırması — İç Anadolu bölgesi. İl/ilçe sayfa ailesi ve ölçüm. |
| `/hizmet/cloudflare-cdn/kocaeli/` | Cloudflare / CDN Yapılandırması — Kocaeli | Cloudflare hizmeti Kocaeli için: Cache, güvenlik ve DNS'i doğru ayarlayan Cloudflare yapılandırması — Marmara bölgesi. İl/ilçe sayfa ailesi ve ölçüm planı. |
| `/hizmet/cloudflare-cdn/konya/` | Cloudflare / CDN Yapılandırması — Konya | Tardigrad Software | Cloudflare hizmeti Konya için: Cache, güvenlik ve DNS'i doğru ayarlayan Cloudflare yapılandırması — İç Anadolu bölgesi. İl/ilçe sayfa ailesi ve ölçüm planı. |
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
| `/hizmet/dashboard-sistemi/adana/` | Dashboard Sistemi — Adana | Tardigrad Software | Dashboard hizmeti Adana için: Karmaşık veriyi okunur, tıklanabilir ve karar verilebilir ekrana çevirir — Akdeniz bölgesi. İl/ilçe sayfa ailesi ve ölçüm. |
| `/hizmet/dashboard-sistemi/ankara/` | Dashboard Sistemi — Ankara | Tardigrad Software | Dashboard hizmeti Ankara için: Karmaşık veriyi okunur, tıklanabilir ve karar verilebilir ekrana çevirir — İç Anadolu bölgesi. İl/ilçe sayfa ailesi ve ölçüm. |
| `/hizmet/dashboard-sistemi/antalya/` | Dashboard Sistemi — Antalya | Tardigrad Software | Dashboard hizmeti Antalya için: Karmaşık veriyi okunur, tıklanabilir ve karar verilebilir ekrana çevirir — Akdeniz bölgesi. İl/ilçe sayfa ailesi ve ölçüm. |
| `/hizmet/dashboard-sistemi/bursa/` | Dashboard Sistemi — Bursa | Tardigrad Software | Dashboard hizmeti Bursa için: Karmaşık veriyi okunur, tıklanabilir ve karar verilebilir ekrana çevirir — Marmara bölgesi. İl/ilçe sayfa ailesi ve ölçüm. |
| `/hizmet/dashboard-sistemi/gaziantep/` | Dashboard Sistemi — Gaziantep | Tardigrad Software | Dashboard hizmeti Gaziantep için: Karmaşık veriyi okunur, tıklanabilir ve karar verilebilir ekrana çevirir — Güneydoğu Anadolu bölgesi. İl/ilçe sayfa ailesi. |
| `/hizmet/dashboard-sistemi/istanbul/` | Dashboard Sistemi — İstanbul | Tardigrad Software | Dashboard hizmeti İstanbul için: Karmaşık veriyi okunur, tıklanabilir ve karar verilebilir ekrana çevirir — Marmara bölgesi. İl/ilçe sayfa ailesi ve ölçüm. |
| `/hizmet/dashboard-sistemi/izmir/` | Dashboard Sistemi — İzmir | Tardigrad Software | Dashboard hizmeti İzmir için: Karmaşık veriyi okunur, tıklanabilir ve karar verilebilir ekrana çevirir — Ege bölgesi. İl/ilçe sayfa ailesi ve ölçüm planı. |
| `/hizmet/dashboard-sistemi/kayseri/` | Dashboard Sistemi — Kayseri | Tardigrad Software | Dashboard hizmeti Kayseri için: Karmaşık veriyi okunur, tıklanabilir ve karar verilebilir ekrana çevirir — İç Anadolu bölgesi. İl/ilçe sayfa ailesi ve ölçüm. |
| `/hizmet/dashboard-sistemi/kocaeli/` | Dashboard Sistemi — Kocaeli | Tardigrad Software | Dashboard hizmeti Kocaeli için: Karmaşık veriyi okunur, tıklanabilir ve karar verilebilir ekrana çevirir — Marmara bölgesi. İl/ilçe sayfa ailesi ve ölçüm. |
| `/hizmet/dashboard-sistemi/konya/` | Dashboard Sistemi — Konya | Tardigrad Software | Dashboard hizmeti Konya için: Karmaşık veriyi okunur, tıklanabilir ve karar verilebilir ekrana çevirir — İç Anadolu bölgesi. İl/ilçe sayfa ailesi ve ölçüm. |
| `/hizmet/dijital-donusum/adana/` | Dijital Dönüşüm Süreçleri — Adana | Tardigrad Software | Dijital dönüşüm hizmeti Adana için: Kağıt ve tabloda yaşayan işleri ölçülebilir sistemlere çevirir — Akdeniz bölgesi. İl/ilçe sayfa ailesi ve ölçüm planı. |
| `/hizmet/dijital-donusum/ankara/` | Dijital Dönüşüm Süreçleri — Ankara | Tardigrad Software | Dijital dönüşüm hizmeti Ankara için: Kağıt ve tabloda yaşayan işleri ölçülebilir sistemlere çevirir — İç Anadolu bölgesi. İl/ilçe sayfa ailesi ve ölçüm. |
| `/hizmet/dijital-donusum/antalya/` | Dijital Dönüşüm Süreçleri — Antalya | Tardigrad Software | Dijital dönüşüm hizmeti Antalya için: Kağıt ve tabloda yaşayan işleri ölçülebilir sistemlere çevirir — Akdeniz bölgesi. İl/ilçe sayfa ailesi ve ölçüm planı. |
| `/hizmet/dijital-donusum/bursa/` | Dijital Dönüşüm Süreçleri — Bursa | Tardigrad Software | Dijital dönüşüm hizmeti Bursa için: Kağıt ve tabloda yaşayan işleri ölçülebilir sistemlere çevirir — Marmara bölgesi. İl/ilçe sayfa ailesi ve ölçüm planı. |
| `/hizmet/dijital-donusum/gaziantep/` | Dijital Dönüşüm Süreçleri — Gaziantep | Tardigrad Software | Dijital dönüşüm hizmeti Gaziantep için: Kağıt ve tabloda yaşayan işleri ölçülebilir sistemlere çevirir — Güneydoğu Anadolu bölgesi. İl/ilçe sayfa ailesi. |
| `/hizmet/dijital-donusum/istanbul/` | Dijital Dönüşüm Süreçleri — İstanbul | Tardigrad Software | Dijital dönüşüm hizmeti İstanbul için: Kağıt ve tabloda yaşayan işleri ölçülebilir sistemlere çevirir — Marmara bölgesi. İl/ilçe sayfa ailesi ve ölçüm planı. |
| `/hizmet/dijital-donusum/izmir/` | Dijital Dönüşüm Süreçleri — İzmir | Tardigrad Software | Dijital dönüşüm hizmeti İzmir için: Kağıt ve tabloda yaşayan işleri ölçülebilir sistemlere çevirir — Ege bölgesi. İl/ilçe sayfa ailesi ve ölçüm planı dâhil. |
| `/hizmet/dijital-donusum/kayseri/` | Dijital Dönüşüm Süreçleri — Kayseri | Tardigrad Software | Dijital dönüşüm hizmeti Kayseri için: Kağıt ve tabloda yaşayan işleri ölçülebilir sistemlere çevirir — İç Anadolu bölgesi. İl/ilçe sayfa ailesi ve ölçüm. |
| `/hizmet/dijital-donusum/kocaeli/` | Dijital Dönüşüm Süreçleri — Kocaeli | Tardigrad Software | Dijital dönüşüm hizmeti Kocaeli için: Kağıt ve tabloda yaşayan işleri ölçülebilir sistemlere çevirir — Marmara bölgesi. İl/ilçe sayfa ailesi ve ölçüm planı. |
| `/hizmet/dijital-donusum/konya/` | Dijital Dönüşüm Süreçleri — Konya | Tardigrad Software | Dijital dönüşüm hizmeti Konya için: Kağıt ve tabloda yaşayan işleri ölçülebilir sistemlere çevirir — İç Anadolu bölgesi. İl/ilçe sayfa ailesi ve ölçüm planı. |
| `/hizmet/dijital-otomasyon/adana/` | Dijital Otomasyon — Adana | Tardigrad Software | Dijital otomasyon hizmeti Adana için: Aynı veriyi üçüncü kez girmeyi bıraktıran süreç otomasyonu — Akdeniz bölgesi. İl/ilçe sayfa ailesi ve ölçüm planı dâhil. |
| `/hizmet/dijital-otomasyon/ankara/` | Dijital Otomasyon — Ankara | Tardigrad Software | Dijital otomasyon hizmeti Ankara için: Aynı veriyi üçüncü kez girmeyi bıraktıran süreç otomasyonu — İç Anadolu bölgesi. İl/ilçe sayfa ailesi ve ölçüm planı. |
| `/hizmet/dijital-otomasyon/antalya/` | Dijital Otomasyon — Antalya | Tardigrad Software | Dijital otomasyon hizmeti Antalya için: Aynı veriyi üçüncü kez girmeyi bıraktıran süreç otomasyonu — Akdeniz bölgesi. İl/ilçe sayfa ailesi ve ölçüm planı. |
| `/hizmet/dijital-otomasyon/bursa/` | Dijital Otomasyon — Bursa | Tardigrad Software | Dijital otomasyon hizmeti Bursa için: Aynı veriyi üçüncü kez girmeyi bıraktıran süreç otomasyonu — Marmara bölgesi. İl/ilçe sayfa ailesi ve ölçüm planı dâhil. |
| `/hizmet/dijital-otomasyon/gaziantep/` | Dijital Otomasyon — Gaziantep | Tardigrad Software | Dijital otomasyon hizmeti Gaziantep için: Aynı veriyi üçüncü kez girmeyi bıraktıran süreç otomasyonu — Güneydoğu Anadolu bölgesi. İl/ilçe sayfa ailesi. |
| `/hizmet/dijital-otomasyon/istanbul/` | Dijital Otomasyon — İstanbul | Tardigrad Software | Dijital otomasyon hizmeti İstanbul için: Aynı veriyi üçüncü kez girmeyi bıraktıran süreç otomasyonu — Marmara bölgesi. İl/ilçe sayfa ailesi ve ölçüm planı. |
| `/hizmet/dijital-otomasyon/izmir/` | Dijital Otomasyon — İzmir | Tardigrad Software | Dijital otomasyon hizmeti İzmir için: Aynı veriyi üçüncü kez girmeyi bıraktıran süreç otomasyonu — Ege bölgesi. İl/ilçe sayfa ailesi ve ölçüm planı dâhil. |
| `/hizmet/dijital-otomasyon/kayseri/` | Dijital Otomasyon — Kayseri | Tardigrad Software | Dijital otomasyon hizmeti Kayseri için: Aynı veriyi üçüncü kez girmeyi bıraktıran süreç otomasyonu — İç Anadolu bölgesi. İl/ilçe sayfa ailesi ve ölçüm planı. |
| `/hizmet/dijital-otomasyon/kocaeli/` | Dijital Otomasyon — Kocaeli | Tardigrad Software | Dijital otomasyon hizmeti Kocaeli için: Aynı veriyi üçüncü kez girmeyi bıraktıran süreç otomasyonu — Marmara bölgesi. İl/ilçe sayfa ailesi ve ölçüm planı. |
| `/hizmet/dijital-otomasyon/konya/` | Dijital Otomasyon — Konya | Tardigrad Software | Dijital otomasyon hizmeti Konya için: Aynı veriyi üçüncü kez girmeyi bıraktıran süreç otomasyonu — İç Anadolu bölgesi. İl/ilçe sayfa ailesi ve ölçüm planı. |
| `/hizmet/domain-dns-yonetimi/adana/` | Domain / DNS Yönetimi — Adana | Tardigrad Software | DNS yönetimi hizmeti Adana için: Kayıtların, sürelerin ve sahipliğin belgelendiği güvenli DNS yönetimi — Akdeniz bölgesi. İl/ilçe sayfa ailesi ve ölçüm. |
| `/hizmet/domain-dns-yonetimi/ankara/` | Domain / DNS Yönetimi — Ankara | Tardigrad Software | DNS yönetimi hizmeti Ankara için: Kayıtların, sürelerin ve sahipliğin belgelendiği güvenli DNS yönetimi — İç Anadolu bölgesi. İl/ilçe sayfa ailesi ve ölçüm. |
| `/hizmet/domain-dns-yonetimi/antalya/` | Domain / DNS Yönetimi — Antalya | Tardigrad Software | DNS yönetimi hizmeti Antalya için: Kayıtların, sürelerin ve sahipliğin belgelendiği güvenli DNS yönetimi — Akdeniz bölgesi. İl/ilçe sayfa ailesi ve ölçüm. |
| `/hizmet/domain-dns-yonetimi/bursa/` | Domain / DNS Yönetimi — Bursa | Tardigrad Software | DNS yönetimi hizmeti Bursa için: Kayıtların, sürelerin ve sahipliğin belgelendiği güvenli DNS yönetimi — Marmara bölgesi. İl/ilçe sayfa ailesi ve ölçüm. |
| `/hizmet/domain-dns-yonetimi/gaziantep/` | Domain / DNS Yönetimi — Gaziantep | Tardigrad Software | DNS yönetimi hizmeti Gaziantep için: Kayıtların, sürelerin ve sahipliğin belgelendiği güvenli DNS yönetimi — Güneydoğu Anadolu bölgesi. İl/ilçe sayfa ailesi. |
| `/hizmet/domain-dns-yonetimi/istanbul/` | Domain / DNS Yönetimi — İstanbul | Tardigrad Software | DNS yönetimi hizmeti İstanbul için: Kayıtların, sürelerin ve sahipliğin belgelendiği güvenli DNS yönetimi — Marmara bölgesi. İl/ilçe sayfa ailesi ve ölçüm. |
| `/hizmet/domain-dns-yonetimi/izmir/` | Domain / DNS Yönetimi — İzmir | Tardigrad Software | DNS yönetimi hizmeti İzmir için: Kayıtların, sürelerin ve sahipliğin belgelendiği güvenli DNS yönetimi — Ege bölgesi. İl/ilçe sayfa ailesi ve ölçüm planı. |
| `/hizmet/domain-dns-yonetimi/kayseri/` | Domain / DNS Yönetimi — Kayseri | Tardigrad Software | DNS yönetimi hizmeti Kayseri için: Kayıtların, sürelerin ve sahipliğin belgelendiği güvenli DNS yönetimi — İç Anadolu bölgesi. İl/ilçe sayfa ailesi ve ölçüm. |
| `/hizmet/domain-dns-yonetimi/kocaeli/` | Domain / DNS Yönetimi — Kocaeli | Tardigrad Software | DNS yönetimi hizmeti Kocaeli için: Kayıtların, sürelerin ve sahipliğin belgelendiği güvenli DNS yönetimi — Marmara bölgesi. İl/ilçe sayfa ailesi ve ölçüm. |
| `/hizmet/domain-dns-yonetimi/konya/` | Domain / DNS Yönetimi — Konya | Tardigrad Software | DNS yönetimi hizmeti Konya için: Kayıtların, sürelerin ve sahipliğin belgelendiği güvenli DNS yönetimi — İç Anadolu bölgesi. İl/ilçe sayfa ailesi ve ölçüm. |
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
| `/hizmet/form-basvuru-sistemi/adana/` | Form / Başvuru Sistemi — Adana | Tardigrad Software | Başvuru formu sistemi hizmeti Adana için: Başvuruyu toplamakla kalmayıp değerlendirmeye kadar taşıyan sistem — Akdeniz bölgesi. İl/ilçe sayfa ailesi. |
| `/hizmet/form-basvuru-sistemi/ankara/` | Form / Başvuru Sistemi — Ankara | Tardigrad Software | Başvuru formu sistemi hizmeti Ankara için: Başvuruyu toplamakla kalmayıp değerlendirmeye kadar taşıyan sistem — İç Anadolu bölgesi. İl/ilçe sayfa ailesi. |
| `/hizmet/form-basvuru-sistemi/antalya/` | Form / Başvuru Sistemi — Antalya | Tardigrad Software | Başvuru formu sistemi hizmeti Antalya için: Başvuruyu toplamakla kalmayıp değerlendirmeye kadar taşıyan sistem — Akdeniz bölgesi. İl/ilçe sayfa ailesi. |
| `/hizmet/form-basvuru-sistemi/bursa/` | Form / Başvuru Sistemi — Bursa | Tardigrad Software | Başvuru formu sistemi hizmeti Bursa için: Başvuruyu toplamakla kalmayıp değerlendirmeye kadar taşıyan sistem — Marmara bölgesi. İl/ilçe sayfa ailesi. |
| `/hizmet/form-basvuru-sistemi/gaziantep/` | Form / Başvuru Sistemi — Gaziantep | Tardigrad Software | Başvuru formu sistemi hizmeti Gaziantep için: Başvuruyu toplamakla kalmayıp değerlendirmeye kadar taşıyan sistem — Güneydoğu Anadolu bölgesi. İl/ilçe sayfa. |
| `/hizmet/form-basvuru-sistemi/istanbul/` | Form / Başvuru Sistemi — İstanbul | Tardigrad Software | Başvuru formu sistemi hizmeti İstanbul için: Başvuruyu toplamakla kalmayıp değerlendirmeye kadar taşıyan sistem — Marmara bölgesi. İl/ilçe sayfa ailesi. |
| `/hizmet/form-basvuru-sistemi/izmir/` | Form / Başvuru Sistemi — İzmir | Tardigrad Software | Başvuru formu sistemi hizmeti İzmir için: Başvuruyu toplamakla kalmayıp değerlendirmeye kadar taşıyan sistem — Ege bölgesi. İl/ilçe sayfa ailesi ve ölçüm. |
| `/hizmet/form-basvuru-sistemi/kayseri/` | Form / Başvuru Sistemi — Kayseri | Tardigrad Software | Başvuru formu sistemi hizmeti Kayseri için: Başvuruyu toplamakla kalmayıp değerlendirmeye kadar taşıyan sistem — İç Anadolu bölgesi. İl/ilçe sayfa ailesi. |
| `/hizmet/form-basvuru-sistemi/kocaeli/` | Form / Başvuru Sistemi — Kocaeli | Tardigrad Software | Başvuru formu sistemi hizmeti Kocaeli için: Başvuruyu toplamakla kalmayıp değerlendirmeye kadar taşıyan sistem — Marmara bölgesi. İl/ilçe sayfa ailesi. |
| `/hizmet/form-basvuru-sistemi/konya/` | Form / Başvuru Sistemi — Konya | Tardigrad Software | Başvuru formu sistemi hizmeti Konya için: Başvuruyu toplamakla kalmayıp değerlendirmeye kadar taşıyan sistem — İç Anadolu bölgesi. İl/ilçe sayfa ailesi. |
| `/hizmet/google-search-console-kurulumu/adana/` | Google Search Console Kurulumu — Adana | Tardigrad Software | Google Search Console hizmeti Adana için: GSC'yi rapor aracı değil, aksiyon kaynağı olarak kuran kurulum — Akdeniz bölgesi. İl/ilçe sayfa ailesi ve ölçüm. |
| `/hizmet/google-search-console-kurulumu/ankara/` | Google Search Console Kurulumu — Ankara | Tardigrad Software | Google Search Console hizmeti Ankara için: GSC'yi rapor aracı değil, aksiyon kaynağı olarak kuran kurulum — İç Anadolu bölgesi. İl/ilçe sayfa ailesi. |
| `/hizmet/google-search-console-kurulumu/antalya/` | Google Search Console Kurulumu — Antalya | Google Search Console hizmeti Antalya için: GSC'yi rapor aracı değil, aksiyon kaynağı olarak kuran kurulum — Akdeniz bölgesi. İl/ilçe sayfa ailesi ve ölçüm. |
| `/hizmet/google-search-console-kurulumu/bursa/` | Google Search Console Kurulumu — Bursa | Tardigrad Software | Google Search Console hizmeti Bursa için: GSC'yi rapor aracı değil, aksiyon kaynağı olarak kuran kurulum — Marmara bölgesi. İl/ilçe sayfa ailesi ve ölçüm. |
| `/hizmet/google-search-console-kurulumu/gaziantep/` | Google Search Console Kurulumu — Gaziantep | Google Search Console hizmeti Gaziantep için: GSC'yi rapor aracı değil, aksiyon kaynağı olarak kuran kurulum — Güneydoğu Anadolu bölgesi. İl/ilçe sayfa. |
| `/hizmet/google-search-console-kurulumu/istanbul/` | Google Search Console Kurulumu — İstanbul | Google Search Console hizmeti İstanbul için: GSC'yi rapor aracı değil, aksiyon kaynağı olarak kuran kurulum — Marmara bölgesi. İl/ilçe sayfa ailesi ve ölçüm. |
| `/hizmet/google-search-console-kurulumu/izmir/` | Google Search Console Kurulumu — İzmir | Tardigrad Software | Google Search Console hizmeti İzmir için: GSC'yi rapor aracı değil, aksiyon kaynağı olarak kuran kurulum — Ege bölgesi. İl/ilçe sayfa ailesi ve ölçüm planı. |
| `/hizmet/google-search-console-kurulumu/kayseri/` | Google Search Console Kurulumu — Kayseri | Google Search Console hizmeti Kayseri için: GSC'yi rapor aracı değil, aksiyon kaynağı olarak kuran kurulum — İç Anadolu bölgesi. İl/ilçe sayfa ailesi. |
| `/hizmet/google-search-console-kurulumu/kocaeli/` | Google Search Console Kurulumu — Kocaeli | Google Search Console hizmeti Kocaeli için: GSC'yi rapor aracı değil, aksiyon kaynağı olarak kuran kurulum — Marmara bölgesi. İl/ilçe sayfa ailesi ve ölçüm. |
| `/hizmet/google-search-console-kurulumu/konya/` | Google Search Console Kurulumu — Konya | Tardigrad Software | Google Search Console hizmeti Konya için: GSC'yi rapor aracı değil, aksiyon kaynağı olarak kuran kurulum — İç Anadolu bölgesi. İl/ilçe sayfa ailesi ve ölçüm. |
| `/hizmet/hosting-yedekleme/adana/` | Hosting / Yedekleme — Adana | Tardigrad Software | Web hosting hizmeti Adana için: Yayınlama, yedekleme ve geri yükleme tatbikatını birlikte kurar — Akdeniz bölgesi. İl/ilçe sayfa ailesi ve ölçüm planı dâhil. |
| `/hizmet/hosting-yedekleme/ankara/` | Hosting / Yedekleme — Ankara | Tardigrad Software | Web hosting hizmeti Ankara için: Yayınlama, yedekleme ve geri yükleme tatbikatını birlikte kurar — İç Anadolu bölgesi. İl/ilçe sayfa ailesi ve ölçüm planı. |
| `/hizmet/hosting-yedekleme/antalya/` | Hosting / Yedekleme — Antalya | Tardigrad Software | Web hosting hizmeti Antalya için: Yayınlama, yedekleme ve geri yükleme tatbikatını birlikte kurar — Akdeniz bölgesi. İl/ilçe sayfa ailesi ve ölçüm planı. |
| `/hizmet/hosting-yedekleme/bursa/` | Hosting / Yedekleme — Bursa | Tardigrad Software | Web hosting hizmeti Bursa için: Yayınlama, yedekleme ve geri yükleme tatbikatını birlikte kurar — Marmara bölgesi. İl/ilçe sayfa ailesi ve ölçüm planı dâhil. |
| `/hizmet/hosting-yedekleme/gaziantep/` | Hosting / Yedekleme — Gaziantep | Tardigrad Software | Web hosting hizmeti Gaziantep için: Yayınlama, yedekleme ve geri yükleme tatbikatını birlikte kurar — Güneydoğu Anadolu bölgesi. İl/ilçe sayfa ailesi. |
| `/hizmet/hosting-yedekleme/istanbul/` | Hosting / Yedekleme — İstanbul | Tardigrad Software | Web hosting hizmeti İstanbul için: Yayınlama, yedekleme ve geri yükleme tatbikatını birlikte kurar — Marmara bölgesi. İl/ilçe sayfa ailesi ve ölçüm planı. |
| `/hizmet/hosting-yedekleme/izmir/` | Hosting / Yedekleme — İzmir | Tardigrad Software | Web hosting hizmeti İzmir için: Yayınlama, yedekleme ve geri yükleme tatbikatını birlikte kurar — Ege bölgesi. İl/ilçe sayfa ailesi ve ölçüm planı dâhil. |
| `/hizmet/hosting-yedekleme/kayseri/` | Hosting / Yedekleme — Kayseri | Tardigrad Software | Web hosting hizmeti Kayseri için: Yayınlama, yedekleme ve geri yükleme tatbikatını birlikte kurar — İç Anadolu bölgesi. İl/ilçe sayfa ailesi ve ölçüm planı. |
| `/hizmet/hosting-yedekleme/kocaeli/` | Hosting / Yedekleme — Kocaeli | Tardigrad Software | Web hosting hizmeti Kocaeli için: Yayınlama, yedekleme ve geri yükleme tatbikatını birlikte kurar — Marmara bölgesi. İl/ilçe sayfa ailesi ve ölçüm planı. |
| `/hizmet/hosting-yedekleme/konya/` | Hosting / Yedekleme — Konya | Tardigrad Software | Web hosting hizmeti Konya için: Yayınlama, yedekleme ve geri yükleme tatbikatını birlikte kurar — İç Anadolu bölgesi. İl/ilçe sayfa ailesi ve ölçüm planı. |
| `/hizmet/is-takip-sistemi/adana/` | İş Takip Sistemi — Adana | Tardigrad Software | İş takip sistemi hizmeti Adana için: Görevin kimde ve hangi aşamada olduğunu net gösteren takip paneli — Akdeniz bölgesi. İl/ilçe sayfa ailesi ve ölçüm. |
| `/hizmet/is-takip-sistemi/ankara/` | İş Takip Sistemi — Ankara | Tardigrad Software | İş takip sistemi hizmeti Ankara için: Görevin kimde ve hangi aşamada olduğunu net gösteren takip paneli — İç Anadolu bölgesi. İl/ilçe sayfa ailesi ve ölçüm. |
| `/hizmet/is-takip-sistemi/antalya/` | İş Takip Sistemi — Antalya | Tardigrad Software | İş takip sistemi hizmeti Antalya için: Görevin kimde ve hangi aşamada olduğunu net gösteren takip paneli — Akdeniz bölgesi. İl/ilçe sayfa ailesi ve ölçüm. |
| `/hizmet/is-takip-sistemi/bursa/` | İş Takip Sistemi — Bursa | Tardigrad Software | İş takip sistemi hizmeti Bursa için: Görevin kimde ve hangi aşamada olduğunu net gösteren takip paneli — Marmara bölgesi. İl/ilçe sayfa ailesi ve ölçüm. |
| `/hizmet/is-takip-sistemi/gaziantep/` | İş Takip Sistemi — Gaziantep | Tardigrad Software | İş takip sistemi hizmeti Gaziantep için: Görevin kimde ve hangi aşamada olduğunu net gösteren takip paneli — Güneydoğu Anadolu bölgesi. İl/ilçe sayfa ailesi. |
| `/hizmet/is-takip-sistemi/istanbul/` | İş Takip Sistemi — İstanbul | Tardigrad Software | İş takip sistemi hizmeti İstanbul için: Görevin kimde ve hangi aşamada olduğunu net gösteren takip paneli — Marmara bölgesi. İl/ilçe sayfa ailesi ve ölçüm. |
| `/hizmet/is-takip-sistemi/izmir/` | İş Takip Sistemi — İzmir | Tardigrad Software | İş takip sistemi hizmeti İzmir için: Görevin kimde ve hangi aşamada olduğunu net gösteren takip paneli — Ege bölgesi. İl/ilçe sayfa ailesi ve ölçüm planı. |
| `/hizmet/is-takip-sistemi/kayseri/` | İş Takip Sistemi — Kayseri | Tardigrad Software | İş takip sistemi hizmeti Kayseri için: Görevin kimde ve hangi aşamada olduğunu net gösteren takip paneli — İç Anadolu bölgesi. İl/ilçe sayfa ailesi ve ölçüm. |
| `/hizmet/is-takip-sistemi/kocaeli/` | İş Takip Sistemi — Kocaeli | Tardigrad Software | İş takip sistemi hizmeti Kocaeli için: Görevin kimde ve hangi aşamada olduğunu net gösteren takip paneli — Marmara bölgesi. İl/ilçe sayfa ailesi ve ölçüm. |
| `/hizmet/is-takip-sistemi/konya/` | İş Takip Sistemi — Konya | Tardigrad Software | İş takip sistemi hizmeti Konya için: Görevin kimde ve hangi aşamada olduğunu net gösteren takip paneli — İç Anadolu bölgesi. İl/ilçe sayfa ailesi ve ölçüm. |
| `/hizmet/kurumsal-email/adana/` | Kurumsal E-Posta — Adana | Tardigrad Software | Kurumsal e-posta hizmeti Adana için: Adres, güvenlik kayıtları ve kullanım kuralları net e-posta sistemi — Akdeniz bölgesi. İl/ilçe sayfa ailesi ve ölçüm. |
| `/hizmet/kurumsal-email/ankara/` | Kurumsal E-Posta — Ankara | Tardigrad Software | Kurumsal e-posta hizmeti Ankara için: Adres, güvenlik kayıtları ve kullanım kuralları net e-posta sistemi — İç Anadolu bölgesi. İl/ilçe sayfa ailesi. |
| `/hizmet/kurumsal-email/antalya/` | Kurumsal E-Posta — Antalya | Tardigrad Software | Kurumsal e-posta hizmeti Antalya için: Adres, güvenlik kayıtları ve kullanım kuralları net e-posta sistemi — Akdeniz bölgesi. İl/ilçe sayfa ailesi ve ölçüm. |
| `/hizmet/kurumsal-email/bursa/` | Kurumsal E-Posta — Bursa | Tardigrad Software | Kurumsal e-posta hizmeti Bursa için: Adres, güvenlik kayıtları ve kullanım kuralları net e-posta sistemi — Marmara bölgesi. İl/ilçe sayfa ailesi ve ölçüm. |
| `/hizmet/kurumsal-email/gaziantep/` | Kurumsal E-Posta — Gaziantep | Tardigrad Software | Kurumsal e-posta hizmeti Gaziantep için: Adres, güvenlik kayıtları ve kullanım kuralları net e-posta sistemi — Güneydoğu Anadolu bölgesi. İl/ilçe sayfa. |
| `/hizmet/kurumsal-email/istanbul/` | Kurumsal E-Posta — İstanbul | Tardigrad Software | Kurumsal e-posta hizmeti İstanbul için: Adres, güvenlik kayıtları ve kullanım kuralları net e-posta sistemi — Marmara bölgesi. İl/ilçe sayfa ailesi ve ölçüm. |
| `/hizmet/kurumsal-email/izmir/` | Kurumsal E-Posta — İzmir | Tardigrad Software | Kurumsal e-posta hizmeti İzmir için: Adres, güvenlik kayıtları ve kullanım kuralları net e-posta sistemi — Ege bölgesi. İl/ilçe sayfa ailesi ve ölçüm planı. |
| `/hizmet/kurumsal-email/kayseri/` | Kurumsal E-Posta — Kayseri | Tardigrad Software | Kurumsal e-posta hizmeti Kayseri için: Adres, güvenlik kayıtları ve kullanım kuralları net e-posta sistemi — İç Anadolu bölgesi. İl/ilçe sayfa ailesi. |
| `/hizmet/kurumsal-email/kocaeli/` | Kurumsal E-Posta — Kocaeli | Tardigrad Software | Kurumsal e-posta hizmeti Kocaeli için: Adres, güvenlik kayıtları ve kullanım kuralları net e-posta sistemi — Marmara bölgesi. İl/ilçe sayfa ailesi ve ölçüm. |
| `/hizmet/kurumsal-email/konya/` | Kurumsal E-Posta — Konya | Tardigrad Software | Kurumsal e-posta hizmeti Konya için: Adres, güvenlik kayıtları ve kullanım kuralları net e-posta sistemi — İç Anadolu bölgesi. İl/ilçe sayfa ailesi ve ölçüm. |
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
| `/hizmet/lokal-seo/adana/` | Lokal SEO — Adana | Tardigrad Software | Lokal SEO hizmeti Adana için: Şehir ve ilçe bazlı sayfa ailesiyle yerel aramalarda öne çıkma — Akdeniz bölgesi. İl/ilçe sayfa ailesi ve ölçüm planı dâhil. |
| `/hizmet/lokal-seo/ankara/` | Lokal SEO — Ankara | Tardigrad Software | Lokal SEO hizmeti Ankara için: Şehir ve ilçe bazlı sayfa ailesiyle yerel aramalarda öne çıkma — İç Anadolu bölgesi. İl/ilçe sayfa ailesi ve ölçüm planı dâhil. |
| `/hizmet/lokal-seo/antalya/` | Lokal SEO — Antalya | Tardigrad Software | Lokal SEO hizmeti Antalya için: Şehir ve ilçe bazlı sayfa ailesiyle yerel aramalarda öne çıkma — Akdeniz bölgesi. İl/ilçe sayfa ailesi ve ölçüm planı dâhil. |
| `/hizmet/lokal-seo/bursa/` | Lokal SEO — Bursa | Tardigrad Software | Lokal SEO hizmeti Bursa için: Şehir ve ilçe bazlı sayfa ailesiyle yerel aramalarda öne çıkma — Marmara bölgesi. İl/ilçe sayfa ailesi ve ölçüm planı dâhil. |
| `/hizmet/lokal-seo/gaziantep/` | Lokal SEO — Gaziantep | Tardigrad Software | Lokal SEO hizmeti Gaziantep için: Şehir ve ilçe bazlı sayfa ailesiyle yerel aramalarda öne çıkma — Güneydoğu Anadolu bölgesi. İl/ilçe sayfa ailesi ve ölçüm. |
| `/hizmet/lokal-seo/istanbul/` | Lokal SEO — İstanbul | Tardigrad Software | Lokal SEO hizmeti İstanbul için: Şehir ve ilçe bazlı sayfa ailesiyle yerel aramalarda öne çıkma — Marmara bölgesi. İl/ilçe sayfa ailesi ve ölçüm planı dâhil. |
| `/hizmet/lokal-seo/izmir/` | Lokal SEO — İzmir | Tardigrad Software | Lokal SEO hizmeti İzmir için: Şehir ve ilçe bazlı sayfa ailesiyle yerel aramalarda öne çıkma — Ege bölgesi. İl/ilçe sayfa ailesi ve ölçüm planı dâhil. |
| `/hizmet/lokal-seo/kayseri/` | Lokal SEO — Kayseri | Tardigrad Software | Lokal SEO hizmeti Kayseri için: Şehir ve ilçe bazlı sayfa ailesiyle yerel aramalarda öne çıkma — İç Anadolu bölgesi. İl/ilçe sayfa ailesi ve ölçüm planı. |
| `/hizmet/lokal-seo/kocaeli/` | Lokal SEO — Kocaeli | Tardigrad Software | Lokal SEO hizmeti Kocaeli için: Şehir ve ilçe bazlı sayfa ailesiyle yerel aramalarda öne çıkma — Marmara bölgesi. İl/ilçe sayfa ailesi ve ölçüm planı dâhil. |
| `/hizmet/lokal-seo/konya/` | Lokal SEO — Konya | Tardigrad Software | Lokal SEO hizmeti Konya için: Şehir ve ilçe bazlı sayfa ailesiyle yerel aramalarda öne çıkma — İç Anadolu bölgesi. İl/ilçe sayfa ailesi ve ölçüm planı dâhil. |
| `/hizmet/multi-tenant-uygulama/adana/` | Multi-Tenant Uygulama — Adana | Tardigrad Software | Multi-tenant hizmeti Adana için: Birden çok firmayı tek altyapıda, veri karışmadan çalıştıran mimari — Akdeniz bölgesi. İl/ilçe sayfa ailesi ve ölçüm planı. |
| `/hizmet/multi-tenant-uygulama/ankara/` | Multi-Tenant Uygulama — Ankara | Tardigrad Software | Multi-tenant hizmeti Ankara için: Birden çok firmayı tek altyapıda, veri karışmadan çalıştıran mimari — İç Anadolu bölgesi. İl/ilçe sayfa ailesi ve ölçüm. |
| `/hizmet/multi-tenant-uygulama/antalya/` | Multi-Tenant Uygulama — Antalya | Tardigrad Software | Multi-tenant hizmeti Antalya için: Birden çok firmayı tek altyapıda, veri karışmadan çalıştıran mimari — Akdeniz bölgesi. İl/ilçe sayfa ailesi ve ölçüm. |
| `/hizmet/multi-tenant-uygulama/bursa/` | Multi-Tenant Uygulama — Bursa | Tardigrad Software | Multi-tenant hizmeti Bursa için: Birden çok firmayı tek altyapıda, veri karışmadan çalıştıran mimari — Marmara bölgesi. İl/ilçe sayfa ailesi ve ölçüm planı. |
| `/hizmet/multi-tenant-uygulama/gaziantep/` | Multi-Tenant Uygulama — Gaziantep | Tardigrad Software | Multi-tenant hizmeti Gaziantep için: Birden çok firmayı tek altyapıda, veri karışmadan çalıştıran mimari — Güneydoğu Anadolu bölgesi. İl/ilçe sayfa ailesi. |
| `/hizmet/multi-tenant-uygulama/istanbul/` | Multi-Tenant Uygulama — İstanbul | Tardigrad Software | Multi-tenant hizmeti İstanbul için: Birden çok firmayı tek altyapıda, veri karışmadan çalıştıran mimari — Marmara bölgesi. İl/ilçe sayfa ailesi ve ölçüm. |
| `/hizmet/multi-tenant-uygulama/izmir/` | Multi-Tenant Uygulama — İzmir | Tardigrad Software | Multi-tenant hizmeti İzmir için: Birden çok firmayı tek altyapıda, veri karışmadan çalıştıran mimari — Ege bölgesi. İl/ilçe sayfa ailesi ve ölçüm planı dâhil. |
| `/hizmet/multi-tenant-uygulama/kayseri/` | Multi-Tenant Uygulama — Kayseri | Tardigrad Software | Multi-tenant hizmeti Kayseri için: Birden çok firmayı tek altyapıda, veri karışmadan çalıştıran mimari — İç Anadolu bölgesi. İl/ilçe sayfa ailesi ve ölçüm. |
| `/hizmet/multi-tenant-uygulama/kocaeli/` | Multi-Tenant Uygulama — Kocaeli | Tardigrad Software | Multi-tenant hizmeti Kocaeli için: Birden çok firmayı tek altyapıda, veri karışmadan çalıştıran mimari — Marmara bölgesi. İl/ilçe sayfa ailesi ve ölçüm. |
| `/hizmet/multi-tenant-uygulama/konya/` | Multi-Tenant Uygulama — Konya | Tardigrad Software | Multi-tenant hizmeti Konya için: Birden çok firmayı tek altyapıda, veri karışmadan çalıştıran mimari — İç Anadolu bölgesi. İl/ilçe sayfa ailesi ve ölçüm. |
| `/hizmet/musteri-paneli/adana/` | Müşteri Paneli — Adana | Tardigrad Software | Müşteri paneli hizmeti Adana için: Müşterinizin kendi işini kendisinin gördüğü online portal — Akdeniz bölgesi. İl/ilçe sayfa ailesi ve ölçüm planı dâhil. |
| `/hizmet/musteri-paneli/ankara/` | Müşteri Paneli — Ankara | Tardigrad Software | Müşteri paneli hizmeti Ankara için: Müşterinizin kendi işini kendisinin gördüğü online portal — İç Anadolu bölgesi. İl/ilçe sayfa ailesi ve ölçüm planı dâhil. |
| `/hizmet/musteri-paneli/antalya/` | Müşteri Paneli — Antalya | Tardigrad Software | Müşteri paneli hizmeti Antalya için: Müşterinizin kendi işini kendisinin gördüğü online portal — Akdeniz bölgesi. İl/ilçe sayfa ailesi ve ölçüm planı dâhil. |
| `/hizmet/musteri-paneli/bursa/` | Müşteri Paneli — Bursa | Tardigrad Software | Müşteri paneli hizmeti Bursa için: Müşterinizin kendi işini kendisinin gördüğü online portal — Marmara bölgesi. İl/ilçe sayfa ailesi ve ölçüm planı dâhil. |
| `/hizmet/musteri-paneli/gaziantep/` | Müşteri Paneli — Gaziantep | Tardigrad Software | Müşteri paneli hizmeti Gaziantep için: Müşterinizin kendi işini kendisinin gördüğü online portal — Güneydoğu Anadolu bölgesi. İl/ilçe sayfa ailesi ve ölçüm. |
| `/hizmet/musteri-paneli/istanbul/` | Müşteri Paneli — İstanbul | Tardigrad Software | Müşteri paneli hizmeti İstanbul için: Müşterinizin kendi işini kendisinin gördüğü online portal — Marmara bölgesi. İl/ilçe sayfa ailesi ve ölçüm planı dâhil. |
| `/hizmet/musteri-paneli/izmir/` | Müşteri Paneli — İzmir | Tardigrad Software | Müşteri paneli hizmeti İzmir için: Müşterinizin kendi işini kendisinin gördüğü online portal — Ege bölgesi. İl/ilçe sayfa ailesi ve ölçüm planı dâhil. |
| `/hizmet/musteri-paneli/kayseri/` | Müşteri Paneli — Kayseri | Tardigrad Software | Müşteri paneli hizmeti Kayseri için: Müşterinizin kendi işini kendisinin gördüğü online portal — İç Anadolu bölgesi. İl/ilçe sayfa ailesi ve ölçüm planı. |
| `/hizmet/musteri-paneli/kocaeli/` | Müşteri Paneli — Kocaeli | Tardigrad Software | Müşteri paneli hizmeti Kocaeli için: Müşterinizin kendi işini kendisinin gördüğü online portal — Marmara bölgesi. İl/ilçe sayfa ailesi ve ölçüm planı dâhil. |
| `/hizmet/musteri-paneli/konya/` | Müşteri Paneli — Konya | Tardigrad Software | Müşteri paneli hizmeti Konya için: Müşterinizin kendi işini kendisinin gördüğü online portal — İç Anadolu bölgesi. İl/ilçe sayfa ailesi ve ölçüm planı dâhil. |
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
| `/hizmet/mvp-startup-urunu/adana/` | MVP / Startup Ürünü — Adana | Tardigrad Software | MVP geliştirme hizmeti Adana için: Fikri ölçülebilir bir ürüne çeviren, gereksiz kapsamı kesen MVP sprinti — Akdeniz bölgesi. İl/ilçe sayfa ailesi ve ölçüm. |
| `/hizmet/mvp-startup-urunu/ankara/` | MVP / Startup Ürünü — Ankara | Tardigrad Software | MVP geliştirme hizmeti Ankara için: Fikri ölçülebilir bir ürüne çeviren, gereksiz kapsamı kesen MVP sprinti — İç Anadolu bölgesi. İl/ilçe sayfa ailesi. |
| `/hizmet/mvp-startup-urunu/antalya/` | MVP / Startup Ürünü — Antalya | Tardigrad Software | MVP geliştirme hizmeti Antalya için: Fikri ölçülebilir bir ürüne çeviren, gereksiz kapsamı kesen MVP sprinti — Akdeniz bölgesi. İl/ilçe sayfa ailesi. |
| `/hizmet/mvp-startup-urunu/bursa/` | MVP / Startup Ürünü — Bursa | Tardigrad Software | MVP geliştirme hizmeti Bursa için: Fikri ölçülebilir bir ürüne çeviren, gereksiz kapsamı kesen MVP sprinti — Marmara bölgesi. İl/ilçe sayfa ailesi ve ölçüm. |
| `/hizmet/mvp-startup-urunu/gaziantep/` | MVP / Startup Ürünü — Gaziantep | Tardigrad Software | MVP geliştirme hizmeti Gaziantep için: Fikri ölçülebilir bir ürüne çeviren, gereksiz kapsamı kesen MVP sprinti — Güneydoğu Anadolu bölgesi. İl/ilçe sayfa. |
| `/hizmet/mvp-startup-urunu/istanbul/` | MVP / Startup Ürünü — İstanbul | Tardigrad Software | MVP geliştirme hizmeti İstanbul için: Fikri ölçülebilir bir ürüne çeviren, gereksiz kapsamı kesen MVP sprinti — Marmara bölgesi. İl/ilçe sayfa ailesi. |
| `/hizmet/mvp-startup-urunu/izmir/` | MVP / Startup Ürünü — İzmir | Tardigrad Software | MVP geliştirme hizmeti İzmir için: Fikri ölçülebilir bir ürüne çeviren, gereksiz kapsamı kesen MVP sprinti — Ege bölgesi. İl/ilçe sayfa ailesi ve ölçüm. |
| `/hizmet/mvp-startup-urunu/kayseri/` | MVP / Startup Ürünü — Kayseri | Tardigrad Software | MVP geliştirme hizmeti Kayseri için: Fikri ölçülebilir bir ürüne çeviren, gereksiz kapsamı kesen MVP sprinti — İç Anadolu bölgesi. İl/ilçe sayfa ailesi. |
| `/hizmet/mvp-startup-urunu/kocaeli/` | MVP / Startup Ürünü — Kocaeli | Tardigrad Software | MVP geliştirme hizmeti Kocaeli için: Fikri ölçülebilir bir ürüne çeviren, gereksiz kapsamı kesen MVP sprinti — Marmara bölgesi. İl/ilçe sayfa ailesi. |
| `/hizmet/mvp-startup-urunu/konya/` | MVP / Startup Ürünü — Konya | Tardigrad Software | MVP geliştirme hizmeti Konya için: Fikri ölçülebilir bir ürüne çeviren, gereksiz kapsamı kesen MVP sprinti — İç Anadolu bölgesi. İl/ilçe sayfa ailesi. |
| `/hizmet/odeme-whatsapp-crm-entegrasyonu/adana/` | Ödeme / WhatsApp / CRM Entegrasyonu — Adana | CRM entegrasyonu hizmeti Adana için: Sohbeti, tahsilatı ve kaydı aynı akışta birleştiren entegrasyon — Akdeniz bölgesi. İl/ilçe sayfa ailesi ve ölçüm planı. |
| `/hizmet/odeme-whatsapp-crm-entegrasyonu/ankara/` | Ödeme / WhatsApp / CRM Entegrasyonu — Ankara | CRM entegrasyonu hizmeti Ankara için: Sohbeti, tahsilatı ve kaydı aynı akışta birleştiren entegrasyon — İç Anadolu bölgesi. İl/ilçe sayfa ailesi ve ölçüm. |
| `/hizmet/odeme-whatsapp-crm-entegrasyonu/antalya/` | Ödeme / WhatsApp / CRM Entegrasyonu — Antalya | CRM entegrasyonu hizmeti Antalya için: Sohbeti, tahsilatı ve kaydı aynı akışta birleştiren entegrasyon — Akdeniz bölgesi. İl/ilçe sayfa ailesi ve ölçüm. |
| `/hizmet/odeme-whatsapp-crm-entegrasyonu/bursa/` | Ödeme / WhatsApp / CRM Entegrasyonu — Bursa | CRM entegrasyonu hizmeti Bursa için: Sohbeti, tahsilatı ve kaydı aynı akışta birleştiren entegrasyon — Marmara bölgesi. İl/ilçe sayfa ailesi ve ölçüm planı. |
| `/hizmet/odeme-whatsapp-crm-entegrasyonu/gaziantep/` | Ödeme / WhatsApp / CRM Entegrasyonu — Gaziantep | CRM entegrasyonu hizmeti Gaziantep için: Sohbeti, tahsilatı ve kaydı aynı akışta birleştiren entegrasyon — Güneydoğu Anadolu bölgesi. İl/ilçe sayfa ailesi. |
| `/hizmet/odeme-whatsapp-crm-entegrasyonu/istanbul/` | Ödeme / WhatsApp / CRM Entegrasyonu — İstanbul | CRM entegrasyonu hizmeti İstanbul için: Sohbeti, tahsilatı ve kaydı aynı akışta birleştiren entegrasyon — Marmara bölgesi. İl/ilçe sayfa ailesi ve ölçüm. |
| `/hizmet/odeme-whatsapp-crm-entegrasyonu/izmir/` | Ödeme / WhatsApp / CRM Entegrasyonu — İzmir | CRM entegrasyonu hizmeti İzmir için: Sohbeti, tahsilatı ve kaydı aynı akışta birleştiren entegrasyon — Ege bölgesi. İl/ilçe sayfa ailesi ve ölçüm planı dâhil. |
| `/hizmet/odeme-whatsapp-crm-entegrasyonu/kayseri/` | Ödeme / WhatsApp / CRM Entegrasyonu — Kayseri | CRM entegrasyonu hizmeti Kayseri için: Sohbeti, tahsilatı ve kaydı aynı akışta birleştiren entegrasyon — İç Anadolu bölgesi. İl/ilçe sayfa ailesi ve ölçüm. |
| `/hizmet/odeme-whatsapp-crm-entegrasyonu/kocaeli/` | Ödeme / WhatsApp / CRM Entegrasyonu — Kocaeli | CRM entegrasyonu hizmeti Kocaeli için: Sohbeti, tahsilatı ve kaydı aynı akışta birleştiren entegrasyon — Marmara bölgesi. İl/ilçe sayfa ailesi ve ölçüm. |
| `/hizmet/odeme-whatsapp-crm-entegrasyonu/konya/` | Ödeme / WhatsApp / CRM Entegrasyonu — Konya | CRM entegrasyonu hizmeti Konya için: Sohbeti, tahsilatı ve kaydı aynı akışta birleştiren entegrasyon — İç Anadolu bölgesi. İl/ilçe sayfa ailesi ve ölçüm. |
| `/hizmet/personel-kullanici-yonetimi/adana/` | Personel / Kullanıcı Yönetimi — Adana | Tardigrad Software | Personel yönetim sistemi hizmeti Adana için: Kimin neyi görebileceğini netleştiren rol bazlı kullanıcı yönetimi — Akdeniz bölgesi. İl/ilçe sayfa ailesi. |
| `/hizmet/personel-kullanici-yonetimi/ankara/` | Personel / Kullanıcı Yönetimi — Ankara | Tardigrad Software | Personel yönetim sistemi hizmeti Ankara için: Kimin neyi görebileceğini netleştiren rol bazlı kullanıcı yönetimi — İç Anadolu bölgesi. İl/ilçe sayfa ailesi. |
| `/hizmet/personel-kullanici-yonetimi/antalya/` | Personel / Kullanıcı Yönetimi — Antalya | Tardigrad Software | Personel yönetim sistemi hizmeti Antalya için: Kimin neyi görebileceğini netleştiren rol bazlı kullanıcı yönetimi — Akdeniz bölgesi. İl/ilçe sayfa ailesi. |
| `/hizmet/personel-kullanici-yonetimi/bursa/` | Personel / Kullanıcı Yönetimi — Bursa | Tardigrad Software | Personel yönetim sistemi hizmeti Bursa için: Kimin neyi görebileceğini netleştiren rol bazlı kullanıcı yönetimi — Marmara bölgesi. İl/ilçe sayfa ailesi. |
| `/hizmet/personel-kullanici-yonetimi/gaziantep/` | Personel / Kullanıcı Yönetimi — Gaziantep | Personel yönetim sistemi hizmeti Gaziantep için: Kimin neyi görebileceğini netleştiren rol bazlı kullanıcı yönetimi — Güneydoğu Anadolu bölgesi. İl/ilçe. |
| `/hizmet/personel-kullanici-yonetimi/istanbul/` | Personel / Kullanıcı Yönetimi — İstanbul | Personel yönetim sistemi hizmeti İstanbul için: Kimin neyi görebileceğini netleştiren rol bazlı kullanıcı yönetimi — Marmara bölgesi. İl/ilçe sayfa ailesi. |
| `/hizmet/personel-kullanici-yonetimi/izmir/` | Personel / Kullanıcı Yönetimi — İzmir | Tardigrad Software | Personel yönetim sistemi hizmeti İzmir için: Kimin neyi görebileceğini netleştiren rol bazlı kullanıcı yönetimi — Ege bölgesi. İl/ilçe sayfa ailesi ve ölçüm. |
| `/hizmet/personel-kullanici-yonetimi/kayseri/` | Personel / Kullanıcı Yönetimi — Kayseri | Tardigrad Software | Personel yönetim sistemi hizmeti Kayseri için: Kimin neyi görebileceğini netleştiren rol bazlı kullanıcı yönetimi — İç Anadolu bölgesi. İl/ilçe sayfa ailesi. |
| `/hizmet/personel-kullanici-yonetimi/kocaeli/` | Personel / Kullanıcı Yönetimi — Kocaeli | Tardigrad Software | Personel yönetim sistemi hizmeti Kocaeli için: Kimin neyi görebileceğini netleştiren rol bazlı kullanıcı yönetimi — Marmara bölgesi. İl/ilçe sayfa ailesi. |
| `/hizmet/personel-kullanici-yonetimi/konya/` | Personel / Kullanıcı Yönetimi — Konya | Tardigrad Software | Personel yönetim sistemi hizmeti Konya için: Kimin neyi görebileceğini netleştiren rol bazlı kullanıcı yönetimi — İç Anadolu bölgesi. İl/ilçe sayfa ailesi. |
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
| `/hizmet/raporlama-sistemi/adana/` | Raporlama Sistemi — Adana | Tardigrad Software | Raporlama sistemi hizmeti Adana için: Doğru veriyi, doğru kişiye, doğru sıklıkta ulaştıran rapor katmanı — Akdeniz bölgesi. İl/ilçe sayfa ailesi ve ölçüm. |
| `/hizmet/raporlama-sistemi/ankara/` | Raporlama Sistemi — Ankara | Tardigrad Software | Raporlama sistemi hizmeti Ankara için: Doğru veriyi, doğru kişiye, doğru sıklıkta ulaştıran rapor katmanı — İç Anadolu bölgesi. İl/ilçe sayfa ailesi. |
| `/hizmet/raporlama-sistemi/antalya/` | Raporlama Sistemi — Antalya | Tardigrad Software | Raporlama sistemi hizmeti Antalya için: Doğru veriyi, doğru kişiye, doğru sıklıkta ulaştıran rapor katmanı — Akdeniz bölgesi. İl/ilçe sayfa ailesi ve ölçüm. |
| `/hizmet/raporlama-sistemi/bursa/` | Raporlama Sistemi — Bursa | Tardigrad Software | Raporlama sistemi hizmeti Bursa için: Doğru veriyi, doğru kişiye, doğru sıklıkta ulaştıran rapor katmanı — Marmara bölgesi. İl/ilçe sayfa ailesi ve ölçüm. |
| `/hizmet/raporlama-sistemi/gaziantep/` | Raporlama Sistemi — Gaziantep | Tardigrad Software | Raporlama sistemi hizmeti Gaziantep için: Doğru veriyi, doğru kişiye, doğru sıklıkta ulaştıran rapor katmanı — Güneydoğu Anadolu bölgesi. İl/ilçe sayfa. |
| `/hizmet/raporlama-sistemi/istanbul/` | Raporlama Sistemi — İstanbul | Tardigrad Software | Raporlama sistemi hizmeti İstanbul için: Doğru veriyi, doğru kişiye, doğru sıklıkta ulaştıran rapor katmanı — Marmara bölgesi. İl/ilçe sayfa ailesi ve ölçüm. |
| `/hizmet/raporlama-sistemi/izmir/` | Raporlama Sistemi — İzmir | Tardigrad Software | Raporlama sistemi hizmeti İzmir için: Doğru veriyi, doğru kişiye, doğru sıklıkta ulaştıran rapor katmanı — Ege bölgesi. İl/ilçe sayfa ailesi ve ölçüm planı. |
| `/hizmet/raporlama-sistemi/kayseri/` | Raporlama Sistemi — Kayseri | Tardigrad Software | Raporlama sistemi hizmeti Kayseri için: Doğru veriyi, doğru kişiye, doğru sıklıkta ulaştıran rapor katmanı — İç Anadolu bölgesi. İl/ilçe sayfa ailesi. |
| `/hizmet/raporlama-sistemi/kocaeli/` | Raporlama Sistemi — Kocaeli | Tardigrad Software | Raporlama sistemi hizmeti Kocaeli için: Doğru veriyi, doğru kişiye, doğru sıklıkta ulaştıran rapor katmanı — Marmara bölgesi. İl/ilçe sayfa ailesi ve ölçüm. |
| `/hizmet/raporlama-sistemi/konya/` | Raporlama Sistemi — Konya | Tardigrad Software | Raporlama sistemi hizmeti Konya için: Doğru veriyi, doğru kişiye, doğru sıklıkta ulaştıran rapor katmanı — İç Anadolu bölgesi. İl/ilçe sayfa ailesi ve ölçüm. |
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
| `/hizmet/saas-platformu/adana/` | SaaS Platformu — Adana | Tardigrad Software | SaaS yazılım hizmeti Adana için: Abonelik, tenant ve fatura katmanı hazır, büyüyen platform altyapısı — Akdeniz bölgesi. İl/ilçe sayfa ailesi ve ölçüm planı. |
| `/hizmet/saas-platformu/ankara/` | SaaS Platformu — Ankara | Tardigrad Software | SaaS yazılım hizmeti Ankara için: Abonelik, tenant ve fatura katmanı hazır, büyüyen platform altyapısı — İç Anadolu bölgesi. İl/ilçe sayfa ailesi ve ölçüm. |
| `/hizmet/saas-platformu/antalya/` | SaaS Platformu — Antalya | Tardigrad Software | SaaS yazılım hizmeti Antalya için: Abonelik, tenant ve fatura katmanı hazır, büyüyen platform altyapısı — Akdeniz bölgesi. İl/ilçe sayfa ailesi ve ölçüm. |
| `/hizmet/saas-platformu/bursa/` | SaaS Platformu — Bursa | Tardigrad Software | SaaS yazılım hizmeti Bursa için: Abonelik, tenant ve fatura katmanı hazır, büyüyen platform altyapısı — Marmara bölgesi. İl/ilçe sayfa ailesi ve ölçüm planı. |
| `/hizmet/saas-platformu/gaziantep/` | SaaS Platformu — Gaziantep | Tardigrad Software | SaaS yazılım hizmeti Gaziantep için: Abonelik, tenant ve fatura katmanı hazır, büyüyen platform altyapısı — Güneydoğu Anadolu bölgesi. İl/ilçe sayfa ailesi. |
| `/hizmet/saas-platformu/istanbul/` | SaaS Platformu — İstanbul | Tardigrad Software | SaaS yazılım hizmeti İstanbul için: Abonelik, tenant ve fatura katmanı hazır, büyüyen platform altyapısı — Marmara bölgesi. İl/ilçe sayfa ailesi ve ölçüm. |
| `/hizmet/saas-platformu/izmir/` | SaaS Platformu — İzmir | Tardigrad Software | SaaS yazılım hizmeti İzmir için: Abonelik, tenant ve fatura katmanı hazır, büyüyen platform altyapısı — Ege bölgesi. İl/ilçe sayfa ailesi ve ölçüm planı. |
| `/hizmet/saas-platformu/kayseri/` | SaaS Platformu — Kayseri | Tardigrad Software | SaaS yazılım hizmeti Kayseri için: Abonelik, tenant ve fatura katmanı hazır, büyüyen platform altyapısı — İç Anadolu bölgesi. İl/ilçe sayfa ailesi ve ölçüm. |
| `/hizmet/saas-platformu/kocaeli/` | SaaS Platformu — Kocaeli | Tardigrad Software | SaaS yazılım hizmeti Kocaeli için: Abonelik, tenant ve fatura katmanı hazır, büyüyen platform altyapısı — Marmara bölgesi. İl/ilçe sayfa ailesi ve ölçüm. |
| `/hizmet/saas-platformu/konya/` | SaaS Platformu — Konya | Tardigrad Software | SaaS yazılım hizmeti Konya için: Abonelik, tenant ve fatura katmanı hazır, büyüyen platform altyapısı — İç Anadolu bölgesi. İl/ilçe sayfa ailesi ve ölçüm. |
| `/hizmet/schema-org-structured-data/adana/` | Schema.org / Structured Data — Adana | Tardigrad Software | Schema.org hizmeti Adana için: Google'a sitenizi doğru anlatan, doğrulanmış yapısal veri katmanı — Akdeniz bölgesi. İl/ilçe sayfa ailesi ve ölçüm planı dâhil. |
| `/hizmet/schema-org-structured-data/ankara/` | Schema.org / Structured Data — Ankara | Tardigrad Software | Schema.org hizmeti Ankara için: Google'a sitenizi doğru anlatan, doğrulanmış yapısal veri katmanı — İç Anadolu bölgesi. İl/ilçe sayfa ailesi ve ölçüm planı. |
| `/hizmet/schema-org-structured-data/antalya/` | Schema.org / Structured Data — Antalya | Tardigrad Software | Schema.org hizmeti Antalya için: Google'a sitenizi doğru anlatan, doğrulanmış yapısal veri katmanı — Akdeniz bölgesi. İl/ilçe sayfa ailesi ve ölçüm planı. |
| `/hizmet/schema-org-structured-data/bursa/` | Schema.org / Structured Data — Bursa | Tardigrad Software | Schema.org hizmeti Bursa için: Google'a sitenizi doğru anlatan, doğrulanmış yapısal veri katmanı — Marmara bölgesi. İl/ilçe sayfa ailesi ve ölçüm planı dâhil. |
| `/hizmet/schema-org-structured-data/gaziantep/` | Schema.org / Structured Data — Gaziantep | Schema.org hizmeti Gaziantep için: Google'a sitenizi doğru anlatan, doğrulanmış yapısal veri katmanı — Güneydoğu Anadolu bölgesi. İl/ilçe sayfa ailesi. |
| `/hizmet/schema-org-structured-data/istanbul/` | Schema.org / Structured Data — İstanbul | Tardigrad Software | Schema.org hizmeti İstanbul için: Google'a sitenizi doğru anlatan, doğrulanmış yapısal veri katmanı — Marmara bölgesi. İl/ilçe sayfa ailesi ve ölçüm planı. |
| `/hizmet/schema-org-structured-data/izmir/` | Schema.org / Structured Data — İzmir | Tardigrad Software | Schema.org hizmeti İzmir için: Google'a sitenizi doğru anlatan, doğrulanmış yapısal veri katmanı — Ege bölgesi. İl/ilçe sayfa ailesi ve ölçüm planı dâhil. |
| `/hizmet/schema-org-structured-data/kayseri/` | Schema.org / Structured Data — Kayseri | Tardigrad Software | Schema.org hizmeti Kayseri için: Google'a sitenizi doğru anlatan, doğrulanmış yapısal veri katmanı — İç Anadolu bölgesi. İl/ilçe sayfa ailesi ve ölçüm planı. |
| `/hizmet/schema-org-structured-data/kocaeli/` | Schema.org / Structured Data — Kocaeli | Tardigrad Software | Schema.org hizmeti Kocaeli için: Google'a sitenizi doğru anlatan, doğrulanmış yapısal veri katmanı — Marmara bölgesi. İl/ilçe sayfa ailesi ve ölçüm planı. |
| `/hizmet/schema-org-structured-data/konya/` | Schema.org / Structured Data — Konya | Tardigrad Software | Schema.org hizmeti Konya için: Google'a sitenizi doğru anlatan, doğrulanmış yapısal veri katmanı — İç Anadolu bölgesi. İl/ilçe sayfa ailesi ve ölçüm planı. |
| `/hizmet/seo-danismanligi/adana/` | SEO Danışmanlığı — Adana | Tardigrad Software | SEO danışmanlığı hizmeti Adana için: Kendi ekibinizle yürüyeceğiniz, net sorumlu ve takvimli SEO planı — Akdeniz bölgesi. İl/ilçe sayfa ailesi ve ölçüm. |
| `/hizmet/seo-danismanligi/ankara/` | SEO Danışmanlığı — Ankara | Tardigrad Software | SEO danışmanlığı hizmeti Ankara için: Kendi ekibinizle yürüyeceğiniz, net sorumlu ve takvimli SEO planı — İç Anadolu bölgesi. İl/ilçe sayfa ailesi ve ölçüm. |
| `/hizmet/seo-danismanligi/antalya/` | SEO Danışmanlığı — Antalya | Tardigrad Software | SEO danışmanlığı hizmeti Antalya için: Kendi ekibinizle yürüyeceğiniz, net sorumlu ve takvimli SEO planı — Akdeniz bölgesi. İl/ilçe sayfa ailesi ve ölçüm. |
| `/hizmet/seo-danismanligi/bursa/` | SEO Danışmanlığı — Bursa | Tardigrad Software | SEO danışmanlığı hizmeti Bursa için: Kendi ekibinizle yürüyeceğiniz, net sorumlu ve takvimli SEO planı — Marmara bölgesi. İl/ilçe sayfa ailesi ve ölçüm. |
| `/hizmet/seo-danismanligi/gaziantep/` | SEO Danışmanlığı — Gaziantep | Tardigrad Software | SEO danışmanlığı hizmeti Gaziantep için: Kendi ekibinizle yürüyeceğiniz, net sorumlu ve takvimli SEO planı — Güneydoğu Anadolu bölgesi. İl/ilçe sayfa ailesi. |
| `/hizmet/seo-danismanligi/istanbul/` | SEO Danışmanlığı — İstanbul | Tardigrad Software | SEO danışmanlığı hizmeti İstanbul için: Kendi ekibinizle yürüyeceğiniz, net sorumlu ve takvimli SEO planı — Marmara bölgesi. İl/ilçe sayfa ailesi ve ölçüm. |
| `/hizmet/seo-danismanligi/izmir/` | SEO Danışmanlığı — İzmir | Tardigrad Software | SEO danışmanlığı hizmeti İzmir için: Kendi ekibinizle yürüyeceğiniz, net sorumlu ve takvimli SEO planı — Ege bölgesi. İl/ilçe sayfa ailesi ve ölçüm planı. |
| `/hizmet/seo-danismanligi/kayseri/` | SEO Danışmanlığı — Kayseri | Tardigrad Software | SEO danışmanlığı hizmeti Kayseri için: Kendi ekibinizle yürüyeceğiniz, net sorumlu ve takvimli SEO planı — İç Anadolu bölgesi. İl/ilçe sayfa ailesi ve ölçüm. |
| `/hizmet/seo-danismanligi/kocaeli/` | SEO Danışmanlığı — Kocaeli | Tardigrad Software | SEO danışmanlığı hizmeti Kocaeli için: Kendi ekibinizle yürüyeceğiniz, net sorumlu ve takvimli SEO planı — Marmara bölgesi. İl/ilçe sayfa ailesi ve ölçüm. |
| `/hizmet/seo-danismanligi/konya/` | SEO Danışmanlığı — Konya | Tardigrad Software | SEO danışmanlığı hizmeti Konya için: Kendi ekibinizle yürüyeceğiniz, net sorumlu ve takvimli SEO planı — İç Anadolu bölgesi. İl/ilçe sayfa ailesi ve ölçüm. |
| `/hizmet/seo-uyumlu-sayfa-mimarisi/adana/` | SEO Uyumlu Sayfa Mimarisi — Adana | Tardigrad Software | SEO uyumlu sayfa mimarisi hizmeti Adana için: 43 sayfayı 43 tekil metin gibi kurgulayan ölçeklenebilir sayfa mimarisi — Akdeniz bölgesi. İl/ilçe sayfa. |
| `/hizmet/seo-uyumlu-sayfa-mimarisi/ankara/` | SEO Uyumlu Sayfa Mimarisi — Ankara | Tardigrad Software | SEO uyumlu sayfa mimarisi hizmeti Ankara için: 43 sayfayı 43 tekil metin gibi kurgulayan ölçeklenebilir sayfa mimarisi — İç Anadolu bölgesi. İl/ilçe sayfa. |
| `/hizmet/seo-uyumlu-sayfa-mimarisi/antalya/` | SEO Uyumlu Sayfa Mimarisi — Antalya | Tardigrad Software | SEO uyumlu sayfa mimarisi hizmeti Antalya için: 43 sayfayı 43 tekil metin gibi kurgulayan ölçeklenebilir sayfa mimarisi — Akdeniz bölgesi. İl/ilçe sayfa. |
| `/hizmet/seo-uyumlu-sayfa-mimarisi/bursa/` | SEO Uyumlu Sayfa Mimarisi — Bursa | Tardigrad Software | SEO uyumlu sayfa mimarisi hizmeti Bursa için: 43 sayfayı 43 tekil metin gibi kurgulayan ölçeklenebilir sayfa mimarisi — Marmara bölgesi. İl/ilçe sayfa. |
| `/hizmet/seo-uyumlu-sayfa-mimarisi/gaziantep/` | SEO Uyumlu Sayfa Mimarisi — Gaziantep | Tardigrad Software | SEO uyumlu sayfa mimarisi hizmeti Gaziantep için: 43 sayfayı 43 tekil metin gibi kurgulayan ölçeklenebilir sayfa mimarisi — Güneydoğu Anadolu bölgesi. |
| `/hizmet/seo-uyumlu-sayfa-mimarisi/istanbul/` | SEO Uyumlu Sayfa Mimarisi — İstanbul | Tardigrad Software | SEO uyumlu sayfa mimarisi hizmeti İstanbul için: 43 sayfayı 43 tekil metin gibi kurgulayan ölçeklenebilir sayfa mimarisi — Marmara bölgesi. İl/ilçe sayfa. |
| `/hizmet/seo-uyumlu-sayfa-mimarisi/izmir/` | SEO Uyumlu Sayfa Mimarisi — İzmir | Tardigrad Software | SEO uyumlu sayfa mimarisi hizmeti İzmir için: 43 sayfayı 43 tekil metin gibi kurgulayan ölçeklenebilir sayfa mimarisi — Ege bölgesi. İl/ilçe sayfa ailesi. |
| `/hizmet/seo-uyumlu-sayfa-mimarisi/kayseri/` | SEO Uyumlu Sayfa Mimarisi — Kayseri | Tardigrad Software | SEO uyumlu sayfa mimarisi hizmeti Kayseri için: 43 sayfayı 43 tekil metin gibi kurgulayan ölçeklenebilir sayfa mimarisi — İç Anadolu bölgesi. İl/ilçe sayfa. |
| `/hizmet/seo-uyumlu-sayfa-mimarisi/kocaeli/` | SEO Uyumlu Sayfa Mimarisi — Kocaeli | Tardigrad Software | SEO uyumlu sayfa mimarisi hizmeti Kocaeli için: 43 sayfayı 43 tekil metin gibi kurgulayan ölçeklenebilir sayfa mimarisi — Marmara bölgesi. İl/ilçe sayfa. |
| `/hizmet/seo-uyumlu-sayfa-mimarisi/konya/` | SEO Uyumlu Sayfa Mimarisi — Konya | Tardigrad Software | SEO uyumlu sayfa mimarisi hizmeti Konya için: 43 sayfayı 43 tekil metin gibi kurgulayan ölçeklenebilir sayfa mimarisi — İç Anadolu bölgesi. İl/ilçe sayfa. |
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
| `/hizmet/supabase-postgresql/adana/` | Supabase / PostgreSQL Altyapısı — Adana | Tardigrad Software | Supabase hizmeti Adana için: Auth, depolama ve satır bazlı güvenlikle hazır veri katmanı — Akdeniz bölgesi. İl/ilçe sayfa ailesi ve ölçüm planı dâhil. |
| `/hizmet/supabase-postgresql/ankara/` | Supabase / PostgreSQL Altyapısı — Ankara | Supabase hizmeti Ankara için: Auth, depolama ve satır bazlı güvenlikle hazır veri katmanı — İç Anadolu bölgesi. İl/ilçe sayfa ailesi ve ölçüm planı dâhil. |
| `/hizmet/supabase-postgresql/antalya/` | Supabase / PostgreSQL Altyapısı — Antalya | Supabase hizmeti Antalya için: Auth, depolama ve satır bazlı güvenlikle hazır veri katmanı — Akdeniz bölgesi. İl/ilçe sayfa ailesi ve ölçüm planı dâhil. |
| `/hizmet/supabase-postgresql/bursa/` | Supabase / PostgreSQL Altyapısı — Bursa | Tardigrad Software | Supabase hizmeti Bursa için: Auth, depolama ve satır bazlı güvenlikle hazır veri katmanı — Marmara bölgesi. İl/ilçe sayfa ailesi ve ölçüm planı dâhil. |
| `/hizmet/supabase-postgresql/gaziantep/` | Supabase / PostgreSQL Altyapısı — Gaziantep | Supabase hizmeti Gaziantep için: Auth, depolama ve satır bazlı güvenlikle hazır veri katmanı — Güneydoğu Anadolu bölgesi. İl/ilçe sayfa ailesi ve ölçüm. |
| `/hizmet/supabase-postgresql/istanbul/` | Supabase / PostgreSQL Altyapısı — İstanbul | Supabase hizmeti İstanbul için: Auth, depolama ve satır bazlı güvenlikle hazır veri katmanı — Marmara bölgesi. İl/ilçe sayfa ailesi ve ölçüm planı dâhil. |
| `/hizmet/supabase-postgresql/izmir/` | Supabase / PostgreSQL Altyapısı — İzmir | Tardigrad Software | Supabase hizmeti İzmir için: Auth, depolama ve satır bazlı güvenlikle hazır veri katmanı — Ege bölgesi. İl/ilçe sayfa ailesi ve ölçüm planı dâhil. |
| `/hizmet/supabase-postgresql/kayseri/` | Supabase / PostgreSQL Altyapısı — Kayseri | Supabase hizmeti Kayseri için: Auth, depolama ve satır bazlı güvenlikle hazır veri katmanı — İç Anadolu bölgesi. İl/ilçe sayfa ailesi ve ölçüm planı dâhil. |
| `/hizmet/supabase-postgresql/kocaeli/` | Supabase / PostgreSQL Altyapısı — Kocaeli | Supabase hizmeti Kocaeli için: Auth, depolama ve satır bazlı güvenlikle hazır veri katmanı — Marmara bölgesi. İl/ilçe sayfa ailesi ve ölçüm planı dâhil. |
| `/hizmet/supabase-postgresql/konya/` | Supabase / PostgreSQL Altyapısı — Konya | Tardigrad Software | Supabase hizmeti Konya için: Auth, depolama ve satır bazlı güvenlikle hazır veri katmanı — İç Anadolu bölgesi. İl/ilçe sayfa ailesi ve ölçüm planı dâhil. |
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
| `/hizmet/vercel-deployment/adana/` | Vercel Deployment — Adana | Tardigrad Software | Vercel hizmeti Adana için: Next.js projelerinde kontrollü, geri alınabilir ve hızlı yayın akışı — Akdeniz bölgesi. İl/ilçe sayfa ailesi ve ölçüm planı dâhil. |
| `/hizmet/vercel-deployment/ankara/` | Vercel Deployment — Ankara | Tardigrad Software | Vercel hizmeti Ankara için: Next.js projelerinde kontrollü, geri alınabilir ve hızlı yayın akışı — İç Anadolu bölgesi. İl/ilçe sayfa ailesi ve ölçüm planı. |
| `/hizmet/vercel-deployment/antalya/` | Vercel Deployment — Antalya | Tardigrad Software | Vercel hizmeti Antalya için: Next.js projelerinde kontrollü, geri alınabilir ve hızlı yayın akışı — Akdeniz bölgesi. İl/ilçe sayfa ailesi ve ölçüm planı. |
| `/hizmet/vercel-deployment/bursa/` | Vercel Deployment — Bursa | Tardigrad Software | Vercel hizmeti Bursa için: Next.js projelerinde kontrollü, geri alınabilir ve hızlı yayın akışı — Marmara bölgesi. İl/ilçe sayfa ailesi ve ölçüm planı dâhil. |
| `/hizmet/vercel-deployment/gaziantep/` | Vercel Deployment — Gaziantep | Tardigrad Software | Vercel hizmeti Gaziantep için: Next.js projelerinde kontrollü, geri alınabilir ve hızlı yayın akışı — Güneydoğu Anadolu bölgesi. İl/ilçe sayfa ailesi. |
| `/hizmet/vercel-deployment/istanbul/` | Vercel Deployment — İstanbul | Tardigrad Software | Vercel hizmeti İstanbul için: Next.js projelerinde kontrollü, geri alınabilir ve hızlı yayın akışı — Marmara bölgesi. İl/ilçe sayfa ailesi ve ölçüm planı. |
| `/hizmet/vercel-deployment/izmir/` | Vercel Deployment — İzmir | Tardigrad Software | Vercel hizmeti İzmir için: Next.js projelerinde kontrollü, geri alınabilir ve hızlı yayın akışı — Ege bölgesi. İl/ilçe sayfa ailesi ve ölçüm planı dâhil. |
| `/hizmet/vercel-deployment/kayseri/` | Vercel Deployment — Kayseri | Tardigrad Software | Vercel hizmeti Kayseri için: Next.js projelerinde kontrollü, geri alınabilir ve hızlı yayın akışı — İç Anadolu bölgesi. İl/ilçe sayfa ailesi ve ölçüm planı. |
| `/hizmet/vercel-deployment/kocaeli/` | Vercel Deployment — Kocaeli | Tardigrad Software | Vercel hizmeti Kocaeli için: Next.js projelerinde kontrollü, geri alınabilir ve hızlı yayın akışı — Marmara bölgesi. İl/ilçe sayfa ailesi ve ölçüm planı. |
| `/hizmet/vercel-deployment/konya/` | Vercel Deployment — Konya | Tardigrad Software | Vercel hizmeti Konya için: Next.js projelerinde kontrollü, geri alınabilir ve hızlı yayın akışı — İç Anadolu bölgesi. İl/ilçe sayfa ailesi ve ölçüm planı. |
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
| `/hizmet/yonetim-paneli/adana/` | Yönetim Paneli — Adana | Tardigrad Software | Yönetim paneli hizmeti Adana için: İşletmenizi kod yazmadan yönetmenizi sağlayan panel katmanı — Akdeniz bölgesi. İl/ilçe sayfa ailesi ve ölçüm planı dâhil. |
| `/hizmet/yonetim-paneli/ankara/` | Yönetim Paneli — Ankara | Tardigrad Software | Yönetim paneli hizmeti Ankara için: İşletmenizi kod yazmadan yönetmenizi sağlayan panel katmanı — İç Anadolu bölgesi. İl/ilçe sayfa ailesi ve ölçüm planı. |
| `/hizmet/yonetim-paneli/antalya/` | Yönetim Paneli — Antalya | Tardigrad Software | Yönetim paneli hizmeti Antalya için: İşletmenizi kod yazmadan yönetmenizi sağlayan panel katmanı — Akdeniz bölgesi. İl/ilçe sayfa ailesi ve ölçüm planı dâhil. |
| `/hizmet/yonetim-paneli/bursa/` | Yönetim Paneli — Bursa | Tardigrad Software | Yönetim paneli hizmeti Bursa için: İşletmenizi kod yazmadan yönetmenizi sağlayan panel katmanı — Marmara bölgesi. İl/ilçe sayfa ailesi ve ölçüm planı dâhil. |
| `/hizmet/yonetim-paneli/gaziantep/` | Yönetim Paneli — Gaziantep | Tardigrad Software | Yönetim paneli hizmeti Gaziantep için: İşletmenizi kod yazmadan yönetmenizi sağlayan panel katmanı — Güneydoğu Anadolu bölgesi. İl/ilçe sayfa ailesi. |
| `/hizmet/yonetim-paneli/istanbul/` | Yönetim Paneli — İstanbul | Tardigrad Software | Yönetim paneli hizmeti İstanbul için: İşletmenizi kod yazmadan yönetmenizi sağlayan panel katmanı — Marmara bölgesi. İl/ilçe sayfa ailesi ve ölçüm planı. |
| `/hizmet/yonetim-paneli/izmir/` | Yönetim Paneli — İzmir | Tardigrad Software | Yönetim paneli hizmeti İzmir için: İşletmenizi kod yazmadan yönetmenizi sağlayan panel katmanı — Ege bölgesi. İl/ilçe sayfa ailesi ve ölçüm planı dâhil. |
| `/hizmet/yonetim-paneli/kayseri/` | Yönetim Paneli — Kayseri | Tardigrad Software | Yönetim paneli hizmeti Kayseri için: İşletmenizi kod yazmadan yönetmenizi sağlayan panel katmanı — İç Anadolu bölgesi. İl/ilçe sayfa ailesi ve ölçüm planı. |
| `/hizmet/yonetim-paneli/kocaeli/` | Yönetim Paneli — Kocaeli | Tardigrad Software | Yönetim paneli hizmeti Kocaeli için: İşletmenizi kod yazmadan yönetmenizi sağlayan panel katmanı — Marmara bölgesi. İl/ilçe sayfa ailesi ve ölçüm planı dâhil. |
| `/hizmet/yonetim-paneli/konya/` | Yönetim Paneli — Konya | Tardigrad Software | Yönetim paneli hizmeti Konya için: İşletmenizi kod yazmadan yönetmenizi sağlayan panel katmanı — İç Anadolu bölgesi. İl/ilçe sayfa ailesi ve ölçüm planı. |
| `/hizmetler/` | Hizmetler (43 Başlık) | Tardigrad Software | Tardigrad Software hizmet listesi: kurumsal web sitesi, e-ticaret, CRM, SaaS, teknik ve lokal SEO, API entegrasyonu, AI chatbot dahil 43 başlık. Türkiye. |
| `/hizmetler/abonelik-tabanli-yazilim/` | Abonelik Tabanlı Yazılım | Tardigrad Software | Abonelik tabanlı yazılım: plan ve kota yönetimi, deneme süresi, otomatik tahsilat, iade ve başarısız ödeme akışları. Tekrarlayan geliri kurala bağlayan. |
| `/hizmetler/ai-chatbot/` | AI Chatbot | Tardigrad Software | AI chatbot geliştirme: kurumsal bilgi tabanına bağlı (RAG) yanıt, insan devri, WhatsApp/web kanal ve raporlama. Tekrarlayan soruları otomatikleştirin. |
| `/hizmetler/ai-icerik-araclar/` | AI Destekli İçerik / Araçlar | Tardigrad Software | AI destekli içerik araçları: hizmet/şehir bazlı metin üretimi, marka sözlüğü, kontrol akışı ve iç link önerisi. 800 sayfayı tek tek elle yazmayın. |
| `/hizmetler/api-entegrasyonu/` | API Entegrasyonu | Tardigrad Software | API entegrasyonu: muhasebe, e-fatura, kargo, pazaryeri, ödeme ve ERP bağlantıları; webhook, kuyruk, hata telafisi ve izleme. Veri elle taşınmasın. |
| `/hizmetler/cloudflare-cdn/` | Cloudflare / CDN Yapılandırması | Tardigrad Software | Cloudflare ve CDN kurulumu: cache stratejisi, WAF ve bot koruması, DNS yönetimi, yönlendirme kuralları ve anlık purge. Hız ile güvenliği tek noktadan. |
| `/hizmetler/crm/` | CRM | Tardigrad Software | Kuruma özel CRM: müşteri, fırsat, teklif ve saha ziyareti takibi. WhatsApp ve e-posta entegrasyonuyla tüm iletişim tek kayıtta toplanır; satış hattı panelde. |
| `/hizmetler/dashboard-sistemi/` | Dashboard Sistemi | Tardigrad Software | Dashboard geliştirme: veri kaynaklarını birleştiren yönetişim ekranları, anlık metrikler ve alarm eşikleri. Yönetici kararını kurulu tek ekrandan verir. |
| `/hizmetler/dijital-donusum/` | Dijital Dönüşüm Süreçleri | Tardigrad Software | Dijital dönüşüm: süreç envanteri, önceliklendirme ve yol haritası. Excel, WhatsApp ve telefon trafiğinden ölçülebilir sistemlere geçişi adım adım planlıyoruz. |
| `/hizmetler/dijital-otomasyon/` | Dijital Otomasyon | Tardigrad Software | Dijital otomasyon: tekliften faturaya, formdan CRM'e kadar tekrarlayan adımları kural motoruyla bağlayan iş akışları. Elle yapılanı sisteme alın. |
| `/hizmetler/domain-dns-yonetimi/` | Domain / DNS Yönetimi | Tardigrad Software | Domain ve DNS yönetimi: kayıt transferi, subdomain planı, e-posta kayıtları, sertifika ve yenileme takvimi. Tek kişiye bağlı altyapıdan kurtulun. |
| `/hizmetler/e-ticaret-sitesi/` | E-Ticaret Sitesi | Tardigrad Software | E-ticaret sitesi kurulumu: katalog, varyant, sepet, sanal POS, kargo ve pazaryeri senkronu. Komisyon ödemeden kendi altyapınızda satış; stok tek kaynaktan. |
| `/hizmetler/firma-web-sitesi/` | Firma Web Sitesi | Tardigrad Software | Firma web sitesi kurulumu: ürün ve hizmet katalogları, bayi ve kariyer sayfaları, iletişim formları. Küçük işletmeler için hızlı ve bütçe dostu. |
| `/hizmetler/form-basvuru-sistemi/` | Form / Başvuru Sistemi | Tardigrad Software | Online form ve başvuru sistemi: koşullu adımlar, dosya yükleme, KVKK onayı, durum takibi ve otomatik bilgilendirme. Kayıp başvurular sona erer. |
| `/hizmetler/google-search-console-kurulumu/` | Google Search Console Kurulumu | Tardigrad Software | Google Search Console kurulumu ve yönetimi: mülk doğrulama, sitemap gönderimi, indeksleme raporu ve sorun takibi. Raporu aksiyon listesine çeviren düzenli. |
| `/hizmetler/hosting-yedekleme/` | Hosting / Yedekleme | Tardigrad Software | Hosting ve yedekleme yönetimi: doğru plan seçimi, otomatik yedek, test edilmiş geri yükleme, izleme ve güvenlik güncellemeleri. Doğrulanmayan yedek yedek. |
| `/hizmetler/is-takip-sistemi/` | İş Takip Sistemi | Tardigrad Software | İş takip sistemi: görev, iş emri, SLA ve sorumluluk ataması; sahadan fotoğraf ve not girişi. Geciken işler toplantıda değil panelde görünür, haftalık rapor. |
| `/hizmetler/kurumsal-email/` | Kurumsal E-Posta | Tardigrad Software | Kurumsal e-posta kurulumu: Google Workspace/Microsoft 365 seçimi, ortak hesaplar, SPF-DKIM-DMARC, imza ve arşiv politikaları. Mailleriniz kutuya düşsün. |
| `/hizmetler/kurumsal-web-sitesi/` | Kurumsal Web Sitesi | Tardigrad Software | Kurumsal web sitesi tasarımı ve geliştirmesi: hızlı, mobil öncelikli ve SEO uyumlu. Talep üreten sayfa mimarisi, yönetim paneli. Türkiye geneli çalışıyoruz. |
| `/hizmetler/landing-page/` | Landing Page | Tardigrad Software | Kampanya ve reklam trafiği için landing page tasarımı: tek teklif, net CTA, hızlı yükleme ve ölçülebilir form. Reklam bütçenizin verimini artırır. |
| `/hizmetler/lokal-seo/` | Lokal SEO | Tardigrad Software | Lokal SEO hizmeti: işletme profili, il ve ilçe sayfa ailesi, yerel schema ve yorum sinyalleri. Yakınımdaki aramalarında bulunur hâle gelin; Türkiye geneli. |
| `/hizmetler/multi-tenant-uygulama/` | Multi-Tenant Uygulama | Tardigrad Software | Multi-tenant uygulama mimarisi: tenant izolasyonu, şube/marka bazlı yapılandırma, tek kod tabanı. Her firmaya ayrı panel, tek merkezden yönetim. |
| `/hizmetler/musteri-paneli/` | Müşteri Paneli | Tardigrad Software | Müşteri paneli: sipariş ve evrak geçmişi, bakiye, talep takibi ve self servis işlemler. Çağrı merkezi yükünü azaltan, markanıza ait online müşteri portalı. |
| `/hizmetler/musteri-yonetim-sistemi/` | Müşteri Yönetim Sistemi | Tardigrad Software | Müşteri yönetim sistemi: tekil kayıt, temas geçmişi, etiketleme, hatırlatma ve rol bazlı erişim. Dağılan Excel kayıtlarını tek gerçeğe çevirir. |
| `/hizmetler/mvp-startup-urunu/` | MVP / Startup Ürünü | Tardigrad Software | MVP geliştirme: tek akış, net hedef, 6-10 haftada canlı ürün. Yatırımcı sunumu, kullanıcı onayı ve ilk dağıtım için hazır altyapı birlikte gelir. |
| `/hizmetler/odeme-whatsapp-crm-entegrasyonu/` | Ödeme / WhatsApp / CRM Entegrasyonu | Tardigrad Software | Ödeme, WhatsApp Business API ve CRM entegrasyonu: sanal POS, sipariş bildirimleri, şablon mesajlar ve satış kaydının otomatik oluşması. Tek akış, tek kayıt. |
| `/hizmetler/personel-kullanici-yonetimi/` | Personel / Kullanıcı Yönetimi | Tardigrad Software | Personel ve kullanıcı yönetimi: rol ve yetki matrisi, özlük bilgileri, izin ve puantaj kayıtları, giriş denetimi. Yetki dağınıklığı tek panelde biter. |
| `/hizmetler/portfoy-sitesi/` | Portföy Sitesi | Tardigrad Software | Portfolyo web sitesi: proje vitrini, filtreli galeri, vaka anlatımı ve teklif formu. Tasarımcı, mimar ve ajanslar için çalışan bir iş geçmişi sayfası. |
| `/hizmetler/proforma-siparis-yonetimi/` | Proforma / Sipariş Yönetimi | Tardigrad Software | Proforma ve sipariş yönetimi: siparişten sevkiyata durum takibi, stok kontrolü, irsaliye ve fatura entegrasyonu. Geciken siparişleri görünür kılar. |
| `/hizmetler/raporlama-sistemi/` | Raporlama Sistemi | Tardigrad Software | Raporlama sistemi: yönetişim metrikleri, otomatik haftalık/aylık rapor, Excel/PDF dışa aktarım ve e-posta ile abonelik. Rapor kuyruğunda beklemeyin. |
| `/hizmetler/rezervasyon-basvuru-sistemi/` | Rezervasyon ve Başvuru Sistemi | Tardigrad Software | Online rezervasyon ve başvuru sistemi: müsaitlik, kota, onay ve iptal akışı, hatırlatma mesajları ile raporlama. Telefon trafiğini azaltan, takvimi dolduran. |
| `/hizmetler/saas-platformu/` | SaaS Platformu | Tardigrad Software | SaaS platformu geliştirme: çok kiracılı mimari, abonelik ve plan yönetimi, admin ve müşteri paneli, ölçülen onboarding. Ürününüzü yayına hazırlar. |
| `/hizmetler/schema-org-structured-data/` | Schema.org / Structured Data | Tardigrad Software | Schema.org ve JSON-LD kurulumu: Organization, Service, FAQPage, BreadcrumbList ve LocalBusiness şemaları; doğrulanmış ve zengin sonuç testinden geçmiş. |
| `/hizmetler/seo-danismanligi/` | SEO Danışmanlığı | Tardigrad Software | SEO danışmanlığı: strateji, rekabet analizi, önceliklendirilmiş yol haritası ve ekiplerin yönlendirilmesi. İsterseniz uygulamasını da biz yaparız. |
| `/hizmetler/seo-uyumlu-sayfa-mimarisi/` | SEO Uyumlu Sayfa Mimarisi | Tardigrad Software | SEO uyumlu sayfa mimarisi: küme yapısı, URL taksonomisi, başlık hiyerarşisi ve iç link planı. 43 sayfadan 4.300 sayfaya aynı şablonla, kopya içerik riski. |
| `/hizmetler/stok-yonetimi/` | Stok Yönetimi | Tardigrad Software | Stok yönetim sistemi: depo ve birim yapısı, kritik stok uyarısı, sayım ve hareket geçmişi, barkod desteği. Olmayan ürünü satmamayı ve ani tükenmeleri. |
| `/hizmetler/supabase-postgresql/` | Supabase / PostgreSQL Altyapısı | Tardigrad Software | Supabase ve PostgreSQL kurulumu: şema tasarımı, satır bazlı güvenlik politikaları, kimlik doğrulama ve dosya deposu. Veri omurgası baştan sağlam kurulur. |
| `/hizmetler/teklif-hazirlama-sistemi/` | Teklif Hazırlama Sistemi | Tardigrad Software | Teklif hazırlama sistemi: fiyat listesinden saniyeler içinde markalı PDF teklif, sürüm takibi, onay akışı ve online kabul. Cevapsız tekliflerin. |
| `/hizmetler/teknik-seo/` | Teknik SEO | Tardigrad Software | Teknik SEO: Core Web Vitals, indeksleme ve tarama bütçesi, URL/canonical mimarisi, schema ve log analizi. Düzeltmeleri kod tarafında biz uygularız. |
| `/hizmetler/urun-tanitim-sitesi/` | Ürün / Hizmet Tanıtım Sitesi | Tardigrad Software | Ürün ve hizmet tanıtım sitesi: kategori ve filtre yapısı, PDF katalog, fiyat sorgulama ve bayi girişi. Ürün verisini tek yerden yönetip tüm kanallara aynı. |
| `/hizmetler/urun-tedarikci-yonetimi/` | Ürün / Tedarikçi Yönetimi | Tardigrad Software | Ürün ve tedarikçi yönetimi: merkezî katalog, varyant ve fiyat politikaları, tedarikçi puanlama ve satınalma takibi. Site, katalog, panel tek kaynak. |
| `/hizmetler/vercel-deployment/` | Vercel Deployment | Tardigrad Software | Vercel yayın hattı: preview ortamı, otomatik deploy, ortam değişkenleri ve domain yönetimi. Her pull request ayrı önizleme, her merge canlıya çıkış alır. |
| `/hizmetler/web-sitesi-yenileme/` | Web Sitesi Yenileme / Modernizasyon | Tardigrad Software | Web sitesi yenileme: hız ve Core Web Vitals iyileştirmesi, mobil uyum, SEO koruması ve 301 planı ile içerik taşıma. Mevcut otoriteyi kaybetmeyin. |
| `/hizmetler/yonetim-paneli/` | Yönetim Paneli | Tardigrad Software | Yönetim paneli geliştirme: içerik, kullanıcı, ayar ve rapor ekranları tek arayüzde. Yetki bazlı erişim ve hızlı veri girişiyle işler panele taşınır. |
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

**Özet metrikler:** {"pages":489,"servicePages":43,"pagesWithFaq":43,"indexablePages":489,"handWrittenServicePages":43,"avgServiceWords":1673,"maxServiceWords":1899,"minServiceWords":1546,"totalImages":114,"brokenLinks":0,"pagesWithoutJsonLd":0}

- Kırık iç link: 0
- JSON-LD olmayan sayfa: 0
- Hizmet sayfaları kelime sayısı (ana içerik): min 1546 / ortalama 1673 / maks 1899
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
| 15 | Personel / Kullanıcı Yönetimi | `personel-kullanici-yonetimi` | ozel-yazilim | elle yazıldı | index, follow |
| 16 | Yönetim Paneli | `yonetim-paneli` | ozel-yazilim | elle yazıldı | index, follow |
| 17 | Müşteri Paneli | `musteri-paneli` | ozel-yazilim | elle yazıldı | index, follow |
| 18 | İş Takip Sistemi | `is-takip-sistemi` | ozel-yazilim | elle yazıldı | index, follow |
| 19 | Raporlama Sistemi | `raporlama-sistemi` | ozel-yazilim | elle yazıldı | index, follow |
| 20 | Form / Başvuru Sistemi | `form-basvuru-sistemi` | ozel-yazilim | elle yazıldı | index, follow |
| 21 | SaaS Platformu | `saas-platformu` | saas | elle yazıldı | index, follow |
| 22 | Abonelik Tabanlı Yazılım | `abonelik-tabanli-yazilim` | saas | elle yazıldı | index, follow |
| 23 | Multi-Tenant Uygulama | `multi-tenant-uygulama` | saas | elle yazıldı | index, follow |
| 24 | Dashboard Sistemi | `dashboard-sistemi` | saas | elle yazıldı | index, follow |
| 25 | MVP / Startup Ürünü | `mvp-startup-urunu` | saas | elle yazıldı | index, follow |
| 26 | Teknik SEO | `teknik-seo` | seo | elle yazıldı | index, follow |
| 27 | Lokal SEO | `lokal-seo` | seo | elle yazıldı | index, follow |
| 28 | SEO Uyumlu Sayfa Mimarisi | `seo-uyumlu-sayfa-mimarisi` | seo | elle yazıldı | index, follow |
| 29 | Schema.org / Structured Data | `schema-org-structured-data` | seo | elle yazıldı | index, follow |
| 30 | Google Search Console Kurulumu | `google-search-console-kurulumu` | seo | elle yazıldı | index, follow |
| 31 | SEO Danışmanlığı | `seo-danismanligi` | seo | elle yazıldı | index, follow |
| 32 | Dijital Otomasyon | `dijital-otomasyon` | it-ai | elle yazıldı | index, follow |
| 33 | Domain / DNS Yönetimi | `domain-dns-yonetimi` | it-ai | elle yazıldı | index, follow |
| 34 | Hosting / Yedekleme | `hosting-yedekleme` | it-ai | elle yazıldı | index, follow |
| 35 | Cloudflare / CDN Yapılandırması | `cloudflare-cdn` | it-ai | elle yazıldı | index, follow |
| 36 | Vercel Deployment | `vercel-deployment` | it-ai | elle yazıldı | index, follow |
| 37 | Supabase / PostgreSQL Altyapısı | `supabase-postgresql` | it-ai | elle yazıldı | index, follow |
| 38 | Kurumsal E-Posta | `kurumsal-email` | it-ai | elle yazıldı | index, follow |
| 39 | API Entegrasyonu | `api-entegrasyonu` | it-ai | elle yazıldı | index, follow |
| 40 | Ödeme / WhatsApp / CRM Entegrasyonu | `odeme-whatsapp-crm-entegrasyonu` | it-ai | elle yazıldı | index, follow |
| 41 | AI Chatbot | `ai-chatbot` | it-ai | elle yazıldı | index, follow |
| 42 | AI Destekli İçerik / Araçlar | `ai-icerik-araclar` | it-ai | elle yazıldı | index, follow |
| 43 | Dijital Dönüşüm Süreçleri | `dijital-donusum` | it-ai | elle yazıldı | index, follow |

Elle yazılan hizmet sayısı: **43/43**. Pilot olmayanlar yayında ama indekslenmiyor; içerik yazıldıkça `src/data/service-contents-*.ts` dosyalarına eklenir ve otomatik olarak indekslenir hâle gelir (ayrı bir config gerekmez).

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
| 15 | Personel / Kullanıcı Yönetimi | `personel-kullanici-yonetimi` | 1619 | 50 kr | tanım · neden · kapsam · süreç · fayda · kimler için · neden biz · SSS · CTA+form · iç linkler | 5 |
| 16 | Yönetim Paneli | `yonetim-paneli` | 1576 | 35 kr | tanım · neden · kapsam · süreç · fayda · kimler için · neden biz · SSS · CTA+form · iç linkler | 6 |
| 17 | Müşteri Paneli | `musteri-paneli` | 1606 | 35 kr | tanım · neden · kapsam · süreç · fayda · kimler için · neden biz · SSS · CTA+form · iç linkler | 5 |
| 18 | İş Takip Sistemi | `is-takip-sistemi` | 1580 | 37 kr | tanım · neden · kapsam · süreç · fayda · kimler için · neden biz · SSS · CTA+form · iç linkler | 5 |
| 19 | Raporlama Sistemi | `raporlama-sistemi` | 1570 | 38 kr | tanım · neden · kapsam · süreç · fayda · kimler için · neden biz · SSS · CTA+form · iç linkler | 5 |
| 20 | Form / Başvuru Sistemi | `form-basvuru-sistemi` | 1639 | 43 kr | tanım · neden · kapsam · süreç · fayda · kimler için · neden biz · SSS · CTA+form · iç linkler | 6 |
| 21 | SaaS Platformu | `saas-platformu` | 1727 | 35 kr | tanım · neden · kapsam · süreç · fayda · kimler için · neden biz · SSS · CTA+form · iç linkler | 6 |
| 22 | Abonelik Tabanlı Yazılım | `abonelik-tabanli-yazilim` | 1616 | 45 kr | tanım · neden · kapsam · süreç · fayda · kimler için · neden biz · SSS · CTA+form · iç linkler | 6 |
| 23 | Multi-Tenant Uygulama | `multi-tenant-uygulama` | 1650 | 42 kr | tanım · neden · kapsam · süreç · fayda · kimler için · neden biz · SSS · CTA+form · iç linkler | 6 |
| 24 | Dashboard Sistemi | `dashboard-sistemi` | 1546 | 38 kr | tanım · neden · kapsam · süreç · fayda · kimler için · neden biz · SSS · CTA+form · iç linkler | 5 |
| 25 | MVP / Startup Ürünü | `mvp-startup-urunu` | 1612 | 40 kr | tanım · neden · kapsam · süreç · fayda · kimler için · neden biz · SSS · CTA+form · iç linkler | 6 |
| 26 | Teknik SEO | `teknik-seo` | 1686 | 31 kr | tanım · neden · kapsam · süreç · fayda · kimler için · neden biz · SSS · CTA+form · iç linkler | 7 |
| 27 | Lokal SEO | `lokal-seo` | 1653 | 30 kr | tanım · neden · kapsam · süreç · fayda · kimler için · neden biz · SSS · CTA+form · iç linkler | 5 |
| 28 | SEO Uyumlu Sayfa Mimarisi | `seo-uyumlu-sayfa-mimarisi` | 1612 | 46 kr | tanım · neden · kapsam · süreç · fayda · kimler için · neden biz · SSS · CTA+form · iç linkler | 5 |
| 29 | Schema.org / Structured Data | `schema-org-structured-data` | 1623 | 49 kr | tanım · neden · kapsam · süreç · fayda · kimler için · neden biz · SSS · CTA+form · iç linkler | 5 |
| 30 | Google Search Console Kurulumu | `google-search-console-kurulumu` | 1625 | 51 kr | tanım · neden · kapsam · süreç · fayda · kimler için · neden biz · SSS · CTA+form · iç linkler | 5 |
| 31 | SEO Danışmanlığı | `seo-danismanligi` | 1694 | 37 kr | tanım · neden · kapsam · süreç · fayda · kimler için · neden biz · SSS · CTA+form · iç linkler | 6 |
| 32 | Dijital Otomasyon | `dijital-otomasyon` | 1571 | 38 kr | tanım · neden · kapsam · süreç · fayda · kimler için · neden biz · SSS · CTA+form · iç linkler | 5 |
| 33 | Domain / DNS Yönetimi | `domain-dns-yonetimi` | 1654 | 42 kr | tanım · neden · kapsam · süreç · fayda · kimler için · neden biz · SSS · CTA+form · iç linkler | 5 |
| 34 | Hosting / Yedekleme | `hosting-yedekleme` | 1647 | 40 kr | tanım · neden · kapsam · süreç · fayda · kimler için · neden biz · SSS · CTA+form · iç linkler | 5 |
| 35 | Cloudflare / CDN Yapılandırması | `cloudflare-cdn` | 1663 | 52 kr | tanım · neden · kapsam · süreç · fayda · kimler için · neden biz · SSS · CTA+form · iç linkler | 5 |
| 36 | Vercel Deployment | `vercel-deployment` | 1604 | 38 kr | tanım · neden · kapsam · süreç · fayda · kimler için · neden biz · SSS · CTA+form · iç linkler | 5 |
| 37 | Supabase / PostgreSQL Altyapısı | `supabase-postgresql` | 1661 | 52 kr | tanım · neden · kapsam · süreç · fayda · kimler için · neden biz · SSS · CTA+form · iç linkler | 5 |
| 38 | Kurumsal E-Posta | `kurumsal-email` | 1618 | 37 kr | tanım · neden · kapsam · süreç · fayda · kimler için · neden biz · SSS · CTA+form · iç linkler | 5 |
| 39 | API Entegrasyonu | `api-entegrasyonu` | 1608 | 37 kr | tanım · neden · kapsam · süreç · fayda · kimler için · neden biz · SSS · CTA+form · iç linkler | 5 |
| 40 | Ödeme / WhatsApp / CRM Entegrasyonu | `odeme-whatsapp-crm-entegrasyonu` | 1695 | 56 kr | tanım · neden · kapsam · süreç · fayda · kimler için · neden biz · SSS · CTA+form · iç linkler | 5 |
| 41 | AI Chatbot | `ai-chatbot` | 1667 | 31 kr | tanım · neden · kapsam · süreç · fayda · kimler için · neden biz · SSS · CTA+form · iç linkler | 7 |
| 42 | AI Destekli İçerik / Araçlar | `ai-icerik-araclar` | 1674 | 49 kr | tanım · neden · kapsam · süreç · fayda · kimler için · neden biz · SSS · CTA+form · iç linkler | 5 |
| 43 | Dijital Dönüşüm Süreçleri | `dijital-donusum` | 1657 | 46 kr | tanım · neden · kapsam · süreç · fayda · kimler için · neden biz · SSS · CTA+form · iç linkler | 5 |

Diğer 0 hizmet: sayfa iskeleti, meta, schema, iç linkler ve görsel fallback'i hazır; gövde metni kategori tohumlarıyla (`src/lib/content-factory.ts`) üretiliyor ve FAZ 2'de elle yazılacak. Bu sayfalar FAZ 2 bitene kadar `noindex, follow`.

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
