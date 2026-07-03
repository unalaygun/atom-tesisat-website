import React from 'react';
import { Phone, Mail, MapPin, Flame, X } from 'lucide-react';

export default function Footer({
  lang,
  t,
  showCookieBanner,
  setShowCookieBanner,
  showCookiePolicyModal,
  setShowCookiePolicyModal,
  handleAcceptCookies,
  handleRejectCookies
}) {
  return (
    <footer id="iletisim" className="bg-slate-900 text-white scroll-mt-20">
      
      {/* Contact Info and Map */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Contact Details */}
          <div className="lg:col-span-5 space-y-8 text-left">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-lg bg-orange-500 flex items-center justify-center">
                <Flame className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-extrabold">{t('contactTitle')}</h2>
              <p className="text-slate-400 leading-relaxed">
                {lang === 'tr' 
                  ? 'Ümraniye Merkez Ofisimizle çevre ilçe ve mahallelere 7/24 hizmet götürüyoruz. Bize dilediğiniz an ulaşabilirsiniz.'
                  : 'We provide 24/7 service to surrounding districts and neighborhoods from our Umraniye Head Office. You can reach us at any time.'}
              </p>
            </div>

            <div className="space-y-4">
              {/* Phone */}
              <a 
                href="tel:05459284543" 
                className="flex items-start space-x-4 p-4 bg-slate-800/50 rounded-2xl border border-slate-700/30 hover:border-orange-500/30 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center group-hover:bg-orange-500 group-hover:text-white text-orange-400 transition-colors">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <span className="block text-sm text-slate-400 font-medium">{t('contactPhone')}</span>
                  <span className="text-lg font-bold text-white tracking-wide">0545 928 45 43</span>
                </div>
              </a>

              {/* Email */}
              <a 
                href="mailto:atomtesisat28@gmail.com"
                className="flex items-start space-x-4 p-4 bg-slate-800/50 rounded-2xl border border-slate-700/30 hover:border-orange-500/30 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center group-hover:bg-orange-500 group-hover:text-white text-orange-400 transition-colors">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <span className="block text-sm text-slate-400 font-medium">{t('contactEmail')}</span>
                  <span className="text-base font-bold text-white">atomtesisat28@gmail.com</span>
                </div>
              </a>

              {/* Address */}
              <div className="flex items-start space-x-4 p-4 bg-slate-800/50 rounded-2xl border border-slate-700/30">
                <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-400">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="block text-sm text-slate-400 font-medium">{t('contactAddress')}</span>
                  <span className="text-sm font-semibold text-white">
                    Kazım Karabekir Mah. Güzeltepe Cad. No: 57 Ümraniye/İstanbul
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Google Map Frame */}
          <div className="lg:col-span-7 h-[400px] w-full rounded-3xl overflow-hidden border border-slate-700/50 shadow-2xl relative">
            <iframe 
              title="Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3008.064115160867!2d29.102377312157577!3d41.042250271224756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac840efeb0bfd%3A0x6b360b4578b9f27c!2zR8O8emVsdGVwZSBDZC4gTm86NTcsIDM0NzYwIMOcbXJhbml5ZS_EsHN0YW5idWw!5e0!3m2!1str!2str!4v1719920000000!5m2!1str!2str"
              width="100%" 
              height="100%"  
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full"
            ></iframe>
          </div>

        </div>
      </div>

      {/* Brand Footer Info */}
      <div className="border-t border-slate-800 bg-slate-950 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between text-slate-500 text-sm">
          <a 
            href={lang === 'en' ? '/?lang=en' : '/'} 
            className="flex items-center space-x-2.5 mb-4 md:mb-0 hover:opacity-90 transition-opacity cursor-pointer text-white"
          >
            <img 
              src="/logo.webp" 
              alt="Atom Tesisat Logo" 
              width="28"
              height="28"
              className="w-7 h-7 rounded-md object-cover border border-slate-800"
            />
            <span className="font-bold">Atom Tesisat</span>
            <span className="text-slate-500 text-sm ml-1">© {new Date().getFullYear()} {lang === 'tr' ? 'Tüm Hakları Saklıdır.' : 'All Rights Reserved.'}</span>
          </a>
          
          {/* Social Media Links */}
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-3">
              <a 
                href="https://www.instagram.com/atom.tesisat/" 
                target="_blank" 
                rel="noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 rounded-lg bg-slate-900 hover:bg-orange-500 hover:text-white flex items-center justify-center text-slate-400 transition-colors border border-slate-800"
                title="Instagram"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a 
                href="https://www.youtube.com/@atomtesisat/shorts" 
                target="_blank" 
                rel="noreferrer"
                aria-label="YouTube"
                className="w-8 h-8 rounded-lg bg-slate-900 hover:bg-orange-500 hover:text-white flex items-center justify-center text-slate-400 transition-colors border border-slate-800"
                title="YouTube"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                </svg>
              </a>
            </div>
            <span className="text-xs text-slate-500 hidden sm:inline">
              {lang === 'tr' ? 'Hızlı. Kırmadan. Cihazla Su Kaçağı Tespiti.' : 'Fast. No Damage. Water Leak Detection via Acoustic Devices.'}
            </span>
          </div>
        </div>
      </div>

      {/* Cookie Consent Banner */}
      {showCookieBanner && (
        <div className="fixed bottom-6 left-6 right-6 md:left-auto md:right-6 md:w-96 z-50 bg-slate-900/95 backdrop-blur-md text-white p-5 rounded-3xl shadow-2xl border border-slate-800 animate-in slide-in-from-bottom-8 duration-300">
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <span className="text-2xl mt-0.5">🍪</span>
              <div className="text-left space-y-1">
                <h4 className="font-bold text-sm text-white">
                  {t('cookiesTitle')}
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {lang === 'tr' ? (
                    <>
                      Web sitemizde deneyiminizi geliştirmek, site trafiğini analiz etmek ve size en iyi sıhhi tesisat hizmetini sunabilmek için KVKK mevzuatına uygun çerezler (cookies) kullanıyoruz. <button onClick={() => setShowCookiePolicyModal(true)} className="text-orange-400 underline font-semibold hover:text-orange-300 focus:outline-none cursor-pointer">Çerez Politikası ve Aydınlatma Metni</button>'ni okumak için tıklayınız.
                    </>
                  ) : (
                    <>
                      We use cookies in compliance with KVKK regulations to improve your experience on our website, analyze site traffic, and provide you with the best plumbing service. Click to read the <button onClick={() => setShowCookiePolicyModal(true)} className="text-orange-400 underline font-semibold hover:text-orange-300 focus:outline-none cursor-pointer">Cookie Policy and Clarification Text</button>.
                    </>
                  )}
                </p>
              </div>
            </div>
            <div className="flex items-center justify-end space-x-3 pt-2">
              <button 
                onClick={handleRejectCookies}
                className="px-3.5 py-1.5 hover:bg-slate-800 text-slate-400 hover:text-white rounded-xl text-xs font-semibold transition-colors cursor-pointer"
              >
                {lang === 'tr' ? 'Reddet' : 'Reject'}
              </button>
              <button 
                onClick={handleAcceptCookies}
                className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-xl text-xs font-bold shadow-md shadow-orange-500/10 transition-all cursor-pointer"
              >
                {lang === 'tr' ? 'Kabul Et ve Onayla' : 'Accept & Approve'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Cookie Policy Modal */}
      {showCookiePolicyModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 text-slate-100 w-full max-w-2xl rounded-3xl p-6 sm:p-8 shadow-2xl relative animate-in zoom-in-95 duration-200 text-left">
            <button 
              onClick={() => setShowCookiePolicyModal(false)}
              aria-label={lang === 'tr' ? 'Kapat' : 'Close'}
              className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 focus:outline-none cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>
            
            <div className="space-y-6 max-h-[70vh] overflow-y-auto pr-2">
              <div className="flex items-center space-x-2">
                <span className="text-2xl">📋</span>
                <h3 className="text-lg sm:text-xl font-extrabold text-white">
                  {lang === 'tr' ? 'Çerez Politikası & Aydınlatma Metni' : 'Cookie Policy & Clarification'}
                </h3>
              </div>
              
              <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
                {lang === 'tr' ? (
                  <>
                    <p>
                      <strong>Atom Tesisat</strong> olarak web sitemizi ziyaret eden kullanıcılarımızın gizliliğini korumak ve yasal mevzuatlara uyum sağlamak birinci önceliğimizdir. 6698 Sayılı Kişisel Verilerin Korunması Kanunu (KVKK) kapsamında çerezlerin kullanımı hakkında sizleri bilgilendirmek isteriz.
                    </p>
                    <div className="space-y-2">
                      <h4 className="font-bold text-white text-sm">1. Çerez (Cookie) Nedir?</h4>
                      <p>
                        Çerezler, ziyaret ettiğiniz internet siteleri tarafından tarayıcınız (browser) aracılığıyla cihazınıza veya ağ sunucusuna depolanan küçük metin dosyalarıdır.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-bold text-white text-sm">2. Çerezleri Neden Kullanıyoruz?</h4>
                      <p>
                        Web sitemizde çerezler aşağıdaki amaçlarla kullanılmaktadır:
                      </p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Sitenin teknik olarak düzgün çalışmasını sağlamak (Zorunlu çerezler).</li>
                        <li>Sizin için oluşturduğumuz online randevu formunun kararlı çalışmasını sağlamak.</li>
                        <li>Kullanıcı tercihlerini (örneğin bu çerez bildirimini kabul ettiğinizi) hatırlamak.</li>
                        <li>Ziyaretçi sayılarını analiz ederek site performansını optimize etmek.</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-bold text-white text-sm">3. Kullanılan Çerezlerin Yönetimi</h4>
                      <p>
                        Web tarayıcınızın ayarlarını değiştirerek çerez kullanım tercihinizi kişiselleştirebilir, kayıtlı çerezleri silebilir veya çerez kullanımını tamamen engelleyebilirsiniz. Lütfen unutmayın ki zorunlu çerezlerin engellenmesi durumunda, sitemizdeki bazı işlevler (örneğin randevu kaydı oluşturma) kısmen veya tamamen çalışmayabilir.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-bold text-white text-sm">4. KVKK Kapsamındaki Haklarınız</h4>
                      <p>
                        KVKK'nın 11. maddesi uyarınca, Atom Tesisat'a başvurarak kişisel verilerinizin işlenip işlenmediğini öğrenme, işlenmişse bilgi talep etme, işlenme amacına uygun kullanılıp kullanılmadığını öğrenme ve verilerinizin silinmesini talep etme haklarına sahipsiniz. Sorularınız için <strong>atomtesisat28@gmail.com</strong> adresinden bize her zaman ulaşabilirsiniz.
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    <p>
                      As <strong>Atom Tesisat</strong>, protecting the privacy of our users visiting our website and ensuring compliance with legal regulations is our top priority. We would like to inform you about the use of cookies within the scope of Personal Data Protection Law No. 6698 (KVKK).
                    </p>
                    <div className="space-y-2">
                      <h4 className="font-bold text-white text-sm">1. What is a Cookie?</h4>
                      <p>
                        Cookies are small text files stored on your device or network server through your browser by the websites you visit.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-bold text-white text-sm">2. Why Do We Use Cookies?</h4>
                      <p>
                        Cookies are used on our website for the following purposes:
                      </p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Ensuring the site runs properly (Mandatory cookies).</li>
                        <li>Ensuring stable operation of our online appointment booking form.</li>
                        <li>Remembering user preferences (e.g., that you accepted this cookie notice).</li>
                        <li>Optimizing site performance by analyzing visitor counts.</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-bold text-white text-sm">3. Managing Used Cookies</h4>
                      <p>
                        You can personalize your cookie preferences, delete registered cookies, or completely block cookie usage by changing your browser settings. Please note that if mandatory cookies are blocked, some functions on our site (e.g., booking form) may not work properly.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-bold text-white text-sm">4. Your Rights Under KVKK</h4>
                      <p>
                        In accordance with Article 11 of the KVKK, by applying to Atom Tesisat, you have the right to learn whether your personal data is processed, request information if processed, learn the purpose of processing, and request the deletion of your data. For any questions, you can contact us at <strong>atomtesisat28@gmail.com</strong>.
                      </p>
                    </div>
                  </>
                )}
              </div>

              <div className="pt-4 border-t border-slate-800 flex justify-end">
                <button 
                  onClick={() => setShowCookiePolicyModal(false)}
                  className="px-6 py-2.5 bg-orange-500 hover:bg-orange-600 text-white text-sm font-bold rounded-xl shadow-md transition-colors cursor-pointer"
                >
                  {lang === 'tr' ? 'Okudum, Kapat' : 'Read, Close'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </footer>
  );
}
