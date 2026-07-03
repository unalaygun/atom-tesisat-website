# 🚀 Atom Tesisat Web Sitesi

İstanbul Ümraniye merkezli **Atom Tesisat** için kırmadan cihazla su kaçağı tespiti, robotla gider ve tıkanıklık açma, petek temizliği ve sıhhi tesisat hizmetleri sunan modern, yüksek performanslı ve çift dilli (Türkçe / İngilizce) kurumsal web uygulaması.

Sitenin canlı sürümü Google Lighthouse standartlarına uygun olarak en üst seviyede hız (LCP/FCP), SEO ve erişilebilirlik (Accessibility) kriterleriyle optimize edilmiştir.

---

## 🛠️ Kullanılan Teknolojiler

*   **Çekirdek:** [React 19](https://react.dev/) & [Vite 6](https://vite.dev/) (Hızlı derleme ve modern ESM paketleyici)
*   **Tasarım:** [Tailwind CSS v4](https://tailwindcss.com/) (Yenilikçi, esnek ve hızlı CSS motoru)
*   **İkonlar:** [Lucide React](https://lucide.dev/) (Premium, hafif SVG ikonlar)
*   **Dil Desteği:** Özel JS dictionary ile sıfır gecikmeli dinamik TR/EN çeviri altyapısı

---

## 🎯 Performans & SEO Optimizasyonları

Sitenin Google arama sonuçlarında en üst sırada çıkması ve mobil cihazlarda anında yüklenmesi için uygulanan özel teknikler:

*   **WebP Görsel Dönüşümü:** Sitedeki tüm yüksek çözünürlüklü JPEG/PNG görseller WebP formatına dönüştürülerek toplam resim boyutu **%95 oranında azaltıldı** (Hero görseli 413 KB'dan 24 KB'a düşürüldü).
*   **LCP (Largest Contentful Paint) Önyüklemesi:** Sayfanın en büyük görseli (`plumber.webp`) HTML `<head>` alanında `preload` edilerek tarayıcının resmi ilk saniyede indirmesi sağlandı.
*   **CLS (Cumulative Layout Shift) Çözümü:** Sayfa yüklenirken kaymaları sıfırlamak adına tüm logo ve görsellere fiziksel genişlik/yükseklik (`width`/`height`) değerleri atanarak tarayıcıda yerleri rezerve edildi.
*   **Erişilebilirlik (Accessibility) 100/100:** Görme engelli kullanıcılar ve ekran okuyucular için tüm simge butonlarına, akordeon menülere (`aria-expanded`) ve formlara eksiksiz `aria-label` tanımlamaları yapıldı.
*   **Best Practices & Güvenlik:** Yeni sekmede açılan (`target="_blank"`) tüm bağlantılara `rel="noreferrer"` eklenerek yönlendirme açıkları kapatıldı. Yapısal veriler (JSON-LD Schema) arama motoru botları için optimize edildi.

---

## 📦 Kurulum ve Çalıştırma

### Gereksinimler
Sisteminizde **Node.js** (v18+) kurulu olmalıdır.

### 1. Bağımlılıkları Yükleyin
Proje klasörüne girip gerekli paketleri yükleyin:
```bash
npm install
```

### 2. Geliştirme Modunu Başlatın (Local Development)
Projeyi yerel sunucuda (`http://localhost:5173`) çalıştırmak için:
```bash
npm run dev
```

### 3. Canlı Sürümü Derleyin (Build)
Sitenin üretim (Production) paketini oluşturmak için:
```bash
npm run build
```
Bu komut, tüm dosyaları sıkıştırıp optimize ederek **`dist/`** klasörünün içerisine atar. Canlı sunucunuza sadece `dist/` klasörünün içeriğini yüklemeniz yeterlidir.

### 4. Canlı Sürümü Yerelde Test Edin (Preview)
Derlenmiş canlı paketi yerel bilgisayarınızda test etmek için:
```bash
npm run preview
```

---

## 📈 Yayına Alma (Hosting) Önerileri

Bu site **statik bir React uygulaması** olduğu için herhangi bir veritabanı veya sunucu lisansı gerektirmez. Güvenlik, hız ve ücretsiz barındırma için aşağıdaki platformlar önerilir:
1.  **Vercel / Netlify / Cloudflare Pages:** Projenizin `dist/` klasörünü bu platformlara sürükle-bırak yöntemiyle yükleyebilir, alan adınızı (domain) bağlayıp ömür boyu **ücretsiz SSL** ve maksimum CDN hızıyla yayına alabilirsiniz.
2.  **Klasik cPanel Hosting:** `dist/` klasörünün içindeki tüm dosyaları FTP üzerinden sunucunuzdaki `public_html` klasörüne yüklemeniz yeterlidir.

---

🔒 **Lisans:** Bu projenin tüm hakları saklıdır.
