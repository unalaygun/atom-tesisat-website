import React, { useState } from 'react';
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
      {showCookiePolicyModal && <PolicyModal lang={lang} setShowCookiePolicyModal={setShowCookiePolicyModal} />}

    </footer>
  );
}

// Sub-component for structured policy documents with tabs
function PolicyModal({ lang, setShowCookiePolicyModal }) {
  const [activeTab, setActiveTab] = useState('kvkk');

  const tabs = [
    { id: 'kvkk', tr: 'KVKK Aydınlatma', en: 'KVKK Clarification' },
    { id: 'privacy', tr: 'Gizlilik Politikası', en: 'Privacy Policy' },
    { id: 'cookies', tr: 'Çerez Politikası', en: 'Cookie Policy' },
    { id: 'terms', tr: 'Kullanım Koşulları', en: 'Terms of Use' }
  ];

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-slate-900 border border-slate-800 text-slate-100 w-full max-w-3xl rounded-3xl p-6 sm:p-8 shadow-2xl relative animate-in zoom-in-95 duration-200 text-left flex flex-col max-h-[85vh]">
        <button 
          onClick={() => setShowCookiePolicyModal(false)}
          aria-label={lang === 'tr' ? 'Kapat' : 'Close'}
          className="absolute top-4 right-4 text-slate-400 hover:text-white p-1.5 rounded-xl hover:bg-slate-800 focus:outline-none cursor-pointer z-10"
        >
          <X className="w-6 h-6" />
        </button>
        
        <div className="flex items-center space-x-2.5 mb-6">
          <span className="text-2xl">📋</span>
          <h3 className="text-lg sm:text-xl font-extrabold text-white">
            {lang === 'tr' ? 'Yasal Metinler ve Politikalar' : 'Legal Policies & KVKK'}
          </h3>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-slate-800 overflow-x-auto scrollbar-none mb-6">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2.5 font-bold text-xs sm:text-sm whitespace-nowrap border-b-2 transition-all cursor-pointer focus:outline-none ${
                activeTab === tab.id
                  ? 'border-orange-500 text-orange-500'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              {lang === 'tr' ? tab.tr : tab.en}
            </button>
          ))}
        </div>

        {/* Tab Content - Scrollable container */}
        <div className="flex-grow overflow-y-auto pr-2 space-y-5 text-slate-300 text-xs sm:text-sm leading-relaxed scrollbar-thin">
          
          {/* KVKK Content */}
          {activeTab === 'kvkk' && (
            lang === 'tr' ? (
              <div className="space-y-4">
                <h4 className="font-extrabold text-white text-base">6698 Sayılı KVKK Kapsamında Aydınlatma Metni</h4>
                <p>
                  <strong>Atom Tesisat</strong> ("Veri Sorumlusu") olarak, web sitemizi ziyaret eden kullanıcılarımızın ve hizmet alıcılarımızın kişisel verilerinin korunmasına büyük önem veriyoruz. Bu metin, 6698 Sayılı Kişisel Verilerin Korunması Kanunu'nun (KVKK) 10. maddesi uyarınca aydınlatma yükümlülüğümüzün yerine getirilmesi amacıyla hazırlanmıştır.
                </p>
                <div className="space-y-2">
                  <h5 className="font-bold text-white">1. İşlenen Kişisel Verileriniz</h5>
                  <p>Web sitemizdeki online randevu formu aracılığıyla sadece şu verileriniz işlenmektedir:</p>
                  <ul className="list-disc pl-5">
                    <li>Kimlik Bilgisi: Adınız ve Soyadınız.</li>
                    <li>İletişim Bilgisi: Telefon Numaranız ve Açık Adresiniz.</li>
                    <li>Talep Bilgisi: Tercih ettiğiniz tesisat hizmeti, tarih ve saat.</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h5 className="font-bold text-white">2. Kişisel Veri İşleme Amaçları ve Hukuki Sebepleri</h5>
                  <p>Kişisel verileriniz, KVKK'nın 5. maddesi kapsamında şu hukuki sebeplere dayanılarak işlenmektedir:</p>
                  <ul className="list-disc pl-5">
                    <li>"Bir sözleşmenin kurulması veya ifasıyla doğrudan doğruya ilgili olması kaydıyla, sözleşmenin taraflarına ait kişisel verilerin işlenmesinin gerekli olması" hukuki sebebine dayanarak; sıhhi tesisat tamirat, su kaçağı tespiti, petek temizliği ve gider açma hizmetlerimize yönelik randevu taleplerinizin alınması, teyit edilmesi ve adresinize mobil servis yönlendirilmesi amacıyla.</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h5 className="font-bold text-white">3. Kişisel Verilerin Aktarılması ve Yurtdışı Aktarım</h5>
                  <p>
                    Web sitemizde yer alan randevu formu, kişisel verilerinizi kendi veritabanımızda veya sunucularımızda <strong>saklamamaktadır</strong>. Randevuyu onayladığınızda, form verileri doğrudan tarayıcınız üzerinden WhatsApp API aracılığıyla WhatsApp (Meta Platforms, Inc.) uygulamasına iletilmektedir. 
                  </p>
                  <p className="border-l-2 border-orange-500 pl-3 text-slate-400 italic">
                    Önemli Not: WhatsApp sunucularının yurtdışında bulunması nedeniyle, randevu formunu doldurup "WhatsApp ile Gönder" butonuna bastığınızda, kişisel verileriniz teknik olarak yurtdışına aktarılmış sayılmaktadır. Bu işlem, randevu alma talebinizin ve iletişim tercihinizin bir sonucu olarak sizin açık yönlendirmenizle gerçekleşmektedir.
                  </p>
                </div>
                <div className="space-y-2">
                  <h5 className="font-bold text-white">4. KVKK Madde 11 Kapsamındaki Haklarınız</h5>
                  <p>
                    Kanun'un 11. maddesi uyarınca; kişisel verilerinizin işlenip işlenmediğini öğrenme, işlenmişse bilgi talep etme, işlenme amacına uygun kullanılıp kullanılmadığını öğrenme, eksik veya yanlış işlenmişse düzeltilmesini isteme ve verilerinizin silinmesini talep etme haklarına sahipsiniz. Haklarınızı kullanmak için <strong>atomtesisat28@gmail.com</strong> adresine e-posta yoluyla başvurabilirsiniz.
                  </p>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <h4 className="font-extrabold text-white text-base">Clarification Text Under Personal Data Protection Law (KVKK)</h4>
                <p>
                  As <strong>Atom Tesisat</strong> ("Data Controller"), we pay ultimate attention to the protection of our website visitors' personal data. This text is prepared in accordance with Article 10 of the Turkish Personal Data Protection Law No. 6698 (KVKK) to fulfill our obligation to inform you.
                </p>
                <div className="space-y-2">
                  <h5 className="font-bold text-white">1. Processed Personal Data</h5>
                  <p>Only the following data is processed through the online appointment booking form on our website:</p>
                  <ul className="list-disc pl-5">
                    <li>Identity: Full Name.</li>
                    <li>Contact: Phone Number and Open Address.</li>
                    <li>Request: Preferred service type, date, and time.</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h5 className="font-bold text-white">2. Processing Purposes and Legal Grounds</h5>
                  <p>Your personal data is processed under the legal grounds of Article 5 of KVKK:</p>
                  <ul className="list-disc pl-5">
                    <li>"Necessity of processing personal data of contract parties, provided that it is directly related to the establishment or performance of a contract"; to receive your appointment requests, confirm service details, and dispatch our mobile service team to your address.</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h5 className="font-bold text-white">3. Data Transfers and Cross-Border Sharing</h5>
                  <p>
                    Our appointment form <strong>does not store</strong> your personal data on our own database or servers. Once you approve, the form data is sent directly from your browser to WhatsApp (Meta Platforms, Inc.) via the WhatsApp API.
                  </p>
                  <p className="border-l-2 border-orange-500 pl-3 text-slate-400 italic">
                    Important Note: Since WhatsApp servers are located abroad, when you submit the form, your data is technically transferred abroad. This transfer is initiated directly by your own request and action to request services through WhatsApp.
                  </p>
                </div>
                <div className="space-y-2">
                  <h5 className="font-bold text-white">4. Your Rights Under Article 11 of KVKK</h5>
                  <p>
                    You have the right to learn whether your data is processed, request information, check if it's used for intended purposes, request correction of incomplete data, or request deletion under Article 11. You can exercise these rights by emailing us at <strong>atomtesisat28@gmail.com</strong>.
                  </p>
                </div>
              </div>
            )
          )}

          {/* Privacy Policy Content */}
          {activeTab === 'privacy' && (
            lang === 'tr' ? (
              <div className="space-y-4">
                <h4 className="font-extrabold text-white text-base">Gizlilik Politikası</h4>
                <p>
                  Bu Gizlilik Politikası, <strong>https://www.atom-tesisat.com</strong> adresini ziyaret eden kullanıcılarımızın gizlilik haklarını korumak amacıyla hazırlanmıştır.
                </p>
                <div className="space-y-2">
                  <h5 className="font-bold text-white">1. Veri Güvenliği</h5>
                  <p>
                    Web sitemiz ile tarayıcınız arasındaki veri trafiği, SSL (Secure Sockets Layer) sertifikası ile şifrelenerek güvence altına alınmaktadır. Randevu formunda girdiğiniz hiçbir bilgi üçüncü taraflarca okunamaz ve sitemizin kendi veritabanlarında saklanmaz.
                  </p>
                </div>
                <div className="space-y-2">
                  <h5 className="font-bold text-white">2. Üçüncü Taraf Bağlantılar ve Servisler</h5>
                  <p>
                    Web sitemizde kullanıcı deneyimini artırmak ve adresimizi kolay bulabilmeniz amacıyla harici servisler (Google Maps, Instagram vb.) kullanılmaktadır. Bu servislerin kendi gizlilik politikaları geçerli olup, Atom Tesisat harici servislerin veri işleme faaliyetlerinden sorumlu tutulamaz.
                  </p>
                </div>
                <div className="space-y-2">
                  <h5 className="font-bold text-white">3. Güncellemeler</h5>
                  <p>
                    Bu gizlilik politikası, mevzuat değişikliklerine ve hizmet süreçlerimize bağlı olarak zaman zaman güncellenebilir. Sitemizi kullanarak bu gizlilik politikasını kabul etmiş sayılırsınız.
                  </p>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <h4 className="font-extrabold text-white text-base">Privacy Policy</h4>
                <p>
                  This Privacy Policy is prepared to protect the privacy rights of users visiting <strong>https://www.atom-tesisat.com</strong>.
                </p>
                <div className="space-y-2">
                  <h5 className="font-bold text-white">1. Data Security</h5>
                  <p>
                    Data traffic between our website and your browser is secured using SSL (Secure Sockets Layer) encryption. No information entered in the appointment form is stored in our database or readable by unauthorized third parties.
                  </p>
                </div>
                <div className="space-y-2">
                  <h5 className="font-bold text-white">2. Third-Party Links & Services</h5>
                  <p>
                    External services like Google Maps and Instagram are integrated to improve user experience. These services operate under their own privacy policies, and Atom Tesisat cannot be held liable for their data processing activities.
                  </p>
                </div>
                <div className="space-y-2">
                  <h5 className="font-bold text-white">3. Updates</h5>
                  <p>
                    This policy may be updated from time to time to comply with changes in legislation or our service procedures. By using our website, you agree to this privacy policy.
                  </p>
                </div>
              </div>
            )
          )}

          {/* Cookie Policy Content */}
          {activeTab === 'cookies' && (
            lang === 'tr' ? (
              <div className="space-y-4">
                <h4 className="font-extrabold text-white text-base">Çerez Politikası</h4>
                <p>
                  <strong>Atom Tesisat</strong> olarak, web sitemizin düzgün çalışması, performansının ölçülmesi ve kullanıcı deneyiminin iyileştirilmesi amacıyla çerezleri (cookies) kullanıyoruz.
                </p>
                <div className="space-y-2">
                  <h5 className="font-bold text-white">1. Çerez Nedir?</h5>
                  <p>
                    Çerezler, ziyaret ettiğiniz web siteleri tarafından tarayıcınız vasıtasıyla cihazınıza yerleştirilen küçük metin dosyalarıdır.
                  </p>
                </div>
                <div className="space-y-2">
                  <h5 className="font-bold text-white">2. Kullandığımız Çerez Türleri</h5>
                  <ul className="list-disc pl-5 space-y-1">
                    <li><strong>Zorunlu Çerezler:</strong> Web sitesinin temel fonksiyonlarının çalışması (örn. dil seçiminizin hatırlanması, çerez onayınızın kaydedilmesi) için zorunlu olan teknik çerezlerdir.</li>
                    <li><strong>Performans ve Analiz Çerezleri:</strong> Sitenin ziyaretçi sayıları ve trafik akışını isimsiz olarak analiz ederek sitemizi geliştirmemize yardımcı olan çerezlerdir.</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h5 className="font-bold text-white">3. Çerezlerin Yönetimi</h5>
                  <p>
                    Çerezlerin kullanılmasını istemiyorsanız, tarayıcınızın ayarlarından çerez kullanımını engelleyebilir, sınırlandırabilir ya da kaydedilmiş çerezleri temizleyebilirsiniz. Lütfen zorunlu çerezler engellendiğinde web sitemizin bazı fonksiyonlarının tam çalışmayabileceğini unutmayınız.
                  </p>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <h4 className="font-extrabold text-white text-base">Cookie Policy</h4>
                <p>
                  As <strong>Atom Tesisat</strong>, we use cookies to ensure our website functions correctly, measure performance, and improve your user experience.
                </p>
                <div className="space-y-2">
                  <h5 className="font-bold text-white">1. What is a Cookie?</h5>
                  <p>
                    Cookies are small text files placed on your device by websites you visit through your browser.
                  </p>
                </div>
                <div className="space-y-2">
                  <h5 className="font-bold text-white">2. Cookie Types We Use</h5>
                  <ul className="list-disc pl-5 space-y-1">
                    <li><strong>Necessary Cookies:</strong> Technical cookies required for basic website functions (e.g., remembering language choice, storing cookie consent).</li>
                    <li><strong>Performance & Analytics Cookies:</strong> Cookies that anonymously analyze visitor metrics to help us optimize the website.</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h5 className="font-bold text-white">3. Managing Cookies</h5>
                  <p>
                    If you prefer not to allow cookies, you can disable, limit, or clear them via your browser's privacy settings. Please note that disabling necessary cookies may affect the usability of certain parts of the website.
                  </p>
                </div>
              </div>
            )
          )}

          {/* Terms of Use Content */}
          {activeTab === 'terms' && (
            lang === 'tr' ? (
              <div className="space-y-4">
                <h4 className="font-extrabold text-white text-base">Kullanım Koşulları</h4>
                <p>
                  <strong>https://www.atom-tesisat.com</strong> web sitesine erişim sağlayarak ve bu siteyi kullanarak aşağıdaki kullanım koşullarını kabul etmiş sayılırsınız.
                </p>
                <div className="space-y-2">
                  <h5 className="font-bold text-white">1. Hizmet Tanıtımı ve Bilgi Amaçlı Kullanım</h5>
                  <p>
                    Bu web sitesi, sıhhi tesisat tamiratı, su kaçağı bulma, robotla pimaş açma ve petek temizleme hizmetlerimizin tanıtımı ve online servis randevusu toplanması amacıyla kurulmuştur. Sitedeki genel tesisat tavsiyeleri sadece bilgilendirme amaçlı olup, yerinde inceleme yapılmadan uygulanan işlemlerin sonuçlarından Atom Tesisat sorumlu değildir.
                  </p>
                </div>
                <div className="space-y-2">
                  <h5 className="font-bold text-white">2. Randevu Talepleri ve Servis Koşulları</h5>
                  <p>
                    Sitemiz üzerinden oluşturduğunuz randevular bir ön talep niteliğindedir. Tesisat ustalarımız sizinle telefonla iletişime geçerek randevu saatini, yapılacak işlemi ve olası maliyetleri teyit ettikten sonra kesin servis kaydı oluşturulacaktır.
                  </p>
                </div>
                <div className="space-y-2">
                  <h5 className="font-bold text-white">3. Fikri Mülkiyet Hakları</h5>
                  <p>
                    Web sitesinde yer alan logo, görsel tasarımlar, metinler ve kodlar Atom Tesisat'a aittir ve yazılı izin olmaksızın kopyalanamaz, ticari amaçla kullanılamaz.
                  </p>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <h4 className="font-extrabold text-white text-base">Terms of Use</h4>
                <p>
                  By accessing and using the website <strong>https://www.atom-tesisat.com</strong>, you agree to comply with these terms of use.
                </p>
                <div className="space-y-2">
                  <h5 className="font-bold text-white">1. Service Presentation & Information Purpose</h5>
                  <p>
                    This website is created to promote our plumbing, leak detection, drain clearing, and radiator flushing services, and to gather online booking requests. General plumbing advice on the website is for informational purposes only. Atom Tesisat is not liable for actions taken without our on-site professional physical inspection.
                  </p>
                </div>
                <div className="space-y-2">
                  <h5 className="font-bold text-white">2. Appointment Bookings & Service Conditions</h5>
                  <p>
                    Bookings created on the website represent a pre-request. Our plumbing masters will contact you via phone to confirm your appointment time, required service, and estimated costs before final dispatch.
                  </p>
                </div>
                <div className="space-y-2">
                  <h5 className="font-bold text-white">3. Intellectual Property Rights</h5>
                  <p>
                    Logos, graphic designs, texts, and source codes used on this website belong to Atom Tesisat and cannot be copied or used for commercial purposes without written consent.
                  </p>
                </div>
              </div>
            )
          )}

        </div>

        <div className="pt-4 mt-6 border-t border-slate-800 flex justify-end">
          <button 
            onClick={() => setShowCookiePolicyModal(false)}
            className="px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white text-xs sm:text-sm font-bold rounded-2xl shadow-lg transition-all cursor-pointer hover:-translate-y-0.5 active:scale-98"
          >
            {lang === 'tr' ? 'Okudum, Kapat' : 'Read, Close'}
          </button>
        </div>
      </div>
    </div>
  );
}
