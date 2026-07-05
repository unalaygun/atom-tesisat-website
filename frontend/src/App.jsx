import React, { useState, useEffect } from 'react';
import { 
  Phone,
  Droplet, 
  ShieldCheck, 
  Wrench, 
  Activity,
  Sparkles, 
  Compass, 
  Flame,
  MessageSquare
} from 'lucide-react';

import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppWidget from './components/WhatsAppWidget';
import AppointmentForm from './components/AppointmentForm';
import FAQAccordion from './components/FAQAccordion';
import { TRANSLATIONS, SERVICE_PAGES_CONTENT, PAGE_SEO_CONTENT } from './constants/translations';

const getPagePath = (pageId) => {
  if (pageId === 'leak') return '/su-kacagi-tespiti';
  if (pageId === 'clog') return '/tikaniklik-acma';
  if (pageId === 'drain') return '/gider-acma';
  if (pageId === 'heater') return '/petek-temizligi';
  return '/';
};

function App() {
  // Active Language State
  const [lang, setLang] = useState(() => {
    const params = new URLSearchParams(window.location.search);
    const urlLang = params.get('lang');
    if (urlLang === 'tr' || urlLang === 'en') return urlLang;
    const localLang = localStorage.getItem('atom_lang');
    return localLang === 'en' ? 'en' : 'tr';
  });

  const t = (key) => TRANSLATIONS[lang][key] || key;

  // Active page detection
  const getActivePage = () => {
    const path = window.location.pathname.toLowerCase();
    if (path.includes('su-kacagi-tespiti')) return 'leak';
    if (path.includes('tikaniklik-acma')) return 'clog';
    if (path.includes('gider-acma')) return 'drain';
    if (path.includes('petek-temizligi')) return 'heater';
    return 'main';
  };
  const activePage = getActivePage();

  const getNavHref = (anchor) => {
    if (activePage === 'main') {
      return anchor === 'home' ? '#' : `#${anchor}`;
    }
    return anchor === 'home' ? `/?lang=${lang}` : `/?lang=${lang}#${anchor}`;
  };

  const getServiceTitle = (pageId, currentLang) => {
    if (pageId === 'leak') return currentLang === 'tr' ? 'Su Kaçağı Tespiti' : 'Water Leak Detection';
    if (pageId === 'clog') return currentLang === 'tr' ? 'Tıkanıklık Açma' : 'Clog Clearing';
    if (pageId === 'drain') return currentLang === 'tr' ? 'Gider Açma' : 'Drain Cleaning';
    if (pageId === 'heater') return currentLang === 'tr' ? 'Petek Temizliği' : 'Radiator Cleaning';
    return '';
  };

  // Navigation Drawer State
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState(null);

  // Appointment Form States
  const [formData, setFormData] = useState({
    isim: '',
    telefon: '',
    hizmet: getServiceTitle(activePage, lang),
    tarih: '',
    saat: '',
    adres: ''
  });

  // Sync service pre-selection when page language changes
  useEffect(() => {
    const prefilledService = getServiceTitle(activePage, lang);
    if (prefilledService) {
      setFormData(prev => ({
        ...prev,
        hizmet: prefilledService
      }));
    }
  }, [lang, activePage]);

  // Sync language selection with local storage and dynamic HTML attribute and URL query params
  useEffect(() => {
    localStorage.setItem('atom_lang', lang);
    document.documentElement.lang = lang;
    
    const searchParams = new URLSearchParams(window.location.search);
    if (searchParams.get('lang') !== lang) {
      searchParams.set('lang', lang);
      const newUrl = `${window.location.pathname}?${searchParams.toString()}${window.location.hash}`;
      window.history.pushState({ path: newUrl }, '', newUrl);
    }
  }, [lang]);

  // Sync page SEO title and description
  useEffect(() => {
    const seo = PAGE_SEO_CONTENT[activePage] ? PAGE_SEO_CONTENT[activePage][lang] : null;
    if (seo) {
      document.title = seo.title;
      // Update meta description
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', seo.description);
      }
      // Update og:title and og:description
      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) {
        ogTitle.setAttribute('content', seo.title);
      }
      const ogDescription = document.querySelector('meta[property="og:description"]');
      if (ogDescription) {
        ogDescription.setAttribute('content', seo.description);
      }
    }
  }, [lang, activePage]);

  const [formStatus, setFormStatus] = useState({
    submitting: false,
    success: false,
    error: null
  });

  // Cookie banner states
  const [showCookieBanner, setShowCookieBanner] = useState(false);
  const [showCookiePolicyModal, setShowCookiePolicyModal] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem('atom_cookies_accepted');
    if (accepted !== 'true' && accepted !== 'false') {
      const timer = setTimeout(() => {
        setShowCookieBanner(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptCookies = () => {
    localStorage.setItem('atom_cookies_accepted', 'true');
    setShowCookieBanner(false);
  };

  const handleRejectCookies = () => {
    localStorage.setItem('atom_cookies_accepted', 'false');
    setShowCookieBanner(false);
  };

  // Handle Form Change
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    if (name === 'telefon') {
      // Turkish phone formatter
      const numbers = value.replace(/\D/g, '');
      let formatted = '';
      if (numbers.length === 0) {
        formatted = '';
      } else if (numbers.startsWith('0')) {
        const part1 = numbers.slice(0, 4); // 05XX
        const part2 = numbers.slice(4, 7); // XXX
        const part3 = numbers.slice(7, 9); // XX
        const part4 = numbers.slice(9, 11); // XX
        
        if (numbers.length > 9) {
          formatted = `${part1} ${part2} ${part3} ${part4}`;
        } else if (numbers.length > 7) {
          formatted = `${part1} ${part2} ${part3}`;
        } else if (numbers.length > 4) {
          formatted = `${part1} ${part2}`;
        } else {
          formatted = part1;
        }
      } else {
        if (numbers.startsWith('5')) {
          const padded = '0' + numbers;
          const part1 = padded.slice(0, 4);
          const part2 = padded.slice(4, 7);
          const part3 = padded.slice(7, 9);
          const part4 = padded.slice(9, 11);
          if (padded.length > 9) {
            formatted = `${part1} ${part2} ${part3} ${part4}`;
          } else if (padded.length > 7) {
            formatted = `${part1} ${part2} ${part3}`;
          } else if (padded.length > 4) {
            formatted = `${part1} ${part2}`;
          } else {
            formatted = part1;
          }
        } else {
          formatted = numbers.slice(0, 11);
        }
      }
      setFormData(prev => ({
        ...prev,
        [name]: formatted
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  // Submit Appointment Form to WhatsApp directly
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.isim || !formData.telefon || !formData.hizmet || !formData.tarih || !formData.saat || !formData.adres) {
      setFormStatus({ submitting: false, success: false, error: lang === 'tr' ? 'Lütfen tüm alanları doldurun.' : 'Please fill in all fields.' });
      return;
    }

    // Validate phone number
    const cleanPhone = formData.telefon.replace(/\D/g, '');
    if (cleanPhone.length !== 11 || !cleanPhone.startsWith('05')) {
      setFormStatus({
        submitting: false,
        success: false,
        error: lang === 'tr' 
          ? 'Lütfen geçerli bir telefon numarası giriniz (Örn: 05XX XXX XX XX).' 
          : 'Please enter a valid phone number (e.g., 05XX XXX XX XX).'
      });
      return;
    }

    // Validate date
    const selectedDate = new Date(formData.tarih);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (selectedDate < today) {
      setFormStatus({
        submitting: false,
        success: false,
        error: lang === 'tr' 
          ? 'Lütfen geçmiş bir tarih seçmeyiniz.' 
          : 'Please do not select a past date.'
      });
      return;
    }

    setFormStatus({ submitting: false, success: true, error: null });

    const waText = `${t('waTemplateTitle')}\n\n`
      + `${t('waTemplateName')}: ${formData.isim}\n`
      + `${t('waTemplatePhone')}: ${formData.telefon}\n`
      + `${t('waTemplateService')}: ${formData.hizmet}\n`
      + `${t('waTemplateDate')}: ${formData.tarih}\n`
      + `${t('waTemplateTime')}: ${formData.saat}\n`
      + `${t('waTemplateAddress')}: ${formData.adres}`;
    const waLink = `https://wa.me/905459284543?text=${encodeURIComponent(waText)}`;
    window.open(waLink, '_blank');

    setFormData({ isim: '', telefon: '', hizmet: '', tarih: '', saat: '', adres: '' });
  };

  // Toggle FAQ
  const toggleFaq = (index) => {
    if (openFaq === index) {
      setOpenFaq(null);
    } else {
      setOpenFaq(index);
    }
  };

  const services = [
    {
      id: 'leak',
      title: lang === 'tr' ? 'Su Kaçağı Tespiti' : 'Water Leak Detection',
      desc: lang === 'tr' ? 'Termal kameralar ve akustik dinleme cihazları ile evinizi kırmadan noktasal tespit yapıyoruz.' : 'We perform precise pinpoint detection using thermal cameras and acoustic listening devices without breaking anything.',
      icon: <Droplet className="w-8 h-8 text-sky-500" />,
      color: 'border-sky-100 hover:border-sky-300'
    },
    {
      id: 'drain',
      title: lang === 'tr' ? 'Gider Açma' : 'Drain Cleaning',
      desc: lang === 'tr' ? 'Mutfak, banyo ve pimaş giderlerini kırmadan, robot makineler yardımıyla hızla temizliyoruz.' : 'We clean kitchen, bathroom, and waste pipe drains quickly with the help of robotic machines without damage.',
      icon: <Wrench className="w-8 h-8 text-amber-500" />,
      color: 'border-amber-100 hover:border-amber-300'
    },
    {
      id: 'clog',
      title: lang === 'tr' ? 'Tıkanıklık Açma' : 'Clog Clearing',
      desc: lang === 'tr' ? 'Tuvalet, banyo, ana kanalizasyon tıkanıklıklarını özel donanımlarla kısa sürede gideriyoruz.' : 'We clear toilet, bathroom, and main sewer blockages in a short time with special equipment.',
      icon: <Activity className="w-8 h-8 text-red-500" />,
      color: 'border-red-100 hover:border-red-300'
    },
    {
      id: 'pipe',
      title: lang === 'tr' ? 'Su Tesisatı İşleri' : 'Plumbing Installations',
      desc: lang === 'tr' ? 'Sıfırdan temiz ve pis su tesisatı döşeme, yenileme ve komple daire tesisat tadilatı.' : 'Clean and waste water plumbing installation from scratch, pipe renewal, and complete apartment plumbing renovation.',
      icon: <Flame className="w-8 h-8 text-orange-500" />,
      color: 'border-orange-100 hover:border-orange-300'
    },
    {
      id: 'toilet',
      title: lang === 'tr' ? 'Klozet Tamir ve Onarım' : 'Toilet Repair & Maintenance',
      desc: lang === 'tr' ? 'Sızdıran rezervuar iç takımlarının değişimi, klozet montajı ve tıkanıklık çözümleri.' : 'Replacement of leaking cistern internals, toilet installation, and blockage solutions.',
      icon: <ShieldCheck className="w-8 h-8 text-emerald-500" />,
      color: 'border-emerald-100 hover:border-emerald-300'
    },
    {
      id: 'faucet',
      title: lang === 'tr' ? 'Musluk & Batarya Değişimi' : 'Faucet & Tap Replacement',
      desc: lang === 'tr' ? 'Sızdıran musluk, vana ve bataryaların garantili tamiri ve yeni montaj işlemleri.' : 'Guaranteed repair and new installation of taps, valves, and bathroom/kitchen faucets.',
      icon: <Sparkles className="w-8 h-8 text-sky-500" />,
      color: 'border-sky-100 hover:border-sky-300'
    },
    {
      id: 'heater',
      title: lang === 'tr' ? 'Petek Temizliği' : 'Radiator Cleaning',
      desc: lang === 'tr' ? 'Özel makine ve ilaçlarla petek ve tesisat içindeki kireç, çamur ve tortuları temizliyoruz.' : 'We clean limescale, sludge, and sediment inside radiators and pipes with special machines and chemicals.',
      icon: <Compass className="w-8 h-8 text-orange-500" />,
      color: 'border-orange-100 hover:border-orange-300'
    },
    {
      id: 'renovation',
      title: lang === 'tr' ? 'Banyo Yenileme & Montaj' : 'Bathroom Renovation & Install',
      desc: lang === 'tr' ? 'Klozet, duşakabin, lavabo montajı ve banyo sıhhi tesisat alt yapısının sıfırdan yapılması.' : 'Installation of toilet, shower cabin, washbasin, and plumbing infrastructure of bathrooms from scratch.',
      icon: <Wrench className="w-8 h-8 text-emerald-500" />,
      color: 'border-emerald-100 hover:border-emerald-300'
    }
  ];

  const faqs = [
    {
      q: lang === 'tr' ? 'Su kaçağı tespiti sırasında kırma dökme oluyor mu?' : 'Is there any breaking or damage during leak detection?',
      a: lang === 'tr' ? 'Hayır, en son teknoloji ürünü termal kamera ve akustik dinleme cihazları kullanarak sızıntının kaynağını kırmadan, noktasal olarak tespit ediyoruz.' : 'No, we detect the source of the leak precisely using state-of-the-art thermal cameras and acoustic devices without breaking anything.'
    },
    {
      q: lang === 'tr' ? 'Randevu sonrası ne kadar sürede geliyorsunuz?' : 'How long does it take for you to arrive after booking?',
      a: lang === 'tr' ? 'Belirlediğiniz randevu saatinde tam zamanında adreste oluyoruz. Acil durumlarda (su baskını vb.) 30 dakika içerisinde adresinize ulaşıyoruz.' : 'We arrive exactly at the appointment time you specify. In emergencies (flooding, etc.), we reach your address within 30 minutes.'
    },
    {
      q: lang === 'tr' ? 'Petek temizliği ne kadar sürer?' : 'How long does radiator cleaning take?',
      a: lang === 'tr' ? 'Daire büyüklüğüne ve petek sayısına bağlı olarak ortalama bir dairenin petek temizliği 1.5 - 2 saat sürmektedir. İşlem sırasında eviniz kesinlikle kirletilmez.' : 'Depending on the apartment size and radiator count, it takes on average 1.5 - 2 hours. Your home is absolutely not dirtied during the process.'
    }
  ];

  const pageContent = SERVICE_PAGES_CONTENT[activePage] ? SERVICE_PAGES_CONTENT[activePage][lang] : null;
  const activeFaqs = activePage === 'main' ? faqs : (pageContent ? pageContent.faqs : []);

  // Sync page FAQ Schema (JSON-LD)
  useEffect(() => {
    const existingFaqSchema = document.getElementById('faq-jsonld');
    if (existingFaqSchema) {
      existingFaqSchema.remove();
    }

    if (activeFaqs && activeFaqs.length > 0) {
      const schemaData = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": activeFaqs.map(faq => ({
          "@type": "Question",
          "name": faq.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.a
          }
        }))
      };

      const script = document.createElement('script');
      script.id = 'faq-jsonld';
      script.type = 'application/ld+json';
      script.innerHTML = JSON.stringify(schemaData);
      document.head.appendChild(script);
    }

    return () => {
      const script = document.getElementById('faq-jsonld');
      if (script) {
        script.remove();
      }
    };
  }, [lang, activePage, activeFaqs]);

  // Sync page Breadcrumb Schema (JSON-LD)
  useEffect(() => {
    const existingBreadcrumbSchema = document.getElementById('breadcrumb-jsonld');
    if (existingBreadcrumbSchema) {
      existingBreadcrumbSchema.remove();
    }

    if (activePage !== 'main' && pageContent) {
      const schemaData = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": lang === 'tr' ? 'Ana Sayfa' : 'Home',
            "item": "https://www.atom-tesisat.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": pageContent.title,
            "item": `https://www.atom-tesisat.com${getPagePath(activePage)}`
          }
        ]
      };

      const script = document.createElement('script');
      script.id = 'breadcrumb-jsonld';
      script.type = 'application/ld+json';
      script.innerHTML = JSON.stringify(schemaData);
      document.head.appendChild(script);
    }

    return () => {
      const script = document.getElementById('breadcrumb-jsonld');
      if (script) {
        script.remove();
      }
    };
  }, [lang, activePage, pageContent]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 antialiased font-sans">
      
      {/* Header component */}
      <Header 
        lang={lang}
        setLang={setLang}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        getNavHref={getNavHref}
        t={t}
      />

      <main className="flex-grow">
        {activePage === 'main' ? (
        <>
          {/* Hero Section */}
          <section className="relative pt-32 pb-24 md:pt-40 md:pb-36 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 text-white overflow-hidden">
            <div className="absolute top-1/4 left-10 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl"></div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="grid md:grid-cols-12 gap-12 items-center">
                
                {/* Left Info Column */}
                <div className="md:col-span-7 space-y-6 text-left">
                  <div className="inline-flex items-center space-x-2 bg-orange-500/10 text-orange-400 px-3 py-1 rounded-full text-sm font-semibold border border-orange-500/20">
                    <Sparkles className="w-4 h-4" />
                    <span>{t('emergencyBadge')}</span>
                  </div>
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
                    {t('heroTitle1')} <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                      {t('heroTitle2')}
                    </span> {t('heroTitle3')}
                  </h1>
                  <p className="text-lg text-slate-300 max-w-xl">
                    {t('heroSubtitle')}
                  </p>
                  
                  {/* Call to Actions */}
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 pt-2">
                    <a 
                      href="#randevu" 
                      className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-2xl font-bold text-center shadow-lg shadow-orange-950/20 transition-all hover:-translate-y-0.5"
                    >
                      {t('heroBtnBook')}
                    </a>
                    <a 
                      href="https://wa.me/905459284543?text=Merhaba,%20acil%20tesisat%20hizmetine%20ihtiyac%C4%B1m%20var." 
                      target="_blank" 
                      rel="noreferrer"
                      className="flex items-center justify-center space-x-2 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-2xl font-bold text-center shadow-lg transition-all hover:-translate-y-0.5"
                    >
                      <MessageSquare className="w-5 h-5" />
                      <span>{t('heroBtnChat')}</span>
                    </a>
                  </div>

                  {/* Service Badges */}
                  <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-800">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 rounded-full bg-sky-400"></div>
                      <span className="text-xs sm:text-sm text-slate-400 font-medium">{t('badgeFast')}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 rounded-full bg-orange-400"></div>
                      <span className="text-xs sm:text-sm text-slate-400 font-medium">{t('badgeNoDamage')}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                      <span className="text-xs sm:text-sm text-slate-400 font-medium">{t('badgeSupport')}</span>
                    </div>
                  </div>
                </div>

                {/* Right Column - Small Premium Plumber Photo */}
                <div className="md:col-span-5 hidden lg:flex justify-center relative">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl"></div>
                  <div className="relative max-w-[260px] rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-800 bg-slate-900">
                    <img 
                      src="/plumber.webp" 
                      alt="Atom Tesisat - Atom Tesisat" 
                      width="260"
                      height="325"
                      className="w-full h-auto object-cover object-top aspect-[4/5] transform hover:scale-102 transition-transform duration-500"
                    />
                    <div className="absolute bottom-3 left-3 right-3 bg-slate-950/90 backdrop-blur-md px-3 py-2 rounded-xl border border-slate-800 flex items-center justify-between text-white">
                      <div className="text-left">
                        <span className="block text-[11px] font-bold text-white leading-tight">Atom Tesisat</span>
                        <span className="block text-[9px] text-slate-400">{t('ustaActive')}</span>
                      </div>
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Hakkımızda Section */}
          <section id="hakkimizda" className="py-24 bg-white scroll-mt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-12 gap-12 items-center">
                
                {/* Left Column - Text */}
                <div className="lg:col-span-7 space-y-6 text-left">
                  <div className="inline-flex items-center space-x-2 bg-orange-500/10 text-orange-600 px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase">
                    <span>{t('aboutBadge')}</span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
                    {t('aboutTitle1')} <br />
                    <span className="text-orange-500">{t('aboutTitle2')}</span> {t('aboutTitle3')}
                  </h2>
                  <p className="text-slate-600 leading-relaxed text-base">
                    {t('aboutText1')}
                  </p>
                  <p className="text-slate-600 leading-relaxed text-base">
                    {t('aboutText2')}
                  </p>

                  {/* Trust Badges */}
                  <div className="grid sm:grid-cols-3 gap-6 pt-4">
                    <div className="space-y-2">
                      <div className="w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center text-orange-500 font-bold">✓</div>
                      <h3 className="font-bold text-slate-900 text-sm">{t('badgeGuaranteed')}</h3>
                      <p className="text-xs text-slate-600">{t('badgeGuaranteedDesc')}</p>
                    </div>
                    <div className="space-y-2">
                      <div className="w-10 h-10 rounded-lg bg-sky-50 flex items-center justify-center text-sky-500 font-bold">🛠️</div>
                      <h3 className="font-bold text-slate-900 text-sm">{t('badgePrecise')}</h3>
                      <p className="text-xs text-slate-600">{t('badgePreciseDesc')}</p>
                    </div>
                    <div className="space-y-2">
                      <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-500 font-bold">7/24</div>
                      <h3 className="font-bold text-slate-900 text-sm">{t('badgeEmergency')}</h3>
                      <p className="text-xs text-slate-600">{t('badgeEmergencyDesc')}</p>
                    </div>
                  </div>
                </div>

                {/* Right Column - Visual/Feature Box */}
                <div className="lg:col-span-5">
                  <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 space-y-6 relative overflow-hidden text-left">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 rounded-full blur-2xl"></div>
                    <h3 className="text-lg font-bold text-slate-900">{t('whyTitle')}</h3>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <span className="w-5 h-5 rounded-full bg-orange-500 text-white flex items-center justify-center text-xs mt-0.5 font-bold">✓</span>
                        <div>
                          <h4 className="font-semibold text-slate-900 text-sm">{t('why1Title')}</h4>
                          <p className="text-xs text-slate-600">{t('why1Desc')}</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <span className="w-5 h-5 rounded-full bg-orange-500 text-white flex items-center justify-center text-xs mt-0.5 font-bold">✓</span>
                        <div>
                          <h4 className="font-semibold text-slate-900 text-sm">{t('why2Title')}</h4>
                          <p className="text-xs text-slate-600">{t('why2Desc')}</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <span className="w-5 h-5 rounded-full bg-orange-500 text-white flex items-center justify-center text-xs mt-0.5 font-bold">✓</span>
                        <div>
                          <h4 className="font-semibold text-slate-900 text-sm">{t('why3Title')}</h4>
                          <p className="text-xs text-slate-600">{t('why3Desc')}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Hizmetlerimiz Section */}
          <section id="hizmetlerimiz" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center scroll-mt-20">
            <div className="max-w-3xl mx-auto space-y-4 mb-16">
              <div className="inline-flex items-center space-x-2 bg-orange-500/10 text-orange-600 px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase">
                <span>{t('servicesBadge')}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
                {t('servicesTitle')}
              </h2>
              <p className="text-slate-500 text-base sm:text-lg">
                {t('servicesSubtitle')}
              </p>
            </div>

            {/* Cards Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service) => (
                <div 
                  key={service.id}
                  className={`bg-white rounded-3xl p-6 text-left border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between ${service.color}`}
                >
                  <div className="space-y-4">
                    <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center">
                      {service.icon}
                    </div>
                    <h3 className="text-lg font-bold text-slate-900">{service.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{service.desc}</p>
                  </div>
                  <div className="pt-6 mt-auto">
                    <a 
                      href="#randevu" 
                      onClick={() => setFormData({ ...formData, hizmet: service.title })}
                      className="inline-flex items-center text-xs font-bold text-orange-500 hover:text-orange-600 hover:underline"
                    >
                      {t('servicesLink')}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </>
      ) : (
        pageContent && (
          <>
            {/* Dedicated Hero Section */}
            <section className="relative pt-32 pb-24 md:pt-40 md:pb-36 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 text-white overflow-hidden">
              <div className="absolute top-1/4 left-10 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl"></div>
              
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
                {/* Breadcrumbs */}
                <nav className="flex justify-center items-center text-xs font-semibold text-slate-400 space-x-2 pb-2 uppercase tracking-wider" aria-label="Breadcrumb">
                  <a href={getNavHref('home')} className="hover:text-white transition-colors">{t('home')}</a>
                  <span>/</span>
                  <span className="text-orange-500">{pageContent.title}</span>
                </nav>

                <div className="inline-flex items-center space-x-2 bg-orange-500/10 text-orange-400 px-3 py-1 rounded-full text-sm font-semibold border border-orange-500/20 mx-auto">
                  <Sparkles className="w-4 h-4" />
                  <span>{t('emergencyBadge')}</span>
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight max-w-4xl mx-auto">
                  {pageContent.title}
                </h1>
                <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
                  {pageContent.subtitle}
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4 pt-4">
                  <a 
                    href="#randevu" 
                    className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-2xl font-bold text-center shadow-lg transition-all hover:-translate-y-0.5 w-full sm:w-auto"
                  >
                    {t('heroBtnBook')}
                  </a>
                  <a 
                    href="https://wa.me/905459284543?text=Merhaba,%20acil%20tesisat%20hizmetine%20ihtiyac%C4%B1m%20var." 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center justify-center space-x-2 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-2xl font-bold text-center shadow-lg transition-all hover:-translate-y-0.5 w-full sm:w-auto"
                  >
                    <MessageSquare className="w-5 h-5" />
                    <span>{t('heroBtnChat')}</span>
                  </a>
                </div>
              </div>
            </section>

            {/* Dedicated Service Workflow Section */}
            <section className="py-24 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl font-extrabold text-slate-900 mb-16">{pageContent.workflowTitle}</h2>
                <div className="grid md:grid-cols-3 gap-8">
                  {pageContent.steps.map((step, idx) => (
                    <div key={idx} className="bg-slate-50 border border-slate-100 rounded-3xl p-8 text-left space-y-4 shadow-sm hover:shadow-md transition-all duration-300">
                      <div className="w-12 h-12 rounded-xl bg-orange-500/10 text-orange-500 font-bold flex items-center justify-center text-lg">
                        {idx + 1}
                      </div>
                      <h3 className="text-xl font-bold text-slate-900">{step.title}</h3>
                      <p className="text-slate-600 text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Other Services Internal Linking Links */}
            <section className="py-16 bg-slate-50 border-t border-slate-100 text-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-8">
                  {lang === 'tr' ? 'Diğer Tesisat Hizmetlerimiz' : 'Our Other Plumbing Services'}
                </h2>
                <div className="flex flex-wrap justify-center gap-4">
                  {Object.keys(SERVICE_PAGES_CONTENT).map((key) => {
                    if (key === activePage) return null;
                    const path = getPagePath(key);
                    const label = SERVICE_PAGES_CONTENT[key][lang].title;
                    return (
                      <a 
                        key={key} 
                        href={`${path}?lang=${lang}`}
                        className="px-6 py-3 bg-white border border-slate-200 hover:border-orange-500 text-slate-700 hover:text-orange-500 rounded-2xl font-semibold shadow-sm transition-all duration-300"
                      >
                        {label}
                      </a>
                    );
                  })}
                </div>
              </div>
            </section>
          </>
        )
      )}
      </main>

      {/* Appointment Form Component */}
      <AppointmentForm 
        formData={formData}
        setFormData={setFormData}
        formStatus={formStatus}
        handleFormChange={handleFormChange}
        handleFormSubmit={handleFormSubmit}
        services={services}
        t={t}
        lang={lang}
      />

      {/* FAQ Accordion Component */}
      <FAQAccordion 
        activeFaqs={activeFaqs}
        openFaq={openFaq}
        toggleFaq={toggleFaq}
        lang={lang}
        t={t}
      />

      {/* Footer Component */}
      <Footer 
        lang={lang}
        t={t}
        showCookieBanner={showCookieBanner}
        setShowCookieBanner={setShowCookieBanner}
        showCookiePolicyModal={showCookiePolicyModal}
        setShowCookiePolicyModal={setShowCookiePolicyModal}
        handleAcceptCookies={handleAcceptCookies}
        handleRejectCookies={handleRejectCookies}
      />

      {/* WhatsAppWidget Chatbot Component */}
      <WhatsAppWidget 
        lang={lang}
        t={t}
      />

      {/* Mobile Sticky Call Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/90 backdrop-blur-md border-t border-slate-200/60 p-3 md:hidden flex items-center justify-between gap-3 shadow-[0_-4px_12px_rgba(0,0,0,0.05)]">
        <a 
          href="tel:05459284543" 
          className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 px-4 rounded-2xl flex items-center justify-center space-x-2 shadow-lg shadow-emerald-600/20 active:scale-98 transition-all whatsapp-pulse"
        >
          <Phone className="w-5 h-5 animate-pulse" />
          <span>Atom Tesisat'yı Ara (7/24)</span>
        </a>
      </div>

    </div>
  );
}

export default App;
