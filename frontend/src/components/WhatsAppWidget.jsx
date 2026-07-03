import React from 'react';

export default function WhatsAppWidget({ lang, t }) {
  const waUrl = `https://wa.me/905459284543?text=${encodeURIComponent(
    lang === 'tr' 
      ? 'Merhaba Atom Tesisat, tesisat hizmeti almak istiyorum.' 
      : 'Hello Master Koksal, I would like to request plumbing service.'
  )}`;

  return (
    <a 
      href={waUrl}
      target="_blank" 
      rel="noreferrer"
      aria-label={lang === 'tr' ? 'WhatsApp ile İletişime Geçin' : 'Contact us on WhatsApp'}
      className="fixed bottom-24 md:bottom-6 left-6 z-40 bg-emerald-600 hover:bg-emerald-500 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-2xl hover:scale-105 active:scale-95 transition-all cursor-pointer border border-emerald-500/20"
      title={lang === 'tr' ? 'WhatsApp ile İletişime Geçin' : 'Contact us on WhatsApp'}
    >
      <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.458L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.623-1.023-5.09-2.885-6.948C16.59 2.001 14.12 1.002 11.5 1.002c-5.448 0-9.873 4.372-9.877 9.802-.001 1.73.457 3.41 1.33 4.927l-.988 3.6 3.689-.96zm11.536-5.836c-.278-.139-1.643-.807-1.896-.899-.253-.092-.438-.139-.623.139-.184.277-.715.899-.876 1.083-.162.184-.323.207-.601.069-.278-.139-1.173-.43-2.235-1.373-.826-.732-1.383-1.637-1.545-1.914-.162-.277-.017-.427.122-.565.125-.124.278-.323.417-.485.139-.161.185-.277.278-.461.092-.185.046-.347-.023-.485-.069-.139-.623-1.495-.853-2.05-.224-.537-.47-.463-.646-.472-.167-.008-.36-.01-.554-.01-.194 0-.51.073-.777.365-.268.291-1.02 1.002-1.02 2.441 0 1.439 1.047 2.827 1.192 3.023.146.196 2.059 3.16 4.986 4.417.696.3 1.239.479 1.662.612.701.222 1.338.191 1.841.117.561-.083 1.643-.668 1.871-1.28.228-.612.228-1.137.16-1.246-.07-.11-.253-.185-.531-.324z"/>
      </svg>
    </a>
  );
}
