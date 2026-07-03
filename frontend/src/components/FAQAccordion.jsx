import React from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';

export default function FAQAccordion({
  activeFaqs,
  openFaq,
  toggleFaq,
  lang,
  t
}) {
  return (
    <section id="sss" className="py-24 max-w-4xl mx-auto px-4 sm:px-6 scroll-mt-20 text-center">
      <div className="space-y-4 mb-16">
        <div className="inline-flex items-center space-x-2 bg-sky-500/10 text-sky-600 px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase">
          <span>{lang === 'tr' ? 'Merak Edilenler' : 'Frequently Asked'}</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">{t('faqTitle')}</h2>
        <p className="text-slate-600 text-base max-w-lg mx-auto">
          {lang === 'tr' 
            ? 'Hizmet süreçlerimiz ve tesisat sorunları hakkında müşterilerimizin en çok sorduğu soruları cevapladık.'
            : 'We answered the questions most frequently asked by our customers about our service processes and plumbing problems.'}
        </p>
      </div>

      <div className="space-y-4 text-left">
        {activeFaqs.map((faq, index) => (
          <div 
            key={index}
            className="bg-white rounded-2xl border border-slate-100 shadow-xs overflow-hidden transition-all hover:border-slate-200"
          >
            <button 
              onClick={() => toggleFaq(index)}
              aria-expanded={openFaq === index}
              aria-label={faq.q}
              className="w-full flex items-center justify-between p-6 focus:outline-none cursor-pointer"
            >
              <span className="font-bold text-slate-800 text-base sm:text-lg pr-4">{faq.q}</span>
              <span className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400">
                {openFaq === index ? <ChevronUp className="w-5 h-5 text-orange-500" /> : <ChevronDown className="w-5 h-5" />}
              </span>
            </button>
            {openFaq === index && (
              <div className="px-6 pb-6 pt-1 border-t border-slate-50">
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">{faq.a}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
