import React from 'react';
import { Phone, Menu, X } from 'lucide-react';

export default function Header({
  lang,
  setLang,
  mobileMenuOpen,
  setMobileMenuOpen,
  getNavHref,
  t
}) {
  return (
    <header className="fixed top-0 left-0 w-full z-40 glass-header shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a 
            href={getNavHref('home')} 
            className="flex items-center space-x-2.5 cursor-pointer hover:opacity-90 transition-opacity"
          >
            <img 
              src="/logo.webp" 
              alt="Atom Tesisat Logo" 
              width="44"
              height="44"
              className="w-11 h-11 rounded-xl shadow-md border border-slate-100 object-cover"
            />
            <div>
              <span className="text-xl font-bold text-slate-900 tracking-tight">ATOM</span>
              <span className="text-xl font-semibold text-orange-500 tracking-tight"> TESİSAT</span>
            </div>
          </a>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href={getNavHref('home')} className="text-sm font-medium text-slate-600 hover:text-orange-500 transition-colors">{t('home')}</a>
            <a href={getNavHref('hakkimizda')} className="text-sm font-medium text-slate-600 hover:text-orange-500 transition-colors">{t('about')}</a>
            <a href={getNavHref('hizmetlerimiz')} className="text-sm font-medium text-slate-600 hover:text-orange-500 transition-colors">{t('services')}</a>
            <a href={getNavHref('sss')} className="text-sm font-medium text-slate-600 hover:text-orange-500 transition-colors">{t('faq')}</a>
            <a href={getNavHref('randevu')} className="text-sm font-medium text-slate-600 hover:text-orange-500 transition-colors">{t('book')}</a>
            <a href={getNavHref('iletisim')} className="text-sm font-medium text-slate-600 hover:text-orange-500 transition-colors">{t('contact')}</a>
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Language Selector */}
            <div className="flex items-center space-x-1.5 border-r border-slate-200 pr-4 mr-1">
              <button 
                onClick={() => setLang('tr')} 
                className={`text-[10px] font-extrabold px-2 py-1 rounded-md transition-all cursor-pointer ${lang === 'tr' ? 'bg-orange-500 text-white' : 'bg-slate-100 text-slate-500 hover:bg-slate-200'}`}
              >
                TR
              </button>
              <button 
                onClick={() => setLang('en')} 
                className={`text-[10px] font-extrabold px-2 py-1 rounded-md transition-all cursor-pointer ${lang === 'en' ? 'bg-orange-500 text-white' : 'bg-slate-100 text-slate-500 hover:bg-slate-200'}`}
              >
                EN
              </button>
            </div>

            <div className="flex items-center space-x-3.5 border-r border-slate-200 pr-4 mr-1">
              <a 
                href="https://www.instagram.com/atom.tesisat/" 
                target="_blank" 
                rel="noreferrer"
                aria-label="Instagram"
                className="text-slate-400 hover:text-orange-500 transition-colors"
                title="Instagram"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
                className="text-slate-400 hover:text-orange-500 transition-colors"
                title="YouTube"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                </svg>
              </a>
            </div>
            <a 
              href="tel:05459284543" 
              aria-label="Telefonla Arayın"
              className="flex items-center space-x-2 bg-slate-100 hover:bg-slate-200 text-slate-700 px-4 py-2 rounded-xl text-sm font-semibold transition-all"
            >
              <Phone className="w-4 h-4 text-orange-500" />
              <span>0545 928 45 43</span>
            </a>
            <a 
              href={getNavHref('randevu')} 
              className="bg-orange-600 hover:bg-orange-700 text-white px-5 py-2.5 rounded-xl text-sm font-semibold shadow-md shadow-orange-100/10 transition-all hover:-translate-y-0.5"
            >
              {t('book')}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? (lang === 'tr' ? 'Menüyü Kapat' : 'Close Menu') : (lang === 'tr' ? 'Menüyü Aç' : 'Open Menu')}
              className="p-2 rounded-lg text-slate-600 hover:text-orange-500 focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 px-4 pt-4 pb-6 space-y-3 shadow-lg">
          {/* Mobile Language Selector */}
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <span className="text-sm font-semibold text-slate-500">Language / Dil:</span>
            <div className="flex items-center space-x-1.5">
              <button 
                onClick={() => { setLang('tr'); setMobileMenuOpen(false); }} 
                className={`text-xs font-extrabold px-3 py-1.5 rounded-lg transition-all ${lang === 'tr' ? 'bg-orange-500 text-white' : 'bg-slate-100 text-slate-500'}`}
              >
                TR
              </button>
              <button 
                onClick={() => { setLang('en'); setMobileMenuOpen(false); }} 
                className={`text-xs font-extrabold px-3 py-1.5 rounded-lg transition-all ${lang === 'en' ? 'bg-orange-500 text-white' : 'bg-slate-100 text-slate-500'}`}
              >
                EN
              </button>
            </div>
          </div>

          <a 
            href={getNavHref('home')} 
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-orange-500"
          >
            {t('home')}
          </a>
          <a 
            href={getNavHref('hakkimizda')} 
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-orange-500"
          >
            {t('about')}
          </a>
          <a 
            href={getNavHref('hizmetlerimiz')} 
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-orange-500"
          >
            {t('services')}
          </a>
          <a 
            href={getNavHref('sss')} 
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-orange-500"
          >
            {t('faq')}
          </a>
          <a 
            href={getNavHref('randevu')} 
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-orange-500"
          >
            {t('book')}
          </a>
          <a 
            href={getNavHref('iletisim')} 
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-orange-500"
          >
            {t('contact')}
          </a>
          <div className="pt-4 flex flex-col space-y-2">
            <div className="flex items-center justify-center space-x-6 py-2 border-b border-slate-100 mb-2">
              <a 
                href="https://www.instagram.com/atom.tesisat/" 
                target="_blank" 
                rel="noreferrer"
                className="text-slate-400 hover:text-orange-500 transition-colors flex items-center space-x-1.5 text-sm font-medium"
                title="Instagram"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
                <span>Instagram</span>
              </a>
              <a 
                href="https://www.youtube.com/@atomtesisat/shorts" 
                target="_blank" 
                rel="noreferrer"
                className="text-slate-400 hover:text-orange-500 transition-colors flex items-center space-x-1.5 text-sm font-medium"
                title="YouTube"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                </svg>
                <span>YouTube</span>
              </a>
            </div>
            <a 
              href="tel:05459284543" 
              className="flex items-center justify-center space-x-2 bg-slate-100 p-3 rounded-xl text-slate-700 font-semibold"
            >
              <Phone className="w-5 h-5 text-orange-500" />
              <span>0545 928 45 43</span>
            </a>
            <a 
              href="#randevu" 
              onClick={() => setMobileMenuOpen(false)}
              className="bg-orange-500 text-center text-white p-3 rounded-xl font-semibold shadow-md"
            >
              {t('book')}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
